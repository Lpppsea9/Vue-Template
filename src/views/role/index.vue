<template>
	<div>
		<el-form label-width="100px">
			<el-form-item>
				<el-button type="primary" @click="onAddRole">新增角色</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="roleList" border style="width: 100%">
			<el-table-column prop="roleId" label="角色id" width="180px"></el-table-column>
			<el-table-column prop="roleName" label="角色名称" width="180px"></el-table-column>
			<el-table-column label="操作">
				<template #default="scope">
					<el-button type="primary" size="small" @click="onChangeAuth(scope.row)">修改权限</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup lang="ts">
import { getRoleList } from '@/api/role';
import router from '@/router';

interface IRole {
	roleId: number; // 角色Id
	roleName: string; // 角色名称
	authority: [];
}
const roleList = ref<IRole[]>([]);

onMounted(() => {
	getRoleList()
		.then((res) => {
			console.log('res', res.data);
			roleList.value = res.data;
		})
		.catch((err) => {});
});

const onAddRole = () => {
	ElMessageBox.prompt('请输入角色名称!', '添加角色', {
		confirmButtonText: '确定',
		cancelButtonText: '取消'
	})
		.then(({ value, action }) => {
			if (value) {
				roleList.value.push({
					roleId: roleList.value.length + 1,
					roleName: value,
					authority: []
				});
				ElMessage({
					type: 'success',
					message: `${value}添加成功`
				});
			}
		})
		.catch((err) => {
			ElMessage({
				type: 'info',
				message: `点击了取消按钮`
			});
		});
};

const onChangeAuth = (row: IRole) => {
	router.push({
		path: 'auth',
		query: {
			id: row.roleId,
			auth: row.authority
		}
	});
};
</script>

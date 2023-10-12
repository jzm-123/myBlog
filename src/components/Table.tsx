import { ProColumns, ProTable } from '@ant-design/pro-components'
import React from 'react'
import styles from './index.module.less'
export default function () {
    const columns: ProColumns<any>[] = [
        {
            title: '应用名称',
            width: 120,
            dataIndex: 'name',
        },]
    const dataSource = [
        {
            name: 'jzm123'
        }
    ]
    return (
        <div>
            <ProTable
            columns={columns}
            dataSource={dataSource}
            rowSelection={{
                alwaysShowAlert: true
            }}
            className={styles['custom-table']}
            rowKey={'name'}>
        </ProTable>
        <ProTable
            columns={columns}
            dataSource={dataSource}
            rowSelection={{
                alwaysShowAlert: true
            }}
            className={styles['custom-second-table']}
            rowKey={'name'}>
        </ProTable>
        </div>
    )
}

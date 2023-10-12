import { ActionType, ModalForm, ProColumns, ProTable } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import React, { useRef, useState } from 'react';

const defaultData: any[] = new Array(3).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: '活动名称活动名称活动名称活动名称',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    option1: 'test656464561',
    option2: 'test5465462',
    option3: 'test5465463',
    option4: 'test5465462',
    option5: 'test5465463',
    option7: 'test5465463',
    option8: 'test5465462',
    option6: 'test5465463',
    option11: 'test5465463',
    option10: 'test5465462',
    option9: 'test5465463',
    option12: 'test5465462',
    option13: 'test5465463',
  };
});

export default () => {
  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(defaultData.map((item) => item.id));
  const [dataSource, setDataSource] = useState<any[]>(
    defaultData
  );
  const columns: ProColumns<any>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      },
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'decs',
      renderFormItem: () => {
        return <Input allowClear={false} className='block w-max'></Input>
      }
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option1',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option2',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option3',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option4',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option5',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option6',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option7',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option8',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option9',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option10',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option11',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option12',
    },
    {
      title: 'field_sadadasdasdasdas',
      dataIndex: 'option13',
    },
    // {
    //   title: '操作',
    //   valueType: 'option',
    // },
  ];

  return (
    <>
      <Button onClick={() => {
        const now =Date.now()
        setDataSource([...dataSource,{id: now}])
        setEditableRowKeys([...editableKeys,now])
      }}>新增</Button>
      {/* <ModalForm
        trigger={<Button>展示</Button>}> */}
        <EditableProTable
          headerTitle="可编辑表格"
          columns={columns}
          actionRef={actionRef}
          rowKey="id"
          scroll={{
            x: true,
          }}
          // dataSource={dataSource}
          value={dataSource}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            record: () => ({
              id: Date.now(),
            }),
          }}
          toolBarRender={() => {
            return [
              <Button
                type="primary"
                key="save"
                onClick={() => {
                  // dataSource 就是当前数据，可以调用 api 将其保存
                  console.log(dataSource);
                }}
              >
                保存数据
              </Button>,
            ];
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            onValuesChange: (record, recordList) => {
              setDataSource(recordList);
            },
            onChange: setEditableRowKeys,
          }}
        />
      {/* </ModalForm> */}
    </>
  );
};
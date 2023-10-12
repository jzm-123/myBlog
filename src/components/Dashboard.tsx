import React, { useEffect, useState } from 'react';
import { Button, RadioChangeEvent } from 'antd';
import { Cascader, Radio } from 'antd';
import styles from './index.module.less'
import { ProTable } from '@ant-design/pro-components';
const App: React.FC = () => {
  return (
    <div >
     <div className={styles['border-test']}>asfasfasfasfasfasda</div>
     <ProTable
     rowSelection={{
      alwaysShowAlert: true
     }} className={styles['custom-table']}></ProTable>
     <ProTable
     rowSelection={{
      alwaysShowAlert: true
     }} className={styles['custom-second-table']}></ProTable>
    </div>
  );
};

export default App;
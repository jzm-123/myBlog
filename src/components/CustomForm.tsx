import { Button,notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { useEffect, useState } from 'react'
import './index.less'
export default function CustomForm() {
  const [num,setNum] = useState<number>(0)
  const [flag,setFlag] = useState<boolean>(true)
  const [api, contextHolder] = notification.useNotification();
  useEffect(()=>{

  },[num])
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement} ${num}`,
      key:'error-modal',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
      btn:<Button onClick={h}>按钮</Button>
    });
  };
  const h = ()=>{
    console.log('h');
    setNum(num+1)
    setFlag(!flag)
    openNotification('bottom')
  }
  return (
    <div>
      {contextHolder}
      <Button onClick={()=>openNotification('bottom')}>消息提醒</Button>
      <Button onClick={()=>{
        setNum(num+1)
        setFlag(!flag)
        openNotification('bottom')
      }}>变化</Button>
    </div>
  )
}
{/* <Modal
open={true}
wrapClassName='ant-test-modal'
closeIcon={<><EditOutlined className=''/><CloseOutlined className='ml-4'/></>}
title={<>
阿萨法发撒飞洒阿萨大大撒旦阿
</>}
><Input readOnly={flag} value={'ddddddd'} style={{border: `${flag ? 'none' : '1px solid #d9d9d9'}`}}></Input>
<EditOutlined className='float-right mt-1'/>
<Button onClick={()=>{
  setFlag(!flag)
}}>测试</Button></Modal> */}

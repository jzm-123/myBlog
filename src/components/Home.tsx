import { useState } from 'react';
import { Select } from 'antd';
//select 滚动
function Home() {
  const defaultOptions = []
  for (let i = 10; i < 36; i++) {
    defaultOptions.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const [options, setOptions] = useState<any[]>(defaultOptions);
  const [loading, setLoading] = useState<boolean>(false);

  // 模拟加载选项的函数，您需要根据实际需求替换为真实的数据获取逻辑
  const loadOptions = () => {
    setLoading(true);

    // 模拟异步加载
    setTimeout(() => {
      const newOptions = generateOptions(options.length + 10);
      setOptions([...options, ...newOptions]);
      setLoading(false);
    }, 1000);
  };

  // 生成选项的示例函数，您需要根据实际需求替换为真实的数据生成逻辑
  const generateOptions = (count: number) => {
    const newOptions = [];
    for (let i = 0; i < count; i++) {
      newOptions.push({ value: i, label: `Option ${i}` });
    }
    return newOptions;
  };

  const handlePopupScroll = (e: any) => {
    // 获取下拉菜单的 DOM 元素
    const popupMenu = e.target;
    // 判断是否滚动到底部
    if (popupMenu.scrollTop + popupMenu.clientHeight >= popupMenu.scrollHeight) {
      // 滚动到底部，加载更多选项
      console.log('更多')
      loadOptions();
    }
  };

  return (
    <Select
      placeholder="Select options"
      mode="multiple"
      onPopupScroll={handlePopupScroll}
      loading={loading}
      options={options}
      style={{ width: '200px' }}
      // listHeight={100}
    >
    </Select>
  );
}

export default Home;

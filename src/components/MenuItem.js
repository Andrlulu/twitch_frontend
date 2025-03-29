import { Menu } from 'antd'
import React from 'react'
//the function of the menuitem is to

function MenuItem({ items }) {
  return items?.map((item) => ( //? is used to check if the items is not null or undefined, which protects the code from crashing.
    <Menu.Item key={item.id}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {`${item.broadcaster_name} - ${item.title}`}
      </a>
    </Menu.Item>
  )
  )
}


export default MenuItem
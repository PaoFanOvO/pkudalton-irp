import Link from 'next/link';

function OtherPage() {
  return (
    <div>
      <h1>其他页面</h1>
      <ul>
        <li>
          <Link href="/comments/1">
            <a>评论区 1</a>
          </Link>
        </li>
        <li>
          <Link href="/comments/2">
            <a>评论区 2</a>
          </Link>
        </li>
        {/* 添加更多的评论区链接 */}
      </ul>
    </div>
  );
}

export default OtherPage;
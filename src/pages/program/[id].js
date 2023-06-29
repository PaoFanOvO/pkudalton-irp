import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './CommentsPage.module.css'; // 导入样式文件

function CommentsPage() {
  const router = useRouter();
  const { id,introduction, description } = router.query;
 
  // 示例：已有的评论列表
  const [comments, setComments] = useState([
    { id: 1, author: '提示', content: '所有科研题目来源于网络仅作参考使用，不建议直接使用给予题目，极其建议作为灵感激发使用。不仅是在初定选题时，在项目中期也可以进行参考，也许会使自己的Project更加specific.评论区可作为临时笔记使用。Good Luck :)' },
  ]);

  // 示例：新评论的表单状态
  const [newComment, setNewComment] = useState({
    author: '',
    content: '',
  });

  // 示例：提交新评论
  const submitComment = (event) => {
    event.preventDefault();
    const { author, content } = newComment;

    // 这里可以将新评论提交到服务器进行处理，例如保存到数据库

    // 添加新评论到评论列表
    const newCommentItem = {
      id: comments.length + 1,
      author: author,
      content: content,
    };
    setComments([...comments, newCommentItem]);

    // 重置新评论的表单
    setNewComment({ author: '', content: '' });
  };


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{id}</h1>
        <p className={styles.jianjie}>简介</p>
        <p className={styles.contentJanjie}>{description}</p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.comment}>评论区</h2>
        <ul className={styles.commentList}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <div className={styles.commentBox}>
                <span className={styles.commentAuthot}>{comment.author}</span>
                <span className={styles.commentContent}>{comment.content}</span>
              </div>

            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        <h2 className={styles.comment}>发表评论</h2>
        <form onSubmit={submitComment}>
          <div>
            <label>作者：</label>
            <input
                className={styles.commentInput}
                type="text"
                value={newComment.author}
                onChange={(event) =>
                    setNewComment({ ...newComment, author: event.target.value })
                }
            />
          </div>
          <div>
            <label>评论内容：</label>
            <textarea
                className={styles.commentTextarea}
                placeholder={'请输入评论内容'}
                value={newComment.content}
                onChange={(event) =>
                    setNewComment({ ...newComment, content: event.target.value })
                }
            ></textarea>
          </div>
          <button type="submit" className={styles.btn}>提交评论</button>
        </form>
      </div>

    </div>
  );
}

export default CommentsPage;

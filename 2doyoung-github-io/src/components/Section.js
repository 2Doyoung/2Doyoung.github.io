import React from 'react';

function Section({ id, title }) {
  return (
    <section id={id} style={{ padding: '100px 0', borderBottom: '1px solid #ccc' }}>
      <h2>{title}</h2>
      <p>내용을 여기에 추가하세요.</p>
    </section>
  );
}

export default Section;
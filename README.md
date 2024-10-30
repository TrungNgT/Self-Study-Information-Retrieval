# Self-Study-Information-Retrieval
Gồm các phần: <br/>
(1) Tìm hiểu ý nghĩa các phép đo, lý thuyết của môn học<br/> 
(2) Triển khai giải thuật được nói đến trong Slide môn học IT4863<br/>
(3) Học cách sử dụng Elasticsearch<br/>
(4) Thực hiện Pet-Project về tìm kiếm thông tin ngữ nghĩa về tình trạng sức khỏe<br/>
<hr/>
Tài liệu môn học:<br/>
[0]. Slide môn học IT4863 - SOICT - HUST<br/>
[1]. An Introduction to Information Retrieval
<hr/>

# 0. Ngày 22/10/2024 (Elasticsearch) Client setup
- Thành phần [client.js](Elasticsearch/client.js) giúp giao tiếp từ client tới server (owned cluster) của Elasticsearch, cổng 9200, authorize bằng username và password, né TLS verifier.
- Tạo chỉ mục (index) và nạp văn bản (đánh chỉ mục tự động) trong tập [index](Elasticsearch/index/)
<hr/>

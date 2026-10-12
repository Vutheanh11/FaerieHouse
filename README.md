# FaerieHouse

Website giới thiệu nhà Faerie, thành viên, hành trình hoạt động và tin tức.

## Chạy tại máy

Yêu cầu Node.js 22.13 trở lên.

```bash
npm ci
npm run dev
```

Kiểm tra bản xuất tĩnh bằng `npm test`. Cấu hình triển khai GitHub Pages nằm trong `.github/workflows/deploy-pages.yml`; bản Render tĩnh nằm trong `render.yaml`.

Nội dung tin tức và popup sự kiện được tải từ API. Có thể đặt `NEXT_PUBLIC_FAERIE_API_URL` trong môi trường build nếu dùng API khác.

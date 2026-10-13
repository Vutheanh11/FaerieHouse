import type { Metadata } from "next";
import FaerieHome from "../faerie-home";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Faerie Quy Nhơn 2026 | Faerie House",
  description: "Khám phá không gian Faerie Quy Nhơn 2026. Thành viên, câu chuyện và tin tức sẽ được cập nhật sau.",
  alternates: { canonical: "/quy-nhon/" },
  openGraph: {
    title: "Faerie Quy Nhơn 2026 | Faerie House",
    description: "Không gian Faerie Quy Nhơn 2026 đang chờ những thành viên và câu chuyện đầu tiên.",
    url: "/quy-nhon/",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary",
    title: "Faerie Quy Nhơn 2026 | Faerie House",
    description: "Không gian Faerie Quy Nhơn 2026 đang chờ những thành viên và câu chuyện đầu tiên.",
  },
  robots: { index: false, follow: true },
};

export default function QuyNhonPage() {
  return <FaerieHome campus="quy-nhon" />;
}

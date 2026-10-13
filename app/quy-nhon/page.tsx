import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Faerie Quy Nhơn 2026 | Faerie House",
  description: "Trang Faerie Quy Nhơn 2026 đang được chuẩn bị.",
  robots: { index: false, follow: true },
};

export default function QuyNhonPage() {
  return (
    <main className="quy-nhon-page">
      <header className="quy-nhon-header">
        <a className="quy-nhon-brand" href="../" aria-label="Về Faerie TP.HCM">FAERIE <span>HOUSE</span></a>
        <span>2026 · QUY NHƠN</span>
      </header>
      <section className="quy-nhon-content" aria-labelledby="quy-nhon-title">
        <p className="quy-nhon-kicker">FAERIE / QUY NHƠN / 2026</p>
        <h1 id="quy-nhon-title">FAERIE<br /><em>QUY NHƠN.</em></h1>
        <p className="quy-nhon-description">Trang của Faerie Quy Nhơn 2026 đang được chuẩn bị. Hình ảnh và thông tin thành viên sẽ được bổ sung sau.</p>
        <a className="quy-nhon-back" href="../">← Về Faerie TP.HCM</a>
      </section>
      <footer className="quy-nhon-footer">ONE HOUSE. MANY STORIES.</footer>
    </main>
  );
}

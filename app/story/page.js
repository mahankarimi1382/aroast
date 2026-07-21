"use client";

import React from "react";
import { SectionHead, BWImage } from "../components/UI";

export default function Story() {
  return (
    <div className="view-anim" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 22px 100px", direction: "rtl", textAlign: "right" }}>
      <SectionHead
        eyebrow="برشته‌کاری قهوه آرُست"
        title="داستان ما، علم ما، فنجان شما"
        sub="درباره سفر ما از یک زیرزمین کوچک در تهران تا تبدیل شدن به مأمن دوستداران قهوه تازه."
      />

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }} className="r-stack">
        <div>
          <h3 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "16px" }}>چرا آرُست متولد شد؟</h3>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "20px" }}>
            نام «آرُست» ترکیبی از حرف آ (آغاز، ایران، آروماتیک) و رُست (برشته‌کاری) است. هدف ما همیشه ساده بوده است: حذف واسطه‌های تجاری طولانی‌مدت که باعث از دست رفتن عطر و طعم واقعی قهوه می‌شوند. قهوه تجاری که ماه‌ها روی قفسه فروشگاه‌ها خاک می‌خورد، بخش عظیمی از اسانس‌های فرار خود را از دست داده است.
          </p>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "20px" }}>
            به همین دلیل ما یک قانون سرسختانه داریم: هیچ دانه‌ای از پیش برای انبار کردن رُست نمی‌شود. هر هفته دانه سبز بر اساس سفارشات دریافتی برشته می‌شود. به این ترتیب، قهوه با حداکثر گاززدایی طبیعی و بهینه در دستان شما قرار می‌گیرد.
          </p>
        </div>
        <div style={{ height: "360px", borderRadius: "var(--radius)", overflow: "hidden" }}>
          <BWImage id="story-about-1" label="دستگاه رُستر صنعتی با درام در حال چرخش" style={{ borderRadius: "var(--radius)" }} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "center", marginTop: "100px" }} className="r-stack">
        <div style={{ height: "360px", borderRadius: "var(--radius)", overflow: "hidden" }} className="r-o2">
          <BWImage id="story-about-2" label="نمونه برداری از دانه‌های قهوه رُست شده" style={{ borderRadius: "var(--radius)" }} />
        </div>
        <div className="r-o1">
          <h3 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "16px" }}>دقت علمی در کنترل طعم</h3>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "20px" }}>
            ما در آرُست هر بچ (Batch) را به دقت مستند می‌کنیم. زمان توسعه رُست، دمای درام، و سرعت جریان هوا توسط نرم‌افزارهای تخصصی ثبت می‌شوند. این کار تضمین می‌کند قهوه «اصیل» یا «ناب» که امروز می‌خرید، طعم ثابت و بی‌نظیر همان قهوه در دفعات بعدی را داشته باشد.
          </p>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: "1.9" }}>
            قهوه برای ما صرفاً یک نوشیدنی نیست، بلکه تلاقی هیجان‌انگیز هنر و شیمی است. ما مفتخریم که این تجربه طعمی را هفتگی به خانه یا کافه شما می‌آوریم.
          </p>
        </div>
      </div>
    </div>
  );
}

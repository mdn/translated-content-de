---
title: Robust
slug: Web/Accessibility/Understanding_WCAG/Robust
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge dazu, wie Sie Ihre Webinhalte so gestalten können, dass sie den Erfolgskriterien des **Robust**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Robust bedeutet, dass Inhalte robust genug sein müssen, damit sie von einer Vielzahl von Benutzeragenten, einschließlich assistiver Technologien, zuverlässig interpretiert werden können. Dies kann im Allgemeinen erreicht werden, indem man Webstandards folgt und [rigoros testet](/de/docs/Learn_web_development/Extensions/Testing).

> [!NOTE]
> Um die W3C-Definitionen für Robust und seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 4: Robust — Inhalte müssen robust genug sein, um von einer Vielzahl von Benutzeragenten, einschließlich assistiver Technologien, zuverlässig interpretiert werden zu können.](https://www.w3.org/TR/WCAG21/#robust)

## Leitfaden 4.1 — Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich assistiver Technologien

Dieser Leitfaden konzentriert sich darauf, Inhalte so kompatibel wie möglich zu machen, nicht nur mit aktuellen Benutzeragenten (z. B. Browsern), sondern auch mit zukünftigen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.1.1 Parsing (A)</td>
      <td>
        <p>
          Inhalte sollten gut strukturiert sein, damit sie erfolgreich von
          Browsern und anderen Benutzeragenten wie Bildschirmlesegeräten geparst werden können.
        </p>
        <p>
          Um dieses Kriterium zu erfüllen, stellen Sie sicher, dass Ihr HTML so
          gültig wie möglich ist. Verwenden Sie den
          <a href="https://validator.w3.org/">W3C-Validator</a>, um Ihr
          Markup zu validieren.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML"
          >Fehlerbehebung bei HTML</a
        >
        für einen praktischen Leitfaden.
      </td>
    </tr>
    <tr>
      <td>4.1.2 Name, Rolle, Wert (A)</td>
      <td>
        <p>
          Der Name und die Rolle von Benutzeroberflächenkomponenten (z. B. Formulareingaben,
          Schaltflächen, Links, etc.) sollten programmatisch ermittelbar sein.
        </p>
        <p>
          Wenn semantische Elemente korrekt für ihren vorgesehenen Zweck verwendet werden,
          sollte dieses Kriterium automatisch erfüllt werden. Beim Skripten benutzerdefinierter
          Komponenten müssen Sie WAI-ARIA-Rollen und andere Funktionen verwenden, um sicherzustellen, dass Ihre Steuerelemente interpretiert und wie beabsichtigt verwendet werden können, z. B. nicht nur von sehenden Mausbenutzern, sondern auch von
          Bildschirmleser-Benutzern, reinen Tastaturnutzern usw.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >
        und
        <a href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics"
          >Grundlagen von WAI-ARIA</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        4.1.3 Statusnachrichten (AA) <em
          ><a
            href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            rel="noopener"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Nutzer von assistiver Technologie werden auf neue Statusnachrichten,
          die der Seite hinzugefügt wurden, aufmerksam gemacht.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
          >Verständnis von Statusnachrichten</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Leitfaden 4.1: Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich assistiver Technologien.](https://www.w3.org/TR/WCAG21/#compatible)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. Robust

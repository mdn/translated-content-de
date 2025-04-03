---
title: Robuste
slug: Web/Accessibility/Guides/Understanding_WCAG/Robust
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Artikel bietet praktische Hinweise, wie Sie Ihre Webinhalte so gestalten, dass sie den Erfolgskriterien des **Robust**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Robust besagt, dass Inhalte robust genug sein müssen, damit sie von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, zuverlässig interpretiert werden können. Dies lässt sich im Allgemeinen durch die Befolgung von Webstandards und [gründliches Testen](/de/docs/Learn_web_development/Extensions/Testing) erreichen.

> [!NOTE]
> Die W3C-Definitionen für Robust und dessen Richtlinien und Erfolgskriterien finden Sie unter [Prinzip 4: Robust — Inhalte müssen robust genug sein, damit sie von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, zuverlässig interpretiert werden können.](https://www.w3.org/TR/WCAG21/#robust)

## Richtlinie 4.1 — Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich unterstützender Technologien

Diese Richtlinie konzentriert sich darauf, Inhalte so kompatibel wie möglich zu gestalten, nicht nur mit aktuellen Benutzeragenten (z. B. Browsern), sondern auch mit zukünftigen.

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
          Inhalte sollten gut strukturiert sein, damit sie von Browsern und anderen Benutzeragenten wie Bildschirmlesegeräten erfolgreich geparst werden können.
        </p>
        <p>
          Um dieses Kriterium zu erfüllen, stellen Sie sicher, dass Ihr HTML so gültig wie möglich ist. Verwenden Sie den
          <a href="https://validator.w3.org/">W3C-Validator</a>, um Ihr Markup zu validieren.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML"
          >Debugging HTML</a
        >
        für einen praktischen Leitfaden.
      </td>
    </tr>
    <tr>
      <td>4.1.2 Name, Rolle, Wert (A)</td>
      <td>
        <p>
          Der Name und die Rolle von Benutzeroberflächenkomponenten (z. B. Formulareingaben, Schaltflächen, Links usw.) sollten programmatisch bestimmbar sein.
        </p>
        <p>
          Wenn Sie semantische Elemente korrekt für ihren vorgesehenen Zweck verwenden, sollte dieses Kriterium automatisch erfüllt werden. Bei der Skripterstellung benutzerdefinierter Komponenten müssen Sie WAI-ARIA-Rollen und andere Funktionen verwenden, um sicherzustellen, dass Ihre Steuerelemente so interpretiert und genutzt werden können, wie beabsichtigt, z. B. nicht nur von sehenden Mausbenutzern, sondern auch von Nutzern von Bildschirmlesegeräten und Tastaturnutzern.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >
        und
        <a href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics"
          >WAI-ARIA Grundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        4.1.3 Statusmeldungen (AA) <em
          ><a
            href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            rel="noopener"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Benutzer von unterstützender Technologie werden über neue Statusmeldungen informiert, die zur Seite hinzugefügt wurden.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
          >Verständnis von Statusmeldungen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 4.1: Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich unterstützender Technologien.](https://www.w3.org/TR/WCAG21/#compatible)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. Robust

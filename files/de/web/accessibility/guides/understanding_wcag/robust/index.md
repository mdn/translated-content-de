---
title: Robust
slug: Web/Accessibility/Guides/Understanding_WCAG/Robust
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen können, dass sie die Erfolgskriterien erfüllen, die im **Robust**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 festgelegt sind. Robust bedeutet, dass Inhalte so robust sein müssen, dass sie von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, zuverlässig interpretiert werden können. Dies kann im Allgemeinen durch die Einhaltung von Webstandards und [rigoroses Testen](/de/docs/Learn_web_development/Extensions/Testing) erreicht werden.

> [!NOTE]
> Um die W3C-Definitionen für Robust und seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 4: Robust — Inhalte müssen so robust sein, dass sie von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, zuverlässig interpretiert werden können.](https://w3c.github.io/wcag/guidelines/22/#robust)

## Richtlinie 4.1 — Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich unterstützender Technologien

Diese Richtlinie konzentriert sich darauf, Inhalte so kompatibel wie möglich zu gestalten, nicht nur mit aktuellen Benutzeragenten (z. B. Browsern), sondern auch mit zukünftigen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.1.1 Parsing (A)</td>
      <td>
        <p>
          Inhalte sollten gut strukturiert sein, damit sie von Browsern und anderen Benutzeragenten wie Screenreadern erfolgreich geparst werden können.
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
          Der Name und die Rolle von Benutzeroberflächenkomponenten (z. B. Formulareingaben, Buttons, Links usw.) sollten programmatisch bestimmbar sein.
        </p>
        <p>
          Wenn semantische Elemente korrekt für ihren vorgesehenen Zweck verwendet werden, sollte dieses Kriterium automatisch erfüllt sein. Beim Skripten benutzerdefinierter Komponenten müssen Sie WAI-ARIA-Rollen und andere Funktionen nutzen, um sicherzustellen, dass Ihre Steuerelemente interpretiert und wie vorgesehen verwendet werden können, z. B. nicht nur von sehenden Mausbenutzern, sondern auch von Screenreader-Nutzern, reinen Tastaturnutzern usw.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >
        und
        <a href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics"
          >WAI-ARIA-Grundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        4.1.3 Statusnachrichten (AA)
      </td>
      <td>
        <p>
          Nutzer von unterstützender Technologie werden über neue Statusnachrichten informiert, die der Seite hinzugefügt wurden.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
          >Understanding Status Messages</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 4.1: Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich unterstützender Technologien.](https://w3c.github.io/wcag/guidelines/22/#compatible)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. Robust

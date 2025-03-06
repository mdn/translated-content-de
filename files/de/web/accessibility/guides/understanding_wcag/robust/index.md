---
title: Robust
slug: Web/Accessibility/Guides/Understanding_WCAG/Robust
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Dieser Artikel bietet praktische Ratschläge dazu, wie Sie Ihren Webinhalt so schreiben, dass er die Erfolgskriterien erfüllt, die im **Robust**-Prinzip der Richtlinien für barrierefreie Webinhalte (WCAG) 2.0 und 2.1 festgelegt sind. Robust besagt, dass Inhalte robust genug sein müssen, um von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, zuverlässig interpretiert zu werden. Dies kann im Allgemeinen erreicht werden, indem Webstandards befolgt und [streng getestet](/de/docs/Learn_web_development/Extensions/Testing) wird.

> [!NOTE]
> Um die W3C-Definitionen für Robust und seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 4: Robust — Inhalte müssen robust genug sein, um von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, zuverlässig interpretiert werden zu können.](https://www.w3.org/TR/WCAG21/#robust)

## Leitlinie 4.1 — Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich unterstützender Technologien

Diese Leitlinie konzentriert sich darauf, Inhalte so kompatibel wie möglich zu machen, nicht nur mit aktuellen Benutzeragenten (z.B. Browsern), sondern auch mit zukünftigen.

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
          Browsern und anderen Benutzeragenten wie Screenreadern geparst werden können.
        </p>
        <p>
          Um dieses Kriterium zu erfüllen, stellen Sie sicher, dass Ihr HTML so
          valide wie möglich ist. Verwenden Sie den
          <a href="https://validator.w3.org/">W3C-Validator</a>, um Ihr Markup
          zu validieren.
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
          Der Name und die Rolle von Benutzeroberflächenkomponenten (z.B. Formulareingaben,
          Schaltflächen, Links, etc.) sollten programmatisch bestimmbar sein.
        </p>
        <p>
          Wenn Sie semantische Elemente korrekt für ihren vorgesehenen Zweck verwenden,
          sollte dieses Kriterium automatisch erfüllt werden. Beim Scripten
          benutzerdefinierter Komponenten müssen Sie WAI-ARIA-Rollen und andere Funktionen verwenden,
          um sicherzustellen, dass Ihre Steuerungen interpretiert und wie vorgesehen verwendet werden können,
          z.B. nicht nur von sehenden Mausnutzern, sondern auch von
          Screenreader-Nutzern, Nur-Tastatur-Nutzern, etc.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Basis für Barrierefreiheit</a
        >
        und
        <a href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics"
          >WAI-ARIA-Grundlagen</a
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
          Benutzer von unterstützenden Technologien werden über neue Statusmeldungen,
          die zur Seite hinzugefügt wurden, informiert.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
          >Verstehen von Statusmeldungen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Leitlinie 4.1: Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich unterstützender Technologien.](https://www.w3.org/TR/WCAG21/#compatible)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. Robust

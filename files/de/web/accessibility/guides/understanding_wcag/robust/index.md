---
title: Robust
slug: Web/Accessibility/Guides/Understanding_WCAG/Robust
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so erstellen, dass sie den Erfolgskriterien des **Robust**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Robust besagt, dass Inhalte robust genug sein müssen, sodass sie zuverlässig von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, interpretiert werden können. Dies kann im Allgemeinen durch die Einhaltung von Webstandards und durch [rigoroses Testen](/de/docs/Learn_web_development/Extensions/Testing) erreicht werden.

> [!NOTE]
> Um die W3C-Definitionen für Robust und dessen Richtlinien und Erfolgskriterien zu lesen, siehe [Principle 4: Robust — Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.](https://w3c.github.io/wcag/guidelines/22/#robust)

## Richtlinie 4.1 — Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich unterstützender Technologien

Diese Richtlinie konzentriert sich darauf, Inhalte so kompatibel wie möglich zu machen, nicht nur mit aktuellen Benutzeragenten (z. B. Browsern), sondern auch mit zukünftigen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.1.1 Parsing (A)</td>
      <td>
        <p>
          Inhalte sollten gut strukturiert sein, sodass sie erfolgreich von
          Browsern und anderen Benutzeragenten wie Screenreadern geparst werden
          können.
        </p>
        <p>
          Um dieses Kriterium zu erfüllen, stellen Sie sicher, dass Ihr HTML so
          gültig wie möglich ist. Verwenden Sie den
          <a href="https://validator.w3.org/">W3C Validator</a>, um Ihr
          Markup zu validieren.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML"
          >Debugging HTML</a>,
        für einen praktischen Leitfaden.
      </td>
    </tr>
    <tr>
      <td>4.1.2 Name, Rolle, Wert (A)</td>
      <td>
        <p>
          Der Name und die Rolle von Benutzerschnittstellenkomponenten (z. B.
          Formulareingaben, Buttons, Links usw.) sollten programmatisch
          bestimmbar sein.
        </p>
        <p>
          Wenn semantische Elemente korrekt für ihren vorgesehenen Zweck
          verwendet werden, sollte dieses Kriterium automatisch erfüllt werden.
          Beim Skripten von benutzerdefinierten Komponenten müssen Sie WAI-ARIA
          Rollen und andere Funktionen verwenden, um sicherzustellen, dass Ihre
          Steuerungen so interpretiert werden und benutzt werden können, wie
          vorgesehen, z. B. nicht nur von sehenden Mausbenutzern, sondern auch
          von Screenreader-Benutzern, Benutzern, die nur Tastaturen verwenden,
          usw.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: A good basis for accessibility</a>
        und
        <a href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics"
          >WAI-ARIA Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <td>
        4.1.3 Statusnachrichten (AA)
      </td>
      <td>
        <p>
          Benutzer unterstützender Technologien werden über neue Statusnachrichten informiert, die zur Seite hinzugefügt werden.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
          >Verstehen von Statusnachrichten</a>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Guideline 4.1: Compatible: Maximize compatibility with current and future user agents, including assistive technologies.](https://w3c.github.io/wcag/guidelines/22/#compatible)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. Robust

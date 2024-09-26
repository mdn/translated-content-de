---
title: Robust
slug: Web/Accessibility/Understanding_WCAG/Robust
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten können, dass sie den Erfolgskriterien entsprechen, die im **Robust**-Prinzip der Richtlinien zur Barrierefreiheit von Webinhalten (WCAG) 2.0 und 2.1 festgelegt sind. Das Prinzip Robust besagt, dass Inhalte so robust sein müssen, dass sie von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, zuverlässig interpretiert werden können. Dies kann im Allgemeinen erreicht werden, indem Webstandards befolgt und [gründlich getestet](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) wird.

> [!NOTE]
> Um die W3C-Definitionen für Robust und seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 4: Robust — Inhalte müssen robust genug sein, dass sie von einer Vielzahl von Benutzeragenten, einschließlich unterstützender Technologien, zuverlässig interpretiert werden können.](https://www.w3.org/TR/WCAG21/#robust)

## Richtlinie 4.1 — Kompatibel: Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich unterstützender Technologien

Diese Richtlinie konzentriert sich darauf, Inhalte so kompatibel wie möglich zu machen, nicht nur mit aktuellen Benutzeragenten (z. B. Browsern), sondern auch mit zukünftigen.

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
          Um dieses Kriterium zu erfüllen, stellen Sie sicher, dass Ihr HTML so valide wie möglich ist. Verwenden Sie den
          <a href="https://validator.w3.org/">W3C-Validator</a>, um Ihr Markup zu validieren.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML"
          >Fehlerbehebung in HTML</a
        >
        für einen praktischen Leitfaden.
      </td>
    </tr>
    <tr>
      <td>4.1.2 Name, Rolle, Wert (A)</td>
      <td>
        <p>
          Der Name und die Rolle von Benutzerschnittstellenkomponenten (z. B. Formulareingaben, Buttons, Links usw.) sollten programmatisch bestimmbar sein.
        </p>
        <p>
          Wenn Sie semantische Elemente korrekt für ihren vorgesehenen Zweck verwenden, sollte dieses Kriterium automatisch erfüllt werden. Bei der Skripterstellung von benutzerdefinierten Komponenten müssen Sie WAI-ARIA-Rollen und andere Funktionen verwenden, um sicherzustellen, dass Ihre Steuerelemente wie beabsichtigt interpretiert und genutzt werden können, z. B. nicht nur von seheingeschränkten Mausbenutzern, sondern auch von Bildschirmleseprogrammnutzern, Tastatur-nur-Nutzern usw.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >
        und
        <a href="/de/docs/Learn/Accessibility/WAI-ARIA_basics"
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
          Nutzer unterstützender Technologien werden über neue Statusmeldungen informiert, die der Seite hinzugefügt wurden.
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

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. Robust
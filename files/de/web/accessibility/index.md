---
title: Barrierefreiheit
slug: Web/Accessibility
l10n:
  sourceCommit: a9c0161a34ba218e7acf6cdf0e93cbc0c36065a1
---

**Barrierefreiheit** (oft abgekürzt als **A11y** — wie „a“, dann 11 Zeichen und dann „y“) im Webentwicklungskontext bedeutet, möglichst vielen Menschen die Nutzung von Websites zu ermöglichen, selbst wenn deren Fähigkeiten in irgendeiner Weise eingeschränkt sind.

Für viele Menschen macht Technologie Dinge einfacher. Für Menschen mit Behinderungen macht Technologie Dinge erst möglich. Barrierefreiheit bedeutet, Inhalte so zu gestalten, dass sie für alle zugänglich sind, unabhängig von den physischen und kognitiven Fähigkeiten der Einzelnen und davon, wie sie auf das Web zugreifen.

> **Das Web ist grundsätzlich so konzipiert, dass es für alle Menschen funktioniert**, unabhängig von ihrer Hardware, Software, Sprache, ihrem Standort oder ihren Fähigkeiten.
> Wenn das Web dieses Ziel erreicht, ist es für Menschen mit unterschiedlichen Fähigkeiten in Bezug auf Hören, Bewegung, Sehen und Kognition zugänglich.
> – ([W3C - Accessibility](https://www.w3.org/standards/webdesign/accessibility))

## Leitfäden zur Barrierefreiheit

Die [Leitfäden zur Barrierefreiheit](/de/docs/Web/Accessibility/Guides) decken Autorenprinzipien, WCAG-Compliance, zugängliche Widgets und Navigation, mobile Barrierefreiheit und andere wichtige Themen ab, die Ihnen helfen zu verstehen, warum Barrierefreiheit für das Web wichtig ist und wie Sie diese in Ihren Projekten verbessern können.

- [Barrierefreiheitsinformationen für Webautoren](/de/docs/Web/Accessibility/Guides/Information_for_Web_authors)
  - : Dieses Dokument listet Richtlinien und Vorschriften, Anleitungen und Werkzeuge zur Überprüfung und Behebung von Barrierefreiheitsproblemen auf Websites auf.
- [Personalisierung für sicheres Browsen](/de/docs/Web/Accessibility/Guides/Browsing_safely)
  - : Dieser Artikel behandelt die Zugänglichkeit von Webinhalten für Personen mit vestibulären Störungen und deren Unterstützer, indem Personalisierungs- und Barrierefreiheitseinstellungen genutzt werden, die in den Betriebssystemen eingebaut sind.
- [Zugängliche Webanwendungen und Widgets](/de/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets)
  - : Die meisten JavaScript-Bibliotheken bieten eine Bibliothek von clientseitigen Widgets, die das Verhalten vertrauter Desktop-Schnittstellen nachahmen.
    Während dies zu einem Widget führt, das wie sein Desktop-Gegenstück aussieht, fehlt in der Regel genügend semantische Information im Markup, um von unterstützenden Technologien genutzt werden zu können.
    Dieses Dokument beschreibt Techniken zur Verbesserung der Barrierefreiheit solcher Widgets.
- [Tastaturnavigierbare JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
  - : Bislang fehlte Webentwicklern, die ihre auf `<div>` und `<span>` basierenden Widgets zugänglich machen wollten, geeignete Techniken.
    **Tastaturzugänglichkeit** ist Teil der minimalen Barrierefreiheitsanforderungen, die ein Entwickler kennen sollte.
    Dieses Dokument beschreibt Techniken, um JavaScript-Widgets mit der Tastatur zugänglich zu machen.
- [Checkliste für mobile Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Mobile_accessibility_checklist)
  - : Dieses Dokument bietet eine prägnante Checkliste von Barrierefreiheitsanforderungen für Mobile-App-Entwickler.
- [Verständnis der Web Content Accessibility Guidelines (WCAG)](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - : Eine Sammlung von Artikeln, die schnelle Erklärungen bieten, um Ihnen zu helfen, die Schritte zu verstehen, die zur Einhaltung der in den Web Content Accessibility Guidelines (WCAG) skizzierten Empfehlungen erforderlich sind.
- [Kognitive Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility)
  - : Kognitive Barrierefreiheit umfasst Überlegungen zur Barrierefreiheit für Menschen mit kognitiven und Lernbehinderungen.
    Dieses Dokument führt in die kognitive Barrierefreiheit ein und zeigt, wie die Barrierefreiheit des Webs für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.
- [Barrierefreiheit und räumliche Muster](/de/docs/Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns)
  - : Dieses Dokument beschreibt visuelle Muster, die physische Symptome bei Menschen mit photosensitiver Epilepsie, vestibulären Störungen oder anderen Wahrnehmungsproblemen hervorrufen können.
- [Web-Barrierefreiheit: Verständnis von Farben und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Während das Verständnis von Farbe, Leuchtdichte und Sättigung für Design und Lesbarkeit für alle sehenden Benutzer wichtig ist, sind sie für Menschen mit eingeschränktem Sehvermögen und Farbenblindheit sowie für Menschen mit spezifischen neurologischen, kognitiven und anderen Beeinträchtigungen essenziell.
- [Web-Barrierefreiheit für Anfälle und physische Reaktionen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
  - : Einige Arten von visuellen Webinhalten können bei Menschen mit bestimmten Gehirnstörungen Anfälle auslösen.
    Dieser Artikel hilft Ihnen zu verstehen, welche Arten von Inhalten problematisch sein können, und bietet Werkzeuge und Strategien, diese zu vermeiden.
- [ARIA](/de/docs/Web/Accessibility/ARIA)
  - : Dies ist eine Sammlung von Artikeln, um zu lernen, wie man Accessible Rich Internet Applications (ARIA) nutzt, um Ihre HTML-Dokumente zugänglicher zu machen.

## Tutorials für Anfänger

Der MDN [Bereich zum Erlernen der Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) enthält moderne, aktuelle Tutorials, die die folgenden grundlegenden Aspekte der Barrierefreiheit abdecken:

- [Was ist Barrierefreiheit?](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
  - : Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Barrierefreiheit tatsächlich ist — dazu gehört, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge unterschiedliche Menschen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.
- [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML)
  - : Ein Großteil von Webinhalten kann zugänglich gemacht werden, indem sichergestellt wird, dass die richtigen HTML-Elemente jederzeit für die richtigen Zwecke verwendet werden. Dieser Artikel geht im Detail darauf ein, wie HTML genutzt werden kann, um maximale Barrierefreiheit zu gewährleisten.
- [Best Practices für CSS und JavaScript zugänglichkeitsfördernde Maßnahmen](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript)
  - : CSS und JavaScript, wenn richtig eingesetzt, haben ebenfalls das Potenzial, zugängliche Web-Erfahrungen zu ermöglichen. Wenn sie jedoch falsch eingesetzt werden, können sie die Barrierefreiheit erheblich beeinträchtigen. Dieser Artikel skizziert einige CSS- und JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so zugänglich wie möglich sind.
- [Grundlagen von WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)
  - : Analysierend auf den vorherigen Artikel, manchmal ist es schwierig, komplexe UI-Kontrollen zu gestalten, die nicht-semantisches HTML und dynamisch durch JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die Browser und assistierende Technologien erkennen können und so den Benutzern mitteilen, was passiert. Hier zeigen wir, wie man es auf einer grundlegenden Ebene verwendet, um die Barrierefreiheit zu verbessern.
- [Zugängliche Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme schaffen kann, ist Multimedia — Video-, Audio- und Bildinhalte müssen ordnungsgemäß mit Textalternativen versehen werden, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie dies gemacht werden kann.
- [Barrierefreiheit auf mobilen Geräten](/de/docs/Learn_web_development/Core/Accessibility/Mobile)
  - : Da der Zugang zum Web auf mobilen Geräten so populär ist und beliebte Plattformen wie iOS und Android über vollständige Barrierefreiheitswerkzeuge verfügen, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet mobile-spezifische Überlegungen zur Barrierefreiheit.

## Referenzen

- [ARIA-Referenz](/de/docs/Web/Accessibility/ARIA/Reference)
  - : Referenzdokumentation für Accessible Rich Internet Applications (ARIA)-Attribute und Rollen.

## Siehe auch

- [Entwicklerleitfäden](/de/docs/MDN/Guides)
- [WAI Interest Group](https://www.w3.org/WAI/about/groups/waiig/)

---
title: Barrierefreiheit
slug: Web/Accessibility
l10n:
  sourceCommit: 5f4dc8ee228442ddf6831f5f4b8ffe37e5f2beb3
---

{{AccessibilitySidebar}}

**Barrierefreiheit** (oft abgekürzt als **A11y** — also "a", dann 11 Zeichen, und dann "y") im Bereich der Webentwicklung bedeutet, möglichst vielen Menschen die Nutzung von Websites zu ermöglichen, auch wenn deren Fähigkeiten in irgendeiner Weise eingeschränkt sind.

Für viele Menschen erleichtert Technologie die Dinge. Für Menschen mit Behinderungen macht Technologie Dinge möglich. Barrierefreiheit bedeutet, Inhalte so zu gestalten, dass sie unabhängig von den körperlichen und kognitiven Fähigkeiten einer Person und der Art und Weise, wie sie auf das Internet zugreift, so zugänglich wie möglich sind.

"**Das Web ist grundsätzlich darauf ausgelegt, für alle Menschen zu funktionieren**, unabhängig von ihrer Hardware, Software, Sprache, ihrem Standort oder ihren Fähigkeiten. Wenn das Web dieses Ziel erreicht, ist es für Menschen mit unterschiedlichsten Hör-, Bewegungs-, Seh- und kognitiven Fähigkeiten zugänglich." ([W3C - Barrierefreiheit](https://www.w3.org/standards/webdesign/accessibility))

## Wichtige Tutorials

Der MDN [Bereich für Barrierefreiheit](/de/docs/Learn/Accessibility) enthält moderne, aktuelle Tutorials, die folgende grundlegende Aspekte der Barrierefreiheit abdecken:

- [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility)
  - : Dieser Artikel startet das Modul mit einem guten Überblick darüber, was Barrierefreiheit tatsächlich ist — er umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.
- [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML)
  - : Ein Großteil der Webinhalte kann zugänglich gemacht werden, indem sichergestellt wird, dass die richtigen HTML-Elemente jederzeit für den richtigen Zweck verwendet werden. Dieser Artikel befasst sich detailliert damit, wie HTML genutzt werden kann, um maximale Barrierefreiheit zu gewährleisten.
- [CSS- und JavaScript-Barrierefreiheit Best Practices](/de/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : Auch CSS und JavaScript haben, wenn sie richtig eingesetzt werden, das Potenzial, barrierefreie Web-Erlebnisse zu ermöglichen. Sie können die Barrierefreiheit erheblich beeinträchtigen, wenn sie falsch verwendet werden. Dieser Artikel skizziert einige Best Practices für CSS und JavaScript, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so zugänglich wie möglich sind.
- [WAI-ARIA-Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : Im Anschluss an den vorherigen Artikel: Manchmal ist es schwierig, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt werden, um die Benutzer darüber zu informieren, was vor sich geht. Hier zeigen wir, wie es auf einer grundlegenden Ebene verwendet werden kann, um die Barrierefreiheit zu verbessern.
- [Zugängliche Multimedia-Inhalte](/de/docs/Learn/Accessibility/Multimedia)
  - : Eine weitere Inhaltssparte, die Barrierefreiheitsprobleme verursachen kann, sind Multimedia-Inhalte — Video, Audio und Bildinhalte müssen angemessene textuelle Alternativen erhalten, damit sie von unterstützenden Technologien und deren Benutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.
- [Mobile Barrierefreiheit](/de/docs/Learn/Accessibility/Mobile)
  - : Da der Webzugriff auf mobilen Geräten so populär ist und beliebte Plattformen wie iOS und Android umfassende Barrierefreiheitstools haben, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet mobile spezifische Überlegungen zur Barrierefreiheit.

## Weitere Dokumentation

- [Die Richtlinien für die Barrierefreiheit von Webinhalten verstehen](/de/docs/Web/Accessibility/Understanding_WCAG)
  - : Diese Artikelreihe bietet kurze Erklärungen, um Ihnen zu helfen, die Schritte zu verstehen, die notwendig sind, um den Empfehlungen der W3C-Richtlinien für barrierefreie Webinhalte 2.0 (WCAG 2.0 oder einfach WCAG) zu entsprechen.
- [Einführung in Farbe und Barrierefreiheit](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : Dieser Artikel bespricht unsere Wahrnehmung von Licht und Farbe, bietet eine Grundlage für die Verwendung von Farben in barrierefreien Designs und demonstriert Best Practices für visuelle und lesbare Inhalte.
- [Tastaturnavigierbare JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : Bisher haben Webentwickler, die ihre gestylten `<div>` und `<span>` basierten Widgets zugänglich machen wollten, an angemessenen Techniken gefehlt. **Tastaturzugänglichkeit** ist Teil der minimalen Barrierefreiheitsanforderungen, deren sich ein Entwickler bewusst sein sollte.
- [ARIA](/de/docs/Web/Accessibility/ARIA)
  - : Dies ist eine Sammlung von Artikeln, um zu lernen, wie Sie Accessible Rich Internet Applications (ARIA) verwenden können, um Ihre HTML-Dokumente zugänglicher zu machen.
- [Checkliste für mobile Barrierefreiheit](/de/docs/Web/Accessibility/Mobile_accessibility_checklist)
  - : Dieser Artikel bietet eine prägnante Checkliste von Barrierefreiheitsanforderungen für Entwickler mobiler Apps.
- [Kognitive Barrierefreiheit](/de/docs/Web/Accessibility/Cognitive_accessibility)
  - : Dieser Artikel erklärt, wie Sie sicherstellen können, dass die von Ihnen erstellten Webinhalte für Menschen mit kognitiven Beeinträchtigungen zugänglich sind.
- [Barrierefreiheit bei Krampfanfällen](/de/docs/Web/Accessibility/Seizure_disorders)
  - : Einige Arten visueller Webinhalte können bei Menschen mit bestimmten Gehirnerkrankungen Anfälle auslösen. Dieser Artikel hilft Ihnen, die Arten von Inhalten zu verstehen, die problematisch sein können, und Werkzeuge und Strategien zu finden, die Ihnen helfen, sie zu vermeiden.

## Siehe auch

- [WAI Interest Group](https://www.w3.org/WAI/about/groups/waiig/)
- [Entwicklerleitfäden](/de/docs/Web/Guide)

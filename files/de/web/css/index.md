---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die zur Beschreibung der Darstellung eines in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschriebenen Dokuments verwendet wird. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert über Web-Browser hinweg. Früher wurde die Entwicklung verschiedener Teile der CSS-Spezifikation synchron vorangetrieben, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird jedoch niemals ein CSS3 oder CSS4 geben; stattdessen heißt alles einfach nur "CSS", wobei die einzelnen CSS-Module Versionsnummern haben.

Nach CSS 2.1 nahm der Umfang der Spezifikation erheblich zu, und der Fortschritt der verschiedenen CSS-Module unterschied sich so stark, dass es effektiver wurde, [Empfehlungen pro Modul separat zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, erstellt das W3C nun regelmäßig einen Snapshot des [aktuell stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) sowie des Fortschritts einzelner Module. CSS-Module haben jetzt Versionsnummern oder Level, wie etwa [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Anfänger

- [Ihre erste Webseite: Den Inhalt gestalten](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet einen kurzen Überblick über CSS und dessen Verwendung, speziell für Personen, die völlig neu in der Webentwicklung sind.
- [Grundlagen des CSS-Stylings](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser Modul zu den Grundkenntnissen von CSS in der [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)-Sektion lehrt CSS von Grund auf.
- [Textgestaltung mit CSS](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier behandeln wir Grundlagen wie das Festlegen von Schriftarten, Fettschrift, Kursivschrift, Zeilen- und Buchstabenabstand, Schlagschatten und andere Textmerkmale. Wir schließen das Modul mit dem Anwenden benutzerdefinierter Schriftarten auf Ihre Seite sowie dem Gestalten von Listen und Links ab.
- [Layout mit CSS](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit, zu lernen, wie Sie Ihre Boxen richtig im Verhältnis zueinander und zum Browser-Viewport anordnen. Dieses Modul behandelt Floats, Positionierung, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Die [Syntax und Formen der Sprache](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity), [Vererbung](/de/docs/Web/CSS/Inheritance) und [die Kaskade](/de/docs/Web/CSS/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/At-rule), einschließlich [Media](/de/docs/Web/CSS/CSS_media_queries)- und [Container](/de/docs/Web/CSS/CSS_containment)-Abfragen
- [CSS-Einheiten und Werte](/de/docs/Web/CSS/CSS_Values_and_Units) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margenzusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Den [Containing Block](/de/docs/Web/CSS/Containing_block)
- [Stacking](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)- und [Blockformatierungs](/de/docs/Web/CSS/CSS_display/Block_formatting_context)-Kontexte
- [Initial](/de/docs/Web/CSS/initial_value)-, [berechnete](/de/docs/Web/CSS/computed_value)-, [verwendete](/de/docs/Web/CSS/used_value)- und [aktuelle](/de/docs/Web/CSS/actual_value) Werte
- [CSS-Kurzschreib-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [CSS Flexible Box](/de/docs/Web/CSS/CSS_flexible_box_layout)-, [Multi-Column](/de/docs/Web/CSS/CSS_multicol_layout)- und [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Layout
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformierungen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) soll Rezepte für häufig verwendete Layoutmuster zusammenstellen, die Sie möglicherweise auf Ihren Websites implementieren müssen. Zusätzlich zum Bereitstellen von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layoutspezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

## Tools für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu prüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglichen es Ihnen, das Live-CSS einer Seite über die [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)- und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)-Tools anzuzeigen und zu bearbeiten.
- Die [Web Developer Extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, Live-CSS auf beobachteten Seiten zu verfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox-Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow Fragen über CSS](https://stackoverflow.com/questions/tagged/css)

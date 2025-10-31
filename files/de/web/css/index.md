---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet-Sprache](/de/docs/Web/API/StyleSheet), die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben wurde. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien gerendert werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist in allen gängigen Webbrowsern nach den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Früher wurde die Entwicklung der verschiedenen Teile der CSS-Spezifikation synchron durchgeführt, was eine Versionsangabe der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird nie ein CSS3 oder ein CSS4 geben; vielmehr ist alles jetzt einfach "CSS" mit einzelnen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 nahm der Umfang der Spezifikation erheblich zu und der Fortschritt in verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Statt die CSS-Spezifikation zu versionieren, macht das W3C nun periodisch einen Snapshot [des letzten stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben jetzt Versionsnummern oder Ebenen, wie zum Beispiel [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Anfänger

Unsere [Leitfaden zum Lernen der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von CSS abdecken.

- [Ihre erste Website: Das Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in CSS und dessen Anwendung, die sich an Personen richtet, die völlig neu in der Webentwicklung sind.
- [Grundlagen des CSS-Stylings](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Dieses Modul bietet alle grundlegenden Kenntnisse zu CSS, die Sie benötigen, um die Technologie effektiv zu lernen, einschließlich Syntax, Funktionen und Techniken.
- [CSS Text-Styling](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir die Grundlagen des CSS-Textstylings, einschließlich Schriftarten, Fettschrift, Kursivschrift, Zeilen- und Zeichenabstände sowie Schattierungen. Wir schließen das Modul mit der Anwendung von benutzerdefinierten Schriftarten auf Ihrer Seite und dem Styling von Listen und Links ab.
- [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Dieses Modul betrachtet Floats, Positionierung, andere moderne Layout-Tools und den Aufbau von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Der [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Media](/de/docs/Web/CSS/CSS_media_queries) und [Container](/de/docs/Web/CSS/CSS_containment) Abfragen
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul, einschließlich [numerischer Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types), [textueller Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Textual_data_types) und [funktionaler Notationen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margin Collapse](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [umgebende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) und [Block-Formatierungs](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [CSS-Kurzschreib-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout) und [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzustellen, die Sie möglicherweise auf Ihren Websites umsetzen müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

## Tools für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, das CSS einer Seite live über die [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Tools anzusehen und zu bearbeiten.
- Die [Web Developer-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, live CSS auf überwachten Seiten zu verfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox-Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Fragen zu CSS auf Stack Overflow](https://stackoverflow.com/questions/tagged/css)

---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Darstellung eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder in anderen Medien gerendert werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und wird gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) in Webbrowsern standardisiert. Früher wurde die Entwicklung verschiedener Teile der CSS-Spezifikation synchron durchgeführt, was eine Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder CSS4 geben; vielmehr ist jetzt alles nur noch "CSS" mit individuellen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 hat sich der Umfang der Spezifikation erheblich vergrößert, und der Fortschritt bei verschiedenen CSS-Modulen begann so stark zu variieren, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und freizugeben](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, erstellt das W3C nun periodisch einen Schnappschuss des [aktuell stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben nun Versionsnummern oder Level, wie das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Einsteiger-Tutorials

Unsere [Module zum Erlernen der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von CSS abdecken.

- [Ihr erste Website: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung, was CSS ist und wie es zu verwenden ist, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Grundlagen des CSS-Stylings](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Dieses Modul bietet alle CSS-Grundlagen, die Sie benötigen, um die Technologie effektiv zu erlernen, einschließlich Syntax, Funktionen und Techniken.
- [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir die Grundlagen der CSS-Textgestaltung, einschließlich Schriftarten, Fettschrift, Kursivschrift, Zeilen- und Buchstabenabstand sowie Schlagschatten. Wir runden das Modul ab, indem wir auf benutzerdefinierte Schriftarten eingehen, die auf Ihrer Seite angewendet werden, sowie das Styling von Listen und Links.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Dieses Modul behandelt das Arbeiten mit Floats, Positionierung, anderen modernen Layout-Tools und den Aufbau von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Der [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Parts](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rules), einschließlich [Media](/de/docs/Web/CSS/CSS_media_queries) und [Container](/de/docs/Web/CSS/CSS_containment)-Abfragen
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul, einschließlich [numerische Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types), [textuelle Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Textual_data_types) und [funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [einschließende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) und [Blockformatierung](/de/docs/Web/CSS/CSS_display/Block_formatting_context)-Kontexte
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)-, [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)-, [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)- und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [CSS-Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [mehrspaltige](/de/docs/Web/CSS/CSS_multicol_layout) und [Raster](/de/docs/Web/CSS/CSS_grid_layout)-Layout
- [Animation](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook) zielt darauf ab, Rezepte für häufige Layoutmuster zusammenzubringen, die Sie möglicherweise in Ihren Websites implementieren müssen. Zusätzlich dazu, dass es Code bereitstellt, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, das live CSS einer Seite über die [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Werkzeuge anzuzeigen und zu bearbeiten.
- Die [Web Developer Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, das Live-CSS auf überwachten Seiten zu verfolgen und zu bearbeiten.

## Meta-Fehler

- Firefox: [Firefox Fehler 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet) Sprache, die verwendet wird, um die Präsentation eines in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschriebenen Dokuments zu beschreiben. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist über Webbrowser hinweg nach [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Zuvor wurde die Entwicklung der verschiedenen Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder ein CSS4 geben; vielmehr wird nun alles einfach als "CSS" bezeichnet, wobei einzelne CSS-Module Versionsnummern haben.

Nach CSS 2.1 wurde der Umfang der Spezifikation erheblich erweitert und der Fortschritt bei verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, nimmt das W3C nun regelmäßig einen Schnappschuss des [aktuell stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben jetzt Versionsnummern oder Level, wie das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Einsteiger-Tutorials

- [Ihre erste Webseite: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung, was CSS ist und wie man es verwendet, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [CSS Grundlagen der Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser [Leitfaden für Webentwicklung](/de/docs/Learn_web_development) enthält ein Modul über die CSS-Grundlagen, das CSS von Grund auf lehrt.
- [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir Grundlagen wie das Setzen von Schriftart, Fettdruck, Kursivschrift, Zeilen- und Buchstabenabstand, Schlagschatten und andere Textmerkmale. Wir schließen das Modul ab, indem wir uns ansehen, wie Sie benutzerdefinierte Schriftarten auf Ihrer Seite anwenden und Listen und Links gestalten.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit zu sehen, wie Sie Ihre Boxen korrekt im Verhältnis zueinander und zum Browser-Viewport anordnen. In diesem Modul betrachten wir Floats, Positionierung, andere moderne Layout-Tools und das Erstellen von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Der [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Einschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Teilen](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Medien-](/de/docs/Web/CSS/CSS_media_queries) und [Container-](/de/docs/Web/CSS/CSS_containment) Abfragen
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul, einschließlich [numerischer Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [textueller Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margen-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [umschließende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) und [Block-Formatierungs](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [CSS-Shorthand-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout) und [Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren Websites implementieren müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die unterschiedlichen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglichen es Ihnen, das live CSS einer Seite über die [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Werkzeuge anzuzeigen und zu bearbeiten.
- Die [Web Developer Extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, live CSS auf überwachten Seiten zu verfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox-Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS oft angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow-Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

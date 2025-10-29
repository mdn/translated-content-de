---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien gerendert werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist über Webbrowser hinweg nach [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Zuvor wurde die Entwicklung der verschiedenen Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben möglicherweise von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird nie ein CSS3 oder CSS4 geben; stattdessen ist jetzt alles einfach "CSS" mit einzelnen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 hat sich der Umfang der Spezifikation erheblich erweitert, und der Fortschritt bei den verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, nimmt das W3C jetzt regelmäßig einen Snapshot des [aktuell stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben jetzt Versionsnummern oder Ebenen, wie beispielsweise das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Einsteiger-Tutorials

Unsere [Kernmodule zum Erlernen der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von CSS abdecken.

- [Ihre erste Website: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung, was CSS ist und wie es verwendet wird, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [CSS-Grundlagen des Stylings](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Dieses Modul bietet Ihnen alle wichtigen Grundlagen von CSS, die Sie benötigen, um die Technologie effektiv zu erlernen, einschließlich Syntax, Funktionen und Techniken.
- [CSS-Textstyling](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir die Grundlagen des CSS-Textes, einschließlich der Einstellung von Schriftart, Fettigkeit, Kursivität, Zeilen- und Buchstabenabständen sowie Schlagschatten. Wir schließen das Modul ab, indem wir das Anwenden von benutzerdefinierten Schriften auf Ihre Seite sowie das Stylen von Listen und Links betrachten.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Dieses Modul befasst sich mit Floats, Positionierung, anderen modernen Layout-Tools und dem Erstellen von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler, die jede Eigenschaft und jedes Konzept von CSS beschreibt, einschließlich:

- Der [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [dem Kaskadenmechanismus](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Teilen](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Medien-](/de/docs/Web/CSS/CSS_media_queries) und [Containerabfragen](/de/docs/Web/CSS/CSS_containment)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul, einschließlich [numerischer Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types), [textueller Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Textual_data_types) und [funktionaler Notationen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margen-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapelkonte](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) und [Block-Formatierung](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [CSS-Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout) und [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layoutmuster zu sammeln, Dinge, die Sie möglicherweise auf Ihren Websites implementieren müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, die Live-CSS einer Seite über die [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Werkzeuge anzusehen und zu bearbeiten.
- Die [Web Developer Extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, das Live-CSS auf überwachten Sites zu verfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox-Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow-Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

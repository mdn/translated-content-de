---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekten wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in der Sprache oder in anderen Medien gerendert werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert über Web-Browser hinweg. Früher wurde die Entwicklung verschiedener Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder CSS4 geben; alles ist jetzt nur "CSS" mit einzelnen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 vergrößerte sich der Umfang der Spezifikation erheblich und der Fortschritt bei verschiedenen CSS-Modulen begann so stark auseinanderzugehen, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, nimmt das W3C jetzt periodisch einen Snapshot von [dem neuesten stabilen Zustand der CSS-Spezifikation](https://www.w3.org/TR/css/) und dem Fortschritt der einzelnen Module. CSS-Module haben jetzt Versionsnummern oder Level, wie zum Beispiel [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Anfänger-Tutorials

- [Ihre erste Website: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung, was CSS ist und wie man es nutzt, und richtet sich an Personen, die völlig neu im Bereich der Webentwicklung sind.
- [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) lehrt die Grundlagen von CSS von Grund auf.
- [CSS Text-Styling](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir Grundlagen wie das Setzen von Schriftarten, Fett- und Kursivschrift, Zeilen- und Buchstabensperrung, Schlagschatten und andere Textmerkmale. Wir schließen das Modul mit dem Anwenden benutzerdefinierter Schriften auf Ihre Seite und dem Stylen von Listen und Links ab.
- [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit zu schauen, wie Sie Ihre Boxen korrekt in Bezug zueinander und zum Browser-Viewport anordnen. Dieses Modul befasst sich mit Floats, Positionierung, anderen modernen Layout-Werkzeugen und dem Erstellen von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Die [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Teilen](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Medien-](/de/docs/Web/CSS/CSS_media_queries) und [Container-](/de/docs/Web/CSS/CSS_containment) Abfragen
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul, einschließlich [numerischer Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [textueller Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [umfassende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) und [Blockformatierung](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [CSS Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout) und [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animation](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren Websites umsetzen müssen. Zusätzlich zum Bereitstellen von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, das Live-CSS einer Seite über die [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Werkzeuge anzuzeigen und zu bearbeiten.
- Die [Web Developer-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, das Live-CSS auf überwachten Websites zu verfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow-Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

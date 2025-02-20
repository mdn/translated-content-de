---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in der Sprache oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist gemäß [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) in Webbrowsern standardisiert. Früher wurde die Entwicklung der verschiedenen Teile der CSS-Spezifikation synchron durchgeführt, was die Versionskennzeichnung der neuesten Empfehlungen ermöglichte. Vielleicht haben Sie von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird jedoch nie ein CSS3 oder CSS4 geben; vielmehr ist jetzt alles einfach "CSS" mit individuellen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 erhöhte sich der Umfang der Spezifikation erheblich, und der Fortschritt bei verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, macht das W3C nun periodisch einen Snapshot [des neuesten stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts der einzelnen Module. CSS-Module haben jetzt Versionsnummern oder Levels, wie zum Beispiel das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Anfängertutorials

- [Ihre erste Website: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in CSS und wie es verwendet wird, und richtet sich an Personen, die absolut neu in der Webentwicklung sind.
- [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)-Bereichsmodul zu den CSS-Grundlagen lehrt die Grundlagen von CSS von Grund auf.
- [CSS Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir grundlegende Konzepte einschließlich der Festlegung von Schriftart, Fettung, Kursivschrift, Zeilen- und Buchstabensperrung, Schlagschatten und anderen Textmerkmalen. Wir schließen das Modul ab, indem wir uns anschauen, wie man benutzerdefinierte Schriften auf Ihrer Seite anwendet und Listen und Links gestaltet.
- [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit, zu betrachten, wie Sie Ihre Boxen korrekt im Verhältnis zueinander und zum Browser-Viewport anordnen. In diesem Modul werden Floats, Positionierung, andere moderne Layout-Werkzeuge und der Aufbau von responsiven Designs betrachtet, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Die [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [der Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Wahrnehmung](/de/docs/Web/CSS/CSS_scoping) und [Schattenbereiche](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS @-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Media-](/de/docs/Web/CSS/CSS_media_queries) und [Containervariablen](/de/docs/Web/CSS/CSS_containment)
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul, einschließlich [numerischer Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [textueller Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) und [Funktionaler Notationen](/de/docs/Web/CSS/CSS_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margen-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [umschließende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) und [Block-Formatierungen](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value) und [aktuelle](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [CSS-Kurzschreibereigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [CSS Flexibles Boxen-](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout) und [Raster-Layouts](/de/docs/Web/CSS/CSS_grid_layout)
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layoutmuster zu sammeln, die Sie möglicherweise in Ihren Seiten umsetzen müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validierungsdienst](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglichen es Ihnen, das Live-CSS einer Seite über die Werkzeuge [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) anzuzeigen und zu bearbeiten.
- Die [Web Developer-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, Live-CSS auf überwachten Seiten zu verfolgen und zu bearbeiten.

## Meta Bugs

- Firefox: [Firefox Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

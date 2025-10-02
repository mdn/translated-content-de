---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um das Erscheinungsbild eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekten wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist gemäß [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) in Webbrowsern standardisiert. Zuvor erfolgte die Entwicklung verschiedener Teile der CSS-Spezifikation synchron, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird nie ein CSS3 oder CSS4 geben; stattdessen ist jetzt alles einfach nur "CSS" mit einzelnen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 erhöhte sich der Umfang der Spezifikation erheblich und der Fortschritt bei den verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen pro Modul separat zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, nimmt das W3C jetzt periodisch ein Schnappschuss des [neuesten stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben jetzt Versionsnummern oder Levels, wie zum Beispiel das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Anfänger

Unsere [Lernen-Web-Entwicklung-Kernmodule](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von CSS abdecken.

- [Ihre erste Website: Inhalt stilisieren](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in CSS und dessen Verwendung, die sich an Personen richtet, die völlig neu in der Webentwicklung sind.
- [Grundlagen des CSS-Styles](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Dieses Modul bietet alle CSS-Grundlagen, die Sie benötigen, um die Technologie effektiv zu erlernen, einschließlich Syntax, Funktionen und Techniken.
- [CSS-Textstilisierung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir die CSS-Textgrundlagen, einschließlich der Einstellung von Schriftart, Fettgedrucktheit, Kursivschrift, Zeilen- und Buchstabenzwischenräumen und Schlagschatten. Wir schließen das Modul ab, indem wir uns anschauen, wie benutzerdefinierte Schriftarten auf Ihrer Seite angewendet und Listen und Links stilisiert werden.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Dieses Modul betrachtet Floats, Positionierung, andere moderne Layout-Tools und den Aufbau von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler, die jede Eigenschaft und jedes Konzept von CSS beschreibt, einschließlich:

- Die [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Geltungsbereich](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Teilen](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Medien](/de/docs/Web/CSS/CSS_media_queries) und [Container](/de/docs/Web/CSS/CSS_containment)-Abfragen
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul, einschließlich [numerischer Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [textueller Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) und [funktionalen Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margenkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [umschließende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapel-](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) und [Blockformatierungs-](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [CSS-Kurzschlüsseleigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout) und [Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animation](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren Websites implementieren müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Spezifikationen für Layouts verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, das Live-CSS einer Seite über die [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Stileditor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Werkzeuge anzusehen und zu bearbeiten.
- Die [Web Developer Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, Live-CSS auf beobachteten Websites zu verfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

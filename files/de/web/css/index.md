---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 122471faf12c4d06a01ee53deb6d7b4071213ca9
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet-](/de/docs/Web/API/StyleSheet)Sprache, die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekten wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in der Sprache oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den grundlegenden Sprachen des **offenen Webs** und ist über Webbrowser hinweg gemäß [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Zuvor erfolgte die Entwicklung verschiedener Teile der CSS-Spezifikation synchron, was die Versionierung der neuesten Empfehlungen ermöglichte. Möglicherweise haben Sie von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder CSS4 geben; vielmehr ist alles nun einfach "CSS" mit einzelnen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 stieg der Umfang der Spezifikation erheblich an und der Fortschritt bei verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, macht das W3C nun regelmäßig einen Schnappschuss von [dem neuesten stabilen Zustand der CSS-Spezifikation](https://www.w3.org/TR/css/) und dem Fortschritt der einzelnen Module. CSS-Module haben jetzt Versionsnummern oder Stufen, wie etwa [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Anfänger

- [Ihre erste Website: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in das, was CSS ist und wie man es nutzt, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Grundlagen des CSS-Stylings](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser CSS-Grundlagenmodul im Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) vermittelt Ihnen die Grundlagen von CSS von Grund auf.
- [CSS-Textstyling](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir Grundlagen wie das Setzen von Schriftart, Fettung, Kursivschrift, Zeilen- und Buchstabenabstand, Schlagschatten und andere Texteigenschaften. Wir schließen das Modul mit einem Blick auf das Anwenden benutzerdefinierter Schriftarten auf Ihre Seite sowie das Styling von Listen und Links ab.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit, zu schauen, wie Sie Ihre Boxen korrekt in Bezug aufeinander und den Browser-Viewport layouten. Dieses Modul betrachtet Floats, Positionierung, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler, die jede Eigenschaft und jedes Konzept von CSS beschreibt, einschließlich:

- Die [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Einschränkung](/de/docs/Web/CSS/CSS_scoping) und [Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Media Queries](/de/docs/Web/CSS/CSS_media_queries) und [Container-Queries](/de/docs/Web/CSS/CSS_containment)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul, einschließlich [numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [umgebende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) und [Block-Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [CSS-Kurzschreib-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Multi-Column](/de/docs/Web/CSS/CSS_multicol_layout) und [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, Dinge, die Sie möglicherweise auf Ihren Websites umsetzen müssen. Zusätzlich zum Bereitstellen von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen genutzt werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, das live CSS einer Seite über die [Inspector-](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor-Tools](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) zu betrachten und zu bearbeiten.
- Die [Web Developer Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox lässt Sie das live CSS auf überwachten Websites nachverfolgen und bearbeiten.

## Meta-Fehler

- Firefox: [Firefox Fehler 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

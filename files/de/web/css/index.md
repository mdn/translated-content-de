---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Darstellung eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in der Sprache oder in anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist in Webbrowsern standardisiert gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs). Zuvor wurde die Entwicklung verschiedener Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben möglicherweise von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder ein CSS4 geben; vielmehr ist jetzt alles einfach "CSS" mit einzelnen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 wurde der Umfang der Spezifikation erheblich erweitert, und der Fortschritt in verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstelle der Versionierung der CSS-Spezifikation macht das W3C nun regelmäßig einen Schnappschuss [des neuesten stabilen Standes der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben nun Versionsnummern oder Levels, wie z.B. [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Einsteiger-Tutorials

- [Ihre erste Website: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in CSS und wie man es verwendet, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [CSS Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser CSS-Grundlagenmodul in der Sektion [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) lehrt die Grundlagen von CSS von Grund auf.
- [CSS Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir die Grundlagen wie das Setzen von Schriftarten, Fettgedrucktheit, Kursivierung, Zeilen- und Buchstabenzwischenräume, Schlagschatten und andere Textmerkmale. Wir runden das Modul ab, indem wir das Anwenden benutzerdefinierter Schriften auf Ihrer Seite sowie das Styling von Listen und Links betrachten.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit, sich anzusehen, wie Sie Ihre Boxen korrekt zueinander und zum Viewport des Browsers anordnen. Dieses Modul befasst sich mit Floats, Positionierung, anderen modernen Layout-Werkzeugen und dem Erstellen responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und -auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Die [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Einschränkung](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Teilen](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-@-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) und [Container](/de/docs/Web/CSS/CSS_containment)-Abfragen
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul, einschließlich [numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [einschließende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) und [Block-Formatierungs](/de/docs/Web/CSS/CSS_display/Block_formatting_context)-Kontexte
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value) und [aktuelle](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [CSS-Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS Flexibler Kasten](/de/docs/Web/CSS/CSS_flexible_box_layout), [mehrspaltiges](/de/docs/Web/CSS/CSS_multicol_layout) und [Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animation](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzubringen, die Sie vielleicht auf Ihren Webseiten umsetzen müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layoutspezifikationen verwendet werden können und die Entscheidungen, die Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglichen es Ihnen, das Live-CSS einer Seite über die [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)- und [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)-Werkzeuge zu betrachten und zu bearbeiten.
- Die [Web Developer Extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, Live-CSS auf überwachten Seiten nachzuverfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet-Sprache](/de/docs/Web/API/StyleSheet), die verwendet wird, um die Darstellung eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben wurde. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in der Sprache oder in anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist standardisiert für Webbrowser gemäß [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs). Früher wurden die verschiedenen Teile der CSS-Spezifikation synchron entwickelt, was eine Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird jedoch nie ein CSS3 oder ein CSS4 geben; stattdessen ist alles einfach "CSS", wobei die einzelnen CSS-Module Versionsnummern haben.

Nach CSS 2.1 wurde der Umfang der Spezifikation erheblich erweitert, und der Fortschritt der verschiedenen CSS-Module begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, nimmt das W3C jetzt regelmäßig eine Momentaufnahme [des neuesten stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts der einzelnen Module vor. CSS-Module haben jetzt Versionsnummern oder Stufen, wie beispielsweise [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Anfänger

- [Ihre erste Website: Inhalte gestalten](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung, was CSS ist und wie es verwendet wird, und richtet sich an Personen, die keinerlei Vorkenntnisse in der Webentwicklung haben.
- [CSS-Grundlagen für das Styling](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) erklärt die Grundlagen von CSS von Grund auf.
- [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier befassen wir uns mit den Grundlagen wie der Einstellung von Schriftart, Fettschrift, Kursivschrift, Zeilen- und Buchstabenzwischenraum, Schlagschatten und anderen Texteigenschaften. Am Ende des Moduls lernen Sie, benutzerdefinierte Schriftarten auf Ihrer Seite anzuwenden sowie Listen und Links zu gestalten.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit, die richtige Anordnung Ihrer Boxen zueinander und im Browser-Viewport zu betrachten. Dieses Modul behandelt Floats, Positionierung, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an unterschiedliche Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Der [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [der Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Parts](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Media Queries](/de/docs/Web/CSS/CSS_media_queries) und [Containment-Queries](/de/docs/Web/CSS/CSS_containment)
- [CSS-Einheiten und Werte](/de/docs/Web/CSS/CSS_Values_and_Units) sowie [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margin Collapse](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [umfassende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) und [Block-Formatierung](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [CSS-Kurzschreibweisen](/de/docs/Web/CSS/Shorthand_properties)
- [CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) und [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) hat das Ziel, Rezepte für gängige Layoutmuster zu sammeln, die Sie möglicherweise auf Ihren Seiten umsetzen müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die unterschiedlichen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unverzichtbares Debugging-Werkzeug.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglichen es Ihnen, das Live-CSS einer Seite über die Tools [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) zu betrachten und zu bearbeiten.
- Die [Web Developer-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, Live-CSS auf beobachteten Seiten zu verfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox-Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Fragen zu CSS auf Stack Overflow](https://stackoverflow.com/questions/tagged/css)

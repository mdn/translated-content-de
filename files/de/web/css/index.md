---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Präsentation eines in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) geschriebenen Dokuments (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) zu beschreiben. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien gerendert werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist über Webbrowser hinweg gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Zuvor wurde die Entwicklung der verschiedenen Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder ein CSS4 geben; vielmehr ist jetzt alles einfach "CSS" mit individuellen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 hat sich der Umfang der Spezifikation erheblich erweitert und der Fortschritt in verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, nimmt das W3C nun regelmäßig einen Schnappschuss des [letzten stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts der einzelnen Module. CSS-Module haben jetzt Versionsnummern oder Stufen, wie zum Beispiel [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Anfänger

- [Ihre erste Webseite: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung darin, was CSS ist und wie man es verwendet, und richtet sich an Personen, die völlig neu im Bereich Webentwicklung sind.
- [Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) -Modul zu CSS-Grundlagen lehrt CSS von Grund auf.
- [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir Grundlagen, einschließlich Schriftart, Fettung, Kursivschrift, Zeilen- und Buchstabensperrung, Schlagschatten und andere Texteigenschaften. Wir schließen das Modul ab, indem wir uns ansehen, wie Sie benutzerdefinierte Schriftarten auf Ihrer Seite anwenden und Listen und Links gestalten.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit, zu lernen, wie Sie Ihre Boxen korrekt zueinander und zum Browser-Viewport anordnen. Dieses Modul behandelt Floats, Positionierung, andere moderne Layout-Tools und den Aufbau von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Media-](/de/docs/Web/CSS/CSS_media_queries) und [Container-Abfragen](/de/docs/Web/CSS/CSS_containment)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul, einschließlich [numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Margin Collapse](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stacking](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) und [Block-Formatting-](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value), [Berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value), [Verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) und [Tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value) Werte
- [CSS-Kurzschreibweiseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspaltiges](/de/docs/Web/CSS/CSS_multicol_layout) und [Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animation](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzubringen, die Sie möglicherweise auf Ihren Websites implementieren müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validierungsdienst](https://jigsaw.w3.org/css-validator/) verwenden, um zu prüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglichen es Ihnen, das Live-CSS einer Seite über die [Inspektor-](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style-Editor-Tools](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) zu sehen und zu bearbeiten.
- Die [Web-Entwickler-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox erlaubt es Ihnen, Live-CSS auf beobachteten Seiten zu verfolgen und zu bearbeiten.

## Meta-Fehler

- Firefox: [Firefox Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS oft angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow-Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

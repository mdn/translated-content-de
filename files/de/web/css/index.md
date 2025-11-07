---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekten wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien gerendert werden sollten.

CSS gehört zu den Kernsprachen des **offenen Webs** und wird gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) in Webbrowsern standardisiert. Früher wurde die Entwicklung verschiedener Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird jedoch nie ein CSS3 oder CSS4 geben; stattdessen heißt alles jetzt einfach "CSS", wobei einzelne CSS-Module Versionsnummern haben.

Nach CSS 2.1 hat sich der Umfang der Spezifikation erheblich erweitert und der Fortschritt der verschiedenen CSS-Module begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, erstellt das W3C nun regelmäßig eine Momentaufnahme des [aktuellen stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben nun Versionsnummern oder Level, wie zum Beispiel das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Anfänger

Unsere [Lern-Webentwicklung Kernmodule](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials, die die Grundlagen von CSS abdecken.

- [Ihre erste Website: Gestaltung des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung darüber, was CSS ist und wie man es verwendet, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Dieses Modul vermittelt Ihnen alle CSS-Grundlagen, die Sie benötigen, um die Technologie effektiv zu erlernen, einschließlich Syntax, Funktionen und Techniken.
- [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir die Grundlagen der CSS-Textgestaltung, einschließlich der Einstellung von Schriftarten, Fettschrift, Kursivschrift, Zeilen- und Buchstabensperrung sowie Schlagschatten. Wir runden das Modul ab, indem wir betrachten, wie benutzerdefinierte Schriftarten auf Ihrer Seite angewendet werden, und wie Listen und Links gestaltet werden.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Dieses Modul untersucht Floats, Positionierung, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler, die jede Eigenschaft und jedes Konzept von CSS beschreibt, einschließlich:

- Der [Syntax und Formulare der Sprache](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity), [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) und [der Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors), einschließlich [Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/Guides/Nesting), [Scoping](/de/docs/Web/CSS/Guides/Scoping) und [Schattenkomponenten](/de/docs/Web/CSS/Guides/Shadow_parts)
- [CSS At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules), einschließlich [Media](/de/docs/Web/CSS/Guides/Media_queries) und [Container](/de/docs/Web/CSS/Guides/Containment) Abfragen
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul, einschließlich [nummerischer Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types), [textlicher Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types) und [funktionaler Notationen](/de/docs/Web/CSS/Reference/Values/Functions)
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) und [Kollabieren von Rändern](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- Der [einschließende Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- [Stapeln](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) und [Block-Formatierung](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [CSS Shorthand-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [CSS Flexibilitätsbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), [Mehrspalten](/de/docs/Web/CSS/Guides/Multicol_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Layout
- [Animation](/de/docs/Web/CSS/Guides/Animations), [Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Transformationen](/de/docs/Web/CSS/Guides/Transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook) hat das Ziel, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise in Ihren Seiten implementieren müssen. Neben dem Bereitstellen von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen genutzt werden können und welche Entscheidungen Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unverzichtbares Debugging-Tool.
- Die [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglichen es Ihnen, das live CSS einer Seite über die [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Werkzeuge anzusehen und zu bearbeiten.
- Die [Web Developer Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, live CSS auf überwachten Seiten zu verfolgen und zu bearbeiten.

## Meta-Bugs

- Firefox: [Firefox Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow-Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

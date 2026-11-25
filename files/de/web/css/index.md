---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: f93014556381d466117cc25fb6b091b0f5011411
---

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet-Sprache](/de/docs/Web/API/StyleSheet), mit der die Darstellung eines in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekten wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschriebenen Dokuments beschrieben wird. CSS beschreibt, wie Elemente auf Bildschirmen, auf Papier, bei der Sprachausgabe oder in anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) browserübergreifend standardisiert. Früher wurden verschiedene Teile der CSS-Spezifikation synchron entwickelt, sodass die jeweils neuesten Empfehlungen eine gemeinsame Versionsnummer erhalten konnten. Vielleicht haben Sie schon von CSS1, CSS2.1 oder sogar CSS3 gehört. Eine CSS3- oder CSS4-Version wird es nie geben; stattdessen heißt alles nur noch „CSS“, wobei einzelne CSS-Module eigene Versionsnummern haben.

Nach CSS 2.1 wurde der Umfang der Spezifikation erheblich erweitert. Die Entwicklung der einzelnen CSS-Module verlief zunehmend unterschiedlich schnell, sodass es sinnvoller wurde, [Empfehlungen für jedes Modul separat zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation als Ganzes zu versionieren, hält das W3C nun regelmäßig [den jeweils aktuellen stabilen Stand der CSS-Spezifikation](https://www.w3.org/TR/css/) fest, während sich die einzelnen Module weiterentwickeln. CSS-Module haben inzwischen Versionsnummern beziehungsweise Stufen (Levels), beispielsweise [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Tutorials für Einsteiger

Unsere [Kernmodule zum Erlernen der Webentwicklung](/de/docs/Learn_web_development/Core) enthalten moderne, aktuelle Tutorials zu den Grundlagen von CSS.

- [Ihre erste Website: Inhalte gestalten](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in CSS und seine Verwendung. Er richtet sich an Personen, für die Webentwicklung noch völlig neu ist.
- [Grundlagen der Gestaltung mit CSS](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Dieses Modul vermittelt alle CSS-Grundlagen, die Sie benötigen, um die Technologie effektiv zu erlernen, einschließlich Syntax, Funktionen und Techniken.
- [Textgestaltung mit CSS](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier behandeln wir die Grundlagen der Textgestaltung mit CSS, darunter Schriftart, Schriftstärke, Kursivschrift, Zeilen- und Zeichenabstand sowie Schlagschatten. Zum Abschluss des Moduls sehen wir uns an, wie Sie eigene Schriftarten auf Ihrer Seite verwenden und Listen und Links gestalten.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Dieses Modul behandelt Floats, Positionierung und weitere moderne Layout-Werkzeuge sowie die Erstellung responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Leitfäden

Die CSS-Leitfäden sind nach Modulen geordnet und helfen Ihnen zu lernen, was Sie mit CSS erreichen können. Die vollständige Liste finden Sie unter [CSS-Leitfäden](/de/docs/Web/CSS/Guides). Sie umfasst unter anderem folgende Themen:

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction), einschließlich Deklarationen und Regelsätzen.
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity), [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) und [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Verschachtelung](/de/docs/Web/CSS/Guides/Nesting), [Gültigkeitsbereiche](/de/docs/Web/CSS/Guides/Scoping) und [Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts)
- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) und [Container Queries](/de/docs/Web/CSS/Guides/Containment)
- [Numerische](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) und [textuelle](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types) Datentypen
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) und [Zusammenfallen von Außenabständen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Containing Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- [Stacking-Kontexte](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) und [Blockformatierungskontexte](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Verarbeitung von Eigenschaftswerten](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing)
- [Kurzschreibweisen für Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Flexbox-](/de/docs/Web/CSS/Guides/Flexible_box_layout), [mehrspaltige](/de/docs/Web/CSS/Guides/Multicol_layout) und [Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout)
- [Animationen](/de/docs/Web/CSS/Guides/Animations/Using), [Übergänge](/de/docs/Web/CSS/Guides/Transitions/Using) und [Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)

## Anleitungen

- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook)
  - : Rezepte für gängige Layout-Muster, die Sie möglicherweise auf Ihren Websites umsetzen möchten. Die Rezepte enthalten Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können. Außerdem zeigen sie verschiedene Möglichkeiten, Layout-Spezifikationen einzusetzen, und welche Entscheidungen Sie dabei als Entwickler treffen können.

## Werkzeuge

- [Border-image-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - : Erzeugen Sie CSS-Werte für {{cssxref("border-image")}}.
- [Border-radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - : Erzeugen Sie Effekte mit {{cssxref("border-radius")}} in CSS.
- [Box-shadow-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
  - : Fügen Sie Ihren CSS-Objekten Effekte mit {{cssxref("box-shadow")}} hinzu.
- [Konverter für Farbformate](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : Geben Sie eine Farbe ein oder wählen Sie eine aus und kopieren Sie den entsprechenden Wert in einem beliebigen CSS-[Farbformat](/de/docs/Web/CSS/Reference/Values/color_value).
- [Farbmischer](/de/docs/Web/CSS/Guides/Colors/Color_mixer)
  - : Mischen Sie mithilfe der Funktion {{cssxref("color_value/color-mix", "color-mix()")}} zwei Farben in einem beliebigen Farbraum und kopieren Sie die resultierende Farbe in einem beliebigen CSS-Farbformat.
- [Formgenerator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator)
  - : Definieren Sie Koordinaten und Syntax für {{cssxref("basic-shape")}}-Formen.

Sie können auch die folgenden Ressourcen verwenden:

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/): Prüfen Sie, ob Ihr CSS gültig ist. Dies ist ein äußerst hilfreiches Werkzeug zur Fehlersuche.
- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html): Sehen Sie sich das CSS einer Seite an und bearbeiten Sie es direkt mit den Werkzeugen [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html).
- [Web Developer-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/): Untersuchen und bearbeiten Sie das CSS von Websites direkt in Firefox.

## Referenz

Durchsuchen Sie die vollständige [CSS-Referenz](/de/docs/Web/CSS/Reference).

- [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties)
  - : Referenz für alle CSS-Eigenschaften.
- [CSS-Selektoren](/de/docs/Web/CSS/Reference/Selectors)
  - : Referenz für CSS-Selektoren, [Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Combinators), [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) und [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).
- [CSS-At-Regeln](/de/docs/Web/CSS/Reference/At-rules)
  - : Referenz für CSS-At-Regeln, einschließlich Media Queries.
- [CSS-Werte](/de/docs/Web/CSS/Reference/Values)
  - : Referenz für CSS-Schlüsselwörter, [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) und [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions).

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Fragen zu CSS auf Stack Overflow](https://stackoverflow.com/questions/tagged/css)

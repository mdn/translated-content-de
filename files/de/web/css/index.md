---
title: "CSS: Cascading Stylesheets"
slug: Web/CSS
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/Guides/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) verfasst ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist über Webbrowser hinweg gemäß [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Früher wurde die Entwicklung der verschiedenen Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder ein CSS4 geben; vielmehr ist jetzt alles einfach "CSS" mit individuellen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 hat sich der Umfang der Spezifikation erheblich erweitert, und der Fortschritt bei den verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, erstellt das W3C nun in regelmäßigen Abständen einen Snapshot des [aktuellen stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts der einzelnen Module. CSS-Module haben jetzt Versionsnummern oder Ebenen, wie das [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Einsteiger-Tutorials

- [Ihre erste Website: Inhalte stylen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet einen kurzen Überblick darüber, was CSS ist und wie Sie es verwenden können, und richtet sich an Personen, die völlig neu im Bereich der Webentwicklung sind.
- [Grundlagen der CSS-Stylings](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Unser [Leitfaden zur Webentwicklung](/de/docs/Learn_web_development) Abschnittsmodul zu den CSS-Grundlagen lehrt die grundlegenden Konzepte von CSS von Grund auf.
- [CSS-Textstyling](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier befassen wir uns mit grundlegenden Konzepten wie der Einstellung von Schriftart, Fett, Kursiv, Zeilen- und Buchstabenabstand, Schlagschatten und anderen Textmerkmalen. Wir beenden das Modul, indem wir betrachten, wie benutzerdefinierte Schriftarten auf Ihre Seite angewendet und Listen und Links gestylt werden.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit zu betrachten, wie Sie Ihre Kästchen im Verhältnis zueinander und zum Browser-Ansichtsfenster korrekt anordnen. Dieses Modul befasst sich mit Floats, Positionierung, anderen modernen Layout-Tools und dem Erstellen von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler, die jede Eigenschaft und jedes Konzept von CSS beschreibt, einschließlich:

- Der [Syntax und Formen der Sprache](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) und [die Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), einschließlich [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries) und [Container-Abfragen](/de/docs/Web/CSS/CSS_containment)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul, einschließlich [numerischer Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [textueller Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) und [funktionaler Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [Einschlussblock](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Stacking](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) und [Block-Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Initial-](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [CSS-Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) und [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzustellen, die Sie möglicherweise in Ihren Websites implementieren müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unverzichtbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglichen das Anzeigen und Bearbeiten von CSS in Echtzeit über die [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)- und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)-Werkzeuge.
- Die [Web Developer Extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht das Verfolgen und Bearbeiten von Live-CSS auf beobachteten Websites.

## Meta-Bugs

- Firefox: [Firefox Bug 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow-Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

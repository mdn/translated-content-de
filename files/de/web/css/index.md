---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML", "XHTML")}}) geschrieben ist. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien gerendert werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist über Webbrowser hinweg gemäß den [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Früher wurde die Entwicklung der verschiedenen Teile der CSS-Spezifikation synchron durchgeführt, was die Versionierung der neuesten Empfehlungen ermöglicht hat. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder CSS4 geben; vielmehr ist jetzt alles einfach "CSS", wobei einzelne CSS-Module Versionsnummern haben.

Nach CSS 2.1 hat sich der Umfang der Spezifikation erheblich erweitert und der Fortschritt bei den verschiedenen CSS-Modulen begann so stark zu variieren, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, nimmt das W3C nun regelmäßig eine Momentaufnahme des [letzten stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und der Fortschritte einzelner Module. CSS-Module haben nun Versionsnummern oder Level, wie z.B. [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Einsteiger-Tutorials

- [Ihre erste Webseite: Styling des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Dieser Artikel bietet eine kurze Einführung in das, was CSS ist und wie man es verwendet, und richtet sich an Personen, die völlig neu in der Webentwicklung sind.
- [Grundlagen der CSS-Styling](/de/docs/Learn_web_development/Core/Styling_basics)
  - : Das CSS-Grundlagenmodul unseres [Leitfadens zur Webentwicklung](/de/docs/Learn_web_development) lehrt die Grundlagen von CSS von Grund auf.
- [CSS-Textformatierung](/de/docs/Learn_web_development/Core/Text_styling)
  - : Hier betrachten wir die Grundlagen, einschließlich der Einstellung von Schriftart, Fettigkeit, Kursivschrift, Zeilen- und Buchstabenabstand, Schlagschatten und anderen Textmerkmalen. Wir schließen das Modul ab, indem wir anpassen, welche Schriftarten auf Ihrer Seite angewendet werden und wie man Listen und Links stylt.
- [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)
  - : Jetzt ist es an der Zeit zu erfahren, wie Sie Ihre Boxen korrekt im Verhältnis zueinander und zum Ansichtsbereich des Browsers layouten. Dieses Modul betrachtet Floats, Positionierung, andere moderne Layout-Tools und den Aufbau von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Die [Syntax und Formen der Sprache](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity), [Vererbung](/de/docs/Web/CSS/Inheritance) und [die Kaskade](/de/docs/Web/CSS/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Bereich](/de/docs/Web/CSS/CSS_scoping) und [Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-Regeln](/de/docs/Web/CSS/At-rule), einschließlich [Media](/de/docs/Web/CSS/CSS_media_queries) und [Container](/de/docs/Web/CSS/CSS_containment)-Abfragen
- [CSS-Einheiten und -Werte](/de/docs/Web/CSS/CSS_Values_and_Units) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [enthältende Block](/de/docs/Web/CSS/Containing_block)
- [Stacking](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) und [Blockformatierung](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [genutzte](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [CSS-Kurzschlüsse](/de/docs/Web/CSS/Shorthand_properties)
- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout) und [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) hat das Ziel, Rezepte für häufig verwendete Layoutmuster zusammenzuführen, die Sie möglicherweise auf Ihren Websites implementieren müssen. Neben dem Bereitstellen von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen genutzt werden können, und welche Entscheidungen Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unverzichtbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, das Live-CSS einer Seite über die Werkzeuge [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) anzuzeigen und zu bearbeiten.
- Die [Web Developer Extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, Live-CSS auf überwachten Seiten zu verfolgen und zu bearbeiten.

## Meta-Fehler

- Firefox: [Firefox-Fehler 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML", "XHTML")}} und [XML](/de/docs/Web/XML/XML_introduction).
- [Stack Overflow Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

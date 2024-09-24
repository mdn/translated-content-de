---
title: "CSS: Kaskadenartige Stylesheets"
slug: Web/CSS
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet-Sprache](/de/docs/Web/API/StyleSheet), die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/XML_introduction) (einschließlich XML-Dialekte wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder {{Glossary("XHTML")}}) geschrieben wurde. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, im Sprachmodus oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist über [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) in Webbrowsern standardisiert. Früher wurden die verschiedenen Teile der CSS-Spezifikation synchron entwickelt, was die Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder CSS4 geben; stattdessen heißt alles jetzt einfach "CSS" und einzelne CSS-Module haben Versionsnummern.

Nach CSS 2.1 nahm der Umfang der Spezifikation erheblich zu und der Fortschritt bei verschiedenen CSS-Modulen begann so stark zu variieren, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, erstellt das W3C nun regelmäßig einen Schnappschuss [des neuesten stabilen Zustands der CSS-Spezifikation](https://www.w3.org/TR/css/) und des Fortschritts einzelner Module. CSS-Module haben jetzt Versionsnummern oder Level, wie etwa [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Wichtige Ressourcen

- CSS-Einführung
  - : Wenn Sie neu in der Webentwicklung sind, sollten Sie unbedingt unseren [CSS-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/CSS_basics) Artikel lesen, um zu erfahren, was CSS ist und wie Sie es verwenden können.
- CSS-Tutorials
  - : Unser [CSS-Lernbereich](/de/docs/Learn/CSS) enthält eine Fülle von Tutorials, die Sie vom Anfängerlevel bis zur Kompetenz führen und alle Grundlagen abdecken.
- CSS-Referenz
  - : Unsere [CSS-Referenz](/de/docs/Web/CSS/Reference) beschreibt jede Eigenschaft und jedes Konzept von CSS.

## Tutorials

Unser [CSS-Lernbereich](/de/docs/Learn/CSS) bietet mehrere Module, die CSS von Grund auf lehren — es sind keine Vorkenntnisse erforderlich.

- [CSS erste Schritte](/de/docs/Learn/CSS/First_steps)
  - : CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten — beispielsweise um Schriftart, Farbe, Größe und Abstände Ihres Inhalts zu ändern, ihn in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieses Modul bietet einen sanften Einstieg auf Ihrem Weg zur CSS-Meisterschaft mit den Grundlagen, wie es funktioniert, wie die Syntax aussieht und wie Sie es verwenden können, um Styles zu HTML hinzuzufügen.
- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)

  - : Dieses Modul knüpft an [CSS erste Schritte](/de/docs/Learn/CSS/First_steps) an — nun, da Sie Vertrautheit mit der Sprache und ihrer Syntax erlangt haben und einige grundlegende Erfahrungen in der Verwendung gesammelt haben, ist es an der Zeit, etwas tiefer zu gehen. In diesem Modul betrachten wir die Kaskade und Vererbung, alle verfügbaren Selektortypen, Einheiten, Größen, Styling von Hintergründen und Rahmen, Debugging und vieles mehr.

    Das Ziel hier ist es, Ihnen ein Werkzeugset zum Schreiben kompetenter CSS bereitzustellen und Ihnen all das wesentliche Wissen zu vermitteln, bevor Sie zu spezifischeren Disziplinen wie [Textstyling](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) übergehen.

- [CSS Textstyling](/de/docs/Learn/CSS/Styling_text)

  - : Nachdem die Grundlagen der CSS-Sprache abgedeckt sind, ist das nächste CSS-Thema, auf das Sie sich konzentrieren sollten, das Stylen von Text – eine der häufigsten Aufgaben, die Sie mit CSS durchführen werden. Hier betrachten wir die Grundlagen des Textstylings, einschließlich der Einstellung von Schriftart, Fettdruck, Kursivdruck, Zeilen- und Buchstabenabstand, Schlagschatten und anderen Texteigenschaften. Wir schließen das Modul ab, indem wir uns ansehen, wie Sie benutzerdefinierte Schriftarten auf Ihrer Seite anwenden und Listen und Links stylen.

- [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)

  - : Zu diesem Zeitpunkt haben wir bereits CSS-Grundlagen, das Stylen von Text und das Stylen und Manipulieren der Boxen behandelt, in denen Ihr Inhalt sitzt. Jetzt ist es an der Zeit, zu schauen, wie Sie Ihre Boxen richtig in Bezug auf den Viewport und zueinander platzieren. Wir haben die notwendigen Voraussetzungen behandelt, so dass wir jetzt tief in CSS-Layout eintauchen können, indem wir verschiedene Anzeigeeinstellungen betrachten, moderne Layout-Tools wie Flexbox, CSS-Grid und Positionierung, sowie einige der älteren Techniken, die Sie vielleicht noch kennen sollten.

- [CSS verwenden, um häufige Probleme zu lösen](/de/docs/Learn/CSS/Howto)
  - : Dieses Modul bietet Links zu Inhaltsabschnitten, die erklären, wie Sie CSS verwenden können, um häufige Probleme bei der Erstellung einer Webseite zu lösen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine erschöpfende Referenz für erfahrene Webentwickler, die jede Eigenschaft und jedes Konzept von CSS beschreibt, einschließlich:

- Die [Syntax und Formen der Sprache](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity), [Vererbung](/de/docs/Web/CSS/Inheritance) und [die Kaskade](/de/docs/Web/CSS/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/At-rule), einschließlich [Medien](/de/docs/Web/CSS/CSS_media_queries) und [Container Abfragen](/de/docs/Web/CSS/CSS_containment)
- [CSS-Einheiten und Werte](/de/docs/Web/CSS/CSS_Values_and_Units) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [enthaltende Block](/de/docs/Web/CSS/Containing_block)
- [Stapel-](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) und [Block-Formatierungs-](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [CSS-Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [Flexibles Boxenlayout](/de/docs/Web/CSS/CSS_flexible_box_layout), [mehrspaltiges](/de/docs/Web/CSS/CSS_multicol_layout) und [Raster-](/de/docs/Web/CSS/CSS_grid_layout) Layout
- [Animationen](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzuführen, die Sie möglicherweise auf Ihren Websites umsetzen müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die unterschiedlichen Möglichkeiten hervor, wie Layoutspezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

## Werkzeuge für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, das Live-CSS einer Seite über die [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Tools anzuzeigen und zu bearbeiten.
- Die [Web Developer Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, Live-CSS auf überwachten Sites zu verfolgen und zu bearbeiten.

## Meta-Fehler

- Firefox: [Firefox Fehler 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS oft angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), {{Glossary("XHTML")}}, und [XML](/de/docs/Web/XML/XML_introduction).
- [Stack Overflow Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

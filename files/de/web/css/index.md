---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{CSSRef}}

**Cascading Style Sheets** (**CSS**) ist eine [Stylesheet](/de/docs/Web/API/StyleSheet)-Sprache, die verwendet wird, um die Präsentation eines Dokumentes zu beschreiben, das in [HTML](/de/docs/Web/HTML) oder [XML](/de/docs/Web/XML/XML_introduction) (einschließlich XML-Dialekten wie [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML) oder [XHTML](/de/docs/Glossary/XHTML)) geschrieben wurde. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in der Sprache oder auf anderen Medien dargestellt werden sollen.

CSS gehört zu den Kernsprachen des **offenen Webs** und ist über Webbrowser gemäß [W3C-Spezifikationen](https://www.w3.org/Style/CSS/#specs) standardisiert. Früher wurde die Entwicklung verschiedener Teile der CSS-Spezifikation synchron durchgeführt, was eine Versionierung der neuesten Empfehlungen ermöglichte. Sie haben vielleicht von CSS1, CSS2.1 oder sogar CSS3 gehört. Es wird niemals ein CSS3 oder CSS4 geben; vielmehr gibt es jetzt nur noch "CSS" mit einzelnen CSS-Modulen, die Versionsnummern haben.

Nach CSS 2.1 nahm der Umfang der Spezifikation erheblich zu und der Fortschritt bei verschiedenen CSS-Modulen begann sich so stark zu unterscheiden, dass es effektiver wurde, [Empfehlungen separat pro Modul zu entwickeln und zu veröffentlichen](https://www.w3.org/Style/CSS/current-work). Anstatt die CSS-Spezifikation zu versionieren, nimmt das W3C nun periodisch eine Momentaufnahme vom [neuesten stabilen Zustand der CSS-Spezifikation](https://www.w3.org/TR/css/) und den Fortschritt der einzelnen Module. CSS-Module haben jetzt Versionsnummern oder Level, wie z. B. [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Wichtige Ressourcen

- CSS-Einführung
  - : Wenn Sie neu in der Webentwicklung sind, lesen Sie unbedingt unseren Artikel [CSS-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/CSS_basics), um zu lernen, was CSS ist und wie es verwendet wird.
- CSS-Tutorials
  - : Unser [CSS-Lernbereich](/de/docs/Learn/CSS) enthält eine Fülle von Tutorials, die Sie vom Anfängerniveau zur Beherrschung führen und alle Grundlagen abdecken.
- CSS-Referenz
  - : Unsere [CSS-Referenz](/de/docs/Web/CSS/Reference) beschreibt jede Eigenschaft und jedes Konzept von CSS.

## Tutorials

Unser [CSS-Lernbereich](/de/docs/Learn/CSS) bietet mehrere Module, die CSS von Grund auf lehren — keine Vorkenntnisse erforderlich.

- [CSS erste Schritte](/de/docs/Learn/CSS/First_steps)
  - : CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und anzuordnen — zum Beispiel, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieses Modul bietet einen sanften Einstieg auf Ihrem Weg zur CSS-Meisterschaft mit den Grundlagen, wie es funktioniert, wie die Syntax aussieht und wie Sie beginnen können, es zu verwenden, um HTML zu stylen.
- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)

  - : Dieses Modul setzt dort fort, wo [CSS erste Schritte](/de/docs/Learn/CSS/First_steps) aufgehört hat — jetzt, da Sie sich mit der Sprache und ihrer Syntax vertraut gemacht haben und einige grundlegende Erfahrungen mit ihrer Verwendung gesammelt haben, ist es an der Zeit, ein bisschen tiefer einzutauchen. Dieses Modul befasst sich mit der Kaskade und Vererbung, allen verfügbaren Selektortypen, Einheiten, Größenanpassung, Hintergrund- und Rahmenstilen, Fehlerbehebung und vielem mehr.

    Das Ziel hier ist es, Ihnen ein Toolkit zum Schreiben von kompetentem CSS bereitzustellen und Sie alle wesentlichen Theorien verstehen zu lassen, bevor Sie zu spezifischeren Disziplinen wie [Textgestaltung](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) übergehen.

- [CSS Textgestaltung](/de/docs/Learn/CSS/Styling_text)

  - : Nachdem die Grundlagen der CSS-Sprache behandelt wurden, ist das nächste Thema, auf das Sie sich konzentrieren sollten, die Textgestaltung — eines der häufigsten Dinge, die Sie mit CSS tun werden. Hier betrachten wir die Grundlagen der Textgestaltung, einschließlich Schriftart, Fettung, Kursivschrift, Zeilen- und Buchstabensperrung, Schlagschatten und andere Texteigenschaften. Wir schließen das Modul ab, indem wir uns die Anwendung benutzerdefinierter Schriftarten auf Ihre Seite ansehen und Listen und Links gestalten.

- [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)

  - : An diesem Punkt haben wir bereits grundlegende CSS-Konzepte betrachtet, wie man Text gestaltet und wie man die Kästen manipuliert, in denen sich Ihr Inhalt befindet. Jetzt ist es an der Zeit, zu betrachten, wie Sie Ihre Kästen im Verhältnis zum Ansichtsfenster und zueinander platzieren. Wir haben die notwendigen Voraussetzungen behandelt, so dass wir jetzt tief in das CSS-Layout eintauchen können, unterschiedliche Anzeigeeinstellungen betrachten, moderne Layout-Tools wie flexbox, CSS-Grid und Positionierung sowie einige der Legacy-Techniken, die Sie vielleicht noch kennen sollten.

- [Verwenden Sie CSS, um häufige Probleme zu lösen](/de/docs/Learn/CSS/Howto)
  - : Dieses Modul bietet Links zu Inhaltsabschnitten, die erklären, wie Sie CSS verwenden können, um häufige Probleme bei der Erstellung einer Webseite zu lösen.

## Referenz

Die [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine umfassende Referenz für erfahrene Webentwickler und beschreibt jede Eigenschaft und jedes Konzept von CSS, einschließlich:

- Der [Syntax und der Formen der Sprache](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity), [Vererbung](/de/docs/Web/CSS/Inheritance) und [der Kaskade](/de/docs/Web/CSS/Cascade)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), einschließlich [Pseudoelementen](/de/docs/Web/CSS/CSS_pseudo-elements), [Verschachtelung](/de/docs/Web/CSS/CSS_nesting), [Scoping](/de/docs/Web/CSS/CSS_scoping) und [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts)
- [CSS-At-Regeln](/de/docs/Web/CSS/At-rule), einschließlich [Media](/de/docs/Web/CSS/CSS_media_queries) und [Container](/de/docs/Web/CSS/CSS_containment) Abfragen
- [CSS-Einheiten und Werte](/de/docs/Web/CSS/CSS_Values_and_Units) und [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und [Rand-Zusammenbruch](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- Der [umfassende Block](/de/docs/Web/CSS/Containing_block)
- [Stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) und [Blockformatierungs](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexte
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [CSS-Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) und [Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout)
- [Animation](/de/docs/Web/CSS/CSS_animations), [Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Transformationen](/de/docs/Web/CSS/CSS_transforms)

## Kochbuch

Das [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzubringen, die Sie möglicherweise auf Ihren Websites umsetzen müssen. Zusätzlich zum Bereitstellen von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

## Tools für die CSS-Entwicklung

- Sie können den [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) verwenden, um zu überprüfen, ob Ihr CSS gültig ist. Dies ist ein unschätzbares Debugging-Tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) ermöglicht es Ihnen, das Live-CSS einer Seite über die [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) Tools anzuzeigen und zu bearbeiten.
- Die [Web Developer Extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) für Firefox ermöglicht es Ihnen, Live-CSS auf überwachten Seiten zu verfolgen und zu bearbeiten.

## Meta Fehler

- Firefox: [Firefox Fehler 1323667](https://bugzil.la/1323667)

## Siehe auch

- Websprachen, auf die CSS häufig angewendet wird: [HTML](/de/docs/Web/HTML), [SVG](/de/docs/Web/SVG), [MathML](/de/docs/Web/MathML), [XHTML](/de/docs/Glossary/XHTML) und [XML](/de/docs/Web/XML/XML_introduction).
- [Stack Overflow Fragen zu CSS](https://stackoverflow.com/questions/tagged/css)

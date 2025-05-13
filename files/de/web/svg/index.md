---
title: "SVG: Scalable Vector Graphics"
short-title: SVG
slug: Web/SVG
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

**Scalable Vector Graphics (SVG)** ist eine auf [XML](/de/docs/Web/XML) basierende Markup-Sprache zur Beschreibung zweidimensionaler [Vektorgrafiken](https://en.wikipedia.org/wiki/Vector_graphics).

Als solches ist es ein textbasiertes, offenes Web-Standardformat zur Beschreibung von Bildern, die in jeder Größe klar dargestellt werden können und speziell dafür entwickelt wurden, gut mit anderen Web-Standards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zu funktionieren. SVG ist im Wesentlichen für Grafiken, was [HTML](/de/docs/Web/HTML) für Text ist.

SVG-Bilder und ihre zugehörigen Verhaltensweisen werden in [XML](/de/docs/Web/XML)-Textdateien definiert, was bedeutet, dass sie durchsucht, indexiert, geskriptet und komprimiert werden können. Darüber hinaus bedeutet das, dass sie mit jedem Texteditor oder mit Zeichenprogrammen erstellt und bearbeitet werden können.

Im Vergleich zu klassischen Bitmap-Bildformaten wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} können SVG-Format-Vektorbilder in jeder Größe ohne Qualitätsverlust gerendert werden und können leicht lokalisiert werden, indem der Text innerhalb der Bilder aktualisiert wird, ohne dass ein grafischer Editor benötigt wird. Mit geeigneten Bibliotheken können SVG-Dateien sogar dynamisch lokalisiert werden.

SVG wurde seit 1999 vom [World Wide Web Consortium (W3C)](https://www.w3.org/) entwickelt.

## Tutorials

Die [SVG-Tutorials](/de/docs/Web/SVG/Tutorials) sind darauf ausgelegt, Sie durch die Themen zu führen, indem sie davon ausgehen, dass Sie keine Vorkenntnisse haben, beginnend mit den Grundlagen und sich zu fortgeschritteneren Techniken entwickelnd.

- [Introducing SVG from scratch](/de/docs/Web/SVG/Tutorials/SVG_from_scratch)
  - : Dieses Tutorial zielt darauf ab, die Interna von SVG zu erklären und ist voller technischer Details. Wenn Sie nur schöne Bilder zeichnen möchten, finden Sie möglicherweise nützlichere Ressourcen auf der [Inkscape-Dokumentationsseite](https://inkscape.org/learn/). Eine weitere gute Einführung in SVG bietet das [SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) des W3C. Schauen Sie sich auch dieses adventskalenderthematische [SVG-Tutorial](https://svg-tutorial.com/) an, das Sie durch das Codieren von 25 festlichen SVGs führt.

## Leitfaden

Die [SVG-Leitfäden](/de/docs/Web/SVG/Guides) helfen Ihnen beim Arbeiten mit SVG im Web und decken Themen ab wie Einbetten, MIME-Typen, Skripthandhabung, Animationen, Filter und mehr.

- [Applying SVG effects to HTML content](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Moderne Browser unterstützen die Verwendung von SVG innerhalb von CSS-Stilen, um grafische Effekte auf HTML-Inhalte anzuwenden.
- [Content type](/de/docs/Web/SVG/Guides/Content_type)
  - : SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen dessen, wofür sie verwendet werden, auf.
- [Namespaces crash course](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Namensräume sind für Benutzeragenten unerlässlich, die mehrere XML-Dialekte unterstützen. Browser müssen sehr strikt sein; sich jetzt die Zeit zu nehmen, Namensräume zu verstehen, bewahrt Sie vor zukünftigen Kopfschmerzen.
- [Scripting](/de/docs/Web/SVG/Guides/Scripting)
  - : Es gibt mehrere Möglichkeiten, SVG mithilfe von JavaScript zu erstellen und zu manipulieren. Dieses Dokument beschreibt die Ereignisbehandlung, Interaktivität und das Arbeiten mit eingebetteten SVG-Inhalten.
- [SVG animation with SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : SMIL ist eine auf XML basierende Sprache für das Schreiben von interaktiven Multimedia-Präsentationen. Autoren können SMIL-Syntax in SVG verwenden, um das Timing und Layout von Elementen für Animationen zu definieren.
- [SVG as an image](/de/docs/Web/SVG/Guides/SVG_as_an_image)
  - : SVG kann als Bildformat in HTML, CSS, bestimmten SVG-Elementen und über die Canvas-API verwendet werden. Diese Seite listet die Funktionen auf, bei denen Sie SVG als Bildquelle bereitstellen können.
- [SVG filters](/de/docs/Web/SVG/Guides/SVG_filters)
  - : SVG unterstützt Filter, sodass Autoren Effekte wie Schatten oder Weichzeichnung anwenden oder sogar die Ergebnisse verschiedener Filter kombinieren können.
- [SVG in HTML introduction](/de/docs/Web/SVG/Guides/SVG_in_HTML)
  - : Dieser Artikel zeigt, wie Sie eingebettetes SVG verwenden und enthält Beispiele zur Veranschaulichung.

## Referenz

Die [SVG-Referenz](/de/docs/Web/SVG/Reference)-Dokumentation enthält umfassende Informationen zu Elementen, Attributen und DOM-Schnittstellen und listet relevante Spezifikationen und Standarddokumente auf.

- [SVG elements](/de/docs/Web/SVG/Reference/Element)
  - : Die SVG-Elemente, die zur Konstruktion, zum Zeichnen und zur Layoutgestaltung von Vektorgrafiken verwendet werden.
- [SVG attributes](/de/docs/Web/SVG/Reference/Attribute)
  - : Die verfügbaren SVG-Attribute, die verwendet werden können, um zu spezifizieren, wie ein Element gehandhabt oder gerendert werden soll.
- [SVG DOM interface](/de/docs/Web/API/Document_Object_Model#svg_dom)
  - : Die SVG-DOM-API zur Interaktion mit SVG unter Verwendung von JavaScript.

## Ressourcen

- [SVG test suite](https://github.com/w3c/svgwg/wiki/Testing)
- [Markup validator](https://validator.w3.org/#validate_by_input)
- [SVG authoring guidelines](https://jwatt.org/svg/authoring/)
- [SVG tutorial](https://svg-tutorial.com/)
- [D3 data visualization library](https://d3js.org/)

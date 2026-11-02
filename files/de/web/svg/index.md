---
title: "SVG: Skalierbare Vektorgrafiken"
short-title: SVG
slug: Web/SVG
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

**Scalable Vector Graphics (SVG)** ist eine auf [XML](/de/docs/Web/XML) basierende Auszeichnungssprache zur Beschreibung zweidimensionaler [Vektorgrafiken](https://en.wikipedia.org/wiki/Vector_graphics).

SVG ist damit ein textbasierter, offener Webstandard zur Beschreibung von Bildern, die sich bei jeder Größe scharf darstellen lassen. SVG wurde speziell für die Zusammenarbeit mit anderen Webstandards entwickelt, darunter [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL). Im Wesentlichen ist SVG für Grafiken das, was [HTML](/de/docs/Web/HTML) für Text ist.

SVG-Bilder und ihr zugehöriges Verhalten werden in [XML](/de/docs/Web/XML)-Textdateien definiert. Dadurch lassen sie sich durchsuchen, indexieren, mit Skripten bearbeiten und komprimieren. Außerdem können sie mit jedem Texteditor oder mit Zeichenprogrammen erstellt und bearbeitet werden.

Im Gegensatz zu klassischen Bitmap-Bildformaten wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} lassen sich Vektorgrafiken im SVG-Format ohne Qualitätsverlust in jeder Größe darstellen. Sie können außerdem einfach lokalisiert werden, indem der enthaltene Text geändert wird – ein Grafikeditor ist dafür nicht erforderlich. Mit geeigneten Bibliotheken lassen sich SVG-Dateien sogar dynamisch lokalisieren.

SVG wird seit 1999 vom [World Wide Web Consortium (W3C)](https://www.w3.org/) entwickelt.

## Tutorials

Die [SVG-Tutorials](/de/docs/Web/SVG/Tutorials) führen Sie ohne vorausgesetzte Vorkenntnisse durch die Themen – von den Grundlagen bis hin zu fortgeschrittenen Techniken.

- [Einführung in SVG von Grund auf](/de/docs/Web/SVG/Tutorials/SVG_from_scratch)
  - : Dieses Tutorial erklärt die Funktionsweise von SVG im Detail und enthält viele technische Einzelheiten. Wenn Sie einfach nur ansprechende Bilder zeichnen möchten, finden Sie möglicherweise hilfreichere Ressourcen auf der [Dokumentationsseite von Inkscape](https://inkscape.org/learn/). Eine weitere gute Einführung in SVG bietet der [SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) des W3C. Sehen Sie sich auch dieses adventskalenderartige [SVG-Tutorial](https://svg-tutorial.com/) an, das Sie durch die Programmierung von 25 festlichen SVG-Grafiken führt.

## Leitfäden

Die [SVG-Leitfäden](/de/docs/Web/SVG/Guides) helfen Ihnen bei der Arbeit mit SVG im Web. Sie behandeln Themen wie Einbettung, MIME-Typen (Medientypen), den Umgang mit Skripten, Animationen, Filter und mehr.

- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
  - : Filter können die von einem Element gezeichneten Pixel weichzeichnen, verschieben, umfärben und kombinieren – sowohl in SVG als auch in HTML-Inhalten.
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Moderne Browser unterstützen die Verwendung von SVG in CSS-Stilen, um grafische Effekte auf HTML-Inhalte anzuwenden.
- [Inhaltstypen](/de/docs/Web/SVG/Guides/Content_type)
  - : SVG verwendet verschiedene Datentypen. Dieser Artikel führt sie mit ihrer Syntax auf und beschreibt, wofür sie verwendet werden.
- [Schnelleinstieg in Namespaces](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Namespaces sind für User Agents, die mehrere XML-Dialekte unterstützen, unerlässlich.
    Browser müssen dabei sehr strikt sein. Wenn Sie sich jetzt mit Namespaces vertraut machen, ersparen Sie sich später Probleme.
- [Skripting](/de/docs/Web/SVG/Guides/Scripting)
  - : Es gibt verschiedene Möglichkeiten, SVG mit JavaScript zu erstellen und zu bearbeiten.
    Dieses Dokument beschreibt die Ereignisbehandlung, Interaktivität und die Arbeit mit eingebetteten SVG-Inhalten.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : SMIL ist eine XML-basierte Sprache zum Erstellen interaktiver Multimedia-Präsentationen.
    Mit der SMIL-Syntax können Sie in SVG den zeitlichen Ablauf und das Layout von Elementen für Animationen festlegen.
- [SVG als Bild](/de/docs/Web/SVG/Guides/SVG_as_an_image)
  - : SVG kann in HTML, CSS, bestimmten SVG-Elementen und über die Canvas API als Bildformat verwendet werden.
    Diese Seite listet die Funktionen auf, bei denen Sie SVG als Bildquelle angeben können.
- [Einführung in SVG in HTML](/de/docs/Web/SVG/Guides/SVG_in_HTML)
  - : Dieser Artikel zeigt anhand von Beispielen, wie Sie Inline-SVG verwenden.

## Referenz

Die [SVG-Referenz](/de/docs/Web/SVG/Reference) enthält umfassende Informationen zu Elementen, Attributen und DOM-Schnittstellen sowie eine Liste relevanter Spezifikationen und Standarddokumente.

- [SVG-Elemente](/de/docs/Web/SVG/Reference/Element)
  - : Die SVG-Elemente zum Erstellen, Zeichnen und Anordnen von Vektorgrafiken.
- [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute)
  - : Die verfügbaren SVG-Attribute, mit denen Sie festlegen können, wie ein Element behandelt oder dargestellt werden soll.
- [SVG-DOM-Schnittstelle](/de/docs/Web/API/Document_Object_Model#svg_dom)
  - : Die SVG DOM API für die Interaktion mit SVG mithilfe von JavaScript.

## Ressourcen

- [SVG-Testsuite](https://github.com/w3c/svgwg/wiki/Testing)
- [Markup-Validator](https://validator.w3.org/#validate_by_input)
- [Richtlinien zum Erstellen von SVG](https://jwatt.org/svg/authoring/)
- [SVG-Tutorial](https://svg-tutorial.com/)
- [D3-Bibliothek zur Datenvisualisierung](https://d3js.org/)

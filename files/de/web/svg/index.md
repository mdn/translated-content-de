---
title: "SVG: Scalable Vector Graphics"
short-title: SVG
slug: Web/SVG
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**Scalable Vector Graphics (SVG)** ist eine auf [XML](/de/docs/Web/XML) basierende Auszeichnungssprache zur Beschreibung von zweidimensionalen [Vektorgrafiken](https://de.wikipedia.org/wiki/Vektorgrafik).

Als solche ist es ein textbasiertes, offenes Web-Standardformat zur Beschreibung von Bildern, die in jeder Größe sauber dargestellt werden können, und speziell dafür entwickelt, gut mit anderen Webstandards wie [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript) und [SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) zusammenzuarbeiten. SVG ist im Wesentlichen für Grafiken das, was [HTML](/de/docs/Web/HTML) für Text ist.

SVG-Bilder und deren zugehörige Verhaltensweisen werden in [XML](/de/docs/Web/XML)-Textdateien definiert, was bedeutet, dass sie durchsucht, indexiert, gescriptet und komprimiert werden können. Außerdem bedeutet dies, dass sie mit jedem Texteditor oder mit Grafiksoftware erstellt und bearbeitet werden können.

Im Vergleich zu klassischen Rasterbildformaten wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} können SVG-Format-Vektorbilder in jeder Größe ohne Qualitätsverlust dargestellt werden und lassen sich leicht durch Aktualisierung des innerhalb von ihnen befindlichen Textes lokal anpassen, ohne dass dafür ein Grafikeditor erforderlich ist. Mit den richtigen Bibliotheken können SVG-Dateien sogar in Echtzeit lokalisiert werden.

SVG wurde seit 1999 vom [World Wide Web Consortium (W3C)](https://www.w3.org/) entwickelt.

## Tutorials

Die [SVG-Tutorials](/de/docs/Web/SVG/Tutorials) sind so konzipiert, dass sie Sie durch die Themen führen, ohne dass Vorkenntnisse erforderlich sind. Sie beginnen mit den Grundlagen und steigern sich zu fortgeschritteneren Techniken.

- [SVG von Grund auf neu einführen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch)
  - : Dieses Tutorial zielt darauf ab, die Interna von SVG zu erklären und ist vollgepackt mit technischen Details. Wenn Sie einfach nur schöne Bilder zeichnen möchten, finden Sie nützlichere Ressourcen auf der [Inkscape-Dokumentationsseite](https://inkscape.org/learn/). Eine weitere gute Einführung in SVG bietet der [SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) des W3C. Sehen Sie sich auch dieses Adventskalender-Thema [SVG-Tutorial](https://svg-tutorial.com/) an, das Ihnen beim Codieren von 25 festlichen SVGs hilft.

## Leitfaden

Die [SVG-Leitfäden](/de/docs/Web/SVG/Guides) helfen Ihnen, mit SVG im Web zu arbeiten, und behandeln Themen wie Einbettung, MIME-(Medien-)Typen, Umgang mit Skripten, Animationen, Filter und mehr.

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Moderne Browser unterstützen die Verwendung von SVG innerhalb von CSS-Stilen, um grafische Effekte auf HTML-Inhalte anzuwenden.
- [Inhaltstyp](/de/docs/Web/SVG/Guides/Content_type)
  - : SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen, wofür sie verwendet werden, auf.
- [Namespaces-Schnellkurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Namespaces sind für Benutzeragenten, die mehrere XML-Dialekte unterstützen, unerlässlich.
    Browser müssen sehr streng sein; wenn Sie sich jetzt die Zeit nehmen, Namespaces zu verstehen, bewahrt Sie das vor zukünftigen Kopfschmerzen.
- [Scripting](/de/docs/Web/SVG/Guides/Scripting)
  - : Es gibt mehrere Möglichkeiten, SVG mit JavaScript zu erstellen und zu manipulieren.
    Dieses Dokument beschreibt die Ereignisbehandlung, Interaktivität und das Arbeiten mit eingebetteten SVG-Inhalten.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : SMIL ist eine XML-basierte Sprache zum Schreiben interaktiver Multimedia-Präsentationen.
    Autoren können die SMIL-Syntax in SVG verwenden, um das Timing und Layout von Elementen für Animationen zu definieren.
- [SVG als Bild](/de/docs/Web/SVG/Guides/SVG_as_an_image)
  - : SVG kann als Bildformat in HTML, CSS, bestimmten SVG-Elementen und über die Canvas-API verwendet werden.
    Diese Seite listet die Funktionen auf, bei denen Sie SVG als Bildquelle bereitstellen können.
- [SVG-Filter](/de/docs/Web/SVG/Guides/SVG_filters)
  - : SVG unterstützt Filter, sodass Autoren Effekte wie einen Schatten oder eine Unschärfe anwenden oder sogar die Ergebnisse verschiedener Filter zusammenführen können.
- [Einführung in SVG in HTML](/de/docs/Web/SVG/Guides/SVG_in_HTML)
  - : Dieser Artikel zeigt, wie Sie inline SVG verwenden und enthält Beispiele zur Veranschaulichung.

## Referenz

Die [SVG-Referenz](/de/docs/Web/SVG/Reference)-Dokumentation enthält umfassende Informationen zu Elementen, Attributen und DOM-Schnittstellen und listet relevante Spezifikationen und Standarddokumente auf.

- [SVG-Elemente](/de/docs/Web/SVG/Reference/Element)
  - : Die SVG-Elemente, die verwendet werden, um Vektorgrafiken zu konstruieren, zu zeichnen und zu layouten.
- [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute)
  - : Die verfügbaren SVG-Attribute, die verwendet werden können, um zu spezifizieren, wie ein Element behandelt oder dargestellt werden soll.
- [SVG-DOM-Schnittstelle](/de/docs/Web/API/Document_Object_Model#svg_dom)
  - : Die SVG-DOM-API zur Interaktion mit SVG unter Verwendung von JavaScript.

## Ressourcen

- [SVG-Testumgebung](https://github.com/w3c/svgwg/wiki/Testing)
- [Markup-Validator](https://validator.w3.org/#validate_by_input)
- [SVG-Autorenrichtlinien](https://jwatt.org/svg/authoring/)
- [SVG-Tutorial](https://svg-tutorial.com/)
- [D3-Datenvisualisierungsbibliothek](https://d3js.org/)

---
title: Einführung
slug: Web/SVG/Tutorials/SVG_from_scratch/Introduction
l10n:
  sourceCommit: 12f1c2ad8d4378d332a625b2601c575ca773cf26
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

[SVG](/de/docs/Web/SVG) ist eine [XML](/de/docs/Web/XML)-Sprache, ähnlich wie {{Glossary("XHTML", "XHTML")}}, die verwendet werden kann, um Vektorgrafiken zu zeichnen, wie sie unten gezeigt werden. Es kann verwendet werden, um ein Bild entweder durch die Angabe aller notwendigen Linien und Formen zu erstellen, durch die Modifikation bereits vorhandener Rasterbilder oder durch eine Kombination aus beidem. Das Bild und seine Komponenten können auch transformiert, zusammengesetzt oder gefiltert werden, um ihr Erscheinungsbild vollständig zu verändern.

![Mozilla dino logo](dino.svg)

SVG entstand 1999, nachdem mehrere konkurrierende Formate dem [W3C](https://www.w3.org/) vorgelegt wurden und es nicht geschafft hatten, vollständig ratifiziert zu werden. SVG wird von allen großen [Browsern](https://caniuse.com/#search=svg) unterstützt. Ein Nachteil ist, dass das Laden von SVG langsam sein kann. SVG bietet jedoch Vorteile, einige davon sind die Verfügbarkeit einer [DOM-Schnittstelle](/de/docs/Web/API) und es benötigt keine Drittanbieter-Erweiterungen. Ob es verwendet wird oder nicht, hängt oft von Ihrem speziellen Anwendungsfall ab.

## Grundlegende Zutaten

[HTML](/de/docs/Web/HTML) stellt Elemente zum Definieren von Überschriften, Absätzen, Tabellen usw. zur Verfügung. Auf ähnliche Weise stellt SVG Elemente für Kreise, Rechtecke sowie einfache und komplexe Kurven zur Verfügung. Ein einfaches SVG-Dokument besteht aus nichts weiter als dem {{ SVGElement('svg') }}-Wurzelelement und mehreren grundlegenden Formen, die zusammen eine Grafik erstellen. Zusätzlich gibt es das {{ SVGElement('g') }}-Element, das verwendet wird, um mehrere Grundformen zusammenzufassen.

Ausgehend von dieser Grundstruktur kann das SVG-Bild beliebig komplex werden. SVG unterstützt Verläufe, Rotationen, Filtereffekte, Animationen, Interaktivität mit JavaScript und vieles mehr. Aber all diese zusätzlichen Funktionen der Sprache basieren auf diesem relativ kleinen Satz von Elementen zur Definition des Grafikbereichs.

## Bevor Sie anfangen

Es gibt eine Reihe von Zeichenanwendungen, wie [Inkscape](https://inkscape.org/), die kostenlos sind und SVG als ihr natives Dateiformat verwenden. Diese Anleitung wird sich jedoch auf den bewährten XML- oder Texteditor verlassen (Ihre Wahl). Die Idee ist es, die Grundlagen von SVG an diejenigen zu lehren, die es verstehen wollen, und das gelingt am besten, indem man sich mit etwas Markup die Hände schmutzig macht. Sie sollten jedoch Ihr endgültiges Ziel beachten. Nicht alle SVG-Viewer sind gleich, und es besteht eine gute Chance, dass etwas, das für eine App geschrieben wurde, in einer anderen nicht genau gleich angezeigt wird, weil sie unterschiedliche Stufen der SVG-Spezifikation oder eine andere Spezifikation unterstützen, die Sie zusammen mit SVG verwenden (das heißt, [JavaScript](/de/docs/Web/JavaScript) oder [CSS](/de/docs/Web/CSS)).

SVG wird in allen modernen Browsern unterstützt und in einigen Fällen sogar einige Versionen zurück. Eine recht vollständige Browser-Kompatibilitätstabelle finden Sie auf [Can I use](https://caniuse.com/svg). Firefox unterstützt einige SVG-Inhalte seit Version 1.5, und dieses Unterstützungsniveau ist mit jeder Veröffentlichung gewachsen. Hoffentlich kann zusammen mit dieser Anleitung MDN Entwicklern dabei helfen, mit den Unterschieden zwischen Gecko und einigen anderen Hauptimplementierungen Schritt zu halten.

Bevor Sie beginnen, sollten Sie ein grundlegendes Verständnis von XML oder einer anderen Auszeichnungssprache wie HTML haben. Wenn Sie mit XML nicht allzu vertraut sind, hier einige Richtlinien, die Sie im Auge behalten sollten:

- SVG-Elemente und Attribute sollten alle in der hier gezeigten Schreibweise eingegeben werden, da XML groß- und kleinschreibungssensitiv ist (im Gegensatz zu HTML).
- Attributwerte in SVG müssen in Anführungszeichen gesetzt werden, selbst wenn es sich um Zahlen handelt.

SVG ist eine umfangreiche Spezifikation. Diese Anleitung versucht, die Grundlagen abzudecken. Sobald Sie mit diesen vertraut sind, sollten Sie in der Lage sein, das [Element-Referenz](/de/docs/Web/SVG/Reference/Element) und die [Schnittstellen-Referenz](/de/docs/Web/API/Document_Object_Model#svg_dom) zu nutzen, um alles andere herauszufinden, was Sie wissen müssen.

## Geschmackssorten von SVG

Seit der Empfehlung im Jahr 2003 ist die neueste "vollständige" SVG-Version 1.1. Sie baut auf SVG 1.0 auf, fügt aber mehr Modularisierung hinzu, um die Implementierung zu erleichtern. [Die zweite Ausgabe von SVG 1.1](https://www.w3.org/TR/SVG11/) wurde 2011 eine Empfehlung. "Vollständiges" SVG 1.2 sollte die nächste große Veröffentlichung von SVG sein. Es wurde zugunsten der [SVG 2.0](https://svgwg.org/svg2-draft/) Spezifikation fallen gelassen, die 2018 eine Kandidatenempfehlung wurde und der aktuelle Standard ist. SVG 2.0 folgt einem ähnlichen Ansatz wie CSS, indem es Komponenten in mehrere lose gekoppelte Spezifikationen aufteilt, wie z.B. [SVG Striche](https://svgwg.org/specs/strokes/), [SVG Pfade](https://svgwg.org/specs/paths/) und [SVG Markierungen](https://svgwg.org/specs/markers/).

Abgesehen von den vollständigen SVG-Empfehlungen führte die Arbeitsgruppe des W3C 2003 SVG Tiny und SVG Basic ein. Diese beiden Profile richten sich hauptsächlich an mobile Geräte. Das erste, SVG Tiny, sollte Grafikprimitive für kleine Geräte mit geringen Fähigkeiten liefern. SVG Basic bietet viele Funktionen von vollständigem SVG, schließt jedoch diejenigen aus, die schwer zu implementieren oder rechenintensiv zu rendern sind (wie Animationen). Im Jahr 2008 wurde SVG Tiny 1.2 eine W3C-Empfehlung.

Es gab Pläne für eine SVG Print-Spezifikation, die Unterstützung für mehrere Seiten und verbessertes Farbmanagement hinzufügen sollte. Diese Arbeit wurde eingestellt.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

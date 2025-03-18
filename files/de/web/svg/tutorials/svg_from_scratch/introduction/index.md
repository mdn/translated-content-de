---
title: Einführung
slug: Web/SVG/Tutorials/SVG_from_scratch/Introduction
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

[SVG](/de/docs/Web/SVG) ist eine [XML](/de/docs/Web/XML)-Sprache, ähnlich wie {{Glossary("XHTML", "XHTML")}}, die zur Erstellung von Vektorgrafiken verwendet werden kann, wie die unten gezeigte. Es kann verwendet werden, um ein Bild entweder durch die Angabe aller notwendigen Linien und Formen zu erstellen, durch die Bearbeitung bereits vorhandener Rasterbilder, oder durch eine Kombination beider Methoden. Das Bild und seine Komponenten können auch transformiert, kombiniert oder gefiltert werden, um ihr Erscheinungsbild vollständig zu ändern.

![Mozilla Dino Logo](dino.svg)

SVG entstand 1999, nachdem mehrere konkurrierende Formate beim [W3C](https://www.w3.org/) eingereicht und nicht vollständig ratifiziert wurden. SVG wird von allen großen [Browsern](https://caniuse.com/#search=svg) unterstützt. Ein Nachteil ist, dass das Laden von SVG langsam sein kann. SVG bietet jedoch Vorteile, von denen einige eine verfügbare [DOM-Schnittstelle](/de/docs/Web/API) beinhalten und keine Drittanbieter-Erweiterungen erfordern. Ob es verwendet wird, hängt oft von Ihrem spezifischen Anwendungsfall ab.

## Grundlegende Bestandteile

[HTML](/de/docs/Web/HTML) stellt Elemente zur Definition von Überschriften, Absätzen, Tabellen usw. bereit. In ähnlicher Weise stellt SVG Elemente für Kreise, Rechtecke und einfache sowie komplexe Kurven bereit. Ein grundlegendes SVG-Dokument besteht aus nichts anderem als dem {{ SVGElement('svg') }} Wurzelelement und mehreren Grundformen, die zusammen eine Grafik bilden. Darüber hinaus gibt es das {{ SVGElement('g') }} Element, das verwendet wird, um mehrere Grundformen zusammen zu gruppieren.

Beginnend mit dieser grundlegenden Struktur kann das SVG-Bild beliebig komplex werden. SVG unterstützt Verläufe, Rotationen, Filtereffekte, Animationen, Interaktivität mit JavaScript usw. Aber alle diese zusätzlichen Merkmale der Sprache basieren auf diesem relativ kleinen Satz von Elementen zur Definition des Grafikbereichs.

## Bevor Sie beginnen

Es gibt eine Reihe von Zeichenanwendungen, wie zum Beispiel [Inkscape](https://inkscape.org/), die kostenlos sind und SVG als ihr nativer Dateiformat verwenden. In diesem Tutorial wird jedoch der bewährte XML- oder Text-Editor (nach Ihrer Wahl) verwendet. Die Idee ist, die Interna von SVG denen zu lehren, die es verstehen wollen, und das wird am besten erreicht, indem Sie etwas mit Markup hantieren. Beachten Sie jedoch Ihr Endziel. Nicht alle SVG-Viewer sind gleich und es besteht eine gute Chance, dass etwas, das für eine App geschrieben wurde, nicht genau gleich in einer anderen angezeigt wird, da sie unterschiedliche Stufen der SVG-Spezifikation oder einer anderen Spezifikation, die Sie zusammen mit SVG verwenden (z.B. [JavaScript](/de/docs/Web/JavaScript) oder [CSS](/de/docs/Web/CSS)), unterstützen.

SVG wird in allen modernen Browsern und in einigen Fällen sogar einige Versionen zurück unterstützt. Eine ziemlich vollständige Browser-Kompatibilitätstabelle finden Sie auf [Can I use](https://caniuse.com/svg). Firefox unterstützt einige SVG-Inhalte seit der Version 1.5, und dieses Unterstützungsniveau hat mit jeder Version zugenommen. Hoffentlich kann MDN, zusammen mit dem Tutorial hier, Entwicklern helfen, die Unterschiede zwischen Gecko und einigen der anderen großen Implementierungen zu verstehen.

Bevor Sie beginnen, sollten Sie ein grundlegendes Verständnis von XML oder einer anderen Markup-Sprache wie HTML haben. Wenn Sie mit XML nicht vertraut sind, sind hier einige Richtlinien, die Sie beachten sollten:

- SVG-Elemente und -Attribute sollten alle in der hier gezeigten Schreibweise eingegeben werden, da XML im Gegensatz zu HTML zwischen Groß- und Kleinschreibung unterscheidet.
- Attributwerte in SVG müssen in Anführungszeichen gesetzt werden, auch wenn sie Zahlen sind.

SVG ist eine umfangreiche Spezifikation. Dieses Tutorial versucht, die Grundlagen abzudecken. Sobald Sie mit diesen vertraut sind, sollten Sie in der Lage sein, das [Element Reference](/de/docs/Web/SVG/Reference/Element) und das [Interface Reference](/de/docs/Web/API/Document_Object_Model#svg_dom) zu verwenden, um alles Weitere herauszufinden, was Sie wissen müssen.

## Varianten von SVG

Seit es 2003 eine Empfehlung wurde, ist die aktuellste "vollständige" SVG-Version 1.1. Sie baut auf SVG 1.0 auf, fügt jedoch mehr Modularisierung hinzu, um die Implementierung zu erleichtern. [Die zweite Ausgabe von SVG 1.1](https://www.w3.org/TR/SVG/) wurde 2011 eine Empfehlung. "Vollständiges" SVG 1.2 sollte die nächste große Release von SVG sein. Es wurde zugunsten des kommenden [SVG 2.0](https://www.w3.org/TR/SVG2/) fallen gelassen, das sich derzeit in starker Entwicklung befindet und einem ähnlichen Ansatz wie CSS 3 folgt, indem es Komponenten in mehrere lose gekoppelte Spezifikationen aufteilt.

Neben den vollständigen SVG-Empfehlungen führte die Arbeitsgruppe des W3C 2003 SVG Tiny und SVG Basic ein. Diese zwei Profile sind hauptsächlich für mobile Geräte gedacht. Das erste, SVG Tiny, soll Grafikprimitiven für kleine Geräte mit geringen Fähigkeiten liefern. SVG Basic bietet viele Funktionen des vollständigen SVG, schließt jedoch diejenigen aus, die schwer zu implementieren oder rechenintensiv zu rendern sind (wie Animationen). Im Jahr 2008 wurde SVG Tiny 1.2 eine W3C-Empfehlung.

Es gab Pläne für eine SVG Print-Spezifikation, die Unterstützung für mehrere Seiten und verbessertes Farbmanagement hinzufügen würde. Diese Arbeit wurde eingestellt.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

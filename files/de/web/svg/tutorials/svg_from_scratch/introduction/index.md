---
title: Einführung
slug: Web/SVG/Tutorials/SVG_from_scratch/Introduction
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

[SVG](/de/docs/Web/SVG) ist eine [XML](/de/docs/Web/XML) Sprache, ähnlich wie {{Glossary("XHTML", "XHTML")}}, die verwendet werden kann, um Vektorgrafiken zu zeichnen, wie die unten gezeigte. Es kann verwendet werden, um ein Bild entweder durch Spezifizieren aller notwendigen Linien und Formen zu erstellen, durch Modifizierung bereits existierender Rasterbilder oder durch eine Kombination von beidem. Das Bild und seine Komponenten können auch transformiert, zusammengefügt oder gefiltert werden, um ihr Aussehen vollständig zu verändern.

![Mozilla dino logo](dino.svg)

SVG entstand 1999, nachdem mehrere konkurrierende Formate dem [W3C](https://www.w3.org/) vorgelegt wurden und nicht vollständig ratifiziert wurden. SVG wird von allen großen [Browsern](https://caniuse.com/#search=svg) unterstützt. Ein Nachteil ist, dass das Laden von SVG langsam sein kann. SVG bietet jedoch Vorteile, von denen einige beinhalten, dass eine [DOM-Schnittstelle](/de/docs/Web/API) dafür verfügbar ist und keine Drittanbieter-Erweiterungen benötigt werden. Ob es verwendet werden sollte oder nicht, hängt oft von Ihrem spezifischen Anwendungsfall ab.

## Grundlegende Bestandteile

[HTML](/de/docs/Web/HTML) bietet Elemente zur Definition von Überschriften, Absätzen, Tabellen usw. In ähnlicher Weise bietet SVG Elemente für Kreise, Rechtecke sowie einfache und komplexe Kurven. Ein grundlegendes SVG-Dokument besteht aus nichts mehr als dem {{ SVGElement('svg') }} Root-Element und mehreren Grundformen, die zusammen eine Grafik bilden. Zudem gibt es das {{ SVGElement('g') }} Element, das verwendet wird, um mehrere Grundformen zusammenzufassen.

Ausgehend von dieser Grundstruktur kann das SVG-Bild beliebig komplex werden. SVG unterstützt Verläufe, Rotationen, Filtereffekte, Animationen, Interaktivität mit JavaScript usw. Aber alle diese zusätzlichen Funktionen der Sprache basieren auf diesem relativ kleinen Satz von Elementen zur Definition des Grafikbereichs.

## Bevor Sie starten

Es gibt eine Reihe von Zeichenanwendungen, wie [Inkscape](https://inkscape.org/), die kostenlos sind und SVG als natives Dateiformat verwenden. Diese Anleitung wird jedoch auf dem bewährten XML- oder Texteditor (Ihre Wahl) basieren. Die Idee ist, die Interna von SVG diejenigen zu lehren, die es verstehen wollen, und das wird am besten getan, indem Sie sich mit etwas Markup beschäftigen. Sie sollten Ihr endgültiges Ziel allerdings beachten. Nicht alle SVG-Viewer sind gleich, und daher besteht eine gute Chance, dass etwas, das für eine Anwendung geschrieben wurde, nicht genau in einer anderen angezeigt wird, weil sie unterschiedliche Ebenen der SVG-Spezifikation oder einer anderen Spezifikation unterstützen, die Sie zusammen mit SVG verwenden (z. B. [JavaScript](/de/docs/Web/JavaScript) oder [CSS](/de/docs/Web/CSS)).

SVG wird in allen modernen Browsern und in einigen Fällen sogar einige Versionen zurück unterstützt. Eine ziemlich vollständige Browser-Unterstützungstabelle finden Sie auf [Can I use](https://caniuse.com/svg). Firefox hat seit Version 1.5 einige SVG-Inhalte unterstützt, und dieses Unterstützungsniveau hat sich mit jeder Veröffentlichung weiterentwickelt. Hoffentlich kann MDN zusammen mit dieser Anleitung Entwicklern helfen, mit den Unterschieden zwischen Gecko und einigen anderen großen Implementierungen Schritt zu halten.

Bevor Sie beginnen, sollten Sie ein grundlegendes Verständnis von XML oder einer anderen Auszeichnungssprache wie HTML haben. Wenn Sie mit XML nicht so vertraut sind, finden Sie hier einige Richtlinien, die Sie beachten sollten:

- SVG-Elemente und -Attribute sollten exakt in der hier gezeigten Schreibweise eingegeben werden, da XML zwischen Groß- und Kleinschreibung unterscheidet (im Gegensatz zu HTML).
- Attributwerte in SVG müssen in Anführungszeichen gesetzt werden, auch wenn es sich um Zahlen handelt.

SVG ist eine umfangreiche Spezifikation. Diese Anleitung versucht, die Grundlagen abzudecken. Sobald Sie damit vertraut sind, sollten Sie in der Lage sein, das [Element-Referenz](/de/docs/Web/SVG/Reference/Element) und das [Schnittstellen-Referenz](/de/docs/Web/API/Document_Object_Model#svg_dom) zu verwenden, um alles Weitere zu erfahren, was Sie wissen müssen.

## Varianten von SVG

Seit es 2003 zur Empfehlung wurde, ist die aktuellste „vollständige“ SVG-Version 1.1. Sie baut auf SVG 1.0 auf, fügt aber mehr Modularisierung hinzu, um die Implementierung zu erleichtern. [Die zweite Ausgabe von SVG 1.1](https://www.w3.org/TR/SVG11/) wurde 2011 zur Empfehlung. „Vollständiges“ SVG 1.2 sollte die nächste große Veröffentlichung von SVG werden. Es wurde zugunsten der [SVG 2.0](https://svgwg.org/svg2-draft/) Spezifikation fallen gelassen, die der aktuelle Standard ist und einen ähnlichen Ansatz wie CSS 3 verfolgt, indem sie Komponenten in mehrere lose gekoppelte Spezifikationen aufteilt.

Neben den vollständigen SVG-Empfehlungen führte die Arbeitsgruppe des W3C 2003 SVG Tiny und SVG Basic ein. Diese beiden Profile richten sich hauptsächlich an mobile Geräte. Das erste, SVG Tiny, sollte Grafikprimitive für kleine Geräte mit geringen Fähigkeiten bieten. SVG Basic bietet viele Funktionen des vollständigen SVG, schließt jedoch diejenigen aus, die schwer zu implementieren oder aufwendig zu rendern sind (wie Animationen). 2008 wurde SVG Tiny 1.2 zur W3C-Empfehlung.

Es gab Pläne für eine SVG-Druckspezifikation, die Unterstützung für mehrere Seiten und erweitertes Farbmanagement hinzufügen würde. Diese Arbeit wurde eingestellt.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

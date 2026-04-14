---
title: Einführung
slug: Web/SVG/Tutorials/SVG_from_scratch/Introduction
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

[SVG](/de/docs/Web/SVG) ist eine [XML](/de/docs/Web/XML)-Sprache, ähnlich wie {{Glossary("XHTML", "XHTML")}}, die verwendet werden kann, um Vektorgrafiken zu zeichnen, wie die unten dargestellte. Es kann verwendet werden, um ein Bild entweder durch das Festlegen aller notwendigen Linien und Formen zu erstellen, durch die Modifikation bereits existierender Rasterbilder oder durch eine Kombination von beidem. Das Bild und seine Komponenten können ebenfalls transformiert, zusammengefügt oder gefiltert werden, um ihr Erscheinungsbild vollständig zu ändern.

![Mozilla Dino Logo](dino.svg)

SVG entstand 1999, nachdem mehrere konkurrierende Formate dem [W3C](https://www.w3.org/) vorgelegt wurden und nicht vollständig ratifiziert werden konnten. SVG wird von allen gängigen [Browsern](https://caniuse.com/#search=svg) unterstützt. Ein Nachteil ist, dass das Laden von SVG langsam sein kann. SVG bietet jedoch Vorteile, darunter eine verfügbare [DOM-Schnittstelle](/de/docs/Web/API) und die Tatsache, dass keine Drittanbieter-Erweiterungen erforderlich sind. Die Entscheidung, es zu verwenden, hängt oft von Ihrem spezifischen Anwendungsfall ab.

## Grundlegende Zutaten

[HTML](/de/docs/Web/HTML) bietet Elemente zum Definieren von Überschriften, Absätzen, Tabellen usw. In ähnlicher Weise bietet SVG Elemente für Kreise, Rechtecke sowie einfache und komplexe Kurven. Ein grundlegendes SVG-Dokument besteht aus nichts anderem als dem {{ SVGElement('svg') }}-Wurzelelement und mehreren grundlegenden Formen, die zusammen eine Grafik bilden. Außerdem gibt es das {{ SVGElement('g') }}-Element, das verwendet wird, um mehrere grundlegende Formen zusammenzufassen.

Ausgehend von dieser grundlegenden Struktur kann das SVG-Bild beliebig komplex werden. SVG unterstützt Verläufe, Rotationen, Filtereffekte, Animationen, Interaktivität mit JavaScript und so weiter. Aber all diese zusätzlichen Funktionen der Sprache basieren auf diesem relativ kleinen Satz von Elementen, um den Grafikbereich zu definieren.

## Bevor Sie beginnen

Es gibt eine Reihe von Zeichenanwendungen wie [Inkscape](https://inkscape.org/), die kostenlos sind und SVG als ihr natives Dateiformat verwenden. Dieses Tutorial stützt sich jedoch auf den altbewährten XML- oder Texteditor (Ihre Wahl). Die Idee ist, denjenigen, die es verstehen wollen, die Interna von SVG beizubringen, und das gelingt am besten, indem Sie sich die Hände mit etwas Markup schmutzig machen. Sie sollten jedoch Ihr endgültiges Ziel berücksichtigen. Nicht alle SVG-Viewer sind gleich, und es besteht eine gute Chance, dass etwas, das für eine App geschrieben wurde, nicht genau gleich in einer anderen angezeigt wird, da sie unterschiedliche Ebenen der SVG-Spezifikation oder einer anderen Spezifikation unterstützen, die Sie zusammen mit SVG verwenden (also [JavaScript](/de/docs/Web/JavaScript) oder [CSS](/de/docs/Web/CSS)).

SVG wird in allen modernen Browsern unterstützt und in einigen Fällen sogar einige Versionen zurück. Eine ziemlich vollständige Browser-Unterstützungstabelle finden Sie auf [Can I use](https://caniuse.com/svg). Firefox hat einige SVG-Inhalte seit Version 1.5 unterstützt, und dieses Unterstützungsniveau wächst mit jeder neuen Version. Hoffentlich kann MDN Entwicklern mit dem Tutorial hier helfen, die Unterschiede zwischen Gecko und einigen der anderen großen Implementierungen nachzuvollziehen.

Bevor Sie beginnen, sollten Sie ein grundlegendes Verständnis von XML oder einer anderen Auszeichnungssprache wie HTML haben. Wenn Sie mit XML nicht allzu vertraut sind, seien Sie sich bitte dieser Richtlinien bewusst:

- SVG-Elemente und -Attribute sollten in der hier gezeigten Schreibweise eingegeben werden, da XML case-sensitiv ist (im Gegensatz zu HTML).
- Attributwerte in SVG müssen in Anführungszeichen gesetzt werden, auch wenn es sich um Zahlen handelt.

SVG ist eine umfangreiche Spezifikation. Dieses Tutorial versucht, die Grundlagen abzudecken. Sobald Sie damit vertraut sind, sollten Sie in der Lage sein, das [Elementreferenz](/de/docs/Web/SVG/Reference/Element)- und das [Schnittstellenreferenz](/de/docs/Web/API/Document_Object_Model#svg_dom) zu nutzen, um alles weitere zu finden, was Sie wissen müssen.

## Geschmacksrichtungen von SVG

Seitdem es 2003 zur Empfehlung wurde, ist die aktuellste "vollständige" SVG-Version 1.1. Sie baut auf SVG 1.0 auf, fügt jedoch mehr Modularisierung hinzu, um die Implementierung zu erleichtern. [Die zweite Auflage von SVG 1.1](https://www.w3.org/TR/SVG11/) wurde 2011 als Empfehlung angenommen. "Vollständiges" SVG 1.2 sollte die nächste große Veröffentlichung von SVG sein. Sie wurde zugunsten der [SVG 2.0](https://w3c.github.io/svgwg/svg2-draft/)-Spezifikation verworfen, die 2018 zur Bewerberempfehlung wurde und der aktuelle Standard ist. SVG 2.0 folgt einem ähnlichen Ansatz wie CSS, indem es Komponenten in mehrere lose gekoppelte Spezifikationen aufteilt, wie z.B. [SVG Strokes](https://svgwg.org/specs/strokes/), [SVG Paths](https://svgwg.org/specs/paths/) und [SVG Markers](https://svgwg.org/specs/markers/).

Abgesehen von den vollständigen SVG-Empfehlungen führte die Arbeitsgruppe des W3C 2003 SVG Tiny und SVG Basic ein. Diese beiden Profile sind hauptsächlich für mobile Geräte gedacht. Das erste, SVG Tiny, soll Grafikprimitiven für kleine Geräte mit geringen Fähigkeiten bieten. SVG Basic bietet viele Funktionen des vollständigen SVG, schließt jedoch diejenigen aus, die schwer zu implementieren oder aufwendig darzustellen sind (wie Animationen). 2008 wurde SVG Tiny 1.2 zur W3C-Empfehlung.

Es gab Pläne für eine SVG Print Spezifikation, die Unterstützung für mehrere Seiten und erweitertes Farbmanagement hinzufügen sollte. Diese Arbeit wurde eingestellt.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch", "Web/SVG/Tutorials/SVG_from_scratch/Getting_started") }}

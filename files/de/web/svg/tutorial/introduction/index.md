---
title: Einführung
slug: Web/SVG/Tutorial/Introduction
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

[SVG](/de/docs/Web/SVG) ist eine [XML](/de/docs/Web/XML)-Sprache, ähnlich zu [XHTML](/de/docs/Glossary/XHTML), die verwendet werden kann, um Vektorgrafiken zu zeichnen, wie die unten gezeigte. Es kann verwendet werden, um ein Bild entweder durch die Angabe aller notwendigen Linien und Formen zu erstellen, bereits existierende Rasterbilder zu verändern oder durch eine Kombination aus beidem. Das Bild und seine Komponenten können auch transformiert, zusammengesetzt oder gefiltert werden, um ihr Erscheinungsbild vollständig zu verändern.

![Mozilla-Dino-Logo](dino.svg)

SVG entstand im Jahr 1999, nachdem mehrere konkurrierende Formate beim [W3C](https://www.w3.org/) eingereicht und nicht vollständig ratifiziert wurden. SVG wird von allen großen [Browsern](https://caniuse.com/#search=svg) unterstützt. Ein Nachteil ist, dass das Laden von SVG langsam sein kann. SVG bietet jedoch Vorteile, einige davon sind eine verfügbare [DOM-Schnittstelle](/de/docs/Web/API) und dass keine Drittanbieter-Erweiterungen erforderlich sind. Ob es verwendet wird, hängt oft von Ihrem spezifischen Anwendungsfall ab.

## Grundlegende Bestandteile

[HTML](/de/docs/Web/HTML) bietet Elemente zur Definition von Überschriften, Absätzen, Tabellen usw. In ähnlicher Weise bietet SVG Elemente für Kreise, Rechtecke und einfache sowie komplexe Kurven. Ein einfaches SVG-Dokument besteht aus nicht mehr als dem {{ SVGElement('svg') }}-Root-Element und mehreren Grundformen, die zusammen eine Grafik bilden. Darüber hinaus gibt es das {{ SVGElement('g') }}-Element, das verwendet wird, um mehrere Grundformen zusammenzufassen.

Ausgehend von dieser Grundstruktur kann das SVG-Bild beliebig komplex werden. SVG unterstützt Gradienten, Rotationen, Filtereffekte, Animationen, Interaktivität mit JavaScript und so weiter. Aber all diese zusätzlichen Sprachfunktionen beruhen auf diesem relativ kleinen Satz von Elementen zur Definition des Grafikbereichs.

## Bevor Sie beginnen

Es gibt eine Reihe von Zeichenanwendungen, wie [Inkscape](https://inkscape.org/), die kostenlos sind und SVG als ihr natives Dateiformat verwenden. Dieses Tutorial wird sich jedoch auf den bewährten XML- oder Texteditor (nach Ihrer Wahl) verlassen. Die Idee ist, die Interna von SVG denen zu lehren, die es verstehen wollen, und das wird am besten erreicht, indem Sie sich mit etwas Markup die Hände schmutzig machen. Beachten Sie jedoch Ihr Endziel. Nicht alle SVG-Betrachter sind gleich, und es besteht eine gute Chance, dass etwas, das für eine App geschrieben wurde, in einer anderen nicht genau gleich angezeigt wird, da sie unterschiedliche Ebenen der SVG-Spezifikation oder eine andere Spezifikation unterstützen, die Sie zusammen mit SVG verwenden (das heißt, [JavaScript](/de/docs/Web/JavaScript) oder [CSS](/de/docs/Web/CSS)).

SVG wird von allen modernen Browsern und sogar einige Versionen zurück unterstützt. Eine ziemlich vollständige Browser-Unterstützungstabelle finden Sie auf [Can I use](https://caniuse.com/svg). Firefox hat einige SVG-Inhalte seit Version 1.5 unterstützt, und dieses Unterstützungsebenen wächst mit jeder neuen Veröffentlichung. Hoffentlich kann MDN zusammen mit diesem Tutorial Entwicklern helfen, mit den Unterschieden zwischen Gecko und einigen anderen größeren Implementierungen Schritt zu halten.

Bevor Sie beginnen, sollten Sie ein grundlegendes Verständnis von XML oder einer anderen Auszeichnungssprache wie HTML haben. Wenn Sie mit XML nicht vertraut sind, sind hier einige Richtlinien, die Sie beachten sollten:

- SVG-Elemente und -Attribute sollten genau in der hier gezeigten Schreibweise eingegeben werden, da XML (im Gegensatz zu HTML) case-sensitive ist.
- Attributwerte in SVG müssen in Anführungszeichen gesetzt werden, selbst wenn sie Zahlen sind.

SVG ist eine umfangreiche Spezifikation. Dieses Tutorial versucht, die Grundlagen abzudecken. Sobald Sie damit vertraut sind, sollten Sie in der Lage sein, die [Elementreferenz](/de/docs/Web/SVG/Element) und die [Schnittstellenreferenz](/de/docs/Web/API/Document_Object_Model#svg_dom) zu nutzen, um alles Weitere zu finden, was Sie wissen müssen.

## Geschmacksrichtungen von SVG

Seit es 2003 eine Empfehlung wurde, ist die aktuellste "volle" SVG-Version 1.1. Sie baut auf SVG 1.0 auf, fügt jedoch mehr Modularisierung hinzu, um die Implementierung zu erleichtern. [Die zweite Ausgabe von SVG 1.1](https://www.w3.org/TR/SVG/) wurde 2011 eine Empfehlung. "Voll" SVG 1.2 sollte die nächste große Veröffentlichung von SVG sein. Sie wurde fallen gelassen zugunsten des kommenden [SVG 2.0](https://www.w3.org/TR/SVG2/), das derzeit intensiv entwickelt wird und einem ähnlichen Ansatz wie CSS 3 folgt, indem es Komponenten in mehrere lose gekoppelte Spezifikationen aufteilt.

Abgesehen von den vollständigen SVG-Empfehlungen führte die Arbeitsgruppe beim W3C 2003 SVG Tiny und SVG Basic ein. Diese beiden Profile zielen hauptsächlich auf mobile Geräte ab. Das erste, SVG Tiny, sollte Grafikprimitive für kleine Geräte mit geringen Fähigkeiten bereitstellen. SVG Basic bietet viele Funktionen des vollständigen SVG, beinhaltet jedoch nicht diejenigen, die schwer umzusetzen oder rechenintensiv zu rendern sind (wie Animationen). 2008 wurde SVG Tiny 1.2 eine W3C-Empfehlung.

Es gab Pläne für eine SVG-Druckspezifikation, die Unterstützung für mehrere Seiten und verbesserte Farbverwaltung hinzufügen würde. Diese Arbeit wurde eingestellt.

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

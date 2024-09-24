---
title: Einführung
slug: Web/SVG/Tutorial/Introduction
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

[SVG](/de/docs/Web/SVG) ist eine [XML](/de/docs/Web/XML)-Sprache, ähnlich wie [XHTML](/de/docs/Glossary/XHTML), die verwendet werden kann, um Vektorgrafiken zu zeichnen, wie die unten gezeigte. Es kann verwendet werden, um ein Bild entweder durch die Spezifikation aller notwendigen Linien und Formen, durch die Modifikation bereits existierender Rasterbilder oder durch eine Kombination aus beidem zu erstellen. Das Bild und seine Komponenten können auch transformiert, zusammengesetzt oder gefiltert werden, um ihr Aussehen vollständig zu verändern.

![Mozilla dino logo](dino.svg)

SVG entstand 1999, nachdem mehrere konkurrierende Formate dem [W3C](https://www.w3.org/) vorgelegt wurden, aber nicht vollständig ratifiziert werden konnten. SVG wird von allen großen [Browsern](https://caniuse.com/#search=svg) unterstützt. Ein Nachteil ist, dass das Laden von SVG langsam sein kann. SVG bietet jedoch Vorteile, einige davon sind die Verfügbarkeit einer [DOM-Schnittstelle](/de/docs/Web/API) und dass keine Drittanbietererweiterungen benötigt werden. Ob es verwendet wird, hängt oft von Ihrem spezifischen Anwendungsfall ab.

## Grundlegende Bestandteile

[HTML](/de/docs/Web/HTML) stellt Elemente zum Definieren von Überschriften, Absätzen, Tabellen usw. bereit. In ähnlicher Weise bietet SVG Elemente für Kreise, Rechtecke sowie einfache und komplexe Kurven. Ein einfaches SVG-Dokument besteht aus nichts weiter als dem {{ SVGElement('svg') }}-Wurzelelement und mehreren grundlegenden Formen, die zusammen eine Grafik bilden. Zusätzlich gibt es das {{ SVGElement('g') }}-Element, das dazu dient, mehrere grundlegende Formen zusammen zu gruppieren.

Ausgehend von dieser Grundstruktur kann das SVG-Bild beliebig komplex werden. SVG unterstützt Verläufe, Drehungen, Filtereffekte, Animationen, Interaktivität mit JavaScript und so weiter. Aber all diese zusätzlichen Funktionen der Sprache basieren auf diesem relativ kleinen Satz von Elementen zur Definition des Grafikbereichs.

## Bevor Sie beginnen

Es gibt eine Reihe von Zeichenanwendungen, wie [Inkscape](https://inkscape.org/), die kostenlos sind und SVG als ihr natives Dateiformat verwenden. Dieses Tutorial wird jedoch auf den vertrauten XML- oder Texteditor (nach Ihrer Wahl) setzen. Die Idee ist, diejenigen, die SVG verstehen wollen, mit den Interna vertraut zu machen, und das gelingt am besten, indem man ein wenig Markup ausprobiert. Beachten Sie jedoch Ihr Endziel. Nicht alle SVG-Betrachter sind gleich, und es besteht eine gute Chance, dass etwas, das für eine App geschrieben wurde, nicht genau gleich in einer anderen angezeigt wird, weil sie unterschiedliche Ebenen der SVG-Spezifikation oder eine andere Spezifikation unterstützen, die Sie zusammen mit SVG verwenden (das heißt, [JavaScript](/de/docs/Web/JavaScript) oder [CSS](/de/docs/Web/CSS)).

SVG wird in allen modernen Browsern unterstützt, und in einigen Fällen sogar einige Versionen zurück. Eine ziemlich vollständige Tabelle zur Browserunterstützung finden Sie auf [Can I use](https://caniuse.com/svg). Firefox hat seit Version 1.5 einige SVG-Inhalte unterstützt, und dieses Unterstützungsniveau ist seit jeder Veröffentlichung gewachsen. Hoffentlich kann MDN mit diesem Tutorial zusammen den Entwicklern helfen, mit den Unterschieden zwischen Gecko und einigen der anderen großen Implementierungen Schritt zu halten.

Bevor Sie beginnen, sollten Sie ein grundlegendes Verständnis von XML oder einer anderen Auszeichnungssprache wie HTML haben. Wenn Sie mit XML nicht so vertraut sind, sind hier einige Richtlinien, die Sie beachten sollten:

- SVG-Elemente und -Attribute sollten alle in der hier gezeigten Groß- und Kleinschreibung eingegeben werden, da XML zwischen Groß- und Kleinschreibung unterscheidet (im Gegensatz zu HTML).
- Attributwerte in SVG müssen in Anführungszeichen gesetzt werden, selbst wenn es sich um Zahlen handelt.

SVG ist eine umfangreiche Spezifikation. Dieses Tutorial versucht, die Grundlagen abzudecken. Sobald Sie damit vertraut sind, sollten Sie in der Lage sein, das [Element-Referenz](/de/docs/Web/SVG/Element) und die [Schnittstellen-Referenz](/de/docs/Web/API/Document_Object_Model#svg_dom) zu nutzen, um alles andere zu finden, was Sie wissen müssen.

## Varianten von SVG

Seit es 2003 eine Empfehlung wurde, ist die neueste "vollständige" SVG-Version 1.1. Sie baut auf SVG 1.0 auf, fügt jedoch mehr Modularisierung hinzu, um die Implementierung zu erleichtern. [Die zweite Ausgabe von SVG 1.1](https://www.w3.org/TR/SVG/) wurde 2011 zur Empfehlung. "Vollständiges" SVG 1.2 sollte die nächste große Veröffentlichung von SVG sein. Es wurde zugunsten des bevorstehenden [SVG 2.0](https://www.w3.org/TR/SVG2/) aufgegeben, das sich derzeit in intensiver Entwicklung befindet und einem ähnlichen Ansatz wie CSS 3 folgt, indem es Komponenten in mehrere lose gekoppelte Spezifikationen aufteilt.

Abgesehen von den vollständigen SVG-Empfehlungen hat die Arbeitsgruppe des W3C 2003 SVG Tiny und SVG Basic eingeführt. Diese beiden Profile sind hauptsächlich auf mobile Geräte ausgerichtet. Erstens soll SVG Tiny Grafikelemente für kleine Geräte mit niedrigen Fähigkeiten bereitstellen. SVG Basic bietet viele Funktionen von vollständigem SVG, schließt jedoch die aus, die schwer zu implementieren oder aufwendig zu rendern sind (wie Animationen). 2008 wurde SVG Tiny 1.2 zu einer W3C-Empfehlung.

Es gab Pläne für eine SVG Print-Spezifikation, die Unterstützung für mehrere Seiten und verbesserte Farbverwaltung hinzufügen sollte. Diese Arbeiten wurden eingestellt.

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

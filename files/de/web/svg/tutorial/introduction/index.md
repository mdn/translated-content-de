---
title: Einführung
slug: Web/SVG/Tutorial/Introduction
l10n:
  sourceCommit: 01b8471b84e1d157cbddbb3ffaf560a86b082070
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

[SVG](/de/docs/Web/SVG) ist eine [XML](/de/docs/Web/XML)-Sprache, ähnlich wie {{Glossary("XHTML", "XHTML")}}, die zum Zeichnen von Vektorgrafiken verwendet werden kann, wie die unten gezeigte. Es kann verwendet werden, um ein Bild entweder durch Angabe aller notwendigen Linien und Formen zu erstellen, vorhandene Rasterbilder zu modifizieren oder durch eine Kombination aus beidem. Das Bild und seine Komponenten können auch transformiert, zusammengesetzt oder gefiltert werden, um ihr Aussehen komplett zu verändern.

![Mozilla Dino-Logo](dino.svg)

SVG entstand 1999, nachdem mehrere konkurrierende Formate dem [W3C](https://www.w3.org/) vorgelegt wurden und keine vollständige Ratifizierung erhielten. SVG wird von allen gängigen [Browsern](https://caniuse.com/#search=svg) unterstützt. Ein Nachteil ist, dass das Laden von SVG langsam sein kann. SVG bietet jedoch Vorteile, darunter eine verfügbare [DOM-Schnittstelle](/de/docs/Web/API) und keine Notwendigkeit für Drittanbieter-Erweiterungen. Ob es verwendet werden sollte, hängt oft von Ihrem spezifischen Anwendungsfall ab.

## Grundlegende Bestandteile

[HTML](/de/docs/Web/HTML) bietet Elemente zur Definition von Überschriften, Absätzen, Tabellen usw. In ähnlicher Weise bietet SVG Elemente für Kreise, Rechtecke und einfache sowie komplexe Kurven. Ein grundlegendes SVG-Dokument besteht aus nichts weiter als dem {{ SVGElement('svg') }}-Wurzelelement und mehreren grundlegenden Formen, die zusammen eine Grafik bilden. Zusätzlich gibt es das {{ SVGElement('g') }}-Element, das verwendet wird, um mehrere grundlegende Formen zu gruppieren.

Ausgehend von dieser Basisstruktur kann das SVG-Bild beliebig komplex werden. SVG unterstützt Gradienten, Rotationen, Filtereffekte, Animationen und Interaktivität mit JavaScript und so weiter. Aber all diese zusätzlichen Funktionen der Sprache verlassen sich auf diesen relativ kleinen Satz von Elementen, um den Grafikbereich zu definieren.

## Bevor Sie beginnen

Es gibt eine Reihe von Zeichenanwendungen, wie z. B. [Inkscape](https://inkscape.org/), die kostenlos sind und SVG als ihr natives Dateiformat verwenden. Dieses Tutorial wird jedoch auf den bewährten XML- oder Texteditor angewiesen sein (Ihre Wahl). Die Idee ist, die Interna von SVG für diejenigen zu lehren, die es verstehen möchten, und das lässt sich am besten durch ein wenig Markup erlernen. Sie sollten jedoch Ihr Endziel im Auge behalten. Nicht alle SVG-Viewer sind gleich, und es besteht eine gute Chance, dass etwas, das für eine App geschrieben wurde, nicht genau gleich in einer anderen angezeigt wird, da sie unterschiedliche Ebenen der SVG-Spezifikation oder eine andere Spezifikation unterstützen, die Sie zusammen mit SVG verwenden (das heißt, [JavaScript](/de/docs/Web/JavaScript) oder [CSS](/de/docs/Web/CSS)).

SVG wird in allen modernen Browsern und sogar ein paar Versionen zurück unterstützt. Eine ziemlich vollständige Browser-Unterstützungstabelle finden Sie auf [Can I use](https://caniuse.com/svg). Firefox unterstützt einige SVG-Inhalte seit Version 1.5, und dieses Unterstützungsniveau wächst mit jeder Veröffentlichung. Hoffentlich kann zusammen mit dem Tutorial hier MDN Entwicklern helfen, mit den Unterschieden zwischen Gecko und einigen der anderen großen Implementierungen Schritt zu halten.

Bevor Sie beginnen, sollten Sie ein grundlegendes Verständnis von XML oder einer anderen Auszeichnungssprache wie HTML haben. Wenn Sie mit XML nicht vertraut sind, hier einige Richtlinien, die Sie beachten sollten:

- SVG-Elemente und -Attribute sollten alle in dem hier gezeigten Fall eingegeben werden, da XML (im Gegensatz zu HTML) groß-/kleinschreibungssensitiv ist.
- Attributwerte in SVG müssen in Anführungszeichen gesetzt werden, selbst wenn sie Zahlen sind.

SVG ist eine umfangreiche Spezifikation. Dieses Tutorial versucht, die Grundlagen abzudecken. Sobald Sie damit vertraut sind, sollten Sie in der Lage sein, das [Element-Referenzdokument](/de/docs/Web/SVG/Element) und das [Schnittstellen-Referenzdokument](/de/docs/Web/API/Document_Object_Model#svg_dom) zu verwenden, um alles andere zu finden, was Sie wissen müssen.

## Varianten von SVG

Seit es 2003 eine Empfehlung wurde, ist die aktuellste "vollständige" SVG-Version 1.1. Sie baut auf SVG 1.0 auf, fügt jedoch mehr Modularisierung hinzu, um die Implementierung zu erleichtern. [Die zweite Ausgabe von SVG 1.1](https://www.w3.org/TR/SVG/) wurde 2011 eine Empfehlung. "Vollständiges" SVG 1.2 sollte die nächste Hauptversion von SVG werden. Es wurde zugunsten des kommenden [SVG 2.0](https://www.w3.org/TR/SVG2/) aufgegeben, das sich derzeit in intensiver Entwicklung befindet und einen ähnlichen Ansatz wie CSS 3 verfolgt, indem es Komponenten in mehrere lose gekoppelte Spezifikationen aufteilt.

Abgesehen von den vollständigen SVG-Empfehlungen führte die Arbeitsgruppe des W3C 2003 SVG Tiny und SVG Basic ein. Diese beiden Profile richten sich hauptsächlich an mobile Geräte. Das erste, SVG Tiny, sollte Grafikprimitiven für kleine Geräte mit niedrigen Leistungsfähigkeiten liefern. SVG Basic bietet viele Funktionen von vollständigem SVG, enthält jedoch nicht die, welche schwer zu implementieren oder rechenintensiv zu rendern sind (wie Animationen). Im Jahr 2008 wurde SVG Tiny 1.2 eine W3C-Empfehlung.

Es gab Pläne für eine SVG Print-Spezifikation, die Unterstützung für mehrere Seiten und verbesserte Farbverwaltung hinzufügen würde. Diese Arbeit wurde eingestellt.

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

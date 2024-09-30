---
title: Einführung
slug: Web/SVG/Tutorial/Introduction
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

[SVG](/de/docs/Web/SVG) ist eine [XML](/de/docs/Web/XML)-Sprache, ähnlich wie [XHTML](/de/docs/Glossary/XHTML), die verwendet werden kann, um Vektorgrafiken zu zeichnen, wie die unten gezeigte. Es kann verwendet werden, um ein Bild entweder durch Angabe aller erforderlichen Linien und Formen zu erstellen, durch Modifikation bereits existierender Rasterbilder oder durch eine Kombination aus beidem. Das Bild und seine Komponenten können auch transformiert, zusammengefügt oder gefiltert werden, um ihr Erscheinungsbild komplett zu verändern.

![Mozilla Dino-Logo](dino.svg)

SVG entstand 1999, nachdem mehrere konkurrierende Formate beim [W3C](https://www.w3.org/) eingereicht wurden und nicht vollständig ratifiziert werden konnten. SVG wird von allen großen [Browsern](https://caniuse.com/#search=svg) unterstützt. Ein Nachteil ist, dass das Laden von SVG langsam sein kann. SVG bietet jedoch Vorteile, darunter eine verfügbare [DOM-Schnittstelle](/de/docs/Web/API) und die Tatsache, dass keine Drittanbieter-Erweiterungen erforderlich sind. Ob es verwendet wird, hängt oft von Ihrem spezifischen Anwendungsfall ab.

## Grundbestandteile

[HTML](/de/docs/Web/HTML) stellt Elemente bereit, um Header, Absätze, Tabellen usw. zu definieren. In ähnlicher Weise bietet SVG Elemente für Kreise, Rechtecke und einfache sowie komplexe Kurven. Ein einfaches SVG-Dokument besteht aus nicht mehr als dem {{ SVGElement('svg') }}-Root-Element und mehreren einfachen Formen, die zusammen eine Grafik bilden. Zusätzlich gibt es das {{ SVGElement('g') }}-Element, das verwendet wird, um mehrere einfache Formen zusammenzufassen.

Ausgehend von dieser Grundstruktur kann das SVG-Bild beliebig komplex werden. SVG unterstützt Verläufe, Drehungen, Filtereffekte, Animationen, Interaktivität mit JavaScript usw. Aber alle diese zusätzlichen Funktionen der Sprache basieren auf dieser relativ kleinen Menge an Elementen, um den Grafikbereich zu definieren.

## Bevor Sie beginnen

Es gibt eine Reihe von Zeichenanwendungen, z. B. [Inkscape](https://inkscape.org/), die kostenlos sind und SVG als ihr natives Dateiformat verwenden. Dieses Tutorial wird sich jedoch auf den bewährten XML- oder Texteditor (nach Ihrer Wahl) stützen. Die Idee ist, die Interna von SVG zu lehren für diejenigen, die es verstehen wollen, und das wird am besten durch ein wenig Markup-Arbeit erreicht. Sie sollten jedoch Ihr endgültiges Ziel beachten. Nicht alle SVG-Viewer sind gleich, und es besteht eine gute Chance, dass etwas, das für eine Anwendung geschrieben wurde, nicht exakt gleich in einer anderen Anwendung angezeigt wird, da sie unterschiedliche Ebenen der SVG-Spezifikation oder einer anderen Spezifikation unterstützen, die Sie zusammen mit SVG verwenden (das heißt [JavaScript](/de/docs/Web/JavaScript) oder [CSS](/de/docs/Web/CSS)).

SVG wird in allen modernen Browsern unterstützt und sogar einige Versionen zurück in manchen Fällen. Eine ziemlich umfassende Browser-Unterstützungstabelle finden Sie auf [Can I use](https://caniuse.com/svg). Firefox hat seit Version 1.5 einige SVG-Inhalte unterstützt, und das Unterstützungsniveau hat sich mit jeder Veröffentlichung erweitert. Hoffentlich kann neben dem Tutorial hier auch MDN den Entwicklern helfen, mit den Unterschieden zwischen Gecko und einigen der anderen wichtigen Implementierungen Schritt zu halten.

Bevor Sie beginnen, sollten Sie ein grundlegendes Verständnis von XML oder einer anderen Markupsprache wie HTML haben. Wenn Sie mit XML nicht allzu vertraut sind, hier einige Richtlinien, die Sie beachten sollten:

- SVG-Elemente und Attribute sollten alle in der hier gezeigten Schreibweise eingegeben werden, da XML im Gegensatz zu HTML zwischen Groß- und Kleinschreibung unterscheidet.
- Attributwerte in SVG müssen in Anführungszeichen gesetzt werden, auch wenn es sich um Zahlen handelt.

SVG ist eine umfangreiche Spezifikation. Dieses Tutorial versucht, die Grundlagen abzudecken. Sobald Sie mit diesen vertraut sind, sollten Sie in der Lage sein, das [Element-Referenz](/de/docs/Web/SVG/Element) und die [Schnittstellen-Referenz](/de/docs/Web/API/Document_Object_Model#svg_dom) zu verwenden, um alles andere zu finden, was Sie wissen müssen.

## Varianten von SVG

Seit der Empfehlung im Jahr 2003 ist die neueste "vollständige" SVG-Version 1.1. Sie baut auf SVG 1.0 auf, fügt jedoch mehr Modularisierung hinzu, um die Implementierung zu erleichtern. [Die zweite Ausgabe von SVG 1.1](https://www.w3.org/TR/SVG/) wurde 2011 zur Empfehlung. "Vollständiges" SVG 1.2 sollte die nächste Hauptveröffentlichung von SVG sein. Es wurde zugunsten des kommenden [SVG 2.0](https://www.w3.org/TR/SVG2/) eingestellt, das derzeit intensiv entwickelt wird und einen ähnlichen Ansatz wie CSS 3 verfolgt, indem es Komponenten in mehrere lose gekoppelte Spezifikationen aufteilt.

Abgesehen von den vollständigen SVG-Empfehlungen hat die Arbeitsgruppe beim W3C 2003 SVG Tiny und SVG Basic eingeführt. Diese beiden Profile sind hauptsächlich für mobile Geräte gedacht. Das erste, SVG Tiny, soll Grafikprimitiven für kleine Geräte mit geringen Fähigkeiten liefern. SVG Basic bietet viele Funktionen des vollständigen SVG, schließt jedoch diejenigen aus, die schwer umzusetzen oder aufwendig zu rendern sind (wie Animationen). Im Jahr 2008 wurde SVG Tiny 1.2 zur W3C-Empfehlung.

Es gab Pläne für eine SVG Print-Spezifikation, die Unterstützung für mehrere Seiten und erweitertes Farbmanagement bieten sollte. Diese Arbeit wurde eingestellt.

{{ PreviousNext("Web/SVG/Tutorial", "Web/SVG/Tutorial/Getting_Started") }}

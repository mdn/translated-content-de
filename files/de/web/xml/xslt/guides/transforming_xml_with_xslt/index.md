---
title: Transformation von XML mit XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Trennung von Inhalt und Präsentation ist ein zentrales Designmerkmal von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments wurde entworfen, um wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst widerzuspiegeln und zu klären, ohne gleichzeitig einen Hinweis darauf geben zu müssen, wie diese Daten letztendlich dargestellt werden sollen. Diese intelligente Strukturierung ist besonders wichtig, da immer mehr Datentransfers automatisiert durchgeführt werden und zwischen hochgradig heterogenen Maschinen erfolgen, die durch ein Netzwerk verbunden sind.

Letztendlich muss jedoch ein großer Teil des in XML-Dokumenten gespeicherten Inhalts menschlichen Lesern präsentiert werden. Da ein Browser eine vertraute und äußerst flexible Benutzeroberfläche bietet, ist er ein ideales Mittel, um solche Präsentationsversionen von XML-Inhalten bereitzustellen. Aufgebaut von Grund auf unter Verwendung einer Vielzahl von XML-Technologien, integriert Firefox alle Mechanismen, die erforderlich sind, um sowohl ursprüngliche XML-Dokumente als auch die spezialisierten Stylesheets zu verarbeiten, die verwendet werden, um sie für die HTML-Anzeige zu gestalten und zu layouten. Dies reduziert die Serverlast durch Client-seitige Verarbeitung.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für grundlegende Steuerungen des Erscheinungsbilds — Schriftarten, Farben, Positionierung und so weiter — verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Schwerpunkt liegt hier auf der zweiten Art von Stylesheets, die Gecko unterstützt: dem XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform, und der Name ist treffend. XSLT ermöglicht es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei wesentliche Arten zu transformieren: Manipulation und Sortierung des Inhalts, einschließlich einer vollständigen Neuanordnung, falls gewünscht, sowie die Transformation des Inhalts in ein anderes Format (im Fall von Firefox liegt der Fokus auf der dynamischen Umwandlung in HTML, das dann vom Browser angezeigt werden kann).

## Inhaltsverzeichnis

- [Ein Überblick](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview)
- [Weiterführende Literatur](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading)

## XSLT/XPath-Referenz

- [Elemente](/de/docs/Web/XML/XSLT/Reference/Element)
- [Achsen](/de/docs/Web/XML/XPath/Reference/Axes)
- [Funktionen](/de/docs/Web/XML/XPath/Reference/Functions)

## Informationen zum Originaldokument

- Copyright-Informationen: Copyright © 2001-2003 Netscape. Alle Rechte vorbehalten.
- Hinweis: Dieser erneut veröffentlichte Artikel war ursprünglich Teil der DevEdge-Website.

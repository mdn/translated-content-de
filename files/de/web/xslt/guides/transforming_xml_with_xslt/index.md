---
title: Transformation von XML mit XSLT
slug: Web/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Trennung von Inhalt und Präsentation ist ein wesentliches Designmerkmal von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments ist so gestaltet, dass sie wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst reflektiert und verdeutlicht, ohne durch die Notwendigkeit beeinträchtigt zu werden, Hinweise darauf zu geben, wie diese Daten letztendlich präsentiert werden sollten. Diese intelligente Strukturierung ist besonders wichtig, da zunehmend mehr Datenübertragungen automatisiert und zwischen stark heterogenen Maschinen über ein Netzwerk durchgeführt werden.

Letztendlich muss jedoch ein Großteil der in XML-Dokumenten gespeicherten Inhalte für menschliche Leser präsentiert werden. Da ein Browser eine vertraute und äußerst flexible Schnittstelle bietet, ist er ein ideales Medium, um solche Präsentationsversionen von XML-Inhalten bereitzustellen. Von Grund auf unter Verwendung einer Vielzahl von XML-Technologien entwickelt, integriert Firefox alle Mechanismen, die zur Verarbeitung sowohl der ursprünglichen XML-Dokumente als auch der spezialisierten Stylesheets erforderlich sind, um sie für die HTML-Anzeige zu gestalten und zu layouten, wodurch die Serverbelastung durch die clientseitige Verarbeitung reduziert wird.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für die grundlegende Steuerung des Erscheinungsbilds – Schriftarten, Farben, Positionierung usw. – verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Fokus liegt hier jedoch auf der zweiten Art von Stylesheet, die Gecko unterstützt: dem XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform, und der Name ist treffend. XSLT ermöglicht es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei wesentliche Arten zu transformieren: Manipulation und Sortierung des Inhalts, einschließlich einer vollständigen Neuordnung, wenn gewünscht, und Umwandlung des Inhalts in ein anderes Format (und im Fall von Firefox liegt der Schwerpunkt darauf, es dynamisch in HTML zu konvertieren, das dann vom Browser angezeigt werden kann).

## Inhaltsverzeichnis

- [Ein Überblick](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview)
- [Für weiterführende Lektüre](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading)

## XSLT/XPath-Referenz

- [Elemente](/de/docs/Web/XSLT/Reference/Element)
- [Achsen](/de/docs/Web/XPath/Reference/Axes)
- [Funktionen](/de/docs/Web/XPath/Reference/Functions)

## Informationen zum Originaldokument

- Copyright-Informationen: Copyright © 2001-2003 Netscape. Alle Rechte vorbehalten.
- Hinweis: Dieser nachgedruckte Artikel war ursprünglich Teil der DevEdge-Website.

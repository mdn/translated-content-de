---
title: Transforming XML mit XSLT
slug: Web/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die Trennung von Inhalt und Präsentation ist ein zentrales Designelement von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments soll wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst widerspiegeln und klären, ohne dass ein Hinweis darauf gegeben werden muss, wie diese Daten schließlich präsentiert werden sollen. Diese intelligente Strukturierung ist besonders wichtig, da immer mehr Datentransfers automatisiert und zwischen stark heterogenen Maschinen, die durch ein Netzwerk verbunden sind, stattfinden.

Letztendlich muss jedoch ein Großteil der in XML-Dokumenten gespeicherten Inhalte menschlichen Lesern präsentiert werden. Da ein Browser eine vertraute und hochflexible Schnittstelle bietet, ist er ein ideales Mittel, um solche Präsentationsversionen von XML-Inhalten bereitzustellen. Firefox, das von Grund auf unter Verwendung einer Vielzahl von XML-Technologien entwickelt wurde, enthält alle Mechanismen, die erforderlich sind, um sowohl Original-XML-Dokumente als auch die spezialisierten Stylesheets zu verarbeiten, die zur Gestaltung und Layout für die HTML-Anzeige verwendet werden, wodurch die Serverlast durch clientseitige Verarbeitung reduziert wird.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für die grundlegende Kontrolle des Erscheinungsbildes — Schriftarten, Farben, Position usw. — verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Fokus liegt hier auf der zweiten Art von Stylesheet, die Gecko unterstützt: das XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform, und der Name ist treffend. XSLT ermöglicht es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei wesentliche Arten zu transformieren: das Manipulieren und Sortieren des Inhalts, einschließlich einer vollständigen Neuanordnung, wenn gewünscht, sowie die Umwandlung des Inhalts in ein anderes Format (und im Fall von Firefox liegt der Schwerpunkt auf der Echtzeit-Umwandlung in HTML, das dann vom Browser angezeigt werden kann).

## Inhaltsverzeichnis

- [Ein Überblick](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview)
- [Weiterführende Lektüre](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading)

## XSLT/XPath-Referenz

- [Elemente](/de/docs/Web/XSLT/Reference/Element)
- [Achsen](/de/docs/Web/XPath/Axes)
- [Funktionen](/de/docs/Web/XPath/Functions)

## Informationen zum Originaldokument

- Urheberrechtshinweise: Copyright © 2001-2003 Netscape. Alle Rechte vorbehalten.
- Hinweis: Dieser nachgedruckte Artikel war ursprünglich Teil der DevEdge-Website.

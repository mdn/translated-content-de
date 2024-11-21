---
title: Einführung
slug: Web/API/XSLTProcessor/Introduction
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("XSLT")}}

Ein bemerkenswerter Trend in den W3C-Standards ist das Bestreben, Inhalt und Stil zu trennen. Dies würde es ermöglichen, denselben Stil für mehrere Inhalte wiederzuverwenden, die Wartung zu vereinfachen und eine schnelle Möglichkeit (nur eine Datei ändern) zu bieten, das Aussehen von Inhalten zu ändern.

CSS (Cascading Style Sheets) war eine der ersten vom W3C vorgeschlagenen Methoden. CSS ist eine Möglichkeit, Stilregeln auf ein Webdokument anzuwenden. Diese Stilregeln definieren, wie das Dokument (der Inhalt) gestaltet werden soll. Es hat jedoch mehrere Einschränkungen, wie etwa das Fehlen von Programmierstrukturen und die Möglichkeit, komplexe Layoutmodelle zu erstellen. CSS hat auch nur eingeschränkte Unterstützung für das Ändern der Position eines Elements.

XSL (Extensible Stylesheet Language) Transformationen bestehen aus zwei Teilen: XSL-Elementen, die die Transformation eines XML-Baums in einen anderen Markup-Baum ermöglichen, und XPath, einer Auswahlsprache für Bäume. XSLT nimmt ein XML-Dokument (den Inhalt) und erstellt ein völlig neues Dokument basierend auf den Regeln im XSL-Stilblatt. Dies ermöglicht es XSLT, Elemente aus dem ursprünglichen XML-Dokument hinzuzufügen, zu entfernen und neu zu ordnen und damit eine feinere Kontrolle über die Struktur des resultierenden Dokuments zu bieten.

Transformationen in XSLT basieren auf Regeln, die aus Vorlagen bestehen. Jede Vorlage entspricht (mithilfe von XPath) einem bestimmten Fragment des Eingabe-XML-Dokuments und wendet dann den Ersatzteil auf dieses Fragment an, um das neue resultierende Dokument zu erstellen.

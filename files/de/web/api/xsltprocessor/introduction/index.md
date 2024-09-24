---
title: Einführung
slug: Web/API/XSLTProcessor/Introduction
l10n:
  sourceCommit: 2836f3bf8ee544a2e87bfadd30a5d802110edd11
---

{{APIRef("XSLT")}}

Ein bemerkenswerter Trend in den W3C-Standards war das Bestreben, Inhalt von Stil zu trennen. Dies würde erlauben, denselben Stil für mehrere Inhalte wiederzuverwenden, die Wartung zu vereinfachen und eine schnelle Möglichkeit (nur eine Datei ändern) zu bieten, das Aussehen von Inhalten zu ändern.

CSS (Cascading Style Sheets) war eine der ersten vom W3C vorgeschlagenen Möglichkeiten. CSS ist eine einfache Methode, um Stilregeln auf ein Webdokument anzuwenden. Diese Stilregeln definieren, wie das Dokument (der Inhalt) dargestellt werden soll. Es hat jedoch mehrere Einschränkungen, wie das Fehlen von Programmstrukturen und die Fähigkeit, komplexe Layoutmodelle zu erstellen. CSS bietet auch nur eingeschränkte Unterstützung für die Änderung der Position eines Elements.

XSL (Extensible Stylesheet Language)-Transformationen bestehen aus zwei Teilen: XSL-Elementen, die die Transformation eines XML-Baums in einen anderen Markup-Baum ermöglichen, und XPath, einer Auswahl-Sprache für Bäume. XSLT nimmt ein XML-Dokument (den Inhalt) und erstellt ein völlig neues Dokument basierend auf den Regeln im XSL-Stylesheet. Dies ermöglicht es XSLT, Elemente aus dem ursprünglichen XML-Dokument hinzuzufügen, zu entfernen und neu zu organisieren und somit eine feinere Kontrolle über die Struktur des resultierenden Dokuments zu haben.

Die Transformationen in XSLT basieren auf Regeln, die aus Vorlagen bestehen. Jede Vorlage entspricht (mithilfe von XPath) einem bestimmten Fragment des Eingabe-XML-Dokuments und wendet dann den Ersetzungsteil auf dieses Fragment an, um das neue resultierende Dokument zu erstellen.

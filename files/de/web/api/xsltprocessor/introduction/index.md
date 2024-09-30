---
title: Einführung
slug: Web/API/XSLTProcessor/Introduction
l10n:
  sourceCommit: 2836f3bf8ee544a2e87bfadd30a5d802110edd11
---

{{APIRef("XSLT")}}

Ein bemerkenswerter Trend in den W3C-Standards war die Bemühung, Inhalt von Stil zu trennen. Dies würde es ermöglichen, denselben Stil für mehrere Inhalte wiederzuverwenden, die Wartung zu vereinfachen und eine schnelle Möglichkeit zu bieten, das Erscheinungsbild von Inhalten zu ändern (nur eine Datei ändern).

CSS (Cascading Style Sheets) war eine der ersten vom W3C vorgeschlagenen Methoden. CSS ist eine einfache Möglichkeit, Stilregeln auf ein Webdokument anzuwenden. Diese Stilregeln definieren, wie das Dokument (der Inhalt) angeordnet werden soll. Es hat jedoch mehrere Einschränkungen, wie das Fehlen von Programmstrukturen und die Fähigkeit, komplexe Layoutmodelle zu erstellen. CSS hat auch begrenzte Unterstützung für die Änderung der Position eines Elements.

XSL (Extensible Stylesheet Language)-Transformationen bestehen aus zwei Teilen: XSL-Elemente, die die Transformation eines XML-Baums in einen anderen Markup-Baum ermöglichen, und XPath, eine Auswahlsprach für Bäume. XSLT nimmt ein XML-Dokument (den Inhalt) und erstellt auf Basis der Regeln im XSL-Stylesheet ein völlig neues Dokument. Dies ermöglicht es XSLT, Elemente aus dem ursprünglichen XML-Dokument hinzuzufügen, zu entfernen und neu zu organisieren und somit eine feinere Kontrolle über die Struktur des resultierenden Dokuments zu haben.

Transformationen in XSLT basieren auf Regeln, die aus Vorlagen bestehen. Jede Vorlage stimmt (mittels XPath) mit einem bestimmten Fragment des Eingabe-XML-Dokuments überein und wendet dann den Ersetzungsteil auf dieses Fragment an, um das neue resultierende Dokument zu erstellen.

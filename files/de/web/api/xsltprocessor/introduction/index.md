---
title: Einführung
slug: Web/API/XSLTProcessor/Introduction
l10n:
  sourceCommit: 2836f3bf8ee544a2e87bfadd30a5d802110edd11
---

{{APIRef("XSLT")}}

Ein bemerkenswerter Trend in den W3C-Standards ist das Bestreben, Inhalt von Stil zu trennen. Dadurch könnte derselbe Stil für mehrere Inhalte wiederverwendet werden, was die Wartung vereinfacht und eine schnelle Möglichkeit bietet, das Aussehen von Inhalten zu ändern, indem nur eine Datei modifiziert wird.

CSS (Cascade Style Sheets) war eine der ersten von W3C vorgeschlagenen Methoden. CSS ist eine einfache Methode, um Stilregeln auf ein Webdokument anzuwenden. Diese Stilregeln definieren, wie das Dokument (der Inhalt) ausgelegt werden soll. Es hat jedoch mehrere Einschränkungen, wie das Fehlen von Programmierstrukturen und die Fähigkeit, komplexe Layoutmodelle zu erstellen. CSS bietet auch nur begrenzte Unterstützung für die Änderung der Position eines Elements.

XSL (Extensible Stylesheet Language) Transformationen bestehen aus zwei Teilen: XSL-Elementen, die die Transformation eines XML-Baums in einen anderen Markup-Baum ermöglichen, und XPath, einer Auswahl-Sprache für Bäume. XSLT nimmt ein XML-Dokument (den Inhalt) und erstellt ein komplett neues Dokument basierend auf den Regeln im XSL-Stylesheet. Dadurch kann XSLT Elemente aus dem ursprünglichen XML-Dokument hinzufügen, entfernen und umorganisieren und so eine präzisere Kontrolle über die Struktur des resultierenden Dokuments ermöglichen.

Transformationen in XSLT basieren auf Regeln, die aus Vorlagen bestehen. Jede Vorlage stimmt (unter Verwendung von XPath) mit einem bestimmten Fragment des Eingabe-XML-Dokuments überein und wendet dann den Ersetzungsteil auf dieses Fragment an, um das neu resultierende Dokument zu erstellen.

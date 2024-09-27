---
title: Comment
slug: Web/API/Comment
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ ApiRef("DOM") }}

Das **`Comment`**-Interface repräsentiert textuelle Notationen innerhalb von Markup. Obwohl sie in der Regel nicht visuell angezeigt werden, sind solche Kommentare im Quellansichtsmodus lesbar.

Kommentare werden in HTML und XML als Inhalt zwischen `<!--` und `-->` dargestellt. In XML, wie innerhalb von SVG- oder MathML-Markup, darf die Zeichenfolge `--` nicht in einem Kommentar verwendet werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface hat keine spezifischen Eigenschaften, erbt jedoch die von seinem Elternteil [`CharacterData`](/de/docs/Web/API/CharacterData) und indirekt die von [`Node`](/de/docs/Web/API/Node)._

## Konstruktor

- [`Comment()`](/de/docs/Web/API/Comment/Comment)
  - : Gibt ein neues `Comment`-Objekt mit dem Parameter als seinem Textinhalt zurück. Wenn dieser nicht vorhanden ist, ist der Standardwert der leere String `''`.

## Instanz-Methoden

_Dieses Interface hat keine spezifischen Methoden, erbt jedoch die von seinem Elternteil [`CharacterData`](/de/docs/Web/API/CharacterData) und indirekt die von [`Node`](/de/docs/Web/API/Node)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-API](/de/docs/Web/API/Document_Object_Model)

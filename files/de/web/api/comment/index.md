---
title: Comment
slug: Web/API/Comment
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ ApiRef("DOM") }}

Das **`Comment`**-Interface repräsentiert textuelle Notizen innerhalb von Markup; obwohl es im Allgemeinen nicht visuell angezeigt wird, sind solche Kommentare im Quellansichtsmodus lesbar.

Kommentare werden in HTML und XML als Inhalt zwischen `<!--` und `-->` dargestellt. In XML, z. B. innerhalb von SVG- oder MathML-Markup, kann die Zeichenfolge `--` nicht innerhalb eines Kommentars verwendet werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface besitzt keine spezifischen Eigenschaften, erbt jedoch die Eigenschaften seines Elternteils, [`CharacterData`](/de/docs/Web/API/CharacterData), und indirekt die von [`Node`](/de/docs/Web/API/Node)._

## Konstruktor

- [`Comment()`](/de/docs/Web/API/Comment/Comment)
  - : Gibt ein neues `Comment`-Objekt mit dem Parameter als seinem Textinhalt zurück. Wenn der Parameter nicht vorhanden ist, ist der Standardwert der leere String, `''`.

## Instanz-Methoden

_Dieses Interface besitzt keine spezifischen Methoden, erbt jedoch die Methoden seines Elternteils, [`CharacterData`](/de/docs/Web/API/CharacterData), und indirekt die von [`Node`](/de/docs/Web/API/Node)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-API](/de/docs/Web/API/Document_Object_Model)

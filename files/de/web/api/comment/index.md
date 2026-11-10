---
title: Comment
slug: Web/API/Comment
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{ ApiRef("DOM") }}

Die **`Comment`**-Schnittstelle repräsentiert textuelle Anmerkungen innerhalb von Markup. Obwohl sie in der Regel nicht visuell angezeigt werden, können solche Kommentare in der Quelltextansicht gelesen werden.

In HTML und XML stehen Kommentare zwischen `<!--` und `-->`. In XML, etwa innerhalb von SVG- oder MathML-Markup, darf die Zeichenfolge `--` nicht innerhalb eines Kommentars verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Comment()`](/de/docs/Web/API/Comment/Comment)
  - : Gibt ein neues `Comment`-Objekt zurück, dessen Textinhalt dem übergebenen Parameter entspricht. Wird kein Parameter übergeben, ist der Standardwert die leere Zeichenfolge `''`.

## Instanzeigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften, erbt aber die Eigenschaften ihrer übergeordneten Schnittstelle [`CharacterData`](/de/docs/Web/API/CharacterData) und mittelbar die von [`Node`](/de/docs/Web/API/Node)._

## Instanzmethoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt aber die Methoden ihrer übergeordneten Schnittstelle [`CharacterData`](/de/docs/Web/API/CharacterData) und mittelbar die von [`Node`](/de/docs/Web/API/Node)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-API](/de/docs/Web/API/Document_Object_Model)

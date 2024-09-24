---
title: Kommentar
slug: Web/API/Comment
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{ ApiRef("DOM") }}

Die **`Comment`**-Schnittstelle steht für textuelle Anmerkungen innerhalb von Markup; obwohl sie normalerweise nicht visuell dargestellt werden, sind solche Kommentare im Quelltext einsehbar.

Kommentare werden in HTML und XML als Inhalt zwischen '`<!--`' und '`-->`' dargestellt. In XML, wie innerhalb von SVG- oder MathML-Markup, kann die Zeichenfolge '`--`' nicht innerhalb eines Kommentars verwendet werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine spezifischen Eigenschaften, erbt jedoch die ihrer übergeordneten Schnittstelle {{domxref("CharacterData")}} und indirekt die von {{domxref("Node")}}._

## Konstruktor

- {{ domxref("Comment.Comment()", "Comment()") }}
  - : Gibt ein neues `Comment`-Objekt mit dem Parameter als seinen Textinhalt zurück. Wenn nicht vorhanden, ist der Standardwert der leere String, `''`.

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifische Methode, erbt jedoch die ihrer übergeordneten Schnittstelle {{domxref("CharacterData")}} und indirekt die von {{domxref("Node")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM API](/de/docs/Web/API/Document_Object_Model)

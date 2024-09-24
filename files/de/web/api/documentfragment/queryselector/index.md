---
title: "DocumentFragment: Methode querySelector()"
short-title: querySelector()
slug: Web/API/DocumentFragment/querySelector
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{ApiRef("DOM")}}

Die Methode **`DocumentFragment.querySelector()`** gibt das erste Element zurück, oder `null`, falls keine Übereinstimmungen gefunden werden, innerhalb des {{domxref("DocumentFragment")}} (unter Verwendung einer tiefensuche-vorbestellten Traversierung der Knoten des Dokuments), das mit der angegebenen Gruppe von Selektoren übereinstimmt.

Wenn der Selektor eine ID abgleicht und diese ID irrtümlich mehrmals im Dokument verwendet wird, gibt er das erste sich übereinstimmende Element zurück.

Wenn die im Parameter angegebenen Selektoren ungültig sind, wird eine {{domxref("DOMException")}} mit einem `SYNTAX_ERR` Wert ausgelöst.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere durch Kommas getrennte CSS-Selektoren enthält.

### Rückgabewert

Ein {{domxref("Element")}}-Objekt, das das erste Element im Dokument darstellt, das mit dem angegebenen Satz von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) übereinstimmt, oder `null`, wenn keine Übereinstimmungen vorhanden sind.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel wird das erste Element im {{domxref("DocumentFragment")}} mit der Klasse "`myclass`" zurückgegeben:

```js
const el = documentfragment.querySelector(".myclass");
```

### CSS-Syntax und das Argument der Methode

Das String-Argument, das an `querySelector` übergeben wird, muss der CSS-Syntax entsprechen. Um IDs oder Selektoren abzugleichen, die nicht der CSS-Syntax folgen (indem beispielsweise falsch ein Semikolon oder Leerzeichen verwendet wird), ist es notwendig, das fehlerhafte Zeichen mit einem doppelten Backslash zu maskieren:

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  document.querySelector("#foo\bar"); // Stimmt mit nichts überein
  document.querySelector("#foo\\\\bar"); // Entspricht dem ersten div
  document.querySelector("#foo:bar"); // Stimmt mit nichts überein
  document.querySelector("#foo\\:bar"); // Entspricht dem zweiten div
</script>
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{domxref("DocumentFragment")}}-Interface, zu dem es gehört.

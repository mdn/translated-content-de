---
title: "DocumentFragment: Methode querySelectorAll()"
short-title: querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

Die **`DocumentFragment.querySelectorAll()`**-Methode gibt eine
{{domxref("NodeList")}} von Elementen innerhalb des {{domxref("DocumentFragment")}} zurück (unter Verwendung
einer tiefenorientierten Vorordnungsdurchsuchung der Knoten des Dokuments), die der angegebenen
Gruppe von Selektoren entsprechen.

Wenn die im Parameter angegebenen Selektoren ungültig sind, wird eine {{domxref("DOMException")}}
mit einem `SYNTAX_ERR`-Wert ausgelöst.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere durch Kommas getrennte CSS-Selektoren enthält.

### Rückgabewert

Eine nicht-dynamische {{domxref("NodeList")}}, die ein {{domxref("Element")}}-Objekt für jedes Element enthält, das mit mindestens einem der angegebenen Selektoren übereinstimmt, oder eine leere {{domxref("NodeList")}} im Falle keiner Übereinstimmungen.

## Beispiele

Dieses Beispiel gibt eine Liste aller `div`-Elemente innerhalb des
`DocumentFragment` mit einer Klasse von entweder "`note`" oder
"`alert`" zurück:

```js
const matches = documentfrag.querySelectorAll("div.note, div.alert");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("DocumentFragment")}}-Interface, zu dem es gehört.

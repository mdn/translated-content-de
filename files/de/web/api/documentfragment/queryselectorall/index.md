---
title: "DocumentFragment: querySelectorAll() Methode"
short-title: querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ApiRef("DOM")}}

Die **`DocumentFragment.querySelectorAll()`** Methode gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Elementen innerhalb des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück (unter Verwendung der Tiefensuche-Vorbestellung der Knotenhierarchie des Dokuments), die mit der angegebenen Gruppe von Selektoren übereinstimmen.

Wenn die in den Parametern angegebenen Selektoren ungültig sind, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` Wert ausgelöst.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere durch Kommata getrennte CSS-Selektoren enthält.

### Rückgabewert

Eine nicht-live [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element)-Objekt für jedes Element enthält, das mindestens einem der angegebenen Selektoren entspricht, oder eine leere [`NodeList`](/de/docs/Web/API/NodeList) im Falle von keinen Übereinstimmungen.

## Beispiele

Dieses Beispiel gibt eine Liste aller `div`-Elemente innerhalb des `DocumentFragment` zurück, die eine Klasse von entweder `note` oder `alert` haben:

```js
const matches = documentfrag.querySelectorAll("div.note, div.alert");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Interface, zu dem es gehört.

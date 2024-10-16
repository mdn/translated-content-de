---
title: "DocumentFragment: querySelectorAll() Methode"
short-title: querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{ApiRef("DOM")}}

Die **`DocumentFragment.querySelectorAll()`** Methode gibt eine
[`NodeList`](/de/docs/Web/API/NodeList) von Elementen innerhalb des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück (unter Verwendung der
Tiefen-First-Vorordnung der Dokumentknoten), die der angegebenen Gruppe von Selektoren entsprechen.

Falls die im Parameter angegebenen Selektoren ungültig sind, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit
einem `SYNTAX_ERR` Wert ausgelöst.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`
  - : Ein String, der einen oder mehrere durch Kommata getrennte CSS-Selektoren enthält.

### Rückgabewert

Eine nicht-live [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element) Objekt für jedes Element enthält, das mindestens einem der angegebenen Selektoren entspricht, oder eine leere
[`NodeList`](/de/docs/Web/API/NodeList) im Fall von keinen Übereinstimmungen.

## Beispiele

Dieses Beispiel gibt eine Liste aller `div` Elemente im
`DocumentFragment` zurück, die entweder die Klasse `note` oder
`alert` haben:

```js
const matches = documentFrag.querySelectorAll("div.note, div.alert");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Schnittstelle, zu der es gehört.

---
title: "Dokument: createCDATASection()-Methode"
short-title: createCDATASection()
slug: Web/API/Document/createCDATASection
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die Methode **`createCDATASection()`** erstellt einen neuen CDATA-Abschnittsknoten und gibt ihn zurück.

## Syntax

```js-nolint
createCDATASection(data)
```

### Parameter

- `data`
  - : Ein String, der die Daten enthält, die dem CDATA-Abschnitt hinzugefügt werden sollen.

### Rückgabewert

Ein [CDATA-Abschnittsknoten](/de/docs/Web/API/CDATASection).

## Beispiele

```js
const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const cdata = docu.createCDATASection("Some <CDATA> data & then some");
docu.querySelector("xml").appendChild(cdata);
console.log(new XMLSerializer().serializeToString(docu));
// Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## Hinweise

- Dies funktioniert nur mit XML- und nicht mit HTML-Dokumenten (da HTML-Dokumente CDATA-Abschnitte nicht unterstützen); ein Versuch, dies in einem HTML-Dokument zu verwenden, führt zu einem `NOT_SUPPORTED_ERR`.
- Es wird eine `NS_ERROR_DOM_INVALID_CHARACTER_ERR`-Ausnahme ausgelöst, wenn versucht wird, die abschließende CDATA-Sequenz ("`]]>`") als Teil der Daten einzureichen. Daher kann benutzergestellte und unescape-Daten nicht sicher ohne die Erzeugung einer Ausnahme durch diese Methode verwendet werden ({{domxref("document.createTextNode","createTextNode()")}} kann oft stattdessen verwendet werden).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

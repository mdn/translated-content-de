---
title: "Dokument: createCDATASection() Methode"
short-title: createCDATASection()
slug: Web/API/Document/createCDATASection
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

Die **`createCDATASection()`**-Methode erstellt einen neuen CDATA-Abschnittsknoten und gibt diesen zurück.

## Syntax

```js-nolint
createCDATASection(data)
```

### Parameter

- `data`
  - : Ein String, der die Daten enthält, die dem CDATA-Abschnitt hinzugefügt werden sollen.

### Rückgabewert

Ein [CDATA-Abschnitt](/de/docs/Web/API/CDATASection)-Knoten.

## Beispiele

```js
const doc = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const cdata = doc.createCDATASection("Some <CDATA> data & then some");
doc.querySelector("xml").appendChild(cdata);
console.log(new XMLSerializer().serializeToString(doc));
// Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## Hinweise

- Dies funktioniert nur mit XML, nicht mit HTML-Dokumenten (da HTML-Dokumente keine CDATA-Abschnitte unterstützen); ein Versuch, es auf einem HTML-Dokument anzuwenden, wird einen `NOT_SUPPORTED_ERR` auslösen.
- Es wird eine `NS_ERROR_DOM_INVALID_CHARACTER_ERR`-Ausnahme ausgelöst, wenn versucht wird, die schließende CDATA-Sequenz (`]]>`) als Teil der Daten einzureichen, sodass nicht maskierte benutzerdefinierte Daten ohne diese Ausnahme nicht sicher verwendet werden können (oft kann [`createTextNode()`](/de/docs/Web/API/Document/createTextNode) stattdessen verwendet werden).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

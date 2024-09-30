---
title: "Document: createCDATASection()-Methode"
short-title: createCDATASection()
slug: Web/API/Document/createCDATASection
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}

**`createCDATASection()`** erstellt einen neuen CDATA-Abschnittsknoten und gibt ihn zurück.

## Syntax

```js-nolint
createCDATASection(data)
```

### Parameter

- `data`
  - : Ein String, der die Daten enthält, die dem CDATA-Abschnitt hinzugefügt werden sollen.

### Rückgabewert

Ein [CDATA Section](/de/docs/Web/API/CDATASection)-Knoten.

## Beispiele

```js
const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const cdata = docu.createCDATASection("Some <CDATA> data & then some");
docu.querySelector("xml").appendChild(cdata);
console.log(new XMLSerializer().serializeToString(docu));
// Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## Anmerkungen

- Dies funktioniert nur mit XML-Dokumenten, nicht mit HTML-Dokumenten (da HTML-Dokumente CDATA-Abschnitte nicht unterstützen); der Versuch, es bei einem HTML-Dokument anzuwenden, wird einen `NOT_SUPPORTED_ERR` auslösen.
- Es wird eine `NS_ERROR_DOM_INVALID_CHARACTER_ERR`-Ausnahme auslösen, wenn man versucht, die schließende CDATA-Sequenz (`]]>`) als Teil der Daten zu übergeben. Daher können nicht-escapierte, benutzerbereitgestellte Daten ohne diese Methode sicher verwendet werden, um diese Ausnahme zu vermeiden ([`createTextNode()`](/de/docs/Web/API/Document/createTextNode) kann oft als Ersatz verwendet werden).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

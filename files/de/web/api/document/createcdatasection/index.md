---
title: "Dokument: createCDATASection()-Methode"
short-title: createCDATASection()
slug: Web/API/Document/createCDATASection
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}

Die **`createCDATASection()`**-Methode erstellt einen neuen CDATA-Abschnittsknoten und gibt diesen zurück.

## Syntax

```js-nolint
createCDATASection(data)
```

### Parameter

- `data`
  - : Ein Zeichenkette, die die dem CDATA-Abschnitt hinzuzufügenden Daten enthält.

### Rückgabewert

Ein [CDATA-Abschnitt](/de/docs/Web/API/CDATASection)-Knoten.

## Beispiele

```js
const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const cdata = docu.createCDATASection("Some <CDATA> data & then some");
docu.querySelector("xml").appendChild(cdata);
console.log(new XMLSerializer().serializeToString(docu));
// Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## Hinweise

- Dies funktioniert nur mit XML- und nicht mit HTML-Dokumenten (da HTML-Dokumente keine
  CDATA-Abschnitte unterstützen); der Versuch, dies bei einem HTML-Dokument durchzuführen, wird
  einen `NOT_SUPPORTED_ERR` auslösen.
- Es wird eine `NS_ERROR_DOM_INVALID_CHARACTER_ERR`-Ausnahme ausgelöst, wenn versucht wird,
  die Abschlusssequenz des CDATA-Abschnitts (`]]>`) als Teil der Daten einzureichen, sodass
  nicht escapte, benutzerbereitgestellte Daten nicht sicher verwendet werden können, ohne dass
  diese Methode diese Ausnahme auslöst ([`createTextNode()`](/de/docs/Web/API/Document/createTextNode) kann oft anstelle dessen verwendet werden).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

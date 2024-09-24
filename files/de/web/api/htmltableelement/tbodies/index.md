---
title: "HTMLTableElement: tBodies-Eigenschaft"
short-title: tBodies
slug: Web/API/HTMLTableElement/tBodies
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.tBodies`**-Eigenschaft gibt eine schreibgeschützte, aktuelle {{domxref("HTMLCollection")}} der Tabellenkörper in einem {{htmlElement("table")}} zurück.

Obwohl die Eigenschaft schreibgeschützt ist, ist das zurückgegebene Objekt live und erlaubt die Änderung seines Inhalts.

Die zurückgegebene Sammlung enthält implizite {{HTMLElement("tbody")}}-Elemente. Zum Beispiel:

```html
<table>
  <tr>
    <td>cell one</td>
  </tr>
</table>
```

Das durch das obige HTML generierte HTML-DOM wird ein {{HTMLElement("tbody")}}-Element haben, auch wenn die Tags im Quell-HTML nicht enthalten sind.

## Wert

Eine aktuelle {{domxref("HTMLCollection")}}.

## Beispiele

Dieses Beispiel ermittelt die Anzahl der Tabellenkörper in einer Tabelle.

```js
mytable.tBodies.length;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCollection")}}
- {{HTMLElement("tbody")}}

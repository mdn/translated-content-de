---
title: Globales HTML-Attribut itemref
short-title: itemref
slug: Web/HTML/Reference/Global_attributes/itemref
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Eigenschaften, die keine Nachkommen eines Elements mit dem Attribut [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) sind, können einem Element mithilfe des [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) **`itemref`** zugeordnet werden.

`itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) an anderer Stelle im Dokument, mit zusätzlichen Eigenschaften.

Das `itemref`-Attribut kann nur auf Elementen angegeben werden, die ein `itemscope`-Attribut haben.

> [!NOTE]
> Das `itemref`-Attribut ist kein Bestandteil des Mikrodatenschemas. Es ist nur ein syntaktisches Konstrukt, das Autoren dabei hilft, Annotationen auf Seiten hinzuzufügen, bei denen die zu annotierenden Daten keiner praktischen Baumstruktur folgen. Zum Beispiel ermöglicht es Autoren, Daten in einer Tabelle zu markieren, sodass jede Spalte ein separates Element definiert, während die Eigenschaften in den Zellen beibehalten werden.

## Beispiele

### Strukturierte Daten für eine Band darstellen

Dieses Beispiel verwendet Mikrodateneigenschaften, um die folgenden strukturierten Daten (im [JSON-LD](https://json-ld.org/) Format) darzustellen:

```json
{
  "@id": "amanda",
  "name": "Amanda",
  "band": {
    "@id": "b",
    "name": "Jazz Band",
    "size": 12
  }
}
```

#### HTML

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

#### Ergebnis

{{EmbedLiveSample('Representing structured data for a band')}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Andere globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Andere mit Mikrodata verbundene globale Attribute:
  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

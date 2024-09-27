---
title: itemref
slug: Web/HTML/Global_attributes/itemref
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Eigenschaften, die keine Nachkommen eines Elements mit dem [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)-Attribut sind, können einem Element mithilfe des [globalen Attributs](/de/docs/Web/HTML/Global_attributes) **`itemref`** zugeordnet werden.

`itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) anderswo im Dokument, mit zusätzlichen Eigenschaften.

Das `itemref`-Attribut kann nur auf Elementen angegeben werden, die ein `itemscope`-Attribut spezifiziert haben.

> [!NOTE]
> Das `itemref`-Attribut ist nicht Teil des Microdata-Datenmodells. Es ist lediglich ein syntaktisches Hilfsmittel, um Autoren zu unterstützen, Anmerkungen zu Seiten hinzuzufügen, bei denen die zu annotierenden Daten keiner bequemen Baumstruktur folgen. Zum Beispiel ermöglicht es Autoren, Daten in einer Tabelle zu markieren, sodass jede Spalte ein separates Element definiert, während die Eigenschaften in den Zellen verbleiben.

## Beispiele

### Darstellung strukturierter Daten für eine Band

Dieses Beispiel verwendet Microdata-Attribute, um die folgenden strukturierten Daten darzustellen (im [JSON-LD](https://json-ld.org/)-Format):

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

- [Andere verschiedene globale Attribute](/de/docs/Web/HTML/Global_attributes)
- Andere mit Microdata verwandte globale Attribute:

  - [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)

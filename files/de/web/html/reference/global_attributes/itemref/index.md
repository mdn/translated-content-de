---
title: "`itemref` HTML-Global-Attribut"
short-title: itemref
slug: Web/HTML/Reference/Global_attributes/itemref
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Eigenschaften, die keine Nachfahren eines Elements mit dem [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)-Attribut sind, können mit einem Element mithilfe des [Global-Attributs](/de/docs/Web/HTML/Reference/Global_attributes) **`itemref`** verknüpft werden.

`itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) an anderer Stelle im Dokument mit zusätzlichen Eigenschaften.

Das `itemref`-Attribut kann nur bei Elementen angegeben werden, die ein `itemscope`-Attribut spezifiziert haben.

> [!NOTE]
> Das `itemref`-Attribut ist kein Teil des Microdata-Datenmodells. Es ist lediglich ein syntaktisches Konstrukt, das Autoren hilft, Anmerkungen zu Seiten hinzuzufügen, bei denen die zu annotierenden Daten nicht einer praktischen Baumstruktur folgen. Zum Beispiel ermöglicht es Autoren, Daten in einer Tabelle zu markieren, sodass jede Spalte ein separates Element definiert, während die Eigenschaften in den Zellen verbleiben.

## Beispiele

### Repräsentation strukturierter Daten für eine Band

Dieses Beispiel verwendet Microdata-Attribute, um die folgenden strukturierten Daten im [JSON-LD](https://json-ld.org/)-Format darzustellen:

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

- [Andere verschiedene globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Andere microdata-bezogene globale Attribute:
  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

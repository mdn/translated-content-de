---
title: HTML-Attribut `itemref` (global)
short-title: itemref
slug: Web/HTML/Reference/Global_attributes/itemref
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar("Global_attributes")}}

Eigenschaften, die keine Nachkommen eines Elements mit dem [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)-Attribut sind, können mit einem [globalen Attribut](/de/docs/Web/HTML/Reference/Global_attributes) **`itemref`** einem Element zugeordnet werden.

`itemref` bietet eine Liste von Element-IDs (nicht `itemid`s), die sich an anderer Stelle im Dokument befinden, mit zusätzlichen Eigenschaften.

Das `itemref`-Attribut kann nur bei Elementen angegeben werden, die ein `itemscope`-Attribut haben.

> [!NOTE]
> Das `itemref`-Attribut ist kein Bestandteil des Microdata-Datenmodells. Es ist lediglich ein syntaktisches Konstrukt, um Autoren dabei zu helfen, Anmerkungen zu Seiten hinzuzufügen, bei denen die zu annotierenden Daten keiner bequemen Baumstruktur folgen. Zum Beispiel erlaubt es Autoren, Daten in einer Tabelle zu kennzeichnen, sodass jede Spalte ein separates Element definiert, während die Eigenschaften in den Zellen bleiben.

## Beispiele

### Darstellung von strukturierten Daten für eine Band

Dieses Beispiel verwendet Microdata-Attribute, um die folgenden strukturierten Daten (im [JSON-LD](https://json-ld.org/)-Format) darzustellen:

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

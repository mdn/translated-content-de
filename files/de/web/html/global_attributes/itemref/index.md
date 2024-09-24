---
title: itemref
slug: Web/HTML/Global_attributes/itemref
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Eigenschaften, die keine Nachkommen eines Elements mit dem [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)-Attribut sind, können mit einem Element durch das [globale Attribut](/de/docs/Web/HTML/Global_attributes) **`itemref`** verknüpft werden.

`itemref` stellt eine Liste von Element-IDs (nicht `itemid`s) an anderer Stelle im Dokument zur Verfügung, mit zusätzlichen Eigenschaften.

Das `itemref`-Attribut kann nur bei Elementen angegeben werden, die ein `itemscope`-Attribut angegeben haben.

> [!NOTE]
> Das `itemref`-Attribut ist kein Bestandteil des Microdata-Datenmodells. Es ist lediglich ein syntaktisches Konstrukt, um Autoren dabei zu unterstützen, Annotationen auf Seiten hinzuzufügen, bei denen die zu annotierenden Daten nicht eine bequeme Baumstruktur folgen. Beispielsweise ermöglicht es Autoren, Daten in einer Tabelle so zu kennzeichnen, dass jede Spalte ein separates Element definiert, während die Eigenschaften in den Zellen bleiben.

## Beispiele

### Strukturierte Daten für eine Band darstellen

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

- [Weitere verschiedene globale Attribute](/de/docs/Web/HTML/Global_attributes)
- Andere mit Microdata verbundene globale Attribute:

  - [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)

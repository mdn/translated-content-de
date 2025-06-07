---
title: Globale HTML-Attribut `itemref`
short-title: itemref
slug: Web/HTML/Reference/Global_attributes/itemref
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Eigenschaften, die nicht Nachkommen eines Elements mit dem [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)-Attribut sind, können einem Element mit dem [globalen Attribut](/de/docs/Web/HTML/Reference/Global_attributes) **`itemref`** zugeordnet werden.

`itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) an anderer Stelle im Dokument mit zusätzlichen Eigenschaften an.

Das `itemref`-Attribut kann nur bei Elementen angegeben werden, die ein `itemscope`-Attribut spezifiziert haben.

> [!NOTE]
> Das `itemref`-Attribut ist kein Bestandteil des Microdata-Datenmodells. Es ist lediglich ein syntaktisches Konstrukt, das Autoren dabei hilft, Anmerkungen zu Seiten hinzuzufügen, auf denen die zu annotierenden Daten keiner praktischen Baumstruktur folgen. Beispielsweise ermöglicht es Autoren, Daten in einer Tabelle so zu markieren, dass jede Spalte ein separates Element definiert, während die Eigenschaften in den Zellen bleiben.

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

- [Andere verschiedene globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Andere globale Attribute, die sich auf Mikrodaten beziehen:

  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

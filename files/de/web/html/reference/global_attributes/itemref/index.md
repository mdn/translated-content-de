---
title: itemref
slug: Web/HTML/Reference/Global_attributes/itemref
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Eigenschaften, die keine Nachkommen eines Elements mit dem Attribut [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) sind, können mit einem Element mithilfe des [globalen Attributs](/de/docs/Web/HTML/Reference/Global_attributes) **`itemref`** verbunden werden.

`itemref` bietet eine Liste von Element-IDs (nicht `itemid`s) an anderer Stelle im Dokument mit zusätzlichen Eigenschaften.

Das `itemref`-Attribut kann nur bei Elementen angegeben werden, die ein `itemscope`-Attribut angegeben haben.

> [!NOTE]
> Das `itemref`-Attribut ist kein Teil des Mikrodaten-Datenmodells. Es ist lediglich ein syntaktisches Konstrukt, das Autoren hilft, Seiten mit Annotationen zu versehen, bei denen die zu annotierenden Daten keiner bequemen Baumstruktur folgen. Beispielsweise ermöglicht es Autoren, Daten in einer Tabelle zu markieren, sodass jede Spalte ein separates Objekt definiert, während die Eigenschaften in den Zellen beibehalten werden.

## Beispiele

### Strukturierte Daten für eine Band darstellen

Dieses Beispiel verwendet Mikrodatenattribute, um die folgenden strukturierten Daten (im [JSON-LD](https://json-ld.org/) Format) darzustellen:

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
- Andere mikrodatenbezogene globale Attribute:

  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

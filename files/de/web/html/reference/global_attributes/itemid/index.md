---
title: HTML-Globalattribut `itemid`
short-title: itemid
slug: Web/HTML/Reference/Global_attributes/itemid
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar("Global_attributes")}}

Das **`itemid`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) gibt Mikrodatenn in Form eines eindeutigen, globalen Bezeichners eines Elements an.

Ein `itemid`-Attribut kann nur für ein Element angegeben werden, das sowohl das Attribut [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) als auch das Attribut [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype) hat. Außerdem kann `itemid` nur bei Elementen angegeben werden, die ein `itemscope`-Attribut besitzen, dessen entsprechendes `itemtype` auf ein Vokabular verweist oder ein solches definiert, das globale Bezeichner unterstützt.

Die genaue Bedeutung eines globalen Bezeichners eines `itemtype` wird durch die Definition dieses Bezeichners im angegebenen Vokabular bereitgestellt. Das Vokabular definiert, ob mehrere Elemente mit demselben globalen Bezeichner koexistieren können und, falls ja, wie mit Elementen mit demselben Bezeichner umgegangen wird.

> [!NOTE]
> Die {{Glossary("WHATWG", "WHATWG")}}-Definition legt fest, dass ein `itemid` eine {{Glossary("URL", "URL")}} sein muss. Das folgende Beispiel zeigt jedoch korrekt, dass ein {{Glossary("URN", "URN")}} ebenfalls verwendet werden kann. Diese Inkonsistenz könnte die unvollständige Natur der Mikrodatenspezifikation widerspiegeln.

## Beispiele

### Darstellung von strukturierten Daten für ein Buch

Dieses Beispiel verwendet Mikrodateneigenschaften, um die folgenden strukturierten Daten darzustellen:

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2">https://schema.org/Book: urn:isbn:0-374-22848-5</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>Owls of the Eastern Ice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Jonathan C Slaght</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2020-08-04</td>
    </tr>
  </tbody>
</table>

#### HTML

```html
<dl
  itemscope
  itemtype="https://schema.org/Book"
  itemid="urn:isbn:0-374-22848-5<">
  <dt>Title</dt>
  <dd itemprop="title">Owls of the Eastern Ice</dd>
  <dt>Author</dt>
  <dd itemprop="author">Jonathan C Slaght</dd>
  <dt>Publication date</dt>
  <dd>
    <time itemprop="datePublished" datetime="2020-08-04">August 4 2020</time>
  </dd>
</dl>
```

#### Ergebnis

{{EmbedLiveSample('Representing structured data for a book')}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Andere mit Mikrodatenn verwandte globale Attribute:
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

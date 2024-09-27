---
title: itemid
slug: Web/HTML/Global_attributes/itemid
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`itemid`**-[Globale Attribut](/de/docs/Web/HTML/Global_attributes) bietet Mikrodaten in Form eines eindeutigen, globalen Identifikators eines Elements.

Ein `itemid`-Attribut kann nur für ein Element angegeben werden, das sowohl ein [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) als auch ein [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype) Attribut besitzt. Außerdem kann `itemid` nur für Elemente angegeben werden, die ein `itemscope`-Attribut haben, deren entsprechendes `itemtype` auf ein Vokabular verweist oder eines definiert, das globale Identifikatoren unterstützt.

Die genaue Bedeutung eines globalen Identifikators eines `itemtype` wird durch die Definition dieses Identifikators im angegebenen Vokabular bereitgestellt. Das Vokabular legt fest, ob mehrere Elemente mit demselben globalen Identifikator koexistieren können und, wenn ja, wie mit Elementen mit demselben Identifikator umgegangen wird.

> [!NOTE]
> Die [WHATWG](/de/docs/Glossary/WHATWG)-Definition spezifiziert, dass ein `itemid` eine [URL](/de/docs/Glossary/URL) sein muss. Das folgende Beispiel zeigt jedoch korrekt, dass auch ein [URN](/de/docs/Glossary/URN) verwendet werden kann. Diese Inkonsistenz spiegelt möglicherweise die unvollständige Natur der Mikrodaten-Spezifikation wider.

## Beispiele

### Darstellung strukturierter Daten für ein Buch

Dieses Beispiel verwendet Mikrodatenattribute, um die folgenden strukturierten Daten darzustellen:

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

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Weitere mit Mikrodaten verwandte globale Attribute:

  - [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)

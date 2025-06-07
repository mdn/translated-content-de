---
title: HTML itemid Globalattribut
short-title: itemid
slug: Web/HTML/Reference/Global_attributes/itemid
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`itemid`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) bietet Mikrodaten in Form eines einzigartigen, globalen Identifikators eines Elements.

Ein `itemid`-Attribut kann nur für ein Element angegeben werden, das sowohl das [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)- als auch das [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)-Attribut besitzt. Außerdem kann `itemid` nur für Elemente angegeben werden, die ein `itemscope`-Attribut haben, dessen entsprechendes `itemtype` auf einen Vokabular verweist oder eines definiert, das globale Identifikatoren unterstützt.

Die genaue Bedeutung eines globalen Identifikators von `itemtype` wird durch die Definition dieses Identifikators innerhalb des angegebenen Vokabulars bereitgestellt. Das Vokabular definiert, ob mehrere Elemente mit demselben globalen Identifikator koexistieren können und, falls ja, wie Elemente mit demselben Identifikator behandelt werden.

> [!NOTE]
> Die {{Glossary("WHATWG", "WHATWG")}}-Definition gibt an, dass ein `itemid` eine {{Glossary("URL", "URL")}} sein muss. Das folgende Beispiel zeigt jedoch korrekt, dass auch ein {{Glossary("URN", "URN")}} verwendet werden kann. Diese Inkonsistenz kann die unvollständige Natur der Mikrodaten-Spezifikation widerspiegeln.

## Beispiele

### Strukturierte Daten für ein Buch darstellen

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

- Alle [Globalattribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Andere mikrodatenbezogene Globalattribute:

  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

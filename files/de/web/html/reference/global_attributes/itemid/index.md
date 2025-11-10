---
title: HTML itemid Global-Attribut
short-title: itemid
slug: Web/HTML/Reference/Global_attributes/itemid
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`itemid`** [Global-Attribut](/de/docs/Web/HTML/Reference/Global_attributes) liefert Mikrodaten in Form eines eindeutigen, globalen Identifikators eines Elements.

Ein `itemid`-Attribut kann nur für ein Element angegeben werden, das sowohl das [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)- als auch das [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)-Attribut besitzt. Außerdem kann `itemid` nur auf Elementen angegeben werden, die ein `itemscope`-Attribut besitzen, dessen entsprechendes `itemtype` sich auf ein Vokabular bezieht oder dieses definiert, das globale Identifikatoren unterstützt.

Die genaue Bedeutung eines globalen Identifikators eines `itemtype` wird durch die Definition dieses Identifikators innerhalb des angegebenen Vokabulars bereitgestellt. Das Vokabular definiert, ob mehrere Elemente mit demselben globalen Identifikator koexistieren können und, falls ja, wie Elemente mit demselben Identifikator gehandhabt werden.

> [!NOTE]
> Die {{Glossary("WHATWG", "WHATWG")}}-Definition gibt an, dass ein `itemid` eine {{Glossary("URL", "URL")}} sein muss. Das folgende Beispiel zeigt jedoch korrekt, dass auch ein {{Glossary("URN", "URN")}} verwendet werden kann. Diese Inkonsistenz kann den unvollständigen Charakter der Mikrodaten-Spezifikation widerspiegeln.

## Beispiele

### Strukturierte Daten für ein Buch darstellen

Dieses Beispiel verwendet Mikrodaten-Attribute, um die folgenden strukturierten Daten darzustellen:

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
- Andere mikrodatenbezogene globale Attribute:
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

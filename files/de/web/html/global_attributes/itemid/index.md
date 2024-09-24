---
title: itemid
slug: Web/HTML/Global_attributes/itemid
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`itemid`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) stellt Mikrodaten in Form eines eindeutigen, globalen Identifikators eines Elements bereit.

Ein `itemid`-Attribut kann nur für ein Element angegeben werden, das sowohl die Attribute [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) als auch [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype) besitzt. Außerdem kann `itemid` nur auf Elemente angewendet werden, die ein `itemscope`-Attribut besitzen, dessen entsprechendes `itemtype` auf ein Vokabular verweist oder ein Vokabular definiert, das globale Identifikatoren unterstützt.

Die genaue Bedeutung eines globalen Identifikators eines `itemtype` wird durch die Definition dieses Identifikators innerhalb des angegebenen Vokabulars festgelegt. Das Vokabular bestimmt, ob mehrere Elemente mit demselben globalen Identifikator koexistieren können und falls ja, wie mit Elementen mit demselben Identifikator umgegangen wird.

> [!NOTE]
> Die {{glossary("WHATWG")}}-Definition legt fest, dass ein `itemid` eine {{glossary("URL")}} sein muss. Das folgende Beispiel zeigt jedoch korrekt, dass auch ein {{glossary("URN")}} verwendet werden kann. Diese Inkonsistenz könnte die unvollständige Natur der Mikrodaten-Spezifikation widerspiegeln.

## Beispiele

### Darstellung strukturierter Daten für ein Buch

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

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Andere mikrodatenbezogene globale Attribute:

  - [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)

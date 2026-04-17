---
title: "`itemid` HTML Globalattribut"
short-title: itemid
slug: Web/HTML/Reference/Global_attributes/itemid
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`itemid`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) bietet Mikrodaten in Form einer eindeutigen, globalen Kennung eines Elements.

Ein `itemid`-Attribut kann nur für ein Element angegeben werden, das sowohl das [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)- als auch das [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)-Attribut hat. Außerdem kann `itemid` nur auf Elementen angegeben werden, die ein `itemscope`-Attribut besitzen, dessen entsprechendes `itemtype` auf ein Vokabular verweist oder eines definiert, das globale Kennungen unterstützt.

Die genaue Bedeutung einer globalen Kennung eines `itemtype` wird durch die Definition dieser Kennung im angegebenen Vokabular festgelegt. Das Vokabular bestimmt, ob mehrere Elemente mit derselben globalen Kennung koexistieren können und, falls ja, wie Elemente mit derselben Kennung behandelt werden.

> [!NOTE]
> Die {{Glossary("WHATWG", "WHATWG")}}-Definition legt fest, dass ein `itemid` eine {{Glossary("URL", "URL")}} sein muss. Das folgende Beispiel zeigt jedoch korrekt, dass auch eine {{Glossary("URN", "URN")}} verwendet werden kann. Diese Inkonsistenz kann die unvollständige Natur der Mikrodaten-Spezifikation widerspiegeln.

## Beispiele

### Darstellung von strukturierten Daten für ein Buch

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

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Andere mikrodatenbezogene globale Attribute:
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

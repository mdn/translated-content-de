---
title: itemtype
slug: Web/HTML/Reference/Global_attributes/itemtype
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) **`itemtype`** gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`'s (Elementeigenschaften) in der Datenstruktur zu definieren.

[`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Geltungsbereich festzulegen, in dem das durch `itemtype` festgelegte Vokabular aktiv sein wird.

Google und andere große Suchmaschinen unterstützen das [schema.org](https://schema.org/) Vokabular für strukturierte Daten. Dieses Vokabular definiert eine standardisierte Menge von Typnamen und Eigenschaftsnamen. Zum Beispiel gibt `MusicEvent` ein Konzert an, mit [`startDate`](https://schema.org/startDate) und [`location`](https://schema.org/location) Eigenschaften, die die wichtigsten Details des Konzerts festlegen. In diesem Fall wäre [`MusicEvent`](https://schema.org/MusicEvent) die URL, die von `itemtype` verwendet wird, mit `startDate` und `location` als `itemprop`'s, die [`MusicEvent`](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Weitere Informationen über `itemtype` Attribute finden Sie unter <https://schema.org/Thing>

- Das **itemtype** Attribut muss einen Wert haben, der eine ungeordnete Menge von einzigartigen Tokens ist, die groß- und kleinschreibungssensitiv sind, wobei jedes eine gültige und absolute URL ist und alle das gleiche Vokabular verwenden sollen. Der Wert des Attributs muss mindestens ein Token haben.
- Die Elementtypen müssen alle Typen sein, die in anwendbaren Spezifikationen definiert sind (wie z.B. [schema.org](https://schema.org/)) und müssen alle dasselbe Vokabular verwenden.
- Das itemtype Attribut kann nur bei Elementen angegeben werden, die ein itemscope Attribut spezifiziert haben.
- Das itemid Attribut kann nur bei Elementen angegeben werden, die sowohl ein itemscope Attribut als auch ein itemtype Attribut spezifiziert haben. Sie dürfen nur bei Elementen mit einem itemscope Attribut angegeben werden, dessen itemtype Attribut ein Vokabular angibt, das keine globalen Kennungen für Elemente unterstützt, wie es durch die Spezifikation dieses Vokabulars definiert ist.
- Die genaue Bedeutung einer globalen Kennung wird durch die Spezifikation des Vokabulars bestimmt. Es obliegt solchen Spezifikationen zu definieren, ob mehrere Elemente derselben globalen Kennung (ob auf derselben Seite oder auf verschiedenen Seiten) existieren dürfen und welche Verarbeitungsregeln für dieses Vokabular mit Bezug auf die Behandlung des Falls mehrerer Elemente mit derselben ID gelten.

## Beispiele

### Darstellung von strukturierten Daten für ein Produkt

Dieses Beispiel verwendet Mikrodateneigenschaften, um strukturierte Daten für ein Produkt darzustellen, wie folgt:

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="7">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Product (https://schema.org/Product)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Executive Anvil</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>
        https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        Eleganter als der klassische Amboss von ACME, ist der Executive Anvil perfekt für
        Geschäftsreisende, die etwas suchen, das aus der Höhe fallen kann.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>mpn</td>
      <td>925872</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>brand [Thing]</td>
      <td></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>ACME</td>
    </tr>
    <tr>
      <td rowspan="9">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td>aggregateRating[AggregateRating]</td>
      <td></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.4</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>89</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>offers [Offer]</td>
      <td>https://schema.org/Offer</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>119.99</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceValidUntil</td>
      <td>2020-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>itemCondition</td>
      <td>https://schema.org/UsedCondition</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>availability</td>
      <td>https://schema.org/InStock</td>
    </tr>
    <tr>
      <td rowspan="2">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td>seller [Organization]</td>
      <td>https://schema.org/Organization</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Executive Objects</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ein praktisches Werkzeug zum Extrahieren von Mikrodatensätzen aus HTML ist das [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data) von Google. Probieren Sie es mit dem hier gezeigten HTML aus.

#### HTML

```html
<div itemscope itemtype="https://schema.org/Product">
  <span itemprop="brand">ACME<br /></span>
  <span itemprop="name">Executive Anvil<br /></span>
  <img
    itemprop="image"
    src="https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png"
    width="50"
    height="50"
    alt="Executive Anvil logo" /><br />

  <span itemprop="description">
    Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the
    business traveler looking for something to drop from a height.
    <br />
  </span>

  Product #: <span itemprop="mpn">925872<br /></span>
  <span
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    Rating: <span itemprop="ratingValue">4.4</span> stars, based on
    <span itemprop="reviewCount">89 </span> reviews
  </span>
  <p>
    <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      Regular price: $179.99<br />
      <meta itemprop="priceCurrency" content="USD" />
      <span itemprop="price">Sale price: $119.99<br /></span>
      (Sale ends
      <time itemprop="priceValidUntil" datetime="2020-11-05">5 November!</time>)
      <br />
      Available from:
      <span
        itemprop="seller"
        itemscope
        itemtype="https://schema.org/Organization">
        <span itemprop="name">Executive Objects<br /></span>
      </span>
      Condition:
      <link
        itemprop="itemCondition"
        href="https://schema.org/UsedCondition" />Previously owned, in excellent
      condition<br />
      <link itemprop="availability" href="https://schema.org/InStock" />In
      stock! Order now!
    </span>
  </p>
</div>
```

#### Ergebnis

{{EmbedLiveSample('Representing structured data for a product', '', '400')}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Andere verschiedene globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Andere mit Mikrodata verwandte globale Attribute:

  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)

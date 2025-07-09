---
title: HTML itemtype global attribute
short-title: itemtype
slug: Web/HTML/Reference/Global_attributes/itemtype
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) **`itemtype`** gibt die URL des Vokabulars an, das zur Definition der `itemprop`'s (Elementeigenschaften) in der Datenstruktur verwendet wird.

[`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Bereich festzulegen, in dem das durch `itemtype` festgelegte Vokabular in der Datenstruktur aktiv sein wird.

Google und andere große Suchmaschinen unterstützen das [schema.org](https://schema.org/) Vokabular für strukturierte Daten. Dieses Vokabular definiert eine standardisierte Menge von Typnamen und Eigenschaftsnamen. Beispielsweise bezeichnet `MusicEvent` eine Konzertaufführung mit den Eigenschaften [`startDate`](https://schema.org/startDate) und [`location`](https://schema.org/location), die die wichtigsten Details des Konzerts angeben. In diesem Fall wäre [`MusicEvent`](https://schema.org/MusicEvent) die URL, die von `itemtype` verwendet wird, wobei `startDate` und `location` als `itemprop`'s fungieren, die [`MusicEvent`](https://schema.org/MusicEvent) definiert.

> [!NOTE]
> Mehr über `itemtype` Attribute finden Sie auf <https://schema.org/Thing>

- Das **itemtype** Attribut muss einen Wert haben, der eine ungeordnete Menge von einzigartigen, case-sensitiven Tokens ist. Jedes Token muss eine gültige und absolute URL sein und alle müssen dasselbe Vokabular verwenden. Der Wert des Attributs muss mindestens ein Token enthalten.
- Die Elementtypen müssen alle in anwendbaren Spezifikationen (wie [schema.org](https://schema.org/)) definiert sein und müssen alle dasselbe Vokabular verwenden.
- Das itemtype Attribut kann nur auf Elementen spezifiziert werden, die das itemscope Attribut spezifiziert haben.
- Das itemid Attribut kann nur auf Elementen spezifiziert werden, die sowohl ein itemscope Attribut als auch ein itemtype Attribut spezifiziert haben. Sie dürfen nur auf Elementen mit einem itemscope Attribut spezifiziert werden, deren itemtype Attribut ein Vokabular spezifiziert, das keine globalen Identifikatoren für Elemente unterstützt, wie in der Spezifikation dieses Vokabulars definiert.
- Die genaue Bedeutung eines globalen Identifikators wird durch die Spezifikation des Vokabulars bestimmt. Es bleibt solchen Spezifikationen überlassen zu definieren, ob mehrere Elemente mit demselben globalen Identifikator (ob auf derselben Seite oder auf verschiedenen Seiten) existieren dürfen und welche Verarbeitungsregeln für dieses Vokabular im Hinblick auf den Umgang mit Fällen mehrerer Elemente mit derselben ID gelten.

## Beispiele

### Darstellung strukturierter Daten für ein Produkt

Dieses Beispiel verwendet Microdata-Attribute, um strukturierte Daten für ein Produkt darzustellen, wie folgt:

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
        Schlanker als ACME's Classic Anvil, ist der Executive Anvil perfekt für
        den Geschäftsreisenden, der nach etwas sucht, das aus großer Höhe abgeworfen werden kann.
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
> Ein praktisches Tool zum Extrahieren von Microdata-Strukturen aus HTML ist Googles [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data). Probieren Sie es mit dem hier gezeigten HTML aus.

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
- Weitere globale Attribute im Zusammenhang mit Microdata:
  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)

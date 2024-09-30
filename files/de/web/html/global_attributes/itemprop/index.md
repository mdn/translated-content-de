---
title: itemprop
slug: Web/HTML/Global_attributes/itemprop
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar("Global_attributes")}}

Das **`itemprop`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, und ein `itemprop` besteht aus einem Name-Wert-Paar. Jedes Name-Wert-Paar wird als **Eigenschaft** bezeichnet, und eine Gruppe von einer oder mehreren Eigenschaften bildet ein **Item**. Eigenschaftswerte sind entweder eine Zeichenkette oder eine URL und können mit einer sehr breiten Palette von Elementen verknüpft werden, einschließlich {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}}, {{HTMLElement("track")}} und {{HTMLElement("video")}}.

## Beispiele

Das folgende Beispiel zeigt den Quelltext für eine Reihe von Elementen, die mit `itemprop`-Attributen versehen sind, gefolgt von einer Tabelle, die die resultierenden strukturierten Daten zeigt.

### HTML

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>
    Director:
    <span itemprop="director">James Cameron</span>
    (born August 16, 1954)
  </span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">
    Trailer
  </a>
</div>
```

### Strukturierte Daten

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="2"> </td>
      <th colspan="2"><strong>Item</strong></th>
    </tr>
    <tr>
      <th><strong>itemprop Name</strong></th>
      <th><strong>itemprop Wert</strong></th>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genre</td>
      <td>Science fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>trailer</td>
      <td>../movies/avatar-theatrical-trailer.html</td>
    </tr>
  </tbody>
</table>

## Eigenschaften

Eigenschaften haben Werte, die entweder eine Zeichenkette oder eine URL sind. Wenn ein Zeichenkettenwert eine URL ist, wird diese mit dem {{HTMLElement("a")}}-Element und dessen [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut, dem {{HTMLElement("img")}}-Element und dessen [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut oder anderen Elementen, die mit externen Ressourcen verknüpfen oder einbetten, ausgedrückt.

### Drei Eigenschaften mit Werten, die Zeichenketten sind

```html
<div itemscope>
  <p>My name is <span itemprop="name">Neil</span>.</p>
  <p>My band is called <span itemprop="band">Four Parts Water</span>.</p>
  <p>I am <span itemprop="nationality">British</span>.</p>
</div>
```

### Eine Eigenschaft, "image", deren Wert eine URL ist

```html
<div itemscope>
  <img itemprop="image" src="google-logo.png" alt="Google" />
</div>
```

Wenn ein Zeichenkettenwert nicht leicht lesbar und verständlich für eine Person ist (z.B. eine lange Zeichenfolge aus Zahlen und Buchstaben), kann dieser mit dem Wertattribut des data-Elements angezeigt werden, wobei die für Menschen leichter verständliche Version im Inhalt des Elements angegeben wird (dies ist nicht Teil der strukturierten Daten – siehe Beispiel unten).

### Ein Item mit einer Eigenschaft, deren Wert eine Produkt-ID ist

Die ID ist nicht menschenfreundlich, daher wird stattdessen der Produktname verwendet.

```html
<h1 itemscope>
  <data itemprop="product-id" value="9678AOU879">The Instigator 2000</data>
</h1>
```

Für numerische Daten können das meter-Element und dessen Wertattribut verwendet werden.

### Ein meter-Element

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="name">Panasonic White 60L Refrigerator</span>
  <img src="panasonic-fridge-60l-white.jpg" alt="" />
  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="http://schema.org/AggregateRating">
    <meter itemprop="ratingValue" min="0" value="3.5" max="5">
      Rated 3.5/5
    </meter>
    (based on <span itemprop="reviewCount">11</span>
    customer reviews)
  </div>
</div>
```

Ähnlich können für datums- und zeitbezogene Daten das time-Element und dessen datetime-Attribut verwendet werden.

### Ein Item mit einer Eigenschaft, "birthday", deren Wert ein Datum ist

```html
<div itemscope>
  I was born on
  <time itemprop="birthday" datetime="1984-05-10">May 10th 1984</time>.
</div>
```

Eigenschaften können auch Gruppen von Name-Wert-Paaren sein, indem das itemscope-Attribut auf das Element gesetzt wird, das die Eigenschaft deklariert. Jeder Wert ist entweder eine Zeichenkette oder eine Gruppe von Name-Wert-Paaren (d.h. ein Item).

### Ein äußeres Item, das eine Person darstellt, und ein inneres, das eine Band darstellt

```html
<div itemscope>
  <p>Name: <span itemprop="name">Amanda</span></p>
  <p>
    Band:
    <span itemprop="band" itemscope>
      <span itemprop="name">Jazz Band</span>
      (<span itemprop="size">12</span> players)
    </span>
  </p>
</div>
```

Das äußere Item oben hat zwei Eigenschaften, "name" und "band". Der "name" ist "Amanda", und die "band" ist ein eigenes Item mit zwei Eigenschaften, "name" und "size". Der "name" der Band ist "Jazz Band", und die "size" ist "12". Das äußere Item in diesem Beispiel ist ein Mikrodata-Top-Level-Item. Items, die nicht Teil anderer sind, werden als Mikrodata-Top-Level-Items bezeichnet.

### Alle Eigenschaften von ihren Items getrennt

Dieses Beispiel ist das gleiche wie das vorherige, aber alle Eigenschaften sind von ihren Items getrennt.

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

Dies ergibt das gleiche Ergebnis wie das vorherige Beispiel. Das erste Item hat zwei Eigenschaften, "name", festgelegt auf "Amanda", und "band", festgelegt auf ein weiteres Item. Dieses zweite Item hat zwei weitere Eigenschaften, "name", festgelegt auf "Jazz Band", und "size", festgelegt auf "12".

Ein Item kann mehrere Eigenschaften mit demselben Namen und unterschiedlichen Werten haben.

### Eiscreme mit zwei Geschmacksrichtungen

```html
<div itemscope>
  <p>Flavors in my favorite ice cream:</p>
  <ul>
    <li itemprop="flavor">Lemon sorbet</li>
    <li itemprop="flavor">Apricot sorbet</li>
  </ul>
</div>
```

Dies ergibt ein Item mit zwei Eigenschaften, beide mit dem Namen "flavor" und den Werten "Lemon sorbet" und "Apricot sorbet".

Ein Element, das eine Eigenschaft einführt, kann auch mehrere Eigenschaften gleichzeitig einführen, um Duplikate zu vermeiden, wenn einige der Eigenschaften denselben Wert haben.

### Ein Item mit zwei Eigenschaften, "favorite-color" und "favorite-fruit", beide auf den Wert "orange" gesetzt

```html
<div itemscope>
  <span
    itemprop="favorite-color
    favorite-fruit"
    >orange
  </span>
</div>
```

> [!NOTE]
> Es gibt keine Beziehung zwischen den Mikrodaten und dem Inhalt des Dokuments, in dem die Mikrodaten ausgezeichnet sind.

### Gleiche strukturierte Daten, auf zwei verschiedene Arten ausgezeichnet

Es gibt keinen semantischen Unterschied zwischen den folgenden beiden Beispielen

```html
<figure>
  <img src="castle.jpeg" />
  <figcaption>
    <span itemscope><span itemprop="name">The Castle</span></span> (1986)
  </figcaption>
</figure>
```

```html
<span itemscope><meta itemprop="name" content="The Castle" /></span>
<figure>
  <img src="castle.jpeg" />
  <figcaption>The Castle (1986)</figcaption>
</figure>
```

Beide haben ein Bild mit einer Beschriftung, und beide, vollständig unabhängig vom Bild, haben ein Item mit einem Name-Wert-Paar mit dem Namen "name" und dem Wert "The Castle". Der einzige Unterschied ist, dass, wenn der Benutzer die figcaption aus dem Dokument zieht, das Item in die Drag-and-Drop-Daten eingeschlossen wird. Das mit dem Item verknüpfte Bild wird nicht eingeschlossen.

## Namen und Werte

Eine Eigenschaft ist eine ungeordnete Menge einzigartiger Tokens, die case-sensitiv sind und die Name-Wert-Paare darstellen. Der Eigenschaftswert muss mindestens ein Token haben. Im untenstehenden Beispiel ist jede Datenzelle ein Token.

### Namensbeispiele

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col"> </th>
      <th colspan="2" scope="col">Item</th>
    </tr>
    <tr>
      <th scope="col">itemprop <strong>Name</strong></th>
      <th scope="col">itemprop <strong>Wert</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>itemprop</th>
      <td>country</td>
      <td>Ireland</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>Option</td>
      <td>2</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
      <td>Ring of Kerry</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>img</td>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>website</td>
      <td>flickr</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>(token)</td>
      <td>(token)</td>
    </tr>
  </tbody>
</table>

**Tokens** sind entweder Zeichenketten oder URLs. Ein Item wird als **typisiertes Item** bezeichnet, wenn es eine URL ist. Andernfalls ist es eine Zeichenkette. Zeichenketten dürfen keinen Punkt oder Doppelpunkt enthalten (siehe unten).

1. Wenn das Item ein typisiertes Item ist, muss es entweder sein:

   1. Ein definierter Eigenschaftsname, oder
   2. Eine gültige URL, die auf die Vokabular-Definition verweist, oder
   3. Eine gültige URL, die als proprietärer Item-Eigenschaftsname verwendet wird (d.h. einer, der nicht in einer öffentlichen Spezifikation definiert ist), oder

2. Wenn das Item kein typisiertes Item ist, muss es sein:

   1. Eine Zeichenkette, die keine `.` (U+002E FULL STOP)-Zeichen und keine `:`-Zeichen (U+003A COLON) enthält und als proprietärer Item-Eigenschaftsname verwendet wird (wiederum einer, der nicht in einer öffentlichen Spezifikation definiert ist).

> [!NOTE]
> Die obigen Regeln verbieten ":"-Zeichen in nicht-URL-Werten, weil sonst diese nicht von URLs unterschieden werden könnten. Werte mit "."-Zeichen sind für zukünftige Erweiterungen reserviert. Leerzeichenzeichen sind verboten, weil sonst die Werte als mehrere Tokens geparst würden.

## Werte

Der Eigenschaftswert eines Name-Wert-Paares ist wie folgt angegeben:

- Hat das Element ein `itemscope`-Attribut

  - Der Wert ist das **Item**, das durch das Element erstellt wird

- Ist das Element ein `meta`-Element

  - Der Wert ist der Wert des `content`-Attributs des Elements

- Ist das Element ein `audio`, `embed`, `iframe`, `img`, `source`, `track` oder `video`-Element

  - Der Wert ist der resultierende URL-String, der durch das Parsen des Wertes des `src`-Attributs des Elements relativ zum Knotendokument (Teil der [Mikrodaten-DOM-API](/de/docs/Web/HTML/Microdata)) des Elements entsteht, wenn das Attribut gesetzt wird

- Ist das Element ein `a`, `area` oder `link`-Element

  - Der Wert ist der resultierende URL-String, der durch das Parsen des Wertes des `href`-Attributs des Elements relativ zum Knotendokument des Elements entsteht, wenn das Attribut gesetzt wird

- Ist das Element ein `object`-Element

  - Der Wert ist der resultierende URL-String, der durch das Parsen des Wertes des `data`-Attributs des Elements relativ zum Knotendokument des Elements entsteht, wenn das Attribut gesetzt wird

- Ist das Element ein `data`-Element

  - Der Wert ist der Wert des `value`-Attributs des Elements

- Ist das Element ein `meter`-Element

  - Der Wert ist der Wert des `value`-Attributs des Elements

- Ist das Element ein `time`-Element

  - Der Wert ist der `datetime`-Wert des Elements

Andernfalls

- Der Wert ist der _textContent_ des Elements.

Wenn der Wert einer Eigenschaft eine `URL` ist, muss die Eigenschaft mit einem URL-Eigenschaftselement spezifiziert werden. Die URL-Eigenschaftselemente sind die `a`, `area`, `audio`, `embed`, `iframe`, `img`, `link`, `object`, `source`, `track`, und `video`-Elemente.

### Namensreihenfolge

Namen sind relativ zueinander ungeordnet, aber wenn ein bestimmter Name mehrere Werte hat, haben sie eine relative Reihenfolge.

Im folgenden Beispiel hat die Eigenschaft "a" die Werte "1" und "2", _in dieser Reihenfolge_, aber ob die Eigenschaft "a" vor der Eigenschaft "b" kommt oder nicht, ist nicht wichtig.

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
  <p itemprop="b">test</p>
</div>
```

Hier sind mehrere äquivalente Beispiele:

```html
<div itemscope>
  <p itemprop="b">test</p>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
</div>
```

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="b">test</p>
  <p itemprop="a">2</p>
</div>
```

```html
<div id="x">
  <p itemprop="a">1</p>
</div>
<div itemscope itemref="x">
  <p itemprop="b">test</p>
  <p itemprop="a">2</p>
</div>
```

### Darstellung strukturierter Daten für ein Buch

Dieses Beispiel verwendet Mikrodata-Attribute, um die folgenden strukturierten Daten darzustellen:

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

- [Andere verschiedene globale Attribute](/de/docs/Web/HTML/Global_attributes)
- Andere mit Mikrodaten zusammenhängende globale Attribute:

  - [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)

---
title: HTML itemprop globales Attribut
short-title: itemprop
slug: Web/HTML/Reference/Global_attributes/itemprop
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar("Global_attributes")}}

Das **`itemprop`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um einem Element Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut angegeben haben, und ein `itemprop` besteht aus einem Name-Wert-Paar. Jedes Name-Wert-Paar wird als **Eigenschaft** bezeichnet, und eine Gruppe von einer oder mehreren Eigenschaften bildet ein **Element**. Eigenschaftswerte sind entweder ein String oder eine URL und können mit einer Vielzahl von Elementen verknüpft werden, einschließlich {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}}, {{HTMLElement("track")}} und {{HTMLElement("video")}}.

## Beispiele

Das folgende Beispiel zeigt den Quellcode für eine Reihe von Elementen, die mit `itemprop`-Attributen versehen sind, gefolgt von einer Tabelle, die die resultierenden strukturierten Daten darstellt.

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
      <th colspan="2"><strong>Element</strong></th>
    </tr>
    <tr>
      <th><strong>itemprop-Name</strong></th>
      <th><strong>itemprop-Wert</strong></th>
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

Eigenschaften haben Werte, die entweder ein String oder eine URL sind. Wenn ein String-Wert eine URL ist, wird er mithilfe des {{HTMLElement("a")}}-Elements und seines [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributs, des {{HTMLElement("img")}}-Elements und seines [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributs oder anderer Elemente, die auf externe Ressourcen verweisen oder diese einbetten, ausgedrückt.

### Drei Eigenschaften mit Werten, die Strings sind

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

Wenn ein String-Wert nicht leicht lesbar und verständlich für eine Person ist (z. B. eine lange Zeichenfolge aus Nummern und Buchstaben), kann er mit dem value-Attribut des data-Elements angezeigt werden, wobei die für Menschen besser verständliche Version im Inhalt des Elements angegeben wird (die nicht Teil der strukturierten Daten ist - siehe folgendes Beispiel).

### Ein Element mit einer Eigenschaft, deren Wert eine Produkt-ID ist

Die ID ist nicht menschenfreundlich, daher wird stattdessen der Name des Produkts verwendet.

```html
<h1 itemscope>
  <data itemprop="product-id" value="9678AOU879">The Instigator 2000</data>
</h1>
```

Für numerische Daten können das meter-Element und sein value-Attribut verwendet werden.

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

Ähnlich können für datums- und zeitbezogene Daten das time-Element und sein datetime-Attribut verwendet werden.

### Ein Element mit einer Eigenschaft, "birthday", deren Wert ein Datum ist

```html
<div itemscope>
  I was born on
  <time itemprop="birthday" datetime="1984-05-10">May 10th 1984</time>.
</div>
```

Eigenschaften können auch Gruppen von Name-Wert-Paaren sein, indem das itemscope-Attribut auf dem Element gesetzt wird, das die Eigenschaft deklariert. Jeder Wert ist entweder ein String oder eine Gruppe von Name-Wert-Paaren (d.h. ein Element).

### Ein äußeres Element, das eine Person repräsentiert, und ein inneres, das eine Band repräsentiert

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

Das äußere Element oben hat zwei Eigenschaften, "name" und "band". Der "name" ist "Amanda", und das "band" ist ein eigenes Element mit zwei Eigenschaften, "name" und "size". Der "name" der Band ist "Jazz Band", und die "size" ist "12". Das äußere Element in diesem Beispiel ist ein Mikrodatenelement auf oberster Ebene. Elemente, die nicht Teil anderer sind, werden Mikrodatenelemente auf oberster Ebene genannt.

### Alle Eigenschaften getrennt von ihren Elementen

Dieses Beispiel ist dasselbe wie das vorherige, aber alle Eigenschaften sind von ihren Elementen getrennt.

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

Dies ergibt das gleiche Ergebnis wie das vorherige Beispiel. Das erste Element hat zwei Eigenschaften, "name", gesetzt auf "Amanda", und "band", gesetzt auf ein anderes Element. Dieses zweite Element hat zwei weitere Eigenschaften, "name", gesetzt auf "Jazz Band", und "size", gesetzt auf "12".

Ein Element kann mehrere Eigenschaften mit demselben Namen und unterschiedlichen Werten haben.

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

Dies ergibt ein Element mit zwei Eigenschaften, beide mit dem Namen "flavor" und den Werten "Lemon sorbet" und "Apricot sorbet".

Ein Element, das eine Eigenschaft einführt, kann auch mehrere Eigenschaften auf einmal einführen, um Duplikate zu vermeiden, wenn einige der Eigenschaften denselben Wert haben.

### Ein Element mit zwei Eigenschaften, "favorite-color" und "favorite-fruit", beide mit dem Wert "orange" gesetzt

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
> Es besteht keine Beziehung zwischen den Mikrodatenelementen und dem Inhalt des Dokuments, in dem die Mikrodatenelemente markiert sind.

### Dieselben strukturierten Daten auf zwei verschiedene Weisen markiert

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

Beide haben eine Abbildung mit einer Beschreibung, und beide, völlig unabhängig von der Abbildung, haben ein Element mit einem Name-Wert-Paar mit dem Namen "name" und dem Wert "The Castle". Der einzige Unterschied besteht darin, dass, wenn der Benutzer die figcaption aus dem Dokument zieht, das Element in den Drag-and-Drop-Daten enthalten sein wird. Das mit dem Element verknüpfte Bild wird nicht einbezogen.

## Namen und Werte

Eine Eigenschaft ist eine unsortierte Menge von eindeutigen Token, die **groß-/kleinschreibungssensitiv** sind und die Name-Wert-Paare darstellen. Der Eigenschaftswert muss mindestens ein Token enthalten. Im folgenden Beispiel ist jede Datenzelle ein Token.

### Namensbeispiele

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col"> </th>
      <th colspan="2" scope="col">Element</th>
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
      <td>(Token)</td>
      <td>(Token)</td>
    </tr>
  </tbody>
</table>

**Token** sind entweder Strings oder URLs. Ein Element wird als **typisiertes Element** bezeichnet, wenn es sich um eine URL handelt. Andernfalls ist es ein String. Strings dürfen keinen Punkt oder Doppelpunkt enthalten (siehe unten).

1. Wenn das Element ein typisiertes Element ist, muss es entweder:

   1. Ein definierter Eigenschaftsname sein oder
   2. Eine gültige URL sein, die sich auf die Vokabulardefinition bezieht, oder
   3. Eine gültige URL sein, die als proprietärer Element-Eigenschaftsname verwendet wird (d.h. einer, der nicht in einer öffentlichen Spezifikation definiert ist), oder

2. Wenn das Element kein typisiertes Element ist, muss es folgendes sein:

   1. Ein String, der keine `.` (U+002E FULL STOP)-Zeichen und keine `:`-Zeichen (U+003A COLON) enthält und als proprietärer Element-Eigenschaftsname verwendet wird (wiederum einer, der nicht in einer öffentlichen Spezifikation definiert ist).

> [!NOTE]
> Die obigen Regeln schließen ":"-Zeichen in Nicht-URL-Werten aus, da sie sonst nicht von URLs unterschieden werden könnten. Werte mit "."-Zeichen sind für zukünftige Erweiterungen reserviert. Leerzeichen sind ausgeschlossen, da sonst die Werte als mehrere Token geparst würden.

## Wert

Der Eigenschaftswert eines Name-Wert-Paares ist wie angegeben für den ersten übereinstimmenden Fall in der folgenden Liste:

- Wenn das Element ein `itemscope`-Attribut hat

  - Der Wert ist das **Element**, das durch das Element erstellt wird

- Wenn das Element ein `meta`-Element ist

  - Der Wert ist der Wert des `content`-Attributes des Elements

- Wenn das Element ein `audio`, `embed`, `iframe`, `img`, `source`, `track` oder `video`-Element ist

  - Der Wert ist die resultierende URL-Zeichenkette, die sich aus der Analyse des Wertes des src-Attributs des Elements relativ zum Node-Dokument (Teil der [Microdata DOM API](/de/docs/Web/HTML/Guides/Microdata)) des Elements ergibt, wenn das Attribut gesetzt wird

- Wenn das Element ein `a`, `area` oder `link`-Element ist

  - Der Wert ist die resultierende URL-Zeichenkette, die sich aus der Analyse des Wertes des href-Attributs des Elements relativ zum Node-Dokument des Elements ergibt, wenn das Attribut gesetzt wird

- Wenn das Element ein `object`-Element ist

  - Der Wert ist die resultierende URL-Zeichenkette, die sich aus der Analyse des Wertes des data-Attributs des Elements relativ zum Node-Dokument des Elements ergibt, wenn das Attribut gesetzt wird

- Wenn das Element ein `data`-Element ist

  - Der Wert ist der Wert des value-Attributs des Elements

- Wenn das Element ein `meter`-Element ist

  - Der Wert ist der Wert des `value`-Attributs des Elements

- Wenn das Element ein `time`-Element ist

  - Der Wert ist der `datetime`-Wert des Elements

Andernfalls

- Der Wert ist der _textContent_ des Elements.

Wenn der Wert einer Eigenschaft eine `URL` ist, muss die Eigenschaft mithilfe eines URL-Eigenschaftselements angegeben werden. Die URL-Eigenschaftselemente sind die `a`, `area`, `audio`, `embed`, `iframe`, `img`, `link`, `object`, `source`, `track` und `video` Elemente.

### Reihenfolge der Namen

Namen sind im Vergleich zueinander ungeordnet, aber wenn ein bestimmter Name mehrere Werte hat, haben diese eine relative Reihenfolge.

Im folgenden Beispiel hat die Eigenschaft "a" die Werte "1" und "2", _in dieser Reihenfolge_, aber ob die Eigenschaft "a" vor der Eigenschaft "b" kommt oder nicht, ist nicht wichtig.

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
  <p itemprop="b">test</p>
</div>
```

Hier sind mehrere gleichwertige Beispiele:

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

### Repräsentation von strukturierten Daten für ein Buch

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

- [Andere verschiedene globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Andere mit Mikrodata verwandte globale Attribute:

  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

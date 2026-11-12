---
title: Globales HTML-Attribut `itemprop`
short-title: itemprop
slug: Web/HTML/Reference/Global_attributes/itemprop
l10n:
  sourceCommit: d16355b5ec024c990cff93dc36232c95d944bfce
---

Das **`itemprop`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um einem Item Eigenschaften hinzuzufügen. Für jedes HTML-Element kann ein `itemprop`-Attribut angegeben werden. Ein `itemprop` besteht aus einem Name-Wert-Paar. Jedes Name-Wert-Paar wird als **Eigenschaft** bezeichnet; eine Gruppe aus einer oder mehreren Eigenschaften bildet ein **Item**. Eigenschaftswerte sind entweder Zeichenfolgen oder URLs und können mit vielen verschiedenen Elementen verknüpft werden, darunter {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}}, {{HTMLElement("track")}} und {{HTMLElement("video")}}.

## Wert

Der Eigenschaftswert eines Name-Wert-Paares ergibt sich aus dem ersten zutreffenden Fall in der folgenden Liste:

- Wenn das Element ein `itemscope`-Attribut hat:
  - Der Wert ist das vom Element erzeugte **Item**.

- Wenn das Element ein `meta`-Element ist:
  - Der Wert ist der Wert des `content`-Attributs des Elements.

- Wenn das Element ein `audio`-, `embed`-, `iframe`-, `img`-, `source`-, `track`- oder `video`-Element ist:
  - Der Wert ist die URL-Zeichenfolge, die sich ergibt, wenn der Wert des src-Attributs des Elements relativ zum Node-Dokument des Elements (Teil der [Microdata DOM API](/de/docs/Web/HTML/Guides/Microdata)) zum Zeitpunkt des Setzens des Attributs geparst wird.

- Wenn das Element ein `a`-, `area`- oder `link`-Element ist:
  - Der Wert ist die URL-Zeichenfolge, die sich ergibt, wenn der Wert des href-Attributs des Elements relativ zum Node-Dokument des Elements zum Zeitpunkt des Setzens des Attributs geparst wird.

- Wenn das Element ein `object`-Element ist:
  - Der Wert ist die URL-Zeichenfolge, die sich ergibt, wenn der Wert des data-Attributs des Elements relativ zum Node-Dokument des Elements zum Zeitpunkt des Setzens des Attributs geparst wird.

- Wenn das Element ein `data`-Element ist:
  - Der Wert ist der Wert des value-Attributs des Elements.

- Wenn das Element ein `meter`-Element ist:
  - Der Wert ist der Wert des `value`-Attributs des Elements.

- Wenn das Element ein `time`-Element ist:
  - Der Wert ist der `datetime`-Wert des Elements.

Andernfalls:

- Der Wert ist der _textContent_ des Elements.

Wenn der Wert einer Eigenschaft eine `URL` ist, muss die Eigenschaft über ein URL-Eigenschaftselement angegeben werden. URL-Eigenschaftselemente sind die Elemente `a`, `area`, `audio`, `embed`, `iframe`, `img`, `link`, `object`, `source`, `track` und `video`.

### Reihenfolge der Namen

Die Namen haben untereinander keine festgelegte Reihenfolge. Wenn ein bestimmter Name jedoch mehrere Werte hat, ist deren Reihenfolge festgelegt.

Im folgenden Beispiel hat die Eigenschaft „a“ die Werte „1“ und „2“, _in dieser Reihenfolge_. Ob die Eigenschaft „a“ vor der Eigenschaft „b“ steht, ist dagegen unerheblich.

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

### Strukturierte Daten für ein Buch darstellen

Dieses Beispiel verwendet Microdata-Attribute, um die folgenden strukturierten Daten darzustellen:

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

## Beispiele

Das folgende Beispiel zeigt den Quelltext einer Gruppe von Elementen, die mit `itemprop`-Attributen ausgezeichnet sind. Darauf folgt eine Tabelle mit den resultierenden strukturierten Daten.

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

Eigenschaften haben Werte, die entweder Zeichenfolgen oder URLs sind. Wenn ein Zeichenfolgenwert eine URL ist, wird er durch das {{HTMLElement("a")}}-Element und dessen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut, das {{HTMLElement("img")}}-Element und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut oder andere Elemente ausgedrückt, die auf externe Ressourcen verlinken oder diese einbetten.

### Drei Eigenschaften mit Zeichenfolgenwerten

```html
<div itemscope>
  <p>My name is <span itemprop="name">Neil</span>.</p>
  <p>My band is called <span itemprop="band">Four Parts Water</span>.</p>
  <p>I am <span itemprop="nationality">British</span>.</p>
</div>
```

### Eine Eigenschaft „image“, deren Wert eine URL ist

```html
<div itemscope>
  <img itemprop="image" src="google-logo.png" alt="Google" />
</div>
```

Wenn ein Zeichenfolgenwert für Menschen nicht leicht lesbar und verständlich ist (z. B. eine lange Folge aus Zahlen und Buchstaben), kann er mithilfe des value-Attributs des data-Elements angegeben werden. Im Inhalt des Elements steht dann eine für Menschen leichter verständliche Version, die nicht Teil der strukturierten Daten ist (siehe folgendes Beispiel).

### Ein Item mit einer Eigenschaft, deren Wert eine Produkt-ID ist

Die ID ist nicht benutzerfreundlich. Deshalb wird stattdessen der Name des Produkts verwendet.

```html
<h1 itemscope>
  <data itemprop="product-id" value="9678AOU879">The Instigator 2000</data>
</h1>
```

Für numerische Daten können das meter-Element und dessen value-Attribut verwendet werden.

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

Entsprechend können für Datums- und Zeitangaben das time-Element und dessen datetime-Attribut verwendet werden.

### Ein Item mit einer Eigenschaft „birthday“, deren Wert ein Datum ist

```html
<div itemscope>
  I was born on
  <time itemprop="birthday" datetime="1984-05-10">May 10th 1984</time>.
</div>
```

Eigenschaften können auch Gruppen aus Name-Wert-Paaren sein. Dazu wird das itemscope-Attribut auf das Element gesetzt, das die Eigenschaft deklariert. Jeder Wert ist entweder eine Zeichenfolge oder eine Gruppe aus Name-Wert-Paaren (also ein Item).

### Ein äußeres Item, das eine Person darstellt, und ein inneres Item, das eine Band darstellt

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

Das äußere Item oben hat zwei Eigenschaften: „name“ und „band“. „name“ hat den Wert „Amanda“, und „band“ ist selbst ein Item mit den beiden Eigenschaften „name“ und „size“. Der „name“ der Band ist „Jazz Band“, und ihre „size“ ist „12“. Das äußere Item in diesem Beispiel ist ein Microdata-Item auf oberster Ebene. Items, die nicht Teil anderer Items sind, werden als Microdata-Items auf oberster Ebene bezeichnet.

### Alle Eigenschaften von ihren Items getrennt

Dieses Beispiel entspricht dem vorherigen, aber alle Eigenschaften sind von ihren Items getrennt.

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

Das ergibt dasselbe Ergebnis wie das vorherige Beispiel. Das erste Item hat zwei Eigenschaften: „name“ mit dem Wert „Amanda“ und „band“ mit einem weiteren Item als Wert. Dieses zweite Item hat wiederum zwei Eigenschaften: „name“ mit dem Wert „Jazz Band“ und „size“ mit dem Wert „12“.

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

Das ergibt ein Item mit zwei Eigenschaften, die beide „flavor“ heißen und die Werte „Lemon sorbet“ und „Apricot sorbet“ haben.

Ein Element, das eine Eigenschaft einführt, kann auch mehrere Eigenschaften gleichzeitig einführen. So lässt sich eine Wiederholung vermeiden, wenn einige Eigenschaften denselben Wert haben.

### Ein Item mit zwei Eigenschaften, „favorite-color“ und „favorite-fruit“, die beide den Wert „orange“ haben

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
> Zwischen den Microdata und dem Inhalt des Dokuments, in dem sie ausgezeichnet sind, besteht kein Zusammenhang.

### Dieselben strukturierten Daten auf zwei verschiedene Arten ausgezeichnet

Zwischen den folgenden beiden Beispielen besteht kein semantischer Unterschied.

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

Beide enthalten eine Abbildung mit einer Bildunterschrift und – völlig unabhängig von der Abbildung – ein Item mit einem Name-Wert-Paar, dessen Name „name“ und dessen Wert „The Castle“ ist. Der einzige Unterschied besteht darin, dass das Item in die Drag-and-Drop-Daten aufgenommen wird, wenn der Benutzer das figcaption aus dem Dokument zieht. Das mit dem Item verknüpfte Bild wird nicht aufgenommen.

## Namen und Werte

Eine Eigenschaft ist eine ungeordnete Menge eindeutiger Tokens, bei denen die Groß- und Kleinschreibung beachtet wird und die die Name-Wert-Paare darstellen. Der Eigenschaftswert muss mindestens ein Token haben. Im folgenden Beispiel ist jede Datenzelle ein Token.

### Beispiele für Namen

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col"> </th>
      <th colspan="2" scope="col">Item</th>
    </tr>
    <tr>
      <th scope="col">itemprop-<strong>Name</strong></th>
      <th scope="col">itemprop-<strong>Wert</strong></th>
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

**Tokens** sind entweder Zeichenfolgen oder URLs. Ein Item wird als **typisiertes Item** bezeichnet, wenn es eine URL ist. Andernfalls ist es eine Zeichenfolge. Zeichenfolgen dürfen weder einen Punkt noch einen Doppelpunkt enthalten (siehe unten).

1. Wenn das Item ein typisiertes Item ist, muss es eines der folgenden sein:
   1. Ein definierter Eigenschaftsname oder
   2. eine gültige URL, die auf die Definition des Vokabulars verweist, oder
   3. eine gültige URL, die als proprietärer Name einer Item-Eigenschaft verwendet wird (d.h. als Name, der nicht in einer öffentlichen Spezifikation definiert ist).

2. Wenn das Item kein typisiertes Item ist, muss es Folgendes sein:
   1. Eine Zeichenfolge, die weder `.`-Zeichen (U+002E FULL STOP) noch `:`-Zeichen (U+003A COLON) enthält und als proprietärer Name einer Item-Eigenschaft verwendet wird (also als Name, der nicht in einer öffentlichen Spezifikation definiert ist).

> [!NOTE]
> Die obigen Regeln verbieten „:“-Zeichen in Werten, die keine URLs sind, da sie sich sonst nicht von URLs unterscheiden ließen. Werte mit „.“-Zeichen sind für zukünftige Erweiterungen reserviert. Leerzeichen sind nicht zulässig, da die Werte sonst als mehrere Tokens geparst würden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Weitere globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Weitere globale Attribute im Zusammenhang mit Microdata:
  - [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)

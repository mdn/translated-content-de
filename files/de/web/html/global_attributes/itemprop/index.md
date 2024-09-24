---
title: itemprop
slug: Web/HTML/Global_attributes/itemprop
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`itemprop`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, und ein `itemprop` besteht aus einem Name-Wert-Paar. Jedes Name-Wert-Paar wird als **Eigenschaft** bezeichnet, und eine Gruppe von einer oder mehreren Eigenschaften bildet ein **Element**. Eigenschaftswerte sind entweder ein String oder eine URL und können mit einer sehr breiten Palette von Elementen verknüpft werden, einschließlich {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}}, {{HTMLElement("track")}}, und {{HTMLElement("video")}}.

## Beispiele

Das folgende Beispiel zeigt den Quelltext für eine Gruppe von Elementen, die mit `itemprop`-Attributen versehen sind, gefolgt von einer Tabelle, die die resultierenden strukturierten Daten zeigt.

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
      <th><strong>itemprop name</strong></th>
      <th><strong>itemprop value</strong></th>
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

Eigenschaften haben Werte, die entweder ein String oder eine URL sind. Wenn ein Stringwert eine URL ist, wird er mit dem {{HTMLElement("a")}}-Element und seinem [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut ausgedrückt, dem {{HTMLElement("img")}}-Element und seinem [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut oder anderen Elementen, die externe Ressourcen verknüpfen oder einbetten.

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

Wenn ein Stringwert nicht leicht lesbar und verständlich ist (z. B. eine lange Zahlen- und Buchstabenkette), kann er unter Verwendung des value-Attributs des data-Elements angezeigt werden, wobei die für Menschen leichter verständliche Version im Inhalt des Elements angegeben wird (die kein Teil der strukturierten Daten ist - siehe Beispiel unten).

### Ein Element mit einer Eigenschaft, deren Wert eine Produkt-ID ist

Die ID ist nicht menschenfreundlich, daher wird stattdessen der Produktname verwendet.

```html
<h1 itemscope>
  <data itemprop="product-id" value="9678AOU879">The Instigator 2000</data>
</h1>
```

Für numerische Daten kann das meter-Element und sein value-Attribut verwendet werden.

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

Eigenschaften können auch Gruppen von Name-Wert-Paaren sein, indem man das itemscope-Attribut auf das Element setzt, das die Eigenschaft deklariert. Jeder Wert ist entweder ein String oder eine Gruppe von Name-Wert-Paaren (d. h. ein Element).

### Ein äußeres Element, das eine Person darstellt, und ein inneres, das eine Band darstellt

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

Das oben stehende äußere Element hat zwei Eigenschaften, "name" und "band". Der "name" ist "Amanda", und die "band" ist ein eigenständiges Element, mit zwei Eigenschaften, "name" und "size". Der "name" der Band ist "Jazz Band", und die "size" ist "12". Das äußere Element in diesem Beispiel ist ein eigenständiges Mikrodaten-Element. Elemente, die nicht Teil von anderen sind, werden eigenständige Mikrodaten-Elemente genannt.

### Alle Eigenschaften getrennt von ihren Elementen

Dieses Beispiel ist das gleiche wie das vorherige, aber alle Eigenschaften sind von ihren Elementen getrennt.

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

Ein Element kann mehrere Eigenschaften mit dem gleichen Namen und unterschiedlichen Werten haben.

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

Ein Element, das eine Eigenschaft einführt, kann auch mehrere Eigenschaften gleichzeitig einführen, um Duplikate zu vermeiden, wenn einige der Eigenschaften den gleichen Wert haben.

### Ein Element mit zwei Eigenschaften, "favorite-color" und "favorite-fruit", beide auf den Wert "orange" gesetzt

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
> Es besteht keine Beziehung zwischen den Mikrodaten und dem Inhalt des Dokuments, in dem die Mikrodaten ausgezeichnet sind.

### Dieselben strukturierten Daten auf zwei verschiedene Arten ausgezeichnet

Es gibt keinen semantischen Unterschied zwischen den folgenden zwei Beispielen

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

Beide haben eine Darstellung mit einer Beschriftung, und beide, völlig unabhängig von der Darstellung, haben ein Element mit einem Name-Wert-Paar mit dem Namen "name" und dem Wert "The Castle". Der einzige Unterschied besteht darin, dass wenn der Benutzer die figcaption aus dem Dokument zieht, das Element in die Drag-and-Drop-Daten aufgenommen wird. Das Bild, das dem Element zugeordnet ist, wird nicht aufgenommen.

## Namen und Werte

Eine Eigenschaft ist eine ungeordnete Menge von eindeutigen Tokens, die zwischen Groß- und Kleinschreibung unterscheiden und die Name-Wert-Paare darstellen. Der Eigenschaftswert muss mindestens ein Token haben. Im folgenden Beispiel ist jede Datenzelle ein Token.

### Beispiele für Namen

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col"> </th>
      <th colspan="2" scope="col">Element</th>
    </tr>
    <tr>
      <th scope="col">itemprop <strong>name</strong></th>
      <th scope="col">itemprop <strong>value</strong></th>
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

**Tokens** sind entweder Strings oder URLs. Ein Element wird als **typisiertes Element** bezeichnet, wenn es eine URL ist. Andernfalls ist es ein String. Zeichenfolgen dürfen keinen Punkt oder Doppelpunkt enthalten (siehe unten).

1. Wenn das Element ein typisiertes Element ist, muss es entweder sein:

   1. Ein definierter Eigenschaftenname oder
   2. Eine gültige URL, die auf die Vokabular-Definition verweist, oder
   3. Eine gültige URL, die als proprietärer Eigenschaftenname des Elements verwendet wird (d. h. ein nicht in einer öffentlichen Spezifikation definierter), oder

2. Wenn das Element kein typisiertes Element ist, muss es sein:

   1. Ein String, der kein "`.`" (U+002E FULL STOP)-Zeichen und kein "`:`" (U+003A COLON)-Zeichen enthält und als proprietärer Eigenschaftenname des Elements verwendet wird (wiederum, ein nicht in einer öffentlichen Spezifikation definierter).

> [!NOTE]
> Die oben genannten Regeln verbieten ":" Zeichen in Nicht-URL-Werten, weil sie sonst nicht von URLs unterschieden werden könnten. Werte mit "."-Zeichen sind für zukünftige Erweiterungen reserviert. Leerzeichen sind untersagt, da die Werte sonst als mehrere Tokens geparst würden.

## Werte

Der Eigenschaftswert eines Name-Wert-Paares wird wie folgt für den ersten passenden Fall in der folgenden Liste angegeben:

- Wenn das Element ein `itemscope`-Attribut hat

  - Der Wert ist das **Element**, das von dem Element erstellt wurde

- Wenn das Element ein `meta`-Element ist

  - Der Wert ist der Wert des `content`-Attributs des Elements

- Wenn das Element ein `audio`, `embed`, `iframe`, `img`, `source`, `track` oder `video`-Element ist

  - Der Wert ist die resultierende URL-Zeichenkette, die aus dem Parsen des Werts des src-Attributs des Elements relativ zum Knotendokument (Teil der [Microdata DOM API](/de/docs/Web/HTML/Microdata)) des Elements zum Zeitpunkt der Attributsetzung resultiert

- Wenn das Element ein `a`, `area` oder `link`-Element ist

  - Der Wert ist die resultierende URL-Zeichenkette, die aus dem Parsen des Werts des href-Attributs des Elements relativ zum Knotendokument des Elements zum Zeitpunkt der Attributsetzung resultiert

- Wenn das Element ein `object`-Element ist

  - Der Wert ist die resultierende URL-Zeichenkette, die sich aus dem Parsen des Werts des Datenattributs des Elements relativ zum Knotendokument des Elements zum Zeitpunkt der Attributsetzung ergibt

- Wenn das Element ein `data`-Element ist

  - Der Wert ist der Wert seines value-Attributs

- Wenn das Element ein `meter`-Element ist

  - Der Wert ist der Wert seines `value`-Attributs

- Wenn das Element ein `time`-Element ist

  - Der Wert ist sein `datetime`-Wert

Andernfalls

- Der Wert ist der _textContent_ des Elements.

Wenn ein Eigenschaftswert eine `URL` ist, muss die Eigenschaft durch ein URL-Eigenschaftselement spezifiziert werden. Die URL-Eigenschaftselemente sind die `a`, `area`, `audio`, `embed`, `iframe`, `img`, `link`, `object`, `source`, `track` und `video`-Elemente.

### Reihenfolge der Namen

Namen sind zueinander ungeordnet, aber wenn ein bestimmter Name mehrere Werte hat, haben diese eine relative Ordnung.

Im folgenden Beispiel hat die "a"-Eigenschaft die Werte "1" und "2", _in dieser Reihenfolge_, aber ob die "a"-Eigenschaft vor oder nach der "b"-Eigenschaft kommt, ist nicht wichtig.

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

### Darstellung strukturierter Daten für ein Buch

Dieses Beispiel verwendet Mikrodatenattribute zur Darstellung der folgenden strukturierten Daten:

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

#### Resultat

{{EmbedLiveSample('Representing structured data for a book')}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Andere globale Attribute](/de/docs/Web/HTML/Global_attributes)
- Andere mikrodatenbezogene globale Attribute:

  - [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)

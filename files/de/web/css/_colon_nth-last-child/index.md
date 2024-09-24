---
title: ":nth-last-child()"
slug: Web/CSS/:nth-last-child
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:nth-last-child()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf ihrer Position innerhalb einer Gruppe von Geschwistern aus, wobei vom Ende gezählt wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-last-child.html", "tabbed-shorter")}}

## Syntax

Die `nth-last-child`-Pseudoklasse wird mit einem einzigen Argument angegeben, das das Muster zur Übereinstimmung von Elementen darstellt, wobei vom Ende gezählt wird.

```css-nolint
:nth-last-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### Schlüsselwortwerte

- `odd`
  - : Repräsentiert Elemente, deren numerische Position in einer Reihe von Geschwistern ungerade ist: 1, 3, 5, usw., wobei vom Ende gezählt wird.
- `even`
  - : Repräsentiert Elemente, deren numerische Position in einer Reihe von Geschwistern gerade ist: 2, 4, 6, usw., wobei vom Ende gezählt wird.

### Funktionale Notation

- `<An+B>`

  - : Repräsentiert Elemente, deren numerische Position in einer Reihe von Geschwistern dem Muster `An+B` entspricht, für jeden positiven ganzzahligen oder Nullwert von `n`, wobei:

    - `A` eine ganzzahlige Schrittweite ist,
    - `B` ein ganzzahliger Offset ist,
    - `n` alle nicht-negativen ganzen Zahlen umfasst, beginnend bei 0.

    Dies kann als das `An+B`-te Element einer Liste gelesen werden. Der Index des ersten Elements, vom Ende gezählt, ist `1`. `A` und `B` müssen beide {{cssxref("&lt;integer&gt;")}} Werte haben.

### Die Syntax `of <selector>`

Durch Übergabe eines Selektor-Arguments können wir das **n-te letzte** Element auswählen, das diesem Selektor entspricht. Zum Beispiel entspricht der folgende Selektor den letzten drei _wichtigen_ Listenelementen, die mit `class="important"` zugewiesen sind.

```css
:nth-last-child(-n + 3 of li.important) {
}
```

> [!NOTE]
> Dies unterscheidet sich davon, den Selektor außerhalb der Funktion zu platzieren, wie hier:

```css
li.important:nth-last-child(-n + 3);
```

Dieser Selektor wendet einen Stil auf Listenelemente an, wenn diese auch unter den letzten drei Kindern sind.

## Beispiele

### Beispielselektoren

- `tr:nth-last-child(odd)` oder `tr:nth-last-child(2n+1)`
  - : Repräsentiert die ungeraden Zeilen einer HTML-Tabelle: 1, 3, 5, usw., wobei vom Ende gezählt wird.
- `tr:nth-last-child(even)` oder `tr:nth-last-child(2n)`
  - : Repräsentiert die geraden Zeilen einer HTML-Tabelle: 2, 4, 6, usw., wobei vom Ende gezählt wird.
- `:nth-last-child(7)`
  - : Repräsentiert das siebte Element, wobei vom Ende gezählt wird.
- `:nth-last-child(5n)`
  - : Repräsentiert Elemente 5, 10, 15, usw., wobei vom Ende gezählt wird.
- `:nth-last-child(3n+4)`
  - : Repräsentiert Elemente 4, 7, 10, 13, usw., wobei vom Ende gezählt wird.
- `:nth-last-child(-n+3)`
  - : Repräsentiert die letzten drei Elemente innerhalb einer Gruppe von Geschwistern.
- `p:nth-last-child(n)` oder `p:nth-last-child(n+1)`
  - : Repräsentiert jedes `<p>`-Element innerhalb einer Gruppe von Geschwistern. Dies entspricht einem einfachen `p`-Selektor. (Da `n` bei null beginnt, während das letzte Element bei eins beginnt, werden sowohl `n` als auch `n+1` die gleichen Elemente auswählen.)
- `p:nth-last-child(1)` oder `p:nth-last-child(0n+1)`
  - : Repräsentiert jedes `<p>`, das das erste Element innerhalb einer Gruppe von Geschwistern ist, vom Ende gezählt. Dies entspricht dem {{cssxref(":last-child")}}-Selektor.

### Tabellenbeispiel

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Erste Zeile</td>
    </tr>
    <tr>
      <td>Zweite Zeile</td>
    </tr>
    <tr>
      <td>Dritte Zeile</td>
    </tr>
    <tr>
      <td>Vierte Zeile</td>
    </tr>
    <tr>
      <td>Fünfte Zeile</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid blue;
}

/* Wählt die letzten drei Elemente aus */
tr:nth-last-child(-n + 3) {
  background-color: pink;
}

/* Wählt jedes Element beginnend beim vorletzten Element aus */
tr:nth-last-child(n + 2) {
  color: blue;
}

/* Wählt nur das vorletzte Element aus */
tr:nth-last-child(2) {
  font-weight: 600;
}
```

#### Ergebnis

{{EmbedLiveSample('Table_example', 300, 150)}}

### Mengenabfrage

Eine _Mengenabfrage_ gestaltet Elemente, je nachdem, wie viele es davon gibt. In diesem Beispiel werden Listenelemente rot, wenn es mindestens drei von ihnen in einer gegebenen Liste gibt. Dies wird erreicht, indem die Fähigkeiten der `nth-last-child`-Pseudoklasse und des [nachfolgenden Geschwisterkombinators](/de/docs/Web/CSS/Subsequent-sibling_combinator) kombiniert werden.

#### HTML

```html
<h4>Eine Liste von vier Elementen (gestaltet):</h4>
<ol>
  <li>Eins</li>
  <li>Zwei</li>
  <li>Drei</li>
  <li>Vier</li>
</ol>

<h4>Eine Liste von zwei Elementen (ungestaltet):</h4>
<ol>
  <li>Eins</li>
  <li>Zwei</li>
</ol>
```

#### CSS

```css
/* Wenn es mindestens drei Listenelemente gibt,
   gestalte sie alle */
li:nth-last-child(n + 3),
li:nth-last-child(3) ~ li {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Quantity_query', '100%', 270)}}

### `of <selector>` Syntax-Beispiel

In diesem Beispiel gibt es eine unsortierte Liste von Namen. Einige Elemente haben eine `noted` Klasse angewandt und werden dann mit einem dicken unteren Rand hervorgehoben.

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

In dem folgenden CSS zielen wir auf die **ungeraden** Listenelemente ab, die mit `class="noted"` gekennzeichnet sind.

```css
li:nth-last-child(odd of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Ergebnis

Elemente mit `class="noted"` haben einen dicken unteren Rand und die Elemente 1, 7, 14, und 20 haben einen soliden Hintergrund, da sie die _ungeraden_ Listenelemente mit `class="noted"` sind.

{{EmbedLiveSample('of_selector_syntax_example', 550, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":nth-child")}}
- {{Cssxref(":nth-last-of-type")}}
- [Mengenabfragen für CSS](https://alistapart.com/article/quantity-queries-for-css/)

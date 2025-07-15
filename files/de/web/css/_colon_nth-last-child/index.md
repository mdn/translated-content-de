---
title: :nth-last-child()
slug: Web/CSS/:nth-last-child
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:nth-last-child()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf ihrer Position in einer Gruppe von Geschwistern aus, wobei vom Ende gezählt wird.

{{InteractiveExample("CSS Demo: :nth-last-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:nth-last-child(-n + 3) {
  border: 2px solid orange;
  margin-top: 1px;
}

li:nth-last-child(even) {
  background-color: lightyellow;
}
```

```html interactive-example
<p>Eight deadliest wildfires:</p>
<ol reversed>
  <li>Matheson Fire</li>
  <li>Miramichi Fire</li>
  <li>1997 Indonesian fires</li>
  <li>Thumb Fire</li>
  <li>Great Hinckley Fire</li>
  <li>Cloquet Fire</li>
  <li>Kursha-2 Fire</li>
  <li>Peshtigo Fire</li>
</ol>
```

## Syntax

```css-nolint
:nth-last-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### Parameter

Die Pseudoklasse `:nth-last-child()` wird mit einem einzelnen Argument angegeben, das das Muster für die Auswahl von Elementen vom Ende her darstellt.

#### Schlüsselwortwerte

- `odd`
  - : Repräsentiert Elemente, deren numerische Position in einer Geschwisterreihe ungerade ist: 1, 3, 5, usw., vom Ende gezählt.
- `even`
  - : Repräsentiert Elemente, deren numerische Position in einer Geschwisterreihe gerade ist: 2, 4, 6, usw., vom Ende gezählt.

#### Funktionale Notation

- `<An+B>`
  - : Repräsentiert Elemente, deren numerische Position in einer Geschwisterreihe dem Muster `An+B` entspricht, für jeden positiven ganzzahligen oder nullwertigen `n`, wobei:
    - `A` eine ganzzahlige Schrittweite ist,
    - `B` ein ganzzahliger Versatz ist,
    - `n` alle nichtnegativen ganzen Zahlen umfasst, beginnend bei 0.

    Es kann als das `An+B`-te Element einer Liste gelesen werden. Der Index des ersten Elements, vom Ende gezählt, ist `1`. Sowohl `A` als auch `B` müssen {{cssxref("&lt;integer&gt;")}} Werte haben.

#### Die `of <selector>` Syntax

Indem ein Selektor-Argument übergeben wird, können wir das **nth-last** Element auswählen, das diesem Selektor entspricht. Zum Beispiel wählt der folgende Selektor die letzten drei _wichtigen_ Listenelemente aus, die mit `class="important"` versehen sind.

```css
:nth-last-child(-n + 3 of li.important) {
}
```

> [!NOTE]
> Dies unterscheidet sich davon, den Selektor außerhalb der Funktion zu bewegen, wie:

```css
li.important:nth-last-child(-n + 3) {
}
```

Dieser Selektor wendet einen Stil auf Listenelemente an, wenn sie auch innerhalb der letzten drei Kinder sind.

## Beispiele

### Beispielselektoren

- `tr:nth-last-child(odd)` oder `tr:nth-last-child(2n+1)`
  - : Repräsentiert die ungeraden Zeilen einer HTML-Tabelle: 1, 3, 5, usw., vom Ende gezählt.
- `tr:nth-last-child(even)` oder `tr:nth-last-child(2n)`
  - : Repräsentiert die geraden Zeilen einer HTML-Tabelle: 2, 4, 6, usw., vom Ende gezählt.
- `:nth-last-child(7)`
  - : Repräsentiert das siebte Element, vom Ende gezählt.
- `:nth-last-child(5n)`
  - : Repräsentiert Elemente 5, 10, 15, usw., vom Ende gezählt.
- `:nth-last-child(3n+4)`
  - : Repräsentiert Elemente 4, 7, 10, 13, usw., vom Ende gezählt.
- `:nth-last-child(-n+3)`
  - : Repräsentiert die letzten drei Elemente in einer Gruppe von Geschwistern.
- `p:nth-last-child(n)` oder `p:nth-last-child(n+1)`
  - : Repräsentiert jedes `<p>`-Element in einer Gruppe von Geschwistern. Dies ist dasselbe wie ein einfacher `p`-Selektor. (Da `n` bei null beginnt, während das letzte Element bei eins beginnt, wählen `n` und `n+1` dieselben Elemente.)
- `p:nth-last-child(1)` oder `p:nth-last-child(0n+1)`
  - : Repräsentiert jedes `<p>`, das das erste Element in einer Gruppe von Geschwistern ist, vom Ende gezählt. Dies ist dasselbe wie der {{cssxref(":last-child")}} Selektor.

### Tabellenbeispiel

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>First line</td>
    </tr>
    <tr>
      <td>Second line</td>
    </tr>
    <tr>
      <td>Third line</td>
    </tr>
    <tr>
      <td>Fourth line</td>
    </tr>
    <tr>
      <td>Fifth line</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid blue;
}

/* Selects the last three elements */
tr:nth-last-child(-n + 3) {
  background-color: pink;
}

/* Selects every element starting from the second to last item */
tr:nth-last-child(n + 2) {
  color: blue;
}

/* Select only the last second element */
tr:nth-last-child(2) {
  font-weight: 600;
}
```

#### Ergebnis

{{EmbedLiveSample('Table_example', 300, 150)}}

### Mengenabfrage

Eine _Mengenabfrage_ gestaltet Elemente abhängig davon, wie viele es davon gibt. In diesem Beispiel werden Listenelemente rot, wenn es mindestens drei davon in einer Liste gibt. Dies wird durch die Kombination der Fähigkeiten der `nth-last-child` Pseudoklasse und des [nachfolgenden Geschwisterkombinators](/de/docs/Web/CSS/Subsequent-sibling_combinator) erreicht.

#### HTML

```html
<h4>A list of four items (styled):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ol>

<h4>A list of two items (unstyled):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
</ol>
```

#### CSS

```css
/* If there are at least three list items,
   style them all */
li:nth-last-child(n + 3),
li:nth-last-child(3) ~ li {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Quantity_query', '100%', 270)}}

### `of <selector>` Syntax-Beispiel

In diesem Beispiel gibt es eine ungeordnete Liste von Namen. Einige Elemente haben eine `noted`-Klasse zugewiesen und werden dann mit einem dicken unteren Rand hervorgehoben.

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

Im folgenden CSS zielen wir auf die **ungeraden** Listenelemente ab, die mit `class="noted"` gekennzeichnet sind.

```css
li:nth-last-child(odd of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Ergebnis

Elemente mit `class="noted"` haben einen dicken unteren Rand und die Elemente 1, 7, 14 und 20 haben einen soliden Hintergrund, da sie die _ungeraden_ Listenelemente mit `class="noted"` sind.

{{EmbedLiveSample('of_selector_syntax_example', 550, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":nth-child")}}
- {{Cssxref(":nth-last-of-type")}}
- [Mengenabfragen für CSS](https://alistapart.com/article/quantity-queries-for-css/)

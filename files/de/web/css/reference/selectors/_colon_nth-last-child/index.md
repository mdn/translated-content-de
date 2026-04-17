---
title: "`:nth-last-child()` CSS-Pseudoklasse"
short-title: :nth-last-child()
slug: Web/CSS/Reference/Selectors/:nth-last-child
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:nth-last-child()`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ordnet Elemente basierend auf ihrer Position innerhalb einer Gruppe von Geschwistern zu, wobei von hinten gezählt wird.

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

Die `:nth-last-child()`-Pseudoklasse wird mit einem einzigen Argument angegeben, das das Muster für die Zuordnung von Elementen darstellt, wobei von hinten gezählt wird.

#### Schlüsselwortwerte

- `odd`
  - : Stellt Elemente dar, deren numerische Position in einer Folge von Geschwistern ungerade ist: 1, 3, 5, etc., wobei von hinten gezählt wird.
- `even`
  - : Stellt Elemente dar, deren numerische Position in einer Folge von Geschwistern gerade ist: 2, 4, 6, etc., wobei von hinten gezählt wird.

#### Funktionale Notation

- `<An+B>`
  - : Stellt Elemente dar, deren numerische Position in einer Folge von Geschwistern dem Muster `An+B` entspricht, für jeden positiven ganzzahligen oder Nullwert von `n`, wobei:
    - `A` eine ganzzahlige Schrittweite ist,
    - `B` ein ganzzahliger Versatz ist,
    - `n` alle nichtnegativen Ganzzahlen sind, beginnend bei 0.

    Es kann als das `An+B`-te Element einer Liste gelesen werden. Der Index des ersten Elements, vom Ende gezählt, ist `1`. `A` und `B` müssen beide {{cssxref("&lt;integer&gt;")}}-Werte haben.

#### Die `of <selector>` Syntax

Durch Übergeben eines Selektorarguments können wir das **n-te von hinten** Element auswählen, das diesem Selektor entspricht. Zum Beispiel stimmt der folgende Selektor mit den letzten drei _wichtigen_ Listenelementen überein, die mit `class="important"` versehen sind.

```css
:nth-last-child(-n + 3 of li.important) {
}
```

> [!NOTE]
> Dies unterscheidet sich davon, den Selektor außerhalb der Funktion zu platzieren, wie:

```css
li.important:nth-last-child(-n + 3) {
}
```

Dieser Selektor wendet einen Stil auf Listenelemente an, wenn sie auch innerhalb der letzten drei Kinder sind.

## Beispiele

### Beispielselektoren

- `tr:nth-last-child(odd)` oder `tr:nth-last-child(2n+1)`
  - : Repräsentiert die ungeraden Zeilen einer HTML-Tabelle: 1, 3, 5, etc., wobei von hinten gezählt wird.
- `tr:nth-last-child(even)` oder `tr:nth-last-child(2n)`
  - : Repräsentiert die geraden Zeilen einer HTML-Tabelle: 2, 4, 6, etc., wobei von hinten gezählt wird.
- `:nth-last-child(7)`
  - : Repräsentiert das siebte Element, vom Ende gezählt.
- `:nth-last-child(5n)`
  - : Repräsentiert die Elemente 5, 10, 15, etc., vom Ende gezählt.
- `:nth-last-child(3n+4)`
  - : Repräsentiert die Elemente 4, 7, 10, 13, etc., vom Ende gezählt.
- `:nth-last-child(-n+3)`
  - : Repräsentiert die letzten drei Elemente in einer Gruppe von Geschwistern.
- `p:nth-last-child(n)` oder `p:nth-last-child(n+1)`
  - : Repräsentiert jedes `<p>`-Element in einer Gruppe von Geschwistern. Dies ist dasselbe wie ein einfacher `p`-Selektor. (Da `n` bei null beginnt, während das letzte Element bei eins beginnt, wählen `n` und `n+1` dieselben Elemente aus.)
- `p:nth-last-child(1)` oder `p:nth-last-child(0n+1)`
  - : Repräsentiert jedes `<p>`, das das erste Element in einer Gruppe von Geschwistern ist, vom Ende gezählt. Dies ist dasselbe wie der {{cssxref(":last-child")}}-Selektor.

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

Eine _Mengenabfrage_ formatiert Elemente abhängig davon, wie viele es gibt. In diesem Beispiel werden Listenelemente rot, wenn es in einer gegebenen Liste mindestens drei von ihnen gibt. Dies wird erreicht, indem die Fähigkeiten der `nth-last-child` Pseudoklasse und des [nachfolgenden Geschwisterkombinators](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) kombiniert werden.

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

### `of <selector>`-Syntax-Beispiel

In diesem Beispiel gibt es eine ungeordnete Liste von Namen. Einige Elemente haben eine `noted`-Klasse und sind dann mit einer dicken unteren Umrandung hervorgehoben.

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

In dem folgenden CSS zielen wir auf die **ungeraden** Listenelemente, die mit `class="noted"` markiert sind.

```css
li:nth-last-child(odd of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Ergebnis

Elemente mit `class="noted"` haben eine dicke untere Umrandung und die Elemente 1, 7, 14 und 20 haben einen soliden Hintergrund, da sie die _ungeraden_ Listenelemente mit `class="noted"` sind.

{{EmbedLiveSample('of_selector_syntax_example', 550, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":nth-child")}}
- {{Cssxref(":nth-last-of-type")}}
- [Quantity Queries for CSS](https://alistapart.com/article/quantity-queries-for-css/)

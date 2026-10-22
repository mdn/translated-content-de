---
title: CSS-Verschachtelung verwenden
short-title: Verschachtelung verwenden
slug: Web/CSS/Guides/Nesting/Using
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

Das Modul [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) ermöglicht es Ihnen, Stylesheets übersichtlicher, modularer und wartungsfreundlicher zu schreiben. Da Sie Selektoren nicht ständig wiederholen müssen, kann sich auch die Dateigröße verringern.

CSS-Verschachtelung unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/): Sie wird vom Browser verarbeitet, statt zuvor von einem CSS-Präprozessor kompiliert zu werden. Außerdem ähnelt die [Spezifität des Verschachtelungsselektors `&`](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity) derjenigen der Funktion {{cssxref(':is',':is()')}}: Sie wird anhand der höchsten Spezifität in der zugehörigen Selektorliste berechnet.

Dieser Leitfaden zeigt verschiedene Möglichkeiten, Verschachtelung in CSS einzusetzen.

## Kindselektoren

Mit CSS-Verschachtelung können Sie Kindselektoren eines übergeordneten Elements erstellen und damit Kindelemente bestimmter übergeordneter Elemente auswählen. Das ist mit oder ohne den [Verschachtelungsselektor `&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) möglich.

In bestimmten Fällen ist der Verschachtelungsselektor `&` erforderlich oder hilfreich:

- Wenn Selektoren verbunden werden, etwa bei [zusammengesetzten Selektoren](#zusammengesetzte_selektoren) oder [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes).
- Für die Abwärtskompatibilität.
- Als visueller Hinweis für eine bessere Lesbarkeit: Der Verschachtelungsselektor `&` zeigt an, dass CSS-Verschachtelung verwendet wird.

```css
/* Without nesting selector */
.parent {
  /* parent styles */
  .child {
    /* child of parent styles */
  }
}

/* With nesting selector */
.parent {
  /* parent styles */
  & .child {
    /* child of parent styles */
  }
}

/* the browser will parse both of these as */
.parent {
  /* parent styles */
}
.parent .child {
  /* child of parent styles */
}
```

### Beispiele

In diesen Beispielen – einmal ohne und einmal mit dem Verschachtelungsselektor `&` – wird das `<input>` innerhalb des `<label>` anders gestaltet als ein `<input>`, das ein Geschwisterelement eines `<label>` ist.

#### Ohne Verschachtelungsselektor

##### HTML

```html-nolint
<form>
  <label for="name">Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* styles for input not in a label  */
  border: tomato 2px solid;
}
label {
  /* styles for label */
  font-family: system-ui;
  font-size: 1.25rem;

  input {
    /* styles for input in a label  */
    border: blue 2px dashed;
  }
}
```

##### Ergebnis

{{EmbedLiveSample('Without_nesting_selector','100%','120')}}

#### Mit Verschachtelungsselektor

```html-nolint hidden
<form>
  <label for="name">Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* styles for input not in a label  */
  border: tomato 2px solid;
}
label {
  /* styles for label */
  font-family: system-ui;
  font-size: 1.25rem;

  & input {
    /* styles for input in a label  */
    border: blue 2px dashed;
  }
}
```

##### Ergebnis

{{EmbedLiveSample('With_nesting_selector','100%','120')}}

## Kombinatoren

[CSS-Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) können ebenfalls mit oder ohne den Verschachtelungsselektor `&` verwendet werden.

### Beispiel

#### Verschachtelung des Geschwisterkombinators

In diesem Beispiel wird mithilfe von CSS-Verschachtelung der erste Absatz nach jedem `<h2>` mit dem [Kombinator für unmittelbar folgende Geschwisterelemente (`+`)](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) ausgewählt.

##### HTML

```html
<h2>Heading</h2>
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
```

##### CSS

```css
h2 {
  color: tomato;
  + p {
    color: white;
    background-color: black;
  }
}
/* this code can also be written with the & nesting selector */
/* 
h2 {
  color: tomato;
  & + p {
    color: white;
    background-color: black;
  }
}
*/
```

##### Ergebnis

{{EmbedLiveSample('Nesting_the_sibling_combinator','100%','135')}}

## Zusammengesetzte Selektoren

Bei [zusammengesetzten Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) in verschachteltem CSS **müssen** Sie den Verschachtelungsselektor `&` verwenden. Andernfalls fügt der Browser automatisch ein Leerzeichen zwischen den Selektoren ein.

Um ein Element mit `class="a b"` auszuwählen, ist der Verschachtelungsselektor `&` erforderlich. Andernfalls würde das eingefügte Leerzeichen den zusammengesetzten Selektor auflösen.

```css
.a {
  /* styles for element with class="a" */
  .b {
    /* styles for element with class="b" which is a descendant of class="a" */
  }
  &.b {
    /* styles for element with class="a b" */
  }
}

/* the browser parses this as */
.a {
  /* styles for element with class="a" */
}
.a .b {
  /* styles for element with class="b" which is a descendant of class="a" */
}
.a.b {
  /* styles for element with class="a b" */
}
```

### Beispiel

#### Verschachtelung und zusammengesetzte Selektoren

In diesem Beispiel wird der Verschachtelungsselektor `&` verwendet, um zusammengesetzte Selektoren für Elemente mit mehreren Klassen zu erstellen.

##### HTML

```html
<div class="notices">
  <div class="notice">
    <h2 class="notice-heading">Notice</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice warning">
    <h2 class="warning-heading">Warning</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice success">
    <h2 class="success-heading">Success</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
```

##### CSS

Die Styles für `.notices` erstellen mithilfe eines [Flexbox-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout) eine Spalte.

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

Im folgenden CSS-Code werden durch Verschachtelung zusammengesetzte Selektoren sowohl mit als auch ohne `&` erstellt. Der Selektor auf oberster Ebene legt die grundlegenden Styles für Elemente mit `class="notice"` fest. Anschließend werden mit dem Verschachtelungsselektor `&` zusammengesetzte Selektoren für Elemente mit `class="notice warning"` beziehungsweise `class="notice success"` erstellt. Der Selektor `.notice .notice-heading::before` zeigt außerdem, wie durch Verschachtelung ein Selektor erstellt wird, ohne `&` ausdrücklich zu verwenden.

```css
.notice {
  width: 90%;
  justify-content: center;
  border-radius: 1rem;
  border: black solid 2px;
  background-color: #ffc107;
  color: black;
  padding: 1rem;
  .notice-heading::before {
    /* equivalent to `.notice .notice-heading::before` */
    content: "ℹ︎ ";
  }
  &.warning {
    /* equivalent to `.notice.warning` */
    background-color: #d81b60;
    border-color: #d81b60;
    color: white;
    .warning-heading::before {
      /* equivalent to `.notice.warning .warning-heading::before` */
      content: "! ";
    }
  }
  &.success {
    /* equivalent to `.notice.success` */
    background-color: #004d40;
    border-color: #004d40;
    color: white;
    .success-heading::before {
      /* equivalent to `.notice.success .success-heading::before` */
      content: "✓ ";
    }
  }
}
```

##### Ergebnis

{{EmbedLiveSample('Nesting_and_compound_selectors','100%', '455')}}

## Angehängter Verschachtelungsselektor

Der Verschachtelungsselektor `&` kann auch an einen verschachtelten Selektor angehängt werden. Dadurch wird der Kontext umgekehrt.

Das kann nützlich sein, wenn sich die Styles eines Kindelements ändern sollen, sobald ein übergeordnetes Element eine andere Klasse erhält:

```html
<div>
  <span class="foo">text</span>
</div>
```

Im Gegensatz zu:

```html
<div class="bar">
  <span class="foo">text</span>
</div>
```

```css
.foo {
  /* .foo styles */
  .bar & {
    /* .bar .foo styles */
  }
}
```

### Beispiel

#### Verschachtelungsselektor anhängen

In diesem Beispiel gibt es drei Karten, von denen eine hervorgehoben ist. Die Karten sind ansonsten identisch; nur die Überschrift der hervorgehobenen Karte hat eine andere Farbe. Durch Anhängen des Verschachtelungsselektors `&` kann der Style für `.featured h2` innerhalb des Styles für `h2` verschachtelt werden.

##### HTML

```html
<div class="wrapper">
  <article class="card">
    <h2>Card 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card featured">
    <h2>Card 2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card">
    <h2>Card 3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
</div>
```

##### CSS

Im folgenden CSS erstellen wir die Styles für `.card` und `.card h2`. Innerhalb des Style-Blocks für `h2` verschachteln wir dann die Klasse `.featured` mit angehängtem Verschachtelungsselektor `&`. Dadurch entsteht ein Style für `.card :is(.featured h2)`, was `:is(.card h2):is(.featured h2)` entspricht.

```css
.card {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  & h2 {
    /* equivalent to `.card h2` */
    color: slateblue;
    .featured & {
      /* equivalent to `:is(.card h2):is(.featured h2)` */
      color: tomato;
    }
  }
}
```

##### Ergebnis

{{EmbedLiveSample('Appending_nesting_selector','100%','250')}}

## Regel für verschachtelte Deklarationen

Die Regel für verschachtelte Deklarationen besagt, dass CSS-Regeln in der Reihenfolge verarbeitet werden, in der sie im CSS-Dokument stehen.

Beim folgenden CSS:

```css
.foo {
  background-color: silver;
  @media screen {
    color: tomato;
  }
  color: black;
}
```

Zuerst wird `background-color` verarbeitet und auf Silber gesetzt. Danach wird die `@media`-Regel ausgewertet und zuletzt `color` verarbeitet.

Das CSSOM verarbeitet das CSS folgendermaßen:

```plain
↳ CSSStyleRule
  .style
    - background-color: silver
  ↳ CSSMediaRule
    ↳ CSSNestedDeclarations
      .style (CSSStyleDeclaration, 1) =
      - color: tomato
  ↳ CSSNestedDeclarations
    .style (CSSStyleDeclaration, 1) =
      - color: black
```

Beachten Sie, dass zur Beibehaltung der Verarbeitungsreihenfolge alle Regeln vor der Verschachtelung als `CSSRules` auf oberster Ebene behandelt werden. Deklarationen auf oberster Ebene nach der Verschachtelung werden dagegen als `CSSNestedDeclarations` dargestellt.
Deshalb befindet sich `color-black` in einer verschachtelten Deklaration, obwohl es im ursprünglichen Dokument eine Deklaration auf oberster Ebene ist.

> [!NOTE]
> Die Unterstützung für diese Regel wurde mit [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) hinzugefügt.
> Browser, die [diese Schnittstelle nicht unterstützen](/de/docs/Web/API/CSSNestedDeclarations#browser_compatibility), verarbeiten verschachtelte Regeln möglicherweise in der falschen Reihenfolge.

## Verkettung (nicht möglich)

In CSS-Präprozessoren wie [Sass](https://sass-lang.com/) lassen sich durch Verschachtelung Zeichenfolgen verbinden, um neue Klassen zu erstellen. Das ist bei CSS-Methodologien wie [BEM](https://css-tricks.com/bem-101/) üblich.

```css example-bad
/* the following Sass syntax... */
.component {
  &__child-element {
  }
}
/* ... would become the following CSS */
.component__child-element {
}
```

> [!WARNING]
> Bei der CSS-Verschachtelung ist das nicht möglich: Wird kein [Kombinator](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) verwendet, wird der verschachtelte Selektor als [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) behandelt. Eine Verkettung würde dieses Verhalten beeinträchtigen.

In [zusammengesetzten Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) muss der Typselektor an erster Stelle stehen. Die Schreibweise `&Element` (mit einem [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)) macht den CSS-Selektor und damit den gesamten Selektorblock ungültig. Da der Typselektor zuerst stehen muss, muss der zusammengesetzte Selektor als `Element&` geschrieben werden.

```css example-good
.my-class {
  element& {
  }
}

/* the browser parses this to become a compound selector */
.my-class {
}
element.my-class {
}
```

## Ungültige verschachtelte Style-Regeln

Ist eine verschachtelte CSS-Regel ungültig, werden alle darin enthaltenen Styles ignoriert. Die übergeordnete Regel und vorhergehende Regeln bleiben davon unberührt.

Im folgenden Beispiel gibt es einen ungültigen Selektor (`%` ist kein gültiges Zeichen für Selektoren). Die Regel mit diesem Selektor wird ignoriert, nachfolgende gültige Regeln jedoch nicht.

```css example-bad
.parent {
  /* .parent styles these work fine */
  & %invalid {
    /* %invalid styles all of which are ignored */
  }
  & .valid {
    /* .parent .valid styles these work fine */
  }
}
```

## Siehe auch

- Modul [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)
- [Verschachtelungsselektor `&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Verschachtelung von `@`-At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)
- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)
- [Die Regel für verschachtelte Deklarationen](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)

---
title: CSS-Nesting verwenden
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
l10n:
  sourceCommit: 52d1e0687664b91c0015787a895d3b70ca9a8e43
---

{{CSSRef}}

Das [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting)-Modul ermöglicht es Ihnen, Ihre Stylesheets so zu schreiben, dass sie leichter lesbar, modulare und besser wartbar sind. Da Selektoren nicht ständig wiederholt werden müssen, kann auch die Dateigröße reduziert werden.

CSS-Nesting unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/) dadurch, dass es vom Browser geparst wird und nicht von einem CSS-Präprozessor vorab kompiliert wird. Außerdem ist beim CSS-Nesting die [Spezifität des `&`-Nesting-Selektors](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) ähnlich der {{cssxref(':is',':is()')}}-Funktion; sie wird anhand der höchsten Spezifität in der zugehörigen Selektorliste berechnet.

Dieser Leitfaden zeigt verschiedene Möglichkeiten, wie CSS-Nesting arrangiert werden kann.

## Kind-Selektoren

Sie können CSS-Nesting verwenden, um Kind-Selektoren eines Elternteils zu erstellen, die wiederum verwendet werden können, um die Kindelemente bestimmter Elternteile zu stylen. Dies kann mit oder ohne den [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector) geschehen.

Es gibt bestimmte Fälle, in denen die Verwendung des `&`-Nesting-Selektors notwendig oder hilfreich sein kann:

- Beim Zusammenfügen von Selektoren, wie beispielsweise bei der Verwendung von [Compound Selectors](#compound_selectors) oder [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes).
- Für Rückwärtskompatibilität.
- Als visuelles Hilfsmittel zur Verbesserung der Lesbarkeit. Der `&`-Nesting-Selektor macht deutlich, dass CSS-Nesting verwendet wird.

```css
/* Without nesting selector */
parent {
  /* parent styles */
  child {
    /* child of parent styles */
  }
}

/* With nesting selector */
parent {
  /* parent styles */
  & child {
    /* child of parent styles */
  }
}

/* the browser will parse both of these as */
parent {
  /* parent styles */
}
parent child {
  /* child of parent styles */
}
```

### Beispiele

In diesen Beispielen, eines ohne und eines mit dem `&`-Nesting-Selektor, wird das `<input>` innerhalb des `<label>` anders gestylt als das `<input>`, das ein Geschwisterelement eines `<label>` ist.

#### Ohne Nesting-Selektor

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

#### Mit Nesting-Selektor

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

[CSS-Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) können ebenfalls mit oder ohne den `&`-Nesting-Selektor verwendet werden.

### Beispiel

#### Das Geschwister-Kombinator nesteln

In diesem Beispiel wird der erste Absatz nach jedem `<h2>` mit Hilfe des [Nachfolger-Kombinators (`+`)](/de/docs/Web/CSS/Next-sibling_combinator) durch CSS-Nesting angesprochen.

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

## Compound Selectors

Beim Verwenden von [Compound Selectors](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) in genestetem CSS **müssen** Sie den `&`-Nesting-Selektor verwenden. Der Browser fügt automatisch Leerzeichen zwischen Selektoren ein, die den `&`-Nesting-Selektor nicht nutzen.

Um ein Element mit `class="a b"` anzusprechen, wird der `&`-Nesting-Selektor benötigt, da andernfalls das Leerzeichen den Compound Selector unterbrechen würde.

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

#### Nesting und Compound Selector

In diesem Beispiel wird der `&`-Nesting-Selektor verwendet, um Compound Selectors zu erstellen, die Elemente mit mehreren Klassen stylen.

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

Styles für die `.notices`, um eine Spalte mit [Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) zu erstellen.

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

Im folgenden CSS-Code wird Nesting verwendet, um sowohl mit als auch ohne `&` Compound Selectors zu erstellen. Der oberste Selektor definiert die Basisstile für Elemente mit `class="notice"`. Der `&`-Nesting-Selektor wird dann genutzt, um Compound Selectors für Elemente mit entweder `class="notice warning"` oder `class="notice success"` zu erstellen. Zusätzlich kann das Verwenden von Nesting für Compound Selectors ohne explizite Verwendung von `&` im Selektor `.notice .notice-heading::before` gesehen werden.

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

## Erweiterter Nesting-Selektor

Der `&`-Nesting-Selektor kann auch an einen genesteten Selektor angehängt werden, wodurch sich der Kontext umkehrt.

Dies kann hilfreich sein, wenn wir Stile für ein Kindelement haben, die sich ändern, wenn ein Elternelement eine andere Klasse erhält:

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

#### Erweiterter Nesting-Selektor

In diesem Beispiel gibt es drei Karten, von denen eine hervorgehoben ist. Die Karten sind alle identisch, mit Ausnahme der Hervorhebungskarte, die eine alternative Farbe für die Überschrift hat. Durch Anhängen des `&`-Nesting-Selektors können die Stile für `.featured h2` in den Stilblock für `h2` genestet werden.

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

```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  font-family: system-ui;
}
```

Im folgenden CSS erstellen wir die Stile für `.card` und `.card h2`. Dann wird im Stilblock für `h2` die `.featured`-Klasse mit dem `&`-Nesting-Selektor angehängt, was einen Stil für `.card :is(.featured h2)` erstellt, der äquivalent zu `:is(.card h2):is(.featured h2)` ist.

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

## Regeln für genestete Deklarationen

Die Regel für genestete Deklarationen besagt, dass CSS-Regeln in der Reihenfolge geparst werden, in der sie im CSS-Dokument geschrieben sind.

Mit folgendem CSS:

```css
.foo {
  background-color: silver;
  @media (screen) {
    color: tomato;
  }
  color: black;
}
```

Die `background-color` wird zuerst geparst und auf Silber gesetzt, dann wird die `@media`-Regel ausgewertet, und schließlich die `color`.

Das CSSOM parst das CSS wie folgt:

```txt
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

Beachten Sie, dass zum Beibehalten der Parsing-Reihenfolge alle Regeln vor dem Nesting als top-level `CSSRules` behandelt werden, während alle top-level Regeln nach dem Nesting als `CSSNestedDeclarations` dargestellt werden. Daher befindet sich die `color-black` innerhalb einer genesteten Deklaration, auch wenn sie in der Ursprungsdatei eine top-level Deklaration ist.

> [!NOTE]
> Unterstützung für die Regel wurde mit [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) hinzugefügt.
> Browser, die [diese Schnittstelle nicht unterstützen](/de/docs/Web/API/CSSNestedDeclarations#browser_compatibility), können genestete Regeln in der falschen Reihenfolge parsen.

## Verkettung (nicht möglich)

In CSS-Präprozessoren wie [Sass](https://sass-lang.com/) ist es möglich, Nesting zu verwenden, um Strings zu kombinieren und neue Klassen zu erstellen. Dies ist in CSS-Methodologien wie [BEM](https://getbem.com/naming/) gängig.

```css example-bad
.component {
  &__child-element {
  }
}
/* In Sass this becomes */
.component__child-element {
}
```

> [!WARNING]
> Dies ist im CSS-Nesting nicht möglich: Wenn ein [Kombinator](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) nicht verwendet wird, wird der genestete Selektor als [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) behandelt. Das Zulassen von Verkettung würde dies brechen.

In [Compound Selectors](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) muss der Typ-Selektor zuerst kommen. Wenn man `&Element` (ein [Typ-Selektor](/de/docs/Web/CSS/Type_selectors)) schreibt, wird der gesamte Selektor und der Selektorblock ungültig. Da der Typ-Selektor zuerst kommt, muss der Compound Selector als `Element&` geschrieben werden.

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

## Ungültige genestete Stilregeln

Wenn eine genestete CSS-Regel ungültig ist, werden alle eingeschlossenen Stile ignoriert. Dies hat jedoch keinen Einfluss auf die übergeordneten oder vorherigen Regeln.

Im folgenden Beispiel gibt es einen ungültigen Selektor (`%` ist kein gültiges Zeichen für Selektoren). Die Regel, die diesen Selektor enthält, wird ignoriert, aber nachfolgende gültige Regeln sind davon nicht betroffen.

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

- [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting)-Modul
- [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [Nesting `@`-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Nesting und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)
- [Die Regel für genestete Deklarationen](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)

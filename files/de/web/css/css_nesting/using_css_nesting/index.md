---
title: Verwenden von CSS-Verschachtelung
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
l10n:
  sourceCommit: 5e3cb7c4405256c4ad004986bbff622777b664b6
---

{{CSSRef}}

Das Modul [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) ermöglicht es Ihnen, Ihre Stylesheets so zu schreiben, dass sie leichter lesbar, modularer und wartungsfreundlicher sind. Da Sie nicht ständig Selektoren wiederholen, kann auch die Dateigröße reduziert werden.

CSS-Verschachtelung unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/), da sie vom Browser geparst wird und nicht von einem CSS-Präprozessor vorkompiliert wird. Außerdem ist in der CSS-Verschachtelung die [Spezifität des `&` Verschachtelungsselektors](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) ähnlich der {{cssxref(':is',':is()')}} Funktion; sie wird mit der höchsten Spezifität in der zugehörigen Selektorenliste berechnet.

Dieser Leitfaden zeigt verschiedene Möglichkeiten zur Anordnung der Verschachtelung in CSS.

## Kindselektoren

Sie können CSS-Verschachtelung verwenden, um Kindselektoren eines Elternelements zu erstellen, die wiederum dazu verwendet werden können, Kindelemente spezifischer Eltern zu adressieren. Dies kann mit oder ohne den [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) erfolgen.

Es gibt bestimmte Fälle, in denen der `&` Verschachtelungsselektor notwendig oder hilfreich sein kann:

- Beim Verbinden von Selektoren, wie etwa beim Verwenden von [komplexen Selektoren](#komplexe_selektoren) oder [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes).
- Für Abwärtskompatibilität.
- Als visuelles Indiz zur Unterstützung der Lesbarkeit, da Sie bei Ansicht des `&` Verschachtelungsselektors wissen, dass CSS-Verschachtelung verwendet wird.

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

In diesen Beispielen, einem ohne und einem mit dem `&` Verschachtelungsselektor, wird das `<input>` innerhalb des `<label>` anders gestylt als das `<input>`, das ein Geschwisterelement eines `<label>` ist. Dies demonstriert die Auswirkung der Auslassung des `&` Verschachtelungsselektors.

> [!NOTE]
> Dieses Beispiel zeigt unterschiedliche Ausgaben in Browsern, die die ursprüngliche Spezifikation gegenüber der aktuellen Verschachtelungsspezifikation umsetzen. Die ursprüngliche, vor August 2023 verschachtelte Spezifikation, die in Chrome oder Safari implementiert wurde, erfordert den `&` Verschachtelungskombinator. Wenn Ihr Browser die aktuelle Spezifikation unterstützt, entspricht die Ausgabe beider Beispiele der des zweiten Beispiels.

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
  & input {
    /* styles for input in a label  */
    border: blue 2px dashed;
  }
}
```

##### Ergebnis

{{EmbedLiveSample('With_nesting_selector','100%','120')}}

## Kombinatoren

[CSS-Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) können ebenfalls mit oder ohne den `&` Verschachtelungsselektor verwendet werden.

### Beispiel

#### Verschachteln des Geschwisterkombinators

In diesem Beispiel wird der erste Absatz nach jedem `<h2>` mit dem [nächstes-Geschwister-Kombinator (`+`)](/de/docs/Web/CSS/Next-sibling_combinator) unter Verwendung von CSS-Verschachtelung angesprochen.

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

## Komplexe Selektoren

Beim Verwenden von [komplexen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) in verschachteltem CSS **müssen** Sie den `&` Verschachtelungsselektor verwenden. Dies liegt daran, dass der Browser automatisch Leerzeichen zwischen Selektoren hinzufügt, die den `&` Verschachtelungsselektor nicht verwenden.

Um ein Element mit `class="a b"` anzusprechen, wird der `&` Verschachtelungsselektor benötigt, ansonsten wird das Leerzeichen den komplexen Selektor aufbrechen.

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

#### Verschachteln und komplexe Selektoren

In diesem Beispiel wird der `&` Verschachtelungsselektor verwendet, um komplexe Selektoren zu erstellen, um Elemente mit mehreren Klassen zu stylen.

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

Stile für die `.notices`, um eine Spalte mit dem [Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) zu erstellen.

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

Im folgenden CSS-Code wird die Verschachtelung verwendet, um komplexe Selektoren sowohl mit als auch ohne `&` zu erstellen. Der oberste Selektor definiert die Grundstile für Elemente mit `class="notice"`. Der `&` Verschachtelungsselektor wird dann verwendet, um komplexe Selektoren für Elemente mit entweder `class="notice warning"` oder `class="notice success"` zu erstellen. Zudem kann die Verwendung der Verschachtelung zur Erstellung komplexer Selektoren ohne explizite Verwendung von `&` im Selektor `.notice .notice-heading::before` gesehen werden.

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

## Ergänzter Verschachtelungsselektor

Der `&` Verschachtelungsselektor kann auch einem verschachtelten Selektor angehängt werden, wodurch der Kontext umgekehrt wird.

Dies kann nützlich sein, wenn wir Stile für ein Kindelement haben, die sich ändern, wenn einem Elternelement eine andere Klasse zugewiesen wird:

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

#### Anfügen des Verschachtelungsselektors

In diesem Beispiel gibt es 3 Karten, von denen eine hervorgehoben wird. Die Karten sind alle genau gleich, außer dass die hervorgehobene Karte eine alternative Farbe für die Überschrift hat. Durch das Anhängen des `&` Verschachtelungsselektors kann der Stil für `.featured .h2` innerhalb des Stils für `h2` verschachtelt werden.

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

Im folgenden CSS erstellen wir die Stile für `.card` und `.card h2`. Dann, im `h2`-Stilblock, verschachteln wir die `.featured`-Klasse mit dem angehängten `&` Verschachtelungsselektor, der einen Stil für `.card :is(.featured h2)` erstellt, was äquivalent zu `:is(.card h2):is(.featured h2)` ist.

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

## Verschachtelte Deklarationsregel

Die Regel für verschachtelte Deklarationen besagt, dass CSS-Regeln in der Reihenfolge geparst werden, in der sie im CSS-Dokument geschrieben sind.

Mit dem folgenden CSS:

```css
.foo {
  background-color: silver;
  @media (screen) {
    color: tomato;
  }
  color: black;
}
```

Der `background-color` wird zuerst geparst und auf Silber gesetzt, dann wird die `@media`-Regel ausgewertet und schließlich die `color`.

Das CSSOM parst das CSS auf folgende Weise:

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

Beachten Sie, dass, um die Parsing-Reihenfolge zu bewahren, alle Regeln vor der Verschachtelung als Top-Level-`CSSRules` behandelt werden, während alle Top-Level-Regeln nach der Verschachtelung als `CSSNestedDeclarations` dargestellt werden.
Deshalb befindet sich `color-black` in einer verschachtelten Deklaration, obwohl es im Originaldokument eine Top-Level-Deklaration ist.

> [!NOTE]
> Unterstützung für die Regel wurde mit [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) hinzugefügt.
> Browser, die [diese Schnittstelle nicht unterstützen](/de/docs/Web/API/CSSNestedDeclarations#browser_compatibility), könnten verschachtelte Regeln in der falschen Reihenfolge parsen.

## Verkettung (ist nicht möglich)

In CSS-Präprozessoren wie [Sass](https://sass-lang.com/) ist es möglich, Verschachtelung zu verwenden, um Zeichenfolgen zu verbinden, um neue Klassen zu erstellen. Dies ist in CSS-Methodologien wie [BEM](https://getbem.com/naming/) üblich.

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
> Dies ist in CSS-Verschachtelung nicht möglich: Wenn ein [Kombinator](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) nicht verwendet wird, wird der verschachtelte Selektor als [Typselektor](/de/docs/Web/CSS/Type_selectors) behandelt. Die Zulassung der Verkettung würde dies brechen.

In [komplexen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) muss der Typselektor zuerst kommen. Schreiben `&Element` (einen [Typselektor](/de/docs/Web/CSS/Type_selectors)) macht den CSS-Selektor und den gesamten Selektorblock ungültig. Da der Typselektor zuerst kommen muss, muss der komplexe Selektor als `Element&` geschrieben werden.

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

## Ungültige verschachtelte Stilregeln

Wenn eine verschachtelte CSS-Regel ungültig ist, werden alle eingeschlossenen Stile ignoriert. Dies beeinflusst nicht die übergeordneten oder vorhergehenden Regeln.

Im folgenden Beispiel gibt es einen ungültigen Selektor (`%` ist kein gültiges Zeichen für Selektoren). Die Regel, die diesen Selektor einschließt, wird ignoriert, aber nachfolgende gültige Regeln nicht.

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

- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
- [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [Verschachteln von `@` At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)
- [Die Regel der verschachtelten Deklarationen](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)

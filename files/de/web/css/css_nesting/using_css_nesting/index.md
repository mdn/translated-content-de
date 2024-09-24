---
title: Verwenden von CSS-Nesting
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) Modul erlaubt es Ihnen, Ihre Stylesheets so zu schreiben, dass sie leichter lesbar, modularer und wartungsfreundlicher sind. Da Sie nicht ständig Selektoren wiederholen, kann die Dateigröße ebenfalls reduziert werden.

CSS-Nesting unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/) insofern, als es vom Browser geparst wird und nicht von einem CSS-Präprozessor vorkompiliert. Außerdem ist beim CSS-Nesting die [Spezifität des `&`-Nesting-Selektors](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) ähnlich der spezifischen Berechnung der {{cssxref(':is', ':is()')}}-Funktion; sie wird anhand der höchsten Spezifität in der zugehörigen Selektorliste berechnet.

Dieser Leitfaden zeigt verschiedene Möglichkeiten zur Anordnung von Nesting in CSS.

## Kind-Selektoren

Sie können CSS-Nesting verwenden, um Kind-Selektoren eines Elternteils zu erstellen, die dann verwendet werden können, um bestimmte Kindelemente bestimmter Eltern anzusprechen. Dies kann mit oder ohne den [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector) durchgeführt werden.

Es gibt bestimmte Fälle, in denen die Verwendung des `&`-Nesting-Selektors notwendig oder hilfreich sein kann:

- Beim Zusammenführen von Selektoren, wie z.B. bei [Verbundselektoren](#verbundselektoren) oder [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes).
- Für Abwärtskompatibilität.
- Als visueller Indikator zur Unterstützung der Lesbarkeit, da das Erkennen des `&`-Nesting-Selektors darauf hindeutet, dass CSS-Nesting verwendet wird.

```css
/* Ohne Nesting-Selektor */
parent {
  /* Eltern-Stile */
  child {
    /* Kind von Eltern-Stile */
  }
}

/* Mit Nesting-Selektor */
parent {
  /* Eltern-Stile */
  & child {
    /* Kind von Eltern-Stile */
  }
}

/* der Browser wird beides so parsen */
parent {
  /* Eltern-Stile */
}
parent child {
  /* Kind von Eltern-Stile */
}
```

### Beispiele

In diesen Beispielen, eines ohne und eines mit dem `&`-Nesting-Selektor, wird das `<input>` innerhalb des `<label>` anders als das `<input>`, das ein Geschwister von einem `<label>` ist, gestylt. Dies demonstriert die Auswirkungen des Weglassens des `&`-Nesting-Selektors.

> [!NOTE]
> Dieses Beispiel zeigt unterschiedliche Ausgaben in Browsern, die die ursprüngliche Spezifikation im Vergleich zur aktuellen Nesting-Spezifikation implementieren. Die ursprüngliche, vor August 2023 umgesetzte Nesting-Spezifikation in Chrome oder Safari, erfordert den `&`-Nesting-Kombinator. Wenn Ihr Browser die aktuelle Spezifikation unterstützt, entspricht die Ausgabe beider Beispiele der des zweiten Beispiels.

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

[CSS-Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) können ebenfalls mit oder ohne den `&`-Nesting-Selektor verwendet werden.

### Beispiel

#### Nesting des Geschwisterkombinators

In diesem Beispiel wird der erste Absatz nach jedem `<h2>` mit dem [Geschwisterkombinator (`+`)](/de/docs/Web/CSS/Next-sibling_combinator) unter Verwendung von CSS-Nesting angesprochen.

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
/* dieser Code kann auch mit dem &-Nesting-Selektor geschrieben werden */
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

## Verbundselektoren

Bei der Verwendung von [Verbundselektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) in verschachteltem CSS müssen Sie den `&`-Nesting-Selektor verwenden. Denn der Browser fügt automatisch Leerzeichen zwischen Selektoren hinzu, die den `&`-Nesting-Selektor nicht verwenden.

Um ein Element mit `class="a b"` anzusprechen, wird der `&`-Nesting-Selektor benötigt, andernfalls unterbricht das Leerzeichen den Verbundselektor.

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

/* der Browser parst dies wie folgt */
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

#### Nesting und Verbundselektoren

In diesem Beispiel wird der `&`-Nesting-Selektor verwendet, um Verbundselektoren zu erstellen, um Elemente mit mehreren Klassen zu stylen.

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

Stile für `.notices`, um eine Spalte mit [Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) zu erstellen.

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

In dem folgenden CSS-Code wird Nesting verwendet, um Verbundselektoren sowohl mit als auch ohne `&` zu erstellen. Der oberste Selektor definiert die Basisstile für Elemente mit `class="notice"`. Der `&`-Nesting-Selektor wird dann verwendet, um Verbundselektoren für Elemente mit entweder `class="notice warning"` oder `class="notice success"` zu erstellen. Zusätzlich wird das Nesting verwendet, um Verbundselektoren ohne die explizite Verwendung von `&` im Selektor `.notice .notice-heading::before` zu erstellen.

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

## Angehängter Nesting-Selektor

Der `&`-Nesting-Selektor kann auch an einen verschachtelten Selektor angehängt werden, was den Effekt hat, den Kontext umzukehren.

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

#### Anfügen des Nesting-Selektors

In diesem Beispiel gibt es drei Karten, von denen eine hervorgehoben ist. Die Karten sind alle gleich, außer dass die hervorgehobene Karte eine alternative Farbe für die Überschrift hat. Durch das Anhängen des `&`-Nesting-Selektors kann der Stil für `.featured .h2` im Stil für `h2` verschachtelt werden.

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

Im folgenden CSS erstellen wir die Stile für `.card` und `.card h2`. Dann nesteln wir im Stilblock `h2` die Klasse `.featured` mit dem angehängten `&`-Nesting-Selektor, was einen Stil für `.card :is(.featured h2)` erstellt, was gleichbedeutend ist mit `:is(.card h2):is(.featured h2)`.

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

## Verkettung (ist nicht möglich)

In CSS-Präprozessoren wie [Sass](https://sass-lang.com/) ist es möglich, mittels Nesting Zeichenketten zu verbinden, um neue Klassen zu erstellen. Dies ist in CSS-Methodologien wie [BEM](https://getbem.com/naming/) üblich.

```css example-bad
.component {
  &__child-element {
  }
}
/* In Sass wird dies zu */
.component__child-element {
}
```

> [!WARNING]
> Dies ist im CSS-Nesting nicht möglich: wenn kein [Kombinator](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) verwendet wird, wird der verschachtelte Selektor als [Typselektor](/de/docs/Web/CSS/Type_selectors) behandelt. Eine Verkettung würde dies brechen.

In [Verbundselektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) muss der Typselektor zuerst kommen. Das Schreiben von `&Element` (ein [Typselektor](/de/docs/Web/CSS/Type_selectors)) macht den CSS-Selektor und den gesamten Selektorblock ungültig. Da der Typselektor zuerst stehen muss, muss der Verbundselektor als `Element&` geschrieben werden.

```css example-good
.my-class {
  element& {
  }
}

/* der Browser parst dies, um ein Verbundselektor zu werden */
.my-class {
}
element.my-class {
}
```

## Ungültige verschachtelte Stilregeln

Wenn eine verschachtelte CSS-Regel ungültig ist, werden alle eingeschlossenen Stile ignoriert. Dies hat keine Auswirkungen auf die übergeordnete oder vorhergehende Regeln.

Im folgenden Beispiel gibt es einen ungültigen Selektor (`%` ist kein gültiges Zeichen für Selektoren). Die Regel, die diesen Selektor enthält, wird ignoriert, aber nachfolgende gültige Regeln nicht.

```css example-bad
.parent {
  /* .parent styles diese funktionieren einwandfrei */
  & %invalid {
    /* %invalid styles alle ignoriert */
  }
  & .valid {
    /* .parent .valid styles diese funktionieren einwandfrei */
  }
}
```

## Siehe auch

- [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) Modul
- [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [Verschachtelung von `@`-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Nesting und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)

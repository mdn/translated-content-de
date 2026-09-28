---
title: "`scroll-initial-target` CSS property"
short-title: scroll-initial-target
slug: Web/CSS/Reference/Properties/scroll-initial-target
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{SeeCompatTable}}

Mit der **[CSS](/de/docs/Web/CSS)-Eigenschaft `scroll-initial-target`** können Elemente als mögliche Snap-Ziele festgelegt werden, wenn ihr übergeordneter {{Glossary("scroll_container", "Scroll-Container")}} erstmals gerendert wird.

## Syntax

```css
/* Keyword values */
scroll-initial-target: none;
scroll-initial-target: nearest;

/* Global values */
scroll-initial-target: inherit;
scroll-initial-target: initial;
scroll-initial-target: revert;
scroll-initial-target: revert-layer;
scroll-initial-target: unset;
```

### Werte

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Das Element ist kein anfängliches Scroll-Ziel.
- `nearest`
  - : Das Element ist ein mögliches anfängliches Scroll-Ziel für seinen nächstgelegenen übergeordneten Scroll-Container.

## Beschreibung

Mit der Eigenschaft `scroll-initial-target` können Elemente festgelegt werden, an denen ihre übergeordneten {{Glossary("scroll_snap", "Scroll-Snap-Container")}} beim ersten Rendern einrasten sollen. Der Wert `nearest` legt ein Element als mögliches Ziel fest, an dem der nächstgelegene übergeordnete {{Glossary("scroll_container", "Scroll-Container")}} einrasten soll, wenn er erstmals auf der Seite erscheint.

Wenn für mehrere Elemente oder Pseudoelemente im Scroll-Container `nearest` festgelegt ist, ist das erste Element in der Baumreihenfolge das anfängliche Snap-Ziel.

Der Anfangswert ist `none`. Das bedeutet, dass ein Element, an dem eingerastet werden kann, standardmäßig kein anfängliches Scroll-Ziel ist. Der Wert `none` kann auch ausdrücklich für ein Element festgelegt werden, damit es kein anfängliches Scroll-Ziel ist.

Wenn die anfängliche Scroll-Position eines Scroll-Containers sowohl durch die Content-Distribution-Eigenschaft {{cssxref("place-content")}} als auch durch `scroll-initial-target` auf Nachfahren bestimmt werden könnte, hat der erste Nachfahre mit `scroll-initial-target: nearest` Vorrang.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### `scroll-initial-target` verwenden

Das folgende Beispiel zeigt die beiden Werte von `scroll-initial-target` und wie am ersten Element mit `scroll-initial-target` eingerastet wird.

#### HTML

Wir fügen fünf Container ein, denen jeweils ein Absatz vorangestellt ist, der den erwarteten Effekt erläutert.

```html
<p><code>none</code> on #4 only</p>
<div class="none">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> on #4 only</p>
<div class="nearest">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> on even elements</p>
<div class="nearest">
  <div>1</div>
  <div class="set">2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> on odd elements</p>
<div class="nearest">
  <div class="set">1</div>
  <div>2</div>
  <div class="set">3</div>
  <div>4</div>
  <div class="set">5</div>
</div>

<p><code>nearest</code> on odd elements, with <code>none</code> on #1</p>
<div class="nearest">
  <div class="set unset">1</div>
  <div>2</div>
  <div class="set">3</div>
  <div>4</div>
  <div class="set">5</div>
</div>
```

#### CSS

Wir richten die Elemente mit `nearest` und `none` als Scroll-Snap-Container ein und zentrieren die Elemente, an denen eingerastet wird.

```css
/* mandatory scroll-snap on parent */
div.nearest,
div.none {
  scroll-snap-type: x mandatory;
}

/* scroll-snap alignment for children */
div > div {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
```

Anschließend legen wir für alle Elemente mit der Klasse `.set` den Wert von `scroll-initial-target` auf `none` oder `nearest` fest.

```css
.none .set,
.nearest .set.unset {
  scroll-initial-target: none;
}
.nearest .set {
  scroll-initial-target: nearest;
}
```

```css hidden
/* setup */
body {
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  font-family: sans-serif;
  text-align: center;
}

div.nearest,
div.none {
  display: flex;
  overflow: auto;
  font-size: 3rem;
}

div div {
  width: 90%;
  min-width: 15rem;
  flex: none;
  outline: 1px solid #333333;
}

/* coloration */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}

p {
  margin: 1em 0 0;
}

@supports not (scroll-initial-target: nearest) {
  :root::before {
    content: "Your browser doesn't support the scroll-initial-target property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Using scroll-initial-target", "100%", "500")}}

Der Effekt der Eigenschaft zeigt sich, wenn der Scroll-Snap-Container auf der Seite dargestellt wird.

Jede Zeile rastet am ersten Element in der Baumreihenfolge ein, für das `nearest` festgelegt ist, sofern eines vorhanden ist. Im letzten Beispiel haben wir den Wert `nearest` für das erste Element mit `none` überschrieben. Daher ist Element #3 das erste Element, für das `nearest` gilt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)

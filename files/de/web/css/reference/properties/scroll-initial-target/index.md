---
title: "`scroll-initial-target` CSS property"
short-title: scroll-initial-target
slug: Web/CSS/Reference/Properties/scroll-initial-target
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`scroll-initial-target`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht die Definition von Elementen, die potenzielle Snap-Ziele sind, wenn ihr Vorfahre ein {{Glossary("scroll_container", "scroll container")}} ist und zum ersten Mal gerendert wird.

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

- `none`
  - : Das Element ist kein initiales Scroll-Ziel.
- `nearest`
  - : Das Element ist potenziell ein initiales Scroll-Ziel für seinen nächsten scroll container-Vorfahren.

## Beschreibung

Die `scroll-initial-target`-Eigenschaft ermöglicht es, Elemente zu definieren, die bei der ersten Darstellung ihrer übergeordneten {{Glossary("scroll_snap", "scroll snap")}}-Container eingerastet werden sollen. Wenn der Wert `nearest` gesetzt wird, wird das Element als potenzielles Ziel definiert, zu dem beim ersten Erscheinen des nächsten Vorfahren {{Glossary("scroll_container", "scroll container")}} auf der Seite eingerastet werden soll.

Wenn mehrere Elemente oder Pseudo-Elemente im scroll container auf `nearest` gesetzt sind, ist das erste Element in der Baumreihenfolge das anfängliche Ziel für das Einrasten beim Scrollen.

Der Anfangswert ist `none`, was bedeutet, dass ein Scroll-Snap-fähiges Element standardmäßig kein anfängliches Scroll-Ziel ist. Der Wert `none` kann auch auf einem Element gesetzt werden, um explizit sicherzustellen, dass es kein anfängliches Scroll-Ziel ist.

Wenn die anfängliche Scroll-Position eines scroll container sowohl durch die {{cssxref("place-content")}}-Eigenschaft für die Inhaltsverteilung als auch durch `scroll-initial-target` auf einem der Nachkommen potenziell festgelegt wird, gewinnt der erste Nachkomme mit `scroll-initial-target: nearest`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `scroll-initial-target`

Das folgende Beispiel zeigt die beiden Werte von `scroll-initial-target` und wie das erste Element mit `scroll-initial-target` eingerastet wird.

#### HTML

Wir fügen 5 Container hinzu, die von einem Absatz eingeleitet werden, der die erwartete Wirkung erklärt.

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

Wir richten die Elemente mit den nächstgelegenen und keinen Attributen als scroll-snap-Container ein und zentrieren die eingeklappten Elemente.

```css
/* mandatory scroll-snap on parent */
div.nearest,
div.none {
  scroll-snap-type: x mandatory;
}

/* scroll-snap alignment for children */
div > div {
  scroll-snap-align: center;
  scroll-initial-target: always;
}
```

Anschließend setzen wir `scroll-initial-target` entweder auf `none` oder `nearest` bei allen Elementen mit der `.set`-Klasse.

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
  body::before {
    content: "Your browser doesn't support the scroll-initial-target property.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1em;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Using scroll-initial-target", "100%", "500")}}

Die Wirkung der Eigenschaft wird gezeigt, wenn der scroll-snap-Container auf die Seite gezeichnet wird.

Jede Reihe rastet zum ersten Element mit `nearest` ein, falls vorhanden, in Baumreihenfolge. Im letzten Beispiel haben wir den Wert `nearest` beim ersten Element mit `none` überschrieben, sodass das erste Element mit angewendetem `nearest` #3 ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)

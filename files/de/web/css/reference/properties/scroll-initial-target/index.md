---
title: scroll-initial-target
slug: Web/CSS/Reference/Properties/scroll-initial-target
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{SeeCompatTable}}

Die **`scroll-initial-target`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Definition von Elementen, die potenzielle Snap-Ziele sind, wenn ihr übergeordneter {{Glossary("scroll_container", "Scroll-Container")}} zuerst gerendert wird.

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
  - : Das Element ist potenziell ein initiales Scroll-Ziel für seinen nächsten übergeordneten Scroll-Container.

## Beschreibung

Die Eigenschaft `scroll-initial-target` ermöglicht die Definition von Elementen, die gesnappt werden sollten, wenn ihre übergeordneten {{Glossary("scroll_snap", "Scroll-Snap")}} Container zuerst gerendert werden. Wenn der Wert auf `nearest` gesetzt ist, wird das Element als potenzielles Ziel definiert, das gesnappt werden sollte, wenn der nächste übergeordnete {{Glossary("scroll_container", "Scroll-Container")}} auf der Seite angezeigt wird.

Wenn mehrere Elemente oder Pseudo-Elemente im Scroll-Container auf `nearest` gesetzt sind, ist das erste Element in der Baumreihenfolge das initiale Scroll-Snap-Ziel.

Der Anfangswert ist `none`, was bedeutet, dass ein scroll-snapfähiges Element standardmäßig kein initiales Scroll-Ziel ist. Der Wert `none` kann auch auf ein Element gesetzt werden, um es explizit nicht als initiales Scroll-Ziel festzulegen.

Wenn eine anfängliche Scroll-Position eines Scroll-Containers potenziell sowohl durch die {{cssxref("place-content")}} Inhaltsverteilungs-Eigenschaft als auch durch `scroll-initial-target` auf irgendeinem Nachkommen gesetzt wird - gewinnt der erste Nachkomme mit `scroll-initial-target: nearest`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `scroll-initial-target`

Das folgende Beispiel demonstriert die zwei Werte von `scroll-initial-target` und wie das erste Element mit `scroll-initial-target` gesnappt wird.

#### HTML

Wir fügen 5 Container ein, die von einem Absatz eingeleitet werden, der die erwartete Wirkung erklärt.

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

Wir richten die nächstgelegenen und keine Elemente als Scroll-Snap-Container ein und zentrieren die gesnappten Elemente.

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

Wir setzen dann `scroll-initial-target` von entweder `none` oder `nearest` auf allen Elementen mit der Klasse `.set`.

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

Die Wirkung der Eigenschaft wird demonstriert, wenn der Scroll-Snap-Container auf der Seite gezeichnet wird.

Jede Zeile snappt zum ersten Element mit `nearest` in der Baumreihenfolge, falls vorhanden. Im letzten Beispiel haben wir den `nearest` Wert mit `none` auf dem ersten Element überschrieben, sodass das erste Element mit angewendetem `nearest` #3 ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)

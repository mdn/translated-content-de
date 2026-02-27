---
title: scroll-initial-target
slug: Web/CSS/Reference/Properties/scroll-initial-target
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

Die **`scroll-initial-target`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Definition von Elementen, die potenzielle Snap-Ziele sind, wenn ihr Vorfahr {{Glossary("scroll_container", "scroll container")}} erstmals gerendert wird.

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
  - : Das Element ist kein anfängliches Scroll-Ziel.
- `nearest`
  - : Das Element ist potenziell ein anfängliches Scroll-Ziel für seinen nächstgelegenen übergeordneten Scroll-Container.

## Beschreibung

Die `scroll-initial-target`-Eigenschaft ermöglicht die Definition von Elementen, die beim ersten Rendern ihrer übergeordneten {{Glossary("scroll_snap", "scroll snap")}} Container eingerastet werden sollen. Wenn Sie den Wert auf `nearest` setzen, wird das Element als potenzielles Ziel festgelegt, das eingerastet werden soll, wenn der nächstgelegene Vorfahr {{Glossary("scroll_container", "scroll container")}} erstmals auf der Seite erscheint.

Wenn mehrere Elemente oder Pseudo-Elemente im Scroll-Container auf `nearest` gesetzt sind, ist das erste Element in der Baumreihenfolge das anfängliche Scroll-Snap-Ziel.

Der anfängliche Wert ist `none`, was bedeutet, dass ein Scroll-Snapbares Element standardmäßig kein anfängliches Scroll-Ziel ist. Der Wert `none` kann auch auf ein Element gesetzt werden, um es explizit nicht zu einem anfänglichen Scroll-Ziel zu machen.

Wenn die anfängliche Scroll-Position eines Scroll-Containers sowohl durch die {{cssxref("place-content")}} Inhaltsverteilungseigenschaft als auch durch `scroll-initial-target` auf Nachkommen möglicherweise festgelegt wird, gewinnt der erste Nachkomme mit `scroll-initial-target: nearest`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `scroll-initial-target`

Das folgende Beispiel zeigt die beiden Werte von `scroll-initial-target` und wie das erste Element mit `scroll-initial-target` eingerastet wird.

#### HTML

Wir fügen 5 Container ein, die von einem Absatz, der den erwarteten Effekt erklärt, eingeleitet werden.

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

Wir richten die nächstgelegenen und keine Elemente als Scroll-Snap-Container ein und zentrieren die eingerasteten Elemente.

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

Dann setzen wir `scroll-initial-target` entweder auf `none` oder `nearest` für alle Elemente mit der Klasse `.set`.

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

Die Wirkung der Eigenschaft wird gezeigt, wenn der Scroll-Snap-Container auf der Seite angezeigt wird.

Jede Reihe rastet auf das erste Element mit `nearest` in Baumreihenfolge ein, falls vorhanden. Im letzten Beispiel haben wir den Wert `nearest` mit `none` auf dem ersten Element überschrieben, sodass das erste Element mit `nearest` #3 ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)

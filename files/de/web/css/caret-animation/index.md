---
title: caret-animation
slug: Web/CSS/caret-animation
l10n:
  sourceCommit: 49f90b9c810e5167fecf6ad652afb03075072db7
---

{{SeeCompatTable}}

Die **`caret-animation`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um das Blinken des **Eingabecursors** zu aktivieren oder zu deaktivieren. Der sichtbare Marker erscheint in editierbaren Elementen, um anzuzeigen, wo das nächste Zeichen eingefügt oder gelöscht wird.

Wenn Sie eine benutzerdefinierte Animation auf den Cursor anwenden, sollten Sie das standardmäßige Blinken stoppen, damit es nicht mit der Animation interferiert.

## Syntax

```css
/* Keyword values */
caret-animation: auto;
caret-animation: manual;

/* Global values */
caret-animation: inherit;
caret-animation: initial;
caret-animation: revert;
caret-animation: revert-layer;
caret-animation: unset;
```

### Werte

Die `caret-animation` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

- `auto`
  - : Der Cursor blinkt ein und aus. Dies ist der Standardwert (initialer Wert).
- `manual`
  - : Der Cursor blinkt nicht ein und aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `caret-animation`

Dieses Beispiel zeigt den Unterschied zwischen `caret-animation` auf `auto` und `manual` bei einem editierbaren Element.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}} Elemente mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um sie editierbar zu machen.

```html live-sample___caret-animation-basic
<p contenteditable="true">
  My caret animates because <code>caret-animation</code> is set to
  <code>auto</code>.
</p>
<p contenteditable="true">
  My caret doesn't animate because <code>caret-animation</code> is set to
  <code>manual</code>.
</p>
```

#### CSS

Das CSS setzt den Wert von {{cssxref("caret-color")}} auf `red`. Es weist dann dem ersten Absatz einen `caret-animation` Wert von `auto` und dem zweiten Absatz einen `caret-animation` Wert von `manual` zu.

```css live-sample___caret-animation-basic
p {
  caret-color: red;
}

p:first-of-type {
  caret-animation: auto;
}

p:last-of-type {
  caret-animation: manual;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('caret-animation-basic', 'auto', 100)}}

Versuchen Sie, sich auf die beiden Absätze zu fokussieren, um den Unterschied im Cursorverhalten zu sehen.

### Erstellen einer benutzerdefinierten Cursor-Animation

In diesem Beispiel wird eine benutzerdefinierte Cursor-Animation auf einen editierbaren Absatz und eine Texteingabe angewendet.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} Element und zwei Text {{htmlelement("input")}} Elemente. Das `<p>` Element hat das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut, um es editierbar zu machen. Der Absatz und die erste Texteingabe haben eine `class` von `custom-caret`.

```html live-sample___caret-animation-custom
<p contenteditable="true" class="custom-caret">
  This paragraph has a custom animation applied to it, plus
  <code>caret-animation: manual</code> to stop the default caret blinking and
  allow the smooth animation to be seen.
</p>

<input
  type="text"
  class="custom-caret"
  value="I've got a custom caret animation" />

<input type="text" value="I've got the default blinking caret" />
```

#### CSS

Zuerst definieren wir ein Set von {{cssxref("@keyframes")}}, das die {{cssxref("caret-color")}} von `transparent` zu `darkblue` verändert.

```css live-sample___caret-animation-custom
@keyframes custom-caret-animation {
  from {
    caret-color: transparent;
  }

  to {
    caret-color: darkblue;
  }
}
```

Wir stylen dann das `<p>` und das erste `<input>` mit der benutzerdefinierten `@keyframes` Animation, einer {{cssxref("caret-color")}}, und einem `caret-animation` Wert von `manual`, um das standardmäßige Blinken des Cursors zu deaktivieren.

```css hidden live-sample___caret-animation-custom
body {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 20px;
}
```

```css live-sample___caret-animation-custom
.custom-caret {
  animation: custom-caret-animation infinite linear alternate 0.75s;
  caret-color: darkblue;
  caret-animation: manual;
}

p,
input {
  font-size: 1.6rem;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('caret-aniamtion-custom', 'auto', 260)}}

Versuchen Sie, sich auf die ersten beiden Elemente zu fokussieren, um zu sehen, wie die benutzerdefinierte Cursor-Animation aussieht. Zum Vergleich mit dem standardmäßigen blinkenden Cursor können Sie sich auf das dritte Element fokussieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}, {{cssxref("caret-shape")}}
- {{cssxref("caret")}} Shorthand
- [CSS grundlegendes Benutzerinterface](/de/docs/Web/CSS/CSS_basic_user_interface) Modul

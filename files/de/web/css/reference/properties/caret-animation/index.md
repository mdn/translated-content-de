---
title: "`caret-animation` CSS property"
short-title: caret-animation
slug: Web/CSS/Reference/Properties/caret-animation
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`caret-animation`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um das Blinken des **Einfügemarkierers** ein- oder auszuschalten. Der Einfügemarkierer ist der sichtbare Marker, der in bearbeitbaren Elementen erscheint und anzeigt, wo das nächste Zeichen eingefügt oder gelöscht wird.

Wenn Sie eine benutzerdefinierte Animation auf den Markierer anwenden, sollten Sie das standardmäßige Blinken stoppen, damit es die Animation nicht stört.

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

Die `caret-animation`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

- `auto`
  - : Der Markierer blinkt an und aus. Dies ist der Standardwert (initial).
- `manual`
  - : Der Markierer blinkt nicht an und aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `caret-animation`

Dieses Beispiel zeigt den Unterschied zwischen `caret-animation` mit den Werten `auto` und `manual` auf einem bearbeitbaren Element.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um sie bearbeitbar zu machen.

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

Das CSS setzt den Wert von {{cssxref("caret-color")}} auf `red`. Es weist dem ersten Absatz einen `caret-animation`-Wert von `auto` und dem zweiten Absatz einen `caret-animation`-Wert von `manual` zu.

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

Versuchen Sie, sich auf die beiden Absätze zu konzentrieren, um den Unterschied im Markierer-Verhalten zu sehen.

### Erstellung einer benutzerdefinierten Markierer-Animation

In diesem Beispiel wird eine benutzerdefinierte Markierer-Animation auf einen bearbeitbaren Absatz und ein Texteingabefeld angewendet.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element und zwei text {{htmlelement("input")}}-Elemente. Das `<p>`-Element hat das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt, um es bearbeitbar zu machen. Der Absatz und das erste Texteingabefeld haben die `class`-Eigenschaft `custom-caret`.

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

Zuerst definieren wir eine Menge von {{cssxref("@keyframes")}}, die die {{cssxref("caret-color")}} von `transparent` zu `darkblue` ändern.

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

Dann stylen wir das `<p>` und das erste `<input>` mit der benutzerdefinierten `@keyframes`-Animation, einer {{cssxref("caret-color")}}, und einem `caret-animation`-Wert von `manual`, um das standardmäßige Markierer-Blinkverhalten auszuschalten.

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

Versuchen Sie, sich auf die ersten beiden Elemente zu konzentrieren, um zu sehen, wie die benutzerdefinierte Markierer-Animation aussieht. Um es mit dem standardmäßigen blinkenden Markierer zu vergleichen, können Sie sich auf das dritte Element konzentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}, {{cssxref("caret-shape")}}
- {{cssxref("caret")}} Kurzform
- [CSS-Grundlagen der Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul

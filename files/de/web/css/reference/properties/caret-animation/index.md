---
title: "`caret-animation` CSS property"
short-title: caret-animation
slug: Web/CSS/Reference/Properties/caret-animation
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

{{SeeCompatTable}}

Die **`caret-animation`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um das Blinkverhalten des **Einfüge-Carets** zu aktivieren oder zu deaktivieren. Dies ist der sichtbare Marker, der in editierbaren Elementen erscheint, um anzuzeigen, wo das nächste Zeichen eingefügt oder gelöscht wird.

Die `caret-animation`-Eigenschaft kann auch als Teil der {{cssxref("caret")}} Kurzform-Eigenschaft festgelegt werden.

> [!NOTE]
> Wenn Sie eine benutzerdefinierte Animation auf den Caret anwenden, sollten Sie das standardmäßige Blinken stoppen, damit es nicht mit der Animation interferiert.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Der Caret blinkt ein und aus. Dies ist der Standardwert.
- `manual`
  - : Der Caret blinkt nicht ein und aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `caret-animation`

Dieses Beispiel zeigt den Unterschied zwischen `caret-animation` auf `auto` und `manual` bei einem editierbaren Element.

#### HTML

Der Markup enthält zwei {{htmlelement("p")}}-Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt ist, um sie editierbar zu machen.

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

Das CSS setzt den {{cssxref("caret-color")}} Wert auf `red`. Es gibt dann dem ersten Absatz einen `caret-animation`-Wert von `auto` und dem zweiten Absatz einen Wert von `manual`.

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

Versuchen Sie, die beiden Absätze in den Fokus zu nehmen, um den Unterschied im Caret-Verhalten zu sehen.

### Erstellen einer benutzerdefinierten Caret-Animation

In diesem Beispiel wird eine benutzerdefinierte Caret-Animation auf einen editierbaren Absatz und ein Texteingabefeld angewendet.

#### HTML

Der Markup enthält ein {{htmlelement("p")}}-Element und zwei Text{{htmlelement("input")}}-Elemente. Das `<p>`-Element hat das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt, um es editierbar zu machen. Der Absatz und das erste Texteingabefeld haben eine `class` von `custom-caret` gesetzt.

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

Wir definieren zunächst einen Satz von {{cssxref("@keyframes")}}, die die {{cssxref("caret-color")}} von `transparent` zu `darkblue` ändern.

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

Dann stylen wir das `<p>` und das erste `<input>` mit der benutzerdefinierten `@keyframes`-Animation, einer {{cssxref("caret-color")}} und einem `caret-animation`-Wert von `manual`, um das standardmäßige Caret-Blinkverhalten auszuschalten.

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

Versuchen Sie, die ersten beiden Elemente in den Fokus zu nehmen, um zu sehen, wie die benutzerdefinierte Caret-Animation aussieht. Um es mit dem standardmäßigen blinkenden Caret zu vergleichen, können Sie das dritte Element in den Fokus nehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}, {{cssxref("caret-shape")}}
- {{cssxref("caret")}} Kurzform
- [CSS basic user interface](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul

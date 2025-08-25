---
title: caret-animation
slug: Web/CSS/caret-animation
l10n:
  sourceCommit: 9cbfa7fc0051724913e92958b712425db77291a8
---

{{SeeCompatTable}}

Die **`caret-animation`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um das Blinken des **Einfüge-Cursors** zu aktivieren oder zu deaktivieren. Der Cursor ist das sichtbare Zeichen, das in editierbaren Elementen erscheint, um anzuzeigen, wo das nächste Zeichen eingefügt oder gelöscht wird.

Wenn Sie eine benutzerdefinierte Animation auf den Cursor anwenden, sollten Sie das standardmäßige Blinken deaktivieren, damit es die Animation nicht stört.

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

Die Eigenschaft `caret-animation` wird als eines der unten aufgeführten Schlüsselwörter festgelegt.

- `auto`
  - : Der Cursor blinkt ein und aus. Dies ist der Standardwert.
- `manual`
  - : Der Cursor blinkt nicht.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `caret-animation`

Dieses Beispiel zeigt den Unterschied zwischen `caret-animation` auf `auto` und `manual` an einem editierbaren Element.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut, um sie editierbar zu machen.

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

Das CSS setzt den Wert von {{cssxref("caret-color")}} auf `red`. Dann wird dem ersten Paragraphen ein `caret-animation` Wert von `auto` und dem zweiten Paragraphen ein `caret-animation` Wert von `manual` zugewiesen.

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

#### Resultat

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('caret-animation-basic', 'auto', 100)}}

Versuchen Sie, die beiden Absätze zu fokussieren, um den Unterschied im Cursorverhalten zu sehen.

### Erstellen einer benutzerdefinierten Cursoranimation

In diesem Beispiel wird eine benutzerdefinierte Cursoranimation auf einen editierbaren Paragraphen und ein Texteingabefeld angewendet.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element und zwei Text {{htmlelement("input")}}-Elemente. Das `<p>`-Element hat das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut, um es editierbar zu machen. Der Paragraph und das erste Texteingabefeld haben eine `class` mit dem Wert `custom-caret`.

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

Wir definieren zuerst eine Reihe von {{cssxref("@keyframes")}}, die die {{cssxref("caret-color")}} von `transparent` zu `darkblue` ändern.

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

Dann gestalten wir das `<p>` und das erste `<input>` mit der benutzerdefinierten `@keyframes` Animation, einer {{cssxref("caret-color")}} und einem `caret-animation` Wert von `manual`, um das Standard-Blinkverhalten des Cursors auszuschalten.

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

#### Resultat

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('caret-aniamtion-custom', 'auto', 260)}}

Versuchen Sie, die ersten beiden Elemente zu fokussieren, um die benutzerdefinierte Cursoranimation zu sehen. Um sie mit dem standardmäßigen blinkenden Cursor zu vergleichen, fokussieren Sie das dritte Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}
- [CSS grundlegendes Benutzeroberflächenmodul](/de/docs/Web/CSS/CSS_basic_user_interface) modul

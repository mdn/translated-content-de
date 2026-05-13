---
title: "`caret-animation` CSS property"
short-title: caret-animation
slug: Web/CSS/Reference/Properties/caret-animation
l10n:
  sourceCommit: 00da2fc19d0c8c7cd2e91c78cf55e204cd94cf2b
---

{{SeeCompatTable}}

Die **`caret-animation`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um das Blinken des **Einfüge-Cursors** zu aktivieren oder zu deaktivieren. Der Einfüge-Cursor ist der sichtbare Marker, der in bearbeitbaren Elementen erscheint und anzeigt, wo das nächste Zeichen eingefügt oder gelöscht wird.

Die `caret-animation` Eigenschaft kann auch als Teil der {{cssxref("caret")}} Kurzschreibweise gesetzt werden.

> [!NOTE]
> Beim Anwendung einer benutzerdefinierten Animation auf den Cursor sollten Sie das standardmäßige Blinken stoppen, damit es die Animation nicht stört.

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

Die `caret-animation` Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben.

- `auto`
  - : Der Cursor blinkt an und aus. Dies ist der Standardwert (initialer Wert).
- `manual`
  - : Der Cursor blinkt nicht an und aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `caret-animation`

Dieses Beispiel zeigt den Unterschied zwischen der Einstellung von `caret-animation` auf `auto` und `manual` bei einem bearbeitbaren Element.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}} Elemente mit der [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Einstellung, um sie bearbeitbar zu machen.

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

Das CSS setzt den {{cssxref("caret-color")}} Wert auf `red`. Es gibt dann dem ersten Absatz einen `caret-animation` Wert von `auto` und dem zweiten Absatz einen Wert von `manual`.

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

Versuchen Sie, die beiden Absätze zu fokussieren, um den Unterschied im Cursorverhalten zu sehen.

### Erstellen einer benutzerdefinierten Cursoranimation

In diesem Beispiel wird eine benutzerdefinierte Cursoranimation auf einen bearbeitbaren Absatz und ein Texteingabefeld angewendet.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} Element und zwei Text {{htmlelement("input")}} Elemente. Das `<p>` Element hat das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt, um es bearbeitbar zu machen. Der Absatz und das erste Texteingabefeld haben die `class` `custom-caret` gesetzt.

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

Zuerst definieren wir eine Reihe von {{cssxref("@keyframes")}}, die die {{cssxref("caret-color")}} von `transparent` zu `darkblue` ändern.

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

Versuchen Sie, die ersten beiden Elemente zu fokussieren, um die benutzerdefinierte Cursoranimation zu sehen. Um sie mit dem standardmäßig blinkenden Cursor zu vergleichen, können Sie das dritte Element fokussieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}, {{cssxref("caret-shape")}}
- {{cssxref("caret")}} Kurzschreibweise
- [CSS Basic User Interface](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul

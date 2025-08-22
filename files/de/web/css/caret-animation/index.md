---
title: caret-animation
slug: Web/CSS/caret-animation
l10n:
  sourceCommit: 7a146b52b4ba03be98075668d50490872c78fd12
---

Die **`caret-animation`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um das Blinkverhalten des **Einfüge-Caret** zu aktivieren oder zu deaktivieren, der sichtbare Marker, der in bearbeitbaren Elementen erscheint, um anzuzeigen, wo das nächste Zeichen eingefügt oder gelöscht wird.

Wenn Sie eine benutzerdefinierte Animation auf den Caret anwenden, sollten Sie das standardmäßige Blinken stoppen, damit es nicht mit der Animation interferiert.

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

Die Eigenschaft `caret-animation` wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

- `auto`
  - : Der Caret blinkt ein und aus. Dies ist der Standard- (Initial-) Wert.
- `manual`
  - : Der Caret blinkt nicht ein und aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `caret-animation`

Dieses Beispiel zeigt den Unterschied, wenn `caret-animation` auf `auto` versus `manual` bei einem bearbeitbaren Element gesetzt ist.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um sie bearbeitbar zu machen.

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

Das CSS setzt den Wert von {{cssxref("caret-color")}} auf `red`. Es gibt dann dem ersten Absatz einen `caret-animation`-Wert von `auto` und dem zweiten Absatz einen Wert von `manual`.

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

Versuchen Sie, auf die beiden Absätze zu fokussieren, um den Unterschied im Caret-Verhalten zu sehen.

### Erstellen einer benutzerdefinierten Caret-Animation

In diesem Beispiel wird eine benutzerdefinierte Caret-Animation auf einen bearbeitbaren Absatz und ein Texteingabefeld angewendet.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element und zwei Text-{{htmlelement("input")}}-Elemente. Das `<p>`-Element hat das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut gesetzt, um es bearbeitbar zu machen. Der Absatz und das erste Texteingabefeld haben eine `class` von `custom-caret` gesetzt.

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

Dann stylen wir das `<p>`- und das erste `<input>`-Element mit der benutzerdefinierten `@keyframes`-Animation, einem {{cssxref("caret-color")}} und einem `caret-animation`-Wert von `manual`, um das standardmäßige Caret-Blinkverhalten auszuschalten.

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

Versuchen Sie, die ersten beiden Elemente zu fokussieren, um die benutzerdefinierte Caret-Animation zu sehen. Um sie mit dem standardmäßigen blinkenden Caret zu vergleichen, können Sie das dritte Element fokussieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}
- [CSS-Basismodul der Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)

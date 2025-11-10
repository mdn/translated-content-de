---
title: caret-animation
slug: Web/CSS/Reference/Properties/caret-animation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`caret-animation`**-Eigenschaft in [CSS](/de/docs/Web/CSS) wird verwendet, um das Blinken des **Einfügemarkers** zu aktivieren oder zu deaktivieren. Der Einfügemarker ist das sichtbare Zeichen in editierbaren Elementen, das anzeigt, wo das nächste Zeichen eingefügt oder gelöscht wird.

Wenn Sie eine benutzerdefinierte Animation auf den Einfügemarker anwenden, sollten Sie das standardmäßige Blinken deaktivieren, damit es die Animation nicht stört.

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

Die Eigenschaft `caret-animation` wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

- `auto`
  - : Der Einfügemarker blinkt ein- und aus. Dies ist der Standardwert.
- `manual`
  - : Der Einfügemarker blinkt nicht ein- und aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `caret-animation`

Dieses Beispiel zeigt den Unterschied zwischen `caret-animation` auf `auto` und `manual` bei einem editierbaren Element.

#### HTML

Der Markup enthält zwei {{htmlelement("p")}}-Elemente mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um sie editierbar zu machen.

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

Das CSS setzt den {{cssxref("caret-color")}}-Wert auf `red`. Es gibt dem ersten Absatz einen `caret-animation`-Wert von `auto` und dem zweiten Absatz einen `caret-animation`-Wert von `manual`.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample('caret-animation-basic', 'auto', 100)}}

Versuchen Sie, die beiden Absätze zu fokussieren, um den Unterschied im Verhalten des Einfügemarkers zu sehen.

### Erstellen einer benutzerdefinierten Einfügemarker-Animation

In diesem Beispiel wird eine benutzerdefinierte Einfügemarker-Animation auf einen bearbeitbaren Absatz und ein Texteingabefeld angewendet.

#### HTML

Der Markup enthält ein {{htmlelement("p")}}-Element und zwei Text-{{htmlelement("input")}}-Elemente. Das `<p>`-Element hat das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um es bearbeitbar zu machen. Der Absatz und das erste Texteingabefeld haben eine `class` von `custom-caret`.

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

Dann stylen wir das `<p>`- und das erste `<input>`-Element mit der benutzerdefinierten `@keyframes`-Animation, einer {{cssxref("caret-color")}} und einem `caret-animation`-Wert von `manual`, um das standardmäßige Einfügemarker-Blinkverhalten auszuschalten.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample('caret-aniamtion-custom', 'auto', 260)}}

Versuchen Sie, die ersten beiden Elemente zu fokussieren, um die benutzerdefinierte Einfügemarker-Animation zu sehen. Um den Vergleich mit dem standardmäßigen blinkenden Einfügemarker zu sehen, können Sie das dritte Element fokussieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}, {{cssxref("caret-shape")}}
- {{cssxref("caret")}} abgekürzt
- [CSS basic user interface](/de/docs/Web/CSS/Guides/Basic_user_interface) Modul

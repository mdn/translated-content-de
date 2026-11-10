---
title: "`caret-animation` CSS property"
short-title: caret-animation
slug: Web/CSS/Reference/Properties/caret-animation
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`caret-animation`** wird verwendet, um das Blinken der **Einfügemarke** zu aktivieren oder zu deaktivieren. Die Einfügemarke ist die sichtbare Markierung, die in bearbeitbaren Elementen anzeigt, wo das nächste Zeichen eingefügt oder gelöscht wird.

Die Eigenschaft `caret-animation` kann auch als Teil der Kurzschreibweise {{cssxref("caret")}} festgelegt werden.

> [!NOTE]
> Wenn Sie eine benutzerdefinierte Animation auf die Einfügemarke anwenden, sollten Sie das standardmäßige Blinken deaktivieren, damit es die Animation nicht beeinträchtigt.

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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Die Einfügemarke blinkt. Dies ist der Standardwert (Anfangswert).
- `manual`
  - : Die Einfügemarke blinkt nicht.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `caret-animation`

Dieses Beispiel zeigt den Unterschied zwischen den Werten `auto` und `manual` für `caret-animation` bei einem bearbeitbaren Element.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente, die durch das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) bearbeitbar sind.

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

Das CSS setzt den Wert von {{cssxref("caret-color")}} auf `red`. Anschließend erhält der erste Absatz für `caret-animation` den Wert `auto` und der zweite Absatz den Wert `manual`.

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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample('caret-animation-basic', 'auto', 100)}}

Setzen Sie den Fokus nacheinander auf die beiden Absätze, um den Unterschied im Verhalten der Einfügemarke zu sehen.

### Eine benutzerdefinierte Animation der Einfügemarke erstellen

In diesem Beispiel wird eine benutzerdefinierte Animation der Einfügemarke auf einen bearbeitbaren Absatz und ein Texteingabefeld angewendet.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element und zwei {{htmlelement("input")}}-Elemente für Texteingaben. Für das `<p>`-Element ist das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt, damit es bearbeitet werden kann. Dem Absatz und dem ersten Texteingabefeld ist die `class` `custom-caret` zugewiesen.

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

Zunächst definieren wir {{cssxref("@keyframes")}}, die {{cssxref("caret-color")}} von `transparent` zu `darkblue` ändern.

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

Anschließend versehen wir das `<p>`-Element und das erste `<input>`-Element mit der benutzerdefinierten `@keyframes`-Animation und einer {{cssxref("caret-color")}}. Außerdem setzen wir `caret-animation` auf `manual`, um das standardmäßige Blinken der Einfügemarke zu deaktivieren.

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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample('caret-animation-custom', 'auto', 260)}}

Setzen Sie den Fokus nacheinander auf die ersten beiden Elemente, um die benutzerdefinierte Animation der Einfügemarke zu sehen. Zum Vergleich mit der standardmäßig blinkenden Einfügemarke können Sie den Fokus auf das dritte Element setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("caret-color")}}, {{cssxref("caret-shape")}}
- Die Kurzschreibweise {{cssxref("caret")}}
- Modul [CSS-Grundlagen der Benutzeroberfläche](/de/docs/Web/CSS/Guides/Basic_user_interface)

---
title: Anleitung, um einen Button beim Hover zu verblassen
short-title: Einen Button beim Hover verblassen lassen
slug: Learn_web_development/Howto/Solve_CSS_problems/Transition_button
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

In diesem Leitfaden erfahren Sie, wie Sie einen sanften Übergang zwischen zwei Farben erreichen können, wenn Sie über einen Button fahren.

In unserem Button-Beispiel können wir den Hintergrund unseres Buttons ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` definieren. Wenn Sie jedoch über den Button fahren, wird die Hintergrundfarbe schlagartig zur neuen Farbe wechseln. Um einen sanfteren Übergang zwischen den beiden zu schaffen, können wir CSS-Übergänge verwenden.

## Verwendung von Übergängen

Nachdem Sie die gewünschte Farbe für den Hover-Zustand hinzugefügt haben, fügen Sie die Eigenschaft {{cssxref("transition")}} zu den Regeln für den Button hinzu. Für einen einfachen Übergang ist der Wert von `transition` der Name der Eigenschaft oder Eigenschaften, auf die dieser Übergang angewendet werden soll, sowie die Zeit, die der Übergang dauern soll.

Für die Pseudo-Klassen `:active` und `:focus` wird die Eigenschaft {{cssxref("transition")}} auf none gesetzt, damit der Button beim Klicken direkt in den aktiven Zustand springt.

Im Beispiel dauert der Übergang 1 Sekunde, Sie können versuchen, dies zu ändern, um den Unterschied zu sehen, den eine Änderung der Geschwindigkeit bewirkt.

```html live-sample___transition-button
<div class="wrapper">
  <button class="fade">Hover over me</button>
</div>
```

```css hidden live-sample___transition-button
.wrapper {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 140%;
  cursor: pointer;
}

.fade:focus,
.fade:active {
  background-color: black;
}
```

```css live-sample___transition-button
.fade {
  background-color: #db1f48;
  color: white;
  transition: background-color 1s;
}

.fade:hover {
  background-color: #004369;
}

.fade:focus,
.fade:active {
  background-color: black;
  transition: none;
}
```

{{EmbedLiveSample("transition-button")}}

> [!NOTE]
> Die Eigenschaft {{cssxref("transition")}} ist eine Kurzform für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, und {{cssxref("transition-timing-function")}}. Besuchen Sie die Seiten für diese Eigenschaften auf MDN, um Möglichkeiten zu finden, Ihre Übergänge anzupassen.

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

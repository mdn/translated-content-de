---
title: Anleitung, um einen Button beim Hover-Effekt verblassen zu lassen
short-title: Einen Button beim Hover-Effekt verblassen lassen
slug: Learn_web_development/Howto/Solve_CSS_problems/Transition_button
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden erfahren Sie, wie Sie einen sanften Übergang zwischen zwei Farben erreichen können, wenn Sie mit dem Mauszeiger über einen Button fahren.

In unserem Button-Beispiel können wir den Hintergrund unseres Buttons ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` definieren. Wenn Sie jedoch über den Button fahren, wird die Hintergrundfarbe sofort auf die neue Farbe umschalten. Um einen sanfteren Übergang zwischen den beiden Farben zu erzeugen, können wir CSS-Transitions verwenden.

## Verwendung von Transitions

Nachdem Sie die gewünschte Farbe für den Hover-Zustand hinzugefügt haben, fügen Sie die {{cssxref("transition")}}-Eigenschaft zu den Regeln für den Button hinzu. Für einen einfachen Übergang ist der Wert von `transition` der Name der Eigenschaft oder Eigenschaften, auf die dieser Übergang angewendet werden soll, sowie die Dauer, die der Übergang dauern soll.

Für die Pseudo-Klassen `:active` und `:focus` wird die {{cssxref("transition")}}-Eigenschaft auf none gesetzt, damit der Button beim Klicken sofort in den aktiven Zustand wechselt.

Im Beispiel dauert die Transition 1 Sekunde, Sie können versuchen, diese zu ändern, um den Unterschied zu sehen, den eine Änderung der Geschwindigkeit ausmacht.

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
> Die {{cssxref("transition")}}-Eigenschaft ist eine Kurzform für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}} und {{cssxref("transition-timing-function")}}. Sehen Sie sich die Seiten zu diesen Eigenschaften auf MDN an, um Möglichkeiten zu finden, Ihre Transitions anzupassen.

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions/Using)

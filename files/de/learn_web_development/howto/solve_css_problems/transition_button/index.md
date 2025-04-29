---
title: "Anleitung: Einen Button beim Hover verblassen lassen"
short-title: Einen Button beim Hover verblassen lassen
slug: Learn_web_development/Howto/Solve_CSS_problems/Transition_button
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Leitfaden erfahren Sie, wie Sie einen sanften Übergang zwischen zwei Farben beim Überfahren eines Buttons mit der Maus erzeugen können.

In unserem Button-Beispiel können wir den Hintergrund unseres Buttons ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` definieren. Allerdings wird der Hintergrund beim Überfahren des Buttons direkt zur neuen Farbe wechseln. Um einen sanfteren Übergang zwischen den beiden Farben zu erstellen, können wir CSS-Übergänge verwenden.

## Verwendung von Übergängen

Nachdem Sie die gewünschte Farbe für den Hover-Zustand hinzugefügt haben, fügen Sie die {{cssxref("transition")}}-Eigenschaft zu den Regeln für den Button hinzu. Für einen einfachen Übergang ist der Wert von `transition` der Name der Eigenschaft oder Eigenschaften, auf die dieser Übergang angewendet werden soll, sowie die Dauer, die der Übergang in Anspruch nehmen soll.

Für die Pseudo-Klassen `:active` und `:focus` ist die {{cssxref("transition")}}-Eigenschaft auf none gesetzt, sodass der Button beim Klicken direkt in den aktiven Zustand wechselt.

Im Beispiel dauert der Übergang 1 Sekunde. Sie können dies ändern, um den Unterschied zu sehen, den eine Änderung der Geschwindigkeit bewirkt.

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
  color: #fff;
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
> Die {{cssxref("transition")}}-Eigenschaft ist eine Abkürzung für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, und {{cssxref("transition-timing-function")}}. Besuchen Sie die Seiten dieser Eigenschaften auf MDN, um Möglichkeiten zur Feinabstimmung Ihrer Übergänge zu finden.

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

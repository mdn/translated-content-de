---
title: Wie man eine Schaltfläche bei Hover verblassen lässt
slug: Learn_web_development/Howto/Solve_CSS_problems/Transition_button
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Leitfaden erfahren Sie, wie Sie bei einem Hover über eine Schaltfläche einen sanften Übergang zwischen zwei Farben gestalten können.

In unserem Schaltflächenbeispiel können wir den Hintergrund unserer Schaltfläche ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` festlegen. Das Überfahren der Schaltfläche führt jedoch dazu, dass die Hintergrundfarbe sofort zur neuen Farbe wechselt. Um einen sanfteren Übergang zwischen den beiden zu schaffen, können wir CSS-Übergänge verwenden.

## Verwendung von Übergängen

Nachdem Sie die gewünschte Farbe für den Hover-Zustand hinzugefügt haben, fügen Sie die {{cssxref("transition")}} Eigenschaft zu den Regeln für die Schaltfläche hinzu. Für einen einfachen Übergang ist der Wert von `transition` der Name der Eigenschaft oder Eigenschaften, auf die dieser Übergang angewendet werden soll, und die Zeit, die der Übergang dauern soll.

Für die Pseudo-Klassen `:active` und `:focus` ist die {{cssxref("transition")}} Eigenschaft auf none gesetzt, sodass die Schaltfläche beim Klicken sofort in den aktiven Zustand übergeht.

Im Beispiel dauert der Übergang 1 Sekunde; Sie können versuchen, dies zu ändern, um den Unterschied in der Geschwindigkeit zu sehen.

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
> Die {{cssxref("transition")}} Eigenschaft ist eine Kurzform für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, und {{cssxref("transition-timing-function")}}. Sehen Sie sich die Seiten zu diesen Eigenschaften auf MDN an, um Wege zu finden, Ihre Übergänge anzupassen.

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

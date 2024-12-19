---
title: So lassen Sie einen Button beim Hover verblassen
slug: Learn_web_development/Howto/Solve_CSS_problems/Transition_button
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie beim Überfahren eines Buttons einen sanften Übergang zwischen zwei Farben erreichen können.

In unserem Button-Beispiel können wir den Hintergrund unseres Buttons ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` definieren. Ein bloßes Überfahren des Buttons würde jedoch dazu führen, dass der Hintergrundfarbe sofort die neue Farbe zugewiesen wird. Um einen sanfteren Übergang zwischen den beiden Farben zu schaffen, können wir CSS-Übergänge verwenden.

## Verwendung von Übergängen

Nachdem die gewünschte Farbe für den Hover-Zustand hinzugefügt wurde, fügen Sie die {{cssxref("transition")}}-Eigenschaft zu den Regeln für den Button hinzu. Für einen einfachen Übergang ist der Wert von `transition` der Name der Eigenschaft(en), auf die dieser Übergang angewendet werden soll, sowie die Zeitspanne, die der Übergang dauern soll.

Für die `:active` und `:focus` Pseudo-Klassen wird die {{cssxref("transition")}}-Eigenschaft auf none gesetzt, sodass der Button sofort in den aktiven Zustand wechselt, wenn er geklickt wird.

Im Beispiel dauert der Übergang 1 Sekunde. Sie können versuchen, dies zu ändern, um den Unterschied einer Geschwindigkeitsänderung zu sehen.

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
> Die {{cssxref("transition")}}-Eigenschaft ist eine Kurzform für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}} und {{cssxref("transition-timing-function")}}. Schauen Sie auf den Seiten dieser Eigenschaften auf MDN nach, um Möglichkeiten zu finden, Ihre Übergänge anzupassen.

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

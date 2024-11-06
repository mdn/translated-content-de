---
title: Anleitung zum Ausblenden eines Buttons bei Hover
slug: Learn/CSS/Howto/Transition_button
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie beim Überfahren eines Buttons sanft zwischen zwei Farben wechseln können.

In unserem Button-Beispiel können wir den Hintergrund unseres Buttons ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` definieren. Das Überfahren des Buttons führt jedoch dazu, dass die Hintergrundfarbe direkt auf die neue Farbe wechselt. Um einen sanfteren Übergang zwischen den beiden Farben zu erzielen, können wir CSS-Übergänge verwenden.

## Verwendung von Übergängen

Nachdem Sie die gewünschte Farbe für den Hover-Zustand hinzugefügt haben, fügen Sie die {{cssxref("transition")}} Eigenschaft zu den Regeln für den Button hinzu. Für einen einfachen Übergang ist der Wert von `transition` der Name der Eigenschaft oder der Eigenschaften, auf die dieser Übergang angewendet werden soll, sowie die Dauer, die der Übergang dauern soll.

Für die Pseudo-Klassen `:active` und `:focus` ist die {{cssxref("transition")}} Eigenschaft auf "none" gesetzt, so dass der Button beim Klicken direkt in den aktiven Zustand wechselt.

Im Beispiel dauert der Übergang 1 Sekunde. Sie können versuchen, dies zu ändern, um den Unterschied zu sehen, den eine Änderung der Geschwindigkeit ausmacht.

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
> Die {{cssxref("transition")}} Eigenschaft ist eine Kurzform für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, und {{cssxref("transition-timing-function")}}. Besuchen Sie die Seiten für diese Eigenschaften auf MDN, um Möglichkeiten zur Feinabstimmung Ihrer Übergänge zu finden.

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

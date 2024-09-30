---
title: Anleitung, um einen Button beim Hover-Effekt verblassen zu lassen
slug: Learn/CSS/Howto/Transition_button
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einen sanften Übergang zwischen zwei Farben erstellen können, wenn Sie über einen Button schweben.

In unserem Button-Beispiel können wir den Hintergrund unseres Buttons ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` definieren. Wenn Sie jedoch über den Button schweben, wird die Hintergrundfarbe schlagartig in die neue Farbe übergehen. Um einen sanfteren Wechsel zwischen den beiden zu erzeugen, können wir CSS-Übergänge verwenden.

## Verwendung von Übergängen

Nachdem Sie die gewünschte Farbe für den Hover-Zustand hinzugefügt haben, fügen Sie die {{cssxref("transition")}}-Eigenschaft zu den Regeln für den Button hinzu. Für einen einfachen Übergang ist der Wert von `transition` der Name der Eigenschaft oder Eigenschaften, auf die dieser Übergang angewendet werden soll, und die Zeit, die der Übergang dauern soll.

Für die Pseudo-Klassen `:active` und `:focus` ist die {{cssxref("transition")}}-Eigenschaft auf none gesetzt, sodass der Button beim Klicken schlagartig in den aktiven Zustand wechselt.

Im Beispiel dauert der Übergang 1 Sekunde, Sie können versuchen, dies zu ändern, um den Unterschied zu sehen, den eine Änderung der Geschwindigkeit bewirkt.

{{EmbedGHLiveSample("css-examples/howto/transition-button.html", '100%', 720)}}

> [!NOTE]
> Die {{cssxref("transition")}}-Eigenschaft ist eine Kurzform für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}} und {{cssxref("transition-timing-function")}}. Siehe die Seiten zu diesen Eigenschaften auf MDN, um Möglichkeiten zum Anpassen Ihrer Übergänge zu finden.

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

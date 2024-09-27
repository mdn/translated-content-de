---
title: Wie man einen Button bei Hover verblassen lässt
slug: Learn/CSS/Howto/Transition_button
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einen sanften Übergang zwischen zwei Farben erstellen können, wenn Sie über einen Button hovern.

In unserem Button-Beispiel können wir den Hintergrund unseres Buttons ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` definieren. Wenn Sie jedoch über den Button hovern, wird die Hintergrundfarbe unmittelbar auf die neue Farbe wechseln. Um einen sanfteren Wechsel zwischen den beiden Farben zu erzielen, können wir CSS Transitionen verwenden.

## Verwendung von Transitionen

Nachdem Sie die gewünschte Farbe für den Hover-Zustand hinzugefügt haben, fügen Sie die {{cssxref("transition")}}-Eigenschaft zu den Regeln für den Button hinzu. Für eine einfache Transition ist der Wert von `transition` der Name der Eigenschaft oder der Eigenschaften, auf die diese Transition angewendet werden soll, und die Zeit, die die Transition dauern soll.

Für die Pseudo-Klassen `:active` und `:focus` wird die {{cssxref("transition")}}-Eigenschaft auf none gesetzt, damit der Button beim Klicken sofort in den aktiven Zustand wechselt.

Im Beispiel dauert die Transition 1 Sekunde, Sie können versuchen, diese zu ändern, um den Unterschied zu sehen, den eine Änderung der Geschwindigkeit bewirkt.

{{EmbedGHLiveSample("css-examples/howto/transition-button.html", '100%', 720)}}

> [!NOTE]
> Die {{cssxref("transition")}}-Eigenschaft ist eine verkürzte Schreibweise für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, und {{cssxref("transition-timing-function")}}. Sehen Sie sich die Seiten zu diesen Eigenschaften auf MDN an, um Möglichkeiten zu finden, Ihre Transitionen anzupassen.

## Siehe auch

- [Verwendung von CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

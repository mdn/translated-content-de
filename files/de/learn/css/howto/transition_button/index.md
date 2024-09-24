---
title: So blenden Sie eine Schaltfläche beim Hover ein
slug: Learn/CSS/Howto/Transition_button
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie beim Überfahren einer Schaltfläche ein sanftes Übergangsverhalten zwischen zwei Farben erreichen können.

In unserem Beispiel können wir den Hintergrund unserer Schaltfläche ändern, indem wir eine andere Hintergrundfarbe für die dynamische Pseudo-Klasse `:hover` definieren. Das Überfahren der Schaltfläche wird jedoch dazu führen, dass die Hintergrundfarbe schlagartig zur neuen Farbe wechselt. Um einen sanfteren Übergang zwischen den beiden Farben zu erreichen, können wir CSS-Übergänge verwenden.

## Verwendung von Übergängen

Nachdem Sie die gewünschte Farbe für den Hover-Zustand hinzugefügt haben, fügen Sie der Regel für die Schaltfläche die {{cssxref("transition")}}-Eigenschaft hinzu. Für einen einfachen Übergang ist der Wert von `transition` der Name der Eigenschaft oder der Eigenschaften, auf die dieser Übergang angewendet werden soll, sowie die Zeit, die der Übergang dauern soll.

Für die Pseudo-Klassen `:active` und `:focus` ist die {{cssxref("transition")}}-Eigenschaft auf none gesetzt, sodass die Schaltfläche beim Klicken in den aktiven Zustand springt.

Im Beispiel dauert der Übergang eine Sekunde, Sie können dies ändern, um den Unterschied zu sehen, den eine Änderung der Geschwindigkeit bewirkt.

{{EmbedGHLiveSample("css-examples/howto/transition-button.html", '100%', 720)}}

> [!NOTE]
> Die {{cssxref("transition")}}-Eigenschaft ist eine Kurzform für {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}} und {{cssxref("transition-timing-function")}}. Sehen Sie sich die Seiten zu diesen Eigenschaften auf MDN an, um Möglichkeiten zu finden, Ihre Übergänge zu optimieren.

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

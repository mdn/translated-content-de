---
title: Anleitung zum Hervorheben des ersten Absatzes
slug: Learn/CSS/Howto/Highlight_first_para
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie man den ersten Absatz innerhalb eines Containers hervorhebt.

## Styling des ersten Absatzes

Sie möchten den ersten Absatz größer und fett darstellen. Sie könnten dem ersten Absatz eine Klasse hinzufügen und ihn auf diese Weise auswählen, jedoch ist die Verwendung eines Pseudo-Klassen-Selectors flexibler — das bedeutet, dass Sie den Absatz basierend auf seiner Position im Dokument anvisieren können, und Sie müssen die Klasse nicht manuell verschieben, wenn sich die Quellreihenfolge ändert.

## Verwendung einer Pseudo-Klasse

Eine {{cssxref("pseudo-classes","Pseudo-Klasse")}} wirkt, als hätten Sie eine Klasse angewendet; jedoch wählt CSS anstelle eines Klassen-Selectors basierend auf der Dokumentstruktur aus. Es gibt eine Reihe verschiedener Pseudo-Klassen, die unterschiedliche Dinge auswählen können. In unserem Fall werden wir {{cssxref(":first-child")}} verwenden. Dies wählt das Element aus, das das erste Kind eines Elternteils ist.

```html live-sample___highlight_first_para
<div class="wrapper">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___highlight_first_para
.wrapper p:first-child {
  font-weight: bold;
  font-size: 130%;
}
```

{{EmbedLiveSample("highlight_first_para")}}

Sie können versuchen, im obigen Live-Beispiel {{cssxref(":first-child")}} in {{cssxref(":last-child")}} zu ändern, und Sie werden den letzten Absatz auswählen.

Wann immer Sie etwas in Ihrem Dokument anvisieren müssen, können Sie überprüfen, ob eine der verfügbaren {{cssxref("pseudo-classes")}} dies für Sie tun kann.

## Siehe auch

- Die Referenzseite zu {{cssxref("pseudo-classes")}}.
- [Learn CSS: Pseudo-classes and pseudo-elements.](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

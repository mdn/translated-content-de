---
title: Wie man den ersten Absatz hervorhebt
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Leitfaden erfahren Sie, wie Sie den ersten Absatz innerhalb eines Containers hervorheben können.

## Gestaltung des ersten Absatzes

Sie möchten den ersten Absatz größer und fett machen. Sie könnten dem ersten Absatz eine Klasse hinzufügen und ihn auf diese Weise auswählen, jedoch ist die Verwendung eines Pseudo-Klassen-Selektors flexibler — das bedeutet, dass Sie den Absatz basierend auf seiner Position im Dokument anvisieren können, und Sie müssen die Klasse nicht manuell verschieben, wenn sich die Quellreihenfolge ändert.

## Verwendung einer Pseudo-Klasse

Eine {{cssxref("pseudo-classes","pseudo-class")}} wirkt so, als ob Sie eine Klasse angewendet haben; anstatt jedoch einen Klassen-Selektor zu verwenden, wählt CSS basierend auf der Dokumentstruktur. Es gibt eine Reihe von verschiedenen Pseudo-Klassen, die unterschiedliche Dinge auswählen können. In unserem Fall werden wir {{cssxref(":first-child")}} verwenden. Diese wählt das Element aus, das das erste Kind eines Elternteils ist.

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

Sie können versuchen, {{cssxref(":first-child")}} im obigen Live-Beispiel in {{cssxref(":last-child")}} zu ändern, und Sie werden den letzten Absatz auswählen.

Wann immer Sie etwas in Ihrem Dokument ansprechen müssen, können Sie überprüfen, ob eine der verfügbaren {{cssxref("pseudo-classes")}} es für Sie tun kann.

## Siehe auch

- Die {{cssxref("pseudo-classes")}} Referenzseite.
- [CSS lernen: Pseudo-Klassen und Pseudo-Elemente.](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

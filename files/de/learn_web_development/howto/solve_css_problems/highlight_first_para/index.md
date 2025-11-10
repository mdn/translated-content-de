---
title: Anleitung zum Hervorheben des ersten Absatzes
short-title: Hervorheben des ersten Absatzes
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Leitfaden erfahren Sie, wie Sie den ersten Absatz innerhalb eines Containers hervorheben können.

## Gestaltung des ersten Absatzes

Sie möchten den ersten Absatz größer und fett machen. Sie könnten dem ersten Absatz eine Klasse hinzufügen und ihn auf diese Weise auswählen. Die Verwendung eines Pseudo-Klassen-Selectors ist jedoch flexibler – das bedeutet, dass Sie den Absatz basierend auf seiner Position im Dokument anvisieren können, und Sie müssen die Klasse nicht manuell verschieben, wenn sich die Reihenfolge der Elemente ändert.

## Verwendung einer Pseudo-Klasse

Eine {{cssxref("pseudo-classes","Pseudo-Klasse")}} wirkt so, als hätten Sie eine Klasse angewendet; jedoch wählt CSS aufgrund der Dokumentstruktur aus, anstatt einen Klassen-Selektor zu verwenden. Es gibt eine Reihe verschiedener Pseudo-Klassen, die unterschiedliche Dinge auswählen können. In unserem Fall werden wir {{cssxref(":first-child")}} verwenden. Dies wählt das Element aus, das das erste Kind eines übergeordneten Elements ist.

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

Sie können versuchen, {{cssxref(":first-child")}} im obigen Live-Beispiel zu {{cssxref(":last-child")}} zu ändern, und Sie werden den letzten Absatz auswählen.

Immer wenn Sie etwas in Ihrem Dokument anvisieren müssen, können Sie prüfen, ob eine der verfügbaren {{cssxref("pseudo-classes")}} diese Aufgabe für Sie übernehmen kann.

## Siehe auch

- Die Referenzseite zu {{cssxref("pseudo-classes")}}.
- [CSS lernen: Pseudo-Klassen und Pseudo-Elemente.](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

---
title: Anleitung zum Hervorheben des ersten Absatzes
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie den ersten Absatz innerhalb eines Containers hervorheben können.

## Den ersten Absatz gestalten

Sie möchten den ersten Absatz größer und fett darstellen. Sie könnten dem ersten Absatz eine Klasse hinzufügen und ihn auf diese Weise auswählen. Allerdings ist die Verwendung eines Pseudo-Klassen-Selectors flexibler — das bedeutet, dass Sie den Absatz basierend auf seiner Position im Dokument anvisieren können, und Sie müssen die Klasse nicht manuell verschieben, falls sich die Quellreihenfolge ändert.

## Verwendung einer Pseudo-Klasse

Eine {{cssxref("pseudo-classes","Pseudo-Klasse")}} verhält sich so, als hätten Sie eine Klasse angewendet. Statt jedoch einen Klassen-Selektor zu verwenden, wählt CSS basierend auf der Dokumentstruktur aus. Es gibt eine Reihe verschiedener Pseudo-Klassen, die unterschiedliche Dinge auswählen können. In unserem Fall werden wir {{cssxref(":first-child")}} verwenden. Dies wird das Element auswählen, das das erste Kind eines Elternteils ist.

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

Sie können im obigen Live-Beispiel versuchen, {{cssxref(":first-child")}} in {{cssxref(":last-child")}} zu ändern, und Sie werden den letzten Absatz auswählen.

Immer wenn Sie etwas in Ihrem Dokument anvisieren müssen, können Sie überprüfen, ob eine der verfügbaren {{cssxref("pseudo-classes")}} dies für Sie tun kann.

## Siehe auch

- Die Referenzseite der {{cssxref("pseudo-classes")}}.
- [CSS lernen: Pseudo-Klassen und Pseudo-Elemente.](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

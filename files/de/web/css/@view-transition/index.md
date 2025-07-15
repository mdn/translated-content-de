---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um die aktuellen und Ziel-Dokumente für eine [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) bei einer Navigation zwischen Dokumenten zu aktivieren.

Damit ein Ansichtsübergang zwischen Dokumenten funktioniert, müssen die aktuellen und Ziel-Dokumente der Navigation auch im selben Ursprung sein.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`
  - : Gibt die Wirkung an, die diese At-Regel auf das Verhalten des Ansichtsübergangs des Dokuments haben wird. Mögliche Werte sind:
    - `auto`: Das Dokument wird einem Ansichtsübergang unterzogen, wenn es an einer Navigation teilnimmt, vorausgesetzt, die Navigation erfolgt im selben Ursprung, ohne [cross-origin](/de/docs/Glossary/Cross-origin)-Weiterleitungen, und der [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Falle von `push` oder `replace` muss die Navigation von einem Benutzer initiiert werden, der mit dem Seiteninhalt interagiert, nicht durch eine Browser-Benutzeroberflächenfunktion.

    - `none`: Das Dokument wird keinen Ansichtsübergang durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Transition der Seitenansicht

Die folgenden Codebeispiele zeigen zentrale Konzepte, die in einem Seitenübergangs-Demo verwendet werden.
Das Demo verwendet Ansichtsübergänge zwischen Dokumenten; ein Übergang von einer halben Sekunde, der beim Navigieren zwischen zwei Seiten einer Website auftritt.
Das vollständige Demo finden Sie in der [Ansichtsübergangs-Multi-Page-App-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS sowohl für Ihr aktuelles als auch für Ihr Ziel-Dokument einer Navigation angegeben, um beide in den Ansichtsübergang einzubinden:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel verwenden wir die {{cssxref("@keyframes")}} At-Regel, um zwei Keyframe-Animationen zu definieren, und verwenden die {{cssxref("animation")}} Kurzform-Eigenschaft, um diese Keyframe-Animationen auf die Elemente in den ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

```css
/* Create a custom animation */
@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* Apply the custom animation to the old and new page states */
::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

Sehen Sie sich dieses [Transistions-Multi-Page-App](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::view-transition", "::view-transition")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair()")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)

---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um die aktuellen und Ziel-Dokumente für eine [View-Transition](/de/docs/Web/API/View_Transition_API) im Falle einer dokumentübergreifenden Navigation zu aktivieren.

Damit eine dokumentübergreifende View-Transition funktioniert, müssen sich die aktuellen und Ziel-Dokumente der Navigation auch im gleichen Ursprung befinden.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt an, welche Wirkung diese At-Regel auf das View-Transition-Verhalten des Dokuments haben wird. Mögliche Werte sind:

    - `auto`: Das Dokument wird eine View-Transition durchlaufen, wenn es an einer Navigation teilnimmt, vorausgesetzt, die Navigation erfolgt vom gleichen Ursprung, ohne ursprungsübergreifende Weiterleitungen, und der [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Falle von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt und nicht durch eine Browser-UI-Funktion eingeleitet werden.

    - `none`: Das Dokument wird keine View-Transition durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang der Seitenansicht

Die folgenden Code-Snippets zeigen Schlüsselkonzepte, die in einem Seitenübergang-Demo verwendet werden.
Das Demo verwendet dokumentübergreifende View-Transitions; einen halben Sekunden dauernden Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt.
Für das vollständige Demo, sehen Sie das [View Transitions Multi-Page App Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS sowohl für das aktuelle als auch für das Ziel-Dokument einer Navigation spezifiziert, um beide für die View-Transition zu aktivieren:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel verwenden wir die {{cssxref("@keyframes")}} At-Regel, um zwei Keyframe-Animationen zu definieren, und verwenden die {{cssxref("animation")}} Kurzform-Eigenschaft, um diese Keyframe-Animationen auf die Elemente der ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren wollen.

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

Sehen Sie sich dieses [Übergänge Multi-Page App](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::view-transition", "::view-transition")}}
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)

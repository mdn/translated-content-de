---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: 68b9965b37fc7ac371a20be6fc821fa5acd140f0
---

{{CSSRef}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um das aktuelle und das Ziel-Dokument für eine [View Transition](/de/docs/Web/API/View_Transition_API) im Falle einer dokumentübergreifenden Navigation einzuschalten.

Damit eine dokumentübergreifende View Transition funktioniert, müssen sowohl das aktuelle als auch das Ziel-Dokument der Navigation demselben Ursprung angehören.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Bestimmt den Effekt, den diese At-Regel auf das Verhalten der View Transition des Dokuments hat. Mögliche Werte sind:

    - `auto`: Das Dokument wird eine View Transition durchlaufen, wenn es Teil einer Navigation ist, vorausgesetzt, die Navigation ist gleich-origin, ohne Cross-Origin-Weiterleitungen und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Browser-Benutzeroberflächenfunktion.

    - `none`: Das Dokument wird keine View Transition durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Seitenansicht wechseln

Die folgenden Code-Beispiele zeigen Schlüsselkonzepte, die in einem Seitentransitions-Demo verwendet werden. Das Demo nutzt dokumentübergreifende View Transitions; eine halbe Sekunde dauernde Transition, die beim Navigieren zwischen zwei Seiten einer Website auftritt. Für das vollständige Demo siehe die [View Transitions Multi-Page App Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS sowohl für Ihr aktuelles als auch für Ihr Ziel-Dokument einer Navigation angegeben, um beide für die View Transition einzuschalten:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel verwenden wir die {{cssxref("@keyframes")}} At-Regel, um zwei Keyframe-Animationen zu definieren und verwenden die {{cssxref("animation")}} Kurzschreibweise, um diese Keyframe-Animationen auf die Elemente der ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie sich dieses [Transitions Multi-Page App](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

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
- [CSS At-Regeln](/de/docs/Web/CSS/At-rule)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/At-rule-functions)

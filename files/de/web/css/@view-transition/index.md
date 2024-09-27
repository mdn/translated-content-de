---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um sowohl das aktuelle als auch das Zieldokument für einen [View-Transition](/de/docs/Web/API/View_Transitions_API) bei einer Cross-Dokument-Navigation zu aktivieren.

Damit eine Cross-Dokument-View-Transition funktioniert, müssen sich sowohl das aktuelle als auch das Zieldokument der Navigation auch im gleichen Ursprung befinden.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt an, welchen Effekt diese At-Regel auf das Verhalten der View-Transition des Dokuments haben wird. Mögliche Werte sind:

    - `auto`: Das Dokument wird eine View-Transition durchlaufen, wenn es an einer Navigation beteiligt ist, vorausgesetzt, die Navigation ist gleichursprünglich, ohne Cross-Origin-Redirects, und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Browser-UI-Funktion.

    - `none`: Das Dokument wird keine View-Transition durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Seitenansicht wechseln

Die folgenden Codeausschnitte zeigen Schlüsselkonzepte, die in einem Seitenübergangs-Demo verwendet werden. Das Demo verwendet Cross-Dokument-View-Transitions; ein halbe Sekunde dauernder Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt. Für das vollständige Demo siehe die [View transitions Multi-Page App Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird sowohl im CSS Ihres aktuellen als auch des Zieldokuments einer Navigation angegeben, um beide für den View-Transition zu aktivieren:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel definieren wir zwei {{cssxref("@keyframe")}}-Animationen und verwenden die {{cssxref("animation")}} Kurzform-Eigenschaft, um diese Keyframe-Animationen auf die Elemente in den ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
- [CSS At-Regeln](/de/docs/Web/CSS/At-rule)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/At-rule_functions)

---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{CSSRef}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um das aktuelle und das Ziel-Dokument für einen [View-Übergang](/de/docs/Web/API/View_Transition_API) bei einer Navigationsaktion zwischen Dokumenten zu aktivieren.

Damit ein View-Übergang zwischen verschiedenen Dokumenten funktioniert, müssen das aktuelle und das Ziel-Dokument bei der Navigation denselben Ursprung haben.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt an, welchen Effekt diese at-rule auf das Verhalten des View-Übergangs des Dokuments haben wird. Mögliche Werte sind:

    - `auto`: Das Dokument wird bei der Teilnahme an einer Navigation einem View-Übergang unterzogen, vorausgesetzt die Navigation hat denselben Ursprung, erfolgt ohne originübergreifende Weiterleitungen und der [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Bei `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden und nicht durch eine Browser-UI-Funktion.

    - `none`: Das Dokument wird keinem View-Übergang unterzogen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang der Seitenansicht

Die folgenden Code-Beispiele zeigen die wichtigsten Konzepte, die in einem Seitenübergang-Demo verwendet werden.
Das Demo verwendet dokumentübergreifende View-Übergänge; ein halbe Sekunde dauernder Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt.
Für das vollständige Demo siehe das [View-Übergänge-Mehrseiten-App-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` at-rule wird im CSS sowohl für das aktuelle als auch das Ziel-Dokument einer Navigation angegeben, um beide in den View-Übergang einzubeziehen:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` at-rule verwenden wir die {{cssxref("@keyframes")}} at-rule, um zwei Keyframe-Animationen zu definieren und die {{cssxref("animation")}} Kurzformeigenschaft, um diese Keyframe-Animationen auf die Elemente auf den ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie sich dieses [Übergangs-Mehrseiten-App](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

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
- [CSS At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Rule-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)

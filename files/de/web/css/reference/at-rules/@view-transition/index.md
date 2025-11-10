---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um die aktuellen und Ziel-Dokumente für eine [Ansichtstransition](/de/docs/Web/API/View_Transition_API) einzubeziehen, im Fall einer übergreifenden Dokumentennavigation.

Damit eine übergreifende Dokumentenansichtstransition funktioniert, müssen sich die aktuellen und Ziel-Dokumente der Navigation auch im selben Ursprung befinden.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Bestimmt den Effekt, den diese At-Regel auf das View-Transition-Verhalten des Dokuments hat. Mögliche Werte sind:

    - `auto`: Das Dokument wird eine Ansichtstransition durchlaufen, wenn es an einer Navigation teilnimmt, vorausgesetzt, die Navigation ist gleich-origin, ohne cross-origin Weiterleitungen, und der [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden und nicht durch eine Browser-UI-Funktion.

    - `none`: Das Dokument wird keine Ansichtstransition durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang der Seitenansicht

Die folgenden Codebeispiele zeigen Schlüsselkonzepte, die in einem Seitenübergangs-Demo verwendet werden.
Das Demo nutzt übergreifende Dokumentenansichtstransitionen; einen halben Sekundenübergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt.
Für das vollständige Demo siehe das [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS für sowohl das aktuelle als auch das Ziel-Dokument einer Navigation angegeben, um beide für die Ansichtstransition zu aktivieren:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel verwenden wir die {{cssxref("@keyframes")}} At-Regel, um zwei Keyframe-Animationen zu definieren, und verwenden die {{cssxref("animation")}} Kurzform-Eigenschaft, um diese Keyframe-Animationen auf die Elemente in den ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten, die wir animieren möchten, anzuwenden.

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
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair()")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [CSS At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)

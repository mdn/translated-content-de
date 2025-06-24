---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um die aktuellen und Ziel-Dokumente für einen [View-Transition](/de/docs/Web/API/View_Transition_API) bei einer Navigation zwischen Dokumenten einzuschließen.

Damit eine View-Transition zwischen Dokumenten funktioniert, müssen sich die aktuellen und Ziel-Dokumente der Navigation auch im selben Origin befinden.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt an, welche Wirkung diese At-Regel auf das View-Transition-Verhalten des Dokuments haben wird. Mögliche Werte sind:

    - `auto`: Das Dokument wird eine View-Transition durchlaufen, wenn es an einer Navigation beteiligt ist, vorausgesetzt, die Navigation hat denselben Origin, ohne Cross-Origin-Umleitungen, und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Falle von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Browser-Oberflächenfunktion.

    - `none`: Das Dokument wird keine View-Transition durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang der Seitenansicht

Die folgenden Code-Snippets zeigen Schlüsselkonzepte, die in einer Seitentransition-Demo verwendet werden. Die Demo verwendet View-Transitions zwischen Dokumenten; ein halbesekündiger Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt. Die vollständige Demo finden Sie im [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird sowohl im CSS für Ihre aktuellen als auch Ziel-Dokumente einer Navigation angegeben, um sie beide in die View-Transition einzuschließen:

```css
@view-transition {
  navigation: auto;
}
```

Neben der `@view-transition` At-Regel verwenden wir die {{cssxref("@keyframes")}} At-Regel, um zwei Keyframe-Animationen zu definieren, und verwenden die {{cssxref("animation")}} Kurzschreibweise, um diese Keyframe-Animationen auf die Elemente in den ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie sich diese [transitions multi-page app](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

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

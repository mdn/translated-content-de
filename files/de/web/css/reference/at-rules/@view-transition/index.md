---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) wird verwendet, um das aktuelle und das Ziel-Dokument für einen [View-Übergang](/de/docs/Web/API/View_Transition_API) zu aktivieren, im Falle einer Navigation über Dokumentgrenzen hinweg.

Damit ein View-Übergang über Dokumentgrenzen hinweg funktioniert, müssen sich das aktuelle und das Ziel-Dokument der Navigation auch auf demselben Ursprung befinden.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`
  - : Gibt den Effekt an, den diese At-Regel auf das View-Übergangsverhalten des Dokuments haben wird. Mögliche Werte sind:
    - `auto`: Das Dokument wird einen View-Übergang durchlaufen, wenn es an einer Navigation beteiligt ist, vorausgesetzt, die Navigation ist gleich-origin, ohne Cross-Origin-Weiterleitungen, und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch ein UI-Feature des Browsers.

    - `none`: Das Dokument wird keinen View-Übergang durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang der Seitenansicht

Die folgenden Code-Schnipsel zeigen die wichtigsten Konzepte, die in einem Demo zum Seitenübergang verwendet werden.
Das Demo verwendet View-Übergänge über Dokumentgrenzen hinweg; ein halbe Sekunde dauernder Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt.
Für das vollständige Demo siehe das [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS sowohl für Ihre aktuellen als auch für Ihre Ziel-Dokumente einer Navigation angegeben, um sie beide in den View-Übergang einzubeziehen:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel verwenden wir die {{cssxref("@keyframes")}} At-Regel, um zwei Keyframe-Animationen zu definieren, und verwenden die {{cssxref("animation")}} Kurzform-Eigenschaft, um diese Keyframe-Animationen auf die Elemente der ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie sich dieses [transitions multi-page app](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

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
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rules)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)

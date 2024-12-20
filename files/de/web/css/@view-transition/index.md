---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{CSSRef}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um das aktuelle und das Zieldokument für einen [View-Übergang](/de/docs/Web/API/View_Transition_API) im Falle einer Navigation zwischen Dokumenten zu aktivieren.

Damit ein View-Übergang zwischen Dokumenten funktioniert, müssen das aktuelle und das Zieldokument der Navigation auch denselben Ursprung haben.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt an, welche Wirkung diese At-Regel auf das Verhalten des Dokument-Übergangs hat. Mögliche Werte sind:

    - `auto`: Das Dokument wird einen View-Übergang durchlaufen, wenn es an einer Navigation teilnimmt, vorausgesetzt die Navigation ist gleichursprünglich, ohne Cross-Origin-Weiterleitungen, und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Funktion der Browser-Benutzeroberfläche.

    - `none`: Das Dokument wird keinen View-Übergang durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang des Seiten-View

Die folgenden Codebeispiele zeigen die Schlüsselkonzepte, die in einem Demo für Seitenübergänge verwendet werden. Das Demo nutzt Übergänge zwischen Dokumenten; ein halbe Sekunde dauernder Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt. Für das vollständige Demo siehe das [View-Übergänge Mehrseiten-App-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS sowohl für Ihre aktuellen als auch für die Zieldokumente einer Navigation spezifiziert, um beide in den View-Übergang einzubeziehen:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel definieren wir zwei {{cssxref("@keyframe")}} Animationen und verwenden die {{cssxref("animation")}} Kurzschreibweise, um diese Keyframe-Animationen auf die Elemente der ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie sich dieses [Transitions Mehrseiten-App](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

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

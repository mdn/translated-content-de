---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um die aktuellen und Ziel-Dokumente für einen [View-Übergang](/de/docs/Web/API/View_Transitions_API) anzumelden, falls eine Navigation zwischen Dokumenten stattfindet.

Damit ein View-Übergang zwischen Dokumenten funktioniert, müssen sich das aktuelle und das Ziel-Dokument der Navigation ebenfalls am selben Ursprung befinden.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt an, welchen Effekt diese At-Regel auf das Verhalten des View-Übergangs des Dokuments hat. Mögliche Werte sind:

    - `auto`: Das Dokument wird einen View-Übergang durchlaufen, wenn es an einer Navigation teilnimmt, vorausgesetzt, die Navigation ist gleich Herkunft, ohne Cross-Origin-Weiterleitungen, und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt und nicht durch eine Browser-UI-Funktion initiiert werden.

    - `none`: Das Dokument wird keinen View-Übergang durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Seitenansichtsübergang

Die folgenden Codebeispiele zeigen Schlüsselaspekte, die in einem Seitentransitions-Demo verwendet werden.
Das Demo verwendet View-Übergänge zwischen Dokumenten; ein Übergang von einer halben Sekunde, der auftritt, wenn zwischen zwei Seiten einer Website navigiert wird.
Für das vollständige Demo siehe das [View-Übergänge Multi-Page App Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel ist sowohl im CSS Ihres aktuellen als auch des Ziel-Dokuments einer Navigation spezifiziert, um beide für den View-Übergang anzumelden:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel definieren wir zwei {{cssxref("@keyframe")}}-Animationen und verwenden die {{cssxref("animation")}} Kurzform-Eigenschaft, um diese Keyframe-Animationen auf die Elemente auf den ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie sich dieses [Transitions-Multi-Page App](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

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
- [Funktionen der CSS At-Regel](/de/docs/Web/CSS/At-rule_functions)

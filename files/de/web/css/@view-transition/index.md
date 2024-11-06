---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um das aktuelle und das Ziel-Dokument für einen [Ansichtsübergang](/de/docs/Web/API/View_Transitions_API) im Falle einer Navigation über Dokumentengrenzen hinweg anzumelden.

Damit ein Ansichtsübergang zwischen Dokumenten funktioniert, müssen das aktuelle und das Zieldokument der Navigation ebenfalls aus demselben Ursprung stammen.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt an, welche Wirkung diese At-Regel auf das Verhalten des Ansichtsübergangs des Dokuments hat. Mögliche Werte sind:

    - `auto`: Das Dokument wird einen Ansichtsübergang durchlaufen, wenn es an einer Navigation beteiligt ist, vorausgesetzt, die Navigation ist gleich-origin, ohne ursprungsübergreifende Weiterleitungen, und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Falle von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Browser-Oberflächenfunktion.

    - `none`: Das Dokument wird keinen Ansichtsübergang durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang der Seitenansicht

Die folgenden Codebeispiele zeigen die wichtigsten Konzepte, die in einer Seitenübergangs-Demo verwendet werden.
Die Demo verwendet Dokumenten-übergreifende Ansichtsübergänge; einen halben Sekundenübergang, der auftritt, wenn zwischen zwei Seiten einer Website navigiert wird.
Für die vollständige Demo siehe das [View Transitions Multi-Page App Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS sowohl für Ihre aktuellen als auch Ziel-Dokumente einer Navigation angegeben, um beide in den Ansichtsübergang einzubinden:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel definieren wir zwei {{cssxref("@keyframe")}}-Animationen und verwenden die {{cssxref("animation")}}-Kurzschreibweise, um diese Keyframe-Animationen auf die Elemente in den ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie sich diese [Transitions Multi-Page App](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

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
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/At-rule-functions)

---
title: "@view-Übergang"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um das aktuelle sowie das Ziel-Dokument für einen [Ansichtsübergang](/de/docs/Web/API/View_Transitions_API) bei einer Navigation zwischen Dokumenten zu aktivieren.

Für einen Ansichtsübergang zwischen Dokumenten müssen sowohl das aktuelle als auch das Ziel-Dokument der Navigation unter derselben Herkunft liegen.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt den Effekt an, den diese At-Regel auf das Ansichtsübergangsverhalten des Dokuments hat. Mögliche Werte sind:

    - `auto`: Das Dokument wird einem Ansichtsübergang unterzogen, wenn es an einer Navigation teilnimmt, vorausgesetzt, die Navigation ist gleichherkunftlich, ohne cross-origin Weiterleitungen, und sein {{domxref("NavigateEvent.navigationType", "navigationType")}} ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Browser-UI-Funktion.

    - `none`: Das Dokument wird keinem Ansichtsübergang unterzogen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang der Seitenansicht

Die folgenden Code-Snippets zeigen Schlüsselkonzepte, die in einem Seitenübergangsdemo verwendet werden. Das Demo nutzt Ansichtsübergänge zwischen Dokumenten; ein halbe Sekunde dauernder Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt. Für das vollständige Demo siehe das [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die @view-transition-At-Regel wird sowohl im aktuellen als auch im Ziel-Dokument einer Navigation im CSS spezifiziert, um beide für den Ansichtsübergang zu aktivieren:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur @view-transition-At-Regel definieren wir zwei {{cssxref("@keyframe")}}-Animationen und verwenden die {{cssxref("animation")}}-Kurzform-Eigenschaft, um diese Keyframe-Animationen auf die Elemente der ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten, die wir animieren möchten, anzuwenden.

```css
/* Erstellen einer benutzerdefinierten Animation */
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

/* Anwenden der benutzerdefinierten Animation auf alte und neue Seitenzustände */
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

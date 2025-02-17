---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@view-transition`**- [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um sowohl das aktuelle als auch das Zieldokument für eine [View-Transition](/de/docs/Web/API/View_Transition_API) bei einer Navigation zwischen Dokumenten zu aktivieren.

Damit eine View-Transition zwischen Dokumenten funktioniert, müssen sich das aktuelle und das Zieldokument der Navigation ebenfalls auf demselben Ursprung befinden.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt den Effekt an, den diese At-Regel auf das Verhalten der View-Transition des Dokuments hat. Mögliche Werte sind:

    - `auto`: Das Dokument führt eine View-Transition durch, wenn es Teil einer Navigation ist, vorausgesetzt, die Navigation ist gleichursprünglich, ohne Cross-Origin-Weiterleitungen, und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Funktion der Browser-Benutzeroberfläche.

    - `none`: Das Dokument führt keine View-Transition durch.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergang der Seitenansicht

Die folgenden Codebeispiele zeigen Schlüsselkonzepte, die in einer Demo zu Seitenübergängen verwendet werden.  
Die Demo nutzt View-Transitions zwischen Dokumenten: ein halbe Sekunde dauernder Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt.  
Für die vollständige Demo, siehe [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die At-Regel `@view-transition` wird sowohl im CSS für das aktuelle als auch im CSS für das Zieldokument der Navigation angegeben, um beide für die View-Transition zu aktivieren:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur At-Regel `@view-transition` verwenden wir die {{cssxref("@keyframes")}}-At-Regel, um zwei Keyframe-Animationen zu definieren, und die Kurzform-Eigenschaft {{cssxref("animation")}}, um diese Keyframe-Animationen auf die Elemente der Ausgangsseite ({{cssxref("::view-transition-old()")}}) und der Zielseite ({{cssxref("::view-transition-new()")}}) anzuwenden, die wir animieren wollen.

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

Sehen Sie sich diese [Transitions Multi-Page App](https://mdn.github.io/dom-examples/view-transitions/mpa/)-Demo live an.

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
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/At-rule-functions)

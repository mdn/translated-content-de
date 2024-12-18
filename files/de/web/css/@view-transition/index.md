---
title: "@view-transition"
slug: Web/CSS/@view-transition
l10n:
  sourceCommit: 8583c1238d297609d6db0623aba9070d5c57f330
---

{{CSSRef}}

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um das aktuelle und das Ziel-Dokument für einen [View-Übergang](/de/docs/Web/API/View_Transitions_API) bei einer Dokument-übergreifenden Navigation anzumelden.

Damit ein Dokument-übergreifender View-Übergang funktioniert, müssen das aktuelle und das Ziel-Dokument der Navigation auch auf demselben Ursprung sein.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Deskriptoren

- `navigation`

  - : Gibt den Effekt an, den diese At-Regel auf das View-Übergangsverhalten des Dokuments haben wird. Mögliche Werte sind:

    - `auto`: Das Dokument wird einen View-Übergang durchlaufen, wenn es an einer Navigation beteiligt ist, vorausgesetzt, die Navigation ist gleich-originig, ohne cross-origin Umleitungen, und ihr [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Falle von `push` oder `replace` muss die Navigation von einem Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Browser-UI-Funktion.

    - `none`: Das Dokument wird keinen View-Übergang durchlaufen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Seitenansicht übergehen

Die folgenden Code-Snippets zeigen Schlüsselkonzepte, die in einer Seitenübergangs-Demo verwendet werden. Die Demo verwendet Dokument-übergreifende View-Übergänge; ein halbe Sekunde dauernder Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt. Für die vollständige Demo siehe das [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS sowohl für Ihr aktuelles als auch für das Ziel-Dokument einer Navigation angegeben, um beide für den View-Übergang anzumelden:

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

Sehen Sie sich dieses [transitions multi-page app](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live an.

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

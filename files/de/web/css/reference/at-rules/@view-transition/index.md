---
title: "`@view-transition` CSS at-rule"
short-title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um die aktuellen und Ziel-Dokumente für eine [View-Transition](/de/docs/Web/API/View_Transition_API) bei einer Dokumenten-übergreifenden Navigation zu aktivieren.

Für eine Dokumenten-übergreifende View-Transition müssen sich das aktuelle und das Ziel-Dokument der Navigation auf demselben Ursprung befinden.

## Syntax

```css
@view-transition {
  navigation: auto | none;
  types: none | <custom-ident>#;
}
```

### Deskriptoren

- `navigation`
  - : Ein Schlüsselwort, das die Wirkung dieser Regel auf das Verhalten der Dokumenten-View-Transition angibt. Mögliche Werte sind:
    - `auto`
      - : Das Dokument wird einer View-Transition unterzogen, wenn es an einer Navigation teilnimmt, vorausgesetzt, die Navigation ist [gleich-origin](/de/docs/Web/Security/Defenses/Same-origin_policy), ohne herkunftsübergreifende Weiterleitungen, und sein [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) ist `traverse`, `push` oder `replace`. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Browser-Benutzeroberflächen-Funktion.
    - `none`
      - : Das Dokument wird keiner View-Transition unterzogen.

- `types`
  - : Gibt die View-Transition-[Typen](/de/docs/Web/API/View_Transition_API/Using_types) an, die auf die aktive View-Transition für die aktuellen und Ziel-Dokumente gesetzt werden sollen. Mögliche Werte sind:
    - `<custom-ident>+`
      - : Ein oder mehrere leerzeichengetrennte {{cssxref("&lt;custom-ident>")}} Werte, die die zu setzenden Typen darstellen.
    - `none`
      - : Keine Typen werden festgelegt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übergängende Seitenansicht

Die folgenden Code-Beispiele zeigen Schlüsselkonzepte, die in einem Seiten-Übergangs-Demo verwendet werden. Das Demo verwendet Dokumenten-übergreifende View-Transitions; eine halbe Sekunde Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt. Für das vollständige Demo siehe das [View-Transitions-Multi-Page-App-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition`-Regel wird im CSS sowohl für die aktuellen als auch die Ziel-Dokumente einer Navigation angegeben, um sie beide für die View-Transition zu aktivieren:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition`-Regel verwenden wir die {{cssxref("@keyframes")}}-Regel, um zwei Keyframe-Animationen zu definieren und die {{cssxref("animation")}}-Kurzschrift-Eigenschaft, um diese Keyframe-Animationen auf die Elemente der ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie dieses [Transitions-Multi-Page-App](https://mdn.github.io/dom-examples/view-transitions/mpa/) Demo live.

### Verwenden von View-Transition-Typen

Unser [MPA-Transitions-Typen-Beispiel](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)) demonstriert, wie `types` über `@view-transition` verwendet wird:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

Siehe [Verwendung von Typen mit Dokumenten-übergreifenden View-Transitions über `@view-transition`](/de/docs/Web/API/View_Transition_API/Using_types#using_types_with_cross-document_view_transitions_via_view-transition) für eine detaillierte Erklärung des referenzierten Beispiels.

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
- [Verwendung von View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types)
- [CSS-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS-Regeln-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)

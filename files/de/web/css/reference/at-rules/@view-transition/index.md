---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
l10n:
  sourceCommit: b88f711ce4944f97162d7f1a7bcb8283af06f690
---

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um das aktuelle und das Zieldokument bei einer [Ansichtstransition](/de/docs/Web/API/View_Transition_API) für eine Navigation zwischen Dokumenten anzumelden.

Damit eine Ansichtstransition zwischen Dokumenten funktioniert, müssen das aktuelle und das Zieldokument der Navigation denselben Ursprung haben.

## Syntax

```css
@view-transition {
  navigation: auto | none;
  types: none | <custom-ident>#;
}
```

### Deskriptoren

- `navigation`
  - : Ein Schlüsselwort, das den Effekt dieser At-Regel auf das Verhalten der Ansichtstransition des Dokuments angibt. Mögliche Werte sind:
    - `auto`
      - : Das Dokument wird einer Ansichtstransition unterzogen, wenn es an einer Navigation teilnimmt, sofern die Navigation [same-origin](/de/docs/Web/Security/Defenses/Same-origin_policy) ist, keine Cross-Origin-Redirects enthält und deren [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse`, `push` oder `replace` ist. Im Fall von `push` oder `replace` muss die Navigation durch eine Benutzerinteraktion mit dem Seiteninhalt initiiert werden, nicht durch eine Funktion der Browser-Oberfläche.
    - `none`
      - : Das Dokument wird keiner Ansichtstransition unterzogen.

- `types`
  - : Gibt die [Typen](/de/docs/Web/API/View_Transition_API/Using_types) der Ansichtstransition an, die für die aktive Ansichtstransition des aktuellen und Zieldokuments festgelegt werden sollen. Mögliche Werte sind:
    - `<custom-ident>+`
      - : Eines oder mehrere durch Leerzeichen getrennte {{cssxref("&lt;custom-ident>")}}-Werte, die die festzulegenden Typen darstellen.
    - `none`
      - : Es werden keine Typen festgelegt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Seitenübergang

Die folgenden Codebeispiele zeigen wichtige Konzepte, die in einer Demo zum Seitenübergang verwendet werden.
Die Demo nutzt Übergänge zwischen Dokumenten; ein halbe Sekunde dauerender Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt.
Für die komplette Demo, siehe die [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel ist im CSS sowohl für Ihr aktuelles als auch für Ihr Zieldokument einer Navigation angegeben, um beide für die Ansichtstransition anzumelden:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel verwenden wir die {{cssxref("@keyframes")}} At-Regel, um zwei Keyframe-Animationen zu definieren, und nutzen die Kürzungs-Eigenschaft {{cssxref("animation")}}, um diese Keyframe-Animationen auf die Elemente der ausgehenden ({{cssxref("::view-transition-old()")}}) und eingehenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

### Verwendung von Ansichtstransitionstypen

Unser [MPA transition types example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)) demonstriert, wie `types` über `@view-transition` verwendet wird:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

Sehen Sie sich [Using types with cross-document view transitions via `@view-transition`](/de/docs/Web/API/View_Transition_API/Using_types#using_types_with_cross-document_view_transitions_via_view-transition) für eine ausführliche Erläuterung des referenzierten Beispiels an.

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
- [Using view transition types](/de/docs/Web/API/View_Transition_API/Using_types)
- [CSS At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS At-Regelfunktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)

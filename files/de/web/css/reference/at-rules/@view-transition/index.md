---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

Die **`@view-transition`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um das aktuelle und das Zieldokument für einen [View-Übergang](/de/docs/Web/API/View_Transition_API) zu aktivieren, im Fall einer Navigation zwischen Dokumenten.

Damit ein View-Übergang zwischen Dokumenten funktioniert, müssen das aktuelle und das Zieldokument der Navigation denselben Ursprung haben.

## Syntax

```css
@view-transition {
  navigation: auto | none;
  types: none | <custom-ident>#;
}
```

### Deskriptoren

- `navigation`
  - : Ein Schlüsselwort, das den Effekt dieser At-Regel auf das View-Übergangsverhalten des Dokuments angibt. Mögliche Werte sind:
    - `auto`
      - : Das Dokument wird einen View-Übergang durchlaufen, wenn es an einer Navigation teilnimmt, sofern die Navigation [gleicher Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) ist, ohne Cross-Origin-Weiterleitungen, und der [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse`, `push` oder `replace` ist. Im Fall von `push` oder `replace` muss die Navigation durch eine Interaktion des Benutzers mit dem Seiteninhalt und nicht durch ein Browser-UI-Feature initiiert werden.
    - `none`
      - : Das Dokument wird keinen View-Übergang durchlaufen.

- `types`
  - : Gibt die [Typen](/de/docs/Web/API/View_Transition_API/Using_types) an, die auf den aktiven View-Übergang für das aktuelle und das Zieldokument gesetzt werden sollen. Mögliche Werte sind:
    - `<custom-ident>#`
      - : Einer oder mehrere durch Kommas getrennte {{cssxref("&lt;custom-ident>")}}-Werte, die die zu setzenden Typen darstellen.
    - `none`
      - : Es werden keine Typen gesetzt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Seitenansicht übergang

Die folgenden Codeausschnitte zeigen Schlüsselkonzepte, die in einer Seitenübergangsdemo verwendet werden.
Die Demo verwendet Übergänge zwischen Dokumenten; ein halbe Sekunde dauernder Übergang, der beim Navigieren zwischen zwei Seiten einer Website auftritt.
Für die vollständige Demo siehe das [View-Übergänge Mehrseiten-App-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

Die `@view-transition` At-Regel wird im CSS für sowohl Ihre aktuellen als auch Ihre Zieldokumente einer Navigation spezifiziert, um beide in den View-Übergang einzubeziehen:

```css
@view-transition {
  navigation: auto;
}
```

Zusätzlich zur `@view-transition` At-Regel verwenden wir die {{cssxref("@keyframes")}} At-Regel, um zwei Schlüsselbild-Animationen zu definieren, und verwenden die {{cssxref("animation")}} Kurzform-Eigenschaft, um diese Schlüsselbild-Animationen auf die Elemente in den abgehenden ({{cssxref("::view-transition-old()")}}) und ankommenden ({{cssxref("::view-transition-new()")}}) Seiten anzuwenden, die wir animieren möchten.

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

Sehen Sie diese [Übergänge Mehrseiten-App-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) live.

### Verwendung von View-Übergangstypen

Unser [MPA-Übergangstypen-Beispiel](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)) demonstriert, wie `types` über `@view-transition` verwendet wird:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

Siehe [Verwendung von Typen mit Übergängen zwischen Dokumenten über `@view-transition`](/de/docs/Web/API/View_Transition_API/Using_types#using_types_with_cross-document_view_transitions_via_view-transition) für eine detaillierte Anleitung des referenzierten Beispiels.

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
- [Verwendung von View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [CSS At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS At-Regel Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)

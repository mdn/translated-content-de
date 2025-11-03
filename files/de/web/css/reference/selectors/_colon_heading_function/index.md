---
title: :heading()
slug: Web/CSS/Reference/Selectors/:heading_function
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Die **`:heading()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Funktion repräsentiert alle [Heading-Elemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), die einen durch die `An+B`-Notation berechneten Wert erfüllen. Dies ermöglicht es Ihnen, Elemente auf spezifischen Überschriftsebenen auf einmal zu stylen, anstatt sie einzeln zuzuweisen und zu gestalten.

> [!NOTE]
> Die `:heading()` funktionale Pseudo-Klasse hat dieselbe [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, das heißt, `0-1-0`. So hätte `:heading()` eine Spezifität von `0-1-0`, und `section:heading()` hätte eine Spezifität von `0-1-1`.

## Syntax

```css-nolint
:heading([ <An+B> [, <An+B>]* | even | odd ]) {
  /* ... */
}
```

### Parameter

Die `:heading()` Pseudoklassen-Funktion nimmt eine durch Kommata getrennte Liste von `An+B`-Ausdrücken oder Schlüsselwortwerten, die ein Muster für das Matching von Heading-Elementen beschreiben.

#### Schlüsselwortwerte

- `odd`
  - : Repräsentiert die Heading-Elemente, deren numerische Position ungerade ist: `<h1>`, `<h3>` und `<h5>`.
- `even`
  - : Repräsentiert die Heading-Elemente, deren numerische Position gerade ist: `<h2>`, `<h4>` und `<h6>`.

#### Funktionale Notation

- `<An+B>`
  - : Repräsentiert die Heading-Elemente, deren numerische Position das Muster `An+B` erfüllt, für jeden positiven ganzzahligen oder Nullwert von `n`, wobei:
    - `A` ist eine ganze Zahl als Schrittgröße,
    - `B` ist eine ganze Zahl als Offset,
    - `n` sind alle nicht-negativen ganzen Zahlen, beginnend bei 0.

    Es kann als das `An+B`-te Element einer Liste gelesen werden. `A` und `B` müssen beide {{cssxref("&lt;integer&gt;")}} Werte haben.

## Nutzungshinweise

Die `:heading()` funktionale Pseudo-Klasse matched nur Elemente, die semantisch als Überschriften erkannt werden. Sie matched keine Elemente mit einem [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) Attribut und berücksichtigt auch nicht das ['aria-level'](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) ARIA-Attribut.

## Beispiele

### Verwendung von Schlüsselwortparametern

In diesem Beispiel entspricht das Schlüsselwort `odd` den Überschriften mit ungeraden Ebenen, die `<h1>` und `<h3>` sind. Das Schlüsselwort `even` wird verwendet, um gerade Überschriftsebenen, `<h2>` und `<h4>`, anzuvisieren.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
```

```css
:heading(odd) {
  color: tomato;
}
:heading(even) {
  color: slateblue;
}
```

{{EmbedLiveSample("Keyword_example", "", "215")}}

### Verwendung der `An+B`-Notation

```html
<h1>Science</h1>
<h2>Physics</h2>
<h3>Atomic, molecular, and optical physics</h3>
<h4>Optical physics</h4>
<h5>X-Rays</h5>
<h6>Discovery</h6>
```

```css hidden
main {
  display: flex;
  justify-content: space-around;
}
```

```css
/* Targets headings <h3> and <h4> */
:heading(3, 4) {
  font-weight: 100;
}
/* Targets headings in reverse starting from <h3> */
:heading(-n + 3) {
  color: tomato;
}
/* Targets every third heading starting from <h1> */
:heading(3n + 1) {
  font-style: italic;
}
/* Targets headings after level 5 */
:heading(n + 5) {
  color: slateblue;
}
```

In diesem Beispiel:

- `:heading(3, 4)` matched die `<h3>` und `<h4>` Elemente
- `:heading(-n + 3)` matched Überschriftselemente rückwärts, also `<h3>`, `<h2>`, und `<h1>`
- `:heading(3n + 1)` matched jedes dritte (`3n`) Überschriftselement beginnend mit `<h1>`, also würden `<h1>` und `<h4>` eingeschlossen sein
- `:heading(n + 5)` matched Überschriftselemente beginnend mit `<h5>` und wird `<h6>` einschließen

{{EmbedLiveSample("Functional_notation_example", "", "292")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef(":heading")}}

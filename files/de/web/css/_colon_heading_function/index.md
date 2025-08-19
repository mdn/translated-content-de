---
title: :heading()
slug: Web/CSS/:heading_function
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

Die **`:heading()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)-Funktion repräsentiert alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), die einem Wert entsprechen, der unter Verwendung der `An+B`-Notation berechnet wird. Dies ermöglicht es Ihnen, Elemente auf spezifischen Überschriftenebenen gleichzeitig zu stylen, anstatt sie individuell abzugleichen und zu stylen.

> [!NOTE]
> Die funktionale Pseudoklasse `:heading()` hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, das heißt, `0-1-0`. `:heading()` hätte also eine Spezifität von `0-1-0`, und `section:heading()` hätte eine Spezifität von `0-1-1`.

## Syntax

```css-nolint
:heading([ <An+B> [, <An+B>]* | even | odd ]) {
  /* ... */
}
```

### Parameter

Die `:heading()`-Pseudoklassen-Funktion nimmt eine komma-separierte Liste von `An+B`-Ausdrücken oder Schlüsselwortwerten, die ein Muster zur Übereinstimmung mit Überschriftselementen beschreiben.

#### Schlüsselwortwerte

- `odd`
  - : Repräsentiert die Überschriftselemente, deren numerische Position ungerade ist: `<h1>`, `<h3>`, und `<h5>`.
- `even`
  - : Repräsentiert die Überschriftselemente, deren numerische Position gerade ist: `<h2>`, `<h4>`, und `<h6>`.

#### Funktionale Notation

- `<An+B>`
  - : Repräsentiert die Überschriftselemente, deren numerische Position dem Muster `An+B` entspricht, für jeden positiven Integer oder Nullwert von `n`, wobei:
    - `A` eine ganzzahlige Schrittgröße ist,
    - `B` ein ganzzahliger Offset ist,
    - `n` alle nicht-negativen Integer sind, beginnend bei 0.

    Es kann als das `An+B`-te Element einer Liste gelesen werden. `A` und `B` müssen beide {{cssxref("&lt;integer&gt;")}} Werte haben.

## Anwendungshinweise

Die funktionale Pseudoklasse `:heading()` stimmt nur mit Elementen überein, die semantisch als Überschriften erkannt werden. Sie stimmt nicht mit Elementen mit einem [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)-Attribut überein, noch respektiert sie das ['aria-level'](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) ARIA-Attribut.

## Beispiele

### Verwendung von Schlüsselwortparametern

In diesem Beispiel stimmt das Schlüsselwort `odd` mit Überschriften mit ungeraden Nummern überein, welche `<h1>` und `<h3>` sind. Das Schlüsselwort `even` wird verwendet, um Überschriften mit geraden Nummern zu selektieren, `<h2>` und `<h4>`.

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

- `:heading(3, 4)` stimmt mit den `<h3>` und `<h4>` Elementen überein
- `:heading(-n + 3)` stimmt mit Überschriftselementen in umgekehrter Reihenfolge überein, also `<h3>`, `<h2>`, und `<h1>`
- `:heading(3n + 1)` stimmt mit jedem dritten (`3n`) Überschriftselement beginnend mit `<h1>` überein, also würde dies `<h1>` und `<h4>` einschließen
- `:heading(n + 5)` stimmt mit Überschriftselementen beginnend mit `<h5>` überein und wird `<h6>` einschließen

{{EmbedLiveSample("Functional_notation_example", "", "292")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef(":heading")}}

---
title: :heading()
slug: Web/CSS/:heading_function
l10n:
  sourceCommit: 1a1fe4efc4bfa6147f084aad12cf9908130f76ab
---

{{SeeCompatTable}}

Die **`:heading()`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)-Funktion repräsentiert alle [Überschriften-Elemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), die mit einem Wert übereinstimmen, der über die `An+B` Notation berechnet wird. Dies ermöglicht es, Elemente auf bestimmten Überschriften-Ebenen auf einmal zu stylen, anstatt sie einzeln zuzuordnen und zu formatieren.

> [!NOTE]
> Die funktionale Pseudoklasse `:heading()` hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassen-Selektor, also `0-1-0`. Somit hätte `:heading()` eine Spezifität von `0-1-0`, und `section:heading()` eine Spezifität von `0-1-1`.

## Syntax

```css-nolint
:heading([ <An+B> [, <An+B>]* | even | odd ]) {
  /* ... */
}
```

### Parameter

Die `:heading()` Pseudoklassen-Funktion nimmt eine durch Kommas getrennte Liste von `An+B`-Ausdrücken oder Schlüsselwortwerten an, die ein Muster zum Zuordnen von Überschriften-Elementen beschreiben.

#### Schlüsselwortwerte

- `odd`
  - : Repräsentiert die Überschriften-Elemente, deren numerische Position ungerade ist: `<h1>`, `<h3>` und `<h5>`.
- `even`
  - : Repräsentiert die Überschriften-Elemente, deren numerische Position gerade ist: `<h2>`, `<h4>` und `<h6>`.

#### Funktionale Notation

- `<An+B>`
  - : Repräsentiert die Überschriften-Elemente, deren numerische Position dem Muster `An+B` entspricht, für jeden positiven ganzzahligen oder Nullwert von `n`, wobei:
    - `A` eine ganzzahlige Schrittweite ist,
    - `B` ein ganzzahliger Offset ist,
    - `n` alle nicht-negativen ganzen Zahlen sind, beginnend bei 0.

    Es kann als das `An+B`-te Element einer Liste gelesen werden. `A` und `B` müssen beide {{cssxref("&lt;integer&gt;")}}-Werte haben.

## Hinweise zur Verwendung

Die funktionale Pseudoklasse `:heading()` wird nur auf Elemente angewendet, die semantisch als Überschriften anerkannt sind. Sie stimmt nicht mit Elementen mit einem [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) Attribut überein und berücksichtigt nicht das ['aria-level'](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) ARIA-Attribut.

## Beispiele

### Verwenden von Schlüsselwortparametern

In diesem Beispiel stimmt das `odd`-Schlüsselwort mit Überschriften auf ungeraden Ebenen überein, die `<h1>` und `<h3>` sind. Das `even`-Schlüsselwort wird verwendet, um gerade nummerierte Überschriften-Ebenen anzusprechen, `<h2>` und `<h4>`.

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

### Verwenden der `An+B` Notation

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
- `:heading(-n + 3)` stimmt in umgekehrter Reihenfolge mit Überschriften-Elementen überein, also `<h3>`, `<h2>` und `<h1>`
- `:heading(3n + 1)` stimmt mit jedem dritten (`3n`) Überschriften-Element beginnend bei `<h1>` überein, also würde dies `<h1>` und `<h4>` einschließen
- `:heading(n + 5)` stimmt mit Überschriften-Elementen ab `<h5>` überein und wird `<h6>` einschließen

{{EmbedLiveSample("Functional_notation_example", "", "292")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef(":heading")}}

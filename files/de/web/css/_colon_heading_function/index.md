---
title: :heading()
slug: Web/CSS/:heading_function
l10n:
  sourceCommit: 29033c05fb95b661f58befcc106abc7e7787749a
---

Die **`:heading()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) Funktion repräsentiert alle [Überschriftelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), die einem mit der `An+B` Notation berechneten Wert entsprechen. Dies ermöglicht es Ihnen, Elemente auf spezifischen Überschriftenebenen auf einmal zu stylen, anstatt sie einzeln zuzuweisen und zu stylen.

> [!NOTE]
> Die `:heading()` funktionale Pseudoklasse hat die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, das heißt, `0-1-0`. Somit hätte `:heading()` eine Spezifität von `0-1-0` und `section:heading()` eine Spezifität von `0-1-1`.

## Syntax

```css-nolint
:heading([ <An+B> [, <An+B>]* | even | odd ]) {
  /* ... */
}
```

### Parameter

Die `:heading()` Pseudoklasse Funktion nimmt eine kommagetrennte Liste von `An+B` Ausdrücken oder Schlüsselwortwerten, die ein Muster für das Zuordnen von Überschriftelementen beschreiben.

#### Schlüsselwortwerte

- `odd`
  - : Repräsentiert die Überschriftelemente, deren numerische Position ungerade ist: `<h1>`, `<h3>`, und `<h5>`.
- `even`
  - : Repräsentiert die Überschriftelemente, deren numerische Position gerade ist: `<h2>`, `<h4>`, und `<h6>`.

#### Funktionale Notation

- `<An+B>`
  - : Repräsentiert die Überschriftelemente, deren numerische Position dem Muster `An+B` entspricht, für jeden positiven ganzzahligen oder Nullwert von `n`, wobei:
    - `A` eine ganzzahlige Schrittgröße ist,
    - `B` ein ganzzahliger Offset ist,
    - `n` alle nichtnegativen ganzen Zahlen sind, beginnend bei 0.

    Es kann als das `An+B`-te Element einer Liste gelesen werden. `A` und `B` müssen beide {{cssxref("&lt;integer&gt;")}} Werte haben.

## Nutzungsnotizen

Die `:heading()` funktionale Pseudoklasse erfasst nur Elemente, die semantisch als Überschriften erkannt werden. Sie erfasst keine Elemente mit einem [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) Attribut, noch berücksichtigt sie das ['aria-level'](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) ARIA-Attribut.

## Beispiele

### Verwendung von Schlüsselwortparametern

In diesem Beispiel stimmt das Schlüsselwort `odd` mit Überschriften ungerader Ebene überein, die `<h1>` und `<h3>` sind. Das Schlüsselwort `even` wird verwendet, um Überschriftenebenen mit geraden Zahlen anzusteuern, `<h2>` und `<h4>`.

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

### Verwendung der `An+B` Notation

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
/* Zielüberschriften <h3> und <h4> */
:heading(3, 4) {
  font-weight: 100;
}
/* Zielüberschriften rückwärts beginnend von <h3> */
:heading(-n + 3) {
  color: tomato;
}
/* Ziel jede dritte Überschrift beginnend von <h1> */
:heading(3n + 1) {
  font-style: italic;
}
/* Ziel Überschriften nach Ebene 5 */
:heading(n + 5) {
  color: slateblue;
}

In diesem Beispiel:
- `:heading(3, 4)` stimmt mit den `<h3>` und `<h4>` Elementen überein
- `:heading(-n + 3)` erfasst Überschriftelemente rückwärts, also `<h3>`, `<h2>`, und `<h1>`
- `:heading(3n + 1)` erfasst jedes dritte (`3n`) Überschriftelement beginnend von `<h1>`, also würde dies `<h1>` und `<h4>` beinhalten
- `:heading(n + 5)` erfasst Überschriftelemente beginnend mit `<h5>` und wird `<h6>` beinhalten

{{EmbedLiveSample("Functional_notation_example", "", "292")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef(":heading")}}

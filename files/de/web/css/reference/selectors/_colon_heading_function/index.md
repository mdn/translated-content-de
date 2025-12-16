---
title: :heading()
slug: Web/CSS/Reference/Selectors/:heading_function
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

Die **`:heading()`**-[Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)-Funktion im [CSS](/de/docs/Web/CSS) repräsentiert alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), deren Ebenen einer durch Kommas getrennten Liste von ganzen Zahlen entsprechen. Dies ermöglicht es, Elemente bestimmter Überschriftsebenen auf einmal zu stylen, anstatt sie einzeln abzugleichen und zu stylen.

> [!NOTE]
> Die funktionale Pseudo-Klasse `:heading()` hat dieselbe [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated) wie ein Klassenselektor, nämlich `0-1-0`. Zum Beispiel hat `section:heading()` eine Spezifität von `0-1-1`.

## Syntax

```css-nolint
:heading( <integer># ) {
  /* ... */
}
```

### Parameter

Die `:heading()`-Pseudo-Klassen-Funktion nimmt eine durch Kommas getrennte Liste von {{cssxref("&lt;integer&gt;")}}-Werten, die die zu stylenden Überschriftsebenen darstellen.

## Verwendungshinweise

Die funktionale Pseudo-Klasse `:heading()` gleicht nur Elemente ab, die semantisch als Überschriften erkannt werden. Sie gleicht keine Elemente ab, die [`role="heading"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) oder ['aria-level'](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) Attribute verwenden.

Die von `:heading()` verwendete Überschriftsebene kann sich von dem eines Elements [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) unterscheiden, in Fällen, in denen der Browser eine andere, exponierte Überschriftsebene berechnet. Zum Beispiel wird `h1:heading(3)` jedes `<h1>`-Element abgleichen, das als Überschrift der Ebene 3 exponiert wird.

## Beispiele

### Auswahl spezifischer Überschriftsebenen

In diesem Beispiel wird eine durch Kommas getrennte Liste von Werten verwendet, um Überschriften auf ungeraden Ebenen (`<h1>` und `<h3>`) und geraden Ebenen (`<h2>` und `<h4>`) anzusprechen.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
```

```css
:heading(1, 3) {
  color: tomato;
}
:heading(2, 4) {
  color: slateblue;
}
```

{{EmbedLiveSample("selecting_specific_heading_levels", "", "215")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":heading")}}

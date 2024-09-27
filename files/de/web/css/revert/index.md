---
title: revert
slug: Web/CSS/revert
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Das **`revert`** CSS-Schlüsselwort setzt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen vom aktuellen **[Ursprung des Stils](/de/docs/Glossary/style_origin)** am aktuellen Element vorgenommen worden wären. Dadurch wird die Eigenschaft entweder auf den vom Benutzeragent gesetzten Wert, auf den vom Benutzer gesetzten Wert, auf ihren geerbten Wert (falls vererbbar) oder auf den Anfangswert zurückgesetzt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der Stil erreicht ist, zu dem zurückgerollt wird.

- Wenn es von den eigenen Stilen einer Website (dem Autorherkunft) verwendet wird, rollt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls vorhanden; andernfalls wird der Stil auf den Standardstil des Benutzeragents zurückgerollt.
- Wenn es in einem benutzerdefinierten Stylesheet des Benutzers oder wenn der Stil vom Benutzer angewendet wurde (die Benutzerherkunft) verwendet wird, rollt `revert` den kaskadierten Wert auf den Standardstil des Benutzeragents zurück.
- Wenn es innerhalb der Standardstile des Benutzeragents verwendet wird, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genau wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht bei Eigenschaften, die von Browsern oder benutzerdefinierten Stylesheets (auf der Browserseite gesetzt) Werte haben.

Revert wirkt sich nicht auf Regeln aus, die auf Kinder eines Elements angewendet werden, das Sie zurücksetzen (aber es entfernt die Effekte einer übergeordneten Regel auf ein Kind). Wenn Sie also `color: green` für alle Abschnitte und `all: revert` auf einen bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz sein. Wenn Sie jedoch eine Regel haben, die alle Absätze rot macht, dann bleiben alle Absätze in allen Abschnitten rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist immer noch möglich, den `revert`-Wert durch [Spezifität](/de/docs/Web/CSS/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist anders als und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/initial_value) verwendet, der von den CSS-Spezifikationen auf einzelner Eigenschaftsbasis definiert wird. Im Gegensatz dazu setzen Benutzeragent-Stylesheets Standardwerte auf der Basis von CSS-Selektoren.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/initial_value) für die [`display`](/de/docs/Web/CSS/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzeragent-Stylesheet den Standard-{{cssxref("display")}}-Wert von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für einige Elemente.

Im folgenden Beispiel setzen wir einen benutzerdefinierten [`font-weight`](/de/docs/Web/CSS/font-weight#formal_definition), versuchen dann aber, ihn inline im HTML-Dokument mit `revert` und `unset` zurückzusetzen. Das `revert`-Schlüsselwort wird den Text fett machen, da dies der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal halten, da als vererbte Eigenschaft die `font-weight`-Eigenschaft dann ihren Wert vom Body erben würde.

#### HTML

```html
<h3 style="font-weight: revert; color: revert;">
  This should have its original font-weight (bold) and color: black
</h3>
<p>Just some text</p>
<h3 style="font-weight: unset; color: unset;">
  This will still have font-weight: normal, but color: black
</h3>
<p>Just some text</p>
```

#### CSS

```css
h3 {
  font-weight: normal;
  color: blue;
}
```

#### Ergebnis

{{EmbedLiveSample('Revert_vs_unset', 0, 200)}}

### Alles zurücksetzen

Das Zurücksetzen aller Werte ist nützlich in einer Situation, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie anstelle des separaten Zurücksetzens von `font-weight` und `color` einfach alle gleichzeitig zurücksetzen, indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

#### HTML

```html
<h3>This will have custom styles</h3>
<p>Just some text</p>
<h3 style="all: revert">This should be reverted to browser/user defaults.</h3>
<p>Just some text</p>
```

#### CSS

```css
h3 {
  font-weight: normal;
  color: blue;
  border-bottom: 1px solid grey;
}
```

#### Ergebnis

{{EmbedLiveSample('Revert_all', 0, 200)}}

### Revert auf ein übergeordnetes Element

Das Zurücksetzen entfernt effektiv den Wert für das Element, das Sie mit einer bestimmten Regel ausgewählt haben, und dies geschieht nur für dieses Element. Um dies zu verdeutlichen, setzen wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz.

#### HTML

```html
<main>
  <section>
    <h3>This h3 will be dark green</h3>
    <p>Text in paragraph will be red.</p>
    This stray text will also be dark green.
  </section>
  <section class="with-revert">
    <h3>This h3 will be steelblue</h3>
    <p>Text in paragraph will be red.</p>
    This stray text will also be steelblue.
  </section>
</main>
```

#### CSS

```css hidden
main {
  border: 3px solid steelblue;
}

section {
  margin: 0.5rem;
  border: 2px dashed darkgreen;
}
```

```css
main {
  color: steelblue;
}
section {
  color: darkgreen;
}
p {
  color: red;
}
section.with-revert {
  color: revert;
}
```

#### Ergebnis

{{EmbedLiveSample('Revert_on_a_parent', '100%', '300px')}}

Beachten Sie, wie der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl die Überschrift als auch der einfache Textknoten `steelblue` sind. Die Folge des Zurücksetzens macht es so, als ob `section { color: darkgreen; }` nicht für den Abschnitt mit `color: revert` angewendet wurde.

Außerdem, wenn weder der Benutzeragent noch der Benutzer die `<h3>`- oder `<section>`-Farbwerte überschreiben, dann erbt die `steelblue`-Farbe vom `<main>`, da die {{cssxref("color")}}-Eigenschaft eine vererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zurückzusetzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um eine Eigenschaft eines Elements gleich wie die seines Elternteils zu gestalten.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den in einer früheren Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, falls sie vererbt wird, oder auf ihren Anfangswert, falls nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren Anfangszustand, vererbten Zustand, zurückgesetzten Zustand oder leerzustehenden Zustand zurückzusetzen.

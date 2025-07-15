---
title: revert
slug: Web/CSS/revert
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`revert`** CSS-Schlüsselwort stellt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Stilursprung")}}** an dem aktuellen Element vorgenommen worden wären. Damit setzt es die Eigenschaft entweder auf den vom Benutzer-Agenten festgelegten Wert, den benutzerdefinierten Wert, den geerbten Wert (falls vererbbar) oder den ursprünglichen Wert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der Stil erreicht ist, zu dem zurückgerollt wird.

- Wenn es von den eigenen Stilen einer Website (dem Autorenursprung) verwendet wird, setzt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls einer existiert; andernfalls wird der Stil auf den Standardstil des Benutzer-Agenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet eines Benutzers verwendet wird oder der Stil vom Benutzer angewendet wurde (dem Benutzerursprung), setzt `revert` den kaskadierten Wert auf den Standardstil des Benutzer-Agenten zurück.
- Wenn es innerhalb der Standardstile des Benutzer-Agenten verwendet wird, ist dieses Schlüsselwort funktionell gleichbedeutend mit {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genauso wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht bei Eigenschaften, die vom Browser oder durch benutzerdefinierte Stylesheets (auf Browserseite gesetzt) Werte haben.

Revert wirkt sich nicht auf Regeln aus, die auf Kinder eines Elements angewendet werden, das Sie zurücksetzen (entfernt jedoch die Auswirkungen einer übergeordneten Regel auf ein Kind). Wenn Sie also `color: green` für alle Abschnitte und `all: revert` auf einem bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz. Wenn Sie jedoch eine Regel haben, um alle Absätze rot zu machen, bleiben alle Absätze in allen Abschnitten rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert mithilfe von [Spezifizität](/de/docs/Web/CSS/CSS_cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort unterscheidet sich vom {{cssxref("initial")}}-Schlüsselwort und sollte nicht damit verwechselt werden, das den [ursprünglichen Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) verwendet, der in den CSS-Spezifikationen für jede Eigenschaft festgelegt ist. Im Gegensatz dazu legen Benutzeragents-Stylesheets Standardwerte auf Basis von CSS-Selektoren fest.
>
> Zum Beispiel ist der [ursprüngliche Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzer-Agent-Stylesheet den Standardwert für {{HTMLElement("div")}}s auf `block`, für {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für einige Elemente.

Im untenstehenden Beispiel setzen wir einen benutzerdefinierten [`font-weight`](/de/docs/Web/CSS/font-weight#formal_definition), versuchen dann aber, ihn im HTML-Dokument inline auf `revert` und `unset` zurückzusetzen. Das `revert`-Schlüsselwort wird den Text auf fett zurücksetzen, da das der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal halten, da es sich bei der `font-weight`-Eigenschaft um eine vererbte Eigenschaft handelt, die ihren Wert vom body erbt.

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

Das Zurücksetzen aller Werte ist in einer Situation nützlich, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. In dem obigen Beispiel könnten Sie anstelle von `font-weight` und `color` einzeln zurückzusetzen, einfach alle auf einmal zurücksetzen - indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

### Rücksetzung auf ein Elternteil

Das Zurücksetzen entfernt effektiv den Wert für das Element, das Sie mit einer Regel auswählen, und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz.

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

Beachten Sie, wie der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl der Header als auch der Textknoten in `steelblue` sind. Das Ergebnis der Rücksetzung bewirkt, als ob `section { color: darkgreen; }` für den Abschnitt mit angewendetem `color: revert` nicht existiert hätte.

Auch, wenn weder der Benutzer-Agent noch der Benutzer die `<h3>`- oder `<section>`-Farbwerte überschreiben, dann wird die `steelblue`-Farbe vom `<main>` übernommen, da die {{cssxref("color")}}-Eigenschaft eine vererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren ursprünglichen Wert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements mit der seines übergeordneten Elements gleichzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zu setzen.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbt, oder auf ihren ursprünglichen Wert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihre ursprünglichen, vererbten, zurückgesetzten oder ungesetzten Zustände zurückzusetzen.

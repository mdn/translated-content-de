---
title: revert
slug: Web/CSS/revert
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Das **`revert`** CSS-Schlüsselwort setzt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf denjenigen zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Stilursprung")}}** am aktuellen Element vorgenommen worden wären. Es setzt die Eigenschaft entweder auf den vom Benutzeragenten festgelegten Wert, auf den benutzerdefinierten Wert, auf ihren geerbten Wert (falls vererbbar) oder auf den Anfangswert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der Kurzschreibweiseigenschaft {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der Stil erreicht ist, zu dem zurückgerollt wird.

- Wenn es in den Stilen einer Website (dem Autorenursprung) verwendet wird, rollt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls einer existiert; andernfalls rollt es den Stil auf den Standardstil des Benutzeragenten zurück.
- Wenn es in einem benutzerdefinierten Stylesheet eines Benutzers verwendet wird oder wenn der Stil vom Benutzer angewendet wurde (der Benutzerursprung), rollt `revert` den kaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es innerhalb der Standardstile des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional gleichwertig mit {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genauso wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht bei Eigenschaften, die vom Browser oder durch benutzerdefinierte Stylesheets (auf der Browserseite gesetzt) festgelegte Werte haben.

Revert betrifft keine Regeln, die auf Kinder eines Elements angewendet werden, das Sie zurücksetzen (entfernt jedoch die Auswirkungen einer Elternregel auf ein Kind). Wenn Sie also eine Regel `color: green` für alle Abschnitte und `all: revert` für einen bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz. Wenn Sie jedoch eine Regel haben, die alle Absätze rot macht, bleiben alle Absätze in allen Abschnitten weiterhin rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert mithilfe der [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort unterscheidet sich vom und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) verwendet, der für jede Eigenschaft einzeln durch die CSS-Spezifikationen definiert wird. Im Gegensatz dazu setzen Stylesheets von Benutzeragenten Standardwerte auf Basis von CSS-Selektoren.
>
> Beispielsweise ist der [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) für die [`display`](/de/docs/Web/CSS/display#formal_definition)-Eigenschaft `inline`, während ein normales Stylesheet des Benutzeragenten den Standardwert {{cssxref("display")}} von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für einige Elemente.

Im folgenden Beispiel setzen wir ein benutzerdefiniertes [`font-weight`](/de/docs/Web/CSS/font-weight#formal_definition), versuchen aber dann, es `revert` und `unset` inline im HTML-Dokument anzuwenden. Das `revert`-Schlüsselwort wird den Text auf fett zurücksetzen, da dies der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal lassen, da als vererbte Eigenschaft das `font-weight` dann seinen Wert vom Body erben würde.

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

### Revert für alle

Das Zurücksetzen aller Werte ist in einer Situation nützlich, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie anstatt `font-weight` und `color` separat zurückzusetzen, einfach alle auf einmal zurücksetzen - indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

### Revert bei einem Elternteil

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

Beachten Sie, dass der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Auch ist zu beachten, dass sowohl die Überschrift als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Zurücksetzens macht es so, als ob `section { color: darkgreen; }` nicht für den Abschnitt mit `color: revert` vorhanden gewesen wäre.

Auch, wenn weder der Benutzeragent noch der Benutzer die `<h3>`- oder `<section>`-Farbwerte überschreiben, wird die Farbe `steelblue` von `<main>` vererbt, da die {{cssxref("color")}} Eigenschaft eine vererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um eine Eigenschaft eines Elements identisch mit der seines Elternteils zu machen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, falls sie vererbt wird, oder auf ihren Anfangswert, falls nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es, alle Eigenschaften auf einen Schlag auf ihren Anfangs-, geerbten, zurückgesetzten oder ungesetzten Zustand zurückzusetzen.

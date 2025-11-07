---
title: revert
slug: Web/CSS/Reference/Values/revert
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`revert`**-[CSS](/de/docs/Web/CSS)-Schlüsselwort setzt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch die aktuelle **{{Glossary("style_origin", "style origin")}}** am aktuellen Element vorgenommen worden wären. Dadurch wird die Eigenschaft entweder auf den vom Benutzeragenten festgelegten Wert, den benutzerdefinierten Wert, ihren geerbten Wert (falls er vererbbar ist) oder ihren Anfangswert zurückgesetzt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Styles, die überschrieben wurden, bis der Style erreicht ist, auf den zurückgerollt wird.

- Wenn es von den eigenen Styles der Website (der Autor-Quelle) verwendet wird, setzt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Style zurück, falls vorhanden; andernfalls wird der Style auf den Standard-Style des Benutzeragenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet oder vom Benutzer angewendet wird (der Benutzer-Quelle), setzt `revert` den kaskadierten Wert auf den Standard-Style des Benutzeragenten zurück.
- Wenn es innerhalb der Standard-Styles des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional gleichbedeutend mit {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genauso wie [`unset`](/de/docs/Web/CSS/Reference/Values/unset). Der einzige Unterschied besteht bei Eigenschaften, die vom Browser oder durch benutzerdefinierte Stylesheets (auf der Browser-Seite festgelegt) gesetzt werden.

Revert wird keine Regeln beeinflussen, die auf Kinder eines Elements angewendet werden, das Sie zurückgesetzt haben (wird aber die Auswirkungen einer übergeordneten Regel auf ein Kind entfernen). Wenn Sie also `color: green` für alle Abschnitte und `all: revert` für einen bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz sein. Wenn Sie jedoch eine Regel haben, um alle Absätze rot zu machen, dann werden alle Absätze in allen Abschnitten weiterhin rot sein.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert mithilfe von [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist anders als und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) verwendet, der definitionsgemäß pro Eigenschaft von den CSS-Spezifikationen festgelegt wird. Im Gegensatz dazu setzen Benutzer-Agent-Stylesheets Standardwerte auf der Grundlage von CSS-Selektoren.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/Reference/Properties/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzer-Agent-Stylesheet den Standard-{{cssxref("display")}}-Wert von {{HTMLElement("div")}}s auf `block` setzt, von {{HTMLElement("table")}}s auf `table`, usw.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich für einige Eigenschaften bei einigen Elementen.

Im untenstehenden Beispiel setzen wir einen eigenen [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight#formal_definition), versuchen dann aber, ihn im HTML-Dokument inline mit `revert` und `unset` zurückzusetzen. Das `revert`-Schlüsselwort wird den Text fett zurücksetzen, da dies der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort hält den Text normal, da als vererbte Eigenschaft der `font-weight` seinen Wert vom Body erben würde.

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

### Alle zurücksetzen

Alle Werte zurückzusetzen ist in einer Situation nützlich, in der Sie mehrere Stiländerungen vorgenommen haben und dann wieder zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie anstelle von `font-weight` und `color` separat zurückzusetzen, einfach alle auf einmal zurücksetzen - indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

Das Zurücksetzen entfernt effektiv den Wert für das Element, das Sie mit einer Regel ausgewählt haben, und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz.

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

Beachten Sie, dass der Absatz immer noch rot ist, obwohl die `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl der Header als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Zurücksetzens macht es, als ob `section { color: darkgreen; }` für den Abschnitt mit `color: revert` nicht vorhanden wäre.

Wenn weder der Benutzeragent noch der Benutzer die Farbe von `<h3>` oder `<section>` überschreiben, wird die `steelblue`-Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft eine vererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements wie die seines übergeordneten Elements zu machen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbbar ist, oder auf ihren Anfangswert, wenn nicht.
- Mit der {{cssxref("all")}}-Eigenschaft können Sie alle Eigenschaften gleichzeitig auf ihren Anfangs-, geerbten, zurückgesetzten oder ungelösten Status zurücksetzen.

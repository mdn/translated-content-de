---
title: revert
slug: Web/CSS/revert
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`revert`** [CSS](/de/docs/Web/CSS) Schlüsselwort setzt den gekaskadierten Wert der Eigenschaft von seinem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Stilursprung")}}** am aktuellen Element vorgenommen worden wären. Es setzt somit die Eigenschaft entweder auf den vom Benutzeragenten festgelegten Wert, den vom Benutzer festgelegten Wert, ihren geerbten Wert (falls vererbbar) oder auf den Anfangswert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle überschriebenen Stile, bis der zurückgesetzte Stil erreicht wird.

- Wenn es in den eigenen Stilen einer Website (dem Autorursprung) verwendet wird, setzt `revert` den gekaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls einer existiert; andernfalls auf den Standardstil des Benutzeragenten.
- Wenn es in einem benutzerdefinierten Stylesheet oder vom Benutzer angewendet wird (der Benutzerursprung), setzt `revert` den gekaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wird es innerhalb der Standardstile des Benutzeragenten verwendet, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert` Schlüsselwort funktioniert in vielen Fällen genau so wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht bei Eigenschaften, die von Browsern oder benutzerdefinierten Stylesheets auf der Browserseite festgelegt sind.

Revert beeinflusst keine Regeln, die auf Kinder eines zurückgesetzten Elements angewendet wurden (aber es entfernt Effekte einer Elternregel auf ein Kind). Wenn Sie also eine `color: green` für alle Sektionen und `all: revert` auf einer bestimmten Sektion haben, wird die Farbe der Sektion schwarz sein. Wenn Sie jedoch eine Regel haben, um alle Absätze rot zu machen, bleiben alle Absätze in allen Sektionen rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist immer noch möglich, den `revert`-Wert durch [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort unterscheidet sich vom {{cssxref("initial")}}-Schlüsselwort und sollte nicht damit verwechselt werden, da dieses den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) verwendet, der für jede Eigenschaft von den CSS-Spezifikationen definiert ist. Im Gegensatz dazu setzen Benutzeragenten-Stylesheets Standardwerte basierend auf CSS-Selektoren.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/Reference/Properties/display#formal_definition) Eigenschaft `inline`, während ein normales Benutzeragenten-Stylesheet den Standardwert von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. Unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für einige Elemente.

Im untenstehenden Beispiel setzen wir einen benutzerdefinierten [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight#formal_definition) und versuchen dann, ihn innerhalb des HTML-Dokuments mittels `revert` und `unset` zurückzusetzen. Das `revert`-Schlüsselwort setzt den Text auf fett zurück, da dies für Header in den meisten Browsern der Standardwert ist. Das `unset`-Schlüsselwort hält den Text normal, da die `font-weight`-Eigenschaft als vererbbare Eigenschaft dann ihren Wert vom Body erben würde.

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

### Revert all

Das Zurücksetzen aller Werte ist nützlich in einer Situation, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie anstatt `font-weight` und `color` separat zurückzusetzen, einfach alle auf einmal mit dem `revert`-Schlüsselwort auf `all` setzen.

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

### Revert auf einem Elternteil

Revert entfernt effektiv den Wert für das Element, das Sie mit einer Regel auswählen, und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe auf eine Sektion und eine rote Farbe auf einen Absatz.

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

Beachten Sie, dass der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für die Sektion zurückgesetzt wurde. Beachten Sie auch, dass sowohl der Header als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Rücksetzens macht es so, als ob `section { color: darkgreen; }` für die Sektion mit `color: revert` nicht existierte.

Wenn weder der Benutzeragent noch der Benutzer die `<h3>` oder `<section>`-Farbwerte überschreiben, wird die `steelblue`-Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft eine vererbbare Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um eine Eigenschaft eines Elements mit der seines Elternteils gleichzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbbar ist, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren Anfangs-, geerbten, zurückgesetzten oder zurückgenommenen Zustand zu setzen.

---
title: revert
slug: Web/CSS/Reference/Values/revert
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **`revert`**-[CSS](/de/docs/Web/CSS)-Schlüsselwort setzt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Stilursprung")}}** am aktuellen Element vorgenommen worden wären. Es setzt die Eigenschaft also entweder auf den vom Benutzeragenten festgelegten Wert, den vom Benutzer festgelegten Wert, den geerbten Wert (falls die Eigenschaft vererbbar ist) oder den Anfangswert zurück. Es kann auf jede CSS-Eigenschaft angewandt werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der Stil erreicht wird, zu dem zurückgekehrt wird.

- Wenn es in den eigenen Stilen einer Website (der Autorursprung) verwendet wird, setzt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil des Benutzers zurück, falls ein solcher vorhanden ist; andernfalls wird der Stil auf den Standardstil des Benutzeragenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet des Benutzers verwendet wird oder wenn der Stil vom Benutzer angewandt wurde (der Benutzerursprung), setzt `revert` den kaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es innerhalb der Standardstile des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genau wie {{cssxref("unset")}}. Der einzige Unterschied besteht darin, dass bei Eigenschaften, die vom Browser oder von benutzerdefinierten Stylesheets festgelegt wurden (auf der Browserseite festgelegt), Unterschiede bestehen können.

Revert wird keine Regeln beeinflussen, die auf die Kinder eines Elements angewandt werden, das Sie zurücksetzen (aber die Auswirkungen einer Elternregel auf ein Kind entfernen). Wenn Sie also beispielsweise ein `color: green` für alle Abschnitte und `all: revert` für einen bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz sein. Wenn Sie jedoch eine Regel haben, um alle Absätze rot zu machen, werden alle Absätze in allen Abschnitten weiterhin rot sein.

> [!NOTE]
> Revert ist nur ein Wert. Es ist immer noch möglich, den `revert`-Wert mithilfe von [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist anders und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) verwendet, der für jede Eigenschaft in den CSS-Spezifikationen festgelegt ist. Im Gegensatz dazu setzen Benutzeragenten-Stilblätter Standardwerte auf der Grundlage von CSS-Selektoren.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/Reference/Properties/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzeragenten-Stilblatt den Standard-{{cssxref("display")}}-Wert von {{HTMLElement("div")}}s auf `block` und von {{HTMLElement("table")}}s auf `table` setzt, usw.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für bestimmte Elemente.

Im folgenden Beispiel setzen wir ein benutzerdefiniertes [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight#formal_definition), versuchen dann jedoch, es inline im HTML-Dokument auf `revert` und `unset` zu setzen. Das `revert`-Schlüsselwort setzt den Text auf fett zurück, da dies der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort hält den Text normal, da als geerbte Eigenschaft das `font-weight` dann seinen Wert vom Body erben würde.

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

### Alles revertieren

Das Revertieren aller Werte ist in einer Situation nützlich, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Also im obigen Beispiel, anstatt `font-weight` und `color` einzeln zurückzusetzen, könnten Sie einfach alle auf einmal zurücksetzen – indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

Revertieren entfernt effektiv den Wert für das Element, das Sie mit einer Regel auswählen, und das passiert nur für dieses Element. Um dies zu veranschaulichen, werden wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz setzen.

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

Beachten Sie, wie der Absatz weiterhin rot ist, obwohl die `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl die Überschrift als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Revertierens macht es, als ob `section { color: darkgreen; }` für den Abschnitt mit `color: revert` nicht existiert hätte.

Auch wenn weder der Benutzeragent noch der Benutzer die Farben von `<h3>` oder `<section>` überschreiben, wird die `steelblue`-Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft eine geerbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements identisch mit der seines Elternteils zu machen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren Anfangs-, geerbten, zurückgesetzten oder nicht gesetzten Zustand zurückzusetzen.

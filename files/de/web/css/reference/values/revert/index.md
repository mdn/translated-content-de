---
title: "`revert` CSS-Schlüsselwort"
short-title: revert
slug: Web/CSS/Reference/Values/revert
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Das **`revert`**-Schlüsselwort in [CSS](/de/docs/Web/CSS) setzt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert zurück auf den Wert, den die Eigenschaft gehabt hätte, wenn keine Veränderungen durch die aktuelle **{{Glossary("style_origin", "Stilorigin")}}** am aktuellen Element vorgenommen worden wären. Somit stellt es die Eigenschaft wahlweise auf den vom Benutzer-Agent festgelegten Wert, den vom Benutzer festgelegten Wert, den geerbten Wert (falls vererbbar) oder den initialen Wert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Abkürzungseigenschaft {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der Stil erreicht ist, zu dem zurückgerollt werden soll.

- Wird `revert` in den eigenen Styles einer Website (der Autor-Origin) verwendet, rollt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls ein solcher existiert; andernfalls wird der Stil auf den Standardstil des Benutzer-Agents zurückgesetzt.
- Wird es in einem benutzerdefinierten Stylesheet des Benutzers verwendet oder wurde der Stil vom Benutzer angewendet (die Benutzer-Origin), rollt `revert` den kaskadierten Wert auf den Standardstil des Benutzer-Agents zurück.
- Wird es innerhalb der Standardstile des Benutzer-Agents verwendet, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genau wie {{cssxref("unset")}}. Der einzige Unterschied besteht bei Eigenschaften, die vom Browser oder durch benutzerdefinierte Stylesheets erstellt vom Benutzer (auf der Browser-Seite eingestellt) Werte gesetzt haben.

`Revert` wird keine Auswirkungen auf Regeln haben, die auf Kinder eines Elements, das Sie zurücksetzen, angewendet wurden (es wird jedoch die Auswirkungen einer übergeordneten Regel auf ein Kind entfernen). Wenn Sie also eine `color: green` für alle `sections` haben und `all: revert` auf einer bestimmten Sektion, wird die Farbe der Sektion schwarz sein. Haben Sie jedoch eine Regel, um alle `paragraphs` rot zu machen, bleiben alle `paragraphs` in allen `sections` rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist immer noch möglich, den `revert`-Wert mit [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist anders als und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) benutzt, der für jede Eigenschaft individuell von den CSS-Spezifikationen definiert wurde. Im Gegensatz dazu setzen Benutzer-Agent-Stylesheets Standardwerte auf Basis von CSS-Selektoren.
>
> Zum Beispiel ist der [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/Reference/Properties/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzer-Agent-Stylesheet den Standardwert für {{HTMLElement("div")}}s auf `block`, für {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Auch wenn `revert` und `unset` ähnlich sind, unterscheiden sie sich für einige Eigenschaften bei einigen Elementen.

Im folgenden Beispiel setzen wir eine benutzerdefinierte [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight#formal_definition), versuchen dann aber, sie inline im HTML-Dokument mit `revert` und `unset` zurückzusetzen. Das `revert`-Schlüsselwort wird den Text fett zurücksetzen, da dies der Standardwert für Header in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal halten, da als eine vererbte Eigenschaft die `font-weight` dann ihren Wert vom `body` erben würde.

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

Alle Werte zurückzusetzen ist in einer Situation nützlich, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie anstelle von `font-weight` und `color` separat zurückzusetzen, einfach alle auf einmal zurücksetzen - indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

### Revert auf einem übergeordneten Element

Das Zurücksetzen entfernt effektiv den Wert für das Element, das Sie mit einer Regel auswählen, und dies passiert nur für dieses Element. Um dies zu veranschaulichen, werden wir eine grüne Farbe auf eine Sektion und eine rote Farbe auf einen Paragraphen setzen.

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

Beachten Sie, wie der Paragraph immer noch rot ist, auch wenn eine `color`-Eigenschaft für die Sektion zurückgesetzt wurde. Außerdem ist zu beachten, dass sowohl der Header als auch der unformatierte Textknoten `steelblue` sind. Das Ergebnis des Zurücksetzens macht es, als ob `section { color: darkgreen; }` nicht für die Sektion mit `color: revert` angewendet worden wäre.

Auch wenn weder der Benutzer-Agent noch der Benutzer die `<h3>`- oder `<section>`-Farbwerte überschreiben, dann wird die `steelblue`-Farbe von `<main>` vererbt, da die {{cssxref("color")}}-Eigenschaft eine vererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Initialwert zurückzusetzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements mit der seines übergeordneten Elements gleichzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("revert-rule")}}-Schlüsselwort, um eine Eigenschaft auf den Wert einer früheren übereinstimmenden Stilregel zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zurückzusetzen, falls sie geerbt wird, oder auf ihren Initialwert, falls nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren initialen, geerbten, zurückgesetzten oder ungesetzten Zustand zurückzusetzen.

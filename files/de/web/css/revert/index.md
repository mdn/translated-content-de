---
title: revert
slug: Web/CSS/revert
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Das **`revert`** CSS-Schlüsselwort setzt den gekaskadierten Wert einer Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Stilorigin")}}** am aktuellen Element vorgenommen worden wären. Es setzt die Eigenschaft somit entweder auf den vom Benutzeragenten gesetzten Wert, den vom Benutzer gesetzten Wert, den geerbten Wert (wenn vererbbar) oder den Anfangswert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibeigenschaft {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der Stil erreicht wird, zu dem zurückgerollt werden soll.

- Wenn es in den Stilen einer Website (dem Autoren-Origin) verwendet wird, setzt `revert` den gekaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil des Benutzers zurück, falls vorhanden; andernfalls wird der Stil auf den Standardstil des Benutzeragenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet eines Benutzers oder in Stilen verwendet wird, die vom Benutzer angewendet wurden (der Benutzer-Origin), setzt `revert` den gekaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es innerhalb der Standardstile des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional gleichwertig mit {{cssxref("unset")}}.

Das Schlüsselwort `revert` funktioniert in vielen Fällen genauso wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht bei Eigenschaften, die von Browsern oder durch vom Benutzer erstellte benutzerdefinierte Stylesheets (auf der Browserseite festgelegt) gesetzt wurden.

`Revert` beeinflusst keine Regeln, die auf Kinder eines Elements angewendet werden, das zurückgesetzt wird (entfernt jedoch die Effekte einer übergeordneten Regel auf ein Kind). Wenn Sie also `color: green` für alle Sektionen und `all: revert` auf einer bestimmten Sektion haben, wird die Farbe der Sektion schwarz. Wenn Sie jedoch eine Regel haben, um alle Absätze rot zu machen, dann bleiben alle Absätze in allen Sektionen rot.

> [!NOTE] > `Revert` ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert mittels [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das Schlüsselwort `revert` unterscheidet sich vom Schlüsselwort {{cssxref("initial")}} und sollte nicht damit verwechselt werden. `Initial` verwendet den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value), der für jede Eigenschaft von den CSS-Spezifikationen festgelegt ist. Im Gegensatz dazu setzen Benutzeragenten-Stylesheets Standardwerte basierend auf CSS-Selektoren.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value) der [`display`](/de/docs/Web/CSS/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzeragenten-Stylesheet den Standardwert von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, gibt es Unterschiede bei bestimmten Eigenschaften für bestimmte Elemente.

Im folgenden Beispiel setzen wir einen benutzerdefinierten [`font-weight`](/de/docs/Web/CSS/font-weight#formal_definition), versuchen dann jedoch, ihn inline im HTML-Dokument mit `revert` und `unset` zurückzusetzen. Das Schlüsselwort `revert` setzt den Text auf fett zurück, da dies der Standardwert für Überschriften in den meisten Browsern ist. Das Schlüsselwort `unset` hält den Text normal, da `font-weight` als vererbte Eigenschaft dann seinen Wert vom `body` übernehmen würde.

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

Das Zurücksetzen aller Werte ist nützlich, wenn Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie anstelle des separaten Zurücksetzens von `font-weight` und `color` einfach alle auf einmal mit dem Schlüsselwort `revert` auf `all` zurücksetzen.

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

Das Zurücksetzen entfernt effektiv den Wert für das ausgewählte Element bei einer Regel und betrifft nur dieses Element. Um dies zu verdeutlichen, setzen wir eine grüne Farbe auf eine Sektion und eine rote Farbe auf einen Absatz.

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

Beachten Sie, dass der Absatz weiterhin rot ist, obwohl die `color`-Eigenschaft für die Sektion zurückgesetzt wurde. Außerdem sind sowohl der Header als auch der einfache Textknoten `steelblue`. Das Ergebnis des Zurücksetzens bewirkt, dass es so aussieht, als ob `section { color: darkgreen; }` für die Sektion, auf die `color: revert` angewandt wurde, nicht existieren würde.

Wenn weder der Benutzeragent noch der Benutzer die Farben von `<h3>` oder `<section>` überschreiben, wird die `steelblue`-Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft vererbbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das Schlüsselwort {{cssxref("initial")}}, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, um die Eigenschaft eines Elements mit der seines übergeordneten Elements gleichzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den in einer vorhergehenden Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft entweder auf ihren vererbten Wert, falls sie vererbt wird, oder auf ihren Anfangswert, falls nicht, zu setzen.
- Die Eigenschaft {{cssxref("all")}} ermöglicht es, alle Eigenschaften gleichzeitig auf ihren Initial-, Vererbten-, Zurückgesetzten- oder Unset-Zustand zurückzusetzen.

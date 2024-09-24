---
title: zurücksetzen
slug: Web/CSS/revert
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Das **`revert`** CSS-Schlüsselwort setzt den gekaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style origin")}}** am aktuellen Element vorgenommen worden wären. So wird die Eigenschaft entweder auf den vom Benutzeragenten festgelegten Wert, auf den vom Benutzer festgelegten Wert, auf ihren geerbten Wert (falls sie vererbbar ist) oder auf den Anfangswert zurückgesetzt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der wiederherzustellende Stil erreicht ist.

- Wenn es von den eigenen Stilen einer Website (dem Autor-Ursprung) verwendet wird, setzt `revert` den gekaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls vorhanden; andernfalls wird der Stil auf den Standard-Stil des Benutzeragenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet des Benutzers verwendet wird oder wenn der Stil vom Benutzer angewendet wurde (der Benutzer-Ursprung), setzt `revert` den gekaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es in den Standardstilen des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genauso wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht bei Eigenschaften, die vom Browser oder von benutzerdefinierten Stylesheets (auf Browserseite festgelegt) gesetzt werden.

Revert beeinflusst keine Regeln, die auf Kinder eines Elements angewendet werden, das Sie zurücksetzen (aber es entfernt die Auswirkungen einer übergeordneten Regel auf ein Kind). Wenn Sie also `color: green` für alle Abschnitte und `all: revert` auf einem bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz sein. Wenn Sie jedoch eine Regel haben, um alle Absätze rot zu machen, dann bleiben alle Absätze in allen Abschnitten rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert durch [Spezifizität](/de/docs/Web/CSS/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist anders als und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/initial_value) verwendet, der auf einer Pro-Eigenschaft-Basis durch die CSS-Spezifikationen definiert ist. Im Gegensatz dazu setzen Stylesheets des Benutzeragenten Standardwerte auf der Grundlage von CSS-Selektoren.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/initial_value) für die [`display`](/de/docs/Web/CSS/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzeragenten-Stylesheet den Standardwert von {{cssxref("display")}}-Werten für {{HTMLElement("div")}}s auf `block` setzt, für {{HTMLElement("table")}}s auf `table`, usw.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für einige Elemente.

Im folgenden Beispiel setzen wir einen benutzerdefinierten [`font-weight`](/de/docs/Web/CSS/font-weight#formal_definition), versuchen dann, ihn `revert` oder `unset` inline im HTML-Dokument anzuwenden. Das `revert`-Schlüsselwort wird den Text fett machen, da dies der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal halten, da als vererbte Eigenschaft `font-weight` seinen Wert dann vom body erben würde.

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

Das Zurücksetzen aller Werte ist nützlich in einer Situation, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie anstatt `font-weight` und `color` separat zurückzusetzen, einfach alle auf einmal zurücksetzen - indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

### Zurücksetzen auf einem Elternteil

Das Zurücksetzen entfernt effektiv den Wert für das von Ihnen ausgewählte Element mit einer Regel und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz.

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

Beachten Sie, wie der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl die Überschrift als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Zurücksetzens lässt es so aussehen, als ob `section { color: darkgreen; }` für den Abschnitt mit `color: revert` nicht existieren würde.

Wenn weder der Benutzeragent noch der Benutzer die `<h3>`- oder `<section>`-Farbwerte überschreiben, wird die `steelblue`-Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft eine geerbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements gleich der seines Elternteils zu machen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert in einer vorherigen Kaskadenschicht zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften auf ihren Anfangs-, geerbten, zurückgesetzten oder unbestimmten Zustand auf einmal zurückzusetzen.

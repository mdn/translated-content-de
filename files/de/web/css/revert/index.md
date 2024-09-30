---
title: revert
slug: Web/CSS/revert
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Das **`revert`** CSS-Schlüsselwort kehrt den kaskadierten Wert einer Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **[Style Origin](/de/docs/Glossary/style_origin)** am aktuellen Element vorgenommen worden wären. Somit wird die Eigenschaft entweder auf den vom Benutzeragenten gesetzten Wert, den vom Benutzer festgelegten Wert, auf ihren geerbten Wert (falls sie vererbbar ist) oder auf den Anfangswert zurückgesetzt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschlusseigenschaft {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle überschriebenen Stile, bis der Stil erreicht ist, zu dem zurückgegangen wird.

- Wenn es von den eigenen Stilen einer Seite (dem Autor-Origin) verwendet wird, rollt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls einer existiert; andernfalls wird der Stil auf den Standardstil des Benutzeragenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet eines Benutzers verwendet wird oder wenn der Stil vom Benutzer angewendet wurde (dem Benutzer-Origin), rollt `revert` den kaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es innerhalb der Standardstile des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert` Schlüsselwort funktioniert in vielen Fällen genau wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht bei Eigenschaften, die vom Browser oder von benutzerdefinierten Stylesheets (auf Browserseite) gesetzt werden.

Revert wird Regeln, die auf Kinder eines Elements angewendet werden, das Sie zurücksetzen, nicht beeinflussen (entfernt jedoch die Effekte einer Elternregel auf ein Kind). Wenn Sie also eine Regel `color: green` für alle Abschnitte und `all: revert` auf einem bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz. Aber wenn Sie eine Regel haben, die alle Absätze rot macht, bleiben alle Absätze in allen Abschnitten rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert mit [Spezifität](/de/docs/Web/CSS/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist anders als und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/initial_value) verwendet, der für jede Eigenschaft in den CSS-Spezifikationen definiert ist. Im Gegensatz dazu setzen Benutzeragent-Stylesheets Standardwerte auf Basis von CSS-Selektoren.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/initial_value) für die [`display`](/de/docs/Web/CSS/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzeragent-Stylesheet den Standard-{{cssxref("display")}}-Wert von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s zu `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich für einige Eigenschaften bei einigen Elementen.

Im folgenden Beispiel setzen wir benutzerdefinierte [`font-weight`](/de/docs/Web/CSS/font-weight#formal_definition), versuchen dann aber, es im HTML-Dokument inline mit `revert` und `unset` zurückzusetzen. Das `revert`-Schlüsselwort wird den Text in Fett zurücksetzen, weil das in den meisten Browsern der Standardwert für Überschriften ist. Das `unset`-Schlüsselwort wird den Text normal halten, da die `font-weight`-Eigenschaft als vererbte Eigenschaft ihren Wert dann vom Körper erben würde.

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

### Revert alle

Das Zurücksetzen aller Werte ist nützlich, wenn Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. In dem obigen Beispiel könnten Sie statt `font-weight` und `color` separat zurückzusetzen einfach alle auf einmal zurücksetzen - indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

Das Zurücksetzen entfernt effektiv den Wert für das Element, das Sie mit einer Regel auswählen, und das passiert nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz.

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

Beachten Sie, wie der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl der Header als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Zurücksetzens macht es so, als gäbe es `section { color: darkgreen; }` nicht für den Abschnitt mit `color: revert` angewendet.

Auch wenn weder der Benutzeragent noch der Benutzer die `<h3>` oder `<section>` Farbwerte überschreiben, wird die `steelblue`-Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft eine vererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements mit der seines Elternteils gleichzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es, alle Eigenschaften gleichzeitig auf ihren ursprünglichen, geerbten, zurückgesetzten oder nicht festgelegten Zustand zurückzusetzen.

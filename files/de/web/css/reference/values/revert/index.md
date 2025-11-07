---
title: revert
slug: Web/CSS/Reference/Values/revert
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`revert`** [CSS](/de/docs/Web/CSS) Schlüsselwort setzt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Style-Origin")}}** am aktuellen Element vorgenommen worden wären. Damit wird die Eigenschaft entweder auf den vom Benutzeragenten festgelegten Wert, den vom Benutzer festgelegten Wert, den geerbten Wert (wenn die Eigenschaft vererbbar ist) oder den Anfangswert zurückgesetzt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschrift Eigenschaft {{cssxref("all")}}.

Dieses Schlüsselwort entfernt von der Kaskade alle Stile, die überschrieben wurden, bis der zurückgesetzte Stil erreicht ist.

- Wenn es durch eigene Stile einer Website (der Author-Origin) verwendet wird, setzt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls einer existiert; andernfalls wird der Stil auf den Standardstil des Benutzeragenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet oder durch Stile angewendet wird, die vom Benutzer selbst stammen (der Benutzer-Origin), setzt `revert` den kaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es innerhalb der Standardstile des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert` Schlüsselwort funktioniert in vielen Fällen genauso wie [`unset`](/de/docs/Web/CSS/Reference/Values/unset). Der einzige Unterschied besteht bei Eigenschaften, die durch den Browser oder benutzerdefinierte Stylesheets des Benutzers festgelegt wurden (auf Browserseite festgelegt).

Revert beeinflusst nicht die Regeln, die auf die Kinder eines Elements angewendet werden, das Sie zurücksetzen (aber es entfernt die Auswirkungen einer Elternregel auf ein Kind). Wenn also alle Abschnitte die `color: green` haben und ein spezieller Abschnitt `all: revert`, wird die Farbe des Abschnitts schwarz sein. Aber wenn es eine Regel gibt, die alle Absätze rot macht, dann bleiben alle Absätze in allen Abschnitten rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert` Wert durch [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert` Schlüsselwort ist anders als und sollte nicht mit dem {{cssxref("initial")}} Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) verwendet, der für jede Eigenschaft individuell durch die CSS-Spezifikationen definiert ist. Im Gegensatz dazu legen Benutzeragenten-Stylesheets Standardwerte auf der Basis von CSS-Selektoren fest.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/Reference/Properties/display#formal_definition) Eigenschaft `inline`, während ein normales Benutzeragenten-Stylesheet den Standardwert von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich für einige Eigenschaften bei bestimmten Elementen.

Im folgenden Beispiel setzen wir ein benutzerdefiniertes [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight#formal_definition), versuchen aber, es direkt im HTML-Dokument mit `revert` und `unset` zurückzusetzen. Das `revert` Schlüsselwort setzt den Text auf fett zurück, weil das für Überschriften in den meisten Browsern der Standardwert ist. Das `unset` Schlüsselwort hält den Text normal, weil `font-weight` als vererbbare Eigenschaft seinen Wert dann vom `body` erben würde.

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

Alle Werte zurückzusetzen ist in einer Situation nützlich, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel, anstatt `font-weight` und `color` separat zurückzusetzen, könnten Sie einfach alle auf einmal zurücksetzen, indem Sie das `revert` Schlüsselwort auf `all` anwenden.

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

Das Zurücksetzen entfernt den Wert effektiv für das Element, das Sie mit einer Regel auswählen, und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz.

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

Beachten Sie, wie der Absatz immer noch rot ist, obwohl eine `color` Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl der Header als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Zurücksetzens macht es so, als ob `section { color: darkgreen; }` für den Abschnitt mit `color: revert` nicht existiert hat.

Auch, wenn weder der Benutzeragent noch der Benutzer die `<h3>` oder `<section>` Farbwerte überschreiben, dann wird die `steelblue` Farbe von `<main>` geerbt, da die {{cssxref("color")}} Eigenschaft eine vererbbare Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}} Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}} Schlüsselwort, um die Eigenschaft eines Elements der seines Elternteils anzugleichen.
- Verwenden Sie das {{cssxref("revert-layer")}} Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}} Schlüsselwort, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbbar ist, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}} Eigenschaft ermöglicht es Ihnen, alle Eigenschaften auf ihren Anfangszustand, vererbten Zustand, zurückgesetzten oder unset Zustand auf einmal zurückzusetzen.

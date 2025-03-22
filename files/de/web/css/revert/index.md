---
title: revert
slug: Web/CSS/revert
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Das CSS-Schlüsselwort **`revert`** setzt den vererbten Wert der Eigenschaft vom aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Style-Ursprung")}}** am aktuellen Element vorgenommen worden wären. Somit setzt es die Eigenschaft entweder auf den vom Benutzeragenten festgelegten Wert, den vom Benutzer festgelegten Wert, auf den geerbten Wert (wenn er vererbbar ist) oder auf den Anfangswert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der Stil erreicht wird, zu dem zurückgekehrt werden soll.

- Wenn es von den eigenen Stilen der Seite (dem Autorursprung) verwendet wird, setzt `revert` den vererbten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, falls vorhanden; andernfalls setzt es den Stil auf den Standardstil des Benutzeragenten zurück.
- Wenn es in einem benutzerdefinierten Stylesheet oder wenn der Stil vom Benutzer angewendet wurde (der Benutzerursprung) verwendet wird, setzt `revert` den vererbten Wert auf den Standardstil des Benutzeragenten zurück.
- Wird es innerhalb der Standardstile des Benutzeragenten verwendet, ist dieses Schlüsselwort funktional gleichwertig mit {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genau wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht bei Eigenschaften, die vom Browser oder durch benutzerdefinierte Stylesheets (auf der Browserseite festgelegt) gesetzt wurden.

Revert wird keine Regeln beeinflussen, die auf Kinder eines Elements angewendet werden, das Sie zurücksetzen (aber wird die Auswirkungen einer übergeordneten Regel auf ein Kind entfernen). Wenn Sie also eine Regel `color: green` für alle Abschnitte und `all: revert` auf einen bestimmten Abschnitt angewendet haben, wird die Farbe des Abschnitts schwarz sein. Wenn Sie jedoch eine Regel haben, die alle Absätze rot macht, dann bleiben alle Absätze in allen Abschnitten rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert mit [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist unterschiedlich und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) verwendet, der für jede Eigenschaft von den CSS-Spezifikationen definiert ist. Im Gegensatz dazu setzen benutzerdefinierte Stylesheets Standardwerte auf Basis von CSS-Selektoren.
>
> Beispielsweise ist der [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/display#formal_definition)-Eigenschaft `inline`, während ein normaler Benutzeragenten-Stylesheet den Standardwert von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für bestimmte Elemente.

Im folgenden Beispiel setzen wir ein benutzerdefiniertes [`font-weight`](/de/docs/Web/CSS/font-weight#formal_definition), versuchen es dann aber, es inline im HTML-Dokument mit `revert` und `unset` zurückzusetzen. Das `revert`-Schlüsselwort wird den Text fett machen, weil dies der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal halten, da `font-weight` als vererbte Eigenschaft dann seinen Wert vom Body erben würde.

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

### Alle Werte zurücksetzen

Alle Werte zurückzusetzen ist in Situationen nützlich, in denen Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Anstatt im obigen Beispiel `font-weight` und `color` separat zurückzusetzen, könnten Sie einfach alle auf einmal zurücksetzen, indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

### Revert auf ein Elternteil

Reverting entfernt effektiv den Wert für das Element, das Sie mit einer Regel auswählen, und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe für einen Abschnitt und eine rote Farbe für einen Absatz.

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

Beachten Sie, wie der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl die Überschrift als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Zurücksetzens bewirkt, dass es so aussieht, als ob `section { color: darkgreen; }` für den Abschnitt mit `color: revert` nicht existiert.

Weiterhin: Falls weder der Benutzeragent noch der Benutzer die `<h3>` oder `<section>`-Farbwerte überschreiben, wird die `steelblue`-Farbe von `<main>` vererbt, da die {{cssxref("color")}}-Eigenschaft eine vererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements mit der seines übergeordneten Elements gleichzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den im vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbbar ist, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es, alle Eigenschaften auf ihren initialen, vererbten, zurückgesetzten oder ungesetzten Zustand auf einmal zurückzusetzen.

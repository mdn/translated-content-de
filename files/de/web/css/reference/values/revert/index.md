---
title: "`revert` CSS-Schlüsselwort"
short-title: revert
slug: Web/CSS/Reference/Values/revert
l10n:
  sourceCommit: aaedffba9f47d6dce7967a4191963378026d9406
---

Das **`revert`** [CSS](/de/docs/Web/CSS) Schlüsselwort setzt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "style origin")}}** am aktuellen Element vorgenommen worden wären. Es setzt die Eigenschaft somit entweder auf den vom Benutzeragenten festgelegten Wert, den vom Benutzer festgelegten Wert, auf ihren geerbten Wert (wenn sie vererbbar ist) oder auf den Anfangswert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt alle aus der Kaskade überschriebenen Stile, bis der Stil erreicht wird, zu dem zurückgerollt wird.

- Wenn es durch die eigenen Stile einer Website (die Autorenherkunft) verwendet wird, setzt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil zurück, wenn einer existiert; andernfalls setzt es den Stil auf den Standardstil des Benutzeragenten zurück.
- Wenn es in einem benutzerdefinierten Stylesheet oder durch den Benutzer angewendeten Stil (die Benutzerherkunft) verwendet wird, setzt `revert` den kaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es innerhalb der Standardstile des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert` Schlüsselwort funktioniert in vielen Fällen genau so wie {{cssxref("unset")}}. Der einzige Unterschied besteht bei Eigenschaften, die durch den Browser oder durch benutzerdefinierte Stylesheets erstellt wurden (auf der Browser-Seite festgelegt).

Revert hat keine Auswirkungen auf Regeln, die auf Kinder eines zurückgesetzten Elements angewendet werden (aber es entfernt die Auswirkungen einer Elternregel auf ein Kind). Wenn Sie also `color: green` für alle Abschnitte und `all: revert` auf einem bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz sein. Wenn Sie jedoch eine Regel haben, die alle Absätze rot macht, werden alle Absätze in allen Abschnitten immer noch rot sein.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert mit [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist anders und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) verwendet, der pro Eigenschaft von den CSS-Spezifikationen definiert ist. Im Gegensatz dazu setzen Benutzeragenten-Stylesheets Standardwerte auf Grundlage von CSS-Selektoren.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/Reference/Properties/display#formal_definition) Eigenschaft `inline`, während ein normales Benutzeragenten-Stylesheet den Standardwert von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für einige Elemente.

Im folgenden Beispiel setzen wir ein benutzerdefiniertes [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight#formal_definition), versuchen dann jedoch, es inline im HTML-Dokument `revert` und `unset` anzuwenden. Das `revert`-Schlüsselwort wird den Text auf fett zurücksetzen, da dies der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal halten, da `font-weight` als ererbte Eigenschaft dann seinen Wert vom Körper erben würde.

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

Alle Werte zurückzusetzen ist nützlich in einer Situation, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie, anstatt `font-weight` und `color` separat zurückzusetzen, alle auf einmal zurücksetzen, indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

Revert entfernt effektiv den Wert für das Element, das Sie mit einer Regel auswählen, und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz.

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

Beachten Sie, wie der Absatz immer noch rot ist, obwohl eine `color` Eigenschaft für den Abschnitt rückgängig gemacht wurde. Beachten Sie auch, dass sowohl der Header als auch der einfache Textknoten `steelblue` sind. Das Zurücksetzen führt dazu, dass es so ist, als ob `section { color: darkgreen; }` für den Abschnitt mit `color: revert` nicht existierte.

Auch wenn weder der Benutzeragent noch der Benutzer die `<h3>`- oder `<section>`-Farbwerte überschreiben, wird dann die `steelblue`-Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft eine ererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements derselben wie die seines Elternteils zu machen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren ererbten Wert zu setzen, wenn sie erblich ist, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es, alle Eigenschaften auf einmal auf ihren anfänglichen, vererbten, zurückgesetzten oder ungesetzten Zustand zurückzusetzen.

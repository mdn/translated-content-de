---
title: revert
slug: Web/CSS/Reference/Values/revert
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Das **`revert`**-[CSS](/de/docs/Web/CSS) Schlüsselwort setzt den kaskadierten Wert einer Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Style-Origin")}}** am aktuellen Element vorgenommen worden wären. Es setzt die Eigenschaft entweder auf den vom Benutzeragenten festgelegten Wert, den vom Benutzer festgelegten Wert, den geerbten Wert (falls vererbbar) oder auf den Anfangswert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle Stile, die überschrieben wurden, bis der Stil erreicht wird, auf den zurückgesetzt werden soll.

- Wenn `revert` durch die eigenen Stile einer Website (den Autor-Ursprung) verwendet wird, setzt es den kaskadierten Wert der Eigenschaft auf den eigenen benutzerdefinierten Stil zurück, falls einer existiert; andernfalls wird der Stil auf den Standardstil des Benutzeragenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet oder durch den Benutzer angewendeten Stil (den Benutzer-Ursprung) verwendet wird, setzt `revert` den kaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es innerhalb der Standardstile des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional gleichbedeutend mit {{cssxref("unset")}}.

Das Schlüsselwort `revert` funktioniert in vielen Fällen genauso wie [`unset`](/de/docs/Web/CSS/Reference/Values/unset). Der einzige Unterschied besteht bei Eigenschaften, die vom Browser oder durch benutzerdefinierte Stylesheets gesetzt wurden (auf der Browserseite festgelegt).

`revert` hat keine Auswirkungen auf Regeln, die auf Kinder des Elements angewendet werden, dass Sie zurücksetzen (wird aber die Auswirkungen einer Elternregel auf ein Kind entfernen). Wenn Sie also eine allgemeine Regel `color: green` für alle Abschnitte und `all: revert` auf einen bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz sein. Haben Sie jedoch eine Regel, die alle Absätze rot macht, dann bleiben alle Absätze in allen Abschnitten rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist weiterhin möglich, den `revert`-Wert durch [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort unterscheidet sich vom {{cssxref("initial")}}-Schlüsselwort und sollte nicht damit verwechselt werden, welches den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) verwendet, der pro Eigenschaftsbasis von den CSS-Spezifikationen definiert wird. Im Gegensatz dazu setzen Benutzeragenten-Stylesheets Standardwerte auf der Basis von CSS-Selektoren fest.
>
> Beispielsweise ist der [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/Reference/Properties/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzeragenten-Stylesheet den Standard-{{cssxref("display")}}-Wert von {{HTMLElement("div")}}s auf `block`, von {{HTMLElement("table")}}s auf `table` usw. setzt.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für bestimmte Elemente.

Im folgenden Beispiel setzen wir ein benutzerdefiniertes [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight#formal_definition), versuchen dann aber, es inline im HTML-Dokument zu `revert` und `unset`. Das `revert`-Schlüsselwort wird den Text auf fett zurücksetzen, da dies der Standardwert für Header in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal halten, da, als eine vererbbare Eigenschaft, das `font-weight` dann seinen Wert vom `body` erben würde.

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

Das Zurücksetzen aller Werte ist in einer Situation nützlich, in der Sie mehrere Stiländerungen vorgenommen haben und dann zu den Standardwerten des Browsers zurückkehren möchten. Also im obigen Beispiel, anstatt `font-weight` und `color` einzeln zurückzusetzen, könnten Sie alle auf einmal zurücksetzen – indem Sie das `revert`-Schlüsselwort auf `all` anwenden.

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

Das Zurücksetzen entfernt effektiv den Wert für das ausgewählte Element mit einer bestimmten Regel und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe auf einen Abschnitt und eine rote Farbe auf einen Absatz.

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

Beachten Sie, dass der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Außerdem sind sowohl der Header als auch der einfache Textknoten `steelblue`. Das Ergebnis des Zurücksetzens macht es so, als ob `section { color: darkgreen; }` nicht für den Abschnitt mit `color: revert` angewendet worden wäre.

Wenn weder der Benutzeragent noch der Benutzer die `<h3>`- oder `<section>`-Farbwerte überschreiben, wird die `steelblue`-Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft eine vererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements wie bei seinem Elternteil zu gestalten.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Mit der {{cssxref("all")}}-Eigenschaft können Sie alle Eigenschaften auf ihren anfänglichen, geerbten, zurückgesetzten oder unbestimmten Zustand gleichzeitig zurücksetzen.

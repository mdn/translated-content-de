---
title: revert
slug: Web/CSS/revert
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Das **`revert`**-[CSS](/de/docs/Web/CSS)-Schlüsselwort setzt den kaskadierten Wert der Eigenschaft von ihrem aktuellen Wert auf den Wert zurück, den die Eigenschaft gehabt hätte, wenn keine Änderungen durch den aktuellen **{{Glossary("style_origin", "Style-Origin")}}** am aktuellen Element vorgenommen worden wären. Es setzt somit die Eigenschaft entweder auf den vom Benutzeragenten festgelegten Wert, den vom Benutzer festgelegten Wert, den geerbten Wert (falls vererbbar) oder den Anfangswert zurück. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

Dieses Schlüsselwort entfernt aus der Kaskade alle überschriebenen Stile, bis der Stil erreicht wird, zu dem zurückgerollt wird.

- Wenn es von eigenen Stilen einer Website (dem Autor-Origin) verwendet wird, setzt `revert` den kaskadierten Wert der Eigenschaft auf den benutzerdefinierten Stil des Benutzers zurück, falls vorhanden; andernfalls wird der Stil auf den Standardstil des Benutzeragenten zurückgesetzt.
- Wenn es in einem benutzerdefinierten Stylesheet eines Benutzers oder wenn der Stil vom Benutzer angewendet wurde (der Benutzer-Origin) verwendet wird, setzt `revert` den kaskadierten Wert auf den Standardstil des Benutzeragenten zurück.
- Wenn es innerhalb der Standardstile des Benutzeragenten verwendet wird, ist dieses Schlüsselwort funktional äquivalent zu {{cssxref("unset")}}.

Das `revert`-Schlüsselwort funktioniert in vielen Fällen genauso wie [`unset`](/de/docs/Web/CSS/unset). Der einzige Unterschied besteht für Eigenschaften, deren Werte vom Browser oder von benutzerdefinierten Stylesheets (auf Browserseite gesetzt) festgelegt wurden.

Revert beeinflusst nicht die Regeln, die auf Kinder eines Elements angewendet werden, das Sie zurücksetzen (aber es entfernt die Effekte einer übergeordneten Regel auf ein Kind). Wenn Sie also `color: green` für alle Abschnitte und `all: revert` auf einen bestimmten Abschnitt haben, wird die Farbe des Abschnitts schwarz sein. Wenn Sie jedoch eine Regel haben, um alle Absätze rot zu machen, dann bleiben alle Absätze in allen Abschnitten rot.

> [!NOTE]
> Revert ist nur ein Wert. Es ist immer noch möglich, den `revert`-Wert durch [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) zu überschreiben.

> [!NOTE]
> Das `revert`-Schlüsselwort ist unterschiedlich und sollte nicht mit dem {{cssxref("initial")}}-Schlüsselwort verwechselt werden, das den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) verwendet, der durch die CSS-Spezifikationen auf einer pro-Eigenschaft-Basis definiert wird. Im Gegensatz dazu legen Benutzeragenten-Stylesheets Standardwerte auf der Grundlage von CSS-Selektoren fest.
>
> Zum Beispiel ist der [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) für die [`display`](/de/docs/Web/CSS/display#formal_definition)-Eigenschaft `inline`, während ein normales Benutzeragenten-Stylesheet den Standardwert von {{cssxref("display")}} bei {{HTMLElement("div")}}s auf `block` und bei {{HTMLElement("table")}}s auf `table` festlegt usw.

## Beispiele

### Revert vs. unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei einigen Eigenschaften für einige Elemente.

Im folgenden Beispiel setzen wir einen benutzerdefinierten [`font-weight`](/de/docs/Web/CSS/font-weight#formal_definition), versuchen aber dann, ihn inline im HTML-Dokument mit `revert` und `unset` zurückzusetzen. Das `revert`-Schlüsselwort wird den Text auf fett zurücksetzen, da dies der Standardwert für Überschriften in den meisten Browsern ist. Das `unset`-Schlüsselwort wird den Text normal halten, da es sich um eine geerbte Eigenschaft handelt und der `font-weight` dann seinen Wert vom Body erben würde.

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

Das Zurücksetzen aller Werte ist in Situationen nützlich, in denen mehrere Stiländerungen vorgenommen wurden und dann zu den Standardwerten des Browsers zurückgegangen werden soll. Im obigen Beispiel könnten Sie anstelle des separaten Zurücksetzens von `font-weight` und `color` einfach alle auf einmal durch Anwenden des `revert`-Schlüsselworts auf `all` zurücksetzen.

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

Das Zurücksetzen entfernt effektiv den Wert für das ausgewählte Element durch eine Regel, und dies geschieht nur für dieses Element. Um dies zu veranschaulichen, setzen wir eine grüne Farbe für einen Abschnitt und eine rote Farbe für einen Absatz.

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

Beachten Sie, dass der Absatz immer noch rot ist, obwohl eine `color`-Eigenschaft für den Abschnitt zurückgesetzt wurde. Beachten Sie auch, dass sowohl der Header als auch der einfache Textknoten `steelblue` sind. Das Ergebnis des Zurücksetzens ist so, als ob `section { color: darkgreen; }` nicht für den mit `color: revert` angewendeten Abschnitt vorhanden wäre.

Wenn weder der Benutzeragent noch der Benutzer die Farbwertausschlüsse für `<h3>` oder `<section>` überschreiben, wird die `steelblue` Farbe von `<main>` geerbt, da die {{cssxref("color")}}-Eigenschaft eine ererbte Eigenschaft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("inherit")}}-Schlüsselwort, um die Eigenschaft eines Elements an die seines übergeordneten Elements anzupassen.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, falls sie vererbbar ist, oder auf ihren Anfangswert, falls nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften auf einmal auf ihren Anfangs-, ererbten, rückgängig gemachten oder nicht gesetzten Zustand zurückzusetzen.

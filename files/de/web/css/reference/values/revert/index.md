---
title: CSS-Schlüsselwort `revert`
short-title: revert
slug: Web/CSS/Reference/Values/revert
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`revert`**-[CSS](/de/docs/Web/CSS)-Schlüsselwort setzt den kaskadierten Wert einer Eigenschaft auf den Wert zurück, den sie hätte, wenn die aktuelle **{{Glossary("style_origin", "Stilherkunft")}}** keine Änderungen am aktuellen Element vorgenommen hätte. Dadurch wird die Eigenschaft auf den vom User Agent festgelegten Wert, den vom Benutzer festgelegten Wert, ihren geerbten Wert (falls sie vererbbar ist) oder ihren Anfangswert zurückgesetzt. Das Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Dieses Schlüsselwort entfernt alle Stile aus der Kaskade, die den Stil überlagern, auf den zurückgesetzt wird.

- Wird `revert` in den Stilen einer Website verwendet (Autor-Stilherkunft), setzt es den kaskadierten Wert der Eigenschaft auf einen benutzerdefinierten Stil zurück, sofern einer vorhanden ist. Andernfalls wird der Stil auf den Standardstil des User Agents zurückgesetzt.
- Wird `revert` in einem benutzerdefinierten Stylesheet oder in einem vom Benutzer angewendeten Stil verwendet (Benutzer-Stilherkunft), setzt es den kaskadierten Wert auf den Standardstil des User Agents zurück.
- Wird dieses Schlüsselwort in den Standardstilen des User Agents verwendet, ist es funktional gleichbedeutend mit {{cssxref("unset")}}.

In vielen Fällen funktioniert das Schlüsselwort `revert` genauso wie {{cssxref("unset")}}. Der einzige Unterschied betrifft Eigenschaften, deren Werte vom Browser oder durch benutzerdefinierte Stylesheets festgelegt wurden, die Benutzer erstellt haben (auf Browserseite).

`revert` wirkt sich nicht auf Regeln aus, die auf Kindelemente eines zurückgesetzten Elements angewendet werden (entfernt aber die Auswirkungen einer Regel für das Elternelement auf ein Kindelement). Wenn also für alle Sections `color: green` gilt und für eine bestimmte Section `all: revert`, ist die Farbe dieser Section Schwarz. Gibt es jedoch eine Regel, die alle Absätze rot färbt, bleiben alle Absätze in sämtlichen Sections rot.

> [!NOTE]
> `revert` ist lediglich ein Wert. Der Wert `revert` kann weiterhin durch eine Regel mit höherer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) überschrieben werden.

> [!NOTE]
> Das Schlüsselwort `revert` unterscheidet sich vom Schlüsselwort {{cssxref("initial")}} und sollte nicht damit verwechselt werden. {{cssxref("initial")}} verwendet den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), der in den CSS-Spezifikationen für jede Eigenschaft einzeln definiert ist. Im Gegensatz dazu legen User-Agent-Stylesheets Standardwerte anhand von CSS-Selektoren fest.
>
> Beispielsweise ist der [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) der Eigenschaft [`display`](/de/docs/Web/CSS/Reference/Properties/display#formal_definition) `inline`, während ein normales User-Agent-Stylesheet den Standardwert von {{cssxref("display")}} für {{HTMLElement("div")}}-Elemente auf `block`, für {{HTMLElement("table")}}-Elemente auf `table` usw. setzt.

## Beispiele

### Revert im Vergleich zu unset

Obwohl `revert` und `unset` ähnlich sind, unterscheiden sie sich bei manchen Eigenschaften bestimmter Elemente.

Im folgenden Beispiel legen wir einen benutzerdefinierten Wert für [`font-weight`](/de/docs/Web/CSS/Reference/Properties/font-weight#formal_definition) fest und versuchen dann, ihn im HTML-Dokument mit Inline-Stilen durch `revert` beziehungsweise `unset` zurückzusetzen. Das Schlüsselwort `revert` setzt den Text auf Fettschrift zurück, da dies in den meisten Browsern der Standardwert für Überschriften ist. Das Schlüsselwort `unset` belässt den Text dagegen in normaler Schriftstärke: Da `font-weight` eine vererbte Eigenschaft ist, erbt sie in diesem Fall ihren Wert vom `body`-Element.

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

{{EmbedLiveSample('revert_vs._unset', 0, 200)}}

### Alle Eigenschaften zurücksetzen

Alle Werte zurückzusetzen ist nützlich, wenn Sie mehrere Stiländerungen vorgenommen haben und anschließend zu den Standardwerten des Browsers zurückkehren möchten. Im obigen Beispiel könnten Sie also `font-weight` und `color` nicht einzeln, sondern gleichzeitig zurücksetzen, indem Sie der Eigenschaft `all` den Wert `revert` zuweisen.

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

### Revert auf einem Elternelement

Durch das Zurücksetzen wird der Wert für das Element, das Sie mit einer Regel auswählen, praktisch entfernt. Dies geschieht nur für dieses Element. Zur Veranschaulichung legen wir für eine Section die Farbe Grün und für einen Absatz die Farbe Rot fest.

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

Beachten Sie, dass der Absatz weiterhin rot ist, obwohl eine `color`-Eigenschaft für die Section zurückgesetzt wurde. Beachten Sie außerdem, dass sowohl die Überschrift als auch der einfache Textknoten `steelblue` sind. Durch das Zurücksetzen ist das Ergebnis für die Section mit `color: revert` so, als gäbe es `section { color: darkgreen; }` nicht.

Wenn weder der User Agent noch der Benutzer die Farbwerte von `<h3>` oder `<section>` überschreiben, wird die Farbe `steelblue` von `<main>` geerbt, da die Eigenschaft {{cssxref("color")}} vererbbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das Schlüsselwort {{cssxref("initial")}}, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, damit eine Eigenschaft eines Elements denselben Wert wie beim Elternelement erhält.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den in einer vorherigen Kaskadenebene festgelegten Wert zurückzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-rule")}}, um eine Eigenschaft auf den Wert einer früheren passenden Stilregel zurückzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft auf ihren geerbten Wert zu setzen, falls sie vererbbar ist, andernfalls auf ihren Anfangswert.
- Mit der Eigenschaft {{cssxref("all")}} können Sie alle Eigenschaften gleichzeitig auf ihren Anfangswert, geerbten Wert oder einen durch `revert` beziehungsweise `unset` bestimmten Wert zurücksetzen.

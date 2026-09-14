---
title: "`line-clamp` CSS property"
short-title: line-clamp
slug: Web/CSS/Reference/Properties/line-clamp
l10n:
  sourceCommit: 0451ba52048b172d3c2c1b8b5ce21950384ecbb2
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`line-clamp`** ermöglicht es, den Inhalt eines {{Glossary("block", "Blocks")}} auf die angegebene Anzahl von Zeilen zu begrenzen. Optional ermöglicht sie auch, Inhalt in die letzte Zeile einzufügen, um anzuzeigen, dass Inhalt abgeschnitten wurde.

## Syntax

```css
/* Keyword value */
line-clamp: none;

/* <integer> value only */
line-clamp: 3;
line-clamp: 10;

/* <integer> and <'block-ellipsis'> values */
line-clamp: 3 no-ellipsis;
line-clamp: 10 "… (there is extra content)";

/* <'block-ellipsis'> value only */
line-clamp: no-ellipsis;
line-clamp: "… (there is extra content)";

/* Global values */
line-clamp: inherit;
line-clamp: initial;
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
```

### Werte

Diese Eigenschaft wird als ein oder zwei durch Leerzeichen getrennte Werte aus der folgenden Liste angegeben:

- `none`
  - : Gibt an, dass der Inhalt nicht begrenzt wird. Dieses Schlüsselwort kann nicht mit den anderen Werten kombiniert werden. Dies ist der Standardwert.
- {{cssxref("integer")}} {{optional_inline}}
  - : Gibt die Anzahl der Zeilen an, nach denen der Inhalt begrenzt wird. Der Wert muss größer als 0 sein.
- `<’block-ellipsis’>` {{optional_inline}}
  - : Gibt den Inhalt an, der in die letzte Zeile eingefügt wird. Er kann einen der folgenden Werte annehmen:
    - `no-ellipsis`: Es wird kein Auslassungszeichen (Zeichen U+2026) hinzugefügt, wenn der Text aufgrund der angegebenen Zeilenzahl abgeschnitten wird.
    - `auto`: Rendert ein Auslassungszeichen (U+2026), wenn der Text abgeschnitten wird.
    - {{cssxref("string")}}: Rendert die angegebene Zeichenfolge am Ende der betroffenen Zeile. Browser können diese Zeichenfolge abschneiden, wenn sie sehr lang ist. Eine leere Zeichenfolge verhält sich wie der Wert `no-ellipsis`.

> [!NOTE]
> Wenn `<’block-ellipsis’>` ohne ein `<integer>` angegeben wird, gilt es nur, wenn der Inhalt durch die Höhe des Containers begrenzt wird.

## Beschreibung

In den meisten Fällen sollten Sie außerdem {{cssxref("overflow")}} auf `hidden` setzen, andernfalls wird der Inhalt nicht abgeschnitten, aber nach der angegebenen Anzahl von Zeilen wird trotzdem ein Auslassungszeichen angezeigt.

Bei Anwendung auf Anchor-Elemente kann das Abschneiden in der Mitte des Textes erfolgen, nicht unbedingt am Ende.

> [!NOTE]
> Zur Unterstützung älterer Implementierungen funktioniert die herstellerspezifisch präfixierte Eigenschaft `-webkit-line-clamp` nur in Kombination mit der auf `-webkit-box` oder `-webkit-inline-box` gesetzten {{cssxref("display")}}-Eigenschaft und der auf `vertical` gesetzten {{cssxref("box-orient", "-webkit-box-orient")}}-Eigenschaft. Obwohl diese präfixierten Eigenschaften veraltet sind, ist die gegenseitige Abhängigkeit dieser drei Eigenschaften vollständig spezifiziertes Verhalten und wird weiterhin unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Inhalt mit einem Auslassungszeichen oder einer benutzerdefinierten Zeichenfolge abschneiden

In diesem Beispiel gibt es drei Karten, jede mit einem unterschiedlichen `line-clamp`-Wert:

- Die erste hat nur ein `<integer>`, um die Anzahl der Zeilen zu begrenzen.
- Die zweite hat ein `<integer>` und den Wert `no-ellipsis`.
- Die dritte hat ein `<integer>` und eine benutzerdefinierte `<string>`.

#### HTML

```html
<section>
  <div class="card">
    <h2>number of lines</h2>
    <p class="integer">
      In this card, the <em>number of lines</em> is specified by an
      <code>&lt;integer&gt;</code>. Any content that does not fit is truncated
      and an ellipsis is shown.
    </p>
  </div>
  <div class="card">
    <h2>no ellipsis</h2>
    <p class="no-ellipsis">
      In this card, an <code>&lt;integer&gt;</code> and a
      <em>no-ellipsis</em> value are specified. Any content that does not fit is
      truncated and no ellipsis is shown.
    </p>
  </div>
  <div class="card">
    <h2>custom string</h2>
    <p class="string">
      In this card, an <code>&lt;integer&gt;</code> and a <em>string</em> value
      are specified. Any content that does not fit is truncated and the custom
      string is shown instead of an ellipsis.
    </p>
  </div>
</section>
```

#### CSS

```css hidden
/* layout for the cards */
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  justify-content: space-between;
}
em {
  color: tomato;
}
.card {
  padding: 0.2rem;
  border: 1px solid tomato;
  border-radius: 0.2rem;
  max-width: 250px;
}
```

```css
.integer {
  line-clamp: 2;
  overflow: hidden;
}
.no-ellipsis {
  line-clamp: 2 no-ellipsis;
  overflow: hidden;
}
.string {
  line-clamp: 2 "… (my custom text)";
  overflow: hidden;
}
```

#### Ergebnis

{{EmbedLiveSample("truncating_content_with_an_ellipsis_or_a_custom_string", "100%", "150")}}

### Einen Absatz mit der Legacy-Eigenschaft abschneiden

Dieses Beispiel verwendet die Legacy-Eigenschaft `-webkit-line-clamp` mit `display`, das auf `-webkit-box` gesetzt ist.

> [!NOTE]
> Bei Verwendung der Legacy-Eigenschaft `-webkit-line-clamp` sollten Sie außerdem {{cssxref("overflow")}} auf `hidden` setzen, andernfalls wird der Inhalt nicht abgeschnitten, obwohl nach der angegebenen Anzahl von Zeilen weiterhin ein Auslassungszeichen angezeigt wird.

#### HTML

```html
<p>
  In this example the <code>-webkit-line-clamp</code> property is set to
  <code>3</code>, which means the text is clamped after three lines. An ellipsis
  will be shown at the point where the text is clamped.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

#### Ergebnis

{{EmbedLiveSample("Truncating_a_paragraph_with_the_legacy_property", "100%", "130")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Line Clampin' (mehrzeiligen Text abschneiden)](https://css-tricks.com/line-clampin/)

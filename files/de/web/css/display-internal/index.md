---
title: <display-internal>
slug: Web/CSS/display-internal
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Einige Layout-Modelle wie `table` und `ruby` haben eine komplexe interne Struktur, mit mehreren unterschiedlichen Rollen, die ihre Kinder und Nachkommen erfüllen können. Diese Seite definiert jene "internen" Display-Werte, die nur innerhalb dieses bestimmten Layout-Modus Bedeutung haben.

## Syntax

Gültige `<display-internal>` Werte:

- `table-row-group`
  - : Diese Elemente verhalten sich wie {{HTMLElement("tbody")}} HTML-Elemente.
- `table-header-group`
  - : Diese Elemente verhalten sich wie {{HTMLElement("thead")}} HTML-Elemente.
- `table-footer-group`
  - : Diese Elemente verhalten sich wie {{HTMLElement("tfoot")}} HTML-Elemente.
- `table-row`
  - : Diese Elemente verhalten sich wie {{HTMLElement("tr")}} HTML-Elemente.
- `table-cell`
  - : Diese Elemente verhalten sich wie {{HTMLElement("td")}} HTML-Elemente.
- `table-column-group`
  - : Diese Elemente verhalten sich wie {{HTMLElement("colgroup")}} HTML-Elemente.
- `table-column`
  - : Diese Elemente verhalten sich wie {{HTMLElement("col")}} HTML-Elemente.
- `table-caption`
  - : Diese Elemente verhalten sich wie {{HTMLElement("caption")}} HTML-Elemente.
- `ruby-base`
  - : Diese Elemente verhalten sich wie {{HTMLElement("rb")}} HTML-Elemente.
- `ruby-text`
  - : Diese Elemente verhalten sich wie {{HTMLElement("rt")}} HTML-Elemente.
- `ruby-base-container`
  - : Diese Elemente werden als anonyme Boxen generiert.
- `ruby-text-container`
  - : Diese Elemente verhalten sich wie {{HTMLElement("rtc")}} HTML-Elemente.

## Formale Syntax

{{csssyntax}}

## Beispiele

### CSS-Tabellenbeispiel

Das folgende Beispiel demonstriert das Layout eines Formulars unter Verwendung von CSS-Tabelle-Layout.

#### HTML

```html
<main>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Age</label>
    <input type="text" id="age" name="age" />
  </div>
</main>
```

#### CSS

```css
main {
  display: table;
}

div {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin: 5px;
}
```

#### Ergebnis

{{EmbedLiveSample('CSS_tables_example', '100%', 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

---
title: <display-internal>
slug: Web/CSS/display-internal
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Einige Layoutmodelle, wie `table` und `ruby`, haben eine komplexe interne Struktur mit verschiedenen Rollen, die ihre Kinder und Nachfahren erfüllen können. Diese Seite definiert diese "internen" Display-Werte, die nur innerhalb dieses speziellen Layout-Modus Bedeutung haben.

## Syntax

Gültige `<display-internal>` Werte:

- `table-row-group`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("tbody")}}.
- `table-header-group`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("thead")}}.
- `table-footer-group`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("tfoot")}}.
- `table-row`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("tr")}}.
- `table-cell`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("td")}}.
- `table-column-group`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("colgroup")}}.
- `table-column`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("col")}}.
- `table-caption`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("caption")}}.
- `ruby-base`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("rb")}}.
- `ruby-text`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("rt")}}.
- `ruby-base-container`
  - : Diese Elemente werden als anonyme Boxen generiert.
- `ruby-text-container`
  - : Diese Elemente verhalten sich wie HTML-Elemente vom Typ {{HTMLElement("rtc")}}.

## Formaler Syntax

{{csssyntax}}

## Beispiele

### CSS-Tabellenbeispiel

Das folgende Beispiel demonstriert das Layout eines Formulars unter Verwendung des CSS-Tabellenlayouts.

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

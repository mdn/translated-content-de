---
title: Boolean-Attribut (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Boolean-Attribut** in {{Glossary("HTML", "HTML")}} ist ein {{Glossary("attribute", "Attribut")}}, das `true`- oder `false`-Werte repräsentiert. Wenn ein HTML-Tag ein Boolean-Attribut enthält — unabhängig vom Wert dieses Attributs — wird das Attribut auf `true` für dieses Element gesetzt. Wenn ein HTML-Tag das Attribut nicht enthält, wird das Attribut auf `false` gesetzt.

Wenn das Attribut vorhanden ist, kann es eine der folgenden Formen haben:

- nur der Attributname allein; z.B. `attribute`, wobei sein impliziter Wert der leere String ist
- das Attribut mit einem Wert des leeren Strings; z.B. `attribute=""`
- das Attribut mit einem Wert des Attributnamens selbst, ohne führende oder nachfolgende Leerzeichen, Groß-/Kleinschreibung wird ignoriert; z.B. `attribute="attribute"`, `attribute="ATTRIBUTE"`

> [!NOTE]
> Die Zeichenfolgen "true" und "false" sind ungültige Werte. Um das Attribut auf `false` zu setzen, sollte das Attribut ganz weggelassen werden. Obwohl moderne Browser _jede_ Zeichenkette als `true` behandeln, sollten Sie sich nicht auf dieses Verhalten verlassen.

Hier ist ein Beispiel für ein HTML-Boolean-Attribut `checked`:

```html
<!-- The following checkboxes will be checked on initial rendering -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="checked" />
<input type="checkbox" checked="Checked" />

<!-- The following checkbox will not be checked on initial rendering -->
<input type="checkbox" />
```

## Siehe auch

- [Boolean-Attribute](/de/docs/Web/HTML/Reference/Attributes#boolean_attributes)
- [Boolean-Attribute](https://html.spec.whatwg.org/#boolean-attributes) in der HTML-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Attribute", "Attribute")}}
  - {{Glossary("Enumerated", "Enumeriertes Attribut")}}

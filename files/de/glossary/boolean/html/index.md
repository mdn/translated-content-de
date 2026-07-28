---
title: Boolean-Attribut (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Ein **Boolean-Attribut** in {{Glossary("HTML", "HTML")}} ist ein {{Glossary("attribute", "Attribut")}}, das `true` oder `false` Werte darstellt. Wenn ein HTML-Tag ein Boolean-Attribut enthält – unabhängig vom Wert dieses Attributs – wird das Attribut auf `true` für dieses Element gesetzt. Wenn ein HTML-Tag das Attribut nicht enthält, wird das Attribut auf `false` gesetzt.

Wenn das Attribut vorhanden ist, kann es eine der folgenden Formen haben:

- nur der Attributname selbst; z.B. `attribute`, was bedeutet, dass sein impliziter Wert der leere String ist
- das Attribut mit einem Wert des leeren Strings; z.B. `attribute=""`
- das Attribut mit einem Wert, der dem Namen des Attributs selbst entspricht, ohne führende oder nachfolgende Leerzeichen, und Groß-/Kleinschreibung wird ignoriert; z.B. `attribute="attribute"`, `attribute="ATTRIBUTE"`

> [!NOTE]
> Die Strings "true" und "false" sind ungültige Werte. Um das Attribut auf `false` zu setzen, sollte das Attribut komplett weggelassen werden. Obwohl moderne Browser _jeden_ String-Wert als `true` behandeln, sollten Sie sich nicht auf dieses Verhalten verlassen.

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
- Zugehörige Glossarbegriffe:
  - {{Glossary("Attribute", "Attribut")}}
  - {{Glossary("Enumerated", "Enumeriertes Attribut")}}

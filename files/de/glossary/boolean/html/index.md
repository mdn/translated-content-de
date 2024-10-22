---
title: Boolean-Attribut (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 29aa8935f9c66c75b58c6cae8bce4afe157d1eb1
---

{{GlossarySidebar}}

Ein **Boolean-Attribut** in {{Glossary("HTML", "HTML")}} ist ein {{Glossary("attribute", "Attribut")}}, das `true`- oder `false`-Werte darstellt. Wenn ein HTML-Tag ein Boolean-Attribut enthält — unabhängig vom Wert dieses Attributs — wird das Attribut auf diesem Element auf `true` gesetzt. Wenn ein HTML-Tag das Attribut nicht enthält, wird das Attribut auf `false` gesetzt.

Falls das Attribut vorhanden ist, kann es eine der folgenden Formen haben:

- nur der Attributname; z.B. `attribute`, was bedeutet, dass der implizite Wert der leere String ist
- das Attribut mit einem Wert des leeren Strings; z.B. `attribute=""`
- das Attribut mit einem Wert des Attributnamens selbst, ohne führende oder nachfolgende Leerzeichen; z.B. `attribute="attribute"`

> [!NOTE]
> Die Strings "true" und "false" sind ungültige Werte. Um das Attribut auf `false` zu setzen, sollte das Attribut vollständig weggelassen werden. Obwohl moderne Browser _jede_ String-Wert als `true` behandeln, sollten Sie sich nicht auf dieses Verhalten verlassen.

Hier ist ein Beispiel für ein HTML Boolean-Attribut `checked`:

```html
<!-- The following checkboxes will be checked on initial rendering -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="checked" />

<!-- The following checkbox will not be checked on initial rendering -->
<input type="checkbox" />
```

## Siehe auch

- [Boolean-Attribute](/de/docs/Web/HTML/Attributes#boolean_attributes)
- [Boolean-Attribute](https://html.spec.whatwg.org/#boolean-attributes) in der HTML-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Attribute", "Attribut")}}
  - {{Glossary("Enumerated", "Enumeriertes Attribut")}}

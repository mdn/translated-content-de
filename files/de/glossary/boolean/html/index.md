---
title: Boolean-Attribut (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: e301a2b38a7a491bbb513c7e09f5894bfb026c31
---

{{GlossarySidebar}}

Ein **Boolean-Attribut** in {{Glossary("HTML", "HTML")}} ist ein {{Glossary("attribute", "Attribut")}}, das `true` oder `false` Werte repräsentiert. Wenn ein HTML-Tag ein Boolean-Attribut enthält — unabhängig vom Wert dieses Attributs — wird das Attribut auf `true` für dieses Element gesetzt. Wenn ein HTML-Tag das Attribut nicht enthält, wird das Attribut auf `false` gesetzt.

Wenn das Attribut vorhanden ist, kann es eine der folgenden Formen haben:

- Der Attributname allein; z.B. `attribute`, was bedeutet, dass sein impliziter Wert der leere String ist.
- Das Attribut mit einem Wert des leeren Strings; z.B. `attribute=""`.
- Das Attribut mit einem Wert des Attributnamens selbst, ohne führenden oder nachfolgenden Leerraum und Groß-/Kleinschreibung ignoriert; z.B. `attribute="attribute"`, `attribute="ATTRIBUTE"`.

> [!NOTE]
> Die Zeichenfolgen "true" und "false" sind ungültige Werte. Um das Attribut auf `false` zu setzen, sollte das Attribut ganz weggelassen werden. Obwohl moderne Browser _jeden_ Zeichenfolgenwert als `true` behandeln, sollten Sie sich nicht auf dieses Verhalten verlassen.

Hier ist ein Beispiel für ein HTML Boolean-Attribut `checked`:

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

- [Boolean-Attribute](/de/docs/Web/HTML/Attributes#boolean_attributes)
- [Boolean-Attribute](https://html.spec.whatwg.org/#boolean-attributes) in der HTML-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Attribute", "Attribut")}}
  - {{Glossary("Enumerated", "Aufzählungs-Attribut")}}

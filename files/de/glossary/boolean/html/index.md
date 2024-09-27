---
title: Boolean-Attribut (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{GlossarySidebar}}

Ein **Boolean-Attribut** in [HTML](/de/docs/Glossary/HTML) ist ein [Attribut](/de/docs/Glossary/attribute), das `true`- oder `false`-Werte repräsentiert. Wenn ein HTML-Tag ein Boolean-Attribut enthält - unabhängig vom Wert dieses Attributs - wird das Attribut auf `true` für dieses Element gesetzt. Wenn ein HTML-Tag das Attribut nicht enthält, wird das Attribut auf `false` gesetzt.

Wenn das Attribut vorhanden ist, kann es einen der folgenden Werte haben:

- keinen Wert, z. B. `attribute`
- die leere Zeichenkette, z. B. `attribute=""`
- der Attributname selbst, ohne führende oder nachfolgende Leerzeichen, z. B. `attribute="attribute"`

> [!NOTE]
> Die Zeichenfolgen "true" und "false" sind ungültige Werte. Um das Attribut auf `false` zu setzen, sollte das Attribut vollständig weggelassen werden. Obwohl moderne Browser _jeden_ Zeichenfolgenwert als `true` behandeln, sollten Sie sich nicht auf dieses Verhalten verlassen.

Hier ist ein Beispiel für ein HTML-Boolean-Attribut `checked`:

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
  - [Attribut](/de/docs/Glossary/Attribute)
  - [Aufzählbares Attribut](/de/docs/Glossary/Enumerated)

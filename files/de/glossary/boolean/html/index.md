---
title: Boolesches Attribut (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{GlossarySidebar}}

Ein **boolesches Attribut** in {{Glossary("HTML")}} ist ein {{glossary("attribute")}}, das `true`- oder `false`-Werte darstellt. Wenn ein HTML-Tag ein boolesches Attribut enthält - unabhängig vom Wert dieses Attributs - wird das Attribut auf `true` für dieses Element gesetzt. Wenn ein HTML-Tag das Attribut nicht enthält, wird es auf `false` gesetzt.

Wenn das Attribut vorhanden ist, kann es einen der folgenden Werte haben:

- überhaupt keinen Wert, z. B. `attribute`
- den leeren String, z. B. `attribute=""`
- der Name des Attributs selbst, ohne führende oder nachfolgende Leerzeichen, z. B. `attribute="attribute"`

> [!NOTE]
> Die Zeichenfolgen "true" und "false" sind ungültige Werte. Um das Attribut auf `false` zu setzen, sollte das Attribut ganz weggelassen werden. Obwohl moderne Browser _jeden_ Stringwert als `true` behandeln, sollten Sie sich nicht auf dieses Verhalten verlassen.

Hier ist ein Beispiel für ein HTML-boolesches Attribut `checked`:

```html
<!-- Die folgenden Kontrollkästchen werden bei der ersten Darstellung aktiviert sein -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="checked" />

<!-- Das folgende Kontrollkästchen wird bei der ersten Darstellung nicht aktiviert sein -->
<input type="checkbox" />
```

## Siehe auch

- [Boolean attributes](/de/docs/Web/HTML/Attributes#boolean_attributes)
- [Boolean attributes](https://html.spec.whatwg.org/#boolean-attributes) in der HTML-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Attribute")}}
  - {{Glossary("Enumerated", "Enumeriertes Attribut")}}

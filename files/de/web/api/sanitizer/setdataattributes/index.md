---
title: "Sanitizer: setDataAttributes()-Methode"
short-title: setDataAttributes()
slug: Web/API/Sanitizer/setDataAttributes
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setDataAttributes()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, ob alle [`data-*` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) vom Sanitizer zugelassen werden oder ob sie einzeln angegeben werden müssen.

Wenn dies auf `true` gesetzt ist, werden Datenattribute automatisch zugelassen und Sie sollten sie nicht einzeln mit [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) (oder [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) für lokale Attribute) hinzufügen.

Beachten Sie, dass diese Methode nützlich für [Zulassungskonfigurationen](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) ist, die viele `data-*` Attribute enthalten, die Sie zulassen möchten.
Die Methode gibt `false` zurück, wenn sie mit Entfernkonfigurationen verwendet wird, die alle `data-*` Attribute einfach durch Weglassen zulassen können.

## Syntax

```js-nolint
setDataAttributes(allow);
```

### Parameter

- `allow`
  - : `true`, wenn alle `data-*` Attribute erlaubt sind, und `false`, wenn sie ausdrücklich angegeben werden müssen.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, und `false`, wenn die Konfiguration bereits [`dataAttributes`](/de/docs/Web/API/SanitizerConfig#dataattributes) auf den angegebenen Wert gesetzt hat oder `dataAttributes` nicht auf `true` gesetzt werden kann, da dieser Sanitizer eine Entfernkonfiguration hat.

## Beispiele

### Grundlegende Nutzung

Der folgende Code zeigt die grundlegende Verwendung der `setDataAttributes()`-Methode.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Allow all data-* attributes
sanitizer.setDataAttributes(true);

// data-* attributes are allowed by adding them
// to the attributes array
sanitizer.setDataAttributes(false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

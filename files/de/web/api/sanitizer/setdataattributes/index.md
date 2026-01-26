---
title: "Sanitizer: setDataAttributes() Methode"
short-title: setDataAttributes()
slug: Web/API/Sanitizer/setDataAttributes
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`setDataAttributes()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, ob alle [`data-*` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) vom Sanitizer zugelassen werden, oder ob sie einzeln angegeben werden müssen.

Ist dies auf `true` gesetzt, werden Datenattribute automatisch zugelassen und Sie sollten sie nicht einzeln mit [`Sanitizer.allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) (oder [`Sanitizer.allowElement()`](/de/docs/Web/API/Sanitizer/allowElement) für lokale Attribute) hinzufügen.

Beachten Sie, dass diese Methode nützlich für [Erlaubniskonfigurationen](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations) ist, die viele `data-*` Attribute haben, die Sie zulassen möchten. Die Methode gibt `false` zurück, wenn sie mit Entfernungs-Konfigurationen verwendet wird, welche alle `data-*` Attribute einfach durch ihre Auslassung erlauben können.

## Syntax

```js-nolint
setDataAttributes(allow);
```

### Parameter

- `allow`
  - : `true`, wenn alle `data-*` Attribute zugelassen sind, und `false`, wenn sie explizit angegeben werden müssen.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, und `false`, wenn die Konfiguration bereits [`dataAttributes`](/de/docs/Web/API/SanitizerConfig#dataattributes) auf den angegebenen Wert gesetzt hat oder `dataAttributes` nicht auf `true` gesetzt werden können, weil dieser Sanitizer eine Entfernungs-Konfiguration hat.

## Beispiele

### Grundlegende Verwendung

Der unten stehende Code zeigt die grundlegende Verwendung der `setDataAttributes()`-Methode.

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

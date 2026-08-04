---
title: "CSSStyleValue: parseAll() statische Methode"
short-title: parseAll()
slug: Web/API/CSSStyleValue/parseAll_static
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}}

Die **`parseAll()`** statische Methode der [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) Schnittstelle setzt alle Vorkommen einer spezifischen CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten zurück, die jeweils einen der bereitgestellten Werte enthalten.

> [!NOTE]
> Diese Methode kann nicht in [`Worker`](/de/docs/Web/API/Worker) oder [`Worklet`](/de/docs/Web/API/Worklet)-Kontexten aufgerufen werden.
> Der Rest der `CSSStyleValue`-Schnittstelle bleibt in Workern und Worklets verfügbar.

## Syntax

```js-nolint
CSSStyleValue.parseAll(property, value)
```

### Parameter

- `property`
  - : Eine zu setzende CSS-Eigenschaft.
- `value`
  - : Ein komma-getrennter String, der einen oder mehrere Werte enthält, die auf die bereitgestellte Eigenschaft angewendet werden.

### Rückgabewert

Ein Array von `CSSStyleValue`-Objekten, die jeweils einen der bereitgestellten Werte enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

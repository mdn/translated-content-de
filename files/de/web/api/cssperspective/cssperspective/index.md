---
title: "CSSPerspective: CSSPerspective()-Konstruktor"
short-title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
l10n:
  sourceCommit: ca4b3f28ed0e1ae9817e84a2eab11c2184a0603b
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSPerspective()`**-Konstruktor erstellt ein neues [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)-Objekt, das den {{cssxref("transform-function/perspective", "perspective()")}}-Wert der einzelnen {{CSSXref('transform')}}-Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSPerspective(length)
```

### Parameter

- [`length`](/de/docs/Web/API/CSSPerspective/length)
  - : Ein Wert für den Abstand des zu erstellenden [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)-Objekts von z=0.
    Dieser muss ein {{cssxref('length')}}-Wert sein.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Wert für `CSSPerspective.length` vorhanden ist, dieser aber kein {{cssxref('length')}}-Wert ist.

## Beispiele

Noch zu ergänzen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

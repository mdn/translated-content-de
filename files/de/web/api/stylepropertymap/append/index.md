---
title: "StylePropertyMap: append()-Methode"
short-title: append()
slug: Web/API/StylePropertyMap/append
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}}

Die **`append()`**-Methode der [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle fügt einem Werteliste einer CSS-Eigenschaft mit Listenwerten einen oder mehrere Werte hinzu.

Eine CSS-Eigenschaft mit Listenwerten ist eine, deren Wert eine durch Kommas getrennte Liste von Begriffen ist, wie z.B. {{cssxref("background-image")}} oder {{cssxref("animation")}}.

## Syntax

```js-nolint
append(property)
append(property, value1)
append(property, value1, value2)
append(property, value1, value2, /* …, */ valueN)
```

### Parameter

- `property`
  - : Ein Bezeichner, der das stilistische Merkmal angibt (z.B. Schriftart, Breite, Hintergrundfarbe), das hinzugefügt werden soll.
- `value1`, …, `valueN`
  - : Ein oder mehrere Werte, die in der angegebenen Reihenfolge am Ende der Werteliste von `property` hinzugefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - `property` keine gültige CSS-Eigenschaft mit Listenwerten ist.
    - Einer der `value1`, …, `valueN` bereits mit einer anderen Eigenschaft verbunden ist (zum Beispiel ein Wert, der aus dem Eintrag einer Eigenschaft in einem `StylePropertyMap` gelesen und dann an `append()` für eine andere Eigenschaft übergeben wurde).
    - Einer der `value1`, …, `valueN` ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)- oder [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue)-Objekt ist.
    - Der aktuelle Wert von `property` einen {{cssxref("var")}}-Verweis enthält.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein zusätzlicher Hintergrundbild-Wert zur {{cssxref('background-image')}}-Eigenschaft des Elements hinzugefügt wird, unter Verwendung von [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap).

```js
// get the button element
const buttonEl = document.querySelector("button");

// append another value to the background-image property set on the attribute
buttonEl.attributeStyleMap.append(
  "background-image",
  "linear-gradient(180deg, blue, black)",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

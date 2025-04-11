---
title: "HTMLFormElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Interfaces führt die gleichen Gültigkeitsüberprüfungen durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity) Methode. Zusätzlich zeigt der Browser für jedes ausgelöste und nicht abgebrochene [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis das Problem dem Benutzer an.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Werte der zugehörigen Steuerelemente keine Gültigkeitsprobleme haben; andernfalls `false`.

## Beispiel

```js
document.forms["my-form"].addEventListener(
  "submit",
  () => {
    document.forms["my-form"].reportValidity();
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFormElement.checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)

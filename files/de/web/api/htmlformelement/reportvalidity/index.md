---
title: "HTMLFormElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle führt die gleichen Gültigkeitsprüfschritte aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)-Methode. Zusätzlich zeigt der Browser bei jedem ausgelösten und nicht abgebrochenen [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis dem Benutzer das Problem an.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Werte der zugehörigen Steuerelemente keine Gültigkeitsprobleme aufweisen; andernfalls wird `false` zurückgegeben.

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
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

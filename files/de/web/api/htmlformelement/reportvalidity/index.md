---
title: "HTMLFormElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Interfaces führt die gleichen Gültigkeitsprüfschritte aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity) Methode. Zusätzlich zeigt der Browser bei jedem ausgelösten und nicht abgebrochenen [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis das Problem dem Benutzer an.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Werte der zugehörigen Steuerungen keine Gültigkeitsprobleme aufweisen; andernfalls `false`.

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
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

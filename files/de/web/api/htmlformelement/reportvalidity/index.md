---
title: "HTMLFormElement: Methode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces führt die gleichen Gültigkeitsprüfungs-Schritte wie die [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)-Methode aus. Zusätzlich zeigt der Browser bei jedem ausgelösten und nicht abgebrochenen [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis das Problem dem Benutzer an.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Werte der zugehörigen Steuerungen keine Gültigkeitsprobleme haben; andernfalls wird `false` zurückgegeben.

## Beispiel

```js
document.forms["my-form"].addEventListener("submit", () => {
  document.forms["my-form"].reportValidity();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFormElement.checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Eingabebeschränkungen validieren](/de/docs/Web/HTML/Guides/Constraint_validation)

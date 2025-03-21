---
title: "HTMLTextAreaElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLTextAreaElement/reportValidity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces führt die gleichen Gültigkeitsüberprüfungen durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)-Methode. Zusätzlich zeigt der Browser dem Benutzer das Problem an, wenn das [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls gibt er `false` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen

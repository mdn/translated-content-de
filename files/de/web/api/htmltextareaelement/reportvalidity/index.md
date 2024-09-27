---
title: "HTMLTextAreaElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLTextAreaElement/reportValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces führt die gleichen Gültigkeitsprüfungs-Schritte aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)-Methode. Wenn zusätzlich das [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis nicht abgebrochen wird, zeigt der Browser dem Benutzer das Problem an.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls wird `false` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Eingeschränkte Validierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen

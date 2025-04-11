---
title: "HTMLTextAreaElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLTextAreaElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Interfaces führt dieselben Gültigkeitsprüfschritte aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity) Methode. Zusätzlich zeigt der Browser das Problem dem Benutzer an, sofern das [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen

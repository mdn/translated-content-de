---
title: "HTMLSelectElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLSelectElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Validitätszustände dieses Elements darstellt.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiel

Das folgende Beispiel erfasst den Validitätszustand eines Select-Elements und verarbeitet es, wenn es nicht gültig ist:

```js
const select = document.getElementById("mySelect");
const validityState = select.validity;
if (!validityState.valid) {
  // Test each validity state
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)

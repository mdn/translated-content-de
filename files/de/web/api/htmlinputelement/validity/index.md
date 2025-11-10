---
title: "HTMLInputElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLInputElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt zurück, das die Gültigkeitszustände dieses Elements repräsentiert.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState) Objekt.

## Beispiele

Das folgende Beispiel holt den Gültigkeitszustand eines Eingabeelements und verarbeitet ihn, falls er ungültig ist:

```js
const input = document.getElementById("myInput");
const validityState = input.validity;
if (!validityState.valid) {
  // Test each validity state
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)

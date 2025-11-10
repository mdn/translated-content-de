---
title: "HTMLTextAreaElement: Gültigkeitseigenschaft"
short-title: validity
slug: Web/API/HTMLTextAreaElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validity`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände dieses Elements repräsentiert.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel erfasst den Gültigkeitszustand eines Textbereichselements und verarbeitet es, wenn es nicht gültig ist:

```js
const textArea = document.getElementById("myTextArea");
const validityState = textArea.validity;
if (!validityState.valid) {
  // Test each validity state
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Eingabebeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation)

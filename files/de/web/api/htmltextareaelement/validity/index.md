---
title: "HTMLTextAreaElement: Gültigkeitseigenschaft"
short-title: Gültigkeit
slug: Web/API/HTMLTextAreaElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft des {{domxref("HTMLTextAreaElement")}} Interfaces gibt ein {{domxref("ValidityState")}} Objekt zurück, das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.

## Wert

Ein {{domxref("ValidityState")}} Objekt.

## Beispiele

Das folgende Beispiel ermittelt den Gültigkeitszustand eines Textbereichselements und verarbeitet es, wenn es nicht gültig ist:

```js
const textArea = document.getElementById("myTextArea");
const validityState = textArea.validity;
if (!validityState.valid) {
  // Testen Sie jeden Gültigkeitszustand
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Anleitung: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

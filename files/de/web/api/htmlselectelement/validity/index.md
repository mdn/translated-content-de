---
title: "HTMLSelectElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLSelectElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`** Eigenschaft der Schnittstelle {{domxref("HTMLSelectElement")}} gibt ein schreibgeschütztes {{domxref("ValidityState")}}-Objekt zurück, das die Gültigkeitszustände des Elements darstellt.

## Wert

Ein {{domxref("ValidityState")}}-Objekt.

## Beispiel

Das folgende Beispiel ermittelt den Gültigkeitszustand eines Auswahl-Elements und verarbeitet es, wenn es nicht gültig ist:

```js
const select = document.getElementById("mySelect");
const validityState = select.validity;
if (!validityState.valid) {
  // Testen Sie jeden Gültigkeitszustand
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Learn: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Guide: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

---
title: "BarProp: visible-Eigenschaft"
short-title: visible
slug: Web/API/BarProp/visible
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`visible`** der [`BarProp`](/de/docs/Web/API/BarProp)-Schnittstelle gibt `true` zurück, wenn das von ihr repräsentierte Benutzeroberflächenelement sichtbar ist.

## Wert

Ein {{jsxref("Boolean")}}, der wahr ist, wenn das oberste Fenster durch [`window.open`](/de/docs/Web/API/Window/open) mit der aktivierten [`popup`](/de/docs/Web/API/Window/open#popup)-Funktion geöffnet wird.

> [!NOTE]
> Historisch gesehen stellte dies dar, ob das verwendete Oberflächenelement sichtbar ist oder nicht. Aus Datenschutzgründen repräsentiert dies jedoch nicht mehr die tatsächliche Sichtbarkeit jedes Oberflächenelements.

## Beispiele

Das folgende Beispiel gibt `true` in die Konsole aus, wenn das Fenster kein Popup ist.

```js
console.log(window.locationbar.visible);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

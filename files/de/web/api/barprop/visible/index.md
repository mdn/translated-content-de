---
title: "BarProp: visible-Eigenschaft"
short-title: visible
slug: Web/API/BarProp/visible
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die schreibgeschützte **`visible`**-Eigenschaft der [`BarProp`](/de/docs/Web/API/BarProp)-Schnittstelle gibt `true` zurück, wenn das von ihr dargestellte Benutzeroberflächenelement sichtbar ist.

## Wert

Ein {{jsxref("Boolean")}}, der wahr ist, wenn das oberste Fenster durch [`window.open`](/de/docs/Web/API/Window/open) geöffnet wurde, und das [`popup`](/de/docs/Web/API/Window/open#popup)-Feature aktiviert ist.

> [!NOTE]
> Historisch gesehen zeigte dies an, ob das verwendete Schnittstellenelement sichtbar ist
> oder nicht. Aus Datenschutzgründen stellt dies jedoch nicht mehr die tatsächliche Sichtbarkeit jedes
> Schnittstellenelements dar.

## Beispiele

Das folgende Beispiel gibt `true` in der Konsole aus, wenn das Fenster kein Popup ist.

```js
console.log(window.locationbar.visible);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

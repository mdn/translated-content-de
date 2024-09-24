---
title: "BarProp: sichtbare Eigenschaft"
short-title: sichtbar
slug: Web/API/BarProp/visible
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`visible`** der {{domxref("BarProp")}}-Schnittstelle gibt `true` zurück, wenn das Benutzeroberflächenelement, das sie repräsentiert, sichtbar ist.

## Wert

Ein {{jsxref("Boolean")}}, das wahr ist, wenn das oberste Fenster durch {{domxref("window.open")}} mit dem [`popup`](/de/docs/Web/API/Window/open#popup)-Merkmal aktiviert geöffnet wurde.

> [!NOTE]
> Historisch gesehen stellte dies dar, ob das verwendete Schnittstellenelement sichtbar ist oder nicht. Aus Datenschutzgründen stellt dies jedoch nicht mehr die tatsächliche Sichtbarkeit jedes Schnittstellenelements dar.

## Beispiele

Das folgende Beispiel gibt `true` in der Konsole aus, wenn das Fenster kein Popup ist.

```js
console.log(window.locationbar.visible);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

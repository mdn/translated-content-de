---
title: "Gamepad: id-Eigenschaft"
short-title: id
slug: Web/API/Gamepad/id
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Gamepad API")}}

Die schreibgeschützte Eigenschaft **`id`** der Schnittstelle [`Gamepad`](/de/docs/Web/API/Gamepad) gibt eine Zeichenfolge mit Informationen über den Controller zurück.

Die genaue Syntax ist nicht verbindlich festgelegt. In Firefox enthält die Zeichenfolge jedoch drei durch Bindestriche (`-`) getrennte Angaben:

- Zwei vierstellige Hexadezimalzeichenfolgen mit der USB-Hersteller-ID und der USB-Produkt-ID des Controllers
- Den Namen des Controllers, wie ihn der Treiber bereitstellt

Ein PS2-Controller gab beispielsweise **810-3-USB Gamepad** zurück.

Anhand dieser Informationen können Sie eine Zuordnung für die Bedienelemente des Geräts finden und den Nutzenden hilfreiche Rückmeldungen anzeigen.

## Wert

Ein primitiver Zeichenfolgenwert.

## Beispiele

```js
window.addEventListener("gamepadconnected", () => {
  const gp = navigator.getGamepads()[0];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}.`;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

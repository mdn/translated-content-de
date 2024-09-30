---
title: ScreenOrientation
slug: Web/API/ScreenOrientation
l10n:
  sourceCommit: 85ceac6cab16f46ba87007f5d60a920b26d105b1
---

{{APIRef("Screen Orientation API")}}

Das **`ScreenOrientation`**-Interface der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) bietet Informationen über die aktuelle Ausrichtung des Dokuments.

Ein **`ScreenOrientation`**-Instanzobjekt kann über die [`screen.orientation`](/de/docs/Web/API/Screen/orientation)-Eigenschaft abgerufen werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ScreenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) {{ReadOnlyInline}}
  - : Gibt den aktuellen Ausrichtungstyp des Dokuments zurück, einer von `portrait-primary`, `portrait-secondary`, `landscape-primary` oder `landscape-secondary`.
- [`ScreenOrientation.angle`](/de/docs/Web/API/ScreenOrientation/angle) {{ReadOnlyInline}}
  - : Gibt den aktuellen Ausrichtungswinkel des Dokuments zurück.

## Instanzmethoden

- [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)
  - : Sperrt die Ausrichtung des beinhaltenden Dokuments auf seine Standardausrichtung und gibt ein {{JSxRef("Promise")}} zurück.
- [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
  - : Entsperrt die Ausrichtung des beinhaltenden Dokuments aus seiner Standardausrichtung.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` gehört oder einem Event-Listener zur Eigenschaft `oneventname` dieses Interfaces zugewiesen werden.

- [`change`](/de/docs/Web/API/ScreenOrientation/change_event)
  - : Wird ausgelöst, wenn sich die Ausrichtung des Bildschirms ändert.

## Beispiel

Im folgenden Beispiel hören wir auf ein Ausrichtungs-[`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis und loggen den neuen [Bildschirm-Ausrichtungstyp](/de/docs/Web/API/ScreenOrientation/type) und [Winkel](/de/docs/Web/API/ScreenOrientation/angle).

```js
screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  const angle = event.target.angle;
  console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

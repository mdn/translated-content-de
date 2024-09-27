---
title: ScreenOrientation
slug: Web/API/ScreenOrientation
l10n:
  sourceCommit: 85ceac6cab16f46ba87007f5d60a920b26d105b1
---

{{APIRef("Screen Orientation API")}}

Die **`ScreenOrientation`**-Schnittstelle der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) liefert Informationen über die aktuelle Orientierung des Dokuments.

Ein **`ScreenOrientation`**-Instanzobjekt kann über die [`screen.orientation`](/de/docs/Web/API/Screen/orientation)-Eigenschaft abgerufen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`ScreenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) {{ReadOnlyInline}}
  - : Gibt den aktuellen Orientierungstyp des Dokuments zurück, einer von `portrait-primary`, `portrait-secondary`, `landscape-primary` oder `landscape-secondary`.
- [`ScreenOrientation.angle`](/de/docs/Web/API/ScreenOrientation/angle) {{ReadOnlyInline}}
  - : Gibt den aktuellen Orientierungswinkel des Dokuments zurück.

## Instanz-Methoden

- [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)
  - : Sperrt die Orientierung des enthaltenden Dokuments auf die Standardausrichtung und gibt ein {{JSxRef("Promise")}} zurück.
- [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)
  - : Entsperrt die Orientierung des enthaltenden Dokuments von der Standardausrichtung.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` oder durch Zuweisen eines Event-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle überwacht werden.

- [`change`](/de/docs/Web/API/ScreenOrientation/change_event)
  - : Wird ausgelöst, wenn der Bildschirm die Orientierung ändert.

## Beispiel

Im folgenden Beispiel hören wir auf ein Orientierung-[`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis und protokollieren den neuen [Bildschirmorientierungstyp](/de/docs/Web/API/ScreenOrientation/type) und [Winkel](/de/docs/Web/API/ScreenOrientation/angle).

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

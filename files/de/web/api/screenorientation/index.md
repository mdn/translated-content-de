---
title: ScreenOrientation
slug: Web/API/ScreenOrientation
l10n:
  sourceCommit: 85ceac6cab16f46ba87007f5d60a920b26d105b1
---

{{APIRef("Screen Orientation API")}}

Die **`ScreenOrientation`**-Schnittstelle der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) liefert Informationen über die aktuelle Ausrichtung des Dokuments.

Ein **`ScreenOrientation`**-Instanzobjekt kann über die Eigenschaft {{domxref("screen.orientation")}} abgerufen werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{DOMxRef("ScreenOrientation.type")}} {{ReadOnlyInline}}
  - : Gibt den aktuellen Ausrichtungstyp des Dokuments zurück, einer von `portrait-primary`, `portrait-secondary`, `landscape-primary` oder `landscape-secondary`.
- {{DOMxRef("ScreenOrientation.angle")}} {{ReadOnlyInline}}
  - : Gibt den aktuellen Ausrichtungswinkel des Dokuments zurück.

## Instanzmethoden

- {{DOMxRef("ScreenOrientation.lock()")}}
  - : Sperrt die Ausrichtung des enthaltenen Dokuments auf seine Standardausrichtung und gibt ein {{JSxRef("Promise")}} zurück.
- {{DOMxRef("ScreenOrientation.unlock()")}}
  - : Entsperrt die Ausrichtung des enthaltenen Dokuments von seiner Standardausrichtung.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignislisteners zur `oneventname`-Eigenschaft dieser Schnittstelle ab.

- {{DOMxRef("ScreenOrientation.change_event", "change")}}
  - : Wird immer dann ausgelöst, wenn sich die Bildschirmausrichtung ändert.

## Beispiel

Im folgenden Beispiel horchen wir auf ein {{DOMxRef("ScreenOrientation.change_event", "change")}}-Ereignis der Ausrichtung und protokollieren den neuen {{DOMxRef("ScreenOrientation.type", "screen orientation type", "", "nocode")}} und den {{DOMxRef("ScreenOrientation.angle", "angle", "", "nocode")}}.

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

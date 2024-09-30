---
title: "DocumentPictureInPicture: requestWindow() Methode"
short-title: requestWindow()
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestWindow()`**-Methode der [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Schnittstelle öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window)-Instanz erfüllt wird, die den Browsing-Kontext im Picture-in-Picture-Fenster repräsentiert.

Die `requestWindow()`-Methode erfordert eine [transiente Aktivierung](/de/docs/Glossary/Transient_activation), d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
requestWindow()
requestWindow(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `height`
      - : Eine nicht negative Zahl, die die für den Viewport des Picture-in-Picture-Fensters festzulegende Höhe in Pixeln darstellt. Wenn `options` nicht angegeben ist, wird der Standardwert 0 verwendet.
    - `width`
      - : Eine nicht negative Zahl, die die für den Viewport des Picture-in-Picture-Fensters festzulegende Breite in Pixeln darstellt. Wenn `options` nicht angegeben ist, wird der Standardwert 0 verwendet.

> [!NOTE]
> Wenn eine der Optionen angegeben wird, muss die andere ebenfalls angegeben werden, andernfalls wird ein Fehler ausgelöst. Wenn beide Werte nicht angegeben, als 0 angegeben oder zu groß festgelegt werden, wird der Browser die Werte entsprechend anpassen oder ignorieren, um eine angemessene Benutzererfahrung zu bieten. Die angepasste Größe variiert je nach Implementierung, Anzeigengröße und anderen Faktoren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Window`](/de/docs/Web/API/Window)-Objekt ausfüllt, das den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die API explizit deaktiviert wurde (zum Beispiel über Browsereinstellungen).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - `requestWindow()` nicht von einem übergeordneten `window`-Objekt aufgerufen wird.
    - `requestWindow()` vom `window`-Objekt des Picture-in-Picture-Fensters aufgerufen wird (d.h. [`DocumentPictureInPicture.window`](/de/docs/Web/API/DocumentPictureInPicture/window)).
    - `requestWindow()` ohne [transiente Aktivierung](/de/docs/Glossary/Transient_activation) aufgerufen wird.
- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn nur eines von `height` und `width` festgelegt ist, oder wenn `height` und `width` mit negativen Werten festgelegt sind.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// ...

// Open a Picture-in-Picture window.
const pipWindow = await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)

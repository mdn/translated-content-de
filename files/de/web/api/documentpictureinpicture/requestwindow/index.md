---
title: "DocumentPictureInPicture: requestWindow() Methode"
short-title: requestWindow()
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestWindow()`** Methode der [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture) Schnittstelle öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window) Instanz erfüllt wird, die den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

Die `requestWindow()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
requestWindow()
requestWindow(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:

    - `disallowReturnToOpener` {{optional_inline}}

      - : Ein boolescher Wert. Wenn auf `true` gesetzt, weist diese Option den Browser darauf hin, dass er keine Benutzeroberflächenkontrolle anzeigen sollte, die es dem Benutzer ermöglicht, zum ursprünglichen Tab zurückzukehren und das Picture-in-Picture-Fenster zu schließen. Standardmäßig `false`.

        Zum Beispiel in der Chrome-Implementierung dieser Funktion ist die bereitgestellte Benutzeroberflächenkontrolle ein "zurück zum Tab" Button in der oberen Leiste des Picture-in-Picture-Fensters:

        ![Browserfenster mit einem eingebetteten Videoplayer und mehreren Steuerungsschaltflächen, mit einem zurück zum Tab Button in der oberen Leiste, hervorgehoben mit einem roten Kasten](back-to-tab-button.png)

    - `height` {{optional_inline}}
      - : Eine nicht-negative Zahl, die die Höhe angibt, die für den Viewport des Picture-in-Picture-Fensters in Pixeln festgelegt werden soll. Standardwert ist `0`.
    - `preferInitialWindowPlacement` {{optional_inline}}

      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, erscheint das Picture-in-Picture-Fenster immer wieder an der Position und mit der Größe, an der es ursprünglich geöffnet wurde, wenn es geschlossen und erneut geöffnet wird. Im Gegensatz dazu wird, wenn `preferInitialWindowPlacement` `false` ist, die Größe und Position des Picture-in-Picture-Fensters gespeichert, wenn es geschlossen und wieder geöffnet wird — es wird an seiner vorherigen Position und Größe geöffnet, wie z.B. vom Benutzer festgelegt.

    - `width` {{optional_inline}}
      - : Eine nicht-negative Zahl, die die Breite angibt, die für den Viewport des Picture-in-Picture-Fensters in Pixeln festgelegt werden soll. Standardwert ist `0`.

> [!NOTE]
> Wenn einer von `height` oder `width` angegeben wird, muss auch der andere angegeben werden, andernfalls wird ein Fehler ausgelöst. Wenn beide Werte nicht angegeben, als 0 angegeben oder zu groß gesetzt sind, wird der Browser die Werte so anpassen oder ignorieren, dass eine angemessene Benutzererfahrung bereitgestellt wird. Die angepasste Größe variiert je nach Implementierung, Bildschirmgröße und anderen Faktoren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Window`](/de/docs/Web/API/Window) Objekt erfüllt wird, das den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die API explizit deaktiviert wurde (zum Beispiel über Browsereinstellungen).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `requestWindow()` nicht von einem obersten `window` Objekt aus aufgerufen wird.
    - `requestWindow()` vom `window` Objekt des Picture-in-Picture-Fensters aus aufgerufen wird (d.h. [`DocumentPictureInPicture.window`](/de/docs/Web/API/DocumentPictureInPicture/window)).
    - `requestWindow()` ohne {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen wird.
- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nur eines von `height` und `width` gesetzt wird oder wenn `height` und `width` mit negativen Werten gesetzt werden.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// ...

// Open a Picture-in-Picture window with all options set
const pipWindow = await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
  disallowReturnToOpener: true,
  preferInitialWindowPlacement: true,
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

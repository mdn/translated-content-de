---
title: "DocumentPictureInPicture: requestWindow() Methode"
short-title: requestWindow()
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SecureContext_Header}}

Die **`requestWindow()`** Methode des
[`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture) Interfaces öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window) Instanz erfüllt wird, die den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters darstellt.

Die `requestWindow()` Methode erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder einen Tastendruck aufgerufen werden.

## Syntax

```js-nolint
requestWindow()
requestWindow(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `disallowReturnToOpener` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, weist diese Option den Browser an, kein UI-Steuerelement anzuzeigen, das dem Benutzer erlaubt, in den ursprünglichen Tab zurückzukehren und das Picture-in-Picture-Fenster zu schließen. Standardwert ist `false`.

        Zum Beispiel ist in der Chrome-Implementierung dieser Funktion das bereitgestellte UI-Steuerelement eine "Zurück zum Tab"-Schaltfläche in der oberen Leiste des Picture-in-Picture-Fensters:

        ![Browserfenster mit einem eingebetteten Videoplayer und mehreren Bedienelementen, mit einer Zurück-zum-Tab-Schaltfläche in der oberen Leiste, hervorgehoben mit einem roten Kasten](back-to-tab-button.png)

    - `height` {{optional_inline}}
      - : Eine nicht-negative Zahl, die die Höhe des Viewports des Picture-in-Picture-Fensters in Pixeln angibt. Standardwert ist `0`.
    - `preferInitialWindowPlacement` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, sorgt er dafür, dass das Picture-in-Picture-Fenster immer an der Position und Größe erscheint, an der es ursprünglich geöffnet wurde, wenn es geschlossen und dann wieder geöffnet wird. Im Gegensatz dazu wird, wenn `preferInitialWindowPlacement` `false` ist, die Größe und Position des Picture-in-Picture-Fensters beim Schließen und Wiederöffnen gespeichert — es wird an seiner vorherigen Position und Größe wieder geöffnet, wie z.B. vom Benutzer eingestellt.

    - `width` {{optional_inline}}
      - : Eine nicht-negative Zahl, die die Breite des Viewports des Picture-in-Picture-Fensters in Pixeln angibt. Standardwert ist `0`.

> [!NOTE]
> Wenn eine von `height` oder `width` angegeben ist, muss die andere ebenfalls angegeben werden, ansonsten wird ein Fehler geworfen. Wenn beide Werte nicht angegeben, als 0 angegeben oder zu groß gesetzt werden, wird der Browser die Werte anpassen oder ignorieren, um eine angemessene Benutzererfahrung zu gewährleisten. Die angepasste Größe variiert je nach Implementierung, Displaygröße und anderen Faktoren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Window`](/de/docs/Web/API/Window) Objekt erfüllt wird, das den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters darstellt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die API ausdrücklich deaktiviert wurde (zum Beispiel über die Browsereinstellungen).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - `requestWindow()` nicht von einem top-level `window` Objekt aus aufgerufen wird.
    - `requestWindow()` aus dem `window` Objekt des Picture-in-Picture-Fensters (d.h. [`DocumentPictureInPicture.window`](/de/docs/Web/API/DocumentPictureInPicture/window)) aufgerufen wird.
    - `requestWindow()` ohne {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen wird.
- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn nur eine von `height` und `width` gesetzt ist, oder wenn `height` und `width` mit negativen Werten gesetzt sind.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// …

// Open a Picture-in-Picture window with all options set
const pipWindow = await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
  disallowReturnToOpener: true,
  preferInitialWindowPlacement: true,
});

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)

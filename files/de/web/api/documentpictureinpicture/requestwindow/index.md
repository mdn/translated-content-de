---
title: "DocumentPictureInPicture: requestWindow() Methode"
short-title: requestWindow()
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestWindow()`** Methode des [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture) Interfaces öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsingkontext. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window) Instanz erfüllt wird, die den Browsingkontext im Picture-in-Picture-Fenster repräsentiert.

Die Methode `requestWindow()` erfordert eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
requestWindow()
requestWindow(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `disallowReturnToOpener` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, weist diese Option den Browser darauf hin, dass er keine UI-Steuerung anzeigen soll, die es dem Benutzer ermöglicht, zum ursprünglichen Tab zurückzukehren und das Picture-in-Picture-Fenster zu schließen. Standardmäßig ist dies `false`.

        Zum Beispiel, in Chromes Implementierung dieser Funktion, ist die bereitgestellte UI-Steuerung ein „Zurück zum Tab“-Knopf in der oberen Leiste des Picture-in-Picture-Fensters:

        ![Browserfenster mit einem eingebetteten Videoplayer und mehreren Steuerknöpfen, mit einem durch ein rotes Kästchen hervorgehobenen „Zurück zum Tab“-Knopf in der oberen Leiste](back-to-tab-button.png)

    - `height` {{optional_inline}}
      - : Eine nicht-negative Zahl, die die Höhe des Viewports des Picture-in-Picture-Fensters in Pixeln darstellt. Standardmäßig auf `0`.
    - `preferInitialWindowPlacement` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, bewirkt er, dass das Picture-in-Picture-Fenster immer an der Position und Größe erscheint, an der es ursprünglich geöffnet wurde, wenn es geschlossen und dann wieder geöffnet wird. Im Gegensatz dazu wird, wenn `preferInitialWindowPlacement` `false` ist, die Größe und Position des Picture-in-Picture-Fensters beim Schließen und erneuten Öffnen beibehalten – es wird an seiner vorherigen Position und Größe geöffnet, beispielsweise wie vom Benutzer festgelegt.

    - `width` {{optional_inline}}
      - : Eine nicht-negative Zahl, die die Breite des Viewports des Picture-in-Picture-Fensters in Pixeln darstellt. Standardmäßig auf `0`.

> [!NOTE]
> Wenn eine von `height` oder `width` angegeben ist, muss auch die andere angegeben werden, sonst wird ein Fehler geworfen. Wenn beide Werte nicht angegeben sind, mit 0 angegeben werden oder zu groß gesetzt sind, wird der Browser die Werte entsprechend anpassen oder ignorieren, um eine vernünftige Benutzererfahrung zu gewährleisten. Die angepasste Größe variiert je nach Implementierung, Bildschirmgröße und anderen Faktoren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`Window`](/de/docs/Web/API/Window) Objektinstanz erfüllt wird, die den Browsingkontext im Picture-in-Picture-Fenster repräsentiert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die API explizit deaktiviert wurde (zum Beispiel über Browsereinstellungen).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `requestWindow()` nicht von einem Top-Level `window` Objekt aufgerufen wird.
    - `requestWindow()` vom `window` Objekt des Picture-in-Picture-Fensters aufgerufen wird (d.h. [`DocumentPictureInPicture.window`](/de/docs/Web/API/DocumentPictureInPicture/window)).
    - `requestWindow()` ohne {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} aufgerufen wird.
- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nur einer von `height` und `width` gesetzt ist oder wenn `height` und `width` mit negativen Werten gesetzt sind.

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

---
title: "DocumentPictureInPicture: requestWindow() Methode"
short-title: requestWindow()
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestWindow()`** Methode des
[`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Interfaces öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsingkontext. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window)-Instanz erfüllt wird, die den Browsingkontext innerhalb des Picture-in-Picture-Fensters darstellt.

Die `requestWindow()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder das Drücken eines Knopfes aufgerufen werden.

## Syntax

```js-nolint
requestWindow()
requestWindow(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:

    - `disallowReturnToOpener` {{optional_inline}}

      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird dem Browser angedeutet, dass keine Benutzeroberflächensteuerung angezeigt werden soll, die es dem Benutzer ermöglicht, zum ursprünglichen Tab zurückzukehren und das Picture-in-Picture-Fenster zu schließen. Standardmäßig `false`.

        Zum Beispiel ist in der Chrome-Implementierung dieser Funktion die bereitgestellte Benutzeroberflächensteuerung ein "zurück zum Tab"-Button in der oberen Leiste des Picture-in-Picture-Fensters:

        ![Browserfenster mit eingebettetem Videoplayer und mehreren Steuertasten, mit einem "zurück zum Tab"-Button in der oberen Leiste, hervorgehoben mit einem roten Kasten](back-to-tab-button.png)

    - `height` {{optional_inline}}
      - : Eine nicht-negative Zahl, die die Höhe des Viewports des Picture-in-Picture-Fensters in Pixeln angibt. Standardmäßig `0`.
    - `preferInitialWindowPlacement` {{optional_inline}}

      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, wird das Picture-in-Picture-Fenster immer an der Position und Größe angezeigt, an der es ursprünglich geöffnet wurde, wenn es geschlossen und dann wieder geöffnet wird. Im Gegensatz dazu, wenn `preferInitialWindowPlacement` `false` ist, werden die Größe und Position des Picture-in-Picture-Fensters beim Schließen und erneuten Öffnen beibehalten — es wird an seiner vorherigen Position und Größe wieder geöffnet, beispielsweise wie vom Benutzer festgelegt.

    - `width` {{optional_inline}}
      - : Eine nicht-negative Zahl, die die Breite des Viewports des Picture-in-Picture-Fensters in Pixeln angibt. Standardmäßig `0`.

> [!NOTE]
> Wenn `height` oder `width` angegeben sind, müssen beide angegeben sein, ansonsten wird ein Fehler geworfen. Wenn beide Werte nicht angegeben, als 0 angegeben oder zu groß gesetzt sind, wird der Browser die Werte je nach Bedarf anpassen oder ignorieren, um ein vernünftiges Benutzererlebnis zu gewährleisten. Die angepasste Größe variiert je nach Implementierung, Displaygröße und anderen Faktoren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Window`](/de/docs/Web/API/Window)-Objekt erfüllt wird, das den Browsingkontext innerhalb des Picture-in-Picture-Fensters darstellt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die API explizit deaktiviert wurde (zum Beispiel über Browsereinstellungen).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - `requestWindow()` nicht von einem Top-Level-`window`-Objekt aufgerufen wird.
    - `requestWindow()` vom `window`-Objekt des Picture-in-Picture-Fensters aufgerufen wird (d.h. [`DocumentPictureInPicture.window`](/de/docs/Web/API/DocumentPictureInPicture/window)).
    - `requestWindow()` ohne {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen wird.
- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn nur einer von `height` und `width` gesetzt ist oder wenn `height` und `width` mit negativen Werten gesetzt sind.

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

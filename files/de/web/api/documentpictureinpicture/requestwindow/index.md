---
title: "DocumentPictureInPicture: requestWindow() Methode"
short-title: requestWindow()
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: f7ddd45a6bd53eb7fc10dbacc07a3acb168c1352
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestWindow()`** Methode der [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture) Schnittstelle öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window)-Instanz erfüllt wird, die den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

Die `requestWindow()` Methode erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
requestWindow()
requestWindow(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:

    - `disallowReturnToOpener` {{optional_inline}}

      - : Ein Boolean-Wert. Wenn auf `true` gesetzt, gibt diese Option dem Browser einen Hinweis, dass er keine Benutzeroberflächensteuerung anzeigen soll, die es dem Benutzer ermöglicht, zum ursprünglichen Tab zurückzukehren und das Picture-in-Picture-Fenster zu schließen. Standardmäßig `false`.

        Zum Beispiel ist in Chromes Implementierung dieser Funktion die bereitgestellte Benutzeroberflächensteuerung ein "Zurück zum Tab"-Button in der oberen Leiste des Picture-in-Picture-Fensters:

        ![Browserfenster, das einen eingebetteten Videoplayer und mehrere Steuerungstasten enthält, mit einem "Zurück zum Tab"-Button in der oberen Leiste, hervorgehoben mit einem roten Kasten](back-to-tab-button.png)

    - `height` {{optional_inline}}
      - : Eine nicht negative Zahl, die die Höhe für den Viewport des Picture-in-Picture-Fensters in Pixeln darstellt. Standardwert ist `0`.
    - `preferInitialWindowPlacement` {{optional_inline}}

      - : Ein Boolean-Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, bewirkt dies, dass das Picture-in-Picture-Fenster immer wieder an der Stelle und Größe erscheint, an der es ursprünglich geöffnet wurde, wenn es geschlossen und dann erneut geöffnet wird. Wenn `preferInitialWindowPlacement` hingegen `false` ist, werden die Größe und Position des Picture-in-Picture-Fensters beim Schließen und Wiederöffnen gespeichert - es wird zum Beispiel an der vom Benutzer festgelegten vorherigen Position und Größe geöffnet.

    - `width` {{optional_inline}}
      - : Eine nicht negative Zahl, die die Breite für den Viewport des Picture-in-Picture-Fensters in Pixeln darstellt. Standardwert ist `0`.

> [!NOTE]
> Wenn `height` oder `width` angegeben wird, muss auch das andere angegeben werden, andernfalls wird ein Fehler ausgelöst. Wenn beide Werte nicht angegeben sind, auf 0 gesetzt oder zu groß eingestellt sind, wird der Browser die Werte entsprechend einschränken oder ignorieren, um ein vernünftiges Benutzererlebnis zu bieten. Die eingeschränkte Größe variiert je nach Implementierung, Anzeigegröße und anderen Faktoren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Window`](/de/docs/Web/API/Window)-Objekt erfüllt wird, das den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die API ausdrücklich deaktiviert wurde (z.B. über Browsereinstellungen).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `requestWindow()` nicht von einem obersten `window`-Objekt aufgerufen wird.
    - `requestWindow()` vom `window`-Objekt des Picture-in-Picture-Fensters aufgerufen wird (d.h. [`DocumentPictureInPicture.window`](/de/docs/Web/API/DocumentPictureInPicture/window)).
    - `requestWindow()` ohne {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen wird.
- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nur einer von `height` und `width` festgelegt ist oder wenn `height` und `width` mit negativen Werten festgelegt sind.

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

---
title: "DocumentPictureInPicture: Methode requestWindow()"
short-title: requestWindow()
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Document Picture-in-Picture API")}}{{SecureContext_Header}}

Die Methode **`requestWindow()`** der Schnittstelle [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture) öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Window`](/de/docs/Web/API/Window)-Instanz erfüllt wird, die den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters repräsentiert.

Die Methode `requestWindow()` erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}. Sie muss also als Reaktion auf eine Benutzeraktion wie einen Mausklick oder einen Tastendruck aufgerufen werden.

## Syntax

```js-nolint
requestWindow()
requestWindow(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `disallowReturnToOpener` {{optional_inline}}
      - : Ein boolescher Wert. Wenn er auf `true` gesetzt ist, signalisiert diese Option dem Browser, dass er kein Bedienelement anzeigen sollte, mit dem Benutzer zum ursprünglichen Tab zurückkehren und das Picture-in-Picture-Fenster schließen können. Der Standardwert ist `false`.

        In der Chrome-Implementierung dieser Funktion ist das entsprechende Bedienelement beispielsweise eine Schaltfläche „Zurück zum Tab“ in der oberen Leiste des Picture-in-Picture-Fensters:

        ![Browserfenster mit einem eingebetteten Videoplayer und mehreren Bedienelementen; die Schaltfläche „Zurück zum Tab“ in der oberen Leiste ist rot umrandet](back-to-tab-button.png)

    - `height` {{optional_inline}}
      - : Eine nicht negative Zahl, die die Höhe des Viewports des Picture-in-Picture-Fensters in Pixeln angibt. Der Standardwert ist `0`.
    - `preferInitialWindowPlacement` {{optional_inline}}
      - : Ein boolescher Wert mit dem Standardwert `false`. Wenn er auf `true` gesetzt ist, erscheint das Picture-in-Picture-Fenster nach dem Schließen und erneuten Öffnen immer wieder an seiner ursprünglichen Position und in seiner ursprünglichen Größe. Ist `preferInitialWindowPlacement` dagegen `false`, werden Größe und Position des Picture-in-Picture-Fensters beim Schließen gespeichert. Beim erneuten Öffnen erscheint es dann beispielsweise an der zuvor vom Benutzer festgelegten Position und in der zuvor festgelegten Größe.

    - `width` {{optional_inline}}
      - : Eine nicht negative Zahl, die die Breite des Viewports des Picture-in-Picture-Fensters in Pixeln angibt. Der Standardwert ist `0`.

> [!NOTE]
> Wenn `height` oder `width` angegeben wird, muss auch der jeweils andere Wert angegeben werden. Andernfalls wird ein Fehler ausgelöst. Wenn beide Werte nicht angegeben werden, beide `0` sind oder zu groß gewählt werden, begrenzt oder ignoriert der Browser die Werte nach Bedarf, um eine angemessene Benutzererfahrung zu gewährleisten. Die resultierende Größe hängt unter anderem von der Implementierung und der Bildschirmgröße ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`Window`](/de/docs/Web/API/Window)-Objektinstanz erfüllt wird, die den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters repräsentiert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die API ausdrücklich deaktiviert wurde (beispielsweise über die Browsereinstellungen).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `requestWindow()` nicht von einem `window`-Objekt der obersten Ebene aus aufgerufen wird.
    - `requestWindow()` vom `window`-Objekt des Picture-in-Picture-Fensters aus aufgerufen wird (d.h. [`DocumentPictureInPicture.window`](/de/docs/Web/API/DocumentPictureInPicture/window)).
    - `requestWindow()` ohne {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen wird.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nur einer der Werte `height` und `width` festgelegt ist oder wenn `height` und `width` auf negative Werte gesetzt werden.

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

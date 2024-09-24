---
title: "DocumentPictureInPicture: requestWindow()-Methode"
short-title: requestWindow()
slug: Web/API/DocumentPictureInPicture/requestWindow
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestWindow()`**-Methode des {{domxref("DocumentPictureInPicture")}}-Interfaces öffnet das Picture-in-Picture-Fenster für den aktuellen Haupt-Browsing-Kontext. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("Window")}}-Instanz erfüllt wird, die den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters darstellt.

Die `requestWindow()`-Methode erfordert eine [transiente Aktivierung](/de/docs/Glossary/Transient_activation), d.h. sie muss als Antwort auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
requestWindow()
requestWindow(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `height`
      - : Eine nicht-negative Zahl, die die Höhe des Viewports des Picture-in-Picture-Fensters in Pixeln angibt. Wenn `options` nicht angegeben ist, wird der Standardwert 0 verwendet.
    - `width`
      - : Eine nicht-negative Zahl, die die Breite des Viewports des Picture-in-Picture-Fensters in Pixeln angibt. Wenn `options` nicht angegeben ist, wird der Standardwert 0 verwendet.

> [!NOTE]
> Wenn eine der Optionen angegeben ist, muss auch die andere angegeben werden, andernfalls wird ein Fehler ausgelöst. Wenn beide Werte nicht angegeben sind, als 0 festgelegt oder zu groß eingestellt sind, wird der Browser die Werte entsprechend einschränken oder ignorieren, um eine angemessene Benutzererfahrung zu gewährleisten. Die eingeschränkte Größe variiert je nach Implementierung, Displaygröße und anderen Faktoren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("Window")}}-Objekt erfüllt wird, das den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters darstellt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die API explizit deaktiviert wurde (zum Beispiel über Browsereinstellungen).
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn:
    - `requestWindow()` nicht von einem obersten `window`-Objekt aufgerufen wird.
    - `requestWindow()` vom `window`-Objekt des Picture-in-Picture-Fensters aufgerufen wird (d.h. {{domxref("DocumentPictureInPicture.window")}}).
    - `requestWindow()` ohne {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen wird.
- `RangeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn nur eines von `height` und `width` gesetzt ist oder wenn `height` und `width` mit negativen Werten gesetzt sind.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// ...

// Öffnen eines Picture-in-Picture-Fensters.
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

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)

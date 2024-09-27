---
title: "BackgroundFetchUpdateUIEvent: updateUI() Methode"
short-title: updateUI()
slug: Web/API/BackgroundFetchUpdateUIEvent/updateUI
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`updateUI()`** Methode des [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) Interfaces aktualisiert den Titel und das Icon in der Benutzeroberfläche, um den Status eines Hintergrundabrufs anzuzeigen.

Diese Methode kann nur einmal ausgeführt werden, um den Benutzer über einen fehlgeschlagenen oder erfolgreichen Abruf zu benachrichtigen.

## Syntax

```js-nolint
updateUI()
updateUI(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das eines der folgenden enthalten kann:

    - `icons` {{optional_inline}}

      - : Eine Liste von einem oder mehreren Bildressourcen, die Icons für die Verwendung in der Benutzeroberfläche enthalten. Eine Bildressource ist ein Objekt, das Folgendes enthält:

        - `src`
          - : Ein String, der eine URL eines Bildes ist.
        - `sizes` {{optional_inline}}
          - : Ein String, der dem `sizes` Attribut des {{HTMLElement("link")}} Elements entspricht.
        - `type` {{optional_inline}}
          - : Ein String, der einen Image-MIME-Typ enthält.
        - `label` {{optional_inline}}
          - : Ein String, der einen Namen für das zugehörige Bild angibt.

    - `title` {{optional_inline}}
      - : Ein String, der den neuen Titel der Benutzeroberfläche enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eines der folgenden zutrifft:
    - Die [`isTrusted`](/de/docs/Web/API/Event/isTrusted) Eigenschaft ist `false`.
    - Das [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) UI-Update-Flag ist bereits gesetzt, was darauf hindeutet, dass die `updateUI()` Methode bereits aufgerufen wurde.
    - Das [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) ist nicht aktiv.

## Beispiele

Das folgende Beispiel zeigt das Aktualisieren der Benutzeroberfläche mit einem Titel und einem Bildicon bei einem erfolgreichen Abruf.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  event.updateUI({
    title: "Episode 5 ready to listen!",
    icon: {
      src: "path/to/success.ico",
      sizes: "16x16 32x32 64x64",
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

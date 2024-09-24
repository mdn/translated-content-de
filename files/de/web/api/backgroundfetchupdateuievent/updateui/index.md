---
title: "BackgroundFetchUpdateUIEvent: updateUI() Methode"
short-title: updateUI()
slug: Web/API/BackgroundFetchUpdateUIEvent/updateUI
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`updateUI()`** Methode des {{domxref("BackgroundFetchUpdateUIEvent")}} Interfaces aktualisiert den Titel und das Symbol in der Benutzeroberfläche, um den Status eines Hintergrundabrufs anzuzeigen.

Diese Methode kann nur einmal ausgeführt werden, um den Benutzer über einen fehlgeschlagenen oder erfolgreichen Abruf zu informieren.

## Syntax

```js-nolint
updateUI()
updateUI(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das eines der folgenden enthält:

    - `icons` {{optional_inline}}

      - : Eine Liste von einem oder mehreren Bildressourcen, die Symbole für die Benutzeroberfläche enthalten. Eine Bildressource ist ein Objekt, das folgendes enthält:

        - `src`
          - : Ein String, der eine URL eines Bildes ist.
        - `sizes` {{optional_inline}}
          - : Ein String, der dem `sizes` Attribut des {{HTMLElement("link")}} Elements entspricht.
        - `type` {{optional_inline}}
          - : Ein String, der einen Bild-MIME-Typ enthält.
        - `label` {{optional_inline}}
          - : Ein String, der einen Namen für das zugehörige Bild angibt.

    - `title` {{optional_inline}}
      - : Ein String, der den neuen Titel der Benutzeroberfläche enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen zutrifft:
    - Die {{domxref("Event.isTrusted","isTrusted")}} Eigenschaft ist `false`.
    - Die {{domxref("BackgroundFetchUpdateUIEvent")}} UI-Aktualisierungsflagge ist bereits gesetzt, was darauf hinweist, dass die `updateUI()` Methode bereits aufgerufen wurde.
    - Die {{domxref("BackgroundFetchUpdateUIEvent")}} ist nicht aktiv.

## Beispiele

Das folgende Beispiel demonstriert das Aktualisieren der Benutzeroberfläche mit einem Titel und einem Bildsymbol bei einem erfolgreichen Abruf.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  event.updateUI({
    title: "Episode 5 bereit zum Anhören!",
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

---
title: "BackgroundFetchUpdateUIEvent: updateUI() Methode"
short-title: updateUI()
slug: Web/API/BackgroundFetchUpdateUIEvent/updateUI
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`updateUI()`**-Methode der [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent)-Schnittstelle aktualisiert den Titel und das Symbol in der Benutzeroberfläche, um den Status eines Hintergrundabrufs anzuzeigen.

Diese Methode darf nur einmal ausgeführt werden, um den Benutzer bei einem fehlgeschlagenen oder erfolgreichen Abruf zu benachrichtigen.

## Syntax

```js-nolint
updateUI()
updateUI(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das eines der folgenden enthält:

    - `icons` {{optional_inline}}

      - : Eine Liste von einem oder mehreren Bildressourcen, die Symbole für die Verwendung in der Benutzeroberfläche enthalten. Eine Bildressource ist ein Objekt, das enthält:

        - `src`
          - : Ein String, der eine URL eines Bildes ist.
        - `sizes` {{optional_inline}}
          - : Ein String, der dem `sizes`-Attribut des {{HTMLElement("link")}}-Elements entspricht.
        - `type` {{optional_inline}}
          - : Ein String, der einen MIME-Typ des Bildes enthält.
        - `label` {{optional_inline}}
          - : Ein String, der einen Namen für das zugehörige Bild angibt.

    - `title` {{optional_inline}}
      - : Ein String, der den neuen Titel der Benutzeroberfläche enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der folgenden zutrifft:
    - Die [`isTrusted`](/de/docs/Web/API/Event/isTrusted)-Eigenschaft ist `false`.
    - Das UI-Update-Flag des [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) ist bereits gesetzt, was darauf hinweist, dass die `updateUI()`-Methode bereits aufgerufen wurde.
    - Das [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) ist nicht aktiv.

## Beispiele

Das folgende Beispiel demonstriert das Aktualisieren der Benutzeroberfläche mit einem Titel und einem Bildsymbol bei einem erfolgreichen Abruf.

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

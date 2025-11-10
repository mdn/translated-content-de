---
title: "BackgroundFetchUpdateUIEvent: updateUI() Methode"
short-title: updateUI()
slug: Web/API/BackgroundFetchUpdateUIEvent/updateUI
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`updateUI()`**-Methode des [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent)-Interfaces aktualisiert den Titel und das Symbol in der Benutzeroberfläche, um den Status eines Hintergrundabrufs anzuzeigen.

Diese Methode kann nur einmal ausgeführt werden, um den Benutzer über einen fehlgeschlagenen oder erfolgreichen Abruf zu informieren.

## Syntax

```js-nolint
updateUI()
updateUI(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das eines oder mehrere der folgenden enthält:

    - `icons` {{optional_inline}}

      - : Eine Liste von einem oder mehreren Bildressourcen, die Symbole für die Verwendung in der Benutzeroberfläche enthalten. Eine Bildressource ist ein Objekt, das Folgendes enthält:
        - `src`
          - : Ein String, der eine URL eines Bildes ist.
        - `sizes` {{optional_inline}}
          - : Ein String, der dem `sizes`-Attribut des {{HTMLElement("link")}}-Elements entspricht.
        - `type` {{optional_inline}}
          - : Ein String, der einen Bild-MIME-Typ enthält.
        - `label` {{optional_inline}}
          - : Ein String, der einen Namen für das zugehörige Bild bereitstellt.

    - `title` {{optional_inline}}
      - : Ein String, der den neuen Titel der Benutzeroberfläche enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der folgenden zutrifft:
    - Die Eigenschaft [`isTrusted`](/de/docs/Web/API/Event/isTrusted) ist `false`.
    - Das `BackgroundFetchUpdateUIEvent`-UI-aktualisierte-Flag ist bereits gesetzt, was darauf hinweist, dass die `updateUI()`-Methode bereits aufgerufen wurde.
    - Das `BackgroundFetchUpdateUIEvent` ist nicht aktiv.

## Beispiele

Das folgende Beispiel zeigt, wie die Benutzeroberfläche mit einem Titel und einem Bildsymbol bei einem erfolgreichen Abruf aktualisiert wird.

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

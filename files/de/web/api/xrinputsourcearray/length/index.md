---
title: "XRInputSourceArray: length-Eigenschaft"
short-title: length
slug: Web/API/XRInputSourceArray/length
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`length`**-Eigenschaft gibt einen ganzzahligen Wert zurück, der die Anzahl der Elemente in der Eingabequellenliste angibt, die vom [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Objekt dargestellt wird.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte, die WebXR-Eingabequellen repräsentieren, im Array enthalten sind.

## Beispiele

In diesem Beispiel verwendet ein Spiel, das mindestens eine Eingabequelle erfordert, `length`, um dies zu überprüfen, bevor der Benutzer das Spiel spielen darf.

```js
let sources = xrSession.inputSources;

if (sources.length === 0) {
  showAlertDialog(
    "You need to have at least one controller to play Super Duper Shark Jump Fest 9000.",
    [
      { label: "Shop Now", url: "https://www.example.com/shop/controllers" },
      { label: "Quit", handler: quitGame },
    ],
  );
}
```

Hier wird bei `length` gleich 0 eine hypothetische `showAlertDialog()`-Funktion mit einem Eingabeaufforderungs-String aufgerufen, der die Notwendigkeit eines Controllers erklärt. Diese Funktion enthält ein Array von Objekten, von denen jedes eine Schaltfläche beschreibt und was passieren soll, wenn diese angeklickt wird. Die erste führt den Benutzer zu einer Amazon.com-Suche nach VR-Controllern, und die zweite ruft eine `quitGame()`-Funktion auf, um das Spielprogramm zu schließen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "XRInputSourceArray: Länge-Eigenschaft"
short-title: Länge
slug: Web/API/XRInputSourceArray/length
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`length`**-Eigenschaft gibt einen ganzzahligen Wert zurück, der die Anzahl der Elemente in der Eingabequellenliste angibt, die durch das {{domxref("XRInputSourceArray")}}-Objekt dargestellt wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der {{domxref("XRInputSource")}}-Objekte angibt, die WebXR-Eingabequellen repräsentieren und in dem Array enthalten sind.

## Beispiele

In diesem Beispiel verwendet ein Spiel, das mindestens eine Eingabequelle benötigt, die `length`-Eigenschaft, um dies zu überprüfen, bevor der Benutzer das Spiel spielen darf.

```js
let sources = xrSession.inputSources;

if (sources.length === 0) {
  showAlertDialog(
    "Sie benötigen mindestens einen Controller, um Super Duper Shark Jump Fest 9000 zu spielen.",
    [
      { label: "Shop Now", url: "https://www.example.com/shop/controllers" },
      { label: "Beenden", handler: quitGame },
    ],
  );
}
```

Hier wird, wenn `length` 0 ist, eine hypothetische `showAlertDialog()`-Funktion mit einer Aufforderungszeichenkette aufgerufen, die den Bedarf an einem Controller erklärt, sowie mit einem Array von Objekten, von denen jedes eine Schaltfläche und die Aktion beschreibt, die beim Klicken darauf ausgeführt werden soll. Die erste Option führt den Benutzer zu einer Amazon.com-Suche nach VR-Controllern, und die zweite ruft eine `quitGame()`-Funktion auf, um das Beenden des Spiels einzuleiten.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

---
title: "XRInputSourceArray: length-Eigenschaft"
short-title: length
slug: Web/API/XRInputSourceArray/length
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`length`**-Eigenschaft gibt einen ganzzahligen Wert zurück, der die Anzahl der Elemente in der Eingabequellenliste angibt, die durch das [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Objekt repräsentiert wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte angibt, die WebXR-Eingabequellen in dem Array darstellen.

## Beispiele

In diesem Beispiel nutzt ein Spiel, das mindestens eine Eingabequelle benötigt, `length`, um dies zu überprüfen, bevor es dem Benutzer erlaubt wird, das Spiel zu spielen.

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

Hier wird, wenn `length` 0 ist, eine hypothetische `showAlertDialog()`-Funktion mit einem Hinweisstring aufgerufen, der den Bedarf für einen Controller erklärt, sowie einem Array von Objekten, von denen jedes eine Schaltfläche beschreibt und was passieren soll, wenn sie geklickt wird. Die erste bringt den Benutzer zu einer Amazon.com-Suche nach VR-Controllern, und die zweite ruft eine `quitGame()`-Funktion auf, um das Herunterfahren des Spielprogramms zu starten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

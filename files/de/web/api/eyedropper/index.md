---
title: EyeDropper
slug: Web/API/EyeDropper
l10n:
  sourceCommit: 9fb6c9e56c6db295967384730feeb941509ac743
---

{{securecontext_header}}{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

Das **`EyeDropper`**-Interface repräsentiert eine Instanz eines Pipettenwerkzeugs, das geöffnet und vom Benutzer verwendet werden kann, um Farben vom Bildschirm auszuwählen.

## Konstruktor

- [`EyeDropper()`](/de/docs/Web/API/EyeDropper/EyeDropper) {{Experimental_Inline}}
  - : Gibt eine neue `EyeDropper`-Instanz zurück.

## Instanzmethoden

_Das `EyeDropper`-Interface erbt keine Methoden._

- [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das auf ein Objekt auflöst, das Zugriff auf die ausgewählte Farbe gibt.

## Beispiele

### Öffnen des Pipettenwerkzeugs und Probenahme einer Farbe

Dieses Beispiel zeigt, wie ein Pipettenwerkzeug geöffnet wird und der Benutzer entweder einen Pixel vom Bildschirm auswählt oder <kbd>Escape</kbd> drückt, um den Pipettenmodus abzubrechen.

#### HTML

```html
<button id="start-button">Open the eyedropper</button> <span id="result"></span>
```

#### JavaScript

```js
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });
});
```

#### Ergebnis

{{EmbedLiveSample("Opening the eyedropper tool and sampling a color")}}

### Abbrechen des Pipettenmodus

Dieses Beispiel zeigt, dass der Pipettenmodus auch abgebrochen werden kann, bevor der Benutzer eine Farbe ausgewählt hat oder <kbd>Escape</kbd> gedrückt wurde.

#### HTML

```html
<button id="start-button">Open the eyedropper</button> <span id="result"></span>
```

#### JavaScript

```js
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });

  setTimeout(() => {
    abortController.abort();
  }, 2000);
});
```

#### Ergebnis

{{EmbedLiveSample("Aborting the eyedropper mode")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

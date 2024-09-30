---
title: EyeDropper
slug: Web/API/EyeDropper
l10n:
  sourceCommit: 9fb6c9e56c6db295967384730feeb941509ac743
---

{{securecontext_header}}{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

Die **`EyeDropper`**-Schnittstelle repräsentiert eine Instanz eines Pipettenwerkzeugs, das vom Benutzer geöffnet und verwendet werden kann, um Farben vom Bildschirm auszuwählen.

## Konstruktor

- [`EyeDropper()`](/de/docs/Web/API/EyeDropper/EyeDropper) {{Experimental_Inline}}
  - : Gibt eine neue `EyeDropper`-Instanz zurück.

## Instanzmethoden

_Die `EyeDropper`-Schnittstelle erbt keine Methoden_.

- [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das in ein Objekt aufgelöst wird, das Zugriff auf die ausgewählte Farbe bietet.

## Beispiele

### Öffnen des Pipettenwerkzeugs und Ausprobieren einer Farbe

Dieses Beispiel zeigt, wie man ein Pipettenwerkzeug öffnet und auf den Benutzer wartet, entweder ein Pixel vom Bildschirm auszuwählen oder <kbd>Escape</kbd> zu drücken, um den Pipettenmodus abzubrechen.

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

Dieses Beispiel zeigt, dass der Pipettenmodus auch abgebrochen werden kann, bevor der Benutzer eine Farbe ausgewählt oder <kbd>Escape</kbd> gedrückt hat.

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

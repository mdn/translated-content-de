---
title: "ScreenOrientation: lock() Methode"
short-title: lock()
slug: Web/API/ScreenOrientation/lock
l10n:
  sourceCommit: 0e825c9d36e8598691198a6cd3983c4c860ba42a
---

{{APIRef("Screen Orientation")}}

Die **`lock()`** Methode der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle sperrt die Orientierung des umgebenden Dokuments auf die angegebene Orientierung.

In der Regel ist das Sperren der Orientierung nur auf mobilen Geräten und wenn der Browserkontext im Vollbildmodus ist, aktiviert. Wenn das Sperren unterstützt wird, muss es für alle unten aufgelisteten Parameterwerte funktionieren.

## Syntax

```js-nolint
lock(orientation)
```

### Parameter

- `orientation`

  - : Ein Orientierungssperrtyp. Einer der folgenden:

    - `"any"`
      - : Jede der folgenden: `portrait-primary`, `portrait-secondary`, `landscape-primary` oder `landscape-secondary`.
    - `"natural"`
      - : Die natürliche Ausrichtung des Bildschirms aus dem zugrundeliegenden Betriebssystem: entweder `portrait-primary` oder `landscape-primary`.
    - `"landscape"`
      - : Eine Ausrichtung, bei der die Bildschirmbreite größer ist als die Bildschirmhöhe.
        Je nach Plattformkonvention kann dies `landscape-primary`, `landscape-secondary` oder beides sein.
    - `"portrait"`
      - : Eine Ausrichtung, bei der die Bildschirmhöhe größer ist als die Bildschirmbreite.
        Je nach Plattformkonvention kann dies `portrait-primary`, `portrait-secondary` oder beides sein.
    - `"portrait-primary"`
      - : Der "primäre" Hochformat-Modus.
        Wenn die natürliche Ausrichtung ein Hochformat ist (Bildschirmhöhe ist größer als die Breite), entspricht dies der natürlichen Ausrichtung und einem Winkel von 0 Grad.
        Wenn die natürliche Ausrichtung ein Querformat ist, kann der Benutzeragent entweder die Porträtausrichtung als `portrait-primary` und `portrait-secondary` wählen; eine der beiden wird mit einem Winkel von 90 Grad und die andere mit einem Winkel von 270 Grad zugewiesen.
    - `"portrait-secondary"`
      - : Der sekundäre Hochformat-Modus.
        Wenn die natürliche Ausrichtung ein Hochformat ist, hat dies einen Winkel von 180 Grad (mit anderen Worten, das Gerät ist relativ zur natürlichen Ausrichtung umgedreht).
        Wenn die natürliche Ausrichtung ein Querformat ist, kann dies entweder die vom Benutzeragent gewählte Orientierung sein: welche auch immer nicht für `portrait-primary` ausgewählt wurde.
    - `"landscape-primary"`
      - : Der "primäre" Querformat-Modus.
        Wenn die natürliche Ausrichtung ein Querformat ist (Bildschirmbreite ist größer als die Höhe), entspricht dies der natürlichen Ausrichtung und einem Winkel von 0 Grad.
        Wenn die natürliche Ausrichtung ein Hochformat ist, kann der Benutzeragent entweder die Querformatausrichtung als `landscape-primary` mit einem Winkel von entweder 90 oder 270 Grad (`landscape-secondary` wird die andere Orientierung und der andere Winkel sein) wählen.
    - `"landscape-secondary"`
      - : Der sekundäre Querformat-Modus.
        Wenn die natürliche Ausrichtung ein Querformat ist, ist diese Orientierung relativ zur natürlichen Ausrichtung umgedreht und hat einen Winkel von 180 Grad.
        Wenn die natürliche Ausrichtung ein Hochformat ist, kann dies entweder die Orientierung sein, die vom Benutzeragent ausgewählt wurde: welche auch immer nicht für `landscape-primary` ausgewählt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, nachdem das Sperren erfolgreich war.

### Ausnahmen

Das Versprechen kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments verborgen ist oder wenn dem Dokument die Nutzung der Funktion verboten ist (beispielsweise durch Auslassung des Schlüsselworts `allow-orientation-lock` des `sandbox` Attributs des `iframe` Elements).

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der Benutzeragent das Sperren der Bildschirmausrichtung auf die spezifische Ausrichtung nicht unterstützt.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn eine andere `lock()` Methode aufgerufen wird.

## Beispiele

Dieses Beispiel zeigt, wie man den Bildschirm auf die entgegengesetzte Ausrichtung der aktuellen sperrt.
Beachten Sie, dass dieses Beispiel nur auf mobilen Geräten und anderen Geräten funktioniert, die Ausrichtungsänderungen unterstützen.

```html
<div id="example_container">
  <button id="fullscreen_button">Fullscreen</button>
  <button id="lock_button">Lock</button>
  <button id="unlock_button">Unlock</button>
  <textarea id="log" rows="7" cols="85"></textarea>
</div>
```

```js
const log = document.getElementById("log");

// Lock button: Lock the screen to the other orientation (rotated by 90 degrees)
const rotate_btn = document.querySelector("#lock_button");
rotate_btn.addEventListener("click", () => {
  log.textContent += `Lock pressed \n`;

  const oppositeOrientation = screen.orientation.type.startsWith("portrait")
    ? "landscape"
    : "portrait";
  screen.orientation
    .lock(oppositeOrientation)
    .then(() => {
      log.textContent = `Locked to ${oppositeOrientation}\n`;
    })
    .catch((error) => {
      log.textContent += `${error}\n`;
    });
});

// Unlock button: Unlock the screen orientation (if locked)
const unlock_btn = document.querySelector("#unlock_button");
unlock_btn.addEventListener("click", () => {
  log.textContent += "Unlock pressed \n";
  screen.orientation.unlock();
});

// Full screen button: Set the example to fullscreen.
const fullscreen_btn = document.querySelector("#fullscreen_button");
fullscreen_btn.addEventListener("click", () => {
  log.textContent += "Fullscreen pressed \n";
  const container = document.querySelector("#example_container");
  container.requestFullscreen().catch((error) => {
    log.textContent += `${error}\n`;
  });
});
```

Um das Beispiel zu testen, drücken Sie zuerst die Vollbild-Taste.
Sobald das Beispiel im Vollbildmodus ist, drücken Sie die Sperr-Taste, um die Ausrichtung zu wechseln und die Entsperr-Taste, um zur natürlichen Ausrichtung zurückzukehren.

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

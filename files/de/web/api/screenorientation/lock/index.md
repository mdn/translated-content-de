---
title: "ScreenOrientation: lock() Methode"
short-title: lock()
slug: Web/API/ScreenOrientation/lock
l10n:
  sourceCommit: 0e825c9d36e8598691198a6cd3983c4c860ba42a
---

{{APIRef("Screen Orientation")}}

Die **`lock()`** Methode der {{domxref("ScreenOrientation")}} Schnittstelle sperrt die Ausrichtung des enthaltenen Dokuments auf die angegebene Ausrichtung.

In der Regel ist die Sperrung der Ausrichtung nur auf mobilen Geräten aktiviert und wenn der Browser-Kontext im Vollbildmodus ist.
Wenn die Sperrung unterstützt wird, muss sie für alle unten aufgeführten Parameterwerte funktionieren.

## Syntax

```js-nolint
lock(orientation)
```

### Parameter

- `orientation`

  - : Ein Ausrichtungssperrtyp. Einer der folgenden:

    - `"any"`
      - : Entweder `portrait-primary`, `portrait-secondary`, `landscape-primary` oder `landscape-secondary`.
    - `"natural"`
      - : Die natürliche Ausrichtung des Bildschirms vom zugrunde liegenden Betriebssystem: entweder `portrait-primary` oder `landscape-primary`.
    - `"landscape"`
      - : Eine Ausrichtung, bei der die Bildschirmbreite größer ist als die Bildschirmhöhe.
        Abhängig von der Plattformkonvention kann dies `landscape-primary`, `landscape-secondary` oder beides sein.
    - `"portrait"`
      - : Eine Ausrichtung, bei der die Bildschirmhöhe größer ist als die Bildschirmbreite.
        Abhängig von der Plattformkonvention kann dies `portrait-primary`, `portrait-secondary` oder beides sein.
    - `"portrait-primary"`
      - : Der „primäre“ Porträtmodus.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist (Bildschirmhöhe ist größer als die Breite), entspricht dies der natürlichen Ausrichtung und entspricht einem Winkel von 0 Grad.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, kann der Benutzeragent entweder die Porträtausrichtung als `portrait-primary` und `portrait-secondary` wählen; einer davon wird dem Winkel von 90 Grad und der andere einem Winkel von 270 Grad zugeordnet.
    - `"portrait-secondary"`
      - : Die sekundäre Porträtausrichtung.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, hat dies einen Winkel von 180 Grad (mit anderen Worten, das Gerät ist im Vergleich zu seiner natürlichen Ausrichtung umgedreht).
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, kann dies entweder die vom Benutzeragent gewählte Ausrichtung sein: welche auch immer nicht für `portrait-primary` ausgewählt wurde.
    - `"landscape-primary"`
      - : Der „primäre“ Landschaftsmodus.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist (Bildschirmbreite ist größer als die Höhe), entspricht dies der natürlichen Ausrichtung und entspricht einem Winkel von 0 Grad.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, kann der Benutzeragent entweder die Landschaftsausrichtung als `landscape-primary` mit einem Winkel von entweder 90 oder 270 Grad wählen (`landscape-secondary` wird die andere Ausrichtung und Winkel sein).
    - `"landscape-secondary"`
      - : Der sekundäre Landschaftsmodus.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, ist diese Ausrichtung im Vergleich zur natürlichen Ausrichtung umgedreht und hat einen Winkel von 180 Grad.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, kann dies entweder die vom Benutzeragent gewählte Ausrichtung sein: welche auch immer nicht für `landscape-primary` ausgewählt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, nachdem die Sperrung erfolgreich war.

### Ausnahmen

Das Versprechen kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments verborgen ist oder wenn dem Dokument die Nutzung der Funktion untersagt ist (zum Beispiel durch das Auslassen des Schlüsselworts `allow-orientation-lock` des `sandbox` Attributs des `iframe` Elements).

- `NotSupportedError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn der Benutzeragent das Sperren der Bildschirmausrichtung für die bestimmte Ausrichtung nicht unterstützt.

- `AbortError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn eine andere `lock()` Methode aufgerufen wird.

## Beispiele

Dieses Beispiel zeigt, wie der Bildschirm auf die entgegengesetzte Ausrichtung des aktuellen gesperrt wird.
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
Sobald das Beispiel im Vollbildmodus ist, drücken Sie die Sperrtaste, um die Ausrichtung zu wechseln, und entsperren Sie, um zur natürlichen Ausrichtung zurückzukehren.

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "ScreenOrientation: lock() Methode"
short-title: lock()
slug: Web/API/ScreenOrientation/lock
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Screen Orientation")}}

Die **`lock()`**-Methode der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle sperrt die Ausrichtung des enthaltenden Dokuments auf die angegebene Ausrichtung.

Typischerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten aktiviert und wenn der Browser im Vollbildmodus ist. Wenn das Sperren unterstützt wird, muss es für alle unten aufgeführten Parameterwerte funktionieren.

## Syntax

```js-nolint
lock(orientation)
```

### Parameter

- `orientation`
  - : Ein Ausrichtungssperr-Typ. Einer der folgenden:
    - `"any"`
      - : Eine der `portrait-primary`, `portrait-secondary`, `landscape-primary` oder `landscape-secondary`.
    - `"natural"`
      - : Die natürliche Ausrichtung des Bildschirms aus dem zugrunde liegenden Betriebssystem: entweder `portrait-primary` oder `landscape-primary`.
    - `"landscape"`
      - : Eine Ausrichtung, bei der die Bildschirmbreite größer ist als die Bildschirmhöhe.
        Abhängig von der Plattformkonvention kann dies `landscape-primary`, `landscape-secondary` oder beides sein.
    - `"portrait"`
      - : Eine Ausrichtung, bei der die Bildschirmhöhe größer ist als die Bildschirmbreite.
        Abhängig von der Plattformkonvention kann dies `portrait-primary`, `portrait-secondary` oder beides sein.
    - `"portrait-primary"`
      - : Der "primäre" Porträtmodus.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist (Bildschirmhöhe größer als Breite), wird dies der natürlichen Ausrichtung entsprechen und einem Winkel von 0 Grad entsprechen.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, kann der Benutzeragent eine der beiden Porträtausrichtungen als `portrait-primary` und `portrait-secondary` wählen; einer dieser Winkel wird 90 Grad und der andere 270 Grad haben.
    - `"portrait-secondary"`
      - : Die sekundäre Porträtausrichtung.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, wird dies einen Winkel von 180 Grad haben (mit anderen Worten, das Gerät ist im Vergleich zur natürlichen Ausrichtung umgedreht).
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, kann dies eine beliebige Ausrichtung sein, die vom Benutzeragenten ausgewählt wurde: welche nicht für `portrait-primary` ausgewählt wurde.
    - `"landscape-primary"`
      - : Der "primäre" Landschaftsmodus.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist (Bildschirmbreite größer als Höhe), wird dies der natürlichen Ausrichtung entsprechen und einem Winkel von 0 Grad entsprechen.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, kann der Benutzeragent eine der beiden Landschaftsausrichtungen als `landscape-primary` mit einem Winkel von entweder 90 oder 270 Grad wählen (`landscape-secondary` wird die andere Ausrichtung und der andere Winkel sein).
    - `"landscape-secondary"`
      - : Der sekundäre Landschaftsmodus.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, ist diese Ausrichtung im Vergleich zur natürlichen Ausrichtung auf den Kopf gestellt und hat einen Winkel von 180 Grad.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, kann dies eine beliebige Ausrichtung sein, die vom Benutzeragenten ausgewählt wurde: welche nicht für `landscape-primary` ausgewählt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, nachdem das Sperren erfolgreich war.

### Ausnahmen

Das Promise kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments verborgen ist oder wenn das Dokument daran gehindert wird, die Funktion zu verwenden (zum Beispiel durch Auslassen des Schlüsselworts `allow-orientation-lock` des `sandbox`-Attributs des `iframe`-Elements).

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der Benutzeragent die Sperrung der Bildschirmausrichtung für die spezielle Ausrichtung nicht unterstützt.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine andere `lock()`-Methode aufgerufen wird.

## Beispiele

Dieses Beispiel zeigt, wie der Bildschirm auf die entgegengesetzte Ausrichtung der aktuellen gesperrt wird. Beachten Sie, dass dieses Beispiel nur auf mobilen Geräten und anderen Geräten funktioniert, die Ausrichtungsänderungen unterstützen.

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

Um das Beispiel zu testen, drücken Sie zuerst die Vollbild-Taste. Sobald das Beispiel im Vollbildmodus ist, drücken Sie die Sperr-Taste, um die Ausrichtung zu wechseln, und Entsperren, um zur natürlichen Ausrichtung zurückzukehren.

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "ScreenOrientation: `lock()`-Methode"
short-title: lock()
slug: Web/API/ScreenOrientation/lock
l10n:
  sourceCommit: d62d7c62b44df2861852308385603d97586939ab
---

{{APIRef("Screen Orientation")}}

Die **`lock()`**-Methode der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle sperrt die Ausrichtung des enthaltenen Dokuments auf die angegebene Ausrichtung.

Typischerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten aktiviert und wenn der Browser-Kontext im Vollbildmodus ist. Wenn das Sperren unterstützt wird, muss es für alle unten aufgeführten Parameterwerte funktionieren.

## Syntax

```js-nolint
lock(orientation)
```

### Parameter

- `orientation`
  - : Ein Ausrichtungssperrtyp. Einer der folgenden:
    - `"any"`
      - : Jeder von `portrait-primary`, `portrait-secondary`, `landscape-primary` oder `landscape-secondary`.
    - `"natural"`
      - : Die natürliche Ausrichtung des Bildschirms vom zugrundeliegenden Betriebssystem: entweder `portrait-primary` oder `landscape-primary`.
    - `"landscape"`
      - : Eine Ausrichtung, bei der die Bildschirmbreite größer ist als die Bildschirmhöhe.
        Je nach Plattformkonvention kann dies `landscape-primary`, `landscape-secondary` oder beides sein.
    - `"portrait"`
      - : Eine Ausrichtung, bei der die Bildschirmhöhe größer ist als die Bildschirmbreite.
        Je nach Plattformkonvention kann dies `portrait-primary`, `portrait-secondary` oder beides sein.
    - `"portrait-primary"`
      - : Der "primäre" Hochformatmodus.
        Wenn die natürliche Ausrichtung ein Hochformatmodus ist (Bildschirmhöhe ist größer als Breite), entspricht dies der natürlichen Ausrichtung und entspricht einem Winkel von 0 Grad.
        Wenn die natürliche Ausrichtung ein Querformatmodus ist, kann der Benutzeragent eine der beiden Hochformate als `portrait-primary` und `portrait-secondary` auswählen; eine dieser Ausrichtungen wird einem Winkel von 90 Grad und die andere einem Winkel von 270 Grad zugewiesen.
    - `"portrait-secondary"`
      - : Die sekundäre Hochformatausrichtung.
        Wenn die natürliche Ausrichtung ein Hochformatmodus ist, hat diese Ausrichtung einen Winkel von 180 Grad (mit anderen Worten, das Gerät ist relativ zu seiner natürlichen Ausrichtung auf dem Kopf).
        Wenn die natürliche Ausrichtung ein Querformatmodus ist, kann diese Ausrichtung vom Benutzeragenten beliebig ausgewählt werden: je nachdem, welche nicht für `portrait-primary` ausgewählt wurde.
    - `"landscape-primary"`
      - : Der "primäre" Querformatmodus.
        Wenn die natürliche Ausrichtung ein Querformatmodus ist (Bildschirmbreite ist größer als Höhe), entspricht dies der natürlichen Ausrichtung und einem Winkel von 0 Grad.
        Wenn die natürliche Ausrichtung ein Hochformatmodus ist, kann der Benutzeragent eine der beiden Ausrichtungen als `landscape-primary` mit einem Winkel von entweder 90 oder 270 Grad auswählen (`landscape-secondary` wird die andere Ausrichtung und der andere Winkel sein).
    - `"landscape-secondary"`
      - : Der sekundäre Querformatmodus.
        Wenn die natürliche Ausrichtung ein Querformatmodus ist, ist diese Ausrichtung relativ zur natürlichen Ausrichtung auf dem Kopf und hat einen Winkel von 180 Grad.
        Wenn die natürliche Ausrichtung ein Hochformatmodus ist, kann diese Ausrichtung vom Benutzeragenten beliebig ausgewählt werden: je nachdem, welche nicht für `landscape-primary` ausgewählt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das nach erfolgreichem Sperren aufgelöst wird.

### Ausnahmen

Das Promise kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments verborgen ist oder wenn dem Dokument die Verwendung der Funktion untersagt ist (z.B. durch das Weglassen des Schlüssels `allow-orientation-lock` des `sandbox`-Attributs des `iframe`-Elements).

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzeragent die Sperrung der Bildschirmausrichtung in der spezifischen Ausrichtung nicht unterstützt.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine andere `lock()`-Methode aufgerufen wird oder wenn [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) aufgerufen wird, während das Sperr-Promise aussteht.

## Beispiele

Dieses Beispiel zeigt, wie der Bildschirm auf die entgegengesetzte Ausrichtung der aktuellen gesperrt wird.
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

Um das Beispiel zu testen, drücken Sie zuerst den Vollbild-Button.
Sobald das Beispiel im Vollbild ist, drücken Sie den Sperr-Button, um die Ausrichtung zu wechseln, und Entsperren, um zur natürlichen Ausrichtung zurückzukehren.

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

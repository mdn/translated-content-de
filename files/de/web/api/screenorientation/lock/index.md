---
title: "ScreenOrientation: lock()-Methode"
short-title: lock()
slug: Web/API/ScreenOrientation/lock
l10n:
  sourceCommit: 0e825c9d36e8598691198a6cd3983c4c860ba42a
---

{{APIRef("Screen Orientation")}}

Die **`lock()`**-Methode des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Interfaces sperrt die Ausrichtung des enthaltenen Dokuments auf die angegebene Ausrichtung.

Typischerweise ist das Sperren der Orientierung nur auf mobilen Geräten aktiv und wenn der Browser-Kontext im Vollbildmodus ist. Wenn das Sperren unterstützt wird, muss es für alle unten aufgeführten Parameterwerte funktionieren.

## Syntax

```js-nolint
lock(orientation)
```

### Parameter

- `orientation`

  - : Ein Ausrichtungssperre-Typ. Eines der folgenden:

    - `"any"`
      - : Jede der `portrait-primary`, `portrait-secondary`, `landscape-primary` oder `landscape-secondary`.
    - `"natural"`
      - : Die natürliche Ausrichtung des Bildschirms aus dem zugrundeliegenden Betriebssystem: entweder `portrait-primary` oder `landscape-primary`.
    - `"landscape"`
      - : Eine Ausrichtung, bei der die Bildschirmbreite größer ist als die Bildschirmhöhe.
        Je nach Plattformkonvention kann dies `landscape-primary`, `landscape-secondary` oder beides sein.
    - `"portrait"`
      - : Eine Ausrichtung, bei der die Bildschirmhöhe größer ist als die Bildschirmbreite.
        Je nach Plattformkonvention kann dies `portrait-primary`, `portrait-secondary` oder beides sein.
    - `"portrait-primary"`
      - : Der "primäre" Porträtmodus.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist (Bildschirmhöhe ist größer als die Breite), wird dies derselbe wie die natürliche Ausrichtung sein und einem Winkel von 0 Grad entsprechen.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, kann der User-Agent entweder die porträt-orientierten Ausrichtungen als `portrait-primary` und `portrait-secondary` wählen; einer davon wird dem Winkel von 90 Grad zugewiesen, und der andere hat einen Winkel von 270 Grad.
    - `"portrait-secondary"`
      - : Der sekundäre Porträtmodus.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, wird dies einen Winkel von 180 Grad haben (mit anderen Worten, das Gerät ist auf dem Kopf im Vergleich zur natürlichen Ausrichtung).
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, kann dies jede Orientierung sein, die vom User-Agent ausgewählt wurde: welche nicht für `portrait-primary` ausgewählt wurde.
    - `"landscape-primary"`
      - : Der "primäre" Landschaftsmodus.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist (Bildschirmbreite ist größer als Höhe), wird dies derselbe wie die natürliche Ausrichtung sein und einem Winkel von 0 Grad entsprechen.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, kann der User-Agent entweder die landschaftlichen Ausrichtungen als `landscape-primary` mit einem Winkel von entweder 90 oder 270 Grad wählen (`landscape-secondary` wird die andere Orientierung und der andere Winkel sein).
    - `"landscape-secondary"`
      - : Der sekundäre Landschaftsmodus.
        Wenn die natürliche Ausrichtung ein Landschaftsmodus ist, ist diese Orientierung auf dem Kopf im Vergleich zur natürlichen Ausrichtung und wird einen Winkel von 180 Grad haben.
        Wenn die natürliche Ausrichtung ein Porträtmodus ist, kann dies jede Orientierung sein, die vom User-Agent ausgewählt wurde: welche nicht für `landscape-primary` ausgewählt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, nachdem das Sperren erfolgreich ist.

### Ausnahmen

Das Versprechen kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments versteckt ist oder wenn das Dokument daran gehindert wird, die Funktion zu verwenden (zum Beispiel durch das Weglassen des Schlüsselworts `allow-orientation-lock` des `sandbox`-Attributs des `<iframe>`-Elements).

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der User-Agent das Sperren der Bildschirmorientierung auf die bestimmte Orientierung nicht unterstützt.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn es einen anderen `lock()`-Methodenaufruf gibt.

## Beispiele

Dieses Beispiel zeigt, wie der Bildschirm auf die entgegengesetzte Ausrichtung der aktuellen gesperrt wird. Beachten Sie, dass dieses Beispiel nur auf mobilen Geräten und anderen Geräten funktioniert, die Orientierungsänderungen unterstützen.

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

Um das Beispiel zu testen, drücken Sie zuerst die Vollbildtaste. Sobald das Beispiel im Vollbildmodus ist, drücken Sie die Sperrtaste, um die Ausrichtung zu wechseln, und Entsperren, um zur natürlichen Ausrichtung zurückzukehren.

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

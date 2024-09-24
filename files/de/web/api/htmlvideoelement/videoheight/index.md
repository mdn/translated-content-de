---
title: "HTMLVideoElement: videoHeight-Eigenschaft"
short-title: videoHeight
slug: Web/API/HTMLVideoElement/videoHeight
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoHeight`**-Eigenschaft des {{domxref("HTMLVideoElement")}}-Interfaces gibt die [intrinsische Höhe](#über_intrinsische_breite_und_höhe) des Videos in CSS-Pixeln an. Einfach ausgedrückt ist dies die Höhe der Medien in ihrer natürlichen Größe.

## Wert

Ein Ganzzahlwert, der die intrinsische Höhe des Videos in CSS-Pixeln angibt. Wenn der {{domxref("HTMLMediaElement.readyState", "readyState")}} des Elements `HTMLMediaElement.HAVE_NOTHING` ist, dann ist der Wert dieser Eigenschaft 0, da weder Video- noch Posterrahmengrößeninformationen verfügbar sind.

### Über intrinsische Breite und Höhe

Ein {{Glossary("user agent")}} berechnet die intrinsische Breite und Höhe der Medien des Elements, indem er mit der rohen Pixelbreite und -höhe der Medien beginnt und dann Faktoren berücksichtigt, einschließlich:

- Des {{glossary("aspect ratio", "Seitenverhältnisses")}} der Medien.
- Der sauberen Blende der Medien (das Subrechteck, das innerhalb der Medien zentriert ist und dem Ziel-Seitenverhältnis entspricht).
- Der Auflösung des Zielgeräts.
- Aller anderen durch das Medienformat erforderlichen Faktoren.

Wenn das Element derzeit den Posterrahmen anzeigt anstatt des wiedergegebenen Videos, wird die intrinsische Größe des Posterrahmens als die Größe des `<video>`-Elements betrachtet.

Wenn sich zu irgendeinem Zeitpunkt die intrinsische Größe der Medien ändert und der {{domxref("HTMLMediaElement.readyState", "readyState")}} des Elements nicht `HAVE_NOTHING` ist, wird ein {{domxref("HTMLVideoElement.resize_event", "resize")}}-Ereignis an das `<video>`-Element gesendet. Dies kann passieren, wenn das Element von der Anzeige des Posterrahmens zur Anzeige von Videoinhalten wechselt oder wenn sich die angezeigte Videospur ändert.

## Beispiele

Dieses Beispiel erstellt einen Handler für das {{domxref("HTMLVideoElement.resize_event", "resize")}}-Ereignis, der das {{HTMLElement("video")}}-Element an die intrinsische Größe seiner Inhalte anpasst.

```js
let v = document.getElementById("myVideo");

v.addEventListener(
  "resize",
  (ev) => {
    let w = v.videoWidth;
    let h = v.videoHeight;

    if (w && h) {
      v.style.width = w;
      v.style.height = h;
    }
  },
  false,
);
```

Beachten Sie, dass dies die Änderung nur dann anwendet, wenn sowohl `videoWidth` als auch `videoHeight` ungleich Null sind. Dies vermeidet das Anwenden ungültiger Änderungen, wenn noch keine zuverlässigen Informationen zu den Dimensionen verfügbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

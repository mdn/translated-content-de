---
title: "HTMLVideoElement: videoHeight-Eigenschaft"
short-title: videoHeight
slug: Web/API/HTMLVideoElement/videoHeight
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoHeight`**-Eigenschaft der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle gibt die [intrinsische Höhe](#über_intrinsische_breite_und_höhe) des Videos an, ausgedrückt in CSS-Pixeln. Einfach gesagt, dies ist die Höhe des Mediums in seiner natürlichen Größe.

## Wert

Ein ganzzahliger Wert, der die intrinsische Höhe des Videos in CSS-Pixeln angibt. Wenn der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) des Elements `HTMLMediaElement.HAVE_NOTHING` ist, dann ist der Wert dieser Eigenschaft 0, da weder Video- noch Posterrahmengröße-Informationen verfügbar sind.

### Über intrinsische Breite und Höhe

Ein {{Glossary("user_agent", "User Agent")}} berechnet die intrinsische Breite und Höhe der Medienelemente, indem er mit der Rohpixelbreite und -höhe des Mediums beginnt und dann Faktoren wie berücksichtigt:

- Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Mediums.
- Die saubere Blende des Mediums (das Unterrechteck in der Mitte des Mediums, das dem Zielseitenverhältnis entspricht).
- Die Auflösung des Zielgeräts.
- Alle anderen vom Medienformat geforderten Faktoren.

Wenn das Element derzeit den Posterrahmen anzeigt und nicht das gerenderte Video, wird die intrinsische Größe des Posterrahmens als die Größe des `<video>`-Elements betrachtet.

Wenn sich zu irgendeinem Zeitpunkt die intrinsische Größe des Mediums ändert und der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) des Elements nicht `HAVE_NOTHING` ist, wird ein [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)-Ereignis an das `<video>`-Element gesendet. Dies kann passieren, wenn das Element vom Anzeigen des Posterrahmens zum Anzeigen von Videoinhalten wechselt oder wenn der angezeigte Videotrack wechselt.

## Beispiele

Dieses Beispiel erstellt einen Handler für das [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)-Ereignis, der das {{HTMLElement("video")}}-Element so anpasst, dass es die intrinsische Größe seiner Inhalte entspricht.

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

Beachten Sie, dass dies nur die Änderung anwendet, wenn sowohl `videoWidth` als auch `videoHeight` ungleich null sind. Dies verhindert das Anwenden ungültiger Änderungen, wenn noch keine echten Informationen zu den Abmessungen verfügbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

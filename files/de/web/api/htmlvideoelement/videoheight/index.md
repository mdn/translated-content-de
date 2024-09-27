---
title: "HTMLVideoElement: videoHeight-Eigenschaft"
short-title: videoHeight
slug: Web/API/HTMLVideoElement/videoHeight
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoHeight`**-Eigenschaft des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces gibt die [intrinsische Höhe](#über_intrinsische_breite_und_höhe) des Videos in CSS-Pixeln an. Einfach ausgedrückt, dies ist die Höhe des Mediums in seiner natürlichen Größe.

## Wert

Ein ganzzahliger Wert, der die intrinsische Höhe des Videos in CSS-Pixeln angibt. Wenn der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) des Elements `HTMLMediaElement.HAVE_NOTHING` ist, beträgt der Wert dieser Eigenschaft 0, da weder Video- noch Poster-Frame-Größeninformationen verfügbar sind.

### Über intrinsische Breite und Höhe

Ein [User Agent](/de/docs/Glossary/user_agent) berechnet die intrinsische Breite und Höhe des Medienelements, indem er mit der Rohpixel-Breite und -Höhe des Mediums beginnt und dann Faktoren berücksichtigt, darunter:

- Das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des Mediums.
- Die saubere Blende des Mediums (das innerhalb des Mediums zentrierte Unterrechteck, das dem Ziel-Seitenverhältnis entspricht).
- Die Auflösung des Zielgeräts.
- Alle weiteren Faktoren, die das Medienformat erfordert.

Wenn das Element derzeit den Poster-Frame anstelle von gerendertem Video anzeigt, wird die intrinsische Größe des Poster-Frames als die Größe des `<video>`-Elements betrachtet.

Sollte sich die intrinsische Größe des Mediums ändern und der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) des Elements nicht `HAVE_NOTHING` sein, wird ein [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)-Ereignis an das `<video>`-Element gesendet.
Dies kann passieren, wenn das Element vom Anzeigen des Poster-Frames zum Anzeigen von Videoinhalten oder beim Wechsel des angezeigten Videotracks wechselt.

## Beispiele

Dieses Beispiel erstellt einen Handler für das [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)-Ereignis, der das {{HTMLElement("video")}}-Element an die intrinsische Größe seiner Inhalte anpasst.

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

Beachten Sie, dass dies nur dann Änderungen anwendet, wenn sowohl die `videoWidth` als auch die `videoHeight` ungleich null sind.
Dies verhindert die Anwendung ungültiger Änderungen, wenn noch keine echten Informationen über die Abmessungen verfügbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

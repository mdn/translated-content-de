---
title: "HTMLVideoElement: videoHeight Eigenschaft"
short-title: videoHeight
slug: Web/API/HTMLVideoElement/videoHeight
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoHeight`** Eigenschaft des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces gibt die [intrinsische Höhe](#über_intrinsische_breite_und_höhe) des Videos an, ausgedrückt in CSS-Pixeln. Einfach ausgedrückt ist dies die natürliche Größe des Mediums in Höhe.

## Wert

Ein ganzzahliger Wert, der die intrinsische Höhe des Videos in CSS-Pixeln angibt. Wenn der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) des Elements `HTMLMediaElement.HAVE_NOTHING` ist, ist der Wert dieser Eigenschaft 0, da noch keine Informationen über die Größe des Videos oder des Posterbildes verfügbar sind.

### Über intrinsische Breite und Höhe

Ein {{Glossary("user_agent", "Benutzeragent")}} berechnet die intrinsische Breite und Höhe des Medienelements, indem er mit der Roh-Pixel-Breite und -Höhe des Mediums beginnt und dann Faktoren wie berücksichtigt:

- Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Mediums.
- Die saubere Öffnung des Mediums (das zentrierte Rechteck innerhalb des Mediums, das dem Ziel-Seitenverhältnis entspricht).
- Die Auflösung des Zielgeräts.
- Andere für das Medienformat erforderliche Faktoren.

Wenn das Element derzeit das Posterbild anzeigt, anstatt gerendertes Video, wird die intrinsische Größe des Posterbildes als die Größe des `<video>` Elements betrachtet.

Wenn sich die intrinsische Größe des Mediums zu irgendeinem Zeitpunkt ändert und der [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) des Elements nicht `HAVE_NOTHING` ist, wird ein [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event) Ereignis an das `<video>` Element gesendet. Dies kann passieren, wenn das Element vom Anzeigen des Posterbildes zum Anzeigen von Videoinhalten wechselt oder wenn der angezeigte Videodatenstrom wechselt.

## Beispiele

Dieses Beispiel erstellt einen Handler für das [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event) Ereignis, der das {{HTMLElement("video")}} Element an die intrinsische Größe seiner Inhalte anpasst.

```js
let v = document.getElementById("myVideo");

v.addEventListener("resize", (ev) => {
  let w = v.videoWidth;
  let h = v.videoHeight;

  if (w && h) {
    v.style.width = w;
    v.style.height = h;
  }
});
```

Beachten Sie, dass dies die Änderung nur anwendet, wenn sowohl `videoWidth` als auch `videoHeight` ungleich null sind. Dies vermeidet das Anwenden ungültiger Änderungen, wenn noch keine echten Informationen über die Abmessungen verfügbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

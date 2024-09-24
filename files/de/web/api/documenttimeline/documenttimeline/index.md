---
title: "DocumentTimeline: DocumentTimeline() Konstruktor"
short-title: DocumentTimeline()
slug: Web/API/DocumentTimeline/DocumentTimeline
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("Web Animations") }}

Der **`DocumentTimeline()`** Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) erstellt eine neue Instanz des {{domxref("DocumentTimeline")}} Objekts, das mit dem aktiven Dokument des aktuellen Browsing-Kontextes verknüpft ist.

## Syntax

```js-nolint
new DocumentTimeline(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die neue Zeitleiste angibt. Die folgenden Eigenschaften sind verfügbar:
    - `originTime` {{optional_inline}}
      - : Eine `number`, die die Nullzeit für die {{domxref("DocumentTimeline")}}
        als eine Anzahl von Millisekunden relativ zu {{domxref("Performance.timeOrigin")}} angibt.
        Der Standardwert ist `0`.

## Beispiele

### Ursprungszeit

Eine {{domxref("DocumentTimeline")}} mit einer `originTime` von null zählt die Zeit
beginnend von {{domxref("Performance.timeOrigin")}}. Dies ist dasselbe Verhalten
wie {{domxref("Document.timeline")}}.

```js
const timeline = new DocumentTimeline();
console.log(timeline.currentTime === document.timeline.currentTime); // true
```

Das Setzen einer nicht-null `originTime` wird die {{domxref("DocumentTimeline")}}
um diesen Betrag von {{domxref("Document.timeline")}} verschieben:

```js
const offsetTimeline = new DocumentTimeline({ originTime: 500 });
console.log(document.timeline.currentTime - offsetTimeline.currentTime); // 500
```

Eine {{domxref("DocumentTimeline")}} relativ zum aktuellen Moment kann konstruiert werden mit:

```js
const nowTimeline = new DocumentTimeline({
  originTime: document.timeline.currentTime,
});
console.log(nowTimeline.currentTime); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}}

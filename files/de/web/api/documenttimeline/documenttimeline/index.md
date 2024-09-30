---
title: "DocumentTimeline: DocumentTimeline() Konstruktor"
short-title: DocumentTimeline()
slug: Web/API/DocumentTimeline/DocumentTimeline
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("Web Animations") }}

Der **`DocumentTimeline()`** Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) erstellt eine neue Instanz des [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)-Objekts, das mit dem aktiven Dokument des aktuellen Browsing-Kontexts verbunden ist.

## Syntax

```js-nolint
new DocumentTimeline(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die neue Timeline angibt. Die folgenden Eigenschaften sind verfügbar:
    - `originTime` {{optional_inline}}
      - : Eine `number`, die die Nullzeit für die [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
        als Anzahl von Millisekunden relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) angibt.
        Standardmäßig `0`.

## Beispiele

### Ursprungzeit

Eine [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) mit einer `originTime` von null zählt die Zeit
ab [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin). Dies ist das gleiche Verhalten
wie bei [`Document.timeline`](/de/docs/Web/API/Document/timeline).

```js
const timeline = new DocumentTimeline();
console.log(timeline.currentTime === document.timeline.currentTime); // true
```

Das Festlegen einer nicht-null `originTime` verschiebt die [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
um diesen Betrag von [`Document.timeline`](/de/docs/Web/API/Document/timeline):

```js
const offsetTimeline = new DocumentTimeline({ originTime: 500 });
console.log(document.timeline.currentTime - offsetTimeline.currentTime); // 500
```

Eine [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), die relativ zum aktuellen Moment ist, kann wie folgt erstellt werden:

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
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)

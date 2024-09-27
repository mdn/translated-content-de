---
title: "WorkerGlobalScope: fonts-Eigenschaft"
short-title: fonts
slug: Web/API/WorkerGlobalScope/fonts
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("DOM")}}{{AvailableInWorkers("worker")}}

Die **`fonts`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interface des Workers zurück.

Diese Eigenschaft ist Teil der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interface des Workers. Das `FontFaceSet`-Interface ist nützlich zum Laden neuer Schriftarten, Überprüfen des Status bereits geladener Schriftarten usw.

## Beispiele

### Operation nach dem Laden aller Schriftarten durchführen

```js
fonts.ready.then(() => {
  // Any operation that needs to be done only after all the fonts
  // have finished loading can go here.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interface
- [`FontFace`](/de/docs/Web/API/FontFace)

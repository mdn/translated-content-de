---
title: "WorkerGlobalScope: fonts-Eigenschaft"
short-title: fonts
slug: Web/API/WorkerGlobalScope/fonts
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("DOM")}}{{AvailableInWorkers("worker")}}

Die **`fonts`**-Eigenschaft des {{domxref("WorkerGlobalScope")}}-Interfaces gibt das {{domxref("FontFaceSet")}}-Interface des Workers zurück.

Diese Eigenschaft ist Teil der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist das {{domxref("FontFaceSet")}}-Interface des Workers.
Das `FontFaceSet`-Interface ist nützlich zum Laden neuer Schriftarten, Überprüfen des Status zuvor geladener Schriftarten usw.

## Beispiele

### Ausführen von Operationen, nachdem alle Schriftarten geladen sind

```js
fonts.ready.then(() => {
  // Jede Operation, die nur nach dem vollständigen Laden aller Schriftarten
  // ausgeführt werden muss, kann hier erfolgen.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("FontFaceSet")}}-Interface
- {{domxref("FontFace")}}

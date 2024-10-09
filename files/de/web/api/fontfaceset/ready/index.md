---
title: "FontFaceSet: ready-Eigenschaft"
short-title: ready
slug: Web/API/FontFaceSet/ready
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft `ready` der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf das gegebene [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) auflöst.

Das Promise wird erst aufgelöst, wenn das Dokument das Laden von Schriftarten abgeschlossen hat, Layout-Operationen abgeschlossen sind und keine weiteren Schriftarten geladen werden müssen.

## Wert

Ein {{jsxref("Promise")}}, das auf das gegebene [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) auflöst.

## Beispiele

Im folgenden Beispiel wird der Wert von `ready` in die Konsole ausgegeben, sobald das Promise aufgelöst wurde.

```js
async function isReady() {
  let ready = await document.fonts.ready;
  console.log(ready);
}

isReady();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

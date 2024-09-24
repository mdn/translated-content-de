---
title: "NavigateEvent: hashChange-Eigenschaft"
short-title: hashChange
slug: Web/API/NavigateEvent/hashChange
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`hashChange`**-Eigenschaft der {{domxref("NavigateEvent")}}-Schnittstelle gibt `true` zurück, wenn es sich bei der Navigation um eine Fragment-Navigation handelt (d.h. zu einem Fragmentbezeichner im selben Dokument), oder `false` in anderen Fällen.

## Wert

Ein boolescher Wert—`true`, wenn die Navigation eine Fragment-Navigation ist, `false`, wenn nicht.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Einige Navigationen, z.B. Cross-Origin-Navigationen, 
  // können wir nicht abfangen. Lassen Sie den Browser diese normal behandeln.
  if (!event.canIntercept) {
    return;
  }

  // Fragment-Navigationen oder Downloads nicht abfangen.
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  event.intercept({
    handler() {
      if (event.formData) {
        processFormDataAndUpdateUI(event.formData, event.signal);
      } else {
        doSinglePageAppNav(event.destination, event.signal);
      }
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routen: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)

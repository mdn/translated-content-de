---
title: "NavigateEvent: formData-Eigenschaft"
short-title: formData
slug: Web/API/NavigateEvent/formData
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`formData`** der {{domxref("NavigateEvent")}}-Schnittstelle gibt das {{domxref("FormData")}}-Objekt zurück, das die übermittelten Daten im Falle einer [POST](/de/docs/Web/HTTP/Methods/POST)-Formularübermittlung darstellt, oder `null` andernfalls.

## Wert

Ein {{domxref("FormData")}}-Objekt oder `null`.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Manche Navigationsereignisse, z.B. Cross-Origin-Navigations, können wir
  // nicht abfangen. Lassen Sie den Browser diese normal behandeln.
  if (!event.canIntercept) {
    return;
  }

  // Keine Fragmentnavigationen oder Downloads abfangen.
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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Livedemo](https://gigantic-honored-octagon.glitch.me/)

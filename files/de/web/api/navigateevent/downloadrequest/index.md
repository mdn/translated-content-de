---
title: "NavigateEvent: downloadRequest-Eigenschaft"
short-title: downloadRequest
slug: Web/API/NavigateEvent/downloadRequest
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`downloadRequest`** des {{domxref("NavigateEvent")}}-Interfaces gibt den Dateinamen der Datei zurück, die für den Download angefordert wurde, falls es sich um eine Download-Navigation handelt (z. B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut), oder `null` andernfalls.

## Wert

Ein String, der den Dateinamen der angeforderten Datei für den Download enthält, oder `null`.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Bei einigen Navigationsvorgängen, z. B. Cross-Origin-Navigationen,
  // können wir nicht eingreifen. Lassen Sie den Browser diese normal behandeln.
  if (!event.canIntercept) {
    return;
  }

  // Keine Fragment-Navigationen oder Downloads abfangen.
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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)

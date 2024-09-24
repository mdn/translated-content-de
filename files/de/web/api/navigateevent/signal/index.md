---
title: "NavigateEvent: signal-Eigenschaft"
short-title: signal
slug: Web/API/NavigateEvent/signal
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`signal`**-Eigenschaft der {{domxref("NavigateEvent")}}-Schnittstelle gibt ein {{domxref("AbortSignal")}} zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. durch das Drücken der "Stopp"-Schaltfläche des Browsers oder durch den Beginn einer anderen Navigation, die die laufende Navigation abbricht).

## Wert

Ein {{domxref("AbortSignal")}}-Objekt.

## Beispiele

Die allgemeine Idee hier ist, dass die `signal`-Eigenschaft an einen zugehörigen {{domxref("Window/fetch", "fetch()")}}-Vorgang übergeben werden kann, sodass, falls die Navigation abgebrochen wird, der `fetch()`-Vorgang sicher abgebrochen werden kann, um zu vermeiden, dass Bandbreite für unnötige Datenabrufe verschwendet wird.

```js
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // ...

      await fetch(`/img/some-image.jpg`, { signal: event.signal });

      // ...
    },
  });
});
```

> [!NOTE]
> Siehe [Beispiel: Nächste/Vorherige Schaltflächen](https://github.com/WICG/navigation-api#example-nextprevious-buttons) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)

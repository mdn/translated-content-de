---
title: "NavigateEvent: destination-Eigenschaft"
short-title: destination
slug: Web/API/NavigateEvent/destination
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`destination`** schreibgeschützte Eigenschaft der {{domxref("NavigateEvent")}}-Schnittstelle gibt ein {{domxref("NavigationDestination")}}-Objekt zurück, das das Ziel repräsentiert, zu dem navigiert wird.

## Wert

Ein {{domxref("NavigationDestination")}}-Objekt.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Beenden Sie frühzeitig, wenn diese Navigation nicht abgefangen werden sollte,
  // z.B. wenn die Navigation cross-origin oder eine Download-Anfrage ist
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Die URL hat sich bereits geändert, daher einen Platzhalter anzeigen,
        // während der neue Inhalt geladen wird, wie z.B. einen Spinner oder eine Lade-Seite
        renderArticlePagePlaceholder();

        // Den neuen Inhalt abrufen und anzeigen, sobald er bereit ist
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne Client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)

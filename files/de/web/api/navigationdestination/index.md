---
title: NavigationDestination
slug: Web/API/NavigationDestination
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigationDestination`**-Schnittstelle der {{domxref("Navigation API", "Navigation API", "", "nocode")}} repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.

Sie wird über die {{domxref("NavigateEvent.destination")}}-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("NavigationDestination.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den {{domxref("NavigationHistoryEntry.id", "id")}}-Wert des Ziel-{{domxref("NavigationHistoryEntry")}} zurück, falls der {{domxref("NavigateEvent.navigationType")}} `traverse` ist, oder andernfalls einen leeren String.
- {{domxref("NavigationDestination.index", "index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den {{domxref("NavigationHistoryEntry.index", "index")}}-Wert des Ziel-{{domxref("NavigationHistoryEntry")}} zurück, falls der {{domxref("NavigateEvent.navigationType")}} `traverse` ist, oder `-1` andernfalls.
- {{domxref("NavigationDestination.key", "key")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den {{domxref("NavigationHistoryEntry.key", "key")}}-Wert des Ziel-{{domxref("NavigationHistoryEntry")}} zurück, falls der {{domxref("NavigateEvent.navigationType")}} `traverse` ist, oder andernfalls einen leeren String.
- {{domxref("NavigationDestination.sameDocument", "sameDocument")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation zum gleichen `document` wie der aktuelle {{domxref("Document")}}-Wert erfolgt, oder `false` andernfalls.
- {{domxref("NavigationDestination.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die URL zurück, zu der navigiert wird.

## Instanz-Methoden

- {{domxref("NavigationDestination.getState", "getState()")}} {{Experimental_Inline}}
  - : Gibt ein Duplikat des verfügbaren Status zurück, der mit dem Ziel-{{domxref("NavigationHistoryEntry")}} oder der Navigationsoperation (z.B. {{domxref("Navigation.navigate()", "navigate()")}}) verbunden ist, soweit zutreffend.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Beenden, wenn diese Navigation nicht abgefangen werden sollte,
  // z.B. wenn die Navigation ursprünglich oder ein Download-Anfrage ist
  if (shouldNotIntercept(event)) {
    return;
  }

  // Gibt ein URL() Objekt zurück, das aus dem
  // NavigationDestination.url-Wert konstruiert wurde
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Die URL hat sich bereits geändert, zeigen Sie also einen Platzhalter an, während
        // die neuen Inhalte abgerufen werden, z.B. ein Spinner oder Lading-Seite
        renderArticlePagePlaceholder();

        // Abrufen der neuen Inhalte und anzeigen, sobald sie bereit sind
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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`PageSwapEvent`**-Ereignisobjekt ist in den Handler-Funktionen für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis verfügbar.

Das `pageswap`-Ereignis wird ausgelöst, wenn Sie zwischen Dokumenten navigieren, während das vorherige Dokument gerade entladen wird. Während einer Cross-Dokument-Navigation ermöglicht Ihnen das `PageSwapEvent`-Ereignisobjekt, den zugehörigen [View-Übergang](/de/docs/Web/API/View_Transitions_API) (mit Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) von dem Dokument, von dem aus navigiert wird, zu manipulieren, falls die Navigation einen View-Übergang ausgelöst hat. Es ermöglicht außerdem den Zugriff auf Informationen zum Navigationstyp sowie zu den aktuellen und Ziel-Dokumenten.

## Konstruktor

- [`PageSwapEvent()`](/de/docs/Web/API/PageSwapEvent/PageSwapEvent) {{experimental_inline}}
  - : Erstellt eine neue Instanz des `PageSwapEvent`-Objekts.

## Instanz-Eigenschaften

- [`activation`](/de/docs/Web/API/PageSwapEvent/activation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt, das den Navigationstyp sowie aktuelle und Ziel-Dokumentenhistorieinträge für eine Same-Origin-Navigation enthält. Wenn die Navigation eine Cross-Origin-URL irgendwo in der Umleitungskette hat, wird `null` zurückgegeben.
- [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das den aktiven View-Übergang für die Cross-Dokument-Navigation darstellt.

## Beispiele

```js
window.addEventListener("pageswap", async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Going from profile page to homepage
    // ~> The big img and title are the ones!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> Siehe [Liste der Chrome DevRel Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)

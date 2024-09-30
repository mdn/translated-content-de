---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`PageSwapEvent`**-Ereignisobjekt steht in Handler-Funktionen für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis zur Verfügung.

Das `pageswap`-Ereignis wird ausgelöst, wenn Sie zwischen Dokumenten navigieren, sobald das vorherige Dokument entladen werden soll. Während einer Überlagerung von Dokumenten bei der Navigation ermöglicht das `PageSwapEvent`-Objekt die Manipulation des zugehörigen [View Transition](/de/docs/Web/API/View_Transitions_API) (es stellt Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) aus dem Dokument bereit, das navigiert wird _von_, wenn eine View-Übergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp sowie das aktuelle und das Zielformular-Dokument.

## Konstruktor

- [`PageSwapEvent()`](/de/docs/Web/API/PageSwapEvent/PageSwapEvent) {{experimental_inline}}
  - : Erstellt eine neue Instanz eines `PageSwapEvent`-Objekts.

## Instanz-Eigenschaften

- [`activation`](/de/docs/Web/API/PageSwapEvent/activation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt, das den Navigationstyp sowie die Einträge in der Historie des aktuellen und des Ziel-Dokuments für eine Navigation mit demselben Ursprung enthält. Wenn die Navigation eine cross-origin URL in der Redirect-Kette aufweist, wird `null` zurückgegeben.
- [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das den aktiven View-Übergang für die Überlagerung von Dokumenten bei der Navigation darstellt.

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
> Siehe [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)

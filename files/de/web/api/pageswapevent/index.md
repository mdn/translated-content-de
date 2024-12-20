---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("HTML DOM")}}

Das **`PageSwapEvent`**-Ereignisobjekt ist innerhalb von Handlerfunktionen für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis verfügbar.

Das `pageswap` Ereignis wird ausgelöst, wenn Sie zwischen Dokumenten navigieren und das vorherige Dokument kurz vor dem Entladen steht. Während einer Navigation über Dokumente hinweg ermöglicht das `PageSwapEvent`-Ereignisobjekt das Manipulieren des zugehörigen [View Transition](/de/docs/Web/API/View_Transition_API) (bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) von dem Dokument, von dem aus navigiert wird, wenn die Navigation eine View-Transition ausgelöst hat. Es bietet auch Zugriff auf Informationen über den Navigationstyp sowie aktuelle und Ziel-Dokumente.

## Konstruktor

- [`PageSwapEvent()`](/de/docs/Web/API/PageSwapEvent/PageSwapEvent)
  - : Erstellt eine neue Instanz eines `PageSwapEvent`-Objekts.

## Instanzeigenschaften

- [`activation`](/de/docs/Web/API/PageSwapEvent/activation) {{ReadOnlyInline}}
  - : Enthält ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt, das den Navigationstyp und die aktuellen sowie die Ziel-Dokument-Historieneinträge für eine Navigation innerhalb derselben Herkunft enthält. Wenn die Navigation eine Cross-Origin-URL irgendwo in der Umleitungskette hat, wird `null` zurückgegeben.
- [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) {{ReadOnlyInline}}
  - : Enthält ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das die aktive View-Transition für die Navigation über Dokumente hinweg darstellt.

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
> Sehen Sie [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)

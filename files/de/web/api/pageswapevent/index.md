---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

Das **`PageSwapEvent`**-Ereignisobjekt steht innerhalb von Handlerfunktionen für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis zur Verfügung.

Das `pageswap`-Ereignis wird ausgelöst, wenn Sie über Dokumente navigieren, wenn das vorherige Dokument kurz vor dem Entladen steht. Bei einer Navigation über Dokumente hinweg ermöglicht Ihnen das `PageSwapEvent`-Ereignisobjekt, den zugehörigen [View-Übergang](/de/docs/Web/API/View_Transitions_API) zu manipulieren (wobei Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt gewährt wird) von dem Dokument, von dem aus navigiert wird, wenn ein View-Übergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp sowie aktuelle und Ziel-Dokumente.

## Konstruktor

- [`PageSwapEvent()`](/de/docs/Web/API/PageSwapEvent/PageSwapEvent)
  - : Erstellt eine neue Instanz des `PageSwapEvent`-Objekts.

## Instanz-Eigenschaften

- [`activation`](/de/docs/Web/API/PageSwapEvent/activation) {{ReadOnlyInline}}
  - : Enthält ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt mit dem Navigationstyp sowie den aktuellen und Ziel-Dokument-Verlaufseinträgen für eine gleichherkunftsbezogene Navigation. Wenn die Navigation eine plattformübergreifende URL irgendwo in der Umleitkette hat, wird `null` zurückgegeben.
- [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) {{ReadOnlyInline}}
  - : Enthält ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das den aktiven View-Übergang für die Navigation über Dokumente hinweg darstellt.

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
> Sehen Sie sich die [Liste der Teammitglieder von Chrome DevRel](https://view-transitions.chrome.dev/profiles/mpa/) für die Live-Demo an, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)

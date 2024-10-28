---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`PageSwapEvent`**-Ereignisobjekt steht innerhalb von Handler-Funktionen für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis zur Verfügung.

Das `pageswap`-Ereignis wird ausgelöst, wenn Sie über Dokumente hinweg navigieren und das vorherige Dokument kurz vor dem Entladen steht. Während einer Navigation zwischen Dokumenten ermöglicht das `PageSwapEvent`-Ereignisobjekt Ihnen, die zugehörige [View Transition](/de/docs/Web/API/View_Transitions_API) (mit Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) vom Dokument aus zu manipulieren, von dem weggewechselt wird, falls die Navigation eine View-Transition ausgelöst hat. Es bietet auch Zugriff auf Informationen über den Navigationstyp sowie über das aktuelle und das Ziel-Dokument.

## Konstruktor

- [`PageSwapEvent()`](/de/docs/Web/API/PageSwapEvent/PageSwapEvent) {{experimental_inline}}
  - : Erzeugt eine neue Instanz des `PageSwapEvent`-Objekts.

## Instanzeigenschaften

- [`activation`](/de/docs/Web/API/PageSwapEvent/activation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt, das den Navigationstyp sowie die Einträge der aktuellen und Ziel-Dokument-Historie für eine Navigation mit derselben Herkunft enthält. Wenn die Navigation eine Cross-Origin-URL in der Redirect-Kette hat, gibt es `null` zurück.
- [`viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das die aktive View-Transition für die cross-dokumentarische Navigation darstellt.

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
> Siehe [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)

---
title: "Window: pageswap-Ereignis"
short-title: pageswap
slug: Web/API/Window/pageswap_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{seecompattable}}

Das **`pageswap`**-Ereignis wird ausgelöst, wenn Sie zwischen Dokumenten navigieren und das vorherige Dokument geladen wird.

Dies ist nützlich bei Übergängen im Multi-Page-Anwendung (MPA) [View Transitions](/de/docs/Web/API/View_Transitions_API) für die Manipulation eines aktiven Übergangs von der ausgehenden Seite einer Navigation. Zum Beispiel möchten Sie möglicherweise den Übergang überspringen oder die Ausgehend-Übergangsanimation über JavaScript anpassen.

Es bietet auch Zugang zum Navigationstyp sowie zu den aktuellen und Ziel-Dokumenten-Historiendatensätzen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("pageswap", (event) => {});
onpageswap = (event) => {};
```

## Ereignistyp

Ein [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageSwapEvent")}}

## Ereigniseigenschaften

- [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das den Navigationstyp sowie die aktuellen und Ziel-Dokumenten-Historiendatensätze für eine gleichartige Navigation enthält. Wenn die Navigation eine Cross-Origin-URL irgendwo in der Umleitungskette hat, gibt sie `null` zurück.
- [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) {{ReadOnlyInline}}
  - : Gibt das [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das den eingehenden Dokumentenübergang repräsentiert, falls ein solcher aktiv ist, wenn das Ereignis ausgelöst wird. Ist dies nicht der Fall, gibt es `null` zurück.

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
> Sehen Sie sich die [Liste der Chrome DevRel Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo an, von der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using)
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis

---
title: "Window: pageswap-Ereignis"
short-title: pageswap
slug: Web/API/Window/pageswap_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

Das **`pageswap`**-Ereignis wird ausgelöst, wenn Sie zwischen Dokumenten navigieren, wenn das vorherige Dokument entladen werden soll.

Dies ist nützlich im Fall von Cross-Dokument (MPA) [View-Übergängen](/de/docs/Web/API/View_Transition_API), um einen aktiven Übergang von der ausgehenden Seite einer Navigation zu manipulieren. Beispielsweise möchten Sie möglicherweise den Übergang überspringen oder die ausgehende Übergangsanimation über JavaScript anpassen.

Es bietet auch Zugriff auf den Navigationstyp sowie die aktuellen und Ziel-Dokumenthistorieneinträge.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pageswap", (event) => { })

onpageswap = (event) => { }
```

## Ereignistyp

Ein [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageSwapEvent")}}

## Ereigniseigenschaften

- [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt zurück, das den Navigationstyp sowie die aktuellen und Ziel-Dokumenthistorieneinträge für eine Navigation mit gleicher Herkunft enthält. Wenn die Navigation eine Cross-Origin-URL irgendwo in der Umleitungsfolge hat, gibt sie `null` zurück.
- [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) {{ReadOnlyInline}}
  - : Gibt das [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das den eingehenden Cross-Dokument-View-Übergang darstellt, falls einer aktiv ist, wenn das Ereignis ausgelöst wird. Ist dies nicht der Fall, gibt es `null` zurück.

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

- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis

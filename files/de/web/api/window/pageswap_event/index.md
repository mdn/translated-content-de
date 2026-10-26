---
title: "Window: pageswap-Ereignis"
short-title: pageswap
slug: Web/API/Window/pageswap_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("HTML DOM")}}

Das **`pageswap`**-Ereignis wird bei der Navigation zwischen Dokumenten ausgelöst, wenn das vorherige Dokument gerade entladen werden soll.

Dies ist bei dokumentübergreifenden (MPA-) [View Transitions](/de/docs/Web/API/View_Transition_API) nützlich, um eine aktive Transition auf der Seite zu beeinflussen, die bei einer Navigation verlassen wird. Sie können beispielsweise die Transition überspringen oder die Animation beim Verlassen der Seite mit JavaScript anpassen.

Das Ereignis bietet außerdem Zugriff auf den Navigationstyp sowie auf die Verlaufseinträge des aktuellen Dokuments und des Zieldokuments.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pageswap", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onpageswap = (event) => { }
```

## Ereignistyp

Ein [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageSwapEvent")}}

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
> Eine Live-Demo, aus der dieser Code stammt, finden Sie unter [Liste der Mitglieder des Chrome-DevRel-Teams](https://view-transitions.chrome.dev/profiles/mpa/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis

---
title: "Window: pagereveal-Ereignis"
short-title: pagereveal
slug: Web/API/Window/pagereveal_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("HTML DOM")}}

Das **`pagereveal`**-Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird – entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} (bfcache) oder einem {{Glossary("Prerender", "Prerender")}}.

Dies ist bei dokumentübergreifenden (MPA-) [View Transitions](/de/docs/Web/API/View_Transition_API) nützlich, um eine aktive Transition von der Zielseite einer Navigation aus zu beeinflussen. Beispielsweise können Sie die Transition überspringen oder die Animation beim Einblenden der Zielseite mit JavaScript anpassen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pagereveal", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpagereveal = (event) => { }
```

## Ereignistyp

Ein [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageRevealEvent")}}

## Beispiele

```js
window.addEventListener("pagereveal", async (e) => {
  // If the "from" history entry does not exist, return
  if (!navigation.activation.from) return;

  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Went to profile page
    // ~> Set VT names on the main title and image
    if (isProfilePage(currentUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
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
- [`pageswap`-Ereignis](/de/docs/Web/API/Window/pageswap_event)

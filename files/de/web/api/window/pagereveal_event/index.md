---
title: "Window: pagereveal Ereignis"
short-title: pagereveal
slug: Web/API/Window/pagereveal_event
l10n:
  sourceCommit: 6e205846ce8de4024621447c1d239f9480d79c42
---

{{APIRef("HTML DOM")}}

Das **`pagereveal`** Ereignis wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).

Dies ist nützlich im Fall von Cross-Dokument (MPA) [View Transitions](/de/docs/Web/API/View_Transitions_API) zur Manipulation eines aktiven Übergangs von der eingehenden Seite einer Navigation. Zum Beispiel könnte es gewünscht sein, den Übergang zu überspringen oder die eingehende Übergangsanimation über JavaScript anzupassen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("pagereveal", (event) => {});
onpagereveal = (event) => {};
```

## Ereignistyp

Ein [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageRevealEvent")}}

## Ereigniseigenschaften

- [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) {{ReadOnlyInline}}
  - : Gibt das [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, das den eingehenden Cross-Dokument View Transition darstellt, wenn einer aktiv ist, wenn das Ereignis ausgelöst wird. Ist dies nicht der Fall, wird `null` zurückgegeben.

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
> Siehe [Liste der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using)
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis

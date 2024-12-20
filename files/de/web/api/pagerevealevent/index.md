---
title: PageRevealEvent
slug: Web/API/PageRevealEvent
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("HTML DOM")}}

Das **`PageRevealEvent`**-Ereignisobjekt ist in Handler-Funktionen für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis verfügbar.

Während einer Navigation zwischen Dokumenten erlaubt es Ihnen, eine zugehörige [View-Transition](/de/docs/Web/API/View_Transition_API) zu manipulieren (und bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) aus dem Dokument, zu dem navigiert wird, wenn eine View-Transition durch die Navigation ausgelöst wurde.

Außerhalb von View-Transitions ist dieses Ereignis auch für Fälle nützlich, wie das Auslösen einer Startanimation oder das Berichten eines Seitenaufrufs. Es entspricht dem ersten [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Lauf nach einer Navigation zwischen Dokumenten, wenn Sie `requestAnimationFrame()` im {{htmlelement("head")}} des Dokuments auslösen würden. Zum Beispiel, wenn Sie die folgende `reveal()`-Funktion im `<head>` ausführen:

```js
function reveal() {
  // Include startup animation here
}
/* This will fire in the first rendered frame after loading */
requestAnimationFrame(() => reveal());

/* This will fire if the page is restored from BFCache */
window.onpagehide = () => requestAnimationFrame(() => reveal());
```

## Konstruktor

- [`PageRevealEvent()`](/de/docs/Web/API/PageRevealEvent/PageRevealEvent)
  - : Erstellt eine neue Instanz des `PageRevealEvent`-Objekts.

## Instanzeigenschaften

- [`viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) {{ReadOnlyInline}}
  - : Beinhaltet ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das die aktive View-Transition für die Navigation zwischen Dokumenten darstellt.

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
> Sehen Sie die [Liste der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)

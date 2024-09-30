---
title: PageRevealEvent
slug: Web/API/PageRevealEvent
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`PageRevealEvent`**-Ereignisobjekt ist innerhalb von Handler-Funktionen für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis verfügbar.

Während einer navigation über Dokumente hinweg ermöglicht es Ihnen, eine verwandte [View-Übergang](/de/docs/Web/API/View_Transitions_API) (die Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt bietet) aus dem Dokument zu manipulieren, zu dem navigiert wird, wenn ein View-Übergang durch die Navigation ausgelöst wurde.

Außerhalb von View-Übergängen ist dieses Ereignis auch nützlich für Fälle wie das Auslösen einer Startanimation oder das Melden eines Seitenaufrufs. Es entspricht dem ersten Durchlauf von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) nach einer Dokument-übergreifenden Navigation, wenn Sie `requestAnimationFrame()` im {{htmlelement("head")}} des Dokuments auslösen würden. Zum Beispiel, wenn Sie die folgende `reveal()`-Funktion im `<head>` ausführen:

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

- [`PageRevealEvent()`](/de/docs/Web/API/PageRevealEvent/PageRevealEvent) {{experimental_inline}}
  - : Erstellt eine neue `PageRevealEvent`-Objektinstanz.

## Instanz-Eigenschaften

- [`viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das den aktiven View-Übergang für die Dokument-übergreifende Navigation darstellt.

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
> Weitere Informationen finden Sie in der [Liste der Chrome DevRel Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)

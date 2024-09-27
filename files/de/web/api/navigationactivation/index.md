---
title: NavigationActivation
slug: Web/API/NavigationActivation
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigationActivation`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert eine kürzlich erfolgte dokumentübergreifende Navigation. Sie enthält den Navigationstyp sowie die ausgehenden und eingehenden Dokumentverlaufeinträge.

Auf dieses Objekt wird über die Eigenschaften [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation) und [`Navigation.activation`](/de/docs/Web/API/Navigation/activation) zugegriffen. Beachten Sie, dass in jedem Fall die `NavigationActivation` eine unterschiedliche Navigation darstellt:

- `Navigation.activation` repräsentiert Informationen über die Navigation zur aktuellen Seite.
- `PageSwapEvent.activation` repräsentiert Informationen über die Navigation zur nächsten Seite.

## Instanz-Eigenschaften

- [`entry`](/de/docs/Web/API/NavigationActivation/entry) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt, das den Verlaufseintrag für das eingehende ("zu") Dokument in der Navigation darstellt. Dies entspricht der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft in dem Moment, in dem das eingehende Dokument aktiviert wurde.
- [`from`](/de/docs/Web/API/NavigationActivation/from) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt, das den Verlaufseintrag für das ausgehende ("von") Dokument in der Navigation darstellt.
- [`navigationType`](/de/docs/Web/API/NavigationActivation/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält eine Zeichenkette, die den Typ der Navigation angibt.

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
> Sehen Sie sich die [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo an, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)

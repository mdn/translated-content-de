---
title: Navigationsaktivierung
slug: Web/API/NavigationActivation
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationActivation`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert eine kürzliche dokumentübergreifende Navigation. Es enthält den Navigationstyp sowie die ausgehenden und eingehenden Dokumenthistorieeinträge.

Auf dieses Objekt wird über die {{domxref("PageSwapEvent.activation")}}- und {{domxref("Navigation.activation")}}-Eigenschaften zugegriffen. Beachten Sie, dass in jedem Fall die `NavigationActivation` eine unterschiedliche Navigation repräsentiert:

- `Navigation.activation` repräsentiert Informationen über die Navigation zur aktuellen Seite.
- `PageSwapEvent.activation` repräsentiert Informationen über die Navigation zur nächsten Seite.

## Instanzeigenschaften

- {{domxref("NavigationActivation.entry", "entry")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein {{domxref("NavigationHistoryEntry")}}-Objekt, das den Historieneintrag für das eingehende ("zu") Dokument in der Navigation darstellt. Dies entspricht der {{domxref("Navigation.currentEntry")}}-Eigenschaft zum Zeitpunkt, an dem das eingehende Dokument aktiviert wurde.
- {{domxref("NavigationActivation.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein {{domxref("NavigationHistoryEntry")}}-Objekt, das den Historieneintrag für das ausgehende ("von") Dokument in der Navigation darstellt.
- {{domxref("NavigationActivation.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält einen String, der den Typ der Navigation angibt.

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
> Sehen Sie sich die [Liste der Mitglieder des Chrome DevRel-Teams](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo an, von der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)

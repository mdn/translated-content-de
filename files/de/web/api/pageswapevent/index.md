---
title: PageSwapEvent
slug: Web/API/PageSwapEvent
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`PageSwapEvent`**-Ereignisobjekt ist innerhalb von Handler-Funktionen für das {{domxref("Window.pageswap_event", "pageswap")}}-Ereignis verfügbar.

Das `pageswap`-Ereignis wird ausgelöst, wenn Sie zwischen Dokumenten navigieren und das vorherige Dokument im Begriff ist, geschlossen zu werden. Während einer Navigation über Dokumente hinweg ermöglicht das `PageSwapEvent`-Ereignisobjekt die Manipulation des zugehörigen [Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API) (und bietet Zugriff auf das relevante {{domxref("ViewTransition")}}-Objekt) von dem Dokument, von dem aus navigiert wird, falls ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp sowie das aktuelle und das gewünschte Dokument.

## Konstruktor

- {{domxref("PageSwapEvent.PageSwapEvent", "PageSwapEvent()")}} {{experimental_inline}}
  - : Erstellt eine neue Instanz des `PageSwapEvent`-Objekts.

## Instanzeigenschaften

- {{domxref("PageSwapEvent.activation", "activation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein {{domxref("NavigationActivation")}}-Objekt, das den Navigationstyp sowie die Historieneinträge des aktuellen und des Zieldokuments für eine Navigation innerhalb derselben Herkunftsdomäne enthält. Wenn die Navigation eine URL mit einer anderen Herkunft in der Umleitungskette enthält, gibt es `null` zurück.
- {{domxref("PageSwapEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein {{domxref("ViewTransition")}}-Objekt, das den aktiven Ansichtsübergang für die Navigation über Dokumente hinweg darstellt.

## Beispiele

```js
window.addEventListener("pageswap", async (e) => {
  // Führen Sie dies nur aus, wenn ein aktiver Ansichtsübergang existiert
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
> Sehen Sie sich die [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo an, aus der dieser Code entnommen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)

---
title: "Window: pagereveal-Ereignis"
short-title: pagereveal
slug: Web/API/Window/pagereveal_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{seecompattable}}

Das **`pagereveal`**-Ereignis wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem [Back/Forward-Cache](/de/docs/Glossary/bfcache) (bfcache) oder [Prerender](/de/docs/Glossary/Prerender)).

Dies ist nützlich im Fall von Cross-Dokument (MPA) [Ansichtstransitionen](/de/docs/Web/API/View_Transitions_API), um eine aktive Transition von der eingehenden Seite einer Navigation zu manipulieren. Beispielsweise könnten Sie die Transition überspringen oder die eingehende Übergangsanimation über JavaScript anpassen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("pagereveal", (event) => {});
onpagereveal = (event) => {};
```

## Ereignistyp

Ein {{domxref("PageRevealEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PageRevealEvent")}}

## Ereigniseigenschaften

- {{domxref("PageRevealEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("ViewTransition")}}-Objekt zurück, das die eingehende Cross-Dokument-Ansichtstransition repräsentiert, falls eine aktiv ist, wenn das Ereignis ausgelöst wird. Andernfalls wird `null` zurückgegeben.

## Beispiele

```js
window.addEventListener("pagereveal", async (e) => {
  // Wenn der "from"-Verlaufseintrag nicht existiert, zurückkehren
  if (!navigation.activation.from) return;

  // Führen Sie dies nur aus, wenn eine aktive Ansichtstransition existiert
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Vom Profilseite zur Startseite gegangen
    // ~> Setze VT-Namen auf das relevante Listenelement
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Setze view-transition-name Werte auf die Elemente, die animiert werden sollen
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Entfernen Sie Namen, nachdem Snapshots gemacht wurden
      // um bereit für die nächste Navigation zu sein
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Zur Profilseite gegangen
    // ~> Setze VT-Namen auf den Haupttitel und das Bild
    if (isProfilePage(currentUrl)) {
      // Setze view-transition-name Werte auf die Elemente, die animiert werden sollen
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Entfernen Sie Namen, nachdem Snapshots gemacht wurden
      // um bereit für die nächste Navigation zu sein
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
> Siehe [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using)
- {{domxref("Window.pageswap_event", "pageswap")}}-Ereignis

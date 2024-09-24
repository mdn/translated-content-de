---
title: "Window: pageswap-Ereignis"
short-title: pageswap
slug: Web/API/Window/pageswap_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}{{seecompattable}}

Das **`pageswap`**-Ereignis wird ausgelöst, wenn Sie zwischen Dokumenten navigieren und das vorherige Dokument kurz vor dem Entladen steht.

Dies ist nützlich im Fall von Cross-Document (MPA) [View Transitions](/de/docs/Web/API/View_Transitions_API), um eine aktive Transition von der ausgehenden Seite einer Navigation zu manipulieren. Beispielsweise könnten Sie die Transition überspringen oder die ausgehende Übergangsanimation über JavaScript anpassen.

Es bietet auch Zugriff auf den Navigationstyp sowie die aktuellen und Ziel-Dokument-Historieneinträge.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pageswap", (event) => {});
onpageswap = (event) => {};
```

## Ereignistyp

Ein {{domxref("PageSwapEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PageSwapEvent")}}

## Ereigniseigenschaften

- {{domxref("PageSwapEvent.activation")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("NavigationActivation")}}-Objekt zurück, das den Navigationstyp und die aktuellen und Ziel-Dokument-Historieneinträge für eine gleich-originäre Navigation enthält. Wenn die Navigation irgendwo in der Umleitungskette eine Cross-Origin-URL aufweist, wird `null` zurückgegeben.
- {{domxref("PageSwapEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("ViewTransition")}}-Objekt zurück, das die eingehende Cross-Dokument-View-Transition darstellt, sofern eine aktiv ist, wenn das Ereignis ausgelöst wird. Andernfalls wird `null` zurückgegeben.

## Beispiele

```js
window.addEventListener("pageswap", async (e) => {
  // Führen Sie dies nur aus, wenn eine aktive View-Transition existiert
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Von der Profil-Seite zur Startseite gehen
    // ~> Das große Bild und der Titel sind es!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Setzen Sie die Werte von view-transition-name auf den Elementen, die animiert werden sollen
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Entfernen Sie die view-transition-names, nachdem die Schnappschüsse aufgenommen wurden
      // Verhindert Namenskonflikte, die durch den im BFCache bleibenden Seitenzustand verursacht werden
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Zur Profil-Seite gehen
    // ~> Die angeklickten Elemente sind es!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Setzen Sie die Werte von view-transition-name auf den Elementen, die animiert werden sollen
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Entfernen Sie die view-transition-names, nachdem die Schnappschüsse aufgenommen wurden
      // Verhindert Namenskonflikte, die durch den im BFCache bleibenden Seitenzustand verursacht werden
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
> Siehe [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using)
- {{domxref("Window.pagereveal_event", "pagereveal")}}-Ereignis

---
title: NavigationPrecommitController
slug: Web/API/NavigationPrecommitController
l10n:
  sourceCommit: 280e77d96ea10ee5169e5b9e5e329f10fe84869d
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationPrecommitController`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) definiert das Umleitungsverhalten für einen Navigations-[Precommit-Handler](/de/docs/Web/API/NavigateEvent/intercept#precommithandler).

{{InheritanceDiagram}}

## Instanzmethoden

- [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect) {{Experimental_Inline}}
  - : Leitet den Browser zu einer angegebenen URL um und spezifiziert das Verlaufverhalten sowie gewünschte Zustandsinformationen.

## Beschreibung

Wenn das Navigationsverhalten desselben Dokuments über die Methode [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) festgelegt wird, ist es möglich, Navigations-Precommit-Aktionen über den [`precommitHandler`](/de/docs/Web/API/NavigateEvent/intercept#precommithandler)-Callback anzugeben. Precommit-Aktionen werden verwendet, um laufende Navigationen zu ändern oder abzubrechen, oder um Arbeiten während der Navigation durchzuführen, bevor diese abgeschlossen ist (siehe [Grundlegendes Precommit-Navigationsbeispiel](#grundlegendes_precommit-navigationsbeispiel)).

Um das Umleitungsverhalten anzugeben, übergeben Sie ein `NavigationPrecommitController`-Objekt an die `precommitHandler`-Callback-Funktion. Innerhalb des Funktionskörpers können Sie die Methode `NavigationPrecommitController.redirect()` aufrufen, die ein Objekt als Argument nimmt, das die Umleitungs-URL sowie erforderliches Verlaufverhalten und Zustandsinformationen enthält.

Siehe die [`intercept()`-Beschreibung](/de/docs/Web/API/NavigateEvent/intercept#description) für zusätzlichen Kontext.

## Beispiele

### Grundlegendes Precommit-Navigationsbeispiel

Das folgende Snippet zeigt, wie Sie den Browser auf eine Anmeldeseite umleiten würden, falls der Benutzer zu einer eingeschränkten Seite navigiert und nicht angemeldet ist.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/restricted/") && !userSignedIn) {
    event.intercept({
      async precommitHandler(controller) {
        controller.redirect("/signin/", {
          state: "signin-redirect",
          history: "push",
        });
      },
    });
  }
});
```

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungsadresse zu starten, da es den Zwischenzustand vermeidet. Beispielsweise wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)- oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Versprechen erst erfüllt, wenn das Umleitungsziel erreicht ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)

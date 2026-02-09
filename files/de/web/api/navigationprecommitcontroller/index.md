---
title: NavigationPrecommitController
slug: Web/API/NavigationPrecommitController
l10n:
  sourceCommit: d1755079dbc4d1fb68c4bda0cf999fdf618e234a
---

{{APIRef("Navigation API")}}

Das **`NavigationPrecommitController`** Interface der [Navigation API](/de/docs/Web/API/Navigation_API) wird als Argument an einen Navigations-[Precommit-Handler](/de/docs/Web/API/NavigateEvent/intercept#precommithandler) Callback übergeben.

Der Callback wird verwendet, um alle Änderungen an der Navigation zu behandeln, die erforderlich sind, bevor sie festgeschrieben wird (und die Ziel-URL tatsächlich im Browser angezeigt wird), wie z.B. das Abbrechen oder Umleiten an eine andere Stelle, falls erforderlich. Dieses Interface bietet Methoden, um zu einer neuen URL umzuleiten, die Historie und den Status zu aktualisieren und das Navigationsverhalten nach der Festlegung dynamisch zu konfigurieren.

{{InheritanceDiagram}}

## Instanzmethoden

- [`addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler)
  - : Fügt eine Handler-Callback-Funktion hinzu, die nach der Festlegung der Navigation ausgeführt wird, als ob sie mit dem Argument [`options.handler`](/de/docs/Web/API/NavigateEvent/intercept#handler) zu [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) hinzugefügt worden wäre.
- [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect)
  - : Leitet den Browser zu einer angegebenen URL um und spezifiziert das Verhalten der Historie sowie alle gewünschten Statusinformationen.

## Beschreibung

Beim Spezifizieren des Navigationsverhaltens im selben Dokument über die Methode [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) ist es möglich, Präcommit-Aktionen über den [`precommitHandler`](/de/docs/Web/API/NavigateEvent/intercept#precommithandler) Callback zu spezifizieren. Präcommit-Aktionen werden verwendet, um die laufende Navigation zu ändern oder abzubrechen oder um Arbeiten während der laufenden Navigation auszuführen, bevor sie festgeschrieben wird (siehe [Grundlegendes Beispiel für Präcommit-Navigation](#grundlegendes_beispiel_für_präcommit-navigation)).

Um das Umleitungsverhalten zu spezifizieren, verwenden Sie das `NavigationPrecommitController`-Objekt, das in Ihre `precommitHandler`-Callback-Funktion übergeben wird. Innerhalb des Funktionskörpers können Sie die Methode `NavigationPrecommitController.redirect()` aufrufen, die als Argument ein Objekt mit der Umleitungs-URL sowie dem erforderlichen Historienverhalten und Statusinformationen nimmt.

Nachdem eine Navigation festgeschrieben wurde, kann ein Post-Commit-Handler-Callback ausgeführt werden, um Operationen wie das Abrufen und Rendern von Inhalten durchzuführen. Wenn der Post-Commit-Navigation-Code von zur Laufzeit gesammelten Daten in Ihrem `precommitHandler` abhängt, können Sie in Ihrem Precommit-Handler [`addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) aufrufen, um diesen Post-Commit-Handler-Callback dynamisch hinzuzufügen. Beachten Sie, dass Sie, wenn der Post-Commit-Code unabhängig vom Präcommit-Code ist, stattdessen den [`handler`](/de/docs/Web/API/NavigateEvent/intercept#handler) Callback an die [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) Methode übergeben können.

Siehe die [`intercept()` Beschreibung](/de/docs/Web/API/NavigateEvent/intercept#description) für zusätzliche Kontextinformationen.

## Beispiele

### Grundlegendes Beispiel für Präcommit-Navigation

Das folgende Snippet zeigt, wie Sie den Browser zu einer Anmeldeseite umleiten würden, wenn der Benutzer auf eine eingeschränkte Seite navigiert und nicht angemeldet ist.

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

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungsstelle zu starten, da es den Zwischenzustand vermeidet offenzulegen. Beispielsweise wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Versprechen nur erfüllt, wenn das Umleitungsziel erreicht wurde.

### Hinzufügen eines Handlers, der vom Präcommit-Verhalten abhängig ist

Dies ist eine kleine Modifikation des vorherigen Beispiels, die auch eine Nachricht an den Benutzer anzeigt, die den Grund erklärt, warum er nach der Umleitung auf der Anmeldeseite gelandet ist. Dies verwendet `addHandler()` im Präcommit-Handler, um den Post-Commit-Handler hinzuzufügen, der die Nachricht anzeigt.

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

        // Use addHandler to trigger logic once the /signin/ page commits
        controller.addHandler(() => {
          showMessage("Please sign in to view that content.");
        });
      },
    });
  }
});
```

Ein Vorteil dieses Ansatzes ist, dass der Handler nur ausgeführt wird, wenn die Umleitung festgeschrieben ist. Der Handler würde für alle Ereignisse ausgeführt werden, wenn er durch Übergeben von [`options.handler`](/de/docs/Web/API/NavigateEvent/intercept) zu `intercept()` hinzugefügt worden wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderner clientseitiger Routing: Die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)

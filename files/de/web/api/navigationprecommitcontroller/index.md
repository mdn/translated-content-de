---
title: NavigationPrecommitController
slug: Web/API/NavigationPrecommitController
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

Das **`NavigationPrecommitController`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) wird als Argument an einen Callback eines [Precommit-Handlers](/de/docs/Web/API/NavigateEvent/intercept#precommithandler) übergeben.

Der Callback wird verwendet, um alle Änderungen an der Navigation zu behandeln, die erforderlich sind, bevor sie festgeschrieben wird (und die Ziel-URL tatsächlich im Browser angezeigt wird), wie beispielsweise das Abbrechen oder Umleiten der Navigation. Dieses Interface bietet Methoden zur Umleitung auf eine neue URL und zur Aktualisierung von Verlauf und Status sowie zur dynamischen Konfiguration des Navigationsverhaltens nach dem Commit.

{{InheritanceDiagram}}

## Instanzmethoden

- [`addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler)
  - : Fügt eine Callback-Funktion hinzu, die nach der Festschreibung der Navigation ausgeführt wird, als ob sie mit dem Argument [`options.handler`](/de/docs/Web/API/NavigateEvent/intercept#handler) zu [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) hinzugefügt wurde.
- [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect)
  - : Leitet den Browser zu einer angegebenen URL um und spezifiziert das Verlauf-Verhalten sowie jede gewünschte Statusinformation.

## Beschreibung

Beim Festlegen des Verhaltens bei gleichseitiger Navigation über die Methode [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) ist es möglich, Navigationsvorgänge vor dem Commit über den [`precommitHandler`](/de/docs/Web/API/NavigateEvent/intercept#precommithandler)-Callback zu spezifizieren. Precommit-Aktionen werden genutzt, um laufende Navigation zu ändern oder zu stornieren oder um Arbeiten auszuführen, während die Navigation im Gange ist und bevor sie festgeschrieben wird (siehe [Grundlegendes Beispiel für Precommit-Navigation](#grundlegendes_beispiel_für_precommit-navigation)).

Um das Umleitungsverhalten zu spezifizieren, verwenden Sie das `NavigationPrecommitController`-Objekt, das in Ihren `precommitHandler`-Callback übergeben wird.
Innerhalb des Funktionskörpers können Sie die Methode `NavigationPrecommitController.redirect()` aufrufen, die ein Objekt als Argument nimmt, das die Umleitungs-URL, sowie erforderliches Verlauf-Verhalten und Statusinformationen enthält.

Nachdem eine Navigation festgeschrieben wurde, kann ein Post-Commit-Handler-Callback ausgeführt werden, um Vorgänge wie das Abrufen und Rendern von Inhalten durchzuführen.
Wenn der Code für die Post-Commit-Navigation von zur Laufzeit im `precommitHandler` gesammelten Daten abhängt, können Sie im Precommit-Handler die Methode [`addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) aufrufen, um diesen Post-Commit-Handler-Callback dynamisch hinzuzufügen.
Beachten Sie, dass Sie, falls der Post-Commit-Code unabhängig vom Pre-Commit-Code ist, stattdessen den [`handler`](/de/docs/Web/API/NavigateEvent/intercept#handler)-Callback an die Methode [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) übergeben können.

Siehe die [Beschreibung von `intercept()`](/de/docs/Web/API/NavigateEvent/intercept#description) für zusätzlichen Kontext.

## Beispiele

### Grundlegendes Beispiel für Precommit-Navigation

Das folgende Snippet zeigt, wie Sie den Browser auf eine Anmeldeseite umleiten würden, wenn der Benutzer auf eine beschränkte Seite navigiert und nicht angemeldet ist.

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

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungsadresse zu starten, da es den Zwischenzustand vermeidet. Zum Beispiel wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Versprechen nur erfüllt, wenn das Umleitungsziel erreicht ist.

### Hinzufügen eines Handlers, der vom Precommit-Verhalten abhängt

Dies ist eine kleine Modifikation des vorherigen Beispiels, die auch eine Nachricht anzeigt, um dem Benutzer anzuzeigen, warum er nach der Umleitung auf der Anmeldeseite gelandet ist.
Dies nutzt `addHandler()` im Pre-Commit-Handler, um den Post-Commit-Handler hinzuzufügen, der die Nachricht anzeigt.

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

Ein Vorteil dieses Ansatzes ist, dass der Handler nur ausgeführt wird, wenn die Umleitung festgeschrieben wird.
Der Handler würde für alle Ereignisse ausgeführt werden, wenn er hinzugefügt würde, indem [`options.handler`](/de/docs/Web/API/NavigateEvent/intercept) an `intercept()` übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderner clientseitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)

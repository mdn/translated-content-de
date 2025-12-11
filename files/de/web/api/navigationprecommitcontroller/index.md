---
title: NavigationPrecommitController
slug: Web/API/NavigationPrecommitController
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Navigation API")}}

Die **`NavigationPrecommitController`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) definiert das Umleitungsverhalten für einen Navigations-[Precommit-Handler](/de/docs/Web/API/NavigateEvent/intercept#precommithandler).

{{InheritanceDiagram}}

## Instanzmethoden

- [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect)
  - : Leitet den Browser zu einer angegebenen URL weiter und legt das Verlauf-Verhalten sowie gewünschte Zustandsinformationen fest.

## Beschreibung

Wenn das Verhalten von Same-Document-Navigationen durch die Methode [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) angegeben wird, ist es möglich, Aktionen vor dem Commit der Navigation über den [`precommitHandler`](/de/docs/Web/API/NavigateEvent/intercept#precommithandler)-Callback zu spezifizieren. Vorbereitende Aktionen werden verwendet, um die laufende Navigation zu ändern oder abzubrechen oder um Arbeiten auszuführen, während die Navigation im Gange ist und bevor sie festgeschrieben wird (siehe [Beispiel für grundlegende Precommit-Navigation](#beispiel_für_grundlegende_precommit-navigation)).

Um das Umleitungsverhalten anzugeben, übergeben Sie ein `NavigationPrecommitController`-Objekt in die `precommitHandler`-Callback-Funktion. Innerhalb des Funktionskörpers können Sie die Methode `NavigationPrecommitController.redirect()` aufrufen, die ein Objekt als Argument übernimmt, das die Umleitungs-URL sowie alle erforderlichen Verlauf-Verhaltensweisen und Zustandsinformationen enthält.

Weitere Informationen finden Sie in der [`intercept()`-Beschreibung](/de/docs/Web/API/NavigateEvent/intercept#description).

## Beispiele

### Beispiel für grundlegende Precommit-Navigation

Der folgende Codeausschnitt zeigt, wie Sie den Browser zu einer Anmeldeseite umleiten würden, wenn der Benutzer eine eingeschränkte Seite navigiert und nicht angemeldet ist.

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

Dieser Ansatz ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungsstelle zu starten, da er den Zwischenzustand nicht offenlegt. Beispielsweise wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)- oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Versprechen erst erfüllt, wenn das Umleitungsziel erreicht ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)

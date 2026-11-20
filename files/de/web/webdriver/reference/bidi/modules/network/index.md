---
title: Modul `network`
short-title: network
slug: Web/WebDriver/Reference/BiDi/Modules/network
l10n:
  sourceCommit: 5f25f2ac2839bd19aa1e08345d4a4d4060e4a85c
---

Das Modul **`network`** enthält Befehle und Ereignisse zum Überwachen und Steuern der Netzwerkanfragen und -antworten des Browsers.

## Anfragen

In WebDriver BiDi hat jede Netzwerkanfrage des Browsers eine Anfrage-ID. Dazu gehören Anfragen für eine Seite oder ihre Unterressourcen wie Stylesheets und Skripte sowie Anfragen, die ein Skript mit [`fetch()`](/de/docs/Web/API/Window/fetch) ausführt. Jedes Ereignis im Modul `network`, das sich auf eine Anfrage bezieht, enthält diese ID im Feld `request` seines `request`-Objekts. Sie können anhand dieser ID Ereignisse derselben Anfrage zuordnen.

Eine Anfrage, die im Rahmen einer Navigation ein Dokument in einen [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) lädt, hat eine Navigations-ID. Dazu gehört auch die Anfrage für eine Navigation, die mit [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) gestartet wurde. Diese ID stimmt mit der Navigations-ID der [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events)-Ereignisse derselben Navigation überein, beispielsweise [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted). Anfragen für Unterressourcen des Dokuments haben für `navigation` den Wert `null`.

## Lebenszyklus einer Anfrage

Um die Ereignisse zu empfangen, abonnieren Sie sie mit [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe). Während eine Anfrage verarbeitet wird, sendet der Browser die folgenden Ereignisse in dieser Reihenfolge:

1. [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) wird ausgelöst, bevor der Browser die Anfrage über das Netzwerk sendet oder sie aus seinem Cache verarbeitet.
2. [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) wird ausgelöst, sobald der Browser die Antwort-Header empfangen hat.
3. [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) wird ausgelöst, sobald der Browser den gesamten Antwort-Body empfangen hat.

Wenn der Server eine Authentifizierung verlangt, sendet der Browser nach `network.responseStarted` außerdem [`network.authRequired`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired). Schlägt die Anfrage zu irgendeinem Zeitpunkt fehl, etwa weil der Host nicht erreichbar ist oder die Seite die Anfrage abbricht, während der Antwort-Body empfangen wird, sendet der Browser [`network.fetchError`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError). Dies ist das letzte Ereignis im Lebenszyklus der Anfrage.

Antwortet der Server mit einer Weiterleitung, sendet der Browser für die Weiterleitungsantwort `network.responseStarted` und `network.responseCompleted` und anschließend für die neue URL `network.beforeRequestSent`. Alle Ereignisse für die ursprüngliche und die neue URL haben dieselbe Anfrage-ID. Das Feld `redirectCount` erhöht sich mit jeder Weiterleitung um eins.

## Intercepts

Ein Client kann Anfragen oder Antworten mit Intercepts blockieren, die sich mit dem Befehl [`network.addIntercept`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) zur Sitzung hinzufügen lassen. Wenn eine Anfrage einem Intercept entspricht, blockiert der Browser die Anfrage oder Antwort in einer Phase, die der Intercept abdeckt, sofern der Client das zugehörige Ereignis abonniert hat (etwa `network.beforeRequestSent` oder `network.responseStarted`). Im Ereignis für diese Phase ist `isBlocked` auf `true` gesetzt; außerdem enthält die Ereignisnutzlast die IDs der passenden Intercepts. Der Browser wartet dann, bis der Client die Fortsetzung der Anfrage zulässt, beispielsweise mit dem Befehl [`network.continueRequest`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest).

## Befehle

- [`network.setCacheBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior)
- [`network.setExtraHeaders`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders)

## Ereignisse

- [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent)
- [`network.fetchError`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError)
- [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted)
- [`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

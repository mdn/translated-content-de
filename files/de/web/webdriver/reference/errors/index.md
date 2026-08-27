---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

Jeder WebDriver-Standard-[Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands), der gesendet wird, kann möglicherweise eine Fehlermeldung zurückgeben. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich 4xx oder 5xx und einer JSON-Nutzlast repräsentiert, die Details des Fehlers enthält.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stackframes zum Zeitpunkt des Fehlers.
- `data` (optional)
  - : Beliebige und implementierungsdefinierte Daten, die nützlich sein können, um dem Benutzer präsentiert zu werden.
    Viele Treiber enthalten den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert), wenn sie auf einen [`unerwartet geöffneten Alarm`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) stoßen.

## Beispiel

Zum Beispiel würde eine [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist, eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}}-Status und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist für den Treiber optional, Fehler mit zusätzlichen Fehlerdaten zu annotieren. Insbesondere ist dies üblich, wenn eine Benutzeraufforderung, wie `window.alert`, nach der Ausführung Ihrer vorherigen WebDriver-Befehlsanfrage einen modalen Dialog geöffnet hat.

Da sowohl die WebDriver- als auch die JavaScript-Ausführung durch einen solchen Dialog angehalten werden, erhalten wir in der nachfolgenden Antwort einen [`unerwartet geöffneten Alarm`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)-Fehler:

```json
{
  "value": {
    "error": "unexpected alert open",
    "message": "",
    "stacktrace": "",
    "data": {
      "text": "Message from window.alert"
    }
  }
}
```

In den meisten [Clients](/de/docs/Web/WebDriver/Reference/Clients) würde der Fehler durch eine Art von Fehler-_typ_ oder _objektdarstellung_ dargestellt werden. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/selenium_common/selenium.common.exceptions.html), in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html) dargestellt.

## Fehlerübersicht

| Fehlertyp                                                                                      | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`element click intercepted`](/de/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/Reference/ElementClick) [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da das [Element](/de/docs/Web/WebDriver/Reference/WebElement), das die Ereignisse empfängt, das angeklickte Element verdeckt.                 |
| [`element not interactable`](/de/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da das Element weder über Zeiger noch über Tastatur ansprechbar ist.                                                                                                                                         |
| [`insecure certificate`](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent eine Zertifikatswarnung erhielt, die normalerweise das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                                                             |
| [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                                          |
| [`invalid cookie domain`](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein unzulässiger Versuch unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                                                |
| [`invalid element state`](/de/docs/Web/WebDriver/Reference/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da sich das Element in einem ungültigen Zustand befindet, z.B. der Versuch, ein Element zu [löschen](/de/docs/Web/WebDriver/Reference/ElementClear), das nicht sowohl editierbar als auch zurücksetzbar ist. |
| [`invalid selector`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Elementabrufbefehl hat eine unbekannte Selektorstrategie angegeben.                                                                                                                                                                                                                                |
| [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/Reference/DeleteSession) nicht wiederverwendet werden kann.                                  |
| [`javascript error`](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Bei der Ausführung von JavaScript, das vom Benutzer bereitgestellt wurde, ist ein Fehler aufgetreten.                                                                                                                                                                                                  |
| [`move target out of bounds`](/de/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für die Mausinteraktion befindet sich nicht im Ansichtsfenster des Browsers und kann nicht in dieses Ansichtsfenster verschoben werden.                                                                                                                                                       |
| [`no such alert`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, mit einer Benutzeraufforderung zu interagieren, obwohl keine geöffnet war.                                                                                                                                                                                                          |
| [`no such cookie`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das dem angegebenen Pfadnamen entspricht, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                                                |
| [`no such element`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite unter Verwendung der angegebenen Suchparameter nicht gefunden werden.                                                                                                                                                                                                 |
| [`no such frame`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) zum Wechseln zu einem Frame konnte nicht erfüllt werden, da das Frame nicht gefunden wurde.                                                                                                                                                     |
| [`no such window`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) zum Wechseln zu einem Fenster konnte nicht erfüllt werden, da das Fenster nicht gefunden wurde.                                                                                                                                                 |
| [`script timeout`](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor sein Zeitlimit abgelaufen war.                                                                                                                                                                                                                             |
| [`session not created`](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities), um die Sitzung zu starten, nicht übereinstimmten.                                                 |
| [`stale element reference`](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) schlug fehl, weil das referenzierte [Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr an das DOM angehängt ist.                                                                                                                 |
| [`timeout`](/de/docs/Web/WebDriver/Reference/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihr Zeitlimit ablief.                                                                                                                                                                                                                                  |
| [`unable to set cookie`](/de/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) zum Setzen des Werts eines Cookies konnte nicht erfüllt werden.                                                                                                                                                                                 |
| [`unable to capture screen`](/de/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Bildschirmfoto war unmöglich zu erstellen.                                                                                                                                                                                                                                                         |
| [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modaler Dialog war geöffnet, der diese Operation blockierte.                                                                                                                                                                                                                                       |
| [`unknown command`](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                                                              |
| [`unknown error`](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | Es ist ein unbekannter Fehler im Treiber aufgetreten, während der [Befehl](/de/docs/Web/WebDriver/Reference/Command) bearbeitet wurde.                                                                                                                                                                 |
| [`unknown method`](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Reference/Command) passte zu einer bekannten URL, jedoch nicht zu einer Methode für diese URL.                                                                                                                                                        |
| [`unsupported operation`](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der ordnungsgemäß ausgeführt werden sollte, aus irgendeinem Grund nicht unterstützt wird.                                                                                                                                        |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Reference/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)

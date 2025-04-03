---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Reference/Commands), der gesendet wird, könnte plausibel eine Fehler-[Antwort](/de/docs/Web/WebDriver/Response) erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich 4xx oder 5xx und einer JSON-Nutzlast, die Details des Fehlers enthält, dargestellt.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stackframes zum Zeitpunkt, als der Fehler auftrat.
- `data` (optional)

  - : Beliebige und implementationsdefinierte Daten, die es dem Nutzer nützlich sein können zu präsentieren.

    Viele Treiber enthalten den Text der [Nutzeraufforderung](/de/docs/Web/API/Window/alert), wenn sie auf einen [unerwartet geöffneten Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen) stoßen.

## Beispiel

Zum Beispiel würde ein [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine gefälschte Sitzung ist, eine Antwort mit dem Status {{HTTPStatus(404, "404 Not Found")}} und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerdaten zu versehen. Insbesondere ist dies häufig der Fall, wenn eine Nutzeraufforderung, wie `window.alert`, nach der Ausführung Ihrer vorherigen WebDriver-Befehl-Anfrage einen modalen Dialog geöffnet hat.

Da sowohl WebDriver als auch die JavaScript-Ausführung durch einen solchen Dialog angehalten werden, sehen wir einen [unerwartet geöffneten Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)-Fehler in der nachfolgenden Antwort:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Clients) würde der Fehler durch eine Art von Fehler-_Typ_ oder _Objektdarstellung_ repräsentiert. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html), in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html) dargestellt.

## Fehlertabelle

| Fehlertyp                                                                                | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/de/docs/Web/WebDriver/Errors/ElementClickIntercepted)       | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/ElementClick) [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, weil das [Element](/de/docs/Web/WebDriver/WebElement), das die Ereignisse empfängt, das angeforderte Element verdeckt.                |
| [element not interactable](/de/docs/Web/WebDriver/Errors/ElementNotInteractable)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, weil das Element weder zeiger- noch tastaturinteraktionsfähig ist.                                                                                                                         |
| [insecure certificate](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)      | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der User-Agent auf eine Zertifikatswarnung stieß, was normalerweise das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                                  |
| [invalid argument](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)              | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                        |
| [invalid cookie domain](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)     | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein illegaler Versuch unternommen, ein Cookie unter einem anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                       |
| [invalid element state](/de/docs/Web/WebDriver/Errors/InvalidElementState)               | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, weil das Element in einem ungültigen Zustand ist, z. B. wird versucht, ein nicht sowohl editierbares als auch zurücksetzbares Element zu [entleeren](/de/docs/Web/WebDriver/ElementClear). |
| [invalid selector](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)              | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Befehl zur Elementabruf hat eine unbekannte Selektorstrategie verwendet.                                                                                                                                                                                               |
| [invalid session id](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)           | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/DeleteSession), nicht wiederverwendet werden kann.               |
| [JavaScript error](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)              | {{HTTPStatus(500, "500 Internal Server Error")}} | Es trat ein Fehler beim Ausführen von von Nutzern bereitgestelltem JavaScript auf.                                                                                                                                                                                         |
| [move target out of bounds](/de/docs/Web/WebDriver/Errors/MoveTargetOutOfBounds)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für Mausinteraktion befindet sich nicht im Ansichtsbereich des Browsers und kann nicht in diesen Ansichtsbereich gebracht werden.                                                                                                                                 |
| [no such alert](/de/docs/Web/WebDriver/Errors/NoSuchAlert)                               | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, mit einer Nutzeraufforderung zu arbeiten, als keine offen war.                                                                                                                                                                                          |
| [no such cookie](/de/docs/Web/WebDriver/Errors/NoSuchCookie)                             | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das mit dem angegebenen Pfadnamen übereinstimmt, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                             |
| [no such element](/de/docs/Web/WebDriver/Errors/NoSuchElement)                           | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite anhand der angegebenen Suchparameter nicht gefunden werden.                                                                                                                                                                               |
| [no such frame](/de/docs/Web/WebDriver/Errors/NoSuchFrame)                               | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command), um zu einem Frame zu wechseln, konnte nicht ausgeführt werden, weil der Frame nicht gefunden werden konnte.                                                                                                                  |
| [no such window](/de/docs/Web/WebDriver/Errors/NoSuchWindow)                             | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command), um zu einem Fenster zu wechseln, konnte nicht ausgeführt werden, weil das Fenster nicht gefunden werden konnte.                                                                                                              |
| [script timeout](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                  | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht vor dem Ablauf seines Zeitlimits abgeschlossen.                                                                                                                                                                                                     |
| [session not created](/de/docs/Web/WebDriver/Errors/SessionNotCreated)                   | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities) nicht mit den Anforderungen der Sitzung übereinstimmten.               |
| [stale element reference](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference) | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) schlug fehl, weil das referenzierte [Element](/de/docs/Web/WebDriver/WebElement) nicht mehr an den DOM angehängt ist.                                                                                                         |
| [timeout](/de/docs/Web/WebDriver/Errors/Timeout)                                         | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht vor dem Ablauf ihres Zeitlimits abgeschlossen.                                                                                                                                                                                                  |
| [unable to set cookie](/de/docs/Web/WebDriver/Errors/UnableToSetCookie)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Command) zum Setzen des Wertes eines Cookies konnte nicht ausgeführt werden.                                                                                                                                                           |
| [unable to capture screen](/de/docs/Web/WebDriver/Errors/UnableToCaptureScreen)          | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Screenshot konnte nicht erstellt werden.                                                                                                                                                                                                                               |
| [unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)               | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modaler Dialog war geöffnet und blockierte diese Operation.                                                                                                                                                                                                            |
| [unknown command](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, weil der Treiber nicht darüber informiert wurde.                                                                                                                                              |
| [unknown error](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                    | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat im Treiber auf, während der [Befehl](/de/docs/Web/WebDriver/Command) verarbeitet wurde.                                                                                                                                                        |
| [unknown method](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                  | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Command) passte zu einer bekannten URL, jedoch nicht zu einer Methode für diese URL.                                                                                                                                      |
| [unsupported operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)              | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Command), der richtig ausgeführt werden sollte, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                     |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)

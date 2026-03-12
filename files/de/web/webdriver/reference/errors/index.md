---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: fbf733732bf531a1be40a0c646bcbc4b31618476
---

Jeder WebDriver-klassische [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands), der gesendet wird, kann möglicherweise eine Fehlermeldung als Antwort erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich von 4xx oder 5xx dargestellt, und eine JSON-Nutzlast enthält Details zum Fehler.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stack-Frames zu dem Zeitpunkt, als der Fehler auftrat.
- `data` (optional)
  - : Beliebige und implementierungsdefinierte Daten, die es sinnvoll sein kann, dem Benutzer zu präsentieren. Viele Treiber enthalten den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert), wenn ein [unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) Fehler auftritt.

## Beispiel

Ein Beispiel wäre eine [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist. Diese würde eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}} Status und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerdaten zu versehen. Dies ist besonders üblich, wenn eine Benutzeraufforderung, wie `window.alert`, nach Ausführung Ihrer vorherigen WebDriver-Befehlsanfrage einen modalen Dialog geöffnet hat.

Da sowohl die WebDriver- als auch die JavaScript-Ausführung durch einen solchen Dialog angehalten werden, sehen wir einen [unerwarteten Alert geöffnet](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) Fehler in der nachfolgenden Antwort:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Reference/Clients) würde der Fehler durch eine Art Fehler-_typ_ oder _objektdarstellung_ dargestellt werden. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/selenium_common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlertyp                                                                                    | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Element Click Intercepted](/de/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/Reference/ElementClick) [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, da das [Element](/de/docs/Web/WebDriver/Reference/WebElement), das die Ereignisse empfängt, das angeforderte Element verdeckt.                     |
| [Element Not Interactable](/de/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, da das Element weder zeiger- noch tastaturseitig interaktiv ist.                                                                                                                                                  |
| [Insecure Certificate](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent eine Zertifikatswarnung erhielt, was normalerweise das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                                                               |
| [Invalid Argument](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Command) übergebenen Argumente sind entweder ungültig oder falsch formatiert.                                                                                                                                                                     |
| [Invalid Cookie Domain](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein unzulässiger Versuch unternommen, einen Cookie unter einer anderen Domain zu setzen als die aktuelle Seite.                                                                                                                                                                                 |
| [Invalid Element State](/de/docs/Web/WebDriver/Reference/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil sich das Element in einem ungültigen Zustand befindet, z. B. beim Versuch, ein Element zu [löschen](/de/docs/Web/WebDriver/Reference/ElementClear), das nicht sowohl bearbeitbar als auch zurücksetzbar ist. |
| [Invalid Selector](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Element-Abrufbefehl lieferte eine unbekannte Selektorstrategie.                                                                                                                                                                                                                                      |
| [Invalid Session ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/Reference/DeleteSession), nicht erneut verwendet werden kann.                                  |
| [JavaScript Error](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Es ist ein Fehler bei der Ausführung von JavaScript aufgetreten, das vom Benutzer bereitgestellt wurde.                                                                                                                                                                                                  |
| [Move Target Out Of Bounds](/de/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für die Mausinteraktion befindet sich nicht im Ansichtsbereich des Browsers und kann nicht in diesen Ansichtsbereich gebracht werden.                                                                                                                                                           |
| [No Such Alert](/de/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, mit einer Benutzeraufforderung zu arbeiten, obwohl keine geöffnet war.                                                                                                                                                                                                                |
| [No Such Cookie](/de/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das dem angegebenen Pfadnamen entspricht, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                                                  |
| [No Such Element](/de/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mit den angegebenen Suchparametern nicht gefunden werden.                                                                                                                                                                                                               |
| [No Such Frame](/de/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Frame zu wechseln, konnte nicht ausgeführt werden, weil das Frame nicht gefunden werden konnte.                                                                                                                                      |
| [No Such Window](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Fenster zu wechseln, konnte nicht ausgeführt werden, weil das Fenster nicht gefunden werden konnte.                                                                                                                                  |
| [Script Timeout](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor sein Timeout abgelaufen ist.                                                                                                                                                                                                                                 |
| [Session Not Created](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities), um die Sitzung zu starten, nicht übereinstimmten.                                                   |
| [Stale Element Reference](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) schlug fehl, weil das referenzierte [Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr an das DOM angehängt ist.                                                                                                                   |
| [Timeout](/de/docs/Web/WebDriver/Reference/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihr Timeout abgelaufen ist.                                                                                                                                                                                                                              |
| [Unable to Set Cookie](/de/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um den Wert eines Cookies zu setzen, konnte nicht ausgeführt werden.                                                                                                                                                                             |
| [Unable to Capture Screen](/de/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Bildschirmfoto konnte nicht aufgenommen werden.                                                                                                                                                                                                                                                      |
| [Unexpected Alert Open](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modaler Dialog war geöffnet und blockierte diesen Vorgang.                                                                                                                                                                                                                                           |
| [Unknown Command](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                                                                |
| [Unknown Error](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | Im Treiber trat ein unbekannter Fehler auf, während der [Befehl](/de/docs/Web/WebDriver/Reference/Command) verarbeitet wurde.                                                                                                                                                                            |
| [Unknown Method](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Reference/Command) entsprach einer bekannten URL, stimmte jedoch nicht mit einer Methode für diese URL überein.                                                                                                                                         |
| [Unsupported Operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Zeigt an, dass ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der ordnungsgemäß ausgeführt werden sollte, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                                  |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Reference/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)

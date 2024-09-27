---
title: WebDriver-Fehler
slug: Web/WebDriver/Errors
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{QuickLinksWithSubpages}}

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Commands), der gesendet wird, könnte möglicherweise eine Fehlermeldung erhalten [Antwort](/de/docs/Web/WebDriver/Response). Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Status) im Bereich von 4xx oder 5xx dargestellt und enthält eine JSON-Nutzlast mit Details zu dem Fehler.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder trägt:

- `error`
  - : Fehlertyp.
- `message`
  - : Lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Bericht über den Stacktrace der aktiven Stackframes zum Zeitpunkt des Fehlers.
- `data` (optional)

  - : Beliebige und implementierungsdefinierte Daten, die nützlich sein können, um sie dem Benutzer zu präsentieren.

    Viele Treiber beinhalten den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert) beim Auftreten eines Fehlers [unerwartetes geöffnetes Popup](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen).

## Beispiel

Beispielsweise würde ein [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist, eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}} Status und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerinformationen zu versehen. Insbesondere ist dies üblich, wenn eine Benutzeraufforderung, wie `window.alert`, ein modales Dialogfeld nach der Ausführung Ihres vorherigen WebDriver-Befehlsanfrage geöffnet hat.

Da sowohl die Ausführung von WebDriver als auch JavaScript durch ein solches Dialogfeld angehalten wird, sehen wir einen [unerwartetes geöffnetes Popup](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)-Fehler in der nachfolgenden Antwort:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Clients) würde der Fehler durch eine Art Fehler-_Typ_ oder _Objektdarstellung_ repräsentiert werden. In Python wird es als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html), und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlertyp                                                                          | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Element Click Intercepted](/de/docs/Web/WebDriver/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/ElementClick) [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, da das [Element](/de/docs/Web/WebDriver/WebElement), das die Ereignisse empfängt, das angeforderte Element verdeckt.                            |
| [Element Not Interactable](/de/docs/Web/WebDriver/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, da das Element nicht zeiger- oder tastaturinteraktiv ist.                                                                                                                                            |
| [Insecure Certificate](/de/docs/Web/WebDriver/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation hat dazu geführt, dass der Benutzeragent auf eine Zertifikatswarnung gestoßen ist, was normalerweise das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                          |
| [Invalid Argument](/de/docs/Web/WebDriver/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                               |
| [Invalid Cookie Domain](/de/docs/Web/WebDriver/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein illegaler Versuch unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                              |
| [Invalid Element State](/de/docs/Web/WebDriver/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, da sich das Element in einem ungültigen Zustand befindet, z. B. der Versuch, ein Element zu [löschen](/de/docs/Web/WebDriver/ElementClear), das nicht sowohl bearbeitbar als auch zurücksetzbar ist. |
| [Invalid Selector](/de/docs/Web/WebDriver/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Befehl zum Abrufen von Elementen hat eine unbekannte Selektor-Strategie bereitgestellt.                                                                                                                                                                                       |
| [Invalid Session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder dass sie nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/DeleteSession), nicht wiederverwendet werden kann.             |
| [JavaScript Error](/de/docs/Web/WebDriver/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Fehler trat während der Ausführung des vom Benutzer bereitgestellten JavaScript auf.                                                                                                                                                                                          |
| [Move Target Out Of Bounds](/de/docs/Web/WebDriver/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für Mausinteraktion befindet sich nicht im Browser-Viewport und kann nicht in diesen Viewport gebracht werden.                                                                                                                                                           |
| [No Such Alert](/de/docs/Web/WebDriver/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, eine Benutzeraufforderung zu bedienen, als keine offen war.                                                                                                                                                                                                    |
| [No Such Cookie](/de/docs/Web/WebDriver/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | Kein mit dem angegebenen Pfadname übereinstimmendes Cookie wurde unter den [Cookies](/de/docs/Glossary/Cookie) des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                     |
| [No Such Element](/de/docs/Web/WebDriver/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mit den angegebenen Suchparametern nicht lokalisiert werden.                                                                                                                                                                                     |
| [No Such Frame](/de/docs/Web/WebDriver/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command), zu einem Frame zu wechseln, konnte nicht erfüllt werden, da der Frame nicht gefunden werden konnte.                                                                                                                                 |
| [No Such Window](/de/docs/Web/WebDriver/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command), zu einem Fenster zu wechseln, konnte nicht erfüllt werden, da das Fenster nicht gefunden werden konnte.                                                                                                                             |
| [Script Timeout](/de/docs/Web/WebDriver/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor sein Timeout abgelaufen ist.                                                                                                                                                                                                          |
| [Session Not Created](/de/docs/Web/WebDriver/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Capabilities) zum Starten der Sitzung nicht übereinstimmten.                                          |
| [Stale Element Reference](/de/docs/Web/WebDriver/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) ist fehlgeschlagen, weil das referenzierte [Element](/de/docs/Web/WebDriver/WebElement) nicht mehr mit dem DOM verbunden ist.                                                                                                        |
| [Timeout](/de/docs/Web/WebDriver/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihr Timeout abgelaufen ist.                                                                                                                                                                                                       |
| [Unable To Set Cookie](/de/docs/Web/WebDriver/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Command), um den Wert eines Cookies zu setzen, konnte nicht erfüllt werden.                                                                                                                                                                   |
| [Unable To Capture Screen](/de/docs/Web/WebDriver/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine Bildschirmerfassung war nicht möglich.                                                                                                                                                                                                                                       |
| [Unexpected Alert Open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modales Dialogfeld war offen und blockierte diese Operation.                                                                                                                                                                                                                  |
| [Unknown Command](/de/docs/Web/WebDriver/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                                                   |
| [Unknown Error](/de/docs/Web/WebDriver/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler ist im Treiber aufgetreten, während der [Befehl](/de/docs/Web/WebDriver/Command) verarbeitet wurde.                                                                                                                                                        |
| [Unknown Method](/de/docs/Web/WebDriver/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Command) stimmte mit einer bekannten URL überein, passte jedoch nicht zu einer Methode für diese URL.                                                                                                                            |
| [Unsupported Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Command), der ordnungsgemäß ausgeführt werden sollte, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                      |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)

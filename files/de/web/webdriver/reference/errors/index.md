---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Reference/Commands), der gesendet wird, könnte plausibel eine Fehler-[Antwort](/de/docs/Web/WebDriver/Reference/Response) erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich 4xx oder 5xx dargestellt und enthält eine JSON-Nutzlast mit Details zum Fehler.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stack-Frames zum Zeitpunkt des Auftretens des Fehlers.
- `data` (optional)

  - : Beliebige und implementierungsdefinierte Daten, die nützlich sein können, um sie dem Benutzer zu präsentieren.

    Viele Treiber fügen den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert) hinzu, wenn sie auf einen [unerwarteten offenen Alarm](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) stoßen.

## Beispiel

Ein Beispiel: Eine [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an `/session/1234/url`, bei der `1234` eine falsche Sitzung ist, würde eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}} Status und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerdaten zu annotieren. Besonders häufig ist dies, wenn eine Benutzeraufforderung, wie zum Beispiel `window.alert`, nach der Ausführung Ihres vorherigen WebDriver-Befehls eine modale Dialogbox geöffnet hat.

Da sowohl WebDriver- als auch JavaScript-Ausführungen durch einen solchen Dialog unterbrochen werden, sehen wir in der nachfolgenden Antwort einen [unerwarteten offenen Alarm](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) Fehler:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Reference/Clients) würde der Fehler durch eine Art Fehler-_Typ_ oder _Objektdarstellung_ dargestellt. In Python wird es als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html), in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html), und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html) dargestellt.

## Tabelle der Fehler

| Fehlertyp                                                                                    | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/de/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/Reference/ElementClick) [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil das [Element](/de/docs/Web/WebDriver/Reference/WebElement), das die Ereignisse empfängt, das Element, das angeklickt werden sollte, verdeckt. |
| [element not interactable](/de/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil das Element nicht pointer- oder tastaturinteraktiv ist.                                                                                                                                                      |
| [insecure certificate](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent auf eine Zertifikatswarnung stieß, was meist das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                                                                     |
| [invalid argument](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                                            |
| [invalid cookie domain](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein illegaler Versuch unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                                                     |
| [invalid element state](/de/docs/Web/WebDriver/Reference/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil das Element in einem ungültigen Zustand ist, z.B. der Versuch, ein nicht sowohl editierbares als auch rücksetzbares Element zu [löschen](/de/docs/Web/WebDriver/Reference/ElementClear).                     |
| [invalid selector](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Elementabrufbefehl lieferte eine unbekannte Selektor-Strategie.                                                                                                                                                                                                                                      |
| [invalid session id](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/Reference/DeleteSession), nicht wiederverwendet werden kann.                                   |
| [JavaScript error](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Beim Ausführen des vom Benutzer bereitgestellten JavaScript ist ein Fehler aufgetreten.                                                                                                                                                                                                                  |
| [move target out of bounds](/de/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für Mausinteraktionen befindet sich nicht im Viewport des Browsers und kann nicht in diesen gebracht werden.                                                                                                                                                                                    |
| [no such alert](/de/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein Versuch wurde unternommen, mit einer Benutzeraufforderung zu operieren, als keine geöffnet war.                                                                                                                                                                                                      |
| [no such cookie](/de/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das mit dem angegebenen Pfadnamen übereinstimmt, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                                           |
| [no such element](/de/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mit den angegebenen Suchparametern nicht gefunden werden.                                                                                                                                                                                                               |
| [no such frame](/de/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der zu einem Frame wechseln sollte, konnte nicht ausgeführt werden, weil der Frame nicht gefunden werden konnte.                                                                                                                                 |
| [no such window](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der zu einem Fenster wechseln sollte, konnte nicht ausgeführt werden, weil das Fenster nicht gefunden werden konnte.                                                                                                                             |
| [script timeout](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor sein Timeout ablief.                                                                                                                                                                                                                                         |
| [session not created](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities), um die Sitzung zu starten, nicht übereinstimmten.                                                   |
| [stale element reference](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) ist fehlgeschlagen, weil das referenzierte [Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr mit dem DOM verbunden ist.                                                                                                           |
| [timeout](/de/docs/Web/WebDriver/Reference/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihr Timeout ablief.                                                                                                                                                                                                                                      |
| [unable to set cookie](/de/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um den Wert eines Cookies zu setzen, konnte nicht ausgeführt werden.                                                                                                                                                                             |
| [unable to capture screen](/de/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine Bildschirmaufnahme war nicht möglich.                                                                                                                                                                                                                                                               |
| [unexpected alert open](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modales Dialogfeld war offen und blockierte diese Operation.                                                                                                                                                                                                                                         |
| [unknown command](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht erkannte.                                                                                                                                                                              |
| [unknown error](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat im Treiber auf, als der [Befehl](/de/docs/Web/WebDriver/Reference/Command) verarbeitet wurde.                                                                                                                                                                                |
| [unknown method](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Reference/Command) stimmte zwar mit einer bekannten URL überein, passte jedoch nicht zu einer Methode für diese URL.                                                                                                                                    |
| [unsupported operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der ordnungsgemäß hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                             |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Reference/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)

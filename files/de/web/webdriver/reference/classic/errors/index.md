---
title: WebDriver klassische Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Classic/Errors
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Jeder WebDriver klassische [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands), der gesendet wird, könnte plausibel eine Fehlermeldung erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich von 4xx oder 5xx dargestellt und eine JSON-Nutzlast, die Details des Fehlers enthält.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stack-Frames zu dem Zeitpunkt, als der Fehler auftrat.
- `data` (optional)
  - : Beliebige und implementierungsdefinierte Daten, die nützlich sein können, um sie dem Benutzer zu präsentieren.
    Viele Treiber beinhalten den Text des [Benutzerhinweises](/de/docs/Web/API/Window/alert), wenn ein [unerwarteter Alarm offen](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) Fehler auftritt.

## Beispiel

Zum Beispiel eine [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist, würde eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}} Status und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerdaten zu versehen. Besonders häufig ist dies der Fall, wenn ein Benutzerhinweis, wie `window.alert`, einen modalen Dialog geöffnet hat, nachdem Sie Ihren vorherigen WebDriver-Befehlsantrag ausgeführt haben.

Da sowohl WebDriver als auch die JavaScript-Ausführung durch einen solchen Dialog unterbrochen werden, sehen wir in der nachfolgenden Antwort einen [unerwarteten Alarm offen](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) Fehler:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Reference/Clients) würde der Fehler durch eine Art von Fehler _Typ_ oder _Objektdarstellung_ dargestellt. In Python wird es als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/selenium_common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlertyp                                                                                        | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/de/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted)     | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/Reference/ElementClick) [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, weil das [Element](/de/docs/Web/WebDriver/Reference/WebElement), das die Ereignisse empfängt, das Ziel-Element verdeckt. |
| [element not interactable](/de/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)       | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, weil das Element nicht Zeiger- oder Tastatur-interaktiv ist.                                                                                                                            |
| [insecure certificate](/de/docs/Web/WebDriver/Reference/Classic/Errors/InsecureCertificate)      | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent auf eine Zertifikatswarnung stieß, was in der Regel auf ein abgelaufenes oder ungültiges TLS-Zertifikat zurückzuführen ist.                                                                                                    |
| [invalid argument](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidArgument)              | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                     |
| [invalid cookie domain](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidCookieDomain)     | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde versucht, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                                                       |
| [invalid element state](/de/docs/Web/WebDriver/Reference/Errors/InvalidElementState)             | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil das Element in einem ungültigen Zustand ist, z.B. beim Versuch, ein Element zu [löschen](/de/docs/Web/WebDriver/Reference/ElementClear), das nicht bearbeitbar und zurücksetzbar ist. |
| [invalid selector](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSelector)              | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Elementabruf-Befehl lieferte eine unbekannte Selektorstrategie.                                                                                                                                                                                                               |
| [invalid session id](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)           | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/Reference/DeleteSession), nicht wiederverwendet werden kann.            |
| [JavaScript error](/de/docs/Web/WebDriver/Reference/Classic/Errors/JavaScriptError)              | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Fehler trat während der Ausführung von JavaScript auf, das vom Benutzer bereitgestellt wurde.                                                                                                                                                                                 |
| [move target out of bounds](/de/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)       | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für die Mausinteraktion befindet sich nicht im Viewport des Browsers und kann nicht in diesen Viewport gebracht werden.                                                                                                                                                  |
| [no such alert](/de/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                             | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, auf einen Benutzerhinweis zuzugreifen, als keiner offen war.                                                                                                                                                                                                   |
| [no such cookie](/de/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                           | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde kein Cookie mit dem gegebenen Pfadnamen unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                                       |
| [no such element](/de/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite nicht gefunden werden, basierend auf den angegebenen Suchparametern.                                                                                                                                                                             |
| [no such frame](/de/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                             | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Frame zu wechseln, konnte nicht ausgeführt werden, weil der Frame nicht gefunden wurde.                                                                                                                       |
| [no such window](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                           | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Fenster zu wechseln, konnte nicht ausgeführt werden, weil das Fenster nicht gefunden wurde.                                                                                                                   |
| [script timeout](/de/docs/Web/WebDriver/Reference/Classic/Errors/ScriptTimeout)                  | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor dessen Timeout abgelaufen ist.                                                                                                                                                                                                        |
| [session not created](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)                 | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die angegebenen [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Classic/Capabilities) zur Start der Sitzung nicht übereinstimmten.                               |
| [stale element reference](/de/docs/Web/WebDriver/Reference/Classic/Errors/StaleElementReference) | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) ist fehlgeschlagen, weil das referenzierte [Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr im DOM verankert ist.                                                                                         |
| [timeout](/de/docs/Web/WebDriver/Reference/Errors/Timeout)                                       | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor dessen Timeout abgelaufen ist.                                                                                                                                                                                                    |
| [unable to set cookie](/de/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)                | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um den Wert eines Cookies zu setzen, konnte nicht ausgeführt werden.                                                                                                                                                      |
| [unable to capture screen](/de/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Es war nicht möglich, einen Screenshot zu erstellen.                                                                                                                                                                                                                              |
| [unexpected alert open](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modales Dialogfenster war geöffnet und blockierte diese Operation.                                                                                                                                                                                                            |
| [unknown command](/de/docs/Web/WebDriver/Reference/Classic/Errors/UnknownCommand)                | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                                         |
| [unknown error](/de/docs/Web/WebDriver/Reference/Classic/Errors/UnknownError)                    | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat im Treiber auf, während der [Befehl](/de/docs/Web/WebDriver/Reference/Command) verarbeitet wurde.                                                                                                                                                     |
| [unknown method](/de/docs/Web/WebDriver/Reference/Classic/Errors/UnknownMethod)                  | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Reference/Command) stimmte mit einer bekannten URL überein, aber nicht mit einer Methode für diese URL.                                                                                                                          |
| [unsupported operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der ordnungsgemäß hätte ausgeführt werden sollen, aus einem bestimmten Grund nicht unterstützt werden kann.                                                                                                 |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Reference/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)

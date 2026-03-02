---
title: WebDriver klassische Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Jeder WebDriver klassische [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands), der gesendet wird, könnte plausibel eine Fehlermeldung erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich von 4xx oder 5xx dargestellt, sowie eine JSON-Nutzlast, die Details des Fehlers enthält.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei, manchmal auch vier Felder enthält:

- `error`
  - : Fehlerart.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stapelrahmen zum Zeitpunkt des Auftretens des Fehlers.
- `data` (optional)
  - : Beliebige und implementierungsdefinierte Daten, die nützlich sein können, um dem Benutzer präsentiert zu werden.
    Viele Treiber schließen den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert) ein, wenn sie auf einen [unerwartet offenen Alarm](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)-Fehler stoßen.

## Beispiel

Zum Beispiel würde eine [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an `/session/1234/url`, bei der `1234` eine ungültige Sitzung ist, eine Antwort mit dem Status {{HTTPStatus(404, "404 Not Found")}} und dem folgenden Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist für den Treiber optional, Fehler mit zusätzlichen Fehlermetadaten zu versehen. Insbesondere ist dies üblich, wenn eine Benutzeraufforderung, wie `window.alert`, nach der Ausführung Ihrer vorherigen WebDriver-Befehlsanfrage einen modalen Dialog geöffnet hat.

Da sowohl der WebDriver als auch die JavaScript-Ausführung durch einen solchen Dialog unterbrochen wird, sehen wir einen [unerwartet offenen Alarm](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)-Fehler in der nachfolgenden Antwort:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Reference/Clients) würde der Fehler durch eine Art Fehlertyp oder Objektpräsentation dargestellt werden. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/selenium_common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlerart                                                                                    | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/de/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/Reference/ElementClick) [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, weil das [Element](/de/docs/Web/WebDriver/Reference/WebElement), das die Ereignisse erhält, das angeklickte Element verdeckt.                          |
| [element not interactable](/de/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, weil das Element nicht mit Zeiger oder Tastatur interagierbar ist.                                                                                                                                                    |
| [insecure certificate](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent auf eine Zertifikatswarnung stieß, die in der Regel auf ein abgelaufenes oder ungültiges TLS-Zertifikat zurückzuführen ist.                                                                                                                                  |
| [invalid argument](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft formatiert.                                                                                                                                                                        |
| [invalid cookie domain](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein illegaler Versuch unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                                                            |
| [invalid element state](/de/docs/Web/WebDriver/Reference/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, weil das Element in einem ungültigen Zustand ist, z.B. der Versuch, ein [clear](/de/docs/Web/WebDriver/Reference/ElementClear) auf einem Element auszuführen, das nicht sowohl editierbar als auch zurücksetzbar ist. |
| [invalid selector](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Befehl zur Elementabfrage lieferte eine unbekannte Selektorstrategie.                                                                                                                                                                                                                                       |
| [invalid session id](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine [gelöschte Sitzung](/de/docs/Web/WebDriver/Reference/DeleteSession) nicht wiederverwendet werden kann.                                                     |
| [JavaScript error](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Beim Ausführen des vom Benutzer bereitgestellten JavaScripts ist ein Fehler aufgetreten.                                                                                                                                                                                                                        |
| [move target out of bounds](/de/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für eine Mausinteraktion liegt außerhalb des Viewports des Browsers und kann nicht in diesen gebracht werden.                                                                                                                                                                                          |
| [no such alert](/de/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, eine Benutzeraufforderung zu bedienen, obwohl keine geöffnet war.                                                                                                                                                                                                                            |
| [no such cookie](/de/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das mit dem angegebenen Pfadnamen übereinstimmt, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                                                  |
| [no such element](/de/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte mit den angegebenen Suchparametern nicht auf der Seite gefunden werden.                                                                                                                                                                                                                      |
| [no such frame](/de/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Frame zu wechseln, konnte nicht ausgeführt werden, weil der Frame nicht gefunden werden konnte.                                                                                                                                             |
| [no such window](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Fenster zu wechseln, konnte nicht ausgeführt werden, weil das Fenster nicht gefunden werden konnte.                                                                                                                                         |
| [script timeout](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor sein Timeout abgelaufen ist.                                                                                                                                                                                                                                        |
| [session not created](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Capabilities](/de/docs/Web/WebDriver/Reference/Capabilities) für den Start der Sitzung nicht übereinstimmten.                                                           |
| [stale element reference](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) ist fehlgeschlagen, weil das referenzierte [Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr an das DOM gebunden ist.                                                                                                                    |
| [timeout](/de/docs/Web/WebDriver/Reference/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihr Timeout abgelaufen ist.                                                                                                                                                                                                                                     |
| [unable to set cookie](/de/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) zum Setzen eines Cookie-Wertes konnte nicht durchgeführt werden.                                                                                                                                                                                         |
| [unable to capture screen](/de/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Bildschirmfoto konnte nicht erstellt werden.                                                                                                                                                                                                                                                                |
| [unexpected alert open](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modaler Dialog war geöffnet und blockierte diese Operation.                                                                                                                                                                                                                                                 |
| [unknown command](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil der Treiber nicht darüber informiert war.                                                                                                                                                                           |
| [unknown error](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat auf, während der Treiber den [Befehl](/de/docs/Web/WebDriver/Reference/Command) verarbeitete.                                                                                                                                                                                       |
| [unknown method](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Reference/Command) stimmte mit einer bekannten URL überein, passte jedoch nicht zu einer Methode für diese URL.                                                                                                                                                |
| [unsupported operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der ordnungsgemäß hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                                    |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Reference/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)

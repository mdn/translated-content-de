---
title: WebDriver-Fehler
slug: Web/WebDriver/Errors
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{QuickLinksWithSubpages}}

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Commands), der gesendet wird, könnte möglicherweise eine Fehlermeldung im [Response](/de/docs/Web/WebDriver/Response) zurückgeben. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Status) im Bereich von 4xx oder 5xx dargestellt, sowie durch eine JSON-Nutzlast, die Details des Fehlers enthält.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und gelegentlich vier Felder enthält:

- `error`
  - : Fehlerart.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stackframes zum Zeitpunkt des Auftretens des Fehlers.
- `data` (optional)

  - : Beliebige und implementationsspezifische Daten, die zur Präsentation gegenüber dem Benutzer nützlich sein können.

    Viele Treiber fügen den Text des [Benutzer-Prompts](/de/docs/Web/API/Window/alert) hinzu, wenn ein [unerwartetes Alert-Öffnen](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen) Fehler auftritt.

## Beispiel

Ein Beispiel wäre eine [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist, die eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}} Status und folgendem Inhalt zurückgeben würde:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional, dass der Treiber Fehler mit zusätzlichen Fehlerdaten annotiert. Insbesondere ist dies häufig der Fall, wenn ein Benutzer-Prompt, wie `window.alert`, nach der Ausführung Ihres vorherigen WebDriver-Befehl-Anfrage ein modales Dialogfeld geöffnet hat.

Da sowohl WebDriver- als auch JavaScript-Ausführung durch ein solches Dialogfeld angehalten wird, sehen wir in der nachfolgenden Antwort einen [unerwarteten Alert-Öffnen](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen) Fehler:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Clients) wird der Fehler durch eine Art von Fehler _typ_ oder _Objektrepräsentation_ dargestellt. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html), und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlerart                                                                          | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/de/docs/Web/WebDriver/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Elementklick](/de/docs/Web/WebDriver/ElementClick) [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, da das [Element](/de/docs/Web/WebDriver/WebElement), das die Ereignisse empfängt, das angeforderte Element verdeckt.                |
| [element not interactable](/de/docs/Web/WebDriver/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, da das Element nicht per Zeiger- oder Tastaturschnittstelle interagiert werden kann.                                                                                                    |
| [insecure certificate](/de/docs/Web/WebDriver/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation veranlasste den Benutzer-Agenten, eine Zertifikatwarnung zu treffen, was in der Regel auf ein abgelaufenes oder ungültiges TLS-Zertifikat zurückzuführen ist.                                                                                            |
| [invalid argument](/de/docs/Web/WebDriver/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                     |
| [invalid cookie domain](/de/docs/Web/WebDriver/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein illegaler Versuch unternommen, ein Cookie unter einem anderen Domainnamen als der aktuellen Seite zu setzen.                                                                                                                                               |
| [invalid element state](/de/docs/Web/WebDriver/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, da sich das Element in einem ungültigen Zustand befindet, z.B. der Versuch, ein Element zu [löschen](/de/docs/Web/WebDriver/ElementClear), das nicht bearbeitbar und zurücksetzbar ist. |
| [invalid selector](/de/docs/Web/WebDriver/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Elementabrufbefehl hat eine unbekannte Selektorstrategie bereitgestellt.                                                                                                                                                                                            |
| [invalid session id](/de/docs/Web/WebDriver/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine [gelöschte Sitzung](/de/docs/Web/WebDriver/DeleteSession) nicht wiederverwendet werden kann.                       |
| [JavaScript error](/de/docs/Web/WebDriver/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Bei der Ausführung von JavaScript, das vom Benutzer bereitgestellt wurde, ist ein Fehler aufgetreten.                                                                                                                                                                   |
| [move target out of bounds](/de/docs/Web/WebDriver/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für Mausinteraktionen befindet sich nicht im Viewport des Browsers und kann nicht in diesen Viewport gebracht werden.                                                                                                                                          |
| [no such alert](/de/docs/Web/WebDriver/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, mit einem Benutzerprompt zu arbeiten, wenn kein Fenster geöffnet war.                                                                                                                                                                                |
| [no such cookie](/de/docs/Web/WebDriver/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das mit dem angegebenen Pfadnamen übereinstimmt, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                          |
| [no such element](/de/docs/Web/WebDriver/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mit den angegebenen Suchparametern nicht gefunden werden.                                                                                                                                                                              |
| [no such frame](/de/docs/Web/WebDriver/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) zum Wechseln zu einem Frame konnte nicht ausgeführt werden, da der Frame nicht gefunden wurde.                                                                                                                             |
| [no such window](/de/docs/Web/WebDriver/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) zum Wechseln zu einem Fenster konnte nicht ausgeführt werden, da das Fenster nicht gefunden wurde.                                                                                                                         |
| [script timeout](/de/docs/Web/WebDriver/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor sein Timeout abgelaufen ist.                                                                                                                                                                                                |
| [session not created](/de/docs/Web/WebDriver/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, weil entweder der Browser nicht gestartet werden konnte oder die bereitgestellten [Funktionen](/de/docs/Web/WebDriver/Capabilities), um die Sitzung zu starten, nicht übereinstimmten.                                  |
| [stale element reference](/de/docs/Web/WebDriver/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, da das referenzierte [Element](/de/docs/Web/WebDriver/WebElement) nicht mehr an das DOM gebunden ist.                                                                                   |
| [timeout](/de/docs/Web/WebDriver/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihr Timeout abgelaufen ist.                                                                                                                                                                                             |
| [unable to set cookie](/de/docs/Web/WebDriver/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Command), um den Wert eines Cookies zu setzen, konnte nicht erfüllt werden.                                                                                                                                                         |
| [unable to capture screen](/de/docs/Web/WebDriver/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine Bildschirmaufnahme konnte nicht gemacht werden.                                                                                                                                                                                                                    |
| [unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modales Dialogfeld war geöffnet und blockierte diese Operation.                                                                                                                                                                                                     |
| [unknown command](/de/docs/Web/WebDriver/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, da der Treiber ihn nicht kannte.                                                                                                                                                           |
| [unknown error](/de/docs/Web/WebDriver/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat im Treiber während der Verarbeitung des [Befehls](/de/docs/Web/WebDriver/Command) auf.                                                                                                                                                      |
| [unknown method](/de/docs/Web/WebDriver/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Command) stimmte mit einer bekannten URL überein, jedoch nicht mit einer Methode für diese URL.                                                                                                                        |
| [unsupported operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Zeigt an, dass ein [Befehl](/de/docs/Web/WebDriver/Command), der ordnungsgemäß hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                     |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)

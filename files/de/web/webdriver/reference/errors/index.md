---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Jeder WebDriver-Classic-[Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands), der gesendet wird, kann möglicherweise eine Fehlerantwort erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich von 4xx oder 5xx dargestellt und beinhaltet eine JSON-Nutzlast mit Details zum Fehler.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht zu den aktiven Stapelrahmen zum Zeitpunkt des Auftretens des Fehlers.
- `data` (optional)
  - : Beliebige und implementierungsspezifische Daten, die es nützlich sein könnten, dem Benutzer zu präsentieren.
    Viele Treiber beinhalten den Text des [Benutzer-Prompts](/de/docs/Web/API/Window/alert), wenn sie auf einen [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)-Fehler stoßen.

## Beispiel

Ein [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage zu `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist, würde eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}} Status und dem folgenden Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerdaten zu versehen. Besonders häufig ist dies, wenn ein Benutzer-Prompt, wie `window.alert`, nach der Ausführung Ihrer vorherigen WebDriver-Befehlanforderung einen modalen Dialog öffnet.

Da sowohl WebDriver als auch die JavaScript-Ausführung durch einen solchen Dialog angehalten werden, sehen wir einen [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)-Fehler in der nachfolgenden Antwort:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Reference/Clients) würde der Fehler durch eine Art von Fehler*typ* oder _Objektdarstellung_ repräsentiert. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/selenium_common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlertyp                                                                                      | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`element click intercepted`](/de/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/Reference/ElementClick) [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da das [Element](/de/docs/Web/WebDriver/Reference/WebElement), das die Ereignisse empfängt, das angeforderte Element verdeckt.                |
| [`element not interactable`](/de/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da das Element nicht als Zeiger- oder Tastatureingabe interaktiv ist.                                                                                                                                        |
| [`insecure certificate`](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzer-Agent auf eine Zertifikatswarnung stieß, die normalerweise das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                                                          |
| [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft formatiert.                                                                                                                                                               |
| [`invalid cookie domain`](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein illegaler Versuch wurde unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                                                      |
| [`invalid element state`](/de/docs/Web/WebDriver/Reference/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da das Element sich in einem ungültigen Zustand befindet, z.B. ein Versuch, ein [Element zu löschen](/de/docs/Web/WebDriver/Reference/ElementClear), das nicht sowohl editierbar als auch zurücksetzbar ist. |
| [`invalid selector`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Elementabrufsbefehl lieferte eine unbekannte Selektorstrategie.                                                                                                                                                                                                                                    |
| [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/Reference/DeleteSession), nicht wiederverwendet werden kann.                                 |
| [`javascript error`](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Beim Ausführen von JavaScript, das vom Benutzer bereitgestellt wurde, ist ein Fehler aufgetreten.                                                                                                                                                                                                      |
| [`move target out of bounds`](/de/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für die Mausinteraktion befindet sich nicht im Viewport des Browsers und kann nicht in diesen Viewport gebracht werden.                                                                                                                                                                       |
| [`no such alert`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, mit einem Benutzer-Prompt zu interagieren, obwohl keines geöffnet war.                                                                                                                                                                                                              |
| [`no such cookie`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | Unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) wurde kein Cookie mit dem angegebenen Pfadnamen gefunden.                                                                                                                                             |
| [`no such element`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mit den angegebenen Suchparametern nicht gefunden werden.                                                                                                                                                                                                             |
| [`no such frame`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), zu einem Frame zu wechseln, konnte nicht ausgeführt werden, da der Frame nicht gefunden werden konnte.                                                                                                                                         |
| [`no such window`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), zu einem Fenster zu wechseln, konnte nicht ausgeführt werden, da das Fenster nicht gefunden werden konnte.                                                                                                                                     |
| [`script timeout`](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor seine Zeitüberschreitung abgelaufen ist.                                                                                                                                                                                                                   |
| [`session not created`](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities) zum Starten der Sitzung nicht übereinstimmten.                                                     |
| [`stale element reference`](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) schlug fehl, weil das referenzierte [Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr an das DOM angehängt war.                                                                                                                 |
| [`timeout`](/de/docs/Web/WebDriver/Reference/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihre Zeitüberschreitung abgelaufen ist.                                                                                                                                                                                                                |
| [`unable to set cookie`](/de/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), den Wert eines Cookies zu setzen, konnte nicht ausgeführt werden.                                                                                                                                                                              |
| [`unable to capture screen`](/de/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine Bildschirmaufnahme war unmöglich.                                                                                                                                                                                                                                                                 |
| [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modaler Dialog war geöffnet und blockierte diese Operation.                                                                                                                                                                                                                                        |
| [`unknown command`](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                                                              |
| [`unknown error`](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat im Treiber auf, während er den [Befehl](/de/docs/Web/WebDriver/Reference/Command) verarbeitete.                                                                                                                                                                            |
| [`unknown method`](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Reference/Command) stimmte mit einer bekannten URL überein, aber nicht mit einer Methode für diese URL.                                                                                                                                               |
| [`unsupported operation`](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Zeigt an, dass ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der ordnungsgemäß hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                          |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Reference/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)

---
title: WebDriver-Fehler
slug: Web/WebDriver/Errors
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{QuickLinksWithSubpages}}

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Commands), der gesendet wird, könnte möglicherweise eine Fehler-[Antwort](/de/docs/Web/WebDriver/Response) erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Status) im Bereich von 4xx oder 5xx dargestellt, sowie durch eine JSON-Payload, die Details des Fehlers enthält.

## Payload

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Für Menschen lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stack-Frames zum Zeitpunkt des Auftretens des Fehlers.
- `data` (optional)

  - : Beliebige und implementierungsspezifische Daten, die nützlich sein können, dem Benutzer zu präsentieren.

    Viele Treiber beinhalten den Text des [Benutzerhinweises](/de/docs/Web/API/Window/alert), wenn ein Fehler „[unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)“ auftritt.

## Beispiel

Ein Beispiel: Eine [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist, würde eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}}-Status und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerdaten zu annotieren. Bemerkenswert ist, dass dies häufig geschieht, wenn ein Benutzerhinweis, wie etwa `window.alert`, nach der Ausführung Ihres vorherigen WebDriver-Befehls eine modale Dialogbox geöffnet hat.

Da sowohl die Ausführung von WebDriver als auch von JavaScript durch eine solche Dialogbox unterbrochen wird, sehen wir in der nachfolgenden Antwort einen Fehler „[unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)“:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Clients) würde der Fehler durch eine Art Fehlertyp oder Objektrepräsentation dargestellt werden. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html), und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlertyp                                                                                | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/de/docs/Web/WebDriver/Errors/ElementClickIntercepted)    | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/ElementClick)-[Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, da das [Element](/de/docs/Web/WebDriver/WebElement), das die Ereignisse empfängt, das angeklickte Element verdeckt.       |
| [element not interactable](/de/docs/Web/WebDriver/Errors/ElementNotInteractable)      | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, weil das Element nicht zeiger- oder tastaturinteraktiv ist.                                                                                                                                   |
| [insecure certificate](/de/docs/Web/WebDriver/Errors/InsecureCertificate)             | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent auf eine Zertifikatwarnung stieß, was normalerweise das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                                                                  |
| [invalid argument](/de/docs/Web/WebDriver/Errors/InvalidArgument)                     | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                             |
| [invalid cookie domain](/de/docs/Web/WebDriver/Errors/InvalidCookieDomain)            | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein rechtswidriger Versuch unternommen, ein Cookie unter einer anderen Domäne als der aktuellen Seite zu setzen.                                                                                                                                                                           |
| [invalid element state](/de/docs/Web/WebDriver/Errors/InvalidElementState)            | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, weil das Element in einem ungültigen Zustand ist, z. B. beim Versuch, ein nicht sowohl bearbeitbares als auch zurücksetzbares Element zu [löschen](/de/docs/Web/WebDriver/ElementClear).                              |
| [invalid selector](/de/docs/Web/WebDriver/Errors/InvalidSelector)                     | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Elementabrufbefehl lieferte eine unbekannte Selektorstrategie.                                                                                                                                                                                                   |
| [invalid session id](/de/docs/Web/WebDriver/Errors/InvalidSessionID)                  | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine session, die [gelöscht wurde](/de/docs/Web/WebDriver/DeleteSession), nicht erneut verwendet werden kann.                                                        |
| [JavaScript error](/de/docs/Web/WebDriver/Errors/JavaScriptError)                     | {{HTTPStatus(500, "500 Internal Server Error")}} | Bei der Ausführung von vom Benutzer bereitgestelltem JavaScript ist ein Fehler aufgetreten.                                                                                                                                                                                                    |
| [move target out of bounds](/de/docs/Web/WebDriver/Errors/MoveTargetOutOfBounds)      | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für Mausinteraktionen befindet sich nicht im Viewport des Browsers und kann nicht in diesen gebracht werden.                                                                                                                                                           |
| [no such alert](/de/docs/Web/WebDriver/Errors/NoSuchAlert)                            | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, auf einen Benutzerhinweis zu arbeiten, als keiner geöffnet war.                                                                                                                                                                                                |
| [no such cookie](/de/docs/Web/WebDriver/Errors/NoSuchCookie)                          | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie mit dem angegebenen Pfadnamen wurde unter den [Cookies](/de/docs/Glossary/Cookie) des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                          |
| [no such element](/de/docs/Web/WebDriver/Errors/NoSuchElement)                        | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mit den angegebenen Suchparametern nicht gefunden werden.                                                                                                                                                                                        |
| [no such frame](/de/docs/Web/WebDriver/Errors/NoSuchFrame)                            | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) zum Wechseln zu einem Frame konnte nicht ausgeführt werden, da der Frame nicht gefunden wurde.                                                                                                                                      |
| [no such window](/de/docs/Web/WebDriver/Errors/NoSuchWindow)                          | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) zum Wechseln zu einem Fenster konnte nicht ausgeführt werden, da das Fenster nicht gefunden wurde.                                                                                                                                    |
| [script timeout](/de/docs/Web/WebDriver/Errors/ScriptTimeout)                         | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor seine Zeitüberschreitung abgelaufen war.                                                                                                                                                                                                                 |
| [session not created](/de/docs/Web/WebDriver/Errors/SessionNotCreated)                | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Capabilities) zur Sitzungserstellung nicht übereinstimmten.                                                                |
| [stale element reference](/de/docs/Web/WebDriver/Errors/StaleElementReference)        | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) schlug fehl, weil das referenzierte [Element](/de/docs/Web/WebDriver/WebElement) nicht mehr an das DOM angehängt ist.                                                                                                        |
| [timeout](/de/docs/Web/WebDriver/Errors/Timeout)                                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihre Zeitüberschreitung abgelaufen war.                                                                                                                                                                                                             |
| [unable to set cookie](/de/docs/Web/WebDriver/Errors/UnableToSetCookie)               | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Command), um den Wert eines Cookies zu setzen, konnte nicht abgeschlossen werden.                                                                                                                                                                        |
| [unable to capture screen](/de/docs/Web/WebDriver/Errors/UnableToCaptureScreen)       | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Bildschirmfoto konnte nicht aufgenommen werden.                                                                                                                                                                                                                                 |
| [unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modaler Dialog war geöffnet und blockierte diesen Vorgang.                                                                                                                                                                                                                     |
| [unknown command](/de/docs/Web/WebDriver/Errors/UnknownCommand)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, da der Treiber ihn nicht kannte.                                                                                                                                                            |
| [unknown error](/de/docs/Web/WebDriver/Errors/UnknownError)                           | {{HTTPStatus(500, "500 Internal Server Error")}} | Im Treiber ist ein unbekannter Fehler aufgetreten, während der [Befehl](/de/docs/Web/WebDriver/Command) verarbeitet wurde.                                                                                                                                                           |
| [unknown method](/de/docs/Web/WebDriver/Errors/UnknownMethod)                         | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Command) entsprach einer bekannten URL, aber die Methode für diese URL war nicht bekannt.                                                                                                                                               |
| [unsupported operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)           | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Command), der ordnungsgemäß hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                                 |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)

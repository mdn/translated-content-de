---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Reference/Commands), der gesendet wird, kann möglicherweise eine Fehler-[Antwort](/de/docs/Web/WebDriver/Reference/Response) erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich von 4xx oder 5xx dargestellt und enthält eine JSON-Nutzlast, die Details des Fehlers enthält.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei, manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stack-Frames zum Zeitpunkt des Auftretens des Fehlers.
- `data` (optional)
  - : Beliebige und implementationsspezifische Daten, die nützlich sein können, um dem Benutzer präsentiert zu werden.

    Viele Treiber enthalten den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert), wenn sie auf einen [unerwarteten offenen Alert](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) stoßen.

## Beispiel

Ein Beispiel: Eine [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine falsche Sitzung ist, würde eine Antwort mit dem Status {{HTTPStatus(404, "404 Not Found")}} und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerinformationen zu versehen. Dies ist insbesondere dann üblich, wenn eine Benutzeraufforderung, wie `window.alert`, nach Ausführung Ihrer vorherigen WebDriver-Befehlsanforderung einen modalen Dialog geöffnet hat.

Da sowohl WebDriver- als auch JavaScript-Ausführungen durch einen solchen Dialog angehalten werden, sehen wir in der nachfolgenden Antwort einen [unerwarteten offenen Alert](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) Fehler:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Reference/Clients) würde der Fehler durch eine Art Fehlertyp oder Objektabbildung dargestellt. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/selenium_common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlertyp                                                                                    | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/de/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Elementklick](/de/docs/Web/WebDriver/Reference/ElementClick)-[Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da das [Element](/de/docs/Web/WebDriver/Reference/WebElement), das die Ereignisse empfängt, das angeforderte Element verdeckt.                     |
| [element not interactable](/de/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da das Element nicht für Zeiger- oder Tastaturinteraktionen verfügbar ist.                                                                                                                                       |
| [insecure certificate](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent auf eine Zertifikatswarnung stieß, was normalerweise das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                                                               |
| [invalid argument](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                                              |
| [invalid cookie domain](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein illegaler Versuch unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                                                       |
| [invalid element state](/de/docs/Web/WebDriver/Reference/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht abgeschlossen werden, da sich das Element in einem ungültigen Zustand befindet, z.B. bei dem Versuch, ein Element zu [löschen](/de/docs/Web/WebDriver/Reference/ElementClear), das nicht sowohl editierbar als auch zurücksetzbar ist. |
| [invalid selector](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Befehl zum Abrufen eines Elements hat eine unbekannte Selector-Strategie bereitgestellt.                                                                                                                                                                                                               |
| [invalid session id](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/Reference/DeleteSession), nicht wiederverwendet werden kann.                                     |
| [JavaScript error](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Beim Ausführen von vom Benutzer bereitgestelltem JavaScript ist ein Fehler aufgetreten.                                                                                                                                                                                                                    |
| [move target out of bounds](/de/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für Mausinteraktionen befindet sich nicht im Ansichtsbereich des Browsers und kann nicht in diesen Bereich gebracht werden.                                                                                                                                                                       |
| [no such alert](/de/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, mit einer Benutzeraufforderung zu operieren, als keine geöffnet war.                                                                                                                                                                                                                    |
| [no such cookie](/de/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das mit dem angegebenen Pfadnamen übereinstimmt, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                                             |
| [no such element](/de/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mit den angegebenen Suchparametern nicht gefunden werden.                                                                                                                                                                                                                 |
| [no such frame](/de/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Frame zu wechseln, konnte nicht erfüllt werden, da der Frame nicht gefunden wurde.                                                                                                                                                     |
| [no such window](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Fenster zu wechseln, konnte nicht erfüllt werden, da das Fenster nicht gefunden wurde.                                                                                                                                                 |
| [script timeout](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht fertiggestellt, bevor seine Zeitüberschreitung abgelaufen ist.                                                                                                                                                                                                                      |
| [session not created](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities) zum Starten der Sitzung nicht übereinstimmten.                                                         |
| [stale element reference](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) schlug fehl, weil das referenzierte [Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr am DOM angehängt ist.                                                                                                                         |
| [timeout](/de/docs/Web/WebDriver/Reference/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihre Zeitüberschreitung abgelaufen ist.                                                                                                                                                                                                                    |
| [unable to set cookie](/de/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um den Wert eines Cookies zu setzen, konnte nicht erfüllt werden.                                                                                                                                                                                  |
| [unable to capture screen](/de/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Bildschirmfoto konnte nicht aufgenommen werden.                                                                                                                                                                                                                                                        |
| [unexpected alert open](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Dialog wurde geöffnet, der diese Operation blockiert.                                                                                                                                                                                                                                                  |
| [unknown command](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                                                                  |
| [unknown error](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | Im Treiber ist ein unbekannter Fehler beim Verarbeiten des [Befehls](/de/docs/Web/WebDriver/Reference/Command) aufgetreten.                                                                                                                                                                                |
| [unknown method](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Reference/Command) entsprach einer bekannten URL, stimmte jedoch nicht mit einer Methode für diese URL überein.                                                                                                                                           |
| [unsupported operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Zeigt an, dass ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der korrekt hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                                    |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Reference/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)

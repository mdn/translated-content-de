---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Reference/Commands), der gesendet wird, kann plausiblerweise eine Fehler-[Antwort](/de/docs/Web/WebDriver/Response) erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich 4xx oder 5xx dargestellt und enthält eine JSON-Nutzlast mit Details des Fehlers.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht über die aktiven Stack-Frames zum Zeitpunkt des Auftretens des Fehlers.
- `data` (optional)

  - : Beliebige und implementierungsdefinierte Daten, die nützlich sein können, dem Benutzer zu präsentieren.

    Viele Treiber enthalten den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert) bei Auftreten eines [unerwarteten geöffneten Alarms](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)-Fehlers.

## Beispiel

Zum Beispiel würde ein [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist, eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}} Status und dem folgenden Körper zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerdaten zu annotieren. Dies ist insbesondere üblich, wenn eine Benutzeraufforderung, wie `window.alert`, nach der Ausführung Ihrer vorherigen WebDriver-Befehl-Anfrage einen modalen Dialog geöffnet hat.

Da sowohl die WebDriver- als auch die JavaScript-Ausführung durch einen solchen Dialog angehalten werden, sehen wir in der nachfolgenden Antwort einen [unerwarteten geöffneten Alarm](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)-Fehler:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Clients) würde der Fehler durch eine Art Fehler*typ* oder _Objektdarstellung_ dargestellt. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html), und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Fehlerübersicht

| Fehlertyp                                                                                     | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Element click intercepted](/de/docs/Web/WebDriver/Errors/ElementClickIntercepted)            | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/ElementClick)-[Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, weil das [Element](/de/docs/Web/WebDriver/WebElement), das die Ereignisse empfängt, das angeforderte Element verdeckt.            |
| [Element not interactable](/de/docs/Web/WebDriver/Errors/ElementNotInteractable)              | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, weil das Element weder zeiger- noch tastaturinteraktiv ist.                                                                                                                            |
| [Unsicheres Zertifikat](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent auf eine Zertifikatwarnung stieß, was normalerweise das Ergebnis eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                            |
| [Ungültiges Argument](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                    |
| [Ungültige Cookie-Domain](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)        | {{HTTPStatus(400, "400 Bad Request")}}           | Ein illegaler Versuch wurde unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                      |
| [Ungültiger Elementstatus](/de/docs/Web/WebDriver/Errors/InvalidElementState)                 | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, weil das Element in einem ungültigen Status ist, z.B. beim Versuch, ein nicht sowohl bearbeitbares als auch zurücksetzbares Element zu [löschen](/de/docs/Web/WebDriver/ElementClear). |
| [Ungültiger Selektor](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Elementabrufbefehl stellte eine unbekannte Selektorstrategie bereit.                                                                                                                                                                                               |
| [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)             | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine [gelöschte Sitzung](/de/docs/Web/WebDriver/DeleteSession) nicht wiederverwendet werden kann.                      |
| [JavaScript-Fehler](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Fehler trat beim Ausführen von JavaScript auf, das vom Benutzer bereitgestellt wurde.                                                                                                                                                                              |
| [Ziel verschieben außerhalb der Grenzen](/de/docs/Web/WebDriver/Errors/MoveTargetOutOfBounds) | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für die Mausinteraktion befindet sich nicht im Ansichtsbereich des Browsers und kann nicht in diesen Ansichtsbereich gebracht werden.                                                                                                                         |
| [Kein solches Warnfenster](/de/docs/Web/WebDriver/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | Ein Versuch wurde unternommen, mit einer Benutzeraufforderung zu arbeiten, wenn keine geöffnet war.                                                                                                                                                                    |
| [Kein solches Cookie](/de/docs/Web/WebDriver/Errors/NoSuchCookie)                             | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das dem angegebenen Pfadnamen entspricht, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                |
| [Kein solches Element](/de/docs/Web/WebDriver/Errors/NoSuchElement)                           | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mit den angegebenen Suchparametern nicht gefunden werden.                                                                                                                                                                             |
| [Kein solcher Rahmen](/de/docs/Web/WebDriver/Errors/NoSuchFrame)                              | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command), um zu einem Rahmen zu wechseln, konnte nicht erfüllt werden, weil der Rahmen nicht gefunden werden konnte.                                                                                                               |
| [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)                            | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command), um zu einem Fenster zu wechseln, konnte nicht erfüllt werden, weil das Fenster nicht gefunden werden konnte.                                                                                                             |
| [Script-Timeout](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                       | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor sein Timeout abgelaufen ist.                                                                                                                                                                                               |
| [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)                     | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities) zum Starten der Sitzung nicht übereinstimmten.                     |
| [Veraltete Elementreferenz](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)    | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) ist fehlgeschlagen, weil das referenzierte [Element](/de/docs/Web/WebDriver/WebElement) nicht mehr an das DOM angehängt ist.                                                                                              |
| [Timeout](/de/docs/Web/WebDriver/Errors/Timeout)                                              | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihr Timeout abgelaufen ist.                                                                                                                                                                                            |
| [Cookie kann nicht gesetzt werden](/de/docs/Web/WebDriver/Errors/UnableToSetCookie)           | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Command), um den Wert eines Cookies zu setzen, konnte nicht erfüllt werden.                                                                                                                                                        |
| [Bildschirm kann nicht erfasst werden](/de/docs/Web/WebDriver/Errors/UnableToCaptureScreen)   | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine Bildschirmaufnahme war unmöglich.                                                                                                                                                                                                                                 |
| [Unerwarteter geöffneter Alarm](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modales Dialogfeld war geöffnet, was diese Operation blockierte.                                                                                                                                                                                                   |
| [Unbekannter Befehl](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                  | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                                        |
| [Unbekannter Fehler](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                    | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat im Treiber beim Verarbeiten des [Befehls](/de/docs/Web/WebDriver/Command) auf.                                                                                                                                                             |
| [Unbekannte Methode](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                   | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Command) entsprach einer bekannten URL, passte jedoch nicht zu einer Methode für diese URL.                                                                                                                           |
| [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Command), der korrekt hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                           |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)

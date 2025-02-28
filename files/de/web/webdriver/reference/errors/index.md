---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Reference/Commands), der gesendet wird, kann plausiblerweise eine Fehler-[Antwort](/de/docs/Web/WebDriver/Response) erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Status) im Bereich von 4xx oder 5xx dargestellt und enthält eine JSON-Nutzlast mit Details zum Fehler.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei, manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung der Art des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stapelrahmen zum Zeitpunkt des Auftretens des Fehlers.
- `data` (optional)

  - : Beliebige und implementierungsdefinierte Daten, die dem Benutzer nützlich sein können.

    Viele Treiber enthalten den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert), wenn sie auf einen [unerwartet offenen Alarm](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)-Fehler stoßen.

## Beispiel

Ein Beispiel: Eine [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfrage an `/session/1234/url`, wobei `1234` eine ungültige Sitzung ist, würde eine Antwort mit dem Status {{HTTPStatus(404, "404 Not Found")}} und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerinformationen zu annotieren. Dies ist insbesondere üblich, wenn eine Benutzeraufforderung, wie `window.alert`, ein modales Dialogfeld nach der Ausführung Ihrer vorherigen WebDriver-Befehlsanfrage geöffnet hat.

Da sowohl die Ausführung von WebDriver als auch von JavaScript durch ein solches Dialogfeld gestoppt wird, sehen wir einen [unerwartet offenen Alarm](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)-Fehler in der nachfolgenden Antwort:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Clients) wird der Fehler durch eine Art von Fehler-_Typ_ oder _Objektdarstellung_ dargestellt. In Python wird es als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html) dargestellt, in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Tabelle der Fehler

| Fehlertyp                                                                                    | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Elementklick blockiert](/de/docs/Web/WebDriver/Errors/ElementClickIntercepted)              | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element Click](/de/docs/Web/WebDriver/ElementClick)-[Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, da das [Element](/de/docs/Web/WebDriver/WebElement), das die Ereignisse empfängt, das angeklickte Element verdeckt.     |
| [Element nicht interagierbar](/de/docs/Web/WebDriver/Errors/ElementNotInteractable)          | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, da das Element nicht zeige- oder tastaturinteragierbar ist.                                                                                                                  |
| [Unsicheres Zertifikat](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)         | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent eine Zertifikatswarnung angezeigt hat, was normalerweise auf ein abgelaufenes oder ungültiges TLS-Zertifikat zurückzuführen ist.                                                                          |
| [Ungültiges Argument](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)               | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft formatiert.                                                                                                                               |
| [Ungültige Cookie-Domain](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)       | {{HTTPStatus(400, "400 Bad Request")}}           | Es wurde ein illegaler Versuch unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                         |
| [Ungültiger Element-Status](/de/docs/Web/WebDriver/Errors/InvalidElementState)               | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht abgeschlossen werden, da das Element in einem ungültigen Zustand ist, z.B. der Versuch, ein Element, das nicht bearbeitbar und rücksetzbar ist, zu [löschen](/de/docs/Web/WebDriver/ElementClear). |
| [Ungültiger Selektor](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)               | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Elementabrufsbefehl hat eine unbekannte Selektorstrategie bereitgestellt.                                                                                                                                                                                |
| [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)            | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, was bedeutet, dass die Sitzung entweder nicht existiert oder nicht aktiv ist. Beachten Sie, dass eine Sitzung, die [gelöscht wurde](/de/docs/Web/WebDriver/DeleteSession), nicht wiederverwendet werden kann. |
| [JavaScript-Fehler](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                 | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Fehler trat bei der Ausführung von JavaScript auf, das vom Benutzer bereitgestellt wurde.                                                                                                                                                                |
| [Ziel außerhalb des Bildschirmbereichs](/de/docs/Web/WebDriver/Errors/MoveTargetOutOfBounds) | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für die Mausinteraktion befindet sich nicht im Viewport des Browsers und kann nicht in diesen Viewport gebracht werden.                                                                                                                             |
| [Kein solcher Alarm](/de/docs/Web/WebDriver/Errors/NoSuchAlert)                              | {{HTTPStatus(404, "404 Not Found")}}             | Es wurde versucht, auf eine Benutzeraufforderung zuzugreifen, obwohl keine geöffnet war.                                                                                                                                                                     |
| [Kein solches Cookie](/de/docs/Web/WebDriver/Errors/NoSuchCookie)                            | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das dem angegebenen Pfadnamen entspricht, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                      |
| [Kein solches Element](/de/docs/Web/WebDriver/Errors/NoSuchElement)                          | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite mithilfe der angegebenen Suchparameter nicht gefunden werden.                                                                                                                                                               |
| [Kein solcher Rahmen](/de/docs/Web/WebDriver/Errors/NoSuchFrame)                             | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) zum Wechseln zu einem Rahmen konnte nicht erfüllt werden, da der Rahmen nicht gefunden wurde.                                                                                                                   |
| [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)                           | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) zum Wechseln zu einem Fenster konnte nicht erfüllt werden, da das Fenster nicht gefunden wurde.                                                                                                                 |
| [Skript-Timeout](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht abgeschlossen, bevor sein Timeout abgelaufen ist.                                                                                                                                                                                     |
| [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)                    | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die bereitgestellten [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities) zum Starten der Sitzung nicht übereinstimmten.           |
| [Veraltetereferenz](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)           | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) ist fehlgeschlagen, weil das referenzierte [Element](/de/docs/Web/WebDriver/WebElement) nicht mehr an das DOM angehängt ist.                                                                                    |
| [Timeout](/de/docs/Web/WebDriver/Errors/Timeout)                                             | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor ihr Timeout abgelaufen ist.                                                                                                                                                                                  |
| [Cookie konnte nicht gesetzt werden](/de/docs/Web/WebDriver/Errors/UnableToSetCookie)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Command), um den Wert eines Cookies zu setzen, konnte nicht erfüllt werden.                                                                                                                                              |
| [Bildschirmaufnahme nicht möglich](/de/docs/Web/WebDriver/Errors/UnableToCaptureScreen)      | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine Bildschirmaufnahme war unmöglich.                                                                                                                                                                                                                       |
| [Unerwartet offener Alarm](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)                | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modales Dialogfeld war geöffnet und blockierte diesen Vorgang.                                                                                                                                                                                           |
| [Unbekannter Befehl](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                 | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                              |
| [Unbekannter Fehler](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                   | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat im Treiber auf, während der [Befehl](/de/docs/Web/WebDriver/Command) verarbeitet wurde.                                                                                                                                          |
| [Unbekannte Methode](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                  | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Command) entsprach einer bekannten URL, stimmte jedoch nicht mit einer Methode für diese URL überein.                                                                                                       |
| [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)           | {{HTTPStatus(500, "500 Internal Server Error")}} | Zeigt an, dass ein [Befehl](/de/docs/Web/WebDriver/Command), der ordnungsgemäß hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                          |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)

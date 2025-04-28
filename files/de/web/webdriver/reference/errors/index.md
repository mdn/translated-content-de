---
title: WebDriver-Fehler
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Jeder WebDriver-[Befehl](/de/docs/Web/WebDriver/Reference/Commands), der gesendet wird, kann plausiblerweise eine Fehler-[Antwort](/de/docs/Web/WebDriver/Reference/Response) erhalten. Ein Fehler wird durch eine [HTTP-Antwort](/de/docs/Web/HTTP) mit einem [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) im Bereich 4xx oder 5xx und einer JSON-Nutzlast dargestellt, die Details des Fehlers enthält.

## Nutzlast

Das **Fehlerobjekt** ist ein JSON-Objekt, das drei und manchmal vier Felder enthält:

- `error`
  - : Fehlertyp.
- `message`
  - : Menschlich lesbare Beschreibung des Fehlers.
- `stacktrace`
  - : Stacktrace-Bericht der aktiven Stackframes zum Zeitpunkt des Fehlers.
- `data` (optional)

  - : Beliebige und implementierungsspezifische Daten, die nützlich sein können, um dem Benutzer angezeigt zu werden.

    Viele Treiber fügen den Text der [Benutzeraufforderung](/de/docs/Web/API/Window/alert) hinzu, wenn sie auf einen Fehler vom Typ [unerwarteter geöffneter Alarm](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) stoßen.

## Beispiel

Beispielsweise würde ein [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) Anfrage an `/session/1234/url`, wobei `1234` eine falsche Sitzung ist, eine Antwort mit dem {{HTTPStatus(404, "404 Not Found")}} Status und folgendem Inhalt zurückgeben:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

Es ist optional für den Treiber, Fehler mit zusätzlichen Fehlerdaten zu annotieren. Insbesondere ist dies üblich, wenn eine Benutzeraufforderung, wie etwa `window.alert`, nach der Ausführung Ihrer vorherigen WebDriver-Befehlsanfrage einen modalen Dialog geöffnet hat.

Da sowohl WebDriver als auch die JavaScript-Ausführung durch einen solchen Dialog gestoppt werden, sehen wir einen [unerwarteten offenen Alarm](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) Fehler in der nachfolgenden Antwort:

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

In den meisten [Clients](/de/docs/Web/WebDriver/Reference/Clients) würde der Fehler durch eine Art Fehlertyp oder Objektrepräsentation dargestellt werden. In Python wird er als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html), in Node.js als [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html) und in Java ebenfalls als [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html) dargestellt.

## Fehlerübersichtstabelle

| Fehlertyp                                                                                               | HTTP-Statuscode                                  | Beschreibung                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Elementklick abgefangen](/de/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted)              | {{HTTPStatus(400, "400 Bad Request")}}           | Der [Element-Klick](/de/docs/Web/WebDriver/Reference/ElementClick) [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, da das [Element](/de/docs/Web/WebDriver/Reference/WebElement), das die Events empfängt, das angeforderte angeklickte Element verdeckt.     |
| [Element nicht interagierbar](/de/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)           | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, da das Element weder zeiger- noch tastaturinteragierbar ist.                                                                                                                                              |
| [unsicheres Zertifikat](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)                    | {{HTTPStatus(400, "400 Bad Request")}}           | Die Navigation führte dazu, dass der Benutzeragent auf eine Zertifikatwarnung stieß, was normalerweise die Folge eines abgelaufenen oder ungültigen TLS-Zertifikats ist.                                                                                                                         |
| [ungültiges Argument](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                          | {{HTTPStatus(400, "400 Bad Request")}}           | Die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Command) übergebenen Argumente sind entweder ungültig oder fehlerhaft.                                                                                                                                                                    |
| [ungültige Cookie-Domain](/de/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)                  | {{HTTPStatus(400, "400 Bad Request")}}           | Ein illegaler Versuch wurde unternommen, ein Cookie unter einer anderen Domain als der aktuellen Seite zu setzen.                                                                                                                                                                                |
| [ungültiger Elementzustand](/de/docs/Web/WebDriver/Reference/Errors/InvalidElementState)                | {{HTTPStatus(400, "400 Bad Request")}}           | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, da das Element in einem ungültigen Zustand ist, z.B. beim Versuch, ein [Clear](/de/docs/Web/WebDriver/Reference/ElementClear) Element zu löschen, das nicht sowohl editierbar als auch zurücksetzbar ist. |
| [ungültiger Selektor](/de/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                          | {{HTTPStatus(400, "400 Bad Request")}}           | Ein Element-Abrufbefehlt wendete eine unbekannte Selektorstrategie an.                                                                                                                                                                                                                           |
| [ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)                       | {{HTTPStatus(404, "404 Not Found")}}             | Die angegebene Sitzungs-ID wird nicht erkannt, d.h. die Sitzung existiert entweder nicht oder sie ist nicht aktiv. Beachten Sie, dass eine [gelöschte Sitzung](/de/docs/Web/WebDriver/Reference/DeleteSession) nicht wiederverwendet werden kann.                                               |
| [JavaScript-Fehler](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                            | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein Fehler trat beim Ausführen des vom Benutzer bereitgestellten JavaScripts auf.                                                                                                                                                                                                                |
| [Ziel außerhalb der Grenzen verschieben](/de/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds) | {{HTTPStatus(500, "500 Internal Server Error")}} | Das Ziel für die Mausinteraktion befindet sich nicht im Ansichtsfenster des Browsers und kann nicht in dieses Ansichtsfenster gebracht werden.                                                                                                                                                   |
| [kein solches Alarm](/de/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                               | {{HTTPStatus(404, "404 Not Found")}}             | Ein Versuch wurde unternommen, auf eine Benutzeraufforderung zuzugreifen, wenn keine geöffnet war.                                                                                                                                                                                               |
| [kein solches Cookie](/de/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                             | {{HTTPStatus(404, "404 Not Found")}}             | Kein Cookie, das mit dem gegebenen Pfadnamen übereinstimmt, wurde unter den {{Glossary("Cookie", "Cookies")}} des aktuellen [Dokuments](/de/docs/Web/API/Document) gefunden.                                                                                                                     |
| [kein solches Element](/de/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                           | {{HTTPStatus(404, "404 Not Found")}}             | Ein Element konnte auf der Seite nicht mit den angegebenen Suchparametern gefunden werden.                                                                                                                                                                                                       |
| [kein solcher Rahmen](/de/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                              | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Rahmen zu wechseln, konnte nicht erfüllt werden, weil der Rahmen nicht gefunden werden konnte.                                                                                                                               |
| [kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                            | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um zu einem Fenster zu wechseln, konnte nicht erfüllt werden, weil das Fenster nicht gefunden werden konnte.                                                                                                                             |
| [Skript-Timeout](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                                 | {{HTTPStatus(408, "408 Request Timeout")}}       | Ein Skript wurde nicht ausgeführt, bevor sein Timeout abgelaufen ist.                                                                                                                                                                                                                            |
| [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)                     | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine neue Sitzung konnte nicht erstellt werden, entweder weil der Browser nicht gestartet werden konnte oder weil die angegebenen [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities) für den Start der Sitzung nicht übereinstimmten.                                                  |
| [veraltete Elementreferenz](/de/docs/Web/WebDriver/Reference/Errors/StaleElementReference)              | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) schlug fehl, weil das referenzierte [Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr im DOM angehängt ist.                                                                                                               |
| [Timeout](/de/docs/Web/WebDriver/Reference/Errors/Timeout)                                              | {{HTTPStatus(408, "408 Request Timeout")}}       | Eine Operation wurde nicht abgeschlossen, bevor das Timeout abgelaufen ist.                                                                                                                                                                                                                      |
| [nicht in der Lage, Cookie zu setzen](/de/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), um den Wert eines Cookies zu setzen, konnte nicht erfüllt werden.                                                                                                                                                                        |
| [Bildschirm konnte nicht erfasst werden](/de/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen) | {{HTTPStatus(500, "500 Internal Server Error")}} | Eine Bildschirmaufnahme war nicht möglich.                                                                                                                                                                                                                                                       |
| [unerwartetes offenes Alarm](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)               | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein modaler Dialog war geöffnet und blockierte diese Operation.                                                                                                                                                                                                                                  |
| [unbekannter Befehl](/de/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                            | {{HTTPStatus(404, "404 Not Found")}}             | Ein [Befehl](/de/docs/Web/WebDriver/Reference/Command) konnte nicht ausgeführt werden, weil der Treiber ihn nicht kannte.                                                                                                                                                                        |
| [unbekannter Fehler](/de/docs/Web/WebDriver/Reference/Errors/UnknownError)                              | {{HTTPStatus(500, "500 Internal Server Error")}} | Ein unbekannter Fehler trat im Treiber auf, während er den [Befehl](/de/docs/Web/WebDriver/Reference/Command) verarbeitete.                                                                                                                                                                      |
| [unbekannte Methode](/de/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                             | {{HTTPStatus(405, "405 Method Not Allowed")}}    | Der angeforderte [Befehl](/de/docs/Web/WebDriver/Reference/Command) passte zu einer bekannten URL, aber nicht zu einer Methode für diese URL.                                                                                                                                                    |
| [nicht unterstützte Operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)            | {{HTTPStatus(500, "500 Internal Server Error")}} | Gibt an, dass ein [Befehl](/de/docs/Web/WebDriver/Reference/Command), der ordnungsgemäß hätte ausgeführt werden sollen, aus irgendeinem Grund nicht unterstützt werden kann.                                                                                                                     |

## Siehe auch

- [WebDriver-Antworten](/de/docs/Web/WebDriver/Reference/Response)
- [WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)

---
title: Get Window Rect
slug: Web/WebDriver/Reference/Commands/GetWindowRect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der Befehl _Get Window Rect_ der [WebDriver](/de/docs/Web/WebDriver) API gibt die Größe und Position des angegebenen [`WebElement`](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Viele [WebDriver-Clients](/de/docs/Web/WebDriver/Reference/Clients) bieten separate API-Methoden zur Abfrage der Position und der Abmessungen eines Elements, verwenden jedoch beide aus Optimierungsgründen diesen primitiven Befehl.

Der Befehl operiert auf dem aktuell ausgewählten Fenster und gibt Größe und Position des Betriebssystemfensters zurück. Das zurückgegebene [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) kann als Eingabe für den [Set Window Rect](/de/docs/Web/WebDriver/Reference/SetWindowRect) Befehl verwendet werden, der zur Manipulation der Position und der Abmessungen eines Fensters dient.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwort-Payload ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontale Position des mit [`window`](/de/docs/Web/API/Window) assoziierten Betriebssystemfensters, entspricht [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des mit [`window`](/de/docs/Web/API/Window) assoziierten Betriebssystemfensters, entspricht [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Begrenzungen des mit [`window`](/de/docs/Web/API/Window) assoziierten Betriebssystemfensters, entspricht [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Begrenzungen des mit [`window`](/de/docs/Web/API/Window) assoziierten Betriebssystemfensters, entspricht [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unexpected alert open](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie etwa [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebWindow
- Zugehörige Befehle:
  - [Set Window Rect](/de/docs/Web/WebDriver/Reference/Commands/SetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)

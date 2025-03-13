---
title: Get Window Rect
slug: Web/WebDriver/Reference/Commands/GetWindowRect
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Der _Get Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Größe und Position des angegebenen [`WebElement`](/de/docs/Web/WebDriver/WebElement) zurück. Viele [WebDriver-Clients](/de/docs/Web/WebDriver/Clients) bieten separate API-Methoden zum Abrufen des Standorts und der Abmessungen eines Elements an, verwenden jedoch als Optimierung beide diesen primitiven Befehl.

Der Befehl arbeitet am derzeit ausgewählten Fenster und gibt die Größe und Position des Betriebssystemfensters zurück. Das zurückgegebene [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) kann als Eingabe für den [Set Window Rect](/de/docs/Web/WebDriver/SetWindowRect) Befehl verwendet werden, der zur Manipulation der Position und Abmessungen eines Fensters dient.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwort enthält ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, entsprechend [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, entsprechend [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, entsprechend [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, entsprechend [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwarteter geöffneter Alarm](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebWindow
- Zugehörige Befehle:

  - [Set Window Rect](/de/docs/Web/WebDriver/Reference/Commands/SetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)

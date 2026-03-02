---
title: Get Window Rect
slug: Web/WebDriver/Reference/Classic/Commands/GetWindowRect
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Get Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Größe und Position des angegebenen [`WebElement`](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Viele [WebDriver-Clients](/de/docs/Web/WebDriver/Reference/Clients) bieten separate API-Methoden zum Abrufen des Standorts und der Dimensionen eines Elements an, nutzen jedoch zur Optimierung beide dieses Primitive.

Der Befehl arbeitet mit dem aktuell ausgewählten Fenster und gibt die Größe und Position des Betriebssystemfensters zurück. Das zurückgegebene [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) kann als Eingabe für den Befehl [Set Window Rect](/de/docs/Web/WebDriver/Reference/SetWindowRect) verwendet werden, welcher zur Manipulation der Position und Dimensionen eines Fensters dient.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, äquivalent zu [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, äquivalent zu [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Begrenzungen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, äquivalent zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Begrenzungen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, äquivalent zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwarteter Alert geöffnet](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z. B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebWindow
- Zugehörige Befehle:
  - [Set Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow)

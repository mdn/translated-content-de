---
title: Get Window Rect
slug: Web/WebDriver/Commands/GetWindowRect
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Window Rect_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Größe und Position des angegebenen [`WebElement`](/de/docs/Web/WebDriver/WebElement) zurück. Viele [WebDriver-Clients](/de/docs/Web/WebDriver/Clients) bieten separate API-Methoden an, um den Standort und die Abmessungen eines Elements zu erhalten, aber zur Optimierung verwenden sie beide diesen primitiven Befehl.

Der Befehl arbeitet auf dem aktuell ausgewählten Fenster und gibt die Größe und Position des Betriebssystemfensters zurück. Der zurückgegebene [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) kann als Eingabe für den [Set Window Rect](/de/docs/Web/WebDriver/SetWindowRect) Befehl verwendet werden, der zur Manipulation der Position und Abmessungen eines Fensters dient.

## Syntax

| Methode                                | URI-Vorlage                         |
| -------------------------------------- | ----------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Antwort

Die Antwort-Nutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des mit [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des mit [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Grenzen des mit [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Grenzen des mit [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwartetes offenes Fenster](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis damit umgegangen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebWindow
- Zugehörige Befehle:

  - [Set Window Rect](/de/docs/Web/WebDriver/Commands/SetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Commands/CloseWindow)

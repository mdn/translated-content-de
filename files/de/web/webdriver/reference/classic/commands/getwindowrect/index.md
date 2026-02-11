---
title: Get Window Rect
slug: Web/WebDriver/Reference/Classic/Commands/GetWindowRect
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Get Window Rect_-[Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Größe und Position des angegebenen [`WebElement`](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Viele [WebDriver-Clients](/de/docs/Web/WebDriver/Reference/Clients) bieten separate API-Methoden zum Abrufen von Position und Abmessungen eines Elements an, aber als Optimierung verwenden beide diesen primitiven Befehl.

Der Befehl arbeitet auf dem aktuell ausgewählten Fenster und gibt die Größe und Position des Betriebssystemfensters zurück. Das zurückgegebene [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) kann als Eingabe für den [Set Window Rect](/de/docs/Web/WebDriver/Reference/SetWindowRect)-Befehl verwendet werden, der dazu dient, die Position und Abmessungen eines Fensters zu manipulieren.

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
  - : Horizontale Position des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Begrenzungen des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Begrenzungen des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerhinweis, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er behandelt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebWindow
- Verwandte Befehle:
  - [Set Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow)

---
title: Get Window Rect
slug: Web/WebDriver/Reference/Commands/GetWindowRect
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der Befehl _Get Window Rect_ des [WebDriver](/de/docs/Web/WebDriver) API gibt die Größe und Position des angegebenen [`WebElement`](/de/docs/Web/WebDriver/WebElement) zurück. Viele [WebDriver-Clients](/de/docs/Web/WebDriver/Clients) bieten separate API-Methoden zum Abrufen des Standorts und der Abmessungen eines Elements an, verwenden jedoch zur Optimierung beide dieses primitive Kommando.

Der Befehl arbeitet mit dem aktuell ausgewählten Fenster und gibt die Größe und Position des Betriebssystemfensters zurück. Das zurückgegebene [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) kann als Eingabe für den Befehl [Set Window Rect](/de/docs/Web/WebDriver/SetWindowRect) verwendet werden, der zur Manipulation der Position und Abmessungen eines Fensters dient.

## Syntax

| Methode                                | URI-Vorlage                         |
| -------------------------------------- | ----------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, entspricht [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, entspricht [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, entspricht [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, entspricht [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwartete Alarmmeldung geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

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

---
title: Get Window Rect
slug: Web/WebDriver/Reference/Commands/GetWindowRect
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Get Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Größe und Position des angegebenen [`WebElement`](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Viele [WebDriver-Clients](/de/docs/Web/WebDriver/Reference/Clients) bieten separate API-Methoden zum Abrufen des Standorts und der Abmessungen eines Elements an, aber als Optimierung verwenden sie beide diesen grundlegenden Befehl.

Der Befehl operiert auf dem aktuell ausgewählten Fenster und gibt die Größe und Position des Betriebssystemfensters zurück. Das zurückgegebene [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) kann als Eingabe für den [Set Window Rect](/de/docs/Web/WebDriver/Reference/SetWindowRect)-Befehl verwendet werden, der zum Ändern der Position und der Abmessungen eines Fensters dient.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

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
- [Unerwartetes geöffnetes Fenster](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerhinweis, wie beispielsweise [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er bearbeitet wird.

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

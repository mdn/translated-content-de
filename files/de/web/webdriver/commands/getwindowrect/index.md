---
title: Fenster-Rechteck abrufen
slug: Web/WebDriver/Commands/GetWindowRect
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der Befehl _Fenster-Rechteck abrufen_ der [WebDriver](/de/docs/Web/WebDriver) API gibt die Größe und Position des angegebenen [`WebElement`](/de/docs/Web/WebDriver/WebElement) zurück. Viele [WebDriver-Clients](/de/docs/Web/WebDriver/Clients) bieten separate API-Methoden zum Abrufen des Standorts und der Dimensionen eines Elements an, verwenden jedoch zur Optimierung beide diesen primitiven Befehl.

Der Befehl arbeitet mit dem aktuell ausgewählten Fenster und gibt die Größe und Position des Betriebssystemfensters zurück. Das zurückgegebene [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) kann als Eingabe für den [Fenster-Rechteck setzen](/de/docs/Web/WebDriver/SetWindowRect) Befehl verwendet werden, der zum Manipulieren der Position und Dimensionen eines Fensters dient.

## Syntax

| Methode                                   | URI-Vorlage                         |
| ----------------------------------------- | ----------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwort enthält ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Begrenzung des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Begrenzung des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, entspricht [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebWindow
- Zugehörige Befehle:

  - [Fenster-Rechteck setzen](/de/docs/Web/WebDriver/Commands/SetWindowRect)
  - [Fenstergriff abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Fenstergriffe abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandles)
  - [Fenster schließen](/de/docs/Web/WebDriver/Commands/CloseWindow)

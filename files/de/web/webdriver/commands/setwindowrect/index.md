---
title: Fenster-Rechteck setzen
slug: Web/WebDriver/Commands/SetWindowRect
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/commands")}}

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verknüpft ist. Der Befehl fungiert als Setter von [Get Window Rect](/de/docs/Web/WebDriver/Commands/GetWindowRect), dessen Rückgabeobjekt direkt als Nutzlast für diesen Befehl übergeben werden kann.

Bestimmte Gerätekonfigurationen unterstützen das Setzen der Fensterabmessungen oder -position nicht. In diesen Fällen wird der Befehl einen [nicht unterstützten Vorgang](/de/docs/Web/WebDriver/Errors/UnsupportedOperation) Fehler zurückgeben. Um Situationen zu vermeiden, in denen dieser Befehl möglicherweise einen Fehler auslöst, kann er bedingt aufgerufen werden, wenn die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Das Setzen des Fensterrechtecks erfordert `x`, `y`, `width` und `height` als Eingaben. Alle Felder sind optional, d.h. der Befehl kann mit einem leeren Objekt aufgerufen werden und wird in diesem Fall als No-Op fungieren. Um die Position zu setzen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` erforderlich, um die Abmessungen des Fensters zu ändern.

Beim Einstellen von Breite oder Höhe ist es nicht garantiert, dass die resultierende Fenstergröße exakt der angeforderten Größe entspricht. Der Treiber wird erwartet, Werte zu begrenzen, die größer als die physischen Bildschirmdimensionen oder kleiner als die Mindestfenstergröße sind. Einige Treiber können auch andere Einschränkungen haben, wie z.B. das Unvermögen, in Ein-Pixel-Schritten zu ändern. Aus diesem Grund können die zurückgegebenen `width` und `height` nicht exakt mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) übereinstimmen.

Das Setzen der Fensterposition ähnelt dem Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch durch das Umgehen von Sicherheitsbeschränkungen im Zusammenhang mit der Fensterverwaltung.

Der Befehlt Set Window Rect blockiert.

## Syntax

| Methode                                | URI-Vorlage                         |
| -------------------------------------- | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Objekt:

- `x`

  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), die gleichwertig zu [`Window.screenX`](/de/docs/Web/API/Window/screenX) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefined sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), die gleichwertig zu [`Window.screenY`](/de/docs/Web/API/Window/screenY) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefined sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), die gleichwertig zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefined sein.
- `height`
  - : Äußere Höhe des [`window`](/de/docs/Web/API/Window), die gleichwertig zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefined sein.

### Antwort

Die Antwortnutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, gleichwertig zu [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, gleichwertig zu [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, gleichwertig zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, gleichwertig zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Nutzlastobjekt nicht den Typ- oder Grenzbeschränkungen entspricht oder wenn nur eines der Felder `x`/`y` oder `width`/`height` angegeben ist.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)

  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise auf mobilen Geräten der Fall, bei denen der Browser eine festgelegte Dimension hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) überprüfen, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/WebWindow) Objekt
- Zugehörige Befehle:

  - [Get Window Rect](/de/docs/Web/WebDriver/Commands/GetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Commands/CloseWindow)

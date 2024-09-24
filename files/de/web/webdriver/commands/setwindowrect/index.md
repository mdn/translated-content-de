---
title: Fensterrechteck setzen
slug: Web/WebDriver/Commands/SetWindowRect
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/commands")}}

Der _Fensterrechteck setzen_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das dem aktuellen [`window`](/de/docs/Web/API/Window) zugeordnet ist. Der Befehl fungiert als Setter für [Fensterrechteck abrufen](/de/docs/Web/WebDriver/Commands/GetWindowRect), dessen Rückgabeobjekt Sie direkt als Payload für diesen Befehl verwenden können.

Bestimmte Gerätegruppen unterstützen das Setzen der Fensterabmessungen oder deren Position nicht. In diesen Konfigurationen gibt der Befehl einen [nicht unterstützten Betrieb](/de/docs/Web/WebDriver/Errors/UnsupportedOperation) Fehler zurück. Um Situationen zu vermeiden, in denen dieser Aufruf zu einem Fehler führt, kann es bedingt erfolgen, ob die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Beim Setzen des Fensterrechtecks werden `x`, `y`, `width` und `height` als Eingabe verwendet. Alle Felder sind optional, d.h. der Befehl kann mit einem leeren Objekt aufgerufen werden und wirkt dann als No-Op. Um die Position zu setzen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind `width` und `height` erforderlich, um die Fenstergröße zu ändern.

Beim Setzen der Breite oder Höhe ist es nicht garantiert, dass die resultierende Fenstergröße genau der gewünschten entspricht. Der Treiber soll Werte begrenzen, die größer sind als die physischen Bildschirmabmessungen oder kleiner als die Mindestfenstergröße. Einige Treiber können auch andere Einschränkungen haben, wie z.B. das Unvermögen, in Ein-Pixel-Schritten zu skalieren. Aus diesem Grund könnten die zurückgegebenen `width` und `height` nicht exakt mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) übereinstimmen.

Das Setzen der Fensterposition ähnelt dem Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch durch das Umgehen von Sicherheitsbeschränkungen im Zusammenhang mit der Fensterverwaltung.

Der Befehl Fensterrechteck setzen ist blockierend.

## Syntax

| Methode                                   | URI-Vorlage                         |
| ----------------------------------------- | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Payload

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Objekt:

- `x`

  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), was dem [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), was dem [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was dem [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.
- `height`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was dem [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.

### Antwort

Die Antwort-Payload ist ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, äquivalent zu [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, äquivalent zu [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, äquivalent zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, äquivalent zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Payload-Objekt nicht die Typ- oder Begrenzungseinschränkungen erfüllt, oder wenn nur eines der `x`/`y` oder `width`/`height` Felder angegeben wird.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes Warnungsfenster geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerdialog, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)

  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei mobilen Geräten der Fall, bei denen der Browser feste Abmessungen hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) inspizieren, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/WebWindow) Objekt
- Zugehörige Befehle:

  - [Fensterrechteck abrufen](/de/docs/Web/WebDriver/Commands/GetWindowRect)
  - [Fenster-Handle abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Fenster-Handles abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandles)
  - [Fenster schließen](/de/docs/Web/WebDriver/Commands/CloseWindow)

---
title: Set Window Rect
slug: Web/WebDriver/Reference/Commands/SetWindowRect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verknüpft ist. Der Befehl fungiert als Setter von [Get Window Rect](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect), dessen Rückgabeobjekt Sie direkt als Nutzlast dieses Befehls verwenden können.

Bestimmte Gerätegruppen unterstützen das Festlegen der Fensterabmessungen oder -positionen nicht. In diesen Konfigurationen gibt der Befehl einen [unsupported operating](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation) Fehler zurück. Um Situationen zu vermeiden, in denen dieser Befehl zu einem Fehler führen könnte, kann er bedingt aufgerufen werden, wenn die [`setWindowRect`-Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Das Festlegen des Fenster-Rechtecks nimmt `x`, `y`, `width` und `height` als Eingabe. Alle Felder sind optional, z.B. kann der Befehl mit einem leeren Objekt aufgerufen werden, in diesem Fall wird er als No-Op fungieren. Um die Position festzulegen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` erforderlich, um die Dimensionen des Fensters zu ändern.

Beim Festlegen der Breite oder Höhe ist es nicht garantiert, dass die resultierende Fenstergröße genau der gewünschten Größe entspricht. Der Treiber wird voraussichtlich Werte klemmen, die größer als die physischen Bildschirmabmessungen oder kleiner als die Mindestfenstergröße sind. Einige Treiber haben möglicherweise auch andere Einschränkungen, wie z. B. das Nichtverkleinern in Einzelpixel-Schritten. Aus diesem Grund könnten die zurückgegebenen `width` und `height` nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) übereinstimmen.

Das Festlegen der Fensterposition ähnelt vom Charakter her dem Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch, indem es Sicherheitsbeschränkungen im Zusammenhang mit der Fensterverwaltung umgeht.

Der Set Window Rect-Befehl ist blockierend.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) Objekt:

- `x`
  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), die [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht. Muss eine Zahl im Bereich −(2^31) bis 2^31 − 1 sein, null oder undefined.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), die [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht. Muss eine Zahl im Bereich −(2^31) bis 2^31 − 1 sein, null oder undefined.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht. Muss eine Zahl im Bereich 0 bis 2^31 − 1 sein, null oder undefined.
- `height`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), die [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht. Muss eine Zahl im Bereich 0 bis 2^31 − 1 sein, null oder undefined.

### Antwort

Die Antwort-Nutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystem-Fensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, entspricht [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystem-Fensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, entspricht [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Begrenzungen des Betriebssystem-Fensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, entspricht [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Begrenzungen des Betriebssystem-Fensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, entspricht [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) Nutzlast-Objekt die Typ- oder Grenzvorschriften nicht erfüllt oder wenn nur eines der `x`/`y` Paare oder `width`/`height` Paar-Felder angegeben ist.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes Alert-Fenster geöffnet](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei mobilen Geräten der Fall, bei denen der Browser eine feste Dimension hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect`-Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) prüfen, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow) Objekt
- Zugehörige Befehle:
  - [Get Window Rect](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)

---
title: Fensterrechteck festlegen
slug: Web/WebDriver/Reference/Classic/Commands/SetWindowRect
l10n:
  sourceCommit: 865686a652cb8dc4e9522e23399896e6373bfc19
---

Der Befehl _Set Window Rect_ der [WebDriver](/de/docs/Web/WebDriver)-API [command](/de/docs/Web/WebDriver/Reference/Classic/Commands) ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verknüpft ist. Der Befehl fungiert als Setter von [Get Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowRect), dessen Rückgabeobjekt Sie direkt als Payload dieses Befehls übergeben können.

Bestimmte Gerätegruppen unterstützen das Festlegen der Fensterabmessungen oder seiner Position nicht. In diesen Konfigurationen gibt der Befehl einen Fehler [`unsupported operation`](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation) zurück. Um Situationen zu vermeiden, in denen dieser Aufruf einen Fehler verursachen könnte, können Sie ihn bedingt ausführen, je nachdem, ob die [Capability `setWindowRect`](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) für die Sitzung auf „true“ gesetzt ist.

Das Festlegen des Fensterrechtecks akzeptiert `x`, `y`, `width` und `height` als Eingabe. Alle Felder sind optional; beispielsweise kann der Befehl mit einem leeren Objekt aufgerufen werden und wirkt in diesem Fall als No-Op. Zum Festlegen der Position sind sowohl `x` als auch `y` erforderlich; entsprechend sind sowohl `width` als auch `height` erforderlich, um die Fensterabmessungen zu ändern.

Beim Festlegen der Breite oder Höhe wird nicht garantiert, dass die resultierende Fenstergröße exakt der angeforderten Größe entspricht. Der Driver soll Werte begrenzen, die größer als die physischen Bildschirmabmessungen oder kleiner als die minimale Fenstergröße sind. Einige Driver können außerdem weitere Einschränkungen haben, etwa dass sie die Größe nicht in Ein-Pixel-Schritten ändern können. Daher stimmen die zurückgegebenen Werte für `width` und `height` möglicherweise nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) überein.

Das Festlegen der Fensterposition ähnelt dem Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass Sicherheitsbeschränkungen in Bezug auf Fenstermanipulationen umgangen werden.

Der Befehl Set Window Rect ist blockierend.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Payload

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect)-Objekt:

- `x`
  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), die [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefined sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), die [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefined sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefined sein.
- `height`
  - : Äußere Höhe des [`window`](/de/docs/Web/API/Window), die [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefined sein.

### Antwort

Der Payload der Antwort ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist; entspricht [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist; entspricht [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Begrenzungen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist; entspricht [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Begrenzungen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist; entspricht [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wenn eines der Felder im Payload-Objekt [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) die Typ- oder Bereichsbeschränkungen nicht erfüllt oder wenn nur eines der Feldpaare `x`/`y` oder `width`/`height` angegeben ist.
- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [`no such window`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, etwa [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wurde.
- [`unsupported operation`](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Wenn der Driver das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei Mobilgeräten der Fall, bei denen der Browser feste Abmessungen hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [Capability `setWindowRect`](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) prüfen, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow)-Objekt
- Zugehörige Befehle:
  - [Get Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow)

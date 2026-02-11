---
title: Set Window Rect
slug: Web/WebDriver/Reference/Classic/Commands/SetWindowRect
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verbunden ist. Der Befehl fungiert als Setter für [Get Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowRect), dessen Rückgabeobjekt direkt als Nutzlast für diesen Befehl verwendet werden kann.

Bestimmte Gerätetypen unterstützen das Setzen der Fensterabmessungen oder -position nicht. In diesen Fällen wird der Befehl einen [unsupported operating](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation) Fehler zurückgeben. Um zu vermeiden, dass dieser Befehl einen Fehler verursacht, kann er bedingt aufgerufen werden, wenn die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Das Setzen des Fensterrechtecks erfordert `x`, `y`, `width` und `height` als Eingaben. Alle Felder sind optional, z.B. kann der Befehl mit einem leeren Objekt aufgerufen werden, wobei er in diesem Fall keine Wirkung hat. Um die Position festzulegen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` notwendig, um die Fensterabmessungen zu ändern.

Beim Einstellen der Breite oder Höhe ist nicht garantiert, dass die resultierende Fenstergröße genau der angeforderten entspricht. Der Treiber sollte Werte, die über den physischen Bildschirmabmessungen liegen, einschränken, oder die kleiner als die Mindestfenstergröße sind. Einige Treiber können auch andere Einschränkungen wie das nicht-Resize in einzelnen Pixelinkrementen haben. Aus diesem Grund könnten die zurückgegebenen `width` und `height` nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) übereinstimmen.

Das Einstellen der Fensterposition ähnelt dem Aufrufen von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass Sicherheitsbeschränkungen im Zusammenhang mit der Fenstermanipulation umgangen werden.

Der Befehl Set Window Rect ist blockierend.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Identifikator der Sitzung.

### Nutzlast

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) Objekt:

- `x`
  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), was dem [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null, oder undefiniert sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), was dem [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null, oder undefiniert sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was dem [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null, oder undefiniert sein.
- `height`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was dem [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null, oder undefiniert sein.

### Antwort

Die Antwortnutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, was dem [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht.
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, was dem [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht.
- `width`
  - : Breite der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, was dem [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht.
- `height`
  - : Höhe der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verbunden ist, was dem [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht.

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) Nutzlastobjekt nicht den Typ- oder Bereichsbeschränkungen entspricht oder wenn nur eines der Felder `x`/`y`-Paar oder `width`/`height`-Paar angegeben ist.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes geöffnetes Fenster](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerprompt, wie zum Beispiel [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Wenn der Treiber nicht unterstützt, die Größe oder Position des Fensters zu ändern. Dies ist normalerweise bei mobilen Geräten der Fall, bei denen der Browser eine feste Dimension hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) überprüfen, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow) Objekt
- Zugehörige Befehle:
  - [Get Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow)

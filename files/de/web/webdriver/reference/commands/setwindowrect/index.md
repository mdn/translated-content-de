---
title: Set Window Rect
slug: Web/WebDriver/Reference/Commands/SetWindowRect
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des mit dem aktuellen [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters. Der Befehl fungiert als Setter des [Get Window Rect](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect), dessen Rückgabeobjekt direkt als Nutzdaten für diesen Befehl verwendet werden kann.

Bestimmte Gerätegruppen unterstützen nicht das Setzen der Fensterabmessungen oder deren Position. In diesen Konfigurationen gibt der Befehl einen [unsupported operating](/de/docs/Web/WebDriver/Errors/UnsupportedOperation) Fehler zurück. Um Situationen zu vermeiden, in denen dieser Befehl zu einem Fehler führen könnte, ist es möglich, ihn bedingt aufzurufen, wenn die [`setWindowRect`-Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Das Setzen des Fensterrechtecks benötigt `x`, `y`, `width` und `height` als Eingaben. Alle Felder sind optional, z.B. kann der Befehl mit einem leeren Objekt aufgerufen werden, was in diesem Fall als No-Op fungiert. Um die Position zu setzen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` erforderlich, um die Abmessungen des Fensters zu ändern.

Beim Setzen der Breite oder Höhe ist nicht garantiert, dass die resultierende Fenstergröße genau der gewünschten entspricht. Der Treiber soll Werte klemmen, die größer sind als die physischen Bildschirmabmessungen oder kleiner als die Mindestgröße des Fensters. Einige Treiber können auch andere Einschränkungen haben, wie z.B. das nicht in Einzelpixel-Schritten verkleinern zu können. Aus diesem Grund könnten die zurückgegebenen `width` und `height` nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) übereinstimmen.

Das Setzen der Fensterposition ist ähnlich dem Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass Sicherheitsbeschränkungen in Bezug auf die Fensterbearbeitung umgangen werden.

Der Befehl Set Window Rect ist blockierend.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Nutzdaten

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Objekt:

- `x`

  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), was gleichwertig mit [`Window.screenX`](/de/docs/Web/API/Window/screenX) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), was gleichwertig mit [`Window.screenY`](/de/docs/Web/API/Window/screenY) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was gleichwertig mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.
- `height`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was gleichwertig mit [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.

### Antwort

Die Antwortnutzdaten sind ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des mit [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, was gleichwertig mit [`Window.screenX`](/de/docs/Web/API/Window/screenX) ist.
- `y`
  - : Vertikale Position des mit [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, was gleichwertig mit [`Window.screenY`](/de/docs/Web/API/Window/screenY) ist.
- `width`
  - : Breite der äußeren Grenzen des mit [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, was gleichwertig mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist.
- `height`
  - : Höhe der äußeren Grenzen des mit [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, was gleichwertig mit [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) ist.

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Nutzdatenobjekt nicht die Typ- oder Bereichseinschränkungen erfüllt oder wenn nur eines der `x`/`y` Paar- oder `width`/`height` Paarfelder angegeben ist.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie verarbeitet wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)

  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist in der Regel bei mobilen Geräten der Fall, bei denen der Browser eine feste Größe hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect`-Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) untersuchen, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/WebWindow) Objekt
- Zugehörige Befehle:

  - [Get Window Rect](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)

---
title: Set Window Rect
slug: Web/WebDriver/Commands/SetWindowRect
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/commands")}}

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verbunden ist. Der Befehl fungiert als Setter von [Get Window Rect](/de/docs/Web/WebDriver/Commands/GetWindowRect), dessen Ergebnisobjekt direkt als Nutzlast dieses Befehls übergeben werden kann.

Bestimmte Gerätegruppen unterstützen nicht das Setzen von Fenstermaßen oder deren Position. Auf diesen Konfigurationen gibt der Befehl einen [unsupported operating](/de/docs/Web/WebDriver/Errors/UnsupportedOperation) Fehler zurück. Um Situationen zu vermeiden, in denen dies zu einem Fehler führt, kann der Befehl bedingt aufgerufen werden, wenn die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Das Festlegen des Fensterbereichs erfolgt durch die Eingaben `x`, `y`, `width` und `height`. Alle Felder sind optional, z.B. kann der Befehl mit einem leeren Objekt aufgerufen werden, und in diesem Fall wird er als No-Op fungieren. Um die Position festzulegen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` erforderlich, um die Dimensionen des Fensters zu ändern.

Beim Festlegen der Breite oder Höhe wird nicht garantiert, dass die resultierende Fenstergröße genau dem entspricht, was angefordert wurde. Der Treiber wird erwartet, Werte zu klemmen, die größer als die physischen Bildschirmabmessungen oder kleiner als die minimale Fenstergröße sind. Einige Treiber haben möglicherweise auch andere Einschränkungen, wie die Unfähigkeit, in Einzelpixel-Schritten zu skalieren. Aus diesem Grund stimmen der zurückgegebene `width` und `height` möglicherweise nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) überein.

Das Festlegen der Fensterposition ist ähnlich wie der Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass Sicherheitsbeschränkungen im Zusammenhang mit der Fensterbearbeitung umgangen werden.

Der Set Window Rect Befehl ist blockierend.

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

  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), die äquivalent zu [`Window.screenX`](/de/docs/Web/API/Window/screenX) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null, oder undefiniert sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), die äquivalent zu [`Window.screenY`](/de/docs/Web/API/Window/screenY) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null, oder undefiniert sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), die äquivalent zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null, oder undefiniert sein.
- `height`
  - : Äußere Höhe des [`window`](/de/docs/Web/API/Window), die äquivalent zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null, oder undefiniert sein.

### Antwort

Die Nutzlast der Antwort ist ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, äquivalent zu [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, äquivalent zu [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Grenzen des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, äquivalent zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Grenzen des mit dem [`window`](/de/docs/Web/API/Window) verbundenen Betriebssystemfensters, äquivalent zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Nutzlast-Objekt nicht den Typ- oder Bereichsbeschränkungen entspricht oder nur eines der `x`/`y`-Paare oder `width`/`height`-Felder angegeben wird.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes Warnungsfenster geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerprompt, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis es bearbeitet wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)

  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei mobilen Geräten der Fall, bei denen der Browser feste Abmessungen hat und nicht auf dem Bildschirm bewegt werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) inspizieren, um zu überprüfen, ob das Gerät diesen Befehl unterstützt.

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

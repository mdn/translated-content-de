---
title: Fensterrechteck setzen
slug: Web/WebDriver/Reference/Commands/SetWindowRect
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verknüpft ist. Der Befehl fungiert als Setter für [Get Window Rect](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect), dessen Rückgabeobjekt Sie direkt als Nutzlast für diesen Befehl übergeben können.

Bestimmte Geräte unterstützen das Setzen der Fenstermaße oder -position nicht. In diesen Konfigurationen wird der Befehl einen [unsupported operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation) Fehler zurückgeben. Um Situationen zu vermeiden, in denen dieser Befehl möglicherweise einen Fehler verursacht, kann er bedingt aufgerufen werden, wenn die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Das Setzen des Fensterrechtecks erfordert `x`, `y`, `width` und `height` als Eingabe. Alle Felder sind optional, z. B. kann der Befehl mit einem leeren Objekt aufgerufen werden, in diesem Fall hat er keine Wirkung. Um die Position festzulegen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` notwendig, um die Fenstergröße zu ändern.

Beim Einstellen der Breite oder Höhe ist nicht garantiert, dass die resultierende Fenstergröße genau dem angeforderten Wert entspricht. Der Treiber soll Werte begrenzen, die größer als die physischen Bildschirmabmessungen oder kleiner als die Mindestfenstergröße sind. Einige Treiber haben möglicherweise auch andere Einschränkungen, wie z. B. die Unfähigkeit, die Größe in Ein-Pixel-Schritten zu ändern. Aus diesem Grund entsprechen die zurückgegebenen `width` und `height` möglicherweise nicht genau [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

Das Setzen der Fensterposition ist vergleichbar mit dem Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass es die Sicherheitsbeschränkungen im Zusammenhang mit der Fensterverwaltung umgeht.

Der Befehl Fensterrechteck setzen ist blockierend.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Nutzlast

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Objekt:

- `x`

  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), die äquivalent zu [`Window.screenX`](/de/docs/Web/API/Window/screenX) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), die äquivalent zu [`Window.screenY`](/de/docs/Web/API/Window/screenY) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.
- `width`
  - : Außenbreite des [`window`](/de/docs/Web/API/Window), die äquivalent zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.
- `height`
  - : Außenhöhe des [`window`](/de/docs/Web/API/Window), die äquivalent zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.

### Antwort

Die Antwortnutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, äquivalent zu [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, äquivalent zu [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, äquivalent zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, äquivalent zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/WindowRect)-Nutzlastobjekt nicht die Typ- oder Bereichseinschränkungen erfüllt oder wenn nur eines der Felder `x`/`y` oder `width`/`height` angegeben ist.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartete Warnung offen](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z. B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)

  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei mobilen Geräten der Fall, bei denen der Browser feste Maße hat und nicht auf dem Bildschirm bewegt werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) inspizieren, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/WebWindow) Objekt
- Zugehörige Befehle:

  - [Fensterrechteck abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect)
  - [Fenster-Handle abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Fenster-Handles abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
  - [Fenster schließen](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)

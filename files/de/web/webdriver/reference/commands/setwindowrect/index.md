---
title: Set Window Rect
slug: Web/WebDriver/Reference/Commands/SetWindowRect
l10n:
  sourceCommit: 394a1aff10d20ba51dbd00252ce481769298001c
---

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver)-API ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verknüpft ist. Der Befehl fungiert als Setter für [Get Window Rect](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect), dessen Rückgabeobjekt direkt als Nutzlast dieses Befehls verwendet werden kann.

Einige Geräte unterstützen nicht das Setzen der Fensterdimensionen oder deren Position. In diesen Konfigurationen gibt der Befehl einen [unsupported operating](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)-Fehler zurück. Um zu vermeiden, dass dieser Fehler auftritt, kann der Befehl bedingt aufgerufen werden, wenn die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Das Setzen des Fensters umfasst die Eingaben `x`, `y`, `width` und `height`. Alle Felder sind optional, z. B. kann der Befehl mit einem leeren Objekt aufgerufen werden, in diesem Fall wird er keine Operation ausführen. Um die Position festzulegen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` erforderlich, um die Fensterabmessungen zu ändern.

Beim Einstellen der Breite oder Höhe ist es nicht garantiert, dass die resultierende Fenstergröße genau der gewünschten entspricht. Der Treiber sollte Werte, die größer als die physischen Bildschirmabmessungen oder kleiner als die Mindestfenstergröße sind, begrenzen. Einige Treiber können auch andere Einschränkungen haben, wie z. B. die Unfähigkeit, in Ein-Pixel-Schritten zu ändern. Daher können die zurückgegebenen `width` und `height` unter Umständen nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) übereinstimmen.

Das Setzen der Fensterposition ähnelt dem Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass es Sicherheitsbeschränkungen bei der Fenstermanipulation umgeht.

Der Set Window Rect Befehl ist blockierend.

## Syntax

| Methode                                | URI-Vorlage                         |
| -------------------------------------- | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/WindowRect)-Objekt:

- `x`

  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), äquivalent zu [`Window.screenX`](/de/docs/Web/API/Window/screenX). Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), äquivalent zu [`Window.screenY`](/de/docs/Web/API/Window/screenY). Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), äquivalent zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth). Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.
- `height`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), äquivalent zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight). Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.

### Antwort

Die Antwort-Nutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, äquivalent zu [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, äquivalent zu [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Begrenzungen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, äquivalent zu [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Begrenzungen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, äquivalent zu [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- Invalid argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/WindowRect)-Nutzlast-Objekt nicht die Typ- oder Bereichsgrenzen erfüllt, oder wenn nur eines der Felder `x`/`y` oder `width`/`height` angegeben ist.
- [Invalid session ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [No such window](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzer-Prompt, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis es behandelt wird.
- [Unsupported operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)

  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei Mobilgeräten der Fall, bei denen der Browser feste Dimensionen hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) überprüfen, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)-Objekt
- Zugehörige Befehle:

  - [Get Window Rect](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)

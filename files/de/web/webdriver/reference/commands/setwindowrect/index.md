---
title: Fenster-Rechteck setzen
slug: Web/WebDriver/Reference/Commands/SetWindowRect
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API verändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verbunden ist. Der Befehl fungiert als Setter für [Get Window Rect](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect), deren zurückgegebenes Objekt Sie direkt als Nutzlast für diesen Befehl übergeben können.

Bei bestimmten Gerätekonfigurationen wird das Setzen der Fenstermaße oder -position nicht unterstützt. In diesen Fällen gibt der Befehl einen [Unsupported Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation) Fehler zurück. Um Situationen zu vermeiden, in denen dieser Befehl möglicherweise fehlerhaft ausgeführt wird, kann er bedingt ausgeführt werden, wenn die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Um das Fenster-Rechteck zu setzen, werden `x`, `y`, `width` und `height` als Eingaben verwendet. Alle Felder sind optional, der Befehl kann z. B. mit einem leeren Objekt aufgerufen werden und in diesem Fall ist es eine No-Op. Um die Position zu setzen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind `width` und `height` erforderlich, um die Maße des Fensters zu ändern.

Beim Setzen der Breite oder Höhe ist es nicht garantiert, dass die resultierende Fenstergröße exakt der gewünschten entspricht. Der Treiber sollte Werte, die größer als die physischen Bildschirmmaße oder kleiner als die minimale Fenstergröße sind, begrenzen. Einige Treiber können auch andere Einschränkungen haben, wie z.B. nicht in Ein-Pixel-Schritten zu verkleinern. Aus diesem Grund könnten die zurückgegebenen `width` und `height` nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) übereinstimmen.

Das Setzen der Fensterposition ähnelt dem Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass es Sicherheitsbeschränkungen im Zusammenhang mit der Fenster-Manipulation umgeht.

Der Set Window Rect Befehl blockiert.

## Syntax

| Methode                                | URI-Vorlage                         |
| -------------------------------------- | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Nutzlast

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Objekt:

- `x`

  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), was [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht. Muss eine Zahl im Bereich −(2^31) bis 2^31 − 1, null oder undefiniert sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), was [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht. Muss eine Zahl im Bereich −(2^31) bis 2^31 − 1, null oder undefiniert sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht. Muss eine Zahl im Bereich 0 bis 2^31 − 1, null oder undefiniert sein.
- `height`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht. Muss eine Zahl im Bereich 0 bis 2^31 − 1, null oder undefiniert sein.

### Antwort

Die Antwortnutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/WebWindow):

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
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/WindowRect) Nutzlastobjekt nicht die Typ- oder Bereichseinschränkungen erfüllt oder nur eines der `x`/`y` Paare oder `width`/`height` Paare angegeben ist.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes Warnfenster geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerhinweis, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er behandelt wird.
- [Unsupported operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)

  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei mobilen Geräten der Fall, bei denen der Browser eine feste Größe hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/setWindowRect) untersuchen, um festzustellen, ob das Gerät diesen Befehl unterstützt.

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

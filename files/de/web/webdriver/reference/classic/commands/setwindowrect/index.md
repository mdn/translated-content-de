---
title: Set Window Rect
slug: Web/WebDriver/Reference/Classic/Commands/SetWindowRect
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) verknüpft ist. Der Befehl fungiert als Setter von [Get Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowRect), dessen Rückgabeobjekt direkt als Payload für diesen Befehl verwendet werden kann.

Bestimmte Gerätegruppen unterstützen nicht das Einstellen der Fensterabmessungen oder deren Position. In diesen Konfigurationen liefert der Befehl einen [`unsupported operation`](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)-Fehler. Um Situationen zu vermeiden, in denen dieser Befehl zu einem Fehler führen könnte, ist es möglich, ihn bedingt aufzurufen, wenn die Fähigkeit [`setWindowRect`](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) für die Sitzung auf True gesetzt ist.

Die Einstellung des Fenster-Rechtecks erfordert `x`, `y`, `width` und `height` als Eingaben. Alle Felder sind optional, z.B. kann der Befehl mit einem leeren Objekt aufgerufen werden, in diesem Fall wird er als No-Op fungieren. Um die Position festzulegen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind `width` und `height` erforderlich, um die Dimensionen des Fensters zu ändern.

Beim Einstellen der Breite oder Höhe ist nicht garantiert, dass die resultierende Fenstergröße genau der gewünschten entspricht. Der Treiber sollte Werte, die größer als die physischen Bildschirmabmessungen oder kleiner als die Mindestfenstergröße sind, begrenzen. Einige Treiber können auch andere Einschränkungen haben, z.B. dass sie nicht in Ein-Pixel-Schritten vergrößern oder verkleinern können. Aus diesem Grund stimmen die zurückgegebenen Werte für `width` und `height` möglicherweise nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) überein.

Das Einstellen der Fensterposition ist ähnlich wie der Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass es Sicherheitsbeschränkungen im Zusammenhang mit der Fenster-Manipulation umgeht.

Der Set Window Rect Befehl ist blockierend.

## Syntax

| Methode                                          | URI-Vorlage                         |
| ------------------------------------------------ | ----------------------------------- |
| [POST](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/window/rect` |

### URL-Parameter

- `session id`
  - : Identifikator der Sitzung.

### Payload

Die Eingabe ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect)-Objekt:

- `x`
  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), die [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), die [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefiniert sein.
- `width`
  - : Außenbreite des [`window`](/de/docs/Web/API/Window), die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.
- `height`
  - : Außenhöhe des [`window`](/de/docs/Web/API/Window), die [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefiniert sein.

### Antwort

Die Antwort-Payload ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, entsprechend [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, entsprechend [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, entsprechend [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) verknüpft ist, entsprechend [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect)-Payload-Objekt nicht den Typ- oder Bereichsbeschränkungen entspricht, oder wenn nur eines der Felderpaare `x`/`y` oder `width`/`height` angegeben ist.
- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [`no such window`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerhinweis, wie beispielsweise [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis damit umgegangen wird.
- [`unsupported operation`](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise der Fall bei Mobilgeräten, bei denen der Browser feste Abmessungen hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die Fähigkeit [`setWindowRect`](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) inspizieren, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow)-Objekt
- Verwandte Befehle:
  - [Get Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow)

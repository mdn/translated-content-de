---
title: Fenster-Rechteck setzen
slug: Web/WebDriver/Reference/Commands/SetWindowRect
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Fenster-Rechteck setzen_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das mit dem aktuellen [`window`](/de/docs/Web/API/Window) assoziiert ist. Der Befehl fungiert als Setter für [Fenster-Rechteck abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect), dessen zurückgegebenes Objekt Sie direkt als Nutzlast für diesen Befehl übergeben können.

Bestimmte Gerätegruppen unterstützen nicht die Einstellung der Fensterdimensionen oder deren Position. Auf diesen Konfigurationen gibt der Befehl einen [nicht unterstützten Betrieb](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation) Fehler zurück. Um zu vermeiden, dass dieser Aufruf zu einem Fehler führt, kann er bedingt aufgerufen werden, wenn die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) für die Sitzung auf true gesetzt ist.

Das Setzen des Fenster-Rechtecks benötigt `x`, `y`, `width` und `height` als Eingabe. Alle Felder sind optional, d.h. der Befehl kann mit einem leeren Objekt aufgerufen werden, und in diesem Fall wird er als No-Op fungieren. Um die Position festzulegen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` erforderlich, um die Fensterabmessungen zu ändern.

Beim Einstellen der Breite oder Höhe wird nicht garantiert, dass die resultierende Fenstergröße genau dem entspricht, was angefordert wurde. Der Treiber sollte Werte clampen, die größer als die physischen Bildschirmabmessungen oder kleiner als die Mindestgröße des Fensters sind. Einige Treiber können auch andere Einschränkungen haben, wie z.B. die Unfähigkeit, in Ein-Pixel-Schritten die Größe zu ändern. Aus diesem Grund könnten die zurückgegebenen `width` und `height` nicht genau mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) übereinstimmen.

Das Setzen der Fensterposition ist ähnlich wie der Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass es Sicherheitsbeschränkungen im Zusammenhang mit der Fenster-Manipulation umgeht.

Der Befehl "Fenster-Rechteck setzen" ist blockierend.

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

  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), was [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht. Muss eine Zahl im Bereich −(2^31) bis 2^31 − 1, null oder undefined sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), was [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht. Muss eine Zahl im Bereich −(2^31) bis 2^31 − 1, null oder undefined sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht. Muss eine Zahl im Bereich 0 bis 2^31 − 1, null oder undefined sein.
- `height`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), was [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht. Muss eine Zahl im Bereich 0 bis 2^31 − 1, null oder undefined sein.

### Antwort

Die Antwortnutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, was [`Window.screenX`](/de/docs/Web/API/Window/screenX) entspricht.
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, was [`Window.screenY`](/de/docs/Web/API/Window/screenY) entspricht.
- `width`
  - : Breite der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, was [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) entspricht.
- `height`
  - : Höhe der äußeren Grenzen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, was [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) entspricht.

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) Nutzlastobjekt die Typ- oder Begrenzungseinschränkungen nicht erfüllt oder wenn nur ein Feldpaar `x`/`y` oder `width`/`height` angegeben wird.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes offenes Alert](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [Nicht unterstützter Betrieb](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)

  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei mobilen Geräten der Fall, bei denen der Browser eine feste Dimension hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) inspizieren, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow) Objekt
- Zugehörige Befehle:

  - [Fenster-Rechteck abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowRect)
  - [Fenstergriff abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Fenstergriffe abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
  - [Fenster schließen](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)

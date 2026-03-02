---
title: Fensterrechteck festlegen
slug: Web/WebDriver/Reference/Classic/Commands/SetWindowRect
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Set Window Rect_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API ändert die Größe und Position des Betriebssystemfensters, das dem aktuellen [`window`](/de/docs/Web/API/Window) zugeordnet ist. Der Befehl fungiert als Setter von [Get Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowRect), dessen Rückgabeobjekt direkt als Nutzlast für diesen Befehl verwendet werden kann.

Bestimmte Gruppen von Geräten unterstützen nicht das Festlegen der Fensterabmessungen oder dessen Position. Bei diesen Konfigurationen wird der Befehl einen [unsupported operating](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation) Fehler zurückgeben. Um Situationen zu vermeiden, in denen dies zu einem Fehler führen könnte, ist es möglich, den Befehl bedingt aufzurufen, je nachdem, ob die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) für die Sitzung auf wahr gesetzt ist.

Das Festlegen des Fensterrechtecks benötigt `x`, `y`, `width` und `height` als Eingaben. Alle Felder sind optional, z.B. kann der Befehl mit einem leeren Objekt aufgerufen werden, in welchem Fall es als No-Op (wird nichts tun) fungiert. Um die Position festzulegen, sind sowohl `x` als auch `y` erforderlich, und entsprechend sind sowohl `width` als auch `height` erforderlich, um die Abmessungen des Fensters zu ändern.

Beim Festlegen der Breite oder Höhe gibt es keine Garantie, dass die resultierende Fenstergröße genau der angeforderten Größe entspricht. Der Treiber ist dafür verantwortlich, Werte zu klemmen, die größer als die physischen Bildschirmabmessungen sind oder kleiner als die Mindestgröße des Fensters. Einige Treiber können auch andere Einschränkungen haben, wie z.B. die Unfähigkeit, in Ein-Pixel-Schritten zu skalieren. Aus diesem Grund stimmen die zurückgegebenen `width` und `height` möglicherweise nicht exakt mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) und [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) überein.

Das Festlegen der Fensterposition ist ähnlich wie der Aufruf von [`Window.moveTo(x, y)`](/de/docs/Web/API/Window/moveTo), unterscheidet sich jedoch dadurch, dass die Sicherheitsbeschränkungen im Zusammenhang mit der Fenstermanipulation umgangen werden.

Der Befehl zum Festlegen des Fensterrechtecks ist blockierend.

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
  - : Horizontale Position des [`window`](/de/docs/Web/API/Window), die gleichwertig mit [`Window.screenX`](/de/docs/Web/API/Window/screenX) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefined sein.

- `y`
  - : Vertikale Position des [`window`](/de/docs/Web/API/Window), die gleichwertig mit [`Window.screenY`](/de/docs/Web/API/Window/screenY) ist. Muss eine Zahl im Bereich von −(2^31) bis 2^31 − 1, null oder undefined sein.
- `width`
  - : Äußere Breite des [`window`](/de/docs/Web/API/Window), die gleichwertig mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefined sein.
- `height`
  - : Äußere Höhe des [`window`](/de/docs/Web/API/Window), die gleichwertig mit [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight) ist. Muss eine Zahl im Bereich von 0 bis 2^31 − 1, null oder undefined sein.

### Antwort

Die Antwort-Nutzlast ist ein [`WindowRect`](/de/docs/Web/WebDriver/Reference/WebWindow):

- `x`
  - : Horizontale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, gleichwertig mit [`Window.screenX`](/de/docs/Web/API/Window/screenX).
- `y`
  - : Vertikale Position des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, gleichwertig mit [`Window.screenY`](/de/docs/Web/API/Window/screenY).
- `width`
  - : Breite der äußeren Umrandungen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, gleichwertig mit [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth).
- `height`
  - : Höhe der äußeren Umrandungen des Betriebssystemfensters, das mit [`window`](/de/docs/Web/API/Window) assoziiert ist, gleichwertig mit [`Window.outerHeight`](/de/docs/Web/API/Window/outerHeight).

### Fehler

- Ungültiges Argument
  - : Wenn eines der Felder im [`WindowRect`](/de/docs/Web/WebDriver/Reference/WindowRect) Nutzlastobjekt nicht den Typ- oder Grenzbeschränkungen entspricht oder wenn nur eines der `x`/`y` oder `width`/`height` Felder angegeben ist.
- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes geöffnetes Warnfenster](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis diese behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Wenn der Treiber das Ändern der Fenstergröße oder -position nicht unterstützt. Dies ist normalerweise bei mobilen Geräten der Fall, bei denen der Browser eine feste Größe hat und nicht auf dem Bildschirm verschoben werden kann.

    Sie können die [`setWindowRect` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/setWindowRect) überprüfen, um festzustellen, ob das Gerät diesen Befehl unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow) Objekt
- Verwandte Befehle:
  - [Get Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowRect)
  - [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
  - [Get Window Handles](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowHandles)
  - [Close Window](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow)

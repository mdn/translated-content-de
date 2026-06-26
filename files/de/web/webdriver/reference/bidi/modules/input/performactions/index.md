---
title: "`input.performActions` Befehl"
short-title: performActions
slug: Web/WebDriver/Reference/BiDi/Modules/input/performActions
l10n:
  sourceCommit: 9703f3f0a1ae56e4e40af5505451f96c78495cb9
---

Der `input.performActions` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`input`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input) Moduls simuliert Benutzereingaben in einem gegebenen Kontext, um mit Elementen auf der Seite zu interagieren. Nach dem Ausführen der Aktionen sollten Sie [`input.releaseActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions) aufrufen, um Eingaben zu lösen, die in einem Zwischenzustand geblieben sind.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "input.performActions",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "actions": [
      {
        "type": "key",
        "id": "keyboard1",
        "actions": [
          {
            "type": "keyDown",
            "value": "a"
          }
        ]
      }
    ]
  }
}

/* With required and optional parameters */
{
  "method": "input.performActions",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "actions": [
      {
        "type": "pointer",
        "id": "mouse1",
        "parameters": {
          "pointerType": "mouse"
        },
        "actions": [
          {
            "type": "pointerMove",
            "x": 100,
            "y": 200,
            "duration": 300,
            "origin": "viewport"
          }
        ]
      }
    ]
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `actions`
  - : Ein Array von Objekten, die jeweils eine Eingabequelle und die für diese Quelle auszuführenden Aktionen repräsentieren.
    Jedes dieser Objekte repräsentiert das äußere `actions` Objekt, das wiederum einen äußeren `type` enthält (Eingabequellentyp kann `"key"`, `"pointer"` oder `"wheel"` sein) und ein inneres `actions` Array.
    Jedes Objekt im inneren `actions` Array hat seinen eigenen inneren `type` und zusätzliche Felder, die davon abhängen.

    Alle Eingabequellen werden parallel verarbeitet.
    In jedem Takt (Schritt) führt jede Eingabequelle gleichzeitig eine Aktion aus oder tut nichts, wenn eine `"pause"` Aktion zugewiesen ist.
    Dies ermöglicht die Kombination von Eingabequellen, z.B. das Halten der <kbd>Shift</kbd>-Taste beim Klicken.

    Jedes äußere `actions` Objekt hat die folgenden Felder:
    - `actions`
      - : Ein Array von Objekten (die inneren `actions`), die jeweils eine Aktion für die im äußeren [`type`](#type) Feld angegebene Eingabequelle darstellen.

        Jedes innere `actions` Objekt hat ein inneres `type` Feld, das die auszuführende Operation angibt, und zusätzliche Felder, die davon abhängen.
        Der innere `type` akzeptiert die folgenden Werte:
        - `"keyDown"`: Simuliert das Drücken einer Taste.
        - `"keyUp"`: Simuliert das Loslassen einer Taste.
        - `"pause"`: Wartet für die angegebene Dauer, bevor der nächste Schritt erfolgt.
        - `"pointerDown"`: Simuliert das Drücken einer Zeigertaste.
        - `"pointerMove"`: Simuliert das Bewegen des Zeigers.
        - `"pointerUp"`: Simuliert das Loslassen einer Zeigertaste.
        - `"scroll"`: Simuliert ein Scrollen mit dem Mausrad.

        Die folgende Tabelle zeigt für jeden äußeren `type` Wert die gültigen Werte für den inneren `type`:

        | Äußere `type` Werte | Akzeptierte innere `type` Werte                            |
        | ------------------- | ---------------------------------------------------------- |
        | `"key"`             | `"pause"`, `"keyDown"`, `"keyUp"`                          |
        | `"none"`            | `"pause"`                                                  |
        | `"pointer"`         | `"pause"`, `"pointerDown"`, `"pointerUp"`, `"pointerMove"` |
        | `"wheel"`           | `"pause"`, `"scroll"`                                      |

        Die folgende Tabelle zeigt für jeden inneren `type` Wert die Felder im inneren `actions` Objekt:

        | Innere `type` Werte    | Verfügbare Felder im inneren `actions` Objekt                                                                   |
        | ---------------------- | --------------------------------------------------------------------------------------------------------------- |
        | `"keyDown"`, `"keyUp"` | [`value`](#value)                                                                                               |
        | `"pause"`              | [`duration`](#duration)                                                                                         |
        | `"pointerDown"`        | [`button`](#button), [Zeiger-Eigenschaften](#pointer_properties)                                                |
        | `"pointerMove"`        | [`x`](#x), [`y`](#y), [`duration`](#duration), [`origin`](#origin), [Zeiger-Eigenschaften](#pointer_properties) |
        | `"pointerUp"`          | [`button`](#button)                                                                                             |
        | `"scroll"`             | [`x`](#x), [`y`](#y), [`deltaX`](#deltax), [`deltaY`](#deltay), [`duration`](#duration), [`origin`](#origin)    |

    - `id`
      - : Ein String, der diese Eingabequelle innerhalb der Aktionssequenz eindeutig identifiziert, z.B. `"mouse1"` oder `"keyboard1"`.
    - `parameters` {{optional_inline}}
      - : Ein Objekt mit einem `pointerType` Feld, das den Typ des Zeigergeräts angibt. Akzeptierte Werte sind `"mouse"` (Standard), `"pen"` oder `"touch"`. Dieses Feld ist nur gültig, wenn der äußere [`type`](#type) `"pointer"` ist.
    - `type`
      - : Ein String (der äußere `type`), der den Typ der Eingabequelle identifiziert. Akzeptierte Werte sind `"none"`, `"key"`, `"pointer"` und `"wheel"`.

- `context`
  - : Ein String, der die ID des Kontextes enthält, in dem die Aktionen ausgeführt werden sollen. Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

Die folgenden Felder sind je nach innerem `type` in jedem inneren `actions` Objekt verfügbar:

- `button`
  - : Eine nicht-negative Ganzzahl, die die Zeigertaste identifiziert (`0` = primär, `1` = Mitte, `2` = sekundär).
    Geben Sie dies an, wenn der innere `type` Feldwert `"pointerDown"` oder `"pointerUp"` ist.
- `deltaX`
  - : Eine Ganzzahl, die die horizontale Scroll-Differenz in CSS-Pixeln angibt.
    Geben Sie dies an, wenn der innere `type` Feldwert `"scroll"` ist.
- `deltaY`
  - : Eine Ganzzahl, die die vertikale Scroll-Differenz in CSS-Pixeln angibt.
    Geben Sie dies an, wenn der innere `type` Feldwert `"scroll"` ist.
- `duration` {{optional_inline}}
  - : Eine nicht-negative Ganzzahl, die die Zeit in Millisekunden angibt, über die die Aktion ausgeführt wird.
    Geben Sie dies an, wenn der innere `type` Feldwert `"pause"`, `"pointerMove"` oder `"scroll"` ist.
    Für `"pointerMove"` und `"scroll"` erfolgt die Gesamtbewegung in einer Reihe kleiner Bewegungen über diesen Zeitraum mit einer vom Browser definierten Rate (z.B. ein Schritt pro Animationsframe).
    Wenn mehrere äußere `actions` Objekte parallel laufen, dauert der Takt so lange wie der längste `duration` Wert in diesem Takt.
- `origin` {{optional_inline}}
  - : Ein String oder ein Objekt, das den Ursprung für die Bewegung oder das Scrollen angibt.
    Geben Sie dies an, wenn der innere `type` Feldwert `"pointerMove"` oder `"scroll"` ist.

    Wenn `origin` ein String ist, sind akzeptierte Werte:
    - `"viewport"`: Gibt an, dass die x- und y-Koordinaten relativ zur oberen linken Ecke des Viewports sind.
      Verwenden Sie dies für absolute Positionierung innerhalb der Seite.
      Dies ist der Standardwert für `"scroll"`, wenn `origin` weggelassen wird.
    - `"pointer"`: Gibt an, dass die x- und y-Koordinaten relativ zur aktuellen Zeigerposition sind.
      Verwenden Sie dies für relative Bewegungen von der aktuellen Zeigerposition.

    Wenn `origin` ein Objekt ist, enthalten Sie die folgenden Felder:
    - `type`
      - : Ein String, der auf `"element"` gesetzt ist.
    - `element`
      - : Ein Objekt, das die ID enthält, die das DOM-Element eindeutig identifiziert, das als Ursprung verwendet werden soll.
        Die ID wird vom Browser zurückgegeben, wenn Sie das Element mit [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes), [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) lokalisieren.

- `value`
  - : Ein String, der den Tastenwert enthält.
    Geben Sie dies an, wenn der innere `type` Feldwert `"keyDown"` oder `"keyUp"` ist.
    Für spezielle Tasten wie <kbd>Shift</kbd> oder <kbd>Enter</kbd> verwenden Sie die in der Tabelle der [WebDriver Tastaturaktionen](https://w3c.github.io/webdriver/#keyboard-actions) definierten Unicode-Codepunkte (z.B. `"\uE008"` für die <kbd>Shift</kbd>-Taste). Für druckbare Zeichen verwenden Sie das Zeichen direkt (z.B. `"a"`).
- Zeiger-Eigenschaften
  - : Die folgenden Felder sind Teil des inneren `actions` Objekts und beschreiben die physikalischen Eigenschaften des Zeigergeräts, wie Maus, Stift oder Touchscreen.
    Geben Sie diese an, wenn der innere `type` `"pointerDown"` oder `"pointerMove"` ist.
    - `width` {{optional_inline}}
      - : Eine nicht-negative Ganzzahl, die die Breite in CSS-Pixeln des Zeigerkontaktbereichs angibt.
        Siehe [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width).
    - `height` {{optional_inline}}
      - : Eine nicht-negative Ganzzahl, die die Höhe in CSS-Pixeln des Zeigerkontaktbereichs angibt.
        Siehe [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height).
    - `pressure` {{optional_inline}}
      - : Ein Float-Wert, der den normalisierten Druck des Zeigers im Bereich von `0.0` bis `1.0` angibt.
        Siehe [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure).
    - `tangentialPressure` {{optional_inline}}
      - : Ein Float-Wert, der den normalisierten tangentialen Druck im Bereich von `-1.0` bis `1.0` angibt.
        Siehe [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure).
    - `twist` {{optional_inline}}
      - : Eine Ganzzahl, die die Drehung im Uhrzeigersinn in Grad des Zeigers im Bereich von `0` bis `359` angibt.
        Siehe [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist).
    - `altitudeAngle` {{optional_inline}}
      - : Ein Float-Wert, der den Höhenwinkel in Radiant des Zeigers im Bereich von `0.0` bis `π/2` angibt.
        Siehe [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle).
    - `azimuthAngle` {{optional_inline}}
      - : Ein Float-Wert, der den Azimutwinkel in Radiant des Zeigers im Bereich von `0.0` bis `2π` angibt.
        Siehe [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).
- `x`
  - : Eine Zahl (für `"pointerMove"`) oder eine Ganzzahl (für `"scroll"`) die die x-Koordinate angibt.
    Geben Sie dies an, wenn der innere `type` Wert `"pointerMove"` oder `"scroll"` ist.
- `y`
  - : Eine Zahl (für `"pointerMove"`) oder eine Ganzzahl (für `"scroll"`) die die y-Koordinate angibt.
    Geben Sie dies an, wenn der innere `type` Wert `"pointerMove"` oder `"scroll"` ist.

### Rückgabewert

Das `result` Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Die Aktionssequenz ist fehlerhaft, z.B. wenn ein erforderliches Feld fehlt, ein Feldwert den falschen Typ hat oder ein äußerer `type` Wert nicht `"none"`, `"key"`, `"pointer"` oder `"wheel"` ist.
- `no such frame`
  - : Kein Kontext mit der gegebenen Kontext-ID gefunden.

## Beispiele

### Drücken der Shift-Taste beim Klicken auf ein Element

Betrachten Sie ein Szenario, in dem Sie die <kbd>Shift</kbd>-Taste gedrückt halten möchten, während Sie auf ein Element klicken, z.B. um eine Textauswahl zu erweitern.

Mit einer [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) erhalten Sie die Kontext-ID mithilfe von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) und die Elementkennung mithilfe von [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
Senden Sie die folgende Nachricht mit zwei äußeren `actions` Objekten — einer `"key"` Quelle und einer `"pointer"` Quelle — jeweils mit einem äußeren `type` und einem inneren `actions` Array, die parallel über die folgenden drei Takte laufen:

- Takt 1: Die Tastatur drückt die <kbd>Shift</kbd>-Taste, während der Zeiger zum Element bewegt wird. Da die `duration` von `pointerMove` als `300` angegeben ist, dauert der Takt 300 ms, was die längste `duration` in diesem Takt ist.
- Takt 2: Die Tastatur pausiert, während die Zeigertaste gedrückt wird (`pointerDown`). Dieser Takt dauert 0 ms.
- Takt 3: Die <kbd>Shift</kbd>-Taste wird losgelassen (`keyUp`) und die Zeigertaste wird gleichzeitig losgelassen (`pointerUp`). Dieser Takt dauert ebenfalls 0 ms.

```json-nolint
{
  "id": 1,
  "method": "input.performActions",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "actions": [
      {
        "type": "key",
        "id": "keyboard1",
        "actions": [
          {
            "type": "keyDown", // Tick 1: Shift key down (0 ms)
            "value": "\uE008"
          },
          {
            "type": "pause" // Tick 2: Keyboard pause (0 ms)
          },
          {
            "type": "keyUp", // Tick 3: Shift key up (0 ms)
            "value": "\uE008"
          }
        ]
      },
      {
        "type": "pointer",
        "id": "mouse1",
        "parameters": {
          "pointerType": "mouse"
        },
        "actions": [
          {
            "type": "pointerMove", // Tick 1: Move to element (300 ms)
            "x": 0,
            "y": 0,
            "duration": 300,
            "origin": {
              "type": "element",
              "element": {
                "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
              }
            }
          },
          {
            "type": "pointerDown", // Tick 2: Press button (0 ms)
            "button": 0
          },
          {
            "type": "pointerUp", // Tick 3: Release button (0 ms)
            "button": 0
          }
        ]
      }
    ]
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Scrollen der Seite

Betrachten Sie ein Szenario, in dem Sie das Scrollen einer Seite nach unten simulieren möchten.

Mit einer [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) erhalten Sie die Kontext-ID mithilfe von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
Senden Sie die folgende Nachricht, die von der oberen linken Ecke des Viewports (`x: 0, y: 0`) um `300` CSS-Pixel nach unten (`deltaY: 300`) mit keinem horizontalen Scrollen (`deltaX: 0`) scrollt.

```json
{
  "id": 2,
  "method": "input.performActions",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "actions": [
      {
        "type": "wheel",
        "id": "wheel1",
        "actions": [
          {
            "type": "scroll",
            "x": 0,
            "y": 0,
            "deltaX": 0,
            "deltaY": 300
          }
        ]
      }
    ]
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input.releaseActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions) Befehl
- [`input.setFiles`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) Befehl
- [`input.fileDialogOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened) Ereignis

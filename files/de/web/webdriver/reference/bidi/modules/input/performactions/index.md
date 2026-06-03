---
title: "`input.performActions` Befehl"
short-title: performActions
slug: Web/WebDriver/Reference/BiDi/Modules/input/performActions
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der Befehl `input.performActions` des [`input`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input)-Moduls simuliert Benutzereingabeaktionen in einem gegebenen Kontext, um mit Elementen auf der Seite zu interagieren. Nachdem Sie Aktionen durchgeführt haben, sollten Sie [`input.releaseActions`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions) aufrufen, um alle Eingaben freizugeben, die sich in einem Zwischenzustand befinden.

## Syntax

```json-nolint
{
  "method": "input.performActions",
  "params": {
    "context": "<contextId>",
    "actions": [
      {
        "type": "<outerType>",
        "id": "<sourceId>",
        "actions": [
          {
            "type": "<innerType>",
            ...
          }
        ]
      }
    ]
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem die Aktionen ausgeführt werden sollen. Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `actions`
  - : Ein Array von Objekten, die jeweils eine Eingabequelle und die auszuführenden Aktionen für diese Quelle darstellen.
    Jedes dieser Objekte repräsentiert das äußere `actions` Objekt, das wiederum einen äußeren `type` (der Eingabequellentyp kann `"key"`, `"pointer"` oder `"wheel"` sein) und ein inneres `actions`-Array enthält.
    Jedes Objekt im inneren `actions`-Array hat seinen eigenen inneren `type` und zusätzliche Felder, die davon abhängen.

    Alle Eingabequellen werden parallel verarbeitet.
    In jedem Tick (Schritt) führt jede Eingabequelle gleichzeitig eine Aktion aus oder macht nichts, wenn eine `"pause"`-Aktion zugewiesen ist.
    Dies ermöglicht das Kombinieren von Eingabequellen, zum Beispiel das Halten der <kbd>Shift</kbd>-Taste beim Klicken.

    Jedes äußere `actions`-Objekt hat die folgenden Felder:
    - `id`
      - : Ein String, der diese Eingabequelle innerhalb der Aktionssequenz eindeutig identifiziert, zum Beispiel `"mouse1"` oder `"keyboard1"`.
    - `type`
      - : Ein String (der äußere `type`), der den Typ der Eingabequelle angibt. Akzeptierte Werte sind `"none"`, `"key"`, `"pointer"` und `"wheel"`.
    - `actions`
      - : Ein Array von Objekten (die inneren `actions`), die jeweils eine Aktion für die im äußeren [`type`](#type)-Feld angegebene Eingabequelle darstellen.

        Jedes innere `actions`-Objekt hat ein inneres `type`-Feld, das die auszuführende Operation angibt, sowie zusätzliche Felder, die davon abhängen.
        Der innere `type` akzeptiert die folgenden Werte:
        - `"pause"`: Wartet für die angegebene Dauer, bevor der nächste Schritt ausgeführt wird.
        - `"keyDown"`: Simuliert das Drücken einer Taste.
        - `"keyUp"`: Simuliert das Loslassen einer Taste.
        - `"pointerDown"`: Simuliert das Drücken einer Zeigertaste.
        - `"pointerUp"`: Simuliert das Loslassen einer Zeigertaste.
        - `"pointerMove"`: Simuliert das Bewegen des Zeigers.
        - `"scroll"`: Simuliert ein Scrollen des Mausrads.

        Die folgende Tabelle zeigt für jeden Wert des äußeren `type`, welche inneren `type`-Werte akzeptiert werden:

        | Werte des äußeren `type` | Akzeptierte innere `type`-Werte                            |
        | ------------------------ | ---------------------------------------------------------- |
        | `"none"`                 | `"pause"`                                                  |
        | `"key"`                  | `"pause"`, `"keyDown"`, `"keyUp"`                          |
        | `"pointer"`              | `"pause"`, `"pointerDown"`, `"pointerUp"`, `"pointerMove"` |
        | `"wheel"`                | `"pause"`, `"scroll"`                                      |

        Die folgende Tabelle zeigt für jeden inneren `type`-Wert die Felder, die im inneren `actions`-Objekt verfügbar sind:

        | Innere `type`-Werte    | Verfügbare Felder im inneren `actions`-Objekt                                                                    |
        | ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
        | `"pause"`              | [`duration`](#duration)                                                                                          |
        | `"keyDown"`, `"keyUp"` | [`value`](#value)                                                                                                |
        | `"pointerDown"`        | [`button`](#button), [Pointer-Eigenschaften](#pointer_properties)                                                |
        | `"pointerUp"`          | [`button`](#button)                                                                                              |
        | `"pointerMove"`        | [`x`](#x), [`y`](#y), [`duration`](#duration), [`origin`](#origin), [Pointer-Eigenschaften](#pointer_properties) |
        | `"scroll"`             | [`x`](#x), [`y`](#y), [`deltaX`](#deltax), [`deltaY`](#deltay), [`duration`](#duration), [`origin`](#origin)     |

    Das äußere `actions`-Objekt unterstützt auch das folgende Feld:
    - `parameters` {{optional_inline}}
      - : Ein Objekt mit einem `pointerType`-Feld, das den Zeigegerätetyp angibt. Akzeptierte Werte sind `"mouse"` (Standard), `"pen"` oder `"touch"`. Dieses Feld ist nur gültig, wenn der äußere [`type`](#type) `"pointer"` ist.

Die folgenden Felder sind in jedem inneren `actions`-Objekt verfügbar, abhängig vom inneren `type`:

- `button`
  - : Eine nicht-negative Ganzzahl, die die Zeigertaste identifiziert (`0` = primär, `1` = mittig, `2` = sekundär).
    Geben Sie dies an, wenn der Wert des inneren `type`-Feldes `"pointerDown"` oder `"pointerUp"` ist.
- `deltaX`
  - : Eine Ganzzahl, die die horizontale Scroll-Differenz in CSS-Pixeln angibt.
    Geben Sie dies an, wenn der Wert des inneren `type`-Feldes `"scroll"` ist.
- `deltaY`
  - : Eine Ganzzahl, die die vertikale Scroll-Differenz in CSS-Pixeln angibt.
    Geben Sie dies an, wenn der Wert des inneren `type`-Feldes `"scroll"` ist.
- `duration` {{optional_inline}}
  - : Eine nicht-negative Ganzzahl, die die Zeit in Millisekunden angibt, über die die Aktion ausgeführt wird.
    Geben Sie dies an, wenn der Wert des inneren `type`-Feldes `"pause"`, `"pointerMove"` oder `"scroll"` ist.
    Für `"pointerMove"` und `"scroll"` erfolgt die gesamte Bewegung als eine Reihe kleiner Bewegungen über diesen Zeitraum mit einer vom Browser definierten Rate (zum Beispiel ein Schritt pro Animationsbild).
    Wenn mehrere äußere `actions`-Objekte parallel ausgeführt werden, dauert der Tick so lange wie der längste `duration`-Wert in diesem Tick.
- `origin` {{optional_inline}}
  - : Ein String oder ein Objekt, das den Ursprung für die Bewegung oder das Scrollen angibt.
    Geben Sie dies an, wenn der Wert des inneren `type`-Feldes `"pointerMove"` oder `"scroll"` ist.

    Wenn `origin` ein String ist, sind akzeptierte Werte:
    - `"viewport"`: Gibt an, dass die x- und y-Koordinaten relativ zur linken oberen Ecke des Viewports sind.
      Verwenden Sie dies für absolute Positionierungen innerhalb der Seite.
      Dies ist der Standardwert für `"scroll"`, wenn `origin` weggelassen wird.
    - `"pointer"`: Gibt an, dass die x- und y-Koordinaten relativ zur aktuellen Zeigerposition sind.
      Verwenden Sie dies für relative Bewegungen von der aktuellen Position des Zeigers.

    Wenn `origin` ein Objekt ist, schließen Sie die folgenden Felder ein:
    - `type`
      - : Ein String, der auf `"element"` gesetzt ist.
    - `element`
      - : Ein Objekt, das die ID enthält, die das DOM-Element, das als Ursprung verwendet werden soll, eindeutig identifiziert.
        Die ID wird vom Browser zurückgegeben, wenn Sie das Element mit [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes), [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) lokalisieren.

- `value`
  - : Ein String, der den Schlüsselwert enthält.
    Geben Sie dies an, wenn der Wert des inneren `type`-Feldes `"keyDown"` oder `"keyUp"` ist.
    Für spezielle Tasten wie <kbd>Shift</kbd> oder <kbd>Enter</kbd> verwenden Sie die in der Tabelle [WebDriver Tastaturaktionen](https://w3c.github.io/webdriver/#keyboard-actions) definierten Unicode-Codepunkte (zum Beispiel `"\uE008"` für die <kbd>Shift</kbd>-Taste). Für druckbare Zeichen verwenden Sie das Zeichen direkt (zum Beispiel `"a"`).
- Pointer-Eigenschaften
  - : Die folgenden Felder sind Teil des inneren `actions`-Objekts und beschreiben die physikalischen Eigenschaften des Zeigegeräts, wie Maus, Stift oder Touchscreen.
    Geben Sie diese an, wenn der innere `type` `"pointerDown"` oder `"pointerMove"` ist.
    - `width` {{optional_inline}}
      - : Eine nicht-negative Ganzzahl, die die Breite in CSS-Pixeln des Kontaktbereichs des Zeigers angibt.
        Siehe [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width).
    - `height` {{optional_inline}}
      - : Eine nicht-negative Ganzzahl, die die Höhe in CSS-Pixeln des Kontaktbereichs des Zeigers angibt.
        Siehe [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height).
    - `pressure` {{optional_inline}}
      - : Ein Float, der den normierten Druck des Zeigers im Bereich `0.0`–`1.0` angibt.
        Siehe [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure).
    - `tangentialPressure` {{optional_inline}}
      - : Ein Float, der den normierten Tangentialdruck im Bereich `-1.0`–`1.0` angibt.
        Siehe [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure).
    - `twist` {{optional_inline}}
      - : Eine Ganzzahl, die die Drehung im Uhrzeigersinn in Grad des Zeigers im Bereich `0`–`359` angibt.
        Siehe [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist).
    - `altitudeAngle` {{optional_inline}}
      - : Ein Float, der den Höhenwinkel in Radianten des Zeigers im Bereich `0.0`–`π/2` angibt.
        Siehe [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle).
    - `azimuthAngle` {{optional_inline}}
      - : Ein Float, der den Azimutwinkel in Radianten des Zeigers im Bereich `0.0`–`2π` angibt.
        Siehe [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).
- `x`
  - : Eine Zahl (für `"pointerMove"`) oder eine Ganzzahl (für `"scroll"`) die die x-Koordinate angibt.
    Geben Sie dies an, wenn der Wert des inneren `type`-Feldes `"pointerMove"` oder `"scroll"` ist.
- `y`
  - : Eine Zahl (für `"pointerMove"`) oder eine Ganzzahl (für `"scroll"`) die die y-Koordinate angibt.
    Geben Sie dies an, wenn der Wert des inneren `type`-Feldes `"pointerMove"` oder `"scroll"` ist.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Die Aktionssequenz ist fehlerhaft, zum Beispiel wenn ein erforderliches Feld fehlt, ein Feldwert vom falschen Typ ist oder ein äußerer `type`-Wert nicht `"none"`, `"key"`, `"pointer"` oder `"wheel"` ist.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID gefunden.

## Beispiele

### Halten der Shift-Taste während des Klickens auf ein Element

Betrachten Sie ein Szenario, in dem Sie die <kbd>Shift</kbd>-Taste halten möchten, während Sie auf ein Element klicken, zum Beispiel um eine Textauswahl zu erweitern.

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) erhalten Sie die Kontext-ID mithilfe von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) und den Elementbezeichner mithilfe von [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
Senden Sie die folgende Nachricht mit zwei äußeren `actions`-Objekten – einer `"key"`-Quelle und einer `"pointer"`-Quelle – jeweils mit einem äußeren `type` und einem inneren `actions`-Array, die parallel über die folgenden drei Ticks ausgeführt werden:

- Tick 1: Die Tastatur drückt <kbd>Shift</kbd>, während der Zeiger zum Element bewegt wird. Da die `duration` von `pointerMove` als `300` angegeben ist, dauert der Tick 300 ms, welches die längste `duration` in diesem Tick ist.
- Tick 2: Die Tastatur pausiert, während die Zeigertaste gedrückt wird (`pointerDown`). Dieser Tick dauert 0 ms.
- Tick 3: Die <kbd>Shift</kbd>-Taste wird losgelassen (`keyUp`) und die Zeigertaste wird gleichzeitig losgelassen (`pointerUp`). Auch dieser Tick dauert 0 ms.

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

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) erhalten Sie die Kontext-ID mithilfe von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
Senden Sie die folgende Nachricht, die vom oberen linken Rand des Viewports (`x: 0, y: 0`) um `300` CSS-Pixel nach unten scrollt (`deltaY: 300`) ohne horizontales Scrollen (`deltaX: 0`).

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

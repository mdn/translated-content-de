---
title: "MouseEvent: MouseEvent() Konstruktor"
short-title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Der **`MouseEvent()`** Konstruktor erstellt ein neues [`MouseEvent`](/de/docs/Web/API/MouseEvent) Objekt.

## Syntax

```js-nolint
new MouseEvent(type)
new MouseEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/klein-schreibungssensitiv und Browser setzen es auf `click`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseout`, `mouseover`, oder `mouseup`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `screenX` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und die horizontale Position des Mausereignisses auf dem Bildschirm des Benutzers angibt; das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `screenY` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und die vertikale Position des Mausereignisses auf dem Bildschirm des Benutzers angibt; das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientX` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und die horizontale Position des Mausereignisses im Clientfenster des Bildschirms des Benutzers angibt; das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientY` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und die vertikale Position des Mausereignisses im Clientfenster des Bildschirms des Benutzers angibt; das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `ctrlKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>ctrl</kbd>-Taste gleichzeitig gedrückt wurde. Standardmäßig ist dieser auf `false` gesetzt.
    - `shiftKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>shift</kbd>-Taste gleichzeitig gedrückt wurde. Standardmäßig ist dieser auf `false` gesetzt.
    - `altKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>alt</kbd>-Taste gleichzeitig gedrückt wurde. Standardmäßig ist dieser auf `false` gesetzt.
    - `metaKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>meta</kbd>-Taste gleichzeitig gedrückt wurde. Standardmäßig ist dieser auf `false` gesetzt.
    - `button` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und angibt, welche Taste bei Ereignissen im Zusammenhang mit dem Drücken oder Freigeben einer Taste gedrückt ist:

        | Wert | Bedeutung                                                                    |
        | ---- | ---------------------------------------------------------------------------- |
        | `0`  | Haupttaste gedrückt (normalerweise die linke Taste) oder nicht initialisiert |
        | `1`  | Hilfstaste gedrückt (normalerweise die mittlere Taste)                       |
        | `2`  | Sekundärtaste gedrückt (normalerweise die rechte Taste)                      |

    - `buttons` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und angibt, welche Tasten gedrückt sind, wenn das Ereignis ausgelöst wird:

        | Bitfeld-Wert | Bedeutung                                               |
        | ------------ | ------------------------------------------------------- |
        | `0`          | Keine Taste gedrückt                                    |
        | `1`          | Haupttaste gedrückt (normalerweise die linke Taste)     |
        | `2`          | Sekundärtaste gedrückt (normalerweise die rechte Taste) |
        | `4`          | Hilfstaste gedrückt (normalerweise die mittlere Taste)  |

    - `relatedTarget` {{optional_inline}}
      - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), standardmäßig `null`, das das Element angibt, das gerade verlassen wurde
        (im Fall eines [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event))
        oder in das eingetreten wird (im Fall eines [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)).
    - `region` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, der standardmäßig `null` ist und die ID des von dem Ereignis betroffenen Trefferbereichs angibt.
        Das Fehlen eines betroffenen Trefferbereichs wird durch den Wert `null` dargestellt.

    Bei einigen Implementierungen wird das Übergeben von etwas anderem als einer Zahl für die Bildschirm- und Clientfelder einen {{jsxref("TypeError")}} auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent), die Schnittstelle der Objekte, die es konstruiert.

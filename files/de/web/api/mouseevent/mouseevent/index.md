---
title: "MouseEvent: MouseEvent() Konstruktor"
short-title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
l10n:
  sourceCommit: a52714cd9cb44c4883ad5ef27342f28af94edd13
---

{{APIRef("UI Events")}}

Der **`MouseEvent()`** Konstruktor erstellt ein neues [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Objekt.

## Syntax

```js-nolint
new MouseEvent(type)
new MouseEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/klein-schreibungssensitiv und Browser setzen es auf `click`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseout`, `mouseover` oder `mouseup`.
- `options` {{optional_inline}}

  - : Ein Objekt, das _zusätzlich zu den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `screenX` {{optional_inline}}
      - : Eine Zahl, standardmäßig `0`, die die horizontale Position des Mausereignisses auf dem Bildschirm des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `screenY` {{optional_inline}}
      - : Eine Zahl, standardmäßig `0`, die die vertikale Position des Mausereignisses auf dem Bildschirm des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientX` {{optional_inline}}
      - : Eine Zahl, standardmäßig `0`, die die horizontale Position des Mausereignisses im Clientfenster auf dem Bildschirm des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientY` {{optional_inline}}
      - : Eine Zahl, standardmäßig `0`, die die vertikale Position des Mausereignisses im Clientfenster auf dem Bildschirm des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `ctrlKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>ctrl</kbd>-Taste gleichzeitig gedrückt wurde. Standardmäßig `false`.
    - `shiftKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>shift</kbd>-Taste gleichzeitig gedrückt wurde. Standardmäßig `false`.
    - `altKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>alt</kbd>-Taste gleichzeitig gedrückt wurde. Standardmäßig `false`.
    - `metaKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>meta</kbd>-Taste gleichzeitig gedrückt wurde. Standardmäßig `false`.
    - `button` {{optional_inline}}

      - : Eine Zahl, standardmäßig `0`, die beschreibt, welcher Knopf bei Ereignissen im Zusammenhang mit dem Drücken oder Loslassen eines Knopfes gedrückt wird:

        | Wert | Bedeutung                                                                    |
        | ---- | ---------------------------------------------------------------------------- |
        | `0`  | Haupttaste gedrückt (normalerweise die linke Taste) oder nicht initialisiert |
        | `1`  | Hilfstaste gedrückt (normalerweise die mittlere Taste)                       |
        | `2`  | Sekundärtaste gedrückt (normalerweise die rechte Taste)                      |

    - `buttons` {{optional_inline}}

      - : Eine Zahl, standardmäßig `0`, die beschreibt, welche Tasten beim Auslösen des Ereignisses gedrückt sind:

        | Bit-Feld-Wert | Bedeutung                                               |
        | ------------- | ------------------------------------------------------- |
        | `0`           | Keine Taste gedrückt                                    |
        | `1`           | Haupttaste gedrückt (normalerweise die linke Taste)     |
        | `2`           | Sekundärtaste gedrückt (normalerweise die rechte Taste) |
        | `4`           | Hilfstaste gedrückt (normalerweise die mittlere Taste)  |

    - `relatedTarget` {{optional_inline}}
      - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), standardmäßig `null`, das das gerade verlassene
        Element ist (im Fall eines [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event))
        oder in das eingetreten wird (im Fall eines [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)).
    - `region` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, standardmäßig `null`, der die ID der vom Ereignis betroffenen Hit-Region ist.
        Das Fehlen einer betroffenen Hit-Region wird durch den Wert `null` dargestellt.

    In einigen Implementierungen wird ein {{jsxref("TypeError")}} geworfen, wenn etwas anderes als eine Zahl für die screen- und client-Felder übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent), die Schnittstelle der Objekte, die sie konstruiert.

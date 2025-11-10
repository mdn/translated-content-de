---
title: "MouseEvent: MouseEvent() Konstruktor"
short-title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("UI Events")}}

Der **`MouseEvent()`** Konstruktor erstellt ein neues [`MouseEvent`](/de/docs/Web/API/MouseEvent) Objekt.

## Syntax

```js-nolint
new MouseEvent(type)
new MouseEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive und Browser setzen ihn auf `click`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseout`, `mouseover` oder `mouseup`.
- `options` {{optional_inline}}

  - : Ein Objekt, das _zusätzlich zu den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `screenX` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und die horizontale Position des Mausereignisses auf dem Bildschirm des Benutzers darstellt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `screenY` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und die vertikale Position des Mausereignisses auf dem Bildschirm des Benutzers darstellt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientX` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und die horizontale Position des Mausereignisses im clientseitigen Fenster des Benutzers darstellt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientY` {{optional_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und die vertikale Position des Mausereignisses im clientseitigen Fenster des Benutzers darstellt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `ctrlKey` {{optional_inline}}
      - : Ein boolescher Wert, der anzeigt, ob die <kbd>ctrl</kbd>-Taste gleichzeitig gedrückt wurde. Der Standardwert ist `false`.
    - `shiftKey` {{optional_inline}}
      - : Ein boolescher Wert, der anzeigt, ob die <kbd>shift</kbd>-Taste gleichzeitig gedrückt wurde. Der Standardwert ist `false`.
    - `altKey` {{optional_inline}}
      - : Ein boolescher Wert, der anzeigt, ob die <kbd>alt</kbd>-Taste gleichzeitig gedrückt wurde. Der Standardwert ist `false`.
    - `metaKey` {{optional_inline}}
      - : Ein boolescher Wert, der anzeigt, ob die <kbd>meta</kbd>-Taste gleichzeitig gedrückt wurde. Der Standardwert ist `false`.
    - `button` {{optional_inline}}

      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und beschreibt, welche Taste während der Ereignisse im Zusammenhang mit dem Drücken oder Loslassen einer Taste gedrückt wird:

        | Wert | Bedeutung                                                               |
        | ---- | ----------------------------------------------------------------------- |
        | `0`  | Haupttaste gedrückt (meistens die linke Taste) oder nicht initialisiert |
        | `1`  | Hilfstaste gedrückt (meistens die mittlere Taste)                       |
        | `2`  | Sekundärtaste gedrückt (meistens die rechte Taste)                      |

    - `buttons` {{optional_inline}}

      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und beschreibt, welche Tasten gedrückt sind, wenn das Ereignis ausgelöst wird:

        | Bit-Feld Wert | Bedeutung                                          |
        | ------------- | -------------------------------------------------- |
        | `0`           | Keine Taste gedrückt                               |
        | `1`           | Haupttaste gedrückt (meistens die linke Taste)     |
        | `2`           | Sekundärtaste gedrückt (meistens die rechte Taste) |
        | `4`           | Hilfstaste gedrückt (meistens die mittlere Taste)  |

    - `relatedTarget` {{optional_inline}}
      - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), standardmäßig auf `null` gesetzt, das das gerade verlassene Element ist
        (im Fall von [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event))
        oder das betretene Element (im Fall von [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)).
    - `region` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, der standardmäßig auf `null` gesetzt ist und die ID des von dem Ereignis betroffenen Hit-Region darstellt.
        Das Fehlen einer betroffenen Hit-Region wird durch den `null` Wert dargestellt.

    In einigen Implementierungen wird das Übergeben von Werten, die keine Zahl sind, für die Felder `screen` und
    `client` ein {{jsxref("TypeError")}} auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent), die Schnittstelle der Objekte, die sie konstruiert.

---
title: "MouseEvent: MouseEvent()-Konstruktor"
short-title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
l10n:
  sourceCommit: a52714cd9cb44c4883ad5ef27342f28af94edd13
---

{{APIRef("UI Events")}}

Der **`MouseEvent()`**-Konstruktor erstellt ein neues [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Objekt.

## Syntax

```js-nolint
new MouseEvent(type)
new MouseEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn auf `click`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseout`, `mouseover` oder `mouseup`.
- `options` {{optional_inline}}

  - : Ein Objekt, das _zusätzlich zu den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `screenX` {{optional_inline}}
      - : Eine Zahl, die standardmäßig `0` ist und die horizontale Position des Mausereignisses auf dem Bildschirm des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `screenY` {{optional_inline}}
      - : Eine Zahl, die standardmäßig `0` ist und die vertikale Position des Mausereignisses auf dem Bildschirm des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientX` {{optional_inline}}
      - : Eine Zahl, die standardmäßig `0` ist und die horizontale Position des Mausereignisses im Client-Fenster des Bildschirms des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientY` {{optional_inline}}
      - : Eine Zahl, die standardmäßig `0` ist und die vertikale Position des Mausereignisses im Client-Fenster des Bildschirms des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `ctrlKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>ctrl</kbd>-Taste gleichzeitig gedrückt wurde. Er ist standardmäßig `false`.
    - `shiftKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>shift</kbd>-Taste gleichzeitig gedrückt wurde. Er ist standardmäßig `false`.
    - `altKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>alt</kbd>-Taste gleichzeitig gedrückt wurde. Er ist standardmäßig `false`.
    - `metaKey` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die <kbd>meta</kbd>-Taste gleichzeitig gedrückt wurde. Er ist standardmäßig `false`.
    - `button` {{optional_inline}}

      - : Eine Zahl, die standardmäßig `0` ist und beschreibt, welche Taste während Ereignissen im Zusammenhang mit dem Drücken oder Loslassen einer Taste gedrückt wird:

        | Wert | Bedeutung                                                                    |
        | ---- | ---------------------------------------------------------------------------- |
        | `0`  | Haupttaste gedrückt (normalerweise die linke Taste) oder nicht initialisiert |
        | `1`  | Zusatztaste gedrückt (normalerweise die mittlere Taste)                      |
        | `2`  | Sekundärtaste gedrückt (normalerweise die rechte Taste)                      |

    - `buttons` {{optional_inline}}

      - : Eine Zahl, die standardmäßig `0` ist und beschreibt, welche Tasten beim Auslösen des Ereignisses gedrückt werden:

        | Bit-Feld-Wert | Bedeutung                                               |
        | ------------- | ------------------------------------------------------- |
        | `0`           | Keine Taste gedrückt                                    |
        | `1`           | Haupttaste gedrückt (normalerweise die linke Taste)     |
        | `2`           | Sekundärtaste gedrückt (normalerweise die rechte Taste) |
        | `4`           | Zusatztaste gedrückt (normalerweise die mittlere Taste) |

    - `relatedTarget` {{optional_inline}}
      - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das standardmäßig `null` ist und das Element beschreibt, das gerade verlassen wird
        (im Fall von [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event))
        oder betreten wird (im Fall von [`mouseout`](/de/docs/Web/API/Element/mouseout_event) oder [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)).
    - `region` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, der standardmäßig `null` ist und die ID des von dem Ereignis betroffenen Trefferbereichs angibt.
        Das Fehlen eines betroffenen Trefferbereichs wird durch den `null`-Wert dargestellt.

    In einigen Implementierungen wird das Übergeben von etwas anderem als einer Zahl für die Felder `screen` und `client` einen {{jsxref("TypeError")}} werfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent), die Schnittstelle der Objekte, die es konstruiert.

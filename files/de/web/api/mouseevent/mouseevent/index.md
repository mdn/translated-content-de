---
title: "MouseEvent: MouseEvent() Konstruktor"
short-title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
l10n:
  sourceCommit: a52714cd9cb44c4883ad5ef27342f28af94edd13
---

{{APIRef("UI Events")}}

Der **`MouseEvent()`** Konstruktor erstellt ein neues {{domxref("MouseEvent")}} Objekt.

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

  - : Ein Objekt, das _zusätzlich zu den in {{domxref("UIEvent/UIEvent", "UIEvent()")}} definierten Eigenschaften_ folgende Eigenschaften haben kann:

    - `screenX` {{optional_inline}}
      - : Eine Zahl, standardmäßig `0`, die die horizontale Position des Mausereignisses auf dem Bildschirm des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `screenY` {{optional_inline}}
      - : Eine Zahl, standardmäßig `0`, die die vertikale Position des Mausereignisses auf dem Bildschirm des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientX` {{optional_inline}}
      - : Eine Zahl, standardmäßig `0`, die die horizontale Position des Mausereignisses im Client-Bereich des Bildschirms des Benutzers angibt;
        das Setzen dieses Wertes bewegt den Mauszeiger nicht.
    - `clientY` {{optional_inline}}
      - : Eine Zahl, standardmäßig `0`, die die vertikale Position des Mausereignisses im Client-Bereich des Bildschirms des Benutzers angibt;
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

      - : Eine Zahl, standardmäßig `0`, die beschreibt, welche Taste während ereignisbezogener Ereignisse gedrückt wurde:

        | Wert | Bedeutung                                                        |
        | ---- | ---------------------------------------------------------------- |
        | `0`  | Haupttaste gedrückt (normalerweise die linke Taste) oder nicht initialisiert |
        | `1`  | Hilfstaste gedrückt (normalerweise die mittlere Taste)           |
        | `2`  | Sekundärtaste gedrückt (normalerweise die rechte Taste)          |

    - `buttons` {{optional_inline}}

      - : Eine Zahl, standardmäßig `0`, die beschreibt, welche Tasten gedrückt sind, wenn das Ereignis ausgelöst wird:

        | Bitfeld-Wert  | Bedeutung                                              |
        | ------------- | ------------------------------------------------------ |
        | `0`           | Keine Taste gedrückt                                   |
        | `1`           | Haupttaste gedrückt (normalerweise die linke Taste)    |
        | `2`           | Sekundärtaste gedrückt (normalerweise die rechte Taste)|
        | `4`           | Hilfstaste gedrückt (normalerweise die mittlere Taste) |

    - `relatedTarget` {{optional_inline}}
      - : Ein {{domxref("EventTarget")}}, standardmäßig `null`, das das Element ist, das gerade verlassen wird
        (im Fall eines {{domxref("Element/mouseenter_event", "mouseenter")}} oder {{domxref("Element/mouseover_event", "mouseover")}})
        oder betreten wird (im Fall eines {{domxref("Element/mouseout_event", "mouseout")}} oder {{domxref("Element/mouseleave_event", "mouseleave")}}).
    - `region` {{non-standard_inline}} {{optional_inline}}
      - : Ein String, standardmäßig `null`, der die ID der von dem Ereignis betroffenen Trefferregion ist.
        Das Fehlen einer betroffenen Trefferregion wird durch den Wert `null` dargestellt.

    In einigen Implementierungen wird das Übergeben von anderen Werten als Zahlen für die Bildschirm- und
    Client-Felder einen {{jsxref("TypeError")}} auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MouseEvent")}}, die Schnittstelle der Objekte, die er konstruiert.

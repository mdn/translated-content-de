---
title: "PointerEvent: isPrimary-Eigenschaft"
short-title: isPrimary
slug: Web/API/PointerEvent/isPrimary
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`isPrimary`**-Eigenschaft des
[`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces zeigt an, ob das Zeigergerät, das das Ereignis erstellt hat, der _primäre_ Zeiger ist. Sie gibt `true` zurück, wenn der Zeiger, der das Ereignis ausgelöst hat, der primäre ist, und `false` andernfalls.

In einem Multi-Zeiger-Szenario (wie z.B. ein Touchscreen, der mehr als einen Berührungspunkt unterstützt) wird diese Eigenschaft verwendet, um einen _Hauptzeiger_ unter den aktiven Zeigern für jeden Zeigertyp zu identifizieren. Nur ein primärer Zeiger wird _Kompatibilitäts-Mausereignisse_ erzeugen. Autoren, die nur eine Einzelzeiger-Interaktion wünschen, können dies erreichen, indem sie nicht-primäre Zeiger ignorieren.

Ein Zeiger wird als primär betrachtet, wenn der Zeiger ein Mausgerät darstellt. Ein Zeiger, der Stifteingabe darstellt, wird als primäre Stifteingabe betrachtet, wenn sein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wurde, als keine anderen aktiven Zeiger, die Stifteingaben darstellen, existierten. Ein Zeiger, der Berührungseingabe darstellt, wird als primäre Berührungseingabe betrachtet, wenn sein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wurde, als keine anderen aktiven Zeiger, die Berührungseingaben darstellen, existierten.

Wenn zwei oder mehr Zeigergerätetypen gleichzeitig verwendet werden, werden mehrere Zeiger (einer für jeden [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)) als primär betrachtet. Beispielsweise werden ein Berührungskontakt und ein Mauszeiger, die gleichzeitig bewegt werden, Zeiger erzeugen, die beide als primär betrachtet werden. Wenn es mehrere primäre Zeiger gibt, werden diese Zeiger alle _Kompatibilitäts-Mausereignisse_ erzeugen (siehe [Pointer events](/de/docs/Web/API/Pointer_events) für weitere Informationen über Zeiger-, Maus- und Berührungsinteraktionen).

## Wert

Ein boolean, `true`, wenn der Zeiger für dieses Ereignis der primäre Zeiger ist, und `false` andernfalls.

## Beispiele

Dieses Beispiel verdeutlicht die Verwendung des Werts von `isPrimary`, um die geeignete Verarbeitungsfunktion aufzurufen.

```js
target.addEventListener(
  "pointerdown",
  (event) => {
    if (event.isPrimary) {
      process_primary_pointer(event);
    } else {
      process_secondary_pointer(event);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

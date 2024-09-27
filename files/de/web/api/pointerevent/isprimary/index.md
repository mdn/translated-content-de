---
title: "PointerEvent: isPrimary-Eigenschaft"
short-title: isPrimary
slug: Web/API/PointerEvent/isPrimary
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`isPrimary`** der
[`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle gibt an, ob das Zeigegerät, das das Ereignis erstellt hat, der _primäre_ Zeiger ist. Sie gibt `true` zurück, wenn der Zeiger, der das Ereignis ausgelöst hat, der primäre ist, und `false` andernfalls.

In einem Mehrfachzeiger-Szenario (wie einem Touchscreen, der mehr als einen Berührungspunkt unterstützt) wird diese Eigenschaft verwendet, um einen _Master-Zeiger_ unter den aktiven Zeigern für jeden Zeigertyp zu identifizieren. Nur ein primärer Zeiger wird _Kompatibilitäts-Mausevents_ erzeugen. Autoren, die nur eine Einzeigergeschichte wünschen, können dies erreichen, indem sie nicht-primäre Zeiger ignorieren.

Ein Zeiger wird als primär betrachtet, wenn er ein Mausgerät darstellt. Ein Zeiger, der Stifteingaben repräsentiert, wird als primäre Stifteingabe betrachtet, wenn sein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wird, wenn keine anderen aktiven Zeiger vorhanden sind, die Stifteingaben repräsentieren. Ein Zeiger, der Berührungseingaben repräsentiert, wird als primäre Berührungseingabe betrachtet, wenn sein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wird, wenn keine anderen aktiven Zeiger vorhanden sind, die Berührungseingaben repräsentieren.

Wenn zwei oder mehr Zeigegerätetypen gleichzeitig verwendet werden, werden mehrere Zeiger (einer für jeden [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)) als primär betrachtet. Zum Beispiel werden eine Berührungskontaktfläche und ein Mauszeiger, die gleichzeitig bewegt werden, Zeiger erzeugen, die beide als primär betrachtet werden. Wenn es mehrere primäre Zeiger gibt, werden diese Zeiger alle _Kompatibilitäts-Mausevents_ erzeugen (siehe [Zeigerereignisse](/de/docs/Web/API/Pointer_events) für weitere Informationen über Zeiger-, Maus- und Berührungsinteraktionen).

## Wert

Ein Boolean, `true`, wenn der Zeiger für dieses Ereignis der primäre Zeiger ist, und `false` andernfalls.

## Beispiele

Dieses Beispiel zeigt, wie der Wert von `isPrimary` verwendet wird, um die geeignete Verarbeitungsfunktion aufzurufen.

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

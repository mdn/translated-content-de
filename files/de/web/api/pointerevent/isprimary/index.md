---
title: "PointerEvent: isPrimary-Eigenschaft"
short-title: isPrimary
slug: Web/API/PointerEvent/isPrimary
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die **`isPrimary`** schreibgeschützte Eigenschaft des
[`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces gibt an, ob das Zeigegerät, das das Ereignis
erstellt hat, der _primäre_ Zeiger ist oder nicht. Sie gibt `true`
zurück, wenn der Zeiger, der das Ereignis ausgelöst hat, der primäre ist, und
`false` andernfalls.

In einem Mehrzeigerszenario (wie bei einem Touchscreen, der mehr als einen Berührungspunkt
unterstützt), wird diese Eigenschaft verwendet, um einen _Master-Zeiger_ unter den
aktiven Zeigern für jeden Zeigertyp zu identifizieren. Nur ein primärer Zeiger wird
_Kompatibilitäts-Mausereignisse_ erzeugen. Autoren, die nur eine Einzelzeigerinteraktion
wünschen, können dies erreichen, indem sie nicht-primäre Zeiger ignorieren.

Ein Zeiger wird als primär angesehen, wenn er ein Mausgerät darstellt. Ein Zeiger,
der eine Stifteingabe repräsentiert, wird als primäre Stifteingabe angesehen, wenn sein
[`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wurde, während keine anderen aktiven Zeiger, die
Stifteingaben repräsentieren, vorhanden waren. Ein Zeiger, der eine Berührungseingabe darstellt, wird als
primäre Berührungseingabe angesehen, wenn sein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis
ausgelöst wurde, während keine anderen aktiven Zeiger, die Berührungseingaben repräsentieren, vorhanden waren.

Wenn zwei oder mehr Zeigegerätetypen gleichzeitig verwendet werden, werden mehrere Zeiger
(einer für jeden [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)) als primär angesehen. Beispielsweise,
wenn ein Berührungskontakt und ein Mauszeiger gleichzeitig bewegt werden, werden
Zeiger erzeugt, die beide als primär angesehen werden. Wenn es mehrere primäre
Zeiger gibt, werden diese alle _Kompatibilitäts-Mausereignisse_ erzeugen (siehe
[Pointer-Ereignisse](/de/docs/Web/API/Pointer_events) für weitere Informationen über Zeiger-, Maus- und
Berührungsinteraktion).

## Wert

Ein Boolean, `true` wenn der Zeiger für dieses Ereignis der primäre Zeiger ist, und andernfalls `false`.

## Beispiele

Dieses Beispiel zeigt die Verwendung des Wertes von `isPrimary`, um die
entsprechende Verarbeitungsfunktion aufzurufen.

```js
target.addEventListener("pointerdown", (event) => {
  if (event.isPrimary) {
    process_primary_pointer(event);
  } else {
    process_secondary_pointer(event);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

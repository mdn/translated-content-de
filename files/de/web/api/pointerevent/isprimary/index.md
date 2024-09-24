---
title: "PointerEvent: isPrimary-Eigenschaft"
short-title: isPrimary
slug: Web/API/PointerEvent/isPrimary
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`isPrimary`**-Eigenschaft der {{domxref("PointerEvent")}}-Schnittstelle gibt an, ob das Zeigegerät, das das Ereignis ausgelöst hat, der _primäre_ Zeiger ist. Sie gibt `true` zurück, wenn der Zeiger, der das Ereignis ausgelöst hat, der primäre ist, und `false` ansonsten.

In einem Mehrzeiger-Szenario (wie einem Touchscreen, der mehr als einen Berührungspunkt unterstützt) wird diese Eigenschaft verwendet, um einen _Hauptzeiger_ unter den aktiven Zeigern für jeden Zeigertyp zu identifizieren. Nur ein primärer Zeiger wird _Kompatibilitäts-Mausereignisse_ erzeugen. Autoren, die nur eine Einzeiger-Interaktion wünschen, können dies erreichen, indem sie nicht-primäre Zeiger ignorieren.

Ein Zeiger gilt als primär, wenn er ein Mausgerät darstellt. Ein Zeiger, der eine Stifteingabe darstellt, wird als primäre Stifteingabe betrachtet, wenn sein {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignis ausgelöst wurde, als keine anderen aktiven Zeiger, die eine Stifteingabe repräsentieren, existierten. Ein Zeiger, der eine Berührungseingabe darstellt, gilt als primäre Berührungseingabe, wenn sein {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignis ausgelöst wurde, als keine anderen aktiven Zeiger, die eine Berührungseingabe repräsentieren, existierten.

Wenn zwei oder mehr Zeigergerätetypen gleichzeitig verwendet werden, werden mehrere Zeiger (einer für jeden {{domxref("PointerEvent.pointerType", "pointerType")}}) als primär betrachtet. Beispielsweise erzeugen ein Berührungskontakt und ein Mauszeiger, die gleichzeitig bewegt werden, Zeiger, die beide als primär betrachtet werden. Wenn es mehrere primäre Zeiger gibt, werden diese alle _Kompatibilitäts-Mausereignisse_ erzeugen (siehe [Pointer events](/de/docs/Web/API/Pointer_events) für weitere Informationen über Zeiger-, Maus- und Berührungsinteraktionen).

## Wert

Ein boolescher Wert, `true`, wenn der Zeiger für dieses Ereignis der primäre Zeiger ist, und `false` ansonsten.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung des Wertes von `isPrimary`, um die geeignete Verarbeitungsfunktion aufzurufen.

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

## Browserkompatibilität

{{Compat}}

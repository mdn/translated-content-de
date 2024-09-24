---
title: "Event: Eigenschaft returnValue"
short-title: returnValue
slug: Web/API/Event/returnValue
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

Die Eigenschaft **`returnValue`** des {{domxref("Event")}}-Objekts zeigt an, ob die Standardaktion für dieses Ereignis verhindert wurde oder nicht.

Standardmäßig ist sie auf `true` gesetzt, sodass die Standardaktion stattfinden kann. Wenn diese Eigenschaft auf `false` gesetzt wird, wird die Standardaktion verhindert.

> [!NOTE]
> Obwohl `returnValue` in den DOM-Standard aufgenommen wurde, ist es hauptsächlich vorhanden, um bestehende Codes zu unterstützen. Verwenden Sie stattdessen {{DOMxRef("Event.preventDefault", "preventDefault()")}} und {{domxref("Event.defaultPrevented", "defaultPrevented")}} anstelle dieser historischen Eigenschaft.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis nicht abgebrochen wurde; andernfalls, falls das Ereignis abgebrochen wurde oder die Standardaktion verhindert wurde, ist der Wert `false`.

Der Wert von `returnValue` ist das Gegenteil des Werts, der von {{domxref("Event.defaultPrevented", "defaultPrevented")}} zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLDialogElement.returnValue")}}: der Rückgabewert für das {{HTMLElement("dialog")}}.

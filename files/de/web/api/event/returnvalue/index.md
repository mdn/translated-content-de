---
title: "Event: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/Event/returnValue
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

Die [`Event`](/de/docs/Web/API/Event) Eigenschaft **`returnValue`** gibt an, ob die Standardaktion für dieses Ereignis verhindert wurde oder nicht.

Standardmäßig ist sie auf `true` gesetzt, was die Standardaktion erlaubt. Durch das Setzen dieser Eigenschaft auf `false` wird die Standardaktion verhindert.

> [!NOTE]
> Obwohl `returnValue` in den DOM-Standard aufgenommen wurde, ist es hauptsächlich vorhanden, um bestehenden Code zu unterstützen. Verwenden Sie stattdessen [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) anstelle dieser historischen Eigenschaft.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis nicht abgebrochen wurde; andernfalls, wenn das Ereignis abgebrochen wurde oder die Standardaktion verhindert wurde, ist der Wert `false`.

Der Wert von `returnValue` ist das Gegenteil des von [`defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) zurückgegebenen Wertes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue): der Rückgabewert für das {{HTMLElement("dialog")}}.

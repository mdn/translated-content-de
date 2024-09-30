---
title: SVGEvent
slug: Web/API/SVGEvent
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{deprecated_header}}{{APIRef("SVG")}}

Die **`SVGEvent`** Schnittstelle repräsentiert das Ereignisobjekt für die meisten SVG-bezogenen Ereignisse.

## Instanzeigenschaften

| Eigenschaft                     | Typ                        | Beschreibung                                           |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{ReadOnlyInline}}     | [`EventTarget`](/de/docs/Web/API/EventTarget) | Das Ereignisziel (das oberste Ziel im DOM-Baum).       |
| `type` {{ReadOnlyInline}}       | string                     | Der Typ des Ereignisses.                               |
| `bubbles` {{ReadOnlyInline}}    | Ein boolescher Wert        | Gibt an, ob das Ereignis normalerweise "bubbelt" oder nicht. |
| `cancelable` {{ReadOnlyInline}} | Ein boolescher Wert        | Gibt an, ob das Ereignis abgebrochen werden kann oder nicht. |

---
title: "TouchEvent: metaKey Eigenschaft"
short-title: metaKey
slug: Web/API/TouchEvent/metaKey
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`metaKey`** Eigenschaft des [`TouchEvent`](/de/docs/Web/API/TouchEvent) Interfaces gibt einen booleschen Wert zurück, der angibt, ob die <kbd>Meta</kbd>-Taste aktiviert ist, wenn das Touch-Event erstellt wird. Ist diese Taste aktiviert, ist der Wert des Attributs `true`. Andernfalls ist er `false`.

Diese Eigenschaft ist {{ReadOnlyInline}}.

> [!NOTE]
> Auf Macintosh-Tastaturen ist dies die <kbd>⌘ Command</kbd>-Taste. Auf Windows-Tastaturen ist dies die Windows-Taste (<kbd>⊞</kbd>).

## Wert

Ein boolescher Wert, der `true` ist, wenn die <kbd>Meta</kbd>-Taste für dieses Ereignis aktiviert ist; und `false`, wenn die <kbd>Meta</kbd> nicht aktiviert ist.

## Beispiele

Das [TouchEvent.altKey Beispiel](/de/docs/Web/API/TouchEvent/altKey#examples) enthält ein Beispiel für die Verwendung dieser Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

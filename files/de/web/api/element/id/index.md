---
title: "Element: id-Eigenschaft"
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{ ApiRef("DOM") }}

Die **`id`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
repräsentiert die Kennung des Elements und spiegelt das
globale Attribut [**`id`**](/de/docs/Web/HTML/Reference/Global_attributes/id) wider.

Wenn der `id`-Wert nicht die leere Zeichenkette ist, muss er in einem Dokument eindeutig sein.

Die `id` wird häufig mit [`getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet, um ein bestimmtes Element abzurufen. Ein weiterer häufiger Anwendungsfall ist die Verwendung der [ID eines Elements als Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wenn das Dokument mit [CSS](/de/docs/Web/CSS) gestaltet wird.

> [!NOTE]
> Kennungen sind groß-/kleinschreibungssensitiv, aber Sie sollten es vermeiden,
> IDs zu erstellen, die sich nur in der Großschreibung unterscheiden.

## Wert

Eine Zeichenkette.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das DOM-[**id**](/de/docs/Web/HTML/Reference/Global_attributes/id)
  globale Attribut.

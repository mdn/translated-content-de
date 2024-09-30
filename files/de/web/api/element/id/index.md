---
title: "Element: id-Eigenschaft"
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ ApiRef("DOM") }}

Die **`id`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle stellt die Kennung des Elements dar und spiegelt das [**`id`**](/de/docs/Web/HTML/Global_attributes/id) globale Attribut wider.

Wenn der `id`-Wert nicht der leere String ist, muss er in einem Dokument eindeutig sein.

Das `id` wird häufig mit [`getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet, um ein bestimmtes Element abzurufen. Ein weiterer häufiger Fall ist die Verwendung einer [ID als Selektor](/de/docs/Web/CSS/ID_selectors) beim Styling des Dokuments mit [CSS](/de/docs/Web/CSS).

> [!NOTE]
> Kennungen sind groß- und kleinschreibungssensitiv, aber Sie sollten vermeiden, IDs zu erstellen, die sich nur in der Großschreibung unterscheiden.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das DOM [**id**](/de/docs/Web/HTML/Global_attributes/id)
  globale Attribut.

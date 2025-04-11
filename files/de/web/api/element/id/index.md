---
title: "Element: id-Eigenschaft"
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ ApiRef("DOM") }}

Die **`id`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
repräsentiert die Kennung des Elements und spiegelt das
globale Attribut [**`id`**](/de/docs/Web/HTML/Reference/Global_attributes/id) wider.

Wenn der `id`-Wert nicht die leere Zeichenkette ist, muss er in einem Dokument eindeutig sein.

Die `id` wird oft mit [`getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet, um ein bestimmtes Element abzurufen. Ein weiterer häufiger Fall ist die Verwendung der [ID eines Elements als Selektor](/de/docs/Web/CSS/ID_selectors), um das Dokument mit [CSS](/de/docs/Web/CSS) zu stylen.

> [!NOTE]
> Kennungen sind groß-/kleinschreibungssensitiv, jedoch sollten Sie vermeiden,
> IDs zu erstellen, die sich nur in der Groß-/Kleinschreibung unterscheiden.

## Wert

Ein Zeichenkette.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das DOM [**id**](/de/docs/Web/HTML/Reference/Global_attributes/id)
  globale Attribut.

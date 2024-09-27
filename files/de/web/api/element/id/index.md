---
title: "Element: `id`-Eigenschaft"
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ ApiRef("DOM") }}

Die **`id`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle repräsentiert den Bezeichner des Elements und spiegelt das [**`id`**](/de/docs/Web/HTML/Global_attributes/id) globale Attribut wider.

Wenn der `id`-Wert nicht der leere String ist, muss er in einem Dokument eindeutig sein.

Die `id` wird häufig mit [`getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet, um ein bestimmtes Element abzurufen. Ein weiterer häufiger Fall ist die Verwendung der [ID als Selektor](/de/docs/Web/CSS/ID_selectors), um das Dokument mit [CSS](/de/docs/Web/CSS) zu stylen.

> [!NOTE]
> Bezeichner sind case-sensitiv, aber Sie sollten vermeiden, IDs zu erstellen, die sich nur in der Groß- und Kleinschreibung unterscheiden.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das DOM [**id**](/de/docs/Web/HTML/Global_attributes/id) globale Attribut.

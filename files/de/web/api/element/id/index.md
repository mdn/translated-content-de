---
title: "Element: id-Eigenschaft"
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: 88c33ab5f4ccd88d13a0a5272de45d4d33f9f636
---

{{ ApiRef("DOM") }}

Die **`id`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt das Inhaltsattribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements wider.

Wenn der `id`-Wert nicht die leere Zeichenfolge ist, muss er in einem Dokument eindeutig sein.

Die `id` wird häufig mit [`getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet, um ein bestimmtes Element abzurufen.
Ein weiterer häufiger Anwendungsfall ist die Verwendung der ID eines Elements [als Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wenn das Dokument mit [CSS](/de/docs/Web/CSS) gestaltet wird.

> [!NOTE]
> Bezeichner unterscheiden zwischen Groß- und Kleinschreibung, aber Sie sollten vermeiden,
> IDs zu erstellen, die sich nur in der Groß- und Kleinschreibung unterscheiden.

## Wert

Eine Zeichenfolge.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das globale DOM-Attribut [**id**](/de/docs/Web/HTML/Reference/Global_attributes/id).

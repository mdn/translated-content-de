---
title: "Element: id-Eigenschaft"
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ ApiRef("DOM") }}

Die **`id`**-Eigenschaft des {{domxref("Element")}}-Interfaces repräsentiert die Kennung des Elements, die das globale [**`id`**](/de/docs/Web/HTML/Global_attributes/id) Attribut widerspiegelt.

Wenn der `id`-Wert nicht der leere String ist, muss er innerhalb eines Dokuments eindeutig sein.

Die `id` wird häufig mit {{domxref("Document.getElementById()", "getElementById()")}} verwendet, um ein bestimmtes Element abzurufen. Ein weiterer häufiger Anwendungsfall ist die Verwendung der [ID eines Elements als Selektor](/de/docs/Web/CSS/ID_selectors) beim Stylen des Dokuments mit [CSS](/de/docs/Web/CSS).

> [!NOTE]
> Kennungen sind groß- und kleinschreibungssensitiv, aber Sie sollten es vermeiden, IDs zu erstellen, die sich nur in der Groß- und Kleinschreibung unterscheiden.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das DOM [**id**](/de/docs/Web/HTML/Global_attributes/id)
  globale Attribut.

---
title: "HTMLElement: autofocus-Eigenschaft"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: 01d5901fdbad83033fe1f86486f652d07db7ce2a
---

{{APIRef("HTML DOM")}}

Die **`autofocus`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle repräsentiert einen booleschen Wert, der das HTML-Globale-Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) widerspiegelt. Dies gibt an, ob das Element beim Laden der Seite fokussiert sein soll oder, wenn es in einem {{htmlelement("dialog")}} oder [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Element verschachtelt ist, wenn das `<dialog>`- oder Popover-Element angezeigt wird.

Nur ein Element innerhalb eines Dokuments, eines `<dialog>`-Elements oder eines Popovers darf dieses Attribut spezifiziert haben. Wenn es auf mehrere Elemente angewendet wird, erhält das erste fokussierbare Element den Fokus.

> [!NOTE]
> Das Setzen dieser Eigenschaft setzt den Fokus nicht auf das zugehörige Element: Es weist den Browser lediglich an, den Fokus darauf zu setzen, wenn _das Element in das Dokument eingefügt ist_. Das Setzen nach der Einfügung, also meistens nach dem Laden des Dokuments, hat keine sichtbare Auswirkung.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

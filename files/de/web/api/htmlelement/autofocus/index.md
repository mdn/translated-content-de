---
title: "HTMLElement: autofocus Eigenschaft"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`autofocus`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle repräsentiert einen booleschen Wert, der das HTML-Globale-Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Elements/select#autofocus) widerspiegelt. Dieses Attribut gibt an, ob das Steuerelement fokussiert werden soll, wenn die Seite geladen wird oder wenn ein Dialog oder Popover angezeigt wird, falls es in einem Element innerhalb von {{htmlelement("dialog")}}-Elementen oder Elementen mit gesetztem `popover`-Attribut angegeben ist.

Nur ein formularassoziiertes Element innerhalb eines Dokuments, oder ein {{htmlelement("dialog")}}-Element, oder ein Element, dessen `popover`-Attribut gesetzt ist, kann dieses Attribut spezifizieren. Wenn es mehrere gibt, erhält das erste eingefügte Element mit gesetztem Attribut, in der Regel das erste solche Element auf der Seite, den initialen Fokus.

> [!NOTE]
> Das Setzen dieser Eigenschaft fokussiert das zugehörige Element nicht: Es teilt dem Browser lediglich mit, dass es fokussiert werden soll, _wenn das Element in das Dokument eingefügt wird_. Das Setzen nach der Einfügung, das ist meistens nach dem Laden des Dokuments, hat keine sichtbare Wirkung.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

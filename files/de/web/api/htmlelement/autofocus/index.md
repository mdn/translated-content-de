---
title: "HTMLElement: autofocus-Eigenschaft"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`autofocus`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle stellt einen booleschen Wert dar, der das HTML-Globale-Attribut [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) widerspiegelt. Dieses Attribut gibt an, ob das Steuerelement beim Laden der Seite, oder wenn ein Dialog oder Popover angezeigt wird, fokussiert werden soll, wenn es in einem Element innerhalb von {{htmlelement("dialog")}}-Elementen oder Elementen mit gesetztem `popover`-Attribut spezifiziert ist.

Innerhalb eines Dokuments, eines {{htmlelement("dialog")}}-Elements oder eines Elements mit gesetztem `popover`-Attribut kann nur ein form-assoziiertes Element dieses Attribut spezifiziert haben. Wenn es mehrere gibt, erhält das erste eingefügte Element mit gesetztem Attribut, in der Regel das erste solche Element auf der Seite, den initialen Fokus.

> [!NOTE]
> Das Setzen dieser Eigenschaft fokussiert das zugehörige Element nicht: Es teilt dem Browser lediglich mit, dieses Element zu fokussieren, _wenn das Element in das Dokument eingefügt wird_. Das Setzen nach der Einfügung, also meist nach dem Laden des Dokuments, hat keine sichtbare Wirkung.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

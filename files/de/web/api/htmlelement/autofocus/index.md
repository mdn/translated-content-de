---
title: "HTMLElement: autofocus-Eigenschaft"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`autofocus`**-Eigenschaft des {{domxref("HTMLElement")}}-Interfaces repräsentiert einen booleschen Wert, der das [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) globale HTML-Attribut widerspiegelt. Dieses Attribut zeigt an, ob das Steuerelement fokussiert werden soll, wenn die Seite geladen wird, oder wenn ein Dialog oder ein Popover angezeigt wird, sofern es in einem Element innerhalb von {{htmlelement("dialog")}}-Elementen oder Elementen mit gesetztem Popover-Attribut angegeben ist.

Nur ein formularassoziiertes Element innerhalb eines Dokuments, oder ein {{htmlelement("dialog")}}-Element, oder ein Element mit gesetztem `popover`-Attribut kann dieses Attribut angegeben haben. Wenn es mehrere gibt, erhält das zuerst eingefügte Element mit gesetztem Attribut, normalerweise das erste solche Element auf der Seite, den initialen Fokus.

> [!NOTE]
> Das Setzen dieser Eigenschaft führt nicht dazu, dass der Fokus auf das zugeordnete Element gesetzt wird: Es teilt dem Browser lediglich mit, dass er den Fokus darauf setzen soll, wenn _das Element in das Dokument eingefügt wird_. Das Setzen der Eigenschaft nach der Einfügung, das heißt meistens nach dem Laden des Dokuments, hat keine sichtbare Wirkung.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

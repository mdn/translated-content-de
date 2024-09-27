---
title: "HTMLElement: autofocus-Eigenschaft"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`autofocus`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle repräsentiert einen booleschen Wert, der das [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) HTML-Globale Attribut widerspiegelt. Dieses Attribut gibt an, ob die Steuerung fokussiert werden soll, wenn die Seite geladen wird oder wenn ein Dialog oder ein Popover angezeigt wird, falls es in einem Element innerhalb von {{htmlelement("dialog")}}-Elementen oder Elementen, deren `popover`-Attribut gesetzt ist, spezifiziert ist.

Nur ein Formular-assoziiertes Element innerhalb eines Dokuments oder ein {{htmlelement("dialog")}}-Element oder ein Element, dessen `popover`-Attribut gesetzt ist, kann dieses Attribut spezifiziert haben. Falls es mehrere gibt, erhält das erste eingefügte Element mit gesetztem Attribut, gewöhnlich das erste solche Element auf der Seite, den initialen Fokus.

> [!NOTE]
> Das Setzen dieser Eigenschaft setzt den Fokus nicht auf das zugehörige Element: Es teilt dem Browser lediglich mit, beim _Einfügen des Elements_ in das Dokument den Fokus darauf zu setzen. Das Setzen der Eigenschaft nach dem Einfügen, also meistens nach dem Laden des Dokuments, hat keinen sichtbaren Effekt.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

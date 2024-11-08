---
title: "HTMLLIElement: Wert-Eigenschaft"
short-title: value
slug: Web/API/HTMLLIElement/value
l10n:
  sourceCommit: 4032e31c51141511f5aa4068d5572e4736584afe
---

{{APIRef("HTML DOM")}}

Die **`value`**-Eigenschaft der [`HTMLLIElement`](/de/docs/Web/API/HTMLLIElement)-Schnittstelle gibt die Ordinalposition des _Listenelements_ innerhalb eines gegebenen {{HTMLElement("ol")}} an. Sie kann kleiner als `0` sein. Wenn das {{HTMLElement("li")}}-Element kein Kind eines {{HTMLElement("ol")}}-Elements ist, hat die Eigenschaft keine Bedeutung.

Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/li#value)-Attribut des entsprechenden {{htmlelement("li")}}-Elements wider. Wenn das `<li>`-Element kein `value`-Inhaltsattribut spezifiziert hat, dann gibt diese Eigenschaft standardmäßig `0` zurück, selbst wenn das Element beim Rendern möglicherweise einen standardmäßig zugewiesenen ordinalen Wert hat.

## Wert

Ein ganzzahliger Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

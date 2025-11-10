---
title: "HTMLLIElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLLIElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`value`**-Eigenschaft der [`HTMLLIElement`](/de/docs/Web/API/HTMLLIElement)-Schnittstelle gibt die Ordnungsposition des _Listenelements_ innerhalb eines gegebenen {{HTMLElement("ol")}} an. Sie kann kleiner als `0` sein. Wenn das {{HTMLElement("li")}}-Element kein Kind eines {{HTMLElement("ol")}}-Elements ist, hat die Eigenschaft keine Bedeutung.

Sie spiegelt das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value)-Attribut des entsprechenden {{HTMLElement("li")}}-Elements wider. Falls das `<li>`-Element kein `value`-Inhaltsattribut angegeben hat, gibt diese Eigenschaft standardmäßig `0` zurück, selbst wenn das Element beim Rendern unter Umständen einen seriell zugewiesenen Ordnungswert hat.

## Wert

Ein ganzzahliger Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

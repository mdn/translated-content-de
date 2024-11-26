---
title: "HTMLLinkElement: as property"
short-title: as
slug: Web/API/HTMLLinkElement/as
l10n:
  sourceCommit: 782dea39dbc29c19c82fef8fd8a1222db3c248ab
---

{{APIRef("HTML DOM")}}

Die **`as`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces gibt einen String zurück, der den Typ des Inhalts darstellt, der von einem Link-Element vorgeladen werden soll.

Die `as`-Eigenschaft muss einen Wert für Link-Elemente haben, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload), andernfalls wird die Ressource nicht abgerufen. Sie kann auch auf Link-Elemente angewendet werden, bei denen [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload), aber wenn sie weggelassen wird, wird sie standardmäßig auf `script` gesetzt. Die Eigenschaft sollte nicht für andere Typen von Link-Elementen gesetzt werden, wie z. B. `rel="prefetch"`.

Diese Eigenschaft spiegelt den Wert des [`as`-Attributs](/de/docs/Web/HTML/Element/link#as) des HTML-`<link>`-Elements wider.

## Wert

Ein String mit den folgenden zulässigen Werten: `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"script"`, `"style"`, `"track"`, `"video"`, `"worker"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

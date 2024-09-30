---
title: "HTMLLinkElement: as Eigenschaft"
short-title: as
slug: Web/API/HTMLLinkElement/as
l10n:
  sourceCommit: c30827dea447e33d0d875cb3e7e1632b56148e5f
---

{{APIRef("HTML DOM")}}

Die **`as`**-Eigenschaft der Schnittstelle [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) gibt einen String zurück, der den Typ des Inhalts darstellt, der von einem Link-Element vorgeladen werden soll.

Die `as`-Eigenschaft muss bei Link-Elementen einen Wert haben, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) gesetzt ist, da sonst die Ressource nicht geladen wird. Sie kann auch bei Link-Elementen angewendet werden, bei denen [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/preload) gesetzt ist, aber falls sie weggelassen wird, ist der Standardwert `script`. Die Eigenschaft sollte nicht für andere Arten von Link-Elementen gesetzt werden, wie beispielsweise bei `rel="prefetch"`.

Diese Eigenschaft spiegelt den Wert des [`as`-Attributs](/de/docs/Web/HTML/Element/link#as) des HTML-Elements [`<link>`](/de/docs/Web/HTML/Element/link) wider.

## Wert

Ein String mit den folgenden erlaubten Werten: `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"script"`, `"style"`, `"track"`, `"video"`, `"worker"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

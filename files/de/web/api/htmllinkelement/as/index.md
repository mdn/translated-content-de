---
title: "HTMLLinkElement: as-Eigenschaft"
short-title: as
slug: Web/API/HTMLLinkElement/as
l10n:
  sourceCommit: c30827dea447e33d0d875cb3e7e1632b56148e5f
---

{{APIRef("HTML DOM")}}

Die **`as`**-Eigenschaft des {{domxref("HTMLLinkElement")}}-Interfaces gibt einen String zurück, der den Typ des Inhalts darstellt, der von einem Link-Element vorab geladen werden soll.

Die `as`-Eigenschaft muss einen Wert für Link-Elemente haben, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) gesetzt ist, da sonst die Ressource nicht abgerufen wird.
Sie kann auch auf Link-Elemente angewendet werden, bei denen [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/preload) gesetzt ist, aber wenn sie weggelassen wird, wird `script` als Standardwert genommen.
Die Eigenschaft sollte nicht für andere Arten von Link-Elementen wie z.B. `rel="prefetch"` gesetzt werden.

Diese Eigenschaft spiegelt den Wert des [`as`-Attributs](/de/docs/Web/HTML/Element/link#as) des HTML-Elements [`<link>`](/de/docs/Web/HTML/Element/link) wider.

## Wert

Ein String mit den folgenden erlaubten Werten: `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"script"`, `"style"`, `"track"`, `"video"`, `"worker"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

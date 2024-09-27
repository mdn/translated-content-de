---
title: "HTMLLinkElement: as-Eigenschaft"
short-title: as
slug: Web/API/HTMLLinkElement/as
l10n:
  sourceCommit: c30827dea447e33d0d875cb3e7e1632b56148e5f
---

{{APIRef("HTML DOM")}}

Die **`as`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces gibt einen String zurück, der den Inhaltstyp repräsentiert, der von einem Link-Element vorgeladen werden soll.

Die `as`-Eigenschaft muss für Link-Elemente, die [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) verwenden, einen Wert haben, da sonst die Ressource nicht abgerufen wird.
Sie kann auch auf Link-Elemente angewendet werden, bei denen [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/preload) verwendet wird; wird sie jedoch weggelassen, wird `script` als Standardwert verwendet.
Die Eigenschaft sollte nicht für andere Arten von Link-Elementen, wie `rel="prefetch"`, gesetzt werden.

Diese Eigenschaft spiegelt den Wert des [`as`-Attributs](/de/docs/Web/HTML/Element/link#as) des HTML-Elements [`<link>`](/de/docs/Web/HTML/Element/link) wider.

## Wert

Ein String mit den folgenden erlaubten Werten: `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"script"`, `"style"`, `"track"`, `"video"`, `"worker"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "HTMLLinkElement: as-Eigenschaft"
short-title: as
slug: Web/API/HTMLLinkElement/as
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`as`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) Interfaces gibt einen String zurück, der den Typ des Inhalts repräsentiert, der von einem Link-Element vorgeladen werden soll.

Die `as`-Eigenschaft muss für Link-Elemente einen Wert haben, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwendet wird, da die Ressource sonst nicht abgerufen wird.
Sie kann auch auf Link-Elemente angewendet werden, bei denen [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) verwendet wird, aber falls sie weggelassen wird, wird `script` als Standardwert genommen.
Die Eigenschaft sollte nicht für andere Typen von Link-Elementen gesetzt werden, wie z.B. `rel="prefetch"`.

Diese Eigenschaft spiegelt den Wert des [`as`-Attributs](/de/docs/Web/HTML/Reference/Elements/link#as) des HTML-`<link>`-Elements wider.

## Wert

Ein String mit den folgenden erlaubten Werten: `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"script"`, `"style"`, `"track"`, `"video"`, `"worker"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

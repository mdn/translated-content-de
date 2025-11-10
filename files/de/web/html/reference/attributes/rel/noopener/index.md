---
title: rel="noopener"
slug: Web/HTML/Reference/Attributes/rel/noopener
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`noopener`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut der {{HTMLElement("a")}}, {{HTMLElement("area")}}, und {{HTMLElement("form")}} Elemente instruiert den Browser, zur Zielressource zu navigieren, ohne dem neuen Browsing-Kontext Zugriff auf das Dokument zu gewähren, das es geöffnet hat — indem die [`Window.opener`](/de/docs/Web/API/Window/opener) Eigenschaft im geöffneten Fenster nicht gesetzt wird (sie gibt `null` zurück).

Dies ist besonders nützlich, wenn man auf nicht vertrauenswürdige Links zugreift, um sicherzustellen, dass sie das ursprüngliche Dokument nicht über die [`Window.opener`](/de/docs/Web/API/Window/opener) Eigenschaft manipulieren können (siehe [Über rel=noopener](https://mathiasbynens.github.io/rel-noopener/) für mehr Details), während dennoch der `Referer` HTTP-Header bereitgestellt wird (es sei denn, `noreferrer` wird ebenfalls verwendet).

Beachten Sie, dass alle nicht leeren Zielnamen, die nicht `_top`, `_self` und `_parent` sind, wie `_blank` behandelt werden, wenn entschieden wird, ob ein neues Fenster/ein neuer Tab geöffnet werden soll, wenn `noopener` verwendet wird.

> [!NOTE]
> Das Setzen von `target="_blank"` bei `<a>`, `<area>` und `<form>` Elementen impliziert das gleiche `rel` Verhalten wie das Setzen von `rel="noopener"`, welches `window.opener` nicht setzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: '`rel="noopener"` HTML-Attributwert'
short-title: noopener
slug: Web/HTML/Reference/Attributes/rel/noopener
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Das **`noopener`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut der {{HTMLElement("a")}}, {{HTMLElement("area")}}, und {{HTMLElement("form")}} Elemente weist den Browser an, zur Zielressource zu navigieren, ohne dem neuen Browsing-Kontext Zugriff auf das Dokument zu gewähren, das es geöffnet hat — indem die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft im geöffneten Fenster nicht gesetzt wird (sie gibt `null` zurück).

Dies ist besonders nützlich, wenn Sie unzuverlässige Links öffnen, um sicherzustellen, dass diese das ursprüngliche Dokument nicht über die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft manipulieren können (siehe [Über rel=noopener](https://mathiasbynens.github.io/rel-noopener/) für mehr Details), während immer noch der `Referer`-HTTP-Header bereitgestellt wird (es sei denn, `noreferrer` wird ebenfalls verwendet).

Beachten Sie, dass bei Verwendung von `noopener` nicht-leere Zielnamen außer `_top`, `_self` und `_parent` alle wie `_blank` behandelt werden, um zu entscheiden, ob ein neues Fenster oder Tab geöffnet werden soll.

> [!NOTE]
> Die Verwendung von `target="_blank"` bei `<a>`, `<area>` und `<form>` Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von `rel="noopener"`, was `window.opener` nicht setzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

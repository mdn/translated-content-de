---
title: rel=noopener
slug: Web/HTML/Reference/Attributes/rel/noopener
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`noopener`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut der {{HTMLElement("a")}}, {{HTMLElement("area")}} und {{HTMLElement("form")}} Elemente weist den Browser an, zur Zielressource zu navigieren, ohne dem neuen Browserkontext Zugriff auf das Dokument zu gewähren, das es geöffnet hat - indem die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft im geöffneten Fenster nicht gesetzt wird (sie gibt `null` zurück).

Dies ist besonders nützlich, wenn nicht vertrauenswürdige Links geöffnet werden, um sicherzustellen, dass sie das ursprüngliche Dokument nicht über die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft manipulieren können (siehe [Über rel=noopener](https://mathiasbynens.github.io/rel-noopener/) für mehr Details), während trotzdem der `Referer` HTTP-Header bereitgestellt wird (es sei denn, `noreferrer` wird ebenfalls verwendet).

Beachten Sie, dass bei der Verwendung von `noopener` alle nicht leeren Zielnamen außer `_top`, `_self` und `_parent` in Bezug auf die Entscheidung, ob ein neues Fenster/Tab geöffnet wird, wie `_blank` behandelt werden.

> [!NOTE]
> Das Setzen von `target="_blank"` bei `<a>`, `<area>` und `<form>` Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von `rel="noopener"`, welches `window.opener` nicht setzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

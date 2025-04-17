---
title: rel="noopener"
slug: Web/HTML/Reference/Attributes/rel/noopener
l10n:
  sourceCommit: 0389dd29e0827791ad9d2f6b8cda217c121f9c19
---

{{HTMLSidebar}}

Das Schlüsselwort **`noopener`** für das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut der {{HTMLElement("a")}}, {{HTMLElement("area")}} und {{HTMLElement("form")}}-Elemente weist den Browser an, zur Zielressource zu navigieren, ohne dem neuen Browsing-Kontext Zugriff auf das Dokument zu gewähren, das es geöffnet hat — indem die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft im geöffneten Fenster nicht gesetzt wird (sie gibt `null` zurück).

Dies ist besonders nützlich, wenn unzuverlässige Links geöffnet werden, um sicherzustellen, dass diese nicht das ursprüngliche Dokument über die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft manipulieren können (siehe [Über rel=noopener](https://mathiasbynens.github.io/rel-noopener/) für weitere Details), während weiterhin der `Referer`-HTTP-Header bereitgestellt wird (es sei denn, `noreferrer` wird ebenfalls verwendet).

Beachten Sie, dass, wenn `noopener` verwendet wird, nicht leere Zielnamen, außer `_top`, `_self` und `_parent`, alle wie `_blank` behandelt werden, wenn entschieden wird, ob ein neues Fenster/Tab geöffnet wird.

> [!NOTE]
> Das Setzen von `target="_blank"` auf `<a>`, `<area>` und `<form>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von `rel="noopener"`, das `window.opener` nicht setzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

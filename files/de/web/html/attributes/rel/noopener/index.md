---
title: rel=noopener
slug: Web/HTML/Attributes/rel/noopener
l10n:
  sourceCommit: 866b654fa7170e8981676b73953c642739391506
---

{{HTMLSidebar}}

Das **`noopener`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut der {{HTMLElement("a")}}, {{HTMLElement("area")}} und {{HTMLElement("form")}} Elemente weist den Browser an, zur Zielressource zu navigieren, ohne dem neuen Browsing-Kontext Zugriff auf das Dokument zu gewähren, das es geöffnet hat — indem die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft im geöffneten Fenster nicht gesetzt wird (sie gibt `null` zurück).

Dies ist besonders nützlich, wenn unzuverlässige Links geöffnet werden, um sicherzustellen, dass sie das ursprüngliche Dokument nicht über die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft manipulieren können (siehe [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/) für weitere Details), während dennoch der `Referer` HTTP-Header bereitgestellt wird (es sei denn, `noreferrer` wird ebenfalls verwendet).

Beachten Sie, dass bei Verwendung von `noopener` nicht-leere Zielnamen, die nicht `_top`, `_self` und `_parent` sind, alle in Bezug auf die Entscheidung, ob ein neues Fenster oder Tab geöffnet werden soll, wie `_blank` behandelt werden.

> [!NOTE]
> Das Setzen von `target="_blank"` auf `<a>`, `<area>` und `<form>` Elementen bietet implizit das gleiche `rel` Verhalten wie das Setzen von `rel="noopener"`, welches `window.opener` nicht setzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: rel=noopener
slug: Web/HTML/Attributes/rel/noopener
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{HTMLSidebar}}

Das **`noopener`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut der {{HTMLElement("a")}}, {{HTMLElement("area")}} und {{HTMLElement("form")}} Elemente weist den Browser an, zur Zielressource zu navigieren, ohne dem neuen Browsing-Kontext Zugriff auf das Dokument zu gewähren, das es geöffnet hat – indem die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft im geöffneten Fenster nicht gesetzt wird (es gibt `null` zurück).

Dies ist besonders nützlich, wenn unzuverlässige Links geöffnet werden, da sichergestellt wird, dass sie das ursprüngliche Dokument nicht über die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft manipulieren können (siehe [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/) für weitere Details), während der `Referer` HTTP-Header trotzdem bereitgestellt wird (es sei denn, `noreferrer` wird ebenfalls verwendet).

Beachten Sie, dass wenn `noopener` verwendet wird, alle nicht leeren Zielnamen außer `_top`, `_self` und `_parent` in Bezug darauf, ob ein neues Fenster oder Tab geöffnet wird, wie `_blank` behandelt werden.

> [!NOTE]
> Das Setzen von `target="_blank"` auf `<a>`-Elementen liefert nun implizit das gleiche `rel`-Verhalten wie das Setzen von `rel="noopener"`, welches `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](/de/docs/Web/HTML/Element/a#browser_compatibility) für den Unterstützungsstatus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

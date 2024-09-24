---
title: rel=noopener
slug: Web/HTML/Attributes/rel/noopener
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{HTMLSidebar}}

Das **`noopener`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut der {{HTMLElement("a")}}, {{HTMLElement("area")}} und {{HTMLElement("form")}} Elemente weist den Browser an, zur Zielressource zu navigieren, ohne dem neuen Browsing-Kontext Zugriff auf das Dokument zu gewähren, das es geöffnet hat — indem die {{DOMxRef("Window.opener")}} Eigenschaft im geöffneten Fenster nicht gesetzt wird (sie gibt `null` zurück).

Dies ist besonders nützlich beim Öffnen von nicht vertrauenswürdigen Links, um sicherzustellen, dass diese nicht das ursprungsgebende Dokument über die {{DOMxRef("Window.opener")}} Eigenschaft manipulieren können (siehe [Über rel=noopener](https://mathiasbynens.github.io/rel-noopener/) für weitere Details), während der `Referer` HTTP-Header weiterhin bereitgestellt wird (es sei denn, es wird auch `noreferrer` verwendet).

Beachten Sie, dass bei Verwendung von `noopener` alle nicht leeren Zielenamen außer `_top`, `_self` und `_parent` wie `_blank` behandelt werden, wenn entschieden wird, ob ein neues Fenster/Tab geöffnet wird.

> [!NOTE]
> Das Setzen von `target="_blank"` bei `<a>` Elementen bietet nun implizit dasselbe `rel` Verhalten wie das Setzen von `rel="noopener"`, das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](/de/docs/Web/HTML/Element/a#browser_compatibility) für den Unterstützungsstatus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

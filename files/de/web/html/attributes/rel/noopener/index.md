---
title: rel=noopener
slug: Web/HTML/Attributes/rel/noopener
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{HTMLSidebar}}

Das **`noopener`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut der {{HTMLElement("a")}}, {{HTMLElement("area")}} und {{HTMLElement("form")}}-Elemente weist den Browser an, zur Zielressource zu navigieren, ohne dem neuen Browsing-Kontext Zugriff auf das Dokument zu gewähren, das es geöffnet hat — indem die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft im geöffneten Fenster nicht gesetzt wird (sie gibt `null` zurück).

Dies ist besonders nützlich beim Öffnen von unzuverlässigen Links, um sicherzustellen, dass diese das ursprüngliche Dokument nicht über die [`Window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft manipulieren können (siehe [Über rel=noopener](https://mathiasbynens.github.io/rel-noopener/) für weitere Details), während dennoch der `Referer` HTTP-Header bereitgestellt wird (es sei denn, `noreferrer` wird ebenfalls verwendet).

Beachten Sie, dass bei der Verwendung von `noopener` alle nicht leeren Zielnamen außer `_top`, `_self` und `_parent` in Bezug auf die Entscheidung, ob ein neues Fenster/Tab geöffnet werden soll, wie `_blank` behandelt werden.

> [!NOTE]
> Das Setzen von `target="_blank"` an `<a>`-Elementen bietet nun implizit das gleiche `rel`-Verhalten wie das Setzen von `rel="noopener"`, wodurch `window.opener` nicht gesetzt wird. Sehen Sie sich die [Browser-Kompatibilität](/de/docs/Web/HTML/Element/a#browser_compatibility) an, um den Unterstützungsstatus zu erfahren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

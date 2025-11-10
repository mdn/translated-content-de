---
title: "NotRestoredReasonDetails: reason Eigenschaft"
short-title: reason
slug: Web/API/NotRestoredReasonDetails/reason
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`reason`**-Eigenschaft des [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Interfaces gibt einen String zurück, der einen Grund beschreibt, warum die Seite daran gehindert wurde, den Vor-/Zurück-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.

## Wert

Ein String.

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten könnte, und Browser können ihre eigenen spezifischen Gründe für Blockierungen basierend auf ihrer Funktionsweise implementieren. Entwickler sollten vermeiden, von bestimmten Formulierungen der Gründe abhängig zu sein, und darauf vorbereitet sein, dass neue Gründe hinzugefügt oder entfernt werden.

Die in der Spezifikation aufgeführten Anfangswerte sind:

- `"fetch"`
  - : Beim Entladen wurde ein Fetch, der vom aktuellen Dokument initiiert wurde (z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch)), abgebrochen, während er noch lief. Dadurch befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Beim Entladen wurden gehaltene Sperren und Sperranfragen beendet, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem Cross-Origin-{{htmlelement("iframe")}} enthalten sind, und sie verhinderten die Speicherung im bfcache.
    - Das aktuelle Dokument konnte aus agenturspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, war fehlerhaft, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat nie seine anfängliche HTML-Analyse abgeschlossen, und die Speicherung des unvollständigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Beim Entladen wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung geschlossen, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.

Zusätzliche Blockierungsgründe können von einigen Browsern verwendet werden, zum Beispiel:

- `"unload-listener"`
  - : Die Seite registriert einen [`unload`](/de/docs/Web/API/Window/unload_event)-Handler, der die Nutzung des bfcache verhindert. Dies dient als nützliche Warnung, da `unload` veraltet ist. Siehe [Hinweise zur Verwendung](/de/docs/Web/API/Window/unload_event#usage_notes) für weitere Informationen.
- `"response-cache-control-no-store"`
  - : Die Seite verwendet `no-store` als {{httpheader("Cache-Control")}}-Header-Wert.
- `"related-active-contents"`
  - : Die Seite wurde von einer anderen Seite geöffnet, die noch eine Referenz zu dieser Seite hat, beispielsweise durch die Funktionalität "doppelter Tab".

## Beispiele

Siehe [Monitoring bfcache blocking reasons](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Monitoring bfcache blocking reasons](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)

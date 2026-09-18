---
title: "NotRestoredReasonDetails: reason-Eigenschaft"
short-title: reason
slug: Web/API/NotRestoredReasonDetails/reason
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`reason`**-Eigenschaft des Interfaces [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails) gibt einen String zurück, der einen Grund beschreibt, warum die Seite von der Verwendung des Zurück-/Vorwärts-Caches ({{Glossary("bfcache", "bfcache")}}) ausgeschlossen wurde.

## Wert

Ein String.

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten kann, und Browser können abhängig von ihrer Funktionsweise eigene spezifische Gründe für die Blockierung implementieren. Entwickler sollten vermeiden, sich auf bestimmte Formulierungen für Gründe zu verlassen, und darauf vorbereitet sein, dass neue Gründe hinzugefügt und entfernt werden.

Die in der Spezifikation aufgeführten Anfangswerte sind:

- `"fetch"`
  - : Während des Entladens wurde ein vom aktuellen Dokument initiierter Fetch (z. B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen, während er noch ausgeführt wurde. Dadurch befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Während des Entladens wurden gehaltene Sperren und Sperranfragen beendet, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund wird aus Datenschutzgründen ausgeblendet. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat untergeordnete Dokumente, die in einem ursprungsübergreifenden {{htmlelement("iframe")}} enthalten sind, und diese verhinderten die Speicherung im bfcache.
    - Das aktuelle Document konnte aus User-Agent-spezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Bei der ursprünglichen Navigation, durch die das aktuelle Dokument erstellt wurde, trat ein Fehler auf, und die Speicherung des daraus resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat sein anfängliches HTML-Parsing nie abgeschlossen, und die Speicherung des unvollständigen Dokuments im bfcache wurde verhindert.
- `"websocket"` {{experimental_inline}}
  - : Während des Entladens wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung geschlossen, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.

Zusätzliche Blockierungsgründe können von einigen Browsern verwendet werden, zum Beispiel:

- `"unload-listener"` {{experimental_inline}}
  - : Die Seite registriert einen [`unload`](/de/docs/Web/API/Window/unload_event)-Handler, der die Verwendung des bfcache verhindert. Dies dient als nützliche Warnung, da `unload` veraltet ist. Weitere Informationen finden Sie in den [Nutzungshinweisen](/de/docs/Web/API/Window/unload_event#usage_notes).
- `"response-cache-control-no-store"`
  - : Die Seite verwendet `no-store` als Wert des {{httpheader("Cache-Control")}}-Headers.
- `"related-active-contents"`
  - : Die Seite wurde von einer anderen Seite aus geöffnet, die noch eine Referenz auf diese Seite hat, beispielsweise mithilfe der Funktion „Tab duplizieren“.

## Beispiele

Beispiele finden Sie unter [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)

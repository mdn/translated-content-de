---
title: "NotRestoredReasonDetails: Eigenschaft reason"
short-title: reason
slug: Web/API/NotRestoredReasonDetails/reason
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die eigenschaft **`reason`** der schreibgeschützten {{domxref("NotRestoredReasonDetails")}}-Schnittstelle gibt einen String zurück, der einen Grund beschreibt, warum die Seite daran gehindert wurde, den Vorwärts-/Rückwärts-Cache ({{Glossary("bfcache")}}) zu nutzen.

## Wert

Ein String.

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten kann, und Browser können ihre eigenen spezifischen Gründe für die Blockierung implementieren, basierend auf ihrer Funktionsweise. Entwickler sollten vermeiden, sich auf bestimmte Formulierungen von Gründen zu verlassen, und darauf vorbereitet sein, dass neue Gründe hinzugefügt und gelöscht werden.

Die in der Spezifikation aufgeführten Anfangswerte sind:

- `"fetch"`
  - : Während des Entladens wurde ein durch das aktuelle Dokument initiierter Abruf (z.B. via {{domxref("Window/fetch", "fetch()")}}) abgebrochen, während er noch lief. Dadurch befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Während des Entladens wurden gehaltene Sperren und Sperranfragen beendet, so dass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann eines der Folgenden bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem Cross-Origin-{{htmlelement("iframe")}} enthalten sind, und diese verhinderten die Speicherung im bfcache.
    - Das aktuelle Dokument konnte aus benutzerspezifischen Agenten-gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, schlug fehl, und das Speichern des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat seine anfängliche HTML-Analyse nie abgeschlossen, und das Speichern des unfertigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Während des Entladens wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung geschlossen, so dass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.

Zusätzliche Blockierungsgründe können von einigen Browsern verwendet werden, zum Beispiel:

- `"unload-listener"`
  - : Die Seite registriert einen [`unload`](/de/docs/Web/API/Window/unload_event)-Handler, der die Nutzung des bfcache verhindert. Dies dient als nützliche Warnung, da `unload` veraltet ist. Siehe [Nutzungshinweise](/de/docs/Web/API/Window/unload_event#usage_notes) für weitere Informationen.
- `"response-cache-control-no-store"`
  - : Die Seite verwendet `no-store` als Wert des {{httpheader("Cache-Control")}}-Headers.
- `"related-active-contents"`
  - : Die Seite wurde von einer anderen Seite geöffnet, die noch eine Referenz auf diese Seite hat, zum Beispiel durch die Funktion "Tab duplizieren".

## Beispiele

Siehe [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}

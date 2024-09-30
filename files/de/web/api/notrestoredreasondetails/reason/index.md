---
title: "NotRestoredReasonDetails: reason-Eigenschaft"
short-title: reason
slug: Web/API/NotRestoredReasonDetails/reason
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`reason`**-Eigenschaft der [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Schnittstelle gibt eine Zeichenkette zurück, die den Grund beschreibt, warum die Seite daran gehindert wurde, den Vorwärts-/Rückwärts-Cache ([bfcache](/de/docs/Glossary/bfcache)) zu nutzen.

## Wert

Eine Zeichenkette.

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten kann, und Browser können ihre eigenen spezifischen Gründe für eine Blockierung basierend auf ihrer Funktionsweise implementieren. Entwickler sollten vermeiden, sich auf eine spezifische Formulierung der Gründe zu verlassen, und darauf vorbereitet sein, dass neue Gründe hinzugefügt oder gelöscht werden.

Die im Spezifikationsentwurf aufgeführten Anfangswerte sind:

- `"fetch"`
  - : Während des Unloading wurde ein durch das aktuelle Dokument gestarteter Fetch (z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen, während er läuft. Infolgedessen befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Während des Unloading wurden gehaltene Sperren und Sperranfragen beendet, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem cross-origin {{htmlelement("iframe")}} enthalten sind, und diese haben die Speicherung im bfcache verhindert.
    - Das aktuelle Dokument konnte aus benutzerspezifischen Gründen des User-Agents nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, hat zu einem Fehler geführt, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat das initiale HTML-Parsing nie abgeschlossen, und die Speicherung des unvollständigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Während des Unloading wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung heruntergefahren, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.

Zusätzliche Blockierungsgründe können von einigen Browsern verwendet werden, zum Beispiel:

- `"unload-listener"`
  - : Die Seite registriert einen [`unload`](/de/docs/Web/API/Window/unload_event)-Handler, der die Nutzung des bfcache verhindert. Dies dient als nützliche Warnung, da `unload` veraltet ist. Siehe [Nutzungshinweise](/de/docs/Web/API/Window/unload_event#usage_notes) für weitere Informationen.
- `"response-cache-control-no-store"`
  - : Die Seite verwendet `no-store` als {{httpheader("Cache-Control")}}-Header-Wert.
- `"related-active-contents"`
  - : Die Seite wurde von einer anderen Seite geöffnet, die noch eine Referenz zu dieser Seite hat, zum Beispiel durch die Funktionalität "Tab duplizieren".

## Beispiele

Siehe [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)

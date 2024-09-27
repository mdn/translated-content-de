---
title: "NotRestoredReasonDetails: reason-Eigenschaft"
short-title: reason
slug: Web/API/NotRestoredReasonDetails/reason
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`reason`**-Eigenschaft des [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Interfaces liefert einen String, der einen Grund beschreibt, warum die Seite daran gehindert wurde, den Vor-/Zurück-Cache ([bfcache](/de/docs/Glossary/bfcache)) zu verwenden.

## Wert

Ein String.

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten kann, und Browser können ihre eigenen spezifischen Gründe für die Blockierung implementieren, basierend auf ihrer Funktionsweise. Entwickler sollten vermeiden, sich auf spezifische Formulierungen der Gründe zu verlassen und sollten darauf vorbereitet sein, dass neue Gründe hinzugefügt oder gelöscht werden.

Die in der Spezifikation aufgelisteten Anfangswerte sind:

- `"fetch"`
  - : Während des Entladens wurde ein durch das aktuelle Dokument initiierter Fetch (z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen. Infolgedessen befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Während des Entladens wurden gehaltene Sperren und Sperranfragen beendet, sodass sich die Seite nicht in einem stabilen Zustand befand, um im bfcache gespeichert zu werden.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verschleiert. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem cross-origin {{htmlelement("iframe")}} enthalten sind, und sie verhinderten die Speicherung im bfcache.
    - Das aktuelle Dokument konnte aus agentenspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erzeugte, scheiterte, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat sein initiales HTML-Parsing nie beendet, und die Speicherung des unfertigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Während des Entladens wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung heruntergefahren, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.

Zusätzliche Blockierungsgründe können von einigen Browsern verwendet werden, zum Beispiel:

- `"unload-listener"`
  - : Die Seite registriert einen [`unload`](/de/docs/Web/API/Window/unload_event)-Handler, der die Nutzung des bfcache verhindert. Dies dient als nützliche Warnung, da `unload` veraltet ist. Siehe [Nutzungsanmerkungen](/de/docs/Web/API/Window/unload_event#usage_notes) für weitere Informationen.
- `"response-cache-control-no-store"`
  - : Die Seite verwendet `no-store` als Wert des {{httpheader("Cache-Control")}}-Headers.
- `"related-active-contents"`
  - : Die Seite wurde von einer anderen Seite aus geöffnet, die noch einen Verweis auf diese Seite hat, zum Beispiel bei der Funktion "Tab duplizieren".

## Beispiele

Siehe [Überwachung der Gründe für die Blockierung des bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der Gründe für die Blockierung des bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)

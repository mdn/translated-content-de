---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("Performance API")}}

Der Typ **`DOMHighResTimeStamp`** ist ein `double` und wird verwendet, um einen Zeitwert in Millisekunden zu speichern.

Dieser Typ kann verwendet werden, um einen bestimmten Zeitpunkt oder ein Zeitintervall (den Zeitunterschied zwischen zwei bestimmten Zeitpunkten) zu beschreiben. Der Ausgangszeitpunkt kann entweder eine vom Skript für eine Website oder App festgelegte spezifische Zeit oder der [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin) sein.

Der Bruchteil des Werts stellt Bruchteile einer Millisekunde dar. Der Typ selbst garantiert keine bestimmte Auflösung oder Genauigkeit. Die effektive Auflösung hängt von der API ab, die den Wert erzeugt, sowie von Hardware- und Softwareeinschränkungen und Sicherheits- und Datenschutzmaßnahmen des Browsers.

## Sicherheitsanforderungen

Der Typ `DOMHighResTimeStamp` wendet selbst keine Timer-Rundung auf von Skripten bereitgestellte Werte an. Ob eine API diese Werte rundet, hängt von der API ab. Werte, die aus Uhrenablesungen berechnet werden, müssen auch keine Vielfachen des Rundungsintervalls der Uhr sein.

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, groben Browser Zeitablesungen basierend auf dem Cross-Origin-Isolationsstatus des Kontexts. Für APIs, die ihren [Zeit-Grobheitsalgorithmus](https://w3c.github.io/hr-time/#dfn-coarsen-time) verwenden, spezifiziert die High Resolution Time-Spezifikation folgende Auflösungen oder eine gröbere, implementierungsdefinierte Auflösung:

- Cross-origin-isolierte Kontexte: 0,005 ms
- Nicht-cross-origin-isolierte Kontexte: 0,1 ms

Browser können auch Jitter hinzufügen, indem sie zum Beispiel zufällig festlegen, wann die angegebene Zeit zum nächsten Rundungsintervall fortschreitet. Diese Auflösungen sind keine Genauigkeitsgarantien. Siehe die Dokumentation der API, die den Wert erzeugt, für deren Genauigkeitsanforderungen.

Schützen Sie Ihre Website durch Cross-Origin-Isolation mit den Headern {{HTTPHeader("Cross-Origin-Opener-Policy")}} und {{HTTPHeader("Cross-Origin-Embedder-Policy")}}:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Dokument auf oberster Ebene keine Browsing-Kontextgruppe mit
cross-origin Dokumenten teilt. COOP isoliert Ihren Prozess und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup geöffnet haben, was eine Reihe von cross-origin Angriffen namens [XS-Leaks](https://github.com/xsleaks/xsleaks) verhindert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`performance.now()`](/de/docs/Web/API/Performance/now)
- [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("Performance API")}}

Der **`DOMHighResTimeStamp`**-Typ ist ein `double` und wird verwendet, um einen Zeitwert in Millisekunden zu speichern.

Dieser Typ kann verwendet werden, um einen bestimmten Zeitpunkt oder ein Zeitintervall zu beschreiben (den Zeitunterschied zwischen zwei bestimmten Zeitpunkten). Die Startzeit kann entweder eine vom Skript für eine Website oder App festgelegte spezifische Zeit oder der [time origin](/de/docs/Web/API/Performance/timeOrigin) sein.

Die Zeit, die in Millisekunden angegeben wird, sollte auf 5 µs (Mikrosekunden) genau sein, wobei der Bruchteil der Zahl Bruchteile einer Millisekunde angibt. Wenn der Browser jedoch nicht in der Lage ist, einen Zeitwert auf 5 µs genau bereitzustellen (zum Beispiel aufgrund von Hardware- oder Softwarebeschränkungen), kann der Browser den Wert als Zeit in Millisekunden darstellen, die auf eine Millisekunde genau ist. Beachten Sie auch den unten stehenden Abschnitt zur reduzierten Zeitpräzision, die durch Browsereinstellungen gesteuert wird, um Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu vermeiden.

Wenn das Gerät oder Betriebssystem, auf dem der User-Agent ausgeführt wird, keine Uhr hat, die auf die Mikrosekunden-Ebene genau ist, sind sie möglicherweise nur auf die Millisekunde genau.

## Sicherheitsanforderungen

Um Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, werden `DOMHighResTimeStamp`-Typen basierend auf dem Site-Isolationsstatus grobgranular gemacht.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Isolieren Sie Ihre Website über die {{HTTPHeader("Cross-Origin-Opener-Policy")}}- und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein oberstes Dokument keine Browserverbund-Kontextgruppe mit
dokumenten über Herkunftsgrenzen hinweg teilt. COOP isoliert Ihren Prozess, und potenzielle Angreifer
können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup öffnen, wodurch eine Reihe
von Cross-Origin-Angriffen namens [XS-Leaks](https://github.com/xsleaks/xsleaks) verhindert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`performance.now()`](/de/docs/Web/API/Performance/now)
- [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

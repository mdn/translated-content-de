---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("Performance API")}}

Der **`DOMHighResTimeStamp`**-Typ ist ein `double` und wird verwendet, um einen Zeitwert in Millisekunden zu speichern.

Dieser Typ kann verwendet werden, um einen bestimmten Zeitpunkt oder ein Zeitintervall (den Unterschied in der Zeit zwischen zwei bestimmten Punkten) zu beschreiben. Der Startzeitpunkt kann entweder eine spezifische, durch das Skript für eine Website oder App festgelegte Zeit sein oder der [time origin](/de/docs/Web/API/Performance/timeOrigin).

Die in Millisekunden angegebene Zeit sollte genau bis zu 5 µs (Mikrosekunden) sein, wobei der gebrochene Teil der Zahl Bruchteile einer Millisekunde angibt. Wenn der Browser jedoch nicht in der Lage ist, einen Zeitwert genau auf 5 µs bereitzustellen (zum Beispiel aufgrund von Hardware- oder Softwareeinschränkungen), kann der Browser den Wert als Zeit in Millisekunden mit einer Genauigkeit von einer Millisekunde darstellen. Beachten Sie auch den untenstehenden Abschnitt über die reduzierte Zeitgenauigkeit, die durch Browsereinstellungen kontrolliert wird, um Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu vermeiden.

Außerdem, wenn das Gerät oder Betriebssystem, auf dem der Benutzeragent läuft, keine Uhr auf Mikrosekundenebene hat, können sie nur bis zur Millisekunde genau sein.

## Sicherheitsanforderungen

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, werden `DOMHighResTimeStamp`-Typen basierend auf dem Status der Site-Isolation vergröbert.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Isolieren Sie Ihre Website über die Header {{HTTPHeader("Cross-Origin-Opener-Policy")}} und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}}:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Top-Level-Dokument keine Browsing-Kontextgruppe mit
Cross-Origin-Dokumenten teilt. COOP prozessisoliert Ihr Dokument und potenzielle Angreifer
haben keinen Zugriff auf Ihr globales Objekt, wenn sie es in einem Popup öffnen würden, was eine Reihe
von Cross-Origin-Angriffen, die als [XS-Leaks](https://github.com/xsleaks/xsleaks) bekannt sind, verhindert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`performance.now()`](/de/docs/Web/API/Performance/now)
- [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("Performance API")}}

Der **`DOMHighResTimeStamp`**-Typ ist ein `double` und wird verwendet, um einen Zeitwert in Millisekunden zu speichern.

Dieser Typ kann verwendet werden, um einen bestimmten Zeitpunkt oder ein Zeitintervall (die Zeitdifferenz zwischen zwei bestimmten Zeitpunkten) zu beschreiben. Die Ausgangszeit kann entweder eine spezifische durch das Skript für eine Website oder App bestimmte Zeit sein oder der [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin).

Die in Millisekunden angegebene Zeit sollte mit einer Genauigkeit von 5 µs (Mikrosekunden) angegeben werden, wobei der Bruchteil der Zahl die Bruchteile einer Millisekunde angibt. Allerdings, wenn der Browser nicht in der Lage ist, einen Zeitwert mit einer Genauigkeit von 5 µs bereitzustellen (aufgrund von Hardware- oder Softwarebeschränkungen beispielsweise), kann der Browser den Wert als eine mit einer Millisekunde genaue Zeit in Millisekunden darstellen. Beachten Sie auch den unten stehenden Abschnitt zur reduziertgenauen Zeit, die durch Browsereinstellungen gesteuert wird, um Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu vermeiden.

Darüber hinaus kann, wenn das Gerät oder das Betriebssystem, auf dem der Benutzeragent läuft, keine Uhr hat, die bis auf Mikrosekunden genau ist, die Genauigkeit nur auf Millisekundenniveau liegen.

## Sicherheitsanforderungen

Um Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, werden `DOMHighResTimeStamp`-Typen basierend auf dem Status der Website-Isolation vergröbert.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Isolieren Sie Ihre Website über die {{HTTPHeader("Cross-Origin-Opener-Policy")}} und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Dokument auf oberster Ebene keine Browsing-Kontextgruppe mit
documents fremder Herkunft teilt. COOP isoliert Ihren Prozess und potentiellen Angreifern wird der Zugriff auf Ihr globales Objekt verweigert, wenn sie es in einem Popup geöffnet hätten, wodurch eine Reihe von Cross-Origin-Angriffen namens [XS-Leaks](https://github.com/xsleaks/xsleaks) verhindert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`performance.now()`](/de/docs/Web/API/Performance/now)
- [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

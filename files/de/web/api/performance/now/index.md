---
title: "Performance: now()-Methode"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{APIRef("Performance API")}}

Die **`performance.now()`**-Methode gibt einen hochauflösenden Zeitstempel in Millisekunden zurück. Sie stellt die verstrichene Zeit seit [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) dar (die Zeit, zu der die Navigation in Fensterkontexten begonnen hat, oder die Zeit, zu der der Arbeiter in [`Worker`](/de/docs/Web/API/Worker) und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten ausgeführt wird).

## Syntax

```js-nolint
now()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) in Millisekunden gemessen zurück.

## Beschreibung

### `Performance.now` vs. `Date.now`

Im Gegensatz zu [`Date.now`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) sind die von `performance.now()` zurückgegebenen Zeitstempel nicht auf eine Millisekundenauflösung begrenzt. Stattdessen stellen sie Zeiten als Gleitkommazahlen mit bis zu Mikrosekundenpräzision dar.

Außerdem könnte `Date.now()` durch System- und Benutzeruhrenanpassungen, Uhrverschiebungen usw. beeinflusst worden sein, da es relativ zur Unix-Epoche (1970-01-01T00:00:00Z) und abhängig von der Systemuhr ist. Die `performance.now()`-Methode hingegen ist relativ zur `timeOrigin`-Eigenschaft, die eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock) ist: Ihre aktuelle Zeit nimmt niemals ab und unterliegt keinen Anpassungen.

### Änderungen der `performance.now` Spezifikation

Die Semantik der `performance.now()`-Methode hat sich zwischen High Resolution Time Level 1 und Level 2 geändert.

| Änderungen             | Level 1                                                                                       | Level 2                                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relativ zu             | [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)                                                                                                                       |
| Auslösende Bedingungen | Dokumentabruf oder Entladeaufforderung (falls vorhanden).                                     | Erstellung des Browsing-Kontexts (falls kein vorheriges Dokument vorhanden ist), Entladeaufforderung (falls vorhanden) oder Beginn der Navigation (wie im HTML definiert, einige Schritte vor dem Abruf). |

Die `performance.now()`-Methode war früher relativ zur [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) Eigenschaft aus der Navigation Timing Spezifikation. Dies hat sich geändert, und `performance.now()` ist jetzt relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), was Risiken durch Uhrenänderungen beim Vergleich von Zeitstempeln über Webseiten hinweg vermeidet.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Tickt während des Schlafens

Die Spezifikation (Level 2) erfordert, dass `performance.now()` während des Schlafens tickt. Es scheint, dass nur Firefox unter Windows und Chromiums unter Windows während des Schlafens weiter ticken. Relevante Browserfehler für andere Betriebssysteme:

- Chrome/Chromium ([Fehler](https://crbug.com/1206450))
- Firefox ([Fehler](https://bugzil.la/1709767))
- Safari/WebKit ([Fehler](https://webkit.org/b/225610))

Weitere Details finden Sie auch im Spezifikationsproblem [hr-time#115](https://github.com/w3c/hr-time/issues/115#issuecomment-1172985601).

## Beispiele

### Verwendung von `performance.now()`

Um festzustellen, wie viel Zeit seit einem bestimmten Punkt in Ihrem Code vergangen ist, können Sie so etwas machen:

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

## Sicherheitsanforderungen

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, wird `performance.now()` basierend auf dem Site-Isolationsstatus abgestimmt.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht-isolierten Kontexten: 100 Mikrosekunden

Isolieren Sie Ihre Site über die {{HTTPHeader("Cross-Origin-Opener-Policy")}} und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Top-Level-Dokument keine Browsing-Kontextgruppe mit
Crossover-Dokumenten teilt. COOP isoliert Ihren Prozess und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup öffnen würden, was eine Reihe von Crossover-Angriffen, genannt [XS-Leaks](https://github.com/xsleaks/xsleaks), verhindert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

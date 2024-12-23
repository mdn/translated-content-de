---
title: "Performance: now() Methode"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: 6d6c7276af1aa286330458c3e84ddc7ea0b435ac
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`performance.now()`** Methode gibt einen hochauflösenden Zeitstempel in Millisekunden zurück. Sie stellt die Zeit dar, die seit [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) vergangen ist (die Zeit, seit der die Navigation in Fensterkontexten gestartet wurde, oder die Zeit, zu der der Worker im [`Worker`](/de/docs/Web/API/Worker) und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Kontext ausgeführt wird).

## Syntax

```js-nolint
now()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) in Millisekunden zurück.

## Beschreibung

### `Performance.now` vs. `Date.now`

Im Gegensatz zu [`Date.now`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) sind die von `performance.now()` zurückgegebenen Zeitstempel nicht auf eine Auflösung von einer Millisekunde beschränkt. Stattdessen stellen sie Zeiten als Gleitkommazahlen mit bis zu Mikrosekunden-Genauigkeit dar.

Zusätzlich kann `Date.now()` von System- und Benutzeruhrenanpassungen, Zeitabweichungen usw. beeinflusst worden sein, da es relativ zur Unix-Epoche (1970-01-01T00:00:00Z) und abhängig von der Systemuhr ist. Die `performance.now()` Methode hingegen ist relativ zur `timeOrigin`-Eigenschaft, die eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock) ist: Die aktuelle Zeit verringert sich nie und unterliegt keinen Anpassungen.

### Änderungen der `performance.now` Spezifikation

Die Semantik der `performance.now()` Methode änderte sich zwischen High Resolution Time Level 1 und Level 2.

| Änderungen         | Level 1                                                                                    | Level 2                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relativ zu         | [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)                                                                                                                           |
| Auslösebedingungen | Dokumentenabruf oder Entladeaufforderung (falls vorhanden).                                | Erstellung des Browsing-Kontexts (falls kein vorheriges Dokument), Entladeaufforderung (falls vorhanden), oder Start der Navigation (wie im HTML definiert, einige Schritte vor dem Abrufen). |

Die `performance.now()` Methode war früher relativ zur [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) Eigenschaft aus der Navigation Timing Spezifikation. Dies änderte sich und `performance.now()` ist nun relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), was das Risiko von Uhrenänderungen beim Vergleich von Zeitstempeln über Webseiten hinweg vermeidet.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Fortschreiben während des Schlafs

Die Spezifikation (Level 2) verlangt, dass `performance.now()` während des Schlafs weiterzählt. Es scheint, dass nur Firefox auf Windows und Chromiums auf Windows während des Schlafs weiterzählen. Relevante Browserfehler für andere Betriebssysteme:

- Chrome/Chromium ([bug](https://crbug.com/1206450))
- Firefox ([bug](https://bugzil.la/1709767))
- Safari/WebKit ([bug](https://webkit.org/b/225610))

Weitere Details finden Sie auch im Spezifikationsproblem [hr-time#115](https://github.com/w3c/hr-time/issues/115#issuecomment-1172985601).

## Sicherheitsanforderungen

Um Schutz gegen Zeitangriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, wird `performance.now()` basierend darauf, ob das Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist oder nicht, geglättet.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob das Dokument cross-origin isoliert ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Verwendung von `performance.now()`

Um zu bestimmen, wie viel Zeit seit einem bestimmten Punkt in Ihrem Code vergangen ist, können Sie etwas in der Art machen:

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

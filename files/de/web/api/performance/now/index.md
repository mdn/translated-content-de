---
title: "Performance: now() Methode"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`performance.now()`** gibt einen hochauflösenden Zeitstempel in Millisekunden zurück. Sie stellt die seit [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) vergangene Zeit dar (die Zeit, zu der die Navigation in Fensterkontexten gestartet wurde, oder die Zeit, zu der der Worker in [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten ausgeführt wird).

## Syntax

```js-nolint
now()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der in Millisekunden gemessen wird.

## Beschreibung

### `Performance.now` vs. `Date.now`

Im Gegensatz zu [`Date.now`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) sind die von `performance.now()` zurückgegebenen Zeitstempel nicht auf eine Auflösung von einer Millisekunde beschränkt. Stattdessen stellen sie Zeiten als Gleitkommazahlen mit bis zu Mikrosekunden-Präzision dar.

Außerdem kann `Date.now()` durch System- und Benutzeruhrkorrekturen, Uhrabweichungen usw. beeinflusst worden sein, da es relativ zur Unix-Epoche (1970-01-01T00:00:00Z) und abhängig von der Systemuhr ist. Die Methode `performance.now()` hingegen ist relativ zur Eigenschaft `timeOrigin`, die eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock) ist: Ihre aktuelle Zeit nimmt niemals ab und unterliegt keinen Anpassungen.

### Änderungen der Spezifikation von `performance.now`

Die Semantik der Methode `performance.now()` hat sich zwischen High Resolution Time Level 1 und Level 2 geändert.

| Änderungen         | Level 1                                                                                    | Level 2                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Relativ zu         | [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)                                                                                                                                          |
| Auslösebedingungen | Abrufen des Dokuments oder Auslöselaufforderung (falls vorhanden).                         | Erstellung des Browsing-Kontextes (wenn kein vorheriges Dokument vorhanden ist), Auslöselaufforderung (falls vorhanden) oder Beginn der Navigation (wie in HTML definiert, einige Schritte vor dem Abrufen). |

Die Methode `performance.now()` war früher relativ zur Eigenschaft [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) der Navigation Timing-Spezifikation. Diese Änderung macht `performance.now()` jetzt relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), was Risiken von Uhränderungen beim Vergleich von Zeitstempeln über Webseiten hinweg vermeidet.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Ticken während des Schlafmodus

Die Spezifikation (Level 2) erfordert, dass `performance.now()` während des Schlafs tickt. Es scheint, dass nur Firefox unter Windows und Chromium-Browser unter Windows während des Schlafs weiterticken. Relevante Browser-Bugs für andere Betriebssysteme:

- Chrome/Chromium ([Bug](https://crbug.com/1206450))
- Firefox ([Bug](https://bugzil.la/1709767))
- Safari/WebKit ([Bug](https://webkit.org/b/225610))

Weitere Details finden Sie auch in der Spezifikationsdiskussion [hr-time#115](https://github.com/w3c/hr-time/issues/115#issuecomment-1172985601).

## Beispiele

### Verwendung von `performance.now()`

Um zu bestimmen, wie viel Zeit seit einem bestimmten Punkt in Ihrem Code vergangen ist, können Sie etwas wie dies tun:

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

## Sicherheitsanforderungen

Zum Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} wird `performance.now()` basierend auf dem Status der Site-Isolation grob eingestellt.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Isolieren Sie Ihre Site auf Ursprungsebene mit den Headern {{HTTPHeader("Cross-Origin-Opener-Policy")}} und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}}:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header sorgen dafür, dass ein Top-Level-Dokument keine Browsing-Kontextgruppe mit
Cross-Origin-Dokumenten teilt. COOP isoliert Ihren Prozess und potenzielle Angreifer
können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup öffnen, und verhindern so eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://github.com/xsleaks/xsleaks) bezeichnet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

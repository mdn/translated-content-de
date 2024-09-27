---
title: "Performance: now() Methode"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: 024449e686746a0d036edeb2323bfe21adfa2155
---

{{APIRef("Performance API")}}

Die **`performance.now()`**-Methode gibt einen hochauflösenden Zeitstempel in Millisekunden zurück. Sie repräsentiert die Zeit, die seit [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) vergangen ist (die Zeit, als die Navigation in Fensterkontexten gestartet wurde oder die Zeit, als der Worker im [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontext gestartet wurde).

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

Im Gegensatz zu [`Date.now`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) sind die von `performance.now()` zurückgegebenen Zeitstempel nicht auf eine Millisekundenauflösung beschränkt. Stattdessen repräsentieren sie Zeiten als Fließkommazahlen mit bis zu Mikrosekunden-Präzision.

Außerdem kann `Date.now()` durch System- und Benutzereinstellungen der Uhr, Uhrzeitabweichungen usw. beeinflusst werden, da es relativ zur Unix-Epoche (1970-01-01T00:00:00Z) und abhängig von der Systemuhr ist. Die `performance.now()`-Methode hingegen ist relativ zur `timeOrigin`-Eigenschaft, welche eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock) ist: Ihre aktuelle Zeit nimmt nie ab und unterliegt keinen Anpassungen.

### Änderungen der `performance.now` Spezifikation

Die Semantik der `performance.now()`-Methode hat sich zwischen High Resolution Time Level 1 und Level 2 verändert.

| Änderungen         | Level 1                                                                                    | Level 2                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relativ zu         | [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)                                                                                                                          |
| Auslösebedingungen | Dokumentabruf oder Entladeaufforderung (falls vorhanden).                                  | Erstellung des Browsing-Kontexts (falls kein vorheriges Dokument), Entladeaufforderung (falls vorhanden) oder Start der Navigation (wie im HTML definiert, einige Schritte vor Abrufbeginn). |

Die `performance.now()`-Methode war früher relativ zur [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)-Eigenschaft aus der Navigation Timing-Spezifikation. Dies hat sich geändert und `performance.now()` ist nun relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), was Risiken durch Uhrenänderungen bei der Zeitstempelvergleichung über Webseiten hinweg vermeidet.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Ticken im Ruhezustand

Die Spezifikation (Level 2) fordert, dass `performance.now()` im Ruhezustand tickt. Es scheint, dass nur Firefox unter Windows und Chromium-Browser unter Windows im Ruhezustand weiter ticken. Relevante Browser-Bugs für andere Betriebssysteme:

- Chrome/Chromium ([Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1206450))
- Firefox ([Bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1709767))
- Safari/WebKit ([Bug](https://bugs.webkit.org/show_bug.cgi?id=225610))

Weitere Details finden Sie auch im Spezifikationsproblem [hr-time#115](https://github.com/w3c/hr-time/issues/115#issuecomment-1172985601).

## Beispiele

### Nutzung von `performance.now()`

Um zu bestimmen, wie viel Zeit seit einem bestimmten Punkt in Ihrem Code vergangen ist, können Sie so etwas tun:

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

## Sicherheitsanforderungen

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, wird `performance.now()` basierend auf dem Status der Site-Isolation grob abgestimmt.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht-isolierten Kontexten: 100 Mikrosekunden

Isolieren Sie Ihre Website über die {{HTTPHeader("Cross-Origin-Opener-Policy")}} und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein oberstes Dokument keine Browsing-Kontextgruppe mit
fremden Dokumenten teilt. COOP isoliert Ihren Prozess und potenzielle Angreifer
haben keinen Zugriff auf Ihr globales Objekt, wenn sie es in einem Popup öffnen würden, was eine Reihe
von Cross-Origin-Angriffen verhindert, die als [XS-Leaks](https://github.com/xsleaks/xsleaks) bekannt sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

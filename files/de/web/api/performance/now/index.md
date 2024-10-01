---
title: "Performance: now()-Methode"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: 024449e686746a0d036edeb2323bfe21adfa2155
---

{{APIRef("Performance API")}}

Die **`performance.now()`**-Methode gibt einen hochauflösenden Zeitstempel in Millisekunden zurück. Sie stellt die vergangene Zeit seit [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) dar (die Zeit, zu der die Navigation in Fensterebenen gestartet wurde, oder die Zeit, zu der der Worker in [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten ausgeführt wurde).

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

Im Gegensatz zu [`Date.now`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) sind die von `performance.now()` zurückgegebenen Zeitstempel nicht auf eine Auflösung von einer Millisekunde beschränkt. Stattdessen repräsentieren sie die Zeiten als Fließkommazahlen mit einer Genauigkeit bis zu Mikrosekunden.

Zudem kann `Date.now()` durch System- und Benutzeruhranpassungen, Uhrverschiebungen usw. beeinflusst sein, da es relativ zur Unix-Epoche (1970-01-01T00:00:00Z) und abhängig von der Systemuhr ist. Die `performance.now()`-Methode hingegen ist relativ zur `timeOrigin`-Eigenschaft, die eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock) ist: Ihre aktuelle Zeit nimmt nie ab und unterliegt keinen Anpassungen.

### Änderungen in der Spezifikation von `performance.now`

Die Semantik der `performance.now()`-Methode änderte sich zwischen High Resolution Time Level 1 und Level 2.

| Änderungen             | Level 1                                                                                    | Level 2                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relativ zu             | [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)                                                                                                                         |
| Auslösende Bedingungen | Dokumentabruf oder Entladeaufforderung (falls vorhanden).                                  | Erstellung des Browsing-Kontextes (falls kein vorheriges Dokument), Entladeaufforderung (falls vorhanden) oder Start der Navigation (wie in HTML definiert, einige Schritte vor dem Abruf). |

Die `performance.now()`-Methode war ursprünglich relativ zur [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)-Eigenschaft aus der Navigation Timing-Spezifikation. Dies änderte sich, und `performance.now()` ist jetzt relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), um das Risiko von Uhrveränderungen beim Vergleich von Zeitstempeln über Webseiten hinweg zu vermeiden.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Fortschreiten während des Schlafs

Die Spezifikation (Level 2) fordert, dass `performance.now()` während des Schlafs Fortschritte macht. Es scheint, dass nur Firefox auf Windows und Chromium auf Windows während des Schlafs fortschreiten. Relevante Browser-Fehler für andere Betriebssysteme:

- Chrome/Chromium ([Fehler](https://bugs.chromium.org/p/chromium/issues/detail?id=1206450))
- Firefox ([Fehler](https://bugzilla.mozilla.org/show_bug.cgi?id=1709767))
- Safari/WebKit ([Fehler](https://bugs.webkit.org/show_bug.cgi?id=225610))

Weitere Details finden Sie auch im Spezifikationsproblem [hr-time#115](https://github.com/w3c/hr-time/issues/115#issuecomment-1172985601).

## Beispiele

### Verwendung von `performance.now()`

Um zu bestimmen, wie viel Zeit seit einem bestimmten Punkt in Ihrem Code vergangen ist, können Sie Folgendes tun:

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

## Sicherheitsanforderungen

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, wird `performance.now()` basierend auf dem Site-Isolationsstatus erweitert.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Isolieren Sie Ihre Seite über die {{HTTPHeader("Cross-Origin-Opener-Policy")}} und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Dokument auf oberster Ebene keine Browsing-Kontextgruppe mit
cross-origin Dokumenten teilt. COOP isoliert Ihren Prozess, und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup öffnen, wodurch eine Reihe von Cross-Origin-Angriffen, bekannt als [XS-Leaks](https://github.com/xsleaks/xsleaks), verhindert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)

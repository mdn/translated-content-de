---
title: "Performance: now() Methode"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: 024449e686746a0d036edeb2323bfe21adfa2155
---

{{APIRef("Performance API")}}

Die Methode **`performance.now()`** gibt einen hochauflösenden Zeitstempel in Millisekunden zurück. Sie repräsentiert die verstrichene Zeit seit {{domxref("Performance.timeOrigin")}} (die Zeit, als die Navigation in Fensterkontexten gestartet wurde oder die Zeit, als der Worker in {{domxref("Worker")}} und {{domxref("ServiceWorker")}} Kontexten gestartet wurde).

## Syntax

```js-nolint
now()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{domxref("DOMHighResTimeStamp")}} in Millisekunden zurück.

## Beschreibung

### `Performance.now` vs. `Date.now`

Im Gegensatz zu [`Date.now`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) sind die von `performance.now()` zurückgegebenen Zeitstempel nicht auf eine Auflösung von einer Millisekunde beschränkt. Stattdessen repräsentieren sie Zeiten als Fließkommazahlen mit einer Präzision von bis zu Mikrosekunden.

Außerdem kann `Date.now()` von System- und Benutzeruhrenanpassungen, Uhrenabweichungen usw. beeinflusst worden sein, da es sich auf die Unix-Epoche (1970-01-01T00:00:00Z) bezieht und von der Systemuhr abhängig ist. Die Methode `performance.now()` hingegen bezieht sich auf die `timeOrigin`-Eigenschaft, die eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock) ist: Ihre aktuelle Zeit nimmt niemals ab und ist nicht anpassungsfähig.

### Änderungen der Spezifikation von `performance.now`

Die Semantik der `performance.now()` Methode hat sich zwischen High Resolution Time Level 1 und Level 2 geändert.

| Änderungen            | Level 1                                                                                       | Level 2                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relativ zu            | [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) | {{domxref("Performance.timeOrigin")}}                                                                                                                       |
| Auslösebedingungen    | Dokumentabruf oder Entladen-Aufforderung (falls vorhanden).                                   | Erstellung des Browsing-Kontexts (wenn kein vorheriges Dokument), Entladen-Aufforderung (falls vorhanden) oder Start der Navigation (wie in HTML definiert, ein paar Schritte vor dem Abruf). |

Die `performance.now()` Methode war früher relativ zur Eigenschaft [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) aus der Navigation Timing Spezifikation. Dies hat sich geändert, und `performance.now()` ist nun relativ zu {{domxref("Performance.timeOrigin")}}, was Risiken einer Uhrenänderung beim Vergleich von Zeitstempeln über Webseiten hinweg vermeidet.

```js
// Level 1 (Risiken durch Uhrenänderungen)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (keine Risiken durch Uhrenänderungen)
currentTime = performance.timeOrigin + performance.now();
```

### Tick während des Schlafmodus

Die Spezifikation (Level 2) erfordert, dass `performance.now()` während des Schlafmodus tickt. Es scheint, dass nur Firefox unter Windows und Chromiums unter Windows während des Schlafmodus weiter tickt. Relevante Browser-Bugs für andere Betriebssysteme:

- Chrome/Chromium ([Fehler](https://bugs.chromium.org/p/chromium/issues/detail?id=1206450))
- Firefox ([Fehler](https://bugzilla.mozilla.org/show_bug.cgi?id=1709767))
- Safari/WebKit ([Fehler](https://bugs.webkit.org/show_bug.cgi?id=225610))

Weitere Einzelheiten finden Sie auch im Spezifikationsproblem [hr-time#115](https://github.com/w3c/hr-time/issues/115#issuecomment-1172985601).

## Beispiele

### Verwendung von `performance.now()`

Um zu bestimmen, wie viel Zeit seit einem bestimmten Punkt in Ihrem Code verstrichen ist, können Sie Folgendes tun:

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

## Sicherheitsanforderungen

Um Schutz vor Timing-Angriffen und [Fingerabdrucknahme](/de/docs/Glossary/Fingerprinting) zu bieten, wird `performance.now()` basierend auf dem Status der Site-Isolation grob eingestellt.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Isolieren Sie Ihre Website über die {{HTTPHeader("Cross-Origin-Opener-Policy")}} und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Top-Level-Dokument keinen Browsing-Kontextgruppe mit cross-origin Dokumenten teilt. COOP isoliert Ihr Dokument prozessmäßig, und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup-Fenster öffnen würden, wodurch eine Reihe von Cross-Origin-Angriffen namens [XS-Leaks](https://github.com/xsleaks/xsleaks) verhindert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Performance.timeOrigin")}}

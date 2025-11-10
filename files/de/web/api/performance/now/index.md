---
title: "Performance: now() Methode"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: 566d11b080d288dcd50809250f26ff79b53908a0
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`performance.now()`** Methode gibt einen hochauflösenden Zeitstempel in Millisekunden zurück. Er repräsentiert die verstrichene Zeit seit [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) (die Zeit, zu der die Navigation in Fenster-Kontexten begonnen hat, oder die Zeit, zu der der Worker im [`Worker`](/de/docs/Web/API/Worker) und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Kontext ausgeführt wird).

## Syntax

```js-nolint
now()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, gemessen in Millisekunden.

## Beschreibung

### `Performance.now` vs. `Date.now`

Im Gegensatz zu [`Date.now`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) sind die von `performance.now()` zurückgegebenen Zeitstempel nicht auf eine Auflösung von einer Millisekunde beschränkt. Stattdessen stellen sie Zeiten als Gleitkommazahlen mit einer Präzision bis zu Mikrosekunden dar.

Außerdem kann `Date.now()` durch Anpassungen der System- und Benutzeruhr, Uhrzeitversatz usw. beeinflusst werden, da es sich auf die Unix-Epoche (1970-01-01T00:00:00Z) bezieht und von der Systemuhr abhängt. Die `performance.now()` Methode hingegen bezieht sich auf die `timeOrigin` Eigenschaft, die eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock) ist: Ihre aktuelle Zeit nimmt niemals ab und ist nicht Gegenstand von Anpassungen.

### `performance.now` Spezifikationsänderungen

Die Semantik der `performance.now()` Methode änderte sich zwischen High Resolution Time Level 1 und Level 2.

| Änderungen         | Level 1                                                                                    | Level 2                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relativ zu         | [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)                                                                                                                           |
| Auslösebedingungen | Dokumentabruf oder Entladen der Eingabeaufforderung (falls vorhanden).                     | Erstellung des Browsing-Kontexts (falls kein vorheriges Dokument), Entladeaufforderung (falls vorhanden) oder Beginn der Navigation (wie in HTML definiert, ein paar Schritte vor dem Abruf). |

Die `performance.now()` Methode bezog sich früher auf die [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) Eigenschaft aus der Navigation Timing-Spezifikation. Dies änderte sich, und `performance.now()` bezieht sich jetzt auf [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), was Risiken von Uhrzeitänderungen beim Vergleichen von Zeitstempeln über Webseiten hinweg vermeidet.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Takt während des Schlafs

Die Spezifikation (Level 2) erfordert, dass `performance.now()` auch dann weitertickt, wenn das Betriebssystem schläft oder der Browserprozess auf andere Weise einfriert. Es scheint, dass nur Browser auf Windows während des Schlafs weiterticken. Relevante Browserfehler für andere Betriebssysteme:

- Chrome/Chromium ([Fehler](https://crbug.com/1206450))
- Firefox ([Fehler](https://bugzil.la/1709767))
- Safari/WebKit ([Fehler](https://webkit.org/b/225610))

Abhängig von Ihrem Anwendungsfall kann diese Abweichung von Bedeutung sein oder nicht. Wenn Sie beispielsweise kurze Operationen wie das Laden eines Bildes zeitlich erfassen, bei denen das System wahrscheinlich nicht schläft, kann dies keine Probleme verursachen. Bei der zeitlichen Erfassung einer langen Operation kann sich herausstellen, dass {{jsxref("Date.now()")}} nützlicher ist, um diese Einschränkungen zu vermeiden, da die hohe Präzision von `performance.now()` möglicherweise ohnehin nicht so entscheidend ist.

Weitere Details finden Sie auch im Spezifikationsproblem [hr-time#115](https://github.com/w3c/hr-time/issues/115#issuecomment-1172985601).

## Sicherheitsanforderungen

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, wird `performance.now()` basierend darauf, ob das Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist oder nicht, grob angepasst.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht-isolierten Kontexten: 100 Mikrosekunden

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob das Dokument cross-origin isoliert ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Verwendung von `performance.now()`

Um zu bestimmen, wie viel Zeit seit einem bestimmten Punkt in Ihrem Code vergangen ist, können Sie Folgendes tun:

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

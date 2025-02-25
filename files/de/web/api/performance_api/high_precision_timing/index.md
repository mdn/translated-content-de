---
title: Hochpräzise Zeitmessung
slug: Web/API/Performance_API/High_precision_timing
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API ermöglicht hochpräzise Messungen, die auf Zeit mit potenzieller Submillisekunden-Auflösung und einer stabilen monotone Uhr basieren, die nicht durch Systemuhrachtversatz oder Anpassungen beeinflusst wird. Die hochauflösenden Timer sind notwendig für genaue Benchmarking, im Gegensatz zu den weniger präzisen und nicht-motononen {{jsxref("Date")}} Zeitstempeln.

Diese Seite bietet einen Überblick darüber, wie hochpräzise Zeit innerhalb der Performance API funktioniert und wie sie im Vergleich zu {{jsxref("Date")}} Zeitstempeln steht.

## `DOMHighResTimeStamp`

Hochpräzise Zeitmessung wird erreicht durch die Verwendung des Typs [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für Zeitwerte. Die Einheit ist Millisekunden und sollte genau auf 5 µs (Mikrosekunden) sein. Sollte der Browser nicht in der Lage sein, einen Zeitwert mit einer Genauigkeit von 5 Mikrosekunden bereitzustellen, kann der Browser den Wert als Zeit in Millisekunden darstellen, die auf eine Millisekunde genau ist. Dies kann aus Hardware- oder Softwareeinschränkungen oder aus Sicherheits- und Datenschutzgründen erfolgen. Für weitere Informationen, siehe den Abschnitt über [verringerte Genauigkeit](#verringerte_genauigkeit) unten.

Alle Zeitstempel in der Performance API verwenden den Typ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp). Zuvor verwendete die Performance API (und andere Web APIs) den Typ `EpochTimeStamp` (früher bekannt als `DOMTimeStamp`). Diese Typen sind jetzt nicht mehr empfohlen.

## `Performance.now()` vs. `Date.now()`

JavaScript definiert {{jsxref("Date.now()")}} als die Anzahl der seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangenen Millisekunden, die als Mitternacht zu Beginn des 1. Januar 1970, UTC, definiert ist. Die `performance.now()`-Methode hingegen ist relativ zur [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)-Eigenschaft. Für weitere Informationen, siehe den [Abschnitt über Zeitursprünge](#zeitursprünge) unten.

JavaScript `Date` Zeiten unterliegen Systemuhrachtversatz oder Anpassungen. Dies bedeutet, dass der Zeitwert nicht immer monoton steigend sein muss. Der Hauptzweck von `Date`-Objekten ist es, dem Benutzer Zeit- und Datumsinformationen anzuzeigen, und daher führen viele Betriebssysteme einen Dienst aus, der die Zeit regelmäßig synchronisiert. Es könnte sein, dass die Uhr mehrmals pro Stunde um einige Millisekunden verstellt wird.

Die `performance.now()`-Methode (und alle anderen `DOMHighResTimeStamp`-Werte) liefern monoton steigende Zeitwerte und sind nicht von Uhrenanpassungen betroffen. Das bedeutet, dass es garantiert ist, dass `DOMHighResTimeStamp`-Werte mindestens gleich oder größer als der letzte Zugriff auf sie sein werden.

```js
Date.now(); // 1678889977578
performance.now(); // 233936
```

Für die Messung von Leistung, die Berechnung präziser Bildwiederholraten (FPS), Animationsschleifen usw., verwenden Sie die monoton steigende hochauflösende Zeit verfügbar mit [`Performance.now()`](/de/docs/Web/API/Performance/now) anstelle von JavaScript's {{jsxref("Date.now()")}}.

Zusammenfassung:

| -                | [`Performance.now()`](/de/docs/Web/API/Performance/now)             | {{jsxref("Date.now()")}}          |
| ---------------- | ------------------------------------------------------------------- | --------------------------------- |
| Auflösung        | Submillisekunden                                                    | Millisekunden                     |
| Ursprung         | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) | Unix Epoche (1. Januar 1970, UTC) |
| Uhrenanpassungen | Nein                                                                | Ja                                |
| Monoton steigend | Ja                                                                  | Nein                              |

## Zeitursprünge

Die Performance API verwendet die Eigenschaft [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), um die Basislinie für leistungsbezogene Zeitstempel zu bestimmen. Alle `DOMHighResTimeStamp`-Zeiten sind relativ zur `timeOrigin`-Eigenschaft.

In Fensterkontexten ist dieser Zeitursprung der Zeitpunkt, zu dem die Navigation gestartet wurde. In [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten ist der Zeitursprung der Zeitpunkt, zu dem der Worker gestartet wurde.

In der vorherigen Version der Spezifikation (Level 1) war die `performance.now()`-Methode relativ zur [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)-Eigenschaft aus der Navigation Timing-Spezifikation. Dies änderte sich jedoch in einer späteren Version der Spezifikation (Level 2), und `performance.now()` ist nun relativ zur [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), wodurch Risiken von Uhrenänderungen bei der Vergleichung von Zeitstempeln über Webseiten hinweg vermieden werden.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Synchronisierung von Zeitursprüngen zwischen Kontexten

Um die unterschiedlichen Zeitursprünge in Fenster- und Workerkontexten zu berücksichtigen, sollten Sie die Zeitstempel aus Worker-Skripten mit Hilfe der `timeOrigin`-Eigenschaft übersetzen, damit die Zeiten für die gesamte Anwendung synchronisiert werden. Sehen Sie sich den Abschnitt mit Beispielen auf der Seite [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) für Beispielcode zur Synchronisierung der Zeit an.

## Verringerte Genauigkeit

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, werden `DOMHighResTimeStamp`-Typen basierend auf dem Status der Website-Isolation gekörnt.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht-isolierten Kontexten: 100 Mikrosekunden

Um Quellisolierung auf Ihre Seite anzuwenden, verwenden Sie die {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Top-Level-Dokument keine Browsing-Kontextgruppe mit
fremdherkunfts-Dokumenten teilt. {{HTTPHeader("Cross-Origin-Opener-Policy")}} isoliert Ihren Prozess physisch, und potenzielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup geöffnet hätten, wodurch eine Reihe von Cross-Origin-Angriffe, genannt [XS-Leaks](https://github.com/xsleaks/xsleaks), verhindert wird.

## Siehe auch

- [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)
- [`Performance.now()`](/de/docs/Web/API/Performance/now) / {{jsxref("Date.now()")}}

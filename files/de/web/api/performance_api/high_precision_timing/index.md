---
title: Hochpräzise Zeitmessung
slug: Web/API/Performance_API/High_precision_timing
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API erlaubt hochpräzise Messungen auf Basis der Zeit in einer möglichen sub-Millisekunden-Auflösung und einer stabilen monotonen Uhr, die nicht den Schwankungen oder Anpassungen der Systemuhr unterliegt. Die hochauflösenden Timer werden für genaues Benchmarking benötigt, anstelle der weniger präzisen und nicht-monotonen {{jsxref("Date")}}-Zeitstempel.

Diese Seite bietet einen Überblick darüber, wie hochpräzise Zeit innerhalb der Performance API funktioniert und wie sie sich von {{jsxref("Date")}}-Zeitstempeln unterscheidet.

## `DOMHighResTimeStamp`

Hochpräzise Zeitmessung wird durch die Verwendung des Typs [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für Zeitwerte erreicht. Die Einheit ist Millisekunden und sollte auf 5 µs (Mikrosekunden) genau sein. Wenn der Browser jedoch nicht in der Lage ist, einen Zeitwert mit einer Genauigkeit von 5 Mikrosekunden bereitzustellen, kann der Browser den Wert als Zeit in Millisekunden mit einer Genauigkeit von einer Millisekunde darstellen. Dies kann aufgrund von Hardware-/Softwareeinschränkungen oder aus Sicherheits- und Datenschutzgründen auftreten. Weitere Informationen finden Sie im Abschnitt zur [reduzierten Genauigkeit](#reduzierte_genauigkeit) unten.

Alle Zeitstempel in der Performance API verwenden den Typ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp). Zuvor verwendete die Performance API (und andere Web-APIs) den Typ `EpochTimeStamp` (früher bekannt als `DOMTimeStamp`). Diese Typen werden nun nicht mehr empfohlen.

## `Performance.now()` vs. `Date.now()`

JavaScript definiert {{jsxref("Date.now()")}} als die Anzahl der Millisekunden, die seit dem [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind, der als Mitternacht zu Beginn des 1. Januar 1970, UTC, definiert ist. Die `performance.now()`-Methode hingegen bezieht sich auf die [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)-Eigenschaft. Weitere Informationen finden Sie im Abschnitt [Zeitursprünge](#zeitursprünge) unten.

JavaScript-`Date`-Zeiten unterliegen den Schwankungen oder Anpassungen der Systemuhr. Das bedeutet, dass der Zeitwert nicht immer monoton steigen muss. Hauptzweck von `Date`-Objekten ist die Anzeige von Zeit- und Datumsinformationen für den Benutzer, und viele Betriebssysteme führen ein Dienstprogramm aus, das die Zeit regelmäßig synchronisiert. Es könnte sein, dass die Uhr mehrmals pro Stunde um einige Millisekunden angepasst wird.

Die `performance.now()`-Methode (und alle anderen `DOMHighResTimeStamp`-Werte) liefern monoton steigende Zeitwerte und unterliegen keinen Uhrenanpassungen. Das bedeutet, dass garantiert ist, dass `DOMHighResTimeStamp`-Werte mindestens gleich oder größer sein werden als beim letzten Zugriff darauf.

```js
Date.now(); // 1678889977578
performance.now(); // 233936
```

Für die Messung der Leistung, die Berechnung präziser Bildraten (FPS), Animationsschleifen usw. verwenden Sie statt JavaScripts {{jsxref("Date.now()")}} den monoton steigenden hochauflösenden Zeitwert, der mit [`Performance.now()`](/de/docs/Web/API/Performance/now) verfügbar ist.

Zusammengefasst:

| -                               | [`Performance.now()`](/de/docs/Web/API/Performance/now)             | {{jsxref("Date.now()")}}         |
| ------------------------------- | ------------------------------------------------------------------- | -------------------------------- |
| Auflösung                       | Sub-Millisekunden                                                   | Millisekunden                    |
| Ursprung                        | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) | Unix-Epoch (1. Januar 1970, UTC) |
| Verwendung von Uhrenanpassungen | Nein                                                                | Ja                               |
| Monoton steigend                | Ja                                                                  | Nein                             |

## Zeitursprünge

Die Performance API verwendet die [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)-Eigenschaft, um die Basislinie für leistungsbezogene Zeitstempel zu bestimmen. Alle `DOMHighResTimeStamp`-Zeiten sind relativ zur `timeOrigin`-Eigenschaft.

In Window-Kontexten ist dieser Zeitursprung der Zeitpunkt, zu dem die Navigation gestartet wurde. In [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten ist der Zeitursprung der Zeitpunkt, zu dem der Worker ausgeführt wird.

In der vorherigen Version der Spezifikation (Level 1) basierte die `performance.now()`-Methode auf der [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)-Eigenschaft aus der Navigation Timing-Spezifikation. Dies änderte sich jedoch in einer späteren Version der Spezifikation (Level 2), und `performance.now()` basiert jetzt auf [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), was Risiken durch Uhrenänderungen beim Vergleich von Zeitstempeln über Webseiten hinweg vermeidet.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Synchronisierung von Zeitursprüngen zwischen Kontexten

Um die unterschiedlichen Zeitursprünge in Fenster- und Worker-Kontexten zu berücksichtigen, sollten Sie die Zeitstempel aus Worker-Skripten mit Hilfe der `timeOrigin`-Eigenschaft übersetzen, so dass die Zeiten für die gesamte Anwendung synchronisiert werden. Sehen Sie sich den Abschnitt mit Beispielen auf der Seite [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) an, um Beispielcode zur Synchronisierung der Zeit zu erhalten.

## Reduzierte Genauigkeit

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, werden `DOMHighResTimeStamp`-Typen basierend auf dem Website-Isolationsstatus grob eingestuft.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Um übergreifende Isolierung auf Ihre Website anzuwenden, verwenden Sie die {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)-Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Dokument der obersten Ebene keine Browsing-Kontextgruppe mit
Cross-Origin-Dokumenten teilt. {{HTTPHeader("Cross-Origin-Opener-Policy")}} isoliert Ihr Dokument und potenzielle Angreifer
können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup-Fenster öffnen würden, und verhindert eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://github.com/xsleaks/xsleaks) bekannt sind.

## Siehe auch

- [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)
- [`Performance.now()`](/de/docs/Web/API/Performance/now) / {{jsxref("Date.now()")}}

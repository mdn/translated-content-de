---
title: Timing mit hoher Präzision
slug: Web/API/Performance_API/High_precision_timing
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API ermöglicht hochpräzise Messungen, die auf Zeit in potenzieller Submillisekundenauflösung und einer stabilen monotonen Uhr basieren, die nicht anfällig für Systemuhrabweichungen oder Anpassungen ist. Die hochauflösenden Timer sind für genaues Benchmarking erforderlich, anstelle der weniger präzisen und nicht monotonen {{jsxref("Date")}} Zeitstempel.

Diese Seite bietet einen Überblick darüber, wie hochpräzise Zeit innerhalb der Performance API funktioniert und wie sie mit {{jsxref("Date")}} Zeitstempeln verglichen wird.

## `DOMHighResTimeStamp`

Hochpräzises Timing wird durch die Verwendung des [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Typs für Zeitwerte erreicht. Die Einheit ist Millisekunden und sollte auf 5 µs (Mikrosekunden) genau sein. Sollte der Browser jedoch nicht in der Lage sein, einen Zeitwert genau auf 5 Mikrosekunden bereitzustellen, kann der Browser den Wert als Zeit in Millisekunden mit einer Genauigkeit von einer Millisekunde darstellen. Dies könnte aufgrund von Hardware-/Software-Einschränkungen oder aus Sicherheits- und Datenschutzgründen auftreten. Weitere Informationen finden Sie im Abschnitt über [reduzierte Präzision](#reduzierte_präzision) unten.

Alle Zeitstempel in der Performance API verwenden den [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Typ. Früher verwendete die Performance API (und andere Web-APIs) den `EpochTimeStamp` Typ (früher bekannt als `DOMTimeStamp`). Diese Typen werden nun nicht mehr empfohlen.

## `Performance.now()` vs. `Date.now()`

JavaScript definiert {{jsxref("Date.now()")}} als die Anzahl der Millisekunden, die seit dem [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind, der als Mitternacht zu Beginn des 1. Januar 1970, UTC definiert ist. Die `performance.now()` Methode hingegen ist relativ zur [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) Eigenschaft. Weitere Informationen finden Sie im Abschnitt [Zeitursprünge](#zeitursprünge) unten.

JavaScript `Date` Zeiten sind anfällig für Systemuhrabweichungen oder Anpassungen. Das bedeutet, dass der Zeitwert nicht immer monoton ansteigend sein muss. Der Hauptzweck von `Date` Objekten besteht darin, dem Benutzer Zeit- und Datumsinformationen anzuzeigen, daher führt viele Betriebssysteme einen Dienst aus, der die Zeit regelmäßig synchronisiert. Es könnte sein, dass die Uhr mehrmals pro Stunde um einige Millisekunden justiert wird.

Die `performance.now()` Methode (und alle anderen `DOMHighResTimeStamp` Werte) liefert monoton ansteigende Zeitwerte und unterliegt keiner Uhranpassung. Das bedeutet, dass garantiert ist, dass `DOMHighResTimeStamp` Werte mindestens gleich oder größer sind als der letzte Zeitpunkt, zu dem Sie darauf zugegriffen haben.

```js
Date.now(); // 1678889977578
performance.now(); // 233936
```

Zum Messen der Leistung, zum Berechnen präziser Bildraten (FPS), Animationsschleifen usw., verwenden Sie hochauflösende monotone Zeit, die mit [`Performance.now()`](/de/docs/Web/API/Performance/now) verfügbar ist, anstelle von JavaScripts {{jsxref("Date.now()")}}.

Zusammengefasst:

| -                     | [`Performance.now()`](/de/docs/Web/API/Performance/now)             | {{jsxref("Date.now()")}}         |
| --------------------- | ------------------------------------------------------------------- | -------------------------------- |
| Auflösung             | Sub-Millisekunden                                                   | Millisekunden                    |
| Ursprung              | [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) | Unix Epoch (1. Januar 1970, UTC) |
| Uhranpassungen nutzen | Nein                                                                | Ja                               |
| Monoton ansteigend    | Ja                                                                  | Nein                             |

## Zeitursprünge

Die Performance API verwendet die [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) Eigenschaft, um den Ausgangspunkt für leistungsbezogene Zeitstempel zu bestimmen. Alle `DOMHighResTimeStamp` Zeiten sind relativ zur `timeOrigin` Eigenschaft.

In Fensterkontexten ist dieser Zeitpunkt der Zeitpunkt, an dem die Navigation gestartet wurde. In [`Worker`](/de/docs/Web/API/Worker) und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Kontexten ist der Zeitpunkt der, an dem der Worker ausgeführt wird.

In der vorherigen Version der Spezifikation (Level 1) war die `performance.now()` Methode relativ zur [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) Eigenschaft aus der Navigation Timing Spezifikation. Dies änderte sich jedoch in einer späteren Version der Spezifikation (Level 2) und `performance.now()` ist nun relativ zur [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), was das Risiko eines Uhrenwechsels bei der Zeitstempelvergleichung über Webseiten hinweg vermeidet.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Synchronisierung von Zeitursprüngen zwischen Kontexten

Um die unterschiedlichen Zeitursprünge in Fenster- und Worker-Kontexten zu berücksichtigen, sollten Sie die Zeitstempel von Worker-Skripten mit Hilfe der `timeOrigin` Eigenschaft übersetzen, sodass die Zeitmessungen für die gesamte Anwendung synchronisiert werden. Siehe den Beispiel Abschnitt auf der [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) Seite für Beispielcode zur Zeitsynchronisierung.

## Reduzierte Präzision

Zum Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) werden `DOMHighResTimeStamp` Typen basierend auf dem Site-Isolationsstatus vergröbert.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Um eine Ursprungsübergreifende Isolierung auf Ihrer Seite anzuwenden, verwenden Sie die {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein Dokument auf oberster Ebene keine Browsing-Kontext-Gruppe mit
dokumenten über dem Ursprung teilt. {{HTTPHeader("Cross-Origin-Opener-Policy")}} isoliert Ihren Prozess, und potentielle Angreifer können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup öffneten, was eine Reihe cross-origin Angriffe, die als [XS-Leaks](https://github.com/xsleaks/xsleaks) bezeichnet werden, verhindert.

## Siehe auch

- [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)
- [`Performance.now()`](/de/docs/Web/API/Performance/now) / {{jsxref("Date.now()")}}

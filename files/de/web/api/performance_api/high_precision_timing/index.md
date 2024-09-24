---
title: Hochpräzise Zeitmessung
slug: Web/API/Performance_API/High_precision_timing
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{DefaultAPISidebar("Performance API")}}

Die Performance-API ermöglicht hochpräzise Messungen, die auf Zeit in einer potenziellen Sub-Millisekunden-Auflösung und einer stabilen monotonen Uhr basieren, die nicht durch Systemzeitanpassungen oder -skew beeinflusst wird. Die hochauflösenden Timer sind für genaues Benchmarking erforderlich, anstatt die weniger präzisen und nicht-monotonen {{jsxref("Date")}}-Zeitstempel zu verwenden.

Diese Seite bietet einen Überblick darüber, wie hochpräzise Zeit innerhalb der Performance-API funktioniert und wie sie sich im Vergleich zu {{jsxref("Date")}}-Zeitstempeln verhält.

## `DOMHighResTimeStamp`

Hochpräzise Zeitmessung wird durch die Verwendung des {{domxref("DOMHighResTimeStamp")}}-Typs für Zeitwerte erreicht. Die Einheit ist Millisekunden und sollte auf 5 µs (Mikrosekunden) genau sein. Wenn der Browser jedoch keinen Zeitwert mit einer Genauigkeit von 5 Mikrosekunden liefern kann, kann der Browser den Wert als Zeit in Millisekunden mit einer Genauigkeit von einer Millisekunde darstellen. Dies könnte aufgrund von Hardware-/Softwarebeschränkungen oder aus Sicherheits- und Datenschutzgründen auftreten. Weitere Informationen finden Sie im Abschnitt über die [reduzierte Präzision](#reduzierte_präzision) unten.

Alle Zeitstempel in der Performance-API verwenden den {{domxref("DOMHighResTimeStamp")}}-Typ. Zuvor verwendete die Performance-API (und andere Web-APIs) den `EpochTimeStamp`-Typ (früher bekannt als `DOMTimeStamp`). Diese Typen werden jetzt vermieden.

## `Performance.now()` vs. `Date.now()`

JavaScript definiert {{jsxref("Date.now()")}} als die Anzahl der Millisekunden, die seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind, die als Mitternacht zu Beginn des 1. Januar 1970, UTC, definiert ist. Die `performance.now()`-Methode hingegen ist relativ zur {{domxref("Performance.timeOrigin")}}-Eigenschaft. Weitere Informationen finden Sie im unten stehenden [Abschnitt zu Zeitursprüngen](#zeitursprünge).

JavaScript-`Date`-Zeiten unterliegen Systemzeitanpassungen oder -skew. Das bedeutet, dass der Zeitwert möglicherweise nicht immer monoton steigend ist. Der Hauptzweck von `Date`-Objekten besteht darin, dem Benutzer Zeit- und Datumsinformationen anzuzeigen, und deshalb führen viele Betriebssysteme einen Daemon aus, der regelmäßig die Zeit synchronisiert. Es könnte sein, dass die Uhr mehrmals pro Stunde um einige Millisekunden justiert wird.

Die `performance.now()`-Methode (und alle anderen `DOMHighResTimeStamp`-Werte) bieten monoton steigende Zeitwerte und unterliegen keinen Uhrenanpassungen. Dies bedeutet, dass garantierte `DOMHighResTimeStamp`-Werte mindestens gleich oder größer als der letzte Zugriff sind.

```js
Date.now(); // 1678889977578
performance.now(); // 233936
```

Für Leistungsmessungen, genaue Berechnung der Bildwiederholrate (FPS), Animationsschleifen usw. verwenden Sie die monoton steigende hochauflösende Zeit, die mit {{domxref("Performance.now()")}} verfügbar ist, anstelle von JavaScripts {{jsxref("Date.now()")}}.

Zusammengefasst:

| -                        | {{domxref("Performance.now()")}}      | {{jsxref("Date.now()")}}          |
| ------------------------ | ------------------------------------- | --------------------------------- |
| Auflösung                | Sub-Millisekunden                     | Millisekunden                     |
| Ursprung                 | {{domxref("Performance.timeOrigin")}} | Unix-Epoche (1. Januar 1970, UTC) |
| Nutzt Uhrenanpassungen   | Nein                                  | Ja                                |
| Monoton steigend         | Ja                                    | Nein                              |

## Zeitursprünge

Die Performance-API verwendet die {{domxref("Performance.timeOrigin")}}-Eigenschaft, um die Ausgangsbasis für leistungsbezogene Zeitstempel zu bestimmen. Alle `DOMHighResTimeStamp`-Zeiten sind relativ zur `timeOrigin`-Eigenschaft.

In Fensterkontexten ist dieser Zeitursprung der Zeitpunkt, an dem die Navigation gestartet wurde. In {{domxref("Worker")}}- und {{domxref("ServiceWorker")}}-Kontexten ist der Zeitursprung der Zeitpunkt, an dem der Worker ausgeführt wird.

In der vorherigen Version der Spezifikation (Level 1) war die `performance.now()`-Methode relativ zur [`performance.timing.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)-Eigenschaft aus der Navigation-Timing-Spezifikation. Dies änderte sich jedoch in einer späteren Version der Spezifikation (Level 2), und `performance.now()` ist jetzt relativ zur {{domxref("Performance.timeOrigin")}}, wodurch Risiken von Uhrenänderungen vermieden werden, wenn Zeitstempel über Webseiten hinweg verglichen werden.

```js
// Level 1 (Risiken durch Uhrenänderungen)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (keine Risiken durch Uhrenänderungen)
currentTime = performance.timeOrigin + performance.now();
```

### Synchronisierung von Zeitursprüngen zwischen Kontexten

Um den unterschiedlichen Zeitursprüngen in Fenster- und Worker-Kontexten Rechnung zu tragen, sollten Sie die Zeitstempel, die von Worker-Skripten stammen, mit Hilfe der `timeOrigin`-Eigenschaft übersetzen, damit die Zeiten für die gesamte Anwendung synchronisiert werden. Sehen Sie sich den Abschnitt mit Beispielen auf der {{domxref("Performance.timeOrigin")}}-Seite an, um Beispielcode zur Synchronisierung der Zeit zu betrachten.

## Reduzierte Präzision

Zum Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) werden `DOMHighResTimeStamp`-Typen basierend auf dem Isolationsstatus der Site angepasst.

- Auflösung in isolierten Kontexten: 5 Mikrosekunden
- Auflösung in nicht isolierten Kontexten: 100 Mikrosekunden

Um Cross-Origin-Isolation für Ihre Website anzuwenden, verwenden Sie die {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) und
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) Header:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Diese Header stellen sicher, dass ein oberstes Dokument keine Browsing-Kontextgruppe mit
dokumenten übergreifenden Ursprüngen teilt. {{HTTPHeader("Cross-Origin-Opener-Policy")}} isoliert Ihr Dokument pro Prozess und potenzielle Angreifer
können nicht auf Ihr globales Objekt zugreifen, wenn sie es in einem Popup-Fenster öffnen würden, wodurch eine Reihe von Cross-Origin-Angriffen verhindert wird, genannt [XS-Leaks](https://github.com/xsleaks/xsleaks).

## Siehe auch

- {{domxref("DOMHighResTimeStamp")}}
- {{domxref("Performance.timeOrigin")}}
- {{domxref("Performance.now()")}} / {{jsxref("Date.now()")}}

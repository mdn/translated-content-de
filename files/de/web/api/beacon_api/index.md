---
title: Beacon API
slug: Web/API/Beacon_API
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("Beacon")}}

Die **`Beacon`** API wird verwendet, um eine asynchrone und nicht blockierende Anfrage an einen Webserver zu senden. Die Anfrage erwartet keine Antwort. Im Gegensatz zu Anfragen über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder die [Fetch API](/de/docs/Web/API/Fetch_API) garantiert der Browser, dass Beacon-Anfragen initiiert werden, bevor die Seite entladen wird, und dass sie vollständig ausgeführt werden.

Der Hauptanwendungsfall für die Beacon API ist das Senden von Analysedaten wie clientseitigen Ereignissen oder Sitzungsdaten an den Server. Historisch gesehen haben Websites hierfür [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, aber Browser garantieren nicht immer, dass diese asynchronen Anfragen in einigen Fällen gesendet werden (zum Beispiel, wenn die Seite gerade entladen wird). Um dies zu umgehen, haben Websites auf verschiedene Techniken zurückgegriffen, wie z.B. das Synchronisieren der Anfragen, was sich negativ auf die Reaktionsfähigkeit auswirkt. Da Beacon-Anfragen sowohl asynchron sind als auch garantiert gesendet werden, kombinieren sie gute Leistungseigenschaften und Zuverlässigkeit.

Für weitere Details zur Motivation und Verwendung dieser API lesen Sie die Dokumentation zur Methode [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Schnittstellen

Diese API definiert eine einzelne Methode: [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).

Die Methode nimmt zwei Argumente an, die URL und die zu sendenden Daten in der Anfrage. Das Datenargument ist optional und sein Typ kann ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), ein [`Blob`](/de/docs/Web/API/Blob), ein [`FormData`](/de/docs/Web/API/FormData) Objekt oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt sein. Wenn der Browser die Anfrage erfolgreich zur Lieferung einreiht, gibt die Methode `true` zurück; andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beacon-Standard](https://w3c.github.io/beacon/)
- [Beacon CanIUse Daten](https://caniuse.com/#search=beacon)
- [Abfangen von Beacons über Service Worker](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers/); Ehsan Akhgari; 2015-Apr-08
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- [Beaconing in der Praxis](https://calendar.perfplanet.com/2020/beaconing-in-practice/)

---
title: Beacon API
slug: Web/API/Beacon_API
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("Beacon")}}

Die **`Beacon`** API wird verwendet, um eine asynchrone und nicht blockierende Anfrage an einen Webserver zu senden. Die Anfrage erwartet keine Antwort. Im Gegensatz zu Anfragen, die mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder der [Fetch API](/de/docs/Web/API/Fetch_API) gemacht werden, garantiert der Browser, dass Beacon-Anfragen initiiert werden, bevor die Seite entladen wird, und dass sie vollständig ausgeführt werden.

Der Hauptanwendungsfall für die Beacon API besteht darin, Analysen wie clientseitige Ereignisse oder Sitzungsdaten an den Server zu senden. Historisch haben Websites dafür [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, aber Browser garantieren nicht, dass diese asynchronen Anfragen in einigen Fällen gesendet werden (zum Beispiel, wenn die Seite gerade entladen wird). Um dem entgegenzuwirken, haben Websites auf verschiedene Techniken zurückgegriffen, wie das Synchronisieren der Anfrage, was sich negativ auf die Reaktionsfähigkeit auswirkt. Da Beacon-Anfragen sowohl asynchron sind als auch garantiert gesendet werden, kombinieren sie gute Leistungseigenschaften und Zuverlässigkeit. 

Für weitere Informationen über die Motivation und Nutzung dieser API siehe die Dokumentation zur [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) Methode.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht verfügbar über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)).

## Schnittstellen

Diese API definiert eine einzelne Methode: [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).

Die Methode nimmt zwei Argumente, die URL und die Daten, die in der Anfrage gesendet werden sollen. Das Datenargument ist optional, und sein Typ kann ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), ein [`Blob`](/de/docs/Web/API/Blob), ein [`FormData`](/de/docs/Web/API/FormData)-Objekt oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt sein. Wenn der Browser die Anfrage erfolgreich zur Lieferung in die Warteschlange stellt, gibt die Methode `true` zurück; andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beacon-Standard](https://w3c.github.io/beacon/)
- [Beacon CanIUse Daten](https://caniuse.com/#search=beacon)
- [Abfangen von Beacons durch Service Worker](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers/); Ehsan Akhgari; 08. April 2015
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- [Beaconing in der Praxis](https://calendar.perfplanet.com/2020/beaconing-in-practice/)

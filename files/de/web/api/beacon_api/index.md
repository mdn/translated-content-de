---
title: Beacon API
slug: Web/API/Beacon_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Beacon")}}

Die **`Beacon`** API wird verwendet, um eine asynchrone und nicht-blockierende Anfrage an einen Webserver zu senden. Die Anfrage erwartet keine Antwort. Im Gegensatz zu Anfragen, die mit {{domxref("XMLHttpRequest")}} oder der [Fetch API](/de/docs/Web/API/Fetch_API) gestellt werden, garantiert der Browser, dass Beacon-Anfragen initiiert werden, bevor die Seite entladen wird, und diese bis zum Abschluss durchzuführen.

Der Hauptanwendungsfall für die Beacon API besteht darin, Analysedaten wie clientseitige Ereignisse oder Sitzungsdaten an den Server zu senden. Historisch gesehen haben Websites hierfür {{domxref("XMLHttpRequest")}} verwendet, jedoch garantieren Browser nicht immer das Senden dieser asynchronen Anfragen in bestimmten Fällen (zum Beispiel, wenn die Seite entladen werden soll). Um dem entgegenzuwirken, haben Websites verschiedene Techniken eingesetzt, wie das synchrone Stellen der Anfrage, was sich negativ auf die Reaktionsfähigkeit auswirkt. Da Beacon-Anfragen sowohl asynchron sind als auch garantiert gesendet werden, kombinieren sie gute Leistungsmerkmale und Zuverlässigkeit.

Weitere Details zur Motivation und Nutzung dieser API finden Sie in der Dokumentation zur Methode {{domxref("navigator.sendBeacon()")}}.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht zugänglich über {{domxref("WorkerNavigator")}}).

## Schnittstellen

Diese API definiert eine einzige Methode: {{domxref("navigator.sendBeacon()")}}.

Die Methode nimmt zwei Argumente entgegen, die URL und die Daten, die in der Anfrage gesendet werden sollen. Das Daten-Argument ist optional und sein Typ kann ein String, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein {{domxref("ReadableStream")}}, ein {{domxref("Blob")}}, ein {{domxref("FormData")}}-Objekt oder ein {{domxref("URLSearchParams")}}-Objekt sein. Wenn der Browser die Anfrage erfolgreich zur Zustellung in die Warteschlange stellen kann, gibt die Methode "`true`" zurück; andernfalls gibt sie "`false`" zurück.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Beacon-Standard](https://w3c.github.io/beacon/)
- [Beacon CanIUse-Daten](https://caniuse.com/#search=beacon)
- [Abfangen von Beacons durch Serviceworker](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers/); Ehsan Akhgari; 08. April 2015
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- [Beaconing in der Praxis](https://calendar.perfplanet.com/2020/beaconing-in-practice/)

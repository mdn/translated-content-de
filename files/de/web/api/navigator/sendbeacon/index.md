---
title: "Navigator: sendBeacon() Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: e3b1390089160b88a74b2bed5445d9cf7cb7e436
---

{{APIRef("HTML DOM")}}

Die **`navigator.sendBeacon()`**-Methode sendet {{Glossary("Asynchronous", "asynchron")}} eine [HTTP POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit einer kleinen Menge Daten an einen Webserver.

Sie soll verwendet werden, um Analysedaten an einen Webserver zu senden und umgeht einige der Probleme mit älteren Techniken zum Senden von Analysedaten, wie z.B. die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

> [!NOTE]
> Für Anwendungsfälle, die die Möglichkeit erfordern, Anfragen mit anderen Methoden als `POST` zu senden, oder um irgendwelche Anfrageeigenschaften zu ändern, oder die Zugriff auf die Serverantwort benötigen, verwenden Sie stattdessen die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode mit [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) auf true gesetzt.

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameter

- `url`
  - : Die URL, die die _Daten_ empfangen wird. Kann relativ oder absolut sein.
- `data` {{Optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein Zeichenkettenliteral oder Objekt, ein [`FormData`](/de/docs/Web/API/FormData)- oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das die zu sendenden Daten enthält. Die Gesamtgröße der aufgereihten Daten ist auf 64 KiB (65.536 Bytes) begrenzt.

### Rückgabewert

Gibt `true` zurück, wenn der {{Glossary("user_agent", "user agent")}} die `data` erfolgreich zur Übertragung in die Warteschlange gestellt hat. Andernfalls wird `false` zurückgegeben.

## Beschreibung

Diese Methode richtet sich an Analysen und Diagnosecode, um Daten an einen Server zu senden.

Ein Problem beim Senden von Analysedaten ist, dass eine Website oft Analysedaten senden möchte, wenn der Benutzer mit einer Seite fertig ist: zum Beispiel, wenn der Benutzer zu einer anderen Seite navigiert. In dieser Situation könnte der Browser im Begriff sein, die Seite zu entladen, und in diesem Fall könnte der Browser sich entscheiden, keine asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen zu senden.

In der Vergangenheit haben Webseiten versucht, das Entladen der Seite lange genug zu verzögern, um Daten zu senden. Dazu haben sie Workarounds verwendet wie:

- Das Einreichen der Daten mit einem blockierenden synchronen `XMLHttpRequest`-Aufruf.
- Erstellen eines {{HTMLElement("img")}}-Elements und Festlegen seines `src`. Die meisten Benutzeragenten verzögern das Entladen, um das Bild zu laden.
- Erstellen einer No-Op-Schleife für mehrere Sekunden.

Alle diese Methoden blockieren das Entladen des Dokuments, was die Navigation zur nächsten Seite verlangsamt. Die nachfolgende Seite kann nichts dagegen tun, daher scheint die neue Seite langsam zu sein, obwohl es die Schuld der vorherigen Seite ist.

Mit der `sendBeacon()`-Methode werden die Daten asynchron übertragen, wenn der Benutzeragent die Gelegenheit dazu hat, ohne das Entladen oder die nächste Navigation zu verzögern. Das bedeutet:

- Die Daten werden zuverlässig gesendet
- Sie werden asynchron gesendet
- Sie beeinträchtigen nicht das Laden der nächsten Seite

Die Daten werden als [HTTP POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage gesendet.

Die Einschränkung besteht jedoch darin, dass die Payload-Größe auf etwa 64 KiB begrenzt ist. Für größere Datenübertragungen sollte `fetch()` in Betracht gezogen werden.

### Analysedaten am Ende einer Sitzung senden

Websites möchten oft Analysen oder Diagnosen an den Server senden, wenn der Benutzer mit der Seite fertig ist. Die zuverlässigste Methode, dies zu tun, besteht darin, die Daten beim [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis zu senden:

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Vermeiden Sie unload und beforeunload

In der Vergangenheit haben viele Websites die [`unload`](/de/docs/Web/API/Window/unload_event)- oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse verwendet, um Analysedaten am Ende einer Sitzung zu senden. Dies ist jedoch äußerst unzuverlässig. In vielen Situationen, insbesondere auf mobilen Geräten, wird der Browser die `unload`, `beforeunload` oder `pagehide`-Ereignisse nicht auslösen. Zum Beispiel werden diese Ereignisse in der folgenden Situation nicht ausgelöst:

1. Der Benutzer lädt die Seite und interagiert mit ihr.
2. Wenn er fertig ist, wechselt er zu einer anderen App, anstatt den Tab zu schließen.
3. Später schließt er die Browser-App über den App-Manager des Telefons.

Zusätzlich ist das `unload`-Ereignis mit dem Vorwärts-/Rückwärts-Cache ([bfcache](https://web.dev/articles/bfcache)) in modernen Browsern unvereinbar. Einige Browser, wie Firefox, behandeln diese Inkompatibilität, indem sie Seiten vom bfcache ausschließen, wenn sie unload-Handler enthalten, was die Leistung beeinträchtigt. Andere, wie Safari und Chrome auf Android, behandeln es, indem sie das `unload`-Ereignis nicht auslösen, wenn der Benutzer zu einer anderen Seite im selben Tab navigiert.

Firefox schließt Seiten auch vom bfcache aus, wenn sie `beforeunload`-Handler enthalten.

#### Verwenden Sie pagehide als Fallback

Um Browser zu unterstützen, die `visibilitychange` nicht implementieren, verwenden Sie das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis. Wie `beforeunload` und `unload` wird dieses Ereignis nicht zuverlässig ausgelöst, insbesondere auf mobilen Geräten. Es ist jedoch mit dem bfcache kompatibel.

## Beispiele

Das folgende Beispiel spezifiziert einen Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. Der Handler ruft `sendBeacon()` auf, um Analysedaten zu senden.

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- [Beacon API](/de/docs/Web/API/Beacon_API) Übersichtsseite.
- [Verlieren Sie nicht den Benutzer- und Anwendungszustand, verwenden Sie die Seitensichtbarkeit](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt ausführlich, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Leitlinien für Best Practices im Umgang mit Seitensichtbarkeitsverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit inkonsistentem Seitensichtbarkeitsverhalten zwischen verschiedenen Browsern befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Vorwärts-/Rückwärts-Cache ist und seine Auswirkungen auf verschiedene Seitensichtbarkeitsereignisse.

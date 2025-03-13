---
title: "Navigator: sendBeacon() Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

Die **`navigator.sendBeacon()`** Methode sendet {{Glossary("Asynchronous", "asynchron")}} eine [HTTP-POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit einer kleinen Datenmenge an einen Webserver.

Sie ist dafür gedacht, Analysedaten an einen Webserver zu senden, und vermeidet einige der Probleme mit älteren Techniken zum Senden von Analysedaten, wie z. B. die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

> [!NOTE]
> Für Anwendungsfälle, die die Möglichkeit benötigen, Anfragen mit anderen Methoden als `POST` zu senden, Anforderungseigenschaften zu ändern oder auf die Serverantwort zuzugreifen, verwenden Sie stattdessen die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode mit [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) auf `true` gesetzt.

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameter

- `url`
  - : Die URL, die die _Daten_ empfangen wird. Kann relativ oder absolut sein.
- `data` {{Optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein Zeichenfolgeliteral oder Objekt, ein [`FormData`](/de/docs/Web/API/FormData) oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das die zu sendenden Daten enthält.

### Rückgabewerte

Die **`sendBeacon()`** Methode gibt `true` zurück, wenn der {{Glossary("user_agent", "User-Agent")}} die `data` erfolgreich zur Übertragung in die Warteschlange gestellt hat. Andernfalls wird `false` zurückgegeben.

## Beschreibung

Diese Methode ist dafür gedacht, Analytik- und Diagnosecodes zu verwenden, um Daten an einen Server zu senden.

Ein Problem beim Senden von Analysedaten ist, dass eine Seite oft Analysen senden möchte, wenn der Benutzer mit einer Seite fertig ist: z. B. wenn der Benutzer zu einer anderen Seite navigiert. In dieser Situation könnte der Browser die Seite entladen, und in diesem Fall könnte der Browser entscheiden, keine asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen zu senden.

In der Vergangenheit haben Webseiten versucht, die Entladung der Seite lange genug zu verzögern, um Daten zu senden. Dazu haben sie Umgehungen wie die folgenden verwendet:

- Die Daten mit einem blockierenden synchronen `XMLHttpRequest`-Aufruf übermitteln.
- Ein {{HTMLElement("img")}}-Element erstellen und dessen `src` setzen. Die meisten User Agents verzögern die Entladung, um das Bild zu laden.
- Eine No-Op-Schleife für mehrere Sekunden erstellen.

All diese Methoden blockieren das Entladen des Dokuments, was die Navigation zur nächsten Seite verlangsamt. Die nächste Seite kann nichts dagegen tun, sodass die neue Seite langsam erscheint, obwohl es das Verschulden der vorherigen Seite ist.

Mit der `sendBeacon()`-Methode werden die Daten asynchron übertragen, wenn der User-Agent die Gelegenheit dazu hat, ohne das Entladen oder die nächste Navigation zu verzögern. Dies bedeutet:

- Die Daten werden zuverlässig gesendet
- Sie werden asynchron gesendet
- Sie beeinträchtigen nicht das Laden der nächsten Seite

Die Daten werden als [HTTP-POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage gesendet.

### Senden von Analysedaten am Ende einer Sitzung

Webseiten möchten oft Analysedaten oder Diagnosen an den Server senden, wenn der Benutzer mit der Seite fertig ist. Der zuverlässigste Weg dafür ist es, die Daten beim [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis zu senden:

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Vermeiden Sie unload und beforeunload

In der Vergangenheit haben viele Webseiten die [`unload`](/de/docs/Web/API/Window/unload_event)- oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse verwendet, um Analysedaten am Ende einer Sitzung zu senden. Dies ist jedoch äußerst unzuverlässig. In vielen Situationen, insbesondere auf mobilen Geräten, wird der Browser die `unload`, `beforeunload` oder `pagehide` Ereignisse nicht auslösen. Beispielsweise werden diese Ereignisse in der folgenden Situation nicht ausgelöst:

1. Der Benutzer lädt die Seite und interagiert damit.
2. Wenn er fertig ist, wechselt er zu einer anderen App, anstatt den Tab zu schließen.
3. Später schließt er die Browser-App über den App-Manager des Telefons.

Darüber hinaus ist das `unload`-Ereignis mit dem Zurück-/Weiter-Cache ([bfcache](https://web.dev/articles/bfcache)) in modernen Browsern inkompatibel. Einige Browser, wie Firefox, handhaben diese Inkompatibilität, indem sie Seiten von der bfcache ausschließen, wenn sie unload-Handler enthalten, was die Leistung beeinträchtigt. Andere, wie Safari und Chrome auf Android, handhaben es, indem sie das `unload`-Ereignis nicht auslösen, wenn der Benutzer zu einer anderen Seite im selben Tab navigiert.

Firefox wird auch Seiten aus der bfcache ausschließen, wenn sie `beforeunload`-Handler enthalten.

#### Verwenden Sie pagehide als Fallback

Um Browser zu unterstützen, die `visibilitychange` nicht implementieren, verwenden Sie das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis. Wie `beforeunload` und `unload` wird dieses Ereignis nicht zuverlässig ausgelöst, insbesondere auf mobilen Geräten. Es ist jedoch mit der bfcache kompatibel.

## Beispiele

Das folgende Beispiel spezifiziert einen Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. Der Handler ruft `sendBeacon()` auf, um Analysedaten zu senden.

```js
document.addEventListener("visibilitychange", function logData() {
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

- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis.
- [Beacon API](/de/docs/Web/API/Beacon_API) Übersichtsseite.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) gibt Best Practices für den Umgang mit dem Seitenlebenszyklusverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die sich mit browserübergreifenden Inkonsistenzen im Seitenlebenszyklusverhalten befasst.
- [Zurück-/Weiter-Cache](https://web.dev/articles/bfcache) erklärt, was der Zurück-/Weiter-Cache ist und welche Auswirkungen er auf verschiedene Ereignisse des Seitenlebenszyklus hat.

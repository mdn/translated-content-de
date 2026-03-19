---
title: "Navigator: sendBeacon() Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: eac932202078c13aae0590da7a23eed493936221
---

{{APIRef("HTML DOM")}}

Die **`navigator.sendBeacon()`**-Methode sendet asynchron eine [HTTP POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit einer kleinen Menge an Daten an einen Webserver.

Sie ist dafür gedacht, Analysedaten an einen Webserver zu senden, und vermeidet einige der Probleme, die mit älteren Techniken zum Senden von Analysedaten verbunden sind, wie die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

> [!NOTE]
> Für Anwendungsfälle, die über die Fähigkeit verfügen müssen, Anfragen mit anderen Methoden als `POST` zu senden, oder um Anfrageeigenschaften zu ändern, oder die Zugriff auf die Serverantwort benötigen, verwenden Sie stattdessen die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode mit [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) auf true gesetzt.

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameter

- `url`
  - : Die URL, die die _Daten_ empfangen wird. Kann relativ oder absolut sein.
- `data` {{Optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein String-Literal oder Objekt, ein [`FormData`](/de/docs/Web/API/FormData)- oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt mit den zu sendenden Daten.

### Rückgabewert

Gibt `true` zurück, wenn der
{{Glossary("user_agent", "user agent")}} die `data` erfolgreich zur Übertragung in die Warteschlange gestellt hat.
Andernfalls wird `false` zurückgegeben.

## Beschreibung

Diese Methode ist für Analyse- und Diagnosecodes vorgesehen, um Daten an einen Server zu senden.

Ein Problem beim Senden von Analysedaten besteht darin, dass eine Website oft Analysedaten senden möchte, wenn der Benutzer mit einer Seite fertig ist: zum Beispiel, wenn der Benutzer zu einer anderen Seite navigiert. In dieser Situation könnte es sein, dass der Browser die Seite gerade entlädt, und in diesem Fall kann der Browser sich entscheiden, keine asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen zu senden.

In der Vergangenheit haben Webseiten versucht, das Entladen der Seite lange genug zu verzögern, um Daten zu senden. Dabei wurden Umgehungslösungen wie die folgenden verwendet:

- Übermittlung der Daten mit einem blockierenden synchronen `XMLHttpRequest`-Aufruf.
- Erstellung eines {{HTMLElement("img")}}-Elements und Setzen von dessen `src`. Die meisten User-Agents verzögern das Entladen, um das Bild zu laden.
- Erstellung einer No-Op-Schleife für einige Sekunden.

Alle diese Methoden blockieren das Entladen des Dokuments, was die Navigation zur nächsten Seite verlangsamt. Die neue Seite kann dagegen nichts unternehmen, also erscheint sie langsam, obwohl es die Schuld der vorherigen Seite ist.

Mit der `sendBeacon()`-Methode werden die Daten asynchron übertragen, wenn der User-Agent Gelegenheit dazu hat, ohne das Entladen oder die nächste Navigation zu verzögern. Das bedeutet:

- Die Daten werden zuverlässig gesendet
- Sie werden asynchron gesendet
- Es beeinträchtigt nicht das Laden der nächsten Seite

Die Daten werden als [HTTP POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage gesendet.

> [!NOTE]
> Die `navigator.sendBeacon()`-Methode hat ein [spezifikationsdefiniertes](https://fetch.spec.whatwg.org/#:~:text=length.-,If%20the%20sum%20of%20contentLength%20and%20inflightKeepaliveBytes%20is%20greater%20than%2064%20kibibytes%2C%20then%20return%20a%20network%20error.,-The) Payload-Größenlimit von etwa 64 KiB. Wenn dieses Limit überschritten wird, schlägt die Anfrage fehl. Für größere Datenübertragungen sollten Sie `fetch()` in Betracht ziehen.

### Versand von Analysedaten am Ende einer Sitzung

Websites möchten oft Analysedaten oder Diagnosen an den Server senden, wenn der Benutzer mit der Seite fertig ist. Der zuverlässigste Weg, dies zu tun, besteht darin, die Daten beim [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis zu senden:

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Vermeiden Sie unload und beforeunload

In der Vergangenheit haben viele Websites die [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse verwendet, um Analysedaten am Ende einer Sitzung zu senden. Dies ist jedoch äußerst unzuverlässig. In vielen Situationen, insbesondere auf Mobilgeräten, wird der Browser die `unload`-, `beforeunload`- oder `pagehide`-Ereignisse nicht auslösen. Zum Beispiel werden diese Ereignisse in folgender Situation nicht ausgelöst:

1. Der Benutzer lädt die Seite und interagiert damit.
2. Wenn er fertig ist, wechselt er zu einer anderen App, anstatt den Tab zu schließen.
3. Später schließt er die Browser-App mit dem App-Manager des Telefons.

Darüber hinaus ist das `unload`-Ereignis nicht kompatibel mit dem Vor-/Zurück-Cache ([bfcache](https://web.dev/articles/bfcache)), der in modernen Browsern implementiert ist. Einige Browser, wie Firefox, handhaben diese Inkompatibilität, indem sie Seiten vom bfcache ausschließen, wenn sie unload-Handler enthalten, was die Leistung beeinträchtigt. Andere, wie Safari und Chrome auf Android, handhaben es, indem sie das `unload`-Ereignis nicht auslösen, wenn der Benutzer zu einer anderen Seite im selben Tab navigiert.

Firefox schließt auch Seiten vom bfcache aus, wenn sie `beforeunload`-Handler enthalten.

#### Verwenden Sie pagehide als Fallback

Um Browser zu unterstützen, die `visibilitychange` nicht implementieren, verwenden Sie das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis. Wie `beforeunload` und `unload` wird dieses Ereignis nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Es ist jedoch mit dem bfcache kompatibel.

## Beispiele

Das folgende Beispiel gibt einen Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis an. Der Handler ruft `sendBeacon()` auf, um Analysedaten zu senden.

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
- [Übersichtsseite zur Beacon API](/de/docs/Web/API/Beacon_API).
- [Verlieren Sie nicht den Benutzer- und App-Zustand, verwenden Sie Sichtbarkeit der Seite](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` verwenden sollten und nicht `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet bewährte Praktiken im Umgang mit dem Seitenslebenszyklusverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): Eine JavaScript-Bibliothek, die mit inkonsistentem Seitenslebenszyklus-Verhalten zwischen Browsern umgeht.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Vor-/Zurück-Cache ist und seine Auswirkungen auf verschiedene Seitenslebenszyklus-Ereignisse.

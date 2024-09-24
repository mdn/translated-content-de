---
title: "Navigator: sendBeacon() Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("HTML DOM")}}

Die **`navigator.sendBeacon()`**-Methode sendet {{glossary("Asynchronous", "asynchron")}} eine [HTTP POST](/de/docs/Web/HTTP/Methods/POST)-Anfrage mit einer kleinen Menge an Daten an einen Webserver.

Sie ist dafür gedacht, Analysedaten an einen Webserver zu senden und vermeidet einige der Probleme mit veralteten Techniken zum Senden von Analysedaten, wie zum Beispiel die Verwendung von {{domxref("XMLHttpRequest","XMLHttpRequest")}}.

> [!NOTE]
> Für Anwendungsfälle, die die Möglichkeit erfordern, Anfragen mit anderen Methoden als `POST` zu senden, oder Anforderungseigenschaften zu ändern, oder die Zugriff auf die Serverantwort benötigen, sollten Sie stattdessen die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode mit [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) auf true gesetzt verwenden.

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameter

- `url`
  - : Die URL, die die _Daten_ erhalten wird. Kann relativ oder absolut sein.
- `data` {{Optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein {{domxref("Blob")}},
    ein Zeichenfolgenliteral oder Objekt, ein {{domxref("FormData")}} oder ein {{domxref("URLSearchParams")}}-Objekt, das die zu sendenden Daten enthält.

### Rückgabewerte

Die **`sendBeacon()`**-Methode gibt `true` zurück, wenn der {{glossary("user agent")}} die `Daten` erfolgreich für den Transfer in die Warteschlange gestellt hat.
Andernfalls gibt sie `false` zurück.

## Beschreibung

Diese Methode ist für Analyse- und Diagnosecodes gedacht, um Daten an einen Server zu senden.

Ein Problem beim Senden von Analysedaten ist, dass eine Website oft Analysedaten senden möchte, wenn der Nutzer mit einer Seite fertig ist: zum Beispiel, wenn der Nutzer zu einer anderen Seite navigiert. In dieser Situation könnte der Browser kurz davor stehen, die Seite zu entladen, und in diesem Fall könnte der Browser wählen, keine asynchronen {{domxref("XMLHttpRequest")}}-Anfragen zu senden.

In der Vergangenheit haben Webseiten versucht, das Entladen der Seite zu verzögern, um Daten zu senden. Dazu haben sie Workarounds verwendet wie:

- Das Übermitteln der Daten mit einem blockierenden synchronen `XMLHttpRequest`-Aufruf.
- Das Erstellen eines {{HTMLElement("img")}}-Elements und Setzen des `src`. Die meisten Benutzeragenten verzögern das Entladen, um das Bild zu laden.
- Das Erstellen einer No-Op-Schleife für mehrere Sekunden.

All diese Methoden blockieren das Entladen des Dokuments, was die Navigation zur nächsten Seite verlangsamt. Die nächste Seite kann nichts dagegen tun, somit scheint die neue Seite langsam zu sein, obwohl es an der vorherigen Seite liegt.

Mit der `sendBeacon()`-Methode werden die Daten asynchron übertragen, wenn der Benutzeragent Gelegenheit dazu hat, ohne das Entladen oder die nächste Navigation zu verzögern. Das bedeutet:

- Die Daten werden zuverlässig gesendet
- Sie werden asynchron gesendet
- Sie beeinflussen nicht das Laden der nächsten Seite

Die Daten werden als [HTTP POST](/de/docs/Web/HTTP/Methods/POST)-Anfrage gesendet.

### Analysen am Ende einer Sitzung senden

Websites möchten oft Analysen oder Diagnosen an den Server senden, wenn der Nutzer mit der Seite fertig ist. Der zuverlässigste Weg, dies zu tun, ist das Senden der Daten beim [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis:

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Vermeiden Sie unload und beforeunload

In der Vergangenheit haben viele Websites die [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse verwendet, um Analysen am Ende einer Sitzung zu senden. Dies ist jedoch extrem unzuverlässig. In vielen Situationen, insbesondere auf Mobilgeräten, wird der Browser die `unload`, `beforeunload` oder `pagehide`-Ereignisse nicht auslösen. Beispielsweise werden diese Ereignisse in der folgenden Situation nicht ausgelöst:

1. Der Nutzer lädt die Seite und interagiert damit.
2. Wenn er fertig ist, wechselt er zu einer anderen App, anstatt die Registerkarte zu schließen.
3. Später schließt er die Browser-App mit dem App-Manager des Telefons.

Zusätzlich ist das `unload`-Ereignis inkompatibel mit dem Rückwärts-/Vorwärts-Cache ([bfcache](https://web.dev/articles/bfcache)), der in modernen Browsern implementiert ist. Einige Browser, wie Firefox, umgehen diese Inkompatibilität, indem sie Seiten vom bfcache ausschließen, wenn sie unload-Handler enthalten, was die Leistung beeinträchtigt. Andere, wie Safari und Chrome auf Android, handhaben es, indem sie das `unload`-Ereignis nicht auslösen, wenn der Nutzer in derselben Registerkarte zu einer anderen Seite navigiert.

Firefox wird auch Seiten vom bfcache ausschließen, wenn sie `beforeunload`-Handler enthalten.

#### Verwenden Sie pagehide als Fallback

Um Browser zu unterstützen, die `visibilitychange` nicht implementieren, verwenden Sie das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis. Wie `beforeunload` und `unload` wird dieses Ereignis nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Es ist jedoch mit dem bfcache kompatibel.

## Beispiele

Das folgende Beispiel legt einen Handler für das {{domxref("document.visibilitychange_event", "visibilitychange")}}-Ereignis fest. Der Handler ruft `sendBeacon()` auf, um Analysedaten zu senden.

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

- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis.
- {{domxref("Beacon_API","Beacon API", "", "true")}} Übersichtsseite.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` verwenden sollten, nicht
  `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) gibt Empfehlungen zur Behandlung des Seitenszyklusverhaltens in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit Inkonsistenzen im Seitenszyklusverhalten zwischen verschiedenen Browsern befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Rückwärts-/Vorwärts-Cache ist und welche Auswirkungen er auf verschiedene Seitenszyklusereignisse hat.

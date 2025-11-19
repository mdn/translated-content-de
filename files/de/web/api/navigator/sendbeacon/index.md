---
title: "Navigator: sendBeacon() Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("HTML DOM")}}

Die **`navigator.sendBeacon()`**-Methode sendet {{Glossary("Asynchronous", "asynchron")}} eine [HTTP POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit einer kleinen Menge an Daten an einen Webserver.

Sie soll verwendet werden, um Analysedaten an einen Webserver zu senden, und vermeidet einige der Probleme mit älteren Techniken zum Senden von Analysedaten, wie z. B. die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

> [!NOTE]
> Für Anwendungsfälle, die die Fähigkeit erfordern, Anfragen mit anderen Methoden als `POST` zu senden, oder um irgendwelche Anfrageeigenschaften zu ändern, oder die Zugriff auf die Serverantwort benötigen, verwenden Sie stattdessen die [`fetch()`](/de/docs/Web/API/Window/fetch) Methode mit [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) auf true gesetzt.

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameter

- `url`
  - : Die URL, die die _Daten_ erhält. Kann relativ oder absolut sein.
- `data` {{Optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`Blob`](/de/docs/Web/API/Blob),
    ein String-Literal oder Objekt, ein [`FormData`](/de/docs/Web/API/FormData) oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    Objekt, das die zu sendenden Daten enthält.

### Rückgabewert

Gibt `true` zurück, wenn der
{{Glossary("user_agent", "User-Agent")}} die `data` erfolgreich zur Übertragung in die Warteschlange gestellt hat.
Andernfalls gibt es `false` zurück.

## Beschreibung

Diese Methode ist für Analyse- und Diagnosetools gedacht, um Daten an einen Server zu senden.

Ein Problem beim Senden von Analysedaten ist, dass eine Website häufig Analysedaten senden möchte, wenn der Benutzer mit einer Seite fertig ist: beispielsweise, wenn der Benutzer auf eine andere Seite navigiert. In dieser Situation könnte der Browser im Begriff sein, die Seite zu entladen, und in diesem Fall könnte der Browser sich entscheiden, keine asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen zu senden.

In der Vergangenheit haben Web-Seiten versucht, das Entladen der Seite lange genug zu verzögern, um Daten zu senden. Dazu haben sie Umgehungslösungen wie die folgenden verwendet:

- Das Übermitteln der Daten mit einem blockierenden synchronen `XMLHttpRequest`-Aufruf.
- Das Erstellen eines {{HTMLElement("img")}}-Elements und Setzen seines `src`. Die meisten User-Agents verzögern das Entladen, um das Bild zu laden.
- Das Erstellen einer No-Op-Schleife für mehrere Sekunden.

All diese Methoden blockieren das Entladen des Dokuments, was die Navigation zur nächsten Seite verlangsamt. Die nächste Seite kann nichts tun, um dies zu vermeiden, sodass die neue Seite langsam erscheint, obwohl es an der vorherigen Seite liegt.

Mit der `sendBeacon()`-Methode werden die Daten asynchron übertragen, wenn der User-Agent die Gelegenheit dazu hat, ohne das Entladen oder die nächste Navigation zu verzögern. Das bedeutet:

- Die Daten werden zuverlässig gesendet
- Sie werden asynchron gesendet
- Es beeinträchtigt nicht das Laden der nächsten Seite

Die Daten werden als [HTTP POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage gesendet.

### Senden von Analysen am Ende einer Sitzung

Websites möchten häufig Analysedaten oder Diagnosen an den Server senden, wenn der Benutzer mit der Seite fertig ist. Der zuverlässigste Weg, dies zu tun, ist das Senden der Daten beim [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis:

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Vermeiden Sie unload und beforeunload

In der Vergangenheit haben viele Websites die [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse verwendet, um Analysen am Ende einer Sitzung zu senden. Dies ist jedoch extrem unzuverlässig. In vielen Situationen, insbesondere bei mobilen Geräten, wird der Browser die `unload`, `beforeunload` oder `pagehide`-Ereignisse nicht auslösen. Beispielsweise werden diese Ereignisse in der folgenden Situation nicht ausgelöst:

1. Der Benutzer lädt die Seite und interagiert mit ihr.
2. Wenn er fertig ist, wechselt er zu einer anderen App, anstatt den Tab zu schließen.
3. Später schließt er die Browser-App mit dem App-Manager des Telefons.

Zudem ist das `unload`-Ereignis mit dem Back/Forward Cache ([bfcache](https://web.dev/articles/bfcache)) in modernen Browsern inkompatibel. Einige Browser, wie Firefox, behandeln diese Inkompatibilität, indem sie Seiten aus dem bfcache ausschließen, wenn sie Entlade-Handler enthalten, was die Leistung beeinträchtigt. Andere, wie Safari und Chrome auf Android, handhaben es, indem sie das `unload`-Ereignis nicht auslösen, wenn der Benutzer zu einer anderen Seite im selben Tab navigiert.

Firefox schließt auch Seiten aus dem bfcache aus, wenn sie `beforeunload`-Handler enthalten.

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
- Überblick über die [Beacon API](/de/docs/Web/API/Beacon_API).
- [Verlieren Sie nicht den Benutzer- und App-Zustand, verwenden Sie Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im
  Detail, warum Sie `visibilitychange` verwenden sollten und nicht
  `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practice-Empfehlungen zur Handhabung von
  Seitenlebenszyklusverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit browserübergreifenden Inkonsistenzen im Seitenlebenszyklusverhalten befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward Cache ist und welche Auswirkungen er auf verschiedene Seitenlebenszyklusereignisse hat.

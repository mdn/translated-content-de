---
title: "Navigator: sendBeacon()-Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("HTML DOM")}}

Die **`navigator.sendBeacon()`**-Methode sendet asynchron eine [HTTP POST](/de/docs/Web/HTTP/Methods/POST)-Anfrage mit einer kleinen Menge an Daten an einen Webserver.

Sie soll dazu verwendet werden, Analysedaten an einen Webserver zu senden und vermeidet einige der Probleme mit älteren Techniken zum Senden von Analysetools, wie der Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

> [!NOTE]
> Für Anwendungsfälle, die die Fähigkeit erfordern, Anfragen mit anderen Methoden als `POST` zu senden, oder um Anfrageeigenschaften zu ändern, oder die Zugriff auf die Serverantwort benötigen, verwenden Sie stattdessen die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode mit [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) auf true gesetzt.

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameter

- `url`
  - : Die URL, die die _Daten_ erhalten wird. Kann relativ oder absolut sein.
- `data` {{Optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`Blob`](/de/docs/Web/API/Blob),
    ein Stringliteral oder Objekt, ein [`FormData`](/de/docs/Web/API/FormData) oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das die zu sendenden Daten enthält.

### Rückgabewerte

Die **`sendBeacon()`**-Methode gibt `true` zurück, wenn der
[User Agent](/de/docs/Glossary/user_agent) die `data` erfolgreich für die Übertragung in die Warteschlange gestellt hat.
Andernfalls gibt sie `false` zurück.

## Beschreibung

Diese Methode ist für Analyse- und Diagnosetools gedacht, um Daten an einen Server zu senden.

Ein Problem beim Senden von Analysedaten ist, dass eine Seite oft Analysedaten senden möchte, wenn der Benutzer mit einer Seite fertig ist: Zum Beispiel, wenn der Benutzer zu einer anderen Seite navigiert. In dieser Situation könnte der Browser kurz davor stehen, die Seite zu entladen, und in diesem Fall könnte der Browser sich entscheiden, keine asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen zu senden.

In der Vergangenheit haben Web-Seiten versucht, das Entladen der Seite lange genug zu verzögern, um Daten zu senden. Dazu haben sie folgende Workarounds verwendet:

- Senden der Daten mit einem blockierenden synchronen `XMLHttpRequest`-Aufruf.
- Erstellen eines {{HTMLElement("img")}}-Elements und Festlegen seines `src`. Die meisten User Agents werden das Entladen verzögern, um das Bild zu laden.
- Erstellen einer No-Op-Schleife für mehrere Sekunden.

All diese Methoden blockieren das Entladen des Dokuments, was die Navigation zur nächsten Seite verlangsamt. Die nächste Seite kann nichts tun, um dies zu vermeiden, sodass die neue Seite langsam erscheint, obwohl es die Schuld der vorherigen Seite ist.

Mit der `sendBeacon()`-Methode werden die Daten asynchron übertragen, wenn der User Agent Gelegenheit dazu hat, ohne das Entladen oder die nächste Navigation zu verzögern. Dies bedeutet:

- Die Daten werden zuverlässig gesendet
- Sie werden asynchron gesendet
- Sie beeinträchtigen das Laden der nächsten Seite nicht

Die Daten werden als [HTTP POST](/de/docs/Web/HTTP/Methods/POST)-Anfrage gesendet.

### Senden von Analysen am Ende einer Sitzung

Webseiten möchten häufig Analysen oder Diagnosen an den Server senden, wenn der Benutzer mit der Seite fertig ist. Der zuverlässigste Weg, dies zu tun, ist das Senden der Daten beim [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis:

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Vermeiden Sie unload und beforeunload

In der Vergangenheit haben viele Webseiten die [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse verwendet, um Analysen am Ende einer Sitzung zu senden. Allerdings ist dies äußerst unzuverlässig. In vielen Situationen, insbesondere auf mobilen Geräten, wird der Browser die `unload`, `beforeunload` oder `pagehide`-Ereignisse nicht auslösen. Beispielsweise werden diese Ereignisse in der folgenden Situation nicht ausgelöst:

1. Der Benutzer lädt die Seite und interagiert mit ihr.
2. Wenn er fertig ist, wechselt er zu einer anderen App, anstatt den Tab zu schließen.
3. Später schließt er die Browser-App über den App-Manager des Telefons.

Zusätzlich ist das `unload`-Ereignis mit dem Vor-/Zurück-Cache ([bfcache](https://web.dev/articles/bfcache)) in modernen Browsern nicht kompatibel. Einige Browser, wie Firefox, behandeln diese Inkompatibilität, indem sie Seiten aus dem bfcache ausschließen, wenn sie Unload-Handler enthalten, was die Leistung beeinträchtigt. Andere, wie Safari und Chrome auf Android, gehen damit um, indem sie das `unload`-Ereignis nicht auslösen, wenn der Benutzer zu einer anderen Seite im selben Tab navigiert.

Firefox wird auch Seiten aus dem bfcache ausschließen, wenn sie `beforeunload`-Handler enthalten.

#### Verwenden Sie pagehide als Fallback

Um Browser zu unterstützen, die `visibilitychange` nicht implementieren, verwenden Sie das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis. Wie `beforeunload` und `unload` wird dieses Ereignis nicht zuverlässig ausgelöst, insbesondere auf mobilen Geräten. Dennoch ist es mit dem bfcache kompatibel.

## Beispiele

Das folgende Beispiel spezifiziert einen Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. Der Handler ruft `sendBeacon()` auf, um Analysen zu senden.

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
- [Beacon API](/de/docs/Web/API/Beacon_API) Übersichtsseite.
- [Verlieren Sie keinen Benutzer- und App-Zustand, verwenden Sie Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` und nicht `beforeunload`/`unload` verwenden sollten.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Best-Practices-Anleitungen zum Umgang mit dem Seitenlebenszyklus in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit browserübergreifenden Inkonsistenzen im Seitenlebenszyklusverhalten befasst.
- [Vor-/Zurück-Cache](https://web.dev/articles/bfcache) erklärt, was der Vor-/Zurück-Cache ist und seine Auswirkungen auf verschiedene Seitenlebenszyklusereignisse.

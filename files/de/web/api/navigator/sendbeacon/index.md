---
title: "Navigator: sendBeacon() Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{APIRef("HTML DOM")}}

Die **`navigator.sendBeacon()`**-Methode sendet asynchron eine [HTTP-POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage, die eine kleine Datenmenge an einen Webserver enthält.

Sie ist dafür vorgesehen, Analysedaten an einen Webserver zu senden und vermeidet einige der Probleme, die mit älteren Techniken zum Senden von Analysedaten verbunden sind, wie etwa die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

> [!NOTE]
> Für Anwendungsfälle, die die Fähigkeit erfordern, Anfragen mit anderen Methoden als `POST` zu senden, oder um Anforderungs-Eigenschaften zu ändern, oder die Zugriff auf die Serverantwort benötigen, sollten Sie stattdessen die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode mit [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) auf true gesetzt verwenden.

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
    ein Zeichenfolgen-Literal oder Objekt, ein [`FormData`](/de/docs/Web/API/FormData) oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das die zu sendenden Daten enthält.

### Rückgabewerte

Die **`sendBeacon()`**-Methode gibt `true` zurück, wenn der {{Glossary("user_agent", "User-Agent")}} die `data`-Übertragung erfolgreich in die Warteschlange gestellt hat.
Andernfalls wird `false` zurückgegeben.

## Beschreibung

Diese Methode ist für Analysen und Diagnosecode vorgesehen, um Daten an einen Server zu senden.

Ein Problem beim Senden von Analysedaten ist, dass eine Website oft Analysedaten senden möchte, wenn der Benutzer mit einer Seite fertig ist: zum Beispiel, wenn der Benutzer zu einer anderen Seite navigiert. In dieser Situation könnte der Browser im Begriff sein, die Seite zu entladen, und in diesem Fall könnte der Browser sich entscheiden, asynchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen nicht zu senden.

In der Vergangenheit haben Webseiten versucht, das Entladen der Seite lange genug zu verzögern, um Daten zu senden. Um dies zu tun, haben sie Workarounds wie die folgenden verwendet:

- Das Übermitteln der Daten mit einem blockierenden synchronen `XMLHttpRequest`-Aufruf.
- Erstellen eines {{HTMLElement("img")}}-Elements und Setzen seines `src`. Die meisten User Agents werden das Entladen verzögern, um das Bild zu laden.
- Erstellen einer No-Op-Schleife für mehrere Sekunden.

All diese Methoden blockieren das Entladen des Dokuments, was das Navigieren zur nächsten Seite verlangsamt. Es gibt nichts, was die nächste Seite tun kann, um dies zu vermeiden, sodass die neue Seite langsam erscheint, obwohl es die Schuld der vorherigen Seite ist.

Mit der `sendBeacon()`-Methode werden die Daten asynchron übertragen, wenn der User-Agent eine Gelegenheit dazu hat, ohne das Entladen oder die nächste Navigation zu verzögern. Das bedeutet:

- Die Daten werden zuverlässig gesendet
- Sie werden asynchron gesendet
- Sie beeinträchtigen nicht das Laden der nächsten Seite

Die Daten werden als [HTTP-POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage gesendet.

### Analysedaten am Ende einer Sitzung senden

Websites möchten oft Analysedaten oder Diagnosedaten an den Server senden, wenn der Benutzer mit der Seite fertig ist. Der zuverlässigste Weg, dies zu tun, ist das Senden der Daten beim [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis:

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Vermeidung von unload und beforeunload

In der Vergangenheit haben viele Websites die [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse verwendet, um Analysedaten am Ende einer Sitzung zu senden. Dies ist jedoch äußerst unzuverlässig. In vielen Situationen, insbesondere auf mobilen Geräten, wird der Browser die `unload`, `beforeunload` oder `pagehide`-Ereignisse nicht auslösen. Zum Beispiel werden diese Ereignisse in der folgenden Situation nicht ausgelöst:

1. Der Benutzer lädt die Seite und interagiert mit ihr.
2. Wenn er oder sie fertig ist, wechselt er oder sie zu einer anderen App, anstatt den Tab zu schließen.
3. Später schließt der Benutzer die Browser-App über den App-Manager des Telefons.

Zusätzlich ist das `unload`-Ereignis inkompatibel mit dem Vorwärts-/Rückwärts-Cache ([bfcache](https://web.dev/articles/bfcache)), der in modernen Browsern implementiert ist. Einige Browser, wie Firefox, behandeln diese Inkompatibilität, indem sie Seiten aus dem bfcache ausschließen, wenn sie entladene Handler enthalten, was die Leistung beeinträchtigt. Andere, wie Safari und Chrome auf Android, behandeln dies, indem sie das `unload`-Ereignis nicht auslösen, wenn der Benutzer zu einer anderen Seite im selben Tab navigiert.

Firefox wird auch Seiten aus dem bfcache ausschließen, wenn sie `beforeunload`-Handler enthalten.

#### Verwenden Sie pagehide als Fallback

Um Browser zu unterstützen, die `visibilitychange` nicht implementieren, verwenden Sie das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis. Wie `beforeunload` und `unload` wird dieses Ereignis nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Es ist jedoch kompatibel mit dem bfcache.

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
- [Lose nicht User- und App-Zustand, verwende Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt im Detail, warum Sie `visibilitychange` verwenden sollten, nicht `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) gibt Best-Practice-Richtlinien zum Umgang mit dem Seitenlebenszyklusverhalten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die sich mit browserübergreifenden Inkonsistenzen im Seitenlebenszyklusverhalten befasst.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Vorwärts-/Rückwärts-Cache ist und seine Auswirkungen auf verschiedene Seitenlebenszyklusereignisse.

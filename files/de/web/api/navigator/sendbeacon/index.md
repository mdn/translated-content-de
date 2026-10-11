---
title: "Navigator: sendBeacon()-Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: 54ff2391f79eb6e5ee706f3d06eb284f243f89d9
---

{{APIRef("HTML DOM")}}

Die Methode **`navigator.sendBeacon()`** sendet {{Glossary("Asynchronous", "asynchron")}} eine [HTTP-POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit einer kleinen Datenmenge an einen Webserver.

Sie ist dafür vorgesehen, Analysedaten an einen Webserver zu senden. Dabei vermeidet sie einige Probleme älterer Verfahren, etwa die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

> [!NOTE]
> Wenn Sie Anfragen mit anderen Methoden als `POST` senden, Anfrageeigenschaften ändern oder auf die Serverantwort zugreifen müssen, verwenden Sie stattdessen die Methode [`fetch()`](/de/docs/Web/API/Window/fetch) mit auf `true` gesetztem [`keepalive`](/de/docs/Web/API/RequestInit#keepalive).

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameter

- `url`
  - : Die URL, an die die _Daten_ gesendet werden. Sie kann relativ oder absolut sein.
- `data` {{Optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein String-Literal oder -Objekt, ein [`FormData`](/de/docs/Web/API/FormData)- oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt mit den zu sendenden Daten. Die Gesamtgröße der zur Übertragung eingereihten Daten ist auf 64 KiB (65.536 Byte) begrenzt.

### Rückgabewert

Gibt `true` zurück, wenn der {{Glossary("user_agent", "User Agent")}} `data` erfolgreich zur Übertragung eingereiht hat. Andernfalls wird `false` zurückgegeben.

## Beschreibung

Diese Methode ist dafür vorgesehen, dass Analyse- und Diagnosecode Daten an einen Server sendet.

Beim Senden von Analysedaten besteht häufig folgendes Problem: Eine Website möchte Daten senden, wenn der Benutzer eine Seite verlässt, beispielsweise um zu einer anderen Seite zu navigieren. In diesem Moment wird die Seite möglicherweise gerade entladen. Der Browser kann dann entscheiden, asynchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen nicht mehr zu senden.

Früher versuchten Webseiten, das Entladen lange genug zu verzögern, um Daten zu senden. Dazu nutzten sie unter anderem folgende Behelfslösungen:

- Senden der Daten mit einem blockierenden, synchronen `XMLHttpRequest`-Aufruf.
- Erstellen eines {{HTMLElement("img")}}-Elements und Setzen seines `src`. Die meisten User Agents verzögern das Entladen, um das Bild zu laden.
- Ausführen einer Schleife ohne Wirkung für mehrere Sekunden.

Alle diese Verfahren blockieren das Entladen des Dokuments und verlangsamen dadurch die Navigation zur nächsten Seite. Die nächste Seite kann dies nicht verhindern und erscheint deshalb langsam, obwohl die Ursache bei der vorherigen Seite liegt.

Mit der Methode `sendBeacon()` werden die Daten asynchron übertragen, sobald der User Agent Gelegenheit dazu hat, ohne das Entladen oder die nächste Navigation zu verzögern. Das bedeutet:

- Die Daten werden zuverlässig gesendet.
- Sie werden asynchron gesendet.
- Das Laden der nächsten Seite wird nicht beeinträchtigt.

Die Daten werden als [HTTP-POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage gesendet.

Allerdings ist die Größe der Nutzdaten auf etwa 64 KiB begrenzt. Für die Übertragung größerer Datenmengen sollten Sie stattdessen `fetch()` verwenden.

### Analysedaten am Ende einer Sitzung senden

Websites möchten häufig Analyse- oder Diagnosedaten an den Server senden, wenn der Benutzer eine Seite nicht mehr verwendet. Am zuverlässigsten geschieht dies beim Ereignis [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event):

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Ältere Ereignisse

Früher verwendeten viele Websites die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event), um am Ende einer Sitzung Analysedaten zu senden. Das ist jedoch unzuverlässig. In vielen Situationen, insbesondere auf Mobilgeräten, löst der Browser diese Ereignisse nicht aus. Beispielsweise werden sie in folgender Situation nicht ausgelöst:

1. Der Benutzer lädt die Seite und interagiert mit ihr.
2. Anschließend wechselt er zu einer anderen App, statt den Tab zu schließen.
3. Später schließt er die Browser-App über die App-Verwaltung des Telefons.

Außerdem ist das Ereignis `unload` nicht mit dem in modernen Browsern implementierten Back/Forward-Cache ([bfcache](https://web.dev/articles/bfcache)) kompatibel. Einige Browser, darunter Firefox, schließen Seiten mit `unload`-Handlern deshalb vom bfcache aus, was die Leistung beeinträchtigt. Andere, darunter Safari und Chrome unter Android, lösen das Ereignis `unload` nicht aus, wenn der Benutzer im selben Tab zu einer anderen Seite navigiert.

Firefox schließt auch Seiten mit `beforeunload`-Handlern vom bfcache aus.

Das Ereignis `pagehide` ist weniger problematisch als `unload` oder `beforeunload`, da es mit dem bfcache kompatibel ist. Es weist jedoch dieselben Zuverlässigkeitsprobleme wie die beiden anderen Ereignisse auf. Wir empfehlen Entwicklern daher, auch dieses Ereignis zu vermeiden und ausschließlich `visibilitychange` zu verwenden.

## Beispiele

Das folgende Beispiel legt einen Handler für das Ereignis [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) fest. Der Handler ruft `sendBeacon()` auf, um Analysedaten zu senden.

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

- Das Ereignis [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event).
- Die Übersichtsseite zur [Beacon API](/de/docs/Web/API/Beacon_API).
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erklärt ausführlich, warum Sie `visibilitychange` statt `beforeunload`/`unload` verwenden sollten.
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Empfehlungen zum Umgang mit dem Lebenszyklus von Seiten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle) ist eine JavaScript-Bibliothek, die Unterschiede zwischen Browsern beim Lebenszyklus von Seiten berücksichtigt.
- [Back/forward cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und welche Auswirkungen er auf verschiedene Ereignisse im Lebenszyklus einer Seite hat.

---
title: "Navigator: sendBeacon()-Methode"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: 958799789600997855abbdabca7abc8a221b6778
---

{{APIRef("HTML DOM")}}

Die Methode **`navigator.sendBeacon()`** sendet {{Glossary("Asynchronous", "asynchron")}} eine [HTTP-POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit einer kleinen Datenmenge an einen Webserver.

Sie ist dafür vorgesehen, Analysedaten an einen Webserver zu senden. Dabei vermeidet sie einige Probleme älterer Verfahren zur Übermittlung solcher Daten, etwa bei der Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

> [!NOTE]
> Wenn Sie Anfragen mit anderen Methoden als `POST` senden, Eigenschaften der Anfrage ändern oder auf die Serverantwort zugreifen müssen, verwenden Sie stattdessen die Methode [`fetch()`](/de/docs/Web/API/Window/fetch) mit [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) auf `true` gesetzt.

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameter

- `url`
  - : Die URL, an die _data_ gesendet wird. Sie kann relativ oder absolut sein.
- `data` {{Optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, eine {{jsxref("DataView")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein String-Literal oder -Objekt, ein [`FormData`](/de/docs/Web/API/FormData)- oder ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt mit den zu sendenden Daten. Die Gesamtgröße der zur Übertragung eingereihten Daten ist auf 64 KiB (65.536 Byte) begrenzt.

### Rückgabewert

Gibt `true` zurück, wenn der {{Glossary("user_agent", "User-Agent")}} `data` erfolgreich zur Übertragung eingereiht hat. Andernfalls wird `false` zurückgegeben.

## Beschreibung

Diese Methode ist für Analyse- und Diagnosecode vorgesehen, der Daten an einen Server sendet.

Beim Senden von Analysedaten ergibt sich ein Problem: Eine Website möchte solche Daten häufig senden, wenn ein Benutzer die Seite verlässt, beispielsweise beim Navigieren zu einer anderen Seite. Der Browser ist dann möglicherweise bereits dabei, die Seite zu entladen. In diesem Fall kann er entscheiden, asynchrone Anfragen mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) nicht mehr zu senden.

Früher haben Webseiten versucht, das Entladen der Seite lange genug zu verzögern, um die Daten zu senden. Dazu nutzten sie Behelfslösungen wie:

- Senden der Daten mit einem blockierenden, synchronen `XMLHttpRequest`-Aufruf.
- Erstellen eines {{HTMLElement("img")}}-Elements und Setzen seiner `src`. Die meisten User-Agents verzögern das Entladen, um das Bild zu laden.
- Ausführen einer Schleife ohne weitere Funktion für mehrere Sekunden.

All diese Methoden blockieren das Entladen des Dokuments und verlangsamen dadurch die Navigation zur nächsten Seite. Die nächste Seite kann dies nicht verhindern und wirkt deshalb langsam, obwohl die Ursache auf der vorherigen Seite liegt.

Mit der Methode `sendBeacon()` werden die Daten asynchron übertragen, sobald der User-Agent dazu Gelegenheit hat, ohne das Entladen oder die nächste Navigation zu verzögern. Das bedeutet:

- Die Daten werden zuverlässig gesendet.
- Sie werden asynchron gesendet.
- Das Laden der nächsten Seite wird nicht beeinträchtigt.

Die Daten werden als [HTTP-POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage gesendet.

Allerdings ist die Größe der Nutzdaten auf etwa 64 KiB begrenzt. Für die Übertragung größerer Datenmengen sollten Sie stattdessen `fetch()` verwenden.

### Analysedaten am Ende einer Sitzung senden

Websites möchten häufig Analyse- oder Diagnosedaten an den Server senden, wenn ein Benutzer die Seite verlässt. Am zuverlässigsten geschieht dies beim Ereignis [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event):

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Frühere Ereignisse

Früher haben viele Websites die Ereignisse [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) verwendet, um am Ende einer Sitzung Analysedaten zu senden. Das ist jedoch unzuverlässig. In vielen Situationen, insbesondere auf Mobilgeräten, löst der Browser diese Ereignisse nicht aus. Beispielsweise werden sie in der folgenden Situation nicht ausgelöst:

1. Der Benutzer lädt die Seite und interagiert mit ihr.
2. Danach wechselt er zu einer anderen App, statt den Tab zu schließen.
3. Später schließt er die Browser-App über die App-Verwaltung des Telefons.

Außerdem ist das Ereignis `unload` nicht mit dem in modernen Browsern implementierten Back/Forward-Cache ([bfcache](https://web.dev/articles/bfcache)) kompatibel. Einige Browser, etwa Firefox, begegnen dieser Inkompatibilität, indem sie Seiten mit `unload`-Handlern vom bfcache ausschließen. Das beeinträchtigt die Leistung. Andere, etwa Safari und Chrome unter Android, lösen das Ereignis `unload` nicht aus, wenn der Benutzer im selben Tab zu einer anderen Seite navigiert.

Das Ereignis `pagehide` ist weniger problematisch als `unload`, da es mit dem bfcache kompatibel ist. Allerdings ist es ebenso wenig zuverlässig. Entwickler sollten stattdessen `visibilitychange` verwenden.

## Beispiele

Das folgende Beispiel definiert einen Handler für das Ereignis [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event). Der Handler ruft `sendBeacon()` auf, um Analysedaten zu senden.

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
- [Benutzer- und Anwendungszustand nicht verlieren: Page Visibility verwenden](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) erläutert ausführlich, warum Sie `visibilitychange` statt `beforeunload`/`unload` verwenden sollten.
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet Empfehlungen für den Umgang mit dem Lebenszyklus von Seiten in Ihren Webanwendungen.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): eine JavaScript-Bibliothek, die Unterschiede zwischen Browsern beim Verhalten im Seitenlebenszyklus berücksichtigt.
- [Back/Forward-Cache](https://web.dev/articles/bfcache) erklärt, was der Back/Forward-Cache ist und welche Auswirkungen er auf verschiedene Ereignisse im Seitenlebenszyklus hat.

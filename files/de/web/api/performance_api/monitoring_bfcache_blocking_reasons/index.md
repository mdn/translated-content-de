---
title: Gründe für die Blockierung des bfcache überwachen
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: a3400c39a245e0404c621c2cdbe75ad0a3eb8672
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) liefert Informationen darüber, warum das aktuelle Dokument bei einer Navigation nicht im {{Glossary("bfcache", "bfcache")}} gespeichert werden konnte. Entwickler können damit Seiten ermitteln, die angepasst werden müssen, um mit dem bfcache kompatibel zu sein und so die Leistung der Website zu verbessern.

## Zurück-/Vorwärts-Cache (bfcache)

Moderne Browser bieten für die Navigation im Verlauf eine Optimierung namens Zurück-/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}). Dadurch wird eine bereits besuchte Seite sofort geladen, wenn Benutzer zu ihr zurückkehren. Aus unterschiedlichen Gründen kann verhindert werden, dass Seiten in den bfcache aufgenommen werden, oder sie können aus dem bfcache entfernt werden. Manche dieser Gründe ergeben sich aus einer Spezifikation, andere sind browserspezifisch.

Um die Gründe für eine Blockierung des bfcache überwachen zu können, enthält die Klasse [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) die Eigenschaft `notRestoredReasons`. Sie gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt mit Informationen zum obersten Frame und zu allen im Dokument vorhandenen {{htmlelement("iframe")}}s zurück:

- Gründe, aus denen die Verwendung des bfcache verhindert wurde.
- Angaben wie `id` und `name` eines Frames, mit denen sich `<iframe>`s im HTML identifizieren lassen.

> [!NOTE]
> Früher wurde die veraltete Eigenschaft [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) zur Überwachung des bfcache verwendet. Entwickler prüften dabei, ob `type` den Wert `"TYPE_BACK_FORWARD"` hatte, um einen Anhaltspunkt für die Trefferquote des bfcache zu erhalten. Dies lieferte jedoch weder Gründe für eine Blockierung noch weitere Daten. Verwenden Sie künftig die Eigenschaft `notRestoredReasons`, um Blockierungen des bfcache zu überwachen.

## Gründe für die Blockierung des bfcache protokollieren

Fortlaufend anfallende Daten zu Blockierungen des bfcache lassen sich mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) erfassen:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternativ können Sie mit einer geeigneten Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) zurückliegende Daten zu Blockierungen des bfcache abrufen:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  for (let i = 0; i < navEntries.length; i++) {
    console.log(`Navigation entry ${i}`);
    let navEntry = navEntries[i];
    console.log(navEntry.notRestoredReasons);
  }
}
```

Die oben gezeigten Codebeispiele geben [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekte in der Konsole aus. Diese Objekte haben die folgende Struktur, die den Blockierungsstatus des obersten Frames darstellt:

```json
{
  "children": [],
  "id": null,
  "name": null,
  "reasons": [{ "reason": "unload-listener" }],
  "src": "",
  "url": "example.com"
}
```

Die Eigenschaften haben folgende Bedeutung:

- [`children`](/de/docs/Web/API/NotRestoredReasons/children) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten, eines für jedes im aktuellen Dokument eingebettete {{htmlelement("iframe")}}. Sie können Gründe enthalten, aus denen der oberste Frame aufgrund der untergeordneten Frames blockiert wurde. Jedes Objekt hat dieselbe Struktur wie das übergeordnete Objekt. Dadurch lassen sich beliebig viele Ebenen eingebetteter `<iframe>`s rekursiv darstellen. Hat der Frame keine untergeordneten Frames, ist das Array leer. Befindet sich das Dokument in einem ursprungsübergreifenden `<iframe>`, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String mit dem Wert des Attributs `id` des `<iframe>`, das das Dokument enthält (beispielsweise `<iframe id="foo" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder ist für das `<iframe>` kein `id` gesetzt, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String mit dem Wert des Attributs `name` des `<iframe>`, das das Dokument enthält (beispielsweise `<iframe name="bar" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder ist für das `<iframe>` kein `name` gesetzt, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, von denen jedes einen Grund darstellt, aus dem die Seite, zu der navigiert wurde, den bfcache nicht verwenden konnte. Befindet sich das Dokument in einem ursprungsübergreifenden `<iframe>`, gibt `reasons` `null` zurück. Das übergeordnete Dokument kann jedoch `"masked"` als `reason` anzeigen, wenn eines der `<iframe>`s die Verwendung des bfcache für den obersten Frame verhindert hat. Weitere Einzelheiten finden Sie unter [Blockierungsgründe](#blockierungsgründe).
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String mit dem Pfad zur Quelle des `<iframe>`, das das Dokument enthält (beispielsweise `<iframe src="exampleframe.html">`). Befindet sich das Dokument nicht in einem `<iframe>`, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String mit der URL der Seite oder des `<iframe>`, zu der beziehungsweise dem navigiert wurde. Befindet sich das Dokument in einem ursprungsübergreifenden `<iframe>`, gibt `url` `null` zurück.

### Blockierungen des bfcache in `<iframe>`s desselben Ursprungs erfassen

Wenn auf einer Seite `<iframe>`s desselben Ursprungs eingebettet sind, enthält der zurückgegebene Wert von `notRestoredReasons` in der Eigenschaft `children` ein Array von Objekten. Diese stellen die Blockierungsgründe für die jeweiligen eingebetteten Frames dar.

Zum Beispiel:

```json
{
  "children": [
    {
      "children": [],
      "id": "iframe-id",
      "name": "iframe-name",
      "reasons": [],
      "src": "./index.html",
      "url": "https://www.example.com/iframe-examples.html"
    },
    {
      "children": [],
      "id": "iframe-id2",
      "name": "iframe-name2",
      "reasons": [{ "reason": "unload-listener" }],
      "src": "./unload-examples.html",
      "url": "https://www.example.com/unload-examples.html"
    }
  ],
  "id": null,
  "name": null,
  "reasons": [],
  "src": null,
  "url": "https://www.example.com"
}
```

### Blockierungen des bfcache in ursprungsübergreifenden `<iframe>`s erfassen

Wenn auf einer Seite ursprungsübergreifende Frames eingebettet sind, werden nur begrenzt Informationen über sie bereitgestellt, damit keine ursprungsübergreifenden Informationen offengelegt werden. Enthalten sind nur Informationen, die der äußeren Seite bereits bekannt sind, sowie die Angabe, ob der ursprungsübergreifende Teilbaum eine Blockierung des bfcache verursacht hat. Blockierungsgründe und Informationen über tiefer liegende Ebenen des Teilbaums werden nicht bereitgestellt – auch dann nicht, wenn einige dieser Ebenen denselben Ursprung haben.

Zum Beispiel:

```json
{
  "children": [
    {
      "children": [],
      "id": "iframe-id",
      "name": "iframe-name",
      "reasons": [],
      "src": "https://www.example2.com/",
      "url": null
    }
  ],
  "id": null,
  "name": null,
  "reasons": [{ "reason": "masked" }],
  "src": null,
  "url": "https://www.example.com"
}
```

Für die ursprungsübergreifenden `<iframe>`s werden keine Blockierungsgründe angegeben. Für den obersten Frame wird `"masked"` als Grund gemeldet. Dies zeigt an, dass die Gründe aus Datenschutzgründen verborgen bleiben. Beachten Sie, dass `"masked"` auch verwendet werden kann, um benutzeragentspezifische Gründe zu verbergen. Der Wert weist daher nicht immer auf ein Problem in einem `<iframe>` hin.

## Blockierungsgründe

Eine Blockierung kann viele verschiedene Ursachen haben. Obwohl die Gründe standardisiert sind, sollten Entwickler sich nicht auf deren genaue Formulierung verlassen und darauf vorbereitet sein, dass neue Gründe hinzukommen oder bestehende entfernt werden.

In [der Spezifikation](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-notrestoredreasons-interface) sind folgende Werte aufgeführt:

- `"fetch"`
  - : Beim Entladen wurde ein vom aktuellen Dokument gestarteter, noch laufender Abruf (beispielsweise über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen. Die Seite befand sich daher nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Beim Entladen wurden gehaltene Sperren und Sperranforderungen beendet. Die Seite befand sich daher nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund wird aus Datenschutzgründen verborgen. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument enthält untergeordnete Dokumente in einem ursprungsübergreifenden {{htmlelement("iframe")}}, die die Speicherung im bfcache verhindert haben.
    - Das aktuelle Dokument konnte aus benutzeragentspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Bei der ursprünglichen Navigation, durch die das aktuelle Dokument erstellt wurde, trat ein Fehler auf. Die Speicherung des daraus resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das anfängliche Parsen des HTML für das aktuelle Dokument wurde nie abgeschlossen. Die Speicherung des unvollständigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Beim Entladen wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung geschlossen. Die Seite befand sich daher nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.

    In [einigen Browsern](#browser-kompatibilität) verhindern aktive WebSockets nicht, dass Seiten in den bfcache aufgenommen werden. In diesen Fällen werden die WebSocket-Verbindungen beim Aufnehmen in den bfcache getrennt und können wiederhergestellt werden, wenn die Seite aus dem Cache geladen wird. Wenn beispielsweise in Chrome eine Seite aus dem bfcache wiederhergestellt wird, löst der Browser die Ereignisse [`error`](/de/docs/Web/API/WebSocket/error_event) und [`close`](/de/docs/Web/API/WebSocket/close_event) aus. So kann eine Anwendung ihre vorhandene Logik zur erneuten Verbindung mit dem WebSocket ausführen.

### Benutzeragentspezifische Blockierungsgründe

Die folgenden zusätzlichen Blockierungsgründe, die von einigen Browsern verwendet werden können, sind ebenfalls spezifiziert:

- `"audio-capture"`
  - : Das Dokument hat über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) von Media Capture and Streams mit Audio die Berechtigung zur Audioaufnahme angefordert.
- `"background-work"`
  - : Das Dokument hat Hintergrundarbeit angefordert, indem es die Methode [`register()`](/de/docs/Web/API/SyncManager/register) von [`SyncManager`](/de/docs/Web/API/SyncManager), die Methode [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) von [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) oder die Methode [`fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) von [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) aufgerufen hat.
- `"broadcastchannel-message"`
  - : Während die Seite im Zurück-/Vorwärts-Cache gespeichert war, empfing eine [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Verbindung der Seite eine Nachricht, die ein [`message`](/de/docs/Web/API/MessageEvent)-Ereignis auslöste.
- `"idbversionchangeevent"`
  - : Für das Dokument stand beim Entladen ein [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent) aus.
- `"idledetector"`
  - : Das Dokument hatte beim Entladen einen aktiven [`IdleDetector`](/de/docs/Web/API/IdleDetector).
- `"keyboardlock"`
  - : Beim Entladen war die Tastatursperre noch aktiv, weil die Methode [`lock()`](/de/docs/Web/API/Keyboard/lock) von [`Keyboard`](/de/docs/Web/API/Keyboard) aufgerufen worden war.
- `"mediastream"`
  - : Ein [MediaStreamTrack](/de/docs/Web/API/MediaStreamTrack) befand sich beim Entladen im aktiven Zustand.
- `"midi"`
  - : Das Dokument hat durch Aufruf von [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) eine MIDI-Berechtigung angefordert.
- `"modals"`
  - : Beim Entladen wurden Dialoge mit Benutzeraufforderungen angezeigt.
- `"navigating"`
  - : Beim Entladen lief noch ein Ladevorgang. Das Dokument befand sich daher nicht in einem Zustand, in dem es im Zurück-/Vorwärts-Cache gespeichert werden konnte.
- `"navigation-canceled"`
  - : Die Navigationsanforderung wurde durch einen Aufruf von [`window.stop()`](/de/docs/Web/API/Window/stop) abgebrochen. Die Seite befand sich nicht in einem Zustand, in dem sie im Zurück-/Vorwärts-Cache gespeichert werden konnte.
- `"non-trivial-browsing-context-group"`
  - : Die Browsing-Context-Gruppe dieses Dokuments enthielt mehr als einen Browsing Context der obersten Ebene.
- `"otpcredential"`
  - : Das Dokument hat ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) erstellt.
- `"outstanding-network-request"`
  - : Beim Entladen hatte das Dokument noch ausstehende Netzwerkanforderungen und befand sich nicht in einem Zustand, in dem es im Zurück-/Vorwärts-Cache gespeichert werden konnte.
- `"paymentrequest"`
  - : Das Dokument hatte beim Entladen ein aktives [`PaymentRequest`](/de/docs/Web/API/PaymentRequest).
- `"pictureinpicturewindow"`
  - : Das Dokument hatte beim Entladen ein aktives [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow).
- `"plugins"`
  - : Das Dokument enthielt Plugins.
- `"request-method-not-get"`
  - : Das Dokument wurde durch eine HTTP-Anforderung erstellt, deren Methode nicht {{httpmethod("GET")}} war.
- `"response-auth-required"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, die eine HTTP-Authentifizierung erforderte.
- `"response-cache-control-no-store"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, deren {{httpheader("Cache-Control")}}-Header das Token "no-store" enthielt.
- `"response-cache-control-no-cache"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, deren {{httpheader("Cache-Control")}}-Header das Token "no-cache" enthielt.
- `"response-keep-alive"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, die einen {{httpheader("Keep-Alive")}}-Header enthielt.
- `"response-scheme-not-http-or-https"`
  - : Das Dokument wurde durch eine Antwort erstellt, deren URL-Schema weder HTTP noch HTTPS war.
- `"response-status-not-ok"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, deren Status kein erfolgreicher Status war.
- `"rtc"`
  - : Beim Entladen wurde eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) geschlossen. Die Seite befand sich daher nicht in einem Zustand, in dem sie im Zurück-/Vorwärts-Cache gespeichert werden konnte.
- `"sensors"`
  - : Das Dokument hat Zugriff auf Sensoren angefordert.
- `"serviceworker-added"`
  - : Während sich die Seite im Zurück-/Vorwärts-Cache befand, begann ein [Service Worker](/de/docs/Web/API/Service_Worker_API), den Service-Worker-Client des Dokuments zu steuern.
- `"serviceworker-claimed"`
  - : Während sich die Seite im Zurück-/Vorwärts-Cache befand, wurde der aktive [Service Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments übernommen.
- `"serviceworker-postmessage"`
  - : Während sich die Seite im Zurück-/Vorwärts-Cache befand, empfing der aktive [Service Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments eine Nachricht.
- `"serviceworker-version-activated"`
  - : Während sich die Seite im Zurück-/Vorwärts-Cache befand, wurde eine Version des aktiven [Service Workers](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments aktiviert.
- `"serviceworker-unregistered"`
  - : Während sich die Seite im Zurück-/Vorwärts-Cache befand, wurde die Registrierung des aktiven [Service Workers](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments aufgehoben.
- `"sharedworker"`
  - : Dieses Dokument gehörte zur Menge der Eigentümer eines [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- `"smartcardconnection"`
  - : Das Dokument hatte beim Entladen eine aktive `SmartCardConnection`.
- `"speechrecognition"`
  - : Das Dokument hatte beim Entladen eine aktive [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition).
- `"storageaccess"`
  - : Das Dokument hat mithilfe der [Storage Access API](/de/docs/Web/API/Storage_Access_API) eine Berechtigung für den Speicherzugriff angefordert.
- `"unload-listener"`
  - : Das Dokument hatte einen Event Listener für das [`unload`-Ereignis](/de/docs/Web/API/Window/unload_event) registriert.
- `"video-capture"`
  - : Das Dokument hat über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) von Media Capture and Streams mit Video die Berechtigung zur Videoaufnahme angefordert.
- `"webhid"`
  - : Das Dokument hat die Methode [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) der [WebHID API](/de/docs/Web/API/WebHID_API) aufgerufen.
- `"webshare"`
  - : Das Dokument hat die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwendet.
- `"webtransport"`
  - : Beim Entladen wurde eine offene [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung geschlossen. Die Seite befand sich daher nicht in einem Zustand, in dem sie im Zurück-/Vorwärts-Cache gespeichert werden konnte.
- `"webxrdevice"`
  - : Das Dokument hat ein [XRSystem](/de/docs/Web/API/XRSystem) erstellt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erläuterung der `notRestoredReasons`-API](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)

> [!NOTE]
> Dieser Artikel ist eine bearbeitete Fassung von [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) von Chris Mills und Barry Pollard. Der Originalartikel wurde 2023 auf `developer.chrome.com` unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/) veröffentlicht.

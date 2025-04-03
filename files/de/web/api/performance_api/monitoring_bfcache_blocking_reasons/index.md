---
title: Überwachung von bfcache-Blockierungsgründen
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) liefert Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu nutzen. Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die aktualisiert werden müssen, um sie bfcache-kompatibel zu machen und so die Leistung der Website zu verbessern.

## Back/forward cache (bfcache)

Moderne Browser bieten ein Optimierungsmerkmal für die Verlaufsnavigation namens Back/forward cache ({{Glossary("bfcache", "bfcache")}}). Dies ermöglicht ein sofortiges Ladeerlebnis, wenn Benutzer zu einer zuvor besuchten Seite zurückkehren. Seiten können aus verschiedenen Gründen daran gehindert werden, in den bfcache zu gelangen, oder während sie sich im bfcache befinden, entfernt werden. Einige dieser Gründe sind durch eine Spezifikation erforderlich, andere spezifisch für Browser-Implementierungen.

Um die Überwachung der bfcache-Blockierungsgründe zu ermöglichen, enthält die Klasse [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) eine `notRestoredReasons`-Eigenschaft. Diese gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das verwandte Informationen zum Top-Level-Frame und allen im Dokument vorhandenen {{htmlelement("iframe")}}s enthält:

- Gründe, warum die Nutzung des bfcache blockiert wurde.
- Details wie `id` und `name` des Frames, um `<iframe>`s im HTML zu identifizieren.

> [!NOTE]
> Historisch gesehen wurde die veraltete Eigenschaft [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) verwendet, um den bfcache zu überwachen, wobei Entwickler nach einem `type` von `"TYPE_BACK_FORWARD"` suchten, um einen Hinweis auf die bfcache-Trefferquote zu erhalten. Diese lieferte jedoch keine Gründe für die Blockierung des bfcache oder andere Daten. Die `notRestoredReasons`-Eigenschaft sollte künftig verwendet werden, um die bfcache-Blockierung zu überwachen.

## Protokollierung von bfcache-Blockierungsgründen

Laufende bfcache-Blockierungsdaten können mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wie folgt abgerufen werden:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternativ können Sie historische bfcache-Blockierungsdaten mit einer geeigneten Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) abrufen:

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

Die oben gezeigten Code-Snippets protokollieren [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekte in der Konsole. Diese Objekte haben die folgende Struktur, die den blockierten Zustand des Top-Level-Frames darstellt:

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

Die Eigenschaften sind wie folgt:

- [`children`](/de/docs/Web/API/NotRestoredReasons/children) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten, eines für jedes eingebettete `iframe` im aktuellen Dokument, das Gründe enthalten kann, warum der Top-Level-Frame in Bezug auf die Kinder-Frames blockiert wurde. Jedes Objekt hat die gleiche Struktur wie das Elternelement – auf diese Weise können beliebig viele Ebenen von eingebetteten `<iframe>`s rekursiv innerhalb des Objekts dargestellt werden. Wenn der Frame keine Kinder hat, ist das Array leer; wenn das Dokument in einem cross-origin `<iframe>` ist, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `id`-Attributs des `<iframe>`, in dem das Dokument enthalten ist, darstellt (zum Beispiel `<iframe id="foo" src="...">`). Wenn das Dokument nicht in einem `<iframe>` oder das `<iframe>` keine `id` gesetzt hat, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `name`-Attributs des `<iframe>`, in dem das Dokument enthalten ist, darstellt (zum Beispiel `<iframe name="bar" src="...">`). Wenn das Dokument nicht in einem `<iframe>` oder das `<iframe>` keinen `name` gesetzt hat, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, die jeweils einen Grund darstellen, warum die navigierte Seite daran gehindert wurde, den bfcache zu nutzen. Wenn das Dokument in einem cross-origin `<iframe>` ist, gibt `reasons` `null` zurück, aber das Elterndokument kann einen `reason` von `"masked"` anzeigen, wenn irgendein `<iframe>` den bfcache für den Top-Level-Frame blockierte. Siehe [Blockierungsgründe](#blockierungsgründe) für weitere Details zu den Gründen.
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>`, in dem das Dokument enthalten ist, darstellt (zum Beispiel `<iframe src="exampleframe.html">`). Wenn das Dokument nicht in einem `<iframe>` ist, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>` darstellt. Wenn das Dokument in einem cross-origin `<iframe>` ist, gibt `url` `null` zurück.

### Berichterstattung von bfcache-Blockierung in gleichoriginären `<iframe>`s

Wenn eine Seite gleichoriginäre `<iframe>`s eingebettet hat, enthält der zurückgegebene `notRestoredReasons`-Wert ein Array von Objekten innerhalb der `children`-Eigenschaft, die die Blockierungsgründe in Bezug auf jeden eingebetteten Frame darstellen.

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

### Berichterstattung von bfcache-Blockierung in cross-origin `<iframe>`s

Wenn eine Seite cross-origin Frames eingebettet hat, ist die Menge der geteilten Informationen über diese begrenzt, um das Auslaufen von cross-origin Informationen zu verhindern. Es werden nur Informationen einbezogen, die die äußere Seite bereits kennt, und ob der cross-origin Teilbaum die bfcache-Blockierung verursachte oder nicht. Keine Blockierungsgründe oder Informationen über tiefere Ebenen des Teilbaums (auch wenn einige Unterebenen gleichoriginär sind) werden einbezogen.

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

Für alle cross-origin `<iframe>`s werden keine Blockierungsgründe gemeldet; für den Top-Level-Frame wird ein Grund von `"masked"` gemeldet, um anzuzeigen, dass die Gründe aus Datenschutzgründen verborgen werden. Beachten Sie, dass `"masked"` auch verwendet werden kann, um user-agent-spezifische Gründe zu verbergen; es zeigt nicht immer ein Problem in einem `<iframe>` an.

## Blockierungsgründe

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten kann. Obwohl die Gründe standardisiert sind, sollten Entwickler vermeiden, sich auf bestimmte Formulierungen zu verlassen, und darauf vorbereitet sein, dass neue Gründe hinzugefügt oder gelöscht werden.

Die in [der Spezifikation](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-notrestoredreasons-interface) aufgeführten Werte sind:

- `"fetch"`
  - : Beim Entladen wurde ein vom aktuellen Dokument initiierter Abruf (z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen, während er noch im Gange war. Folglich war die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Beim Entladen wurden gehaltene Sperren und Sperranfragen abgebrochen, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem cross-origin {{htmlelement("iframe")}} enthalten sind, und sie hinderten die Speicherung im bfcache.
    - Das aktuelle Dokument konnte aus benutzerspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, fehlerte, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat seine anfängliche HTML-Analyse nie abgeschlossen, und die Speicherung des unfertigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Beim Entladen wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung abgebrochen, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.

### Benutzerspezifische Blockierungsgründe

Zusätzliche Blockierungsgründe, die von einigen Browsern verwendet werden können, sind ebenfalls angegeben:

- `"audio-capture"`
  - : Das Dokument hat die Erlaubnis zur Audioaufnahme angefordert, indem es Media Capture und Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Audio verwendet hat.
- `"background-work"`
  - : Das Dokument hat Hintergrundarbeit angefordert, indem es die Methoden [`register()`](/de/docs/Web/API/SyncManager/register) des [`SyncManager`](/de/docs/Web/API/SyncManager), [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) des [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) oder [`fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) des [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) aufgerufen hat.
- `"broadcastchannel-message"`
  - : Während die Seite im Back/forward-Cache gespeichert war, erhielt eine [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Verbindung auf der Seite eine Nachricht und das Nachrichtenereignis wurde ausgelöst.
- `"idbversionchangeevent"`
  - : Das Dokument hatte ein ausstehendes [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent) beim Entladen.
- `"idledetector"`
  - : Das Dokument hatte einen aktiven [`IdleDetector`](/de/docs/Web/API/IdleDetector) beim Entladen.
- `"keyboardlock"`
  - : Beim Entladen war die Tastatursperre noch aktiv, weil die Methode [`lock()`](/de/docs/Web/API/Keyboard/lock) des [`Keyboard`](/de/docs/Web/API/Keyboard) aufgerufen wurde.
- `"mediastream"`

  - : Ein [MediaStreamTrack](/de/docs/Web/API/MediaStreamTrack) befand sich im Live-Zustand beim Entladen.

- `"midi"`
  - : Das Dokument hat eine MIDI-Erlaubnis angefordert, indem es [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) aufgerufen hat.
- `"modals"`
  - : Benutzermeldungen wurden beim Entladen gezeigt.
- `"navigating"`
  - : Während des Entladens war das Laden noch im Gange, und daher war das Dokument nicht in einem Zustand, der im Back/forward-Cache gespeichert werden konnte.
- `"navigation-canceled"`
  - : Die Navigationsanforderung wurde durch Aufrufen von [`window.stop()`](/de/docs/Web/API/Window/stop) abgebrochen und die Seite war nicht in einem Zustand, um im Back/forward-Cache gespeichert zu werden.
- `"non-trivial-browsing-context-group"`
  - : Die Browsing-Kontext-Gruppe dieses Dokuments hatte mehr als einen Top-Level-Browsing-Kontext.
- `"otpcredential"`
  - : Das Dokument hat ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) erstellt.
- `"outstanding-network-request"`
  - : Beim Entladen hatte das Dokument ausstehende Netzwerk-Anfragen und war nicht in einem Zustand, der im Back/forward-Cache gespeichert werden konnte.
- `"paymentrequest"`
  - : Das Dokument hatte eine aktive [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) beim Entladen.
- `"pictureinpicturewindow"`
  - : Das Dokument hatte ein aktives [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) beim Entladen.
- `"plugins"`
  - : Das Dokument enthielt Plugins.
- `"request-method-not-get"`
  - : Das Dokument wurde aus einer HTTP-Anfrage erstellt, deren Methode nicht {{httpmethod("GET")}} war.
- `"response-auth-required"`
  - : Das Dokument wurde aus einer HTTP-Antwort erstellt, die eine HTTP-Authentifizierung erforderte.
- `"response-cache-control-no-store"`
  - : Das Dokument wurde aus einer HTTP-Antwort erstellt, deren {{httpheader("Cache-Control")}}-Header das "no-store"-Token enthielt.
- `"response-cache-control-no-cache"`
  - : Das Dokument wurde aus einer HTTP-Antwort erstellt, deren {{httpheader("Cache-Control")}}-Header das "no-cache"-Token enthielt.
- `"response-keep-alive"`
  - : Das Dokument wurde aus einer HTTP-Antwort erstellt, die einen {{httpheader("Keep-Alive")}}-Header enthielt.
- `"response-scheme-not-http-or-https"`
  - : Das Dokument wurde aus einer Antwort erstellt, deren URL-Schema kein HTTP(S)-Schema war.
- `"response-status-not-ok"`
  - : Das Dokument wurde aus einer HTTP-Antwort erstellt, deren Status nicht okay war.
- `"rtc"`
  - : Während des Entladens wurde eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) heruntergefahren, sodass die Seite nicht in einem Zustand war, der im Back/forward-Cache gespeichert werden konnte.
- `"sensors"`
  - : Das Dokument hat den Zugriff auf Sensoren angefordert.
- `"serviceworker-added"`
  - : Der Service-Worker-Client des Dokuments begann, während die Seite im Back/forward-Cache war, von einem [Service-Worker](/de/docs/Web/API/Service_Worker_API) gesteuert zu werden.
- `"serviceworker-claimed"`
  - : Der aktive [Service-Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde beansprucht, während die Seite im Back/forward-Cache war.
- `"serviceworker-postmessage"`
  - : Der aktive [Service-Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments empfing während die Seite im Back/forward-Cache war eine Nachricht.
- `"serviceworker-version-activated"`
  - : Die Version des aktiven [Service-Workers](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde aktiviert, während die Seite im Back/forward-Cache war.
- `"serviceworker-unregistered"`
  - : Die Registrierung des Service-Workers des Service-Worker-Clients des Dokuments wurde abgemeldet, während die Seite im Back/forward-Cache war.
- `"sharedworker"`
  - : Dieses Dokument befand sich im Eigentümer-Set eines [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- `"smartcardconnection"`
  - : Das Dokument hatte eine aktive `SmartCardConnection` beim Entladen.
- `"speechrecognition"`
  - : Das Dokument hatte eine aktive [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) beim Entladen.
- `"storageaccess"`
  - : Das Dokument forderte Speicherzugriffserlaubnis an, indem es die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwendete.
- `"unload-listener"`
  - : Das Dokument registrierte einen Ereignis-Listener für das [`unload` Ereignis](/de/docs/Web/API/Window/unload_event).
- `"video-capture"`
  - : Das Dokument hat die Erlaubnis zur Videoaufnahme angefordert, indem es Media Capture und Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Video verwendet hat.
- `"webhid"`
  - : Das Dokument rief die Methode [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) der [WebHID API](/de/docs/Web/API/WebHID_API) auf.
- `"webshare"`
  - : Das Dokument verwendete die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API).
- `"webtransport"`
  - : Während des Entladens wurde eine offene [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung heruntergefahren, sodass die Seite nicht in einem Zustand war, der im Back/forward-Cache gespeichert werden konnte.
- `"webxrdevice"`
  - : Das Dokument erstellte ein [XRSystem](/de/docs/Web/API/XRSystem).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`notRestoredReasons` API-Erklärung](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)

> [!NOTE]
> Dieser Artikel ist abgeleitet von „Back/forward cache notRestoredReasons API“ von Chris Mills und Barry Pollard, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2023 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

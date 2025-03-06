---
title: Überwachen von bfcache-Blockierungsgründen
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: 11e477eddd97a55656827462efec608d314f72b6
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) liefert Informationen darüber, warum das aktuelle Dokument bei der Navigation von der Nutzung des {{Glossary("bfcache", "bfcache")}} blockiert wurde. Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die aktualisiert werden müssen, um bfcache-kompatibel zu werden, und damit die Leistung der Website zu verbessern.

## Back-/Forward-Cache (bfcache)

Moderne Browser bieten eine Optimierungsfunktion für die Verlauf-Navigation namens Back-/Forward-Cache ({{Glossary("bfcache", "bfcache")}}). Diese ermöglicht ein sofortiges Ladeerlebnis, wenn Benutzer zu einer bereits besuchten Seite zurückkehren. Seiten können aus verschiedenen Gründen daran gehindert werden, in den bfcache zu gelangen, oder währenddessen aus dem bfcache entfernt werden, einige davon sind durch Spezifikationen erforderlich und einige spezifisch für Browser-Implementierungen.

Um die Überwachung der bfcache-Blockierungsgründe zu ermöglichen, enthält die Klasse [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) eine `notRestoredReasons`-Eigenschaft. Diese gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das verwandte Informationen zum Top-Level-Frame und allen im Dokument vorhandenen {{htmlelement("iframe")}}s enthält:

- Gründe, warum die Nutzung des bfcache blockiert wurde.
- Details wie die `id` und `name` des Frames, um `<iframe>`s im HTML zu identifizieren.

> [!NOTE]
> Historisch gesehen wurde die veraltete Eigenschaft [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) verwendet, um den bfcache zu überwachen, wobei Entwickler nach einem `type` von `"TYPE_BACK_FORWARD"` suchten, um einen Hinweis auf die bfcache-Trefferquote zu erhalten. Dies lieferte jedoch keine Gründe für die bfcache-Blockierung oder andere Daten. Die `notRestoredReasons`-Eigenschaft sollte zukünftig genutzt werden, um die bfcache-Blockierung zu überwachen.

## Protokollieren von bfcache-Blockierungsgründen

Laufende Daten zur bfcache-Blockierung können mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ermittelt werden, wie hier:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternativ können historische Daten zur bfcache-Blockierung mit einer geeigneten Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) erfasst werden:

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

Die oben gezeigten Codebeispiele loggen [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekte in die Konsole. Diese Objekte haben die folgende Struktur, die den blockierten Zustand des Top-Level-Frames darstellt:

```js
{
  children: [],
  id: null,
  name: null,
  reasons: [
    { reason: "unload-listener" }
  ],
  src: "",
  url: "example.com",
}
```

Die Eigenschaften sind wie folgt:

- [`children`](/de/docs/Web/API/NotRestoredReasons/children) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten, eines für jedes eingebettete {{htmlelement("iframe")}} im aktuellen Dokument, das Gründe enthalten kann, warum der Top-Level-Frame aufgrund der Kinder-Frames blockiert wurde. Jedes Objekt hat dieselbe Struktur wie das übergeordnete Objekt – auf diese Weise können beliebig viele Ebenen eingebetteter `<iframe>`s rekursiv im Objekt dargestellt werden. Wenn der Frame keine Kinder hat, wird das Array leer sein; wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `id`-Attributs des `<iframe>` repräsentiert, in dem das Dokument enthalten ist (zum Beispiel `<iframe id="foo" src="...">`). Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keine `id` gesetzt hat, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `name`-Attributs des `<iframe>` repräsentiert, in dem das Dokument enthalten ist (zum Beispiel `<iframe name="bar" src="...">`). Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keinen `name` gesetzt hat, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, die jeweils einen Grund darstellen, warum die navigierte Seite davon abgehalten wurde, den bfcache zu nutzen. Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn irgendein `<iframe>` die Nutzung des bfcache für den Top-Level-Frame blockiert hat. Weitere Details zu den Gründen finden Sie unter [Blockierungsgründe](#blockierungsgründe).
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>` repräsentiert, in dem das Dokument enthalten ist (zum Beispiel `<iframe src="exampleframe.html">`). Wenn das Dokument nicht in einem `<iframe>` ist, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>` repräsentiert. Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `url` `null` zurück.

### Melden von bfcache-Blockierungen in Same-Origin-`<iframe>`s

Wenn eine Seite eingebettete Same-Origin-`<iframe>`s hat, enthält der zurückgegebene `notRestoredReasons`-Wert ein Array von Objekten innerhalb der `children`-Eigenschaft, die die Blockierungsgründe für jedes eingebettete Frame darstellen.

Zum Beispiel:

```js
{
  children: [
    {
      children: [],
      id: "iframe-id",
      name: "iframe-name",
      reasons: [],
      src: "./index.html",
      url: "https://www.example.com/iframe-examples.html"
    },
    {
      children: [],
      id: "iframe-id2",
      name: "iframe-name2",
      reasons: [
        { "reason": "unload-listener" }
      ],
      src: "./unload-examples.html",
      url: "https://www.example.com/unload-examples.html"
    },
  ],
  id: null,
  name: null,
  reasons: [],
  src: null,
  url:"https://www.example.com"
}
```

### Melden von bfcache-Blockierungen in Cross-Origin-`<iframe>`s

Wenn eine Seite eingebettete Cross-Origin-Frames hat, ist die Menge der darüber geteilten Informationen begrenzt, um das Auslaufen von Cross-Origin-Informationen zu vermeiden. Es werden nur Informationen einbezogen, die der äußeren Seite bereits bekannt sind und ob das Cross-Origin-Teilbaum die bfcache-Blockierung verursacht hat oder nicht. Keine Blockierungsgründe oder Informationen über tiefere Ebenen des Teilbaums (auch wenn einige Unterebenen Same-Origin sind) werden einbezogen.

Zum Beispiel:

```js
{
  children: [
    {
      children: [],
      id: "iframe-id",
      name: "iframe-name",
      reasons: [],
      src: "https://www.example2.com/",
      url: null
    }
  ],
  id: null,
  name: null,
  reasons: [
        { "reason": "masked" }
  ],
  src: null,
  url:"https://www.example.com"
}

```

Für alle Cross-Origin-`<iframe>`s werden keine Blockierungsgründe gemeldet; für das Top-Level-Frame wird ein Grund von `"masked"` gemeldet, um anzuzeigen, dass die Gründe aus Datenschutzgründen verborgen werden. Beachten Sie, dass `"masked"` auch zum Verbergen von nutzerspezifischen Gründen verwendet werden kann; es weist nicht immer auf ein Problem in einem `<iframe>` hin.

## Blockierungsgründe

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten könnte. Obwohl die Gründe standardisiert sind, sollten Entwickler vermeiden, sich auf spezifische Formulierungen für Gründe zu verlassen und darauf vorbereitet sein, dass neue Gründe hinzugefügt und gelöscht werden.

Die in der [Spezifikation](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-notrestoredreasons-interface) aufgeführten Werte sind:

- `"fetch"`
  - : Während des Entladens wurde ein vom aktuellen Dokument initiierter Fetch (z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen, während er noch lief. Infolgedessen war die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Während des Entladens wurden gehaltene Sperren und Sperranfragen beendet, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann eines der Folgenden bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem Cross-Origin {{htmlelement("iframe")}} enthalten sind, und diese verhinderten die Speicherung im bfcache.
    - Das aktuelle Dokument konnte aus nutzerspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, ist fehlgeschlagen, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat niemals seine anfängliche HTML-Analyse abgeschlossen, und die Speicherung des unvollständigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Während des Entladens wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung heruntergefahren, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.

### Nutzerspezifische Blockierungsgründe

Zusätzliche Blockierungsgründe, die von einigen Browsern verwendet werden können, sind ebenfalls angegeben:

- `"audio-capture"`
  - : Das Dokument forderte eine Audioaufnahmegenehmigung an, indem es Media Capture und Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Audio verwendete.
- `"background-work"`
  - : Das Dokument forderte Hintergrundarbeit an, indem es die Methode [`register()`](/de/docs/Web/API/SyncManager/register) von [`SyncManager`](/de/docs/Web/API/SyncManager), die Methode [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) von [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) oder die Methode [`fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) von [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) aufrief.
- `"broadcastchannel-message"`
  - : Während die Seite im Back-/Forward-Cache gespeichert war, empfing eine [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Verbindung auf der Seite eine Nachricht, und ein Nachrichtenereignis wurde ausgelöst.
- `"idbversionchangeevent"`
  - : Das Dokument hatte eine ausstehende [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent) beim Entladen.
- `"idledetector"`
  - : Das Dokument hatte einen aktiven [`IdleDetector`](/de/docs/Web/API/IdleDetector) beim Entladen.
- `"keyboardlock"`
  - : Während des Entladens war die Tastatursperre aktiv, weil die Methode [`lock()`](/de/docs/Web/API/Keyboard/lock) von [`Keyboard`](/de/docs/Web/API/Keyboard) aufgerufen wurde.
- `"mediastream"`
  - : Ein [MediaStreamTrack](/de/docs/Web/API/MediaStreamTrack) befand sich beim Entladen im Live-Zustand.
- `"midi"`
  - : Das Dokument forderte eine MIDI-Genehmigung an, indem es [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) aufrief.
- `"modals"`
  - : Benutzeraufforderungen wurden während des Entladens angezeigt.
- `"navigating"`
  - : Während des Entladens war das Laden noch im Gange, sodass das Dokument nicht in einem Zustand war, der im Back-/Forward-Cache gespeichert werden konnte.
- `"navigation-canceled"`
  - : Der Navigationsantrag wurde durch den Aufruf von [`window.stop()`](/de/docs/Web/API/Window/stop) abgebrochen, und die Seite war nicht in einem Zustand, um im Back-/Forward-Cache gespeichert zu werden.
- `"non-trivial-browsing-context-group"`
  - : Die Browsing-Context-Gruppe dieses Dokuments hatte mehr als ein oberstes Browsing-Context.
- `"otpcredential"`
  - : Das Dokument hat ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) erstellt.
- `"outstanding-network-request"`
  - : Während des Entladens hatte das Dokument ausstehende Netzwerkanfragen und war nicht in einem Zustand, der im Back-/Forward-Cache gespeichert werden konnte.
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
  - : Das Dokument wurde aus einer HTTP-Antwort erstellt, deren Status kein OK-Status war.
- `"rtc"`
  - : Beim Entladen wurde eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) herunterskaliert, sodass die Seite nicht in einem Zustand war, der im Back-/Forward-Cache gespeichert werden konnte.
- `"sensors"`
  - : Das Dokument forderte Sensorzugriff an.
- `"serviceworker-added"`
  - : Der Service-Worker-Client des Dokuments begann, von einem [Service-Worker](/de/docs/Web/API/Service_Worker_API) gesteuert zu werden, während die Seite im Back-/Forward-Cache war.
- `"serviceworker-claimed"`
  - : Der aktive [Service-Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde beansprucht, während die Seite im Back-/Forward-Cache war.
- `"serviceworker-postmessage"`
  - : Der aktive [Service-Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments empfing eine Nachricht, während die Seite im Back-/Forward-Cache war.
- `"serviceworker-version-activated"`
  - : Die Version des aktiven [Service-Workers](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde aktiviert, während die Seite im Back-/Forward-Cache war.
- `"serviceworker-unregistered"`
  - : Der aktive [Service-Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde abgemeldet, während die Seite im Back-/Forward-Cache war.
- `"sharedworker"`
  - : Dieses Dokument befand sich im Eigentümer-Set eines [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- `"smartcardconnection"`
  - : Das Dokument hatte eine aktive `SmartCardConnection` beim Entladen.
- `"speechrecognition"`
  - : Das Dokument hatte eine aktive [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) beim Entladen.
- `"storageaccess"`
  - : Das Dokument forderte eine Speicherzugriffsgenehmigung an, indem es die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwendete.
- `"unload-listener"`
  - : Das Dokument registrierte einen Event-Listener für das [`unload`-Ereignis](/de/docs/Web/API/Window/unload_event).
- `"video-capture"`
  - : Das Dokument forderte eine Videoaufnahme-Genehmigung an, indem es Media Capture und Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Video verwendete.
- `"webhid"`
  - : Das Dokument rief die Methode [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) der [WebHID API](/de/docs/Web/API/WebHID_API) auf.
- `"webshare"`
  - : Das Dokument nutzte die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API).
- `"webtransport"`
  - : Während des Entladens wurde eine offene [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung heruntergefahren, sodass die Seite nicht in einem stabilen Zustand war, der im Back-/Forward-Cache gespeichert werden konnte.
- `"webxrdevice"`
  - : Das Dokument erstellte ein [XRSystem](/de/docs/Web/API/XRSystem).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`notRestoredReasons` API Erläuterung](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)

> [!NOTE]
> Dieser Artikel stammt aus [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) von Chris Mills und Barry Pollard, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2023 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

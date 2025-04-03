---
title: Überwachung der bfcache-Blockierungsgründe
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)-Eigenschaft liefert Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu verwenden. Entwickler können diese Informationen verwenden, um Seiten zu identifizieren, die Aktualisierungen benötigen, um bfcache-kompatibel zu werden, und dadurch die Leistung der Website zu verbessern.

## Back/forward cache (bfcache)

Moderne Browser bieten eine Optimierungsfunktion für die Verlauf-Navigation, die als Back/forward cache ({{Glossary("bfcache", "bfcache")}}) bezeichnet wird. Diese ermöglicht ein sofortiges Ladeerlebnis, wenn Benutzer auf eine Seite zurückkehren, die sie bereits besucht haben. Seiten können aus verschiedenen Gründen daran gehindert werden, in den bfcache zu gelangen oder daraus entfernt zu werden, einige davon sind durch eine Spezifikation erforderlich und andere spezifisch für die Implementierungen der Browser.

Um die Überwachung der Gründe für die Blockierung des bfcache zu ermöglichen, beinhaltet die Klasse [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) eine `notRestoredReasons`-Eigenschaft. Diese gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das relevante Informationen über den obersten Frame und alle im Dokument vorhandenen {{htmlelement("iframe")}}s enthält:

- Gründe, warum die Nutzung von bfcache blockiert wurde.
- Details wie die Frame-`id` und `name`, um `<iframe>`s im HTML zu identifizieren.

> [!NOTE]
> Historisch gesehen wurde die veraltete [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type)-Eigenschaft verwendet, um den bfcache zu überwachen, wobei Entwickler auf einen `type` von `"TYPE_BACK_FORWARD"` testeten, um einen Hinweis auf die bfcache-Trefferquote zu erhalten. Diese lieferte jedoch keine Gründe für die Blockierung des bfcache oder andere Daten. Die `notRestoredReasons`-Eigenschaft sollte künftig zur Überwachung der bfcache-Blockierung verwendet werden.

## Protokollierung der bfcache-Blockierungsgründe

Laufende bfcache-Blockierungsdaten können mithilfe eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) abgerufen werden, wie hier:

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

Die oben gezeigten Code-Snippets protokollieren [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekte in der Konsole. Diese Objekte haben die folgende Struktur, die den blockierten Zustand des obersten Frames repräsentiert:

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
  - : Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten, eines für jedes untergeordnete {{htmlelement("iframe")}}, das im aktuellen Dokument eingebettet ist und Gründe enthalten kann, warum der oberste Frame in Bezug auf die untergeordneten Frames blockiert wurde. Jedes Objekt hat dieselbe Struktur wie das übergeordnete Objekt — auf diese Weise kann jede Anzahl von Ebenen eingebetteter `<iframe>`s rekursiv innerhalb des Objekts dargestellt werden. Wenn der Frame keine Kinder hat, ist das Array leer; wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `id`-Attributs des `<iframe>` repräsentiert, in dem sich das Dokument befindet (zum Beispiel `<iframe id="foo" src="...">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet oder das `<iframe>` keine `id` hat, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `name`-Attributs des `<iframe>` repräsentiert, in dem sich das Dokument befindet (zum Beispiel `<iframe name="bar" src="...">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet oder das `<iframe>` keinen `name` hat, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, die jeweils einen Grund darstellen, warum die navigierte Seite daran gehindert wurde, den bfcache zu verwenden. Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn `<iframe>`s die Nutzung von bfcache für den obersten Frame blockiert haben. Siehe [Blockierungsgründe](#blockierungsgründe) für weitere Details zu den Gründen.
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>` repräsentiert, in dem sich das Dokument befindet (zum Beispiel `<iframe src="exampleframe.html">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>` repräsentiert. Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `url` `null` zurück.

### Meldung von bfcache-Blockierungen in gleich-origin `<iframe>`s

Wenn eine Seite gleich-origin `<iframe>`s eingebettet hat, dann enthält der zurückgegebene `notRestoredReasons`-Wert ein Array von Objekten innerhalb der `children`-Eigenschaft, die die Blockierungsgründe für jeden eingebetteten Frame darstellen.

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

### Meldung von bfcache-Blockierungen in Cross-Origin `<iframe>`s

Wenn eine Seite Cross-Origin-Frames eingebettet hat, ist die Menge der Informationen, die über sie geteilt werden, begrenzt, um den Quell-Übergreifenden Informationsaustausch zu vermeiden. Nur Informationen, die der äußeren Seite bereits bekannt sind, werden enthalten und ob das Cross-Origin-Teilbaum die bfcache-Blockierung verursacht hat oder nicht. Keine Blockierungsgründe oder Informationen über tiefere Ebenen des Teilbaums (selbst wenn einige Unterebenen gleich-origin sind) sind enthalten.

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

Für alle Cross-Origin-`<iframe>`s werden keine Blockierungsgründe gemeldet; für den obersten Frame wird ein Grund von `"masked"` gemeldet, um anzuzeigen, dass die Gründe aus Datenschutzgründen verborgen gehalten werden. Beachten Sie, dass `"masked"` auch zum Verbergen von benutzerspezifischen Gründen verwendet werden kann; es zeigt nicht immer ein Problem in einem `<iframe>` an.

## Blockierungsgründe

Es gibt viele verschiedene Gründe, warum Blockierungen auftreten können. Obwohl die Gründe standardisiert sind, sollten Entwickler vermeiden, sich auf eine bestimmte Formulierung der Gründe zu verlassen und darauf vorbereitet sein, dass neue Gründe hinzugefügt und alte entfernt werden können.

Die in der [Spezifikation](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-notrestoredreasons-interface) aufgeführten Werte sind:

- `"fetch"`
  - : Beim Entladen wurde ein von dem aktuellen Dokument gestarteter Datenabruf (z. B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen, während er noch im Gange war. Infolgedessen befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Beim Entladen wurden gehaltene Sperren und Sperranforderungen beendet, so dass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann eines der folgenden bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem Cross-Origin-{{htmlelement("iframe")}} enthalten sind, und diese verhinderten die Speicherung im bfcache.
    - Das aktuelle Dokument konnte aus benutzerspezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, schlug fehl, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat nie das anfängliche HTML-Parsing abgeschlossen, und die Speicherung des unvollendeten Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Beim Entladen wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung heruntergefahren, so dass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.

### Benutzerspezifische Blockierungsgründe

Zusätzliche Blockierungsgründe, die von einigen Browsern verwendet werden können, sind ebenfalls spezifiziert:

- `"audio-capture"`
  - : Das Document verlangte eine Berechtigung für die Audioaufnahme durch die Verwendung von Media Capture and Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Audio.
- `"background-work"`
  - : Das Document verlangte Hintergrundarbeit durch den Aufruf der Methode [`SyncManager`](/de/docs/Web/API/SyncManager)'s [`register()`](/de/docs/Web/API/SyncManager/register), der Methode [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)'s [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) oder der Methode [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)'s [`fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch).
- `"broadcastchannel-message"`
  - : Während die Seite im Back/forward Cache gespeichert war, empfing eine [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Verbindung auf der Seite eine Nachricht und das Nachrichtenereignis wurde ausgelöst.
- `"idbversionchangeevent"`
  - : Das Document hatte ein anstehendes [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent) beim Entladen.
- `"idledetector"`
  - : Das Document hatte einen aktiven [`IdleDetector`](/de/docs/Web/API/IdleDetector) beim Entladen.
- `"keyboardlock"`
  - : Beim Entladen war die Tastatursperre noch aktiv, da die Methode [`Keyboard`](/de/docs/Web/API/Keyboard)'s [`lock()`](/de/docs/Web/API/Keyboard/lock) aufgerufen wurde.
- `"mediastream"`
  - : Ein [MediaStreamTrack](/de/docs/Web/API/MediaStreamTrack) befand sich bei Entladen im Live-Zustand.
- `"midi"`
  - : Das Document verlangte eine MIDI-Berechtigung durch den Aufruf von [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess).
- `"modals"`
  - : Benutzerdialoge wurden beim Entladen geöffnet.
- `"navigating"`
  - : Beim Entladen war das Laden noch im Gange, und somit befand sich das Document nicht in einem Zustand, der im Back/forward Cache gespeichert werden konnte.
- `"navigation-canceled"`
  - : Die Navigationsanforderung wurde durch den Aufruf von [`window.stop()`](/de/docs/Web/API/Window/stop) abgebrochen und die Seite war nicht in einem Zustand, der im Back/forward Cache gespeichert werden konnte.
- `"non-trivial-browsing-context-group"`
  - : Die Browsing-Kontextgruppe dieses Dokuments hatte mehr als einen obersten Browsing-Kontext.
- `"otpcredential"`
  - : Das Document erstellte ein [`OTPCredential`](/de/docs/Web/API/OTPCredential).
- `"outstanding-network-request"`
  - : Beim Entladen hatte das Document ausstehende Netzwerk-Anfragen und war nicht in einem Zustand, der im Back/forward Cache gespeichert werden konnte.
- `"paymentrequest"`
  - : Das Document hatte einen aktiven [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) beim Entladen.
- `"pictureinpicturewindow"`
  - : Das Document hatte ein aktives [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) beim Entladen.
- `"plugins"`
  - : Das Document enthielt Plugins.
- `"request-method-not-get"`
  - : Das Document wurde aus einer HTTP-Anfrage erstellt, deren Methode nicht {{httpmethod("GET")}} war.
- `"response-auth-required"`
  - : Das Document wurde aus einer HTTP-Antwort erstellt, die eine HTTP-Authentifizierung erforderte.
- `"response-cache-control-no-store"`
  - : Das Document wurde aus einer HTTP-Antwort erstellt, deren {{httpheader("Cache-Control")}}-Header das Token "no-store" enthielt.
- `"response-cache-control-no-cache"`
  - : Das Document wurde aus einer HTTP-Antwort erstellt, deren {{httpheader("Cache-Control")}}-Header das Token "no-cache" enthielt.
- `"response-keep-alive"`
  - : Das Document wurde aus einer HTTP-Antwort erstellt, die einen {{httpheader("Keep-Alive")}}-Header enthielt.
- `"response-scheme-not-http-or-https"`
  - : Das Document wurde aus einer Antwort erstellt, deren URL-Schema kein HTTP(S)-Schema war.
- `"response-status-not-ok"`
  - : Das Document wurde aus einer HTTP-Antwort erstellt, deren Status kein ok-Status war.
- `"rtc"`
  - : Beim Entladen wurde ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) heruntergefahren, so dass sich die Seite nicht in einem Zustand befand, der im Back/forward Cache gespeichert werden konnte.
- `"sensors"`
  - : Das Document verlangte den Zugriff auf Sensoren.
- `"serviceworker-added"`
  - : Der Service-Worker-Client des Dokuments begann, von einem [Service Worker](/de/docs/Web/API/Service_Worker_API) kontrolliert zu werden, während die Seite im Back/forward Cache war.
- `"serviceworker-claimed"`
  - : Der aktive [Service Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde beansprucht, während die Seite im Back/forward Cache war.
- `"serviceworker-postmessage"`
  - : Der aktive [Service Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments empfing eine Nachricht, während die Seite im Back/forward Cache war.
- `"serviceworker-version-activated"`
  - : Die Version des aktiven [Service Worker](/de/docs/Web/API/Service_Worker_API)-Clients des Service-Worker-Clients des Dokuments wurde aktiviert, während die Seite im Back/forward Cache war.
- `"serviceworker-unregistered"`
  - : Die Service-Worker-Registrierung, die dem aktiven [Service Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments entspricht, wurde abgemeldet, während die Seite im Back/forward Cache war.
- `"sharedworker"`
  - : Dieses Dokument war im Eigentümersatz eines [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- `"smartcardconnection"`
  - : Das Document hatte eine aktive `SmartCardConnection` beim Entladen.
- `"speechrecognition"`
  - : Das Document hatte einen aktiven [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) beim Entladen.
- `"storageaccess"`
  - : Das Document verlangte die Berechtigung zum Speichern von Daten durch die Verwendung der [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- `"unload-listener"`
  - : Das Document meldete einen Event-Listener für das [`unload` event](/de/docs/Web/API/Window/unload_event) an.
- `"video-capture"`
  - : Das Document verlangte eine Berechtigung für die Videoaufnahme durch die Verwendung von Media Capture and Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Video.
- `"webhid"`
  - : Das Document rief die [`WebHID API`](/de/docs/Web/API/WebHID_API)'s Methode [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) auf.
- `"webshare"`
  - : Das Document nutzte die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API).
- `"webtransport"`
  - : Beim Entladen wurde eine offene [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung heruntergefahren, so dass sich die Seite nicht in einem Zustand befand, der im Back/forward Cache gespeichert werden konnte.
- `"webxrdevice"`
  - : Das Document erstellte ein [XRSystem](/de/docs/Web/API/XRSystem).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`notRestoredReasons` API Explainer](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)

> [!NOTE]
> Dieser Artikel ist adaptiert von [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) von Chris Mills und Barry Pollard, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2023 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

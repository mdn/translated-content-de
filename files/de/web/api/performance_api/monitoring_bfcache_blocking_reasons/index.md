---
title: Überwachung von bfcache-Blockierungsgründen
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: 3e23ee580c298320c9ecbbb745371611389e6cb8
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) liefert Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu nutzen. Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die aktualisiert werden müssen, um bfcache-kompatibel zu werden und so die Leistung der Website zu verbessern.

## Vor-/Zurück-Cache (bfcache)

Moderne Browser bieten eine Optimierungsfunktion für die Verlauf-Navigation, genannt Vor-/Zurück-Cache ({{Glossary("bfcache", "bfcache")}}). Diese ermöglicht ein sofortiges Laden, wenn Benutzer zu einer bereits besuchten Seite zurückkehren. Seiten können aus verschiedenen Gründen davon abgehalten werden, in den bfcache zu gelangen, oder sie werden währenddessen aus dem bfcache entfernt, einige davon durch eine Spezifikation gefordert und einige spezifisch für die Implementierung des Browsers.

Um die Überwachung der bfcache-Blockierungsgründe zu ermöglichen, enthält die Klasse [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) eine Eigenschaft `notRestoredReasons`. Diese liefert ein Objekt vom Typ [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons), das relevante Informationen über den obersten Frame und alle im Dokument vorhandenen {{htmlelement("iframe")}}s enthält:

- Gründe, warum die Nutzung des bfcache blockiert wurde.
- Details wie `id` und `name` des Frames, um `<iframe>`s im HTML zu identifizieren.

> [!NOTE]
> Historisch gesehen wurde die veraltete Eigenschaft [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type) verwendet, um den bfcache zu überwachen, wobei die Entwickler auf einen `type` von `"TYPE_BACK_FORWARD"` testeten, um einen Hinweis auf die bfcache-Trefferquote zu erhalten. Dies lieferte jedoch keine Gründe für die Blockierung des bfcache oder andere Daten. Die Eigenschaft `notRestoredReasons` sollte zukünftig zur Überwachung der bfcache-Blockierung verwendet werden.

## Protokollierung der bfcache-Blockierungsgründe

Laufende Daten zur bfcache-Blockierung können mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) erfasst werden, wie hier gezeigt:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternativ können Sie historische Daten zur bfcache-Blockierung erhalten, indem Sie eine geeignete Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwenden:

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

Die oben gezeigten Code-Snippets protokollieren [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekte in die Konsole. Diese Objekte haben die folgende Struktur, die den blockierten Zustand des oberen Frames darstellt:

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
  - : Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten, eines für jedes untergeordnete {{htmlelement("iframe")}}, das im aktuellen Dokument eingebettet ist und Gründe enthalten kann, warum der oberste Frame im Zusammenhang mit den untergeordneten Frames blockiert wurde. Jedes Objekt hat die gleiche Struktur wie das übergeordnete Objekt – auf diese Weise können beliebig viele Ebenen eingebetteter `<iframe>`s rekursiv innerhalb des Objekts dargestellt werden. Wenn der Frame keine Kinder hat, wird das Array leer sein; wenn das Dokument in einem Cross-Origin-`<iframe>` ist, wird `children` `null` zurückgeben.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `id`-Attributs des `<iframe>`s darstellt, in dem sich das Dokument befindet (zum Beispiel `<iframe id="foo" src="...">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet oder das `<iframe>` keine `id` hat, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `name`-Attributs des `<iframe>`s darstellt, in dem sich das Dokument befindet (zum Beispiel `<iframe name="bar" src="...">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet oder das `<iframe>` keinen Namen hat, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, von denen jedes einen Grund darstellt, warum die navigierte Seite daran gehindert wurde, den bfcache zu nutzen. Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn `<iframe>`s die Nutzung des bfcache für den obersten Frame blockierten. Siehe [Blockierungsgründe](#blockierungsgründe) für weitere Details zu den Gründen.
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>`s darstellt, in dem sich das Dokument befindet (zum Beispiel `<iframe src="exampleframe.html">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>` darstellt. Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `url` `null` zurück.

### Berichterstattung über bfcache-Blockierungen in gleich-origin `<iframe>`s

Wenn eine Seite gleich-origin `<iframe>`s eingebettet hat, enthält der zurückgegebene `notRestoredReasons`-Wert ein Array von Objekten innerhalb der `children`-Eigenschaft, die die blockierenden Gründe für jeden eingebetteten Frame darstellen.

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

### Berichterstattung über bfcache-Blockierungen in Cross-Origin-`<iframe>`s

Wenn eine Seite Cross-Origin-Frames eingebettet hat, ist die Menge der über sie geteilten Informationen begrenzt, um ein Auslaufen von Cross-Origin-Informationen zu verhindern. Es werden nur Informationen eingeschlossen, die die äußere Seite bereits kennt, sowie ob der Cross-Origin-Teilbaum eine bfcache-Blockierung verursacht hat oder nicht. Keine Blockierungsgründe oder Informationen über niedrigere Ebenen des Teilbaums (auch wenn einige Unterebenen gleich-origin sind) werden einbezogen.

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

Für alle Cross-Origin-`<iframe>`s werden keine Blockierungsgründe gemeldet; für den obersten Frame wird ein Grund von `"masked"` angegeben, um anzuzeigen, dass die Gründe aus Datenschutzgründen verborgen werden. Beachten Sie, dass `"masked"` auch verwendet werden kann, um benutzeragenten-spezifische Gründe zu verbergen; es weist nicht immer auf ein Problem in einem `<iframe>` hin.

## Blockierungsgründe

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten kann. Obwohl die Gründe standardisiert sind, sollten Entwickler vermeiden, sich auf spezifische Formulierungen für Gründe zu verlassen und darauf vorbereitet sein, mit neuen hinzugefügten und gelöschten Gründen umzugehen.

Die in [der Spezifikation](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-notrestoredreasons-interface) aufgelisteten Werte sind:

- `"fetch"`
  - : Während des Entladens wurde ein durch das aktuelle Dokument initiierter Abruf (z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen, während er noch lief. Infolgedessen befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Während des Entladens wurden gehaltene Sperren und Sperranfragen beendet, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem Cross-Origin-{{htmlelement("iframe")}} enthalten sind und die eine Speicherung im bfcache verhinderten.
    - Das aktuelle Dokument konnte aus benutzeragenten-spezifischen Gründen nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erzeugte, schlug fehl, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat niemals seine anfängliche HTML-Analyse abgeschlossen, und die Speicherung des unvollständigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Während des Entladens wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung geschlossen, sodass die Seite nicht in einem stabilen Zustand war, der im bfcache gespeichert werden konnte.

    In [einigen Browsern](#browser-kompatibilität) verhindern aktive WebSockets nicht, dass Seiten in den bfcache gelangen. In solchen Fällen werden die WebSocket-Verbindungen bei Eintritt getrennt und können beim Wiederherstellen der Seite wieder verbunden werden. In Chrome beispielsweise löst der Browser beim Wiederherstellen einer Seite aus dem bfcache die [`error`](/de/docs/Web/API/WebSocket/error_event)- und [`close`](/de/docs/Web/API/WebSocket/close_event)-Ereignisse aus, sodass eine Anwendung ihre bestehende Logik auslösen kann, um die Verbindung zum WebSocket wiederherzustellen.

### Benutzeragenten-spezifische Blockierungsgründe

Zusätzliche Blockierungsgründe, die von einigen Browsern verwendet werden können, sind ebenfalls spezifiziert:

- `"audio-capture"`
  - : Das Dokument hat die Erlaubnis zur Audioaufnahme angefordert, indem Media Capture and Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Audio verwendet wurde.
- `"background-work"`
  - : Das Dokument hat Hintergrundarbeit angefordert, indem die Methode [`register()`](/de/docs/Web/API/SyncManager/register) des [`SyncManager`](/de/docs/Web/API/SyncManager), die Methode [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) des [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) oder die Methode [`fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) des [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) aufgerufen wurde.
- `"broadcastchannel-message"`
  - : Während die Seite im Vor-/Zurück-Cache gespeichert war, hat eine [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Verbindung auf der Seite eine Nachricht empfangen, die ein [`message`](/de/docs/Web/API/MessageEvent)-Ereignis auslöste.
- `"idbversionchangeevent"`
  - : Das Dokument hatte ein anstehendes [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent), während es entladen wurde.
- `"idledetector"`
  - : Das Dokument hatte einen aktiven [`IdleDetector`](/de/docs/Web/API/IdleDetector), während es entladen wurde.
- `"keyboardlock"`
  - : Während des Entladens war die Tastatursperre noch aktiv, da die Methode [`lock()`](/de/docs/Web/API/Keyboard/lock) von [`Keyboard`](/de/docs/Web/API/Keyboard) aufgerufen wurde.
- `"mediastream"`
  - : Ein [MediaStreamTrack](/de/docs/Web/API/MediaStreamTrack) befand sich beim Entladen im Live-Zustand.
- `"midi"`
  - : Das Dokument hat eine MIDI-Berechtigung angefordert, indem es [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) aufgerufen hat.
- `"modals"`
  - : Während des Entladens wurden Benutzereingabeaufforderungen angezeigt.
- `"navigating"`
  - : Während des Entladens war das Laden noch im Gange, sodass das Dokument nicht in einem Zustand war, der im Vor-/Zurück-Cache gespeichert werden konnte.
- `"navigation-canceled"`
  - : Die Navigationsanforderung wurde durch den Aufruf von [`window.stop()`](/de/docs/Web/API/Window/stop) abgebrochen, und die Seite war nicht in einem Zustand, der im Vor-/Zurück-Cache gespeichert werden konnte.
- `"non-trivial-browsing-context-group"`
  - : Die Browsing-Kontext-Gruppe dieses Dokuments hatte mehr als einen Top-Level-Browsing-Kontext.
- `"otpcredential"`
  - : Das Dokument hat ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) erstellt.
- `"outstanding-network-request"`
  - : Während des Entladens hatte das Dokument ausstehende Netzwerk-Anfragen und war nicht in einem Zustand, der im Vor-/Zurück-Cache gespeichert werden konnte.
- `"paymentrequest"`
  - : Das Dokument hatte eine aktive [`PaymentRequest`](/de/docs/Web/API/PaymentRequest), während es entladen wurde.
- `"pictureinpicturewindow"`
  - : Das Dokument hatte ein aktives [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow), während es entladen wurde.
- `"plugins"`
  - : Das Dokument enthielt Plugins.
- `"request-method-not-get"`
  - : Das Dokument wurde durch eine HTTP-Anfrage mit einer Methode erstellt, die nicht {{httpmethod("GET")}} war.
- `"response-auth-required"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, die eine HTTP-Authentifizierung erforderte.
- `"response-cache-control-no-store"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, deren {{httpheader("Cache-Control")}}-Header das "no-store"-Token enthielt.
- `"response-cache-control-no-cache"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, deren {{httpheader("Cache-Control")}}-Header das "no-cache"-Token enthielt.
- `"response-keep-alive"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, die einen {{httpheader("Keep-Alive")}}-Header enthielt.
- `"response-scheme-not-http-or-https"`
  - : Das Dokument wurde durch eine Antwort erstellt, deren URL-Schema kein HTTP(S)-Schema war.
- `"response-status-not-ok"`
  - : Das Dokument wurde durch eine HTTP-Antwort erstellt, deren Status kein ok-Status war.
- `"rtc"`
  - : Während des Entladens wurde eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) heruntergefahren, sodass die Seite nicht in einem Zustand war, der im Vor-/Zurück-Cache gespeichert werden konnte.
- `"sensors"`
  - : Das Dokument hat den Zugriff auf Sensoren angefordert.
- `"serviceworker-added"`
  - : Der Service-Worker-Client des Dokuments begann, von einem [Service-Worker](/de/docs/Web/API/Service_Worker_API) kontrolliert zu werden, während die Seite im Vor-/Zurück-Cache war.
- `"serviceworker-claimed"`
  - : Der aktive [Service-Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde beansprucht, während die Seite im Vor-/Zurück-Cache war.
- `"serviceworker-postmessage"`
  - : Der aktive [Service-Worker](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments empfing eine Nachricht, während die Seite im Vor-/Zurück-Cache war.
- `"serviceworker-version-activated"`
  - : Die Version des aktiven [Service-Workers](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde aktiviert, während die Seite im Vor-/Zurück-Cache war.
- `"serviceworker-unregistered"`
  - : Die Registrierung des aktiven [Service-Workers](/de/docs/Web/API/Service_Worker_API) des Service-Worker-Clients des Dokuments wurde aufgehoben, während die Seite im Vor-/Zurück-Cache war.
- `"sharedworker"`
  - : Dieses Dokument befand sich im Eigentümer-Set eines [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- `"smartcardconnection"`
  - : Das Dokument hatte eine aktive `SmartCardConnection`, während es entladen wurde.
- `"speechrecognition"`
  - : Das Dokument hatte eine aktive [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition), während es entladen wurde.
- `"storageaccess"`
  - : Das Dokument hat durch die Verwendung der [Storage Access API](/de/docs/Web/API/Storage_Access_API) die Erlaubnis zum Speichern angefordert.
- `"unload-listener"`
  - : Das Dokument hat einen Ereignis-Listener für das [`unload`-Ereignis](/de/docs/Web/API/Window/unload_event) registriert.
- `"video-capture"`
  - : Das Dokument hat die Erlaubnis zur Videoaufnahme angefordert, indem Media Capture and Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Video verwendet wurde.
- `"webhid"`
  - : Das Dokument hat die Methode [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) der [WebHID API](/de/docs/Web/API/WebHID_API) aufgerufen.
- `"webshare"`
  - : Das Dokument hat die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwendet.
- `"webtransport"`
  - : Während des Entladens wurde eine offene [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung heruntergefahren, sodass die Seite nicht in einem Zustand war, der im Vor-/Zurück-Cache gespeichert werden konnte.
- `"webxrdevice"`
  - : Das Dokument hat ein [XRSystem](/de/docs/Web/API/XRSystem) erstellt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`notRestoredReasons` API Erklärer](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)

> [!NOTE]
> Dieser Artikel ist eine Anpassung von [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) von Chris Mills und Barry Pollard, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2023 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

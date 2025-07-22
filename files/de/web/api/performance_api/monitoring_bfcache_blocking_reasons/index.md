---
title: Überwachen von bfcache-Blockierungsgründen
slug: Web/API/Performance_API/Monitoring_bfcache_blocking_reasons
l10n:
  sourceCommit: 1f3bed5237b95fc595e0e49a97ee3ee147724dc1
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)-Eigenschaft liefert Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu nutzen. Entwickler können diese Informationen verwenden, um Seiten zu identifizieren, die Aktualisierungen benötigen, um bfcache-kompatibel zu sein, und so die Leistung der Website zu verbessern.

## Back/forward Cache (bfcache)

Moderne Browser bieten eine Optimierungsfunktion für die Navigation in der Historie namens back/forward cache ({{Glossary("bfcache", "bfcache")}}). Diese ermöglicht ein sofortiges Laden von Seiten, die der Benutzer bereits besucht hat. Seiten können aus verschiedenen Gründen daran gehindert werden, in den bfcache zu gelangen oder während sie sich darin befinden, entfernt zu werden, einige dieser Gründe sind durch Spezifikationen erforderlich, andere spezifisch für Browser-Implementierungen.

Um die Überwachung der bfcache-Blockierungsgründe zu ermöglichen, enthält die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Klasse eine `notRestoredReasons`-Eigenschaft. Diese gibt ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt zurück, das verwandte Informationen über das Top-Level-Frame und alle {{htmlelement("iframe")}}s im Dokument enthält:

- Gründe, warum die Nutzung des bfcache blockiert wurde.
- Details wie die `id` und `name` des Frames, um `<iframe>`s im HTML zu identifizieren.

> [!NOTE]
> Historisch gesehen wurde die veraltete [`PerformanceNavigation.type`](/de/docs/Web/API/PerformanceNavigation/type)-Eigenschaft verwendet, um den bfcache zu überwachen, wobei Entwickler beim Testen auf einen `type` von `"TYPE_BACK_FORWARD"` eine Indikation der bfcache-Trefferquote erhielten. Dies bot jedoch keine Gründe für die bfcache-Blockierung oder andere Daten. Zukünftig sollte die `notRestoredReasons`-Eigenschaft verwendet werden, um die bfcache-Blockierung zu überwachen.

## Protokollierung von bfcache-Blockierungsgründen

Laufende Daten zur bfcache-Blockierung können mittels eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) abgerufen werden, wie hier gezeigt:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  perfEntries.forEach((navEntry) => {
    console.log(navEntry.notRestoredReasons);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Alternativ können Sie historische Daten zur bfcache-Blockierung mit einer geeigneten Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) abrufen:

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

Die obigen Code-Snippets protokollieren [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekte in der Konsole. Diese Objekte haben folgende Struktur, die den blockierten Zustand des Top-Level-Frames darstellt:

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
  - : Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten, eines für jedes Kind-{{htmlelement("iframe")}}, das im aktuellen Dokument eingebettet ist und Gründe enthalten kann, warum das Top-Level-Frame in Bezug auf die Kind-Frames blockiert wurde. Jedes Objekt hat dieselbe Struktur wie das Elternobjekt — auf diese Weise können beliebig viele Ebenen von eingebetteten `<iframe>`s rekursiv innerhalb des Objekts dargestellt werden. Wenn das Frame keine Kinder hat, ist das Array leer; wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `id`-Attributs des `<iframe>` darstellt, in dem das Dokument enthalten ist (beispielsweise `<iframe id="foo" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder hat das `<iframe>` keine `id` gesetzt, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `name`-Attributs des `<iframe>` darstellt, in dem das Dokument enthalten ist (beispielsweise `<iframe name="bar" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder hat das `<iframe>` keinen `name` gesetzt, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, die jeweils einen Grund darstellen, warum die navigierte Seite daran gehindert wurde, den bfcache zu nutzen. Befindet sich das Dokument in einem Cross-Origin-`<iframe>`, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn eines der `<iframe>`s die bfcache-Nutzung für das Top-Level-Frame blockiert hat. Weitere Details zu den Gründen finden Sie unter [Blockierungsgründe](#blockierungsgründe).
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>` darstellt, in dem das Dokument enthalten ist (beispielsweise `<iframe src="exampleframe.html">`). Befindet sich das Dokument nicht in einem `<iframe>`, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>`s repräsentiert. Befindet sich das Dokument in einem Cross-Origin-`<iframe>`, gibt `url` `null` zurück.

### Bericht über bfcache-Blockaden in gleich-originierenden `<iframe>`s

Wenn eine Seite gleich-originierende `<iframe>`s eingebettet hat, enthält der zurückgegebene `notRestoredReasons`-Wert ein Array von Objekten innerhalb der `children`-Eigenschaft, die die Blockierungsgründe in Bezug auf jedes eingebettete Frame darstellen.

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

### Bericht über bfcache-Blockaden in Cross-Origin-`<iframe>`s

Wenn eine Seite Cross-Origin-Frames eingebettet hat, ist die Menge der darüber geteilten Informationen begrenzt, um das Auslaufen von Cross-Origin-Informationen zu vermeiden. Es wird nur Information einbezogen, die die äußere Seite bereits kennt, und ob der Cross-Origin-Subtree die bfcache-Blockierung verursacht hat. Keine Blockierungsgründe oder Informationen über tiefere Ebenen des Subtrees (selbst wenn einige Sub-Level gleich-originierend sind) werden einbezogen.

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

Bei allen Cross-Origin-`<iframe>`s werden keine Blockierungsgründe gemeldet; für das Top-Level-Frame wird ein Grund von `"masked"` gemeldet, um anzuzeigen, dass die Gründe aus Datenschutzgründen verborgen werden. Beachten Sie, dass `"masked"` auch zum Verbergen von benutzerspezifischen Gründen der User Agents verwendet werden kann; es weist nicht immer auf ein Problem in einem `<iframe>` hin.

## Blockierungsgründe

Es gibt viele verschiedene Gründe, warum eine Blockierung auftreten könnte. Obwohl die Gründe standardisiert sind, sollten Entwickler vermeiden, sich auf eine bestimmte Wortwahl zu verlassen, und darauf vorbereitet sein, dass neue Gründe hinzugefügt und alte entfernt werden.

Die in [der Spezifikation](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-notrestoredreasons-interface) aufgeführten Werte sind:

- `"fetch"`
  - : Beim Ausladen wurde ein vom aktuellen Dokument initiierter Abruf (z. B. über [`fetch()`](/de/docs/Web/API/Window/fetch)) abgebrochen, während er noch im Gange war. Infolgedessen befand sich die Seite nicht in einem stabilen Zustand, der im bfcache gespeichert werden konnte.
- `"lock"`
  - : Beim Ausladen wurden gehaltene Sperren und Sperranforderungen beendet, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.
- `"masked"`
  - : Der genaue Grund ist aus Datenschutzgründen verborgen. Dieser Wert kann Folgendes bedeuten:
    - Das aktuelle Dokument hat Kinder, die in einem Cross-Origin-{{htmlelement("iframe")}} enthalten sind und die Speicherung im bfcache verhinderten.
    - Das aktuelle Dokument konnte aus benutzerspezifischen Gründen des User Agents nicht im bfcache gespeichert werden.
- `"navigation-failure"`
  - : Die ursprüngliche Navigation, die das aktuelle Dokument erstellt hat, ist fehlgeschlagen, und die Speicherung des resultierenden Fehlerdokuments im bfcache wurde verhindert.
- `"parser-aborted"`
  - : Das aktuelle Dokument hat sein initiales HTML-Parsen nie beendet, und die Speicherung des unvollständigen Dokuments im bfcache wurde verhindert.
- `"websocket"`
  - : Während des Ausladens wurde eine offene [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung geschlossen, sodass sich die Seite nicht in einem stabilen Zustand befand, der im bfcache gespeichert werden konnte.

### Benutzerspezifische Blockierungsgründe

Zusätzliche Blockierungsgründe, die von einigen Browsern verwendet werden können, sind ebenfalls spezifiziert:

- `"audio-capture"`
  - : Das Dokument hat um Erlaubnis zur Audioaufnahme gebeten, indem es Media Capture and Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Audio verwendet hat.
- `"background-work"`
  - : Das Dokument hat um Hintergrundarbeit gebeten, indem die Methode [`register()`](/de/docs/Web/API/SyncManager/register) des [`SyncManager`](/de/docs/Web/API/SyncManager), die Methode [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) des [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) oder die Methode [`fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) des [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) aufgerufen wurde.
- `"broadcastchannel-message"`
  - : Während die Seite im Back/Forward-Cache gespeichert war, hat eine [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Verbindung auf der Seite eine Nachricht erhalten, die ein [`message`](/de/docs/Web/API/MessageEvent)-Ereignis ausgelöst hat.
- `"idbversionchangeevent"`
  - : Das Dokument hatte ein ausstehendes [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent) beim Ausladen.
- `"idledetector"`
  - : Das Dokument hatte einen aktiven [`IdleDetector`](/de/docs/Web/API/IdleDetector) beim Ausladen.
- `"keyboardlock"`
  - : Beim Ausladen war die Tastatursperre noch aktiv, da die Methode [`lock()`](/de/docs/Web/API/Keyboard/lock) der [`Keyboard`](/de/docs/Web/API/Keyboard) aufgerufen wurde.
- `"mediastream"`
  - : Ein [MediaStreamTrack](/de/docs/Web/API/MediaStreamTrack) war beim Ausladen im Live-Zustand.
- `"midi"`
  - : Das Dokument hat um MIDI-Berechtigung gebeten, indem [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) aufgerufen wurde.
- `"modals"`
  - : Beim Ausladen wurden Benutzereingabeaufforderungen angezeigt.
- `"navigating"`
  - : Beim Ausladen war das Laden noch im Gange, und somit befand sich das Dokument nicht in einem Zustand, der im Back/Forward-Cache gespeichert werden konnte.
- `"navigation-canceled"`
  - : Die Navigationsanforderung wurde durch Aufruf von [`window.stop()`](/de/docs/Web/API/Window/stop) abgebrochen und die Seite befand sich nicht in einem Zustand, der im Back/Forward-Cache gespeichert werden konnte.
- `"non-trivial-browsing-context-group"`
  - : Die Browsing-Kontextgruppe dieses Dokuments hatte mehr als einen Top-Level-Browsing-Kontext.
- `"otpcredential"`
  - : Das Dokument hat ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) erstellt.
- `"outstanding-network-request"`
  - : Beim Ausladen hatte das Dokument ausstehende Netzwerk-Anfragen und befand sich nicht in einem Zustand, der im Back/Forward-Cache gespeichert werden konnte.
- `"paymentrequest"`
  - : Das Dokument hatte einen aktiven [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) beim Ausladen.
- `"pictureinpicturewindow"`
  - : Das Dokument hatte ein aktives [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) beim Ausladen.
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
  - : Das Dokument wurde aus einer HTTP-Antwort erstellt, deren Status kein ok-Status war.
- `"rtc"`
  - : Während des Ausladens wurde eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) geschlossen, sodass sich die Seite nicht in einem Zustand befand, der im Back/Forward-Cache gespeichert werden konnte.
- `"sensors"`
  - : Das Dokument hat Sensorzugriff angefordert.
- `"serviceworker-added"`
  - : Der Service-Worker-Client des Dokuments begann, von einem [Service-Worker](/de/docs/Web/API/Service_Worker_API) kontrolliert zu werden, während die Seite im Back/Forward-Cache war.
- `"serviceworker-claimed"`
  - : Der aktive Service-Worker des Service-Worker-Clients des Dokuments wurde beansprucht, während die Seite im Back/Forward-Cache war.
- `"serviceworker-postmessage"`
  - : Der aktive Service-Worker des Service-Worker-Clients des Dokuments erhielt eine Nachricht, während die Seite im Back/Forward-Cache war.
- `"serviceworker-version-activated"`
  - : Die Version des aktiven Service-Workers des Service-Worker-Clients des Dokuments wurde aktiviert, während die Seite im Back/Forward-Cache war.
- `"serviceworker-unregistered"`
  - : Die Service-Worker-Registrierung des aktiven Service-Workers des Service-Worker-Clients des Dokuments wurde abgemeldet, während die Seite im Back/Forward-Cache war.
- `"sharedworker"`
  - : Dieses Dokument war im Besitzerset eines [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope).
- `"smartcardconnection"`
  - : Das Dokument hatte eine aktive `SmartCardConnection` beim Ausladen.
- `"speechrecognition"`
  - : Das Dokument hatte eine aktive [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) beim Ausladen.
- `"storageaccess"`
  - : Das Dokument hat die Speicherzugriffsberechtigung mithilfe der [Storage Access API](/de/docs/Web/API/Storage_Access_API) angefordert.
- `"unload-listener"`
  - : Das Dokument hat einen Ereignis-Listener für das [`unload`-Ereignis](/de/docs/Web/API/Window/unload_event) registriert.
- `"video-capture"`
  - : Das Dokument hat um Erlaubnis zur Videoaufnahme gebeten, indem es Media Capture and Streams' [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) mit Video verwendet hat.
- `"webhid"`
  - : Das Dokument hat die Methode [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) der [WebHID API](/de/docs/Web/API/WebHID_API) aufgerufen.
- `"webshare"`
  - : Das Dokument hat die [Web Share API](/de/docs/Web/API/Web_Share_API) verwendet, um die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) aufzurufen.
- `"webtransport"`
  - : Während des Ausladens wurde eine offene [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung geschlossen, sodass sich die Seite nicht in einem Zustand befand, der im Back/Forward-Cache gespeichert werden konnte.
- `"webxrdevice"`
  - : Das Dokument hat ein [XRSystem](/de/docs/Web/API/XRSystem) erstellt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`notRestoredReasons` API Explainer](https://github.com/WICG/bfcache-not-restored-reason/blob/main/NotRestoredReason.md)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)

> [!NOTE]
> Dieser Artikel ist eine Anpassung von [Back/forward cache notRestoredReasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/) von Chris Mills und Barry Pollard, ursprünglich veröffentlicht auf `developer.chrome.com` im Jahr 2023 unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/).

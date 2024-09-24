---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 3015891c7bd9fd9a8e11521b59ae674d6d5b1b7a
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es wurde eine Option hinzugefügt, um die geteilte Konsole zu deaktivieren ([Firefox Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, etc.) wurde standardmäßig deaktiviert. Dieses Verhalten ist im MathML Core nicht definiert und war nur als Workaround für Nicht-Math-Schriften notwendig. Es kann weiterhin aktiviert werden, indem die Konfiguration `mathml.centered_operators.disabled` auf `false` gesetzt wird. ([Firefox Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}}-Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu vergrößern oder zu verkleinern ([Firefox Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Headers/Content-Encoding#zstd)-Direktive der `Content-Encoding` HTTP-Header wird jetzt unterstützt, was das Dekodieren von serverseitig gesendeten Inhalten im {{glossary("Zstandard-Kompressionsverfahren")}} ermöglicht ([Firefox Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API) Datenbanken aufzulisten ([Firefox Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um die Durability-Hinweise der Transaktion abzufragen, mit denen die Transaktion erstellt wurde ([Firefox Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird jetzt unterstützt, um [`URL`](/de/docs/Web/API/URL)-Objekte zu erstellen. Dies gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht-werfende Alternative zur Erstellung von `URL`-Objekten mit dem [`URL`-Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt, was einer Webanwendung ermöglicht, zu verhindern, dass der Bildschirm abgedunkelt oder gesperrt wird, während sie aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie für andere Anwendungen, bei denen der Bildschirm möglicherweise nicht regelmäßig berührt wird, um ihn wach zu halten. Die API wird über {{domxref("Navigator.wakeLock")}} in sicheren Kontexten aufgerufen, was ein {{domxref("WakeLock")}} zurückgibt. Dies ermöglicht es Ihnen, ein {{domxref("WakeLockSentinel")}} anzufordern, das verwendet werden kann, um den Status der Wachhaltungsanforderung zu überwachen und manuell freizugeben ([Firefox Bug 1589554](https://bugzil.la/1589554), [Firefox Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Eigenschaften und Methoden werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten Eigenschaften `relayProtocol` und `url`. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:

  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox Bug 1322186](https://bugzil.la/1322186)).

- Die schreibgeschützte Eigenschaft {{domxref("Element.currentCSSZoom")}} wird jetzt unterstützt, um den effektiven CSS-[zoom](/de/docs/Web/CSS/zoom) eines Elements abzurufen ([Firefox Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und diese mit CSS-Selektoren abzugleichen, ist jetzt standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zu oder von der {{domxref("ElementInternals.states")}}-Eigenschaft (eine {{domxref("CustomStateSet")}}) des Elements hinzugefügt oder entfernt werden können. Die CSS-Pseudoklasse [`:state()`](/de/docs/Web/CSS/:state) nimmt einen benutzerdefinierten Bezeichner als Argument und gleicht benutzerdefinierte Elemente ab, wenn der Bezeichner in deren Zustandsmenge vorhanden ist ([Firefox Bug 1887543](https://bugzil.la/1887543)).
- Die Eigenschaft {{domxref("Selection.direction")}} wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox Bug 1867058](https://bugzil.la/1867058)).

#### Media, WebRTC und Web Audio

##### Entfernungen

- Die Ereignisse `bounce`, `finish`, und `start` im Zusammenhang mit dem [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) wurden entfernt, zusammen mit den entsprechenden [Ereignishandler-Attributen](/de/docs/Web/HTML/Element/marquee#event_handlers), die auf dem [`<marquee>` HTML-Element](/de/docs/Web/HTML/Element/marquee) definiert sind ([Firefox Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Formats/Video_codecs#theora)-Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das Argument `contexts` wurde zum Befehl `network.addIntercept` hinzugefügt, um die Abfangen von Netzwerk-Anfragen auf bestimmte oberste Browsing-Kontexte zu beschränken ([Firefox Bug 1882260](https://bugzil.la/1882260)).
- Die Befehle `session.subscribe` und `session.unsubscribe` werfen jetzt einen `invalid argument` Fehler, wenn die Werte der Argumente `events` oder `contexts` leere Arrays sind ([Firefox Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des Befehls `storage.getCookies` wurde aktualisiert, um sich an das Standard-Cookie-Verhalten von Gecko anzupassen. Dadurch wird der Benutzerwert für die Präferenz `network.cookie.cookieBehavior` überflüssig, welche nur für unsere CDP-Implementierung erwartet wurde ([Firefox Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den Befehl `browsingContext.locateNodes` wurden entfernt, da sie nicht mehr erforderlich sind ([Firefox Bug 1884935](https://bugzil.la/1884935)).
- Verbesserte Fehlermeldung für den Befehl `session.new`, wenn keine Fähigkeiten angegeben sind ([Firefox Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}}-Ereignis übergibt jetzt das `tab`-Argument an den Event-Listener. Dies ermöglicht Erweiterungen, ein ausgelöstes Tastenkürzel auf die Seite anzuwenden, auf der es ausgeführt wurde, ohne die Methode `tabs.query()` aufrufen zu müssen ([Firefox Bug 1843866](https://bugzil.la/1843866)).
- Der Typ {{WebExtAPIRef("runtime.MessageSender")}} enthält jetzt die Eigenschaft `origin`. Dies ermöglicht es Nachrichten- oder Verbindungsanforderungen, die Seite oder den Frame zu sehen, die die Verbindung geöffnet haben. Dies ist nützlich, um festzustellen, ob der Ursprung vertrauenswürdig ist, falls dies nicht aus der URL ersichtlich ist ([Firefox Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome für die Anforderung von Berechtigungen für {{WebExtAPIRef("webRequest.onAuthRequired")}} im Manifest V3 ([Firefox Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)-Schlüssels bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox Bug 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} wird jetzt auch durch die `activeTab`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert, was die Kompatibilität mit Chrome und Safari bietet ([Firefox Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 126 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der [Seite experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Selections crossing shadow DOM boundary:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode {{domxref("Selection.getComposedRanges()")}} kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokus-Knoten in einem Shadow DOM enthalten, vorausgesetzt, es werden die {{domxref("ShadowRoot")}}-Objekte übergeben, die diese Knoten enthalten. Die `Selection`-Methoden {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}, {{domxref("Selection.collapse()","collapse()")}}, und {{domxref("Selection.extend()","extend()")}} wurden ebenfalls modifiziert, um Knoten innerhalb eines Shadow-Roots zu akzeptieren ([Firefox Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die [`shape()`](/de/docs/Web/CSS/basic-shape/shape)-Funktion verwenden, um Formen in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Diese Funktion gibt Ihnen eine detailliertere Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der `{{cssxref("path","path()")}}`-Funktion ([Firefox Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()`-Funktion in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der `shape()`-Funktion in `offset-path`, [Firefox Bug 1884425](https://bugzil.la/1884425) für die Unterstützung der `shape()`-Interpolation).

## Ältere Versionen

{{Firefox_for_developers}}

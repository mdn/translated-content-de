---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 25544baf59024e6b33879f4b303acf4539a94415
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es wurde eine Option hinzugefügt, um die geteilte Konsole zu deaktivieren ([Firefox Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, usw.) ist standardmäßig deaktiviert worden. Dieses Verhalten ist im MathML Core nicht definiert und war nur als Workaround für Nicht-Mathe-Schriften erforderlich. Es kann weiterhin aktiviert werden, indem die `mathml.centered_operators.disabled` Konfiguration auf `false` gesetzt wird. ([Firefox Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}}-Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seiner Inhalte zu erhöhen oder zu verringern ([Firefox Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Headers/Content-Encoding#zstd)-Anweisung des `Content-Encoding` HTTP-Headers wird jetzt unterstützt, wodurch das Dekodieren von vom Server gesendeten Inhalten ermöglicht wird, die mit dem {{Glossary("Zstandard_compression", "Zstandard-Kompressionsalgorithmus")}} kodiert sind ([Firefox Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API) Datenbanken aufzulisten ([Firefox Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um den Haltbarkeitshinweis der Transaktion abzufragen, mit dem die Transaktion erstellt wurde ([Firefox Bug 1878143](https://bugzil.la/1878143)).
- Die [`URL.parse()`](/de/docs/Web/API/URL/parse_static) statische Methode wird jetzt unterstützt, um [`URL`](/de/docs/Web/API/URL)-Objekte zu erstellen. Dies gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht-auswerfende Alternative zur Erstellung von `URL`-Objekten mit dem [`URL`-Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt und ermöglicht es einer Webanwendung zu verhindern, dass der Bildschirm gedimmt oder gesperrt wird, während er aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie für andere Anwendungen, bei denen der Bildschirm möglicherweise keinen regelmäßigen Tastendruckeingänge erhält, um ihn wach zu halten. Die API ist durch [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Kontexten zugänglich, das ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Damit kann ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) angefordert werden, mit dem der Status des Wachschutzes überwacht und manuell freigegeben werden kann ([Firefox Bug 1589554](https://bugzil.la/1589554), [Firefox Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Eigenschaften und Methoden werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten `relayProtocol` und `url` Eigenschaften. Für die Eigenschaften des `RTCIceCandidate` wurden folgende Änderungen vorgenommen:

  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox Bug 1322186](https://bugzil.la/1322186)). 

- Die [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) schreibgeschützte Eigenschaft wird jetzt unterstützt, um den effektiven CSS [zoom](/de/docs/Web/CSS/zoom) eines Elements zu erhalten ([Firefox Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Fähigkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mit CSS-Selektoren abzugleichen, ist jetzt standardmäßig verfügbar. Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zur oder von der [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft eines Elements (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder entfernt werden können. Die CSS [`:state()`](/de/docs/Web/CSS/:state) Pseudo-Klasse nimmt einen benutzerdefinierten Bezeichner als Argument und gleicht benutzerdefinierte Elemente ab, wenn der Bezeichner in ihrem Satz von Zuständen vorhanden ist ([Firefox Bug 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction) Eigenschaft wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die Marquee-Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) wurden aus dem [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Ereignis-Handler-Attributen](/de/docs/Web/HTML/Element/marquee#event_handlers), die auf dem [`<marquee>` HTML-Element](/de/docs/Web/HTML/Element/marquee) definiert sind ([Firefox Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Formats/Video_codecs#theora)-Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `contexts`-Argument wurde dem `network.addIntercept`-Befehl hinzugefügt, um das Abfangen von Netzwerk-Anfragen auf bestimmte oberste Browsing-Kontexte zu beschränken ([Firefox Bug 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` werfen jetzt einen `invalid argument`-Fehler, wenn die Werte der Argumente `events` oder `contexts` leere Arrays sind ([Firefox Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies`-Befehls wurde aktualisiert, um sich auf das Standard-Cookie-Verhalten von Gecko abzustimmen. Dadurch ist es möglich, den Benutzerwert für die Präferenz `network.cookie.cookieBehavior` zu entfernen, der nur bei unserer CDP-Implementierung gesetzt werden sollte ([Firefox Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den `browsingContext.locateNodes` Befehl wurden entfernt, da sie nicht mehr erforderlich sind ([Firefox Bug 1884935](https://bugzil.la/1884935)).
- Fehlermeldung für den `session.new`-Befehl verbessert, wenn keine Fähigkeiten angegeben sind ([Firefox Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}} Ereignis übergibt jetzt das `tab`-Argument an den Ereignis-Listener. Dies ermöglicht Erweiterungen, eine ausgelöste Abkürzung auf die Seite anzuwenden, auf der sie ausgegeben wurde, ohne die Methode `tabs.query()` aufzurufen ([Firefox Bug 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}} Typ umfasst jetzt die `origin` Eigenschaft. Dadurch können Nachrichten- oder Verbindungsanforderungen sehen, welche Seite oder welches Frame die Verbindung geöffnet hat. Dies ist nützlich, um zu erkennen, ob die Quelle vertrauenswürdig ist, wenn dies aus der URL nicht offensichtlich ist ([Firefox Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome, um die Berechtigung für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 anzufordern ([Firefox Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssels bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox Bug 1816960](https://bugzil.la/1816960)).
- Die {{WebExtAPIRef("tabs.captureVisibleTab")}} Methode wird jetzt auch durch die `activeTab` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert, um Kompatibilität mit Chrome und Safari zu bieten ([Firefox Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 126 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahlen über Schatten-DOM-Grenzen hinweg:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokus-Knoten innerhalb eines Schatten-DOMs haben — vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben, die diese Knoten enthalten. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls modifiziert, um Knoten innerhalb eines Schatten-Root zu akzeptieren ([Firefox Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()`-Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}}-Funktion verwenden, um Formen in den {{cssxref("clip-path")}}- und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Diese Funktion bietet Ihnen eine feinere Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}}-Funktion ([Firefox Bug 1823463](https://bugzil.la/1823463) für `shape()`-Funktion Unterstützung in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für `shape()`-Funktion Unterstützung in `offset-path`, [Firefox Bug 1884425](https://bugzil.la/1884425) für `shape()` Interpolationsunterstützung).

## Ältere Versionen

{{Firefox_for_developers}}

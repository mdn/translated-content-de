---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine nennenswerten Änderungen.

### MathML

#### Entfernte Funktionen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, < usw.) wurde standardmäßig deaktiviert. Dieses Verhalten ist nicht im MathML Core definiert und war nur als Workaround für Nicht-Math-Schriften notwendig. Es kann immer noch aktiviert werden, indem die `mathml.centered_operators.disabled`-Konfiguration auf `false` gesetzt wird. ([Firefox Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}}-Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und dessen Inhalte zu vergrößern oder zu verkleinern ([Firefox Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine nennenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd)-Richtlinie des `Content-Encoding`-HTTP-Headers wird jetzt unterstützt, sodass serverseitig gesendete Inhalte, die mit dem {{Glossary("Zstandard_compression", "Zstandard-Komprimierungsalgorithmus")}} codiert sind, dekodiert werden können ([Firefox Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API)-Datenbanken aufzulisten ([Firefox Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um den Transaktionshaltbarkeits-Hinweis abzufragen, mit dem die Transaktion erstellt wurde ([Firefox Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird jetzt unterstützt, um [`URL`](/de/docs/Web/API/URL)-Objekte zu erstellen. Diese gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht-auslösendes Alternative zur Erstellung von `URL`-Objekten mit dem [`URL`-Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt, was es einer Webanwendung ermöglicht, zu verhindern, dass der Bildschirm gedimmt oder gesperrt wird, während er aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie für andere Anwendungen, bei denen der Bildschirm während der Benutzung nicht regelmäßig taktile Eingaben erhält, die ihn normalerweise wach halten würden. Die API wird in sicheren Kontexten über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) zugegriffen, die ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Damit können Sie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) anfordern, das verwendet werden kann, um den Status des Aufwach-Sperrmodus zu überwachen und ihn manuell freizugeben ([Firefox Bug 1589554](https://bugzil.la/1589554), [Firefox Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Eigenschaften und -Methoden werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten `relayProtocol`- und `url`-Eigenschaften. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:

  - Die folgenden Eigenschaften wurden auf schreibgeschützt gestellt: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox Bug 1322186](https://bugzil.la/1322186)).

- Die [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom)-Eigenschaft wird jetzt unterstützt, um den effektiven CSS-[Zoom](/de/docs/Web/CSS/zoom) eines Elements abzurufen ([Firefox Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Fähigkeit, Zustände für benutzerdefinierte Elemente zu definieren und diese mittels CSS-Selektoren zu verwenden, ist jetzt standardmäßig verfügbar. Die benutzerdefinierten Zustände werden als benutzerdefinierte Kennungen dargestellt, die der [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft eines Elements (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder daraus entfernt werden können. Die CSS-Pseudoklasse [`:state()`](/de/docs/Web/CSS/:state) nimmt eine benutzerdefinierte Kennung als Argument und stimmt auf benutzerdefinierte Elemente ab, wenn die Kennung in ihrem Satz von Zuständen vorhanden ist ([Firefox Bug 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction)-Eigenschaft wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernte Funktionen

- Die Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish), und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) des [`<marquee>` HTML-Elements](/de/docs/Web/HTML/Element/marquee) wurden aus dem [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Ereignishandler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora) Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `contexts` Argument wurde dem `network.addIntercept` Befehl hinzugefügt, um die Abfangung von Netzwerkanforderungen auf bestimmte oberste Browsing-Kontexte zu beschränken ([Firefox Bug 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` lösen nun einen `ungültiges Argument` Fehler aus, wenn der Wert der Argumente `events` oder `contexts` leere Arrays sind ([Firefox Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies` Befehls wurde aktualisiert, um mit dem Gecko-Standard-Cookie-Verhalten konform zu sein. Dies ermöglicht die Entfernung des Benutzereintrags für die Präferenz `network.cookie.cookieBehavior`, die nur für unsere CDP-Implementierung erwartet wurde ([Firefox Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den `browsingContext.locateNodes` Befehl wurden entfernt, da sie nicht mehr notwendig sind ([Firefox Bug 1884935](https://bugzil.la/1884935)).
- Die Fehlermeldung für den `session.new` Befehl wurde verbessert, wenn keine Fähigkeiten angegeben sind ([Firefox Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}} Ereignis übergibt jetzt das `tab` Argument an den Ereignislistener. Dies ermöglicht es Erweiterungen, ein ausgelöstes Tastenkürzel auf die Seite anzuwenden, auf der es ausgestellt wurde, ohne die `tabs.query()` Methode aufrufen zu müssen ([Firefox Bug 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}} Typ enthält jetzt die `origin` Eigenschaft. Dies ermöglicht es Nachrichten- oder Verbindungsanforderungen, die Seite oder das Frame zu sehen, das die Verbindung geöffnet hat. Dies ist nützlich, um zu identifizieren, ob der Ursprung vertrauenswürdig ist, wenn dies nicht aus der URL ersichtlich ist ([Firefox Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome, um Berechtigungen für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 anzufordern ([Firefox Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page`-Schlüssel im Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias für den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)-Schlüssel bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox Bug 1816960](https://bugzil.la/1816960)).
- Die {{WebExtAPIRef("tabs.captureVisibleTab")}} Methode wird jetzt auch durch die `activeTab` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert, was Kompatibilität mit Chrome und Safari bietet ([Firefox Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 126 ausgeliefert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahlen über die Shadow DOM Grenze:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokus-Knoten innerhalb eines Shadow DOM haben — vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben, die diese Knoten enthalten. `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse), und [`extend()`](/de/docs/Web/API/Selection/extend) wurden auch modifiziert, um Knoten innerhalb eines Shadow Roots zu akzeptieren ([Firefox Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}}-Funktion verwenden, um Formen in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Diese Funktion gibt Ihnen eine feinere Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}}-Funktion ([Firefox Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der `shape()` Funktion in `offset-path`, [Firefox Bug 1884425](https://bugzil.la/1884425) für die `shape()` Interpolationsunterstützung).

## Ältere Versionen

{{Firefox_for_developers}}

---
title: Firefox 126 Versionshinweise für Entwickler
short-title: Firefox 126
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox-Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, etc.) wurde standardmäßig deaktiviert. Dieses Verhalten ist im MathML Core nicht definiert und war nur als Workaround für Nicht-Mathematik-Schriften erforderlich. Es kann weiterhin aktiviert werden, indem die `mathml.centered_operators.disabled` Konfiguration auf `false` gesetzt wird. ([Firefox-Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}} Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu vergrößern oder zu verkleinern ([Firefox-Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd) Direktive des `Content-Encoding` HTTP-Headers wird jetzt unterstützt und ermöglicht das Dekodieren von serverseitigem Inhalt, der mit dem {{Glossary("Zstandard_compression", "Zstandard-Kompressionsalgorithmus")}} codiert ist ([Firefox-Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird nun unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API) Datenbanken aufzulisten ([Firefox-Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um den Transaktionsdauerhaftigkeitshinweis abzufragen, mit dem die Transaktion erstellt wurde ([Firefox-Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird nun unterstützt, um [`URL`](/de/docs/Web/API/URL) Objekte zu erstellen. Dies gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht auslösendes Alternativverfahren zu Erstellung von `URL` Objekten mit dem [`URL` Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt und ermöglicht es einer Webanwendung, anzufordern, dass der Bildschirm nicht gedimmt oder gesperrt wird, während die Anwendung aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie für andere Anwendungen, bei denen der Bildschirm während der Nutzung möglicherweise keine regelmäßigen Tastatureingaben erhält, die ihn normalerweise wach halten würden. Die API wird in sicheren Kontexten über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) aufgerufen, die ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Dies ermöglicht das Anfordern eines [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel), das verwendet werden kann, um den Status der Wach-Sperre zu überwachen und sie manuell freizugeben ([Firefox-Bug 1589554](https://bugzil.la/1589554), [Firefox-Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Eigenschaften und Methoden werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten `relayProtocol` und `url` Eigenschaften. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:
  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox-Bug 1322186](https://bugzil.la/1322186)).

- Die schreibgeschützte Eigenschaft [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) wird jetzt unterstützt, um den effektiven CSS [zoom](/de/docs/Web/CSS/zoom) eines Elements zu erhalten ([Firefox-Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mit CSS-Selektoren abzugleichen, ist jetzt standardmäßig verfügbar. Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zu oder von der [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft (einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder entfernt werden können. Die CSS [`:state()`](/de/docs/Web/CSS/:state) Pseudoklasse nimmt einen benutzerdefinierten Bezeichner als Argument und passt benutzerdefinierte Elemente an, wenn der Bezeichner in ihrem Zustandsset vorhanden ist ([Firefox-Bug 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction) Eigenschaft wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die [`<marquee>` HTML-Element](/de/docs/Web/HTML/Reference/Elements/marquee) Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) wurden aus dem [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Ereignis-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox-Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora) Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox-Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `contexts` Parameter wurde dem `network.addIntercept` Befehl hinzugefügt, um die Interzeption von Netzwerk-Anfragen auf bestimmte oberste Browsing-Kontexte zu beschränken ([Firefox-Bug 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` geben jetzt einen `invalid argument` Fehler aus, wenn die Werte der Argumente `events` oder `contexts` leere Arrays sind ([Firefox-Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies` Befehls wurde aktualisiert, um mit dem Gecko-Standardcookieverhalten übereinzustimmen. Dies ermöglicht das Entfernen des Nutzerwerts für die Präferenz `network.cookie.cookieBehavior`, die nur für unsere CDP-Implementierung erwartet wurde ([Firefox-Bug 1879503](https://bugzil.la/1879503)).
- Die `ownership` und `sandbox` Argumente für den `browsingContext.locateNodes` Befehl wurden entfernt, da sie nicht mehr erforderlich sind ([Firefox-Bug 1884935](https://bugzil.la/1884935)).
- Verbesserte Fehlermeldung für den `session.new` Befehl, wenn keine Fähigkeiten angegeben sind ([Firefox-Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}} Ereignis übergibt jetzt das `tab` Argument an den Ereignis-Listener. Dies ermöglicht es Erweiterungen, eine ausgelöste Verknüpfung auf die Seite anzuwenden, in der sie ausgegeben wurde, ohne dass der `tabs.query()` Methode aufgerufen werden muss ([Firefox-Bug 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}} Typ umfasst jetzt die `origin` Eigenschaft. Dadurch können Nachrichten- oder Verbindungsanfragen die Seite oder den Frame sehen, der die Verbindung geöffnet hat. Dies ist nützlich, um zu erkennen, ob der Ursprung vertrauenswürdig ist, wenn dies aus der URL nicht ersichtlich ist ([Firefox-Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome beim Anfordern von Berechtigungen für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox-Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssels bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox-Bug 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} wird jetzt auch durch die `activeTab` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert und bietet Kompatibilität mit Chrome und Safari ([Firefox-Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 126 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahlen über Shadow DOM Grenze:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) Methode kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokus-Knoten innerhalb eines Shadow DOM enthalten, wenn die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben werden, die diese Knoten enthalten. Die `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls modifiziert, um Knoten innerhalb einer Shadow-Wurzel zu akzeptieren ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}} Funktion verwenden, um Formen in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften zu definieren. Diese Funktion ermöglicht Ihnen eine feiner abgestimmte Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}} Funktion ([Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der `shape()` Funktion in `offset-path`, [Firefox-Bug 1884425](https://bugzil.la/1884425) für `shape()` Interpolationsunterstützung).

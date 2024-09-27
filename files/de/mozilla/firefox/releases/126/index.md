---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 3015891c7bd9fd9a8e11521b59ae674d6d5b1b7a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox-Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, < usw.) ist standardmäßig deaktiviert. Dieses Verhalten ist im MathML Core nicht definiert und war nur als Workaround für Nicht-Mathematik-Schriftarten erforderlich. Es kann weiterhin aktiviert werden, indem der `mathml.centered_operators.disabled` Konfigurationswert auf `false` gesetzt wird. ([Firefox-Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}} Eigenschaft wird nun unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu vergrößern oder zu verkleinern ([Firefox-Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Headers/Content-Encoding#zstd) Direktive des `Content-Encoding` HTTP-Headers wird nun unterstützt und ermöglicht die Dekodierung von serverseitig gesendeten Inhalten, die mit dem [Zstandard-Komprimierungsalgorithmus](/de/docs/Glossary/Zstandard_compression) codiert sind ([Firefox-Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird nun unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API) Datenbanken zu enumerieren ([Firefox-Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann nun verwendet werden, um den Transaktionshaltbarkeitshinweis abzufragen, mit dem die Transaktion erstellt wurde ([Firefox-Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird nun unterstützt, um [`URL`](/de/docs/Web/API/URL) Objekte zu erstellen. Dies gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht-auslösendes Alternativverfahren zur Erstellung von `URL`-Objekten mit dem [`URL` Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird nun unterstützt und ermöglicht es einer Web-Anwendung, zu verlangen, dass der Bildschirm nicht gedimmt oder gesperrt wird, während sie aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm während der Nutzung möglicherweise keine regelmäßige taktile Eingabe erhält, die ihn typischerweise wach halten würde. Der Zugriff auf die API erfolgt über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Umgebungen, welches ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Dies ermöglicht es Ihnen, ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) anzufordern, das zur Überwachung des Status der Wach-Sperre und deren manuellen Freigabe verwendet werden kann ([Firefox-Bug 1589554](https://bugzil.la/1589554), [Firefox-Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Eigenschaften und Methoden werden nun unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten Eigenschaften `relayProtocol` und `url`. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:

  - Die folgenden Eigenschaften wurden als schreibgeschützt markiert: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox-Bug 1322186](https://bugzil.la/1322186)).

- Die schreibgeschützte Eigenschaft [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) wird nun unterstützt, um die effektive CSS-[zoom](/de/docs/Web/CSS/zoom) eines Elements zu ermitteln ([Firefox-Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und diese mit CSS-Selektoren zu vergleichen, ist jetzt standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zur Eigenschaft [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) eines Elements hinzugefügt oder daraus entfernt werden können (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)). Die CSS-Pseudoklasse [`:state()`](/de/docs/Web/CSS/:state) nimmt einen benutzerdefinierten Bezeichner als Argument und gleicht benutzerdefinierte Elemente ab, wenn der Bezeichner in ihrem Satz von Zuständen vorhanden ist ([Firefox-Bug 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction) Eigenschaft wird nun unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die Markup-Events [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish), und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) wurden aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Event-Handler-Attribute](/de/docs/Web/HTML/Element/marquee#event_handlers), die auf dem [`<marquee>` HTML-Element](/de/docs/Web/HTML/Element/marquee) definiert waren ([Firefox-Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Formats/Video_codecs#theora) Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox-Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `contexts` Argument wurde zum Befehl `network.addIntercept` hinzugefügt, um die Abfang von Netzwerk-Anforderungen auf bestimmte oberste Browsing-Kontexte zu beschränken ([Firefox-Bug 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` geben jetzt einen `invalid argument` Fehler aus, wenn der Wert der Argumente `events` oder `contexts` leere Arrays sind ([Firefox-Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies` Befehls wurde aktualisiert, um mit dem Standard-Cookie-Verhalten von Gecko übereinzustimmen. Dies ermöglicht die Entfernung des Benutzerwerts für die Einstellung `network.cookie.cookieBehavior`, die nur für unsere CDP-Implementierung erwartet wurde ([Firefox-Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den Befehl `browsingContext.locateNodes` wurden entfernt, da sie nicht mehr erforderlich sind ([Firefox-Bug 1884935](https://bugzil.la/1884935)).
- Verbesserte Fehlermeldung für den Befehl `session.new`, wenn keine Fähigkeiten angegeben sind ([Firefox-Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}} Ereignis übergibt nun das `tab` Argument an den Ereignis-Listener. Dadurch können Erweiterungen ein ausgelöstes Kürzel auf die Seite anwenden, in der es ausgelöst wurde, ohne die `tabs.query()` Methode aufrufen zu müssen ([Firefox-Bug 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}} Typ enthält nun die `origin` Eigenschaft. Dies ermöglicht es Nachrichten oder Verbindungsanforderungen, die Seite oder das Frame zu sehen, die die Verbindung geöffnet haben. Dies ist nützlich, um zu identifizieren, ob der Ursprung vertrauenswürdig ist, wenn dies nicht offensichtlich aus der URL hervorgeht ([Firefox-Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird nun unterstützt. Dies bietet Kompatibilität mit Chrome für die Anforderung von Berechtigungen für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox-Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel bereitgestellt. Dies wurde eingeführt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox-Bug 1816960](https://bugzil.la/1816960)).
- Die {{WebExtAPIRef("tabs.captureVisibleTab")}} Methode wird nun auch durch die `activeTab` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert und bietet Kompatibilität mit Chrome und Safari ([Firefox-Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 126 integriert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie den entsprechenden Eintrag auf der `about:config` Seite und setzen Sie ihn auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahlen über Shadow DOM-Grenzen hinweg:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um Auswahlbereiche zu erhalten, deren Anker- oder Fokusknoten sich innerhalb eines Shadow DOM befinden — vorausgesetzt, dass ihr die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben werden, die diese Knoten enthalten. Die `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse), und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls modifiziert, um Knoten innerhalb einer shadow root zu akzeptieren ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion verwenden, um Formen in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften zu definieren. Diese Funktion gibt Ihnen feinere Kontrolle über die zu definierenden Formen und bietet mehrere Vorteile gegenüber der `{{cssxref("path","path()")}}` Funktion ([Firefox-Bug 1823463](https://bugzil.la/1823463) für `shape()` Funktion Unterstützung in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für `shape()` Funktion Unterstützung in `offset-path`, [Firefox-Bug 1884425](https://bugzil.la/1884425) für `shape()` Interpolationsunterstützung).

## Ältere Versionen

{{Firefox_for_developers}}

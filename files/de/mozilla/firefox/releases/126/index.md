---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 1ebd589beda22afac79cde3cb8601061d1ce3798
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine Option wurde hinzugefügt, um die geteilte Konsole zu deaktivieren ([Firefox Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, etc.) wurde standardmäßig deaktiviert. Dieses Verhalten ist im MathML-Kern nicht definiert und war nur als Workaround für Nicht-Math-Schriften erforderlich. Es kann jedoch weiterhin aktiviert werden, indem die `mathml.centered_operators.disabled` Konfiguration auf `false` gesetzt wird ([Firefox Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}} Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu vergrößern oder zu verkleinern ([Firefox Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Headers/Content-Encoding#zstd) Direktive des `Content-Encoding` HTTP-Headers wird jetzt unterstützt und ermöglicht das Dekodieren von serverseitig gesendeten Inhalten, die mit dem {{Glossary("Zstandard_compression", "Zstandard-Kompressionsalgorithmus")}} kodiert wurden ([Firefox Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt zur Auflistung verfügbarer [IndexedDB API](/de/docs/Web/API/IndexedDB_API) Datenbanken unterstützt ([Firefox Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um die Beständigkeitshintonation der Transaktion abzufragen, mit der die Transaktion erstellt wurde ([Firefox Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird jetzt unterstützt, um [`URL`](/de/docs/Web/API/URL) Objekte zu erstellen. Diese gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht-auslösendes Alternativverfahren zum Erstellen eines `URL`-Objekts mit dem [`URL` Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt, was es einer Webanwendung ermöglicht, zu verhindern, dass der Bildschirm gedimmt oder gesperrt wird, während sie aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm während der Nutzung möglicherweise keine regelmäßigen taktilen Eingaben erhält, die ihn normalerweise wach halten würden. Die API wird in sicheren Kontexten über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) aufgerufen, das ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Dies ermöglicht das Anfordern eines [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel), das genutzt werden kann, um den Status der Bildschirmsperre zu überwachen und manuell freizugeben ([Firefox Bug 1589554](https://bugzil.la/1589554), [Firefox Bug 1874849](https://bugzil.la/1874849)).
- Alle Eigenschaften und Methoden von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der noch nicht implementierten Eigenschaften `relayProtocol` und `url`. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:

  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox Bug 1322186](https://bugzil.la/1322186)).

- Die schreibgeschützte Eigenschaft [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) wird jetzt unterstützt, um den effektiven CSS [zoom](/de/docs/Web/CSS/zoom) eines Elements zu erhalten ([Firefox Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mithilfe von CSS-Selektoren abzugleichen, ist jetzt standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Kennungen dargestellt, die der [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft eines Elements (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder daraus entfernt werden können. Die CSS-Pseudoklasse [`:state()`](/de/docs/Web/CSS/:state) nimmt eine benutzerdefinierte Kennung als Argument und stimmt mit benutzerdefinierten Elementen überein, wenn die Kennung in ihrer Menge von Zuständen vorhanden ist ([Firefox Bug 1887543](https://bugzil.la/1887543)).
- Die Eigenschaft [`Selection.direction`](/de/docs/Web/API/Selection/direction) wird jetzt unterstützt, um die Richtung einer Auswahl anzuzeigen ([Firefox Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) des [`<marquee>` HTML-Elements](/de/docs/Web/HTML/Element/marquee) wurden aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Ereignis-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Formats/Video_codecs#theora) Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt werden ([Firefox Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `contexts` Argument wurde dem `network.addIntercept` Befehl hinzugefügt, um die Abfangung von Netzwerkanfragen auf bestimmte Top-Level-Browsingkontexte zu beschränken ([Firefox Bug 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` werfen jetzt einen `invalid argument` Fehler, wenn die Werte der Argumente `events` oder `contexts` leere Arrays sind ([Firefox Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies` Befehls wurde aktualisiert, um sich am Standard-Cookie-Verhalten von Gecko auszurichten. Dies ermöglicht die Entfernung des Benutzerwerts für die Präferenz `network.cookie.cookieBehavior`, die nur für unsere CDP-Implementierung erwartet wurde ([Firefox Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den `browsingContext.locateNodes` Befehl wurden entfernt, da sie nicht mehr notwendig sind ([Firefox Bug 1884935](https://bugzil.la/1884935)).
- Verbesserte Fehlermeldung für den `session.new` Befehl, wenn keine Fähigkeiten angegeben sind ([Firefox Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}} Ereignis übergibt jetzt das `tab` Argument an den Ereignis-Listener. Dies ermöglicht Erweiterungen, ein ausgelöstes Tastenkürzel auf die Seite anzuwenden, in der es ausgeführt wurde, ohne die `tabs.query()` Methode aufrufen zu müssen ([Firefox Bug 1843866](https://bugzil.la/1843866)).
- Der Typ {{WebExtAPIRef("runtime.MessageSender")}} umfasst jetzt die Eigenschaft `origin`. Dies ermöglicht Nachrichten- oder Verbindungsanforderungen, die Seite oder den Frame zu sehen, der die Verbindung geöffnet hat. Dies ist nützlich, um zu bestimmen, ob der Ursprung vertrauenswürdig ist, wenn dies nicht aus der URL ersichtlich ist ([Firefox Bug 1787379](https://bugzil.la/1787379)).
- Die `"webRequestAuthProvider"` Berechtigung wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome, um Berechtigungen für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 anzufordern ([Firefox Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssels bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox Bug 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} wird jetzt auch durch die `activeTab` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert und bietet Kompatibilität mit Chrome und Safari ([Firefox Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 126 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahl über Schatten-DOM-Grenzen hinweg:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokusknoten innerhalb eines Schatten-DOMs haben — vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben, die diese Knoten enthalten. `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so modifiziert, dass sie Knoten innerhalb eines Schattenstammes akzeptieren ([Firefox Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}} Funktion verwenden, um Formen in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Diese Funktion bietet Ihnen eine feinere Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}} Funktion ([Firefox Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der `shape()` Funktion in `offset-path`, [Firefox Bug 1884425](https://bugzil.la/1884425) für die Unterstützung der `shape()` Interpolation).

## Ältere Versionen

{{Firefox_for_developers}}

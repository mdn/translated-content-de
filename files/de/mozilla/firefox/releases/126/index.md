---
title: Firefox 126 Versionshinweise für Entwickler
short-title: Firefox 126
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox Fehler 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, etc.) wurde standardmäßig deaktiviert. Dieses Verhalten ist im MathML Core nicht definiert und war nur als Workaround für Nicht-Mathematik-Schriftarten notwendig. Es kann weiterhin aktiviert werden, indem die `mathml.centered_operators.disabled` Konfiguration auf `false` gesetzt wird. ([Firefox Fehler 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}} Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu vergrößern oder zu verkleinern ([Firefox Fehler 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd) Direktive des `Content-Encoding` HTTP-Headers wird jetzt unterstützt, was das Dekodieren von servergesendeten Inhalten ermöglicht, die mit dem {{Glossary("Zstandard_compression", "Zstandard Kompressionsalgorithmus")}} codiert sind ([Firefox Fehler 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt zur Aufzählung verfügbarer [IndexedDB API](/de/docs/Web/API/IndexedDB_API) Datenbanken unterstützt ([Firefox Fehler 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um das Transaktions-Haltbarkeitshinweis abzufragen, mit dem die Transaktion erstellt wurde ([Firefox Fehler 1878143](https://bugzil.la/1878143)).
- Die [`URL.parse()`](/de/docs/Web/API/URL/parse_static) statische Methode wird jetzt zur Erstellung von [`URL`](/de/docs/Web/API/URL) Objekten unterstützt. Sie gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht auslösende Alternative zur Erstellung eines `URL` Objekts mit dem [`URL` Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox Fehler 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt, was es einer Webanwendung ermöglicht, zu beantragen, dass der Bildschirm nicht gedimmt oder gesperrt wird, während sie aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm möglicherweise nicht regelmäßig taktilen Eingaben erhält, die ihn normalerweise wach halten würden. Die API wird über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Kontexten aufgerufen, was ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Dies ermöglicht es Ihnen, ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) zu beantragen, das verwendet werden kann, um den Status der Bildschirmsperre zu überwachen und manuell freizugeben ([Firefox Fehler 1589554](https://bugzil.la/1589554), [Firefox Fehler 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Eigenschaften und Methoden werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten `relayProtocol` und `url` Eigenschaften. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:
  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox Fehler 1322186](https://bugzil.la/1322186)).

- Die [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) schreibgeschützte Eigenschaft wird jetzt zum Abrufen des effektiven CSS [zoom](/de/docs/Web/CSS/Reference/Properties/zoom) eines Elements unterstützt ([Firefox Fehler 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mithilfe von CSS-Selektoren zu vergleichen, ist jetzt standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zur [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft eines Elements hinzugefügt oder von ihr entfernt werden können (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)). Die CSS Pseudo-Klasse [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) nimmt einen benutzerdefinierten Bezeichner als Argument an und vergleicht benutzerdefinierte Elemente, wenn der Bezeichner in ihrem Satz von Zuständen vorhanden ist ([Firefox Fehler 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction) Eigenschaft wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox Fehler 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die [`<marquee>` HTML-Element](/de/docs/Web/HTML/Reference/Elements/marquee) Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish), und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) wurden aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Event-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox Fehler 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora) Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox Fehler 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `contexts` Argument wurde zum `network.addIntercept` Befehl hinzugefügt, um die Abfang von Netzwerk-Anfragen auf bestimmte oberste Browsing-Kontexte zu beschränken ([Firefox Fehler 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` werfen jetzt einen `invalid argument` Fehler, wenn die Werte der Argumente `events` oder `contexts` leere Arrays sind ([Firefox Fehler 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies` Befehls wurde aktualisiert, um mit dem Gecko-Standardverhalten für Cookies übereinzustimmen. Dies ermöglicht die Entfernung des Benutzerwerts für die Präferenz `network.cookie.cookieBehavior`, der nur erwartet wurde, für unsere CDP-Implementierung gesetzt zu werden ([Firefox Fehler 1879503](https://bugzil.la/1879503)).
- Die `ownership` und `sandbox` Argumente für den `browsingContext.locateNodes` Befehl wurden entfernt, da sie nicht mehr notwendig sind ([Firefox Fehler 1884935](https://bugzil.la/1884935)).
- Verbesserte Fehlermeldung für den `session.new` Befehl, wenn keine Fähigkeiten angegeben sind ([Firefox Fehler 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}} Ereignis übergibt jetzt das `tab` Argument an den Ereignis-Listener. Dies ermöglicht es Erweiterungen, einen ausgelösten Shortcut auf die Seite anzuwenden, auf der er ausgegeben wurde, ohne die Methode `tabs.query()` aufrufen zu müssen ([Firefox Fehler 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}} Typ enthält jetzt die `origin` Eigenschaft. Dies ermöglicht es, Nachrichten- oder Verbindungsanfragen zu erkennen, welche Seite oder welches Frame die Verbindung geöffnet hat. Dies ist nützlich, um festzustellen, ob die Herkunft vertrauenswürdig ist, falls dies aus der URL nicht ersichtlich ist ([Firefox Fehler 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome zur Anforderung der Berechtigung für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox Fehler 1820569](https://bugzil.la/1820569)).
- Der [`options_page` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssels bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox Fehler 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} wird jetzt auch durch die `activeTab` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert, um Kompatibilität mit Chrome und Safari zu bieten ([Firefox Fehler 1784920](https://bugzil.la/1784920)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 126 veröffentlicht, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahl über die Schatten-DOM-Grenze hinweg:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) Methode kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokus-Knoten innerhalb eines Schatten-DOM haben – vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben, die diese Knoten enthalten. `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse), und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls modifiziert, um Knoten innerhalb einer Schattenwurzel zu akzeptieren ([Firefox Fehler 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}} Funktion verwenden, um Formen in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften zu definieren. Diese Funktion gibt Ihnen eine feinere Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}} Funktion ([Firefox Fehler 1823463](https://bugzil.la/1823463) für `shape()` Funktion Unterstützung in `clip-path`, [Firefox Fehler 1884424](https://bugzil.la/1884424) für `shape()` Funktion Unterstützung in `offset-path`, [Firefox Fehler 1884425](https://bugzil.la/1884425) für `shape()` Interpolationsunterstützung).

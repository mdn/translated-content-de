---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine nennenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, etc.) wurde standardmäßig deaktiviert. Dieses Verhalten ist im MathML Core nicht definiert und war nur als Workaround für Nicht-Math-Schriftarten notwendig. Es kann weiterhin aktiviert werden, indem die `mathml.centered_operators.disabled` Konfiguration auf `false` gesetzt wird. ([Firefox Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}} Eigenschaft wird nun unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu vergrößern oder zu verkleinern ([Firefox Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine nennenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd) Direktive des `Content-Encoding` HTTP-Headers wird nun unterstützt, wodurch die Dekodierung von servergesendeten Inhalten ermöglicht wird, die mit dem {{Glossary("Zstandard_compression", "Zstandard-Kompressionsalgorithmus")}} codiert wurden ([Firefox Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird nun unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API) Datenbanken aufzulisten ([Firefox Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann nun verwendet werden, um den Dauerhaftigkeitshinweis der Transaktion abzufragen, mit dem die Transaktion erstellt wurde ([Firefox Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird nun unterstützt, um [`URL`](/de/docs/Web/API/URL) Objekte zu erstellen. Diese gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht-auswerfende Alternative zur Erstellung eines `URL` Objektes mit dem [`URL` Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird nun unterstützt, sodass eine Webanwendung anfordern kann, dass der Bildschirm nicht verdunkelt oder gesperrt wird, während sie aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm während der Nutzung möglicherweise keine regelmäßigen taktilen Eingaben erhält, die ihn typischerweise wachhalten würden. Die API wird über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Kontexten zugegriffen, was ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Dies ermöglicht es Ihnen, einen [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) anzufordern, der verwendet werden kann, um den Status der Aufweck-Sperre zu überwachen und sie manuell freizugeben ([Firefox Bug 1589554](https://bugzil.la/1589554), [Firefox Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Eigenschaften und Methoden werden nun unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten `relayProtocol` und `url` Eigenschaften. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:

  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox Bug 1322186](https://bugzil.la/1322186)).

- Die [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) schreibgeschützte Eigenschaft wird nun unterstützt, um den effektiven CSS [zoom](/de/docs/Web/CSS/zoom) eines Elements zu erhalten ([Firefox Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mit CSS-Selektoren zu matchen, ist nun standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die dem [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder davon entfernt werden können. Die CSS [`:state()`](/de/docs/Web/CSS/:state) Pseudoklasse nimmt einen benutzerdefinierten Bezeichner als Argument und matched benutzerdefinierte Elemente, wenn der Bezeichner in ihrem Zuständeset vorhanden ist ([Firefox Bug 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction) Eigenschaft wird nun unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die [`<marquee>` HTML-Element](/de/docs/Web/HTML/Reference/Elements/marquee) Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) wurden aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Event-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora) Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `contexts` Argument wurde dem `network.addIntercept` Befehl hinzugefügt, um die Abfangung von Netzwerk-Anfragen auf bestimmte Top-Level-Browsing-Kontexte zu beschränken ([Firefox Bug 1882260](https://bugzil.la/1882260)).
- Die Befehle `session.subscribe` und `session.unsubscribe` erzeugen nun einen `invalid argument` Fehler, wenn die Werte der Argumente `events` oder `contexts` leere Arrays sind ([Firefox Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies` Befehls wurde aktualisiert, um mit dem Standard-Cookie-Verhalten von Gecko übereinzustimmen. Dies ermöglicht die Entfernung des Benutzerwertes für die Präferenz `network.cookie.cookieBehavior`, die nur für unsere CDP-Implementierung erwartet wurde ([Firefox Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den `browsingContext.locateNodes` Befehl wurden entfernt, da sie nicht mehr erforderlich sind ([Firefox Bug 1884935](https://bugzil.la/1884935)).
- Die Fehlermeldung für den `session.new` Befehl wurde verbessert, wenn keine Fähigkeiten angegeben sind ([Firefox Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Addon-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}} Ereignis übergibt nun das `tab` Argument an den Ereignislistener. Dies ermöglicht es Erweiterungen, ein ausgelöstes Shortcut auf die Seite anzuwenden, in der es ausgegeben wurde, ohne die `tabs.query()` Methode aufrufen zu müssen ([Firefox Bug 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}} Typ enthält nun die `origin` Eigenschaft. Dies ermöglicht es, Nachrichten oder Verbindungsanfragen zu sehen, von welcher Seite oder welchem Frame die Verbindung geöffnet wurde. Dies ist nützlich, um zu identifizieren, ob die Herkunft vertrauenswürdig ist, wenn dies nicht aus der URL ersichtlich ist ([Firefox Bug 1787379](https://bugzil.la/1787379)).
- Die `"webRequestAuthProvider"` Berechtigung wird nun unterstützt. Dies bietet Kompatibilität mit Chrome für die Anforderung der Berechtigung für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page` manifest Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssels bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox Bug 1816960](https://bugzil.la/1816960)).
- Die {{WebExtAPIRef("tabs.captureVisibleTab")}} Methode wird nun auch durch die `activeTab` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert. Dies bietet Kompatibilität mit Chrome und Safari ([Firefox Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Web-Features

Diese Funktionen werden neu in Firefox 126 geliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie diese auf `true`. Weitere solche Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Selektionen, die die Shadow DOM-Grenze überschreiten:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) Methode kann verwendet werden, um Selektionsbereiche zu erhalten, die Anker- oder Fokus-Knoten innerhalb eines Shadow DOM haben — vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben, die diese Knoten enthalten. `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls geändert, um Knoten innerhalb eines Shadow-Root zu akzeptieren ([Firefox Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}} Funktion verwenden, um Formen in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften zu definieren. Diese Funktion gibt Ihnen mehr fein abgestimmte Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}} Funktion ([Firefox Bug 1823463](https://bugzil.la/1823463) für `shape()` Funktion Unterstützung in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für `shape()` Funktion Unterstützung in `offset-path`, [Firefox Bug 1884425](https://bugzil.la/1884425) für `shape()` Interpolation Unterstützung).

## Ältere Versionen

{{Firefox_for_developers}}

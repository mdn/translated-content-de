---
title: Firefox 126 für Entwickler
short-title: Firefox 126
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Es wurde eine Option hinzugefügt, um die geteilte Konsole zu deaktivieren ([Firefox-Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernt

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, etc.) wurde standardmäßig deaktiviert. Dieses Verhalten ist im MathML Core nicht definiert und war nur als Workaround für Nicht-Math-Schriftarten notwendig. Es kann durch Setzen der `mathml.centered_operators.disabled`-Konfiguration auf `false` weiterhin aktiviert werden. ([Firefox-Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}}-Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu vergrößern oder zu verkleinern ([Firefox-Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd)-Direktive des `Content-Encoding`-HTTP-Headers wird jetzt unterstützt, was die Dekodierung von servergesendetem Inhalt ermöglicht, der mit dem {{Glossary("Zstandard_compression", "Zstandard-Kompressionsalgorithmus")}} kodiert ist ([Firefox-Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt für die Auflistung verfügbarer [IndexedDB API](/de/docs/Web/API/IndexedDB_API)-Datenbanken unterstützt ([Firefox-Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um die Transaktionshaltbarkeitsangabe abzufragen, mit der die Transaktion erstellt wurde ([Firefox-Bug 1878143](https://bugzil.la/1878143)).
- Die [`URL.parse()`](/de/docs/Web/API/URL/parse_static)-statische Methode wird nun zur Erstellung von [`URL`](/de/docs/Web/API/URL)-Objekten unterstützt. Dies gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht-auslösende Alternative zur Erstellung eines `URL`-Objekts mit dem [`URL`-Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt und ermöglicht es einer Webanwendung, anzufordern, dass der Bildschirm nicht gedimmt oder gesperrt wird, während er aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm während der Verwendung möglicherweise keine regelmäßigen physischen Eingaben erhält, die ihn normalerweise wach halten würden. Der Zugriff auf die API erfolgt über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Kontexten, was ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Damit können Sie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) anfordern, das verwendet werden kann, um den Status des Wake-Locks zu überwachen und manuell freizugeben ([Firefox-Bug 1589554](https://bugzil.la/1589554), [Firefox-Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Eigenschaften und -Methoden werden nun unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten Eigenschaften `relayProtocol` und `url`. Folgende Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:
  - Die folgenden Eigenschaften wurden als schreibgeschützt markiert: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Folgende Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox-Bug 1322186](https://bugzil.la/1322186)).

- Die [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom)-Eigenschaft ist nun schreibgeschützt und wird zur Abfrage des effektiven CSS-[zoom](/de/docs/Web/CSS/zoom) eines Elements unterstützt ([Firefox-Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mit CSS-Selektoren zu matchen, ist nun standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zur [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft eines Elements (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder davon entfernt werden können. Die CSS-[:state()](/de/docs/Web/CSS/:state)-Pseudoklasse nimmt einen benutzerdefinierten Bezeichner als Argument und matcht benutzerdefinierte Elemente, falls der Bezeichner in ihrem Satz von Zuständen vorhanden ist ([Firefox-Bug 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction)-Eigenschaft wird nun zur Anzeige der Richtung eines Bereichs unterstützt ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernt

- Die [`<marquee>` HTML-Element](/de/docs/Web/HTML/Reference/Elements/marquee)-Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) wurden aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Ereignis-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox-Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora)-Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox-Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Dem `network.addIntercept`-Befehl wurde das `contexts`-Argument hinzugefügt, um die Abfangung von Netzwerkanforderungen auf bestimmte Top-Level-Browsing-Kontext zu beschränken ([Firefox-Bug 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` lösen jetzt einen `invalid argument`-Fehler aus, wenn der Wert der Argumente `events` oder `contexts` leere Arrays sind ([Firefox-Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies`-Befehls wurde aktualisiert, um mit dem Gecko-Standard-Cookie-Verhalten in Einklang zu stehen. Dies ermöglicht das Entfernen des Nutzerwerts für die Präferenz `network.cookie.cookieBehavior`, die nur für unsere CDP-Implementierung erwartet wurde ([Firefox-Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den `browsingContext.locateNodes`-Befehl wurden entfernt, da sie nicht mehr notwendig sind ([Firefox-Bug 1884935](https://bugzil.la/1884935)).
- Die Fehlermeldung für den `session.new`-Befehl wurde verbessert, wenn keine Fähigkeiten angegeben sind ([Firefox-Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}}-Ereignis übergibt nun das `tab`-Argument an den Ereignis-Listener. Dies ermöglicht Erweiterungen, eine ausgelöste Abkürzung auf die Seite anzuwenden, auf der sie ausgegeben wurde, ohne die `tabs.query()`-Methode aufrufen zu müssen ([Firefox-Bug 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}}-Typ enthält nun die `origin`-Eigenschaft. Dies ermöglicht es, Nachrichten- oder Verbindungsanforderungen die Seite oder das Frame zu sehen, die die Verbindung geöffnet haben. Dies ist nützlich, um zu identifizieren, ob die Herkunft vertrauenswürdig ist, wenn dies aus der URL nicht ersichtlich ist ([Firefox-Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome für die Anfrage von Berechtigungen für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox-Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias für den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)-Schlüssel bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox-Bug 1816960](https://bugzil.la/1816960)).
- Die {{WebExtAPIRef("tabs.captureVisibleTab")}}-Methode wird nun auch durch die `activeTab`- [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert, was Kompatibilität mit Chrome und Safari bietet ([Firefox-Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 126, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **Auswahlen über die Grenze der Shadow DOM hinaus:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges)-Methode kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokusknoten innerhalb eines Shadow DOM haben – vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte übergeben, die diese Knoten enthalten. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so modifiziert, dass sie Knoten innerhalb eines Shadow-Roots akzeptieren ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()`-Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}}-Funktion verwenden, um Formen in den {{cssxref("clip-path")}}- und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Diese Funktion gibt Ihnen eine feinere Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}}-Funktion ([Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()`-Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der `shape()`-Funktion in `offset-path`, [Firefox-Bug 1884425](https://bugzil.la/1884425) für die Unterstützung der `shape()`-Interpolation).

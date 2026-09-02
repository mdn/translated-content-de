---
title: Firefox 126 Versionshinweise für Entwickler
short-title: Firefox 126
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 03d7663c2965d67eca296f6a27aa8a651de7dfee
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Es wurde eine Option hinzugefügt, die geteilte Konsole zu deaktivieren ([Firefox-Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, etc.) wurde standardmäßig deaktiviert. Dieses Verhalten ist nicht im MathML Core definiert und war nur als Workaround für Nicht-Math-Schriftarten nötig. Es kann weiterhin aktiviert werden, indem die Konfiguration `mathml.centered_operators.disabled` auf `false` gesetzt wird. ([Firefox-Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}}-Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und dessen Inhalt zu vergrößern oder zu verkleinern ([Firefox-Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd)-Direktive des `Content-Encoding`-HTTP-Headers wird jetzt unterstützt, wodurch das Dekodieren von servergesandten Inhalten ermöglicht wird, die mit dem {{Glossary("Zstandard_compression", "Zstandard-Kompressionsalgorithmus")}} codiert sind ([Firefox-Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt unterstützt, um verfügbare [IndexedDB-API](/de/docs/Web/API/IndexedDB_API)-Datenbanken aufzulisten ([Firefox-Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um den Hinweise auf die Transaktionsbeständigkeit abzufragen, mit der die Transaktion erstellt wurde ([Firefox-Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird jetzt unterstützt, um [`URL`](/de/docs/Web/API/URL)-Objekte zu erstellen. Diese gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren und kann daher als nicht auslösendes Alternative zur Erstellung von `URL`-Objekten mit dem [`URL`-Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt, wobei eine Webanwendung anfordern kann, dass der Bildschirm nicht abgedunkelt oder gesperrt wird, während sie aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm möglicherweise keinen regelmäßigen Toucheingaben erhält, die ihn normalerweise wach halten würden. Die API wird über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Kontexten aufgerufen, was einen [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Dies ermöglicht es Ihnen, einen [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) zu beantragen, der verwendet werden kann, um den Status der Sperre zu überwachen und diese manuell freizugeben ([Firefox-Bug 1589554](https://bugzil.la/1589554), [Firefox-Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Eigenschaften und -Methoden werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten Eigenschaften `relayProtocol` und `url`. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:
  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox-Bug 1322186](https://bugzil.la/1322186)).

- Die schreibgeschützte Eigenschaft [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) wird jetzt unterstützt, um den effektiven CSS- [zoom](/de/docs/Web/CSS/Reference/Properties/zoom) eines Elements zu erhalten ([Firefox-Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mit CSS-Selektoren abzugleichen, ist jetzt standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zur oder von der [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) des Elements hinzugefügt oder entfernt werden können. Die CSS-Pseudoklasse [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) nimmt einen benutzerdefinierten Bezeichner als Argument und gleicht benutzerdefinierte Elemente ab, wenn der Bezeichner in ihrem Satz von Zuständen vorhanden ist ([Firefox-Bug 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction)-Eigenschaft wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) des [`<marquee>` HTML-Elements](/de/docs/Web/HTML/Reference/Elements/marquee) wurden aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Ereignis-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox-Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora)-Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox-Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `contexts`-Argument wurde dem Befehl `network.addIntercept` hinzugefügt, um die Abfangung von Netzwerk-Anfragen auf bestimmte Top-Level-Browsing-Kontexte zu beschränken ([Firefox-Bug 1882260](https://bugzil.la/1882260)).
- Beide Befehle `session.subscribe` und `session.unsubscribe` werfen jetzt einen `invalid argument`-Fehler, wenn die Argumentwerte `events` oder `contexts` leere Arrays sind ([Firefox-Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des Befehls `storage.getCookies` wurde aktualisiert, um mit dem Standard-Cookie-Verhalten von Gecko übereinzustimmen. Dadurch kann der Benutzerwert für die Präferenz `network.cookie.cookieBehavior` entfernt werden, der nur für unsere CDP-Implementierung erwartet wurde ([Firefox-Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den Befehl `browsingContext.locateNodes` wurden entfernt, da sie nicht mehr notwendig sind ([Firefox-Bug 1884935](https://bugzil.la/1884935)).
- Verbessertes Fehlermeldung für den Befehl `session.new` wenn keine Fähigkeiten angegeben sind ([Firefox-Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-On-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}}-Ereignis übergibt jetzt das `tab`-Argument an den Ereignis-Listener. Dies ermöglicht es Erweiterungen, eine ausgelöste Verknüpfung auf die Seite, in der sie ausgeführt wurde, anzuwenden, ohne die Methode `tabs.query()` aufrufen zu müssen ([Firefox-Bug 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}}-Typ umfasst jetzt die Eigenschaft `origin`. Dies ermöglicht Anfragen oder Verbindungen zu sehen, welche Seite oder welches Frame die Verbindung geöffnet hat. Dies ist nützlich, um zu identifizieren, ob die Herkunft vertrauenswürdig ist, falls dies nicht aus der URL ersichtlich ist ([Firefox-Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome, um die Berechtigung für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 anzufordern ([Firefox-Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des Schlüssels [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox-Bug 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} wird jetzt auch durch die `activeTab`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert, was die Kompatibilität mit Chrome und Safari bietet ([Firefox-Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 126 implementiert, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahl über Shadow-DOM-Grenzen hinweg:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um Auswahlbereiche zu bekommen, deren Anker- oder Fokus-Knoten sich innerhalb eines Shadow DOM befinden — vorausgesetzt, es wird die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte übergeben, die diese Knoten enthalten. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls geändert, um Knoten innerhalb eines Shadow-Roots zu akzeptieren ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()`-Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}}-Funktion verwenden, um Formen in den {{cssxref("clip-path")}}- und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Diese Funktion gibt Ihnen eine feinere Kontrolle über die Formen, die Sie definieren können, und bietet einige Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}}-Funktion ([Firefox-Bug 1823463](https://bugzil.la/1823463) für Unterstützung der `shape()`-Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für Unterstützung der `shape()`-Funktion in `offset-path`, [Firefox-Bug 1884425](https://bugzil.la/1884425) für `shape()`-Interpolationsunterstützung).

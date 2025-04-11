---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, usw.) wurde standardmäßig deaktiviert. Dieses Verhalten ist im MathML-Kern nicht definiert und war nur als Workaround für Nicht-Mathematik-Schriften erforderlich. Es kann weiterhin aktiviert werden, indem die Konfiguration `mathml.centered_operators.disabled` auf `false` gesetzt wird. ([Firefox Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}}-Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seiner Inhalte zu vergrößern oder zu verkleinern ([Firefox Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd)-Direktive des `Content-Encoding`-HTTP-Headers wird jetzt unterstützt, was die Dekodierung von serverseitigem Inhalt ermöglicht, der mit dem {{Glossary("Zstandard_compression", "Zstandard-Kompressionsalgorithmus")}} codiert wurde ([Firefox Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird nun unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API)-Datenbanken aufzulisten ([Firefox Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um den Dauerhaftigkeitshinweis der Transaktion abzufragen, mit dem die Transaktion erstellt wurde ([Firefox Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird jetzt zum Erstellen von [`URL`](/de/docs/Web/API/URL)-Objekten unterstützt. Sie gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht-werfende Alternative zur Erstellung eines `URL`-Objekts mit dem [`URL`-Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt. Dadurch kann eine Webanwendung anfordern, dass der Bildschirm während der Nutzung nicht gedimmt oder gesperrt wird. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm nicht regelmäßig taktil bedient wird, um ihn wach zu halten. Der Zugriff auf die API erfolgt über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Kontexten, was ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Damit können Sie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) anfordern, mit dem der Status des Wachhaltelocks überwacht und manuell freigegeben werden kann ([Firefox Bug 1589554](https://bugzil.la/1589554), [Firefox Bug 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Eigenschaften und -Methoden werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten `relayProtocol`- und `url`-Eigenschaften. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:

  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox Bug 1322186](https://bugzil.la/1322186)).

- Die [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom)-Eigenschaft ist jetzt schreibgeschützt verfügbar, um den effektiven CSS-[zoom](/de/docs/Web/CSS/zoom) eines Elements zu erhalten ([Firefox Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mithilfe von CSS-Selektoren zu matchen, ist jetzt standardmäßig verfügbar. Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zur [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) eines Elements hinzugefügt oder daraus entfernt werden können. Die CSS-[`:state()`](/de/docs/Web/CSS/:state)-Pseudo-Klasse nimmt einen benutzerdefinierten Bezeichner als Argument und matched benutzerdefinierte Elemente, wenn der Bezeichner in ihrem Zustandssatz vorhanden ist ([Firefox Bug 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction)-Eigenschaft wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web-Audio

##### Entfernungen

- Die Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) des [`<marquee>`-HTML-Elements](/de/docs/Web/HTML/Reference/Elements/marquee) wurden aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Event-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora)-Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `contexts`-Parameter wurde dem `network.addIntercept`-Befehl hinzugefügt, um die Abfangung von Netzwerk-Anfragen auf bestimmte oberste Browsing-Kontexte zu beschränken ([Firefox Bug 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` lösen jetzt einen `invalid argument`-Fehler aus, wenn der Wert der Argumente `events` oder `contexts` leere Arrays sind ([Firefox Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies`-Befehls wurde aktualisiert, um mit dem Standard-Cookie-Verhalten von Gecko übereinzustimmen. Dadurch kann der Benutzerwert für die Präferenz `network.cookie.cookieBehavior` entfernt werden, der nur für unsere CDP-Implementierung erwartet wurde ([Firefox Bug 1879503](https://bugzil.la/1879503)).
- Die `ownership`- und `sandbox`-Argumente für den `browsingContext.locateNodes`-Befehl wurden entfernt, da sie nicht mehr erforderlich sind ([Firefox Bug 1884935](https://bugzil.la/1884935)).
- Verbesserte Fehlermeldungen für den `session.new`-Befehl, wenn keine Fähigkeiten angegeben sind ([Firefox Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}}-Ereignis übergibt jetzt das `tab`-Argument an den Ereignis-Listener. Dadurch können Erweiterungen eine ausgelöste Verknüpfung auf die Seite anwenden, auf der sie ausgeführt wurde, ohne dass die Methode `tabs.query()` aufgerufen werden muss ([Firefox Bug 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}}-Typ umfasst jetzt die Eigenschaft `origin`. Dadurch können Nachrichten- oder Verbindungsanfragen die Seite oder den Frame sehen, der die Verbindung geöffnet hat. Dies ist nützlich, um zu erkennen, ob die Herkunft vertrauenswürdig ist, wenn dies nicht aus der URL ersichtlich ist ([Firefox Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome für das Anfordern von Berechtigungen für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox Bug 1820569](https://bugzil.la/1820569)).
- Der [`options_page`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)-Schlüssels bereitgestellt. Dies wurde eingeführt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox Bug 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} ist jetzt auch durch die `activeTab`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert, um Kompatibilität mit Chrome und Safari zu bieten ([Firefox Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 126 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Präferenz und setzen Sie diese auf `true`. Weitere solche Features finden Sie auf der [Seite Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahlen, die die Grenze des Shadow DOM überschreiten:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokus-Knoten innerhalb eines Shadow DOM enthalten – vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte übergeben, die diese Knoten enthalten. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so angepasst, dass sie Knoten innerhalb eines Shadow Root akzeptieren ([Firefox Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()`-Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}}-Funktion verwenden, um Formen in den {{cssxref("clip-path")}}- und {{cssxref("offset-path")}}-Eigenschaften zu definieren. Diese Funktion bietet Ihnen eine feinere Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}}-Funktion ([Firefox Bug 1823463](https://bugzil.la/1823463) für `shape()`-Unterstützung in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für `shape()`-Unterstützung in `offset-path`, [Firefox Bug 1884425](https://bugzil.la/1884425) für `shape()`-Interpolationsunterstützung).

## Ältere Versionen

{{Firefox_for_developers}}

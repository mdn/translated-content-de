---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox Fehler 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, <, etc.) wurde standardmäßig deaktiviert. Dieses Verhalten ist nicht im MathML Core definiert und war nur als Workaround für Nicht-Mathematik-Schriftarten nötig. Es kann weiterhin aktiviert werden, indem die Konfiguration `mathml.centered_operators.disabled` auf `false` gesetzt wird. ([Firefox Fehler 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}} Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu vergrößern oder zu verkleinern ([Firefox Fehler 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd) Direktive des `Content-Encoding` HTTP-Headers wird jetzt unterstützt, was das Dekodieren von serverseitig gesendeten Inhalten ermöglicht, die mit dem {{Glossary("Zstandard_compression", "Zstandard-Kompressionsalgorithmus")}} kodiert sind ([Firefox Fehler 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API) Datenbanken aufzulisten ([Firefox Fehler 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um den Transaktionsbeständigkeitshinweis abzufragen, mit dem die Transaktion erstellt wurde ([Firefox Fehler 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird jetzt unterstützt, um [`URL`](/de/docs/Web/API/URL) Objekte zu erstellen. Diese gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht auslösendes Alternativ zu der Erstellung eines `URL` Objekts mit dem [`URL` Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox Fehler 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt, was einer Webanwendung ermöglicht, anzufordern, dass der Bildschirm nicht abgedunkelt oder gesperrt wird, während sie aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm beim Gebrauch möglicherweise keine regulären taktilen Eingaben erhält, die ihn normalerweise wach halten würden. Auf die API kann über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Kontexten zugegriffen werden, was ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Dies ermöglicht Ihnen, ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) anzufordern, das verwendet werden kann, um den Status der Wachsamkeitssperre zu überwachen und sie manuell zu lösen ([Firefox Fehler 1589554](https://bugzil.la/1589554), [Firefox Fehler 1874849](https://bugzil.la/1874849)).
- Alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Eigenschaften und Methoden werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht umgesetzten `relayProtocol` und `url` Eigenschaften. Die folgenden Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:
  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Folgende Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox Fehler 1322186](https://bugzil.la/1322186)).

- Die Lese-Schreib Eigenschaft [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) wird jetzt unterstützt, um das effektive CSS [zoom](/de/docs/Web/CSS/zoom) eines Elements zu erhalten ([Firefox Fehler 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Fähigkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mit CSS-Selektoren zu matchen, ist jetzt standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die zu der [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft eines Elements (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder von ihr entfernt werden können. Die CSS Pseudoklasse [`:state()`](/de/docs/Web/CSS/:state) nimmt einen benutzerdefinierten Bezeichner als Argument und matcht benutzerdefinierte Elemente, wenn der Bezeichner in ihrem Satz von Zuständen vorhanden ist ([Firefox Fehler 1887543](https://bugzil.la/1887543)).
- Die [`Selection.direction`](/de/docs/Web/API/Selection/direction) Eigenschaft wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox Fehler 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC, und Web Audio

##### Entfernungen

- Die Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish), und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) des [`<marquee>` HTML-Elements](/de/docs/Web/HTML/Reference/Elements/marquee) wurden aus dem [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Ereignis-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) ([Firefox Fehler 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora) Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox Fehler 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `contexts` Argument wurde dem `network.addIntercept` Befehl hinzugefügt, um das Abfangen von Netzwerkanforderungen auf bestimmte Top-Level-Browsing-Kontexte zu beschränken ([Firefox Fehler 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` werfen jetzt einen `ungültiges Argument` Fehler, wenn der Wert der Argumente `events` oder `contexts` leere Arrays sind ([Firefox Fehler 1887871](https://bugzil.la/1887871)).
- Die Implementierung des `storage.getCookies` Befehls wurde aktualisiert, um sich dem Gecko-Standard-Cookie-Verhalten anzupassen. Dadurch wird das Entfernen des Benutzereintrags für die Einstellung `network.cookie.cookieBehavior` ermöglicht, der nur für unsere CDP-Implementierung erwartet wurde ([Firefox Fehler 1879503](https://bugzil.la/1879503)).
- Die `ownership` und `sandbox` Argumente für den `browsingContext.locateNodes` Befehl wurden entfernt, da sie nicht mehr notwendig sind ([Firefox Fehler 1884935](https://bugzil.la/1884935)).
- Verbesserte Fehlermeldung für den `session.new` Befehl, wenn keine Fähigkeiten angegeben sind ([Firefox Fehler 1838152](https://bugzil.la/1838152)).

## Änderungen für Erweiterungsentwickler

- Das {{WebExtAPIRef("commands.onCommand")}} Ereignis übergibt jetzt das `tab` Argument an den Ereignis-Listener. Damit können Erweiterungen ein ausgelöstes Kürzel auf die Seite anwenden, in der es ausgeführt wurde, ohne die Methode `tabs.query()` aufrufen zu müssen ([Firefox Fehler 1843866](https://bugzil.la/1843866)).
- Der {{WebExtAPIRef("runtime.MessageSender")}} Typ enthält jetzt die `origin` Eigenschaft. Dies ermöglicht Nachrichten- oder Verbindungsanfragen, die Seite oder den Frame zu sehen, der die Verbindung geöffnet hat. Dies ist nützlich, um zu überprüfen, ob der Ursprung vertrauenswürdig ist, wenn dies nicht aus der URL ersichtlich ist ([Firefox Fehler 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird nun unterstützt. Dies bietet Kompatibilität mit Chrome für die Anforderung der Berechtigung für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox Fehler 1820569](https://bugzil.la/1820569)).
- Der [`options_page` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssels angeboten. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox Fehler 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} ist jetzt auch durch die `activeTab` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert und bietet damit Kompatibilität mit Chrome und Safari ([Firefox Fehler 1784920](https://bugzil.la/1784920)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 126 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Seite mit experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahlen über die Shadow-DOM-Grenze hinweg:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um Auswahlbereiche zu erhalten, deren Anker- oder Fokus-Knoten innerhalb eines Shadow DOMs liegen — vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte übergeben, die diese Knoten enthalten. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse), und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so modifiziert, dass sie Knoten innerhalb eines Shadow-Roots akzeptieren ([Firefox Fehler 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die {{cssxref("basic-shape/shape","shape()")}} Funktion verwenden, um Formen in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Diese Funktion gibt Ihnen eine feinere Kontrolle über die zu definierenden Formen und bietet mehrere Vorteile gegenüber der {{cssxref("basic-shape/path","path()")}} Funktion ([Firefox Fehler 1823463](https://bugzil.la/1823463) für `shape()` Funktionsunterstützung in `clip-path`, [Firefox Fehler 1884424](https://bugzil.la/1884424) für `shape()` Funktionsunterstützung in `offset-path`, [Firefox Fehler 1884425](https://bugzil.la/1884425) für `shape()` Interpolationsunterstützung).

## Ältere Versionen

{{Firefox_for_developers}}

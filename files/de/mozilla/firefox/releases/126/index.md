---
title: Firefox 126 für Entwickler
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 3015891c7bd9fd9a8e11521b59ae674d6d5b1b7a
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 126, die Entwickler betreffen. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox-Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung für vertikal zentrierte Operatoren (+, =, < usw.) wurde standardmäßig deaktiviert. Dieses Verhalten ist im MathML-Core nicht definiert und war nur als Workaround für Nicht-Mathematik-Schriften erforderlich. Es kann weiterhin aktiviert werden, indem die Konfiguration `mathml.centered_operators.disabled` auf `false` gesetzt wird. ([Firefox-Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die {{cssxref("zoom")}}-Eigenschaft wird jetzt unterstützt. Sie kann verwendet werden, um die Größe eines Elements und seines Inhalts zu erhöhen oder zu verringern ([Firefox-Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die [`zstd`](/de/docs/Web/HTTP/Headers/Content-Encoding#zstd)-Direktive des `Content-Encoding`-HTTP-Headers wird jetzt unterstützt, was die Dekodierung von vom Server gesendeten Inhalten ermöglicht, die mit dem [Zstandard-Kompressionsalgorithmus](/de/docs/Glossary/Zstandard_compression) kodiert sind ([Firefox-Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt unterstützt, um verfügbare [IndexedDB API](/de/docs/Web/API/IndexedDB_API)-Datenbanken aufzulisten ([Firefox-Bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) kann jetzt verwendet werden, um den Haltbarkeitshinweis der Transaktion abzufragen, mit dem die Transaktion erstellt wurde ([Firefox-Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) wird jetzt unterstützt, um [`URL`](/de/docs/Web/API/URL)-Objekte zu erstellen. Dies gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren, und kann daher als nicht werfende Alternative zur Erstellung eines `URL`-Objekts mit dem [`URL`-Konstruktor](/de/docs/Web/API/URL/URL) verwendet werden ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt, sodass eine Webanwendung verlangen kann, dass der Bildschirm nicht gedimmt oder gesperrt wird, während sie aktiv ist. Dies ist besonders nützlich für Navigations- und Leseanwendungen sowie andere Anwendungen, bei denen der Bildschirm möglicherweise keine regelmäßige taktile Eingabe erhält, die ihn normalerweise wach hält. Die API wird durch [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock) in sicheren Kontexten abgerufen, was ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Dies ermöglicht es Ihnen, ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) anzufordern, das verwendet werden kann, um den Status des Wake Lock zu überwachen und ihn manuell freizugeben ([Firefox-Bug 1589554](https://bugzil.la/1589554), [Firefox-Bug 1874849](https://bugzil.la/1874849)).
- Alle Eigenschaften und Methoden von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der nicht implementierten `relayProtocol`- und `url`-Eigenschaften. Folgende Änderungen wurden an den Eigenschaften von `RTCIceCandidate` vorgenommen:

  - Die folgenden Eigenschaften wurden schreibgeschützt gemacht: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox-Bug 1322186](https://bugzil.la/1322186)).

- Die schreibgeschützte Eigenschaft [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) wird jetzt unterstützt, um den effektiven CSS-[zoom](/de/docs/Web/CSS/zoom) eines Elements zu erhalten ([Firefox-Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Die Möglichkeit, Zustände für benutzerdefinierte Elemente zu definieren und sie mit CSS-Selektoren zu matchen, ist jetzt standardmäßig verfügbar.
  Die benutzerdefinierten Zustände werden als benutzerdefinierte Bezeichner dargestellt, die dem [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft des Elements (ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder daraus entfernt werden können. Die CSS-Pseudoklasse [`:state()`](/de/docs/Web/CSS/:state) nimmt einen benutzerdefinierten Bezeichner als Argument und matched benutzerdefinierte Elemente, wenn der Bezeichner in ihrer Menge von Zuständen vorhanden ist ([Firefox-Bug 1887543](https://bugzil.la/1887543)).
- Die Eigenschaft [`Selection.direction`](/de/docs/Web/API/Selection/direction) wird jetzt unterstützt, um die Richtung eines Bereichs anzuzeigen ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die Marquee-Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) wurden aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt, zusammen mit den entsprechenden [Ereignis-Handler-Attributen](/de/docs/Web/HTML/Element/marquee#event_handlers), die auf dem [`<marquee>` HTML-Element](/de/docs/Web/HTML/Element/marquee) definiert sind ([Firefox-Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Formats/Video_codecs#theora)-Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox-Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Dem Befehl `network.addIntercept` wurde das Argument `contexts` hinzugefügt, um die Abfangung von Netzwerk-Anfragen auf bestimmte Top-Level-Browsing-Kontexte zu beschränken ([Firefox-Bug 1882260](https://bugzil.la/1882260)).
- Sowohl die Befehle `session.subscribe` als auch `session.unsubscribe` werfen jetzt einen `invalid argument`-Fehler, wenn die Werte der Argumente `events` oder `contexts` leere Arrays sind ([Firefox-Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des Befehls `storage.getCookies` wurde aktualisiert, um mit dem Standard-Cookie-Verhalten von Gecko übereinzustimmen. Dies ermöglicht das Entfernen des Benutzerwertes für die Präferenz `network.cookie.cookieBehavior`, die nur erwartet wurde, um für unsere CDP-Implementierung eingestellt zu werden ([Firefox-Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` für den Befehl `browsingContext.locateNodes` wurden entfernt, da sie nicht mehr notwendig sind ([Firefox-Bug 1884935](https://bugzil.la/1884935)).
- Verbesserte Fehlermeldung für den Befehl `session.new`, wenn keine Fähigkeiten angegeben sind ([Firefox-Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("commands.onCommand")}}-Ereignis übergibt jetzt das `tab`-Argument an den Ereignis-Listener. Dies ermöglicht es Erweiterungen, eine ausgelöste Verknüpfung auf die Seite anzuwenden, auf der sie ausgelöst wurde, ohne die Methode `tabs.query()` aufrufen zu müssen ([Firefox-Bug 1843866](https://bugzil.la/1843866)).
- Der Typ {{WebExtAPIRef("runtime.MessageSender")}} enthält jetzt die Eigenschaft `origin`. Dies ermöglicht Nachrichten- oder Verbindungsanforderungen die Seite oder das Frame zu sehen, das die Verbindung geöffnet hat. Dies ist nützlich, um festzustellen, ob dem Ursprung vertraut werden kann, wenn dies nicht offensichtlich aus der URL hervorgeht ([Firefox-Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dies bietet Kompatibilität mit Chrome für das Anfordern von Berechtigungen für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox-Bug 1820569](https://bugzil.la/1820569)).
- Der Manifest-Schlüssel [`options_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) wird als Alias des Schlüssels [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) bereitgestellt. Dies wurde bereitgestellt, um Erweiterungen eine bessere Kompatibilität mit Chrome zu bieten ([Firefox-Bug 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} wird jetzt auch durch die `activeTab`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) aktiviert, was Kompatibilität mit Chrome und Safari bietet ([Firefox-Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 126, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahlen über die Grenze des Shadow DOM hinweg:** `dom.shadowdom.selection_across_boundary.enabled`.

  Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um Auswahlbereiche zu erhalten, die Anker- oder Fokus-Knoten innerhalb eines Shadow DOM haben – vorausgesetzt, es werden die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte übergeben, die diese Knoten enthalten. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls geändert, um Knoten innerhalb eines Shadow Root zu akzeptieren ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()`-Funktion:** `layout.css.basic-shape-shape.enabled`.

  Sie können die [`shape()`](/de/docs/Web/CSS/basic-shape/shape)-Funktion verwenden, um Formen in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} zu definieren. Diese Funktion gibt Ihnen eine feinere Kontrolle über die Formen, die Sie definieren können, und bietet mehrere Vorteile gegenüber der `{{cssxref("path","path()")}}`-Funktion ([Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()`-Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der `shape()`-Funktion in `offset-path`, [Firefox-Bug 1884425](https://bugzil.la/1884425) für die `shape()`-Interpolation-Unterstützung).

## Ältere Versionen

{{Firefox_for_developers}}

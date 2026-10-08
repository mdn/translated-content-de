---
title: Firefox 126 – Versionshinweise für Entwickler
short-title: Firefox 126
slug: Mozilla/Firefox/Releases/126
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Dieser Artikel informiert über Änderungen in Firefox 126, die für Entwickler relevant sind. Firefox 126 wurde am [14. Mai 2024](https://whattrainisitnow.com/release/?version=126) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine Option zum Deaktivieren der geteilten Konsole wurde hinzugefügt ([Firefox-Bug 1731635](https://bugzil.la/1731635)).

### HTML

Keine nennenswerten Änderungen.

### MathML

#### Entfernungen

- Die automatische Anpassung vertikal zentrierter Operatoren (+, =, < usw.) ist standardmäßig deaktiviert. Dieses Verhalten ist in MathML Core nicht definiert und war nur als Behelf für Schriftarten ohne mathematische Zeichen erforderlich. Es kann weiterhin aktiviert werden, indem die Konfigurationseinstellung `mathml.centered_operators.disabled` auf `false` gesetzt wird ([Firefox-Bug 1890531](https://bugzil.la/1890531)).

### CSS

- Die Eigenschaft {{cssxref("zoom")}} wird jetzt unterstützt. Mit ihr lässt sich ein Element samt Inhalt vergrößern oder verkleinern ([Firefox-Bug 390936](https://bugzil.la/390936)).

### JavaScript

Keine nennenswerten Änderungen.

### HTTP

- Die Direktive [`zstd`](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding#zstd) des HTTP-Headers `Content-Encoding` wird jetzt unterstützt. Damit können vom Server gesendete Inhalte dekodiert werden, die mit dem Algorithmus {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} kodiert wurden ([Firefox-Bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases) wird jetzt unterstützt und ermöglicht es, verfügbare Datenbanken der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) aufzulisten ([Firefox-Bug 934640](https://bugzil.la/934640)).
- Mit [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) lässt sich jetzt der Durability-Hinweis abfragen, mit dem die Transaktion erstellt wurde ([Firefox-Bug 1878143](https://bugzil.la/1878143)).
- Die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) zum Erstellen von [`URL`](/de/docs/Web/API/URL)-Objekten wird jetzt unterstützt. Sie gibt `null` zurück, wenn die übergebenen Parameter keine gültige `URL` definieren. Damit bietet sie eine Alternative zum Erstellen eines `URL`-Objekts mit dem [`URL`-Konstruktor](/de/docs/Web/API/URL/URL), die bei ungültigen Eingaben keine Ausnahme auslöst ([Firefox-Bug 1823354](https://bugzil.la/1823354)).
- Die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) wird jetzt unterstützt. Mit ihr kann eine Webanwendung anfordern, dass der Bildschirm während ihrer Nutzung weder abgedunkelt noch gesperrt wird. Dies ist insbesondere für Navigations- und Leseanwendungen sowie für andere Anwendungen nützlich, bei denen während der Nutzung möglicherweise keine regelmäßigen Berührungen des Bildschirms erfolgen, die ihn normalerweise aktiv halten würden. In sicheren Kontexten erfolgt der Zugriff auf die API über [`Navigator.wakeLock`](/de/docs/Web/API/Navigator/wakeLock), das ein [`WakeLock`](/de/docs/Web/API/WakeLock) zurückgibt. Damit können Sie ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) anfordern, um den Status des Wake Locks zu überwachen und ihn manuell freizugeben ([Firefox-Bug 1589554](https://bugzil.la/1589554), [Firefox-Bug 1874849](https://bugzil.la/1874849)).
- Alle Eigenschaften und Methoden von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) werden jetzt unterstützt und entsprechen der Spezifikation, mit Ausnahme der noch nicht implementierten Eigenschaften `relayProtocol` und `url`. An den Eigenschaften von `RTCIceCandidate` wurden folgende Änderungen vorgenommen:
  - Die folgenden Eigenschaften sind jetzt schreibgeschützt: [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
  - Die folgenden Eigenschaften wurden hinzugefügt: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox-Bug 1322186](https://bugzil.la/1322186)).

- Die schreibgeschützte Eigenschaft [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) wird jetzt unterstützt. Mit ihr lässt sich der effektive CSS-[Zoomfaktor](/de/docs/Web/CSS/Reference/Properties/zoom) eines Elements ermitteln ([Firefox-Bug 1880189](https://bugzil.la/1880189)).

#### DOM

- Das Definieren von Zuständen für Custom Elements und deren Auswahl mithilfe von CSS-Selektoren ist jetzt standardmäßig verfügbar.
  Benutzerdefinierte Zustände werden durch benutzerdefinierte Bezeichner dargestellt, die der Eigenschaft [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) des Elements (einem [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)) hinzugefügt oder daraus entfernt werden können. Die CSS-Pseudoklasse [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) nimmt einen benutzerdefinierten Bezeichner als Argument entgegen und wählt Custom Elements aus, wenn dieser Bezeichner in ihrer Zustandsmenge enthalten ist ([Firefox-Bug 1887543](https://bugzil.la/1887543)).
- Die Eigenschaft [`Selection.direction`](/de/docs/Web/API/Selection/direction) zur Angabe der Richtung eines Bereichs wird jetzt unterstützt ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

#### Medien, WebRTC und Web Audio

##### Entfernungen

- Die Ereignisse [`bounce`](/de/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/de/docs/Web/API/HTMLMarqueeElement#finish) und [`start`](/de/docs/Web/API/HTMLMarqueeElement#start) des [HTML-Elements `<marquee>`](/de/docs/Web/HTML/Reference/Elements/marquee) wurden zusammen mit den entsprechenden [Event-Handler-Attributen](/de/docs/Web/API/HTMLMarqueeElement#events) aus [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) entfernt ([Firefox-Bug 1689705](https://bugzil.la/1689705)).
- Der [Theora](/de/docs/Web/Media/Guides/Formats/Video_codecs#theora)-Codec wurde standardmäßig deaktiviert und wird in einer zukünftigen Version entfernt ([Firefox-Bug 1860492](https://bugzil.la/1860492)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Dem Befehl `network.addIntercept` wurde das Argument `contexts` hinzugefügt, um das Abfangen von Netzwerkanfragen auf bestimmte Browsing-Kontexte der obersten Ebene zu beschränken ([Firefox-Bug 1882260](https://bugzil.la/1882260)).
- Die Befehle `session.subscribe` und `session.unsubscribe` lösen jetzt einen Fehler vom Typ `invalid argument` aus, wenn die Argumente `events` oder `contexts` leere Arrays enthalten ([Firefox-Bug 1887871](https://bugzil.la/1887871)).
- Die Implementierung des Befehls `storage.getCookies` wurde an das standardmäßige Cookie-Verhalten von Gecko angepasst. Dadurch kann der benutzerdefinierte Wert für die Einstellung `network.cookie.cookieBehavior` entfernt werden, der nur für unsere CDP-Implementierung vorgesehen war ([Firefox-Bug 1879503](https://bugzil.la/1879503)).
- Die Argumente `ownership` und `sandbox` wurden aus dem Befehl `browsingContext.locateNodes` entfernt, da sie nicht mehr benötigt werden ([Firefox-Bug 1884935](https://bugzil.la/1884935)).
- Die Fehlermeldung des Befehls `session.new` wurde verbessert, wenn keine Capabilities angegeben werden ([Firefox-Bug 1838152](https://bugzil.la/1838152)).

## Änderungen für Add-on-Entwickler

- Das Ereignis {{WebExtAPIRef("commands.onCommand")}} übergibt jetzt das Argument `tab` an den Event Listener. Dadurch können Erweiterungen einen ausgelösten Tastaturkurzbefehl auf die Seite anwenden, auf der er ausgelöst wurde, ohne die Methode `tabs.query()` aufrufen zu müssen ([Firefox-Bug 1843866](https://bugzil.la/1843866)).
- Der Typ {{WebExtAPIRef("runtime.MessageSender")}} enthält jetzt die Eigenschaft `origin`. Damit lässt sich bei Nachrichten- oder Verbindungsanfragen erkennen, welche Seite oder welcher Frame die Verbindung geöffnet hat. Das ist nützlich, um zu prüfen, ob die Herkunft vertrauenswürdig ist, wenn dies aus der URL nicht hervorgeht ([Firefox-Bug 1787379](https://bugzil.la/1787379)).
- Die Berechtigung `"webRequestAuthProvider"` wird jetzt unterstützt. Dadurch wird bei der Anforderung der Berechtigung für {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 Kompatibilität mit Chrome hergestellt ([Firefox-Bug 1820569](https://bugzil.la/1820569)).
- Der [Manifest-Schlüssel `options_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) steht als Alias für den Schlüssel [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zur Verfügung. Dies verbessert die Kompatibilität von Erweiterungen mit Chrome ([Firefox-Bug 1816960](https://bugzil.la/1816960)).
- Die Methode {{WebExtAPIRef("tabs.captureVisibleTab")}} kann jetzt auch mit der [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) verwendet werden. Dies stellt Kompatibilität mit Chrome und Safari her ([Firefox-Bug 1784920](https://bugzil.la/1784920)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 126 neu verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Auswahlbereiche über Shadow-DOM-Grenzen hinweg:** `dom.shadowdom.selection_across_boundary.enabled`.

  Mit der Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) lassen sich Auswahlbereiche abrufen, deren Anker- oder Fokus-Knoten innerhalb eines Shadow DOM liegen – vorausgesetzt, die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte, die diese Knoten enthalten, werden der Methode übergeben. Die `Selection`-Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so geändert, dass sie Knoten innerhalb einer Shadow Root akzeptieren ([Firefox-Bug 1867058](https://bugzil.la/1867058)).

- **CSS-Funktion `shape()`:** `layout.css.basic-shape-shape.enabled`.

  Mit der Funktion {{cssxref("basic-shape/shape","shape()")}} können Sie Formen für die Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} definieren. Diese Funktion ermöglicht eine genauere Steuerung der definierten Formen und bietet mehrere Vorteile gegenüber der Funktion {{cssxref("basic-shape/path","path()")}} ([Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung von `shape()` in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung von `shape()` in `offset-path`, [Firefox-Bug 1884425](https://bugzil.la/1884425) für die Unterstützung der Interpolation von `shape()`).

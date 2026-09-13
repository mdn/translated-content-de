---
title: Firefox 153 Versionshinweise für Entwickler
short-title: Firefox 153
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

Dieser Artikel informiert über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 wurde am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Entwicklerwerkzeuge zeigen jetzt die Überschriftenebene für ein Überschrifts-Element im Zugänglichkeits-Highlighter und im Zugänglichkeitsbaum an (zuvor wurde nur die Tatsache angezeigt, dass es sich um eine Überschrift handelt).
  Die Information ist im [Panel des Zugänglichkeitsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) zu finden.
  ([Firefox Bug 1588784](https://bugzil.la/1588784) und [Firefox Bug 2044904](https://bugzil.la/2044904)).

### HTML

- Die HTML-Parsing-Regeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, um alle verschachtelten Elemente im DOM zu parsen und nicht nur `<option>`, `<optgroup>` und `<hr>`.
  Dies ermöglicht eine mögliche zukünftige Unterstützung von [anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([Firefox Bug 2019977](https://bugzil.la/2019977)).
- Das `muted` Attribut für die {{htmlelement("audio", "", "#muted")}} und {{htmlelement("video", "", "#muted")}} Elemente wurde aktualisiert, um zu reflektieren, wann es dem DOM hinzugefügt oder daraus entfernt wird. Dieses Attribut entspricht jetzt auch dem Zustand der {{cssxref(":muted")}} CSS-Pseudoklasse.
  ([Firefox Bug 2037015](https://bugzil.la/2037015)).

### CSS

- Der Selektor des Pseudoelements {{cssxref("::-webkit-scrollbar")}} wird jetzt erkannt, sodass die Überprüfung `@supports selector(::-webkit-scrollbar)` `true` zurückgibt. Beachten Sie, dass dieser Selektor als unterstützt gemeldet wird, obwohl das Styling von Scrollleisten über `::-webkit-scrollbar` nicht wirklich implementiert ist. Dies wurde hinzugefügt, um ein Problem zu beheben, bei dem Scrollleisten in verschachtelten scrollbaren Bereichen übereinander gestapelt werden könnten. Zum Beispiel, wenn eine Scrollleiste auf `display: none` oder `width: 0` gesetzt ist und so einige Inhalte unerreichbar macht. ([Firefox Bug 2038877](https://bugzil.la/2038877)).

### JavaScript

- Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
  Dazu gehören alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox Bug 2037069](https://bugzil.la/2037069)).
- Die statische Daten-Eigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl von Stack-Frames festzulegen oder abzurufen, die in einem Fehler-Stack-Trace erfasst werden.
  Eine kleinere Einstellung als der Standardwert kann die Leistung verbessern.
  ([Firefox Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt in einen String importiert werden, indem [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) verwendet wird.
  Im Gegensatz zu JavaScript- oder CSS-Modulen wird der Medientyp der Antwort ignoriert, und der Inhalt wird als Text geparst, selbst wenn die Datei Skripte oder anderen ausführbaren Code enthält.
  ([Firefox Bug 2039881](https://bugzil.la/2039881)).
- Die Syntax [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) (Teil des [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) Vorschlags) wird jetzt unterstützt.
  Es ist ähnlich wie die normale [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration, statt jedoch ein Modul zu laden und zu evaluieren, wird ein Objekt erzeugt, das den Quellcode des Moduls repräsentiert und später ausgewertet werden kann.
  Beachten Sie, dass diese Funktion für Entwickler noch nicht nützlich ist, da derzeit nur die Syntax unterstützt wird: Die Quellcode-Darstellung von WebAssembly-Modulen wird separat implementiert und ist noch nicht verfügbar.
  ([Firefox Bug 2043242](https://bugzil.la/2043242)).

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese rufen alle (oder eine bestimmte Teilmenge von) Datensätzen aus einem Objektstore bzw. Index ab.
  ([Firefox Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies bietet eine bequeme Möglichkeit für Websites, die Anzeige eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem schwebenden Always-on-Top-Videofenster umzuschalten, sodass Nutzer weiterhin zuschauen können, während sie mit anderen Websites oder Anwendungen interagieren.
  ([Firefox Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover API](/de/docs/Web/API/Popover_API) hat nun ein konsistenteres Verhalten, wenn [`Hinweis- und `auto` Popovers geöffnet und geschlossen](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules) werden.
  Dies folgt dem Spezifikationsupdate in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) erhält die Zertifikate, die von dem entfernten Peer verwendet werden, um die DTLS-Kommunikation abzusichern.
  Diese können für die Authentifizierung auf Anwendungsebene eines entfernten Peers genutzt werden.
  ([Firefox Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle akzeptieren jetzt den `"webrtc"` Konfigurationstyp.
  Dadurch kann eine Site abfragen, ob eine gegebene Audio- oder Videokonfiguration mithilfe von WebRTC dekodiert oder kodiert werden kann und ob dies reibungslos, energieeffizient oder beides durchgeführt wird.
  Die Unterstützung für den nicht-standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wurde entfernt.
  ([Firefox Bug 2037610](https://bugzil.la/2037610) und [Firefox Bug 2032075](https://bugzil.la/2032075)).
- Alle obligatorischen und einige optionale WebRTC "Transport"-Statistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden.
  Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type).
  Zusätzlich ist die `transportId`-Eigenschaft jetzt verfügbar in [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId).
  ([Firefox Bug 1225723](https://bugzil.la/1225723) und [Firefox Bug 2019389](https://bugzil.la/2019389)).

### WebAssembly

- Die Integration von JavaScript-Promises (JS-PI) ist jetzt aktiviert, was es [WebAssembly](/de/docs/WebAssembly) Modulen ermöglicht, mit asynchronen, auf {{jsxref("Promise")}}-basierenden JavaScript-APIs zusammenzuarbeiten. Dies erlaubt es, dass WebAssembly-Code pausiert, während auf ein JavaScript-Promise gewartet wird, und fortgesetzt wird, wenn das Promise erfüllt wird. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox Bug 2044809](https://bugzil.la/2044809)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte die Kommandos zur Fenster-Manipulation in Marionette und WebDriver BiDi, um es zu ermöglichen, einzelne Fenstergeometrie-Eigenschaften wie x, y, Breite und Höhe unabhängig voneinander anzupassen. ([Firefox Bug 1941404](https://bugzil.la/1941404)).
- Ein Fehler wurde behoben, bei dem Klick- und Zeigeraktionskommandos fehlschlagen konnten, wenn das erste `DOMRect` des Elements (z. B. Inline-Elemente, die sich über mehrere Zeilen erstrecken) eine Größe von Null hatte. ([Firefox Bug 2038932](https://bugzil.la/2038932)).
- Eingeschränkte Navigation zu privilegierten Seiten (bestimmte `about:*` Seiten, `chrome://`, und `resource://` URLs) beim Arbeiten im Inhaltsbereich. ([Firefox Bug 1579790](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Das Kommando `emulation.setLocaleOverride` wurde erweitert, um auch eine Locale-Emulation auf dedizierte und geteilte Worker anzuwenden. ([Firefox Bug 2015655](https://bugzil.la/2015655)).
- Das Kommando `emulation.setTimezoneOverride` wurde erweitert, um auch eine Zeitzonen-Emulation auf dedizierte und geteilte Worker anzuwenden. ([Firefox Bug 2015657](https://bugzil.la/2015657)).
- Das Kommando `browsingContext.create` wurde aktualisiert, sodass `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse nicht mehr für die initiale `about:blank` Seite ausgegeben werden, wenn neue übergeordnete Browsing-Kontexte erstellt werden. Das `browsingContext.contextCreated` Ereignis wird jetzt am Ende des Erstellungsprozesses ausgegeben. ([Firefox Bug 1930594](https://bugzil.la/1930594)).
- Ein Fehler wurde behoben, bei dem Funktionen, die durch das Kommando `script.addPreloadScript` erstellt wurden, nach mehreren Navigationen möglicherweise nicht mehr funktionierten. ([Firefox Bug 2046390](https://bugzil.la/2046390)).

#### Marionette

- Das `Take Element Screenshot` Kommando aus dem WebDriver Classic wurde behoben, um Screenshots von Elementen, die den Viewport überschreiten, zuzuschneiden. ([Firefox Bug 2013176](https://bugzil.la/2013176)).
- Das `Perform Actions` Kommando wurde korrigiert, um die interne Aktionsfinalisierung korrekt abzuwarten und so potenzielle Rennbedingungen zu vermeiden. ([Firefox Bug 2031596](https://bugzil.la/2031596)).

## Änderungen für Erweiterungsentwickler

- Erweiterungen benötigen jetzt eine explizite Benutzererlaubnis, um auf `file://` URLs zuzugreifen. Zuvor war der Zugriff auf lokale Dateien durch die Host-Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung (nur auf dem Desktop) ein, und der Dateizugriff ist standardmäßig für alle Erweiterungen, auch für bestehende, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer den Dateischema-Zugriff gewährt hat; zuvor gab Firefox immer `false` zurück. Zudem erfordert der Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs jetzt diese Erlaubnis. ([Firefox Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, Benutzerskripte auf Abruf in einen Tab oder ein Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode einmaliges Einfügen mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domain (eTLD+1) und den public suffix eines Hostnamens unter Verwendung der eingebauten [Public Suffix List](https://publicsuffix.org/) des Browsers zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox Bug 1315558](https://bugzil.la/1315558))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, darunter eine neue Methode {{WebExtAPIRef("runtime.getDocumentId()")}}, {{WebExtAPIRef("webNavigation")}} Ereignisse und Methoden, {{WebExtAPIRef("webRequest")}} Ereignisse, Scripting-Injektion-Targets und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox Bug 1891478](https://bugzil.la/1891478))
- Erweiterungs-Inhalts-Skripte können nun konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox Bug 1751346](https://bugzil.la/1751346))
- Der [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssel `images.additional_backgrounds` unterstützt nun CSS-Gradienten zusätzlich zu Bild-URLs. Eine neue `properties.additional_backgrounds_size` Eigenschaft steuert die Größe jedes zusätzlichen Hintergrundelements. ([Firefox Bug 2036647](https://bugzil.la/2036647))
- Für kontextuelle Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole zu erhalten und so die Werte nicht hartkodieren zu müssen. ([Firefox Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt und `"violet"` wird hinzugefügt. Die Legacy-Namen `"turquoise"` und `"toolbar"` werden aus Kompatibilitätsgründen akzeptiert. Um die Farbennamen nicht hart zu codieren, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox Bug 2044354](https://bugzil.la/2044354))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 153 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **JPEG XL Bildunterstützung** (Nightly): `image.jxl.enabled`

  Der Rust-basierte [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder ist jetzt standardmäßig in Nightly aktiviert. ([Firefox Bug 2040074](https://bugzil.la/2040074)).

- **`headingoffset` und `headingreset` HTML-Attribute**: `dom.headingoffset.enabled`

  Das globale Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Überschriftenebene der [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, auf dem es gesetzt ist, sodass ein Element die gleiche Überschriftenauszeichnung überall, wo es erscheint, verwenden kann. Das Attribut [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) stoppt die Offsets der übergeordneten Elemente davon, sich auf die Überschriften innerhalb des Elements, auf dem es gesetzt ist, auszuwirken. ([Firefox Bug 1974383](https://bugzil.la/1974383)).

- **Tree counting CSS functions**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die `sibling-count()` Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()` Funktion gibt die Indexnummer des Elements in Relation zu seinen Geschwistern zurück, dies beginnt bei `1` und nicht `0`.
  ([Firefox Bug 2042063](https://bugzil.la/2042063)).

- **Aktualisierung von Attributen externer Ressourcen**: `layout.css.link-parameters.enabled`

  Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Dies ermöglicht es dem Benutzer, Attribute externer Ressourcen, wie SVGs, deren Attribute mit der CSS-Funktion {{cssxref("env")}} gesetzt wurden, zu aktualisieren. Dies bedeutet, dass eine einzelne externe Ressource verwendet werden kann, anstatt mehrere Variationen zu erstellen, die nur unterschiedliche Farben oder andere Werte haben. ([Firefox Bug 2046153](https://bugzil.la/2046153)).

- **CSS-Basisformen erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`** (Nightly): `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radiuswerte der CSS-Basisformen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) zu bestimmen.
  ([Firefox Bug 2037673](https://bugzil.la/2037673)).

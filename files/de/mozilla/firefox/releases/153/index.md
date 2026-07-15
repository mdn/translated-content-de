---
title: Hinweise zur Veröffentlichung von Firefox 153 für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 977af4d2c62cdc936f51a496db1a193b6f9057fe
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

### HTML

- Die HTML-Parsing-Regeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, um alle verschachtelten Elemente in den DOM zu parsen, anstatt nur `<option>`, `<optgroup>` und `<hr>`.
  Dies ermöglicht eine mögliche zukünftige Unterstützung von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([Firefox Bug 2019977](https://bugzil.la/2019977)).

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Der Pseudo-Element-Selektor {{cssxref("::-webkit-scrollbar")}} wird jetzt erkannt, sodass die `@supports selector(::-webkit-scrollbar)`-Prüfung `true` zurückgibt. Beachten Sie, dass dies den Selektor als unterstützt meldet, auch wenn das Styling von Scrollbalken über `::-webkit-scrollbar` nicht vollständig implementiert ist. Dies wurde hinzugefügt, um ein Problem zu beheben, bei dem sich Scrollbalken von verschachtelten scrollbaren Bereichen übereinander stapeln konnten. Zum Beispiel dann, wenn ein Scrollbalken auf `display: none` oder `width: 0` gesetzt ist, wodurch einige Inhalte unerreichbar bleiben. ([Firefox Bug 2038877](https://bugzil.la/2038877)).

<!-- #### Entfernungen -->

### JavaScript

- Der [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
  Dazu gehören alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox Bug 2037069](https://bugzil.la/2037069)).
- Die statische Daten-Eigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl von Stapelrahmen, die in einem Fehler-Stapelprotokoll erfasst werden, zu setzen oder abzurufen.
  Das Setzen eines kleineren Wertes als der Standardwert kann die Leistung verbessern.
  ([Firefox Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt in einen String importiert werden, indem [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) verwendet wird.
  Im Gegensatz zu JavaScript- oder CSS-Modulen wird der Medientyp der Antwort ignoriert, und der Inhalt wird als Text geparst, selbst wenn die Datei Skripte oder anderen ausführbaren Code enthält.
  ([Firefox Bug 2039881](https://bugzil.la/2039881)).
- Die [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) Syntax (Teil des [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) Vorschlags) wird jetzt unterstützt.
  Sie ist ähnlich wie die normale [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration, aber anstatt ein Modul zu laden und auszuwerten, erzeugt sie ein Objekt, das den Quellcode des Moduls repräsentiert, das später ausgewertet werden kann.
  Beachten Sie, dass diese Funktion noch nicht nützlich für Entwickler ist, da derzeit nur die Syntax unterstützt wird: Die Quellrepräsentation von WebAssembly-Modulen wird separat implementiert und steht derzeit noch nicht zur Verfügung.
  ([Firefox Bug 2043242](https://bugzil.la/2043242)).

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese rufen alle Datensätze (oder einen angegebenen Teilbereich von Datensätzen) aus einem Objekt-Store bzw. einem Index ab.
  ([Firefox Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture-API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies bietet eine bequeme Mechanik für Websites, die Anzeige eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem schwebenden, immer im Vordergrund befindlichen Video-Fenster umschalten zu können, sodass Benutzer weiterhin zusehen können, während sie mit anderen Websites oder Anwendungen interagieren.
  ([Firefox Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover-API](/de/docs/Web/API/Popover_API) zeigt jetzt ein konsistenteres Verhalten, wenn [`hint` und `auto` Popovers geöffnet und geschlossen werden](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules).
  Dies folgt dem Spezifikationsupdate in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) erhält die Zertifikate, die vom entfernten Peer verwendet werden, um die DTLS-Kommunikation zu sichern.
  Diese können für die Authentifizierung der Anwendungsschicht eines entfernten Peers verwendet werden.
  ([Firefox Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle akzeptieren jetzt den `"webrtc"` Konfigurationstyp.
  Dies ermöglicht es einer Webseite abzufragen, ob eine gegebene Audio- oder Videokonfiguration mit WebRTC dekodiert oder kodiert werden kann und ob dies reibungslos, energieeffizient oder beides sein wird.
  Die Unterstützung für den nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wurde entfernt.
  ([Firefox Bug 2037610](https://bugzil.la/2037610) und [Firefox Bug 2032075](https://bugzil.la/2032075)).
- Alle verpflichtenden und einige optionale WebRTC-"Transport"-Statistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden.
  Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type).
  Zusätzlich ist die `transportId`-Eigenschaft jetzt verfügbar für [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId).
  ([Firefox Bug 1225723](https://bugzil.la/1225723) und [Firefox Bug 2019389](https://bugzil.la/2019389)).

<!-- #### Entfernungen -->

### WebAssembly

- Die Integration von JavaScript-Promises (JS-PI) ist jetzt aktiviert, wodurch [WebAssembly](/de/docs/WebAssembly)-Module mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs zusammenarbeiten können. Dies ermöglicht es, dass WebAssembly-Code angehalten wird, während auf ein JavaScript-Promise gewartet wird, und fortgesetzt wird, wenn das Promise erfüllt wird. Sehen Sie sich [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel an. ([Firefox Bug 2044809](https://bugzil.la/2044809)).

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemeines -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern nun eine explizite Benutzergenehmigung, um auf `file://` URLs zuzugreifen. Bisher war der Zugriff auf lokale Dateien durch die Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur auf dem Desktop), und der Datei-Zugriff ist standardmäßig für alle Erweiterungen, einschließlich bestehender, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer den Zugriff auf das Datei-Schema gewährt hat; zuvor hat Firefox immer `false` zurückgegeben. Zudem erfordert der Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} für `file://` URLs jetzt diese Berechtigung. ([Firefox Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die {{WebExtAPIRef("userScripts.execute()")}} Methode, die es Erweiterungen ermöglicht, bei Bedarf Benutzer-Skripte in einen Tab oder Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode das einmalige Einfügen mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domain (eTLD+1) und das öffentliche Suffix eines Hostnamens unter Verwendung der eingebauten [Public Suffix List](https://publicsuffix.org/) des Browsers zu bestimmen. Die API bietet drei synchrone Methoden an: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}, und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox Bug 1315558](https://bugzil.la/1315558))
- Erweiterte Inhalts-Skripte können nun Konstruktionen in Stylesheets innerhalb von [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}} Methode, {{WebExtAPIRef("webNavigation")}} Ereignissen und Methoden, {{WebExtAPIRef("webRequest")}} Ereignissen, Skriptinjektion-Zielen und Messaging-APIs. Sehen Sie [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden, zusammen mit Anleitungen zur Verwendung von `documentId`. ([Firefox Bug 1891478](https://bugzil.la/1891478))
- Für kontextuelle Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole abzurufen und die Notwendigkeit zu vermeiden, diese Werte fest zu codieren. ([Firefox Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt, und `"violet"` wird hinzugefügt. Die alten Namen `"turquoise"` und `"toolbar"` werden aus Gründen der Abwärtskompatibilität akzeptiert. Um das Festcodieren von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox Bug 2044354](https://bugzil.la/2044354))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 153 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie im `about:config` nach der entsprechenden Einstellung und setzen diese auf `true`.
Sie finden weitere solcher Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **JPEG XL Bildunterstützung** (Nightly): `image.jxl.enabled`

  Der auf Rust basierende [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder ist jetzt standardmäßig in Nightly aktiviert. ([Firefox Bug 2040074](https://bugzil.la/2040074)).

- **Baumzählungs-CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die `sibling-count()`-Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()`-Funktion gibt die Indexnummer des Elements in Bezug auf seine Geschwister zurück, beginnend bei `1` und nicht bei `0`.
  ([Firefox Bug 2042063](https://bugzil.la/2042063)).

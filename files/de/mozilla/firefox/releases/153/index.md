---
title: Firefox 153 Versionshinweise für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 9edb26a033a11bcc1e101814a466c30d13e09f43
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Betaversion von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte alle Überschriften auskommentieren, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

### HTML

- Die HTML-Parsing-Regeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, um alle verschachtelten Elemente in DOM zu parsen, anstatt nur `<option>`, `<optgroup>` und `<hr>`.
  Dies ermöglicht eine mögliche zukünftige Unterstützung von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([Firefox-Bug 2019977](https://bugzil.la/2019977)).

<!-- #### Entfernt -->

<!-- ### MathML -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

<!-- ### CSS -->

<!-- #### Entfernt -->

### JavaScript

- Der [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) wird nun unterstützt.
  Dies beinhaltet alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox-Bug 2037069](https://bugzil.la/2037069)).
- Die statische Daten-Eigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl von Stack-Frames in einem Fehler-Stack-Trace zu setzen oder abzurufen.
  Das Setzen eines kleineren Wertes als der Standardwert kann die Leistung verbessern.
  ([Firefox-Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt als String importiert werden mit [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text).
  Anders als bei JavaScript- oder CSS-Modulen wird der Mediatyp der Antwort ignoriert, und der Inhalt wird als Text geparst, selbst wenn die Datei Skripte oder anderen ausführbaren Code enthält.
  ([Firefox-Bug 2039881](https://bugzil.la/2039881)).
- Die Syntax [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) (Teil des [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) Vorschlags) wird jetzt unterstützt.
  Sie ähnelt der normalen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration, aber anstatt ein Modul zu laden und auszuführen, erzeugt sie ein Objekt, das den Quellcode des Moduls darstellt und später ausgewertet werden kann.
  Beachten Sie, dass dieses Feature noch nicht nützlich für Entwickler ist, da nur die Syntax derzeit unterstützt wird: die Quellrepräsentation von WebAssembly-Modulen wird separat implementiert und ist noch nicht verfügbar.
  ([Firefox-Bug 2043242](https://bugzil.la/2043242)).

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese rufen alle Datensätze (oder einen bestimmten Teilatz von Datensätzen) aus einem Objektstore bzw. einem Index ab.
  ([Firefox-Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird nun auf Desktop-Plattformen unterstützt.
  Dies bietet eine bequeme Möglichkeit für Websites, die Anzeige eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem schwebenden, immer-oben-Video-Fenster umzuschalten, sodass Benutzer weiterschauen können, während sie mit anderen Websites oder Anwendungen interagieren.
  ([Firefox-Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover API](/de/docs/Web/API/Popover_API) hat jetzt konsistenteres Verhalten, wenn [`hint` und `auto` Popovers geöffnet und geschlossen werden](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules).
  Dies folgt der Spezifikationsaktualisierung in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox-Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) ruft die vom Remote-Peer zur Sicherung der DTLS-Kommunikation verwendeten Zertifikate ab.
  Diese können für die Authentifizierung des Remote-Peers auf Application-Layer verwendet werden.
  ([Firefox-Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle akzeptieren nun den Konfigurationstyp `"webrtc"`.
  Dies ermöglicht es einer Site zu erfragen, ob eine bestimmte Audio- oder Videokonfiguration mittels WebRTC dekodiert oder kodiert werden kann, und ob dies flüssig, energieeffizient oder beides sein wird.
  Die Unterstützung für den nicht-standardisierten Typ [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission), der als Alias für `webrtc` verwendet wurde, wird entfernt.
  ([Firefox-Bug 2037610](https://bugzil.la/2037610) und [Firefox-Bug 2032075](https://bugzil.la/2032075)).
- Alle obligatorischen und einige optionale WebRTC "Transport"-Statistiken können nun in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden.
  Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion), und [`type`](/de/docs/Web/API/RTCTransportStats/type).
  Zusätzlich ist die `transportId`-Eigenschaft jetzt verfügbar in [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId).
  ([Firefox-Bug 1225723](https://bugzil.la/1225723) und [Firefox-Bug 2019389](https://bugzil.la/2019389)).

<!-- #### Entfernt -->

### WebAssembly

- Die Integration mit JavaScript Promises (JS-PI) ist nun aktiviert, was es [WebAssembly](/de/docs/WebAssembly) Modulen ermöglicht, mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs zu interagieren. Dies erlaubt WebAssembly-Code, zu warten, während auf ein JavaScript-Promise gewartet wird und dann fortzusetzen, wenn das Promise abgeschlossen ist. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox-Bug 2044809](https://bugzil.la/2044809)).

<!-- #### Entfernt -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern jetzt eine ausdrückliche Benutzerberechtigung zum Zugriff auf `file://` URLs. Bisher war der Zugriff auf lokale Dateien durch die Host-Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur Desktop), und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich bestehender, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt nun korrekt `true` zurück, wenn der Benutzer den Zugriff auf das Dateischema gewährt hat; zuvor gab Firefox immer `false` zurück. Zusätzlich erfordert ein Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs jetzt diese Berechtigung. ([Firefox-Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, Benutzerskripte bei Bedarf in einen Tab oder ein Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Injektion mehrerer Skriptquellen in definierter Reihenfolge. ([Firefox-Bug 1930776](https://bugzil.la/1930776))
- Fügt die API {{WebExtAPIRef("publicSuffix")}} hinzu, die es Erweiterungen ermöglicht, die eintragungsfähige Domain (eTLD+1) und den öffentlichen Suffix eines Hostnamens unter Verwendung der im Browser integrierten [Public Suffix List](https://publicsuffix.org/) zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}, und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox-Bug 1315558](https://bugzil.la/1315558))
- Erweiterungsinhalts-Skripte können nun konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) ohne `.wrappedJSObject` lesen und ändern. ([Firefox-Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen Methode {{WebExtAPIRef("runtime.getDocumentId()")}}, {{WebExtAPIRef("webNavigation")}} Ereignissen und Methoden, {{WebExtAPIRef("webRequest")}} Ereignissen, Skriptinjektionszielen und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox-Bug 1891478](https://bugzil.la/1891478))
- Für kontextuelle Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Icons abzurufen, wodurch das Hardcoding dieser Werte vermieden wird. ([Firefox-Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird zu `"cyan"` umbenannt, `"toolbar"` wird zu `"gray"` umbenannt, und `"violet"` wird hinzugefügt. Die alten Namen `"turquoise"` und `"toolbar"` werden zur Rückwärtskompatibilität akzeptiert. Um ein Hardcoding von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox-Bug 2044354](https://bugzil.la/2044354))

<!-- ### Entfernt -->

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Features werden in Firefox 153 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **JPEG XL Bildunterstützung** (Nightly): `image.jxl.enabled`

  Der auf Rust-basierende [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder ist jetzt standardmäßig in Nightly aktiviert. ([Firefox-Bug 2040074](https://bugzil.la/2040074)).

- **Tree-Counting CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die Funktion `sibling-count()` gibt die Anzahl von Geschwisterelementen sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Indexnummer des Elements in Bezug auf seine Geschwister zurück, beginnend mit `1` und nicht `0`.
  ([Firefox-Bug 2042063](https://bugzil.la/2042063)).

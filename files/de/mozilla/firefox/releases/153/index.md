---
title: Firefox 153 Versionshinweise für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 348c4c91586f188bc3439f2aab767ecd553fc6d3
---

Dieser Artikel bietet Informationen über Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

### JavaScript

- Der [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
  Dies umfasst alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox-Bug 2037069](https://bugzil.la/2037069)).
- Die {{jsxref("Error.stackTraceLimit")}} statische Daten-Eigenschaft wird unterstützt, um die maximale Anzahl von Stack-Frames festzulegen oder zu erhalten, die in einem Fehler-Stack-Trace erfasst werden.
  Wenn Sie den Wert kleiner als den Standardwert festlegen, kann dies die Leistung verbessern.
  ([Firefox-Bug 2037856](https://bugzil.la/2037856)).

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese rufen alle Datensätze (oder eine bestimmte Teilmenge von Datensätzen) aus einem Objekt-Store bzw. Index ab.
  ([Firefox-Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies bietet Websites einen bequemen Mechanismus, um die Anzeige eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem schwebenden, immer im Vordergrund stehendem Video-Fenster umzuschalten, sodass Benutzer weiterhin zuschauen können, während sie mit anderen Websites oder Anwendungen interagieren.
  ([Firefox-Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover API](/de/docs/Web/API/Popover_API) hat jetzt ein konsistenteres Verhalten, wenn [`hint` und `auto` Popups geöffnet und geschlossen werden](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules).
  Dies folgt dem Spezifikationsupdate im [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox-Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) ruft die Zertifikate ab, die vom Remote-Peer verwendet werden, um die DTLS-Kommunikation zu sichern.
  Diese können für die Authentifizierung des Remote-Peers auf Anwendungsebene genutzt werden.
  ([Firefox-Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der Schnittstelle [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) unterstützen jetzt den Konfigurationstyp `"webrtc"`.
  Dadurch kann eine Website abfragen, ob eine bestimmte Audio- oder Videokonfiguration unter Verwendung von WebRTC decodiert oder enkodiert werden kann und ob dies flüssig, energieeffizient oder beides sein wird.
  Die Unterstützung für den nicht-standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt.
  ([Firefox-Bug 2037610](https://bugzil.la/2037610) und [Firefox-Bug 2032075](https://bugzil.la/2032075)).
- Alle obligatorischen und einige optionale WebRTC-"Transport"-Statistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden.
  Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type).
  Darüber hinaus ist die Eigenschaft `transportId` jetzt verfügbar auf [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId).
  ([Firefox-Bug 1225723](https://bugzil.la/1225723) und [Firefox-Bug 2019389](https://bugzil.la/2019389)).

<!-- #### Entfernungen -->

### WebAssembly

- Die Integration von JavaScript Promise (JS-PI) ist jetzt aktiviert, sodass [WebAssembly](/de/docs/WebAssembly)-Module mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs interagieren können. Dies ermöglicht es, dass WebAssembly-Code anhält, während auf eine JavaScript-Promise gewartet wird und wieder aufgenommen wird, wenn die Promise erfüllt wird. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox-Bug 2044809](https://bugzil.la/2044809)).

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern nun eine explizite Benutzererlaubnis, um auf `file://`-URLs zuzugreifen. Bisher wurde der Zugriff auf lokale Dateien durch die Host-Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung (nur Desktop) ein, und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich bestehender, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer den Zugriff auf das Dateischema gewährt hat; zuvor hat Firefox immer `false` zurückgegeben. Zudem erfordert der Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} bei `file://`-URLs jetzt diese Erlaubnis. ([Firefox-Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen erlaubt, Benutzerskripte auf Verlangen in einen Tab oder Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Injektion mehrerer Skriptquellen in der festgelegten Reihenfolge. ([Firefox-Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}}-API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domain (eTLD+1) und das öffentliche Suffix eines Hostnamens unter Verwendung der im Browser eingebauten [Public Suffix List](https://publicsuffix.org/) zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox-Bug 1315558](https://bugzil.la/1315558))
- Erweiterungsinhalts-Skripte können nun konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox-Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}} Methode, {{WebExtAPIRef("webNavigation")}} Events und Methoden, {{WebExtAPIRef("webRequest")}} Events, Skript-Injektionsziele und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Events und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox-Bug 1891478](https://bugzil.la/1891478))
- Für kontextuelle Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole abzurufen, wodurch eine Festcodierung dieser Werte vermieden wird. ([Firefox-Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt und `"violet"` wird hinzugefügt. Die alten Namen `"turquoise"` und `"toolbar"` werden zur Rückwärtskompatibilität akzeptiert. Um eine Festcodierung der Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox-Bug 2044354](https://bugzil.la/2044354))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 153 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **JPEG XL Bildunterstützung** (Nightly): `image.jxl.enabled`

  Der auf Rust basierende [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder ist jetzt standardmäßig in Nightly aktiviert. ([Firefox-Bug 2040074](https://bugzil.la/2040074)).

- **Baumzählende CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden nun unterstützt. Die Funktion `sibling-count()` gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Zahl des Index des Elements in Bezug auf seine Geschwister zurück, beginnend bei `1` und nicht `0`.
  ([Firefox-Bug 2042063](https://bugzil.la/2042063)).

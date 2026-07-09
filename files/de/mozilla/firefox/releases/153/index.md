---
title: Firefox 153 Versionshinweise für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: ab37ac6c09a1b6e627a1e73af0b220817c774f51
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie die Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Web-Entwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

### JavaScript

- Der [TC39 Intl.Locale info-Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt. Dies umfasst alle Instanzmethoden in `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}. ([Firefox-Bug 2037069](https://bugzil.la/2037069)).
- Die statische Daten-Eigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl an Stack-Frames festzulegen oder abzurufen, die in einem Fehler-Stack-Trace erfasst werden. Das Verkürzen der Anzahl gegenüber dem Standardwert kann die Leistung verbessern. ([Firefox-Bug 2037856](https://bugzil.la/2037856)).

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt. Diese rufen alle (oder eine bestimmte Teilmenge) Datensätze aus einem Objekt-Store bzw. Index ab. ([Firefox-Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt. Dies bietet Websites einen praktischen Mechanismus, um ein {{htmlelement("video")}}-Element zwischen einer Seite und einem schwebenden Fenster, das immer oben angezeigt wird, umzuschalten, sodass Benutzer weiterhin zusehen können, während sie mit anderen Websites oder Anwendungen interagieren. ([Firefox-Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover-API](/de/docs/Web/API/Popover_API) hat jetzt ein konsistenteres Verhalten, wenn [`hint` und `auto` Popover geöffnet und geschlossen werden](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules). Dies folgt dem Spezifikations-Update in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345). ([Firefox-Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) ruft die Zertifikate ab, die vom entfernten Peer zur Sicherung der DTLS-Kommunikation verwendet werden. Diese können zur Authentifizierung einer entfernten Gegenstelle auf Anwendungsebene verwendet werden. ([Firefox-Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle akzeptieren jetzt den `"webrtc"`-Konfigurationstyp. Dies ermöglicht es einer Website zu ermitteln, ob eine bestimmte Audio- oder Videokonfiguration mithilfe von WebRTC dekodiert oder kodiert werden kann und ob dies reibungslos, energieeffizient oder beides sein wird. Die Unterstützung für den nicht-standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt. ([Firefox-Bug 2037610](https://bugzil.la/2037610) und [Firefox-Bug 2032075](https://bugzil.la/2032075)).
- Alle obligatorischen und einige optionale WebRTC-"Transport"-Statistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden. Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type). Zusätzlich ist die `transportId`-Eigenschaft jetzt verfügbar in [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId). ([Firefox-Bug 1225723](https://bugzil.la/1225723) und [Firefox-Bug 2019389](https://bugzil.la/2019389)).

<!-- #### Entfernungen -->

### WebAssembly

- Die JavaScript-Promise-Integration (JS-PI) ist jetzt aktiviert, sodass [WebAssembly](/de/docs/WebAssembly)-Module mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs interagieren können. Dies ermöglicht es WebAssembly-Code, zu pausieren, während auf ein JavaScript-Promise gewartet wird, und fortzufahren, wenn das Promise erfüllt wird. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox-Bug 2044809](https://bugzil.la/2044809)).

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern jetzt eine ausdrückliche Berechtigung der Benutzer, um auf `file://` URLs zuzugreifen. Bisher wurde der Zugriff auf lokale Dateien durch die Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur Desktop), und der Dateizugriff ist standardmäßig für alle Erweiterungen deaktiviert, einschließlich bestehender. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer den Zugriff auf das Dateischema gewährt hat; bisher wurde in Firefox immer `false` zurückgegeben. Außerdem erfordert das Aufrufen von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs jetzt diese Berechtigung. ([Firefox-Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, Benutzer-Skripte bei Bedarf in einen Tab oder Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Einfügung mehrerer Skriptquellen in einer definierten Reihenfolge. ([Firefox-Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domain (eTLD+1) und das öffentliche Suffix eines Hostnamens mithilfe der integrierten [Public Suffix List](https://publicsuffix.org/) des Browsers zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox-Bug 1315558](https://bugzil.la/1315558))
- Erweiterungs-Inhaltsskripte können jetzt ohne `.wrappedJSObject` konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern. ([Firefox-Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen Methode {{WebExtAPIRef("runtime.getDocumentId()")}}, {{WebExtAPIRef("webNavigation")}}-Ereignisse und -Methoden, {{WebExtAPIRef("webRequest")}}-Ereignisse, Skripting-Injektion-Ziele und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Hinweise zur Verwendung von `documentId`. ([Firefox-Bug 1891478](https://bugzil.la/1891478))
- Für kontextuelle Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole abzurufen und das Hardcoding dieser Werte zu vermeiden. ([Firefox-Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt und `"violet"` wird hinzugefügt. Die alten Namen `"turquoise"` und `"toolbar"` werden aus Gründen der Abwärtskompatibilität akzeptiert. Um das Hardcoding von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox-Bug 2044354](https://bugzil.la/2044354))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 153 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der Seite `about:config` und setzen Sie diese auf `true`. Weitere derartige Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Baumzählende CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die Funktion `sibling-count()` gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Indexnummer des Elements im Verhältnis zu seinen Geschwistern zurück, beginnend mit `1` und nicht `0`. ([Firefox-Bug 2042063](https://bugzil.la/2042063)).

---
title: Firefox 153 Versionshinweise für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### JavaScript

- Der [TC39 Intl.Locale info-Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt. Dies umfasst alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}. ([Firefox Fehler 2037069](https://bugzil.la/2037069)).
- Die statische Dateneigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl von erfassten Stack-Frames in einem Fehler-Stack-Trace festzulegen oder abzurufen. Das Setzen eines kleineren Wertes als der Standardwert kann die Leistung verbessern. ([Firefox Fehler 2037856](https://bugzil.la/2037856)).

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt. Diese rufen alle Datensätze (oder eine festgelegte Teilmenge von Datensätzen) aus einem Objektspeicher bzw. Index ab. ([Firefox Fehler 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt. Dies bietet eine bequeme Möglichkeit für Websites, die Anzeige eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem schwebenden, immer im Vordergrund befindlichen Videofenster umzuschalten, sodass Benutzer weiterhin zuschauen können, während sie mit anderen Websites oder Anwendungen interagieren. ([Firefox Fehler 1463402](https://bugzil.la/1463402)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) ruft die vom Remote-Peer verwendeten Zertifikate zum Sichern der DTLS-Kommunikation ab. Diese können für die Authentifizierung eines Remote-Peers auf Anwendungsebene verwendet werden. ([Firefox Fehler 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Schnittstelle akzeptieren jetzt den Konfigurationstyp `"webrtc"`. Dies ermöglicht es einer Website abzufragen, ob eine bestimmte Audio- oder Videokonfiguration mit WebRTC decodiert oder encodiert werden kann und ob dies reibungslos, energieeffizient oder beides sein wird. Die Unterstützung für den nicht standardmäßigen Typ [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission), der als Alias für `webrtc` verwendet wurde, wird entfernt. ([Firefox Fehler 2037610](https://bugzil.la/2037610) und [Firefox Fehler 2032075](https://bugzil.la/2032075)).
- Alle Pflicht- und einige optionale WebRTC-Transportstatistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden. Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type). Zusätzlich ist die Eigenschaft `transportId` jetzt verfügbar in [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId). ([Firefox Fehler 1225723](https://bugzil.la/1225723) und [Firefox Fehler 2019389](https://bugzil.la/2019389)).

### WebAssembly

- Die Integration von JavaScript-Promises (JS-PI) ist jetzt aktiviert, was es [WebAssembly](/de/docs/WebAssembly)-Modulen ermöglicht, mit asynchronen, auf {{jsxref("Promise")}}-basierenden JavaScript-APIs zu interagieren. Dies ermöglicht es, dass WebAssembly-Code pausiert, während er auf ein JavaScript-Promise wartet, und fortgesetzt wird, wenn das Promise sich erfüllt. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein Arbeitsbeispiel. ([Firefox Fehler 2044809](https://bugzil.la/2044809)).

## Änderungen für Add-on-Entwickler

- Erweiterungen benötigen nun explizite Benutzerberechtigung, um auf `file://` URLs zuzugreifen. Zuvor war der Zugriff auf lokale Dateien durch die Berechtigung "Daten für alle Websites abrufen" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur für Desktop), und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich bestehender, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt nun korrekt `true` zurück, wenn der Benutzer den Zugriff auf das Dateischema gewährt hat; zuvor gab Firefox immer `false` zurück. Zusätzlich erfordert das Aufrufen von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs nun diese Berechtigung. ([Firefox Fehler 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, Benutzerskripte auf Abruf in einen Tab oder Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Injektion mehrerer Skriptquellen, die in einer festgelegten Reihenfolge ausgeführt werden. ([Firefox Fehler 1930776](https://bugzil.la/1930776))
- Ergänzt die {{WebExtAPIRef("publicSuffix")}} API, die es Erweiterungen ermöglicht, die registrierbare Domäne (eTLD+1) und den öffentlichen Suffix eines Hostnamens mithilfe der integrierten [Public Suffix List](https://publicsuffix.org/) des Browsers zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox Fehler 1315558](https://bugzil.la/1315558))
- Erweiterungsskripte können jetzt die in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) enthaltenen Stylesheets lesen und ändern, ohne `.wrappedJSObject`. ([Firefox Fehler 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}}-Methode, {{WebExtAPIRef("webNavigation")}}-Ereignissen und -Methoden, {{WebExtAPIRef("webRequest")}}-Ereignissen, Skript-Injektionszielen und Nachrichten-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox Fehler 1891478](https://bugzil.la/1891478))
- Für kontextuelle Identitäten (Container):
  - Fügt die {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}}-Methoden hinzu, um die unterstützten Farben und Symbole abzurufen und so das Hardcodieren dieser Werte zu vermeiden. ([Firefox Fehler 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` in `"gray"` und `"violet"` wird hinzugefügt. Die alten Namen `"turquoise"` und `"toolbar"` werden aus Gründen der Rückwärtskompatibilität akzeptiert. Um das Hardcodieren von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox Fehler 2044354](https://bugzil.la/2044354))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 153 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Tree-Counting-CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}}-Funktion werden jetzt unterstützt. Die `sibling-count()`-Funktion gibt die Anzahl der Geschwister-Elemente sowie das Element selbst zurück. Die `sibling-index()`-Funktion gibt die Ordnungsnummer des Elements im Verhältnis zu seinen Geschwistern zurück, beginnend bei `1` statt `0`. ([Firefox Fehler 2042063](https://bugzil.la/2042063)).

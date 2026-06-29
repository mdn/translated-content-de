---
title: Firefox 153 Versionshinweise für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 04b3c97a358fe352ef1b1c1c6bff0bf215ad3354
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

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

- Die statische Dateneigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl von Stack-Frames festzulegen oder zu erhalten, die in einem Fehler-Stack-Trace erfasst werden.
  Das Festlegen des Wertes auf kleiner als den Standardwert kann die Leistung verbessern.
  ([Firefox-Bug 2037856](https://bugzil.la/2037856)).

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese Methoden rufen alle Datensätze (oder eine angegebene Teilmenge von Datensätzen) aus einem Objekt-Store bzw. Index ab.
  ([Firefox-Bug 1927945](https://bugzil.la/1927945)).

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) erhält die von der Gegenstelle verwendeten Zertifikate, um die DTLS-Kommunikation zu sichern.
  Diese können für die Authentifizierung auf Anwendungsebene einer Gegenstelle verwendet werden.
  ([Firefox-Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Schnittstelle akzeptieren jetzt den Konfigurationstyp `"webrtc"`.
  Dies ermöglicht es einer Website, abzufragen, ob eine bestimmte Audio- oder Videokonfiguration mithilfe von WebRTC dekodiert oder kodiert werden kann und ob dies flüssig, energieeffizient oder beides sein wird.
  Die Unterstützung für den nicht-standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt.
  ([Firefox-Bug 2037610](https://bugzil.la/2037610) und [Firefox-Bug 2032075](https://bugzil.la/2032075)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern jetzt explizite Benutzerberechtigung, um auf `file://` URLs zuzugreifen. Bisher wurde der Zugriff auf lokale Dateien durch die Berechtigung "Greifen Sie auf Ihre Daten für alle Websites zu" abgedeckt. Diese Änderung führt eine separate Option "Greifen Sie auf lokale Dateien auf Ihrem Computer zu" in den Berechtigungseinstellungen der Erweiterung (nur Desktop) ein, und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich bestehender, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer den Dateischemazugriff gewährt hat; zuvor gab Firefox immer `false` zurück. Außerdem erfordert der Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs jetzt diese Berechtigung. ([Firefox-Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, auf Abruf Benutzerskripte in einen Tab oder Frame einzuspeisen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Einspeisung mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox-Bug 1930776](https://bugzil.la/1930776))
- Fügt die API {{WebExtAPIRef("publicSuffix")}} hinzu, die es Erweiterungen ermöglicht, die registrierbare Domain (eTLD+1) und das öffentliche Suffix eines Hostnamens anhand der eingebauten [Public Suffix List](https://publicsuffix.org/) des Browsers zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox-Bug 1315558](https://bugzil.la/1315558))
- Erweiterung-Content-Skripte können nun konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und modifizieren, ohne `.wrappedJSObject`. ([Firefox-Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen Methode {{WebExtAPIRef("runtime.getDocumentId()")}}, {{WebExtAPIRef("webNavigation")}}-Ereignissen und -Methoden, {{WebExtAPIRef("webRequest")}}-Ereignissen, Skripteinjektion-Zielen und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox-Bug 1891478](https://bugzil.la/1891478))
- Für kontextuelle Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole abzurufen, wodurch das Hardcodieren dieser Werte vermieden wird. ([Firefox-Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt und `"violet"` wird hinzugefügt. Die Legacy-Namen `"turquoise"` und `"toolbar"` werden aus Gründen der Abwärtskompatibilität akzeptiert. Um das Hardcodieren von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox-Bug 2044354](https://bugzil.la/2044354))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 153 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

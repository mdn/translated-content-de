---
title: Firefox 153 Versionshinweise für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 69aa9c51ebd26b390f444f5ea88f882630042451
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

### JavaScript

- Die statische Dateneigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl von Stack-Frames festzulegen oder abzurufen, die in einem Fehler-Stacktrace erfasst werden.
  Das Setzen eines kleineren Wertes als der Standardwert kann die Leistung verbessern.
  ([Firefox Bug 2037856](https://bugzil.la/2037856)).

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Sicherheit -->

<!-- #### Removals -->

### APIs

<!-- #### DOM -->

#### Media, WebRTC, und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) holt die Zertifikate, die vom Remote-Peer zur Sicherung der DTLS-Kommunikation verwendet werden.
  Diese können für die Authentifizierung eines Remote-Peers auf Anwendungsebene verwendet werden.
  ([Firefox Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Interface akzeptieren jetzt den `"webrtc"` Konfigurationstyp.
  Dies ermöglicht es einer Website zu prüfen, ob eine bestimmte Audio- oder Videokonfiguration mit WebRTC dekodiert oder enkodiert werden kann und ob dies reibungslos, energiesparend oder beides ist.
  Die Unterstützung für den nicht standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt.
  ([Firefox Bug 2037610](https://bugzil.la/2037610) und [Firefox Bug 2032075](https://bugzil.la/2032075)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver-Kompatibilität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern jetzt eine ausdrückliche Benutzererlaubnis, um auf `file://` URLs zuzugreifen. Bisher fiel der Zugriff auf lokale Dateien unter die Berechtigung "Zugriff auf Ihre Daten für alle Websites". Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur Desktop) und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich bestehender, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt nun korrekt `true` zurück, wenn der Benutzer Zugriff auf das Dateischema gewährt hat; zuvor gab Firefox immer `false` zurück. Zusätzlich erfordert ein Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs nun diese Berechtigung. ([Firefox Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, auf Befehl Benutzerskripte in einen Tab oder Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode eine einmalige Injektion mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domain (eTLD+1) und den Public Suffix eines Hostnamens mithilfe der im Browser integrierten [Public Suffix List](https://publicsuffix.org/) zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox Bug 1315558](https://bugzil.la/1315558))
- Erweiterungsinhalts-Skripte können nun konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}}-Methode, {{WebExtAPIRef("webNavigation")}}-Ereignissen und -Methoden, {{WebExtAPIRef("webRequest")}}-Ereignissen, Scripting-Injektionszielen und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Hinweise zur Verwendung von `documentId`. ([Firefox Bug 1891478](https://bugzil.la/1891478))
- Für kontextbezogene Identitäten (Container):
  - Fügt die {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}}-Methoden hinzu, um die unterstützten Farben und Symbole abzurufen, wodurch die Notwendigkeit entfällt, diese Werte hartcodieren zu müssen. ([Firefox Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` in `"gray"` und `"violet"` wird hinzugefügt. Die veralteten Namen `"turquoise"` und `"toolbar"` werden aus Gründen der Rückwärtskompatibilität akzeptiert. Um das Hartcodieren von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox Bug 2044354](https://bugzil.la/2044354))

<!-- ### Removals -->

<!-- ### Sonstiges -->

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 153 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

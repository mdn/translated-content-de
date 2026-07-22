---
title: Firefox 153 Versionshinweise für Entwickler (Stabile Version)
short-title: Firefox 153 (Stabile Version)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 3b763f8f076c053b7a44e261c3a19a1879bc11ff
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 wurde am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Die Entwicklertools geben nun die Überschriftsebene für ein Überschriftselement im Accessibility-Highlighter und im Accessibility-Baum an (bisher wurde nur angezeigt, dass es sich um eine Überschrift handelte).
  Die Informationen finden Sie im [Accessibility Inspector Panel](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html).
  ([Firefox-Bug 1588784](https://bugzil.la/1588784) und [Firefox-Bug 2044904](https://bugzil.la/2044904)).

### HTML

- Die HTML-Parsing-Regeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, um alle verschachtelten Elemente in den DOM zu parsen, anstatt nur `<option>`, `<optgroup>` und `<hr>`.
  Dies ermöglicht eine mögliche zukünftige Unterstützung von [anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([Firefox-Bug 2019977](https://bugzil.la/2019977)).
- Das `muted`-Attribut wurde für die {{htmlelement("audio", "", "#muted")}}- und {{htmlelement("video", "", "#muted")}}-Elemente aktualisiert, um zu reflektieren, wann es zum DOM hinzugefügt oder davon entfernt wird. Dieses Attribut stimmt nun auch mit dem Status der {{cssxref(":muted")}} CSS-Pseudoklasse überein.
  ([Firefox-Bug 2037015](https://bugzil.la/2037015)).

### CSS

- Der {{cssxref("::-webkit-scrollbar")}} Pseudo-Element-Selektor wird jetzt erkannt, sodass die `@supports selector(::-webkit-scrollbar)`-Prüfung `true` zurückgibt. Beachten Sie, dass dieser Selektor als unterstützt gemeldet wird, obwohl die Scrollleiste über `::-webkit-scrollbar` nicht wirklich implementiert ist. Dies wurde hinzugefügt, um ein Problem zu beheben, bei dem sich Scrollleisten in verschachtelten scrollbaren Bereichen übereinander stapeln könnten. Zum Beispiel, wenn eine Scrollleiste auf `display: none` oder `width: 0` gesetzt wird, wodurch einige Inhalte unerreichbar bleiben. ([Firefox-Bug 2038877](https://bugzil.la/2038877)).

### JavaScript

- Der [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
  Dies umfasst alle Instanzmethoden von `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}, und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox-Bug 2037069](https://bugzil.la/2037069)).
- Die {{jsxref("Error.stackTraceLimit")}} statische Dateneigenschaft wird unterstützt, um die maximale Anzahl von Stack-Frames in einem Fehler-Stack-Trace zu setzen oder zu ermitteln.
  Ein kleinerer Wert als der Standardwert kann die Leistung verbessern.
  ([Firefox-Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt als Zeichenfolge mit [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) importiert werden.
  Im Gegensatz zu JavaScript- oder CSS-Modulen wird der Medientyp der Antwort ignoriert, und der Inhalt wird als Text geparst, auch wenn die Datei Skripte oder anderen ausführbaren Code enthält.
  ([Firefox-Bug 2039881](https://bugzil.la/2039881)).
- Die [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source)-Syntax (Teil der [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports)-Vorschlag) wird nun unterstützt.
  Sie ähnelt der normalen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration, aber anstatt ein Modul zu laden und zu evaluieren, erzeugt sie ein Objekt, das den Quellcode des Moduls repräsentiert und später ausgewertet werden kann.
  Beachten Sie, dass dieses Feature derzeit für Entwickler nicht nützlich ist, da nur die Syntax derzeit unterstützt wird: Die Quellrepräsentation von WebAssembly-Modulen wird separat implementiert und ist noch nicht verfügbar.
  ([Firefox-Bug 2043242](https://bugzil.la/2043242)).

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese rufen alle Datensätze (oder einen bestimmten Teil der Datensätze) aus einem Objekt-Speicher und Index ab.
  ([Firefox-Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Sie bietet eine praktische Möglichkeit für Websites, die Anzeige eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem schwebenden immer-oben-Video-Fenster umzuschalten, sodass Benutzer weiterhin zuschauen können, während sie mit anderen Websites oder Anwendungen interagieren.
  ([Firefox-Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover API](/de/docs/Web/API/Popover_API) weist jetzt ein konsistenteres Verhalten auf, wenn [`hint` und `auto` Popups geöffnet und geschlossen werden](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules).
  Dies folgt dem Update in der Spezifikation [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox-Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) ruft die vom Remote-Peer verwendeten Zertifikate ab, um die DTLS-Kommunikation zu sichern.
  Diese können zur Anwendungsschicht-Authentifizierung eines Remote-Peers verwendet werden.
  ([Firefox-Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Schnittstelle akzeptieren jetzt den `"webrtc"`-Konfigurationstyp.
  Dadurch kann eine Website abfragen, ob eine gegebene Audio- oder Videokonfiguration mit WebRTC dekodiert oder kodiert werden kann und ob dies flüssig, energieeffizient oder beides sein wird.
  Die Unterstützung für den nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt.
  ([Firefox-Bug 2037610](https://bugzil.la/2037610) und [Firefox-Bug 2032075](https://bugzil.la/2032075)).
- Alle obligatorischen und einige optionale WebRTC-"Transport"-Statistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden.
  Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type).
  Zusätzlich ist die `transportId`-Eigenschaft jetzt verfügbar auf [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId).
  ([Firefox-Bug 1225723](https://bugzil.la/1225723) und [Firefox-Bug 2019389](https://bugzil.la/2019389)).

### WebAssembly

- Die JavaScript Promise Integration (JS-PI) ist jetzt aktiviert, wodurch [WebAssembly](/de/docs/WebAssembly)-Module mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs interoperieren können. Dies ermöglicht es WebAssembly-Code, während des Wartens auf ein JavaScript-Promise auszusetzen und fortzufahren, wenn das Promise abgeschlossen ist. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox-Bug 2044809](https://bugzil.la/2044809)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte die Fenster-Manipulationsbefehle in Marionette und WebDriver BiDi, um individuelle Fenstergeometrieeigenschaften wie x, y, Breite und Höhe unabhängig anzupassen. ([Firefox-Bug 1941404](https://bugzil.la/1941404)).
- Ein Fehler wurde behoben, bei dem Klicks und Zeigeraktionsbefehle fehlschlagen konnten, wenn das erste DOMRect des Elements (z. B. Inline-Elemente, die sich über mehrere Zeilen erstrecken) die Größe Null hatte. ([Firefox-Bug 2038932](https://bugzil.la/2038932)).
- Die Navigation zu privilegierten Seiten (bestimmte `about:*` Seiten, `chrome://` und `resource://` URLs) wurde eingeschränkt, wenn im Inhaltsbereich gearbeitet wird. ([Firefox-Bug 1579790](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Der `emulation.setLocaleOverride` Befehl wurde erweitert, um auch eine Locale-Emulation für dedizierte und gemeinsame Worker anzuwenden. ([Firefox-Bug 2015655](https://bugzil.la/2015655)).
- Der `emulation.setTimezoneOverride` Befehl wurde erweitert, um auch eine Zeitzonen-Emulation für dedizierte und gemeinsame Worker anzuwenden. ([Firefox-Bug 2015657](https://bugzil.la/2015657)).
- Der `browsingContext.create` Befehl wurde aktualisiert, sodass die `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse für die initiale `about:blank` Seite nicht mehr ausgegeben werden, wenn neue Top-Level Browsing-Kontexte erstellt werden, und um nun das `browsingContext.contextCreated` Ereignis am Ende des Erstellungsprozesses auszulösen. ([Firefox-Bug 1930594](https://bugzil.la/1930594)).
- Ein Fehler wurde behoben, bei dem Funktionen, die durch den `script.addPreloadScript` Befehl erstellt wurden, möglicherweise nach mehreren Navigationen nicht mehr funktionierten. ([Firefox-Bug 2046390](https://bugzil.la/2046390)).

#### Marionette

- Der `Take Element Screenshot` Befehl aus dem klassischen WebDriver wurde korrigiert, um Screenshots von Elementen zu beschneiden, die das Ansichtsfenster überschreiten. ([Firefox-Bug 2013176](https://bugzil.la/2013176)).
- Der `Perform Actions` Befehl wurde korrigiert, um die interne Aktionsfinalisierung ordnungsgemäß abzuwarten und potenzielle Race-Conditions zu verhindern. ([Firefox-Bug 2031596](https://bugzil.la/2031596)).

## Änderungen für Add-on-Entwickler

- Erweiterungen benötigen jetzt eine explizite Benutzergenehmigung, um auf `file://` URLs zuzugreifen. Bisher war der Zugriff auf lokale Dateien durch die Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur Desktop), und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich bestehender, deaktiviert. Die {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} Methode gibt jetzt korrekt `true` zurück, wenn der Benutzer den Dateizugriff gewährt hat; vorher lieferte Firefox immer `false` zurück. Außerdem erfordert der Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs nun diese Berechtigung. ([Firefox-Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die {{WebExtAPIRef("userScripts.execute()")}} Methode, die es Erweiterungen ermöglicht, Benutzerskripte nach Bedarf in einen Tab oder Frame zu injizieren. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Injektion mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox-Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, mit der Erweiterungen die registrierbare Domain (eTLD+1) und das öffentliche Suffix eines Hostnamens unter Verwendung der im Browser integrierten [Public Suffix List](https://publicsuffix.org/) ermitteln können. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}, und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox-Bug 1315558](https://bugzil.la/1315558))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}} Methode, {{WebExtAPIRef("webNavigation")}} Ereignissen und Methoden, {{WebExtAPIRef("webRequest")}} Ereignissen, Skripting-Injektionszielen und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden, zusammen mit Anleitungen zur Verwendung von `documentId`. ([Firefox-Bug 1891478](https://bugzil.la/1891478))
- Erweiterungs-Inhalts-Skripte können jetzt konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox-Bug 1751346](https://bugzil.la/1751346))
- Der `images.additional_backgrounds`-Eigenschaft des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifeschlüssels unterstützt jetzt CSS-Gradienten zusätzlich zu Bild-URLs. Eine neue `properties.additional_backgrounds_size`-Eigenschaft steuert die Größe jedes zusätzlichen Hintergrundelements. ([Firefox-Bug 2036647](https://bugzil.la/2036647))
- Für kontextuelle Identitäten (Container):
  - Fügt die {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} Methoden hinzu, um die unterstützten Farben und Symbole abzurufen, ohne diese Werte fest zu codieren. ([Firefox-Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt, und `"violet"` wird hinzugefügt. Die alten Namen `"turquoise"` und `"toolbar"` werden aus Kompatibilitätsgründen akzeptiert. Um das Festcodieren von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox-Bug 2044354](https://bugzil.la/2044354))

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 153 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **JPEG XL Bildunterstützung** (Nightly): `image.jxl.enabled`

  Der in Rust geschriebene [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder ist in Nightly jetzt standardmäßig aktiviert. ([Firefox-Bug 2040074](https://bugzil.la/2040074)).

- **Baumzählende CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} Funktionen werden nun unterstützt. Die `sibling-count()` Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()` Funktion gibt die Indexnummer des Elements im Verhältnis zu seinen Geschwistern zurück, beginnend bei `1` und nicht bei `0`.
  ([Firefox-Bug 2042063](https://bugzil.la/2042063)).

- **Aktualisieren von Attributen externer Ressourcen**: `layout.css.link-parameters.enabled`

  Die {{cssxref("link-parameters")}} CSS-Eigenschaft und {{cssxref("param")}} CSS-Funktion werden jetzt unterstützt. Dies ermöglicht es dem Benutzer, Attribute externer Ressourcen zu aktualisieren, wie z. B. SVGs, deren Attribute mit der {{cssxref("env")}} CSS-Funktion gesetzt wurden. Dies bedeutet, dass eine einzige externe Ressource verwendet werden kann, anstatt mehrere Variationen zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden. ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

- **CSS-Grundformen erlauben `farthest-corner` und `closest-corner` Schlüsselwörter** (Nightly): `layout.css.ellipse-corners.enabled`

  Die `farthest-corner` und `closest-corner` Schlüsselwörter können nun zur Angabe der Radiuswerte der [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) CSS-Grundformen verwendet werden.
  ([Firefox-Bug 2037673](https://bugzil.la/2037673)).

---
title: Firefox 153 Versionshinweise für Entwickler
short-title: Firefox 153
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 2ad62b2e8cb4dbd6305f23fda33d800e218d8aef
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 wurde am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Entwicklerwerkzeuge zeigen jetzt die Überschriftsebene für ein Überschriftselement im Barrierefreiheitshervorheber und im Barrierebaum an (zuvor wurde nur angezeigt, dass es eine Überschrift war).
  Die Informationen finden Sie im [Barrierefreiheit-Inspektor-Panel](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html).
  ([Firefox-Bug 1588784](https://bugzil.la/1588784) und [Firefox-Bug 2044904](https://bugzil.la/2044904)).

### HTML

- Die HTML-Parsing-Regeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, um alle verschachtelten Elemente in das DOM zu parsen, anstatt nur `<option>`, `<optgroup>` und `<hr>`.
  Dies ermöglicht eine mögliche zukünftige Unterstützung von [anpassbaren Auswahlelementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([Firefox-Bug 2019977](https://bugzil.la/2019977)).
- Das `muted`-Attribut wurde jetzt für die {{htmlelement("audio", "", "#muted")}}- und {{htmlelement("video", "", "#muted")}}-Elemente aktualisiert, um wiederzugeben, wann es zum DOM hinzugefügt oder aus diesem entfernt wird. Dieses Attribut stimmt jetzt auch mit dem Status der {{cssxref(":muted")}} CSS-Pseudoklasse überein.
  ([Firefox-Bug 2037015](https://bugzil.la/2037015)).

### CSS

- Der {{cssxref("::-webkit-scrollbar")}} Pseudo-Element-Selektor wird jetzt erkannt, sodass die Prüfung `@supports selector(::-webkit-scrollbar)` `true` zurückgibt. Beachten Sie, dass dies den Selektor als unterstützt meldet, obwohl das Scrollleisten-Styling über `::-webkit-scrollbar` nicht wirklich implementiert ist. Dies wurde hinzugefügt, um ein Problem zu beheben, bei dem sich Scrollleisten verschachtelter scrollbarer Bereiche übereinander stapeln könnten. Beispielsweise, wenn eine Scrollleiste auf `display: none` oder `width: 0` gesetzt ist, wodurch einige Inhalte unerreichbar bleiben. ([Firefox-Bug 2038877](https://bugzil.la/2038877)).

### JavaScript

- Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
  Dazu gehören alle Instanzmethoden von `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox-Bug 2037069](https://bugzil.la/2037069)).
- Die {{jsxref("Error.stackTraceLimit")}} statische Dateneigenschaft wird zur Einstellung oder Abfrage der maximalen Anzahl von Stack-Frames unterstützt, die in einem Fehler-Stack-Trace erfasst werden.
  Das Setzen eines kleineren Wertes als der Standardwert kann die Leistung verbessern.
  ([Firefox-Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt in einen String importiert werden, indem [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) verwendet wird.
  Anders als bei JavaScript- oder CSS-Modulen wird der Medientyp der Antwort ignoriert, und der Inhalt wird als Text geparst, selbst wenn die Datei Skripte oder anderen ausführbaren Code enthält.
  ([Firefox-Bug 2039881](https://bugzil.la/2039881)).
- Die [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) Syntax (Teil des [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) Vorschlags) wird jetzt unterstützt.
  Sie ähnelt der normalen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration, aber anstatt ein Modul zu laden und zu evaluieren, erzeugt sie ein Objekt, das den Quellcode des Moduls darstellt, welcher später ausgewertet werden kann.
  Beachten Sie, dass dieses Feature für Entwickler noch nicht nützlich ist, da nur die Syntax derzeit unterstützt wird: Die Quellrepräsentation von WebAssembly-Modulen wird separat implementiert und ist noch nicht verfügbar.
  ([Firefox-Bug 2043242](https://bugzil.la/2043242)).

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese rufen alle Datensätze (oder eine angegebene Teilmenge von Datensätzen) aus einem Objektstore beziehungsweise Index ab.
  ([Firefox-Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies bietet eine bequeme Mechanik für Websites, um die Darstellung eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem schwebenden, immer im Vordergrund befindlichen Videofenster umzuschalten, sodass Benutzer weiterhin zuschauen können, während sie mit anderen Seiten oder Anwendungen interagieren.
  ([Firefox-Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover API](/de/docs/Web/API/Popover_API) hat jetzt ein konsistenteres Verhalten, wenn [`hint` und `auto` Popovers geöffnet und geschlossen werden](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules).
  Dies folgt dem Spezifikations-Update in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox-Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) erhält die von der Gegenstelle verwendeten Zertifikate zur Sicherung der DTLS-Kommunikation.
  Diese können für die Authentifizierung der Anwendungsschicht einer Gegenstelle verwendet werden.
  ([Firefox-Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Interfaces akzeptieren jetzt den `"webrtc"` Konfigurationstyp.
  Dies ermöglicht es einer Website abzufragen, ob eine bestimmte Audio- oder Videokonfiguration mithilfe von WebRTC dekodiert oder kodiert werden kann und ob dies reibungslos, energieeffizient oder beides ist.
  Die Unterstützung für den nicht standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt.
  ([Firefox-Bug 2037610](https://bugzil.la/2037610) und [Firefox-Bug 2032075](https://bugzil.la/2032075)).
- Alle obligatorischen und einige optionale WebRTC-"Transport"-Statistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden.
  Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type).
  Zusätzlich ist die `transportId`-Eigenschaft jetzt verfügbar in [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId).
  ([Firefox-Bug 1225723](https://bugzil.la/1225723) und [Firefox-Bug 2019389](https://bugzil.la/2019389)).

### WebAssembly

- Die JavaScript-Promise-Integration (JS-PI) ist jetzt aktiviert, wodurch [WebAssembly](/de/docs/WebAssembly)-Module mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs interoperabel sind. Dies ermöglicht es WebAssembly-Code, zu warten, während auf ein JavaScript-Promise gewartet wird, und fortzufahren, wenn das Promise abgeschlossen ist. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox-Bug 2044809](https://bugzil.la/2044809)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte die Fenster-Manipulationsbefehle in Marionette und WebDriver BiDi, um es zu ermöglichen, einzelne Fenstergeometrieeigenschaften wie x, y, Breite und Höhe unabhängig einzustellen. ([Firefox-Bug 1941404](https://bugzil.la/1941404)).
- Behebte einen Fehler, bei dem Klick- und Zeigeraktionsbefehle fehlschlagen konnten, wenn das erste DOMRect des Elements (z. B. Inline-Elemente, die mehrere Zeilen umfassen) keine Größe hatte. ([Firefox-Bug 2038932](https://bugzil.la/2038932)).
- Einschränkungen für die Navigation zu privilegierten Seiten (bestimmte `about:*` Seiten, `chrome://` und `resource://` URLs), wenn im Contentbereich gearbeitet wird. ([Firefox-Bug 1579790](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Erweiterten den `emulation.setLocaleOverride`-Befehl auf die Anwendung einer Lokalisierungsemulation auf dedizierte und gemeinsame Worker. ([Firefox-Bug 2015655](https://bugzil.la/2015655)).
- Erweiterten den `emulation.setTimezoneOverride`-Befehl auf die Anwendung einer Zeitzonensimulation auf dedizierte und gemeinsame Worker. ([Firefox-Bug 2015657](https://bugzil.la/2015657)).
- Aktualisierten den `browsingContext.create`-Befehl, um die `browsingContext.domContentLoaded`- und `browsingContext.load`-Ereignisse für die anfängliche `about:blank`-Seite beim Erstellen neuer übergeordneter Browsing-Kontexte nicht mehr auszugeben und jetzt das `browsingContext.contextCreated`-Ereignis am Ende des Erstellungsprozesses auszugeben. ([Firefox-Bug 1930594](https://bugzil.la/1930594)).
- Behebten einen Fehler, bei dem Funktionen, die durch den `script.addPreloadScript`-Befehl erstellt wurden, nach mehreren Navigierungen möglicherweise nicht mehr funktionierten. ([Firefox-Bug 2046390](https://bugzil.la/2046390)).

#### Marionette

- Behebten den `Take Element Screenshot`-Befehl aus dem klassischen WebDriver, um Screenshots von Elementen zuzuschneiden, die den Ansichtsbereich überschreiten. ([Firefox-Bug 2013176](https://bugzil.la/2013176)).
- Behebten den `Perform Actions`-Befehl, um interne Aktionsabschlüsse ordnungsgemäß abzuwarten und potenzielle Race Conditions zu vermeiden. ([Firefox-Bug 2031596](https://bugzil.la/2031596)).

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern jetzt eine ausdrückliche Benutzererlaubnis, um auf `file://` URLs zuzugreifen. Bisher wurde der Zugriff auf lokale Dateien durch die Host-Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung (nur Desktop) ein, und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich vorhandener, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer Zugriff auf das Dateischema gewährt hat; bisher gab Firefox immer `false` zurück. Zusätzlich erfordert der Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs jetzt diese Berechtigung. ([Firefox-Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, bei Bedarf Benutzerskripte in ein Tab oder Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Injektion mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox-Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domäne (eTLD+1) und das öffentliche Suffix eines Hostnamens unter Verwendung der eingebauten [Public Suffix List](https://publicsuffix.org/) des Browsers zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox-Bug 1315558](https://bugzil.la/1315558))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}}-Methode, {{WebExtAPIRef("webNavigation")}}-Ereignissen und Methoden, {{WebExtAPIRef("webRequest")}}-Ereignissen, Scripting-Injektionstargets und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox-Bug 1891478](https://bugzil.la/1891478))
- Erweiterungsinhalts-Skripte können jetzt konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox-Bug 1751346](https://bugzil.la/1751346))
- Die `theme` Manifest-Schlüssel `images.additional_backgrounds`-Eigenschaft unterstützt jetzt CSS-Gradienten neben Bild-URLs. Eine neue `properties.additional_backgrounds_size`-Eigenschaft steuert die Größe jedes zusätzlichen Hintergrundelements. ([Firefox-Bug 2036647](https://bugzil.la/2036647))
- Für kontextbezogene Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole abzurufen und das Hartcodieren dieser Werte zu vermeiden. ([Firefox-Bug 2044712](https://bugzil.la/2044712))
  - Aktualisierte die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt und `"violet"` wird hinzugefügt. Die älteren Namen `"turquoise"` und `"toolbar"` werden aus Gründen der Abwärtskompatibilität akzeptiert. Um das Hartcodieren von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox-Bug 2044354](https://bugzil.la/2044354))

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 153 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **JPEG XL Bildunterstützung** (Nightly): `image.jxl.enabled`

  Der in Rust entwickelte [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder ist jetzt in Nightly standardmäßig aktiviert. ([Firefox-Bug 2040074](https://bugzil.la/2040074)).

- **Tree counting CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} Funktion werden jetzt unterstützt. Die `sibling-count()` Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()` Funktion gibt die Indexnummer des Elements im Verhältnis zu seinen Geschwistern zurück, beginnend mit `1` und nicht `0`.
  ([Firefox-Bug 2042063](https://bugzil.la/2042063)).

- **Aktualisierung von Attributen externer Ressourcen**: `layout.css.link-parameters.enabled`

  Die {{cssxref("link-parameters")}} CSS-Eigenschaft und die {{cssxref("param")}} CSS-Funktion werden jetzt unterstützt. Dies ermöglicht es, Attribute externer Ressourcen, wie SVGs, zu aktualisieren, deren Attribute mit der {{cssxref("env")}} CSS-Funktion gesetzt sind. Das bedeutet, dass eine einzelne externe Ressource verwendet werden kann, anstatt mehrere Variationen zu erstellen, die sich nur durch Farben oder andere Werte unterscheiden. ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

- **CSS-Formgrundlagen erlauben `farthest-corner` und `closest-corner` Schlüsselwörter** (Nightly): `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt zur Angabe der Radiuswerte der [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) CSS-Grundformen verwendet werden.
  ([Firefox-Bug 2037673](https://bugzil.la/2037673)).

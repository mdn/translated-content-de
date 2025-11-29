---
title: Versionshinweise für Entwickler zum Firefox 142
short-title: Firefox 142
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernung

- Das {{HTMLElement('object')}}-Element unterstützt das veraltete `codebase`-Attribut nicht mehr. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Für weitere Details siehe [Firefox Bug 1973900](https://bugzil.la/1973900).)

### CSS

- Der [`&` selector](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) innerhalb von {{cssxref("@scope")}} übernimmt nicht mehr die [Spezifität des Start-Scope-Selectors](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).
  Dies macht `&`-Selektoren in `@scope` konsistent mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting), um unerwartete Spezifitätsunterschiede zu vermeiden (siehe [CSS-Verschachtelung und Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)).
  ([Firefox Bug 1975531](https://bugzil.la/1975531)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt, sodass Sie URLs mithilfe einer standardisierten Mustersyntax abgleichen und analysieren können. ([Firefox Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt jetzt vollständig die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) sowie die Eigenschaften [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) auf Firefox Android.
  Dies ermöglicht es Ihnen, ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element so zu konfigurieren, dass es Verzeichnisse anstelle von Dateien akzeptiert ([Firefox Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird nun unterstützt, sodass Entwickler ausgewählte Textbereiche über Schatten-DOM-Grenzen hinweg genau ermitteln können. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle modifiziert, um Knoten innerhalb einer Shadow-Root zu akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird nun unterstützt und ermöglicht es Entwicklern, den Fortschritt einer Animation zu verfolgen und anzuzeigen. ([Firefox Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) für eine Animation gesetzt wird, um die berechneten Stile nach dem Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie bis zur Unterstützung dieser Änderung durch weitere Browser `fill` weiterhin setzen sollten. ([Firefox Bug 1973203](https://bugzil.la/1973203)).
- Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird nun unterstützt und bietet einen standardisierten Mechanismus zur Zuweisung und Verwaltung der Prioritäten von Aufgaben für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis) sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle und die Eigenschaft [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) werden nicht unterstützt.
  ([Firefox Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs werden nun unterstützt. Diese geben die aktuelle Round-Trip-Time (RTT) und die Informationen zurück, die zur Berechnung der durchschnittlichen RTT für die Verbindung erforderlich sind. ([Firefox Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle unterstützen nun das Festlegen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), der für jede `encoding` verwendet wird.
  Sie können auch einen `codec` für jede Encodierung in der [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings)-Array festlegen, das an die [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle übergeben wird.
  ([Firefox Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- FTP-Proxy-Unterstützung aus den WebDriver-Fähigkeiten entfernt ([Firefox Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller Cookies, die über WebDriver BiDi und WebDriver klassisch (Marionette) gesetzt wurden, wurde aktualisiert und auf 400 Tage begrenzt ([Firefox Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue `emulation.setLocaleOverride`-Befehl wurde implementiert, der es Clients ermöglicht, eine Locale in JavaScript-APIs zu überschreiben ([Firefox Bug 1968952](https://bugzil.la/1968952)).
- Die Einstellung eines Proxys mit `browsingContext.createUserContext` wurde verbessert: Unterstützung für Hostmuster wie `.mozilla.org` im `noProxy`-Eigenschaft hinzugefügt ([Firefox Bug 1977180](https://bugzil.la/1977180)) und ein Fehler behoben, bei dem das Setzen eines HTTP-Proxys das Navigieren zu HTTPS-URLs nicht zuließ ([Firefox Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler wurde behoben, bei dem `browsingContext.create` fehlschlug, nachdem ein `browsingContext.print`-Befehl durch das Schließen eines Tabs mit dem `browsingContext.close`-Befehl unterbrochen wurde ([Firefox Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end`-Befehl wurde aktualisiert, um alle Anfragen fortzusetzen, die durch Netzwerkabfangungen blockiert wurden ([Firefox Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der `WebDriver:AddCookie`-Befehl wurde aktualisiert, um einen Fehler zu werfen, wenn ein Zielcookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox Bug 1977205](https://bugzil.la/1977205)).
- Der Dialogtextwert wurde aus der Fehlermeldung `unexpected alert open` entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient der Überwachung auf mögliche Probleme. Es ist beabsichtigt, die Validierung in einer zukünftigen Version auf alle Kanäle zu erzwingen. ([Firefox Bug 1976197](https://bugzil.la/1976197))
- Die Methoden {{WebExtAPIRef("cookies")}} akzeptieren und geben jetzt Millisekunden im Bruchteilsteil von `expirationDate` zurück. ([Firefox Bug 1972757](https://bugzil.la/1972757))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die auf Änderungen in den benutzerspezifischen Einstellungen hören, die sich auf die Aktion einer Erweiterung auswirken. ([Firefox Bug 1828220](https://bugzil.la/1828220))
- Fügt {{WebExtAPIRef("browserSettings.verticalTabs")}} hinzu, was Erweiterungen ermöglicht zu steuern, ob der Browser die Tableiste horizontal oder vertikal anzeigt. ([Firefox Bug 1946600](https://bugzil.la/1946600))
- Aktiviert die integrierte Datenkollektion-Zustimmungsfunktion von Firefox für Firefox für Android. Siehe den Artikel zur Extension Workshop [Individuelle Datenzustimmung für Sammeln und Übertragung](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/). ([Firefox Bug 1954524](https://bugzil.la/1954524))

## Experimentelle Webfunktionen

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS {{CSSXRef("anchor-size")}}-Funktion ermöglicht das Festlegen der Größe, Position und Ränder von ankerpositionierten Elementen relativ zu den Dimensionen der Ankerelemente. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS-{{CSSXRef(":heading")}}-Pseudo-Klasse ermöglicht es, alle [Überschriften-Elemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) gleichzeitig zu stylen, anstatt sie individuell anzuvisieren. Die {{CSSXRef(":heading_function", ":heading()")}}-funktionale Pseudo-Klasse ermöglicht es, Überschriftselemente zu stylen, die den angegebenen Überschriftebenen entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der Wert {{CSSXRef("view-transition-name", "match-element", "#match-element")}} der CSS-{{CSSXRef("view-transition-name")}}-Eigenschaft weist [automatisch](/de/docs/Web/CSS/Reference/Properties/view-transition-name#specifying_view-transition-name_values_automatically) jedem ausgewählten Element einen eindeutigen internen `view-transition-name` zu, anstatt sie einzeln benennen zu müssen. ([Firefox Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die {{httpheader("Integrity-Policy")}}- und {{httpheader("Integrity-Policy-Report-Only")}}-HTTP-Header werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, entweder [Unversehrtheitsgarantien für Subressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die {{httpheader("Integrity-Policy")}}- und {{httpheader("Integrity-Policy-Report-Only")}}-HTTP-Header werden jetzt für Stylesheet-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder die Richtlinie durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen sind in Firefox 142 enthalten, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Voreinstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

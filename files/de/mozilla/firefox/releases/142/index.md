---
title: Firefox 142 Versionshinweise für Entwickler
short-title: Firefox 142
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase`-Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Siehe [Firefox-Bug 1973900](https://bugzil.la/1973900) für mehr Details.)

### CSS

- Der [`&` Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) innerhalb von {{cssxref("@scope")}} erbt nicht mehr die [Spezifität des Startselektors des Scopes](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).
  Dies macht `&` Selektoren in `@scope` konsistent mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) und vermeidet unerwartete Unterschiede in der Spezifität (siehe [CSS-Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)).
  ([Firefox-Bug 1975531](https://bugzil.la/1975531)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt, wodurch Sie URLs mit einer standardisierten Mustersyntax abgleichen und analysieren können. ([Firefox-Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt nun vollständig die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) und die Eigenschaften [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) auf Firefox für Android.
  Dadurch können Sie ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element so konfigurieren, dass es Verzeichnisse statt Dateien akzeptiert ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird nun unterstützt, was es Entwicklern erlaubt, ausgewählte Textbereiche über Schatten-DOM-Grenzen hinweg exakt zu erfassen. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse), und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so modifiziert, dass sie Knoten innerhalb eines Schatten-Root akzeptieren. ([Firefox-Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird nun unterstützt, was es Entwicklern ermöglicht, den Fortschritt einer Animation zu verfolgen und anzuzeigen. ([Firefox-Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf einer Animation gesetzt ist, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie `fill` weiterhin setzen sollten, bis mehr Browser diese Änderung unterstützen. ([Firefox-Bug 1973203](https://bugzil.la/1973203)).
- Die [Priorisierte Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird nun unterstützt, was einen standardisierten Mechanismus bietet, um Aufgabenprioritäten für eine Anwendung zuzuweisen und zu verwalten.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignis) sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle und die [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling)-Eigenschaft werden nicht unterstützt.
  ([Firefox-Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime), und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Dictionaries werden nun unterstützt. Diese geben die aktuelle Round-Trip-Zeit (RTT) und die benötigten Informationen zur Berechnung der durchschnittlichen RTT für die Verbindung zurück.
  ([Firefox-Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle unterstützen nun das Setzen und Abrufen des spezifischen [`codecs`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), der für jede `encoding` verwendet wird.
  Sie können auch einen `codec` für jede Codierung in dem [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings)-Array festlegen, das an die [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle übergeben wird.
  ([Firefox-Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden nun unterstützt. ([Firefox-Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für FTP-Proxy aus WebDriver-Fähigkeiten entfernt ([Firefox-Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller Cookies, die über WebDriver BiDi und WebDriver Classic (Marionette) gesetzt werden, wurde auf 400 Tage beschränkt ([Firefox-Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue Befehl `emulation.setLocaleOverride` wurde implementiert, der es Clients ermöglicht, eine Locale in JavaScript-APIs zu überschreiben ([Firefox-Bug 1968952](https://bugzil.la/1968952)).
- Verbesserung beim Setzen eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` in der `noProxy`-Eigenschaft hinzugefügt ([Firefox-Bug 1977180](https://bugzil.la/1977180)) und einen Fehler behoben, bei dem das Setzen eines HTTP-Proxys es nicht ermöglichte, zu HTTPS-URLs zu navigieren ([Firefox-Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler wurde behoben, bei dem `browsingContext.create` fehlschlug, nachdem ein `browsingContext.print`-Befehl durch Schließen eines Tabs mit dem Befehl `browsingContext.close` unterbrochen wurde ([Firefox-Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end`-Befehl wurde aktualisiert, um alle Anfragen fortzusetzen, die durch Netzwerkeingriffe blockiert wurden ([Firefox-Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der Befehl `WebDriver:AddCookie` wurde aktualisiert, um einen Fehler zu werfen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox-Bug 1977205](https://bugzil.la/1977205)).
- Der Dialogtextwert wurde aus der Fehlermeldung "unerwartetes Alert geöffnet" entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox-Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly soll das Monitoring auf eventuelle Probleme ermöglichen. In einer zukünftigen Version ist geplant, die Validierung in allen Kanälen durchzusetzen. ([Firefox-Bug 1976197](https://bugzil.la/1976197))
- Die {{WebExtAPIRef("cookies")}}-Methoden akzeptieren und geben jetzt Millisekunden im Bruchteil der `expirationDate` zurück. ([Firefox-Bug 1972757](https://bugzil.la/1972757))
- Die Events {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} wurden hinzugefügt, die Änderungen in den benutzerspezifischen Einstellungen, die die Aktion einer Erweiterung beeinflussen, überwachen. ([Firefox-Bug 1828220](https://bugzil.la/1828220))
- {{WebExtAPIRef("browserSettings.verticalTabs")}} wurde hinzugefügt, das es Erweiterungen ermöglicht, zu steuern ob der Browser die Tableiste horizontal oder vertikal anzeigt. ([Firefox-Bug 1946600](https://bugzil.la/1946600))
- Das in Firefox für Android eingebaute Datenabholungs-Einwilligungsfeature wurde aktiviert. Siehe den Artikel auf der Extension Workshop Seite [Firefox built-in consent for data collection and transmission](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/). ([Firefox-Bug 1954524](https://bugzil.la/1954524))

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS {{CSSXRef("anchor-size")}}-Funktion ermöglicht das Setzen der Größe, Position und Ränder eines anker-positionierten Elements relativ zu den Abmessungen der Ankerelemente. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS {{CSSXRef(":heading")}}-Pseudoklasse erlaubt es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{CSSXRef(":heading_function", ":heading()")}}-funktionale Pseudoklasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die den angegebenen Überschriftsleveln entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der {{CSSXRef("view-transition-name", "match-element", "#match-element")}}-Wert der CSS {{CSSXRef("view-transition-name")}}-Eigenschaft weist [automatisch](/de/docs/Web/CSS/Reference/Properties/view-transition-name#specifying_view-transition-name_values_automatically) jedem ausgewählten Element einen eindeutigen internen `view-transition-name` zu, anstatt sie einzeln benennen zu müssen. ([Firefox-Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die {{httpheader("Integrity-Policy")}}- und {{httpheader("Integrity-Policy-Report-Only")}}-HTTP-Header werden jetzt für Skript-Ressourcen unterstützt. Diese ermöglichen es Webseiten entweder, [Subresource-Integritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die {{httpheader("Integrity-Policy")}}- und {{httpheader("Integrity-Policy-Report-Only")}}-HTTP-Header werden jetzt für Stylesheet-Ressourcen unterstützt. Diese ermöglichen es Webseiten entweder die Einhaltung der Richtlinie durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox-Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen werden in Firefox 142 bereitgestellt, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

---
title: Firefox 142 für Entwickler
short-title: Firefox 142
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 4f75a883f60a0ebd730def108aa66251942bb833
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernt

- Das {{HTMLElement('object')}} Element unterstützt das veraltete `codebase` Attribut nicht mehr. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data) Attribut. (Siehe [Firefox-Bug 1973900](https://bugzil.la/1973900) für weitere Details.)

### CSS

- Der [`&` Selektor](/de/docs/Web/CSS/Nesting_selector) innerhalb von {{cssxref("@scope")}} erbt nicht mehr die [Spezifität des Scope-Startselektors](/de/docs/Web/CSS/@scope#specificity_in_scope).
  Dies macht `&` Selektoren in `@scope` konsistent mit [CSS nesting](/de/docs/Web/CSS/CSS_nesting), wodurch unerwartete Unterschiede in der Spezifität vermieden werden (siehe [CSS nesting and specificity](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)).
  ([Firefox-Bug 1975531](https://bugzil.la/1975531)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt und ermöglicht es Ihnen, URLs mit einer standardisierten Mustersyntax zu matchen und zu parsen. ([Firefox-Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt nun vollständig die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) und die Eigenschaften [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) auf Firefox Android.
  Dies ermöglicht es Ihnen, ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element so zu konfigurieren, dass es Verzeichnisse anstelle von Dateien akzeptiert ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt und ermöglicht es Entwicklern, genau ausgewählte Textbereiche über Shadow DOM-Grenzen hinweg zu erhalten. Darüber hinaus wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse), und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection) Schnittstelle so modifiziert, dass sie Knoten innerhalb einer Shadow-Root akzeptieren. ([Firefox-Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt und ermöglicht es Entwicklern, den Fortschritt einer Animation zu verfolgen und anzuzeigen. ([Firefox-Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) bei einer Animation gesetzt ist, um die berechneten Stile nach dem Ende der Animation zu übernehmen. Beachten Sie, dass Sie, bis mehr Browser diese Änderung unterstützen, weiterhin `fill` setzen sollten. ([Firefox-Bug 1973203](https://bugzil.la/1973203)).
- Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird jetzt unterstützt und bietet einen standardisierten Mechanismus zur Zuweisung und Verwaltung von Aufgabenprioritäten für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignis) sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die Schnittstelle [`Scheduling`](/de/docs/Web/API/Scheduling) und die Eigenschaft [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) werden nicht unterstützt.
  ([Firefox-Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des Wörterbuchs [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) werden jetzt unterstützt. Diese geben die aktuelle Round-Trip-Zeit (RTT) und die Informationen zur Berechnung der durchschnittlichen RTT für die Verbindung zurück.
  ([Firefox-Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der Schnittstelle [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützen nun das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), das für jedes `encoding` verwendet wird.
  Sie können auch einen `codec` für jedes Encoding in dem Array [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) setzen, das der Methode [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) übergeben wird.
  ([Firefox-Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der Schnittstelle [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) werden jetzt unterstützt. ([Firefox-Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- FTP-Proxy-Unterstützung aus WebDriver-Fähigkeiten entfernt ([Firefox-Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller Cookies, die über WebDriver BiDi und WebDriver Classic (Marionette) gesetzt wurden, wurde auf 400 Tage begrenzt ([Firefox-Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue Befehl `emulation.setLocaleOverride` wurde implementiert, der es Clients ermöglicht, eine Sprache in JavaScript APIs zu überschreiben ([Firefox-Bug 1968952](https://bugzil.la/1968952)).
- Verbesserung beim Setzen eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` in der `noProxy` Eigenschaft hinzugefügt ([Firefox-Bug 1977180](https://bugzil.la/1977180)) und ein Fehler behoben, bei dem das Setzen eines HTTP-Proxys eine Navigation zu HTTPS-URLs nicht erlaubte ([Firefox-Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler wurde behoben, bei dem `browsingContext.create` nach einem durch den Befehl `browsingContext.print` unterbrochenen Druckbefehl fehlschlagen würde, wenn ein Tab mit dem Befehl `browsingContext.close` geschlossen wurde ([Firefox-Bug 1841125](https://bugzil.la/1841125)).
- Der Befehl `session.end` wurde aktualisiert, um alle Anfragen wieder aufzunehmen, die durch Netzwerk-Abfangmaßnahmen blockiert wurden ([Firefox-Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der Befehl `WebDriver:AddCookie` wurde aktualisiert, um einen Fehler zu werfen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox-Bug 1977205](https://bugzil.la/1977205)).
- Der Wert des Dialogtextes wurde aus der Fehlermeldung `unexpected alert open` entfernt, da der Dialogtext jetzt über das `data` Feld verfügbar ist ([Firefox-Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-On-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly soll die Überwachung auf eventuelle Probleme ermöglichen. Die Absicht ist, die Validierung in einer zukünftigen Version in allen Kanälen durchzusetzen. ([Firefox-Bug 1976197](https://bugzil.la/1976197))
- Die Methoden {{WebExtAPIRef("cookies")}} akzeptieren und geben jetzt Millisekunden im Dezimalteil von `expirationDate` zurück. ([Firefox-Bug 1972757](https://bugzil.la/1972757))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die Änderungen an den vom Benutzer festgelegten Einstellungen überwachen, die die Aktion einer Erweiterung beeinflussen. ([Firefox-Bug 1828220](https://bugzil.la/1828220))
- Fügt {{WebExtAPIRef("browserSettings.verticalTabs")}} hinzu, das es Erweiterungen ermöglicht, zu steuern, ob der Browser die Tableiste horizontal oder vertikal anzeigt. ([Firefox-Bug 1946600](https://bugzil.la/1946600))

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS {{CSSXRef("anchor-size")}} Funktion ermöglicht es, die Größe, Position und Ränder von ankerpositionierten Elementen relativ zu den Dimensionen von Ankerelementen festzulegen. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS {{CSSXRef(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{CSSXRef(":heading_function", ":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die der [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation) Notation entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der {{CSSXRef("view-transition-name", "match-element", "#match-element")}} Wert der CSS-Eigenschaft {{CSSXRef("view-transition-name")}} [weist](/de/docs/Web/CSS/view-transition-name#specifying_view-transition-name_values_automatically) jedem ausgewählten Element automatisch einen einzigartigen internen `view-transition-name` zu, anstatt sie einzeln benennen zu müssen. ([Firefox-Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Damit können Websites entweder [Subresource Integrity Garantien](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchsetzen oder nur Verstöße gegen die Richtlinie melden, jeweils.
  ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Stylesheet-Ressourcen unterstützt. Diese ermöglichen es Websites, Verstöße gegen die Richtlinie entweder durchzusetzen oder nur zu melden, jeweils.
  ([Firefox-Bug 1974247](https://bugzil.la/1974247)).

Diese Features sind in Firefox 142 verfügbar, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie den entsprechenden Präferenz auf der `about:config` Seite und setzen Sie ihn auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

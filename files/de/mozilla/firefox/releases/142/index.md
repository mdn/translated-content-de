---
title: Firefox 142 Versionshinweise für Entwickler
short-title: Firefox 142
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase`-Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Weitere Details finden Sie im [Firefox Bug 1973900](https://bugzil.la/1973900)).

### CSS

- Der [`&` Selector](/de/docs/Web/CSS/Nesting_selector) innerhalb von {{cssxref("@scope")}} erbt nicht mehr die [Spezifität des Scope-Start-Selectors](/de/docs/Web/CSS/@scope#specificity_in_scope).
  Dies macht `&` Selector in `@scope` konsistent mit [CSS Nesting](/de/docs/Web/CSS/CSS_nesting), und vermeidet unerwartete Unterschiede in der Spezifität (siehe [CSS Nesting und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)).
  ([Firefox Bug 1975531](https://bugzil.la/1975531)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird jetzt vollständig unterstützt und ermöglicht es Ihnen, URLs mithilfe einer standardisierten Mustersyntax zu matchen und zu parsen. ([Firefox Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt nun die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) und die Eigenschaft [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) auf Firefox Android vollständig.
  Dies ermöglicht es Ihnen, ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element so zu konfigurieren, dass es Verzeichnisse statt Dateien akzeptiert ([Firefox Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt und erlaubt Entwicklern, genau Textbereiche über Schatten-DOM-Grenzen hinweg zu erhalten. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so geändert, dass sie Knoten innerhalb eines Schattenwurzel akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt und ermöglicht es Entwicklern, den Fortschritt einer Animation zu verfolgen und anzuzeigen. ([Firefox Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf einer Animation gesetzt ist, um die berechneten Stile nach Beendigung der Animation zu übernehmen. Beachten Sie, dass Sie bis zur Unterstützung dieser Änderung durch mehr Browser weiterhin `fill` setzen sollten. ([Firefox Bug 1973203](https://bugzil.la/1973203)).
- Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird jetzt unterstützt und bietet einen standardisierten Mechanismus zur Zuweisung und Verwaltung von Aufgabenprioritäten für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignis), und die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die Schnittstelle [`Scheduling`](/de/docs/Web/API/Scheduling) und die Eigenschaft [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) werden nicht unterstützt.
  ([Firefox Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC, und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des Wörterbuchs [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) werden jetzt unterstützt. Sie geben die aktuelle Round-Trip-Zeit (RTT) und die Informationen zurück, die zur Berechnung der durchschnittlichen RTT für die Verbindung benötigt werden.
  ([Firefox Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der Schnittstelle [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützen jetzt das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs) für jede `encoding`.
  Sie können auch einen `codec` für jede Kodierung im Array [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) festlegen, das an die Methode [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) übergeben wird.
  ([Firefox Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der Schnittstelle [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) werden jetzt unterstützt. ([Firefox Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für FTP-Proxy aus WebDriver-Fähigkeiten entfernt ([Firefox Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert für alle Cookies, die über WebDriver BiDi und WebDriver Classic (Marionette) gesetzt werden, wurde auf maximal 400 Tage begrenzt ([Firefox Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue `emulation.setLocaleOverride` Befehl wurde implementiert, der es Clients ermöglicht, eine Spracheinstellung in JavaScript-APIs zu überschreiben ([Firefox Bug 1968952](https://bugzil.la/1968952)).
- Die Einrichtung eines Proxys mit `browsingContext.createUserContext` wurde verbessert: Unterstützung für Hostmuster wie `.mozilla.org` in der Eigenschaft `noProxy` hinzugefügt ([Firefox Bug 1977180](https://bugzil.la/1977180)) und ein Fehler wurde behoben, bei dem das Setzen eines HTTP-Proxys die Navigation zu HTTPS-URLs nicht zuließ ([Firefox Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler wurde behoben, bei dem `browsingContext.create` nach einem unterbrochenen `browsingContext.print`-Befehl fehlschlug, wenn ein Tab mit dem Befehl `browsingContext.close` geschlossen wurde ([Firefox Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end` Befehl wurde aktualisiert, um alle Anfragen fortzusetzen, die durch Netzwerkabfangmaßnahmen blockiert wurden ([Firefox Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der `WebDriver:AddCookie` Befehl wurde aktualisiert, um einen Fehler auszulösen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` aufweist ([Firefox Bug 1977205](https://bugzil.la/1977205)).
- Der Textwert des Dialogs wurde aus der Fehlermeldung `unexpected alert open` entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden nun validiert und ungültige Cookies werden zurückgewiesen. Die Implementierung in Nightly dient dazu, etwaige Probleme zu beobachten. Die Absicht ist es, die Validierung in allen Kanälen in einer zukünftigen Version durchzusetzen. ([Firefox Bug 1976197](https://bugzil.la/1976197))
- Die {{WebExtAPIRef("cookies")}}-Methoden akzeptieren und geben nun Millisekunden im Bruchteil von `expirationDate` zurück. ([Firefox Bug 1972757](https://bugzil.la/1972757))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die auf Änderungen in den vom Benutzer festgelegten Einstellungen hören, die die Aktion einer Erweiterung betreffen. ([Firefox Bug 1828220](https://bugzil.la/1828220))
- Fügt {{WebExtAPIRef("browserSettings.verticalTabs")}} hinzu, die es Erweiterungen ermöglicht zu steuern, ob der Browser die Tableiste horizontal oder vertikal anzeigt. ([Firefox Bug 1946600](https://bugzil.la/1946600))

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht das Setzen der Größe, Position und Ränder von Anker-positionierten Elementen relativ zu den Dimensionen der Ankerelemente. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":heading")}} ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu gezielt. Die funktionale Pseudoklasse {{CSSXRef(":heading_function", ":heading()")}} erlaubt es Ihnen, Überschriftselemente zu stylen, die der [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation) Notation entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der {{CSSXRef("view-transition-name", "match-element", "#match-element")}}-Wert der CSS-Eigenschaft {{CSSXRef("view-transition-name")}} [weist automatisch](/de/docs/Web/CSS/Reference/Properties/view-transition-name#specifying_view-transition-name_values_automatically) jedem ausgewählten Element einen eindeutigen internen `view-transition-name` zu, anstatt sie individuell benennen zu müssen. ([Firefox Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Diese erlauben es Websites, entweder [Subressourcensicherheitsgarantien](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Stylesheet-Ressourcen unterstützt. Diese erlauben es Websites, entweder Verstöße gegen die Richtlinie durchzusetzen oder nur zu melden.
  ([Firefox Bug 1974247](https://bugzil.la/1974247)).

Diese Features werden in Firefox 142 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Stabil)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 36522b6e730a3517a0060106610ef00e79953044
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase`-Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Siehe [Firefox-Bug 1973900](https://bugzil.la/1973900) für weitere Details.)

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt, sodass Sie URLs mit einer standardisierten Mustersyntax abgleichen und analysieren können. ([Firefox-Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt jetzt vollständig die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) und die Eigenschaft [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) auf Firefox Android.
  Damit können Sie ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element so konfigurieren, dass es Verzeichnisse anstelle von Dateien akzeptiert ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt, sodass Entwickler Textbereiche genau über Shadow DOM-Grenzen hinweg erhalten können. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so angepasst, dass sie Knoten innerhalb eines Shadow-Roots akzeptieren. ([Firefox-Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt, wodurch Entwickler den Fortschritt durch eine Animation verfolgen und anzeigen können. ([Firefox-Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) für eine Animation festgelegt wird, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie, bis mehr Browser diese Änderung unterstützen, weiterhin `fill` festlegen sollten. ([Firefox-Bug 1973203](https://bugzil.la/1973203)).
- Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird jetzt unterstützt und bietet einen standardisierten Mechanismus zur Zuweisung und Verwaltung von Aufgabenprioritäten für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignis), sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle und die Eigenschaft [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) werden nicht unterstützt.
  ([Firefox-Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs werden jetzt unterstützt. Diese geben die aktuelle Round-Trip-Zeit (RTT) und die Informationen zurück, die zur Berechnung der durchschnittlichen RTT für die Verbindung benötigt werden.
  ([Firefox-Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle unterstützen jetzt das Festlegen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), der für jedes `encoding` verwendet wird.
  Sie können auch einen `codec` für jedes Encoding im [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings)-Array festlegen, das der Methode [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle übergeben wird.
  ([Firefox-Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox-Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der FTP-Proxy-Support wurde aus den WebDriver-Fähigkeiten entfernt ([Firefox-Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller über WebDriver BiDi und WebDriver Classic (Marionette) gesetzten Cookies wurde auf maximal 400 Tage aktualisiert ([Firefox-Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue Befehl `emulation.setLocaleOverride` wurde implementiert, der es Clients ermöglicht, eine Locale in JavaScript-APIs zu überschreiben ([Firefox-Bug 1968952](https://bugzil.la/1968952)).
- Verbesserte Einstellung eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` in der `noProxy`-Eigenschaft hinzugefügt ([Firefox-Bug 1977180](https://bugzil.la/1977180)) und ein Fehler behoben, bei dem das Setzen eines HTTP-Proxys das Navigieren zu HTTPS-URLs nicht erlaubte ([Firefox-Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler wurde behoben, bei dem `browsingContext.create` nach einem unterbrochenen `browsingContext.print`-Befehl fehlschlug, wenn ein Tab mit dem `browsingContext.close`-Befehl geschlossen wurde ([Firefox-Bug 1841125](https://bugzil.la/1841125)).
- Der Befehl `session.end` wurde aktualisiert, um alle durch Netzwerkinterceptions blockierten Anfragen fortzusetzen ([Firefox-Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der `WebDriver:AddCookie`-Befehl wurde aktualisiert, um einen Fehler auszulösen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox-Bug 1977205](https://bugzil.la/1977205)).
- Der Dialogtext-Wert wurde aus der Fehlermeldung "unerwartetes öffnendes Alarmfenster" entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox-Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient zur Überwachung von möglichen Problemen. Es ist vorgesehen, die Validierung in allen Kanälen in einer zukünftigen Version zu erzwingen. ([Firefox-Bug 1976197](https://bugzil.la/1976197))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die auf Änderungen in den vom Benutzer angegebenen Einstellungen hören, die die Aktion einer Erweiterung betreffen. ([Firefox-Bug 1828220](https://bugzil.la/1828220))

## Experimentelle Web-Funktionen

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht die Einstellung der Größe, Position und Ränder von ankerbasierten Elementen relativ zu den Dimensionen von Ankerelementen. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS-Pseudo-Klasse {{CSSXRef(":heading")}} ermöglicht es, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie individuell anzusprechen. Die funktionale Pseudo-Klasse {{CSSXRef(":heading_function", ":heading()")}} ermöglicht es, Überschriftselemente zu stylen, die zur [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation)-Notation passen. ([Firefox-Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der Wert {{CSSXRef("view-transition-name", "match-element", "#match-element")}} der CSS-Eigenschaft {{CSSXRef("view-transition-name")}} ordnet jedem ausgewählten Element automatisch einen eindeutigen internen `view-transition-name` zu, anstatt sie einzeln benennen zu müssen. ([Firefox-Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skript-Ressourcen unterstützt. Diese erlauben es Websites, entweder [Integritätsgarantien für Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Stylesheet-Ressourcen unterstützt. Diese erlauben es Websites, entweder die Durchsetzung der Richtlinie zu garantieren oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox-Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen sind in Firefox 142 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

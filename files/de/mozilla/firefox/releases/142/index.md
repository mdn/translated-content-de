---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 26fe5fc9a2f302a7ac87458d2e2f35fe0b4901fb
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase`-Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Siehe [Firefox Bug 1973900](https://bugzil.la/1973900) für weitere Details.)

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt, was es Ihnen ermöglicht, URLs mit einer standardisierten Mustersyntax zu vergleichen und zu analysieren. ([Firefox Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt nun vollständig die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) und die Eigenschaften [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) auf Firefox Android.
  Dies ermöglicht es Ihnen, ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element so zu konfigurieren, dass es Verzeichnisse anstelle von Dateien akzeptiert ([Firefox Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird nun unterstützt und erlaubt es Entwicklern, ausgewählte Textbereiche über Shadow DOM-Grenzen hinweg genau zu erhalten. Darüber hinaus wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so modifiziert, dass sie Knoten innerhalb eines Shadow-Roots akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt und erlaubt es Entwicklern, den Fortschritt einer Animation zu verfolgen und anzuzeigen. ([Firefox Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass `fill` auf einer Animation gesetzt wird, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie `fill` weiterhin setzen sollten, bis mehr Browser diese Änderung unterstützen. ([Firefox Bug 1973203](https://bugzil.la/1973203)).
- Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird jetzt unterstützt und bietet einen standardisierten Mechanismus zur Zuweisung und Verwaltung von Aufgabenprioritäten für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis) sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle und die [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling)-Eigenschaft werden nicht unterstützt.
  ([Firefox Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs werden nun unterstützt. Diese geben die aktuelle Round-Trip-Zeit (RTT) und die Informationen zurück, die zur Berechnung der durchschnittlichen RTT für die Verbindung benötigt werden.
  ([Firefox Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle unterstützen nun das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), das für jedes `encoding` verwendet wird.
  Sie können auch einen `codec` für jedes Encoding im Array [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) festlegen, das an die Methode [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle übergeben wird.
  ([Firefox Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- FTP-Proxy-Unterstützung aus den WebDriver-Fähigkeiten entfernt ([Firefox Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller Cookies, die über WebDriver BiDi und WebDriver Classic (Marionette) gesetzt wurden, wurde auf 400 Tage begrenzt ([Firefox Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue `emulation.setLocaleOverride`-Befehl wurde implementiert, der es Clients ermöglicht, eine Spracheinstellung in JavaScript-APIs zu überschreiben ([Firefox Bug 1968952](https://bugzil.la/1968952)).
- Verbesserung beim Setzen eines Proxy mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` im `noProxy`-Eigenschaft hinzugefügt ([Firefox Bug 1977180](https://bugzil.la/1977180)) und ein Fehler behoben, bei dem das Setzen eines HTTP-Proxys nicht erlaubte, HTTPS-URLs zu navigieren ([Firefox Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler behoben, bei dem `browsingContext.create` nach einem unterbrochenen `browsingContext.print`-Befehl fehlschlug, nachdem ein Tab mit dem Befehl `browsingContext.close` geschlossen wurde ([Firefox Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end`-Befehl wurde aktualisiert, um alle Anfragen wieder aufzunehmen, die durch Netzwerkinterzeptionen blockiert wurden ([Firefox Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der `WebDriver:AddCookie`-Befehl wurde aktualisiert, um einen Fehler auszulösen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox Bug 1977205](https://bugzil.la/1977205)).
- Der Dialogtextwert wurde aus der Fehlermeldung 'unerwarteter Dialog geöffnet' entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden nun validiert, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient der Überwachung etwaiger Probleme. Die Absicht ist, die Validierung in allen Kanälen in einer zukünftigen Version durchzusetzen. ([Firefox Bug 1976197](https://bugzil.la/1976197))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die auf Änderungen in den benutzerspezifischen Einstellungen hören, die eine Aktion einer Erweiterung betreffen. ([Firefox Bug 1828220](https://bugzil.la/1828220))

## Experimentelle Webfunktionen

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht das Setzen der Größe, Position und der Ränder eines anchor-positionierten Elements relativ zu den Abmessungen von Ankerelementen. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":heading")}} ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu adressieren. Die funktionale Pseudoklasse {{CSSXRef(":heading_function", ":heading()")}} ermöglicht es Ihnen, Überschriftselemente zu stylen, die der [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation)-Notation entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der Wert {{CSSXRef("view-transition-name", "match-element", "#match-element")}} der CSS-Eigenschaft {{CSSXRef("view-transition-name")}} weist [automatisch](/de/docs/Web/CSS/view-transition-name#specifying_view-transition-name_values_automatically) jedem ausgewählten Element einen einzigartigen internen `view-transition-name` zu, anstatt sie individuell benennen zu müssen. ([Firefox Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Diese erlauben es Websites entweder, [Subressourcenschutzgarantien](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Stylesheet-Ressourcen unterstützt. Diese erlauben es Websites entweder, Verstöße gegen die Richtlinie durchzusetzen oder nur zu melden.
  ([Firefox Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen werden in Firefox 142 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

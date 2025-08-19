---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen. Firefox 142 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte entfernen Sie die Kommentarzeichen bei allen Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

### HTML

<!-- Keine bemerkenswerten Änderungen. -->

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt das veraltete `codebase`-Attribut nicht mehr. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Weitere Details finden Sie im [Firefox-Bug 1973900](https://bugzil.la/1973900)).

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt, sodass Sie URLs mithilfe einer standardisierten Mustersyntax abgleichen und analysieren können. ([Firefox-Bug 1731418](https://bugzil.la/1731418)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt, sodass Entwickler ausgewählte Textbereiche über Shadow-DOM-Grenzen hinweg genau bestimmen können. Darüber hinaus wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so geändert, dass sie Knoten innerhalb eines Shadow-Root akzeptieren. ([Firefox-Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt, sodass Entwickler den Fortschritt einer Animation verfolgen und anzeigen können. ([Firefox-Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) für eine Animation gesetzt wird, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie `fill` weiterhin setzen sollten, bis mehr Browser diese Änderung unterstützen. ([Firefox-Bug 1973203](https://bugzil.la/1973203)).
- Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird jetzt unterstützt und bietet einen standardisierten Mechanismus zur Zuweisung und Verwaltung von Aufgabenprioritäten für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis) sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle und die [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling)-Eigenschaft werden nicht unterstützt.
  ([Firefox-Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Dictionary werden jetzt unterstützt. Diese geben die aktuelle Round-Trip-Time (RTT) und die Informationen zurück, die zur Berechnung der durchschnittlichen RTT für die Verbindung benötigt werden.
  ([Firefox-Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle unterstützen jetzt das Einstellen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs) für jede `encoding`.
  Sie können auch einen `codec` für jede Codierung im [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings)-Array festlegen, das an die [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle übergeben wird.
  ([Firefox-Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox-Bug 1926622](https://bugzil.la/1926622)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- FTP-Proxy-Unterstützung aus den WebDriver-Funktionen entfernt ([Firefox-Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller Cookies, die über WebDriver BiDi und WebDriver Classic (Marionette) gesetzt werden, wurde auf maximal 400 Tage begrenzt ([Firefox-Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue Befehl `emulation.setLocaleOverride` wurde implementiert, der es Clients ermöglicht, eine Locale in JavaScript-APIs zu überschreiben ([Firefox-Bug 1968952](https://bugzil.la/1968952)).
- Verbesserte das Setzen eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` in der `noProxy`-Eigenschaft hinzugefügt ([Firefox-Bug 1977180](https://bugzil.la/1977180)) und einen Fehler behoben, bei dem das Setzen eines HTTP-Proxys nicht erlaubte, zu HTTPS-URLs zu navigieren ([Firefox-Bug 1977168](https://bugzil.la/1977168)).
- Behoben: Ein Fehler, bei dem `browsingContext.create` nach einem durch das Schließen eines Tabs mit dem Befehl `browsingContext.close` unterbrochenen `browsingContext.print`-Befehl fehlschlagen würde ([Firefox-Bug 1841125](https://bugzil.la/1841125)).
- Der Befehl `session.end` wurde aktualisiert, um alle durch Netzwerkinterzeption blockierten Anfragen zu ermöglichen ([Firefox-Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der Befehl `WebDriver:AddCookie` wurde aktualisiert, um einen Fehler zu werfen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox-Bug 1977205](https://bugzil.la/1977205)).
- Der Dialogtextwert wurde aus der `unexpected alert open`-Fehlermeldung entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox-Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient dazu, Überwachungen auf eventuelle Probleme zu ermöglichen. Es ist geplant, die Validierung in einer zukünftigen Version in allen Kanälen durchzusetzen. ([Firefox-Bug 1976197](https://bugzil.la/1976197))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die Änderungen an den benutzerspezifizierten Einstellungen überwachen, die die Aktionen einer Erweiterung beeinflussen. ([Firefox-Bug 1828220](https://bugzil.la/1828220))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Funktionen

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht es, die Größe, Position und Ränder eines durch Anker positionierten Elements relativ zu den Dimensionen von Ankerelementen festzulegen. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.anchor-positioning.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":heading")}} ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu gestalten, anstatt sie einzeln anzusprechen. Die funktionale Pseudoklasse {{CSSXRef(":heading_function", ":heading()")}} ermöglicht es Ihnen, Überschriftselemente zu gestalten, die dem [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation)-Notation entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `layout.css.anchor-positioning.enabled`

  Der {{CSSXRef("view-transition-name", "match-element", "#match-element")}}-Wert der CSS-Eigenschaft {{CSSXRef("view-transition-name")}} weist jedem ausgewählten Element automatisch einen eindeutigen internen `view-transition-name` zu, anstatt sie individuell zu benennen. ([Firefox-Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subressourcensicherheitsgarantien](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Stylesheet-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder die Richtlinie durchzusetzen oder nur Verstöße zu melden.
  ([Firefox-Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen werden in Firefox 142 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite die entsprechende Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

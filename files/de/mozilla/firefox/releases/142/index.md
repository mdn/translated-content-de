---
title: Firefox 142 für Entwickler
short-title: Firefox 142
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 4a54946791694e14bf3742f3f327bbea44c698c8
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase`-Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Siehe [Firefox-Bug 1973900](https://bugzil.la/1973900) für weitere Details.)

### CSS

- Der [`&`-Selektor](/de/docs/Web/CSS/Nesting_selector) innerhalb von {{cssxref("@scope")}} erbt nicht mehr die [Spezifität des Startselektores des Scopes](/de/docs/Web/CSS/@scope#specificity_in_scope).
  Dies macht `&`-Selektoren in `@scope` konsistent mit [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting), wodurch unerwartete Unterschiede in der Spezifität vermieden werden (siehe [CSS-Nesting und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)).
  ([Firefox-Bug 1975531](https://bugzil.la/1975531)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt, sodass Sie URLs mit einer standardisierten Mustersyntax abgleichen und analysieren können. ([Firefox-Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt nun vollständig die Eigenschaften [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) und [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) auf Firefox Android.
  Dadurch können Sie ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element so konfigurieren, dass es Verzeichnisse anstelle von Dateien akzeptiert. ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird nun unterstützt, was es Entwicklern ermöglicht, ausgewählte Textbereiche genau über Schatten-DOM-Grenzen hinweg zu erhalten. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so geändert, dass sie Knoten innerhalb eines Schattenwurzel akzeptieren. ([Firefox-Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird nun unterstützt und ermöglicht Entwicklern, den Fortschritt durch eine Animation zu verfolgen und anzuzeigen. ([Firefox-Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass die Eigenschaft [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf einer Animation gesetzt ist, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie, bis mehr Browser diese Änderung unterstützen, weiterhin `fill` setzen sollten. ([Firefox-Bug 1973203](https://bugzil.la/1973203)).
- Das [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird nun unterstützt und bietet einen standardisierten Mechanismus zur Zuweisung und Verwaltung von Aufgabenprioritäten für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis) sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die Schnittstelle [`Scheduling`](/de/docs/Web/API/Scheduling) und die Eigenschaft [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) werden nicht unterstützt.
  ([Firefox-Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs werden nun unterstützt. Diese geben die aktuelle Round-Trip-Zeit (RTT) und die Informationen zurück, die zur Berechnung der durchschnittlichen RTT für die Verbindung benötigt werden.
  ([Firefox-Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle unterstützen jetzt das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), der für jede `encoding` verwendet wird.
  Sie können auch einen `codec` für jedes Encoding im Array [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) festlegen, das an die Methode [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle übergeben wird.
  ([Firefox-Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden nun unterstützt. ([Firefox-Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für FTP-Proxy aus den WebDriver-Fähigkeiten entfernt ([Firefox-Bug 1972670](https://bugzil.la/1972670)).
- Aktualisierte Ablaufwerte für alle über WebDriver BiDi und WebDriver classic (Marionette) gesetzten Cookies, die auf 400 Tage begrenzt sind ([Firefox-Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Die neue Command `emulation.setLocaleOverride` implementiert, die es Clients ermöglicht, ein Gebietsschema in JavaScript-APIs zu überschreiben ([Firefox-Bug 1968952](https://bugzil.la/1968952)).
- Verbesserte das Setzen eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` im `noProxy`-Eigenschaft hinzugefügt ([Firefox-Bug 1977180](https://bugzil.la/1977180)) und ein Bug behoben, bei dem das Setzen eines HTTP-Proxys das Navigieren zu HTTPS-URLs nicht erlaubte ([Firefox-Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler behoben, bei dem `browsingContext.create` fehlschlug, nachdem ein `browsingContext.print`-Befehl durch das Schließen eines Tabs mit dem `browsingContext.close`-Befehl unterbrochen wurde ([Firefox-Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end`-Befehl wurde aktualisiert, um alle Anfragen fortzusetzen, die durch Netzwerkunterbrechungen blockiert wurden ([Firefox-Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der `WebDriver:AddCookie`-Befehl wurde aktualisiert, um einen Fehler auszulösen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox-Bug 1977205](https://bugzil.la/1977205)).
- Die Dialogtext-Werte aus der Fehlermeldung `unerwartetes Öffnen von Warnmeldungen` entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox-Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt werden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient dazu, Probleme zu überwachen. Das Ziel ist, die Validierung in einer zukünftigen Version in allen Kanälen durchzusetzen. ([Firefox-Bug 1976197](https://bugzil.la/1976197))
- Hinzufügung der Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}}, die auf Änderungen an den benutzerspezifischen Einstellungen hören, die eine Aktion einer Erweiterung beeinflussen. ([Firefox-Bug 1828220](https://bugzil.la/1828220))
- Fügt {{WebExtAPIRef("browserSettings.verticalTabs")}} hinzu, wodurch Erweiterungen steuern können, ob der Browser die Tableiste horizontal oder vertikal anzeigen soll. ([Firefox-Bug 1946600](https://bugzil.la/1946600))

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht es, die Größe, Position und Ränder von Anker-positionierten Elementen relativ zu den Dimensionen von Ankerelementen festzulegen. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":heading")}} erlaubt es, alle [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die funktionale Pseudoklasse {{CSSXRef(":heading_function", ":heading()")}} erlaubt es, Überschriftenelemente zu stylen, die das [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation)-Notationsmuster entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der Wert {{CSSXRef("view-transition-name", "match-element", "#match-element")}} der CSS-Eigenschaft {{CSSXRef("view-transition-name")}} weist automatisch jedem ausgewählten Element einen einzigartigen internen `view-transition-name` zu, anstatt sie einzeln benennen zu müssen. ([Firefox-Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, entweder [Integritätsgarantien für Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder Verstöße gegen die Richtlinie nur zu melden.
  ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Stylesheet-Ressourcen unterstützt. Diese erlauben es Websites, entweder Verstöße gegen die Richtlinie durchzusetzen oder nur zu melden.
  ([Firefox-Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen werden in Firefox 142 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

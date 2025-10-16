---
title: Firefox 142 Versionshinweise für Entwickler
short-title: Firefox 142
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt das veraltete `codebase`-Attribut nicht mehr. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Siehe [Firefox-Bug 1973900](https://bugzil.la/1973900) für weitere Details.)

### CSS

- Der [`&` Selektor](/de/docs/Web/CSS/Nesting_selector) innerhalb von {{cssxref("@scope")}} erbt nicht mehr die [Spezifität des Scope-Startselektors](/de/docs/Web/CSS/@scope#specificity_in_scope).
  Dies macht `&`-Selektoren in `@scope` konsistent mit [CSS nesting](/de/docs/Web/CSS/CSS_nesting) und vermeidet unerwartete Unterschiede in der Spezifität (siehe [CSS-Nesting und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)).
  ([Firefox-Bug 1975531](https://bugzil.la/1975531)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt und ermöglicht es Ihnen, URLs mit einer standardisierten Mustersyntax zu vergleichen und zu analysieren. ([Firefox-Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt jetzt vollständig die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) und [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) Eigenschaften auf Firefox Android.
  Damit können Sie ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element so konfigurieren, dass statt Dateien Verzeichnisse akzeptiert werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt und ermöglicht es Entwicklern, genau die ausgewählten Textbereiche über Shadow-DOM-Grenzen hinweg zu erhalten. Darüber hinaus wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle so modifiziert, dass sie auch Knoten innerhalb eines Shadow-Roots akzeptieren. ([Firefox-Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt, sodass Entwickler den Fortschritt einer Animation verfolgen und anzeigen können. ([Firefox-Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf eine Animation gesetzt wird, um die berechneten Stile nach der Fertigstellung der Animation zu übernehmen. Beachten Sie, dass Sie `fill` weiterhin setzen sollten, bis mehr Browser diese Änderung unterstützen. ([Firefox-Bug 1973203](https://bugzil.la/1973203)).
- Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird jetzt unterstützt und bietet einen standardisierten Mechanismus zum Zuweisen und Verwalten von Aufgabenprioritäten für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis) sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle und die [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling)-Eigenschaft werden nicht unterstützt.
  ([Firefox-Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Dictionaries werden jetzt unterstützt. Diese geben die aktuelle Round-Trip-Zeit (RTT) und die notwendigen Informationen zur Berechnung der durchschnittlichen RTT für die Verbindung zurück.
  ([Firefox-Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle unterstützen jetzt das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs) für jede `encoding`.
  Sie können auch ein `codec` für jede Codierung im [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings)-Array festlegen, das an die Methode [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle übergeben wird.
  ([Firefox-Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox-Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für FTP-Proxy aus WebDriver-Fähigkeiten entfernt ([Firefox-Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller über WebDriver BiDi und WebDriver Classic (Marionette) gesetzten Cookies wurde auf 400 Tage begrenzt ([Firefox-Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue `emulation.setLocaleOverride`-Befehl wurde implementiert, der es Clients ermöglicht, eine Locale in JavaScript-APIs zu überschreiben ([Firefox-Bug 1968952](https://bugzil.la/1968952)).
- Verbesserung beim Setzen eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` in der `noProxy`-Eigenschaft hinzugefügt ([Firefox-Bug 1977180](https://bugzil.la/1977180)) und ein Fehler behoben, bei dem das Setzen eines HTTP-Proxys die Navigation zu HTTPS-URLs nicht zuließ ([Firefox-Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler wurde behoben, bei dem `browsingContext.create` nach einem `browsingContext.print`-Befehl fehlschlug, der durch das Schließen eines Tabs mit dem `browsingContext.close`-Befehl unterbrochen wurde ([Firefox-Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end`-Befehl wurde aktualisiert, um alle Anfragen, die durch Netzwerkinterzeptionen blockiert wurden, fortzusetzen ([Firefox-Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der `WebDriver:AddCookie`-Befehl wurde dahingehend aktualisiert, dass er einen Fehler auslöst, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox-Bug 1977205](https://bugzil.la/1977205)).
- Der Dialogtextwert wurde aus der Fehlermeldung "unerwarteter Alarm geöffnet" entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox-Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-On-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly ist zur Überwachung eventueller Probleme aktiviert. Es ist beabsichtigt, die Validierung in einer zukünftigen Version in allen Kanälen durchzusetzen. ([Firefox-Bug 1976197](https://bugzil.la/1976197))
- Die {{WebExtAPIRef("cookies")}}-Methoden akzeptieren und geben jetzt Millisekunden im Bruchteil von `expirationDate` zurück. ([Firefox-Bug 1972757](https://bugzil.la/1972757))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die auf Änderungen in den benutzerspezifischen Einstellungen hören, die die Aktion einer Erweiterung beeinflussen. ([Firefox-Bug 1828220](https://bugzil.la/1828220))
- Fügt {{WebExtAPIRef("browserSettings.verticalTabs")}} hinzu, das es Erweiterungen ermöglicht, zu steuern, ob der Browser die Tableiste horizontal oder vertikal anzeigt. ([Firefox-Bug 1946600](https://bugzil.la/1946600))

## Experimentelle Web-Funktionen

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht es, die Größe, Position und Margen eines Anker-positionierten Elements relativ zu den Dimensionen der Ankerelemente zu setzen. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":heading")}} erlaubt es, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die funktionale Pseudoklasse {{CSSXRef(":heading_function", ":heading()")}} erlaubt es, Überschriftselemente zu stylen, die der [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation)-Notation entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der Wert {{CSSXRef("view-transition-name", "match-element", "#match-element")}} der CSS-Eigenschaft {{CSSXRef("view-transition-name")}} weist jedem ausgewählten Element [automatisch](/de/docs/Web/CSS/view-transition-name#specifying_view-transition-name_values_automatically) einen einzigartigen internen `view-transition-name` zu, anstatt sie einzeln benennen zu müssen. ([Firefox-Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skript-Ressourcen unterstützt. Diese erlauben es Webseiten, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Stylesheet-Ressourcen unterstützt. Diese erlauben es Webseiten entweder die Richtlinie durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox-Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen sind in Firefox 142 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und stellen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Stabil)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 0883a7eca5c44d65daea8d73163a89d66a8d2f13
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('object')}} Element unterstützt nicht länger das veraltete `codebase` Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data) Attribut. (Siehe [Firefox Bug 1973900](https://bugzil.la/1973900) für weitere Details.)

### CSS

- Der [`&` Selektor](/de/docs/Web/CSS/Nesting_selector) innerhalb von {{cssxref("@scope")}} erbt nicht länger die [Spezifität des Scope-Startselektors](/de/docs/Web/CSS/@scope#specificity_in_scope).
  Dies macht `&` Selektoren in `@scope` konsistent mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting), um unerwartete Unterschiede in der Spezifität zu vermeiden (siehe [CSS-Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)).
  ([Firefox Bug 1975531](https://bugzil.la/1975531)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt, wodurch Sie in der Lage sind, URLs mit einer standardisierten Mustersyntax abzugleichen und zu analysieren. ([Firefox Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt jetzt vollständig die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) Attribut) und [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) Eigenschaften auf Firefox Android.
  Dies ermöglicht es Ihnen, ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element so zu konfigurieren, dass es Verzeichnisse anstelle von Dateien akzeptiert ([Firefox Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt, wodurch Entwickler in der Lage sind, Textbereiche korrekt über Shadow DOM-Grenzen hinweg auszuwählen. Darüber hinaus wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) des [`Selection`](/de/docs/Web/API/Selection) Interfaces modifiziert, um Knoten innerhalb eines Shadow Roots zu akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt, sodass Entwickler den Fortschritt einer Animation nachverfolgen und anzeigen können. ([Firefox Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht länger, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf einer Animation gesetzt ist, um die berechneten Stile nach Abschluss der Animation anzuwenden. Beachten Sie, dass Sie diese Einstellung weiterhin setzen sollten, bis mehr Browser diese Änderung unterstützen. ([Firefox Bug 1973203](https://bugzil.la/1973203)).
- Die [Priorisierte Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird jetzt unterstützt, was einen standardisierten Mechanismus zur Zuweisung und Verwaltung von Task-Prioritäten für eine Anwendung bietet.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignis) und die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die [`Scheduling`](/de/docs/Web/API/Scheduling) Schnittstelle und die [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) Eigenschaft werden nicht unterstützt.
  ([Firefox Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Wörterbuchs werden jetzt unterstützt. Diese geben die aktuelle Round-Trip-Zeit (RTT) und die Informationen zurück, die zur Berechnung der durchschnittlichen RTT für die Verbindung benötigt werden.
  ([Firefox Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Interfaces unterstützen jetzt das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs) für jede `encoding`.
  Sie können auch einen `codec` für jede Kodierung im [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) Array setzen, das der [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interfaces übergeben wird.
  ([Firefox Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Interfaces werden jetzt unterstützt. ([Firefox Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- FTP-Proxy-Unterstützung aus den WebDriver-Fähigkeiten entfernt ([Firefox Bug 1972670](https://bugzil.la/1972670)).
- Den Ablaufwert aller von WebDriver BiDi und WebDriver klassisch (Marionette) gesetzten Cookies aktualisiert, um auf 400 Tage begrenzt zu sein ([Firefox Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue `emulation.setLocaleOverride` Befehl wurde implementiert, der es Clients ermöglicht, eine Regionaleinstellung in JavaScript-APIs zu überschreiben ([Firefox Bug 1968952](https://bugzil.la/1968952)).
- Das Einstellen eines Proxys mit `browsingContext.createUserContext` verbessert: Unterstützung für Host-Muster wie `.mozilla.org` in der `noProxy` Eigenschaft hinzugefügt ([Firefox Bug 1977180](https://bugzil.la/1977180)) und einen Fehler behoben, bei dem beim Setzen eines HTTP-Proxys nicht zu HTTPS-URLs navigiert werden konnte ([Firefox Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler behoben, bei dem `browsingContext.create` fehlschlug, nachdem ein `browsingContext.print` Befehl durch Schließen eines Tabs mit dem `browsingContext.close` Befehl unterbrochen wurde ([Firefox Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end` Befehl wurde aktualisiert, um alle Anfragen fortzusetzen, die durch Netzwerkeingriffe blockiert waren ([Firefox Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der `WebDriver:AddCookie` Befehl wurde aktualisiert, um einen Fehler zu werfen, wenn ein Ziel-Cookie die `sameSite=none` und `secure=false` Attribute hat ([Firefox Bug 1977205](https://bugzil.la/1977205)).
- Der Textwert des Dialogs wurde aus der `unexpected alert open` Fehlermeldung entfernt, da der Dialogtext jetzt über das `data` Feld verfügbar ist ([Firefox Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} im Nightly erstellt werden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Die Implementierung im Nightly dient dazu, Probleme zu überwachen. Die Absicht ist, die Validierung in einer zukünftigen Veröffentlichung in allen Kanälen durchzusetzen. ([Firefox Bug 1976197](https://bugzil.la/1976197))
- Fügt die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} hinzu, die auf Änderungen in den benutzerspezifischen Einstellungen hören, die die Aktion einer Erweiterung betreffen. ([Firefox Bug 1828220](https://bugzil.la/1828220))
- Fügt {{WebExtAPIRef("browserSettings.verticalTabs")}} hinzu, das es Erweiterungen ermöglicht, zu steuern, ob der Browser die Tableiste horizontal oder vertikal anzeigt. ([Firefox Bug 1946600](https://bugzil.la/1946600))

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS {{CSSXRef("anchor-size")}} Funktion ermöglicht das Einstellen der Größe, Position und Abstände von ankerpositionierten Elementen relativ zu den Dimensionen von Ankerelementen. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS {{CSSXRef(":heading")}} Pseudoklasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{CSSXRef(":heading_function", ":heading()")}} funktionale Pseudoklasse ermöglicht es, Überschriftselemente zu stylen, die dem [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation) Notation entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der {{CSSXRef("view-transition-name", "match-element", "#match-element")}} Wert der CSS {{CSSXRef("view-transition-name")}} Eigenschaft weist [automatisch](/de/docs/Web/CSS/view-transition-name#specifying_view-transition-name_values_automatically) jedem ausgewählten Element einen eindeutigen internen `view-transition-name` zu, anstatt sie individuell zu benennen. ([Firefox Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Skript-Resourcen unterstützt. Diese ermöglichen es Websites, entweder [Integrity-Garantien für Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verletzungen der Richtlinie zu melden.
  ([Firefox Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stylesheet-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder Durchsetzung oder nur das Melden von Richtlinienverletzungen.
  ([Firefox Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen werden in Firefox 142 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

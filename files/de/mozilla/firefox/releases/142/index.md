---
title: Firefox 142 Versionshinweise für Entwickler
short-title: Firefox 142
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Dieser Artikel stellt Informationen über die Änderungen in Firefox 142 bereit, die Entwickler betreffen.
Firefox 142 wurde am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('object')}}-Element unterstützt nicht mehr das veraltete `codebase`-Attribut. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Weitere Details finden Sie im [Firefox Bug 1973900](https://bugzil.la/1973900)).

### CSS

- Der [`&` Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) innerhalb von {{cssxref("@scope")}} erbt nicht mehr die [Spezifität des Beginn-Scope-Selectors](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).
  Dies macht `&` Selektoren in `@scope` konsistent mit [CSS verschachteln](/de/docs/Web/CSS/Guides/Nesting), um unerwartete Unterschiede in der Spezifität zu vermeiden (siehe [CSS verschachteln und Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)).
  ([Firefox Bug 1975531](https://bugzil.la/1975531)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) wird vollständig unterstützt, sodass Sie URLs mithilfe einer standardisierten Mustersyntax übereinstimmen und analysieren können. ([Firefox Bug 1731418](https://bugzil.la/1731418)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) unterstützt jetzt vollständig die [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) (und das entsprechende HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)) und [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) Eigenschaften auf Firefox Android.
  Dies ermöglicht es Ihnen, ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element so zu konfigurieren, dass es statt Dateien Verzeichnisse akzeptiert ([Firefox Bug 1973726](https://bugzil.la/1973726)).

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird nun unterstützt, die es Entwicklern ermöglicht, exakt Textranges über Shadow-DOM-Grenzen hinweg zu erhalten. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) des [`Selection`](/de/docs/Web/API/Selection)-Interfaces so modifiziert, dass sie Knoten innerhalb eines Shadow-Roots akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird nun unterstützt, was es Entwicklern ermöglicht, den Fortschritt einer Animation zu verfolgen und anzuzeigen. ([Firefox Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf einer Animation gesetzt ist, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie, bis mehr Browser diese Änderung unterstützen, weiterhin `fill` setzen sollten. ([Firefox Bug 1973203](https://bugzil.la/1973203)).
- Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) wird jetzt unterstützt und bietet einen standardisierten Mechanismus zur Zuweisung und Verwaltung von Aufgabenprioritäten für eine Anwendung.
  Die unterstützten Schnittstellen umfassen: [`Scheduler`](/de/docs/Web/API/Scheduler), [`TaskController`](/de/docs/Web/API/TaskController), [`TaskSignal`](/de/docs/Web/API/TaskSignal), [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) (und das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignis) sowie die Eigenschaften [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler).
  Die [`Scheduling`](/de/docs/Web/API/Scheduling) Schnittstelle und die [`Navigator.scheduling`](/de/docs/Web/API/Navigator/scheduling) Eigenschaft werden nicht unterstützt.
  ([Firefox Bug 1966997](https://bugzil.la/1966997)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`currentRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime), [`totalRoundTripTime`](/de/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime) und [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived) des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Wörterbuchs werden jetzt unterstützt. Diese geben die aktuelle Round-Trip-Zeit (RTT) und die Informationen zurück, die zur Berechnung der durchschnittlichen RTT für die Verbindung benötigt werden.
  ([Firefox Bug 1371391](https://bugzil.la/1371391)).
- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Schnittstelle unterstützen jetzt das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), das für jede `encoding` verwendet wird.
  Sie können auch einen `codec` für jede Kodierung im [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) Array setzen, das an die [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle übergeben wird.
  ([Firefox Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Schnittstelle werden jetzt unterstützt. ([Firefox Bug 1926622](https://bugzil.la/1926622)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für FTP-Proxy aus den WebDriver-Funktionen entfernt ([Firefox Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller Cookies, die über WebDriver BiDi und klassischen WebDriver (Marionette) gesetzt wurden, wurde auf 400 Tage begrenzt ([Firefox Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Implementierte den neuen `emulation.setLocaleOverride` Befehl, der es Clients ermöglicht, eine Locale in JavaScript-APIs zu überschreiben ([Firefox Bug 1968952](https://bugzil.la/1968952)).
- Verbesserung beim Setzen eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` im `noProxy`-Eigenschaft hinzugefügt ([Firefox Bug 1977180](https://bugzil.la/1977180)) und einen Fehler behoben, bei dem das Setzen eines HTTP-Proxys die Navigation zu HTTPS-URLs nicht erlaubte ([Firefox Bug 1977168](https://bugzil.la/1977168)).
- Einen Fehler behoben, bei dem `browsingContext.create` fehlschlagen würde, nachdem ein `browsingContext.print` Befehl durch das Schließen eines Tabs mit dem `browsingContext.close` Befehl unterbrochen wurde ([Firefox Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end` Befehl wurde aktualisiert, um alle Anfragen fortzusetzen, die durch Netzwerkinterzeptionen blockiert wurden ([Firefox Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der `WebDriver:AddCookie` Befehl wurde aktualisiert, um einen Fehler auszulösen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox Bug 1977205](https://bugzil.la/1977205)).
- Der Textwert des Dialogs wurde von der `unerwarteten Alert geöffnet` Fehlermeldung entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden nun validiert und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient dazu, Probleme zu überwachen. Die Absicht ist, die Validierung in einem künftigen Release in allen Kanälen zu erzwingen. ([Firefox Bug 1976197](https://bugzil.la/1976197))
- Die {{WebExtAPIRef("cookies")}}-Methoden akzeptieren und geben nun Millisekunden im Bruchteil von `expirationDate` zurück. ([Firefox Bug 1972757](https://bugzil.la/1972757))
- Fügt die {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} Ereignisse hinzu, die auf Änderungen in den benutzerspezifischen Einstellungen hören, die die Aktion einer Erweiterung beeinflussen. ([Firefox Bug 1828220](https://bugzil.la/1828220))
- Fügt {{WebExtAPIRef("browserSettings.verticalTabs")}} hinzu, was es Erweiterungen ermöglicht, zu steuern, ob der Browser die Tableiste horizontal oder vertikal anzeigt. ([Firefox Bug 1946600](https://bugzil.la/1946600))
- Aktiviert die eingebaute Daten-Erfassungs-Zustimmungsfunktion von Firefox für Firefox für Android. Siehe den Artikel im Extension Workshop [Firefox built-in consent for data collection and transmission](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/). ([Firefox Bug 1954524](https://bugzil.la/1954524))

## Experimentelle Web-Features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS {{CSSXRef("anchor-size")}}-Funktion ermöglicht es, die Größe, Position und Ränder eines ankergestützten Elements relativ zu den Dimensionen der Ankerelemente festzulegen. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.heading-selector.enabled`

  Die CSS {{CSSXRef(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die funktionale Pseudo-Klasse {{CSSXRef(":heading_function", ":heading()")}} ermöglicht es Ihnen, Überschriftselemente zu stylen, die den angegebenen Überschriftsstufen entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  Der {{CSSXRef("view-transition-name", "match-element", "#match-element")}} Wert der CSS {{CSSXRef("view-transition-name")}} Eigenschaft weist [automatisch](/de/docs/Web/CSS/Reference/Properties/view-transition-name#specifying_view-transition-name_values_automatically) jedem ausgewählten Element einen einzigartigen internen `view-transition-name` zu, anstatt diese einzeln benennen zu müssen. ([Firefox Bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Skripte (Nightly): `security.integrity_policy.enabled`

  Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Skript-Ressourcen unterstützt. Diese ermöglichen Websites entweder, [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox Bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** für Stylesheets: `security.integrity_policy.stylesheet.enabled`

  Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Stylesheet-Ressourcen unterstützt. Diese ermöglichen Websites entweder die Durchsetzung oder nur die Meldung von Verstößen gegen die Richtlinie.
  ([Firefox Bug 1974247](https://bugzil.la/1974247)).

Diese Funktionen werden in Firefox 142 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

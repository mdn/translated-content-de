---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: 1d722bee6d6c1455d41025d8a2842aa82fa8d9d9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 142, die Entwickler betreffen.
Firefox 142 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=142) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentare bei allen Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

<!-- Keine bemerkenswerten Änderungen. -->

#### Entfernt

- Das {{HTMLElement('object')}}-Element unterstützt das veraltete `codebase`-Attribut nicht mehr. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data) Attribut. (Für weitere Details siehe [Firefox Bug 1973900](https://bugzil.la/1973900)).

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

#### DOM

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird nun unterstützt, sodass Entwickler genaue ausgewählte Textbereiche über Shadow-DOM-Grenzen hinweg abrufen können. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) des [`Selection`](/de/docs/Web/API/Selection) Interfaces modifiziert, um Knoten innerhalb eines Shadow-Roots zu akzeptieren. ([Firefox Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird nun unterstützt, was es Entwicklern ermöglicht, den Fortschritt einer Animation zu verfolgen und anzuzeigen. ([Firefox Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf einer Animation gesetzt wird, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie `fill` weiterhin setzen sollten, bis mehr Browser diese Änderung unterstützen. ([Firefox Bug 1973203](https://bugzil.la/1973203)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Interfaces unterstützen nun das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), der für jede `encoding` verwendet wird.
  Sie können auch einen `codec` für jede Kodierung im Array [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) setzen, das an die Methode [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interfaces übergeben wird.
  ([Firefox Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Interfaces werden nun unterstützt. ([Firefox Bug 1926622](https://bugzil.la/1926622)).

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- FTP-Proxy-Unterstützung aus den WebDriver-Fähigkeiten entfernt ([Firefox Bug 1972670](https://bugzil.la/1972670)).
- Der Ablaufwert aller über WebDriver BiDi und WebDriver Classic (Marionette) gesetzten Cookies wurde auf 400 Tage begrenzt ([Firefox Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Der neue Befehl `emulation.setLocaleOverride` wurde implementiert, der es Clients ermöglicht, eine Locale in JavaScript-APIs zu überschreiben ([Firefox Bug 1968952](https://bugzil.la/1968952)).
- Verbesserung beim Setzen eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Hostmuster wie `.mozilla.org` im `noProxy` Eigenschaft hinzugefügt ([Firefox Bug 1977180](https://bugzil.la/1977180)) und einen Fehler behoben, bei dem das Setzen eines HTTP-Proxys das Navigieren zu HTTPS-URLs nicht erlaubte ([Firefox Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler wurde behoben, bei dem `browsingContext.create` fehlschlug, nachdem ein `browsingContext.print`-Befehl durch Schließen eines Tabs mit dem `browsingContext.close`-Befehl unterbrochen wurde ([Firefox Bug 1841125](https://bugzil.la/1841125)).
- Der `session.end`-Befehl wurde aktualisiert, um alle durch Netzwerkabfangaktionen blockierten Anfragen wieder aufzunehmen ([Firefox Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der Befehl `WebDriver:AddCookie` wurde aktualisiert, um einen Fehler zu werfen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox Bug 1977205](https://bugzil.la/1977205)).
- Der Dialogtextwert wurde aus der Fehlermeldung "unerwartetes Alert offen" entfernt, da der Dialogtext nun über das `data`-Feld verfügbar ist ([Firefox Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden nun validiert, und ungültige Cookies werden abgewiesen. Die Implementierung in Nightly ist, um mögliche Probleme zu überwachen. Die Absicht ist, die Validierung in einer zukünftigen Version auf alle Kanäle auszuweiten. ([Firefox Bug 1976197](https://bugzil.la/1976197))
- Fügt die {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}} Ereignisse hinzu, die auf Änderungen in den nutzerspezifischen Einstellungen hören, die eine Aktion einer Erweiterung beeinflussen. ([Firefox Bug 1828220](https://bugzil.la/1828220))

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionalitäten

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht das Setzen von Größe, Position und Rändern von Anker-positionierten Elementen relativ zu den Dimensionen der Ankerknoten. ([Firefox Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.anchor-positioning.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":heading")}} ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) gleichzeitig zu stylen, anstatt sie einzeln anzusprechen. Die funktionale Pseudoklasse {{CSSXRef(":heading_function", ":heading()")}} ermöglicht es, Überschriftselemente zu stylen, die der [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation) Notation entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden nun unterstützt. Diese erlauben es Websites, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox Bug 1976656](https://bugzil.la/1976656)).

Diese Funktionen sind in Firefox 142 vorhanden, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie den entsprechenden Präferenzwert auf der `about:config` Seite und setzen Sie ihn auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

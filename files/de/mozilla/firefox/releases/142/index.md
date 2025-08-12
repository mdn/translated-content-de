---
title: Firefox 142 für Entwickler
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
l10n:
  sourceCommit: ec0c9fa917380cf9a3a2908e413a5d7af38900d5
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 142, die Entwickler betreffen. Firefox 142 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. August 2025](https://whattrainisitnow.com/release/?version=142) ausgeliefert.

> [!NOTE]
> Die Versionshinweise zu dieser Firefox-Version befinden sich noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Anmerkungen schreiben. -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

<!-- Keine bemerkenswerten Änderungen. -->

#### Entfernt

- Das {{HTMLElement('object')}}-Element unterstützt das veraltete `codebase`-Attribut nicht mehr. Verwenden Sie stattdessen das [`data`](/de/docs/Web/HTML/Reference/Elements/object#data)-Attribut. (Siehe [Firefox-Bug 1973900](https://bugzil.la/1973900) für weitere Details.)

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

- Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) wird jetzt unterstützt und ermöglicht es Entwicklern, ausgewählte Textbereiche über Schatten-DOM-Grenzen hinweg präzise zu erhalten. Zusätzlich wurden die Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle geändert, um Knoten innerhalb eines Schattenwurzel zu akzeptieren. ([Firefox-Bug 1903870](https://bugzil.la/1903870)).
- Die Eigenschaft [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) wird jetzt unterstützt, wodurch Entwickler den Fortschritt einer Animation verfolgen und anzeigen können. ([Firefox-Bug 1834878](https://bugzil.la/1834878)).
- Die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) erfordert nicht mehr, dass [`fill`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf eine Animation gesetzt wird, um die berechneten Stile nach Abschluss der Animation zu übernehmen. Beachten Sie, dass Sie, bis mehr Browser diese Änderung unterstützen, `fill` weiterhin setzen sollten. ([Firefox-Bug 1973203](https://bugzil.la/1973203)).

#### Media, WebRTC und Web Audio

- Die Methoden [`setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) und [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Schnittstelle unterstützen jetzt das Setzen und Abrufen des spezifischen [`codec`](/de/docs/Web/API/RTCRtpSender/setParameters#codecs), das für jedes `encoding` verwendet wird. Sie können auch ein `codec` für jede Kodierung im [`init.sendEncodings`](/de/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings)-Array setzen, das an die [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle übergeben wird. ([Firefox-Bug 1894137](https://bugzil.la/1894137)).
- Die Eigenschaften [`estimatedPlayoutTimestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp), [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets), [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount), [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay), [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay), [`keyFramesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/keyFramesDecoded), [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount), [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime), [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration) und [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox-Bug 1926622](https://bugzil.la/1926622)).

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- FTP-Proxy-Unterstützung aus den WebDriver-Fähigkeiten entfernt ([Firefox-Bug 1972670](https://bugzil.la/1972670)).
- Aktualisiert den Ablaufwert aller Cookies, die über WebDriver BiDi und WebDriver classic (Marionette) gesetzt werden, auf 400 Tage begrenzt zu sein ([Firefox-Bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Implementiert den neuen Befehl `emulation.setLocaleOverride`, der es Clients ermöglicht, in JavaScript-APIs eine Locale zu überschreiben ([Firefox-Bug 1968952](https://bugzil.la/1968952)).
- Verbessertes Setzen eines Proxys mit `browsingContext.createUserContext`: Unterstützung für Host-Muster wie `.mozilla.org` in der `noProxy`-Eigenschaft hinzugefügt ([Firefox-Bug 1977180](https://bugzil.la/1977180)) und ein Fehler behoben, bei dem das Setzen eines HTTP-Proxys nicht erlaubte, zu HTTPS-URLs zu navigieren ([Firefox-Bug 1977168](https://bugzil.la/1977168)).
- Ein Fehler behoben, bei dem `browsingContext.create` nach einem `browsingContext.print`-Befehl fehlschlug, der durch das Schließen eines Tabs mit dem `browsingContext.close`-Befehl unterbrochen wurde ([Firefox-Bug 1841125](https://bugzil.la/1841125)).
- Der Befehl `session.end` wurde aktualisiert, um alle Anfragen fortzusetzen, die durch Netzwerkabfangungen blockiert wurden ([Firefox-Bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Der Befehl `WebDriver:AddCookie` wurde aktualisiert, um einen Fehler zu werfen, wenn ein Ziel-Cookie die Attribute `sameSite=none` und `secure=false` hat ([Firefox-Bug 1977205](https://bugzil.la/1977205)).
- Der Dialogtextwert wurde aus der Fehlermeldung "unerwartete Warnung geöffnet" entfernt, da der Dialogtext jetzt über das `data`-Feld verfügbar ist ([Firefox-Bug 1948236](https://bugzil.la/1948236)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} in Nightly erstellt wurden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Die Implementierung in Nightly dient dazu, eventuelle Probleme zu überwachen. In einer zukünftigen Version soll die Validierung auf alle Kanäle durchgesetzt werden. ([Firefox-Bug 1976197](https://bugzil.la/1976197))
- Hinzugekommen sind die Ereignisse {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} und {{WebExtAPIRef("action.onUserSettingsChanged")}}, die Änderungen der benutzerspezifischen Einstellungen abhören, die sich auf die Aktion einer Erweiterung auswirken. ([Firefox-Bug 1828220](https://bugzil.la/1828220))

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Web-Funktionen

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht die Festlegung der Größe, Position und Abstände eines ankerpositionierten Elements relativ zu den Abmessungen von Ankerelementen. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** und **`:heading()`**: `layout.css.anchor-positioning.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":heading")}} ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{CSSXRef(":heading_function", ":heading()")}} funktionale Pseudoklasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die der [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation)-Notation entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386)).

- **`Integrity-Policy` und `Integrity-Policy-Report-Only`** (Nightly): `security.integrity_policy.enabled`

  Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt unterstützt. Diese ermöglichen es Websites, entweder [Subresource-Integrity-Garantien](/de/docs/Web/Security/Subresource_Integrity) für Skripte durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
  ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

Diese Funktionen werden in Firefox 142 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 61c225d925f092d07ee1a65781f6f064d720e934
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 ist die aktuelle [Betaversion von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften auf, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

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

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Bug 1336058](https://bugzil.la/1336058)).

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

#### DOM

- Die Methode `moveBefore()` wird jetzt auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren Kindelements des Objekts vor ein anderes seiner Kindelemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand bei. ([Firefox Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Workers](/de/docs/Web/API/Worker) übergeben werden. ([Firefox Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing`-Ereignis](/de/docs/Web/API/RTCDataChannel/closing_event) und der Ereignishandler `onclosing()` werden jetzt auf der Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) unterstützt. ([Firefox Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der Schnittstelle [`MediaDevices`](/de/docs/Web/API/MediaDevices) unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Videos anzufordern, die anderen Einschränkungen entsprechen, wie z.B. Auflösung und Bildrate, selbst wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann das Video, das von einer Kamera aufgenommen wird, zuschneiden, verkleinern oder die Bildrate reduzieren oder das Video, das von einem Bildschirm oder Fenster aufgenommen wird, verkleinern (aber nicht zuschneiden). ([Firefox Bug 1286945](https://bugzil.la/1286945)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, die Priorität von CSS zu bestimmen, das über den [`"content_scripts"` manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) injiziert wird, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin`-Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und die `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Standardmäßig hat der `"author"`-Ursprung Vorrang. ([Firefox Bug 1679997](https://bugzil.la/1679997))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Features sind in Firefox 144 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

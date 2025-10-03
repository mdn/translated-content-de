---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: a124438c29f6abd7f2d014d3b1dbff0f55f0f497
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 144, die Entwickler betreffen. Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Fehler 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für View-Transitions in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden nun unterstützt. Dies bietet eine Möglichkeit, die Teile einer View-Transition-Animation zu gestalten. ([Firefox Fehler 1985809](https://bugzil.la/1985809)). Diese beinhalten:
  - {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudo-Element
  - {{CSSXRef("::view-transition-group()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-new()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-old()")}} Pseudo-Element

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox Fehler 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} unterstützt. Dies bietet einen Mechanismus zur einfachen Erstellung animierter Übergänge zwischen verschiedenen Webseitenansichten. ([Firefox Fehler 1985809](https://bugzil.la/1985809)).
- Die [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist jetzt implementiert (dies wurde von einer nicht standardisierten Schnittstelle `CSS2Properties` umbenannt). Die neue Schnittstelle ist vorhanden, wird aber noch nicht verwendet. ([Firefox Fehler 1919582](https://bugzil.la/1919582)).

#### DOM

- Die Methode `moveBefore()` wird jetzt auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren Kindelements des Objekts vor ein anderes seiner Kindelemente. Anders als bei [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand bei. ([Firefox Fehler 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin {{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder eine ausdrückliche Erlaubnis, um die Seite der obersten Ebene mit `window.top.location` umzuleiten.
  Siehe [Top-Navigation in Cross-Origin-Frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) für weitere Informationen. ([Firefox Fehler 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox Fehler 1209163](https://bugzil.la/1209163)).
- Das [`closing` Ereignis](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()` Ereignishandler werden jetzt auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle unterstützt. ([Firefox Fehler 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices) Schnittstelle unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Videos anzufordern, die anderen Einschränkungen entsprechen, wie z.B. Auflösung und Bildrate, selbst wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das von einer Kamera erfasste Video zuschneiden, verkleinern oder die Bildrate reduzieren, oder das von einem Bildschirm oder Fenster erfasste Video verkleinern (aber nicht zuschneiden). ([Firefox Fehler 1286945](https://bugzil.la/1286945)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin` Ereignis wurde implementiert, das ausgelöst wird, wenn ein neuer Download gestartet wird, entweder durch Klicken auf einen Link mit dem `download` Attribut oder als Antwort auf eine Netzwerkanforderung mit einem `Content-Disposition` Header, der einen Dateianhang anzeigt ([Firefox Fehler 1874365](https://bugzil.la/1874365)).

- Der neue Befehl `emulation.setScreenOrientationOverride` wurde implementiert, der es Clients ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktopanwendungen ([Firefox Fehler 1974167](https://bugzil.la/1974167)).

- Der neue Befehl `emulation.setTimezoneOverride` wurde implementiert, der es Clients ermöglicht, eine bestimmte Zeitzoneneinstellung zu simulieren ([Firefox Fehler 1978027](https://bugzil.la/1978027)).

- Der `emulation.setLocaleOverride` Befehl wurde verbessert, um die angegebenen Einstellungen auch auf zuvor über WebDriver BiDi erstellte Sandboxes anzuwenden ([Firefox Fehler 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem die Locale-Überschreibung, die über `emulation.setLocaleOverride` festgelegt wurde, manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde ([Firefox Fehler 1980211](https://bugzil.la/1980211)).

- Der `browsingContext.navigate` Befehl wurde verbessert, um `NS_BINDING_ABORTED` Fehler zu vermeiden, die durch Weiterleitungen oder Unterbrechungen verursacht werden, nachdem die Navigation bereits bestätigt wurde ([Firefox Fehler 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), der von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, wurde wieder auf `instant` Scroll-Verhalten zurückgesetzt. Dies macht die Änderung rückgängig, die in Firefox 97 eingeführt wurde und das Verhalten auf `auto` umgestellt hatte. Die Rückkehr behebt potenzielle Race-Bedingungen beim Scrollen von Elementen, die das `smooth` Verhalten verwenden ([Firefox Fehler 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, die Priorität von CSS zu bestimmen, das über den [`"content_scripts"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) injiziert wird, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft an {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und die `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Standardmäßig hat der `"author"` Ursprung Vorrang. ([Firefox Fehler 1679997](https://bugzil.la/1679997))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 144 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeitpicker:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) enthalten jetzt einen Zeitpicker ([Firefox Fehler 1726108](https://bugzil.la/1726108)).

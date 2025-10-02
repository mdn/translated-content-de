---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 2a7cc2f35bd8ed49a5b6c87146146a2acf3f6127
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version befinden sich noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für View-Übergänge in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer View-Übergangsanimation zu gestalten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Diese umfassen:
  - {{CSSXRef(":active-view-transition")}} Pseudoklasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudoelement
  - {{CSSXRef("::view-transition-group()")}} Pseudoelement
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudoelement
  - {{CSSXRef("::view-transition-new()")}} Pseudoelement
  - {{CSSXRef("::view-transition-old()")}} Pseudoelement

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der Schnittstelle [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} unterstützt. Dies bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Webseitenansichten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).

#### DOM

- Die Methode `moveBefore()` wird jetzt auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren Kindelements des Objekts vor ein anderes seiner Kindelemente. Anders als bei [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin-{{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder eine explizite Berechtigung, um die oberste Seite mit `window.top.location` umzuleiten. Weitere Informationen finden Sie unter [Top-Navigation in Cross-Origin-Frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames). ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Event-Handler werden jetzt auf der Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der Schnittstelle [`MediaDevices`](/de/docs/Web/API/MediaDevices) unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung. Diese Einschränkung erlaubt es Entwicklern, nach einem Video zu fragen, das andere Einschränkungen wie Auflösung und Bildrate erfüllt, selbst wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden. Der Browser kann dann das von einer Kamera aufgenommene Video zuschneiden, verkleinern oder die Bildrate reduzieren oder das vom Bildschirm oder Fenster aufgenommene Video verkleinern (aber nicht zuschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementiert das neue Event `browsingContext.downloadWillBegin`, das ausgelöst wird, wenn ein neuer Download gestartet wird, entweder durch Klicken auf einen Link mit dem `download`-Attribut oder als Antwort auf eine Netzwerkanfrage mit einem `Content-Disposition`-Header, der einen Dateianhang angibt ([Firefox-Bug 1874365](https://bugzil.la/1874365)).

- Implementiert den neuen Befehl `emulation.setScreenOrientationOverride`, der es Clients ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen ([Firefox-Bug 1974167](https://bugzil.la/1974167)).

- Implementiert den neuen Befehl `emulation.setTimezoneOverride`, der es Clients ermöglicht, eine bestimmte Zeitzoneneinstellung zu simulieren ([Firefox-Bug 1978027](https://bugzil.la/1978027)).

- Verbessert den Befehl `emulation.setLocaleOverride`, um die angegebenen Einstellungen auch auf zuvor über WebDriver BiDi erstellte Sandkästen anzuwenden ([Firefox-Bug 1983807](https://bugzil.la/1983807)).

- Einen Fehler behoben, bei dem die Sprachvoreinstellung, die über `emulation.setLocaleOverride` gesetzt wurde, manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde ([Firefox-Bug 1980211](https://bugzil.la/1980211)).

- Den Befehl `browsingContext.navigate` verbessert, um `NS_BINDING_ABORTED`-Fehler zu vermeiden, die durch Weiterleitungen oder Unterbrechungen auftreten, nachdem die Navigation bereits festgeschrieben wurde ([Firefox-Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Den WebDriver-Algorithmus [`Scroll Into View`](https://w3c.github.io/webdriver/#dfn-scrolls-into-view) zurückgesetzt, wie er von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, um immer das `instant`-Scrollverhalten zu verwenden. Dies macht die in Firefox 97 eingeführte Änderung rückgängig, die das Verhalten auf `auto` umgestellt hatte. Die Rücksetzung behebt mögliche Rennbedingungen beim Scrollen von Elementen, die das `smooth`-Verhalten verwenden ([Firefox-Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, die Priorität von CSS zu bestimmen, das über den [`"content_scripts"`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) injiziert wird, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin`-Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und der `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Standardmäßig hat der `"author"`-Ursprung Vorrang. ([Firefox-Bug 1679997](https://bugzil.la/1679997))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 144 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Datetime-local-Zeitwähler:** `dom.forms.datetime.timepicker`.

  HTML-Datetime-Local-Input-Elemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) enthalten jetzt einen Zeitwähler ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

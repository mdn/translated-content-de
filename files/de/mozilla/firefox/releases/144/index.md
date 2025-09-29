---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 911524687146c63e002c39325ff991dc84f39775
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde nun entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Features](/de/docs/Web/API/View_Transition_API#css_additions) für View-Transitions in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden nun unterstützt. Dies bietet eine Möglichkeit, die Teile einer View-Transition-Animation zu stylen. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Diese umfassen:
  - {{CSSXRef(":active-view-transition")}} Pseudoklasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudoelement
  - {{CSSXRef("::view-transition-group()")}} Pseudoelement
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudoelement
  - {{CSSXRef("::view-transition-new()")}} Pseudoelement
  - {{CSSXRef("::view-transition-old()")}} Pseudoelement

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

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Interfaces werden nun für Android und Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird nun für {{Glossary("SPA", "SPAs (Single-Page Applications)")}} unterstützt. Diese bietet einen Mechanismus, um einfach animierte Übergänge zwischen verschiedenen Webseitenansichten zu erstellen. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).

#### DOM

- Die `moveBefore()`-Methode wird nun auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dadurch kann ein unmittelbares Kindelement des Objekts vor ein anderes seiner Kindelemente verschoben werden. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand bei. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-origin {{htmlelement("iframe")}}s erfordern nun entweder Nutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder explizite Erlaubnis, um die oberste Seite mit `window.top.location` zu umleiten.
  Weitere Informationen finden Sie unter [Top navigation in cross-origin frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames). ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind nun [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Workers](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Ereignishandler werden nun auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle unterstützen nun die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Videos anzufordern, die anderen Einschränkungen wie Auflösung und Bildrate entsprechen, selbst wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das von einer Kamera aufgenommene Video zuschneiden, herunterskalieren oder die Bildrate reduzieren oder das von einem Bildschirm oder Fenster aufgenommene Video nur herunterskalieren (aber nicht zuschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, die Priorität von CSS zu bestimmen, das aus dem [`"content_scripts"` manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) injiziert wird, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin`-Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und die `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Standardmäßig hat der `"author"`-Ursprung Vorrang. ([Firefox-Bug 1679997](https://bugzil.la/1679997))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 144 enthalten, jedoch standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

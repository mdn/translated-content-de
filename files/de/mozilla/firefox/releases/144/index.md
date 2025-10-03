---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 05aab3e51dc609cbd66be67516e45d20feeefd0c
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Web-Entwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

### MathML

#### Entfernung

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde nun entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Features](/de/docs/Web/API/View_Transition_API#css_additions) für View-Transitions in Single-Page-Applikationen ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer View-Transition-Animation zu stylen. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Dazu gehören:
  - {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudo-Element
  - {{CSSXRef("::view-transition-group()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-new()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-old()")}} Pseudo-Element

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

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Interfaces werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird nun für {{Glossary("SPA", "SPAs (Single-Page-Applikationen)")}} unterstützt. Dies bietet einen Mechanismus zur einfachen Erstellung animierter Übergänge zwischen verschiedenen Website-Ansichten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).
- Das [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist nun implementiert (dies wurde von einem nicht standardmäßigen Interface `CSS2Properties` umbenannt). Das neue Interface ist vorhanden, wird aber noch nicht verwendet. ([Firefox-Bug 1919582](https://bugzil.la/1919582)).

#### DOM

- Die Methode `moveBefore()` wird jetzt auf den Interfaces [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren untergeordneten Elements des Objekts vor ein anderes seiner untergeordneten Elemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin {{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder eine ausdrückliche Erlaubnis, um die Top-Level-Seite mit `window.top.location` umzuleiten.
  Siehe [Top navigation in cross-origin frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) für weitere Informationen. ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Event-Handler werden jetzt auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Interface unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) des [`MediaDevices`](/de/docs/Web/API/MediaDevices) Interface unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Videos anzufordern, die anderen Einschränkungen entsprechen, wie Auflösung und Bildrate, selbst wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das von einer Kamera aufgenommene Video zuschneiden, verkleinern oder die Bildrate reduzieren, oder das Video, das von einem Bildschirm oder Fenster aufgenommen wurde, verkleinern (aber nicht zuschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin` Ereignis wurde implementiert, das ausgelöst wird, wenn ein neuer Download initiiert wird, entweder durch Klicken auf einen Link mit dem `download` Attribut oder als Reaktion auf eine Netzwerkanforderung mit einem `Content-Disposition` Header, der einen Dateianhang anzeigt ([Firefox-Bug 1874365](https://bugzil.la/1874365)).

- Der neue `emulation.setScreenOrientationOverride` Befehl wurde implementiert, der es Clients ermöglicht, unterschiedliche Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen ([Firefox-Bug 1974167](https://bugzil.la/1974167)).

- Der neue `emulation.setTimezoneOverride` Befehl wurde implementiert, der es Clients ermöglicht, eine bestimmte Zeitzoneneinstellung zu simulieren ([Firefox-Bug 1978027](https://bugzil.la/1978027)).

- Der `emulation.setLocaleOverride` Befehl wurde erweitert, um die angegebenen Einstellungen auch auf Sandboxes anzuwenden, die zuvor über WebDriver BiDi erstellt wurden ([Firefox-Bug 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem die Locale-Überschreibung, die über `emulation.setLocaleOverride` gesetzt wurde, manchmal fälschlicherweise zwischen unterschiedlichen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde ([Firefox-Bug 1980211](https://bugzil.la/1980211)).

- Der `browsingContext.navigate` Befehl wurde verbessert, um `NS_BINDING_ABORTED` Fehler zu vermeiden, die durch Weiterleitungen oder Unterbrechungen entstehen, nachdem die Navigation bereits festgeschrieben wurde ([Firefox-Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), wie er von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, wurde wieder auf das Verhalten `instant` beim Scrollen zurückgesetzt. Dies macht die Änderung rückgängig, die in Firefox 97 eingeführt wurde, das das Verhalten auf `auto` geändert hatte. Die Rücksetzung behebt mögliche Wettlaufsituationen beim Scrollen von Elementen, die das `smooth` Verhalten verwenden ([Firefox-Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, den Stilursprung für CSS-Injektionen vom [`"content_scripts"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}} und der `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}} anzugeben. Der Stilursprung kann `"user"` sein, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `"author"`, um es als Autoren-Stylesheet hinzuzufügen. Standardmäßig auf `"author"` Ursprung gesetzt. Diese Eigenschaften sind nicht auf Groß-/Kleinschreibung empfindlich. Zusätzlich ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt ebenfalls nicht auf Groß-/Kleinschreibung empfindlich. ([Firefox-Bug 1679997](https://bugzil.la/1679997))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Features

Diese Features werden in Firefox 144 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local time picker:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt einen Zeitwähler ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

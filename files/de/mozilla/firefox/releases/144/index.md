---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 00fac8757e805939cefa545aeb08796e2d5fd727
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 144, die Entwickler betreffen. Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML-STIXGeneral-Schriftart wurde entfernt. Das Einstellungsfeld `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für View-Transitions in Einzelseitenanwendungen ({{Glossary("SPA", "SPAs")}}) werden nun unterstützt. Dies bietet eine Möglichkeit, Teile einer View-Transition-Animation zu gestalten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Dazu gehören:
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

### JavaScript

- Die Methoden {{jsxref("Map.prototype.getOrInsert()")}}, {{jsxref("Map.prototype.getOrInsertComputed()")}}, {{jsxref("WeakMap.prototype.getOrInsert()")}} und {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} werden nun unterstützt.
  Alle Methoden geben den Wert zurück, der einem angegebenen Schlüssel entspricht, wenn der Schlüssel vorhanden ist.
  Wenn der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element für den Schlüssel mit einem gegebenen Standardwert ein und gibt es zurück, während `getOrInsertComputed()` einen Wert einfügt und zurückgibt, der in einer übergebenen Callback-Funktion berechnet wird. ([Firefox-Bug 1979917](https://bugzil.la/1979917)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle werden nun für Android und Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird nun für {{Glossary("SPA", "SPAs (Single-Page-Applications)")}} unterstützt. Dies bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Ansichten einer Website. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).
- Die [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist nun implementiert (dies wurde von einer nicht standardmäßigen Schnittstelle `CSS2Properties` umbenannt). Die neue Schnittstelle ist vorhanden, wird aber noch nicht verwendet. ([Firefox-Bug 1919582](https://bugzil.la/1919582)).

#### DOM

- Die Methode `moveBefore()` wird nun auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren Kindelements des Objekts vor ein anderes seiner Kindelemente. Im Unterschied zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin {{htmlelement("iframe")}}s erfordern nun entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "Sticky Activation")}}) oder eine ausdrückliche Erlaubnis, um die Seite auf der obersten Ebene mit `window.top.location` umzuleiten. Weitere Informationen finden Sie unter [Top-Level-Navigation in Cross-Origin-Frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames). ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- Instanzen von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) sind nun [transferrable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der Ereignishandler `onclosing()` werden nun auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices) Schnittstelle unterstützen nun die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Video anzufordern, das anderen Einschränkungen entspricht, wie Auflösung und Bildrate, auch wenn die angeforderten Einschränkungen nicht von der zugrunde liegenden Hardware unterstützt werden.
  Der Browser kann dann das von einer Kamera aufgenommene Video beschneiden, herunterskalieren oder die Bildrate reduzieren, oder das Video von einem Bildschirm oder Fenster herunterskalieren (aber nicht beschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin` Ereignis wurde implementiert, das ausgelöst wird, wenn ein neuer Download initiiert wird, entweder durch Klicken auf einen Link mit dem `download`-Attribut oder als Antwort auf eine Netzwerk-Anfrage mit einem `Content-Disposition`-Header, der einen Dateianhang angibt ([Firefox-Bug 1874365](https://bugzil.la/1874365)).

- Der neue `emulation.setScreenOrientationOverride` Befehl wurde implementiert, der Client-Anwendung ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen ([Firefox-Bug 1974167](https://bugzil.la/1974167)).

- Der neue `emulation.setTimezoneOverride` Befehl wurde implementiert, der Client-Anwendungen erlaubt, eine bestimmte Zeitzoneneinstellung zu simulieren ([Firefox-Bug 1978027](https://bugzil.la/1978027)).

- Der `emulation.setLocaleOverride` Befehl wurde verbessert, um die angegebenen Einstellungen auch auf Sandboxes anzuwenden, die zuvor über WebDriver BiDi erstellt wurden ([Firefox-Bug 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem die über `emulation.setLocaleOverride` gesetzte Sprachüberschreibung manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde ([Firefox-Bug 1980211](https://bugzil.la/1980211)).

- Der `browsingContext.navigate` Befehl wurde verbessert, um `NS_BINDING_ABORTED` Fehler zu vermeiden, die durch Redirects oder Unterbrechungen auftreten, nachdem die Navigation bereits festgeschrieben wurde ([Firefox-Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view) wurde in Marionette zurückgesetzt, so dass mehrere klassische WebDriver-Befehle nun immer das `instant`-Scrollverhalten verwenden. Dies macht die Änderung rückgängig, die in Firefox 97 eingeführt wurde, die das Verhalten auf `auto` umgeschaltet hatte. Die Rücksetzung behebt potenzielle Race-Conditions beim Scrollen von Elementen, die das `smooth`-Verhalten verwenden ([Firefox-Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, den Stil-Ursprung für CSS-Injektionen aus dem [`"content_scripts"` manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) anzugeben, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und der `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Der Stil-Ursprung kann `"user"` sein, um das CSS als Benutzerstilblatt hinzuzufügen, oder `"author"`, um es als Autorenstilblatt hinzuzufügen. Standardmäßig zum `"author"` Ursprung. Diese Eigenschaften sind nicht Case-sensitive. Darüber hinaus ist nun auch der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} nicht Case-sensitive. ([Firefox-Bug 1679997](https://bugzil.la/1679997))
- Unterstützt nun {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} für {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}}. ([Firefox-Bug 1385832](https://bugzil.la/1385832))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 144 ausgeliefert, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeitwähler:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten nun einen Zeitwähler ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

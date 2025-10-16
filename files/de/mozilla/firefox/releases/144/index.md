---
title: Firefox 144 Freigabenotizen für Entwickler (Stable)
short-title: Firefox 144 (Stable)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 wurde am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Die Attribute [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) und [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) des {{htmlelement("button")}}-Elements werden jetzt unterstützt. Das Attribut `command` erlaubt es, die auszuführende Aktion zu definieren, und das Attribut `commandfor` ermöglicht es, die Schaltfläche einem anderen Element zuzuordnen, auf dem der Befehl wirkt. Der Befehl kann ein vordefinierter Wert wie `close` oder ein von Ihnen [definierter benutzerdefinierter Wert](/de/docs/Web/HTML/Reference/Elements/button#custom_values) sein. ([Firefox-Bug 1983523](https://bugzil.la/1983523)).

### MathML

#### Entfernung

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für View-Transitions in Single-Page-Applications ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer View-Transition-Animation zu stylen. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Diese beinhalten:
  - {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudo-Element
  - {{CSSXRef("::view-transition-group()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-new()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-old()")}} Pseudo-Element

### JavaScript

- Die Instanzmethoden {{jsxref("Map.prototype.getOrInsert()")}}, {{jsxref("Map.prototype.getOrInsertComputed()")}}, {{jsxref("WeakMap.prototype.getOrInsert()")}} und {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} werden jetzt unterstützt.
  Alle Methoden geben den Wert zurück, der einem angegebenen Schlüssel entspricht, wenn der Schlüssel vorhanden ist.
  Wenn der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element für den Schlüssel und einen angegebenen Standardwert ein und gibt es zurück, während `getOrInsertComputed()` einen in einer bereitgestellten Callback-Funktion berechneten Wert einfügt und zurückgibt. ([Firefox-Bug 1979917](https://bugzil.la/1979917)).

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Interfaces werden jetzt für Android und für Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483)).
- Die [View-Transition-API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} unterstützt. Diese bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Webseitenansichten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).
- Das [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist jetzt implementiert (dies wurde von einem nicht standardmäßigen Interface `CSS2Properties` umbenannt). Das neue Interface ist vorhanden, wird aber noch nicht verwendet. ([Firefox-Bug 1919582](https://bugzil.la/1919582)).
- Die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId)-Eigenschaft des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) Interfaces ist ein eindeutiger Bezeichner, der verwandte Ereignisse zu einer einzigen Benutzerinteraktion zusammenfasst. Dies kann verwendet werden, um die {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint")}} Metrik zu berechnen, die hilft, die Reaktionsfähigkeit auf Benutzerinteraktionen im Verlauf einer Seite zu analysieren. ([Firefox-Bug 1956809](https://bugzil.la/1956809)).

#### DOM

- Die `moveBefore()` Methode wird jetzt auf den Interfaces [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren Kind-Elements des Objekts vor ein anderes seiner Kindelemente. Anders als bei [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten die verschobenen Elemente ihren Status. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin-{{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder eine explizite Erlaubnis, um die obere Seite mithilfe von `window.top.location` zu verweisen.
  Weitere Informationen finden Sie unter [Top-Navigation in Cross-Origin-Frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames). ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing`-Ereignis](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Ereignis-Handler werden jetzt im [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Interface unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) des [`MediaDevices`](/de/docs/Web/API/MediaDevices) Interfaces unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Beschränkung.
  Diese Beschränkung ermöglicht es Entwicklern, Videos anzufordern, die andere Beschränkungen wie Auflösung und Bildfrequenz erfüllen, auch wenn die angeforderten Beschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das vom Kamera aufgenommenes Video zuschneiden, skalieren oder die Bildfrequenz reduzieren oder das Video vom Bildschirm oder Fenster skalieren (aber nicht zuschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

#### Entfernung

- Die folgenden veralteten und nicht standardmäßigen Ereignisse wurden entfernt: [`afterscriptexecute`-Ereignis](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`-Ereignis](/de/docs/Web/API/Document/beforescriptexecute_event) des `Document`-Interfaces sowie das [`afterscriptexecute`-Ereignis](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`-Ereignis](/de/docs/Web/API/Element/beforescriptexecute_event) des `Element`-Interfaces. ([Firefox-Bug 1584269](https://bugzil.la/1584269)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin` Ereignis wurde implementiert, das ausgelöst wird, wenn ein neuer Download gestartet wird, entweder durch Klicken auf einen Link mit dem `download`-Attribut oder als Antwort auf eine Netzwerkanfrage mit einem `Content-Disposition`-Header, der eine Dateianlage angibt. ([Firefox-Bug 1874365](https://bugzil.la/1874365)).

- Das neue `emulation.setScreenOrientationOverride` Kommando wurde implementiert, das es Clients ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieses Kommando ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen. ([Firefox-Bug 1974167](https://bugzil.la/1974167)).

- Das neue `emulation.setTimezoneOverride` Kommando wurde implementiert, welches es Clients ermöglicht, eine spezifische Zeitzoneneinstellung zu simulieren. ([Firefox-Bug 1978027](https://bugzil.la/1978027)).

- Das `emulation.setLocaleOverride` Kommando wurde erweitert, um die angegebenen Einstellungen auch auf Sandboxes anzuwenden, die zuvor über WebDriver BiDi erstellt wurden. ([Firefox-Bug 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem die über `emulation.setLocaleOverride` gesetzte Gebietsschemaüberschreibung manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde. ([Firefox-Bug 1980211](https://bugzil.la/1980211)).

- Das `browsingContext.navigate` Kommando wurde erweitert, um `NS_BINDING_ABORTED` Fehler zu vermeiden, die durch Weiterleitungen oder Unterbrechungen auftreten, nachdem die Navigation bereits festgeschrieben wurde. ([Firefox-Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver-Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), wie er von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, wurde zurückgesetzt, um immer das Scroll-Verhalten `instant` zu verwenden. Dies macht die Änderung rückgängig, die in Firefox 97 eingeführt wurde, und das Verhalten auf `auto` geändert hatte. Die Rücksetzung spricht potenzielle Race-Bedingungen beim Scrollen von Elementen an, die das `smooth` Verhalten verwenden. ([Firefox-Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-On-Entwickler

- Es wurde die Möglichkeit hinzugefügt, den Stilursprung für CSS-Injektionen aus dem [`"content_scripts"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft für {{WebExtAPIRef("scripting.RegisteredContentScript")}} und der `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}} anzugeben. Der Stilursprung kann `"user"` sein, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `"author"`, um es als Autor-Stylesheet hinzuzufügen. Standardmäßig wird der `"author"` Ursprung verwendet. Diese Eigenschaften sind nicht groß-/kleinschreibungssensitiv. Zusätzlich ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt nicht groß-/kleinschreibungssensitiv. ([Firefox-Bug 1679997](https://bugzil.la/1679997)).
- Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} wurde zu {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzugefügt. ([Firefox-Bug 1385832](https://bugzil.la/1385832)).

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 144 verfügbar, aber standardmäßig deaktiviert.
Um diese zu testen, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeitwähler:** `dom.forms.datetime.timepicker`.

  HTML-Eingabeelemente vom Typ datetime-local ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt einen Zeitwähler. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

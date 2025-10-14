---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Stabil)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: e3e93db9247ff7a0e8c43bf9bab2f5386559be23
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 wurde am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Attribute [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) und [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) des {{htmlelement("button")}}-Elements werden nun unterstützt. Das `command`-Attribut ermöglicht es, die auszuführende Aktion zu definieren, und das `commandfor`-Attribut erlaubt es, den Button mit einem anderen Element zu verknüpfen, auf das der Befehl wirkt. Der Befehl kann ein vordefinierter Wert wie `close` oder ein [benutzerdefinierter Wert](/de/docs/Web/HTML/Reference/Elements/button#custom_values) sein, den Sie festlegen. ([Firefox Bug 1983523](https://bugzil.la/1983523)).

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Features](/de/docs/Web/API/View_Transition_API#css_additions) für View-Transitions in Single-Page-Applications ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer View-Transition-Animation zu gestalten. ([Firefox Bug 1985809](https://bugzil.la/1985809)). Dazu gehören:
  - {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudo-Element
  - {{CSSXRef("::view-transition-group()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-new()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-old()")}} Pseudo-Element

### JavaScript

- Die Instanzmethoden {{jsxref("Map.prototype.getOrInsert()")}}, {{jsxref("Map.prototype.getOrInsertComputed()")}}, {{jsxref("WeakMap.prototype.getOrInsert()")}}, und {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} werden jetzt unterstützt.
  Alle Methoden geben den Wert zurück, der einem angegebenen Schlüssel entspricht, wenn der Schlüssel vorhanden ist.
  Falls der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element für den Schlüssel und einen angegebenen Standardwert ein und gibt es zurück, während `getOrInsertComputed()` einen in einer bereitgestellten Callback-Funktion berechneten Wert einfügt und zurückgibt. ([Firefox Bug 1979917](https://bugzil.la/1979917)).

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der Schnittstelle [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox Bug 1983483](https://bugzil.la/1983483)).
- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Applications)")}} unterstützt. Dies bietet einen Mechanismus, um einfach animierte Übergänge zwischen verschiedenen Ansichten einer Website zu erstellen. ([Firefox Bug 1985809](https://bugzil.la/1985809)).
- Die Schnittstelle [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist jetzt implementiert (sie wurde von einer nicht standardisierten Schnittstelle `CSS2Properties` umbenannt). Die neue Schnittstelle ist vorhanden, wird aber noch nicht verwendet. ([Firefox Bug 1919582](https://bugzil.la/1919582)).
- Die Eigenschaft [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) der Schnittstelle [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) ist eine eindeutige Kennung, die zugehörige Ereignisse, die zu einer einzelnen Benutzerinteraktion gehören, verknüpft. Dies kann verwendet werden, um die Metrik {{Glossary("Interaction_to_next_paint", "Interaction to next paint")}} zu berechnen, die dabei hilft, die Reaktionsgeschwindigkeit auf Benutzerinteraktionen während der Lebensdauer einer Seite zu analysieren. ([Firefox Bug 1956809](https://bugzil.la/1956809)).

#### DOM

- Die Methode `moveBefore()` wird jetzt von den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines direkten Kind-Elements des Objekts vor ein anderes seiner Kind-Elemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten die verschobenen Elemente ihren Zustand. ([Firefox Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-origin {{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder eine ausdrückliche Erlaubnis, um die oberste Ebene der Seite mittels `window.top.location` umzuleiten.
  Weitere Informationen finden Sie unter [Top navigation in cross-origin frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames). ([Firefox Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Ereignishandler werden jetzt von der Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) unterstützt. ([Firefox Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der Schnittstelle [`MediaDevices`](/de/docs/Web/API/MediaDevices) unterstützen jetzt die Einschränkung [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode).
  Diese Einschränkung erlaubt es Entwicklern, ein Video anzufordern, das anderen Einschränkungen wie Auflösung und Framerate entspricht, selbst wenn die angeforderten Einschränkungen nicht von der zugrunde liegenden Hardware unterstützt werden.
  Der Browser kann dann das Video einer Kamera zuschneiden, herunterskalieren oder die Bildrate reduzieren oder das Video eines Bildschirms oder Fensters herunterskalieren (aber nicht zuschneiden). ([Firefox Bug 1286945](https://bugzil.la/1286945)).

#### Entfernungen

- Die folgenden veralteten und nicht standardisierten Ereignisse wurden entfernt: [`afterscriptexecute` event](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute` event](/de/docs/Web/API/Document/beforescriptexecute_event) der `Document`-Schnittstelle sowie das [`afterscriptexecute` event](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute` event](/de/docs/Web/API/Element/beforescriptexecute_event) der `Element`-Schnittstelle. ([Firefox Bug 1584269](https://bugzil.la/1584269)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin`-Ereignis wurde implementiert, das ausgelöst wird, wenn ein neuer Download beginnt, entweder durch Klicken auf einen Link mit dem `download`-Attribut oder als Antwort auf eine Netzwerk-Anforderung mit einem `Content-Disposition`-Header, der einen Dateianhang angibt. ([Firefox Bug 1874365](https://bugzil.la/1874365)).

- Der neue Befehl `emulation.setScreenOrientationOverride`, der es Clients erlaubt, verschiedene Bildschirmorientierungen zu emulieren, wurde implementiert. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen. ([Firefox Bug 1974167](https://bugzil.la/1974167)).

- Der neue Befehl `emulation.setTimezoneOverride`, der es Clients ermöglicht, eine spezifische Zeitzoneneinstellung zu simulieren, wurde implementiert. ([Firefox Bug 1978027](https://bugzil.la/1978027)).

- Der Befehl `emulation.setLocaleOverride` wurde verbessert, sodass die angegebenen Einstellungen auch auf zuvor über WebDriver BiDi erstellte Sandboxes angewendet werden. ([Firefox Bug 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem die über `emulation.setLocaleOverride` festgelegte Locale-Einstellung manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde. ([Firefox Bug 1980211](https://bugzil.la/1980211)).

- Der Befehl `browsingContext.navigate` wurde verbessert, um `NS_BINDING_ABORTED`-Fehler zu vermeiden, die durch Weiterleitungen oder Unterbrechungen verursacht werden, nachdem die Navigation bereits abgeschlossen wurde. ([Firefox Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver-Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), der von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, wurde rückgängig gemacht, sodass immer das Scroll-Verhalten `instant` verwendet wird. Dies machen die Änderungen rückgängig, die in Firefox 97 eingeführt wurden und das Verhalten auf `auto` geändert hatten. Die Rücknahme behebt mögliche Race-Conditions beim Scrollen von Elementen, die `smooth` Verhalten verwenden. ([Firefox Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, den Stilursprung für CSS-Injektionen aus dem [`"content_scripts"`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) anzugeben, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin`-Eigenschaft bei {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und der `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Der Stilursprung kann `"user"` sein, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `"author"`, um es als Autoren-Stylesheet hinzuzufügen. Standard ist der `"author"`-Ursprung. Diese Eigenschaften sind nicht empfindlich gegenüber Groß-/Kleinschreibung. Darüber hinaus ist der Wert der [`origin`]-Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt nicht wie bisher groß-/kleinschreibungsempfindlich. ([Firefox Bug 1679997](https://bugzil.la/1679997)).
- Fügt Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} zu {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzu. ([Firefox Bug 1385832](https://bugzil.la/1385832)).

## Experimentelle Web-Features

Diese Features werden in Firefox 144 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Sie finden weitere solcher Features auf der [Seite über experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeit-Wähler:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabe-Elemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt einen Zeit-Wähler. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

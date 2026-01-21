---
title: Firefox 144 Versionshinweise für Entwickler
short-title: Firefox 144
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: a2f381f4fbe5a3f66981080c1cd004d3063648f9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 wurde am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Attribute [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) und [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) des {{htmlelement("button")}}-Elements werden jetzt unterstützt. Das `command`-Attribut ermöglicht es Ihnen, die auszuführende Aktion zu definieren, und das `commandfor`-Attribut ermöglicht es, den Button mit einem anderen Element zu verknüpfen, auf welches der Befehl angewandt wird. Der Befehl kann ein vordefinierter Wert wie `close` oder ein von Ihnen [benutzerdefinierter Wert](/de/docs/Web/HTML/Reference/Elements/button#custom_values) sein. ([Firefox Bug 1983523](https://bugzil.la/1983523)).

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für View-Übergänge in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer View-Übergangsanimation zu gestalten. ([Firefox Bug 1985809](https://bugzil.la/1985809)). Diese umfassen:
  - {{CSSXRef(":active-view-transition")}} Pseudoklasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudoelement
  - {{CSSXRef("::view-transition-group()")}} Pseudoelement
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudoelement
  - {{CSSXRef("::view-transition-new()")}} Pseudoelement
  - {{CSSXRef("::view-transition-old()")}} Pseudoelement

### JavaScript

- Die Instanzmethoden {{jsxref("Map.prototype.getOrInsert()")}}, {{jsxref("Map.prototype.getOrInsertComputed()")}}, {{jsxref("WeakMap.prototype.getOrInsert()")}} und {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} werden jetzt unterstützt.
  Alle Methoden geben den Wert zurück, der einem angegebenen Schlüssel entspricht, wenn der Schlüssel vorhanden ist.
  Wenn der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element für den Schlüssel und einen gegebenen Standardwert ein und gibt es zurück, während `getOrInsertComputed()` einen Wert einfügt und zurückgibt, der in einer angegebenen Rückruffunktion berechnet wird. ([Firefox Bug 1979917](https://bugzil.la/1979917)).

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle werden jetzt für Android und für Windows-Tablets unterstützt. ([Firefox Bug 1983483](https://bugzil.la/1983483)).
- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} unterstützt. Dies bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Website-Ansichten. ([Firefox Bug 1985809](https://bugzil.la/1985809)).
- Die Schnittstelle [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist jetzt implementiert (dies wurde von einer nicht standardmäßigen Schnittstelle `CSS2Properties` umbenannt). Die neue Schnittstelle ist vorhanden, wird aber noch nicht verwendet. ([Firefox Bug 1919582](https://bugzil.la/1919582)).
- Die Eigenschaft [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) Schnittstelle ist ein einzigartiges Identifikationsmerkmal, das zusammengehörige Ereignisse zu einer einzigen Nutzerinteraktion verknüpft. Dies kann zur Berechnung der {{Glossary("Interaction_to_next_paint", "Interaction to next paint")}} Metrik verwendet werden, die hilft, die Reaktionsfähigkeit auf Nutzerinteraktionen über die gesamte Lebensdauer einer Seite zu analysieren. ([Firefox Bug 1956809](https://bugzil.la/1956809)).
- Die Methode [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) der [Navigation API](/de/docs/Web/API/Navigation_API) akzeptiert keine URLs mehr mit dem Schema `javascript`. Ein Aufruf von `navigate()` mit einer `javascript:` URL löst jetzt eine `NotSupportedError`-Ausnahme aus. ([Firefox Bug 1981104](https://bugzil.la/1981104)).

#### DOM

- Die `moveBefore()`-Methode wird nun auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren Kindelements des Objekts, vor ein anderes seiner Kindelemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand bei. ([Firefox Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin {{htmlelement("iframe")}}s erfordern jetzt entweder eine Nutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder explizite Erlaubnis, um die Top-Level-Seite mittels `window.top.location` zu ändern.
  Siehe [Top-Navigation in cross-origin Frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) für mehr Informationen. ([Firefox Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects), und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing`-Ereignis](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Ereignishandler werden jetzt auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle unterstützt. ([Firefox Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices) Schnittstelle unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Videos anzufordern, die anderen Einschränkungen entsprechen, wie Auflösung und Bildrate, auch wenn die angeforderten Einschränkungen nicht von der zugrunde liegenden Hardware unterstützt werden.
  Der Browser kann dann das Video, das von einer Kamera aufgenommen wird, zuschneiden, verkleinern oder die Bildrate reduzieren, oder das Video, das von einem Bildschirm oder Fenster aufgenommen wird, verkleinern (aber nicht zuschneiden). ([Firefox Bug 1286945](https://bugzil.la/1286945)).

#### Entfernungen

- Die folgenden veralteten und nicht standardmäßigen Ereignisse wurden entfernt: [`afterscriptexecute`-Ereignis](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`-Ereignis](/de/docs/Web/API/Document/beforescriptexecute_event) der `Document`-Schnittstelle, und das [`afterscriptexecute`-Ereignis](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`-Ereignis](/de/docs/Web/API/Element/beforescriptexecute_event) der `Element`-Schnittstelle. ([Firefox Bug 1584269](https://bugzil.la/1584269)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin`-Ereignis wurde implementiert, welches ausgelöst wird, wenn ein neuer Download gestartet wird, entweder durch das Klicken auf einen Link mit dem `download`-Attribut oder als Antwort auf eine Netzwerk-Anforderung mit einem `Content-Disposition`-Header, der einen Datei-Anhang anzeigt. ([Firefox Bug 1874365](https://bugzil.la/1874365)).

- Der neue `emulation.setScreenOrientationOverride`-Befehl wurde implementiert, der es Clients ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen. ([Firefox Bug 1974167](https://bugzil.la/1974167)).

- Der neue `emulation.setTimezoneOverride`-Befehl wurde implementiert, der es Clients ermöglicht, eine bestimmte Zeitzoneneinstellung zu simulieren. ([Firefox Bug 1978027](https://bugzil.la/1978027)).

- Der Befehl `emulation.setLocaleOverride` wurde verbessert, um die angegebenen Einstellungen auch auf zuvor über WebDriver BiDi erstellte Sandboxes anzuwenden. ([Firefox Bug 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem die Locale-Überschreibung, die über `emulation.setLocaleOverride` festgelegt wurde, manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde. ([Firefox Bug 1980211](https://bugzil.la/1980211)).

- Der Befehl `browsingContext.navigate` wurde verbessert, um `NS_BINDING_ABORTED`-Fehler zu vermeiden, die durch Weiterleitungen oder Unterbrechungen verursacht werden, die nach der bereits zugesagten Navigation auftreten. ([Firefox Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver-Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view) wurde, wie er von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, zurückgesetzt, damit immer das `instant`-Scrollverhalten genutzt wird. Dies macht die Änderung rückgängig, die in Firefox 97 eingeführt wurde und das Verhalten auf `auto` geändert hatte. Die Rücknahme adressiert potenzielle Wettstreitbedingungen beim Scrollen von Elementen, die `smooth`-Verhalten nutzen. ([Firefox Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on Entwickler

- Fügt die Möglichkeit hinzu, den Stilursprung für CSS-Injektionen von dem [`"content_scripts"`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) zu spezifizieren, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin`-Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und der `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Der Stilursprung kann `"user"` sein, um das CSS als Benutzer-CSS hinzuzufügen, oder `"author"`, um es als Autoren-CSS hinzuzufügen. Standardmäßig auf den `"author"`-Ursprung. Diese Eigenschaften sind Groß-/Kleinschreibung unabhängig. Zusätzlich ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt Groß-/Kleinschreibung unabhängig. ([Firefox Bug 1679997](https://bugzil.la/1679997)).
- Fügt Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} zu {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzu. ([Firefox Bug 1385832](https://bugzil.la/1385832)).

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 144 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Zeitwähler in `datetime-local` und `time` Eingabeelementen:** `dom.forms.datetime.timepicker`.

  Die HTML [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) Elemente unterstützen einen Zeitwähler. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

- **:heading():** `layout.css.heading-selector.enabled`

  Die funktionale Pseudoklasse [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function) hat jetzt eine viel einfachere Syntax, die eine kommagetrennte Liste von ganzen Zahlen akzeptiert, die der Überschriftsebene entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

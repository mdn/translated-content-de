---
title: Firefox 144 Versionshinweise für Entwickler
short-title: Firefox 144
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 08f01e6cd0103ac0a472f9e3cf2482bb9fc2f25a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 wurde am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) und [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) Attribute des {{htmlelement("button")}} Elements werden jetzt unterstützt. Das `command` Attribut erlaubt es, die auszuführende Aktion zu definieren, und das `commandfor` Attribut ermöglicht es, den Button mit einem anderen Element zu verknüpfen, auf das der Befehl wirkt. Der Befehl kann ein vordefinierter Wert wie `close` oder ein von Ihnen [definierter benutzerdefinierter Wert](/de/docs/Web/HTML/Reference/Elements/button#custom_values) sein. ([Firefox-Bug 1983523](https://bugzil.la/1983523)).

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Auch die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- Die [CSS Features](/de/docs/Web/API/View_Transition_API#css_additions) für View-Transitions in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Diese bieten eine Möglichkeit, die Teile einer View-Transition-Animation zu stylen. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Diese beinhalten:
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
  Alle Methoden geben den Wert zurück, der einem bestimmten Schlüssel entspricht, wenn der Schlüssel vorhanden ist.
  Wenn der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element für den Schlüssel und einen gegebenen Standardwert ein und gibt es zurück, während `getOrInsertComputed()` einen in einer bereitgestellten Rückruffunktion berechneten Wert einfügt und zurückgibt. ([Firefox-Bug 1979917](https://bugzil.la/1979917)).

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle werden jetzt für Android und für Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483)).
- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} unterstützt. Diese bietet einen Mechanismus, um einfach animierte Übergänge zwischen verschiedenen Ansichten einer Website zu erstellen. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).
- Die [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) wurde jetzt implementiert (dies wurde von einer nicht-standardmäßigen Schnittstelle `CSS2Properties` umbenannt). Die neue Schnittstelle ist vorhanden, wird aber noch nicht verwendet. ([Firefox-Bug 1919582](https://bugzil.la/1919582)).
- Die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) Eigenschaft der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) Schnittstelle ist eine eindeutige Kennung, die verwandte Ereignisse einer einzelnen Benutzerinteraktion zuordnet. Dies kann verwendet werden, um die {{Glossary("Interaction_to_next_paint", "Interaktion bis zur nächsten Darstellung")}} Metrik zu berechnen, die hilft, die Reaktionsfähigkeit auf Benutzerinteraktionen während der Lebensdauer einer Seite zu analysieren. ([Firefox-Bug 1956809](https://bugzil.la/1956809)).

#### DOM

- Die `moveBefore()` Methode wird nun auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Diese ermöglicht es, ein unmittelbares Kind-Element des Objekts vor einem anderen seiner Kind-Elemente zu verschieben. Anders als bei [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin {{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "Sticky Activation")}}) oder eine explizite Berechtigung, um die oberste Seite mit `window.top.location` umzuleiten.
  Siehe [Top-Navigation in Cross-Origin-Frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) für weitere Informationen. ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing`-Ereignis](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()` Ereignis-Handler werden jetzt auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices) Schnittstelle unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Video anzufordern, das andere Einschränkungen wie Auflösung und Bildrate erfüllt, selbst wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das Video, das von einer Kamera erfasst wird, zuschneiden, verkleinern oder die Bildrate reduzieren oder das Video, das von einem Bildschirm oder Fenster erfasst wird, verkleinern (aber nicht zuschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

#### Entfernungen

- Die folgenden veralteten und nicht-standardmäßigen Ereignisse wurden entfernt: [`afterscriptexecute` Ereignis](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute` Ereignis](/de/docs/Web/API/Document/beforescriptexecute_event) der `Document` Schnittstelle sowie das [`afterscriptexecute` Ereignis](/de/docs/Web/API/Element/afterscriptexecute_event) und das [`beforescriptexecute` Ereignis](/de/docs/Web/API/Element/beforescriptexecute_event) der `Element` Schnittstelle. ([Firefox-Bug 1584269](https://bugzil.la/1584269)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin` Ereignis wurde implementiert, welches ausgelöst wird, wenn ein neuer Download initiiert wird, entweder durch Klicken auf einen Link mit dem `download` Attribut oder als Antwort auf eine Netzwerk-Anfrage mit einem `Content-Disposition` Header, der einen Dateianhang angibt. ([Firefox-Bug 1874365](https://bugzil.la/1874365)).

- Der neue `emulation.setScreenOrientationOverride` Befehl wurde implementiert, der es Clients ermöglicht, verschiedene Bildschirm-Orientierungen zu emulieren. Dieser Befehl ist nicht nur auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen. ([Firefox-Bug 1974167](https://bugzil.la/1974167)).

- Der neue `emulation.setTimezoneOverride` Befehl wurde implementiert, der es Clients ermöglicht, eine spezifische Zeitzonen-Einstellung zu simulieren. ([Firefox-Bug 1978027](https://bugzil.la/1978027)).

- Der `emulation.setLocaleOverride` Befehl wurde verbessert, um die angegebenen Einstellungen auch auf Sandboxes anzuwenden, die zuvor über WebDriver BiDi erstellt wurden. ([Firefox-Bug 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem die Locale-Überschreibung über `emulation.setLocaleOverride` manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde. ([Firefox-Bug 1980211](https://bugzil.la/1980211)).

- Der `browsingContext.navigate` Befehl wurde verbessert, um `NS_BINDING_ABORTED` Fehler zu vermeiden, die durch Umleitungen oder Unterbrechungen verursacht werden, die nach der Navigation bereits aufgetreten sind. ([Firefox-Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der Scroll-Into-View Algorithmus von [`Scroll Into View`](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), wie er von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, wurde zurückgesetzt, um immer das `instant` Scrollverhalten zu verwenden. Dies macht die Änderung rückgängig, die in Firefox 97 eingeführt wurde und das Verhalten auf `auto` geändert hatte. Die Rücksetzung adressiert potenzielle Race-Conditions beim Scrollen von Elementen, die das `smooth` Verhalten verwenden. ([Firefox-Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Ermöglicht die Angabe des Stil-Ursprungs für CSS-Injektionen vom [`"content_scripts"` manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und der `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Der Stil-Ursprung kann `"user"` sein, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `"author"`, um es als Autoren-Stylesheet hinzuzufügen. Standardmäßig ist `"author"` der Ursprung. Diese Eigenschaften sind nicht case-sensitiv. Zusätzlich ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt nicht case-sensitiv. ([Firefox-Bug 1679997](https://bugzil.la/1679997)).
- Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} wurde zu {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzugefügt. ([Firefox-Bug 1385832](https://bugzil.la/1385832)).

## Experimentelle Web-Features

Diese Features werden in Firefox 144 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeit-Auswahl:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabe-Elemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt eine Zeit-Auswahl. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

- **:heading():** `layout.css.heading-selector.enabled`

  Die [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function) funktionale Pseudo-Klasse hat jetzt eine viel einfachere Syntax, die eine durch Kommas getrennte Liste von Ganzzahlen enthält, die der Überschriftenebene entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

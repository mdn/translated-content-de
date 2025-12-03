---
title: Firefox 144 Versionshinweise für Entwickler
short-title: Firefox 144
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: b5a7c2098c667c24c5434e5036524034269f9e9c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 wurde am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Attribute [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) und [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) des {{htmlelement("button")}}-Elements werden jetzt unterstützt. Das `command`-Attribut ermöglicht es, die auszuführende Aktion zu definieren, und das `commandfor`-Attribut erlaubt es, den Button mit einem anderen Element zu verknüpfen, auf das der Befehl angewendet wird. Der Befehl kann ein vordefinierter Wert wie `close` oder ein von Ihnen definierter [benutzerdefinierter Wert](/de/docs/Web/HTML/Reference/Elements/button#custom_values) sein. ([Firefox Bug 1983523](https://bugzil.la/1983523)).

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für Übergänge in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer Übergangsanimation zu gestalten. ([Firefox Bug 1985809](https://bugzil.la/1985809)). Diese beinhalten:
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
  Wenn der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element für den Schlüssel sowie einen angegebenen Standardwert ein und gibt diesen zurück, während `getOrInsertComputed()` einen in einer bereitgestellten Rückruffunktion berechneten Wert einfügt und zurückgibt. ([Firefox Bug 1979917](https://bugzil.la/1979917)).

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox Bug 1983483](https://bugzil.la/1983483)).
- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (single-page applications)")}} unterstützt. Dies bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Ansichten einer Website. ([Firefox Bug 1985809](https://bugzil.la/1985809)).
- Die [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist jetzt implementiert (dies wurde von einer nicht standardisierten Schnittstelle `CSS2Properties` umbenannt). Die neue Schnittstelle ist vorhanden, wird aber noch nicht verwendet. ([Firefox Bug 1919582](https://bugzil.la/1919582)).
- Die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) Eigenschaft der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) Schnittstelle ist ein eindeutiger Bezeichner, der zusammengehörige Ereignisse einer einzelnen Benutzerinteraktion zuordnet. Dies kann verwendet werden, um die {{Glossary("Interaction_to_next_paint", "Interaction to next paint")}} Metrik zu berechnen, die hilft, die Reaktionsfähigkeit auf Benutzerinteraktionen über die Lebensdauer einer Seite zu analysieren. ([Firefox Bug 1956809](https://bugzil.la/1956809)).
- Die [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) Methode der [Navigation API](/de/docs/Web/API/Navigation_API) akzeptiert keine URLs mit einem `javascript`-Schema mehr. Ein Aufruf von `navigate()` mit einer `javascript:`-URL wirft jetzt eine `NotSupportedError`-Ausnahme. ([Firefox Bug 1981104](https://bugzil.la/1981104)).

#### DOM

- Die Methode `moveBefore()` wird jetzt auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren Kindelements des Objekts vor ein anderes seiner Kindelemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin {{htmlelement("iframe")}}s erfordern jetzt entweder Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder explizite Erlaubnis, um die oberste Seite mit `window.top.location` weiterzuleiten.
  Weitere Informationen finden Sie unter [Top navigation in cross-origin frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames). ([Firefox Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Workers](/de/docs/Web/API/Worker) übergeben werden. ([Firefox Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Ereignishandler werden nun auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle unterstützt. ([Firefox Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Video anzufordern, das zu anderen Einschränkungen wie Auflösung und Bildrate passt, auch wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das Video, das von einer Kamera aufgenommen wurde, zuschneiden, verkleinern oder die Bildrate reduzieren oder das Video, das von einem Bildschirm oder Fenster aufgenommen wurde, verkleinern (aber nicht zuschneiden). ([Firefox Bug 1286945](https://bugzil.la/1286945)).

#### Entfernungen

- Die folgenden veralteten und nicht standardkonformen Ereignisse wurden entfernt: [`afterscriptexecute` event](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute` event](/de/docs/Web/API/Document/beforescriptexecute_event) der `Document`-Schnittstelle, und das [`afterscriptexecute` event](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute` event](/de/docs/Web/API/Element/beforescriptexecute_event) der `Element`-Schnittstelle. ([Firefox Bug 1584269](https://bugzil.la/1584269)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin`-Ereignis wurde implementiert, das ausgelöst wird, wenn ein neuer Download initiiert wird, entweder durch Klicken auf einen Link mit dem `download`-Attribut oder als Reaktion auf eine Netzwerkanforderung mit einem `Content-Disposition`-Header, der einen Dateianhang angibt. ([Firefox Bug 1874365](https://bugzil.la/1874365)).

- Der neue `emulation.setScreenOrientationOverride`-Befehl wurde implementiert, der es Clients ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen. ([Firefox Bug 1974167](https://bugzil.la/1974167)).

- Der neue `emulation.setTimezoneOverride`-Befehl wurde implementiert, der es Clients ermöglicht, eine bestimmte Zeiteinstellung zu simulieren. ([Firefox Bug 1978027](https://bugzil.la/1978027)).

- Der `emulation.setLocaleOverride`-Befehl wurde verbessert, sodass die angegebenen Einstellungen auch auf Sandboxes angewendet werden, die zuvor über WebDriver BiDi erstellt wurden. ([Firefox Bug 1983807](https://bugzil.la/1983807)).

- Es wurde ein Fehler behoben, bei dem die über `emulation.setLocaleOverride` gesetzte Sprachüberschreibung manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde. ([Firefox Bug 1980211](https://bugzil.la/1980211)).

- Der `browsingContext.navigate`-Befehl wurde verbessert, um `NS_BINDING_ABORTED`-Fehler zu vermeiden, die durch Umleitungen oder Unterbrechungen verursacht werden, die auftreten, nachdem die Navigation bereits bestätigt wurde. ([Firefox Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver-Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), wie er von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, wurde zurückgesetzt, um immer das `instant`-Scrollverhalten zu verwenden. Dies macht die in Firefox 97 eingeführte Änderung rückgängig, die das Verhalten auf `auto` umgestellt hatte. Die Rücksetzung behebt mögliche Race-Conditions beim Scrollen von Elementen, die das `smooth`-Verhalten verwenden. ([Firefox Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, den Stil-Ursprung für CSS-Injektionen aus dem [`"content_scripts"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin`-Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und die `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}} anzugeben. Der Stil-Ursprung kann `"user"` sein, um das CSS als Benutzer-Stil zu hinzufügen, oder `"author"`, um es als Autoren-Stil hinzuzufügen. Standardmäßig ist es auf den Ursprungswert `"author"` eingestellt. Diese Eigenschaften sind nicht groß-/kleinschreibungssensitiv. Zusätzlich ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin)-Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt nicht mehr groß-/kleinschreibungssensitiv. ([Firefox Bug 1679997](https://bugzil.la/1679997)).
- Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} für {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzugefügt. ([Firefox Bug 1385832](https://bugzil.la/1385832)).

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 144 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeitwähler:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) enthalten jetzt einen Zeitwähler. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

- **:heading():** `layout.css.heading-selector.enabled`

  Die [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function) funktionale Pseudo-Klasse hat jetzt eine viel einfachere Syntax, die eine durch Kommas getrennte Liste von Ganzzahlen enthält, die der Überschriftenebene entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

---
title: Firefox 144 Versionshinweise für Entwickler (Stable)
short-title: Firefox 144 (Stable)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 9c4fc56961bff7124fbf7e761d68eeb809e2e842
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 wurde am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Attribute [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) und [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) des {{htmlelement("button")}}-Elements werden jetzt unterstützt. Mit dem `command`-Attribut können Sie die auszuführende Aktion definieren, und mit dem `commandfor`-Attribut können Sie den Button mit einem anderen Element verknüpfen, auf das der Befehl wirkt. Der Befehl kann ein vordefinierter Wert wie `close` oder ein [benutzerdefinierter Wert](/de/docs/Web/HTML/Reference/Elements/button#custom_values) sein, den Sie festlegen. ([Firefox-Bug 1983523](https://bugzil.la/1983523)).

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für Ansichtsübergänge in Single-Page-Applications ({{Glossary("SPA", "SPAs")}}) werden nun unterstützt. Dies bietet eine Möglichkeit, die Teile einer Animationsübergänge zu gestalten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Diese umfassen:
  - {{CSSXRef(":active-view-transition")}} Pseudoklasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudoelement
  - {{CSSXRef("::view-transition-group()")}} Pseudoelement
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudoelement
  - {{CSSXRef("::view-transition-new()")}} Pseudoelement
  - {{CSSXRef("::view-transition-old()")}} Pseudoelement

### JavaScript

- Die Instanzmethoden {{jsxref("Map.prototype.getOrInsert()")}}, {{jsxref("Map.prototype.getOrInsertComputed()")}}, {{jsxref("WeakMap.prototype.getOrInsert()")}}, und {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} werden jetzt unterstützt.
  Alle Methoden geben den Wert zurück, der dem angegebenen Schlüssel entspricht, falls der Schlüssel vorhanden ist.
  Wenn der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element für den Schlüssel und einen angegebenen Standardwert ein und gibt es zurück, während `getOrInsertComputed()` einen Wert einfügt und zurückgibt, der in einer bereitgestellten Callback-Funktion berechnet wird. ([Firefox-Bug 1979917](https://bugzil.la/1979917)).

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle werden jetzt für Android- und Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483)).
- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Applications)")}} unterstützt. Dies bietet einen Mechanismus, um auf einfache Weise animierte Übergänge zwischen verschiedenen Webseitenansichten zu erstellen. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).
- Die [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist jetzt implementiert (diese wurde von einer nicht standardmäßigen Schnittstelle `CSS2Properties` umbenannt). Die neue Schnittstelle ist vorhanden, wird aber noch nicht verwendet. ([Firefox-Bug 1919582](https://bugzil.la/1919582)).
- Die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId)-Eigenschaft der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Schnittstelle ist ein eindeutiger Bezeichner, der verwandte Ereignisse, die zu einer einzelnen Benutzerinteraktion gehören, zuordnet. Dies kann verwendet werden, um die {{Glossary("Interaction_to_next_paint", "Interaction to next paint")}} Metrik zu berechnen, die hilft, die Reaktionsfähigkeit auf Benutzerinteraktionen während der Lebensdauer einer Seite zu analysieren. ([Firefox-Bug 1956809](https://bugzil.la/1956809)).

#### DOM

- Die Methode `moveBefore()` wird jetzt auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines direkten Kindelements des Objekts vor einem anderen seiner Kindelemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin-{{htmlelement("iframe")}}s erfordern jetzt entweder Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder explizite Erlaubnis, um die oberste Seite mit `window.top.location` umzuleiten.
  Weitere Informationen finden Sie unter [Top navigation in cross-origin frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames). ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind nun [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Workers](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Ereignishandler werden jetzt auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung.
  Diese Einschränkung ermöglicht Entwicklern, Video anzufordern, das andere Einschränkungen wie Auflösung und Bildrate erfüllt, auch wenn die angeforderten Einschränkungen von der zugrundeliegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das Video, das von einer Kamera aufgenommen wird, zuschneiden, herunterskalieren oder die Bildrate reduzieren oder das Video, das von einem Bildschirm oder Fenster aufgenommen wird, herunterskalieren (aber nicht zuschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

#### Entfernungen

- Die folgenden veralteten und nicht standardisierten Ereignisse wurden entfernt: [`afterscriptexecute` event](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute` event](/de/docs/Web/API/Document/beforescriptexecute_event) der `Document`-Schnittstelle sowie das [`afterscriptexecute` event](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute` event](/de/docs/Web/API/Element/beforescriptexecute_event) der `Element`-Schnittstelle. ([Firefox-Bug 1584269](https://bugzil.la/1584269)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implementierung des neuen `browsingContext.downloadWillBegin`-Ereignisses, das ausgelöst wird, wenn ein neuer Download entweder durch Klicken auf einen Link mit dem `download`-Attribut oder als Reaktion auf eine Netzwerkanfrage mit einem `Content-Disposition`-Header, der eine Dateianlage angibt, gestartet wird. ([Firefox-Bug 1874365](https://bugzil.la/1874365)).

- Implementierung des neuen `emulation.setScreenOrientationOverride`-Befehls, der es Kunden ermöglicht, verschiedene Bildschirmausrichtungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen. ([Firefox-Bug 1974167](https://bugzil.la/1974167)).

- Implementierung des neuen `emulation.setTimezoneOverride`-Befehls, der es Kunden ermöglicht, eine spezifische Zeitzoneneinstellung zu simulieren. ([Firefox-Bug 1978027](https://bugzil.la/1978027)).

- Verbesserung des `emulation.setLocaleOverride`-Befehls, um sicherzustellen, dass die angegebenen Einstellungen auch vorab erstellte Sandboxes über WebDriver BiDi angewendet werden. ([Firefox-Bug 1983807](https://bugzil.la/1983807)).

- Behebung eines Fehlers, bei dem das über `emulation.setLocaleOverride` gesetzte Locale-Override manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde. ([Firefox-Bug 1980211](https://bugzil.la/1980211)).

- Verbesserung des `browsingContext.navigate`-Befehls, um `NS_BINDING_ABORTED`-Fehler zu vermeiden, die durch Umleitungen oder Unterbrechungen entstehen, die nach der bereits erfolgten Navigation auftreten. ([Firefox-Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Zurücksetzen des in Firefox 97 eingeführten Verhaltens des [`Scroll Into View` WebDriver-Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), der von mehreren WebDriver-Classic-Befehlen in Marionette verwendet wird, um das `instant`-Scroll-Verhalten wieder zu verwenden. Dies hebt die Änderung auf, die das Verhalten auf `auto` änderte, um potenzielle Rennbedingungen beim Scrollen von Elementen mit `smooth`-Verhalten zu beheben. ([Firefox-Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-On-Entwickler

- Fügt die Möglichkeit hinzu, den Stilursprung für CSS-Injektionen aus dem [`"content_scripts"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin`-Eigenschaft in {{WebExtAPIRef("scripting.RegisteredContentScript")}} und der `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}} anzugeben. Der Stilursprung kann `"user"` sein, um das CSS als Benutzerstylesheet hinzuzufügen, oder `"author"`, um es als Autorenstylesheet hinzuzufügen. Standardmäßig auf den `"author"`-Ursprung. Diese Eigenschaften sind nicht groß-/kleinschreibungssensitiv. Darüber hinaus ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt nicht mehr groß-/kleinschreibungssensitiv. ([Firefox-Bug 1679997](https://bugzil.la/1679997)).
- Fügt Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} zu {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzu. ([Firefox-Bug 1385832](https://bugzil.la/1385832)).

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 144 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie in der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeitwähler:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt einen Zeitwähler. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

- **:heading():** `layout.css.heading-selector.enabled`

  Die [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function) funktionale Pseudoklasse hat jetzt eine viel einfachere Syntax, die eine durch Kommas getrennte Liste von ganzen Zahlen annimmt, die der Überschriftsebene entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 0f05b70aa0eaad8763c56ad664536096f00f34cc
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

### MathML

#### Entfernen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Auch die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für Ansichtsübergänge in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer Ansichtsübergangsanimation zu gestalten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Dazu gehören:
  - {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudo-Element
  - {{CSSXRef("::view-transition-group()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-new()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-old()")}} Pseudo-Element

<!-- ### SVG -->

<!-- #### Entfernen -->

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

### JavaScript

- Die {{jsxref("Map.prototype.getOrInsert()")}}, {{jsxref("Map.prototype.getOrInsertComputed()")}}, {{jsxref("WeakMap.prototype.getOrInsert()")}}, und {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} Instanzmethoden werden jetzt unterstützt.
  Alle Methoden geben den Wert zurück, der einem angegebenen Schlüssel entspricht, falls der Schlüssel vorhanden ist.
  Wenn der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element für den Schlüssel mit einem gegebenen Standardwert ein und gibt es zurück, während `getOrInsertComputed()` einen Wert einfügt und zurückgibt, der in einer bereitgestellten Rückruffunktion berechnet wurde. ([Firefox-Bug 1979917](https://bugzil.la/1979917)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

<!-- ### HTTP -->

<!-- #### Entfernen -->

<!-- ### Sicherheit -->

<!-- #### Entfernen -->

### APIs

- Die [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) Methoden des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Interfaces werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Applications)")}} unterstützt. Dies bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Website-Ansichten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).
- Das [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) wurde jetzt implementiert (es wurde von einem nicht standardisierten Interface `CSS2Properties` umbenannt). Das neue Interface ist vorhanden, wird aber noch nicht verwendet. ([Firefox-Bug 1919582](https://bugzil.la/1919582)).

- Die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) Eigenschaft des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) Interfaces ist ein eindeutiger Bezeichner, der zusammengehörige Ereignisse einer einzigen Benutzerinteraktion zuordnet. Dies kann verwendet werden, um die {{Glossary("Interaction_to_next_paint", "Interaction to next paint")}} Metrik zu berechnen, die hilft, die Reaktionsfähigkeit auf Benutzerinteraktionen über die gesamte Lebensdauer einer Seite zu analysieren. ([Firefox-Bug 1956809](https://bugzil.la/1956809)).

#### DOM

- Die `moveBefore()` Methode wird jetzt auf den [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) Interfaces unterstützt. Dies ermöglicht das Verschieben eines direkten Kind-Elements des Objekts vor ein anderes seiner Kind-Elemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin {{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "Sticky Activation")}}) oder eine ausdrückliche Erlaubnis, um die übergeordnete Seite mit `window.top.location` umzuleiten.
  Siehe [Top-Navigation in Cross-Origin-Frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) für weitere Informationen. ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing`-Ereignis](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()` Ereignis-Handler werden jetzt auf dem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Interface unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) des [`MediaDevices`](/de/docs/Web/API/MediaDevices) Interfaces unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Videos anzufordern, die andere Einschränkungen wie Auflösung und Bildrate erfüllen, auch wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das von einer Kamera aufgezeichnete Video zuschneiden, verkleinern oder die Bildrate reduzieren oder das von einem Bildschirm oder Fenster aufgezeichnete Video verkleinern (aber nicht zuschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

#### Entfernen

- Die folgenden veralteten und nicht standardisierten Ereignisse wurden entfernt: [`afterscriptexecute`-Ereignis](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`-Ereignis](/de/docs/Web/API/Document/beforescriptexecute_event) des `Document` Interfaces, und das [`afterscriptexecute`-Ereignis](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`-Ereignis](/de/docs/Web/API/Element/beforescriptexecute_event) des `Element` Interfaces. ([Firefox-Bug 1584269](https://bugzil.la/1584269)).

<!-- ### WebAssembly -->

<!-- #### Entfernen -->

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin` Ereignis wurde implementiert, das ausgelöst wird, wenn ein neuer Download gestartet wird, entweder durch Klicken auf einen Link mit dem `download` Attribut oder als Antwort auf eine Netzwerk-Anfrage mit einem `Content-Disposition` Header, der einen Dateianhang angibt ([Firefox-Bug 1874365](https://bugzil.la/1874365)).

- Der neue `emulation.setScreenOrientationOverride` Befehl wurde implementiert, der es Clients ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen ([Firefox-Bug 1974167](https://bugzil.la/1974167)).

- Der neue `emulation.setTimezoneOverride` Befehl wurde implementiert, der es Clients ermöglicht, eine bestimmte Zeitzoneneinstellung zu simulieren ([Firefox-Bug 1978027](https://bugzil.la/1978027)).

- Der `emulation.setLocaleOverride` Befehl wurde erweitert, um die angegebenen Einstellungen auch auf Sandboxes anzuwenden, die zuvor über WebDriver BiDi erstellt wurden ([Firefox-Bug 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem die Locale-Überschreibung, die über `emulation.setLocaleOverride` gesetzt wurde, manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde ([Firefox-Bug 1980211](https://bugzil.la/1980211)).

- Der `browsingContext.navigate` Befehl wurde verbessert, um `NS_BINDING_ABORTED` Fehler zu vermeiden, die durch Weiterleitungen oder Unterbrechungen entstehen, nachdem die Navigation bereits abgeschlossen war ([Firefox-Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), wie er von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, wurde zurückgesetzt, um immer das `instant` Scrollverhalten zu verwenden. Dies macht die in Firefox 97 eingeführte Änderung rückgängig, die das Verhalten auf `auto` umgestellt hatte. Die Rücknahme behebt potenzielle Wettlaufsituationen beim Scrollen von Elementen, die ein `smooth` Verhalten verwenden ([Firefox-Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, den Stilursprung für CSS-Injektionen aus dem [`"content_scripts"`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und die `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}} zu spezifizieren. Der Stilursprung kann `"user"` sein, um das CSS als benutzerdefiniertes Stylesheet hinzuzufügen, oder `"author"`, um es als Autor-Stylesheet hinzuzufügen. Standardmäßig auf den `"author"`-Ursprung. Diese Eigenschaften sind nicht case-sensitiv. Zudem ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt nicht case-sensitiv. ([Firefox-Bug 1679997](https://bugzil.la/1679997))
- Fügt Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} zu {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzu. ([Firefox-Bug 1385832](https://bugzil.la/1385832))

<!-- ### Entfernen -->

<!-- ### Andere -->

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 144 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere derartige Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeit-Wähler:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabe-Elemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) enthalten jetzt einen Zeit-Wähler ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

---
title: Firefox 31 für Entwickler
short-title: Firefox 31
slug: Mozilla/Firefox/Releases/31
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 31 wurde am 22. Juli 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Pipette zur Farbauswahl auf Webseiten](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [vollständige Stack-Traces für Konsolen-Fehlermeldungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [bearbeitbare Box-Model-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [%c Formatierung zur Gestaltung von Konsolennachrichten](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- ["copy as cURL" Befehl im Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [Sublime Text Tastenkombinationen im Quelltext-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [Option, um Protokolle des Netzwerk-Monitors persistent zu machen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [JavaScript-Warnungen standardmäßig in der Web-Konsole eingeschaltet](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt+Klick zum Erweitern aller Nachkommen eines Knotens](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[Alle behobenen Developer-Tools-Bugs zwischen Firefox 30 und Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Das `var-` Präfix von CSS-Variablen wurde in `--` geändert, um die endgültige Spezifikationsänderung zu reflektieren ([Firefox-Bug 985838](https://bugzil.la/985838)).
- Die {{cssxref("hyphens")}}-Eigenschaft unterstützt nun polnische Trennungsregeln ([Firefox-Bug 987668](https://bugzil.la/987668)).
- Entfernt einen unerwünschten Leerraum bei Vielfachen von 10.000 in Koreanischen Zählerstilen ([Firefox-Bug 985186](https://bugzil.la/985186)).
- CSS-Übergang der Deckkraft brach mit übergeordnetem Pseudo :before und auto Overflow ([Firefox-Bug 990340](https://bugzil.la/990340)).
- Das Pseudo-Element `::-moz-math-stretchy` wurde entfernt ([Firefox-Bug 1000879](https://bugzil.la/1000879)).

### HTML

- {{HTMLElement("track")}} wurde implementiert ([Firefox-Bug 629350](https://bugzil.la/629350)).

### JavaScript

Neue ECMAScript 2015-Funktionen implementiert:

- Neues `Array`-Built-in: {{jsxref("Array.prototype.fill()")}} ([Firefox-Bug 911147](https://bugzil.la/911147))
- Neue `Math`-Funktion: {{jsxref("Math.clz32()")}} ([Firefox-Bug 925123](https://bugzil.la/925123))
- Neues `String`-Built-in: {{jsxref("String.prototype.normalize()")}} ist in Firefox Desktop verfügbar ([Firefox-Bug 918987](https://bugzil.la/918987)).
- Neue `Object`-Methode {{jsxref("Object.setPrototypeOf()")}}.
- Neue `Number`-Konstanten: {{jsxref("Number.MAX_SAFE_INTEGER")}} und {{jsxref("Number.MIN_SAFE_INTEGER")}}.
- Der ES2015-Proxy-{{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "isExtensible")}}-Trap wurde implementiert ([Firefox-Bug 978235](https://bugzil.la/978235)).

### Schnittstellen/APIs/DOM

- Konstruktor von `KeyboardEvent` wurde implementiert ([Firefox-Bug 930893](https://bugzil.la/930893)).
- Die Resource Timing API wurde implementiert (siehe [Firefox-Bug 822480](https://bugzil.la/822480)).
- Das `KeyboardEvent.isComposing`-Attribut wurde implementiert ([Firefox-Bug 993234](https://bugzil.la/993234)).
- Die `InputEvent`-Schnittstelle wurde implementiert ([Firefox-Bug 993253](https://bugzil.la/993253)).
- Das `InputEvent.isComposing`-Attribut wurde implementiert ([Firefox-Bug 993253](https://bugzil.la/993253)).
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) wurde implementiert ([Firefox-Bug 955860](https://bugzil.la/955860)).
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event) ist jetzt, wie in anderen Browsern, abbruchfähig ([Firefox-Bug 704423](https://bugzil.la/704423)). Der Aufruf von `preventDefault()` setzt nur das `defaultPrevented`-Attribut auf `true;` alle anderen Verhaltensweisen ändern sich nicht. Z.B. kann es nicht verhindern, dass der `:hover`-Zustand gesetzt wird.
- Die [`Path2D`](/de/docs/Web/API/Path2D) Schnittstelle wurde implementiert.
- Die Methoden [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath), [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke), [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip), [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) und [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) wurden aktualisiert, um optional ein [`Path2D`](/de/docs/Web/API/Path2D) Objekt zu akzeptieren.
- Implementiert [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek).
- Die `Connection`-Schnittstelle wurde in [`NetworkInformation`](/de/docs/Web/API/NetworkInformation) umbenannt und wurde so geändert, dass sie der neuen Spezifikation entspricht ([Firefox-Bug 960426](https://bugzil.la/960426)).
- Der [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert; dies ermöglicht die asynchrone Übertragung von Analyse- oder anderen Daten, ohne dass die sendende Seite geladen bleiben muss, sodass es in einem [`unload`](/de/docs/Web/API/Window/unload_event) oder in einem [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Handler verwendet werden kann.

### MathML

- Teilweise Implementierung der [OpenType MATH Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/math), Abschnitt 6.3.6 ([Firefox-Bug 407059](https://bugzil.la/407059)). Für Details versuchen Sie den [MathML Foltertest](/de/docs/Mozilla/MathML_Project/MathML_Torture_Test).
- Das `::-moz-math-stretchy` Pseudo-Element wurde entfernt ([Firefox-Bug 1000879](https://bugzil.la/1000879)).
- Wenn verfügbar, werden die Unicode-Mathematischen alphanumerischen Zeichen für fett, kursiv und fett-kursive mathematische Varianten verwendet ([Firefox-Bug 930504](https://bugzil.la/930504)).

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Sicherheit

- [Privilegierter Code erhält nun Xray-Sicht für `Date` Instanzen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Änderungen für Add-on- und Mozilla-Entwickler

- Das `align` Attribut im `urlbar-wrapper` (ehemals im `urlbar-container`), das seit jeher auf `center` gesetzt war, wurde entfernt. Es ist bekannt, dass dies Drittanbieter-Themen beeinflusst. Sie sollten sorgfältig überlegen, was die richtige Lösung für Ihr Thema ist, aber um den äquivalenten Effekt beizubehalten, können Sie die folgende CSS-Regel zu Ihrem Thema hinzufügen:

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` und `nsIDOMWindowUtils.sendSelectionSetEvent()` haben `aAdditionalFlags` als optionales Argument. Wenn Sie `nsIDOMWindowUtils.sendSelectionSetEvent()` mit `true` für `aReverse` aufgerufen haben, würde das Verhalten durch diese Änderung unterbrochen werden. Bitte sehen Sie sich die [Erklärung zu jedem Flag](/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#constants) (`QUERY_CONTENT_FLAG_*` und `SELECTION_SET_FLAG_*`) für die Details zu `aAdditionalFlags` an.

### Add-on SDK

Höhepunkte:

- [Add-on-Debugger](https://extensionworkshop.com/documentation/develop/debugging/)
- Hinzugefügt die Fähigkeit, [zwischen High-Level-Browserfenster-Objekten und DOM-Fenstern](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#converting_to_dom_windows) und [zwischen High-Level-Tab-Objekten und XUL-Tabs](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#converting_to_xul_tabs) zu konvertieren.
- Aktualisiert das Standard-Theme, das für Panels auf Mac OS X verwendet wird.
- Hinzugefügt [contentStyle und contentStyleFile](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#styling_panel_content) Optionen für Panel.

[GitHub Commits zwischen Firefox 30 und Firefox 31](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). Dies schließt keine Uplifts ein, die nach dem Eintritt dieser Version in Aurora gemacht wurden.

[Bugs behoben zwischen Firefox 30 und Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies schließt keine Uplifts ein, die nach dem Eintritt dieser Version in Aurora gemacht wurden.

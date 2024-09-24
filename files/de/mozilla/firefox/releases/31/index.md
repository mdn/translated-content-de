---
title: Firefox 31 für Entwickler
slug: Mozilla/Firefox/Releases/31
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Pipette-Werkzeug zum Auswählen von Farben auf Webseiten](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [vollständige Stack-Traces für Konsolenfehlermeldungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [editierbare Box-Modell-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [%c-Formatierung zum Styling von Konsolennachrichten](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- ["Copy as cURL"-Befehl im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [Sublime Text-Tastenkombinationen im Quellcode-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [Option zur Beständigkeit von Netzwerkmonitor-Logs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [JavaScript-Warnungen sind standardmäßig in der Webkonsole aktiviert](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt+Klick, um alle Nachfahren eines Knotens zu erweitern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[Alle Devtools-Bugs, die zwischen Firefox 30 und Firefox 31 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Das Präfix `var-` der CSS-Variablen wurde zu `--` geändert, um die finale Spezifikationsänderung widerzuspiegeln ([Firefox-Bug 985838](https://bugzil.la/985838)).
- Die {{cssxref("hyphens")}}-Eigenschaft unterstützt jetzt polnische Trennungsregeln ([Firefox-Bug 987668](https://bugzil.la/987668)).
- Ein unerwünschter Leerraum bei Vielfachen von 10.000 in koreanischen Zählerstilen wurde entfernt ([Firefox-Bug 985186](https://bugzil.la/985186)).
- CSS Übergang mit Transparenz ist bei übergeordnetem Pseudo-:before und Überlauf automatisch gebrochen ([Firefox-Bug 990340](https://bugzil.la/990340)).
- Das Pseudo-Element `::-moz-math-stretchy` wurde entfernt ([Firefox-Bug 1000879](https://bugzil.la/1000879)).

### HTML

- {{HTMLElement("track")}} wurde implementiert ([Firefox-Bug 629350](https://bugzil.la/629350)).

### JavaScript

Neue ECMAScript 2015-Features implementiert:

- Neues `Array`-Built-in: {{jsxref("Array.prototype.fill()")}} ([Firefox-Bug 911147](https://bugzil.la/911147))
- Neue `Math`-Funktion: {{jsxref("Math.clz32()")}} ([Firefox-Bug 925123](https://bugzil.la/925123))
- Neues `String`-Built-in: {{jsxref("String.prototype.normalize()")}} ist in Firefox Desktop verfügbar ([Firefox-Bug 918987](https://bugzil.la/918987)).
- Neue `Object`-Methode {{jsxref("Object.setPrototypeOf()")}}.
- Neue `Number`-Konstanten: {{jsxref("Number.MAX_SAFE_INTEGER")}} und {{jsxref("Number.MIN_SAFE_INTEGER")}}.
- Der ES2015 Proxy-{{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "isExtensible")}}-Trap wurde implementiert ([Firefox-Bug 978235](https://bugzil.la/978235)).

### Schnittstellen/APIs/DOM

- Konstruktor von `KeyboardEvent` wurde implementiert ([Firefox-Bug 930893](https://bugzil.la/930893)).
- Die Resource Timing API wurde implementiert (siehe [Firefox-Bug 822480](https://bugzil.la/822480)).
- Attribut `KeyboardEvent.isComposing` wurde implementiert ([Firefox-Bug 993234](https://bugzil.la/993234)).
- `InputEvent`-Schnittstelle wurde implementiert ([Firefox-Bug 993253](https://bugzil.la/993253)).
- Attribut `InputEvent.isComposing` wurde implementiert ([Firefox-Bug 993253](https://bugzil.la/993253)).
- {{domxref("CSS.escape_static", "CSS.escape()")}} wurde implementiert ([Firefox-Bug 955860](https://bugzil.la/955860)).
- {{domxref("Element/mousemove_event", "mousemove")}} ist jetzt wie in anderen Browsern abbrechbar ([Firefox-Bug 704423](https://bugzil.la/704423)). Der Aufruf von `preventDefault()` setzt nur das Attribut `defaultPrevented` auf `true;` alle anderen Verhaltensweisen werden nicht geändert. Z.B. kann es nicht verhindern, den `:hover`-Zustand zu setzen.
- Die {{domxref("Path2D")}}-Schnittstelle wurde implementiert.
- Die Methoden {{domxref("CanvasRenderingContext2D.isPointInPath()")}}, {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}, {{domxref("CanvasRenderingContext2D.clip()")}}, {{domxref("CanvasRenderingContext2D.fill()")}} und {{domxref("CanvasRenderingContext2D.stroke()")}} wurden aktualisiert, um optional ein {{domxref("Path2D")}}-Objekt zu akzeptieren.
- Implementiert {{domxref("HTMLMediaElement.fastSeek()")}}.
- Der `Connection`-Schnittname wurde zu {{domxref("NetworkInformation")}} umbenannt und modifiziert, um der neuen Spezifikation zu entsprechen ([Firefox-Bug 960426](https://bugzil.la/960426)).
- Das {{domxref("Navigator.sendBeacon()")}} wurde implementiert; dies ermöglicht die asynchrone Übertragung von Analyse- oder anderen Daten auf eine Weise, die nicht davon abhängt, dass die sendende Seite geladen bleibt, sodass es in einem {{domxref("Window/unload_event", "unload")}}- oder {{domxref("Window.beforeunload_event", "beforeunload")}}-Handler verwendet werden kann.

### MathML

- Teilweise Implementierung der [OpenType MATH-Tabelle](https://mpeg.chiariglione.org/standards/mpeg-4/open-font-format/text-isoiec-cd-14496-22-3rd-edition), Abschnitt 6.3.6 ([Firefox-Bug 407059](https://bugzil.la/407059)). Für Details testen Sie den [MathML Torture-Test](/de/docs/Mozilla/MathML_Project/MathML_Torture_Test).
- Das Pseudo-Element `::-moz-math-stretchy` wurde entfernt ([Firefox-Bug 1000879](https://bugzil.la/1000879)).
- Wenn verfügbar, werden die Unicode-Mathematischen alphanumerischen Zeichen für fette, kursiv und fett-kursive Mathematikvarianten verwendet ([Firefox-Bug 930504](https://bugzil.la/930504)).

### SVG

_Keine Änderungen._

### Audio/Video

_Keine Änderungen._

## Sicherheit

- [Privilegierter Code erhält jetzt "Xray vision" für `Date`-Instanzen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Änderungen für Add-on- und Mozilla-Entwickler

- Das "`align`"-Attribut auf dem `urlbar-wrapper` (ehemals auf dem `urlbar-container`), das seit ewigen Zeiten auf "`center`" gesetzt war, wurde entfernt. Dies ist bekannt dafür, Drittanbieter-Themes zu beeinflussen. Sie sollten genau prüfen, was die richtige Lösung für Ihr Theme ist, aber um den äquivalenten Effekt beizubehalten, können Sie die folgende CSS-Regel zu Ihrem Theme hinzufügen:

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` und `nsIDOMWindowUtils.sendSelectionSetEvent()` haben `aAdditionalFlags` als optionales Argument. Wenn Sie `nsIDOMWindowUtils.sendSelectionSetEvent()` mit `true` für `aReverse` aufgerufen haben, könnte dieses Verhalten durch diese Änderung beeinflusst werden. Lesen Sie die [Erklärung zu jedem Flag](/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#constants) (`QUERY_CONTENT_FLAG_*` und `SELECTION_SET_FLAG_*`) für Details zu `aAdditionalFlags`.

### Add-on SDK

Höhepunkte:

- [Add-on-Debugger](/de/docs/Mozilla/Add-ons/Add-on_Debugger)
- Die Möglichkeit wurde hinzugefügt, [zwischen hochgradigen BrowserWindow-Objekten und DOM-Fenstern zu konvertieren](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#converting_to_dom_windows), und [zwischen hochgradigen Tab-Objekten und XUL-Tabs zu konvertieren](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#converting_to_xul_tabs).
- Das Standard-Theme, das für Panels auf Mac OS X verwendet wird, wurde aktualisiert.
- Hinzugefügt wurden [contentStyle und contentStyleFile](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#styling_panel_content) Optionen für das Panel.

[GitHub-Commits, die zwischen Firefox 30 und Firefox 31 gemacht wurden](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). Dies schließt keine Uplifts ein, die nach dem Übergang dieser Version in die Aurora-Phase gemacht wurden.

[Bugs, die zwischen Firefox 30 und Firefox 31 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies schließt keine Uplifts ein, die nach dem Übergang dieser Version in die Aurora-Phase gemacht wurden.

### Ältere Versionen

{{Firefox_for_developers}}

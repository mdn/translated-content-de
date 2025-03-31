---
title: Firefox 31 für Entwickler
slug: Mozilla/Firefox/Releases/31
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Pipette, um Farben in Webseiten auszuwählen](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [vollständige Stapelverfolgung für Konsolenfehlermeldungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [bearbeitbare Box-Modell-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [%c Formatierung zur Stilgestaltung von Konsolennachrichten](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- ["Copy as cURL"-Befehl im Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [Sublime Text Tastenkombinationen im Quellcode-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [Option, Netzwerk-Monitor-Protokolle persistent zu machen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [JavaScript-Warnungen standardmäßig in der Webkonsole aktiviert](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt+Klick, um alle Nachkommen eines Knotens zu erweitern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[Alle Entwicklerwerkzeug-Bugs, die zwischen Firefox 30 und Firefox 31 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Präfix `var-` von CSS-Variablen in `--` geändert, um die endgültige Spezifikationsänderung abzubilden ([Firefox Bug 985838](https://bugzil.la/985838)).
- Die {{cssxref("hyphens")}}-Eigenschaft unterstützt jetzt polnische Trennregeln ([Firefox Bug 987668](https://bugzil.la/987668)).
- Entfernte ein unerwünschtes Leerzeichen für Vielfache von 10.000 in koreanischen Zählerstilen ([Firefox Bug 985186](https://bugzil.la/985186)).
- CSS-Opazitätstransition defekt mit Eltern-Pseudo :before und Overflow auto ([Firefox Bug 990340](https://bugzil.la/990340)).
- Das `::-moz-math-stretchy` Pseudo-Element wurde entfernt ([Firefox Bug 1000879](https://bugzil.la/1000879)).

### HTML

- {{HTMLElement("track")}} wurde implementiert ([Firefox Bug 629350](https://bugzil.la/629350)).

### JavaScript

Neue ECMAScript 2015 Funktionen implementiert:

- Neues `Array` eingebaut: {{jsxref("Array.prototype.fill()")}} ([Firefox Bug 911147](https://bugzil.la/911147))
- Neue `Math` Funktion: {{jsxref("Math.clz32()")}} ([Firefox Bug 925123](https://bugzil.la/925123))
- Neues `String` eingebaut: {{jsxref("String.prototype.normalize()")}} ist verfügbar in Firefox Desktop ([Firefox Bug 918987](https://bugzil.la/918987)).
- Neue `Object` Methode {{jsxref("Object.setPrototypeOf()")}}.
- Neue `Number` Konstanten: {{jsxref("Number.MAX_SAFE_INTEGER")}} und {{jsxref("Number.MIN_SAFE_INTEGER")}}.
- Die ES2015 Proxy {{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "isExtensible")}} Falle wurde implementiert ([Firefox Bug 978235](https://bugzil.la/978235)).

### Schnittstellen/APIs/DOM

- Konstruktor von `KeyboardEvent` wurde implementiert ([Firefox Bug 930893](https://bugzil.la/930893)).
- Die Resource Timing API wurde implementiert (siehe [Firefox Bug 822480](https://bugzil.la/822480)).
- Attribut `KeyboardEvent.isComposing` wurde implementiert ([Firefox Bug 993234](https://bugzil.la/993234)).
- `InputEvent`-Schnittstelle wurde implementiert ([Firefox Bug 993253](https://bugzil.la/993253)).
- Attribut `InputEvent.isComposing` wurde implementiert ([Firefox Bug 993253](https://bugzil.la/993253)).
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) wurde implementiert ([Firefox Bug 955860](https://bugzil.la/955860)).
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event) ist jetzt stornierbar, wie in anderen Browsern ([Firefox Bug 704423](https://bugzil.la/704423)). Das Aufrufen von `preventDefault()` setzt nur das `defaultPrevented` Attribut auf `true`; andere Verhaltensweisen werden nicht geändert. Zum Beispiel kann es den `:hover`-Zustand nicht verhindern.
- Die [`Path2D`](/de/docs/Web/API/Path2D) Schnittstelle wurde implementiert.
- Die Methoden [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath), [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke), [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip), [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) und [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) wurden aktualisiert, um optional ein [`Path2D`](/de/docs/Web/API/Path2D) Objekt zu akzeptieren.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek) wurde implementiert.
- Die `Connection` Schnittstelle wurde in [`NetworkInformation`](/de/docs/Web/API/NetworkInformation) umbenannt und angepasst, um der neuen Spezifikation zu entsprechen ([Firefox Bug 960426](https://bugzil.la/960426)).
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert; dies ermöglicht die asynchrone Übertragung von Analyse- oder anderen Daten auf eine Weise, die nicht davon abhängt, dass die übertragende Seite geladen bleibt, sodass es in einem [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Handler verwendet werden kann.

### MathML

- Teilweise Implementierung der [OpenType MATH Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/math), Abschnitt 6.3.6 ([Firefox Bug 407059](https://bugzil.la/407059)). Für Details sehen Sie sich den [MathML Foltertest](/de/docs/Mozilla/MathML_Project/MathML_Torture_Test) an.
- Das `::-moz-math-stretchy` Pseudo-Element wurde entfernt ([Firefox Bug 1000879](https://bugzil.la/1000879)).
- Wenn verfügbar, werden die Unicode mathematischen alphanumerischen Zeichen für fette, kursive und fett-kursive mathematische Varianten verwendet ([Firefox Bug 930504](https://bugzil.la/930504)).

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Sicherheit

- [Privilegierter Code erhält nun "Xray vision" für `Date` Instanzen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Änderungen für Add-on- und Mozilla-Entwickler

- Das `align` Attribut an der `urlbar-wrapper` (früher auf dem `urlbar-container`), das seit Urzeiten auf `center` gesetzt war, wurde entfernt. Es ist bekannt, dass dies Drittanbieter-Themen beeinflusst. Sie sollten sorgfältig überlegen, was die richtige Korrektur für Ihr Thema ist, aber um den äquivalenten Effekt beizubehalten, können Sie die folgende CSS-Regel zu Ihrem Thema hinzufügen:

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` und `nsIDOMWindowUtils.sendSelectionSetEvent()` haben `aAdditionalFlags` als optionales Argument. Wenn Sie `nsIDOMWindowUtils.sendSelectionSetEvent()` mit `true` für `aReverse` aufgerufen haben, wäre das Verhalten durch diese Änderung beeinträchtigt. Siehe die [Erklärung der einzelnen Flaggen](/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#constants) (`QUERY_CONTENT_FLAG_*` und `SELECTION_SET_FLAG_*`) für die Details von `aAdditionalFlags`.

### Add-on SDK

Höhepunkte:

- [Add-on Debugger](/de/docs/Mozilla/Add-ons/Add-on_Debugger)
- Hinzugefügt die Fähigkeit zur Konvertierung [zwischen High-Level BrowserWindow Objekten und DOM Fenstern](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#converting_to_dom_windows), und [zwischen High-Level Tab Objekten und XUL Tabs](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#converting_to_xul_tabs).
- Aktualisiert das Standardthema, das für Panels auf Mac OS X verwendet wird.
- Hinzugefügt [contentStyle und contentStyleFile](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#styling_panel_content) Optionen zu Panel.

[GitHub Commits zwischen Firefox 30 und Firefox 31](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). Dies wird keine Erhöhungen enthalten, die nach diesem Release in Aurora eingegangen sind.

[Bugs, die zwischen Firefox 30 und Firefox 31 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies wird keine Erhöhungen enthalten, die nach diesem Release in Aurora eingegangen sind.

### Ältere Versionen

{{Firefox_for_developers}}

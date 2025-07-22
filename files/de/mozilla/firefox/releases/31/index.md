---
title: Firefox 31 für Entwickler
short-title: Firefox 31
slug: Mozilla/Firefox/Releases/31
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 31 wurde am 22. Juli 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Farbpipette zum Auswählen von Farben auf Webseiten](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [vollständige Stack-Traces für Konsolenfehlermeldungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [editierbare Box-Modell-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [%c-Formatierung zum Stylen von Konsolennachrichten](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- ["Copy as cURL"-Befehl im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [Sublime Text Tastenbelegungen im Quellcode-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [Option, um Netzwerkmonitor-Protokolle persistent zu machen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [JavaScript-Warnungen standardmäßig aktiviert in der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt+Klick, um alle Nachkommen eines Knotens zu erweitern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[Alle DevTools-Bugs, die zwischen Firefox 30 und Firefox 31 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Das `var-` Präfix der CSS-Variablen wurde geändert zu `--`, um die endgültige Spezifikationsänderung widerzuspiegeln ([Firefox-Bug 985838](https://bugzil.la/985838)).
- Die {{cssxref("hyphens")}}-Eigenschaft unterstützt nun polnische Trennregeln ([Firefox-Bug 987668](https://bugzil.la/987668)).
- Ein unerwünschtes Leerzeichen bei Vielfachen von 10.000 in koreanischen Zählerstilen wurde entfernt ([Firefox-Bug 985186](https://bugzil.la/985186)).
- CSS-Opaque-Transition bricht mit Eltern-Pseudo :before und Overflow auto ([Firefox-Bug 990340](https://bugzil.la/990340)).
- Das `::-moz-math-stretchy` Pseudoelement wurde entfernt ([Firefox-Bug 1000879](https://bugzil.la/1000879)).

### HTML

- {{HTMLElement("track")}} wurde implementiert ([Firefox-Bug 629350](https://bugzil.la/629350)).

### JavaScript

Neue ECMAScript 2015-Funktionen implementiert:

- Neues `Array`-built-in: {{jsxref("Array.prototype.fill()")}} ([Firefox-Bug 911147](https://bugzil.la/911147))
- Neue `Math`-Funktion: {{jsxref("Math.clz32()")}} ([Firefox-Bug 925123](https://bugzil.la/925123))
- Neues `String`-built-in: {{jsxref("String.prototype.normalize()")}} ist in Firefox Desktop verfügbar ([Firefox-Bug 918987](https://bugzil.la/918987)).
- Neue `Object`-Methode {{jsxref("Object.setPrototypeOf()")}}.
- Neue `Number`-Konstanten: {{jsxref("Number.MAX_SAFE_INTEGER")}} und {{jsxref("Number.MIN_SAFE_INTEGER")}}.
- Die ES2015 Proxy {{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "isExtensible")}}-Falle wurde implementiert ([Firefox-Bug 978235](https://bugzil.la/978235)).

### Schnittstellen/API/DOM

- Der Konstruktor von `KeyboardEvent` wurde implementiert ([Firefox-Bug 930893](https://bugzil.la/930893)).
- Die Resource Timing API wurde implementiert (siehe [Firefox-Bug 822480](https://bugzil.la/822480)).
- Attribut `KeyboardEvent.isComposing` wurde implementiert ([Firefox-Bug 993234](https://bugzil.la/993234)).
- `InputEvent`-Schnittstelle wurde implementiert ([Firefox-Bug 993253](https://bugzil.la/993253)).
- Attribut `InputEvent.isComposing` wurde implementiert ([Firefox-Bug 993253](https://bugzil.la/993253)).
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) wurde implementiert ([Firefox-Bug 955860](https://bugzil.la/955860)).
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event) ist jetzt in anderen Browsern stornierbar ([Firefox-Bug 704423](https://bugzil.la/704423)). Der Aufruf von `preventDefault()` setzt nur das `defaultPrevented`-Attribut auf `true;` andere Verhaltensweisen werden nicht geändert. Z.B. kann es nicht verhindern, den `:hover`-Zustand zu setzen.
- Die [`Path2D`](/de/docs/Web/API/Path2D)-Schnittstelle wurde implementiert.
- Die Methoden [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath), [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke), [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip), [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) und [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) wurden aktualisiert, um optional ein [`Path2D`](/de/docs/Web/API/Path2D)-Objekt zu akzeptieren.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek) wurde implementiert.
- Die `Connection`-Schnittstelle wurde umbenannt in [`NetworkInformation`](/de/docs/Web/API/NetworkInformation) und wurde modifiziert, um der neuen Spezifikation zu entsprechen ([Firefox-Bug 960426](https://bugzil.la/960426)).
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert; dies ermöglicht die asynchrone Übertragung von Analysen oder anderen Daten auf eine Weise, die nicht darauf angewiesen ist, dass die übertragende Seite geladen bleibt, sodass sie in einem [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Handler verwendet werden kann.

### MathML

- Teilweise Implementierung der [OpenType MATH Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/math), Abschnitt 6.3.6 ([Firefox-Bug 407059](https://bugzil.la/407059)). Für Details, probieren Sie den [MathML Foltertest](https://web.archive.org/web/20210605072117/https://developer.mozilla.org/de/docs/Mozilla/MathML_Project/MathML_Torture_Test).
- Das `::-moz-math-stretchy`-Pseudoelement wurde entfernt ([Firefox-Bug 1000879](https://bugzil.la/1000879)).
- Wenn verfügbar, werden die Unicode-Mathematischen alphanumerischen Zeichen für fette, kursiv und fett-kursiv Mathematik-Varianten verwendet ([Firefox-Bug 930504](https://bugzil.la/930504)).

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Sicherheit

- [Privilegierter Code erhält jetzt Xray Vision für `Date`-Instanzen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Änderungen für Add-on- und Mozilla-Entwickler

- Das `align`-Attribut auf dem `urlbar-wrapper` (früher auf dem `urlbar-container`), das seit jeher auf `center` gesetzt war, wurde entfernt. Dies ist bekannt dafür, dass es Drittanbieter-Themes beeinflusst. Sie sollten sorgfältig überlegen, welche die richtige Lösung für Ihr Theme ist, aber um den äquivalenten Effekt beizubehalten, können Sie die folgende CSS-Regel zu Ihrem Theme hinzufügen:

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` und `nsIDOMWindowUtils.sendSelectionSetEvent()` haben `aAdditionalFlags` als optionales Argument. Wenn Sie `nsIDOMWindowUtils.sendSelectionSetEvent()` mit `true` für `aReverse` aufgerufen haben, würde das Verhalten durch diese Änderung beeinträchtigt. Siehe [Erläuterung jedes Flags](https://web.archive.org/web/20210518041413/https://developer.mozilla.org/de/docs/mozilla/tech/xpcom/reference/interface/nsidomwindowutils#constants) (`QUERY_CONTENT_FLAG_*` und `SELECTION_SET_FLAG_*`) für die Details von `aAdditionalFlags`.

### Add-on SDK

Höhepunkte:

- [Add-on Debugger](https://extensionworkshop.com/documentation/develop/debugging/)
- Möglichkeit hinzugefügt, [zwischen High-Level BrowserWindow-Objekten und DOM-Fenstern zu konvertieren](https://web.archive.org/web/20201201230444/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/windows#converting_to_dom_windows) und [zwischen High-Level Tab-Objekten und XUL-Tabs zu konvertieren](https://web.archive.org/web/20210117200824/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/tabs#converting_to_xul_tabs).
- Das standardmäßige Theme für Panels auf Mac OS X wurde aktualisiert.
- [contentStyle und contentStyleFile](https://web.archive.org/web/20201201022417/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/panel#styling_panel_content) Optionen wurden zum Panel hinzugefügt.

[GitHub-Commits zwischen Firefox 30 und Firefox 31](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). Dies schließt keine Hochstufungen ein, die nach dem Eintritt dieser Version in Aurora vorgenommen wurden.

[Zwischen Firefox 30 und Firefox 31 behobene Bugs](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies schließt keine Hochstufungen ein, die nach dem Eintritt dieser Version in Aurora vorgenommen wurden.

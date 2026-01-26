---
title: Firefox 31 Versionshinweise für Entwickler
short-title: Firefox 31
slug: Mozilla/Firefox/Releases/31
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 31 wurde am 22. Juli 2014 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Entwickler von Add-ons.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Eyedropper-Tool zur Auswahl von Farben auf Webseiten](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [vollständige Stacktraces für Konsolenfehlermeldungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [bearbeitbare Box-Modell-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [%c Formatierung zur Gestaltung von Konsolennachrichten](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- ["Als cURL kopieren"-Befehl im Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [Sublime Text Tastenkombinationen im Quelltext-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [Option, um Netzwerk-Monitor-Protokolle dauerhaft zu machen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [JavaScript-Warnungen standardmäßig im Web-Konsole aktiviert](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt+Klick, um alle Nachkommen eines Knotens zu erweitern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[Alle behobenen Devtools-Bugs zwischen Firefox 30 und Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Das `var-` Präfix von CSS-Variablen wurde in `--` geändert, um die endgültige Spezifikationsänderung widerzuspiegeln ([Firefox Fehler 985838](https://bugzil.la/985838)).
- Die {{cssxref("hyphens")}}-Eigenschaft unterstützt nun polnische Trennregeln ([Firefox Fehler 987668](https://bugzil.la/987668)).
- Ein unerwünschtes Leerzeichen für Vielfache von 10.000 in koreanischen Zählerstilen wurde entfernt ([Firefox Fehler 985186](https://bugzil.la/985186)).
- CSS-Opazitätstransition war mit dem pseudo-Elternelement :before und Überlauf auto defekt ([Firefox Fehler 990340](https://bugzil.la/990340)).
- Das `::-moz-math-stretchy` Pseudo-Element wurde entfernt ([Firefox Fehler 1000879](https://bugzil.la/1000879)).

### HTML

- {{HTMLElement("track")}} wurde implementiert ([Firefox Fehler 629350](https://bugzil.la/629350)).

### JavaScript

Neue ECMAScript 2015 Funktionen implementiert:

- Neues `Array` Built-in: {{jsxref("Array.prototype.fill()")}} ([Firefox Fehler 911147](https://bugzil.la/911147))
- Neue `Math` Funktion: {{jsxref("Math.clz32()")}} ([Firefox Fehler 925123](https://bugzil.la/925123))
- Neues `String` Built-in: {{jsxref("String.prototype.normalize()")}} ist in Firefox Desktop verfügbar ([Firefox Fehler 918987](https://bugzil.la/918987)).
- Neue `Object` Methode {{jsxref("Object.setPrototypeOf()")}}.
- Neue `Number` Konstanten: {{jsxref("Number.MAX_SAFE_INTEGER")}} und {{jsxref("Number.MIN_SAFE_INTEGER")}}.
- Die ES2015 Proxy {{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "isExtensible")}} Falle wurde implementiert ([Firefox Fehler 978235](https://bugzil.la/978235)).

### Schnittstellen/APIs/DOM

- Konstruktor von `KeyboardEvent` wurde implementiert ([Firefox Fehler 930893](https://bugzil.la/930893)).
- Die Resource Timing API wurde implementiert (siehe [Firefox Fehler 822480](https://bugzil.la/822480)).
- `KeyboardEvent.isComposing` Attribut wurde implementiert ([Firefox Fehler 993234](https://bugzil.la/993234)).
- `InputEvent` Schnittstelle wurde implementiert ([Firefox Fehler 993253](https://bugzil.la/993253)).
- `InputEvent.isComposing` Attribut wurde implementiert ([Firefox Fehler 993253](https://bugzil.la/993253)).
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) wurde implementiert ([Firefox Fehler 955860](https://bugzil.la/955860)).
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event) ist jetzt wie in anderen Browsern abbrechbar ([Firefox Fehler 704423](https://bugzil.la/704423)). Der Aufruf von `preventDefault()` setzt nur das `defaultPrevented` Attribut auf `true;` alle anderen Verhaltensweisen werden nicht geändert. Z. B. kann es nicht verhindern, dass der `:hover` Zustand gesetzt wird.
- Die [`Path2D`](/de/docs/Web/API/Path2D) Schnittstelle wurde implementiert.
- Die Methoden [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath), [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke), [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip), [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) und [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) wurden aktualisiert, um optional ein [`Path2D`](/de/docs/Web/API/Path2D) Objekt zu akzeptieren.
- Implementiert [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek).
- Die `Connection` Schnittstelle wurde in [`NetworkInformation`](/de/docs/Web/API/NetworkInformation) umbenannt und wurde modifiziert, um der neuen Spezifikation zu entsprechen ([Firefox Fehler 960426](https://bugzil.la/960426)).
- Die Funktion [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert; dies ermöglicht die asynchrone Übertragung von Analyse- oder anderen Daten auf eine Weise, die nicht darauf angewiesen ist, dass die sendende Seite geladen bleibt. So kann es in einem [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Handler verwendet werden.

### MathML

- Teilweise Implementierung der [OpenType MATH Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/math), Abschnitt 6.3.6 ([Firefox Fehler 407059](https://bugzil.la/407059)). Für Details, testen Sie den [MathML Foltertest](https://web.archive.org/web/20210605072117/https://developer.mozilla.org/de/docs/Mozilla/MathML_Project/MathML_Torture_Test).
- Das `::-moz-math-stretchy` Pseudo-Element wurde entfernt ([Firefox Fehler 1000879](https://bugzil.la/1000879)).
- Wenn verfügbar, werden die Unicode-Mathematischen alphanumerischen Zeichen für fette, kursive und fett-kursive mathematische Varianten verwendet ([Firefox Fehler 930504](https://bugzil.la/930504)).

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Sicherheit

- [Privilegierter Code erhält nun Xray-Sicht für `Date` Instanzen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Änderungen für Add-on- und Mozilla-Entwickler

- Das `align` Attribut auf dem `urlbar-wrapper` (früher auf dem `urlbar-container`), das seit jeher auf `center` gesetzt war, wurde entfernt. Es ist bekannt, dass dies Drittanbieterthemen betrifft. Sie sollten genau prüfen, was die richtige Lösung für Ihr Thema ist, aber um den gleichwertigen Effekt beizubehalten, können Sie folgende CSS-Regel zu Ihrem Thema hinzufügen:

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` und `nsIDOMWindowUtils.sendSelectionSetEvent()` haben `aAdditionalFlags` als optionales Argument. Wenn Sie `nsIDOMWindowUtils.sendSelectionSetEvent()` mit `true` für `aReverse` aufgerufen haben, wäre das Verhalten durch diese Änderung gestört worden. Siehe [Erklärung zu jedem Flag](https://web.archive.org/web/20210518041413/https://developer.mozilla.org/de/docs/mozilla/tech/xpcom/reference/interface/nsidomwindowutils#constants) (`QUERY_CONTENT_FLAG_*` und `SELECTION_SET_FLAG_*`) für die Details von `aAdditionalFlags`.

### Add-on SDK

Highlights:

- [Add-on Debugger](https://extensionworkshop.com/documentation/develop/debugging/)
- Die Fähigkeit hinzugefügt, [zwischen High-Level BrowserWindow Objekten und DOM-Fenstern zu konvertieren](https://web.archive.org/web/20201201230444/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/windows#converting_to_dom_windows), und [zwischen High-Level Tab Objekten und XUL-Tabs](https://web.archive.org/web/20210117200824/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/tabs#converting_to_xul_tabs) zu konvertieren.
- Das Standardthema für Panels unter Mac OS X wurde aktualisiert.
- Zu Panel wurden [contentStyle und contentStyleFile](https://web.archive.org/web/20201201022417/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/panel#styling_panel_content) Optionen hinzugefügt.

[GitHub Commits, die zwischen Firefox 30 und Firefox 31 gemacht wurden](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). Dies schließt keine Änderungen ein, die nach dem Eintritt dieser Version in Aurora vorgenommen wurden.

[Bugs, die zwischen Firefox 30 und Firefox 31 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies schließt keine Änderungen ein, die nach dem Eintritt dieser Version in Aurora vorgenommen wurden.

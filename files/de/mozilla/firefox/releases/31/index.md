---
title: Firefox 31 Veröffentlichungsnotizen für Entwickler
short-title: Firefox 31
slug: Mozilla/Firefox/Releases/31
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 31 wurde am 22. Juli 2014 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Eyedropper-Tool zum Auswählen von Farben auf Webseiten](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [vollständige Stack-Traces für Konsolenfehlermeldungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [bearbeitbare Box-Modell-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [%c-Formatierung zum Stylen von Konsolennachrichten](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- ["copy as cURL"-Befehl im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [Sublime Text-Tastenkürzel im Quellcode-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [Option zur Persistenz von Logs im Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [JavaScript-Warnungen sind standardmäßig in der Webkonsole aktiviert](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt + Klick zum Erweitern aller Nachkommen eines Knotens](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[Alle behobenen Entwicklerwerkzeug-Bugs zwischen Firefox 30 und Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Das `var-` Präfix der CSS-Variablen wurde zu `--` geändert, um die endgültige Spezifikationsänderung zu spiegeln ([Firefox-Bug 985838](https://bugzil.la/985838)).
- Die {{cssxref("hyphens")}} Eigenschaft unterstützt jetzt polnische Silbentrennungsregeln ([Firefox-Bug 987668](https://bugzil.la/987668)).
- Unerwünschte Leerzeichen für Vielfache von 10.000 in koreanischen Zählerstilen wurden entfernt ([Firefox-Bug 985186](https://bugzil.la/985186)).
- CSS-Übergang der Deckkraft war fehlerhaft mit übergeordneten Pseudo-Elementen :before und overflow auto ([Firefox-Bug 990340](https://bugzil.la/990340)).
- Das `::-moz-math-stretchy` Pseudo-Element wurde entfernt ([Firefox-Bug 1000879](https://bugzil.la/1000879)).

### HTML

- {{HTMLElement("track")}} wurde implementiert ([Firefox-Bug 629350](https://bugzil.la/629350)).

### JavaScript

Neue ECMAScript 2015 Funktionen implementiert:

- Neues `Array` Built-in: {{jsxref("Array.prototype.fill()")}} ([Firefox-Bug 911147](https://bugzil.la/911147))
- Neue `Math`-Funktion: {{jsxref("Math.clz32()")}} ([Firefox-Bug 925123](https://bugzil.la/925123))
- Neues `String` Built-in: {{jsxref("String.prototype.normalize()")}} ist verfügbar in Firefox Desktop ([Firefox-Bug 918987](https://bugzil.la/918987)).
- Neue `Object`-Methode {{jsxref("Object.setPrototypeOf()")}}.
- Neue `Number` Konstanten: {{jsxref("Number.MAX_SAFE_INTEGER")}} und {{jsxref("Number.MIN_SAFE_INTEGER")}}.
- Der ES2015 Proxy {{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "isExtensible")}} trap wurde implementiert ([Firefox-Bug 978235](https://bugzil.la/978235)).

### Schnittstellen/APIs/DOM

- Konstruktor von `KeyboardEvent` wurde implementiert ([Firefox-Bug 930893](https://bugzil.la/930893)).
- Die Resource Timing API wurde implementiert (siehe [Firefox-Bug 822480](https://bugzil.la/822480)).
- Das `KeyboardEvent.isComposing` Attribut wurde implementiert ([Firefox-Bug 993234](https://bugzil.la/993234)).
- `InputEvent` Schnittstelle wurde implementiert ([Firefox-Bug 993253](https://bugzil.la/993253)).
- Das `InputEvent.isComposing` Attribut wurde implementiert ([Firefox-Bug 993253](https://bugzil.la/993253)).
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) wurde implementiert ([Firefox-Bug 955860](https://bugzil.la/955860)).
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event) ist jetzt wie in anderen Browsern abbrechbar ([Firefox-Bug 704423](https://bugzil.la/704423)). Das Aufrufen von `preventDefault()` setzt nur das Attribut `defaultPrevented` auf `true`; alle anderen Verhaltensweisen werden nicht geändert. Zum Beispiel kann es nicht verhindern, dass der `:hover` Zustand gesetzt wird.
- Die [`Path2D`](/de/docs/Web/API/Path2D) Schnittstelle wurde implementiert.
- Die Methoden [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath), [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke), [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip), [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) und [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) wurden aktualisiert, um optional ein [`Path2D`](/de/docs/Web/API/Path2D) Objekt akzeptieren zu können.
- Implementiert [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek).
- Die Schnittstelle `Connection` wurde umbenannt zu [`NetworkInformation`](/de/docs/Web/API/NetworkInformation) und wurde modifiziert, um der neuen Spezifikation zu entsprechen ([Firefox-Bug 960426](https://bugzil.la/960426)).
- Die [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert; dies ermöglicht die asynchrone Übertragung von Analysedaten oder anderen Daten auf eine Weise, die nicht darauf angewiesen ist, dass die übertragende Seite geladen bleibt, sodass sie in einem [`unload`](/de/docs/Web/API/Window/unload_event) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Handler verwendet werden kann.

### MathML

- Partial Implementierung der [OpenType MATH Tabelle](https://learn.microsoft.com/en-us/typography/opentype/spec/math), Abschnitt 6.3.6 ([Firefox-Bug 407059](https://bugzil.la/407059)). Für Details siehe den [MathML Foltertest](https://web.archive.org/web/20210605072117/https://developer.mozilla.org/de/docs/Mozilla/MathML_Project/MathML_Torture_Test).
- Das `::-moz-math-stretchy` Pseudo-Element wurde entfernt ([Firefox-Bug 1000879](https://bugzil.la/1000879)).
- Wenn verfügbar, werden die Unicode-Mathematischen alphanumerischen Zeichen für fette, kursive und fett-kursive mathematische Varianten verwendet ([Firefox-Bug 930504](https://bugzil.la/930504)).

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Sicherheit

- [Privilegierter Code erhält jetzt Xray-Sicht für `Date`-Instanzen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Änderungen für Add-on- und Mozilla-Entwickler

- Das `align` Attribut auf dem `urlbar-wrapper` (früher auf dem `urlbar-container`), das seit jeher auf `center` gesetzt war, wurde entfernt. Dies ist bekannt, Drittanbieter-Themes zu beeinflussen. Sie sollten sorgfältig prüfen, was der richtige Fix für Ihr Theme ist, um den äquivalenten Effekt zu erhalten. Sie können folgende CSS-Regel zu Ihrem Theme hinzufügen:

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` und `nsIDOMWindowUtils.sendSelectionSetEvent()` haben `aAdditionalFlags` als optionales Argument. Wenn Sie `nsIDOMWindowUtils.sendSelectionSetEvent()` mit `true` für `aReverse` aufgerufen haben, wäre das Verhalten durch diese Änderung gestört worden. Siehe [Erklärung der einzelnen Flags](https://web.archive.org/web/20210518041413/https://developer.mozilla.org/de/docs/mozilla/tech/xpcom/reference/interface/nsidomwindowutils#constants) (`QUERY_CONTENT_FLAG_*` und `SELECTION_SET_FLAG_*`) für Details zu `aAdditionalFlags`.

### Add-on SDK

Höhepunkte:

- [Add-on-Debugger](https://extensionworkshop.com/documentation/develop/debugging/)
- Die Fähigkeit hinzugefügt, [zwischen High-Level BrowserWindow Objekten und DOM-Fenstern](https://web.archive.org/web/20201201230444/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/windows#converting_to_dom_windows) und [zwischen High-Level Tab Objekten und XUL-Tabs](https://web.archive.org/web/20210117200824/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/tabs#converting_to_xul_tabs) umzuwandeln.
- Das Standard-Theme für Panels unter Mac OS X wurde aktualisiert.
- [contentStyle und contentStyleFile](https://web.archive.org/web/20201201022417/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/panel#styling_panel_content) Optionen wurden zu Panel hinzugefügt.

[GitHub Commits gemacht zwischen Firefox 30 und Firefox 31](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). Dies beinhaltet keine Änderungen, die nach dem Wechsel dieser Version zur Aurora-Phase vorgenommen wurden.

[Bugs behoben zwischen Firefox 30 und Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies beinhaltet keine Änderungen, die nach dem Wechsel dieser Version zur Aurora-Phase vorgenommen wurden.

---
title: Firefox 9 – Versionshinweise für Entwickler
short-title: Firefox 9
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Die Version 9.0.1 für Mac und Linux, die einen in letzter Minute entdeckten Absturzfehler behob, wurde am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Webkonsole unterstützt in ihren Protokollierungsmethoden jetzt grundlegende [String-Substitutionen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions).
- Sie können in der Webkonsole jetzt [visuell verschachtelte Ausgabeblöcke erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console), um die Ausgabe leichter lesbar zu machen.

### HTML

- Das `value`-Attribut von {{ HTMLElement("li") }} kann jetzt negativ sein. Bisher wurden negative Werte in 0 umgewandelt.
- Bei Verwendung der Elemente {{ HTMLElement("audio") }} und {{ HTMLElement("video") }} können Sie jetzt [Start- und Endzeit der Medienwiedergabe](/de/docs/Web/Media/Guides/Audio_and_video_delivery#specifying_playback_range) im URI des Mediums angeben.
- Die Elemente {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} berücksichtigen beim Aufruf der Rechtschreibprüfung jetzt den Wert des `lang`-Attributs.
- Wenn das Element {{ HTMLElement("input") }} mit `type="file"` und `accept="image/*"` verwendet wird, können Nutzer von Firefox für Android jetzt mit der Kamera ihres Smartphones Fotos aufnehmen, ohne den Browser zu verlassen.
- PNG-ICO-Bilder im Stil von Windows Vista werden jetzt unterstützt.
- Beim Zeichnen von Bildern, die mit dem Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) CORS-Zugriff anfordern, wird der [Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases) nicht mehr fälschlicherweise als „tainted“ markiert, wenn CORS-Zugriff gewährt wurde.
- Der Wert des Attributs [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) kann jetzt bis zu 65.534 betragen; bisher lag die Obergrenze bei 8190.

### CSS

- Die Eigenschaft {{ cssxref("font-stretch") }} wird jetzt unterstützt.
- Die Eigenschaft {{ cssxref("columns") }} wird jetzt mit dem Präfix `-moz` unterstützt. Sie ist eine Kurzschreibweise für die Eigenschaften {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein über das Element {{ HTMLElement("link") }} eingebundenes Stylesheet vollständig geladen und geparst wurde (aber noch nicht auf das Dokument angewendet wurde), wird jetzt ein [`load`-Ereignis](/de/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) ausgelöst. Tritt bei der Verarbeitung eines Stylesheets ein Fehler auf, wird außerdem ein `error`-Ereignis ausgelöst.
- Mit einer neuen Syntax aus zwei Werten für {{ cssxref("text-overflow") }} können Sie jetzt festlegen, wie überlaufender Inhalt sowohl am linken als auch am rechten Rand behandelt wird.

### JavaScript

_Keine Änderungen._

### DOM

- [Vollbildmodus verwenden](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Fullscreen API ermöglicht es, Inhalte ohne Browseroberfläche auf dem gesamten Bildschirm darzustellen. Das eignet sich besonders für Videos und Spiele. Diese API ist derzeit experimentell und mit einem Präfix versehen.

<!---->

- Die Methode [`Node.contains()`](/de/docs/Web/API/Node/contains) ist jetzt implementiert. Mit ihr können Sie feststellen, ob ein Knoten ein Nachfahre eines anderen Knotens ist.
- Das Attribut [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) ist implementiert. Es gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn der übergeordnete Knoten kein Element ist.
- [Composition Events](/de/docs/Web/API/CompositionEvent) gemäß DOM Level 3 werden jetzt unterstützt.
- Das Attribut [`Document.scripts`](/de/docs/Web/API/Document/scripts) ist implementiert. Es gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{ HTMLElement("script") }}-Elemente im Dokument zurück.
- Die Methode [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) ist implementiert.
- Die Ereignisse, auf die bei {{ HTMLElement("body") }}-Elementen reagiert werden kann, wurden an den neuesten Entwurf der HTML5-Spezifikation angepasst. Der [Leitfaden zu DOM-Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#event_index) enthält eine Liste dieser Ereignisse.
- Das Ereignis `readystatechange` wird jetzt wie vorgesehen nur noch auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst.
- Ereignis-Handler sind jetzt als standardisierte IDL-Interfaces implementiert. In den meisten Fällen hat dies keine Auswirkungen auf Inhalte, es gibt jedoch Ausnahmen.
- `XMLHttpRequest` unterstützt jetzt den neuen Antworttyp `"moz-json"`. Damit kann `XMLHttpRequest` {{Glossary("JSON", "JSON")}}-Strings automatisch parsen: Wenn Sie diesen Typ anfordern, wird ein zurückgegebener JSON-String geparst, sodass der Wert der Eigenschaft `response` das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest`-„progress“-Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jeden empfangenen Datenblock gesendet. Bisher konnte es vorkommen, dass für den letzten empfangenen Datenblock kein „progress“-Ereignis ausgelöst wurde. Sie können den Fortschritt jetzt allein anhand der „progress“-Ereignisse verfolgen, ohne zusätzlich „load“-Ereignisse überwachen zu müssen, um den Empfang des letzten Datenblocks zu erkennen.
- Bisher löste ein Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null`-Listener eine Ausnahme aus. Jetzt kehrt die Methode ohne Fehler und ohne Wirkung zurück.
- Mit der neuen Eigenschaft [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) können Ihre Inhalte einfach feststellen, ob Nutzer die Do-Not-Track-Einstellung aktiviert haben. Lautet der Wert „yes“, sollten Sie die Nutzer nicht tracken.
- [`Range`](/de/docs/Web/API/Range)- und [`Selection`](/de/docs/Web/API/Selection)-Objekte verhalten sich beim Aufruf von [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) jetzt gemäß ihren Spezifikationen.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) ist bei Doctype-Knoten jetzt das Dokument, für das [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) zum Erstellen des Knotens aufgerufen wurde, statt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- Workers, die über Blob-URLs implementiert wurden, funktionierten in Firefox 8 nicht. Ab Firefox 9 funktionieren sie wieder.

### WebGL

- Die Attribute `drawingBufferWidth` und `drawingBufferHeight` des [WebGL](/de/docs/Web/API/WebGL_API)-Kontexts werden jetzt unterstützt.

### MathML

- Der nicht standardisierte Wert `restyle` für das Attribut `actiontype` von {{ MathMLElement("maction") }}-Elementen wurde entfernt.
- Das Element `mlabeledtr` wird zwar weiterhin nicht unterstützt, seine Verwendung verhindert aber nicht mehr vollständig das Rendering. Den Fortschritt bei der tatsächlichen Unterstützung dieses Elements können Sie unter [Firefox-Bug 689641](https://bugzil.la/689641) verfolgen.

### Netzwerk

- Sie können jetzt den Inhalt von [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (also den Inhalt eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-Objekts) [mit XMLHttpRequest senden](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data).
- WebSocket-Verbindungen können jetzt Nicht-Zeichen in ansonsten gültigen UTF-8-Datenframes empfangen, statt daran zu scheitern.
- Der HTTP-Header `Accept` für XSLT-Anfragen wurde zur Vereinfachung in `*/*` geändert. Da beim Abrufen von XSLT ohnehin schon immer auf `*/*` zurückgegriffen wurde, war es sinnvoll, bereits die ursprüngliche Anfrage zu vereinfachen.
- Wenn ein Server versucht, Nutzer mit den Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` zu einem `javascript:`-URI umzuleiten, führt dies jetzt zu einem Fehler wegen einer ungültigen Verbindung, statt die Umleitung auszuführen. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }} ausgeliefert wurden, wurden bisher so behandelt, als wäre {{ HTTPHeader("Content-Disposition") }} auf „attachment“ gesetzt. Das funktionierte nicht immer wie erwartet. Jetzt werden sie so behandelt, als wäre {{ HTTPHeader("Content-Disposition") }} auf „inline“ gesetzt.
- Die standardmäßige maximale Größe eines Eintrags im Festplatten-Cache wurde auf 50 MB erhöht. Bisher wurden nur Einträge bis zu 5 MB zwischengespeichert.

## Änderungen für Mozilla- und Add-on-Entwickler

Unter [Add-ons für Firefox 9 aktualisieren](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) finden Sie einen Überblick über Änderungen, die möglicherweise nötig sind, damit Ihre Add-ons mit Firefox 9 funktionieren.

### XUL

- Das Element `<xul:tab>` hat jetzt ein `pending`-Attribut mit dem Wert `true`, während der Tab vom Session-Store-Dienst wiederhergestellt wird. Dieses Attribut kann verwendet werden, um den Tab in Themes zu gestalten. Bei Tabs, deren Wiederherstellung nicht aussteht, ist das Attribut nicht vorhanden.
- Das Element `<xul:tab>` hat jetzt ein `unread`-Attribut mit dem Wert `true`, wenn sich der Tab geändert hat, seit er zuletzt aktiv war, oder wenn er seit Beginn der aktuellen Sitzung noch nicht ausgewählt wurde. Bei Tabs, die nicht als ungelesen gelten, ist das Attribut nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Drag-Image für DOM-Drag-and-Drop-Vorgänge verwenden. Dadurch können Sie die [standardisierte Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) für XUL-Inhalte nutzen.
- Bei der Methode `appendNotification` des Elements `<xul:notificationbox>` können Sie jetzt einen Callback angeben, der bei relevanten Ereignissen im Zusammenhang mit der Benachrichtigungsbox aufgerufen wird. Derzeit gibt es nur das Ereignis „removed“, das meldet, dass die Box aus ihrem Fenster entfernt wurde.

### Änderungen an JavaScript-Code-Modulen

- `FileUtils.jsm` verfügt jetzt über einen `File`-Konstruktor, der ein `nsIFile`-Objekt zurückgibt, das eine anhand ihres Pfadnamens angegebene Datei repräsentiert.

### Änderungen an Diensten

- Der Dienst für Inhaltseinstellungen unterstützt jetzt das private Surfen (siehe [Firefox-Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR verfügt jetzt über ein „append“-Modul, mit dem Sie neue Daten an das Ende eines bestehenden Logs anhängen können.

### Änderungen an Interfaces

#### Entfernte Interfaces

- `nsIGlobalHistory3` wurde im Zuge der Vereinfachung des Places- und DocShell-Codes entfernt.

#### Weitere Änderungen an Interfaces

- Das Interface `nsISound` hat eine neue Konstante: `EVENT_EDITOR_MAX_LEN`. Damit kann der Systemklang abgespielt werden, wenn in ein Textfeld mehr Zeichen eingegeben werden, als maximal zulässig sind. Derzeit wird dies nur unter Windows verwendet.
- Das Interface `nsIScriptError2` hat die neuen Eigenschaften `timeStamp` und `innerWindowID`. Außerdem erwartet die Methode `initWithWindowID()` jetzt eine innere statt einer äußeren Fenster-ID.
- Das Attribut `nsIBidiKeyboard.haveBidiKeyboards` wurde hinzugefügt. Damit können Sie feststellen, ob auf dem System für beide Schreibrichtungen – von links nach rechts und von rechts nach links – jeweils mindestens eine Tastatur installiert ist.
- Mit dem neuen Attribut `nsIEditor.isSelectionEditable` können Sie feststellen, ob der Anker der aktuellen Auswahl bearbeitbar ist. Das hilft in Fällen, in denen nur Teile eines Dokuments bearbeitbar sind: Sie können prüfen, ob sich die aktuelle Auswahl in einem bearbeitbaren Bereich befindet.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Rahmen einer Leistungsoptimierung des Places-Systems entfernt. Stattdessen können Sie die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die Methode `nsIDOMWindowUtils.wrapDOMFile()` wurde hinzugefügt. Sie gibt für ein bestimmtes `nsIFile` ein DOM-[`File`](/de/docs/Web/API/File)-Objekt zurück.
- Die Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` wurde hinzugefügt, um verzögert geladene Skripte entfernen zu können. Bootstrapped-Add-ons sollten sie beim Herunterfahren verwenden, um alle Skripte zu entfernen, die sie mit `nsIChromeFrameMessageManager.loadFrameScript()` und gesetztem Flag für verzögertes Laden geladen haben. Für Add-ons ist die Methode als `browser.messageManager.removeDelayedFrameScript()` verfügbar.
- Das Interface `nsIAppStartup` hat ein neues Attribut namens `interrupted`. Damit können Sie feststellen, ob der Startvorgang zu irgendeinem Zeitpunkt durch eine interaktive Eingabeaufforderung unterbrochen wurde. Das kann beispielsweise bei der Messung von Startzeiten für Leistungsbewertungen hilfreich sein, um Messwerte aus unterbrochenen Sitzungen auszuschließen.
- Das Interface `nsIEditorSpellCheck` wurde überarbeitet, um die Auswahl von Wörterbüchern für die Rechtschreibprüfung pro Website zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt das nie vollständig implementierte Konzept eindeutiger Zeiger nicht mehr.

### Änderungen am Build-System

- Die Option `--enable-application=standalone` zum Erstellen eines eigenständigen XPConnect wurde entfernt; sie funktionierte ohnehin seit 2007 nicht mehr.
- Die Unterstützung für eigenständige Builds von Necko und Transformiix XSLT wurde entfernt. Sie können `--enable-application=network` und `--enable-application=content/xslt` nicht mehr verwenden.
- Das Build-System sucht `.mozconfig` jetzt nur noch unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig`, sofern Sie den Pfad zu `.mozconfig` nicht mit der Umgebungsvariablen `MOZCONFIG` überschreiben.
- Das Dienstprogramm `xpidl` wurde im SDK durch `pyxpidl` ersetzt.

### Weitere Änderungen

- Die Rechtschreibprüfung hat keine willkürliche Begrenzung auf 130 Zeichen pro Wort mehr. Diese Grenze sollte zuvor Abstürze der Rechtschreibprüfung verhindern; die zugrunde liegenden Fehler wurden inzwischen behoben.
- Sie können jetzt über die Kategorie „JavaScript-navigator-property“ Komponenten registrieren, die dem Objekt [`window.navigator`](/de/docs/Web/API/Window/navigator) Funktionen hinzufügen.

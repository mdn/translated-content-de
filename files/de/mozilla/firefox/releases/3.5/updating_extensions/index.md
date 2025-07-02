---
title: Aktualisieren von Erweiterungen für Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet hilfreiche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen für Firefox 3.5 zu aktualisieren.

## Aktualisierungsgrundlagen

Dieser Abschnitt behandelt die Grundlagen dessen, was Sie tun müssen, wenn Sie eine Erweiterung für eine neue Version von Firefox aktualisieren.

### Testen Sie Ihre Erweiterung

Beginnen Sie mit der Bearbeitung der `install.rdf`-Datei Ihrer Erweiterung, indem Sie `maxVersion` auf 3.5b4 aktualisieren (wenn Sie auf Firefox 3.5 Beta 4 testen) und die `version` Ihrer Erweiterung erhöhen.

Erstellen Sie dann ein neues Firefox-Profil, damit Ihr Testen nicht Ihr übliches Profil gefährdet. Navigieren Sie zum Verzeichnis, das Firefox enthält, und geben Sie den Befehl ein:

```bash
firefox -createProfile testBeta4
```

Auf dem Mac müssen Sie ganz in das Firefox-Anwendungspaket navigieren:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Starten Sie Firefox mit dem neuen Profil, indem Sie diesen Befehl in der Befehlszeile eingeben:

```bash
firefox -P testBeta4
```

Testen Sie Ihre Erweiterung gründlich. Wir empfehlen, dass Sie die folgenden Voreinstellungen auf `true` setzen, um auf JavaScript-Warnungen oder -Ausnahmen aufmerksam gemacht zu werden:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Aktualisieren Sie Ihre Erweiterung

Falls Sie während des Testens auf Probleme stoßen, aktualisieren Sie Ihren Code, um die Probleme zu beheben. Dieser Artikel enthält nützliche Informationen über Dinge, die möglicherweise etwas Arbeit erfordern.

Sobald Sie das getan haben, versuchen Sie erneut, Ihre Erweiterung zu verwenden, diesmal mit Ihrem regulären Profil. Dies hilft, die Kompatibilität mit vorhandenen gespeicherten Daten zu gewährleisten.

### Aktualisieren Sie Ihre Erweiterung auf addons.mozilla.org

Schließlich ist es an der Zeit, Ihre aktualisierte Erweiterung zu veröffentlichen. Wenn Ihre Erweiterung keine Codeänderungen benötigte, können Sie sich in das AMO-Dashboard einloggen und dort die Kompatibilitätsversion aktualisieren. Andernfalls müssen Sie eine neue Version zu AMO hochladen.

Siehe [Submit an add-on to AMO](/de/docs/Submitting_an_add-on_to_AMO) für zusätzliche Informationen.

## Zugriff auf die Places-Datenbank

Vor Firefox 3.5 erforderte der Zugriff auf die Places-Datenbank direkt mit der [Storage API](/de/docs/Storage) ein wenig Trickserei:

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

Dies baut manuell einen Pfad zur `places.sqlite`-Datenbankdatei auf und öffnet die Datei dann für den Storage-Zugriff.

Firefox 3.5 fügt einen dedizierten Dienst hinzu, der eine bequeme Möglichkeit bietet, auf die Places-Datenbank zuzugreifen; die obige Technik funktioniert in Firefox 3.5 oder später nicht.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Suchtextfelder

Der [`textbox`](/de/docs/XUL/textbox)-Typ `timed` ist veraltet; stattdessen sollten Sie `search` verwenden.

In Firefox 3 haben Sie möglicherweise Folgendes verwendet:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5 sollten Sie dies zu Folgendem ändern:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Das JSON.jsm-JavaScript-Modul wurde in Firefox 3.5 zugunsten der nativen JSON-Objektunterstützung entfernt. Für Details siehe [Using JSON in Firefox](/en-US/Using_native_JSON) und den Artikel über {{Glossary("JSON", "JSON")}} für einen allgemeineren Überblick über JSON und dessen Verwendung in verschiedenen Versionen von Firefox.

Um die Kompatibilität sowohl mit Firefox 3 als auch mit Firefox 3.5 sicherzustellen, können Sie folgendes tun:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Dies funktioniert, indem das JSON.jsm-JavaScript-Modul importiert wird, wenn JSON nicht nativ unterstützt wird, und dann die von diesem Modul bereitgestellten Methoden auf diejenigen des nativen JSON abgebildet werden, so dass die gleichen Aufrufe funktionieren.

Sie können dieses Problem auch umgehen, indem Sie das `nsIJSON`-Interface direkt verwenden.

## Änderungen an Kontextmenüs

Um die neuen Audio- und Video-Features, die in Gecko 1.9.1 hinzugefügt wurden, zu unterstützen, wurde in der `nsContextMenu`-Klasse der Getter `imageURL` in `mediaURL` umbenannt; `imageURL` wurde jedoch am 9. Juni 2009 wieder hinzugefügt.

## Änderungen an der Chrome-Registrierung

Firefox 3.5 schließt eine Sicherheitslücke, die die Verwendung von Remote-Chrome ermöglichte. Dies betrifft jedes Add-on, das ein Resource in ihrer `chrome.manifest`-Datei enthält, das auf eine Website, Daten- oder Ressourcen-URLs verweist. Siehe [Security changes in Firefox 3.5](/en-US/Security_changes_in_Firefox_3.5) für Details.

## Erhalten eines Ladekontexts aus einer Anforderung

Zuvor war es möglich, einen Ladekontext aus einer Anforderung zu erhalten, indem verschiedene docShell-APIs abgefragt wurden. Insbesondere war es üblich, `notificationCallbacks.getInterface(nsIDOMWindow)` zu verwenden, um das Fensterobjekt zu erhalten, das mit dem Ladeprozess verbunden ist. Während der ältere Ansatz in einigen Fällen funktionieren mag, wird seine Verwendung nicht mehr empfohlen ([details](https://bugzil.la/457153#c16)).

Der korrekte und zuverlässige Weg ist die Verwendung eines `nsILoadContext` (siehe die [Interface-Definition](https://searchfox.org/mozilla-central/source/docshell/base/nsILoadContext.idl)).

In JavaScript machen Sie es so:

```js
var loadContext;
try {
  loadContext = aRequest
    .QueryInterface(Components.interfaces.nsIChannel) // aRequest is equivalent to aSubject from observe
    .notificationCallbacks.getInterface(Components.interfaces.nsILoadContext);
} catch (ex) {
  try {
    loadContext = aRequest.loadGroup.notificationCallbacks.getInterface(
      Components.interfaces.nsILoadContext,
    );
  } catch (ex) {
    loadContext = null;
  }
}
// you can now use |loadContext.associatedWindow| to get the Window object
```

Ein anderes JavaScript-Beispiel, falls das obige nicht funktioniert:

```js
// SOURCE: http://stackoverflow.com/questions/10719606/is-it-possible-to-know-the-target-domwindow-for-an-httprequest

function getWindowForRequest(request) {
  if (request instanceof Components.interfaces.nsIRequest) {
    try {
      if (request.notificationCallbacks) {
        return request.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
    try {
      if (request.loadGroup && request.loadGroup.notificationCallbacks) {
        return request.loadGroup.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
  }
  return null;
}
```

In C++ können Sie es so machen:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Anpassbare Werkzeugleisten

In Firefox 3.5 hat sich das Verhalten der anpassbaren Werkzeugleisten geändert, sodass die `<xul:toolbar/>`-Bindung nun Werkzeugleistenelemente aus ihrer zugeordneten `<xul:toolbarpalette/>` entfernt und sie zur Werkzeugleiste hinzufügt, anstatt sie zu klonen und sie zur Werkzeugleiste zu kopieren. Dies bedeutet, dass die Palette nur noch Elemente enthalten wird, die nicht auf der Werkzeugleiste vorhanden sind, im Gegensatz zum vorherigen Verhalten, bei dem sie alle anpassbaren Elemente enthielt, unabhängig davon, ob sie auf der Werkzeugleiste angezeigt wurden oder nicht. Dies könnte Probleme für Add-ons verursachen, die darauf angewiesen sind, alle anpassbaren Werkzeugleistenelemente aus der `<xul:toolbarpalette/>` abzurufen oder die versuchen, Elemente dynamisch in die Palette einzufügen, um sie während der Werkzeugleisteneinpassung verfügbar zu machen. Weitere Informationen sind verfügbar in [Firefox Bug 407725](https://bugzil.la/407725) und [WebKit Bug 467045](https://bugzil.la/467045).

## XPCNativeWrapper

Ab Firefox 3.5 können Sie keine `data:`-Bindings mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten. Dies löst ein potenzielles Sicherheitsproblem.

XUL-Dokumente erhalten nun eine `XPCNativeWrapper`-Behandlung, daher müssen Sie nun die `getAttribute()`-Methode verwenden, um Attributwerte abzurufen, anstatt sie direkt zu lesen.

Wenn Ihre Erweiterung `xpcnativewrappers=no` verwendet (was sie ohnehin nicht tun sollte, da dies nicht sicher ist), wird XBL aus dieser Erweiterung nicht auf Dokumente angewendet, die `XPCNativeWrapper`-Automatisierung verwenden, beginnend mit Firefox 3.5.

## Neue interessante Möglichkeiten

### Ereignisse auf allen Tabs abhören

Firefox 3.5 führt die Unterstützung ein, Fortschritts-Listener hinzuzufügen und zu entfernen, die auf allen Tabs lauschen. Siehe [Listening to events on all tabs](/en-US/Listening_to_events_on_all_tabs) für Details.

## Für Theme-Entwickler

- Überprüfen Sie [Theme changes in Firefox 3.1](/en-US/Theme_changes_in_Firefox_3.1).
- Besuchen Sie das MozillaZine-Forum [Theme changes for FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138), um einen Überblick / eine Liste aller Änderungen zwischen 3.0 und 3.1 zu erhalten, die Theme-Entwickler betreffen. Dies betrifft neue CSS-Features (wie nth-child, -moz-box-shadow, etc.), Änderungen an bestehenden Widgets, allgemeine UI-Verbesserungen und neue Features von FF3.1 (Audio-/Video-Unterstützung, privates Surfen, erweiterte Sitzungswiederherstellung, Box-/Fenster-/Textschatten).

---
title: Aktualisierung von Erweiterungen für Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Dieser Artikel bietet nützliche Informationen für Entwickler von Erweiterungen, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie in Firefox 3.5 ordnungsgemäß funktionieren.

## Aktualisierungsgrundlagen

Dieser Abschnitt behandelt die Grundlagen dessen, was Sie tun müssen, wann immer Sie eine Erweiterung für eine neue Version von Firefox aktualisieren.

### Testen Sie Ihre Erweiterung

Beginnen Sie damit, die `install.rdf`-Datei Ihrer Erweiterung zu bearbeiten, indem Sie `maxVersion` auf 3.5b4 (wenn Sie Firefox 3.5 beta 4 testen) aktualisieren und die `version` Ihrer Erweiterung erhöhen.

Erstellen Sie dann ein neues Firefox-Profil, damit Ihr Testen Ihr übliches Profil nicht gefährdet. Navigieren Sie zum Verzeichnis, das Firefox enthält, und geben Sie den folgenden Befehl ein:

```bash
firefox -createProfile testBeta4
```

Auf dem Mac müssen Sie bis in das Firefox-Anwendungsbundle navigieren:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Starten Sie Firefox mit dem neuen Profil, indem Sie diesen Befehl in der Befehlszeile ausführen:

```bash
firefox -P testBeta4
```

Testen Sie Ihre Erweiterung gründlich. Wir empfehlen, die folgenden Einstellungen auf `true` zu setzen, um auf JavaScript-Warnungen oder Ausnahmen aufmerksam gemacht zu werden:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Aktualisieren Sie Ihre Erweiterung

Wenn Sie beim Testen auf Probleme stoßen, aktualisieren Sie Ihren Code, um die Probleme zu beheben. Dieser Artikel enthält nützliche Informationen zu Dingen, die etwas Arbeit erfordern können.

Sobald Sie dies getan haben, versuchen Sie erneut, Ihre Erweiterung zu verwenden, diesmal mit Ihrem regulären Profil. Dies hilft sicherzustellen, dass die Kompatibilität mit vorhandenen gespeicherten Daten gegeben ist.

### Aktualisieren Sie Ihre Erweiterung auf addons.mozilla.org

Schließlich ist es Zeit, Ihre aktualisierte Erweiterung zu veröffentlichen. Wenn Ihre Erweiterung keine Änderungen am Code benötigte, können Sie sich in das AMO-Dashboard einloggen und die Kompatibilitätsversion dort aktualisieren. Andernfalls müssen Sie eine neue Version bei AMO hochladen.

Weitere Informationen finden Sie unter [Einreichen eines Add-ons bei AMO](/de/docs/Submitting_an_add-on_to_AMO).

## Zugriff auf die Places-Datenbank

Vor Firefox 3.5 erforderte der direkte Zugriff auf die Places-Datenbank mit der [Storage API](/de/docs/Storage) ein wenig Trickserei:

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

Damit wird manuell ein Pfad zur `places.sqlite`-Datenbankdatei erstellt und dann die Datei für den Speicherzugriff geöffnet.

Firefox 3.5 fügt einen dedizierten Service hinzu, der einen bequemen Zugriff auf die Places-Datenbank bietet; die obige Technik funktioniert in Firefox 3.5 oder später nicht mehr.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Suchfelder

Der [`textbox`](/de/docs/XUL/textbox)-Typ `timed` ist veraltet; stattdessen sollten Sie `search` verwenden.

In Firefox 3 haben Sie möglicherweise verwendet:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5 sollten Sie dies in Folgendes ändern:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Das JSON.jsm JavaScript-Modul wurde in Firefox 3.5 zugunsten der nativen JSON-Objektunterstützung entfernt. Weitere Details finden Sie unter [Verwendung von JSON in Firefox](/en-US/Using_native_JSON) und dem Artikel über {{Glossary("JSON", "JSON")}} für einen allgemeineren Überblick über JSON und wie es in verschiedenen Versionen von Firefox verwendet wird.

Um die Kompatibilität mit sowohl Firefox 3 als auch Firefox 3.5 sicherzustellen, können Sie Folgendes tun:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Dies funktioniert, indem das JSON.jsm JavaScript-Modul importiert wird, wenn JSON nicht nativ unterstützt wird, und dann die von diesem Modul bereitgestellten Methoden auf die verwendet, die vom nativen JSON bereitgestellt werden, sodass die gleichen Aufrufe funktionieren.

Sie können dieses Problem auch umgehen, indem Sie direkt die `nsIJSON`-Schnittstelle verwenden.

## Änderungen in Kontextmenüs

Um die neuen Audio- und Videofunktionen, die in Gecko 1.9.1 hinzugefügt wurden, zu unterstützen, hat die `nsContextMenu`-Klasse den Getter `imageURL` in `mediaURL` umbenannt; jedoch wurde `imageURL` am 9. Juni 2009 wieder hinzugefügt.

## Änderungen in der Chrome-Registrierung

Firefox 3.5 schließt eine Sicherheitsschwachstelle, die es möglich machte, Remote-Chrome zu verwenden. Dies betrifft alle Add-ons, die ein Ressource in ihrer `chrome.manifest`-Datei beinhalten, die auf eine Website, Daten- oder Ressourcen-URLs verweist. Siehe [Sicherheitsänderungen in Firefox 3.5](/en-US/Security_changes_in_Firefox_3.5) für Details.

## Erhalten eines Load-Kontexts von einer Anfrage

Früher war es möglich, einen Load-Kontext von einer Anfrage zu erhalten, indem verschiedene docShell-APIs abgefragt wurden. Insbesondere war es eine gängige Praxis, `notificationCallbacks.getInterface(nsIDOMWindow)` zu verwenden, um das Fensterobjekt zu erhalten, das mit dem Ladevorgang verbunden ist. Während der ältere Ansatz unter bestimmten Umständen funktionieren kann, wird empfohlen, ihn nicht mehr zu verwenden ([Details](https://bugzil.la/457153#c16)).

Der korrekte und zuverlässige Weg, dies zu tun, ist die Verwendung eines `nsILoadContext` (siehe die [Schnittstellendefinition](https://searchfox.org/mozilla-central/source/docshell/base/nsILoadContext.idl)).

Von JavaScript aus machen Sie dies so:

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

Ein weiteres JavaScript-Beispiel, falls das oben genannte nicht funktioniert:

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

Von C++ aus machen Sie es so:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Anpasbare Symbolleisten

In Firefox 3.5 hat sich das Verhalten der anpassbaren Symbolleisten geändert, so dass die `<xul:toolbar/>`-Bindung nun Symbolleisten-Elemente aus der zugeordneten `<xul:toolbarpalette/>` entfernt und zur Symbolleiste hinzufügt, anstatt sie zu klonen und zur Symbolleiste zu kopieren. Das bedeutet, dass die Palette nun nur noch Elemente enthält, die nicht auf der Symbolleiste vorhanden sind, im Gegensatz zum vorherigen Verhalten, alle anpassbaren Elemente zu enthalten, unabhängig davon, ob sie auf der Symbolleiste angezeigt wurden oder nicht. Dies könnte Probleme für Add-ons verursachen, die darauf angewiesen sind, alle anpassbaren Symbolleisten-Elemente aus der `<xul:toolbarpalette/>` abzurufen oder die versuchen, Elemente dynamisch in die Palette einzufügen, um sie während der Symbolleistenanpassung verfügbar zu machen. Weitere Informationen finden Sie in [Firefox Bug 407725](https://bugzil.la/407725) und [Webkit Bug 467045](https://bugzil.la/467045).

## XPCNativeWrapper

Ab Firefox 3.5 können Sie keine `data:`-Bindings in Chrome-Paketen mehr verwenden, die `XPCNativeWrapper`-Automatisierung erhalten. Dies löst ein potenzielles Sicherheitsproblem.

XUL-Dokumente erhalten nun eine `XPCNativeWrapper`-Behandlung, so dass Sie nun die `getAttribute()`-Methode verwenden müssen, um Attributwerte abzurufen, anstatt sie direkt zu lesen.

Wenn Ihre Erweiterung `xpcnativewrappers=no` verwendet (was sie eigentlich überhaupt nicht tun sollte, da dies nicht sicher ist), wird XBL aus dieser Erweiterung nicht auf Dokumente angewendet, die `XPCNativeWrapper`-Automatisierung verwenden, beginnend mit Firefox 3.5.

## Neue interessante Funktionen

### Ereignisse auf allen Tabs hören

Firefox 3.5 führt die Unterstützung zum Hinzufügen und Entfernen von Fortschritts-Listenern ein, die auf alle Tabs hören. Details finden Sie unter [Ereignisse auf allen Tabs hören](/en-US/Listening_to_events_on_all_tabs).

## Für Theme-Entwickler

- Überprüfen Sie [Theme-Änderungen in Firefox 3.1](/en-US/Theme_changes_in_Firefox_3.1).
- Besuchen Sie das MozillaZine-Forum [Theme-Änderungen für FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138), um einen Überblick/Liste aller Änderungen zwischen 3.0 und 3.1 zu erhalten, die Theme-Entwickler betreffen. Dies betrifft neue CSS-Funktionen (wie nth-child, -moz-box-shadow, etc.), Änderungen an bestehenden Widgets, allgemeine UI-Verbesserungen und neue FF3.1-Funktionen (Audio-/Video-Unterstützung, privates Browsen, erweiterte Sitzungswiederherstellung, Box-/Fenster-/Textschatten).

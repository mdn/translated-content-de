---
title: Aktualisierung von Erweiterungen für Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Dieser Artikel bietet nützliche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß in Firefox 3.5 funktionieren.

## Grundlagen der Aktualisierung

In diesem Abschnitt werden die Grundlagen dessen behandelt, was Sie tun müssen, wann immer Sie eine Erweiterung für eine neue Version von Firefox aktualisieren.

### Testen Sie Ihre Erweiterung

Beginnen Sie damit, die `install.rdf`-Datei Ihrer Erweiterung zu bearbeiten, die `maxVersion` auf 3.5b4 zu aktualisieren (wenn Sie Firefox 3.5 Beta 4 testen) und die `version` Ihrer Erweiterung zu erhöhen.

Erstellen Sie dann ein neues Firefox-Profil, damit Ihr Testen Ihr übliches Profil nicht gefährdet. Navigieren Sie zum Verzeichnis, das Firefox enthält, und geben Sie den Befehl ein:

```bash
firefox -createProfile testBeta4
```

Auf dem Mac müssen Sie sich bis in das Firefox-Anwendungspaket hinein navigieren:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Starten Sie Firefox mit dem neuen Profil, indem Sie diesen Befehl in der Befehlszeile eingeben:

```bash
firefox -P testBeta4
```

Testen Sie Ihre Erweiterung gründlich. Wir empfehlen Ihnen, die folgenden Präferenzen auf `true` zu setzen, um auf JavaScript-Warnungen oder -Ausnahmen hingewiesen zu werden:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Aktualisieren Sie Ihre Erweiterung

Sollten beim Testen Probleme auftreten, aktualisieren Sie Ihren Code, um die Probleme zu beheben. Dieser Artikel enthält nützliche Informationen über Dinge, die möglicherweise etwas Arbeit erfordern.

Sobald Sie das getan haben, versuchen Sie, Ihre Erweiterung erneut zu verwenden, diesmal mit Ihrem regulären Profil. Dies hilft, die Kompatibilität mit vorhandenen gespeicherten Daten sicherzustellen.

### Aktualisieren Sie Ihre Erweiterung auf addons.mozilla.org

Schließlich ist es Zeit, Ihre aktualisierte Erweiterung zu veröffentlichen. Wenn Ihre Erweiterung keine Codeänderungen benötigt hat, können Sie sich in das AMO-Dashboard einloggen und dort die Kompatibilitätsversion aktualisieren. Andernfalls müssen Sie eine neue Version auf AMO hochladen.

Weitere Informationen finden Sie unter [Einreichen eines Add-ons bei AMO](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

## Zugriff auf die Places-Datenbank

Vor Firefox 3.5 erforderte der direkte Zugriff auf die Places-Datenbank mit der [Storage-API](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage) ein wenig Trickserei:

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

Dies baut manuell einen Pfad zur `places.sqlite`-Datenbankdatei auf und öffnet dann die Datei für den Storage-Zugriff.

Firefox 3.5 fügt einen dedizierten Dienst hinzu, der eine bequeme Möglichkeit bietet, auf die Places-Datenbank zuzugreifen; die obige Technik funktioniert in Firefox 3.5 oder später nicht mehr.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Suchtextfelder

Der [`textbox`](https://web.archive.org/web/20201205234810/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/textbox)-Typ `timed` ist veraltet; stattdessen sollten Sie `search` verwenden.

In Firefox 3 könnten Sie folgendes verwendet haben:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5 sollten Sie dies auf folgendes ändern:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Das JSON.jsm JavaScript-Modul wurde in Firefox 3.5 zugunsten der nativen Unterstützung des JSON-Objekts entfernt. Weitere Details finden Sie im Artikel über [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) für einen allgemeineren Überblick über JSON und wie es in verschiedenen Versionen von Firefox verwendet wird.

Um die Kompatibilität mit sowohl Firefox 3 als auch Firefox 3.5 zu gewährleisten, können Sie Folgendes tun:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Dies funktioniert, indem das JSON.jsm JavaScript-Modul importiert wird, wenn JSON nicht nativ unterstützt wird, und die von diesem Modul bereitgestellten Methoden auf die vom nativen JSON verwendeten Methoden abgebildet werden, sodass die gleichen Aufrufe funktionieren.

Sie können dieses Problem auch umgehen, indem Sie direkt die `nsIJSON`-Schnittstelle verwenden.

## Änderungen an Kontextmenüs

Um die neuen Audio- und Videofeatures in Gecko 1.9.1 zu unterstützen, wurde im `nsContextMenu`-Klasse die Getter-Methode `imageURL` in `mediaURL` umbenannt; allerdings wurde `imageURL` am 9. Juni 2009 wieder hinzugefügt.

## Änderungen an der Registrierung von Chrome

Firefox 3.5 schließt eine Sicherheitslücke, die es möglich machte, Remote-Chrome zu verwenden. Dies betrifft jedes Add-on, das eine Ressource in seiner `chrome.manifest`-Datei enthält, die auf eine Website, Daten oder Ressourcen-URLs verweist. Siehe [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes) für Details.

## Abrufen eines Ladekontexts aus einer Anfrage

Zuvor war es möglich, einen Ladekontext aus einer Anfrage abzurufen, indem verschiedene docShell-APIs abgefragt wurden. Es war insbesondere gängige Praxis, `notificationCallbacks.getInterface(nsIDOMWindow)` zu verwenden, um das Fensterobjekt zu erhalten, das mit dem Ladevorgang verknüpft ist. Obwohl der ältere Ansatz in einigen Fällen funktionieren kann, wird nicht mehr empfohlen, ihn zu verwenden ([Details](https://bugzil.la/457153#c16)).

Die korrekte und zuverlässige Methode hierfür ist die Verwendung eines `nsILoadContext` (siehe die [Schnittstellendefinition](https://searchfox.org/firefox-main/source/docshell/base/nsILoadContext.idl)).

Aus JavaScript können Sie dies so tun:

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

Ein weiteres Beispiel in JavaScript, falls das obige nicht funktioniert:

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

Aus C++ können Sie es so tun:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Anpassen von Symbolleisten

In Firefox 3.5 hat sich das Verhalten anpassbarer Symbolleisten so geändert, dass die `<xul:toolbar/>`-Bindung jetzt Symbolleistenelemente aus der zugehörigen `<xul:toolbarpalette/>` entfernt und in die Symbolleiste einfügt, anstatt sie zu klonen und in die Symbolleiste zu kopieren. Dies bedeutet, dass die Palette nun nur noch Elemente enthält, die sich nicht auf der Symbolleiste befinden, im Gegensatz zum vorherigen Verhalten, alle anpassbaren Elemente zu enthalten, unabhängig davon, ob sie auf der Symbolleiste angezeigt wurden oder nicht. Dies könnte Probleme für Add-ons verursachen, die darauf angewiesen sind, alle anpassbaren Symbolleistenelemente aus der `<xul:toolbarpalette/>` abzurufen, oder die versuchen, Elemente dynamisch in die Palette einzufügen, um sie während der Symbolleistenanpassung verfügbar zu machen. Weitere Informationen finden Sie in [Firefox-Bug 407725](https://bugzil.la/407725) und [WebKit-Bug 467045](https://bugzil.la/467045).

## XPCNativeWrapper

Ab Firefox 3.5 können Sie keine `data:`-Bindungen mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten. Dies löst ein potenzielles Sicherheitsproblem.

XUL-Dokumente erhalten jetzt eine `XPCNativeWrapper`-Behandlung, sodass Sie jetzt die Methode `getAttribute()` verwenden müssen, um Attributwerte abzurufen, anstatt sie direkt zu lesen.

Wenn Ihre Erweiterung `xpcnativewrappers=no` verwendet (was Sie ohnehin nicht tun sollten, da es nicht sicher ist), wird XBL dieser Erweiterung nicht auf Dokumente angewendet, die `XPCNativeWrapper`-Automatisierung verwenden, ab Firefox 3.5.

## Neue interessante Fähigkeiten

### Ereignisse auf allen Tabs anhören

Firefox 3.5 führt die Unterstützung für das Hinzufügen und Entfernen von Fortschritts-Listenern ein, die auf alle Tabs hören. Details finden Sie unter [Ereignisse auf allen Tabs anhören](https://web.archive.org/web/20210412023656/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Listening_to_events_on_all_tabs).

## Für Theme-Entwickler

- Überprüfen Sie die [Theme-Änderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5).
- Gehen Sie zum MozillaZine-Forum [Theme-Änderungen für FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138), um einen Überblick über alle zwischen 3.0 und 3.1 erfolgten Änderungen zu erhalten, die Theme-Entwickler betreffen. Dies betrifft neue CSS-Funktionen (wie nth-child, -moz-box-shadow, usw.), Änderungen an bestehenden Widgets, allgemeine UI-Verbesserungen und neue FF3.1-Funktionen (Audio/Video-Unterstützung, privates Surfen, erweiterte Sitzungswiederherstellung, Box-/Fenster-/Textschatten).

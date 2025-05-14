---
title: Aktualisierung von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{FirefoxSidebar}}

Dieser Artikel bietet Entwicklern Informationen, die nützlich sind, um ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß unter Firefox 3 funktionieren.

Bevor wir fortfahren, ein hilfreicher Hinweis: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Aktualisierung des `maxVersion`-Feldes im Installationsmanifest ist und Sie Ihre Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org/) hosten, müssen Sie nicht wirklich eine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwicklerkontrollzentrum auf AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt – und für die meisten Erweiterungen der einzige notwendige – besteht darin, die Datei des [Installationsmanifests](/de/docs/Install_Manifests), [`install.rdf`](/de/docs/Creating_a_Skin_for_Firefox/install.rdf), zu aktualisieren, um die Kompatibilität mit Firefox 3 anzuzeigen.

Suchen Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 2 beispielsweise so aussehen könnte):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie diese so, dass die Kompatibilität mit Firefox 3 angezeigt wird:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung neu.

Beachten Sie, dass Firefox 3 die zusätzliche ".0" in der Versionsnummer entfernt, sodass Sie anstelle von `3.0.0.*` nur `3.0.*` verwenden müssen.

Es gab (und wird weiterhin geben) eine Reihe von API-Änderungen, die wahrscheinlich einige Erweiterungen beeinträchtigen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zusammenzustellen.

> [!NOTE]
> Wenn Ihre Erweiterung noch ein [`Install.js`](/de/docs/Install.js)-Skript anstelle eines [Installationsmanifests](/de/docs/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umsteigen. Firefox 3 unterstützt `install.js`-Skripte in XPI-Dateien nicht mehr.

### Lokalisierungen zum Installationsmanifest hinzufügen

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest, um lokalisierte Beschreibungen anzugeben. Die alten Methoden funktionieren weiterhin, jedoch ermöglichen die neuen Methoden Firefox, die Lokalisierungen auch dann zu erkennen, wenn das Add-on deaktiviert ist und noch installiert werden muss. Weitere Informationen finden Sie unter [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions).

## Schritt 2: Sicherstellen, dass Sie sichere Updates bereitstellen

Wenn Sie Add-ons selbst hosten und nicht auf einem sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org/), dann müssen Sie eine sichere Methode zum Aktualisieren Ihres Add-ons bereitstellen. Dies kann entweder das Hosten Ihrer Updates auf einer SSL-Website oder die Verwendung kryptografischer Schlüssel zum Signieren der Update-Informationen beinhalten. Lesen Sie [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates) für weitere Informationen.

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden in signifikanter Weise geändert. Die bedeutendsten davon, die wahrscheinlich viele Erweiterungen betreffen werden, sind:

### DOM

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (während der Entwicklung von Firefox 3 wurde dies zeitweise gemacht, jedoch brechen zu viele Seiten, wenn diese Regel erzwungen wird). Wir ermutigen Webentwickler, ihren Code so zu verbessern, dass diese Regel eingehalten wird, um die zukünftige Kompatibilität zu verbessern.

### Lesezeichen & Verlauf

Wenn Ihre Erweiterung auf Lesezeichen- oder Verlaufsdaten zugreift, muss sie erheblich überarbeitet werden, um mit Firefox 3 kompatibel zu sein. Die alten APIs für den Zugriff auf diese Informationen wurden durch die neue [Places](/de/docs/Places)-Architektur ersetzt. Siehe den [Places Migration Guide](/de/docs/Places_Developer_Guide) für Details zur Aktualisierung Ihrer bestehenden Erweiterung zur Nutzung der Places-API.

### Download-Manager

Die Download-Manager-API hat sich leicht geändert, aufgrund des Wechsels von einem RDF-Datenspeicher zur Verwendung der [Storage](/de/docs/Storage)-API. Dies sollte ein recht einfacher Übergang sein. Zudem hat sich die API zur Überwachung des Downloadfortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Weitere Informationen finden Sie unter `nsIDownloadManager`, `nsIDownloadProgressListener` und [Überwachung von Downloads](/de/docs/Monitoring_downloads).

### Passwort-Manager

Wenn Ihre Erweiterung auf Benutzer-Anmeldeinformationen über den Passwort-Manager zugreift, muss sie aktualisiert werden, um die neue Login-Manager-API zu verwenden.

- Der Artikel [Using nsILoginManager](/de/docs/XPCOM_Interface_Reference/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie Sie Ihre Erweiterung so schreiben können, dass sie sowohl mit dem Passwort-Manager als auch mit dem Login-Manager funktioniert, damit sie mit sowohl Firefox 3 als auch früheren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den integrierten Passwort-Manager-Speicher überschreiben, wenn Sie eine eigene Passwort-Speicherimplementierung in Ihren Erweiterungen bereitstellen möchten. Details finden Sie unter [Creating a Login Manager storage module](/de/docs/Creating_a_Login_Manager_storage_module).

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zur [Verwendung von Popups](/de/docs/XUL/PopupGuide) wurde erstellt, der beschreibt, wie das System funktioniert. Eine Sache, die zu beachten ist, dass `popup.showPopup` zugunsten von neuen `popup.openPopup` und `popup.openPopupAtScreen` veraltet ist.

### Autovervollständigen

Die Methode `handleEnter()` der Schnittstelle `nsIAutoCompleteController` wurde geändert, um ein Argument zu akzeptieren, das angibt, ob der Text aus dem Autovervollständigung-Popup ausgewählt wurde oder vom Benutzer durch Drücken der Eingabetaste nach der Texteingabe.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er das Hauptrecht des aufrufenden Codes sowie die `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Aufrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, werden die verbleibenden Parameter standardmäßig auf `null` gesetzt.

  - Der erste Parameter ist das zu verwendende Hauptrecht; dies überschreibt das normalerweise geerbte Standard-Hauptrecht.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` mit einem Vertrag initialisieren, z. B. durch einen Aufruf von `createInstance()`, und die `init()`-Methode des `DOMParser` nicht aufrufen, wird beim Versuch, einen Parsing-Vorgang zu starten, der `DOMParser` automatisch mit einem Nullhauptrecht sowie Nullzeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwenden Sie nicht mehr die interne String-API

Die interne String-API wird nicht mehr exportiert; Sie müssen zur externen String-API wechseln. Diese Artikel bieten nützliche Informationen:

- [Mozilla-Leitfaden für externe Strings](/de/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/de/docs/XPCOM_Glue)
- [Migration von Interner auf Gefrorene Verkettung](/de/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9 entfernt, die Firefox 3 antreibt. Wenn Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie relevante Chrome-Änderungen

Es gab einige Änderungen im Chrome-Layout, die einige Erweiterungen betreffen könnten.

### Neue Boxen

Es gab eine kleinere Änderung im Chrome, die Änderungen in Ihrem Code erfordern könnte. Eine neue `vbox` wurde hinzugefügt, genannt "browser-bottombox", die die Suchleiste und die Statusleiste am unteren Rand des Browserfensters umschließt. Obwohl dies das Aussehen der Anzeige nicht beeinflusst, könnte es Ihre Erweiterung beeinflussen, wenn sie Chrome in Relation zu diesen Elementen überlagert.

Zum Beispiel, wenn Sie zuvor ein Chrome vor der Statusleiste überlagert haben, etwa so:

```xml
<window id="main-window">
  <something insertbefore="status-bar" />
</window>
```

Sollten Sie es jetzt so überlagern:

```xml
<vbox id="browser-bottombox">
  <something insertbefore="status-bar" />
</vbox>
```

Oder verwenden Sie die folgende Technik, um Ihre Überlagerung sowohl auf Firefox 2 als auch auf Firefox 3 funktionsfähig zu machen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, auf die "appcontent"-Box zu überlagern, um Chrome über Dokumentinhalte zu schweben, werden dieses Material nicht mehr anzeigen. Sie sollten Ihre Erweiterung aktualisieren, um das neue [`<xul:panel>`](/de/docs/Mozilla/Tech/XUL/panel) XUL-Element zu verwenden. Wenn Sie möchten, dass das Panel nach einer Verzögerung nicht automatisch verschwindet, können Sie das `noautohide`-Attribut auf `true` setzen.

## Weitere Änderungen

_Einfache Änderungen, die Sie bei der Aktualisierung Ihrer Erweiterung zur Arbeit mit Firefox 3 vornehmen mussten, hier hinzufügen._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies zuvor verwendet haben, sollten Sie zu `chrome://browser/content/utilityOverlay.js` wechseln.
- Implementierungen von `nsIAboutModule` müssen jetzt die Methode `getURIFlags` unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:` URIs bereitstellen. ([Firefox Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](/de/docs/Mozilla/Tech/XUL/tabbrowser)-Element ist nicht mehr Teil des "Toolkits" ([Firefox Bug 339964](https://bugzil.la/339964)). Das bedeutet, dass dieses Element nicht mehr für XUL-Anwendungen und -Erweiterungen verfügbar ist. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an threadingbezogenen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungsanweisungen, wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien verwenden, beachten Sie die Änderungen im [Firefox Bug 319654](https://bugzil.la/319654):

  1. XML PIs werden jetzt dem DOM eines XUL-Dokuments hinzugefügt. Das bedeutet, dass [`document.firstChild`](/de/docs/Web/API/Node/firstChild) nicht mehr garantiert das Root-Element ist. Wenn Sie in Ihrem Skript das Root-Dokument abrufen müssen, verwenden Sie [`document.documentElement`](/de/docs/Web/API/Document/documentElement) stattdessen.
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>` Verarbeitungsanweisungen haben jetzt außerhalb des Dokumentprologs keine Wirkung mehr.

- `window.addEventListener("load", myFunc, true)` wird nicht ausgeführt, wenn Webseiten-Inhalte geladen werden (Browserseiten-Ladevorgänge). Dies ist aufgrund des [Firefox Bugs 296639](https://bugzil.la/296639), der die Kommunikation zwischen inneren und äußeren Fenstern verändert. Die einfache Lösung besteht darin, `gBrowser.addEventListener("load", myFunc, true)` zu verwenden, was auch in Firefox 2 funktioniert.
- `content.window.getSelection()` gibt ein Objekt zurück (das durch `toString()` in einen String umgewandelt werden kann), im Gegensatz zu dem jetzt veralteten `content.document.getSelection()`, das einen String zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 veraltet und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das auch in Firefox 2 funktioniert.
- Timer, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) initiiert werden, werden nun durch modale Fenster blockiert, aufgrund der Korrektur im [Firefox Bug 52209](https://bugzil.la/52209). Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung es einem untrusted source (z.B. einer Webseite) ermöglichen muss, auf das Chrome der Erweiterung zuzugreifen, müssen Sie das neue [`contentaccessible`-Flag](/de/docs/Chrome_Registration#contentaccessible) verwenden.

---
title: Aktualisieren von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen aktualisieren möchten, um korrekt unter Firefox 3 zu funktionieren.

Bevor Sie fortfahren, gibt es einen hilfreichen Hinweis: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Erhöhung des `maxVersion`-Feldes im Installationsmanifest ist und Sie Ihre Erweiterung bei [addons.mozilla.org](https://addons.mozilla.org/) hosten, müssen Sie eigentlich keine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwickler-Kontrollpanel bei AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt — und für die meisten Erweiterungen der einzige notwendige — ist, die [Installationsmanifest](/de/docs/Install_Manifests)-Datei, [`install.rdf`](/de/docs/Creating_a_Skin_for_Firefox/install.rdf), zu aktualisieren, um die Kompatibilität mit Firefox 3 anzuzeigen.

Suchen Sie die Zeile, die die maximal kompatible Version von Firefox anzeigt (die für Firefox 2 möglicherweise so aussieht):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie sie so, dass sie die Kompatibilität mit Firefox 3 anzeigt:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung neu.

Beachten Sie, dass Firefox 3 die zusätzliche „.0“ in der Versionsnummer weglässt. Statt `3.0.0.*` verwenden Sie also einfach `3.0.*`.

Es gab (und wird weiterhin geben) eine Reihe von API-Änderungen, die vermutlich einige Erweiterungen beeinträchtigen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zusammenzustellen.

> [!NOTE]
> Wenn Ihre Erweiterung noch ein [`Install.js`](/de/docs/Install.js)-Skript anstelle eines [Installationsmanifests](/de/docs/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umsteigen. Firefox 3 unterstützt `install.js`-Skripte in XPI-Dateien nicht mehr.

### Lokalisierungen zum Installationsmanifest hinzufügen

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest, um lokalisierte Beschreibungen anzugeben. Die alten Methoden funktionieren weiterhin, jedoch erlauben die neuen Methoden Firefox, die Lokalisierungen zu übernehmen, selbst wenn das Add-on deaktiviert und zur Installation anstehend ist. Weitere Einzelheiten finden Sie unter [Lokalisieren von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions).

## Schritt 2: Sicherstellen, dass Sie sichere Updates bereitstellen

Wenn Sie Addons selbst hosten und nicht auf einem sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org/), müssen Sie eine sichere Methode bereitstellen, um Ihr Add-on zu aktualisieren. Dies wird entweder das Hosting Ihrer Updates auf einer SSL-Website beinhalten oder das Verwenden kryptografischer Schlüssel zur Signierung der Update-Informationen. Lesen Sie [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates) für weitere Informationen.

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden in wesentlicher Weise geändert. Die bedeutendsten dieser Änderungen, die wahrscheinlich viele Erweiterungen betreffen, sind:

### DOM

Knoten aus externen Dokumenten sollten mithilfe von [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mithilfe von [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) angenommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Fragen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es tat dies für eine Weile während der Entwicklung von Firefox 3, aber zu viele Websites funktionieren nicht, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine verbesserte zukünftige Kompatibilität einzuhalten.

### Lesezeichen & Verlauf

Wenn Ihre Erweiterung auf Lesezeichen- oder Verlaufsdaten zugreift, muss sie erheblich überarbeitet werden, um mit Firefox 3 kompatibel zu sein. Die alten APIs für den Zugriff auf diese Informationen wurden durch die neue [Places](/de/docs/Places)-Architektur ersetzt. Siehe den [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide), um Einzelheiten zur Aktualisierung Ihrer bestehenden Erweiterung auf die Verwendung der Places-API zu erhalten.

### Download-Manager

Die Download-Manager-API hat sich leicht verändert durch den Übergang von einem RDF-Datenspeicher zur Verwendung der [Storage](/de/docs/Storage)-API. Dies sollte eine ziemlich einfache Umstellung sein. Darüber hinaus hat sich die API zur Überwachung des Download-Fortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Weitere Informationen finden Sie unter `nsIDownloadManager`, `nsIDownloadProgressListener` und [Überwachen von Downloads](/de/docs/Monitoring_downloads).

### Passwort-Manager

Wenn Ihre Erweiterung auf Benutzer-Login-Informationen über den Passwort-Manager zugreift, muss sie aktualisiert werden, um die neue Login-Manager-API zu verwenden.

- Der Artikel [Verwendung von nsILoginManager](/de/docs/XPCOM_Interface_Reference/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie Sie Ihre Erweiterung so schreiben, dass sie sowohl mit dem Passwort-Manager als auch mit dem Login-Manager funktioniert, sodass sie sowohl mit Firefox 3 als auch mit früheren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den eingebauten Passwort-Manager-Speicher überschreiben, wenn Sie Ihre eigene Passwortspeicherimplementierung in Ihren Erweiterungen bereitstellen möchten. Einzelheiten finden Sie unter [Erstellen eines Login-Manager-Speichermoduls](/de/docs/Creating_a_Login_Manager_storage_module).

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL-Popup-System wurde in Firefox 3 stark überarbeitet. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zur [Verwendung von Popups](/de/docs/XUL/PopupGuide) wurde erstellt, der detailliert beschreibt, wie das System funktioniert. Zu beachten ist, dass `popup.showPopup` zugunsten der neuen Methoden `popup.openPopup` und `popup.openPopupAtScreen` veraltet ist.

### Autovervollständigung

Die Methode `handleEnter()` des Interfaces `nsIAutoCompleteController` wurde geändert, um ein Argument zu akzeptieren, das angibt, ob der Text aus dem Autovervollständigungspopup ausgewählt wurde oder durch Drücken von Enter nach dem Tippen durch den Benutzer.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er die Grundlagen des aufrufenden Codes sowie die `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Anrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, werden die restlichen Parameter auf `null` gesetzt.

  - Der erste Parameter ist die Grundlage, die verwendet werden soll; dieser überschreibt die normalerweise geerbte Standardgrundlage.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` mithilfe eines Vertrags initialisieren, zum Beispiel durch Aufrufen von `createInstance()`, und Sie die `init()`-Methode des `DOMParser` nicht aufrufen, wird beim Versuch, eine Parsing-Operation zu starten, der `DOMParser` automatisch mit einer null-Fundstelle und null-Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwendung der internen String-API einstellen

Die interne String-API wird nicht mehr exportiert; Sie müssen zur externen String-API wechseln. Diese Artikel bieten hilfreiche Informationen:

- [Leitfaden zur externen Mozilla-String-API](/de/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/de/docs/XPCOM_Glue)
- [Migrieren von interner zu gefrorener Verbindung](/de/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9, dem Antrieb von Firefox 3, entfernt. Wenn Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfung auf relevante Chrome-Änderungen

Es gab einige Änderungen am Chrome-Layout, die einige Erweiterungen betreffen könnten.

### Neue Boxen

Es gab eine geringfügige Änderung am Chrome, die Änderungen an Ihrem Code erforderlich machen könnte. Ein neues `vbox` wurde hinzugefügt, genannt "browser-bottombox", das die Suchleiste und die Statusleiste am unteren Rand des Browserfensters umschließt. Obwohl diese Änderung das Erscheinungsbild der Anzeige nicht beeinflusst, kann sie Ihre Erweiterung betreffen, wenn sie Chrome relativ zu diesen Elementen überlagert.

Zum Beispiel, wenn Sie zuvor einige Chrome-Elemente vor der Statusleiste überlagert haben, wie folgt:

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

Oder verwenden Sie die folgende Technik, um Ihr Overlay sowohl auf Firefox 2 als auch auf Firefox 3 funktionsfähig zu machen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, auf die Box "appcontent" zu überlagern, versuchen, Chrome über dem Dokumentinhalt zu schweben, werden diese Materialien nicht mehr anzeigen. Sie sollten Ihre Erweiterung aktualisieren, um das neue `<xul:panel>` XUL-Element zu verwenden. Wenn Sie möchten, dass das Panel nicht automatisch nach einer Verzögerung verschwindet, können Sie das Attribut `noautohide` auf `true` setzen.

## Weitere Änderungen

_Fügen Sie einfache Änderungen hinzu, die Sie beim Aktualisieren Ihrer Erweiterung auf die Arbeit mit Firefox 3 vornehmen mussten._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies zuvor verwendet haben, sollten Sie auf `chrome://browser/content/utilityOverlay.js` umsteigen.
- Implementierungen von `nsIAboutModule` müssen jetzt die Methode `getURIFlags` unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:`-URIs bereitstellen. ([Firefox Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](/de/docs/Mozilla/Tech/XUL/tabbrowser)-Element ist nicht mehr Teil des "Kits" ([Firefox Bug 339964](https://bugzil.la/339964)). Das bedeutet, dass dieses Element nicht mehr für XUL-Anwendungen und Erweiterungen verfügbar ist. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an threading-bezogenen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungshinweise verwenden, wie z. B. `<?xml-stylesheet ?>` in Ihren XUL-Dateien, beachten Sie die Änderungen, die im [Firefox Bug 319654](https://bugzil.la/319654) vorgenommen wurden:

  1. XML-PIs werden jetzt in das DOM eines XUL-Dokuments eingefügt. Das bedeutet, [`document.firstChild`](/de/docs/Web/API/Node/firstChild) ist nicht mehr garantiert das Root-Element. Wenn Sie das Root-Dokument in Ihrem Skript erhalten müssen, verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement).
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>`-Verarbeitungshinweise haben nun außerhalb des Dokumentprologs keine Auswirkungen mehr.

- `window.addEventListener("load", myFunc, true)` wird beim Laden von Webinhalten (Browser-Seitenladevorgänge) nicht mehr ausgelöst. Dies ist auf [Firefox Bug 296639](https://bugzil.la/296639) zurückzuführen, der die Art und Weise ändert, wie Innen- und Außenfenster kommunizieren. Die einfache Lösung hier ist die Verwendung von `gBrowser.addEventListener("load", myFunc, true)`, welches auch in Firefox 2 funktioniert.
- `content.window.getSelection()` gibt ein Objekt zurück (das durch `toString()` in einen String umgewandelt werden kann), im Gegensatz zu dem nun veralteten `content.document.getSelection()`, das einen String zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 veraltet und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das auch in Firefox 2 funktioniert.
- Timer, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) initiiert werden, werden jetzt von modalen Fenstern blockiert aufgrund des Fixes für [Firefox Bug 52209](https://bugzil.la/52209). Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung es benötigt, dass eine nicht vertrauenswürdige Quelle (z. B. eine Website) auf das Chrome der Erweiterung zugreifen kann, müssen Sie die neue [`contentaccessible`-Flagge](/de/docs/Chrome_Registration#contentaccessible) verwenden.

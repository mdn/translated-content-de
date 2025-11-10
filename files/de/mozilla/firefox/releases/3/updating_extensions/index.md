---
title: Aktualisieren von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Dieser Artikel bietet Informationen, die für Entwickler nützlich sein werden, die ihre Erweiterungen aktualisieren möchten, um ordnungsgemäß unter Firefox 3 zu funktionieren.

Bevor wir fortfahren, gibt es einen nützlichen Hinweis: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, darin besteht, das `maxVersion`-Feld im Installationsmanifest zu aktualisieren, und Sie Ihre Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org/) hosten, müssen Sie tatsächlich keine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwickler-Kontrollfeld bei AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren des Installationsmanifests

Der erste Schritt — und für die meisten Erweiterungen der einzige notwendige — ist das Aktualisieren der [install manifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests)-Datei, [`install.rdf`](https://web.archive.org/web/20160809001138/https://developer.mozilla.org/en-US/Add-ons/Themes/Obsolete/Creating_a_Skin_for_Firefox/install.rdf), um die Kompatibilität mit Firefox 3 anzuzeigen.

Suchen Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 2 so aussehen könnte):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 3 anzuzeigen:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung erneut.

Beachten Sie, dass Firefox 3 das zusätzliche ".0" in der Versionsnummer entfernt hat, sodass Sie anstelle von `3.0.0.*` nur `3.0.*` verwenden müssen.

Es gab (und wird weiterhin) eine Reihe von API-Änderungen geben, die wahrscheinlich einige Erweiterungen beeinträchtigen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zusammenzustellen.

> [!NOTE]
> Wenn Ihre Erweiterung noch ein [`Install.js`](https://web.archive.org/web/20210604075726/https://developer.mozilla.org/de/docs/Archive/Install.js)-Skript anstelle eines [install manifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umstellen. Firefox 3 unterstützt keine `install.js`-Skripte mehr in XPI-Dateien.

### Lokalisierungen zum Installationsmanifest hinzufügen

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest zur Angabe lokalisierter Beschreibungen. Die alten Methoden funktionieren noch, jedoch ermöglichen die neuen Firefox, die Lokalisierungen sogar dann zu erkennen, wenn das Add-on deaktiviert und zur Installation ansteht. Weitere Details finden Sie unter [Lokalisierung von Erweiterungsbeschreibungen](https://web.archive.org/web/20210126131244/https://developer.mozilla.org/de/docs/Mozilla/Localization/Localizing_extension_descriptions).

## Schritt 2: Stellen Sie sicher, dass Sie sichere Updates bereitstellen

Wenn Sie Add-ons selbst hosten und nicht auf einem sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org/), müssen Sie eine sichere Methode zum Aktualisieren Ihres Add-ons bereitstellen. Dies beinhaltet entweder das Hosten Ihrer Updates auf einer SSL-Website oder die Verwendung kryptografischer Schlüssel zur Signierung der Update-Informationen. Lesen Sie [Sichern von Updates](https://web.archive.org/web/20201031093738/https://developer.mozilla.org/de/docs/Archive/Add-ons/Extension_Versioning,_Update_and_Compatibility#securing_updates) für weitere Informationen.

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden in bedeutender Weise geändert. Die wichtigsten davon, die wahrscheinlich eine große Anzahl von Erweiterungen betreffen werden, sind:

### DOM

Knoten von externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) geklont werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es wurde eine Zeit lang während der Entwicklung von Firefox 3 durchgesetzt, aber zu viele Websites brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu reparieren, um diese Regel für eine verbesserte zukünftige Kompatibilität einzuhalten.

### Lesezeichen & Verlauf

Wenn Ihre Erweiterung auf Lesezeichen- oder Verlaufsdaten in irgendeiner Weise zugreift, wird sie erhebliche Arbeit benötigen, um mit Firefox 3 kompatibel zu sein. Die alten APIs für den Zugriff auf diese Informationen wurden durch die neue [Places](https://web.archive.org/web/20210620103113/https://developer.mozilla.org/de/docs/Mozilla/Tech/Places)-Architektur ersetzt. Siehe den [Places-Migrationsleitfaden](https://web.archive.org/web/20200621121524/https://developer.mozilla.org/de/docs/Mozilla/Tech/Places/Places_Developer_Guide) für Details zur Aktualisierung Ihrer vorhandenen Erweiterung auf die Places-API.

### Download-Manager

Die Download-Manager-API hat sich aufgrund des Übergangs von einem RDF-Datenspeicher zur Verwendung der [Storage](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage)-API leicht geändert. Dies sollte ein ziemlich einfacher Übergang sein. Darüber hinaus hat sich die API zur Überwachung des Download-Fortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Siehe `nsIDownloadManager`, `nsIDownloadProgressListener` und [Monitoring downloads](https://web.archive.org/web/20210516125311/https://developer.mozilla.org/de/docs/Archive/Mozilla/Monitoring_downloads) für weitere Informationen.

### Passwort-Manager

Wenn Ihre Erweiterung Benutzeranmeldeinformationen über den Passwort-Manager abruft, muss sie aktualisiert werden, um die neue Login-Manager-API zu verwenden.

- Der Artikel [Using nsILoginManager](https://web.archive.org/web/20210530180123/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILoginManager/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie Sie Ihre Erweiterung so schreiben, dass sie sowohl mit dem Passwort-Manager als auch mit dem Login-Manager funktioniert, damit sie sowohl mit Firefox 3 als auch mit früheren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den eingebauten Passwort-Manager-Speicher überschreiben, wenn Sie eine eigene Passwortspeicherung in Ihren Erweiterungen bereitstellen möchten. Siehe [Creating a Login Manager storage module](https://web.archive.org/web/20210515154057/https://developer.mozilla.org/de/docs/Mozilla/Creating_a_login_manager_storage_module) für Details.

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL-Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zur [Nutzung von Popups](https://web.archive.org/web/20210418010207/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/PopupGuide) wurde erstellt, der erklärt, wie das System funktioniert. Ein Hinweis: `popup.showPopup` wurde zugunsten der neuen `popup.openPopup` und `popup.openPopupAtScreen` abgelehnt.

### Autovervollständigung

Die Methode `handleEnter()` der `nsIAutoCompleteController`-Schnittstelle wurde geändert, um ein Argument zu akzeptieren, das angibt, ob der Text aus dem Autovervollständigen-Popup ausgewählt oder vom Benutzer durch Drücken der Eingabetaste nach dem Eingeben von Text ausgewählt wurde.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er das Prinzip der aufrufenden Code sowie die `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Aufrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, werden die verbleibenden Parameter auf `null` gesetzt.
  - Der erste Parameter ist das zu verwendende Prinzip; dies überschreibt das normalerweise geerbte Standardprinzip.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` unter Verwendung eines Vertrags initialisieren, etwa durch Aufrufen von `createInstance()`, und Sie die `init()`-Methode des `DOMParser` nicht aufrufen, wird bei dem Versuch, einen Parsing-Vorgang einzuleiten, der `DOMParser` automatisch mit einem null-Prinzip und `null`-Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwendung der internen String-API beenden

Die interne String-API wird nicht mehr exportiert; Sie müssen zur externen String-API migrieren. Diese Artikel bieten hilfreiche Informationen:

- [Mozilla external string guide](https://web.archive.org/web/20160423162648/https://developer.mozilla.org/de/docs/Mozilla/Mozilla_external_string_guide)
- [XPCOM Glue](https://web.archive.org/web/20210625030032/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Glue)
- [Migrating from Internal Linkage to Frozen Linkage](https://web.archive.org/web/20210620000937/https://developer.mozilla.org/de/docs/Archive/Add-ons/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9 entfernt, das Firefox 3 antreibt. Wenn Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox-Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie relevante Änderungen am Chrome

Es gab einige Änderungen am Chrome-Layout, die einige Erweiterungen betreffen können.

### Neue Boxen

Es gab eine kleine Änderung am Chrome, die Änderungen in Ihrem Code erfordern könnte. Eine neue `vbox` wurde hinzugefügt, genannt "browser-bottombox", die die Suchleiste und die Statusleiste am unteren Rand des Browserfensters umgibt. Obwohl dies das Erscheinungsbild der Anzeige nicht beeinflusst, kann es Ihre Erweiterung betreffen, wenn sie Chrome relativ zu diesen Elementen überlagert.

Zum Beispiel, wenn Sie zuvor einige Chrome vor der Statusleiste überlagert haben, wie folgt:

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

Oder die folgende Technik verwenden, um Ihre Überlagerung sowohl unter Firefox 2 als auch Firefox 3 funktionsfähig zu machen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, auf das "appcontent"-Box zu überlagern, um Chrome über den Dokumentinhalt zu schweben, zeigen dieses Material nicht mehr an. Sie sollten Ihre Erweiterung aktualisieren, um das neue [`<xul:panel>`](https://web.archive.org/web/20210301150646/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/panel) XUL-Element zu verwenden. Wenn Sie verhindern möchten, dass das Panel nach einer Verzögerung automatisch verschwindet, können Sie das Attribut `noautohide` auf `true` setzen.

## Andere Änderungen

_Fügen Sie hier einfache Änderungen hinzu, die Sie beim Aktualisieren Ihrer Erweiterung zur Arbeit mit Firefox 3 vornehmen mussten._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies zuvor verwendet haben, sollten Sie zu `chrome://browser/content/utilityOverlay.js` wechseln.
- `nsIAboutModule` Implementierungen müssen jetzt die Methode `getURIFlags` unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/firefox-main/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:` URIs bereitstellen. ([Firefox-Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](https://web.archive.org/web/20210221234616/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/tabbrowser)-Element ist nicht mehr Teil des "toolkit" ([Firefox-Bug 339964](https://bugzil.la/339964)). Das bedeutet, dass dieses Element nicht mehr für XUL-Anwendungen und -Erweiterungen verfügbar ist. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an zu Threading-bezogenen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungsanweisungen, wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien verwenden, beachten Sie die Änderungen im [Firefox-Bug 319654](https://bugzil.la/319654):
  1. XML-PIs werden nun zu einem XUL-Dokument-DOM hinzugefügt. Das bedeutet, [`document.firstChild`](/de/docs/Web/API/Node/firstChild) ist nicht mehr garantiert das Wurzelelement. Wenn Sie das Wurzeldokument in Ihrem Skript benötigen, verwenden Sie [`document.documentElement`](/de/docs/Web/API/Document/documentElement) stattdessen.
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>` Verarbeitungsanweisungen haben jetzt keine Wirkung mehr außerhalb des Dokumentprologs.

- `window.addEventListener("load", myFunc, true)` wird nicht ausgelöst, wenn Webinhalte geladen werden (Browser-Seitenladungen). Dies liegt an [Firefox-Bug 296639](https://bugzil.la/296639), der die Art und Weise ändert, wie innere und äußere Fenster kommunizieren. Die einfache Lösung besteht darin, `gBrowser.addEventListener("load", myFunc, true)` zu verwenden, was auch in Firefox 2 funktioniert.
- `content.window.getSelection()` gibt ein Objekt zurück (das durch `toString()` in einen String umgewandelt werden kann), im Gegensatz zu dem jetzt veralteten `content.document.getSelection()`, das einen String zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 abgelehnt und wurde in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das auch in Firefox 2 funktioniert.
- Timer, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) initiiert werden, werden jetzt durch modale Fenster blockiert, aufgrund der in [Firefox-Bug 52209](https://bugzil.la/52209) vorgenommenen Korrektur. Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung es erfordert, dass eine nicht vertrauenswürdige Quelle (z.B. eine Website) auf das Chrome der Erweiterung zugreifen kann, müssen Sie das neue [`contentaccessible`-Flag](https://web.archive.org/web/20210623201644/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#contentaccessible) verwenden.

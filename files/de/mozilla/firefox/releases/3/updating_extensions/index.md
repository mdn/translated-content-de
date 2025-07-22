---
title: Aktualisierung von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen aktualisieren möchten, damit sie unter Firefox 3 ordnungsgemäß funktionieren.

Bevor wir fortfahren, haben wir einen hilfreichen Tipp: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Anpassung des `maxVersion`-Feldes im Installationsmanifest ist und Sie Ihre Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org/) hosten, müssen Sie tatsächlich keine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwickler-Kontrollpanel auf AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt — und für die meisten Erweiterungen der einzige, der erforderlich sein wird — besteht darin, die [Installationsmanifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests)-Datei, [`install.rdf`](https://web.archive.org/web/20160809001138/https://developer.mozilla.org/en-US/Add-ons/Themes/Obsolete/Creating_a_Skin_for_Firefox/install.rdf), zu aktualisieren, um die Kompatibilität mit Firefox 3 anzuzeigen.

Finden Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 2 so aussehen könnte):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 3 anzuzeigen:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung erneut.

Beachten Sie, dass Firefox 3 die zusätzliche ".0" in der Versionsnummer weglässt, sodass Sie anstelle von `3.0.0.*` nur `3.0.*` verwenden müssen.

Es gab (und wird weiterhin geben) eine Reihe von API-Änderungen, die wahrscheinlich einige Erweiterungen unterbrechen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zu erstellen.

> [!NOTE]
> Wenn Ihre Erweiterung immer noch ein [`Install.js`](https://web.archive.org/web/20210604075726/https://developer.mozilla.org/de/docs/Archive/Install.js)-Skript anstelle eines [Installationsmanifests](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umstellen. Firefox 3 unterstützt keine `install.js`-Skripte mehr in XPI-Dateien.

### Lokalisierungen zum Installationsmanifest hinzufügen

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest zur Angabe lokalisierter Beschreibungen. Die alten Methoden funktionieren weiterhin, die neuen ermöglichen jedoch, dass Firefox die Lokalisierungen auch dann übernimmt, wenn das Add-on deaktiviert und als ausstehend installiert ist. Weitere Details finden Sie unter [Lokalisierung von Erweiterungsbeschreibungen](https://web.archive.org/web/20210126131244/https://developer.mozilla.org/de/docs/Mozilla/Localization/Localizing_extension_descriptions).

## Schritt 2: Sicherstellen, dass Sie sichere Updates bereitstellen

Wenn Sie Add-ons selbst und nicht über einen sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org/) hosten, müssen Sie eine sichere Methode zur Aktualisierung Ihres Add-ons bereitstellen. Dies beinhaltet entweder das Hosten Ihrer Updates auf einer SSL-Website oder das Verwenden kryptografischer Schlüssel, um die Update-Informationen zu signieren. Weitere Informationen finden Sie unter [Sichern von Updates](https://web.archive.org/web/20201031093738/https://developer.mozilla.org/de/docs/Archive/Add-ons/Extension_Versioning,_Update_and_Compatibility#securing_updates).

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden signifikant geändert. Die bedeutendsten Änderungen, die wahrscheinlich eine große Anzahl an Erweiterungen betreffen werden, sind:

### DOM

Knoten aus externen Dokumenten sollten mithilfe von [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder übernommen mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)) geklont werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es tat dies eine Zeit lang während der Entwicklung von Firefox 3, aber zu viele Seiten brechen, wenn diese Regel erzwungen wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel einzuhalten, um die zukünftige Kompatibilität zu verbessern.

### Lesezeichen & Verlauf

Wenn Ihre Erweiterung auf Lesezeichen- oder Verlaufsdaten in irgendeiner Weise zugreift, wird eine erhebliche Überarbeitung erforderlich sein, um mit Firefox 3 kompatibel zu sein. Die alten APIs zum Zugriff auf diese Informationen wurden durch die neue [Places](https://web.archive.org/web/20210620103113/https://developer.mozilla.org/de/docs/Mozilla/Tech/Places)-Architektur ersetzt. Siehe den [Places-Migrationsleitfaden](https://web.archive.org/web/20200621121524/https://developer.mozilla.org/de/docs/Mozilla/Tech/Places/Places_Developer_Guide) für Details zur Aktualisierung Ihrer bestehenden Erweiterung zur Verwendung der Places-API.

### Download-Manager

Die Download-Manager-API hat sich aufgrund der Umstellung von einem RDF-Datenspeicher auf die Verwendung der [Storage](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage)-API leicht geändert. Dies sollte eine ziemlich einfache Umstellung sein. Darüber hinaus hat sich die API zur Überwachung des Download-Fortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Weitere Informationen finden Sie unter `nsIDownloadManager`, `nsIDownloadProgressListener` und [Überwachen von Downloads](https://web.archive.org/web/20210516125311/https://developer.mozilla.org/de/docs/Archive/Mozilla/Monitoring_downloads).

### Passwort-Manager

Wenn Ihre Erweiterung Benutzeranmeldeinformationen unter Verwendung des Passwort-Managers abruft, muss sie aktualisiert werden, um die neue Login-Manager-API zu verwenden.

- Der Artikel [Verwendung von nsILoginManager](https://web.archive.org/web/20210530180123/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILoginManager/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie Sie Ihre Erweiterung schreiben, damit sie sowohl mit dem Passwort-Manager als auch mit dem Login-Manager funktioniert, und somit sowohl mit Firefox 3 als auch mit früheren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den integrierten Passwort-Manager-Speicher überschreiben, wenn Sie in Ihren Erweiterungen eine eigene Passwort-Speicher-Implementierung bereitstellen möchten. Weitere Details finden Sie unter [Erstellen eines Login-Manager-Speichermoduls](https://web.archive.org/web/20210515154057/https://developer.mozilla.org/de/docs/Mozilla/Creating_a_login_manager_storage_module).

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL-Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zur [Verwendung von Popups](https://web.archive.org/web/20210418010207/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/PopupGuide) wurde erstellt, der erklärt, wie das System funktioniert. Ein zu beachtender Punkt ist, dass `popup.showPopup` zugunsten der neuen `popup.openPopup` und `popup.openPopupAtScreen` Methoden veraltet ist.

### Autovervollständigung

Die `nsIAutoCompleteController`-Schnittstelle `handleEnter()`-Methode wurde geändert, um ein Argument zu akzeptieren, das anzeigt, ob der Text aus dem Autovervollständigungspopup ausgewählt oder vom Benutzer durch Drücken der Eingabetaste nach dem Tippen von Text ausgewählt wurde.

### DOM-Parser

- Wenn ein `DOMParser` instanziiert wird, erbt er die Berechtigung des aufrufenden Codes sowie die `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Aufrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, wird für die verbleibenden Parameter `null` verwendet.
  - Der erste Parameter ist die zu verwendende Berechtigung; dies überschreibt die normalerweise geerbte Standardberechtigung.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` mit einem Vertrag initialisieren, wie z.B. durch Aufrufen von `createInstance()`, und Sie rufen die `init()`-Methode des `DOMParser` nicht auf, wird beim Versuch, einen Parsingvorgang zu initiieren, automatisch der `DOMParser` mit einer null Berechtigung und `null`-Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Nicht mehr die interne String-API verwenden

Die interne String-API wird nicht mehr exportiert; Sie müssen zur externen String-API migrieren. Diese Artikel bieten hilfreiche Informationen:

- [Mozilla externer String-Leitfaden](https://web.archive.org/web/20160423162648/https://developer.mozilla.org/de/docs/Mozilla/Mozilla_external_string_guide)
- [XPCOM Glue](https://web.archive.org/web/20210625030032/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Glue)
- [Migration von interner Verknüpfung zu gefrorener Verknüpfung](https://web.archive.org/web/20210620000937/https://developer.mozilla.org/de/docs/Archive/Add-ons/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9 entfernt, welches Firefox 3 antreibt. Wenn Ihre Erweiterung eine dieser verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie auf relevante Chrome-Änderungen

Es gab einige Änderungen am Chrome-Layout, die einige Erweiterungen beeinflussen könnten.

### Neue Boxen

Es gab eine kleine Änderung am Chrome, die Änderungen in Ihrem Code erforderlich machen könnte. Eine neue `vbox` wurde hinzugefügt, genannt "browser-bottombox", die die Suchleiste und die Statusleiste am unteren Rand des Browserfensters umschließt. Obwohl dies das Erscheinungsbild der Anzeige nicht beeinträchtigt, könnte es Ihre Erweiterung betreffen, wenn sie Chrome relativ zu diesen Elementen überlagert.

Zum Beispiel, wenn Sie zuvor etwas Chrome vor der Statusleiste überlagert haben, wie das:

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

Oder verwenden Sie die folgende Technik, um Ihre Überlagerung sowohl unter Firefox 2 als auch Firefox 3 zu unterstützen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, auf die "appcontent"-Box zu überlagern und Chrome über Dokumentinhalte schweben zu lassen, werden dieses Material nicht mehr anzeigen. Sie sollten Ihre Erweiterung aktualisieren, um das neue [`<xul:panel>`](https://web.archive.org/web/20210301150646/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/panel)-XUL-Element zu verwenden. Wenn Sie verhindern möchten, dass das Panel nach einer Verzögerung automatisch verschwindet, können Sie das `noautohide`-Attribut auf `true` setzen.

## Andere Änderungen

_Fügen Sie hier einfache Änderungen hinzu, die Sie beim Aktualisieren Ihrer Erweiterung für die Arbeit mit Firefox 3 vornehmen mussten._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies zuvor verwendet haben, sollten Sie auf `chrome://browser/content/utilityOverlay.js` wechseln.
- `nsIAboutModule`-Implementierungen müssen jetzt die `getURIFlags`-Methode unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:`-URIs bereitstellen. ([Firefox Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](https://web.archive.org/web/20210221234616/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/tabbrowser)-Element ist nicht mehr Teil des "toolkit" ([Firefox Bug 339964](https://bugzil.la/339964)). Das bedeutet, dass dieses Element für XUL-Anwendungen und Erweiterungen nicht mehr verfügbar ist. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an threadingbezogenen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungsanweisungen wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien verwenden, beachten Sie die Änderungen in [Firefox Bug 319654](https://bugzil.la/319654):
  1. XML-PIs werden nun zum DOM eines XUL-Dokuments hinzugefügt. Dies bedeutet, dass [`document.firstChild`](/de/docs/Web/API/Node/firstChild) nicht mehr garantiert der Wurzelelement ist. Wenn Ihr Skript auf das Wurzeldokument zugreifen muss, verwenden Sie [`document.documentElement`](/de/docs/Web/API/Document/documentElement) stattdessen.
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>`-Verarbeitungsanweisungen haben außerhalb des Dokumentprologs keine Wirkung mehr.

- `window.addEventListener("load", myFunc, true)` wird beim Laden von Webinhalten (Seitenladevorgänge im Browser) nicht mehr ausgelöst. Dies liegt an [Firefox Bug 296639](https://bugzil.la/296639), der die Art und Weise ändert, wie innere und äußere Fenster kommunizieren. Die einfache Lösung hier ist die Verwendung von `gBrowser.addEventListener("load", myFunc, true)`, was auch in Firefox 2 funktioniert.
- `content.window.getSelection()` liefert ein Objekt (das mit `toString()` in einen String umgewandelt werden kann), im Gegensatz zu dem jetzt veralteten `content.document.getSelection()`, das einen String zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 veraltet und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das auch in Firefox 2 funktioniert.
- Timer, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) initiiert werden, werden jetzt durch modale Fenster blockiert, aufgrund der in [Firefox Bug 52209](https://bugzil.la/52209) vorgenommenen Korrektur. Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung es erfordert, dass eine nicht vertrauenswürdige Quelle (z. B. eine Website) auf das Chrome der Erweiterung zugreifen kann, müssen Sie das neue [`contentaccessible`-Flag](https://web.archive.org/web/20210623201644/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#contentaccessible) verwenden.

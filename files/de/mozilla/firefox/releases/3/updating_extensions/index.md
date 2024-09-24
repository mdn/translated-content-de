---
title: Aktualisieren von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen aktualisieren möchten, um sie unter Firefox 3 korrekt funktionsfähig zu machen.

Bevor wir weitermachen, hier ein hilfreicher Tipp: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Anpassung des `maxVersion`-Felds in der Installationsmanifestdatei ist, und Sie Ihre Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org) hosten, müssen Sie keine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwickler-Dashboard bei AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt — und für die meisten Erweiterungen der einzige notwendige — ist die Aktualisierung der [Installationsmanifest](/de/docs/Install_Manifests) Datei, [`install.rdf`](/de/docs/Creating_a_Skin_for_Firefox/install.rdf), um die Kompatibilität mit Firefox 3 anzuzeigen.

Suchen Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 2 etwa so aussehen könnte):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie dies, um die Kompatibilität mit Firefox 3 anzuzeigen:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung neu.

Beachten Sie, dass Firefox 3 auf die zusätzliche ".0" in der Versionsnummer verzichtet, daher müssen Sie statt `3.0.0.*` einfach nur `3.0.*` verwenden.

Es gab (und wird weiterhin geben) eine Reihe von API-Änderungen, die wahrscheinlich einige Erweiterungen beeinträchtigen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zusammenzustellen.

> [!NOTE]
> Wenn Ihre Erweiterung noch ein [`Install.js`](/de/docs/Install.js)-Skript anstelle eines [Installationsmanifests](/de/docs/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umstellen. Firefox 3 unterstützt `install.js`-Skripte in XPI-Dateien nicht mehr.

### Lokalisierungen zum Installationsmanifest hinzufügen

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest zur Angabe lokalisierter Beschreibungen. Die alten Methoden funktionieren immer noch, jedoch erlauben die neuen, dass Firefox die Lokalisierungen auch dann erfasst, wenn das Add-on deaktiviert und zur Installation ausstehend ist. Siehe [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions) für weitere Details.

## Schritt 2: Stellen Sie sicher, dass Sie sichere Updates bereitstellen

Wenn Sie Addons selbst hosten und nicht auf einem sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org), dann müssen Sie eine sichere Methode zur Aktualisierung Ihres Add-ons bereitstellen. Dies beinhaltet entweder das Hosting Ihrer Updates auf einer SSL-Website oder die Verwendung kryptografischer Schlüssel zur Signierung der Update-Informationen. Lesen Sie [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates) für weitere Informationen.

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden in signifikanter Weise geändert. Die bedeutendsten davon, die wahrscheinlich eine große Anzahl von Erweiterungen betreffen, sind:

### DOM

Knoten von externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder übernommen mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)) geklont werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie in der [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Derzeit erzwingt Firefox diese Regel nicht (es war eine Zeit lang während der Entwicklung von Firefox 3 der Fall, aber zu viele Seiten brechen, wenn diese Regel durchgesetzt wird). Wir empfehlen Webentwicklern, ihren Code anzupassen, um diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

### Lesezeichen & Verlauf

Wenn Ihre Erweiterung auf Lesezeichen- oder Verlaufsdaten in irgendeiner Weise zugreift, muss sie erheblich überarbeitet werden, um mit Firefox 3 kompatibel zu sein. Die alten APIs für den Zugriff auf diese Informationen wurden durch die neue [Places](/de/docs/Places)-Architektur ersetzt. Siehe den [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide) für Details zur Aktualisierung Ihrer bestehenden Erweiterung zur Nutzung der Places-API.

### Download-Manager

Die Download-Manager-API hat sich leicht verändert aufgrund des Übergangs von einem RDF-Datenspeicher zur Verwendung der [Storage](/de/docs/Storage) API. Dies sollte eine ziemlich einfache Umstellung sein. Darüber hinaus wurde die API zur Überwachung des Download-Fortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Siehe `nsIDownloadManager`, `nsIDownloadProgressListener` und [Überwachung von Downloads](/de/docs/Monitoring_downloads) für weitere Informationen.

### Passwort-Manager

Wenn Ihre Erweiterung auf Benutzeranmeldeinformationen mit dem Passwort-Manager zugreift, muss sie aktualisiert werden, um die neue Login-Manager-API zu verwenden.

- Der Artikel [Verwendung von nsILoginManager](/de/docs/XPCOM_Interface_Reference/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie Sie Ihre Erweiterung sowohl mit dem Passwort-Manager als auch mit dem Login-Manager verwenden, sodass sie sowohl mit Firefox 3 als auch mit früheren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den eingebauten Passwort-Manager-Speicher überschreiben, wenn Sie in Ihren Erweiterungen Ihre eigene Passwort-Speicherimplementierung bereitstellen möchten. Siehe [Erstellen eines Login-Manager-Speichermoduls](/de/docs/Creating_a_Login_Manager_storage_module) für Details.

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL-Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zur [Verwendung von Popups](/de/docs/XUL/PopupGuide) wurde erstellt, der detailliert erklärt, wie das System funktioniert. Ein Punkt, den es zu beachten gilt, ist, dass `popup.showPopup` zugunsten der neuen `popup.openPopup` und `popup.openPopupAtScreen` veraltet ist.

### Autocomplete

Die `nsIAutoCompleteController`-Schnittstelle hat die Methode `handleEnter()`, die geändert wurde, um ein Argument zu akzeptieren, das angibt, ob der Text aus dem Autocomplete-Popup ausgewählt wurde oder durch Drücken der Eingabetaste nach der Texteingabe.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er das Hauptprogramm des aufrufenden Codes sowie `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Anrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, werden die restlichen Parameter standardmäßig auf `null` gesetzt.

  - Der erste Parameter ist das zu verwendende Hauptprogramm; dies überschreibt das normalerweise geerbte Standard-Hauptprogramm.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` mithilfe eines Vertrags initialisieren, z. B. durch Aufrufen von `createInstance()`, und Sie die `init()`-Methode des `DOMParser` nicht aufrufen, wird durch den Versuch, einen Parsing-Vorgang zu starten, der `DOMParser` automatisch mit einem null-Hauptprogramm sowie `null`-Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwenden Sie nicht mehr die interne Zeichenfolgen-API

Die interne Zeichenfolgen-API wird nicht mehr exportiert; Sie müssen auf die externe Zeichenfolgen-API migrieren. Sehen Sie sich diese Artikel für hilfreiche Informationen an:

- [Mozilla Extrinale Zeichenfolgen-Leitfaden](/de/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/de/docs/XPCOM_Glue)
- [Migration von interner Verknüpfung zu gefrorener Verknüpfung](/de/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9, das Firefox 3 antreibt, entfernt. Wenn Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie auf relevante Änderungen im Chrome

Es gab einige Änderungen am Chrome-Layout, die einige Erweiterungen betreffen könnten.

### Neue Boxen

Es gab eine kleine Änderung am Chrome, die Änderungen an Ihrem Code erforderlich machen könnte. Eine neue `vbox` wurde hinzugefügt, die "browser-bottombox" genannt wird, die die Suchleiste und die Statusleiste am unteren Rand des Browserfensters umschließt. Obwohl dies das Erscheinungsbild der Anzeige nicht beeinflusst, kann es Ihre Erweiterung betreffen, wenn diese Chrome relativ zu diesen Elementen überlagert.

Zum Beispiel, wenn Sie zuvor einige Chrome vor der Statusleiste überlagert haben, zum Beispiel so:

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

Oder verwenden Sie die folgende Technik, um Ihre Überlagerung sowohl auf Firefox 2 als auch auf Firefox 3 funktionierend zu machen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, die "appcontent"-Box zu überlagern, um Chrome über Dokumentinhalte zu schweben, zeigen dieses Material nicht mehr an. Sie sollten Ihre Erweiterung aktualisieren, um das neue [`<xul:panel>`](/de/docs/Mozilla/Tech/XUL/panel) XUL-Element zu verwenden. Wenn Sie verhindern möchten, dass das Panel nach einer Verzögerung automatisch verschwindet, können Sie das Attribut `noautohide` auf `true` setzen.

## Weitere Änderungen

_Fügen Sie hier einfache Änderungen hinzu, die Sie vornehmen mussten, um Ihre Erweiterung mit Firefox 3 zum Laufen zu bringen._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies zuvor verwendet haben, sollten Sie auf `chrome://browser/content/utilityOverlay.js` umstellen.
- `nsIAboutModule`-Implementierungen müssen jetzt die Methode `getURIFlags` unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für die Dokumentation. Dies betrifft Erweiterungen, die neue `about:` URIs bereitstellen. ([Firefox Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](/de/docs/Mozilla/Tech/XUL/tabbrowser)-Element ist nicht mehr Teil des "Toolkit" ([Firefox Bug 339964](https://bugzil.la/339964)). Dies bedeutet, dass dieses Element für XUL-Anwendungen und -Erweiterungen nicht mehr verfügbar ist. Es wird weiterhin im Haupt-Firefox-Fenster (browser.xul) verwendet.
- Änderungen durch `nsISupports_proxies` und möglicherweise an threadbezogenen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungshinweise verwenden, wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien, seien Sie sich der Änderungen bewusst, die in [Firefox Bug 319654](https://bugzil.la/319654) vorgenommen wurden:

  1. XML-Anmerkungen werden jetzt zum DOM eines XUL-Dokuments hinzugefügt. Dies bedeutet, dass [`document.firstChild`](/de/docs/Web/API/Node/firstChild) nicht mehr garantiert das Wurzelelement ist. Wenn Sie das Wurzeldokument in Ihrem Skript abrufen müssen, verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement).
  2. `<?xml-stylesheet ?>`- und `<?xul-overlay ?>`-Verarbeitungshinweise haben jetzt keine Wirkung mehr außerhalb des Dokument-Prologs.

- `window.addEventListener("load", myFunc, true)` wird beim Laden von Web-Inhalten (Browser-Seitenladevorgängen) nicht ausgelöst. Dies liegt an [Firefox Bug 296639](https://bugzil.la/296639), der die Art und Weise ändert, wie innere und äußere Fenster kommunizieren. Der einfache Fix besteht darin, `gBrowser.addEventListener("load", myFunc, true)` zu verwenden, wie [hier](/de/docs/Code_snippets/Tabbed_browser#detecting_page_load) beschrieben, was auch in Firefox 2 funktioniert.
- `content.window.getSelection()` gibt ein Objekt (das in eine Zeichenkette umgewandelt werden kann durch `toString()`), im Gegensatz zu dem mittlerweile veralteten `content.document.getSelection()`, das eine Zeichenkette zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 veraltet und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das auch in Firefox 2 funktioniert.
- Timer, die mittels [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) initiiert werden, sind jetzt durch modale Fenster blockiert aufgrund der Korrektur von [Firefox Bug 52209](https://bugzil.la/52209). Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung eine nicht vertrauenswürdige Quelle (z.B. eine Website) zulassen muss, um auf das Chrome der Erweiterung zuzugreifen, dann müssen Sie die neue [`contentaccessible`-Flagge](/de/docs/Chrome_Registration#contentaccessible) verwenden.

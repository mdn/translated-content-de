---
title: Aktualisieren von Erweiterungen für Firefox 7
slug: Mozilla/Firefox/Releases/7/Updating_extensions
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Dieser Artikel bietet Ratschläge für Add-on-Entwickler, die ihre Erweiterungen aktualisieren möchten, um in Firefox 7 zu funktionieren. Glücklicherweise sind die meisten Änderungen in dieser Version relativ geringfügig, und nur wenige Add-ons sollten signifikante Änderungen benötigen, um in Firefox 7 zu funktionieren.

> [!NOTE]
> Für eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 7, siehe [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

Wie immer müssen Sie [alle binären Komponenten neu kompilieren](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces), um sie kompatibel mit Firefox 7 zu machen.

## XPCOM-Änderungen, die die Kompatibilität beeinflussen

Die meisten Änderungen in dieser Version sind XPCOM-Schnittstellenentfernungen oder die Entfernung spezifischer, veralteter APIs aus Schnittstellen.

### Entfernte Schnittstellen

Die folgenden Schnittstellen sind diejenigen, die entfernt wurden und die am ehesten Auswirkungen auf Erweiterungsentwickler haben könnten:

- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `schemaTypeInfo`
- `nsIDOMNSDocument`
- `nsIDOMDocumentStyle`

Eine vollständige Liste der entfernten Schnittstellen finden Sie im Abschnitt [Entfernte Schnittstellen](/de/docs/Mozilla/Firefox/Releases/7#removed_interfaces) von [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

### Geänderte Methoden

Einige Schnittstellen haben Methoden, die geändert wurden:

- `nsINavHistoryObserver` und `nsINavBookmarkObserver`
  - : Diese wurden geändert, um Firefox Sync besser zu unterstützen, indem sie einen neuen GUID-Parameter zu mehreren ihrer Methoden hinzufügen. JavaScript-basierter Code sollte keine Änderungen benötigen, da dies nur die Hinzufügung eines neuen, optionalen Parameters ist. Allerdings müssen binäre Komponenten aktualisiert werden, um den neuen Parameter zu berücksichtigen.
- `nsIDOMFile`
  - : Eine Reihe von nicht standardmäßigen Methoden wurde aus dieser Schnittstelle entfernt. Dies betrifft die Methoden `File.getDataAsUrl()` und `File.getAsBinary()` des [`File`](/de/docs/Web/API/File)-Objekts. Diese Funktionalität kann jetzt jedoch im standardisierten [`FileReader`](/de/docs/Web/API/FileReader)-Objekt gefunden werden.

## Weitere bemerkenswerte Änderungen

Diese Änderungen beeinflussen die Kompatibilität nicht (wir haben nicht übertrieben, als wir sagten, dass es in dieser Version nicht viele Änderungen gibt, die dies tun), fügen jedoch Fähigkeiten hinzu, die leicht zu nutzen sind und die für Sie von besonderem Nutzen sein könnten.

### Entladen von JavaScript-Code-Modulen

Die neue Methode `Components.utils.unload()` ermöglicht es Ihnen, JavaScript-Code-Module zu entladen, die zuvor durch den Aufruf von `Components.utils.load()` geladen wurden. Dies kann besonders praktisch bei neustartlosen (bootstrapped) Erweiterungen sein, sodass Sie eine alte Version eines Code-Moduls entladen können, wenn eine neue Version Ihres Add-ons installiert wird.

### Inline-Einstellungen

Sie können jetzt [Einstellungsoptionen inline](/de/docs/Extensions/Inline_Options) im Fenster des Add-on-Managers haben, was es den Benutzern ermöglicht, Ihr Add-on zu konfigurieren, ohne einen separaten Einstellungsdialog öffnen zu müssen. Es gibt Einschränkungen, welche Arten von Konfigurationselementen bereitgestellt werden können, aber dies ist dennoch sehr hilfreich — und es funktioniert auch für [neustartlose (bootstrapped) Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions).

## Siehe auch

- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Add-ons Blog: Firefox 7 Add-on-Kompatibilität](https://blog.mozilla.org/addons/2011/07/19/firefox-7-compat-looking-to-8/)
- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)

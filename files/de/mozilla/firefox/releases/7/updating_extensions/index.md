---
title: Aktualisierung von Erweiterungen für Firefox 7
slug: Mozilla/Firefox/Releases/7/Updating_extensions
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet Tipps für Add-on-Entwickler, die ihre Erweiterungen aktualisieren möchten, um mit Firefox 7 zu funktionieren. Glücklicherweise sind die meisten Änderungen in diesem Release relativ geringfügig, und nur wenige Add-ons sollten bedeutende Änderungen benötigen, um in Firefox 7 zu funktionieren.

> [!NOTE]
> Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 7 finden Sie unter [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

Wie immer müssen Sie [alle binären Komponenten neu kompilieren](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces), um sie mit Firefox 7 kompatibel zu machen.

## XPCOM-Änderungen, die sich auf die Kompatibilität auswirken

Die meisten Änderungen in diesem Release sind das Entfernen von XPCOM-Schnittstellen oder das Entfernen spezifischer, veralteter APIs aus Schnittstellen.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt und werden wahrscheinlich Auswirkungen auf Erweiterungsentwickler haben:

- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `schemaTypeInfo`
- `nsIDOMNSDocument`
- `nsIDOMDocumentStyle`

Eine vollständige Liste der entfernten Schnittstellen finden Sie im Abschnitt über [Entfernte Schnittstellen](/de/docs/Mozilla/Firefox/Releases/7#removed_interfaces) von [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

### Geänderte Methoden

Einige Schnittstellen haben Methoden, die geändert wurden:

- `nsINavHistoryObserver` und `nsINavBookmarkObserver`
  - : Diese wurden geändert, um Firefox Sync besser zu unterstützen, indem ein neuer GUID-Parameter zu mehreren ihrer Methoden hinzugefügt wurde. JavaScript-basierter Code sollte keine Änderungen benötigen, da dies nur die Hinzufügung eines neuen, optionalen Parameters ist. Binäre Komponenten müssen jedoch aktualisiert werden, um den neuen Parameter zu berücksichtigen.
- `nsIDOMFile`
  - : Eine Reihe von nicht standardmäßigen Methoden wurden aus dieser Schnittstelle entfernt. Dies betrifft die Methoden `File.getDataAsUrl()` und `File.getAsBinary()` des [`File`](/de/docs/Web/API/File)-Objekts. Diese Funktionalität findet sich jedoch jetzt im standardisierten [`FileReader`](/de/docs/Web/API/FileReader)-Objekt.

## Weitere bemerkenswerte Änderungen

Diese Änderungen werden sich nicht auf die Kompatibilität auswirken (wir haben nicht gescherzt, als wir sagten, dass es in diesem Release nicht viele Änderungen gibt, die dies tun), aber sie fügen Funktionen hinzu, die leicht genutzt werden können und möglicherweise von besonderem Nutzen für Sie sind.

### Entladen von JavaScript-Code-Modulen

Die neue Methode `Components.utils.unload()` ermöglicht es Ihnen, zuvor durch Aufruf von `Components.utils.load()` geladene JavaScript-Code-Module zu entladen. Dies kann besonders nützlich für Neustart-lose (bootstrap) Erweiterungen sein, damit Sie eine alte Version eines Code-Moduls entladen können, wenn eine neue Version Ihres Add-ons installiert wird.

### Inline-Einstellungen

Sie können jetzt [Präferenz-Optionen inline](https://web.archive.org/web/20210417084958/https://developer.mozilla.org/de/docs/Archive/Add-ons/Inline_Options) im Add-on-Manager-Fenster integrieren, was es Benutzern ermöglicht, Ihr Add-on zu konfigurieren, ohne ein separates Präferenz-Dialogfeld öffnen zu müssen. Es gibt Einschränkungen, welche Arten von Konfigurationskontrollen bereitgestellt werden können, aber dies ist dennoch sehr hilfreich — und es funktioniert mit [Neustart-losen (bootstrap) Erweiterungen](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions).

## Siehe auch

- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Add-ons Blog: Firefox 7 Add-on-Kompatibilität](https://blog.mozilla.org/addons/2011/07/19/firefox-7-compat-looking-to-8/)
- [XPCOM-Änderungen in Gecko 2.0](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)

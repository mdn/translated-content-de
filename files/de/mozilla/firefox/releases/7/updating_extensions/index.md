---
title: Aktualisierung von Erweiterungen für Firefox 7
slug: Mozilla/Firefox/Releases/7/Updating_extensions
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Ratschläge für Add-on-Entwickler, die ihre Erweiterungen aktualisieren möchten, um mit Firefox 7 zu funktionieren. Glücklicherweise sind die meisten Änderungen in dieser Version relativ gering, und nur wenige Add-ons sollten signifikante Anpassungen benötigen, um unter Firefox 7 zu funktionieren.

> [!NOTE]
> Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 7 finden Sie unter [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

Wie immer müssen Sie [alle binären Komponenten neu kompilieren](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces), um sie mit Firefox 7 kompatibel zu machen.

## XPCOM-Änderungen, die die Kompatibilität betreffen

Die meisten Änderungen in dieser Version sind Entfernen von XPCOM-Schnittstellen oder das Entfernen spezifischer veralteter APIs aus Schnittstellen.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt und werden wahrscheinlich Auswirkungen auf Erweiterungsentwickler haben:

- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `schemaTypeInfo`
- `nsIDOMNSDocument`
- `nsIDOMDocumentStyle`

Eine vollständige Liste der entfernten Schnittstellen finden Sie im Abschnitt [Entfernte Schnittstellen](/de/docs/Mozilla/Firefox/Releases/7#removed_interfaces) von [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

### Geänderte Methoden

Einige Schnittstellen haben Methoden, die geändert wurden:

- `nsINavHistoryObserver` und `nsINavBookmarkObserver`
  - : Diese wurden geändert, um Firefox Sync besser zu unterstützen, indem ein neuer GUID-Parameter zu mehreren ihrer Methoden hinzugefügt wurde. JavaScript-basierter Code sollte keine Änderungen erfordern, da dies nur die Hinzufügung eines neuen, optionalen Parameters ist. Binäre Komponenten müssen jedoch aktualisiert werden, um den neuen Parameter zu berücksichtigen.
- `nsIDOMFile`
  - : Eine Reihe nicht standardisierter Methoden wurde aus dieser Schnittstelle entfernt. Dies betrifft die Methoden [`File`](/de/docs/Web/API/File) des Objekts [`File.getDataAsUrl()`](/de/docs/Web/API/File/getDataAsUrl) und [`File.getAsBinary()`](/de/docs/Web/API/File/getAsBinary). Diese Funktionalität kann jedoch nun im standardisierten [`FileReader`](/de/docs/Web/API/FileReader)-Objekt gefunden werden.

## Weitere bemerkenswerte Änderungen

Diese Änderungen werden die Kompatibilität nicht beeinträchtigen (wir haben nicht gescherzt, als wir sagten, dass es in dieser Version nicht viele Änderungen gibt, die dies tun), aber sie fügen Fähigkeiten hinzu, die leicht genutzt werden können und die für Sie von besonderem Nutzen sein könnten.

### Entladen von JavaScript-Code-Modulen

Die neue Methode `Components.utils.unload()` ermöglicht es Ihnen, zuvor durch Aufruf von `Components.utils.load()` geladene JavaScript-Code-Module zu entladen. Dies kann besonders nützlich bei neustartlosen (bootstrapped) Erweiterungen sein, damit Sie eine alte Version eines Code-Moduls entladen können, wenn eine neue Version Ihres Add-ons installiert wird.

### Inline-Einstellungen

Sie können nun [Einstellungsoptionen inline](/de/docs/Extensions/Inline_Options) im Add-on-Manager-Fenster platzieren, was es den Benutzern ermöglicht, Ihr Add-on zu konfigurieren, ohne einen separaten Einstellungsdialog öffnen zu müssen. Es gibt zwar Einschränkungen für die Arten von Konfigurationssteuerungen, die bereitgestellt werden können, aber dies ist dennoch sehr hilfreich — außerdem funktioniert es für [neustartlose (bootstrapped) Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions).

## Siehe auch

- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Add-ons Blog: Kompatibilität von Firefox 7-Erweiterungen](https://blog.mozilla.org/addons/2011/07/19/firefox-7-compat-looking-to-8/)
- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)

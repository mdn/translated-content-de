---
title: Aktualisierung von Erweiterungen für Firefox 7
slug: Mozilla/Firefox/Releases/7/Updating_extensions
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Ratschläge für Entwickler von Add-ons, die ihre Erweiterungen aktualisieren möchten, um in Firefox 7 zu funktionieren. Glücklicherweise sind die meisten Änderungen in dieser Version relativ gering, und nur wenige Add-ons sollten signifikante Anpassungen benötigen, um in Firefox 7 zu funktionieren.

> [!NOTE]
> Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 7 finden Sie unter [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

Wie immer müssen Sie [alle binären Komponenten neu kompilieren](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces), um sie kompatibel mit Firefox 7 zu machen.

## XPCOM-Änderungen, die die Kompatibilität betreffen

Die meisten Änderungen in dieser Version betreffen die Entfernung von XPCOM-Schnittstellen oder veralteten APIs aus Schnittstellen.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt und werden wahrscheinlich die Entwickler von Erweiterungen beeinflussen:

- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `schemaTypeInfo`
- `nsIDOMNSDocument`
- `nsIDOMDocumentStyle`

Sie können eine vollständige Liste der entfernten Schnittstellen im Abschnitt [Entfernte Schnittstellen](/de/docs/Mozilla/Firefox/Releases/7#removed_interfaces) von [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7) finden.

### Geänderte Methoden

Einige Schnittstellen haben Methoden, die geändert wurden:

- `nsINavHistoryObserver` und `nsINavBookmarkObserver`
  - : Diese wurden geändert, um Firefox Sync besser zu unterstützen, indem ein neuer GUID-Parameter zu mehreren ihrer Methoden hinzugefügt wurde. JavaScript-basierter Code sollte keine Änderungen erfordern, da dies nur die Hinzufügung eines neuen, optionalen Parameters ist. Binäre Komponenten müssen jedoch aktualisiert werden, um den neuen Parameter zu berücksichtigen.
- `nsIDOMFile`
  - : Eine Reihe von nicht-standardisierten Methoden wurden aus dieser Schnittstelle entfernt. Dies betrifft die Methoden `File.getDataAsUrl()` und `File.getAsBinary()` des [`File`](/de/docs/Web/API/File)-Objekts. Diese Funktionalität kann jedoch nun im standardisierten [`FileReader`](/de/docs/Web/API/FileReader)-Objekt gefunden werden.

## Weitere bemerkenswerte Änderungen

Diese Änderungen beeinflussen die Kompatibilität nicht (wir haben nicht übertrieben, als wir sagten, dass es in dieser Version nicht viele Änderungen gibt, die die Kompatibilität betreffen), aber sie fügen Fähigkeiten hinzu, die leicht genutzt werden können und möglicherweise von besonderem Nutzen für Sie sind.

### Entladen von JavaScript-Code-Modulen

Die neue Methode `Components.utils.unload()` ermöglicht es Ihnen, JavaScript-Code-Module zu entladen, die zuvor durch den Aufruf von `Components.utils.load()` geladen wurden. Dies kann besonders nützlich bei neustartlosen (bootstrap) Erweiterungen sein, damit Sie eine alte Version eines Code-Moduls entladen können, wenn eine neue Version Ihres Add-ons installiert wird.

### Inline-Präferenzen

Es ist jetzt möglich, [Präferenzoptionen inline](/de/docs/Extensions/Inline_Options) im Fenster des Add-on-Managers zu haben, was es den Nutzern ermöglicht, Ihr Add-on zu konfigurieren, ohne einen separaten Präferenzdialog öffnen zu müssen. Es gibt Einschränkungen, welche Arten von Konfigurationskontrollen bereitgestellt werden können, aber dies ist dennoch sehr hilfreich – außerdem funktioniert es für [neustartlose (bootstrap) Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions).

## Siehe auch

- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Add-ons Blog: Firefox 7 Add-on-Kompatibilität](https://blog.mozilla.org/addons/2011/07/19/firefox-7-compat-looking-to-8/)
- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)

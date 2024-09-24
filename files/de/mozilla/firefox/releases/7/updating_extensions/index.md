---
title: Aktualisierung von Erweiterungen für Firefox 7
slug: Mozilla/Firefox/Releases/7/Updating_extensions
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Ratschläge für Entwickler von Add-ons, die ihre Erweiterungen für die Arbeit mit Firefox 7 aktualisieren möchten. Glücklicherweise sind die Änderungen in dieser Version relativ gering, und nur wenige Add-ons sollten signifikante Änderungen benötigen, um in Firefox 7 zu funktionieren.

> [!NOTE]
> Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 7 finden Sie unter [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

Wie immer müssen Sie [alle binären Komponenten neu kompilieren](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces), um sie mit Firefox 7 kompatibel zu machen.

## XPCOM-Änderungen, die die Kompatibilität betreffen

Die meisten Änderungen in dieser Version sind die Entfernung von XPCOM-Schnittstellen oder die Entfernung spezifischer, veralteter APIs aus Schnittstellen.

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
  - : Diese wurden geändert, um Firefox Sync besser zu unterstützen, indem ein neuer GUID-Parameter zu mehreren ihrer Methoden hinzugefügt wurde. In JavaScript-basierter Code sind wahrscheinlich keine Änderungen erforderlich, da dies nur die Hinzufügung eines neuen, optionalen Parameters ist. Binäre Komponenten müssen jedoch aktualisiert werden, um den neuen Parameter zu berücksichtigen.
- `nsIDOMFile`
  - : Eine Reihe von nicht standardisierten Methoden wurden aus dieser Schnittstelle entfernt. Dies betrifft die Methoden {{ domxref("File") }} Objekt {{ domxref("File.getDataAsUrl()") }} und {{ domxref("File.getAsBinary()") }}. Diese Funktionalität kann jetzt jedoch im standardmäßigen {{ domxref("FileReader") }} Objekt gefunden werden.

## Weitere bemerkenswerte Änderungen

Diese Änderungen beeinflussen nicht die Kompatibilität (wir meinten es ernst, als wir sagten, es gäbe nicht viele Änderungen, die dies in dieser Version tun), fügen jedoch Funktionen hinzu, die leicht zu nutzen sind und für Sie von besonderem Nutzen sein könnten.

### Entladen von JavaScript-Code-Modulen

Die neue Methode `Components.utils.unload()` ermöglicht das Entladen von JavaScript-Code-Modulen, die zuvor durch Aufruf von `Components.utils.load()` geladen wurden. Dies kann besonders nützlich bei neustartlosen (bootstrapped) Erweiterungen sein, sodass Sie eine alte Version eines Code-Moduls entladen können, wenn eine neue Version Ihres Add-ons installiert wird.

### Inline-Einstellungen

Sie können jetzt [Präferenzoptionen inline](/de/docs/Extensions/Inline_Options) im Fenster des Add-on-Managers haben, was es den Benutzern ermöglicht, Ihr Add-on zu konfigurieren, ohne ein separates Einstellungsdialogfeld öffnen zu müssen. Es gibt Grenzen, welche Arten von Konfigurationskontrollen bereitgestellt werden können, aber dies ist dennoch sehr hilfreich — und es funktioniert auch für [neustartlose (bootstrapped) Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions).

## Siehe auch

- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Add-ons Blog: Firefox 7 Add-on-Kompatibilität](https://blog.mozilla.org/addons/2011/07/19/firefox-7-compat-looking-to-8/)
- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)

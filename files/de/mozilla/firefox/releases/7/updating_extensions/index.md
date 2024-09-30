---
title: Aktualisierung von Erweiterungen für Firefox 7
slug: Mozilla/Firefox/Releases/7/Updating_extensions
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Ratschläge für Add-on-Entwickler, die ihre Erweiterungen auf Firefox 7 aktualisieren möchten. Glücklicherweise sind die meisten Änderungen in dieser Version relativ geringfügig und nur wenige Add-ons sollten erhebliche Änderungen benötigen, um in Firefox 7 zu funktionieren.

> [!NOTE]
> Eine vollständige Liste der Entwickler-Änderungen in Firefox 7 finden Sie unter [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7).

Wie immer müssen Sie [alle binären Komponenten neu kompilieren](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces), um sie mit Firefox 7 kompatibel zu machen.

## XPCOM-Änderungen, die die Kompatibilität beeinflussen

Die meisten Änderungen in dieser Version betreffen die Entfernung von XPCOM-Schnittstellen oder spezifischen, veralteten APIs aus Schnittstellen.

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt und dürften die Entwickler von Erweiterungen am ehesten betreffen:

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
  - : Eine Reihe von nicht standardisierten Methoden wurden aus dieser Schnittstelle entfernt. Dies betrifft die Methoden [`File.getDataAsUrl()`](/de/docs/Web/API/File/getDataAsUrl) und [`File.getAsBinary()`](/de/docs/Web/API/File/getAsBinary) des [`File`](/de/docs/Web/API/File)-Objekts. Diese Funktionalität ist jedoch jetzt im standardisierten [`FileReader`](/de/docs/Web/API/FileReader)-Objekt zu finden.

## Weitere erwähnenswerte Änderungen

Diese Änderungen beeinträchtigen nicht die Kompatibilität (wir haben nicht übertrieben, als wir sagten, dass es in dieser Version nicht viele Änderungen gibt, die dies tun), fügen jedoch Fähigkeiten hinzu, die einfach zu nutzen sind und für Sie von besonderem Nutzen sein könnten.

### Entladen von JavaScript-Code-Modulen

Die neue Methode `Components.utils.unload()` ermöglicht es Ihnen, zuvor durch Aufruf von `Components.utils.load()` geladene JavaScript-Code-Module zu entladen. Dies kann besonders nützlich bei neustartlosen (bootstrapped) Erweiterungen sein, sodass Sie eine alte Version eines Code-Moduls entladen können, wenn eine neue Version Ihres Add-ons installiert wird.

### Integrierte Präferenzen

Sie können jetzt [Präferenzoptionen inline](/de/docs/Extensions/Inline_Options) im Add-on Manager Fenster haben, was es den Benutzern ermöglicht, Ihr Add-on zu konfigurieren, ohne ein separates Präferenz-Dialogfenster öffnen zu müssen. Es gibt zwar Grenzen, welche Arten von Konfigurationseinstellungen bereitgestellt werden können, aber dies ist dennoch sehr hilfreich — zudem funktioniert es für [neustartlose (bootstrapped) Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions).

## Siehe auch

- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Add-ons Blog: Firefox 7 Add-on-Kompatibilität](https://blog.mozilla.org/addons/2011/07/19/firefox-7-compat-looking-to-8/)
- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)

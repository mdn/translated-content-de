---
title: "Navigator: plugins-Eigenschaft"
short-title: plugins
slug: Web/API/Navigator/plugins
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`plugins`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`PluginArray`](/de/docs/Web/API/PluginArray)-Objekt zurück. Dieses enthält [`Plugin`](/de/docs/Web/API/Plugin)-Objekte, die die in der Anwendung installierten Plugins beschreiben.
Die benannten Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

Neuere Versionen der Spezifikation legen die zurückgegebene Liste fest.
Wenn die Inline-Anzeige von PDF-Dateien unterstützt wird, enthält die Eigenschaft fünf Standard-Plugins.
Wird die Inline-Anzeige von PDF-Dateien nicht unterstützt, wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled), um festzustellen, ob die Inline-Anzeige von PDF-Dateien unterstützt wird. Leiten Sie dies nicht aus dieser Eigenschaft ab.
>
> Die „fünf Standard-Plugins“ sind diejenigen, die Entwickler am häufigsten zur Funktionserkennung der Inline-Anzeige von PDF-Dateien verwendet haben.
> Ihre Rückgabe stellt sicher, dass bestehender Code zuverlässiger feststellen kann, ob die Inline-Anzeige unterstützt wird.
> Für neuen Code wird dieser Ansatz jedoch nicht empfohlen, da diese Eigenschaft möglicherweise irgendwann entfernt wird.

Ältere Browserversionen führen auch Plugins für Adobe Flash und PDF-Viewer-Erweiterungen auf.

## Wert

`plugins` ist ein [`PluginArray`](/de/docs/Web/API/PluginArray)-Objekt, über das auf [`Plugin`](/de/docs/Web/API/Plugin)-Objekte entweder anhand ihres Namens oder als Listeneinträge zugegriffen werden kann.

Der zurückgegebene Wert ist kein JavaScript-Array, verfügt aber über die Eigenschaft `length`. Auf einzelne Einträge kann mit der Klammernotation (`plugins[2]`) sowie mit den Methoden `item(index)` und `namedItem("name")` zugegriffen werden.

Wenn die Inline-Anzeige von PDF-Dateien unterstützt wird, enthält das Objekt Einträge für die folgenden Plugins:

- "PDF Viewer"
- "Chrome PDF Viewer"
- "Chromium PDF Viewer"
- "Microsoft Edge PDF Viewer"
- "WebKit built-in PDF"

Wird die Inline-Anzeige von PDF-Dateien nicht unterstützt, wird ein leeres Objekt zurückgegeben.

## Beispiele

Dieser Code zeigt, wie Sie prüfen können, ob PDF-Dateien inline angezeigt werden können:

```js
if ("PDF Viewer" in navigator.plugins) {
  // browser supports inline viewing of PDF files.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

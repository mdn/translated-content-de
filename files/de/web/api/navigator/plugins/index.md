---
title: "Navigator: plugins-Eigenschaft"
short-title: plugins
slug: Web/API/Navigator/plugins
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Gibt ein [`PluginArray`](/de/docs/Web/API/PluginArray)-Objekt zurück, das die [`Plugin`](/de/docs/Web/API/Plugin)-Objekte auflistet, die die im Programm installierten Plugins beschreiben. Benannte Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

In den neuesten Versionen der Spezifikation ist die zurückgegebene Liste fest codiert. Wenn die Inline-Anzeige von PDF-Dateien unterstützt wird, listet die Eigenschaft fünf Standard-Plugins. Wenn die Inline-PDF-Anzeige nicht unterstützt wird, wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled), um festzustellen, ob die Inline-Anzeige von PDF-Dateien unterstützt wird. Schließen Sie dies nicht aus dieser Eigenschaft.
>
> Die "fünf Standard-Plugins" sind diejenigen, die Entwickler am häufigsten verwendet haben, um die Inline-PDF-Anzeige zu erkennen.
> Die Rückgabe dieser Plugins stellt sicher, dass Legacy-Code zuverlässiger bestimmen kann, ob die Inline-Anzeige unterstützt wird.
> Diese Vorgehensweise wird jedoch nicht für neuen Code empfohlen, da diese Eigenschaft möglicherweise entfernt wird.

Ältere Browserversionen listen auch Plugins für Adobe Flash und PDF-Viewer-Erweiterungen auf.

## Wert

`plugins` ist ein [`PluginArray`](/de/docs/Web/API/PluginArray)-Objekt, das verwendet wird, um auf [`Plugin`](/de/docs/Web/API/Plugin)-Objekte entweder nach Name oder als Liste von Elementen zuzugreifen.

Der zurückgegebene Wert ist kein JavaScript-Array, hat jedoch die `length`-Eigenschaft und unterstützt den Zugriff auf einzelne Elemente mithilfe der Klammernotation (`plugins[2]`) sowie über die Methoden `item(index)` und `namedItem("name")`.

Wenn die Inline-Anzeige von PDF-Dateien unterstützt wird, enthält dies Einträge für die folgenden Plugins:

- "PDF Viewer"
- "Chrome PDF Viewer"
- "Chromium PDF Viewer"
- "Microsoft Edge PDF Viewer"
- "WebKit built-in PDF"

Wenn die Inline-Anzeige von PDFs nicht unterstützt wird, wird ein leeres Objekt zurückgegeben.

## Beispiele

Dieser Code zeigt, wie überprüft wird, ob PDF-Dateien Inline angezeigt werden können:

```js
if ("PDF Viewer" in navigator.plugins) {
  // browser supports inline viewing of PDF files.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

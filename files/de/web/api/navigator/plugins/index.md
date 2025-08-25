---
title: "Navigator: plugins-Eigenschaft"
short-title: plugins
slug: Web/API/Navigator/plugins
l10n:
  sourceCommit: 9cbfa7fc0051724913e92958b712425db77291a8
---

{{APIRef("HTML DOM")}}

Gibt ein [`PluginArray`](/de/docs/Web/API/PluginArray)-Objekt zurück, das die [`Plugin`](/de/docs/Web/API/Plugin)-Objekte auflistet, die die in der Anwendung installierten Plugins beschreiben. Die benannten Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

Neuere Versionen der Spezifikation haben die zurückgegebene Liste fest kodiert. Wenn die Inline-Anzeige von PDF-Dateien unterstützt wird, listet die Eigenschaft fünf Standard-Plugins auf. Wenn die Inline-PDF-Anzeige nicht unterstützt wird, wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled), um festzustellen, ob die Inline-Anzeige von PDF-Dateien unterstützt wird. Leiten Sie dies nicht aus dieser Eigenschaft ab.
>
> Die "fünf Standard-Plugins" sind diejenigen, die Entwickler am häufigsten verwendet haben, um die Inline-PDF-Anzeige zu erkennen.
> Die Rückgabe dieser Plugins stellt sicher, dass Legacy-Code zuverlässiger feststellen kann, ob die Inline-Anzeige unterstützt wird.
> Diese Methode wird jedoch für neuen Code nicht empfohlen, da diese Eigenschaft möglicherweise irgendwann entfernt wird.

Legacy-Browserversionen listen auch Plugins für Adobe Flash und PDF-Viewer-Erweiterungen auf.

## Wert

`plugins` ist ein [`PluginArray`](/de/docs/Web/API/PluginArray)-Objekt, das verwendet wird, um auf [`Plugin`](/de/docs/Web/API/Plugin)-Objekte entweder nach Namen oder als Liste von Elementen zuzugreifen.

Der zurückgegebene Wert ist kein JavaScript-Array, hat jedoch die `length`-Eigenschaft und unterstützt den Zugriff auf einzelne Elemente mit der Klammernotation (`plugins[2]`) sowie über die Methoden `item(index)` und `namedItem("name")`.

Wenn die Inline-Anzeige von PDFs unterstützt wird, enthält dies Einträge für die folgenden Plugins:

- "PDF Viewer"
- "Chrome PDF Viewer"
- "Chromium PDF Viewer"
- "Microsoft Edge PDF Viewer"
- "WebKit built-in PDF"

Wenn die Inline-Anzeige von PDFs nicht unterstützt wird, wird ein leeres Objekt zurückgegeben.

## Beispiele

Dieser Code zeigt, wie überprüft werden kann, ob PDF-Dateien inline angezeigt werden können:

```js
if ("PDF Viewer" in navigator.plugins) {
  // browser supports inline viewing of PDF files.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

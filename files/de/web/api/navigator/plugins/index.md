---
title: "Navigator: plugins-Eigenschaft"
short-title: plugins
slug: Web/API/Navigator/plugins
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Gibt ein {{DOMxRef("PluginArray")}}-Objekt zurück, das die {{DOMxRef("Plugin")}}-Objekte auflistet, die die im Anwendungsprogramm installierten Plugins beschreiben. Die benannten Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

Neuere Versionen der Spezifikation kodieren die zurückgegebene Liste fest. Wenn die Inline-Anzeige von PDF-Dateien unterstützt wird, listet die Eigenschaft fünf Standard-Plugins auf. Wenn die Inline-Anzeige von PDF-Dateien nicht unterstützt wird, wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie {{domxref("Navigator.pdfViewerEnabled")}}, um festzustellen, ob die Inline-Anzeige von PDF-Dateien unterstützt wird. Schließen Sie dies nicht aus dieser Eigenschaft.
>
> Die "fünf Standard-Plugins" sind diejenigen, die Entwickler am häufigsten verwendet haben, um die Inline-Anzeige von PDF-Dateien zu erkennen. Das Zurückgeben dieser Plugins stellt sicher, dass Legacy-Code zuverlässiger bestimmen kann, ob die Inline-Anzeige unterstützt wird. Diese Vorgehensweise wird jedoch für neuen Code nicht empfohlen, da diese Eigenschaft möglicherweise irgendwann entfernt wird.

Alte Browserversionen listen auch Plugins für Adobe Flash und PDF-Anzeigeerweiterungen auf.

## Wert

`plugins` ist ein {{DOMxRef("PluginArray")}}-Objekt, das verwendet wird, um auf {{DOMxRef("Plugin")}}-Objekte entweder nach Name oder als Liste von Elementen zuzugreifen.

Der zurückgegebene Wert ist kein JavaScript-Array, hat jedoch die `length`-Eigenschaft und unterstützt den Zugriff auf einzelne Elemente über die Klammernotation (`plugins[2]`), sowie über die Methoden `item(index)` und `namedItem("name")`.

Wenn die Inline-Anzeige von PDFs unterstützt wird, enthält diese Liste Einträge für die folgenden Plugins:

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

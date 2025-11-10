---
title: Vollbild-Zoom
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Vollbild-Zoom (oder einfach fullZoom) ist ein neues Feature in [Firefox 3](/de/docs/Mozilla/Firefox/Releases/3).

### Beispiel (XUL:browser)

Das folgende Beispiel zeigt die Verwendung für das aktuell fokussierte Browserfenster. Dies ist die typische Anwendung für eine Firefox-Erweiterung.

```js
var zoom = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser);
ZoomManager.enlarge();
ZoomManager.setZoomForBrowser(gBrowser.selectedBrowser, ZoomManager.MIN);
```

### Beispiel (XUL:iframe)

Hinweis: Dies ist wahrscheinlich veraltet.

Sie können das fullZoom-Feature auch für ein `<XUL:iframe>` verwenden. Da ein iframe jedoch keine markupDocumentViewer-Eigenschaft hat, müssen wir diese zuerst besorgen:

```js
var zoom = 1.5;
var iframe = document.getElementById("authorFrame");
var contViewer = iframe.docShell.contentViewer;
var docViewer = contViewer.QueryInterface(
  Components.interfaces.nsIMarkupDocumentViewer,
);
docViewer.fullZoom = zoom;
```

### Referenzen

- Seitenerweiterung von Ted Mielczarek [fullpagezoom.xpi](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) für die neuesten Firefox 3.0 Nightlies
- Der [Bugzilla-Bug](https://bugzil.la/4821) über fullZoom.
- `nsIMarkupDocumentViewer` Schnittstellendokumentation.

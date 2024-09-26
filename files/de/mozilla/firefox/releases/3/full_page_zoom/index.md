---
title: Vollständiges Seitenzoom
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
l10n:
  sourceCommit: 19f950a288d2da4738ce2855083e87f1d541de2a
---

{{FirefoxSidebar}}

Vollständiges Seitenzoom (oder einfach fullZoom) ist eine neue Funktion in [Firefox 3](/de/docs/Mozilla/Firefox/Releases/3).

### Beispiel (XUL:browser)

Das folgende Beispiel demonstriert die Verwendung für das aktuell fokussierte Browserfenster. Dies ist die typische Verwendung für eine Firefox-Erweiterung.

```js
var zoom = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser);
ZoomManager.enlarge();
ZoomManager.setZoomForBrowser(gBrowser.selectedBrowser, ZoomManager.MIN);
```

### Beispiel (XUL:iframe)

Hinweis: Dies ist wahrscheinlich veraltet.

Sie können die fullZoom-Funktion auch für ein `<XUL:iframe>` verwenden. Da ein iframe jedoch keine MarkupDocumentViewer-Eigenschaft hat, müssen wir diese zuerst abrufen:

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

- Seiten-Zoom-Erweiterung von Ted Mielczarek [fullpagezoom.xpi](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) für die neuesten Firefox 3.0 Nightlies
- Der [Bugzilla-Bug](https://bugzil.la/4821) über fullZoom.
- `nsIMarkupDocumentViewer` Schnittstellendokumentation.
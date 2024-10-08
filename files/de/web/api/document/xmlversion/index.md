---
title: "Document: xmlVersion-Eigenschaft"
short-title: xmlVersion
slug: Web/API/Document/xmlVersion
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}{{deprecated_header}}

Gibt die Versionsnummer zurück, wie sie in der XML-Deklaration angegeben ist (z.B., `<?xml version="1.0"?>`) oder "1.0", falls die Deklaration fehlt.

Dieses Attribut war nie wirklich nützlich, da es immer 1.0 zurückgab und wurde in DOM Level 4 entfernt. In Firefox 10 ist es daher nicht mehr implementiert. Sein hauptsächlicher früherer Nutzen bestand darin zu erkennen, ob das Dokument als XML anstelle von HTML gerendert wurde. Um dies zu erkennen, können Sie ein Element mit seinem Namen in Kleinbuchstaben erstellen und dann prüfen, ob es in Großbuchstaben konvertiert wird (in diesem Fall befindet sich das Dokument im nicht-XML HTML-Modus):

```js
if (document.createElement("foo").tagName === "FOO") {
  /* Document is not XML */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "Dokument: xmlVersion-Eigenschaft"
short-title: xmlVersion
slug: Web/API/Document/xmlVersion
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Gibt die Versionsnummer zurück, wie sie in der XML-Deklaration angegeben ist (z.B., `<?xml version="1.0"?>`) oder "1.0", wenn die Deklaration fehlt.

Dieses Attribut war nie wirklich nützlich, da es immer 1.0 zurückgab und wurde in DOM Level 4 entfernt. Daher wird es in Firefox 10 nicht mehr implementiert. Sein primärer Nutzen in der Vergangenheit bestand darin zu erkennen, ob das Dokument als XML und nicht als HTML gerendert wird. Um dies zu erkennen, können Sie ein Element mit einem Namen in Kleinbuchstaben erstellen und dann prüfen, ob es in Großbuchstaben umgewandelt wird (in diesem Fall befindet sich das Dokument im nicht-XML HTML-Modus):

```js
if (document.createElement("foo").tagName === "FOO") {
  /* Document is not XML */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

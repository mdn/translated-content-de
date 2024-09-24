---
title: "Dokument: xmlVersion-Eigenschaft"
short-title: xmlVersion
slug: Web/API/Document/xmlVersion
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}{{deprecated_header}}

Gibt die Versionsnummer entsprechend der XML-Deklaration zurück (z. B. `<?xml version="1.0"?>`) oder "1.0", wenn die Deklaration fehlt.

Dieses Attribut war nie wirklich nützlich, da es immer 1.0 zurückgab und wurde in DOM Level 4 entfernt. Daher wird es seit Firefox 10 nicht mehr implementiert. Sein früherer Hauptzweck bestand darin, festzustellen, ob das Dokument als XML statt als HTML gerendert wurde. Um dies zu erkennen, können Sie ein Element mit kleingeschriebenem Namen erstellen und überprüfen, ob es in Großbuchstaben umgewandelt wird (in diesem Fall befindet sich das Dokument im non-XML HTML-Modus):

```js
if (document.createElement("foo").tagName === "FOO") {
  /* Dokument ist nicht XML */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

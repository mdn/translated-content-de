---
title: "Dokument: lastModified-Eigenschaft"
short-title: lastModified
slug: Web/API/Document/lastModified
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("DOM")}}

Die **`lastModified`**-Eigenschaft des {{domxref("Document")}}-Interfaces gibt einen String zurück, der das Datum und die lokale Uhrzeit enthält, zu der das aktuelle Dokument zuletzt geändert wurde.

## Wert

Ein String.

## Beispiele

### Einfache Verwendung

Dieses Beispiel zeigt den Wert von `lastModified` an.

```js
alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42
```

### Umwandlung von lastModified in ein Date-Objekt

Dieses Beispiel wandelt `lastModified` in ein {{jsxref("Date")}}-Objekt um.

```js
let oLastModif = new Date(document.lastModified);
```

### Umwandlung von lastModified in Millisekunden

Dieses Beispiel wandelt `lastModified` in die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00, Ortszeit um.

```js
let nLastModif = Date.parse(document.lastModified);
```

## Hinweise

Beachten Sie, dass `lastModified` als String _nicht einfach_ verwendet werden kann, um die Änderungsdaten von Dokumenten zu vergleichen. Hier ist ein mögliches Beispiel dafür, wie eine Benachrichtigung angezeigt wird, wenn sich die Seite verändert (siehe auch: [JavaScript-Cookies-API](/de/docs/Web/API/Document/cookie)):

```js
// Match 'timestamp' in 'last_modif=timestamp'
// e.g. '1687964614822' in 'last_modif=1687964614822'
const pattern = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;
  alert("This page has changed!");
}
```

... dasselbe Beispiel, aber ohne die erste Seite zu besuchen:

```js
const pattern = /last_modif\s*=\s*([^;]*)/;

const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;

  if (isFinite(lastVisit)) {
    alert("This page has been changed!");
  }
}
```

Wenn Sie wissen möchten, ob eine _externe_ Seite geändert wurde, können Sie eine {{HTTPMethod("HEAD")}}-Anfrage mit der {{domxref("Window/fetch", "fetch()")}}-API stellen und den {{HTTPHeader("Last-Modified")}}-Antwortheader prüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "Document: lastModified-Eigenschaft"
short-title: lastModified
slug: Web/API/Document/lastModified
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("DOM")}}

Die **`lastModified`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt einen String zurück, der das Datum und die lokale Uhrzeit enthält, zu der das aktuelle Dokument zuletzt geändert wurde.

## Wert

Ein String.

## Beispiele

### Einfache Anwendung

Dieses Beispiel zeigt einen Hinweis mit dem Wert von `lastModified` an.

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

Dieses Beispiel wandelt `lastModified` in die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00, lokale Zeit, um.

```js
let nLastModif = Date.parse(document.lastModified);
```

## Hinweise

Beachten Sie, dass `lastModified` als String nicht _einfach_ für den Vergleich der Änderungsdaten von Dokumenten verwendet werden kann. Hier ist ein mögliches Beispiel, wie eine Hinweisnachricht angezeigt werden kann, wenn sich die Seite ändert (siehe auch: [JavaScript-Cookies-API](/de/docs/Web/API/Document/cookie)):

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

...das gleiche Beispiel, aber beim ersten Besuch ignoriert:

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

Wenn Sie wissen möchten, ob sich eine _externe_ Seite geändert hat, können Sie eine {{HTTPMethod("HEAD")}}-Anfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API stellen und den {{HTTPHeader("Last-Modified")}}-Antwortheader überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

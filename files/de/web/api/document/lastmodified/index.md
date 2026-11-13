---
title: "Document: lastModified-Eigenschaft"
short-title: lastModified
slug: Web/API/Document/lastModified
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`lastModified`** der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt einen String mit dem Datum und der lokalen Uhrzeit zurück, zu der das aktuelle Dokument zuletzt geändert wurde.

## Wert

Ein String.

## Beispiele

### Einfache Verwendung

Dieses Beispiel zeigt den Wert von `lastModified` in einem Hinweisfenster an.

```js
alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42
```

### lastModified in ein Date-Objekt umwandeln

Dieses Beispiel wandelt `lastModified` in ein {{jsxref("Date")}}-Objekt um.

```js
let oLastModif = new Date(document.lastModified);
```

### lastModified in Millisekunden umwandeln

Dieses Beispiel wandelt `lastModified` in die Anzahl der Millisekunden seit dem 1. Januar 1970, 00:00:00 Uhr Ortszeit, um.

```js
let nLastModif = Date.parse(document.lastModified);
```

## Hinweise

Beachten Sie, dass `lastModified` als String _nicht ohne Weiteres_ zum Vergleichen der Änderungsdaten von Dokumenten verwendet werden kann. Das folgende Beispiel zeigt, wie Sie eine Meldung anzeigen können, wenn sich die Seite ändert (siehe auch: [JavaScript-Cookies-API](/de/docs/Web/API/Document/cookie)):

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

…dasselbe Beispiel, aber ohne Meldung beim ersten Besuch:

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

Wenn Sie wissen möchten, ob sich eine _externe_ Seite geändert hat, können Sie mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API eine {{HTTPMethod("HEAD")}}-Anfrage senden und den {{HTTPHeader("Last-Modified")}}-Antwort-Header prüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

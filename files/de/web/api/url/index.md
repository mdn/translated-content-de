---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 88ec096ac35386218934a5c0f6d03c9dece5017f
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Das **`URL`**-Interface wird verwendet, um {{Glossary("URL", "URLs")}} zu parsen, zu konstruieren, zu normalisieren und zu kodieren. Es bietet Eigenschaften, die es Ihnen ermöglichen, die Komponenten einer URL einfach zu lesen und zu ändern.

Normalerweise erstellen Sie ein neues `URL`-Objekt, indem Sie die URL als Zeichenkette beim Aufruf des Konstruktors angeben oder eine relative URL und eine Basis-URL bereitstellen. Sie können dann die analysierten Komponenten der URL einfach lesen oder Änderungen an der URL vornehmen.

## Konstruktor

- [`URL()`](/de/docs/Web/API/URL/URL)
  - : Erstellt und gibt ein `URL`-Objekt aus einer URL-Zeichenkette und optionaler Basis-URL-Zeichenkette zurück.
    Wirft eine Ausnahme, wenn die übergebenen Argumente keine gültige URL definieren.

## Instanz-Eigenschaften

- [`hash`](/de/docs/Web/API/URL/hash)
  - : Eine Zeichenkette, die ein `'#'` gefolgt vom Fragment-Bezeichner der URL enthält.
- [`host`](/de/docs/Web/API/URL/host)
  - : Eine Zeichenkette, die die Domäne (das heißt den _hostname_) enthält, gefolgt von (wenn ein Port angegeben wurde) einem `':'` und dem _port_ der URL.
- [`hostname`](/de/docs/Web/API/URL/hostname)
  - : Eine Zeichenkette, die die Domäne der URL enthält.
- [`href`](/de/docs/Web/API/URL/href)
  - : Ein {{Glossary("stringifier", "stringifier")}}, der eine Zeichenkette, die die gesamte URL enthält, zurückgibt.
- [`origin`](/de/docs/Web/API/URL/origin) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Ursprung der URL enthält, das heißt ihr Schema, ihre Domäne und ihren Port.
- [`password`](/de/docs/Web/API/URL/password)
  - : Eine Zeichenkette, die das vor dem Domänennamen angegebene Passwort enthält.
- [`pathname`](/de/docs/Web/API/URL/pathname)
  - : Eine Zeichenkette, die ein anfängliches `'/'` gefolgt vom Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- [`port`](/de/docs/Web/API/URL/port)
  - : Eine Zeichenkette, die die Portnummer der URL enthält.
- [`protocol`](/de/docs/Web/API/URL/protocol)
  - : Eine Zeichenkette, die das Protokollschema der URL enthält, einschließlich dem abschließenden `':'`.
- [`search`](/de/docs/Web/API/URL/search)
  - : Eine Zeichenkette, die die Parameterzeichenfolge der URL anzeigt; wenn Parameter angegeben sind, enthält diese Zeichenkette alle von ihnen, beginnend mit dem führenden `?`-Zeichen.
- [`searchParams`](/de/docs/Web/API/URL/searchParams) {{ReadOnlyInline}}
  - : Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das verwendet werden kann, um auf die einzelnen Abfrageparameter in `search` zuzugreifen.
- [`username`](/de/docs/Web/API/URL/username)
  - : Eine Zeichenkette, die den vor dem Domänennamen angegebenen Benutzernamen enthält.

## Statische Methoden

- [`canParse()`](/de/docs/Web/API/URL/canParse_static)
  - : Gibt einen Booleschen Wert zurück, der angibt, ob eine aus einer URL-Zeichenkette und optionaler Basis-URL-Zeichenkette definierte URL parsbar und gültig ist.
- [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Gibt eine Zeichenkette zurück, die eine eindeutige Blob-URL enthält, das heißt eine URL mit `blob:` als Schema, gefolgt von einer undurchsichtigen Zeichenkette, die das Objekt im Browser eindeutig identifiziert.
- [`parse()`](/de/docs/Web/API/URL/parse_static)
  - : Erstellt und gibt ein `URL`-Objekt aus einer URL-Zeichenkette und optionaler Basis-URL-Zeichenkette zurück oder gibt `null` zurück, wenn die übergebenen Parameter eine ungültige `URL` definieren.
- [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Widerruft eine zuvor mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellte Objekt-URL.

## Instanz-Methoden

- [`toString()`](/de/docs/Web/API/URL/toString)
  - : Gibt eine Zeichenkette zurück, die die gesamte URL enthält. Es ist ein Synonym für [`URL.href`](/de/docs/Web/API/URL/href), obwohl es nicht verwendet werden kann, um den Wert zu ändern.
- [`toJSON()`](/de/docs/Web/API/URL/toJSON)
  - : Gibt eine Zeichenkette zurück, die die gesamte URL enthält. Es gibt die gleiche Zeichenkette wie die `href`-Eigenschaft zurück.

## Nutzungshinweise

Der Konstruktor nimmt einen `url`-Parameter und einen optionalen `base`-Parameter, der als Basis verwendet wird, wenn der `url`-Parameter eine relative URL ist.

Beachten Sie, dass im folgenden Fall "dogs" das Dateinamen-Segment ist (weil es keinen abschließenden Schrägstrich hat) und dass die relative URL "cats" relativ zum _Verzeichnis_-Teil der Basis-URL interpretiert wird, die `http://www.example.com/animals/` ist. Weitere Informationen finden Sie unter [Relative Referenzen zu einer URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references).

```js
const url = new URL("cats", "http://www.example.com/animals/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/animals/cats"
```

Der Konstruktor wird eine Ausnahme auslösen, wenn die URL nicht in eine gültige URL geparst werden kann. Sie können entweder den obigen Code in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block aufrufen oder die [`canParse()`](/de/docs/Web/API/URL/canParse_static) statische Methode verwenden, um zuerst zu überprüfen, ob die URL gültig ist:

```js
if (URL.canParse("cats", "http://www.example.com/animals/dogs")) {
  const url = new URL("cats", "http://www.example.com/animals/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/animals/cats"
} else {
  console.log("Invalid URL");
}
```

URL-Eigenschaften können gesetzt werden, um die URL zu konstruieren:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/animals/cats#tabby"
```

URLs werden gemäß den in {{RFC(3986)}} beschriebenen Regeln kodiert. Zum Beispiel:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

Das [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Interface kann verwendet werden, um die Abfragezeichenfolge der URL zu erstellen und zu manipulieren.

Um die Suchparameter von der aktuellen Fenster-URL abzurufen, können Sie Folgendes tun:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Die [`toString()`](/de/docs/Web/API/URL/toString)-Methode von `URL` gibt einfach den Wert der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft zurück, sodass der Konstruktor verwendet werden kann, um eine URL direkt zu normalisieren und zu kodieren.

```js
const response = await fetch(
  new URL("http://www.example.com/démonstration.html"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/de/docs/Web/API/URL_API)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams).

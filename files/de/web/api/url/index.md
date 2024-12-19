---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Das **`URL`** Interface wird verwendet, um {{Glossary("URL", "URLs")}} zu parsen, zu konstruieren, zu normalisieren und zu kodieren. Es funktioniert, indem es Eigenschaften bereitstellt, die es ermöglichen, die Komponenten einer URL einfach zu lesen und zu ändern.

Normalerweise erstellen Sie ein neues `URL`-Objekt, indem Sie die URL als String beim Aufrufen des Konstruktors angeben oder indem Sie eine relative URL und eine Basis-URL bereitstellen. Sie können dann die geparsten Komponenten der URL einfach lesen oder Änderungen an der URL vornehmen.

## Konstruktor

- [`URL()`](/de/docs/Web/API/URL/URL)
  - : Erstellt und gibt ein `URL` Objekt aus einem URL-String und optionalem Basis-URL-String zurück. 
    Wirft eine Ausnahme, wenn die übergebenen Argumente keine gültige URL definieren.

## Instanz-Eigenschaften

- [`hash`](/de/docs/Web/API/URL/hash)
  - : Ein String, der ein `'#'` gefolgt vom Fragment-Identifier der URL enthält.
- [`host`](/de/docs/Web/API/URL/host)
  - : Ein String, der die Domain (das ist der _Hostname_) gefolgt von (falls ein Port angegeben wurde) einem `':'` und dem _Port_ der URL enthält.
- [`hostname`](/de/docs/Web/API/URL/hostname)
  - : Ein String, der die Domain der URL enthält.
- [`href`](/de/docs/Web/API/URL/href)
  - : Ein {{Glossary("stringifier", "Stringifier")}}, der einen String enthält, der die gesamte URL darstellt.
- [`origin`](/de/docs/Web/API/URL/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, das heißt ihr Schema, ihre Domain und ihren Port.
- [`password`](/de/docs/Web/API/URL/password)
  - : Ein String, der das Passwort enthält, das vor dem Domainnamen angegeben ist.
- [`pathname`](/de/docs/Web/API/URL/pathname)
  - : Ein String, der ein anfängliches `'/'` gefolgt vom Pfad der URL enthält, ohne den Query-String oder das Fragment.
- [`port`](/de/docs/Web/API/URL/port)
  - : Ein String, der die Portnummer der URL enthält.
- [`protocol`](/de/docs/Web/API/URL/protocol)
  - : Ein String, der das Protokollschema der URL enthält, einschließlich dem abschließenden `':'`.
- [`search`](/de/docs/Web/API/URL/search)
  - : Ein String, der die Parameterzeichenkette der URL angibt; falls Parameter vorhanden sind, enthält dieser String alle mit dem führenden `?` Zeichen beginnend.
- [`searchParams`](/de/docs/Web/API/URL/searchParams) {{ReadOnlyInline}}
  - : Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt, das verwendet werden kann, um auf die einzelnen Abfrageparameter in `search` zuzugreifen.
- [`username`](/de/docs/Web/API/URL/username)
  - : Ein String, der den Benutzernamen enthält, der vor dem Domainnamen angegeben ist.

## Statische Methoden

- [`canParse()`](/de/docs/Web/API/URL/canParse_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob eine aus einem URL-String und optionalem Basis-URL-String definierte URL analysiert und gültig ist.
- [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Gibt einen String zurück, der eine eindeutige Blob-URL enthält, das heißt, eine URL mit `blob:` als Schema, gefolgt von einem undurchsichtigen String, der das Objekt im Browser eindeutig identifiziert.
- [`parse()`](/de/docs/Web/API/URL/parse_static)
  - : Erstellt und gibt ein `URL` Objekt aus einem URL-String und optionalem Basis-URL-String zurück oder gibt `null` zurück, wenn die übergebenen Parameter eine ungültige `URL` definieren.
- [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Widerruft eine zuvor mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellte Objekt-URL.

## Instanz-Methoden

- [`toString()`](/de/docs/Web/API/URL/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`URL.href`](/de/docs/Web/API/URL/href), obwohl der Wert damit nicht geändert werden kann.
- [`toJSON()`](/de/docs/Web/API/URL/toJSON)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es gibt denselben String zurück wie die `href` Eigenschaft.

## Verwendungshinweise

Der Konstruktor nimmt einen `url`-Parameter und einen optionalen `base`-Parameter, der als Basis verwendet wird, wenn der `url`-Parameter eine relative URL ist:

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

Der Konstruktor wird eine Ausnahme auslösen, wenn die URL nicht in eine gültige URL geparst werden kann. Sie können den obigen Code entweder in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block aufrufen oder die [`canParse()`](/de/docs/Web/API/URL/canParse_static) statische Methode verwenden, um zuerst zu überprüfen, ob die URL gültig ist:

```js
if (URL.canParse("../cats", "http://www.example.com/dogs")) {
  const url = new URL("../cats", "http://www.example.com/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/cats"
} else {
  console.log("Invalid URL"); //Invalid URL
}
```

URL-Eigenschaften können gesetzt werden, um die URL zu konstruieren:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URLs werden gemäß den in {{RFC(3986)}} gefundenen Regeln kodiert. Zum Beispiel:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

Das [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Interface kann verwendet werden, um die Abfragezeichenfolge der URL zu erstellen und zu manipulieren.

Um die Suchparameter der URL des aktuellen Fensters zu erhalten, können Sie dies tun:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Die [`toString()`](/de/docs/Web/API/URL/toString) Methode von `URL` gibt einfach den Wert der [`href`](/de/docs/Web/API/URL/href) Eigenschaft zurück, sodass der Konstruktor direkt verwendet werden kann, um eine URL zu normalisieren und zu kodieren.

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

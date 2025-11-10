---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URL`**-Schnittstelle wird verwendet, um {{Glossary("URL", "URLs")}} zu analysieren, zu konstruieren, zu normalisieren und zu kodieren. Sie bietet Eigenschaften, die es Ihnen ermöglichen, die Komponenten einer URL einfach zu lesen und zu ändern.

In der Regel erstellen Sie ein neues `URL`-Objekt, indem Sie die URL als Zeichenfolge beim Aufruf des Konstruktors angeben oder eine relative URL und eine Basis-URL bereitstellen. Sie können dann die analysierten Komponenten der URL einfach lesen oder Änderungen an der URL vornehmen.

## Konstruktor

- [`URL()`](/de/docs/Web/API/URL/URL)
  - : Erstellt und gibt ein `URL`-Objekt aus einer URL-Zeichenfolge und optionaler Basis-URL-Zeichenfolge zurück. Gibt einen Fehler aus, wenn die übergebenen Argumente keine gültige URL definieren.

## Instanz-Eigenschaften

- [`hash`](/de/docs/Web/API/URL/hash)
  - : Eine Zeichenfolge, die ein `'#'` enthält, gefolgt von dem Fragmentbezeichner der URL.
- [`host`](/de/docs/Web/API/URL/host)
  - : Eine Zeichenfolge, die die Domain (das ist der _Hostname_) enthält, gefolgt von (falls angegeben) einem `':'` und dem _Port_ der URL.
- [`hostname`](/de/docs/Web/API/URL/hostname)
  - : Eine Zeichenfolge, die die Domain der URL enthält.
- [`href`](/de/docs/Web/API/URL/href)
  - : Ein {{Glossary("stringifier", "stringifier")}}, der eine Zeichenfolge mit der gesamten URL zurückgibt.
- [`origin`](/de/docs/Web/API/URL/origin) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Ursprung der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`password`](/de/docs/Web/API/URL/password)
  - : Eine Zeichenfolge, die das Passwort enthält, das vor dem Domainnamen angegeben ist.
- [`pathname`](/de/docs/Web/API/URL/pathname)
  - : Eine Zeichenfolge, die ein anfängliches `'/'` enthält, gefolgt vom Pfad der URL, ohne Abfragezeichenfolge oder Fragment.
- [`port`](/de/docs/Web/API/URL/port)
  - : Eine Zeichenfolge, die die Portnummer der URL enthält.
- [`protocol`](/de/docs/Web/API/URL/protocol)
  - : Eine Zeichenfolge, die das Protokollschema der URL enthält, einschließlich des abschließenden `':'`.
- [`search`](/de/docs/Web/API/URL/search)
  - : Eine Zeichenfolge, die die Parameterzeichenfolge der URL anzeigt; wenn Parameter angegeben sind, enthält diese Zeichenfolge alle, beginnend mit dem führenden `?`-Zeichen.
- [`searchParams`](/de/docs/Web/API/URL/searchParams) {{ReadOnlyInline}}
  - : Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das verwendet werden kann, um auf die einzelnen Abfrageparameter in `search` zuzugreifen.
- [`username`](/de/docs/Web/API/URL/username)
  - : Eine Zeichenfolge, die den Benutzernamen enthält, der vor dem Domainnamen angegeben ist.

## Statische Methoden

- [`canParse()`](/de/docs/Web/API/URL/canParse_static)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob eine URL, die aus einer URL-Zeichenfolge und optionaler Basis-URL-Zeichenfolge definiert ist, analysierbar und gültig ist.
- [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Gibt eine Zeichenfolge zurück, die eine eindeutige Blob-URL enthält, das ist eine URL mit `blob:` als Schema, gefolgt von einer undurchsichtigen Zeichenfolge, die das Objekt im Browser eindeutig identifiziert.
- [`parse()`](/de/docs/Web/API/URL/parse_static)
  - : Erstellt und gibt ein `URL`-Objekt aus einer URL-Zeichenfolge und optionaler Basis-URL-Zeichenfolge zurück oder gibt `null` zurück, wenn die übergebenen Parameter eine ungültige `URL` definieren.
- [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Hebt eine zuvor mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellte Objekt-URL auf.

## Instanz-Methoden

- [`toString()`](/de/docs/Web/API/URL/toString)
  - : Gibt eine Zeichenfolge mit der gesamten URL zurück. Es ist ein Synonym für [`URL.href`](/de/docs/Web/API/URL/href), kann jedoch nicht zur Änderung des Wertes verwendet werden.
- [`toJSON()`](/de/docs/Web/API/URL/toJSON)
  - : Gibt eine Zeichenfolge mit der gesamten URL zurück. Es gibt die gleiche Zeichenfolge zurück wie die `href`-Eigenschaft.

## Nutzungshinweise

Der Konstruktor nimmt einen `url`-Parameter sowie einen optionalen `base`-Parameter an, um als Basis zu dienen, wenn der `url`-Parameter eine relative URL ist:

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

Der Konstruktor wird eine Ausnahme auslösen, wenn die URL nicht als gültige URL analysiert werden kann. Sie können entweder den obigen Code in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block aufrufen oder die [`canParse()`](/de/docs/Web/API/URL/canParse_static) statische Methode verwenden, um zuerst zu überprüfen, ob die URL gültig ist:

```js
if (URL.canParse("../cats", "http://www.example.com/dogs")) {
  const url = new URL("../cats", "http://www.example.com/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/cats"
} else {
  console.log("Invalid URL");
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

Die [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Schnittstelle kann verwendet werden, um die URL-Abfragezeichenfolge zu erstellen und zu manipulieren.

Um die Suchparameter der URL des aktuellen Fensters zu erhalten, können Sie Folgendes tun:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Die [`toString()`](/de/docs/Web/API/URL/toString)-Methode von `URL` gibt einfach den Wert der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft zurück, sodass der Konstruktor direkt zum Normalisieren und Kodieren einer URL verwendet werden kann.

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

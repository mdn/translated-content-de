---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Das **`URL`**-Interface wird verwendet, um {{Glossary("URL", "URLs")}} zu parsen, zu erstellen, zu normalisieren und zu kodieren. Es stellt Eigenschaften bereit, die es Ihnen ermöglichen, die Komponenten einer URL leicht zu lesen und zu ändern.

Normalerweise erstellen Sie ein neues `URL`-Objekt, indem Sie die URL als Zeichenkette beim Aufruf des Konstruktors angeben oder indem Sie eine relative URL und eine Basis-URL bereitstellen. Sie können dann die geparsten Komponenten der URL einfach lesen oder Änderungen an der URL vornehmen.

## Konstruktor

- [`URL()`](/de/docs/Web/API/URL/URL)
  - : Erstellt und gibt ein `URL`-Objekt aus einer URL-Zeichenkette und optionaler Basis-URL-Zeichenkette zurück. Löst eine Ausnahme aus, wenn die übergebenen Argumente keine gültige URL definieren.

## Instanz-Eigenschaften

- [`hash`](/de/docs/Web/API/URL/hash)
  - : Eine Zeichenkette, die ein `'#'` gefolgt vom Fragmentbezeichner der URL enthält.
- [`host`](/de/docs/Web/API/URL/host)
  - : Eine Zeichenkette, die die Domain (also der _Hostname_) gefolgt von (falls ein Port angegeben wurde) einem `':'` und dem _Port_ der URL enthält.
- [`hostname`](/de/docs/Web/API/URL/hostname)
  - : Eine Zeichenkette, die die Domain der URL enthält.
- [`href`](/de/docs/Web/API/URL/href)
  - : Ein {{Glossary("stringifier", "stringifier")}}, der eine Zeichenkette zurückgibt, die die gesamte URL enthält.
- [`origin`](/de/docs/Web/API/URL/origin) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Ursprung der URL enthält, d. h. ihr Schema, ihre Domain und ihren Port.
- [`password`](/de/docs/Web/API/URL/password)
  - : Eine Zeichenkette, die das vor dem Domainnamen angegebene Passwort enthält.
- [`pathname`](/de/docs/Web/API/URL/pathname)
  - : Eine Zeichenkette, die ein anfängliches `'/'`, gefolgt vom Pfad der URL, nicht einschließlich der Abfragezeichenfolge oder des Fragments enthält.
- [`port`](/de/docs/Web/API/URL/port)
  - : Eine Zeichenkette, die die Portnummer der URL enthält.
- [`protocol`](/de/docs/Web/API/URL/protocol)
  - : Eine Zeichenkette, die das Protokollschema der URL enthält, einschließlich des abschließenden `':'`.
- [`search`](/de/docs/Web/API/URL/search)
  - : Eine Zeichenkette, die die Parameterzeichenfolge der URL angibt; wenn Parameter angegeben sind, enthält diese Zeichenkette alle, beginnend mit dem führenden `?`-Zeichen.
- [`searchParams`](/de/docs/Web/API/URL/searchParams) {{ReadOnlyInline}}
  - : Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, mit dem die einzelnen in `search` gefundenen Abfrageparameter zugegriffen werden kann.
- [`username`](/de/docs/Web/API/URL/username)
  - : Eine Zeichenkette, die den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Statische Methoden

- [`canParse()`](/de/docs/Web/API/URL/canParse_static)
  - : Gibt einen Booleschen Wert zurück, der angibt, ob eine aus einer URL-Zeichenkette und optionaler Basis-URL-Zeichenkette definierte URL parsebar und gültig ist.
- [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Gibt eine Zeichenkette zurück, die eine eindeutige Blob-URL enthält, d. h. eine URL mit `blob:` als Schema, gefolgt von einer undurchsichtigen Zeichenkette, die das Objekt im Browser eindeutig identifiziert.
- [`parse()`](/de/docs/Web/API/URL/parse_static)
  - : Erstellt und gibt ein `URL`-Objekt aus einer URL-Zeichenkette und optionaler Basis-URL-Zeichenkette zurück oder gibt `null` zurück, wenn die übergebenen Parameter eine ungültige `URL` definieren.
- [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Hebt eine zuvor mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellte Objekt-URL auf.

## Instanz-Methoden

- [`toString()`](/de/docs/Web/API/URL/toString)
  - : Gibt eine Zeichenkette zurück, die die gesamte URL enthält. Es ist ein Synonym für [`URL.href`](/de/docs/Web/API/URL/href), obwohl es nicht verwendet werden kann, um den Wert zu ändern.
- [`toJSON()`](/de/docs/Web/API/URL/toJSON)
  - : Gibt eine Zeichenkette zurück, die die gesamte URL enthält. Es gibt die gleiche Zeichenkette zurück wie die `href`-Eigenschaft.

## Hinweise zur Verwendung

Der Konstruktor nimmt einen `url`-Parameter und einen optionalen `base`-Parameter, der als Basis verwendet wird, wenn der `url`-Parameter eine relative URL ist:

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

Der Konstruktor wird eine Ausnahme auslösen, wenn die URL nicht zu einer gültigen URL geparst werden kann. Sie können den obigen Code entweder in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block aufrufen oder die statische Methode [`canParse()`](/de/docs/Web/API/URL/canParse_static) verwenden, um zuerst zu prüfen, ob die URL gültig ist:

```js
if (URL.canParse("../cats", "http://www.example.com/dogs")) {
  const url = new URL("../cats", "http://www.example.com/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/cats"
} else {
  console.log("Invalid URL"); //Invalid URL
}
```

URL-Eigenschaften können festgelegt werden, um die URL zu erstellen:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URLs werden gemäß den Regeln in {{RFC(3986)}} kodiert. Zum Beispiel:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

Das [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Interface kann verwendet werden, um die Abfragezeichenfolge der URL zu erstellen und zu manipulieren.

Um die Suchparameter der aktuellen Fenster-URL zu erhalten, können Sie dies tun:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Die [`toString()`](/de/docs/Web/API/URL/toString)-Methode von `URL` gibt nur den Wert der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft zurück, sodass der Konstruktor direkt verwendet werden kann, um eine URL zu normalisieren und zu kodieren.

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
- [URL-API](/de/docs/Web/API/URL_API)
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams).

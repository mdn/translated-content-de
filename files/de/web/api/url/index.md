---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Das **`URL`** Interface wird verwendet, um [URLs](/de/docs/Glossary/URL) zu analysieren, zu konstruieren, zu normalisieren und zu kodieren. Es bietet Eigenschaften, die es Ihnen ermöglichen, die Komponenten einer URL einfach zu lesen und zu modifizieren.

Normalerweise erstellen Sie ein neues `URL`-Objekt, indem Sie die URL als String beim Aufruf des Konstruktors angeben oder eine relative URL und eine Basis-URL bereitstellen. Sie können dann die analysierten Komponenten der URL leicht lesen oder Änderungen an der URL vornehmen.

## Konstruktor

- [`URL()`](/de/docs/Web/API/URL/URL)
  - : Erstellt und gibt ein `URL`-Objekt aus einem URL-String und optionalem Basis-URL-String zurück. Wirft eine Ausnahme, wenn die übergebenen Argumente keine gültige URL definieren.

## Instanzeigenschaften

- [`hash`](/de/docs/Web/API/URL/hash)
  - : Ein String, der eine `'#'` gefolgt von dem Fragmentbezeichner der URL enthält.
- [`host`](/de/docs/Web/API/URL/host)
  - : Ein String, der die Domain (das ist der _Hostname_) enthält, gefolgt von (falls ein Port angegeben wurde) einem `':'` und dem _Port_ der URL.
- [`hostname`](/de/docs/Web/API/URL/hostname)
  - : Ein String, der die Domain der URL enthält.
- [`href`](/de/docs/Web/API/URL/href)
  - : Ein [Stringifizierer](/de/docs/Glossary/stringifier), der einen String mit der gesamten URL zurückgibt.
- [`origin`](/de/docs/Web/API/URL/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, das heißt ihr Schema, ihre Domain und ihren Port.
- [`password`](/de/docs/Web/API/URL/password)
  - : Ein String, der das Passwort enthält, das vor dem Domainnamen angegeben wird.
- [`pathname`](/de/docs/Web/API/URL/pathname)
  - : Ein String, der ein führendes `'/'` gefolgt vom Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- [`port`](/de/docs/Web/API/URL/port)
  - : Ein String, der die Portnummer der URL enthält.
- [`protocol`](/de/docs/Web/API/URL/protocol)
  - : Ein String, der das Protokollschema der URL enthält, einschließlich des abschließenden `':'`.
- [`search`](/de/docs/Web/API/URL/search)
  - : Ein String, der die Parameterzeichenfolge der URL angibt; wenn Parameter bereitgestellt werden, enthält dieser String alle von ihnen, beginnend mit dem führenden `?`-Zeichen.
- [`searchParams`](/de/docs/Web/API/URL/searchParams) {{ReadOnlyInline}}
  - : Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt, das verwendet werden kann, um auf die einzelnen Abfrageparameter in `search` zuzugreifen.
- [`username`](/de/docs/Web/API/URL/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Statische Methoden

- [`canParse()`](/de/docs/Web/API/URL/canParse_static)
  - : Gibt einen Boolean zurück, der angibt, ob eine aus einem URL-String und optionalem Basis-URL-String definierte URL analysierbar und gültig ist.
- [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Gibt einen String zurück, der eine eindeutige Blob-URL enthält, das heißt eine URL mit `blob:` als Schema, gefolgt von einem undurchsichtigen String, der das Objekt im Browser eindeutig identifiziert.
- [`parse()`](/de/docs/Web/API/URL/parse_static)
  - : Erstellt und gibt ein `URL`-Objekt aus einem URL-String und optionalem Basis-URL-String zurück oder gibt `null` zurück, wenn die übergebenen Parameter eine ungültige `URL` definieren.
- [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Hebt eine zuvor mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellte Objekt-URL auf.

## Instanzmethoden

- [`toString()`](/de/docs/Web/API/URL/toString)
  - : Gibt einen String mit der ganzen URL zurück. Es ist ein Synonym für [`URL.href`](/de/docs/Web/API/URL/href), obwohl es nicht verwendet werden kann, um den Wert zu ändern.
- [`toJSON()`](/de/docs/Web/API/URL/toJSON)
  - : Gibt einen String mit der ganzen URL zurück. Es gibt denselben String zurück wie die `href`-Eigenschaft.

## Hinweise zur Verwendung

Der Konstruktor nimmt einen `url`-Parameter und einen optionalen `base`-Parameter, um als Basis zu dienen, wenn der `url`-Parameter eine relative URL ist:

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

Der Konstruktor wird eine Ausnahme werfen, wenn die URL nicht zu einer gültigen URL geparst werden kann.
Sie können entweder den obigen Code in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block aufrufen oder die statische Methode [`canParse()`](/de/docs/Web/API/URL/canParse_static) verwenden, um zuerst zu überprüfen, ob die URL gültig ist:

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

Um die Suchparameter aus der URL des aktuellen Fensters zu erhalten, können Sie dies tun:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Die [`toString()`](/de/docs/Web/API/URL/toString) Methode von `URL` gibt einfach den Wert der [`href`](/de/docs/Web/API/URL/href) Eigenschaft zurück, sodass der Konstruktor verwendet werden kann, um eine URL direkt zu normalisieren und zu kodieren.

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
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams).

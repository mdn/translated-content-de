---
title: Location
slug: Web/API/Location
l10n:
  sourceCommit: b4eee94172dd5e421502da81cb812fc6672edc66
---

{{APIRef("HTML DOM")}}

Das **`Location`** Interface repräsentiert die Position (URL) des Objekts, mit dem es verknüpft ist. Änderungen daran werden auf das betreffende Objekt angewendet. Sowohl das [`Document`](/de/docs/Web/API/Document) als auch das [`Window`](/de/docs/Web/API/Window) Interface haben ein solches verknüpftes `Location`, das über [`Document.location`](/de/docs/Web/API/Document/location) bzw. [`Window.location`](/de/docs/Web/API/Window/location) zugänglich ist.

## Aufbau von Location

Bewegen Sie die Maus über die URL-Segmente unten, um ihre Bedeutung hervorzuheben:

```html hidden
<span id="href" title="href"
  ><span id="origin" title="origin"
    ><span id="protocol" title="protocol">https:</span>//<span
      id="host"
      title="host"
      ><span id="hostname" title="hostname">example.org</span>:<span
        id="port"
        title="port"
        >8080</span
      ></span
    ></span
  ><span id="pathname" title="pathname">/foo/bar</span
  ><span id="search" title="search">?q=baz</span
  ><span id="hash" title="hash">#bang</span></span
>
```

```css hidden
html {
  display: table;
  width: 100%;
}

body {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-family: Georgia;
  font-size: 200%;
  line-height: 1em;
  white-space: nowrap;
}

[title] {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  line-height: 2em;
  cursor: pointer;
  color: gray;
}

[title]::before {
  content: attr(title);
  font-family: monospace;
  position: absolute;
  top: 100%;
  width: 100%;
  left: 50%;
  margin-left: -50%;
  font-size: 50%;
  line-height: 1.5;
  background: black;
}

[title]:hover::before,
:target::before {
  background: black;
  color: yellow;
}

[title] [title]::before {
  margin-top: 1.5em;
}

[title] [title] [title]::before {
  margin-top: 3em;
}

[title] [title] [title] [title]::before {
  margin-top: 4.5em;
}

[title]:hover,
:target {
  position: relative;
  z-index: 1;
  outline: 50em solid rgb(255 255 255 / 80%);
}
```

```js hidden
document.body.addEventListener("click", (event) => {
  event.preventDefault();

  window.location.hash = event.target.hasAttribute("id")
    ? `#${event.target.getAttribute("id")}`
    : "";
});
```

{{EmbedLiveSample('Location anatomy', '85ch', '180px')}}

## Instanz-Eigenschaften

- [`Location.ancestorOrigins`](/de/docs/Web/API/Location/ancestorOrigins) {{ReadOnlyInline}}
  - : Eine statische [`DOMStringList`](/de/docs/Web/API/DOMStringList), die in umgekehrter Reihenfolge die Ursprünge aller übergeordneten Browsing-Kontexte des Dokuments enthält, das mit dem gegebenen `Location` Objekt verknüpft ist.
- [`Location.href`](/de/docs/Web/API/Location/href)
  - : Ein {{Glossary("stringifier", "stringifier")}}, der eine Zeichenfolge mit der gesamten URL zurückgibt. Bei einer Änderung navigiert das zugehörige Dokument zur neuen Seite. Es kann von einem anderen Ursprung als dem des zugehörigen Dokuments gesetzt werden.
- [`Location.protocol`](/de/docs/Web/API/Location/protocol)
  - : Eine Zeichenfolge, die das Protokollschema der URL, einschließlich des abschließenden `':'`, enthält.
- [`Location.host`](/de/docs/Web/API/Location/host)
  - : Eine Zeichenfolge, die den Host, das heißt den _hostname_, einen `':'` und den _port_ der URL, enthält.
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
  - : Eine Zeichenfolge, die die Domain der URL enthält.
- [`Location.port`](/de/docs/Web/API/Location/port)
  - : Eine Zeichenfolge, die die Portnummer der URL enthält.
- [`Location.pathname`](/de/docs/Web/API/Location/pathname)
  - : Eine Zeichenfolge, die ein anfängliches `'/'` gefolgt vom Pfad der URL enthält, ohne die Query-String oder den Fragment.
- [`Location.search`](/de/docs/Web/API/Location/search)
  - : Eine Zeichenfolge, die ein `'?'` gefolgt von den Parametern oder dem "Query-String" der URL enthält. Moderne Browser bieten [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get) und [`URL.searchParams`](/de/docs/Web/API/URL/searchParams) an, um das Herausparsen der Parameter aus dem Query-String zu erleichtern.
- [`Location.hash`](/de/docs/Web/API/Location/hash)
  - : Eine Zeichenfolge, die ein `'#'` gefolgt von der Fragmentkennung der URL enthält.
- [`Location.origin`](/de/docs/Web/API/Location/origin) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die kanonische Form des Ursprungs des jeweiligen Standorts enthält.

## Instanz-Methoden

- [`Location.assign()`](/de/docs/Web/API/Location/assign)
  - : Lädt die Ressource unter der im Parameter angegebenen URL.
- [`Location.reload()`](/de/docs/Web/API/Location/reload)
  - : Lädt die aktuelle URL neu, ähnlich der Aktualisieren-Schaltfläche.
- [`Location.replace()`](/de/docs/Web/API/Location/replace)
  - : Ersetzt die aktuelle Ressource durch die an der angegebenen URL (leitet zur angegebenen URL weiter). Der Unterschied zur Methode `assign()` und beim Setzen der `href`-Eigenschaft besteht darin, dass nach der Verwendung von `replace()` die aktuelle Seite nicht in der Sitzungs-[`History`](/de/docs/Web/API/History) gespeichert wird, was bedeutet, dass der Benutzer nicht die _Zurück_-Schaltfläche verwenden kann, um zu ihr zu navigieren.
- [`Location.toString()`](/de/docs/Web/API/Location/toString)
  - : Gibt eine Zeichenfolge zurück, die die gesamte URL enthält. Es ist ein Synonym für [`Location.href`](/de/docs/Web/API/Location/href), kann jedoch nicht verwendet werden, um den Wert zu ändern.

## Beispiele

```js
// location: https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
const loc = document.location;
console.log(loc.href); // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(loc.protocol); // https:
console.log(loc.host); // developer.mozilla.org:8080
console.log(loc.hostname); // developer.mozilla.org
console.log(loc.port); // 8080
console.log(loc.pathname); // /en-US/search
console.log(loc.search); // ?q=URL
console.log(loc.hash); // #search-results-close-container
console.log(loc.origin); // https://developer.mozilla.org:8080

location.assign("http://another.site"); // load another page
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zwei `Location`-Eigenschaften: [`Window.location`](/de/docs/Web/API/Window/location) und [`Document.location`](/de/docs/Web/API/Document/location).
- URL-Manipulationsschnittstellen: [`URL`](/de/docs/Web/API/URL) und [`URLSearchParams`](/de/docs/Web/API/URLSearchParams).

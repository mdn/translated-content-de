---
title: Location
slug: Web/API/Location
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{APIRef("HTML DOM")}}

Die **`Location`**-Schnittstelle repräsentiert die Position (URL) des Objekts, mit dem sie verknüpft ist. Änderungen daran spiegeln sich in dem Objekt wider, auf das sie sich bezieht. Sowohl die [`Document`](/de/docs/Web/API/Document)- als auch die [`Window`](/de/docs/Web/API/Window)-Schnittstelle haben eine solche verknüpfte `Location`, die über [`Document.location`](/de/docs/Web/API/Document/location) bzw. [`Window.location`](/de/docs/Web/API/Window/location) zugänglich ist.

## Anatomie der Location

Fahren Sie mit der Maus über die URL-Segmente unten, um ihre Bedeutung hervorzuheben:

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
  font-family: "Georgia";
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
  - : Eine statische [`DOMStringList`](/de/docs/Web/API/DOMStringList), die in umgekehrter Reihenfolge die Ursprünge aller Vorfahren-Browsing-Kontexten des Dokuments enthält, das mit dem gegebenen `Location`-Objekt verknüpft ist.
- [`Location.href`](/de/docs/Web/API/Location/href)
  - : Ein {{Glossary("stringifier", "stringifier")}}, der einen String zurückgibt, der die gesamte URL enthält. Bei Änderungen navigiert das verknüpfte Dokument zur neuen Seite. Es kann aus einem anderen Ursprung als das verknüpfte Dokument gesetzt werden.
- [`Location.protocol`](/de/docs/Web/API/Location/protocol)
  - : Ein String, der das Protokollschema der URL enthält, einschließlich des abschließenden `':'`.
- [`Location.host`](/de/docs/Web/API/Location/host)
  - : Ein String, der den Host enthält, also den _hostname_, ein `':'` und den _port_ der URL.
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
  - : Ein String, der die Domain der URL enthält.
- [`Location.port`](/de/docs/Web/API/Location/port)
  - : Ein String, der die Portnummer der URL enthält.
- [`Location.pathname`](/de/docs/Web/API/Location/pathname)
  - : Ein String, der ein anfängliches `'/'` gefolgt vom Pfad der URL enthält, dabei wird die Abfragezeichenfolge oder Fragment nicht eingeschlossen.
- [`Location.search`](/de/docs/Web/API/Location/search)
  - : Ein String, der ein `'?'` gefolgt von den Parametern oder der "Abfragezeichenfolge" der URL enthält. Moderne Browser bieten [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get) und [`URL.searchParams`](/de/docs/Web/API/URL/searchParams), um das Herausfiltern von Parametern aus der Abfragezeichenfolge zu erleichtern.
- [`Location.hash`](/de/docs/Web/API/Location/hash)
  - : Ein String, der ein `'#'` gefolgt von dem Fragment-Identifier der URL enthält.
- [`Location.origin`](/de/docs/Web/API/Location/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die kanonische Form des Ursprungs des spezifischen Standorts enthält.

## Instanz-Methoden

- [`Location.assign()`](/de/docs/Web/API/Location/assign)
  - : Lädt die Ressource an der im Parameter angegebenen URL.
- [`Location.reload()`](/de/docs/Web/API/Location/reload)
  - : Lädt die aktuelle URL neu, wie die Aktualisieren-Schaltfläche.
- [`Location.replace()`](/de/docs/Web/API/Location/replace)
  - : Ersetzt die aktuelle Ressource durch die an der angegebenen URL (leitet zur angegebenen URL weiter). Der Unterschied zur `assign()`-Methode und dem Setzen der `href`-Eigenschaft besteht darin, dass nach der Verwendung von `replace()` die aktuelle Seite nicht in der Sitzung [`History`](/de/docs/Web/API/History) gespeichert wird, was bedeutet, dass der Benutzer nicht die _Zurück_-Taste verwenden kann, um zu ihr zu navigieren.
- [`Location.toString()`](/de/docs/Web/API/Location/toString)
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für [`Location.href`](/de/docs/Web/API/Location/href), kann jedoch nicht zur Änderung des Wertes verwendet werden.

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

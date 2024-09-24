---
title: Standort
slug: Web/API/Location
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{APIRef("HTML DOM")}}

Das **`Location`**-Interface repräsentiert den Standort (URL) des zugehörigen Objekts. Änderungen daran werden auf das verwandte Objekt übertragen. Sowohl das {{domxref("Document")}}- als auch das {{domxref("Window")}}-Interface haben ein solches verknüpftes `Location`, das über {{domxref("Document.location")}} und {{domxref("Window.location")}} zugänglich ist.

## Aufbau des Location-Objekts

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
  font-family: Georgia;
  font-size: 175%;
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
  font-size: 60%;
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

- {{domxref("Location.ancestorOrigins")}} {{ReadOnlyInline}}
  - : Eine statische {{domxref("DOMStringList")}}, die, in umgekehrter Reihenfolge, die Ursprünge aller Vorfahren-Browsing-Kontexte des Dokuments enthält, die dem gegebenen `Location`-Objekt zugeordnet sind.
- {{domxref("Location.href")}}
  - : Ein {{Glossary("stringifier")}}, der einen String zurückgibt, der die gesamte URL enthält. Wenn er geändert wird, navigiert das zugehörige Dokument zur neuen Seite. Es kann von einem anderen Ursprung als das zugehörige Dokument gesetzt werden.
- {{domxref("Location.protocol")}}
  - : Ein String, der das Protokollschema der URL enthält, einschließlich des abschließenden `':'`.
- {{domxref("Location.host")}}
  - : Ein String, der den Host enthält, nämlich den _hostname_, ein `':'` und den _port_ der URL.
- {{domxref("Location.hostname")}}
  - : Ein String, der die Domain der URL enthält.
- {{domxref("Location.port")}}
  - : Ein String, der die Portnummer der URL enthält.
- {{domxref("Location.pathname")}}
  - : Ein String, der ein anfängliches `'/'` gefolgt von dem Pfad der URL enthält, ohne die Abfragezeichenfolge oder das Fragment.
- {{domxref("Location.search")}}
  - : Ein String, der ein `'?'` gefolgt von den Parametern oder der „Abfragezeichenfolge“ der URL enthält. Moderne Browser bieten [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get) und [`URL.searchParams`](/de/docs/Web/API/URL/searchParams), um das Parsen der Parameter aus der Abfragezeichenfolge zu erleichtern.
- {{domxref("Location.hash")}}
  - : Ein String, der ein `'#'` gefolgt von dem Fragmentbezeichner der URL enthält.
- {{domxref("Location.origin")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die kanonische Form des Ursprungs des spezifischen Standorts enthält.

## Instanz-Methoden

- {{domxref("Location.assign()")}}
  - : Lädt die Ressource an der im Parameter angegebenen URL.
- {{domxref("Location.reload()")}}
  - : Lädt die aktuelle URL neu, ähnlich wie die Aktualisieren-Schaltfläche.
- {{domxref("Location.replace()")}}
  - : Ersetzt die aktuelle Ressource durch die an der angegebenen URL (leitet zur angegebenen URL um). Der Unterschied zur `assign()`-Methode und zur Einstellung der `href`-Eigenschaft besteht darin, dass nach Verwendung von `replace()` die aktuelle Seite nicht in der Sitzungs-{{domxref("History")}} gespeichert wird, was bedeutet, dass der Benutzer nicht mit der _Zurück_-Schaltfläche dorthin navigieren kann.
- {{domxref("Location.toString()")}}
  - : Gibt einen String zurück, der die gesamte URL enthält. Es ist ein Synonym für {{domxref("Location.href")}}, kann aber nicht verwendet werden, um den Wert zu ändern.

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

- Zwei `Location`-Eigenschaften: {{domxref("Window.location")}} und {{domxref("Document.location")}}.
- URL-Manipulationsschnittstellen: {{domxref("URL")}} und {{domxref("URLSearchParams")}}.

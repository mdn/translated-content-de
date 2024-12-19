---
title: URL API
slug: Web/API/URL_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

Die URL-API ist ein Bestandteil des URL-Standards, der definiert, was einen gültigen {{Glossary("URL", "Uniform Resource Locator")}} ausmacht und bietet eine API zum Zugriff auf und zur Manipulation von URLs. Der URL-Standard definiert auch Konzepte wie Domains, Hosts und IP-Adressen und versucht, den veralteten MIME-Typ `application/x-www-form-urlencoded` in standardisierter Form zu beschreiben, der verwendet wird, um die Inhalte von Webformularen als Satz von Schlüssel/Wert-Paaren einzureichen.

## Konzepte und Verwendung

Der größte Teil des URL-Standards besteht aus der [Definition einer URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) und deren Strukturierung und Parsen. Auch Definitionen verschiedener Begriffe im Zusammenhang mit der Adressierung von Computern in einem Netzwerk werden behandelt, und die Algorithmen zum Parsen von IP-Adressen und DOM-Adressen sind spezifiziert. Für die meisten Entwickler ist die API selbst am interessantesten.

### Zugriff auf URL-Komponenten

Das Erstellen eines [`URL`](/de/docs/Web/API/URL)-Objekts für eine gegebene URL parst die URL und bietet schnellen Zugriff auf ihre enthaltenen Teile über ihre Eigenschaften.

```js
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

Das obige Snippet erstellt ein `URL`-Objekt für den Artikel, den Sie gerade lesen, und ruft dann die Eigenschaften [`host`](/de/docs/Web/API/URL/host) und [`pathname`](/de/docs/Web/API/URL/pathname) ab. In diesem Fall sind diese Strings `developer.mozilla.org` und `/de/docs/Web/API/URL_API`.

### Ändern der URL

Die meisten Eigenschaften der `URL` sind veränderbar; Sie können neue Werte zu ihnen schreiben, um die von dem Objekt dargestellte URL zu ändern. Zum Beispiel, um eine URL zu erstellen und deren Benutzername festzulegen:

```js
let myUsername = "some-guy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Das Setzen des Wertes von [`username`](/de/docs/Web/API/URL/username) setzt nicht nur den Wert dieser Eigenschaft, sondern aktualisiert die gesamte URL. Nach der Ausführung des obigen Code-Snippets ist der von [`href`](/de/docs/Web/API/URL/href) zurückgegebene Wert `https://some-guy@example.com/login`. Dies gilt für alle beschreibbaren Eigenschaften.

### Abfragen

Die [`search`](/de/docs/Web/API/URL/search)-Eigenschaft einer `URL` enthält den Abfragezeichenfolgen-Teil der URL. Wenn die URL zum Beispiel `https://example.com/login?user=some-guy&page=news` ist, ist der Wert der `search`-Eigenschaft `?user=some-guy&page=news`. Sie können auch die Werte einzelner Parameter mit der [`get()`](/de/docs/Web/API/URLSearchParams/get)-Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekts abrufen:

```js
let addr = new URL("https://example.com/login?user=some-guy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

Zum Beispiel im obigen Snippet werden der Benutzername und die Zielseite aus der Abfrage entnommen und an die entsprechenden Funktionen weitergegeben, die vom Code der Website verwendet werden, um den Benutzer anzumelden und zu seiner gewünschten Zielseite innerhalb der Website zu leiten.

Andere Funktionen innerhalb von `URLSearchParams` ermöglichen es Ihnen, den Wert von Schlüsseln zu ändern, Schlüssel und deren Werte hinzuzufügen und zu löschen und sogar die Liste der Parameter zu sortieren.

## Schnittstellen

Die URL-API ist eine einfache mit nur ein paar Schnittstellen:

- [`URL`](/de/docs/Web/API/URL)
  - : Kann verwendet werden, um {{Glossary("URL", "URLs")}} zu parsen, zu konstruieren, zu normalisieren und zu kodieren.
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
  - : Definiert Hilfsmethoden zur Arbeit mit der Abfragezeichenfolge einer URL.

## Beispiele

Wenn Sie die in einer URL enthaltenden Parameter verarbeiten möchten, könnten Sie dies manuell tun, doch es ist viel einfacher, ein `URL`-Objekt dafür zu erstellen. Die Funktion `fillTableWithParameters()` unten nimmt ein [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekt, das ein {{HTMLElement("table")}} darstellt, als Eingabe. Der Tabelle werden Zeilen hinzugefügt, eine für jeden in den Parametern gefundenen Schlüssel, wobei die erste Spalte den Namen des Schlüssels enthält und die zweite Spalte den Wert hat.

Beachten Sie den Aufruf von [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort), um die Parameterliste zu sortieren, bevor die Tabelle generiert wird.

```js
function fillTableWithParameters(tbl) {
  const url = new URL(document.location.href);
  url.searchParams.sort();
  const keys = url.searchParams.keys();

  for (const key of keys) {
    const val = url.searchParams.get(key);
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.innerText = key;
    row.appendChild(cell1);
    const cell2 = document.createElement("td");
    cell2.innerText = val;
    row.appendChild(cell2);
    tbl.appendChild(row);
  }
}
```

Eine funktionierende Version dieses Beispiels finden Sie [auf Glitch](https://url-api.glitch.me/). Fügen Sie einfach Parameter zur URL hinzu, wenn Sie die Seite laden, um diese in der Tabelle zu sehen. Versuchen Sie zum Beispiel [`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- CSS {{cssxref("url_value", "&lt;url&gt;")}} Typ
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}

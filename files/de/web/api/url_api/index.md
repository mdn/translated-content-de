---
title: URL-API
slug: Web/API/URL_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

Die URL-API ist ein Bestandteil des URL-Standards, der definiert, was einen gültigen {{Glossary("URL", "Uniform Resource Locator")}} ausmacht und die API, die URLs zugreift und manipuliert. Der URL-Standard definiert auch Konzepte wie Domains, Hosts und IP-Adressen und versucht, das veraltete `application/x-www-form-urlencoded` {{Glossary("MIME type")}}, das verwendet wird, um die Inhalte von Webformularen als Satz von Schlüssel/Wert-Paaren zu übermitteln, standardisiert zu beschreiben.

## Konzepte und Verwendung

Der Großteil des URL-Standards besteht aus der [Definition einer URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) und wie sie strukturiert und geparst wird. Ebenfalls behandelt werden Definitionen verschiedener Begriffe in Bezug auf die Adressierung von Computern in einem Netzwerk, und die Algorithmen für das Parsen von IP-Adressen und DOM-Adressen sind spezifiziert. Für die meisten Entwickler ist jedoch die API selbst interessanter.

### Zugriff auf URL-Komponenten

Die Erstellung eines {{domxref("URL")}} Objekts für eine gegebene URL parst die URL und ermöglicht einen schnellen Zugriff auf ihre Bestandteile über ihre Eigenschaften.

```js
let addr = new URL("https://developer.mozilla.org/de/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

Das obige Beispiel erstellt ein `URL`-Objekt für den Artikel, den Sie gerade lesen, und ruft die Eigenschaften {{domxref("URL.host", "host")}} und {{domxref("URL.pathname", "pathname")}} ab. In diesem Fall sind diese Zeichenfolgen `developer.mozilla.org` und `/de/docs/Web/API/URL_API`.

### Ändern der URL

Die meisten Eigenschaften von `URL` sind veränderbar; Sie können ihnen neue Werte zuweisen, um die von dem Objekt dargestellte URL zu ändern. Zum Beispiel, um eine URL zu erstellen und ihren Benutzernamen festzulegen:

```js
let myUsername = "someguy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Das Setzen des Wertes von {{domxref("URL.username", "username")}} setzt nicht nur den Wert dieser Eigenschaft, sondern aktualisiert auch die gesamte URL. Nach der Ausführung des obigen Code-Schnipsels ist der von {{domxref("URL.href", "href")}} zurückgegebene Wert `https://someguy@example.com/login`. Dies gilt für alle veränderbaren Eigenschaften.

### Abfragen

Die {{domxref("URL.search", "search")}} Eigenschaft einer `URL` enthält den Abfragezeichenfolgenabschnitt der URL. Beispielsweise, wenn die URL `https://example.com/login?user=someguy&page=news` ist, dann ist der Wert der `search` Eigenschaft `?user=someguy&page=news`. Sie können auch die Werte einzelner Parameter mit der {{domxref("URLSearchParams")}} Objektmethode {{domxref("URLSearchParams.get", "get()")}} abrufen:

```js
let addr = new URL("https://example.com/login?user=someguy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

Zum Beispiel, im obigen Beispiel werden der Benutzername und die Zielseite aus der Abfrage entnommen und an entsprechende Funktionen übergeben, die vom Code der Website verwendet werden, um den Benutzer anzumelden und an sein gewünschtes Ziel innerhalb der Website zu leiten.

Weitere Funktionen innerhalb von `URLSearchParams` erlauben es Ihnen, den Wert von Schlüsseln zu ändern, Schlüssel und deren Werte hinzuzufügen und zu löschen, und sogar die Liste der Parameter zu sortieren.

## Schnittstellen

Die URL-API ist eine einfache, mit nur ein paar Schnittstellen zu ihrem Namen:

- {{domxref("URL")}}
  - : Kann verwendet werden, um {{glossary("URL", "URLs")}} zu parsen, zu konstruieren, zu normalisieren und zu kodieren.
- {{domxref("URLSearchParams")}}
  - : Definiert Hilfsmethoden, um mit der Abfragezeichenfolge einer URL zu arbeiten.

## Beispiele

Wenn Sie die Parameter in einer URL verarbeiten möchten, könnten Sie dies manuell tun, aber es ist viel einfacher, ein `URL`-Objekt zu erstellen, das dies für Sie übernimmt. Die `fillTableWithParameters()` Funktion unten nimmt als Eingabe ein {{domxref("HTMLTableElement")}} Objekt, das ein {{HTMLElement("table")}} darstellt. Der Tabelle werden Zeilen hinzugefügt, eine für jeden in den Parametern gefundenen Schlüssel, wobei die erste Spalte den Namen des Schlüssels und die zweite Spalte den Wert enthält.

Beachten Sie den Aufruf von {{domxref("URLSearchParams.sort()")}}, um die Parameterliste vor dem Generieren der Tabelle zu sortieren.

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

Eine funktionierende Version dieses Beispiels kann [auf Glitch gefunden werden](https://url-api.glitch.me/). Fügen Sie einfach Parameter zur URL hinzu, wenn Sie die Seite laden, um sie in der Tabelle zu sehen. Versuchen Sie zum Beispiel [`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Fetch API", "", "", "nocode")}}
- CSS {{cssxref("&lt;url&gt;")}} Typ
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}

---
title: URL API
slug: Web/API/URL_API
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

Die URL-API ist ein Bestandteil des URL-Standards, der festlegt, was einen gültigen {{Glossary("URL", "Uniform Resource Locator")}} ausmacht, und die API, die URLs abruft und bearbeitet. Der URL-Standard definiert auch Konzepte wie Domains, Hosts und IP-Adressen und versucht, den alten `application/x-www-form-urlencoded` {{Glossary("MIME_type", "MIME-Typ")}} zu beschreiben, der verwendet wird, um Inhalte von Webformularen in Form eines Satzes von Schlüssel/Wert-Paaren zu übermitteln.

## Konzepte und Verwendung

Der größte Teil des URL-Standards wird durch die [Definition einer URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) und deren Strukturierung und Analyse eingenommen. Es werden auch Begriffe im Zusammenhang mit der Adressierung von Computern in einem Netzwerk definiert und die Algorithmen zum Parsen von IP-Adressen und DOM-Adressen spezifiziert. Für die meisten Entwickler ist die API selbst am interessantesten.

### Zugriff auf URL-Komponenten

Das Erstellen eines [`URL`](/de/docs/Web/API/URL)-Objekts für eine gegebene URL analysiert die URL und ermöglicht schnellen Zugriff auf ihre Bestandteile über ihre Eigenschaften.

```js
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

Der obige Ausschnitt erstellt ein `URL`-Objekt für den Artikel, den Sie gerade lesen, und ruft dann die Eigenschaften [`host`](/de/docs/Web/API/URL/host) und [`pathname`](/de/docs/Web/API/URL/pathname) ab. In diesem Fall sind diese Zeichenketten `developer.mozilla.org` und `/de/docs/Web/API/URL_API`.

### Ändern der URL

Die meisten Eigenschaften von `URL` sind veränderbar; Sie können ihnen neue Werte zuweisen, um die von dem Objekt dargestellte URL zu ändern. Zum Beispiel, um eine URL zu erstellen und ihren Benutzernamen zu setzen:

```js
let myUsername = "some-guy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Der Wert der Eigenschaft [`username`](/de/docs/Web/API/URL/username) zu setzen, ändert nicht nur den Wert dieser Eigenschaft, sondern aktualisiert die gesamte URL. Nach der Ausführung des obigen Code-Snippets ist der von [`href`](/de/docs/Web/API/URL/href) zurückgegebene Wert `https://some-guy@example.com/login`. Dies gilt für alle veränderbaren Eigenschaften.

### Abfragen

Die Eigenschaft [`search`](/de/docs/Web/API/URL/search) einer `URL` enthält den Abfragezeichenfolgenabschnitt der URL. Wenn die URL zum Beispiel `https://example.com/login?user=some-guy&page=news` ist, dann ist der Wert der `search`-Eigenschaft `?user=some-guy&page=news`. Sie können auch die Werte einzelner Parameter mit der Methode [`get()`](/de/docs/Web/API/URLSearchParams/get) des Objekts [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) abrufen:

```js
let addr = new URL("https://example.com/login?user=some-guy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

Zum Beispiel werden im obigen Ausschnitt der Benutzername und die Zielseite aus der Abfrage entnommen und an entsprechende Funktionen übergeben, die vom Code der Website verwendet werden, um den Benutzer anzumelden und ihn zu seinem gewünschten Ziel innerhalb der Website zu leiten.

Andere Funktionen innerhalb von `URLSearchParams` ermöglichen es Ihnen, den Wert von Schlüsseln zu ändern, Schlüssel und ihre Werte hinzuzufügen und zu löschen und sogar die Liste der Parameter zu sortieren.

## Schnittstellen

Die URL-API ist eine einfache, mit nur wenigen Schnittstellen:

- [`URL`](/de/docs/Web/API/URL)
  - : Kann verwendet werden, um {{Glossary("URL", "URLs")}} zu analysieren, zu konstruieren, zu normalisieren und zu kodieren.
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
  - : Definiert Hilfsmethoden zur Arbeit mit der Abfragezeichenfolge einer URL.

## Beispiele

Wenn Sie die Parameter in einer URL verarbeiten möchten, könnten Sie dies manuell tun, aber es ist viel einfacher, ein `URL`-Objekt zu erstellen, das dies für Sie erledigt. Die Funktion `fillTableWithParameters()` unten nimmt als Eingabe ein [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekt, das ein {{HTMLElement("table")}} darstellt. Der Tabelle werden Zeilen hinzugefügt, eine für jeden im Parameterfeld gefundenen Schlüssel, wobei die erste Spalte den Schlüssel-Namen enthält und die zweite Spalte den Wert.

Beachten Sie den Aufruf von [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort), um die Parameterliste zu sortieren, bevor die Tabelle erstellt wird.

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

Eine funktionierende Version dieses Beispiels kann auf [Glitch](https://url-api.glitch.me/) gefunden werden. Fügen Sie einfach Parameter zur URL hinzu, wenn die Seite geladen wird, um sie in der Tabelle zu sehen. Versuchen Sie beispielsweise [`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch-API](/de/docs/Web/API/Fetch_API)
- CSS {{cssxref("&lt;url&gt;")}} Typ
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}

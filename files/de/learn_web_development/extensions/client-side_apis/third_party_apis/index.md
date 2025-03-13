---
title: Third-party-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind in den Browser integriert, aber nicht alle APIs sind das. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die Entwicklern die Nutzung ihrer Daten (z.B. das Anzeigen Ihres Twitter-Streams auf Ihrem Blog) oder Dienste (z.B. die Nutzung des Facebook-Logins zur Anmeldung Ihrer Benutzer) ermöglichen. Dieser Artikel betrachtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Verwendungszwecke der letzteren auf.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekt-Grundlagen</a> und grundlegende API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und zugehörigen Mustern wie API-Keys.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful API.</li>
          <li>Verwendung der YouTube APIs von Google.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Dritten – in der Regel Unternehmen wie Facebook, Twitter oder Google – bereitgestellt werden, um Ihnen den Zugriff auf deren Funktionalität über JavaScript zu ermöglichen, die Sie auf Ihrer Website verwenden können. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Schauen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und verwenden es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Drittanbieter-Servern

Browser-APIs sind in den Browser integriert – Sie können direkt aus JavaScript darauf zugreifen. Beispielsweise wird die Web Audio API, die wir im [Einführungsartikel gesehen haben](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work), über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt aufgerufen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Drittanbieter-Servern. Um von JavaScript aus darauf zuzugreifen, müssen Sie zuerst eine Verbindung zur API-Funktionalität herstellen und diese auf Ihrer Seite verfügbar machen. Dies beinhaltet typischerweise das Verlinken zu einer auf dem Server verfügbaren JavaScript-Bibliothek über ein {{htmlelement("script")}}-Element, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Sie können dann mit der Verwendung der in dieser Bibliothek verfügbaren Objekte beginnen. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und erstellen dann eine neue Karte mit der Methode `mapquest.map()`, die als Parameter die ID eines {{htmlelement("div")}}-Elements, in dem die Karte angezeigt werden soll ('map'), und ein Optionsobjekt mit den Details der anzuzeigenden Karte enthält. In diesem Fall geben wir die Koordinaten des Zentrums der Karte an, eine Kartenschicht des Typs `map` zur Anzeige (erstellt mit der Methode `mapquest.tileLayer()`) und das Standardzoomlevel.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, zu dem Sie eine Verbindung herstellen, übernimmt alle komplizierten Aufgaben, wie das Anzeigen der richtigen Kartenteile für den gezeigten Bereich usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders und erfordern, dass der Entwickler eine HTTP-Anfrage an ein spezifisches URL-Muster stellt, um Daten abzurufen. Diese werden als [RESTful APIs bezeichnet – wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie benötigen in der Regel API-Keys

Die Sicherheit von Browser-APIs wird meist durch Berechtigungsabfragen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser ist, dass der Benutzer weiß, was auf den von ihm besuchten Websites passiert, und weniger wahrscheinlich Opfer eines böswilligen API-Einsatzes wird.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem – sie verwenden in der Regel Entwickler-Keys, um Entwicklern den Zugriff auf die API-Funktionalität zu ermöglichen, was mehr dazu dient, den API-Anbieter zu schützen als den Benutzer.

Sie finden eine Zeile ähnlich der folgenden im Mapquest-API-Beispiel:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwickler-Key an, der in Ihrer Anwendung verwendet werden soll – der Entwickler der Anwendung muss sich bewerben, um einen Key zu erhalten, und ihn dann in seinem Code einfügen, um Zugriff auf die API-Funktionalität zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter vorgesehen.

> [!NOTE]
> Bei der Erstellung eigener Beispiele verwenden Sie Ihren eigenen API-Key anstelle eines Platzhalters.

Andere APIs können verlangen, dass Sie den Key auf eine etwas andere Weise einfügen, aber das Muster ist bei den meisten relativ ähnlich.

Die Anforderung eines Keys ermöglicht es dem API-Anbieter, die Nutzer der API für ihre Handlungen zur Rechenschaft zu ziehen. Wenn der Entwickler sich für einen Key registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er beginnt, etwas Böswilliges mit der API zu tun (z.B. das Verfolgen von Orten von Personen oder der Versuch, die API mit vielen Anfragen zu überfluten, um sie zum Absturz zu bringen). Die einfachste Maßnahme wäre, einfach ihre API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Lassen Sie uns dem Mapquest-Beispiel mehr Funktionalität hinzufügen, um zu zeigen, wie man einige andere Features der API verwendet.

1. Um diesen Abschnitt zu starten, machen Sie sich eine Kopie der [Mapquest-Starter-Datei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Falls Sie das [Beispiele-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Datei, die Sie im _javascript/apis/third-party-apis/mapquest/start_-Verzeichnis finden können.
2. Gehen Sie als nächstes zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/), erstellen Sie ein Konto und erstellen Sie dann einen Entwickler-Key, den Sie mit Ihrem Beispiel verwenden können. (Zum Zeitpunkt des Schreibens wurde er auf der Website als "Consumer Key" bezeichnet, und im Key-Erstellungsprozess wurde auch nach einer optionalen "Callback-URL" gefragt. Sie müssen hier keine URL angeben: Lassen Sie es einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den Platzhalter für den API-Key durch Ihren eigenen.

### Änderung des Kartentyps

Es gibt eine Reihe unterschiedlicher Kartentypen, die mit der Mapquest-API angezeigt werden können. Um dies zu tun, finden Sie die folgende Zeile:

```js
layers: L.mapquest.tileLayer("map");
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Hybrid-Stil-Karte anzuzeigen. Probieren Sie auch einige andere Werte aus. Die [`tileLayer`-Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügen verschiedener Bedienelemente

Die Karte verfügt über eine Reihe verschiedener Bedienelemente; standardmäßig wird nur eine Zoomsteuerung angezeigt. Sie können die verfügbaren Bedienelemente mit der Methode `map.addControl()` erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach ein einfaches, voll ausgestattetes Bedienelement-Set, das standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position durch Angabe eines Optionsobjekts als Parameter für die Steuerung anpassen, das eine `position`-Eigenschaft enthält, deren Wert ein String ist, der eine Position für das Bedienelement angibt. Probieren Sie dies aus:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Arten von Bedienelementen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), die ziemlich komplex und leistungsstark sind. Probieren Sie es aus und sehen Sie, was Sie damit machen können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Icons) an einem bestimmten Punkt auf der Karte ist einfach – Sie verwenden einfach die [`L.marker()`](https://leafletjs.com/reference.html#marker)-Methode (die in den zugehörigen Leaflet.js-Dokumenten dokumentiert zu sein scheint). Fügen Sie den folgenden Code zu Ihrem Beispiel hinzu, wiederum innerhalb von `window.onload`:

```js
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "A",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);
```

Wie Sie sehen, nimmt dies im einfachsten Fall zwei Parameter an, ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt mit einer `icon`-Eigenschaft, die das anzuzeigende Icon an diesem Punkt definiert.

Das Icon wird mit einer [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/)-Methode definiert, die wie Sie sehen, Informationen wie Farbe und Größe des Markers enthält.

Am Ende des ersten Methodenaufrufs verketten wir `.bindPopup('This is Manchester!')`, was den Inhalt definiert, der angezeigt werden soll, wenn der Marker angeklickt wird.

Schließlich verketten wir `.addTo(map)` am Ende der Kette, um den Marker tatsächlich zur Karte hinzuzufügen.

Probieren Sie die anderen in den Dokumentationen gezeigten Optionen aus und sehen Sie, was Sie damit machen können! Mapquest bietet einige ziemlich fortschrittliche Funktionen wie Wegbeschreibungen, Suchen usw.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Schauen wir uns nun ein weiteres API-Beispiel an, die [New York Times API](https://developer.nytimes.com/). Diese API erlaubt es Ihnen, Informationen zu New York Times-Nachrichten zu erhalten und auf Ihrer Website anzuzeigen. Dieser API-Typ ist als **RESTful API** bekannt — anstatt Daten mithilfe der Funktionen einer JavaScript-Bibliothek wie bei Mapquest zu erhalten, holen wir Daten durch HTTP-Anfragen an bestimmte URLs, mit Daten wie Suchbegriffen und anderen Eigenschaften, die in den URLs codiert sind (oft als URL-Parameter). Dies ist ein gängiges Muster, auf das Sie bei APIs stoßen werden.

Unten führen wir Sie durch eine Übung, die Ihnen zeigt, wie Sie die NYTimes API nutzen können, und die Ihnen auch eine allgemeinere Reihe von Schritten bietet, denen Sie folgen können, um mit neuen APIs zu arbeiten.

### Die Dokumentation finden

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig, die Dokumentation zu finden, damit Sie herausfinden können, welche Funktionen die API hat, wie Sie sie verwenden usw. Die Dokumentation der New York Times API befindet sich unter <https://developer.nytimes.com/>.

### Einen Entwickler-Key erhalten

Die meisten APIs erfordern die Nutzung eines Entwickler-Keys aus Sicherheits- und Verantwortlichkeitsgründen. Um sich für einen NYTimes API-Key anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Lassen Sie uns einen Key für die Article Search API anfordern – erstellen Sie eine neue App, indem Sie diese als die API auswählen, die Sie verwenden möchten (füllen Sie einen Namen und eine Beschreibung aus, schalten Sie den Schalter unter dem "Article Search API" in die Position "Ein" und klicken Sie dann auf "Erstellen").
2. Erhalten Sie den API-Key von der resultierenden Seite.
3. Um das Beispiel zu starten, machen Sie eine Kopie aller Dateien im [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start)-Verzeichnis. Falls Sie das [Beispiele-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im _javascript/apis/third-party-apis/nytimes/start_-Verzeichnis finden. Die Datei `script.js` enthält zunächst eine Reihe von Variablen, die für das Setup des Beispiels benötigt werden; unten werden wir die erforderliche Funktionalität einfügen.

Die App wird es Ihnen ermöglichen, ein Suchbegriff und optionale Start- und Enddaten einzugeben, die dann verwendet werden, um die Article Search API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispielsuchanfrage und Suchergebnisse, wie sie von der New York Article Search API abgerufen wurden.](nytimes-example.png)

### Die API mit Ihrer App verbinden

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Falle dieser API müssen Sie den API-Key als [get](/de/docs/Web/HTTP/Reference/Methods/GET)-Parameter immer dann einfügen, wenn Sie Daten von dem Dienst an der richtigen URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Key durch den tatsächlichen API-Key, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript hinzu, unterhalb des `// Event listeners to control the functionality`-Kommentare. Dies führt eine Funktion namens `submitSearch()` aus, wenn das Formular übermittelt wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen von `submitSearch()` und `fetchResults()` unterhalb der vorherigen Zeile hinzu:

   ```js
   function submitSearch(e) {
     pageNumber = 0;
     fetchResults(e);
   }

   function fetchResults(e) {
     // Use preventDefault() to stop the form submitting
     e.preventDefault();

     // Assemble the full URL
     let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;

     if (startDate.value !== "") {
       url = `${url}&begin_date=${startDate.value}`;
     }

     if (endDate.value !== "") {
       url = `${url}&end_date=${endDate.value}`;
     }
   }
   ```

`submitSearch()` setzt die Seitenzahl zunächst zurück auf 0 und ruft dann `fetchResults()` auf. Diese ruft zunächst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um das tatsächliche Absenden des Formulars zu verhindern (was das Beispiel zerstören würde). Als nächstes verwenden wir einige Zeichenkettenmanipulationen, um die vollständige URL zusammenzustellen, die wir abfragen werden. Wir beginnen damit, die Teile zusammenzustellen, die wir für dieses Demo als obligatorisch erachten:

- Die Basis-URL (entnommen aus der Variablen `baseURL`).
- Der API-Key, der in dem `api-key` URL-Parameter angegeben werden muss (der Wert wird aus der Variablen `key` entnommen).
- Die Seitenzahl, die in dem `page` URL-Parameter angegeben werden muss (der Wert wird aus der `pageNumber`-Variable entnommen).
- Der Suchbegriff, der in dem `q` URL-Parameter angegeben werden muss (der Wert wird aus dem Wert des Text-{{htmlelement("input")}} `searchTerm` entnommen).
- Den Dokumententyp, um Ergebnisse zu erhalten, wie in einem Ausdruck angegeben, der über den `fq` URL-Parameter übergeben wird. In diesem Fall möchten wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen um zu überprüfen, ob die `startDate`- und `endDate`-Elemente gefüllt wurden. Falls ja, fügen wir ihre Werte der URL hinzu, angegeben in `begin_date` und `end_date` URL-Parametern.

Eine vollständige URL würde am Ende etwa so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Sie können mehr Details darüber, welche URL-Parameter enthalten werden können, in den [NYTimes-Entwicklerdokumentationen](https://developer.nytimes.com/) finden.

> [!NOTE]
> Das Beispiel hat eine grundlegende Formular-Datenvalidierung — das Suchfeld muss ausgefüllt werden, bevor das Formular gesendet werden kann (erreicht durch das Attribut `required`), und die Datumsfelder haben `pattern`-Attribute angegeben, was bedeutet, dass sie nicht gesendet werden, solange ihre Werte nicht aus 8 Zahlen bestehen (`pattern="[0-9]{8}"`). Weitere Details wie diese funktionieren, finden Sie unter [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

### Anfordern von Daten von der API

Nun, da wir unsere URL konstruiert haben, lassen Sie uns eine Anfrage daran stellen. Wir erledigen das mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Fügen Sie den folgenden Codeblock innerhalb der `fetchResults()`-Funktion hinzu, direkt über der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, wandeln den Antwortkörper in JSON mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion um, und geben das resultierende JSON an die Funktion `displayResults()` weiter, damit die Daten in unserem UI angezeigt werden können. Wir fangen auch alle Fehler ab und protokollieren sie, die möglicherweise geworfen werden.

### Anzeige der Daten

Ok, schauen wir uns an, wie wir die Daten anzeigen werden. Fügen Sie die folgende Funktion unter Ihrer `fetchResults()`-Funktion hinzu.

```js
function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  const articles = json.response.docs;

  nav.style.display = articles.length === 10 ? "block" : "none";

  if (articles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No results returned.";
    section.appendChild(para);
  } else {
    for (const current of articles) {
      const article = document.createElement("article");
      const heading = document.createElement("h2");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const para1 = document.createElement("p");
      const keywordPara = document.createElement("p");
      keywordPara.classList.add("keywords");

      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.snippet;
      keywordPara.textContent = "Keywords: ";
      for (const keyword of current.keywords) {
        const span = document.createElement("span");
        span.textContent = `${keyword.value} `;
        keywordPara.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = `http://www.nytimes.com/${current.multimedia[0].url}`;
        img.alt = current.headline.main;
      }

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(keywordPara);
      section.appendChild(article);
    }
  }
}
```

Hier ist eine Menge Code; lassen Sie es uns Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein gemeinsames Muster, das verwendet wird, um alle Inhalte von einem DOM-Element zu löschen, in diesem Fall dem {{htmlelement("section")}}-Element. Wir überprüfen weiterhin, ob `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als Nächstes setzen wir die `articles`-Variable gleich `json.response.docs` – dies ist das Array, das alle Objekte hält, die die durch die Suche zurückgegebenen Artikel repräsentieren. Dies wird nur gemacht, damit der folgende Code ein bisschen einfacher aussieht.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block überprüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel gleichzeitig zurück). Wenn ja, zeigen wir die {{htmlelement("nav")}} an, die die _Vorherige 10_/_Nächste 10_-Navigationsschaltflächen enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen alle auf eine Seite und wir müssen die Navigationsschaltflächen nicht anzeigen. Wir werden die Paginierungsfunktionalität im nächsten Abschnitt miteinander verbinden.
- Der nächste `if ()`-Block prüft, ob keine Artikel zurückgegeben werden. Wenn nein, versuchen wir nicht, sie anzuzeigen – wir erstellen ein {{htmlelement("p")}}, das den Text "No results returned." enthält und fügen es in die `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zunächst alle Elemente, die wir für die Anzeige jeder Nachrichtengeschichte verwenden möchten, fügen in jedes die richtigen Inhalte ein und fügen sie dann in das DOM an den entsprechenden Stellen ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zum Anzeigen enthielten, konsultierten wir die Artikel-Such-API-Referenz (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten von diesen Operationen sind ziemlich offensichtlich, aber ein paar sind es wert, erwähnt zu werden:

  - Wir verwendeten eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um durch alle mit jedem Artikel verknüpften Schlüsselwörter zu gehen und jedes in einem eigenen {{htmlelement("span")}} in einem `<p>` einzufügen. Dies wurde getan, um es leicht zu machen, jedes stilistisch darzustellen.
  - Wir verwendeten einen `if ()`-Block (`if (current.multimedia.length > 0) { }`), um zu prüfen, ob jedem Artikel Bilder zugeordnet sind, da einige Geschichten keine haben. Wir zeigen nur das erste Bild an, wenn es existiert; andernfalls könnte ein Fehler geworfen werden.

### Verkabeln der Navigationsschaltflächen

Um die Paginierungsschaltflächen funktionsfähig zu machen, inkrementieren (oder dekrementieren) wir den Wert der Variable `pageNumber` und führen dann die Abrufanforderung mit dem neuen in dem Seiten-URL-Parameter angegebenen Wert erneut aus. Dies funktioniert, weil die NYTimes API nur 10 Ergebnisse auf einmal zurückgibt – wenn mehr als 10 Ergebnisse verfügbar sind, gibt sie die ersten 10 (0-9) zurück, wenn der `page`-URL-Parameter auf 0 gesetzt oder gar nicht angegeben ist – 0 ist der Standardwert, die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, usw.

Dies ermöglicht uns, eine einfache Paginierungsfunktion zu schreiben.

1. Fügen Sie unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf diese zwei neuen hinzu, die die `nextPage()`- und `previousPage()`-Funktionen aufrufen, wenn die entsprechenden Schaltflächen geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Hinzufügung, lassen Sie uns die zwei Funktionen definieren – fügen Sie diesen Code jetzt hinzu:

   ```js
   function nextPage(e) {
     pageNumber++;
     fetchResults(e);
   }

   function previousPage(e) {
     if (pageNumber > 0) {
       pageNumber--;
     } else {
       return;
     }
     fetchResults(e);
   }
   ```

   Die erste Funktion inkrementiert die Variable `pageNumber` und führt dann die Funktion `fetchResults()` erneut aus, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert nahezu genau umgekehrt, aber wir müssen auch den zusätzlichen Schritt gehen und überprüfen, ob `pageNumber` nicht bereits null ist, bevor wir sie dekrementieren – wenn die Abrufanfrage mit einem Minus-Seiten-URL-Parameter ausgeführt wird, könnte dies Fehler verursachen. Wenn die `pageNumber` bereits 0 ist, [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) wir aus der Funktion – wenn wir bereits auf der ersten Seite sind, müssen wir nicht dieselben Ergebnisse noch einmal laden.

> [!NOTE]
> Sie können unseren [abgeschlossenen NYTimes API-Beispielcode auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (sehen Sie ihn auch [hier live laufen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, das Sie studieren und lernen können – sehen Sie sich unser [YouTube-Videosuche-Beispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/) an. Dies verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um nach YouTube-Videos zu suchen und Ergebnisse zu liefern.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Videoplayern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, weil es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine App zu bauen. Die erste ist eine RESTful API, während die zweite mehr wie Mapquest arbeitet (mit API-spezifischen Methoden usw.). Es ist jedoch bemerkenswert, dass beide APIs erfordern, dass eine JavaScript-Bibliothek auf der Seite angewendet wird. Die RESTful API hat Funktionen, die verfügbar sind, um die HTTP-Anfragen zu verarbeiten und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispielsuchanfrage bei YouTube mit zwei verwandten APIs. Auf der linken Seite des Bildes ist eine Beispielsuchanfrage mit der YouTube Data API zu sehen. Auf der rechten Seite des Bildes werden die Suchergebnisse mit der YouTube Iframe Player API angezeigt.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr über dieses Beispiel sagen – [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) hat detaillierte Kommentare eingefügt, um zu erklären, wie es funktioniert.

Um es zum Laufen zu bringen, müssen Sie:

- Die [YouTube Data API-Übersicht](https://developers.google.com/youtube/v3/getting-started)-Dokumentation durchlesen.
- Stellen Sie sicher, dass Sie die [Seite mit den aktivierten APIs](https://console.cloud.google.com/apis/enabled) besuchen, und in der Liste der APIs stellen Sie sicher, dass der Status für die YouTube Data API v3 auf "Ein" steht.
- Einen API-Key von [Google Cloud](https://cloud.google.com/) bekommen.
- Den String `ENTER-API-KEY-HERE` im Quellcode finden und durch Ihren API-Key ersetzen.
- Das Beispiel über einen Webserver ausführen. Es wird nicht funktionieren, wenn Sie es direkt im Browser ausführen (d.h. über eine `file://` URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs gegeben, um Ihrer Website Funktionalität hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

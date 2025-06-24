---
title: Third-Party-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind in den Browser integriert, doch nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs, die Entwicklern ermöglichen, ihre Daten zu nutzen (z. B. Ihren Twitter-Stream auf Ihrem Blog anzuzeigen) oder ihre Dienste zu verwenden (z. B. Facebook-Login für die Anmeldung Ihrer Nutzer). Dieser Artikel behandelt den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungsfälle für letztere.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und damit verbundene Muster wie API-Schlüssel.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful API.</li>
          <li>Verwendung von Googles YouTube-APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Drittanbietern – in der Regel Unternehmen wie Facebook, Twitter oder Google – bereitgestellt werden, damit Sie deren Funktionalität über JavaScript auf Ihrer Website nutzen können. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Werfen wir einen Blick auf ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) und verwenden es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Drittanbieter-Servern

Browser-APIs sind in den Browser integriert – Sie können sofort über JavaScript auf sie zugreifen. Beispielsweise wird die Web Audio API, die wir [im einführenden Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work) behandelt haben, über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt aufgerufen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs dagegen befinden sich auf Servern von Drittanbietern. Um auf sie über JavaScript zuzugreifen, müssen Sie zuerst eine Verbindung zur API-Funktionalität herstellen und sie auf Ihrer Seite verfügbar machen. Dies beinhaltet in der Regel das Verlinken zu einer auf dem Server verfügbaren JavaScript-Bibliothek über ein {{htmlelement("script")}}-Element, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Sie können dann die in dieser Bibliothek verfügbaren Objekte verwenden. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und dann eine neue Karte mit der Methode `mapquest.map()`, die als Parameter die ID eines {{htmlelement("div")}}-Elements akzeptiert, in dem die Karte angezeigt werden soll ('map'), und ein Optionsobjekt, das die Details der anzuzeigenden Karte enthält. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts an, eine Kartenebene vom Typ `map`, die angezeigt werden soll (erstellt mit der Methode `mapquest.tileLayer()`), und die Standard-Zoomstufe.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, zu dem Sie eine Verbindung herstellen, übernimmt alle komplizierten Aufgaben, wie z. B. das Anzeigen der richtigen Kartenkacheln für den angezeigten Bereich usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders und erfordern, dass der Entwickler eine HTTP-Anfrage an ein bestimmtes URL-Muster stellt, um Daten abzurufen. Diese werden [RESTful-APIs genannt — wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern in der Regel API-Schlüssel

Die Sicherheit bei Browser-APIs wird durch Berechtigungsaufforderungen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser Berechtigungen besteht darin, dass der Benutzer weiß, was auf den von ihm besuchten Websites vor sich geht, und weniger wahrscheinlich Opfer von jemandem wird, der eine API auf bösartige Weise verwendet.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem — sie neigen dazu, Entwicklerschlüssel zu verwenden, um Entwicklern den Zugang zu den API-Funktionen zu ermöglichen, was eher dem Schutz des API-Anbieters als dem Benutzer dient.

In dem Mapquest-API-Beispiel finden Sie eine Zeile ähnlich der folgenden:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile spezifiziert einen API- oder Entwicklerschlüssel, der in Ihrer Anwendung verwendet werden soll – der Entwickler der Anwendung muss einen Schlüssel beantragen und ihn dann in seinen Code aufnehmen, um den Zugriff auf die API-Funktionalität zu erlauben. In unserem Beispiel haben wir einfach einen Platzhalter bereitgestellt.

> [!NOTE]
> Beim Erstellen Ihrer eigenen Beispiele verwenden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Andere APIs können erfordern, dass Sie den Schlüssel auf eine etwas andere Weise einschließen, aber das Muster ist für die meisten von ihnen relativ ähnlich.

Die Anforderung eines Schlüssels ermöglicht es dem API-Anbieter, die Nutzer der API für ihr Verhalten zur Rechenschaft zu ziehen. Sobald der Entwickler einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er beginnt, bösartige Aktivitäten mit der API auszuführen (z. B. das Verfolgen der Standorte von Personen oder das Versuchen, die API mit einer Vielzahl von Anfragen zu spammen, um sie zum Stillstand zu bringen). Die einfachste Maßnahme wäre, ihm einfach die API-Berechtigungen zu entziehen.

## Erweiterung des Mapquest-Beispiels

Fügen wir dem Mapquest-Beispiel etwas mehr Funktionalität hinzu, um zu zeigen, wie einige andere Funktionen der API genutzt werden können.

1. Erstellen Sie sich zu Beginn dieses Abschnitts eine Kopie der [Mapquest-Starterdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiele-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Gehen Sie als nächstes auf die [Mapquest-Entwicklerseite](https://developer.mapquest.com/), erstellen Sie ein Konto und dann einen Entwicklerschlüssel, um ihn mit Ihrem Beispiel zu verwenden. (Zum Zeitpunkt des Schreibens wurde es auf der Website als "consumer key" bezeichnet, und während des Schlüssel-Erstellungsprozesses wurde auch nach einer optionalen "callback URL" gefragt. Sie müssen hier keine URL angeben: lassen Sie das Feld einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Den Kartentyp ändern

Es gibt eine Reihe verschiedener Kartentypen, die mit der Mapquest-API angezeigt werden können. Machen Sie dies, indem Sie die folgende Zeile finden:

```js-nolint
layers: L.mapquest.tileLayer("map"),
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine hybride Karte anzuzeigen. Probieren Sie auch einige andere Werte aus. Die [`tileLayer`-Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen und enthält viele weitere Informationen.

### Verschiedene Steuerungen hinzufügen

Die Karte verfügt über eine Reihe von Steuerungen; standardmäßig wird nur eine Zoomsteuerung angezeigt. Sie können die verfügbaren Steuerungen mit der Methode `map.addControl()` erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach ein einfaches, voll funktionsfähiges Steuerungssatz, der standardmäßig in der oberen rechten Ecke positioniert wird. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für die Steuerung angeben, das eine `position`-Eigenschaft enthält, deren Wert ein String ist, der eine Position für die Steuerung spezifiziert. Versuchen Sie zum Beispiel Folgendes:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt weitere Steuerungstypen, beispielsweise [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind recht komplex und leistungsstark. Probieren Sie es aus und sehen Sie, was Sie erreichen können.

### Hinzufügen eines benutzerdefinierten Markers

Einen Marker (Icon) an einem bestimmten Punkt auf der Karte hinzuzufügen, ist einfach – Sie verwenden die [`L.marker()`](https://leafletjs.com/reference.html#marker)-Methode (die in den verwandten Leaflet.js-Dokumentationen dokumentiert zu sein scheint). Fügen Sie Ihrem Beispiel den folgenden Code hinzu, wiederum innerhalb von `window.onload`:

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

Wie Sie sehen können, nimmt dies im einfachsten Fall zwei Parameter an, ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt mit einer `icon`-Eigenschaft, die das an diesem Punkt anzuzeigende Symbol definiert.

Das Symbol wird mit einer [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) Methode definiert, die, wie Sie sehen können, Informationen wie Farbe und Größe des Markers enthält.

An das Ende des ersten Methodenaufrufs hängen wir `.bindPopup('This is Manchester!')`, das den Inhalt definiert, der angezeigt wird, wenn auf den Marker geklickt wird.

Schließlich verbinden wir `.addTo(map)` an das Ende der Kette, um den Marker tatsächlich auf der Karte hinzuzufügen.

Haben Sie Spaß mit den anderen in der Dokumentation gezeigten Optionen und sehen Sie, was Sie erreichen können! Mapquest bietet einige ziemlich erweiterte Funktionen, wie z.B. Anweisungen, Suchen usw.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Schauen wir uns nun ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Informationen über New York Times Nachrichtenartikel abzurufen und auf Ihrer Website anzuzeigen. Dieser API-Typ ist bekannt als **RESTful API** — anstatt Daten mithilfe der Funktionen einer JavaScript-Bibliothek zu erhalten, wie wir es bei Mapquest gemacht haben, erhalten wir Daten, indem wir HTTP-Anfragen an bestimmte URLs stellen, wobei Daten wie Suchbegriffe und andere Eigenschaften in der URL kodiert sind (oft als URL-Parameter). Dies ist ein häufiges Muster, dem Sie bei APIs begegnen werden.

Im Folgenden führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie man die NYTimes API verwendet, und zugleich eine allgemeinere Reihe von Schritten zu bieten, die Sie als Vorgehensweise für die Arbeit mit neuen APIs anwenden können.

### Die Dokumentation finden

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig, herauszufinden, wo sich die Dokumentation befindet, damit Sie herausfinden, welche Funktionen die API hat, wie Sie sie verwenden usw. Die Dokumentation der New York Times API finden Sie unter <https://developer.nytimes.com/>.

### Einen Entwicklerschlüssel erhalten

Die meisten APIs erfordern, dass Sie irgendeine Art von Entwicklerschlüssel verwenden, aus Gründen der Sicherheit und Verantwortlichkeit. Um sich für einen NYTimes-API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern Sie einen Schlüssel für die Article Search API an — erstellen Sie eine neue App, die diese API als die zu verwendende API auswählt (geben Sie einen Namen und eine Beschreibung ein, schalten Sie den Schalter unter "Article Search API" in die "Ein"-Position und klicken Sie dann auf „Erstellen“).
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Um das Beispiel zu starten, machen Sie eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiele-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden können. Zu Beginn enthält die Datei `script.js` eine Reihe von Variablen, die für das Setup des Beispiels benötigt werden; im Folgenden fügen wir die erforderliche Funktionalität hinzu.

Die App ermöglicht es Ihnen letztendlich, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die dann verwendet werden, um die Article Search API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispielsuche und Suchergebnisse, wie sie von der New York Article Search API abgerufen werden.](nytimes-example.png)

### Verbinden der API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Falle dieser API müssen Sie den API-Schlüssel als [GET](/de/docs/Web/HTTP/Reference/Methods/GET) Parameter jedes Mal einfügen, wenn Sie Daten vom Dienst über die korrekte URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript unter dem Kommentar `// Event listeners to control the functionality` hinzu. Diese ruft eine Funktion namens `submitSearch()` auf, wenn das Formular übermittelt wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen für `submitSearch()` und `fetchResults()` unter der vorherigen Zeile hinzu:

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

`submitSearch()` setzt die Seitennummer zuerst auf 0 zurück und ruft dann `fetchResults()` auf. Zuerst wird [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Event-Objekt angewendet, um das tatsächliche Absenden des Formulars zu verhindern (was das Beispiel unterbrechen würde). Als nächstes verwenden wir einige String-Manipulationen, um die vollständige URL zusammenzustellen, an die wir die Anfrage stellen wollen. Wir beginnen damit, die Teile zusammenzustellen, die wir für dieses Demo als obligatorisch erachten:

- Die Basis-URL (aus der `baseURL`-Variablen).
- Der API-Schlüssel, der im `api-key`-URL-Parameter spezifiziert werden muss (der Wert wird aus der `key`-Variablen entnommen).
- Die Seitennummer, die im `page`-URL-Parameter spezifiziert werden muss (der Wert wird aus der `pageNumber`-Variablen entnommen).
- Der Suchbegriff, der im `q`-URL-Parameter spezifiziert werden muss (der Wert wird aus dem Wert des `searchTerm`-Textes im {{htmlelement("input")}} entnommen).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie in einem Ausdruck angegeben, der über den `fq`-URL-Parameter übergeben wird. In diesem Fall wollen wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob die `startDate`- und `endDate`-Elemente Werte enthalten. Wenn sie das tun, fügen wir ihre Werte an die URL an, die in den `begin_date`- und `end_date`-URL-Parametern angegeben sind.

Eine vollständige URL würde dann etwa so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Sie finden weitere Details zu den URL-Parametern, die enthalten sein können, in den [NYTimes-Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel enthält rudimentäre Formularvalidierung — das Suchfeld muss ausgefüllt sein, bevor das Formular gesendet werden kann (erreicht mit dem `required`-Attribut), und die Datumsfelder haben `pattern`-Attribute, was bedeutet, dass sie nicht gesendet werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für weitere Details darüber, wie diese funktionieren.

### Anfordern von Daten von der API

Nun, da wir unsere URL konstruiert haben, lasst uns eine Anfrage an sie stellen. Wir werden dies mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie den folgenden Codeblock innerhalb der `fetchResults()`-Funktion, direkt über der schließenden geschweiften Klammer hinzu:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antworttextkörper mithilfe der [`json()`](/de/docs/Web/API/Response/json)-Funktion in JSON konvertieren und das resultierende JSON dann an die `displayResults()`-Funktion weitergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Wir erfassen und protokollieren auch alle Fehler, die möglicherweise geworfen werden.

### Anzeigen der Daten

Gut, schauen wir uns an, wie wir die Daten anzeigen werden. Fügen Sie die folgende Funktion unter Ihrer `fetchResults()`-Funktion hinzu.

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

Es gibt hier viel Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein gebräuchliches Muster, um den gesamten Inhalt eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir überprüfen ständig, ob die `<section>` ein erstes Kind hat, und wenn ja, entfernen wir es. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die von der Suche zurückgegebenen Artikel darstellen. Dies dient lediglich dazu, den folgenden Code ein wenig einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block überprüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel gleichzeitig zurück). Wenn dies der Fall ist, zeigen wir die {{htmlelement("nav")}} an, die die Paginierungs-Tasten _Vorherige 10_/_Nächste 10_ enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, sodass wir die Paginierungen nicht anzeigen müssen. Wir werden die Pagination-Funktionalität im nächsten Abschnitt verknüpfen.
- Der nächste `if ()`-Block überprüft, ob keine Artikel zurückgegeben werden. Wenn ja, versuchen wir nicht, etwas anzuzeigen — wir erstellen einen {{htmlelement("p")}} mit dem Text „Keine Ergebnisse zurück gegeben.“ und fügen ihn in die `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zunächst alle Elemente, die wir verwenden möchten, um jede Nachrichtenstory anzuzeigen, wir fügen die richtigen Inhalte in jedes ein und fügen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zum Anzeigen enthielten, haben wir die Article Search API-Referenz konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind relativ offensichtlich, aber ein paar sind erwähnenswert:
  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um alle Schlüsselwörter, die jedem Artikel zugeordnet sind, durchzugehen und jedes in einem eigenen {{htmlelement("span")}} in einem `<p>` einzufügen. Dies wurde getan, um es einfach zu machen, jeden zu stylen.
  - Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu überprüfen, ob jeder Artikel Bilder zugewiesen hat, da einige Storys keine haben. Wir zeigen nur das erste Bild an, wenn es existiert; ansonsten würde ein Fehler geworfen.

### Verkabeln der Paginierungstasten

Um die Paginierungstasten zum Laufen zu bringen, werden wir den Wert der `pageNumber`-Variable inkrementieren (oder dekrementieren) und die Abrufanfrage mit dem neuen Wert wieder ausführen, der im Seiten-URL-Parameter enthalten ist. Das funktioniert, weil die NYTimes-API immer nur 10 Ergebnisse gleichzeitig zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, werden die ersten 10 (0-9) zurückgegeben, wenn der `page`-URL-Parameter auf 0 gesetzt ist (oder überhaupt nicht enthalten ist — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, und so weiter.

Auf diese Weise können wir eine einfache Paginierungsfunktion schreiben.

1. Fügen Sie unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf diese beiden neuen ein, die die Funktionen `nextPage()` und `previousPage()` aufrufen, wenn die entsprechenden Tasten geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Hinzufügung, definieren wir die beiden Funktionen — fügen Sie jetzt diesen Code hinzu:

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

   Die erste Funktion inkrementiert die `pageNumber`-Variable und führt dann die `fetchResults()`-Funktion erneut aus, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert fast genauso in umgekehrter Reihenfolge, aber wir müssen auch den zusätzlichen Schritt unternehmen, zu überprüfen, dass `pageNumber` nicht bereits Null ist, bevor wir ihn dekrementieren— wenn die Abrufanfrage mit einem negativen `page`-URL-Parameter ausgeführt wird, könnten Fehler verursacht werden. Wenn die `pageNumber` bereits 0 ist, geben wir [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) aus der Funktion zurück — wenn wir uns bereits auf der ersten Seite befinden, müssen dieselben Ergebnisse nicht erneut geladen werden.

> [!NOTE]
> Sie finden unseren [fertigen NYTimes API-Beispielcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (siehe auch [hier live laufen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, um es zu studieren und daraus zu lernen — sehen Sie sich unser [YouTube-Video-Suche-Beispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/) an. Dieses verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Videoplayern anzuzeigen, sodass Sie sie ansehen können.

Dieses Beispiel ist interessant, weil es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine App zu erstellen. Die erste ist eine RESTful-API, während die zweite eher wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch bemerkenswert, dass beide APIs eine JavaScript-Bibliothek erfordern, die auf die Seite angewendet werden muss. Die RESTful-API hat Funktionen, die das Erstellen der HTTP-Anfragen und das Zurückgeben der Ergebnisse behandeln.

![Ein Screenshot einer Beispielsuche nach YouTube-Videos mit zwei verwandten APIs. Die linke Seite des Bildes zeigt eine Beispielsuche mit der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse mit der YouTube Iframe Player API.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr über dieses Beispiel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält ausführliche Kommentare, um zu erklären, wie es funktioniert.

Um es zum Laufen zu bringen, müssen Sie:

- Die [YouTube Data API Übersicht](https://developers.google.com/youtube/v3/getting-started) Dokumentation lesen.
- Stellen Sie sicher, dass Sie die Seite [Aktivierte APIs](https://console.cloud.google.com/apis/enabled) besuchen und in der Liste der APIs sicherstellen, dass der Status für die YouTube Data API v3 auf AN steht.
- Holen Sie sich einen API-Schlüssel von [Google Cloud](https://cloud.google.com/).
- Finden Sie den String `ENTER-API-KEY-HERE` im Quellcode, und ersetzen Sie ihn durch Ihren API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Es funktioniert nicht, wenn Sie es direkt im Browser ausführen (d.h. über eine `file://` URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs zur Hinzufügung von Funktionalitäten auf Ihren Websites gegeben.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

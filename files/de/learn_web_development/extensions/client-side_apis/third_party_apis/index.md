---
title: Drittanbieter-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind im Browser integriert, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, ihre Daten (z. B. das Anzeigen Ihres Twitter-Streams auf Ihrem Blog) oder Dienste (z. B. die Nutzung des Facebook-Logins, um Ihre Benutzer anzumelden) zu nutzen. Dieser Artikel befasst sich mit dem Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungsfälle der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekt-Grundlagen</a> und Kern-API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und dazugehörigen Mustern wie API-Schlüsseln.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful-API.</li>
          <li>Verwendung von Googles YouTube-APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Dritten bereitgestellt werden — in der Regel von Unternehmen wie Facebook, Twitter oder Google — um Ihnen Zugriff auf ihre Funktionalität über JavaScript zu ermöglichen und sie auf Ihrer Website zu verwenden. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Schauen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Drittanbieter-Servern

Browser-APIs sind im Browser integriert — Sie können sofort aus JavaScript auf sie zugreifen. So wird beispielsweise die Web Audio API, die wir im [Einführungsartikel gesehen haben](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work), über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt aufgerufen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Drittanbieter-Servern. Um von JavaScript aus auf sie zugreifen zu können, müssen Sie zuerst eine Verbindung zur API-Funktionalität herstellen und diese auf Ihrer Seite verfügbar machen. Dies erfordert in der Regel, dass Sie zunächst über ein {{htmlelement("script")}}-Element auf eine JavaScript-Bibliothek verlinken, die auf dem Server verfügbar ist, wie in unserem Mapquest-Beispiel zu sehen:

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

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und dann erstellen wir eine neue Karte mit der Methode `mapquest.map()`, die als Parameter die ID eines {{htmlelement("div")}}-Elements benötigt, in das Sie die Karte einfügen möchten ('map'), und ein Optionsobjekt, das die Details der spezifischen Karte enthält, die wir anzeigen möchten. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts an, eine Kartenebene vom Typ `map`, die angezeigt werden soll (erstellt mit der Methode `mapquest.tileLayer()`), und die Standard-Zoomstufe.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, mit dem Sie sich verbinden, übernimmt alle komplizierten Aufgaben, wie z. B. das Anzeigen der richtigen Kartenkacheln für den angezeigten Bereich usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders, indem sie vom Entwickler verlangen, eine HTTP-Anfrage an ein bestimmtes URL-Muster zu senden, um Daten abzurufen. Diese werden [RESTful-APIs genannt — wir werden später ein Beispiel zeigen](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern normalerweise API-Schlüssel

Die Sicherheit für Browser-APIs wird in der Regel durch Berechtigungsaufforderungen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser ist es, dass der Benutzer weiß, was auf den von ihm besuchten Websites passiert, und weniger wahrscheinlich Opfer einer böswilligen Nutzung einer API durch jemand anderen wird.

Drittanbieter-APIs haben ein leicht abweichendes Berechtigungssystem — für gewöhnlich verwenden sie Entwicklerschlüssel, um Entwicklern den Zugang zur API-Funktionalität zu ermöglichen, was eher dem Schutz des API-Anbieters als des Benutzers dient.

Sie finden eine ähnliche Zeile wie die folgende im Mapquest-API-Beispiel:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile spezifiziert einen API- oder Entwicklerschlüssel zur Verwendung in Ihrer Anwendung — der Entwickler der Anwendung muss einen Schlüssel beantragen und diesen dann in seinem Code einfügen, um Zugang zur Funktionalität der API zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter bereitgestellt.

> [!NOTE]
> Wenn Sie Ihre eigenen Beispiele erstellen, verwenden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Andere APIs erfordern möglicherweise, dass Sie den Schlüssel auf eine leicht andere Weise einfügen, aber das Muster ist bei den meisten von ihnen relativ ähnlich.

Die Anforderung eines Schlüssels ermöglicht es dem API-Anbieter, die Benutzer der API für ihre Handlungen zur Verantwortung zu ziehen. Wenn sich der Entwickler für einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er anfängt, etwas Böswilliges mit der API zu tun (z. B. die Position von Personen zu verfolgen oder zu versuchen, die API mit vielen Anfragen zu überlasten, um sie zu blockieren). Die einfachste Maßnahme wäre, einfach ihre API-Rechte zu widerrufen.

## Das Mapquest-Beispiel erweitern

Fügen wir dem Mapquest-Beispiel mehr Funktionalität hinzu, um zu zeigen, wie man einige andere Funktionen der API nutzt.

1. Erstellen Sie sich eine Kopie der [Mapquest-Starter-Datei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Als Nächstes müssen Sie zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und einen Entwicklerschlüssel erstellen, den Sie in Ihrem Beispiel verwenden können. (Zum Zeitpunkt des Schreibens wurde es auf der Website als „Consumer Key“ bezeichnet, und der Schlüsselerstellungsprozess fragte auch nach einer optionalen „Callback-URL“. Sie müssen hier keine URL angeben: Lassen Sie es einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Ändern des Kartentyps

Es gibt eine Reihe unterschiedlicher Kartentypen, die mit der Mapquest-API angezeigt werden können. Um dies zu tun, suchen Sie die folgende Zeile:

```js-nolint
layers: L.mapquest.tileLayer("map"),
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Hybrid-Karte anzuzeigen. Probieren Sie auch einige andere Werte aus. Die [Referenzseite `tileLayer`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Verschiedene Steuerungen hinzufügen

Die Karte verfügt über eine Reihe verschiedener Steuerungen; standardmäßig wird nur eine Zoomsteuerung angezeigt. Sie können die verfügbaren Steuerungen mithilfe der Methode `map.addControl()` erweitern; fügen Sie dies zu Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt nur ein einfaches, voll ausgestattetes Steuerungsset, das standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position anpassen, indem Sie ein Optionen-Objekt als Parameter für die Steuerung angeben, das eine `position`-Eigenschaft enthält, deren Wert ein String ist, der eine Position für die Steuerung angibt. Versuchen Sie dies zum Beispiel:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Typen von Steuerungen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/) und einige sind ziemlich komplex und leistungsstark. Experimentieren Sie ein wenig und sehen Sie, was Sie sich einfallen lassen können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Icons) an einem bestimmten Punkt auf der Karte ist einfach — Sie verwenden einfach die Methode [`L.marker()`](https://leafletjs.com/reference.html#marker) (die anscheinend in der zugehörigen Leaflet.js-Dokumentation dokumentiert ist). Fügen Sie den folgenden Code zu Ihrem Beispiel hinzu, wiederum innerhalb von `window.onload`:

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

Wie Sie sehen können, erfordert dies in seiner einfachsten Form zwei Parameter, ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionen-Objekt, das eine `icon`-Eigenschaft enthält, die das an diesem Punkt anzuzeigende Icon definiert.

Das Icon wird mithilfe einer Methode [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) definiert, die Informationen wie Farbe und Größe des Markers enthält.

An das Ende des ersten Methodenaufrufs hängen wir `.bindPopup('This is Manchester!')`, das den Inhalt definiert, der angezeigt wird, wenn der Marker angeklickt wird.

Schließlich hängen wir `.addTo(map)` an das Ende der Kette, um den Marker tatsächlich zur Karte hinzuzufügen.

Experimentieren Sie mit den anderen in der Dokumentation gezeigten Optionen und sehen Sie, was Ihnen einfällt! Mapquest bietet einige ziemlich erweiterte Funktionen, wie z. B. Wegbeschreibungen, Suchfunktionen usw.

> [!NOTE]
> Wenn Sie Probleme mit dem Beispiel haben, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Sehen wir uns jetzt ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API erlaubt Ihnen, New York Times-Nachrichtengeschichten abzurufen und auf Ihrer Seite anzuzeigen. Diese Art von API wird als **RESTful-API** bezeichnet — anstatt Daten mit den Funktionen einer JavaScript-Bibliothek wie bei Mapquest abzurufen, erhalten wir Daten durch Senden von HTTP-Anfragen an spezifische URLs, wobei Daten wie Suchbegriffe und andere Eigenschaften in der URL kodiert sind (oft als URL-Parameter). Dies ist ein häufiges Muster, das Ihnen bei APIs begegnen wird.

Im Folgenden führen wir Sie durch eine Übung, die Ihnen zeigt, wie Sie die NYTimes-API verwenden, die auch eine allgemeinere Reihe von Schritten bietet, die Sie als Ansatz für die Arbeit mit neuen APIs verwenden können.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig herauszufinden, wo die Dokumentation ist, damit Sie herausfinden können, welche Funktionen die API hat, wie Sie sie verwenden usw. Die API-Dokumentation der New York Times finden Sie unter <https://developer.nytimes.com/>.

### Erhalten Sie einen Entwicklerschlüssel

Die meisten APIs erfordern, dass Sie eine Art Entwicklerschlüssel verwenden, aus Gründen der Sicherheit und Verantwortlichkeit. Um sich für einen NYTimes-API-Schlüssel anzumelden, befolgen Sie die Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern Sie einen Schlüssel für die Article Search API an — erstellen Sie eine neue App, indem Sie diese als die API auswählen, die Sie verwenden möchten (füllen Sie einen Namen und eine Beschreibung aus, schalten Sie den Schalter unter der „Article Search API“ in die Position „An“, und klicken Sie dann auf „Create“).
2. Erhalten Sie den API-Schlüssel von der resultierenden Seite.
3. Um das Beispiel zu starten, erstellen Sie eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden können. Zu Beginn enthält die Datei `script.js` eine Anzahl von Variablen, die für das Setup des Beispiels benötigt werden; im Folgenden werden wir die erforderliche Funktionalität ausfüllen.

Die App ermöglicht Ihnen letztendlich, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die dann verwendet werden, um die Article Search API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispiel-Suchanfrage und Suchergebnisse, wie sie von der New York Article Search API abgerufen wurden.](nytimes-example.png)

### Verbinden Sie die API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Reference/Methods/GET)-Parameter jedes Mal einfügen, wenn Sie Daten vom Dienst an der richtigen URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript unter dem Kommentar `// Event listeners to control the functionality` hinzu. Dies führt eine Funktion namens `submitSearch()` aus, wenn das Formular abgeschickt wird (der Button wird gedrückt).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Nun fügen Sie die Funktionsdefinitionen `submitSearch()` und `fetchResults()` unter der vorhergehenden Zeile hinzu:

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

`submitSearch()` setzt die Seitennummer zunächst auf 0 zurück und ruft dann `fetchResults()` auf. Diese ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um zu verhindern, dass das Formular tatsächlich abgeschickt wird (was das Beispiel zerstören würde). Als nächstes verwenden wir einige String-Manipulationen, um die vollständige URL zusammenzustellen, unter der wir die Anfrage machen werden. Wir beginnen, indem wir die Teile zusammenstellen, die wir für dieses Demo als obligatorisch betrachten:

- Die Basis-URL (genommen aus der Variable `baseURL`).
- Der API-Schlüssel, der im URL-Parameter `api-key` spezifiziert werden muss (der Wert wird aus der Variablen `key` entnommen).
- Die Seitennummer, die im URL-Parameter `page` spezifiziert werden muss (der Wert wird aus der Variablen `pageNumber` entnommen).
- Der Suchbegriff, der im URL-Parameter `q` spezifiziert werden muss (der Wert wird aus dem Wert des Text-{{htmlelement("input")}} `searchTerm` entnommen).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie er in einem Ausdruck angegeben wird, der über den URL-Parameter `fq` übergeben wird. In diesem Fall möchten wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob die Elemente `startDate` und `endDate` Werte enthalten. Wenn sie das tun, hängen wir ihre Werte an die URL an, die in `begin_date` und `end_date` URL-Parametern jeweils spezifiziert sind.

Also würde eine vollständige URL am Ende etwa so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details zu den URL-Parametern finden Sie in den [NYTimes-Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel hat rudimentäre Formular-Datenvalidierung — das Suchwortfeld muss ausgefüllt werden, bevor das Formular abgeschickt werden kann (erreicht durch die Verwendung des `required`-Attributs) und die Datumsfelder haben `pattern`-Attribute spezifiziert, was bedeutet, dass sie nicht abgeschickt werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Weitere Details, wie diese funktionieren, finden Sie unter [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

### Anfordern von Daten von der API

Da wir nun unsere URL konstruiert haben, lassen Sie uns eine Anfrage an sie stellen. Wir werden dies mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie den folgenden Codeblock innerhalb der Funktion `fetchResults()` direkt über der schließenden geschweiften Klammer hinzu:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwortkörper mit der [`json()`](/de/docs/Web/API/Response/json) Funktion in JSON konvertieren und dann das resultierende JSON an die Funktion `displayResults()` übergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Zusätzlich fangen wir Fehler ab und protokollieren sie, die möglicherweise auftreten könnten.

### Anzeigen der Daten

Okay, lassen Sie uns anschauen, wie wir die Daten anzeigen werden. Fügen Sie die folgende Funktion unterhalb Ihrer Funktion `fetchResults()` hinzu.

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
      const para = document.createElement("p");
      const keywordPara = document.createElement("p");
      keywordPara.classList.add("keywords");

      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para.textContent = current.snippet;
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
      article.appendChild(para);
      article.appendChild(keywordPara);
      section.appendChild(article);
    }
  }
}
```

Hier ist viel Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein häufiges Muster, das verwendet wird, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir überprüfen immer wieder, ob das `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die Artikel repräsentieren, die von der Suche zurückgegeben werden. Dies geschieht rein um den folgenden Code etwas einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block überprüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel auf einmal zurück). Wenn ja, zeigen wir das {{htmlelement("nav")}} an, das die _Vorherigen 10_/_Nächsten 10_-Pagination-Schaltflächen enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, sodass wir die Pagination-Schaltflächen nicht anzeigen müssen. Wir werden die Pagination-Funktionalität im nächsten Abschnitt verbinden.
- Der nächste `if ()`-Block überprüft, ob keine Artikel zurückgegeben werden. Wenn ja, versuchen wir nicht, welche anzuzeigen — wir erstellen eine {{htmlelement("p")}}, die den Text "Keine Ergebnisse gefunden." enthält und fügen es in das `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zuerst alle Elemente, die wir verwenden möchten, um jede Nachrichtenstory anzuzeigen, fügen den richtigen Inhalt in jedes ein und fügen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikel-Objekten die richtigen Daten zum Anzeigen enthalten, haben wir die Article Search API-Referenz konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber einige sind erwähnenswert:
  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um alle Schlagwörter durchzugehen, die jedem Artikel zugeordnet sind, und jedes in ein eigenes {{htmlelement("span")}} in ein `<p>`-Element einzufügen. Dies wurde durchgeführt, um es einfach zu machen, jedes zu stylen.
  - Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu überprüfen, ob jeder Artikel mit Bildern verknüpft ist, da einige Artikel keine enthalten. Wir zeigen das erste Bild nur an, wenn es existiert; andernfalls würde ein Fehler ausgelöst.

### Verbindung der Paginierungs-Schaltflächen

Um die Paginierungs-Schaltflächen funktionsfähig zu machen, werden wir den Wert der Variablen `pageNumber` inkrementieren (oder dekrementieren) und dann die Abrufanfrage mit dem neuen Wert, der in den URL-Parameter der Seite eingefügt wird, erneut durchführen. Dies funktioniert, weil die NYTimes API nur 10 Ergebnisse auf einmal zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, wird sie die ersten 10 zurückgeben (0-9), wenn der URL-Parameter `page` auf 0 gesetzt ist (oder gar nicht eingefügt wird — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, und so weiter.

Dadurch können wir eine einfache Paginierungsfunktion schreiben.

1. Fügen Sie unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf diese zwei neuen ein, die die Funktionen `nextPage()` und `previousPage()` aufrufen, wenn die relevanten Schaltflächen geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Ergänzung definieren wir die beiden Funktionen — fügen Sie jetzt diesen Code hinzu:

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

   Die erste Funktion inkrementiert die Variable `pageNumber`, und ruft dann die Funktion `fetchResults()` erneut auf, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert fast genauso umgekehrt, aber wir müssen auch den zusätzlichen Schritt unternehmen, zu überprüfen, ob `pageNumber` nicht bereits null ist, bevor wir sie dekrementieren — wenn die Abrufanfrage mit einem negativen URL-Parameter `page` ausgeführt wird, könnte dies Fehler verursachen. Wenn die `pageNumber` bereits 0 ist, [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) wir aus der Funktion aus — wenn wir bereits auf der ersten Seite sind, müssen wir die gleichen Ergebnisse nicht noch einmal laden.

> [!NOTE]
> Sie können unseren [fertigen NYTimes API Beispielcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) finden (auch [sehen Sie es hier live laufen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, um es zu studieren und davon zu lernen — siehe unser [YouTube-Videosuche-Beispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). Dies verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/) zur Suche nach YouTube-Videos und Rückgabe von Ergebnissen.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Video-Playern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, da es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine App zu erstellen. Die erste ist eine RESTful-API, während die zweite mehr wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch erwähnenswert, dass beide APIs eine JavaScript-Bibliothek erfordern, die auf der Seite angewendet wird. Die RESTful-API hat Funktionen verfügbar, um die HTTP-Anfragen zu bearbeiten und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispiel-YouTube-Videosuche unter Verwendung von zwei verwandten APIs. Die linke Seite des Bildes zeigt eine Beispiel-Suchanfrage unter Verwendung der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse unter Verwendung der YouTube IFrame Player API.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr über dieses Beispiel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) hat detaillierte Kommentare eingefügt, um zu erklären, wie es funktioniert.

Um es zum Laufen zu bringen, müssen Sie:

- Lesen Sie die [YouTube Data API-Übersicht](https://developers.google.com/youtube/v3/getting-started) Dokumentation.
- Stellen Sie sicher, dass Sie die [Seite Aktivierte APIs](https://console.cloud.google.com/apis/enabled) besuchen und stellen Sie sicher, dass in der Liste der APIs der Status auf „An“ für die YouTube Data API v3 gesetzt ist.
- Holen Sie sich einen API-Schlüssel von [Google Cloud](https://cloud.google.com/).
- Finden Sie den String `ENTER-API-KEY-HERE` im Quellcode und ersetzen Sie ihn mit Ihrem API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Es wird nicht funktionieren, wenn Sie es direkt im Browser ausführen (d.h. über eine `file://`-URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs gegeben, um Funktionalität zu Ihren Websites hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

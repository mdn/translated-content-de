---
title: Third-party APIs
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

Die APIs, die wir bisher behandelt haben, sind in den Browser integriert, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die Entwicklern ermöglichen, ihre Daten zu nutzen (z. B. um Ihren Twitter-Stream auf Ihrem Blog anzuzeigen) oder Dienste zu verwenden (z. B. Facebook-Login, um sich bei Ihren Nutzern anzumelden). Dieser Artikel beleuchtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt typische Verwendungen der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen der clientseitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie Drittanbieter-APIs funktionieren und wie man sie verwendet, um Ihre Websites zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Drittanbietern — in der Regel Unternehmen wie Facebook, Twitter oder Google — bereitgestellt werden, um Ihnen den Zugriff auf ihre Funktionalität über JavaScript zu ermöglichen und diese auf Ihrer Website zu verwenden. Ein sehr offensichtliches Beispiel ist die Verwendung von Kartierungs-APIs zur Anzeige benutzerdefinierter Karten auf Ihren Seiten.

Schauen wir uns ein [einfaches Mapquest API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und verwenden es, um zu veranschaulichen, wie Drittanbieter-APIs sich von Browser-APIs unterscheiden.

> [!NOTE]
> Vielleicht möchten Sie einfach [alle unsere Codebeispiele](/de/docs/Learn#getting_our_code_examples) auf einmal erhalten, in diesem Fall können Sie dann einfach im Repo nach den benötigten Beispieldateien in jedem Abschnitt suchen.

### Sie befinden sich auf Drittanbieter-Servern

Browser-APIs sind im Browser integriert — Sie können sofort von JavaScript darauf zugreifen. Zum Beispiel wird die Web Audio API, die wir [im einführenden Artikel](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#how_do_apis_work) gesehen haben, mit dem nativen [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt aufgerufen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Drittanbieter-Servern. Um von JavaScript auf sie zuzugreifen, müssen Sie zuerst eine Verbindung zur API-Funktionalität herstellen und sie auf Ihrer Seite verfügbar machen. Dies geschieht typischerweise durch das Verlinken zu einer JavaScript-Bibliothek, die auf dem Server über ein {{htmlelement("script")}}-Element verfügbar ist, wie in unserem Mapquest-Beispiel:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Sie können dann die in dieser Bibliothek verfügbaren Objekte verwenden. Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und dann erstellen wir eine neue Karte mit der Methode `mapquest.map()`, die als Parameter die ID eines {{htmlelement("div")}}-Elements enthält, in dem Sie die Karte anzeigen möchten ('map'), und ein Optionsobjekt, das die Details der bestimmten Karte enthält, die wir anzeigen möchten. In diesem Fall spezifizieren wir die Koordinaten des Kartenmittelpunkts, eine Kartenebene des Typs `map` zur Anzeige (erstellt mit der Methode `mapquest.tileLayer()`) und den Standard-Zoomlevel.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, mit dem Sie verbunden sind, kümmert sich um alle komplizierten Dinge, wie das Anzeigen der richtigen Kacheln für den angezeigten Bereich usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders, indem sie vom Entwickler verlangen, eine HTTP-Anfrage an ein spezifisches URL-Muster zu stellen, um Daten abzurufen. Diese werden [RESTful APIs genannt — wir werden später ein Beispiel zeigen](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern normalerweise API-Schlüssel

Die Sicherheit für Browser-APIs wird in der Regel durch Berechtigungsabfragen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser ist es, dass der Benutzer weiß, was auf den Websites, die er besucht, passiert und weniger wahrscheinlich Opfer von jemandem wird, der eine API auf bösartige Weise verwendet.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem — sie verwenden in der Regel Entwicklerschlüssel, um Entwicklern den Zugriff auf die API-Funktionalität zu ermöglichen, was mehr dazu dient, den API-Anbieter als den Benutzer zu schützen.

Sie finden eine Zeile ähnlich der folgenden im Mapquest API-Beispiel:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwicklerschlüssel an, der in Ihrer Anwendung verwendet werden soll — der Entwickler der Anwendung muss einen Schlüssel beantragen und ihn dann in seinen Code einfügen, um Zugang zur Funktionalität der API zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter bereitgestellt.

> [!NOTE]
> Wenn Sie Ihre eigenen Beispiele erstellen, verwenden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Andere APIs können erfordern, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist relativ ähnlich für die meisten von ihnen.

Das Erfordern eines Schlüssels ermöglicht es dem API-Anbieter, Benutzer der API für ihre Aktionen verantwortlich zu halten. Wenn der Entwickler sich für einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er beginnt, die API in bösartiger Weise zu verwenden (z. B. die Verfolgung des Standorts von Personen oder der Versuch, die API mit vielen Anfragen zu überfluten, um deren Funktionieren zu unterbinden). Die einfachste Maßnahme wäre, deren API-Berechtigungen einfach zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Lassen Sie uns dem Mapquest-Beispiel weitere Funktionalitäten hinzufügen, um zu zeigen, wie man einige andere Funktionen der API nutzt.

1. Um diesen Abschnitt zu beginnen, machen Sie sich eine Kopie der [Mapquest-Starterdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie bereits [das Beispiele-Repository geklont haben](/de/docs/Learn#getting_our_code_examples), haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Als Nächstes müssen Sie zur [Mapquest Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und dann einen Entwicklerschlüssel erstellen, den Sie mit Ihrem Beispiel verwenden können. (Zum Zeitpunkt des Schreibens wurde es auf der Seite als "Verbraucherschlüssel" bezeichnet, und der Schlüssel-Erstellungsprozess fragte auch nach einer optionalen "Callback-URL". Sie müssen hier keine URL ausfüllen: lassen Sie sie einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Änderung des Kartentyps

Es gibt eine Reihe unterschiedlicher Kartentypen, die mit der Mapquest API angezeigt werden können. Dazu suchen Sie die folgende Zeile:

```js
layers: L.mapquest.tileLayer("map");
```

Versuchen Sie, `'map'` in `'hybrid'` so zu ändern, dass eine Hybridkarte angezeigt wird. Probieren Sie auch einige andere Werte aus. Die [`tileLayer`-Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie eine Menge weiterer Informationen.

### Hinzufügen verschiedener Steuerungen

Die Karte hat eine Reihe verschiedener Steuerelemente verfügbar; standardmäßig wird nur ein Zoom-Steuerelement angezeigt. Sie können die verfügbaren Steuerelemente erweitern, indem Sie die Methode `map.addControl()` verwenden; fügen Sie dies zu Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach eine einfache, umfassende Steuereinheit, die standardmäßig in der oberen rechten Ecke platziert ist. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für die Steuerung angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenkette ist, die eine Position für das Steuerelement angibt. Versuchen Sie dies zum Beispiel:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Arten von Steuerelementen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind ziemlich komplex und leistungsstark. Spielen Sie herum und sehen Sie, was Sie herausfinden können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Symbols) an einem bestimmten Punkt auf der Karte ist einfach — Sie verwenden einfach die [`L.marker()`](https://leafletjs.com/reference.html#marker)-Methode (die in der zugehörigen Leaflet.js-Dokumentation dokumentiert zu sein scheint). Fügen Sie den folgenden Code zu Ihrem Beispiel hinzu, wiederum innerhalb von `window.onload`:

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

Wie Sie sehen können, nimmt dies im einfachsten Fall zwei Parameter: ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt, das eine `icon`-Eigenschaft enthält, die das Symbol definiert, das an diesem Punkt angezeigt werden soll.

Das Symbol wird über eine [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/)-Methode definiert, die wie Sie sehen können Informationen wie Farb- und Größenmarker enthält.

Am Ende des ersten Methodenaufrufs verketten wir `.bindPopup('This is Manchester!')`, das den Inhalt definiert, der angezeigt wird, wenn der Marker angeklickt wird.

Schließlich verketten wir `.addTo(map)` am Ende der Kette, um den Marker tatsächlich zur Karte hinzuzufügen.

Spielen Sie mit den anderen in der Dokumentation gezeigten Optionen und sehen Sie, was Sie herausfinden können! Mapquest bietet einige ziemlich fortschrittliche Funktionen, wie Wegbeschreibungen, Suchen usw.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code gegen unsere [fertige Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Schauen wir uns nun ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Informationen zu New York Times-Nachrichtengeschichten abzurufen und sie auf Ihrer Seite anzuzeigen. Diese Art von API wird als **RESTful API** bezeichnet — anstatt Daten mithilfe der Funktionen einer JavaScript-Bibliothek wie bei Mapquest zu erhalten, erhalten wir die Daten, indem wir HTTP-Anfragen an spezifische URLs stellen, wobei Daten wie Suchbegriffe und andere Eigenschaften in der URL kodiert sind (oft als URL-Parameter). Dies ist ein häufig anzutreffendes Muster bei APIs.

Im Folgenden führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie Sie die NYTimes API verwenden, die auch eine allgemeinere Reihe von Schritten bereitstellt, die Sie als Ansatz zur Arbeit mit neuen APIs verwenden können.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig herauszufinden, wo sich die Dokumentation befindet, damit Sie herausfinden können, welche Funktionen die API hat, wie Sie sie verwenden usw. Die Dokumentation der New York Times API befindet sich unter <https://developer.nytimes.com/>.

### Holen Sie sich einen Entwicklerschlüssel

Die meisten APIs erfordern, dass Sie eine Art von Entwicklerschlüssel verwenden, aus Gründen der Sicherheit und Nachverfolgbarkeit. Um sich für einen NYTimes API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Beantragen Sie einen Schlüssel für die Article Search API — erstellen Sie eine neue App, indem Sie diese als die API auswählen, die Sie verwenden möchten (füllen Sie einen Namen und eine Beschreibung aus, schalten Sie den Schalter unter der "Article Search API" auf die Position "ein" und klicken Sie dann auf "Erstellen").
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Erstellen Sie nun, um das Beispiel zu beginnen, eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie bereits [das Beispiele-Repository geklont haben](/de/docs/Learn#getting_our_code_examples), haben Sie bereits eine Kopie dieser Dateien im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_. Das `script.js`-Datei enthält anfänglich eine Reihe von Variablen, die für das Setup des Beispiels benötigt werden; unten werden wir die erforderliche Funktionalität auffüllen.

Die App wird Ihnen am Ende erlauben, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die sie dann verwendet, um die Artikel-Such-API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispielsuche und Suchergebnisse, wie sie von der New York Times Article Search API abgerufen wurden.](nytimes-example.png)

### Verbinden Sie die API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Bei dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Methods/GET)-Parameter jedes Mal einfügen, wenn Sie Daten von dem Dienst an der richtigen URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript hinzu, unter dem Kommentar `// Event listeners to control the functionality`. Dies führt eine Funktion namens `submitSearch()` aus, wenn das Formular abgeschickt wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen `submitSearch()` und `fetchResults()` unterhalb der vorherigen Zeile hinzu:

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

`submitSearch()` setzt die Seitennummer anfangs auf 0 zurück und ruft dann `fetchResults()` auf. Dies ruft zunächst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Event-Objekt auf, um das tatsächliche Absenden des Formulars zu verhindern (was das Beispiel unterbrechen würde). Als nächstes verwenden wir einige String-Manipulationen, um die vollständige URL zu erstellen, zu der wir die Anfrage stellen werden. Wir beginnen damit, die Teile zusammenzustellen, die wir für diese Demo als obligatorisch erachten:

- Die Basis-URL (aus der Variablen `baseURL` entnommen).
- Der API-Schlüssel, der im `api-key`-URL-Parameter angegeben werden muss (der Wert wird aus der Variablen `key` entnommen).
- Die Seitennummer, die im `page`-URL-Parameter angegeben werden muss (der Wert wird aus der Variablen `pageNumber` entnommen).
- Der Suchbegriff, der im `q`-URL-Parameter angegeben werden muss (der Wert wird aus dem Wert des Text-{{htmlelement("input")}} `searchTerm` entnommen).
- Der Dokumententyp, um Ergebnisse zurückzugeben, wie in einem Ausdruck angegeben, der über den `fq`-URL-Parameter übergeben wird. In diesem Fall wollen wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Blöcke, um zu überprüfen, ob die Elemente `startDate` und `endDate` Werte enthalten, die auf ihnen ausgefüllt wurden. Falls ja, fügen wir ihre Werte als URL-Parameter `begin_date` und `end_date` an die URL an.

Eine vollständige URL würde somit folgendermaßen aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details dazu, welche URL-Parameter enthalten sein können, finden Sie in den [NYTimes Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel hat rudimentäre Formularvalidierung — das Suchbegriffsfeld muss ausgefüllt sein, bevor das Formular abgeschickt werden kann (erreicht durch das Attribut `required`), und die Datumsfelder haben `pattern`-Attribute angegeben, was bedeutet, dass sie nicht abgeschickt werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Weitere Informationen darüber, wie diese funktionieren, finden Sie unter [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation).

### Anfordern von Daten von der API

Nachdem wir unsere URL erstellt haben, lassen Sie uns eine Anfrage an sie stellen. Wir werden dies über die [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie den folgenden Codeblock innerhalb der Funktion `fetchResults()` hinzu, direkt über der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage durch, indem wir unsere Variable `url` an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwortkörper mittels der Funktion [`json()`](/de/docs/Web/API/Response/json) in JSON konvertieren und das resultierende JSON an die Funktion `displayResults()` übergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Wir fangen auch Fehler ab und protokollieren sie, die auftreten könnten.

### Darstellung der Daten

OK, schauen wir uns an, wie wir die Daten anzeigen werden. Fügen Sie die folgende Funktion unterhalb Ihrer Funktion `fetchResults()` hinzu.

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

Hier ist viel Code vorhanden; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein gängiges Muster, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir überprüfen ständig, ob `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Anschließend setzen wir die Variable `articles` gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die durch die Suche zurückgegebenen Artikel repräsentieren. Dies wird nur gemacht, um den folgenden Code ein wenig einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block überprüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel gleichzeitig zurück). Wenn ja, zeigen wir das {{htmlelement("nav")}}, das die _Vorherige 10_/_Nächste 10_-Paginierungsschaltflächen enthält, an. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, sodass wir die Paginierungsschaltflächen nicht anzeigen müssen. Wir werden die Paginierungsfunktionalität im nächsten Abschnitt behandeln.
- Der nächste `if ()`-Block prüft, ob keine Artikel zurückgegeben werden. Wenn ja, versuchen wir nicht, sie anzuzeigen — wir erstellen ein {{htmlelement("p")}}, das den Text "Keine Ergebnisse zurückgegeben." enthält, und fügen es in das `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zunächst alle Elemente, die wir verwenden möchten, um jede Nachrichtengeschichte anzuzeigen, fügen den richtigen Inhalt in jedes ein und fügen sie dann an den entsprechenden Stellen ins DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zur Anzeige enthalten, haben wir die Referenz der Article Search API konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber einige sind erwähnenswert:

  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um alle Schlüsselwörter, die jedem Artikel zugeordnet sind, zu durchlaufen und jedes in sein eigenes {{htmlelement("span")}}, innerhalb eines `<p>`, einzufügen. Dies wurde gemacht, um jedes leicht stylen zu können.
  - Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu überprüfen, ob jeder Artikel mit Bildern assoziiert ist, da einige Geschichten dies nicht tun. Wir zeigen nur das erste Bild an, wenn es existiert; andernfalls würde ein Fehler geworfen werden.

### Verkabeln der Paginierungsschaltflächen

Um die Paginierungsschaltflächen funktionsfähig zu machen, werden wir den Wert der `pageNumber`-Variable inkrementieren (oder dekrementieren) und dann die Anfrage erneut mit dem neuen Wert, der im URL-Parameter der Seite enthalten ist, ausführen lassen. Dies funktioniert, weil die NYTimes API nur 10 Ergebnisse gleichzeitig zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, gibt sie die ersten 10 (0-9) zurück, wenn der `page`-URL-Parameter auf 0 gesetzt ist (oder gar nicht enthalten ist — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, und so weiter.

Dies ermöglicht es uns, eine einfache Paginierungsfunktion zu schreiben.

1. Fügen Sie unter dem bestehenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf diese beiden neuen hinzu, die bewirken, dass die Funktionen `nextPage()` und `previousPage()` aufgerufen werden, wenn die entsprechenden Schaltflächen angeklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Ergänzung definieren wir die zwei Funktionen — fügen Sie diesen Code jetzt hinzu:

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

   Die erste Funktion inkrementiert die `pageNumber`-Variable, um dann die `fetchResults()`-Funktion erneut auszuführen und die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert fast exakt gleich in umgekehrter Reihenfolge, aber wir müssen zusätzlich überprüfen, dass `pageNumber` nicht bereits Null ist, bevor wir es dekrementieren — wenn die Anfrage mit einem negativen `page`-URL-Parameter durchgeführt wird, könnte dies Fehler verursachen. Wenn `pageNumber` bereits 0 ist, [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) wir aus der Funktion — wenn wir bereits auf der ersten Seite sind, brauchen wir dieselben Ergebnisse nicht noch einmal zu laden.

> [!NOTE]
> Sie können unseren [fertigen NYTimes API-Beispielcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) finden (auch [sehen Sie es live hier laufen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, das Sie studieren und daraus lernen können — siehe unser [YouTube-Video-Suchbeispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). Dies verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um nach YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Videobeispiele in IFrame-Videoplayern anzuzeigen, sodass Sie sie ansehen können.

Dieses Beispiel ist interessant, da es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine App zu erstellen. Die erste ist eine RESTful API, während die zweite eher wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch erwähnenswert, dass beide APIs eine JavaScript-Bibliothek erfordern, die auf die Seite angewendet wird. Die RESTful API hat Funktionen verfügbar, um die HTTP-Anfragen zu bearbeiten und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispielsuche von YouTube-Videos unter Verwendung zweier verwandter APIs. Die linke Seite des Bildes zeigt eine Beispielsuchanfrage unter Verwendung der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse unter Verwendung der YouTube Iframe Player API.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr zu diesem Beispiel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält detaillierte Kommentare, um zu erklären, wie es funktioniert.

Um es zum Laufen zu bringen, müssen Sie:

- Die [YouTube Data API-Übersicht](https://developers.google.com/youtube/v3/getting-started) Dokumentation lesen.
- Stellen Sie sicher, dass Sie die [Enabled APIs-Seite](https://console.cloud.google.com/apis/enabled) besuchen, und in der Liste der APIs den Status auf EIN für die YouTube Data API v3 setzen.
- Holen Sie sich einen API-Schlüssel von [Google Cloud](https://cloud.google.com/).
- Finden Sie die Zeichenkette `ENTER-API-KEY-HERE` im Quellcode und ersetzen Sie sie durch Ihren API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Es funktioniert nicht, wenn Sie es direkt im Browser laufen lassen (d.h. über eine `file://`-URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs gegeben, um Funktionalitäten zu Ihren Webseiten hinzuzufügen.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

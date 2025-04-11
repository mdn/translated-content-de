---
title: Drittanbieter-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die APIs, die wir bisher behandelt haben, sind in den Browser integriert, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs, die Entwicklern ermöglichen, ihre Daten (z.B. das Anzeigen eines Twitter-Streams auf Ihrem Blog) oder Dienste (z.B. die Verwendung der Facebook-Anmeldung, um Ihre Nutzer anzumelden) zu nutzen. Dieser Artikel beleuchtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungen der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Kenntnisse wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und zugehörige Muster wie API-Schlüssel.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful-API.</li>
          <li>Verwendung der YouTube-APIs von Google.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind von Drittanbietern — meist Unternehmen wie Facebook, Twitter oder Google — bereitgestellte APIs, die es Ihnen ermöglichen, deren Funktionalitäten über JavaScript zu nutzen und auf Ihrer Website einzusetzen. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten darzustellen.

Sehen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Drittanbieter-Servern

Browser-APIs sind im Browser integriert — Sie können sofort von JavaScript auf sie zugreifen. Zum Beispiel wird die Web Audio API, die wir im [Einführungsartikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work) beschrieben haben, über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt aufgerufen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Drittanbieter-Servern. Um von JavaScript aus darauf zuzugreifen, müssen Sie zuerst die API-Funktionalität verbinden und auf Ihrer Seite verfügbar machen. Dies erfolgt typischerweise durch das Einfügen einer JavaScript-Bibliothek, die auf dem Server über ein {{htmlelement("script")}}-Element verfügbar ist, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Dann können Sie beginnen, die Objekte zu verwenden, die in dieser Bibliothek verfügbar sind. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und dann erstellen wir mit der `mapquest.map()`-Methode eine neue Karte. Diese Methode nimmt als Parameter die ID eines {{htmlelement("div")}}-Elements an, in dem die Karte angezeigt werden soll ('map'), und ein Optionsobjekt, das die Details der bestimmten Karte enthält, die wir anzeigen möchten. In diesem Fall geben wir die Koordinaten des Zentrums der Karte an, eine Kartenebene des Typs `map`, die angezeigt werden soll (erstellt mit der `mapquest.tileLayer()` Methode), und den Standard-Zoomlevel.

Das ist alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, zu dem Sie eine Verbindung herstellen, übernimmt alle komplizierten Aufgaben, wie das Anzeigen der richtigen Kartenziegel für den dargestellten Bereich usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders, indem sie erfordern, dass der Entwickler eine HTTP-Anfrage an ein spezifisches URL-Muster stellt, um Daten abzurufen. Diese werden [RESTful-APIs genannt – wir werden später ein Beispiel zeigen](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern normalerweise API-Schlüssel

Die Sicherheit für Browser-APIs wird in der Regel durch Berechtigungsabfragen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser Abfragen besteht darin, dass der Benutzer darüber informiert ist, was auf den von ihm besuchten Websites vor sich geht und weniger Gefahr läuft, durch die missbräuchliche Verwendung einer API betroffen zu sein.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem – sie neigen dazu, Entwicklerschlüssel zu verwenden, um Entwicklern den Zugriff auf die API-Funktionalität zu ermöglichen, was mehr dem Schutz des API-Anbieters als des Benutzers dient.

Sie finden eine Zeile ähnlich der folgenden im Mapquest-API-Beispiel:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwicklerschlüssel an, der in Ihrer Anwendung verwendet werden soll — der Entwickler der Anwendung muss einen Schlüssel beantragen und dann in seinem Code einfügen, um Zugriff auf die Funktionalität der API zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter bereitgestellt.

> [!NOTE]
> Wenn Sie eigene Beispiele erstellen, sollten Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters verwenden.

Andere APIs verlangen möglicherweise, dass Sie den Schlüssel auf eine geringfügig andere Weise einbinden, aber das Muster ist bei den meisten relativ ähnlich.

Das Erfordern eines Schlüssels ermöglicht es dem API-Anbieter, die Nutzer der API für ihre Handlungen zur Verantwortung zu ziehen. Wenn sich der Entwickler für einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt und es können Maßnahmen ergriffen werden, wenn er beginnt, etwas Böswilliges mit der API zu tun (wie etwa das Verfolgen von Personenstandorten oder Versuche, die API mit vielen Anfragen zu überschütten, um sie außer Betrieb zu setzen). Die einfachste Maßnahme wäre, einfach ihre API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Fügen wir dem Mapquest-Beispiel noch mehr Funktionalität hinzu, um zu zeigen, wie einige andere Funktionen der API verwendet werden können.

1. Um diesen Abschnitt zu starten, machen Sie sich eine Kopie der [Mapquest-Startdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Als nächstes müssen Sie zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und dann einen Entwicklerschlüssel erstellen, der in Ihrem Beispiel verwendet werden kann. (Zum Zeitpunkt der Erstellung dieser Dokumentation wurde es auf der Website als "Verbraucherschlüssel" bezeichnet, und der Schlüssel-Erstellungsprozess fragte auch nach einer optionalen "Callback-URL". Sie müssen hier keine URL angeben: Lassen Sie sie einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Änderung des Kartentyps

Es gibt eine Reihe von verschiedenen Kartentypen, die mit der Mapquest-API angezeigt werden können. Dazu suchen Sie die folgende Zeile:

```js
layers: L.mapquest.tileLayer("map");
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Hybridkarte anzuzeigen. Probieren Sie auch einige andere Werte aus. Die [`tileLayer`-Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügen verschiedener Steuerelemente

Die Karte verfügt über eine Reihe von verschiedenen Steuerelementen; standardmäßig zeigt sie nur eine Zoom-Steuerung an. Sie können die verfügbaren Steuerelemente mit der `map.addControl()`-Methode erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach ein einfaches vollständiges Steuerungsset, das standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für die Steuerung angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenfolge ist, die eine Position für die Steuerung angibt. Versuchen Sie dies zum Beispiel:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Steuerungstypen, z.B. [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind recht komplex und leistungsfähig. Spielen Sie ein wenig herum und sehen Sie, was Sie daraus machen können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Symbols) an einem bestimmten Punkt auf der Karte ist einfach – Sie verwenden einfach die [`L.marker()`](https://leafletjs.com/reference.html#marker)-Methode (die anscheinend in der zugehörigen Leaflet.js-Dokumentation dokumentiert ist). Fügen Sie Ihrem Beispiel den folgenden Code hinzu, ebenfalls innerhalb von `window.onload`:

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

Wie Sie sehen, benötigt dies im einfachsten Fall zwei Parameter, ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt, das eine `icon`-Eigenschaft enthält, die das Symbol definiert, das an diesem Punkt angezeigt werden soll.

Das Symbol wird mit einer [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/)-Methode definiert, die Informationen wie Farbe und Größe des Markers enthält.

Am Ende des ersten Methodenaufrufs hängen wir `.bindPopup('This is Manchester!')` an, das einen Inhalt definiert, der angezeigt wird, wenn auf den Marker geklickt wird.

Schließlich hängen wir `.addTo(map)` an das Ende der Kette an, um den Marker tatsächlich zur Karte hinzuzufügen.

Spielen Sie mit den anderen in der Dokumentation gezeigten Optionen herum und sehen Sie, was Sie daraus machen können! Mapquest bietet einige ziemlich fortschrittliche Funktionen wie Wegbeschreibungen, Suche usw.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bekommen, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful-API — NYTimes

Sehen wir uns jetzt ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, New-York-Times-Nachrichtengeschichten abzurufen und auf Ihrer Website anzuzeigen. Dieser API-Typ ist als **RESTful-API** bekannt — anstatt Daten mithilfe der Funktionen einer JavaScript-Bibliothek wie bei Mapquest zu erhalten, holen wir Daten, indem wir HTTP-Anfragen an bestimmte URLs stellen, mit Daten wie Suchbegriffen und anderen Eigenschaften, die in der URL kodiert sind (oft als URL-Parameter). Dies ist ein häufiges Muster, das Sie bei APIs antreffen werden.

Unten führen wir Sie durch eine Übung, die Ihnen zeigt, wie Sie die NYTimes-API verwenden, die auch eine allgemeinere Reihe von Schritten bietet, die Sie als Ansatz für die Arbeit mit neuen APIs verwenden können.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig herauszufinden, wo die Dokumentation ist, damit Sie herausfinden können, welche Funktionen die API hat, wie Sie sie verwenden usw. Die Dokumentation der New York Times API befindet sich unter <https://developer.nytimes.com/>.

### Einen Entwicklerschlüssel erhalten

Die meisten APIs erfordern die Verwendung einer Art von Entwicklerschlüssel aus Sicherheits- und Verantwortlichkeitsgründen. Um sich für einen NYTimes-API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Lassen Sie uns einen Schlüssel für die Artikel-Such-API anfordern — erstellen Sie eine neue App, indem Sie diese als die API auswählen, die Sie verwenden möchten (geben Sie einen Namen und eine Beschreibung ein, schalten Sie den Schalter unter der "Article Search API" auf die Position "Ein" und klicken Sie dann auf "Erstellen").
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Um das Beispiel zu beginnen, machen Sie eine Kopie aller Dateien im [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start) Verzeichnis. Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden können. Zu Beginn enthält die Datei `script.js` eine Reihe von Variablen, die für die Einrichtung des Beispiels erforderlich sind; wir werden die erforderliche Funktionalität im Folgenden ausfüllen.

Die App ermöglicht es Ihnen schließlich, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die dann verwendet werden, um die Artikelsuch-API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispiel-Suchanfrage und Suchergebnisse, wie sie aus der New York Article Search API abgerufen wurden.](nytimes-example.png)

### Verbinden der API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Reference/Methods/GET)-Parameter jedes Mal angeben, wenn Sie Daten von dem Dienst unter der richtigen URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den bestehenden API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript hinzu, unter dem Kommentar `// Event listeners to control the functionality`. Dadurch wird eine Funktion namens `submitSearch()` ausgeführt, wenn das Formular übermittelt wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen `submitSearch()` und `fetchResults()` unten den vorherigen Zeilen hinzu:

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

`submitSearch()` setzt die Seitennummer zunächst auf 0 zurück, um zu beginnen, und ruft dann `fetchResults()` auf. Dies ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Event-Objekt auf, um die tatsächliche Übermittlung des Formulars zu verhindern (was das Beispiel ruinieren würde). Als nächstes nutzen wir etwas Zeichenfolgenmanipulation, um die vollständige URL zusammenzustellen, an die wir die Anfrage senden werden. Wir beginnen damit, die Teile zusammenzustellen, die wir für dieses Demo als obligatorisch erachten:

- Die Basis-URL (entnommen aus der `baseURL`-Variable).
- Der API-Schlüssel, der im URL-Parameter `api-key` angegeben werden muss (der Wert wird aus der `key`-Variable entnommen).
- Die Seitennummer, die im URL-Parameter `page` angegeben werden muss (der Wert wird aus der `pageNumber`-Variablen entnommen).
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss (der Wert wird aus dem Wert des `searchTerm` Texteingabe-{{htmlelement("input")}} genommen).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie in einem Ausdruck angegeben, der über den URL-Parameter `fq` übermittelt wird. In diesem Fall möchten wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob in den `startDate`- und `endDate`-Elementen Werte eingefüllt wurden. Wenn dies der Fall ist, fügen wir ihre Werte der URL hinzu, die in den URL-Parametern `begin_date` und `end_date` angegeben sind.

So würde eine vollständige URL aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details darüber, welche URL-Parameter enthalten werden können, finden Sie in den [NYTimes-Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel hat rudimentäre Formulardatengültigkeitsprüfung — das Suchbegriffs-Feld muss ausgefüllt sein, bevor das Formular abgeschickt werden kann (erreicht durch das `required`-Attribut), und die Datumsfelder haben `pattern`-Attribute, die bewirken, dass sie nur gesendet werden, wenn ihre Werte aus 8 Zahlen bestehen (`pattern="[0-9]{8}"`). Siehe [Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für weitere Details, wie diese funktionieren.

### Anfordern von Daten von der API

Jetzt, da wir unsere URL konstruiert haben, lassen Sie uns eine Anfrage dazu machen. Wir werden dies mit der [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie den folgenden Codeblock in die `fetchResults()`-Funktion ein, direkt oberhalb der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwortkörper mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion in JSON konvertieren und dann das resultierende JSON an die `displayResults()`-Funktion übergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden. Wir fangen auch alle Fehler ab, die geworfen werden könnten, und protokollieren sie.

### Anzeigen der Daten

OK, schauen wir uns an, wie wir die Daten anzeigen werden. Fügen Sie diese Funktion unterhalb Ihrer `fetchResults()`-Funktion hinzu.

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

Hier ist viel Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein häufiges Muster, das verwendet wird, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir überprüfen immer wieder, ob das `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die `articles`-Variable gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die von der Suche zurückgegebenen Artikel darstellen. Dies wird nur getan, um den folgenden Code ein wenig einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block überprüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel gleichzeitig zurück). Wenn ja, zeigen wir das {{htmlelement("nav")}} an, das die _Vorherige 10_/_Nächste 10_-Seitennavigationstasten enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, sodass wir die Seitennavigationstasten nicht anzeigen müssen. Wir werden die Seitennavigationsfunktionalität im nächsten Abschnitt anschließen.
- Der nächste `if ()`-Block überprüft, ob keine Artikel zurückgegeben werden. Wenn ja, versuchen wir nicht, irgendeinen anzuzeigen — wir erstellen ein {{htmlelement("p")}} mit dem Text "Keine Ergebnisse zurückgegeben." und fügen es in das `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zunächst alle Elemente, die wir verwenden möchten, um jede Nachrichtengeschichte anzuzeigen, fügen den jeweiligen Inhalt in jedes ein und fügen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zum Anzeigen enthielten, konsultierten wir die Artikel-Such-API-Referenz (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber einige verdienen es, hervorgehoben zu werden:

  - Wir verwendeten eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um durch alle Schlüsselwörter zu gehen, die mit jedem Artikel verbunden sind, und jedes in seinem eigenen {{htmlelement("span")}} innerhalb eines `<p>` einzufügen. Dies wurde getan, um jeden einfach zu gestalten.
  - Wir verwendeten einen `if ()`-Block (`if (current.multimedia.length > 0) { }`), um zu überprüfen, ob jeder Artikel Bilder zugeordnet hat, da einige Geschichten keine haben. Wir zeigen nur das erste Bild an, falls es existiert; andernfalls würde ein Fehler ausgelöst.

### Die Seitennavigationsschaltflächen anschließen

Um die Seitennavigationsschaltflächen funktional zu machen, werden wir den Wert der `pageNumber`-Variablen inkrementieren (oder dekrementieren) und dann die Abrufanfrage mit dem neuen Wert, der im URL-Parameter `page` enthalten ist, erneut ausführen. Dies funktioniert, weil die NYTimes-API nur 10 Ergebnisse auf einmal zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, wird sie die ersten 10 (0-9) zurückgeben, wenn der URL-Parameter `page` auf 0 gesetzt ist (oder nicht enthalten ist — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, und so weiter.

Dies ermöglicht es uns, eine einfache Paginationsfunktion zu schreiben.

1. Unterhalb des bestehenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufs fügen Sie diese beiden neuen hinzu, die bewirken, dass die Funktionen `nextPage()` und `previousPage()` aufgerufen werden, wenn die entsprechenden Tasten gedrückt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Ergänzung lassen Sie uns die beiden Funktionen definieren — fügen Sie diesen Code jetzt hinzu:

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

   Die zweite funktioniert nahezu identisch in umgekehrter Reihenfolge, aber wir müssen auch den zusätzlichen Schritt unternehmen, zu überprüfen, ob `pageNumber` nicht bereits null ist, bevor wir sie dekrementieren — wenn die Abrufanfrage mit einem negativen `page`-URL-Parameter durchlaufen wird, könnten Fehler verursacht werden. Wenn die `pageNumber` bereits 0 ist, [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) wir aus der Funktion heraus — wenn wir bereits auf der ersten Seite sind, brauchen wir nicht dieselben Ergebnisse erneut zu laden.

> [!NOTE]
> Sie finden unseren [fertigen NYTimes-API-Beispielcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (auch [hier live zu sehen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, das Sie studieren und daraus lernen können — siehe unser [YouTube-Video-Suchbeispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). Dieses verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele innerhalb von IFrame-Video-Playern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, da es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine App zu erstellen. Die erste ist eine RESTful-API, während die zweite ähnlich wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch erwähnenswert, dass beide APIs erfordern, dass eine JavaScript-Bibliothek auf der Seite angewendet wird. Die RESTful-API hat Funktionen, um die HTTP-Anfragen zu bearbeiten und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispiel-YouTube-Videosuche mit zwei verwandten APIs. Die linke Seite des Bildes zeigt eine Beispiel-Suchanfrage mit der YouTube-Daten-API. Die rechte Seite des Bildes zeigt die Suchergebnisse mithilfe der YouTube-Iframe-Player-API an.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr über dieses Beispiel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) hat detaillierte Kommentare, die erklären, wie es funktioniert.

Um es zum Laufen zu bringen, müssen Sie:

- Die [YouTube-Daten-API-Übersichtsdokumentation](https://developers.google.com/youtube/v3/getting-started) lesen.
- Besuchen Sie die [Aktivierte APIs-Seite](https://console.cloud.google.com/apis/enabled) und stellen Sie sicher, dass der Status für die YouTube Data API v3 auf EIN steht.
- Einen API-Schlüssel von [Google Cloud](https://cloud.google.com/) erhalten.
- Die Zeichenkette `ENTER-API-KEY-HERE` im Quellcode finden und durch Ihren API-Schlüssel ersetzen.
- Das Beispiel über einen Webserver ausführen. Es funktioniert nicht, wenn Sie es direkt im Browser ausführen (d.h. über eine `file://` URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs gegeben, um Funktionalität zu Ihren Websites hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

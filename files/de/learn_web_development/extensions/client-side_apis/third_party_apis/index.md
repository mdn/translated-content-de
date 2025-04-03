---
title: Drittanbieter-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind in den Browser integriert, jedoch sind nicht alle APIs so. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, deren Daten (z.B. Ihr Twitter-Stream auf Ihrem Blog) oder Dienste (z.B. Facebook-Login zur Anmeldung Ihrer Benutzer) zu nutzen. Dieser Artikel betrachtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungsfälle der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und Basis-API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und damit verbundene Muster wie API-Schlüssel.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful-API.</li>
          <li>Verwendung von Googles YouTube-APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Dritten – in der Regel Unternehmen wie Facebook, Twitter oder Google – bereitgestellt werden, um deren Funktionalität über JavaScript zugänglich zu machen und auf Ihrer Seite zu nutzen. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Schauen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und nutzen es zur Veranschaulichung, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Servern von Drittanbietern

Browser-APIs sind im Browser integriert – Sie können sofort von JavaScript darauf zugreifen. Zum Beispiel wird die Web-Audio-API, die wir [im einführenden Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work) gesehen haben, mit dem nativen [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt angesprochen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Servern Dritter. Um sie von JavaScript aus zu nutzen, müssen Sie zunächst eine Verbindung zur API-Funktionalität herstellen und sie auf Ihrer Seite verfügbar machen. Dies geschieht typischerweise, indem eine JavaScript-Bibliothek, die auf dem Server verfügbar ist, über ein {{htmlelement("script")}}-Element eingebunden wird, wie in unserem Mapquest-Beispiel zu sehen ist:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Sie können dann beginnen, die in dieser Bibliothek verfügbaren Objekte zu verwenden. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und erstellen dann eine neue Karte mit der Methode `mapquest.map()`, die als Parameter die ID eines {{htmlelement("div")}}-Elements annimmt, in dem Sie die Karte anzeigen möchten ("map"), sowie ein Optionsobjekt, das die Details der speziellen Karte enthält, die wir anzeigen möchten. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts an, eine Kartenebene des Typs `map` (erstellt mit der Methode `mapquest.tileLayer()`) und den Standard-Zoomlevel.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte darzustellen. Der Server, mit dem Sie sich verbinden, übernimmt alle komplizierten Aufgaben, wie das Anzeigen der richtigen Kartenelemente für den angezeigten Bereich usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders, indem der Entwickler eine HTTP-Anfrage an ein bestimmtes URL-Muster senden muss, um Daten zu erhalten. Diese werden [RESTful-APIs genannt — wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern in der Regel API-Schlüssel

Die Sicherheit bei Browser-APIs wird in der Regel durch Berechtigungsabfragen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser Mechanismen besteht darin, dass der Benutzer weiß, was auf den von ihm besuchten Websites vor sich geht, und weniger wahrscheinlich Opfer eines Missbrauchs der API wird.

Drittanbieter-APIs haben ein leicht unterschiedliches Berechtigungssystem – sie verwenden in der Regel Entwicklerschlüssel, um Entwicklern Zugriff auf die API-Funktionalität zu geben, was eher den API-Anbieter als den Benutzer schützt.

Sie werden eine ähnliche Zeile wie die folgende im Mapquest-API-Beispiel finden:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwicklerschlüssel an, der in Ihrer Anwendung verwendet werden soll – der Entwickler der Anwendung muss einen Schlüssel beantragen und ihn dann in seinen Code einfügen, um den Zugriff auf die Funktionalität der API zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter angegeben.

> [!NOTE]
> Wenn Sie Ihre eigenen Beispiele erstellen, werden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters verwenden.

Andere APIs können erfordern, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist für die meisten ziemlich ähnlich.

Das Erfordern eines Schlüssels ermöglicht es dem API-Anbieter, die Nutzer der API zur Rechenschaft zu ziehen. Wenn der Entwickler einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, falls er beginnt, etwas Bösartiges mit der API zu tun (z.B. das Verfolgen der Standortdaten von Personen oder der Versuch, die API mit einer Vielzahl von Anfragen zu spammen, um sie außer Betrieb zu setzen). Die einfachste Maßnahme wäre, einfach ihre API-Berechtigungen zu entziehen.

## Erweiterung des Mapquest-Beispiels

Lassen Sie uns dem Mapquest-Beispiel mehr Funktionalitäten hinzufügen, um zu zeigen, wie man einige andere Funktionen der API verwendet.

1. Erstellen Sie sich zu Beginn einen eigenen Abzweig der [Mapquest-Starterdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden.
2. Als nächstes müssen Sie auf die [Mapquest-Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und dann einen Entwicklerschlüssel generieren, um ihn mit Ihrem Beispiel zu verwenden. (Zum Zeitpunkt der Erstellung hieß es auf der Seite „Verbraucherschlüssel“ und der Schlüsselgenerierungsprozess fragte auch nach einer optionalen „Callback-URL“. Sie müssen hier keine URL eingeben: einfach leer lassen.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Den Kartentyp ändern

Es gibt mehrere verschiedene Kartentypen, die mit der Mapquest-API angezeigt werden können. Suchen Sie dazu die folgende Zeile:

```js
layers: L.mapquest.tileLayer("map");
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Hybrid-Karte anzuzeigen. Probieren Sie auch andere Werte aus. Die [`tileLayer`-Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügen unterschiedlicher Steuerungen

Die Karte verfügt über eine Reihe unterschiedlicher Steuerungen; standardmäßig wird nur eine Zoom-Steuerung angezeigt. Sie können die verfügbaren Steuerungen mit der Methode `map.addControl()` erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die Methode [`mapquest.control()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach ein einfaches Steuerungspaket mit allen Funktionen, das standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für die Steuerung angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenfolge ist, die eine Position für die Steuerung angibt. Versuchen Sie zum Beispiel Folgendes:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Arten von Steuerungen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind ziemlich komplex und leistungsstark. Spielen Sie damit herum und sehen Sie, was Sie schaffen können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Symbols) an einem bestimmten Punkt auf der Karte ist einfach – Sie verwenden einfach die Methode [`L.marker()`](https://leafletjs.com/reference.html#marker) (die in den verwandten Leaflet.js-Dokumenten dokumentiert zu sein scheint). Fügen Sie Ihrem Beispiel den folgenden Code hinzu, ebenfalls innerhalb von `window.onload`:

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

Wie Sie sehen, nimmt dies im einfachsten Fall zwei Parameter an: ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt mit einer `icon`-Eigenschaft, die das Symbol definiert, das an diesem Punkt angezeigt werden soll.

Das Symbol wird mit einer Methode [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) definiert, die, wie Sie sehen, Informationen wie die Farbe und Größe des Markers enthält.

Am Ende des ersten Methodenaufrufs fügen wir `.bindPopup('This is Manchester!')` hinzu, das den Inhalt definiert, der angezeigt wird, wenn auf den Marker geklickt wird.

Schließlich fügen wir `.addTo(map)` ans Ende der Kette an, um den Marker tatsächlich zur Karte hinzuzufügen.

Probieren Sie die anderen in der Dokumentation gezeigten Optionen aus und sehen Sie, was Sie erstellen können! Mapquest bietet einige ziemlich fortschrittliche Funktionalitäten, wie z.B. Routenführung, Suche usw.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful-API — NYTimes

Schauen wir uns nun ein anderes API-Beispiel an – die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Informationen zu New York Times-Nachrichtengeschichten abzurufen und auf Ihrer Seite anzuzeigen. Diese Art von API wird als **RESTful-API** bezeichnet – anstatt Daten mit den Funktionen einer JavaScript-Bibliothek wie bei Mapquest zu erhalten, holen wir die Daten ab, indem wir HTTP-Anfragen an bestimmte URLs senden, wobei Daten wie Suchbegriffe und andere Eigenschaften in der URL (oft als URL-Parameter) codiert sind. Dies ist ein häufiges Muster, das Ihnen bei APIs begegnen wird.

Unten führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie Sie die NYTimes-API verwenden, die auch eine allgemeinere Reihe von Schritten bereitstellt, die Sie als Ansatz zur Arbeit mit neuen APIs verwenden können.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es von entscheidender Bedeutung herauszufinden, wo die Dokumentation zu finden ist, damit Sie wissen, welche Funktionen die API hat, wie Sie diese nutzen usw. Die Dokumentation zur New York Times API befindet sich unter <https://developer.nytimes.com/>.

### Holen Sie sich einen Entwicklerschlüssel

Die meisten APIs erfordern die Verwendung eines Entwicklerschlüssels aus Gründen der Sicherheit und Verantwortlichkeit. Um sich für einen NYTimes-API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern Sie einen Schlüssel für die Article Search API an – erstellen Sie eine neue App und wählen Sie dies als die API aus, die Sie verwenden möchten (geben Sie einen Namen und eine Beschreibung ein, schalten Sie den Schalter unter "Article Search API" ein und klicken Sie dann auf "Create").
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Um das Beispiel zu starten, kopieren Sie alle Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden. Zunächst enthält die Datei `script.js` eine Reihe von Variablen, die für das Setup des Beispiels erforderlich sind; unten werden wir die erforderliche Funktionalität ergänzen.

Die App wird Ihnen ermöglichen, einen Suchbegriff sowie optionale Start- und Enddaten einzugeben, die dann zur Abfrage der Article Search API und zur Anzeige der Suchergebnisse verwendet werden.

![Ein Screenshot einer beispielhaften Suchabfrage und Suchergebnisse, die von der New York Article Search API abgerufen wurden.](nytimes-example.png)

### Verbinden Sie die API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Reference/Methods/GET)-Parameter einfügen, jedes Mal wenn Sie Daten von dem Dienst über die richtige URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile unter den Kommentar `// Event listeners to control the functionality` in Ihrem JavaScript hinzu. Diese Zeile führt eine Funktion namens `submitSearch()` aus, wenn das Formular eingereicht wird (der Knopf gedrückt wird).

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

`submitSearch()` setzt zunächst die Seitenzahl auf 0 zurück und ruft dann `fetchResults()` auf. Zuerst wird [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignisobjekt aufgerufen, um das tatsächliche Einreichen des Formulars zu verhindern (was das Beispiel brechen würde). Als Nächstes verwenden wir etwas Zeichenfolgenmanipulation, um die vollständige URL zusammenzustellen, an die wir die Anfrage senden werden. Wir beginnen damit, die Teile zusammenzustellen, die wir für dieses Demo als zwingend erachten:

- Die Basis-URL (aus der Variablen `baseURL` entnommen).
- Der API-Schlüssel, der im URL-Parameter `api-key` angegeben werden muss (der Wert wird aus der Variable `key` entnommen).
- Die Seitenzahl, die im URL-Parameter `page` angegeben werden muss (der Wert wird aus der Variablen `pageNumber` entnommen).
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss (der Wert wird aus dem Wert des Text-{{htmlelement("input")}}-Elements `searchTerm` entnommen).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie er in einem Ausdruck angegeben wird, der über den URL-Parameter `fq` übergeben wird. In diesem Fall möchten wir Artikel zurückgeben.

Als Nächstes verwenden wir einige [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Aussagen, um zu überprüfen, ob die Elemente `startDate` und `endDate` Werte enthalten. Falls sie das tun, fügen wir ihre Werte der URL hinzu, angegeben in den URL-Parametern `begin_date` bzw. `end_date`.

So würde eine vollständige URL schließlich etwa so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details zu den einfügbaren URL-Parametern finden Sie in den [NYTimes-Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel verfügt über grundlegende Formularvalidierung – das Suchbegriffsfeld muss ausgefüllt sein, bevor das Formular eingereicht werden kann (durch das Attribut `required` erreicht), und die Datumsfelder haben `pattern`-Attribute spezifiziert, was bedeutet, dass sie nicht eingereicht werden, wenn ihre Werte nicht aus 8 Zahlen bestehen (`pattern="[0-9]{8}"`). Siehe [Form data validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für weitere Informationen zur Funktionsweise dieser Validierungen.

### Anfordern von Daten von der API

Nachdem wir unsere URL konstruiert haben, lassen Sie uns eine Anfrage dazu machen. Dazu verwenden wir die [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Fügen Sie den folgenden Codeblock innerhalb der Funktion `fetchResults()` ein, direkt über der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, der Antwortkörper mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion in JSON umwandeln und das resultierende JSON an die Funktion `displayResults()` übergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Wir fangen auch etwaige Fehler ab und protokollieren sie.

### Anzeigen der Daten

Schauen wir uns nun an, wie wir die Daten anzeigen. Fügen Sie die folgende Funktion unter Ihrer Funktion `fetchResults()` hinzu.

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

Hier gibt es viel Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein gängiges Muster, das verwendet wird, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir überprüfen fortwährend, ob `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Dann setzen wir die Variable `articles` gleich `json.response.docs` – dies ist das Array, das alle Objekte enthält, die die zurückgegebenen Artikel repräsentieren. Dies wird gemacht, um den nachfolgenden Code etwas einfacher zu gestalten.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block prüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel auf einmal zurück). Wenn ja, zeigen wir die {{htmlelement("nav")}} an, die die Pagination-Schaltflächen _Vorherige 10_/_Nächste 10_ enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, sodass wir die Pagination-Schaltflächen nicht anzeigen müssen. Wir werden die Pagination-Funktionalität im nächsten Abschnitt verbinden.
- Der nächste `if ()`-Block prüft, ob keine Artikel zurückgegeben werden. Wenn ja, versuchen wir nicht, etwas anzuzeigen – wir erstellen ein {{htmlelement("p")}}, das den Text "No results returned." enthält, und fügen es in die `<section>` ein.
- Falls einige Artikel zurückgegeben werden, erstellen wir zunächst alle Elemente, die wir zur Anzeige jeder Nachrichtengeschichte verwenden wollen, setzen die richtigen Inhalte in jedes ein und fügen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zur Anzeige enthielten, haben wir die Article Search API-Referenz konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber es lohnt sich, einige hervorzuheben:

  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife benutzt, um alle Schlagwörter, die jedem Artikel zugeordnet sind, durchzugehen und jedes in ein eigenes {{htmlelement("span")}} innerhalb eines `<p>` einzufügen. Dies wurde gemacht, um es einfach zu machen, jedes einzeln zu stylen.
  - Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu überprüfen, ob jedem Artikel Bilder zugeordnet sind, da einige Geschichten keine haben. Wir zeigen nur das erste Bild an, wenn es existiert; andernfalls würde ein Fehler ausgelöst werden.

### Verkabeln der Pagination-Schaltflächen

Um die Pagination-Schaltflächen funktionsfähig zu machen, werden wir den Wert der Variable `pageNumber` erhöhen (oder verringern) und dann die Abrufanfrage mit dem neuen Wert erneut ausführen, der im URL-Parameter `page` enthalten ist. Dies funktioniert, weil die NYTimes-API nur 10 Ergebnisse gleichzeitig zurückgibt – wenn mehr als 10 Ergebnisse verfügbar sind, gibt sie die ersten 10 (0-9) zurück, wenn der URL-Parameter `page` auf 0 gesetzt ist (oder gar nicht angegeben wird – 0 ist der Standardwert), die nächsten 10 (10-19), wenn `page` auf 1 gesetzt ist, und so weiter.

Dies erlaubt es uns, eine einfache Pagination-Funktion zu schreiben.

1. Unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf fügen Sie diese beiden neuen hinzu, die die Funktionen `nextPage()` und `previousPage()` ausführen, wenn die entsprechenden Schaltflächen geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Ergänzung definieren wir die beiden Funktionen – fügen Sie diesen Code jetzt hinzu:

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

   Die erste Funktion erhöht die Variable `pageNumber` und führt dann die Funktion `fetchResults()` erneut aus, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert nahezu genauso im umgekehrten Sinne, aber wir müssen auch noch den zusätzlichen Schritt machen, zu überprüfen, dass `pageNumber` nicht bereits Null ist, bevor wir sie verringern – wenn die Abrufanfrage mit einem negativen `page`-URL-Parameter ausgeführt wird, könnte dies Fehler verursachen. Wenn `pageNumber` bereits 0 ist, müssen wir [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) aus der Funktion – wenn wir bereits auf der ersten Seite sind, müssen wir dieselben Ergebnisse nicht noch einmal laden.

> [!NOTE]
> Sie finden unser [fertiges NYTimes API-Beispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (auch [hier live sehen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel erstellt, das Sie studieren und davon lernen können – sehen Sie sich unser [YouTube-Videosuchbeispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/) an. Dieses verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um nach YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Videobeispiele in IFrame Videoplayern anzuzeigen, damit Sie sie anschauen können.

Dieses Beispiel ist interessant, da es zeigt, wie zwei verwandte Drittanbieter-APIs gemeinsam verwendet werden können, um eine App zu erstellen. Die erste ist eine RESTful-API, während die zweite mehr wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch beachtenswert, dass beide APIs erfordern, dass eine JavaScript-Bibliothek auf der Seite angewendet wird. Die RESTful-API verfügt über Funktionen, die die Durchführung von HTTP-Anfragen und die Rückgabe der Ergebnisse handhaben.

![Ein Screenshot einer Beispiel-YouTube-Videosuche mit zwei verwandten APIs. Die linke Seite des Bildes zeigt eine Beispiel-Suchabfrage mit der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse mit der YouTube Iframe Player API an.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr über dieses Beispiel sagen – [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält ausführliche Kommentare, die erklären, wie es funktioniert.

Um es auszuführen, müssen Sie:

- Lesen Sie die [YouTube Data API-Übersicht](https://developers.google.com/youtube/v3/getting-started).
- Stellen Sie sicher, dass Sie die Seite [Aktivierte APIs](https://console.cloud.google.com/apis/enabled) besuchen und in der Liste der APIs sicherstellen, dass der Status für die YouTube Data API v3 auf AN steht.
- Holen Sie sich einen API-Schlüssel von [Google Cloud](https://cloud.google.com/).
- Finden Sie den String `ENTER-API-KEY-HERE` im Quellcode und ersetzen Sie ihn durch Ihren API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Es wird nicht funktionieren, wenn Sie es direkt im Browser ausführen (z.B. über eine `file://`-URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs gegeben, um Ihren Websites Funktionalität hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

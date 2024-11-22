---
title: Third-party APIs
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

Die APIs, die wir bisher behandelt haben, sind im Browser eingebaut, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, ihre Daten (z.B. das Anzeigen Ihres Twitter-Streams auf Ihrem Blog) oder Dienste (z.B. die Verwendung des Facebook-Logins, um Ihre Benutzer anzumelden) zu nutzen. Dieser Artikel betrachtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungsbeispiele für letztere.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen der Client-side APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Drittanbieter-APIs funktionieren und wie man sie nutzt, um Ihre
        Webseiten zu erweitern.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Drittanbietern — generell Unternehmen wie Facebook, Twitter oder Google — bereitgestellt werden, um Ihnen zu ermöglichen, deren Funktionalität über JavaScript auf Ihrer Website zu nutzen. Eines der offensichtlichsten Beispiele ist die Verwendung von Mapping-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Betrachten wir ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) und verwenden es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

> [!NOTE]
> Sie möchten vielleicht einfach [alle unsere Codebeispiele](/de/docs/Learn#getting_our_code_examples) auf einmal erhalten, in diesem Fall können Sie dann einfach das Repository nach den Beispieldateien durchsuchen, die Sie in jedem Abschnitt benötigen.

### Sie befinden sich auf Drittanbieter-Servern

Browser-APIs sind in den Browser integriert — Sie können sofort aus JavaScript darauf zugreifen. Zum Beispiel wird die Web Audio API, die wir [im Einführungsartikel](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#how_do_apis_work) gesehen haben, mit dem nativen [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt genutzt. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs dagegen befinden sich auf Drittanbieter-Servern. Um von JavaScript aus auf sie zuzugreifen, müssen Sie zuerst die API-Funktionalität verbinden und auf Ihrer Seite verfügbar machen. Dies beinhaltet typischerweise zuerst das Verlinken einer JavaScript-Bibliothek, die über ein {{htmlelement("script")}}-Element auf dem Server verfügbar ist, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Danach können Sie die in dieser Bibliothek verfügbaren Objekte verwenden. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und erstellen dann eine neue Karte mit der `mapquest.map()`-Methode, die als Parameter die ID eines {{htmlelement("div")}}-Elements übernimmt, in dem die Karte angezeigt werden soll ('map'), und ein Optionsobjekt, das die Details der spezifischen Karte enthält, die wir anzeigen möchten. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts an, eine `map`-Kartenebene, die angezeigt werden soll (erstellt mit der `mapquest.tileLayer()`-Methode), und den Standard-Zoomlevel.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, mit dem Sie sich verbinden, übernimmt alle komplizierten Aufgaben, wie das Anzeigen der richtigen Kartenkacheln für das angezeigte Gebiet usw.

> [!NOTE]
> Einige APIs handhaben den Zugang zu ihrer Funktionalität etwas anders, indem sie vom Entwickler verlangen, eine HTTP-Anfrage an ein spezifisches URL-Muster zu stellen, um Daten abzurufen. Diese werden als [RESTful APIs bezeichnet — wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie benötigen in der Regel API-Schlüssel

Die Sicherheit für Browser-APIs wird in der Regel durch Berechtigungsaufforderungen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Diese dienen dazu, dass der Nutzer weiß, was auf den von ihm besuchten Webseiten vor sich geht, und weniger wahrscheinlich einem bösartigen Einsatz einer API zum Opfer fällt.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem — sie verwenden in der Regel Entwickler-Schlüssel, um Entwicklern den Zugang zu der API-Funktionalität zu gewähren, was mehr darauf abzielt, den API-Anbieter als den Nutzer zu schützen.

Sie finden eine Zeile ähnlich der folgenden im Mapquest-API-Beispiel:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwickler-Schlüssel an, der in Ihrer Anwendung verwendet werden soll — der Entwickler der Anwendung muss sich bewerben, um einen Schlüssel zu erhalten, und diesen dann in seinem Code einfügen, um Zugriff auf die Funktionen der API zu erhalten. In unserem Beispiel haben wir einfach einen Platzhalter bereitgestellt.

> [!NOTE]
> Wenn Sie Ihre eigenen Beispiele erstellen, verwenden Sie anstelle eines Platzhalters Ihren eigenen API-Schlüssel.

Andere APIs verlangen möglicherweise, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist für die meisten ähnlich.

Das Anfordern eines Schlüssels ermöglicht es dem API-Anbieter, die Nutzer der API für ihre Handlungen verantwortlich zu machen. Wenn der Entwickler sich für einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es kann gehandelt werden, wenn er beginnt, etwas Bösartiges mit der API zu tun (z. B. das Verfolgen der Standorte von Personen oder das Versuchen, die API mit einer Vielzahl an Anfragen zu überschwemmen, um sie zum Absturz zu bringen). Die einfachste Maßnahme wäre, einfach ihre API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Lassen Sie uns dem Mapquest-Beispiel weitere Funktionen hinzufügen, um zu zeigen, wie man einige andere Features der API nutzt.

1. Um diesen Abschnitt zu beginnen, machen Sie sich eine Kopie der [Mapquest Starter-Datei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiel-Repository bereits geklont haben](/de/docs/Learn#getting_our_code_examples), haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden.
2. Navigieren Sie als Nächstes zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/), erstellen Sie ein Konto und dann einen Entwickler-Schlüssel, den Sie mit Ihrem Beispiel verwenden können. (Zum Zeitpunkt des Schreibens wurde es auf der Seite als "Verbraucherschlüssel" bezeichnet, und der Schlüssel-Erstellungsprozess verlangte auch eine optionale "Callback-URL". Sie müssen hier keine URL angeben: lassen Sie sie einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den API-Schlüsselplatzhalter durch Ihren Schlüssel.

### Ändern des Kartentyps

Es gibt eine Reihe verschiedener Kartentypen, die mit der Mapquest-API angezeigt werden können. Um dies zu tun, suchen Sie folgende Zeile:

```js
layers: L.mapquest.tileLayer("map");
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Hybrid-Stil-Karte anzuzeigen. Probieren Sie auch einige andere Werte aus. Die [`tileLayer` Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viel mehr Informationen.

### Hinzufügen unterschiedlicher Steuerelemente

Die Karte hat eine Reihe verschiedener Steuerungen verfügbar; standardmäßig wird nur eine Zoom-Steuerung angezeigt. Sie können die verfügbaren Steuerungen mithilfe der Methode `map.addControl()` erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()` Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach eine einfache voll ausgestattete Steuerung und wird standardmäßig in der oberen rechten Ecke platziert. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für die Steuerung angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenkette ist, die eine Position für die Steuerung angibt. Probieren Sie dies zum Beispiel aus:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Steuerungstypen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind ziemlich komplex und leistungsfähig. Experimentieren Sie und sehen Sie, was Sie damit erreichen können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Icons) an einem bestimmten Punkt auf der Karte ist einfach — Sie verwenden die [`L.marker()`](https://leafletjs.com/reference.html#marker) Methode (die scheinbar in der zugehörigen Leaflet.js-Dokumentation dokumentiert ist). Fügen Sie den folgenden Code zu Ihrem Beispiel hinzu, wieder innerhalb von `window.onload`:

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

Wie Sie sehen können, nimmt dies in seiner einfachsten Form zwei Parameter, ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt, das eine `icon`-Eigenschaft enthält, die das Icon definiert, das an diesem Punkt angezeigt werden soll.

Das Icon wird mit einer [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/)-Methode definiert, die wie Sie sehen können Informationen wie Farbe und Größe des Markers enthält.

An das Ende des ersten Methodenaufrufs hängen wir `.bindPopup('This is Manchester!')` an, das definiert, welchen Inhalt beim Klicken auf den Marker angezeigt werden soll.

Schließlich fügen wir `.addTo(map)` ans Ende der Kette an, um den Marker tatsächlich der Karte hinzuzufügen.

Experimentieren Sie mit den anderen in der Dokumentation gezeigten Optionen und sehen Sie, was Sie erreichen können! Mapquest bietet einige ziemlich fortschrittliche Funktionen, wie Wegbeschreibungen, Suche usw.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Schauen wir uns nun ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Nachrichteninformationen von der New York Times abzurufen und auf Ihrer Website anzuzeigen. Diese Art von API ist als **RESTful API** bekannt — statt Daten über die Funktionen einer JavaScript-Bibliothek wie bei Mapquest zu bekommen, holen wir die Daten, indem wir HTTP-Anfragen an bestimmte URLs stellen, wobei Daten wie Suchbegriffe und andere Eigenschaften im URL kodiert sind (oft als URL-Parameter). Dies ist ein häufiges Muster, auf das Sie bei APIs stoßen werden.

Unten führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie Sie die NYTimes API verwenden, die auch eine allgemeinere Schritt-für-Schritt-Anleitung bietet, die Sie als Ansatz für die Arbeit mit neuen APIs verwenden können.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es unerlässlich, herauszufinden, wo sich die Dokumentation befindet, damit Sie herausfinden können, welche Funktionen die API hat, wie Sie diese verwenden usw. Die Dokumentation zur New York Times API finden Sie unter <https://developer.nytimes.com/>.

### Besorgen Sie sich einen Entwickler-Schlüssel

Die meisten APIs erfordern die Verwendung einer Art von Entwickler-Schlüssel aus Sicherheits- und Verantwortlichkeitsgründen. Um sich für einen NYTimes-API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern Sie einen Schlüssel für die Article Search API an — erstellen Sie eine neue App, indem Sie diese als die verwendete API auswählen (füllen Sie einen Namen und eine Beschreibung aus, schalten Sie den Schalter unter "Article Search API" auf Position ein und klicken Sie dann auf "Create").
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Machen Sie als Nächstes eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiel-Repository bereits geklont haben](/de/docs/Learn#getting_our_code_examples), haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden. Zunächst enthält die Datei `script.js` eine Reihe von Variablen, die für die Einrichtung des Beispiels benötigt werden; unten werden wir die erforderliche Funktionalität ausfüllen.

Die App ermöglicht es Ihnen schließlich, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die dann verwendet werden, um die Article Search API zu durchsuchen und die Suchergebnisse anzuzeigen.

![Ein Screenshot eines Beispiel-Suchbegriffs und Suchergebnissen, abgerufen von der New York Article Search API.](nytimes-example.png)

### Verbinden Sie die API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Methods/GET)-Parameter jedes Mal einfügen, wenn Sie Daten vom Dienst bei der richtigen URL anfordern.

1. Finden Sie folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript hinzu, unter dem Kommentar `// Event listeners to control the functionality`. Diese führt eine Funktion `submitSearch()` aus, wenn das Formular übermittelt wird (der Knopf gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen für `submitSearch()` und `fetchResults()` hinzu, unterhalb der vorherigen Zeile:

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

`submitSearch()` setzt die Seitenzahl zuerst auf 0 zurück und ruft dann `fetchResults()` auf. Diese ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um zu verhindern, dass das Formular tatsächlich abgeschickt wird (was das Beispiel zerstören würde). Als nächstes verwenden wir einige Zeichenkettenoperationen, um die vollständige URL zusammenzustellen, an die wir die Anfrage stellen werden. Wir fangen an, die Teile zu erstellen, die wir für dieses Demo als obligatorisch erachten:

- Die Basis-URL (entnommen aus der Variablen `baseURL`).
- Der API-Schlüssel, der im `api-key`-URL-Parameter angegeben werden muss (der Wert stammt aus der Variablen `key`).
- Die Seitenzahl, die im `page`-URL-Parameter angegeben werden muss (der Wert stammt aus der Variablen `pageNumber`).
- Der Suchbegriff, der im `q`-URL-Parameter angegeben werden muss (der Wert stammt aus dem Wert des Texteingabefeldes `searchTerm` {{htmlelement("input")}}).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie in einem Ausdruck angegeben, der über den `fq`-URL-Parameter übergeben wird. In diesem Fall wollen wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob die `startDate`- und `endDate`-Elemente Werte enthalten haben. Falls ja, hängen wir ihre Werte an die URL an, die jeweils in den URL-Parametern `begin_date` und `end_date` angegeben sind.

So würde eine vollständige URL schließlich aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Sie finden mehr Details darüber, welche URL-Parameter enthalten werden können, in den [NYTimes Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel hat eine rudimentäre Formular-Datenvalidierung — das Suchbegriff-Feld muss ausgefüllt sein, bevor das Formular übermittelt werden kann (erreicht durch das `required`-Attribut), und die Datumsfelder haben `pattern`-Attribute angegeben, was bedeutet, dass sie nicht abgesendet werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Siehe [Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation) für mehr Details dazu, wie diese funktionieren.

### Anfordern von Daten von der API

Jetzt, wo wir unsere URL erstellt haben, lassen Sie uns eine Anfrage an sie stellen. Wir werden dies mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie diesen Codeblock innerhalb der `fetchResults()`-Funktion hinzu, direkt über der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwortinhalt mithilfe der [`json()`](/de/docs/Web/API/Response/json)-Funktion in JSON konvertieren und dann das resultierende JSON an die Funktion `displayResults()` übergeben, sodass die Daten in unserer Benutzeroberfläche angezeigt werden können. Wir fangen auch alle Fehler ab und protokollieren sie, die möglicherweise geworfen werden.

### Anzeigen der Daten

Nun sehen wir uns an, wie wir die Daten anzeigen werden. Fügen Sie die folgende Funktion unter Ihrer `fetchResults()`-Funktion hinzu.

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

Hier gibt es eine Menge Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein übliches Muster, das verwendet wird, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir prüfen kontinuierlich, ob das `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die durch die Suche zurückgegebenen Artikel darstellen. Dies geschieht ausschließlich, um den folgenden Code etwas einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block prüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel auf einmal zurück). Falls ja, zeigen wir das {{htmlelement("nav")}}, das die _Vorherigen 10_/_Nächsten 10_-Seitennavigationsknöpfe enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, sodass die Seitennavigationsknöpfe nicht angezeigt werden müssen. Wir werden die Seitennavigationsfunktionalität im nächsten Abschnitt verkabeln.
- Der nächste `if ()`-Block prüft, ob keine Artikel zurückgegeben werden. Falls ja, versuchen wir nicht, welche anzuzeigen — wir erstellen ein {{htmlelement("p")}} mit dem Text "No results returned." und setzen es in das `<section>`.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zuerst alle Elemente, die wir verwenden möchten, um jede Nachrichtenstory anzuzeigen, fügen die richtigen Inhalte in jedes ein und setzen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zum Anzeigen enthalten, haben wir die Referenz zur Article Search-API konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber einige sind erwähnenswert:

  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um alle mit jedem Artikel verknüpften Schlüsselwörter durch

zugehen und jedes in einem eigenen {{htmlelement("span")}} innerhalb eines `<p>` einzufügen. Dies wurde getan, um es einfach zu machen, jedes einfach zu formatieren.

- Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu prüfen, ob jeder Artikel Bilder zugeordnet hat, da einige Geschichten keine haben. Wir zeigen nur das erste Bild an, wenn es existiert; andernfalls würde ein Fehler geworfen werden.

### Verkabelung der Seitennavigationsknöpfe

Um die Seitennavigationsknöpfe funktionsfähig zu machen, werden wir den Wert der Variablen `pageNumber` inkrementieren (oder dekrementieren) und dann die Abrufanfrage mit dem neuen Wert im URL-Parameter `page` erneut ausführen. Dies funktioniert, da die NYTimes-API jedes Mal nur 10 Ergebnisse zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, wird sie die ersten 10 (0-9) zurückgeben, wenn der URL-Parameter `page` auf 0 gesetzt ist (oder überhaupt nicht enthalten ist — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, und so weiter.

Dies ermöglicht es uns, eine vereinfachte Seitennavigationsfunktion zu schreiben.

1. Fügen Sie unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf diese beiden neuen hinzu, die dafür sorgen, dass die Funktionen `nextPage()` und `previousPage()` aufgerufen werden, wenn die entsprechenden Knöpfe geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Fügen Sie unter Ihrer vorherigen Ergänzung die beiden Funktionen ein – fügen Sie jetzt diesen Code hinzu:

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

   Die erste Funktion inkrementiert die Variable `pageNumber`, um die Ergebnisse der nächsten Seite anzuzeigen, und führt dann erneut die Funktion `fetchResults()` aus.

   Die zweite Funktion funktioniert fast genauso umgekehrt, aber wir müssen auch den zusätzlichen Schritt unternehmen und überprüfen, ob `pageNumber` nicht bereits null ist, bevor wir sie dekrementieren — wenn die Abrufanfrage mit einem negativen URL-Parameter `page` ausgeführt wird, könnte das Fehler verursachen. Wenn die `pageNumber` bereits 0 ist, [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) wir aus der Funktion — wenn wir uns bereits auf der ersten Seite befinden, brauchen wir nicht erneut dieselben Ergebnisse zu laden.

> [!NOTE]
> Sie können unser [fertiges NYTimes API-Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (sehen Sie es auch [hier live](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie entwickelt, um es zu studieren und daraus zu lernen — sehen Sie sich unser [YouTube-Video-Suchbeispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/) an. Dieses verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um nach YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Videoplayern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, da es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine App zu erstellen. Die erste ist eine RESTful API, während die zweite eher wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch erwähnenswert, dass für beide APIs eine JavaScript-Bibliothek auf der Seite angewendet werden muss. Die RESTful API hat Funktionen verfügbar, um die HTTP-Anfragen zu bearbeiten und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispiel-YouTube-Video-Suche mit zwei verbundenen APIs. Die linke Seite des Bildes zeigt eine Beispiel-Suchanfrage mit der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse mit der YouTube Iframe Player API an.](youtube-example.png)

Wir werden nicht viel mehr über dieses Beispiel im Artikel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält detaillierte Kommentare, die erklären, wie er funktioniert.

Um es zum Laufen zu bringen, müssen Sie:

- Die [YouTube Data API Übersicht](https://developers.google.com/youtube/v3/getting-started) Dokumentation lesen.
- Stellen Sie sicher, dass Sie die [Aktivierten APIs-Seite](https://console.cloud.google.com/apis/enabled) besuchen, und in der Liste der APIs überprüfen Sie, ob der Status für die YouTube Data API v3 auf EIN ist.
- Holen Sie sich einen API-Schlüssel von [Google Cloud](https://cloud.google.com/).
- Finden Sie die Zeichenfolge `ENTER-API-KEY-HERE` im Quellcode und ersetzen Sie sie durch Ihren API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Es wird nicht funktionieren, wenn Sie es direkt im Browser ausführen (d.h. über eine `file://` URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs gegeben, um die Funktionalität Ihrer Webseiten zu erweitern.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

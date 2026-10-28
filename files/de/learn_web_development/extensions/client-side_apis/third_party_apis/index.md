---
title: APIs von Drittanbietern
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind im Browser integriert. Das gilt jedoch nicht für alle APIs. Viele große Websites und Dienste wie Google, GitHub, YouTube und Spotify stellen APIs bereit. Damit können Entwickler deren Daten nutzen (etwa um Informationen über ihre Repositorys in einem Blog anzuzeigen) oder deren Dienste einbinden (etwa um Nutzern die Anmeldung über Google zu ermöglichen). Dieser Artikel erläutert den Unterschied zwischen Browser-APIs und APIs von Drittanbietern und zeigt einige typische Einsatzmöglichkeiten der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">den Grundlagen von JavaScript-Objekten</a> sowie grundlegenden API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter APIs von Drittanbietern und zugehörige Muster wie API-Schlüssel verstehen.</li>
          <li>Eine RESTful API verwenden.</li>
          <li>Die YouTube-APIs von Google verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs von Drittanbietern?

APIs von Drittanbietern werden von externen Anbietern – in der Regel Unternehmen wie Spotify oder Google – bereitgestellt. Sie ermöglichen es Ihnen, über JavaScript auf deren Funktionen zuzugreifen und diese auf Ihrer Website zu nutzen. Ein Beispiel sind die YouTube-APIs, mit denen Sie nach Videos suchen und sie auf Ihren Seiten anzeigen können.

Sehen wir uns an, wie sich APIs von Drittanbietern von Browser-APIs unterscheiden.

### Sie befinden sich auf Servern von Drittanbietern

Browser-APIs sind im Browser integriert – Sie können unmittelbar aus JavaScript darauf zugreifen. Auf die Web Audio API, die wir [im einführenden Artikel kennengelernt haben](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work), greifen Sie beispielsweise über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt zu:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

APIs von Drittanbietern befinden sich dagegen auf externen Servern. Um aus JavaScript darauf zuzugreifen, müssen Sie zunächst eine Verbindung zu den API-Funktionen herstellen und sie auf Ihrer Seite verfügbar machen.

Letztlich kommunizieren alle APIs von Drittanbietern über HTTP mit ihren Servern. [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufe von Hand zu schreiben ist jedoch umständlich und anfällig für Änderungen, die den Code funktionsunfähig machen. Deshalb stellen Anbieter ihre Funktionen meist über eine Sammlung von Funktionen bereit, die als Software Development Kit (SDK) bezeichnet wird. Das SDK erstellt die HTTP-Nutzdaten, sendet die Anfrage an den richtigen Endpunkt, verarbeitet die Antwort und übernimmt weitere Aufgaben. So müssen Sie möglichst wenig Code schreiben und nur die erforderlichen Daten angeben.

Traditionell wird das SDK durch Einbinden eines externen Skripts in ein {{htmlelement("script")}}-Element bereitgestellt. Dadurch wird die Bibliothek als globale Variable registriert. Modernere APIs stellen SDKs üblicherweise als [Module](/de/docs/Web/JavaScript/Guide/Modules) bereit, die Sie importieren können und die mitunter über Paketmanager wie [npm](https://docs.npmjs.com/) verteilt werden.

Die JavaScript-Clientbibliothek von Google stellt beispielsweise ein globales `gapi`-Objekt bereit, sobald Sie ihr Skript laden:

```html
<script src="https://apis.google.com/js/api.js"></script>
```

Nachdem Sie den Client für die Google Drive API initialisiert und die Autorisierung des Nutzers eingeholt haben, können Sie Dateien mit einem Methodenaufruf auflisten:

```js
async function listDriveFiles() {
  try {
    const response = await gapi.client.drive.files.list({
      pageSize: 10,
      fields: "files(id, name)",
    });

    for (const file of response.result.files) {
      console.log(`${file.name} (${file.id})`);
    }
  } catch (error) {
    console.error("Could not list Drive files:", error);
  }
}
```

Die Bibliothek übersetzt `gapi.client.drive.files.list()` in eine HTTP-Anfrage und stellt die verarbeitete Antwort über `response.result` zur Verfügung. Um Google-APIs zu verwenden, sind allerdings einige Vorbereitungsschritte erforderlich, die im [JavaScript-Schnellstart für die Drive API](https://developers.google.com/workspace/drive/api/quickstart/js) von Google beschrieben werden: Sie müssen die Anwendung mit ihren Berechtigungen registrieren, OAuth konfigurieren und weitere Schritte durchführen.

### Sie erfordern üblicherweise API-Schlüssel

Die Sicherheit von Browser-APIs wird häufig über Berechtigungsabfragen geregelt, wie [in unserem ersten Artikel erläutert](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Sie informieren Nutzer darüber, was auf besuchten Websites geschieht, und sollen verhindern, dass jemand eine API zu ihren Lasten missbräuchlich verwendet.

APIs von Drittanbietern haben ein etwas anderes Berechtigungssystem: Sie verwenden häufig Entwicklerschlüssel, um Entwicklern Zugriff auf die API-Funktionen zu gewähren. Dabei geht es eher um den Schutz des API-Anbieters als um den der Nutzer.

Durch die Pflicht zur Verwendung eines Schlüssels kann der API-Anbieter Entwickler für ihre Handlungen verantwortlich machen. Wenn ein Entwickler einen Schlüssel registriert, kann der Anbieter ihn identifizieren und Maßnahmen ergreifen, falls der Entwickler die API missbräuchlich nutzt – beispielsweise, um Standorte von Personen zu verfolgen oder die API mit so vielen Anfragen zu überlasten, dass sie nicht mehr funktioniert. Die einfachste Maßnahme besteht darin, dem Entwickler die Zugriffsrechte auf die API zu entziehen.

Im Beispiel zur YouTube-API finden Sie eine Zeile, die der folgenden ähnelt:

```js
gapi.client.setApiKey("YOUR-API-KEY-HERE");
```

Diese Zeile legt einen API- oder Entwicklerschlüssel für Ihre Anwendung fest. Der Anwendungsentwickler muss einen solchen Schlüssel beantragen und in seinen Code einfügen, um auf die Funktionen der API zugreifen zu dürfen. In unserem Beispiel steht dort lediglich ein Platzhalter.

Andere APIs verlangen möglicherweise, dass Sie den Schlüssel auf etwas andere Weise angeben. Das Grundmuster ist bei den meisten jedoch ähnlich.

> [!WARNING]
> Schützen Sie API-Schlüssel genauso wie Ihre Passwörter. Sofern die Dokumentation des API-Anbieters es nicht ausdrücklich erlaubt, sollten Sie API-Schlüssel niemals in Ihren Frontend-Code einbetten. Andernfalls kann jeder Besucher Ihrer Website den Schlüssel auslesen und missbrauchen. Das könnte vertrauliche Informationen offenlegen oder dazu führen, dass Sie von der Nutzung der API ausgeschlossen werden. Richten Sie stattdessen immer ein eigenes Backend ein und leiten Sie die Anfrage darüber als _Proxy_ weiter: Ihr Server kommuniziert mithilfe des API-Schlüssels mit der API des Drittanbieters, während der Nutzer mit Ihrem Server kommuniziert. Der API-Schlüssel befindet sich nur auf Ihrem Server.
>
> Ebenso sollten Sie API-Schlüssel niemals in Ihre öffentlichen GitHub-Repositorys übernehmen. Falls Sie einen Schlüssel versehentlich offenlegen, widerrufen Sie ihn sofort und erstellen Sie einen neuen.

Nicht alle APIs benötigen API-Schlüssel. Manche APIs stellen öffentlich zugängliche Funktionen mit hohem Anfragevolumen bereit, bei denen eine Zugriffsgenehmigung die Serverlast kaum beeinflussen würde (auch wenn die Anfragen weiterhin begrenzt sein können). Beispiele sind die [GitHub REST API](https://docs.github.com/en/rest) (siehe nächster Abschnitt), die [Wikipedia-APIs](https://www.mediawiki.org/wiki/API:Main_page) für Artikelinhalte und die [Stack Exchange API](https://api.stackexchange.com/docs) für Fragen und Antworten.

## Eine RESTful API – GitHub

Wie bereits erwähnt, werden alle API-Aufrufe letztlich zu HTTP-Anfragen. Manche APIs stellen dafür SDKs bereit, während andere erwarten, dass Sie die Anfragen selbst handhaben.

Im letzteren Fall sind die APIs üblicherweise nach dem [**RESTful**](https://en.wikipedia.org/wiki/REST)-Prinzip gestaltet. Bei diesem Ansatz ist der Client _zustandslos_ (das heißt, jede Anfrage wird unabhängig von anderen gestellt). Er sendet Anfragen an bestimmte URLs und verwendet dafür bestimmte HTTP-Methoden (`GET`, `POST` usw.), um bestimmte Aktionen auszuführen. Die Eingaben für eine Aktion übermittelt er als URL-Parameter oder im Anfragetext.

Sehen wir uns die [GitHub REST API](https://docs.github.com/en/rest) an. Mit dieser API können Sie Informationen über GitHub-Repositorys abrufen und auf Ihrer Website anzeigen.

### Die Dokumentation finden

Wenn Sie eine API eines Drittanbieters verwenden möchten, suchen Sie nach ihrer Dokumentation. Dort erfahren Sie, welche Funktionen die API bietet und wie Sie sie verwenden. Für dieses Beispiel nutzen wir den [Endpunkt zur Suche nach Repositorys](https://docs.github.com/en/rest/search/search#search-repositories) von GitHub.

Achten Sie beim Lesen der Dokumentation einer REST-API auf diese fünf Fragen:

1. Welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) ist für die Aufgabe zu verwenden?
2. An welchen URL-Endpunkt muss die Anfrage gesendet werden?
3. Welche Nutzdaten erwartet der Endpunkt und in welchem Format (JSON-Text, XML-Text, Abfrageparameter usw.)?
4. Welche [Statuscodes](/de/docs/Web/HTTP/Reference/Status) kann er zurückgeben und was bedeuten sie jeweils?
5. Was enthält der Antworttext und in welchem Format liegt er vor?

### Einen persönlichen Zugriffstoken erstellen

Erstellen Sie für diese Übung einen **persönlichen Zugriffstoken (PAT)**, um Ihre Anfragen zu authentifizieren:

1. Melden Sie sich bei Ihrem GitHub-Konto an oder [erstellen Sie ein Konto](https://github.com/signup), falls Sie noch keines haben.
2. Folgen Sie der GitHub-Anleitung zum [Erstellen eines persönlichen Zugriffstokens mit fein abgestuften Berechtigungen](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token). Geben Sie dem Token einen aussagekräftigen Namen (beispielsweise „MDN 3rd party API lesson“) und ein nahes Ablaufdatum (wenn Sie ihn nach dieser Lektion voraussichtlich nicht mehr verwenden). Wählen Sie Ihr eigenes Konto als Ressourceninhaber aus.
3. Wählen Sie unter **Repository access** die Option **Public repositories**. Legen Sie keine zusätzlichen Berechtigungen fest: Für die Suche in öffentlichen Repositorys sind keine erforderlich.
4. Klicken Sie auf **Generate token** und kopieren Sie den Token. Sie geben ihn im Formular des [interaktiven Beispiels](#das_beispiel_ausprobieren) ein, statt ihn Ihrem Quellcode hinzuzufügen.

In diesem Beispiel werden API-Schlüssel anders als üblich verwendet: Die Website fordert Nutzer auf, ihren eigenen Schlüssel einzugeben, und führt die Aktion in deren Auftrag aus. Daher benötigt sie weder einen eigenen API-Schlüssel noch einen Server, der die Anfragen weiterleitet.

> [!WARNING]
> Behandeln Sie diesen PAT ebenfalls wie ein Passwort. Geben Sie ihn nur auf Websites ein, denen Sie vertrauen, und versehen Sie ihn mit möglichst eng begrenzten Berechtigungen und einem nahen Ablaufdatum, damit er nicht missbraucht werden kann. Unser Beispiel sendet den Token direkt von Ihrem Browser an GitHub. Es speichert ihn weder im Browser noch sendet es ihn an andere Server.

GitHub erlaubt auch nicht authentifizierte Suchanfragen in öffentlichen Repositorys, allerdings mit einer niedrigeren [Ratenbegrenzung für Suchanfragen](https://docs.github.com/en/rest/search/search#rate-limit). Das Token-Feld ist daher optional: Sie können das Beispiel zunächst ohne Token ausprobieren und ihn anschließend eingeben, um zu sehen, wie einer Anfrage die Authentifizierung hinzugefügt wird.

### Das Beispiel einrichten

In der Anwendung können Sie einen Suchbegriff sowie optional ein Anfangs- und Enddatum für die Erstellung von Repositorys eingeben. Anschließend zeigt sie passende Repositorys an.

Der HTML-Code definiert das Suchformular, eine Statusmeldung, einen Bereich für die Ergebnisse und Schaltflächen zum Blättern zwischen den Seiten:

```html live-sample___github-search
<form>
  <fieldset>
    <legend>Search public repositories</legend>
    <p>
      <label for="token">Personal access token (optional):</label>
      <input id="token" type="password" autocomplete="off" />
    </p>
    <p>
      <label for="search">Search term:</label>
      <input id="search" type="search" required />
    </p>
    <p>
      <label for="start-date">Created on or after:</label>
      <input id="start-date" type="date" />
    </p>
    <p>
      <label for="end-date">Created on or before:</label>
      <input id="end-date" type="date" />
    </p>
    <button type="submit">Search</button>
  </fieldset>
</form>
<p id="status" role="status"></p>
<section aria-label="Search results"></section>
<nav aria-label="Result pages">
  <button id="previous" type="button" disabled>Previous page</button>
  <button id="next" type="button" disabled>Next page</button>
</nav>
```

Der JavaScript-Code speichert zunächst Referenzen auf die HTML-Elemente und richtet den Zustand für die Seitennavigation ein:

```js live-sample___github-search
const baseURL = "https://api.github.com/search/repositories";
const perPage = 10;
const searchForm = document.querySelector("form");
const searchFields = document.querySelector("fieldset");
const tokenInput = document.querySelector("#token");
const searchTerm = document.querySelector("#search");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const section = document.querySelector("section");
const status = document.querySelector("#status");
const nextBtn = document.querySelector("#next");
const previousBtn = document.querySelector("#previous");

let pageNumber = 1;
let query = "";
let hasNextPage = false;
```

### Die API mit Ihrer Anwendung verbinden

Beim Absenden des Formulars setzen wir die Suchanfrage zusammen:

```js live-sample___github-search
searchForm.addEventListener("submit", submitSearch);

function submitSearch(e) {
  e.preventDefault();

  query = `${searchTerm.value.trim()} is:public`;
  if (startDate.value !== "") {
    query = `${query} created:>=${startDate.value}`;
  }
  if (endDate.value !== "") {
    query = `${query} created:<=${endDate.value}`;
  }

  pageNumber = 1;
  hasNextPage = false;
  section.textContent = "";
  fetchResults(pageNumber);
}
```

`submitSearch()` ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, damit das Formular nicht tatsächlich abgesendet und die Seite neu geladen wird. Anschließend kombiniert die Funktion den Suchbegriff mit den [Suchqualifikatoren](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories) von GitHub: `is:public` beschränkt die Ergebnisse auf öffentliche Repositorys und die `created:`-Qualifikatoren filtern nach Erstellungsdatum. Wir speichern diese Anfrage in einer übergeordneten Variablen, damit beim Blättern zwischen den Seiten dieselbe Anfrage verwendet wird – auch wenn das Suchformular inzwischen geändert wurde.

### Daten von der API anfordern

Stellen wir nun mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) eine Anfrage. Die Funktion `fetchResults()` fordert eine Seite mit Suchergebnissen an:

```js live-sample___github-search
async function fetchResults(page) {
  const url = new URL(baseURL);
  url.searchParams.set("q", query);
  url.searchParams.set("page", page);
  url.searchParams.set("per_page", perPage);

  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2026-03-10",
  };
  const token = tokenInput.value.trim();
  if (token !== "") {
    headers.Authorization = `Bearer ${token}`;
  }

  searchFields.disabled = true;
  nextBtn.disabled = true;
  previousBtn.disabled = true;
  status.textContent = "Loading…";

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    displayResults(json);
    pageNumber = page;
    hasNextPage = pageNumber * perPage < Math.min(json.total_count, 1000);
    status.textContent = `Page ${pageNumber}.`;
    if (json.incomplete_results) {
      status.textContent +=
        " The search returned incomplete results. Try a narrower search.";
    }
  } catch (error) {
    status.textContent = `Could not fetch results: ${error.message}`;
  } finally {
    searchFields.disabled = false;
    previousBtn.disabled = pageNumber === 1;
    nextBtn.disabled = !hasNextPage;
  }
}
```

Die GitHub REST API verwendet die üblichen HTTP-Methoden, um verschiedene Aktionen zu unterscheiden. Da wir Daten lesen, senden wir eine `GET`-Anfrage (die Standardeinstellung von `fetch()`). Eine `GET`-Anfrage hat keinen Anfragetext, daher übermitteln wir die Eingaben als Abfrageparameter. Wir fügen sie über die Eigenschaft `searchParams` des [`URL`](/de/docs/Web/API/URL)-Objekts hinzu: die Suchanfrage (`q`), die Seitennummer (`page`) und die Anzahl der Ergebnisse pro Seite (`per_page`).

Eine Suche nach `cats` ohne Datumsangaben erzeugt beispielsweise eine URL wie diese:

```url
https://api.github.com/search/repositories?q=cats+is%3Apublic&page=1&per_page=10
```

Das `headers`-Objekt legt das Antwortformat und die API-Version fest. Beachten Sie insbesondere den Header {{HTTPHeader("Authorization")}}: Über ihn werden üblicherweise API-Schlüssel übertragen. Hier verwenden wir das `Bearer`-Schema.

Die REST-API gibt Daten im JSON-Format zurück, weil wir dies mit `Accept: "application/vnd.github+json"` angefordert haben. Anschließend verarbeiten wir die Antwort mit [`response.json()`](/de/docs/Web/API/Response/json). Die Struktur des JSON-Objekts finden Sie auch in der [Dokumentation des Endpunkts zur Suche nach Repositorys](https://docs.github.com/en/rest/search/search#search-repositories) von GitHub.

> [!NOTE]
> Wenn Sie einen `401`-Fehler erhalten, prüfen Sie, ob der Token falsch eingegeben wurde, abgelaufen ist oder widerrufen wurde. Ein `403`- oder `429`-Fehler kann auf eine Ratenbegrenzung hinweisen. Warten Sie in diesem Fall, bevor Sie es erneut versuchen, statt wiederholt auf „Search“ zu klicken – das würde die Situation nur verschlimmern. Weitere Informationen finden Sie in der [Anleitung zur Fehlerbehebung](https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api) von GitHub.

Nach einer erfolgreichen Anfrage aktualisiert `fetchResults()` `pageNumber` und aktiviert die jeweils passenden Schaltflächen. Auf der ersten Seite ist die Schaltfläche für die vorherige Seite deaktiviert. Der Suchendpunkt stellt höchstens 1.000 Ergebnisse bereit. `fetchResults()` berücksichtigt diese Grenze und `total_count`, um zu entscheiden, wann die Schaltfläche für die nächste Seite deaktiviert werden muss.

### Die Daten anzeigen

Die Funktion `displayResults()` zeigt die zurückgegebenen Repositorys an:

```js live-sample___github-search
function displayResults(json) {
  section.textContent = "";

  const repositories = json.items;

  if (repositories.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No results returned.";
    section.appendChild(para);
    return;
  }
  for (const current of repositories) {
    const article = document.createElement("article");
    const heading = document.createElement("h2");
    const link = document.createElement("a");
    const para = document.createElement("p");
    const details = document.createElement("p");

    link.href = current.html_url;
    link.textContent = current.full_name;
    para.textContent = current.description ?? "No description provided.";
    details.textContent = `Stars: ${current.stargazers_count}`;

    heading.appendChild(link);
    article.appendChild(heading);
    article.appendChild(para);
    article.appendChild(details);
    section.appendChild(article);
  }
}
```

Der Code liest den JSON-Antworttext und wandelt das Ergebnis in einen DOM-Baum um.

- Zunächst entfernt er den bisherigen Inhalt des Bereichs.
- Die Repositorys befinden sich im `items`-Array der Antwort. Ist es leer, zeigen wir eine Meldung an, dass keine Ergebnisse zurückgegeben wurden.
- Andernfalls erstellen wir für jedes Repository Elemente für den Namen, den Link, die Beschreibung und die Anzahl der Sterne und fügen sie in das DOM ein.

### Die Schaltflächen zur Seitennavigation einbinden

Wir richten Event-Listener ein, die auf Klicks auf die Schaltflächen „Previous page“ und „Next page“ reagieren und die jeweils vorherige oder nächste Ergebnisseite anfordern:

```js live-sample___github-search
nextBtn.addEventListener("click", () => {
  fetchResults(pageNumber + 1);
});

previousBtn.addEventListener("click", () => {
  fetchResults(pageNumber - 1);
});
```

Die Seitennummerierung von GitHub beginnt bei 1. Wir haben 10 Ergebnisse pro Seite angefordert. Seite 2 enthält daher die nächsten 10 Ergebnisse und so weiter. Die aktuelle Seitennummer wird in `pageNumber` gespeichert und erst nach einer erfolgreichen Anfrage aktualisiert.

### Das Beispiel ausprobieren

Geben Sie einen Suchbegriff wie `javascript` ein und senden Sie das Formular ab. Probieren Sie die Suche mit und ohne Token aus, fügen Sie Datumsangaben hinzu und blättern Sie zwischen den Seiten.

```css hidden live-sample___github-search
body {
  font-family: sans-serif;
}

label {
  display: block;
}

input {
  box-sizing: border-box;
  max-width: 100%;
}

section {
  max-height: 300px;
  overflow: auto;
  overflow-wrap: anywhere;
}

article {
  border-bottom: 1px solid #cccccc;
}

nav {
  margin-top: 1rem;
}
```

{{EmbedLiveSample("github-search", "100%", 750)}}

## YouTube-Beispiel

Wir haben außerdem ein weiteres Beispiel erstellt, das Sie untersuchen können: unser [Beispiel zur Suche nach YouTube-Videos](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/).

> [!NOTE]
> Das verlinkte Beispiel funktioniert nicht, weil es keinen gültigen API-Schlüssel enthält. Wie bereits erläutert, sollten Sie API-Schlüssel niemals in veröffentlichtem Frontend-Code weitergeben. Um die Demo auszuführen, richten Sie wie unten beschrieben eine lokale Kopie mit Ihrem eigenen API-Schlüssel ein.

Das Beispiel verwendet zwei zusammengehörige APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/data/reference/rest), um nach YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die gefundenen Videos in iframe-Videoplayern anzuzeigen, sodass Sie sie ansehen können.

Das Beispiel ist interessant, weil es zeigt, wie sich zwei zusammengehörige APIs von Drittanbietern gemeinsam zum Erstellen einer Anwendung nutzen lassen. Die erste ist eine RESTful API, während die zweite JavaScript-Methoden zur Steuerung eines Videoplayers bereitstellt. Das Beispiel verwendet für beide APIs JavaScript-Bibliotheken: Die Clientbibliothek der Data API übernimmt die HTTP-Anfragen und gibt die Ergebnisse zurück.

![Screenshot einer beispielhaften YouTube-Videosuche mit zwei zusammengehörigen APIs. Links ist eine beispielhafte Suchanfrage über die YouTube Data API zu sehen. Rechts werden die Suchergebnisse mithilfe der YouTube Iframe Player API angezeigt.](youtube-example.png)

Wir gehen in diesem Artikel nicht weiter auf das Beispiel ein. Der [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält ausführliche Kommentare, die seine Funktionsweise erklären.

Die Data API stellt für Projekte, die sie aktivieren, standardmäßig ein tägliches [Kontingent](https://developers.google.com/youtube/data/getting-started#quota) bereit. Anfragen verbrauchen dieses Kontingent, sodass Sie nur eine begrenzte Anzahl von Suchanfragen durchführen können.

So nehmen Sie das Beispiel in Betrieb:

- Lesen Sie die Dokumentation in der [Übersicht zur YouTube Data API](https://developers.google.com/youtube/data/getting-started).
- Rufen Sie die [Seite mit den aktivierten APIs](https://console.cloud.google.com/apis/enabled) auf und prüfen Sie in der API-Liste, ob der Status der YouTube Data API v3 auf ON steht.
- Besorgen Sie sich über [Google Cloud](https://cloud.google.com/) einen API-Schlüssel.
- Suchen Sie im Quellcode nach der Zeichenfolge `YOUR-API-KEY-HERE` und ersetzen Sie sie durch Ihren API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Wenn Sie es direkt im Browser öffnen (also über eine `file://`-URL), funktioniert es nicht.

## Zusammenfassung

Dieser Artikel hat Ihnen eine Einführung in die Verwendung von APIs von Drittanbietern gegeben, mit denen Sie Ihre Websites um Funktionen erweitern können.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

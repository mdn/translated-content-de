---
title: Client-seitige Speicherung
slug: Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Moderne Webbrowser unterstützen eine Reihe von Möglichkeiten, mit denen Websites Daten auf dem Computer des Benutzers speichern können — mit dessen Erlaubnis — und diese bei Bedarf abrufen können. Damit können Sie Daten für die Langzeitspeicherung aufbewahren, Websites oder Dokumente für die Offline-Nutzung speichern, benutzerspezifische Einstellungen für Ihre Website beibehalten und vieles mehr. Dieser Artikel erklärt die Grundlagen, wie diese Technologien funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objek Grundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Die Konzepte der client-seitigen Speicherung und welche Schlüsseltechnologien dies ermöglichen — Web Storage API, Cookies, Cache API und die IndexedDB API.</li>
          <li>Wichtige Anwendungsfälle — Aufrechterhaltung des Zustands über Neuladungen hinweg, Speicherung von Anmeldedaten und Benutzerdaten zur Personalisierung sowie lokale/Offline-Nutzung.</li>
          <li>Verwenden von Web Storage für einfache Key-Value-Pair-Speicherung, gesteuert durch JavaScript.</li>
          <li>Verwendung von IndexedDB zur Speicherung komplexerer, strukturierter Daten.</li>
          <li>Verwendung der Cache API und von Service Workern für Offline-Anwendungsfälle.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

An anderer Stelle im MDN-Lernbereich haben wir über den Unterschied zwischen [statischen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten großen modernen Websites sind dynamisch — sie speichern Daten auf dem Server mit einer Art von Datenbank (server-seitige Speicherung), führen dann [server-seitigen](/de/docs/Learn_web_development/Extensions/Server-side) Code aus, um benötigte Daten abzurufen, diese in statische Seitentemplates einzufügen, und das resultierende HTML an den Client zu übermitteln, um es im Browser des Benutzers anzuzeigen.

Client-seitige Speicherung funktioniert nach ähnlichen Prinzipien, hat aber andere Anwendungen. Sie besteht aus JavaScript-APIs, die es Ihnen ermöglichen, Daten auf dem Client (d.h. auf dem Rechner des Benutzers) zu speichern und bei Bedarf abzurufen. Dies hat viele verschiedene Anwendungen, wie z.B.:

- Personalisierung von Website-Einstellungen (z. B. Anzeige der vom Benutzer ausgewählten benutzerdefinierten Widgets, Farbgestaltung oder Schriftgröße).
- Speicherung von vorheriger Website-Aktivität (z. B. Speicherung des Inhalts eines Warenkorbs von einer vorherigen Sitzung, Merken, ob ein Benutzer vorher eingeloggt war).
- Speichern von Daten und Assets lokal, damit eine Website schneller (und möglicherweise kostengünstiger) heruntergeladen oder auch ohne Netzwerkverbindung genutzt werden kann.
- Speichern von durch Webanwendungen generierten Dokumenten lokal zur Offline-Nutzung

Häufig werden client-seitige und server-seitige Speicherung zusammen genutzt. Beispielsweise könnten Sie eine Batch von Musikdateien (vielleicht gebraucht von einem Web-Spiel oder einer Musikplayer-Anwendung) herunterladen, diese in einer client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Benutzer müsste die Musikdateien nur einmal herunterladen — bei späteren Besuchen würden sie aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Grenzen für die Menge an Daten, die Sie mithilfe von client-seitigen Speicher-APIs speichern können (möglicherweise sowohl pro einzelner API als auch kumulativ); das genaue Limit variiert je nach Browser und möglicherweise aufgrund von Benutzereinstellungen. Weitere Informationen finden Sie unter [Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Old school: Cookies

Das Konzept der client-seitigen Speicherung gibt es schon lange. Seit den frühen Tagen des Webs verwenden Websites [Cookies](/de/docs/Web/HTTP/Guides/Cookies), um Informationen zu speichern, um die Benutzererfahrung auf Webseiten zu personalisieren. Sie sind die früheste Form der client-seitigen Speicherung, die häufig im Web verwendet wird.

Heutzutage gibt es einfachere Mechanismen zur Speicherung von client-seitigen Daten, daher werden wir Ihnen in diesem Artikel nicht beibringen, wie Cookies verwendet werden. Das bedeutet jedoch nicht, dass Cookies im modernen Web völlig nutzlos sind — sie werden immer noch häufig verwendet, um Daten im Zusammenhang mit Benutzerpersonalisierung und Zustandsinformationen zu speichern, z. B. Sitzungs-IDs und Zugriffstoken. Weitere Informationen zu Cookies finden Sie in unserem Artikel [Using HTTP cookies](/de/docs/Web/HTTP/Guides/Cookies).

### New school: Web Storage und IndexedDB

Die oben genannten "einfacheren" Features sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenelemente, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einige einfache Daten speichern müssen, wie den Namen des Benutzers, ob er eingeloggt ist, welche Farbe für den Bildschirmhintergrund verwendet werden soll usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet dem Browser ein komplettes Datenbanksystem zum Speichern komplexer Daten. Dies kann für alles verwendet werden, von vollständigen Kundendatensätzen bis hin zu komplexen Datentypen wie Audio- oder Videodateien.

Sie werden unten mehr über diese APIs erfahren.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API ist zum Speichern von HTTP-Antworten auf bestimmte Anfragen konzipiert und ist sehr nützlich, um beispielsweise Website-Assets offline zu speichern, sodass die Website anschließend ohne Netzwerkverbindung genutzt werden kann. Cache wird üblicherweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl dies nicht zwingend notwendig ist.

Die Verwendung von Cache und Service Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht im Detail behandeln, obwohl wir ein Beispiel im Abschnitt [Offline-Speicherung von Assets](#offline-asset-speicherung) unten zeigen werden.

## Speichern einfacher Daten — Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden — Sie speichern einfache Name/Wert-Paare von Daten (beschränkt auf Strings, Zahlen usw.) und rufen diese Werte bei Bedarf ab.

### Grundlegende Syntax

Lassen Sie uns Ihnen zeigen, wie:

1. Besuchen Sie zuerst unsere [Web Storage Blanko-Vorlage](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie dies in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwickler-Tools Ihres Browsers.
3. Alle Ihre Web Storage-Daten sind in zwei objektähnlichen Strukturen im Browser enthalten: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Die erste behält Daten, solange der Browser geöffnet ist (die Daten gehen verloren, wenn der Browser geschlossen wird), und die zweite behält Daten auch nachdem der Browser geschlossen und wieder geöffnet wurde. Wir werden die zweite in diesem Artikel verwenden, da sie im Allgemeinen nützlicher ist.

   Die Methode [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) ermöglicht es Ihnen, ein Datenelement im Speicher zu speichern — sie erhält zwei Parameter: den Namen des Elements und dessen Wert. Versuchen Sie, dies in Ihre JavaScript-Konsole einzugeben (ändern Sie den Wert auf Ihren eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) benötigt einen Parameter — den Namen eines Datenelements, das Sie abrufen möchten — und gibt den Wert des Elements zurück. Geben Sie nun diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Nach Eingabe der zweiten Zeile sollten Sie sehen, dass die Variable `myName` nun den Wert des `name`-Datenelements enthält.

5. Die Methode [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) benötigt einen Parameter — den Namen eines Datenelements, das Sie entfernen möchten — und entfernt dieses Element aus dem Web Storage. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte jetzt `null` zurückgeben — das `name`-Element existiert nicht mehr im Web Storage.

### Die Daten bleiben bestehen!

Ein Schlüsselmerkmal von Web Storage ist, dass die Daten zwischen Seitenladevorgängen bestehen bleiben (und sogar dann, wenn der Browser heruntergefahren wird, im Fall von `localStorage`). Lassen Sie uns dies in Aktion sehen.

1. Öffnen Sie unsere Web Storage Blanko-Vorlage erneut, diesmal jedoch in einem anderen Browser als dem, den Sie für dieses Tutorial verwenden! Das macht es einfacher zu handhaben.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass das `name`-Element zurückgegeben wird.

3. Schließen Sie nun den Browser und öffnen Sie ihn erneut.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert noch verfügbar ist, obwohl der Browser geschlossen und dann erneut geöffnet wurde.

### Separater Speicher pro Domain

Es gibt einen separaten Datenspeicher für jede Domain (jede separate Webadresse, die im Browser geladen wird). Sie werden sehen, dass, wenn Sie zwei Websites (z. B. google.com und amazon.com) laden und versuchen, ein Element auf einer Website zu speichern, es auf der anderen Website nicht verfügbar ist.

Das macht Sinn — man kann sich die Sicherheitsprobleme vorstellen, die entstehen würden, wenn Websites die Daten anderer sehen könnten!

### Ein komplexeres Beispiel

Lassen Sie uns dieses neue Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, um Ihnen eine Vorstellung davon zu geben, wie Web Storage verwendet werden kann. Unser Beispiel wird es Ihnen ermöglichen, einen Namen einzugeben, woraufhin die Seite aktualisiert wird, um Ihnen eine personalisierte Begrüßung anzuzeigen. Dieser Zustand wird auch über Seiten-/Browser-Neuladungen bestehen bleiben, da der Name im Web Storage gespeichert wird.

Sie können das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) finden — dies enthält eine Website mit einem Header, Inhalt und Footer sowie ein Formular zur Eingabe Ihres Namens.

![Ein Screenshot einer Website, die Header-, Inhalts- und Footer-Abschnitte enthält. Der Header hat einen Begrüßungstext auf der linken Seite und einen mit 'vergessen' beschrifteten Button auf der rechten Seite. Der Inhalt hat eine Überschrift, gefolgt von zwei Absätzen mit Platzhaltertext. Der Footer liest 'Copyright niemand. Verwenden Sie den Code, wie Sie möchten'.](web-storage-demo.png)

Lassen Sie uns das Beispiel aufbauen, damit Sie verstehen, wie es funktioniert.

1. Machen Sie zuerst eine lokale Kopie unserer [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) Datei in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie, wie unser HTML auf eine JavaScript-Datei namens `index.js` verweist, mit einer Zeile wie `<script src="index.js" defer></script>`. Wir müssen diese erstellen und unseren JavaScript-Code hineinschreiben. Erstellen Sie eine `index.js`-Datei im selben Verzeichnis wie Ihre HTML-Datei.
3. Wir beginnen damit, Referenzen zu allen HTML-Features zu erstellen, die wir in diesem Beispiel manipulieren müssen — wir erstellen sie alle als Konstanten, da diese Referenzen während des Lebenszyklus der App nicht geändert werden müssen. Fügen Sie die folgenden Zeilen in Ihre JavaScript-Datei ein:

   ```js
   // create needed constants
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. Als nächstes müssen wir einen kleinen Event-Listener einfügen, um zu verhindern, dass das Formular tatsächlich gesendet wird, wenn der Absenden-Button gedrückt wird, da dies nicht das gewünschte Verhalten ist. Fügen Sie diesen Codeausschnitt unter Ihrem vorherigen Code hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Nun müssen wir einen Event-Listener hinzufügen, dessen Handlerfunktion beim Klicken auf den Button "Say hello" ausgeführt wird. Die Kommentare erklären im Detail, was jedes Teil macht, aber im Wesentlichen nehmen wir hier den Namen, den der Benutzer in das Text-Eingabefeld eingegeben hat, speichern ihn im Web Storage mit `setItem()` und führen dann eine Funktion namens `nameDisplayCheck()` aus, die die Aktualisierung des tatsächlichen Website-Textes übernimmt. Fügen Sie dies am Ende Ihres Codes hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. An diesem Punkt benötigen wir auch einen Event-Handler, um eine Funktion auszuführen, wenn der Button "Forget" geklickt wird — dieser wird nur angezeigt, nachdem der Button "Say hello" geklickt wurde (die beiden Formularzustände wechseln hin und her). In dieser Funktion entfernen wir das `name`-Element aus dem Web Storage mit `removeItem()`, und führen erneut `nameDisplayCheck()` aus, um die Anzeige zu aktualisieren. Fügen Sie dies an das Ende hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Es ist jetzt an der Zeit, die Funktion `nameDisplayCheck()` selbst zu definieren. Hier überprüfen wir, ob das `name`-Element im Web Storage gespeichert wurde, indem wir `localStorage.getItem('name')` als Bedingungstest verwenden. Wenn der Name gespeichert wurde, wird dieser Aufruf als `true` ausgewertet; wenn nicht, wird der Aufruf als `false` ausgewertet. Wenn der Aufruf als `true` ausgewertet wird, zeigen wir eine personalisierte Begrüßung an, zeigen den "Forget"-Teil des Formulars an und verbergen den "Say hello"-Teil des Formulars. Wenn der Aufruf als `false` ausgewertet wird, zeigen wir eine generische Begrüßung an und tun das Gegenteil. Erneut fügen Sie den folgenden Code am Ende ein:

   ```js
   // define the nameDisplayCheck() function
   function nameDisplayCheck() {
     // check whether the 'name' data item is stored in web Storage
     if (localStorage.getItem("name")) {
       // If it is, display personalized greeting
       const name = localStorage.getItem("name");
       h1.textContent = `Welcome, ${name}`;
       personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
       // hide the 'remember' part of the form and show the 'forget' part
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // if not, display generic greeting
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // hide the 'forget' part of the form and show the 'remember' part
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. Zuletzt müssen wir die Funktion `nameDisplayCheck()` beim Laden der Seite ausführen. Wenn wir dies nicht tun, wird die personalisierte Begrüßung nicht über Seitenneu-Ladungen bestehen bleiben. Fügen Sie folgendes am Ende Ihres Codes ein:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig — gut gemacht! Alles, was jetzt noch bleibt, ist Ihren Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können unsere [fertige Version live hier laufen sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel zur Erkundung unter [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer fertigen Version gibt das `defer`-Attribut an, dass der Inhalt des {{htmlelement("script")}}-Elements nicht ausgeführt wird, bevor die Seite vollständig geladen ist.

## Speichern komplexer Daten — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal abgekürzt als IDB) ist ein komplettes Datenbanksystem, das im Browser verfügbar ist und in dem komplexe zusammengehörige Daten gespeichert werden können, deren Typen nicht nur auf einfache Werte wie Strings oder Zahlen beschränkt sind. Sie können Videos, Bilder und praktisch alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB API ermöglicht es Ihnen, eine Datenbank zu erstellen, dann Objektspeicher innerhalb dieser Datenbank zu erstellen. Objektspeicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objektspeicher kann eine Anzahl von Objekten enthalten. Um mehr über die IndexedDB API zu erfahren, siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

Dies geht jedoch auf Kosten der Komplexität: IndexedDB ist viel komplizierter zu nutzen als die Web Storage API. In diesem Abschnitt kratzen wir wirklich nur an der Oberfläche dessen, was es leisten kann, aber wir geben Ihnen genug, um anzufangen.

### Durcharbeiten eines Notizspeicher-Beispiels

Hier führen wir Sie durch ein Beispiel, das es Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern und sie jederzeit zu ansehen und zu löschen, indem Sie es selbst aufbauen und die grundlegendsten Teile von IDB währenddessen erklären.

Die App sieht in etwa so aus:

![IndexDB-Notiz-Demo-Screenshot mit 4 Abschnitten. Der erste Abschnitt ist der Header. Der zweite Abschnitt listet alle Notizen auf, die erstellt wurden. Er hat zwei Notizen, jede mit einem Lösch-Button. Ein dritter Abschnitt ist ein Formular mit 2 Eingabefeldern für 'Note title' und 'Note text' und einem Button beschriftet 'Create new note'. Der unterste Abschnitt-Footer liest 'Copyright niemand. Verwenden Sie den Code, wie Sie möchten'.](idb-demo.png)

Jede Notiz hat einen Titel und etwas Text im Hauptteil, beide individuell bearbeitbar. Der unten dargestellte JavaScript-Code hat detaillierte Kommentare, um Ihnen zu helfen, zu verstehen, was vor sich geht.

### Loslegen

1. Machen Sie sich zuerst lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) Dateien in einem neuen Ordner auf Ihrer lokalen Maschine.
2. Schauen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einem Header und einem Footer sowie einen Hauptinhaltsbereich definiert, der einen Platz zum Anzeigen von Notizen sowie ein Formular zum Eingeben neuer Notizen in die Datenbank enthält. Das CSS sorgt für etwas Styling, um zu verdeutlichen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten mit Referenzen zum {{htmlelement("ul")}}-Element, in dem die Notizen angezeigt werden, den Titel- und Text-{{htmlelement("input")}}-Elementen, dem {{htmlelement("form")}} selbst und dem {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind jetzt bereit, Code darin hinzuzufügen.

### Datenbank-Ersteinrichtung

Sehen wir uns nun an, was wir zuerst tun müssen, um tatsächlich eine Datenbank einzurichten.

1. Unter den Konstantendeklarationen fügen Sie die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db` — diese wird später verwendet, um ein Objekt zu speichern, das unsere Datenbank darstellt. Wir werden dies an mehreren Stellen verwenden, daher haben wir sie hier global deklariert, um die Dinge einfacher zu machen.

2. Als nächstes fügen Sie Folgendes hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage zum Öffnen von Version `1` einer Datenbank namens `notes_db`. Wenn diese noch nicht existiert, wird sie von anschließendem Code für Sie erstellt. Sie werden dieses Anfrage-Muster sehr häufig in IndexedDB sehen. Datenbankoperationen brauchen Zeit. Sie möchten den Browser nicht hängen lassen, während Sie auf die Ergebnisse warten, daher sind Datenbankoperationen {{Glossary("asynchronous", "asynchron")}}, was bedeutet, dass sie nicht sofort passieren, sondern irgendwann in der Zukunft, und Sie werden benachrichtigt, wenn sie fertig sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anfrageobjekt (das Sie beliebig nennen können — wir haben es `openRequest` genannt, damit klar ist, wofür es ist). Sie verwenden dann Event-Handler, um Code auszuführen, wenn die Anfrage abgeschlossen ist, fehlschlägt usw., was Sie unten in Aktion sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (z. B. indem Sie die Tabellenstruktur ändern), müssen Sie Ihren Code erneut mit einer erhöhten Versionsnummer, einem anderen Schema, das im `upgradeneeded`-Handler (siehe unten) angegeben ist, ausführen usw. Wir werden das Aktualisieren von Datenbanken in diesem Tutorial nicht abdecken.

3. Fügen Sie nun die folgenden Event-Handler direkt unter Ihrer vorherigen Hinzufügung hinzu:

   ```js
   // error handler signifies that the database didn't open successfully
   openRequest.addEventListener("error", () =>
     console.error("Database failed to open"),
   );

   // success handler signifies that the database opened successfully
   openRequest.addEventListener("success", () => {
     console.log("Database opened successfully");

     // Store the opened database object in the db variable. This is used a lot below
     db = openRequest.result;

     // Run the displayData() function to display the notes already in the IDB
     displayData();
   });
   ```

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event)-Event-Handler wird ausgeführt, wenn das System zurückkommt und sagt, dass die Anfrage fehlgeschlagen ist. Dadurch können Sie auf dieses Problem reagieren. In unserem Beispiel drucken wir einfach eine Nachricht an die JavaScript-Konsole.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event)-Event-Handler wird ausgeführt, wenn die Anfrage erfolgreich zurückkehrt, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. Wenn dies der Fall ist, wird ein Objekt, das die geöffnete Datenbank darstellt, im [`openRequest.result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft verfügbar, sodass wir die Datenbank manipulieren können. Wir speichern dies in der `db`-Variablen, die wir zuvor für die spätere Verwendung erstellt haben. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank innerhalb des {{HTMLElement("ul")}} anzeigt. Wir führen sie jetzt aus, damit die Notizen, die bereits in der Datenbank sind, sofort bei Seitenaufruf angezeigt werden. Sie werden `displayData()` später definiert sehen.

4. Schließlich für diesen Abschnitt, fügen Sie den wahrscheinlich wichtigsten Event-Handler für die Einrichtung der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer höheren Versionsnummer geöffnet wird als die bestehende gespeicherte Datenbank (wenn Sie ein Upgrade durchführen). Fügen Sie den folgenden Code hinzu, unter Ihrem vorherigen Handler:

   ```js
   // Set up the database tables if this has not already been done
   openRequest.addEventListener("upgradeneeded", (e) => {
     // Grab a reference to the opened database
     db = e.target.result;

     // Create an objectStore in our database to store notes and an auto-incrementing key
     // An objectStore is similar to a 'table' in a relational database
     const objectStore = db.createObjectStore("notes_os", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Define what data items the objectStore will contain
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Database setup complete");
   });
   ```

   Hier definieren wir das Schema (die Struktur) unserer Datenbank; das heißt, die Gruppe von Spalten (oder Feldern), die sie enthält. Hier zielen wir erst auf die existente Datenbank, die über die `result`-Eigenschaft des Event-Ziels (`e.target.result`) verfügbar ist — dies ist das `request`-Objekt. Dies entspricht der Zeile `db = openRequest.result;` im `success`-Event-Handler, aber wir müssen dies hier separat tun, da der `upgradeneeded`-Event-Handler (falls benötigt) vor dem `success`-Event-Handler ausgeführt wird, was bedeutet, dass der `db`-Wert nicht verfügbar wäre, wenn wir das nicht tun würden.

   Wir verwenden dann [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore), um einen neuen Objektspeicher innerhalb unserer geöffneten Datenbank mit dem Namen `notes_os` zu erstellen. Dies entspricht einer einzigen Tabelle in einem konventionellen Datenbanksystem. Wir haben es `notes` genannt und auch ein `autoIncrement`-Schlüsselfeld namens `id` spezifiziert — in jedem neuen Datensatz wird dies automatisch mit einem inkrementierten Wert versehen — der Entwickler muss dies nicht explizit festlegen. Da es sich um den Schlüssel handelt, wird das `id`-Feld verwendet, um Datensätze eindeutig zu identifizieren, beispielsweise beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen auch zwei andere Indizes (Felder) mit der Methode [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex): `title` (das einen Titel für jede Notiz enthalten wird) und `body` (das den Text der Notiz enthalten wird).

Mit diesem Datenbankschema eingerichtet, wenn wir anfangen, Datensätze in die Datenbank hinzuzufügen, wird jeder von ihnen als ein Objekt entlang dieser Linie dargestellt:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Sehen wir uns jetzt an, wie wir Datensätze zu der Datenbank hinzufügen können. Dies wird über das Formular auf unserer Seite durchgeführt.

Unter Ihrem vorherigen Event-Handler fügen Sie die folgende Zeile hinzu, die einen `submit`-Event-Handler einrichtet, der eine Funktion namens `addData()` ausführt, wenn das Formular gesendet wird (wenn der {{htmlelement("button")}} für die Übermittlung gedrückt wird, was zu einer erfolgreichen Formularübermittlung führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Lassen Sie uns nun die Funktion `addData()` definieren. Fügen Sie dies unter Ihrer vorherigen Zeile hinzu:

```js
// Define the addData() function
function addData(e) {
  // prevent default - we don't want the form to submit in the conventional way
  e.preventDefault();

  // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
  const newItem = { title: titleInput.value, body: bodyInput.value };

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["notes_os"], "readwrite");

  // call an object store that's already been added to the database
  const objectStore = transaction.objectStore("notes_os");

  // Make a request to add our newItem object to the object store
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener("success", () => {
    // Clear the form, ready for adding the next entry
    titleInput.value = "";
    bodyInput.value = "";
  });

  // Report on the success of the transaction completing, when everything is done
  transaction.addEventListener("complete", () => {
    console.log("Transaction completed: database modification finished.");

    // update the display of data to show the newly added item, by running displayData() again.
    displayData();
  });

  transaction.addEventListener("error", () =>
    console.log("Transaction not opened due to error"),
  );
}
```

Dies ist ziemlich komplex; lassen Sie uns das aufschlüsseln:

- Wir führen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Event-Objekt aus, um zu verhindern, dass das Formular tatsächlich in herkömmlicher Weise gesendet wird (dies würde ein Seiten-Reload verursachen und das Erlebnis verderben).
- Wir erstellen ein Objekt, das einen Datensatz darstellt, der in die Datenbank eingetragen werden soll, und füllen es mit Werten aus den Formulareingaben. Beachten Sie, dass wir keinen `id`-Wert explizit einschließen müssen — wie wir bereits erklärt haben, ist dies automatisch hinzugefügt.
- Wir öffnen eine `readwrite`-Transaktion gegen den `notes_os`-Objektspeicher mit der [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction)-Methode. Dieses Transaktionsobjekt ermöglicht es uns, auf den Objektspeicher zuzugreifen, sodass wir etwas damit tun können, z. B. einen neuen Datensatz hinzufügen.
- Wir greifen auf das Objektspeicher mit der [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)-Methode zu und speichern das Ergebnis in der Variablen `objectStore`.
- Wir fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) zur Datenbank hinzu. Dies erzeugt ein Anfrageobjekt, genau so, wie wir es zuvor gesehen haben.
- Wir fügen eine Reihe von Event-Handlern zu den `request`- und `transaction`-Objekten hinzu, die Code an kritischen Punkten im Lebenszyklus ausführen. Sobald die Anfrage erfolgreich war, löschen wir die Formular-Eingaben, um für die Eingabe der nächsten Notiz bereit zu sein. Sobald die Transaktion abgeschlossen ist, führen wir die Funktion `displayData()` erneut aus, um die Anzeige von Notizen auf der Seite zu aktualisieren.

### Anzeigen der Daten

Wir haben bereits zweimal in unserem Code auf `displayData()` verwiesen, daher sollten wir es wahrscheinlich definieren. Fügen Sie dies zu Ihrem Code hinzu, unter der vorherigen Funktionsdefinition:

```js
// Define the displayData() function
function displayData() {
  // Here we empty the contents of the list element each time the display is updated
  // If you didn't do this, you'd get duplicates listed each time a new note is added
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Open our object store and then get a cursor - which iterates through all the
  // different data items in the store
  const objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().addEventListener("success", (e) => {
    // Get a reference to the cursor
    const cursor = e.target.result;

    // If there is still another data item to iterate through, keep running this code
    if (cursor) {
      // Create a list item, h3, and p to put each data item inside when displaying it
      // structure the HTML fragment, and append it inside the list
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Put the data from the cursor inside the h3 and para
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Store the ID of the data item inside an attribute on the listItem, so we know
      // which item it corresponds to. This will be useful later when we want to delete items
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Create a button and place it inside each listItem
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      deleteBtn.addEventListener("click", deleteItem);

      // Iterate to the next item in the cursor
      cursor.continue();
    } else {
      // Again, if list item is empty, display a 'No notes stored' message
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // if there are no more cursor items to iterate through, say so
      console.log("Notes all displayed");
    }
  });
}
```

Wieder einmal, lassen Sie uns dies aufbrechen:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}}-Elements, bevor wir es mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun, würden Sie am Ende eine riesige Liste von duplizierten Inhalten haben, die mit jeder Aktualisierung hinzugefügt werden.
- Als nächstes erhalten wir eine Referenz zum `notes_os`-Objektspeicher mit [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore), ähnlich wie wir es in `addData()` getan haben, außer dass wir sie hier in einer Zeile zusammenketteten.
- Der nächste Schritt besteht darin, die Methode [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) zu verwenden, um eine Anfrage für einen Cursor zu öffnen — dies ist ein Konstrukt, das verwendet werden kann, um über die Datensätze in einem Objektspeicher zu iterieren. Wir verketten einen `success`-Event-Handler am Ende dieser Zeile, um den Code prägnanter zu machen — wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir erhalten eine Referenz zum Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Objekt) mit `const cursor = e.target.result`.
- Als nächstes verifizieren wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) — falls ja, erstellen wir ein DOM-Fragment, füllen es mit den Daten aus dem Datensatz und fügen es in die Seite ein (innerhalb des `<ul>`-Elements). Wir berücksichtigen auch einen Löschbutton, der, wenn er geklickt wird, diese Notiz durch Ausführen der Funktion `deleteItem()` löscht, die wir im nächsten Abschnitt betrachten werden.
- Am Ende des `if`-Blocks verwenden wir die Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue), um den Cursor zum nächsten Datensatz im Datenspeicher fortzusetzen und den Inhalt des `if`-Blocks erneut auszuführen. Wenn es einen weiteren Datensatz gibt, zu dem iteriert werden kann, führt dies dazu, dass er in die Seite eingefügt wird und dann `continue()` erneut ausgeführt wird usw.
- Wenn es keine weiteren Datensätze gibt, zu denen iteriert werden kann, wird `cursor` `undefined` zurückgeben, und daher wird der `else`-Block anstelle des `if`-Blocks ausgeführt. Dieser Block überprüft, ob Notizen in das `<ul>` eingefügt wurden — falls nicht, wird eine Nachricht eingefügt, um zu sagen, dass keine Notiz gespeichert wurde.

### Löschen einer Notiz

Wie oben angegeben, wird die Notiz gelöscht, wenn der Löschbutton einer Notiz gedrückt wird. Dies wird durch die Funktion `deleteItem()` erreicht, die wie folgt aussieht:

```js
// Define the deleteItem() function
function deleteItem(e) {
  // retrieve the name of the task we want to delete. We need
  // to convert it to a number before trying to use it with IDB; IDB key
  // values are type-sensitive.
  const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // open a database transaction and delete the task, finding it using the id we retrieved above
  const transaction = db.transaction(["notes_os"], "readwrite");
  const objectStore = transaction.objectStore("notes_os");
  const deleteRequest = objectStore.delete(noteId);

  // report that the data item has been deleted
  transaction.addEventListener("complete", () => {
    // delete the parent of the button
    // which is the list item, so it is no longer displayed
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log(`Note ${noteId} deleted.`);

    // Again, if list item is empty, display a 'No notes stored' message
    if (!list.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  });
}
```

- Der erste Teil hiervon könnte eine Erklärung brauchen — wir rufen die ID des zu löschenden Datensatzes ab, indem wir `Number(e.target.parentNode.getAttribute('data-note-id'))` verwenden — erinnern Sie sich, dass die ID des Datensatzes in einem `data-note-id`-Attribut auf dem `<li>` gespeichert wurde, als es zuerst angezeigt wurde. Wir müssen den Attributwert jedoch durch das globale eingebaute [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt führen, da es vom Datentyp String ist und daher von der Datenbank nicht erkannt würde, die eine Nummer erwartet.
- Dann erhalten wir eine Referenz zum Objektspeicher, indem wir das gleiche Muster verwenden, das wir früher gesehen haben, und verwenden die Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), um den Datensatz aus der Datenbank zu löschen und ihm die ID zu übergeben.
- Wenn die Datenbanktransaktion abgeschlossen ist, löschen wir das `<li>` der Notiz aus dem DOM und führen erneut die Überprüfung durch, ob das `<ul>` jetzt leer ist, und fügen ggf. eine Notiz ein.

Das ist alles! Ihr Beispiel sollte jetzt funktionieren.

Wenn Sie Probleme damit haben, können Sie es gerne [mit unserem live Beispiel abgleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Komplexe Daten über IndexedDB speichern

Wie bereits erwähnt, kann IndexedDB verwendet werden, um mehr als nur Textzeichenfolgen zu speichern. Sie können praktisch alles speichern, was Sie möchten, einschließlich komplexer Objekte wie Video- oder Bildblobs. Und es ist nicht viel schwieriger zu erreichen als bei jedem anderen Datentyp.

Um zu demonstrieren, wie das geht, haben wir ein weiteres Beispiel geschrieben, das [IndexedDB Video Store](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) (sieht hier auch [live laufend aus](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Wenn Sie das Beispiel zum ersten Mal ausführen, lädt es alle Videos aus dem Netzwerk, speichert sie in einer IndexedDB-Datenbank und zeigt dann die Videos innerhalb von {{htmlelement("video")}}-Elementen in der UI an. Das zweite Mal, wenn Sie es ausführen, findet es die Videos in der Datenbank und holt sie von dort, bevor sie angezeigt werden — dies macht nachfolgende Ladevorgänge viel schneller und weniger bandbreitenhungrig.

Lassen Sie uns die interessantesten Teile des Beispiels durchgehen. Wir werden nicht alles ansehen — vieles davon ist ähnlich wie im vorherigen Beispiel, und der Code ist gut kommentiert.

1. Für dieses Beispiel haben wir die Namen der zu holenden Videos in einem Array von Objekten gespeichert:

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. Zu Beginn wird, sobald die Datenbank erfolgreich geöffnet ist, eine `init()`-Funktion ausgeführt. Diese durchläuft die verschiedenen Videonamen, um zu versuchen, einen von jedem Namen identifizierten Datensatz aus der `videos`-Datenbank zu laden.

   Wenn jedes Video in der Datenbank gefunden wird (geprüft, indem gesehen wird, ob `request.result` als `true` bewertet wird — wenn das Protokoll nicht vorhanden ist, wird es `undefined` sein), werden seine Videodateien (als Blobs gespeichert) und der Videoname direkt zur `displayVideo()`-Funktion gesandt, um sie in die UI zu platzieren. Wenn nicht, wird der Videoname zur `fetchVideoFromNetwork()`-Funktion übergeben, um, wie Sie vermuten, das Video aus dem Netzwerk zu holen.

   ```js
   function init() {
     // Loop through the video names one by one
     for (const video of videos) {
       // Open transaction, get object store, and get() each video by name
       const objectStore = db.transaction("videos_os").objectStore("videos_os");
       const request = objectStore.get(video.name);
       request.addEventListener("success", () => {
         // If the result exists in the database (is not undefined)
         if (request.result) {
           // Grab the videos from IDB and display them using displayVideo()
           console.log("taking videos from IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Fetch the videos from the network
           fetchVideoFromNetwork(video);
         }
       });
     }
   }
   ```

3. Der folgende Ausschnitt ist aus `fetchVideoFromNetwork()` — hier holen wir MP4- und WebM-Versionen des Videos mithilfe von zwei separaten [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen. Wir verwenden dann die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um den Körper jeder Antwort als Blob auszupacken, wodurch wir eine objektorientierte Darstellung der Videos erhalten, die später gespeichert und angezeigt werden kann.

   Wir haben hier jedoch ein Problem — diese beiden Anfragen sind beide asynchron, aber wir möchten das Video erst dann anzeigen oder speichern, wenn beide Versprechen erfüllt sind. Glücklicherweise gibt es eine eingebaute Methode, die solch ein Problem handhabt — {{jsxref("Promise.all()")}}. Diese nimmt ein Argument entgegen — Referenzen zu allen individuellen Versprechen, deren Erfüllung Sie überprüfen möchten, in ein Array platziert — und gibt ein Versprechen zurück, das erfüllt wird, wenn alle individuellen Versprechen erfüllt sind.

   Innerhalb des `then()`-Handlers für dieses Versprechen rufen wir die `displayVideo()`-Funktion wie zuvor auf, um die Videos in der UI anzuzeigen, und rufen dann auch die `storeVideo()`-Funktion auf, um diese Videos in der Datenbank zu speichern.

   ```js
   // Fetch the MP4 and WebM versions of the video using the fetch() function,
   // then expose their response bodies as blobs
   const mp4Blob = fetch(`videos/${video.name}.mp4`).then((response) =>
     response.blob(),
   );
   const webmBlob = fetch(`videos/${video.name}.webm`).then((response) =>
     response.blob(),
   );

   // Only run the next code when both promises have fulfilled
   Promise.all([mp4Blob, webmBlob]).then((values) => {
     // display the video fetched from the network with displayVideo()
     displayVideo(values[0], values[1], video.name);
     // store it in the IDB using storeVideo()
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. Lassen Sie uns zunächst `storeVideo()` betrachten. Dies ist dem Muster, das Sie im vorherigen Beispiel gesehen haben, für das Hinzufügen von Daten zur Datenbank, sehr ähnlich — wir öffnen eine `readwrite`-Transaktion und erhalten eine Referenz zu unserem `videos_os`-Objektspeicher, erstellen ein Objekt, das den Datensatz darstellt, der der Datenbank hinzugefügt werden soll, und fügen es dann mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

   ```js
   // Define the storeVideo() function
   function storeVideo(mp4, webm, name) {
     // Open transaction, get object store; make it a readwrite so we can write to the IDB
     const objectStore = db
       .transaction(["videos_os"], "readwrite")
       .objectStore("videos_os");

     // Add the record to the IDB using add()
     const request = objectStore.add({ mp4, webm, name });

     request.addEventListener("success", () =>
       console.log("Record addition attempt finished"),
     );
     request.addEventListener("error", () => console.error(request.error));
   }
   ```

5. Schließlich haben wir `displayVideo()`, das die DOM-Elemente erstellt, die benötigt werden, um das Video in der UI einzufügen, und sie dann der Seite anhängt. Die interessantesten Teile hiervon sind die unten gezeigten — um unsere Videoblobs in einem `<video>`-Element tatsächlich anzuzeigen, müssen wir Objekt-URLs erstellen (interne URLs, die auf die Videoblobs zeigen, die im Speicher gespeichert sind), indem wir die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwenden. Sobald das geschehen ist, können wir die Objekt-URLs als Wert der `src`-Attribute unserer {{htmlelement("source")}}-Elemente einstellen, und es funktioniert einwandfrei.

   ```js
   // Define the displayVideo() function
   function displayVideo(mp4Blob, webmBlob, title) {
     // Create object URLs out of the blobs
     const mp4URL = URL.createObjectURL(mp4Blob);
     const webmURL = URL.createObjectURL(webmBlob);

     // Create DOM elements to embed video in the page
     const article = document.createElement("article");
     const h2 = document.createElement("h2");
     h2.textContent = title;
     const video = document.createElement("video");
     video.controls = true;
     const source1 = document.createElement("source");
     source1.src = mp4URL;
     source1.type = "video/mp4";
     const source2 = document.createElement("source");
     source2.src = webmURL;
     source2.type = "video/webm";

     // Embed DOM elements into page
     section.appendChild(article);
     article.appendChild(h2);
     article.appendChild(video);
     video.appendChild(source1);
     video.appendChild(source2);
   }
   ```

## Offline-Asset-Speicherung

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Assets in einer IndexedDB-Datenbank speichert und so vermeidet, dass sie mehr als einmal heruntergeladen werden müssen. Dies verbessert die Benutzererfahrung bereits erheblich, aber es gibt noch eine Sache, die fehlt — die Haupt-HTML-, CSS- und JavaScript-Dateien müssen noch jedes Mal heruntergeladen werden, wenn die Seite aufgerufen wird, was bedeutet, dass sie nicht funktioniert, wenn keine Netzwerkverbindung vorhanden ist.

![Firefox Offline-Bildschirm mit einer Illustration einer Cartoon-Figur auf der linken Seite, die einen zweipoligen Stecker in der rechten Hand und eine zweipolige Buchse in der linken Hand hält. Auf der rechten Seite gibt es eine Offline-Modus-Nachricht und einen Button beschriftet 'Try again'.](ff-offline.png)

Hier kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die gegen eine bestimmte Origin (Website oder Teil einer Website unter einer bestimmten Domain) registriert ist, wenn sie von einem Browser aufgerufen wird. Wenn er registriert ist, kann er Seiten steuern, die unter dieser Origin verfügbar sind. Er tut dies, indem er sich zwischen eine geladene Seite und das Netzwerk setzt und Netzwerk-Anfragen, die auf diese Origin zielen, abfängt.

Wenn er eine Anfrage abfängt, kann er alles daran tun, was Sie möchten (siehe [Ideen für Anwendungsfälle](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist das Speichern der Netzwerk-Antworten offline, um diese dann als Antwort auf eine Anfrage anstelle der Antworten vom Netzwerk bereitzustellen. Im Effekt ermöglicht Ihnen dies, eine Website vollständig offline arbeiten zu lassen.

Die Cache API ist ein weiteres client-seitiges Speicher-Mechnismus, mit einem kleinen Unterschied — es ist zum Speichern von HTTP-Antworten konzipiert. und funktioniert daher sehr gut mit Service Workern.

### Ein Service Worker Beispiel

Schauen wir uns ein Beispiel an, um Ihnen eine Vorstellung davon zu geben, wie das aussehen könnte. Wir haben eine weitere Version des Video Store-Beispiels erstellt, das wir im vorherigen Abschnitt gesehen haben — dies funktioniert identisch, außer dass es auch die HTML-, CSS- und JavaScript-Dateien in der Cache API über einen Service Worker speichert und es dem Beispiel ermöglicht, offline zu laufen!

Sehen Sie [IndexedDB Video Store mit Service Worker live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), und auch [sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrierung des Service Workers

Die erste Sache zu beachten ist, dass es ein zusätzliches Stück Code gibt, das in die Haupt-JavaScript-Datei eingefügt wurde (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Zuerst führen wir einen Funktionsprüfungstest durch, um zu sehen, ob das `serviceWorker`-Mitglied im [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Wenn dies als wahr zurückgegeben wird, dann wissen wir, dass zumindest die Grundlagen von Service Workern unterstützt werden. Hier verwenden wir die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um einen Service Worker, der sich in der `sw.js`-Datei befindet, gegen die Origin, an der er sich befindet, zu registrieren, sodass er Seiten im gleichen Verzeichnis wie diese oder Unterverzeichnisse steuern kann. Wenn sein Versprechen erfüllt wird, wird der Service Worker als registriert betrachtet.

```js
// Register service worker to control making site work offline
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(() => console.log("Service Worker Registered"));
}
```

> [!NOTE]
> Der angegebene Pfad zur `sw.js`-Datei ist relativ zur Site-Origin, nicht zur JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich bei `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Die Origin ist `https://mdn.github.io`, und daher muss der gegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten wollten, müssten Sie dies entsprechend ändern. Dies ist ziemlich verwirrend, aber es muss so funktionieren aus Sicherheitsgründen.

#### Installation des Service Workers

Das nächste Mal, wenn eine Seite, die der Kontrolle des Service Workers unterliegt, aufgerufen wird (z.B. wenn das Beispiel neu geladen wird), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er beginnt, sie zu kontrollieren. Wenn dies eintritt, wird ein `install`-Event gegen den Service Worker ausgelöst; Sie können Code innerhalb des Service Worker selbst schreiben, der auf die Installation reagiert.

Schauen wir uns ein Beispiel an, in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js)-Datei (der Service Worker). Sie werden sehen, dass der Installations-Listener gegen `self` registriert ist. Dieses `self`-Schlüsselwort ist eine Möglichkeit, auf den globalen Scope des Service Workers aus dem Service Worker-Datei heraus zuzugreifen.

Im `install`-Handler verwenden wir die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil), die im Event-Objekt verfügbar ist, um zu signalisieren, dass der Browser die Installation des Service Workers erst abschließen soll, nachdem das Versprechen darin erfolgreich erfüllt wurde.

Hier sehen wir die Cache API in Aktion. Wir verwenden die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich wie ein IndexedDB-Objektspeicher). Dieses Versprechen wird mit einem [`Cache`](/de/docs/Web/API/Cache)-Objekt erfüllt, das den `video-store`-Cache darstellt. Wir verwenden dann die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll), um eine Reihe von Assets abzurufen und deren Antworten zum Cache hinzuzufügen.

```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("video-store")
      .then((cache) =>
        cache.addAll([
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
        ]),
      ),
  );
});
```

Das war's vorerst, die Installation ist abgeschlossen.

#### Beantwortung weiterer Anfragen

Mit dem registrierten und installierten Service Worker gegen unsere HTML-Seite und den relevanten Assets, die alle zu unserem Cache hinzugefügt wurden, sind wir fast bereit, loszulegen. Es gibt nur noch eine Sache zu tun: Schreiben Sie etwas Code, um auf weitere Netzwerk-Anfragen zu reagieren.

Das ist, was das zweite Stück Code in `sw.js` tut. Wir fügen einen weiteren Listener in den globalen Scope des Service Workers ein, der die Handlerfunktion ausführt, wenn das `fetch`-Event ausgelöst wird. Dies geschieht, wann immer der Browser eine Anfrage für ein Asset im Verzeichnis, in dem der Service Worker registriert ist, macht.

Innerhalb des Handlers protokollieren wir zuerst die URL des angeforderten Assets. Wir liefern dann eine benutzerdefinierte Antwort auf die Anfrage, indem wir die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

Innerhalb dieses Blocks verwenden wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu prüfen, ob eine übereinstimmende Anfrage (d.h. URL-matched) in einem Cache gefunden werden kann. Dieses Versprechen wird mit der passenden Antwort erfüllt, wenn eine Übereinstimmung gefunden wird, oder `undefined`, wenn dies nicht der Fall ist.

Wenn eine Übereinstimmung gefunden wird, geben wir diese als benutzerdefinierte Antwort zurück. Andernfalls holen wir die Antwort aus dem Netzwerk und geben diese stattdessen zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das war's für unseren Service Worker. Es gibt noch eine ganze Menge mehr, was Sie mit ihnen tun können — für viel mehr Details, siehe das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook). Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspirierte.

#### Testen des Beispiels offline

Um unser [Service Worker-Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Sobald das geschehen ist, können Sie:

- Versuchen Sie, Ihr Netzwerk abzuziehen/Ihr WLAN auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_, wenn Sie Firefox verwenden.
- Gehen Sie zu den Devtools, dann wählen Sie _Anwendung > Service Worker_, dann aktivieren Sie das _Offline_-Checkbox, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispiel-Seite erneut laden, sollten Sie immer noch sehen, dass sie einwandfrei lädt. Alles ist offline gespeichert — die Seiten-Assets in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's für jetzt. Wir hoffen, dass Sie unsere Zusammenfassung der Technologien zur client-seitigen Speicherung als nützlich empfunden haben.

## Siehe auch

- [Web storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

---
title: Client-seitige Speicherung
slug: Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Moderne Webbrowser unterstützen verschiedene Möglichkeiten, um Daten auf dem Computer des Nutzers zu speichern – mit der Erlaubnis des Nutzers – und sie bei Bedarf wieder abzurufen. Dies ermöglicht es, Daten langfristig zu speichern, Websites oder Dokumente für die Offline-Nutzung zu speichern, nutzerspezifische Einstellungen für Ihre Website beizubehalten und mehr. Dieser Artikel erklärt die grundlegenden Prinzipien, wie dies funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, besonders <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte der client-seitigen Speicherung und welche Schlüsseltechnologien dafür eingesetzt werden — Web Storage API, Cookies, Cache API und die IndexedDB API.</li>
          <li>Wichtige Anwendungsfälle — Aufrechterhaltung des Zustands über Neuladen hinweg, Speicherung von Login- und Nutzerpersonalisierungsdaten, und lokale/offline Nutzung.</li>
          <li>Verwendung von Web Storage für die einfache Speicherung von Schlüssel-Werte-Paaren, gesteuert durch JavaScript.</li>
          <li>Verwendung von IndexedDB zur Speicherung komplexerer, strukturierter Daten.</li>
          <li>Verwendung der Cache API und Service Worker für Offline-Anwendungsfälle.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

An anderer Stelle im MDN-Lernbereich haben wir über den Unterschied zwischen [statischen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten größeren modernen Websites sind dynamisch — sie speichern Daten auf dem Server unter Verwendung einer Art von Datenbank (serverseitige Speicherung), führen dann [serverseitigen Code](/de/docs/Learn_web_development/Extensions/Server-side) aus, um die benötigten Daten abzurufen, in statische Seitentemplates einzufügen und das daraus resultierende HTML an den Client zu liefern, um es im Browser des Nutzers anzuzeigen.

Die client-seitige Speicherung funktioniert nach ähnlichen Prinzipien, hat aber unterschiedliche Verwendungen. Sie besteht aus JavaScript-APIs, die es Ihnen ermöglichen, Daten auf der Client-Seite (d.h. auf der Maschine des Nutzers) zu speichern und sie dann bei Bedarf abzurufen. Dies hat viele verschiedene Verwendungen, wie etwa:

- Personalisieren von Websites (z. B. Anzeige der benutzerspezifischen Auswahl an Widgets, Farbschema oder Schriftgröße).
- Beibehalten vorheriger Website-Aktivität (z. B. Speichern der Inhalte eines Warenkorbs aus einer vorherigen Sitzung, Erkennen, ob ein Nutzer zuvor eingeloggt war).
- Speichern von Daten und Ressourcen lokal, sodass eine Website schneller (und potenziell kostengünstiger) heruntergeladen werden kann oder ohne Netzwerkverbindung nutzbar ist.
- Speichern von von Webanwendungen generierten Dokumenten lokal zur Offline-Nutzung.

Häufig werden client-seitige und serverseitige Speicherungen gemeinsam genutzt. Zum Beispiel könnten Sie eine Reihe von Musikdateien herunterladen (vielleicht verwendet von einem Webspiel oder einer Musikplayer-Anwendung), sie in einer client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Nutzer müsste die Musikdateien nur einmal herunterladen — bei späteren Besuchen würden sie aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Grenzen für die Datenmenge, die Sie mit den client-seitigen Speicher-APIs speichern können (möglicherweise sowohl für einzelne APIs als auch kumulativ); das genaue Limit variiert je nach Browser und möglicherweise basierend auf Nutzereinstellungen. Weitere Informationen finden Sie unter [Browser-Speicherquoten und Entfernungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Althergebracht: Cookies

Das Konzept der client-seitigen Speicherung gibt es schon lange. Seit den frühen Tagen des Webs nutzen Websites [Cookies](/de/docs/Web/HTTP/Guides/Cookies), um Informationen zu speichern, um die Benutzererfahrung auf Websites zu personalisieren. Sie sind die früheste Form der auf dem Web häufig verwendeten client-seitigen Speicherung.

Heutzutage gibt es einfachere Mechanismen für die Speicherung client-seitiger Daten, daher werden wir Ihnen in diesem Artikel nicht beibringen, wie Cookies verwendet werden. Dies bedeutet jedoch nicht, dass Cookies auf dem modernen Web komplett nutzlos sind — sie werden immer noch häufig verwendet, um Daten im Zusammenhang mit Benutzerpersonalisierung und Zustand zu speichern, z. B. Sitzungs-IDs und Zugriffstokens. Weitere Informationen zu Cookies finden Sie in unserem Artikel [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

### Neuzeitlich: Web Storage und IndexedDB

Die "einfacheren" Funktionen, die wir oben erwähnt haben, sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenelemente, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einfache Daten speichern müssen, wie den Namen des Nutzers, ob er eingeloggt ist, welche Farbe für den Hintergrund des Bildschirms verwendet werden soll, usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet dem Browser ein komplettes Datenbanksystem zur Speicherung komplexer Daten. Dies kann für alles verwendet werden, von vollständigen Kundendatensätzen bis hin zu komplexen Datentypen wie Audio- oder Videodateien.

Sie werden mehr über diese APIs unten lernen.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API ist dafür konzipiert, HTTP-Antworten auf bestimmte Anfragen zu speichern, und ist sehr nützlich für Aufgaben wie das Speichern von Website-Ressourcen offline, damit die Seite anschließend ohne Netzwerkverbindung genutzt werden kann. Cache wird normalerweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl es nicht zwingend erforderlich ist.

Die Nutzung von Cache und Service Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht im Detail behandeln, obwohl wir ein Beispiel im Abschnitt [Offline-Resourcenspeicherung](#offline-speicherung_von_ressourcen) unten zeigen werden.

## Einfache Speicherung – Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden — Sie speichern einfache Name/Wert-Paare von Daten (beschränkt auf Zeichenfolgen, Zahlen usw.) und rufen diese Werte bei Bedarf ab.

### Grundsyntax

Lassen Sie uns Ihnen zeigen, wie:

1. Besuchen Sie zunächst unsere [Web Storage leere Vorlage](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie diese in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwicklerwerkzeuge Ihres Browsers.
3. Alle Ihre Web Storage-Daten sind in zwei objektähnlichen Strukturen innerhalb des Browsers enthalten: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Die erste speichert Daten, solange der Browser geöffnet ist (die Daten gehen verloren, wenn der Browser geschlossen wird) und die zweite speichert Daten auch nach dem Schließen und erneuten Öffnen des Browsers. Wir werden in diesem Artikel die zweite verwenden, da sie in der Regel nützlicher ist.

   Die [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem)-Methode erlaubt Ihnen, ein Datenelement im Speicher zu speichern — sie nimmt zwei Parameter: den Namen des Elements und dessen Wert. Versuchen Sie, dies in Ihre JavaScript-Konsole einzugeben (ändern Sie den Wert zu Ihrem eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem)-Methode nimmt einen Parameter — den Namen eines Datenelements, das Sie abrufen möchten — und gibt den Wert des Elements zurück. Geben Sie nun diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Wenn Sie die zweite Zeile eingeben, sollten Sie sehen, dass die `myName`-Variable nun den Wert des `name`-Datenelements enthält.

5. Die [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem)-Methode nimmt einen Parameter — den Namen eines Datenelements, das Sie entfernen möchten — und entfernt dieses Element aus dem Webspeicher. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte nun `null` zurückgeben — das `name`-Element existiert nicht mehr im Webspeicher.

### Die Daten bleiben bestehen!

Ein wichtiges Merkmal des Webspeichers ist, dass die Daten zwischen Seitenladungen bestehen bleiben (und sogar wenn der Browser heruntergefahren wird, im Falle von `localStorage`). Schauen wir uns das in Aktion an.

1. Öffnen Sie unsere Web Storage leere Vorlage erneut, aber diesmal in einem anderen Browser als dem, in dem Sie dieses Tutorial geöffnet haben! Dies wird es einfacher machen, damit umzugehen.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten das Name-Element zurückgegeben sehen.

3. Schließen Sie nun den Browser und öffnen Sie ihn erneut.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert immer noch verfügbar ist, obwohl der Browser geschlossen und dann erneut geöffnet wurde.

### Separater Speicher für jede Domain

Es gibt einen separaten Datenspeicher für jede Domain (jede separate Webadresse, die im Browser geladen wird). Sie werden sehen, dass wenn Sie zwei Websites laden (zum Beispiel google.com und amazon.com) und versuchen, ein Element auf einer Website zu speichern, es für die andere Website nicht verfügbar sein wird.

Das macht Sinn — Sie können sich die Sicherheitsprobleme vorstellen, die entstehen würden, wenn Websites die Daten anderer Websites sehen könnten!

### Ein komplexeres Beispiel

Lassen Sie uns dieses neue Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, um Ihnen eine Vorstellung davon zu geben, wie Webspeicher verwendet werden kann. Unser Beispiel ermöglicht es Ihnen, einen Namen einzugeben, wonach die Seite so aktualisiert wird, dass sie Ihnen eine personalisierte Begrüßung gibt. Dieser Zustand wird auch beim Nachladen der Seite/des Browsers beibehalten, da der Name im Webspeicher gespeichert wird.

Sie können das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) finden — dies enthält eine Website mit einem Header, Inhalt und Footer sowie ein Formular zur Eingabe Ihres Namens.

![Ein Screenshot einer Website, die Header-, Inhalts- und Fußzeilenabschnitte hat. Der Header hat links einen Willkommensgruß und rechts einen Button mit der Beschriftung 'vergessen'. Der Inhalt hat eine Überschrift, gefolgt von zwei Absätzen mit Dummy-Text. Der Footer liest 'Copyright nobody. Use the code as you like'.](web-storage-demo.png)

Bauen wir das Beispiel auf, damit Sie verstehen, wie es funktioniert.

1. Machen Sie zuerst eine lokale Kopie unserer [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html)-Datei in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie als Nächstes, wie unser HTML eine JavaScript-Datei namens `index.js` referenziert, mit einer Zeile wie `<script src="index.js" defer></script>`. Diese müssen wir erstellen und unsere JavaScript-Code darin schreiben. Erstellen Sie eine `index.js`-Datei im selben Verzeichnis wie Ihre HTML-Datei.
3. Wir fangen mit der Erstellung von Referenzen auf alle HTML-Features an, die wir in diesem Beispiel manipulieren müssen — wir erstellen sie alle als Konstanten, da diese Referenzen im Lebenszyklus der App nicht geändert werden müssen. Fügen Sie die folgenden Zeilen Ihrer JavaScript-Datei hinzu:

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

4. Als nächstes müssen wir einen kleinen Ereignislistener einfügen, um zu verhindern, dass das Formular tatsächlich abgeschickt wird, wenn der Senden-Button gedrückt wird, da dies nicht das Verhalten ist, das wir wünschen. Fügen Sie diesen Ausschnitt unter Ihrem vorherigen Code hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Nun müssen wir einen Ereignislistener hinzufügen, dessen Handler-Funktion ausgeführt wird, wenn der "Sag Hallo"-Button geklickt wird. Die Kommentare erklären im Detail, was jeder Teil macht, aber im Wesentlichen nehmen wir hier den Namen, den der Nutzer in das Textfeld eingegeben hat, und speichern ihn im Webspeicher mit `setItem()`, um dann eine Funktion namens `nameDisplayCheck()` auszuführen, die das Aktualisieren des tatsächlichen Website-Textes behandelt. Fügen Sie dies unten zu Ihrem Code hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. An diesem Punkt benötigen wir auch einen Ereignishandler, der eine Funktion ausführt, wenn der "Vergessen"-Button geklickt wird — dieser wird nur angezeigt, nachdem der "Sag Hallo"-Button geklickt wurde (die beiden Formulatzustände schalten sich hin und her). In dieser Funktion entfernen wir das `name`-Element aus dem Webspeicher mit `removeItem()`, um dann erneut `nameDisplayCheck()` auszuführen, um die Anzeige zu aktualisieren. Fügen Sie dies unten hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Es ist nun an der Zeit, die `nameDisplayCheck()`-Funktion selbst zu definieren. Hier prüfen wir, ob das Namenselement im Webspeicher gespeichert wurde, indem wir `localStorage.getItem('name')` als Bedingungstest verwenden. Wenn der Name gespeichert wurde, ergibt dieser Aufruf `true`; wenn nicht, ergibt der Aufruf `false`. Wenn der Aufruf zu `true` führt, zeigen wir eine personalisierte Begrüßung an, und die "vergessen"-Teil des Formulars, und verbergen den "Sag Hallo"-Teil des Formulars. Wenn der Aufruf zu `false` führt, zeigen wir eine generische Begrüßung an und machen das Gegenteil. Fügen Sie den folgenden Code erneut am Ende hinzu:

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

8. Zu guter Letzt müssen wir die `nameDisplayCheck()`-Funktion beim Laden der Seite ausführen. Wenn wir dies nicht tun, wird die personalisierte Begrüßung beim Neuladen der Seite nicht beibehalten. Fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig — gut gemacht! Jetzt müssen Sie nur noch Ihren Code speichern und Ihre HTML-Seite in einem Browser testen. Sie können unsere [fertige Version hier live sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel, das Sie unter [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) erkunden können.

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` im Quellcode unserer fertigen Version gibt das `defer`-Attribut an, dass die Inhalte des {{htmlelement("script")}}-Elements erst dann ausgeführt werden, wenn die Seite fertig geladen ist.

## Speicherung komplexer Daten — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal abgekürzt als IDB) ist ein komplettes Datenbanksystem, das im Browser verfügbar ist, in dem Sie komplexe verwandte Daten speichern können, deren Typen nicht auf einfache Werte wie Zeichenfolgen oder Zahlen beschränkt sind. Sie können Videos, Bilder und so ziemlich alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB API ermöglicht es Ihnen, eine Datenbank zu erstellen, dann Objektspeicher innerhalb dieser Datenbank zu erstellen. Objektspeicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objektspeicher kann eine Anzahl von Objekten enthalten. Um mehr über die IndexedDB API zu erfahren, sehen Sie sich [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) an.

Allerdings ist dies mit einem Preis verbunden: IndexedDB ist viel komplexer zu verwenden als die Web Storage API. In diesem Abschnitt werden wir wirklich nur an der Oberfläche dessen kratzen, was es leisten kann, aber wir werden Ihnen genug geben, um Ihnen den Einstieg zu erleichtern.

### Durcharbeiten eines Notenspeicherbeispiels

Hier werden wir Sie durch ein Beispiel führen, das es Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern und diese jederzeit anzusehen und zu löschen. Wir lassen Sie es für sich selbst aufbauen und erklären Ihnen die grundlegendsten Teile von IDB währenddessen.

So sieht die App etwa aus:

![IndexDB-Notizen-Demo-Screenshot mit 4 Abschnitten. Der erste Abschnitt ist der Header. Der zweite Abschnitt listet alle Notizen auf, die erstellt wurden. Es gibt zwei Notizen, jeweils mit einem Löschen-Button. Ein dritter Abschnitt ist ein Formular mit 2 Eingabefeldern für 'Notentitel' und 'Notiztext' und einem Button mit der Beschriftung 'Neue Notiz erstellen'. Der untere Abschnitt, der Footer, liest 'Copyright nobody. Use the code as you like'.](idb-demo.png)

Jede Notiz hat einen Titel und etwas Text, die jeweils individuell bearbeitbar sind. Der JavaScript-Code, den wir unten durchgehen werden, enthält detaillierte Kommentare, die Ihnen helfen zu verstehen, was vor sich geht.

### Erste Schritte

1. Machen Sie zunächst lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Sehen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einem Header und Footer definiert, sowie ein Hauptinhaltsbereich, der einen Platz zur Anzeige von Notizen und ein Formular zur Eingabe neuer Notizen in die Datenbank enthält. CSS bietet einige Stile, um klarer zu machen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten, die Referenzen auf das {{htmlelement("ul")}}-Element enthalten, in dem die Notizen angezeigt werden, die Titel- und Text-{{htmlelement("input")}}-Elemente, das {{htmlelement("form")}} selbst und das {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind jetzt bereit, Code hinzuzufügen.

### Erste Einrichtung der Datenbank

Schauen wir nun, was wir tun müssen, um zuerst tatsächlich eine Datenbank einzurichten.

1. Unter den Konstantendeklarationen fügen Sie die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db` — diese wird später verwendet, um ein Objekt zu speichern, das unsere Datenbank repräsentiert. Wir werden dies an einigen Stellen verwenden, daher haben wir es hier global deklariert, um die Sache zu vereinfachen.

2. Fügen Sie als nächstes die folgenden Zeilen hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage zum Öffnen der Version `1` einer Datenbank namens `notes_db`. Wenn diese noch nicht existiert, wird sie von nachfolgendem Code für Sie erstellt. Dieses Anfrage-Muster werden Sie sehr häufig in IndexedDB sehen. Datenbankoperationen dauern Zeit. Sie möchten den Browser nicht hängen lassen, während Sie auf die Ergebnisse warten, also sind Datenbankoperationen {{Glossary("asynchronous", "asynchron")}}, was bedeutet, dass sie nicht sofort erfolgen, sondern irgendwann in der Zukunft geschehen und Sie benachrichtigt werden, wenn sie abgeschlossen sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anfrageobjekt (das alles sein kann, was Sie möchten — wir haben es hier `openRequest` genannt, damit es offensichtlich ist, wofür es ist). Sie verwenden dann Ereignishandler, um Code auszuführen, wenn die Anfrage abgeschlossen ist, fehlschlägt usw., was Sie unten in Aktion sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (zum Beispiel, indem Sie die Tabellenstruktur ändern), müssen Sie Ihren Code erneut mit einer erhöhten Versionsnummer ausführen und ein anderes Schema innerhalb des `upgradeneeded`-Handlers spezifizieren (siehe unten) usw. Wir werden die Aktualisierung von Datenbanken in diesem Tutorial nicht behandeln.

3. Fügen Sie nun die folgenden Ereignishandler direkt unter Ihrer vorherigen Ergänzung hinzu:

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

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignishandler wird ausgeführt, wenn das System zurückkommt und sagt, dass die Anfrage fehlgeschlagen ist. Dies ermöglicht Ihnen, auf dieses Problem zu reagieren. In unserem Beispiel drucken wir einfach eine Nachricht in die JavaScript-Konsole.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event)-Ereignishandler wird ausgeführt, wenn die Anfrage erfolgreich zurückkehrt, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. Wenn dies der Fall ist, wird ein Objekt, das die geöffnete Datenbank darstellt, in der [`openRequest.result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft verfügbar, sodass wir die Datenbank manipulieren können. Wir speichern dies in der `db`-Variable, die wir zuvor für die spätere Verwendung erstellt haben. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank im {{HTMLElement("ul")}} anzeigt. Wir führen es jetzt aus, damit die Notizen, die sich bereits in der Datenbank befinden, angezeigt werden, sobald die Seite geladen wird. Sie werden `displayData()` später definiert sehen.

4. Abschließend für diesen Abschnitt fügen wir vielleicht den wichtigsten Ereignishandler zum Einrichten der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler läuft, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer größeren Versionsnummer als die existierende gespeicherte Datenbank geöffnet wird (bei einer Aktualisierung). Fügen Sie den folgenden Code unter Ihrem vorherigen Handler hinzu:

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

   Hier definieren wir das Schema (Struktur) unserer Datenbank; das ist die Menge der Spalten (oder Felder), die sie enthält. Hier holen wir zuerst eine Referenz zur existierenden Datenbank aus der `result`-Eigenschaft des Ziels des Ereignisses (`e.target.result`), welches das `request`-Objekt ist. Dies ist äquivalent zur Zeile `db = openRequest.result;` im `success`-Ereignishandler, aber wir müssen dies hier separat tun, da der `upgradeneeded`-Ereignishandler (falls benötigt) vor dem `success`-Ereignishandler läuft, was bedeutet, dass der `db`-Wert nicht verfügbar wäre, wenn wir dies nicht tun würden.

   Wir verwenden dann [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore), um einen neuen Objektspeicher innerhalb unserer geöffneten Datenbank namens `notes_os` zu erstellen. Dies ist äquivalent zu einer einzelnen Tabelle in einem herkömmlichen Datenbanksystem. Wir haben ihm den Namen "notes" gegeben und auch ein `autoIncrement`-Schlüsselfeld namens `id` spezifiziert — in jedem neuen Datensatz wird dies automatisch mit einem inkrementierten Wert versehen — der Entwickler muss dies nicht explizit festlegen. Als der Schlüssel wird das `id`-Feld verwendet, um Datensätze eindeutig zu identifizieren, beispielsweise beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen auch zwei andere Indizes (Felder) mithilfe der Methode [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex): `title` (das einen Titel für jede Notiz enthalten wird) und `body` (das den Text der Notiz enthalten wird).

Mit diesem Datenbankschema eingerichtet, wird beim Hinzufügen von Datensätzen zur Datenbank jeder als Objekt in etwa diesen Linien dargestellt:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Nun wollen wir uns ansehen, wie wir Datensätze zur Datenbank hinzufügen können. Dies wird über das Formular auf unserer Seite geschehen.

Unter Ihrem vorherigen Ereignishandler fügen Sie die folgende Zeile hinzu, die einen `submit`-Ereignishandler einrichtet, der eine Funktion namens `addData()` ausführt, wenn das Formular abgeschickt wird (wenn der Senden-{{htmlelement("button")}} gedrückt wird, was zu einer erfolgreichen Formularübermittlung führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Nun definieren wir die `addData()`-Funktion. Fügen Sie dies unter Ihrer vorherigen Zeile hinzu:

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

Das ist ziemlich komplex; brechen wir es auf:

- Wir rufen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignisobjekt auf, um das Formular daran zu hindern, sich tatsächlich auf die herkömmliche Weise abzusenden (dies würde eine Seitenaktualisierung auslösen und das Erlebnis beeinträchtigen).
- Wir erstellen ein Objekt, das einen Datensatz darstellt, der in die Datenbank eingefügt wird, und ihn mit Werten aus den Formulareingaben füllt. Beachten Sie, dass wir nicht explizit einen `id`-Wert einfügen müssen — wie wir zuvor erklärt haben, wird dies automatisch ausgefüllt.
- Wir öffnen eine `readwrite`-Transaktion gegen den `notes_os`-Objektspeicher mit der [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction)-Methode. Dieses Transaktionsobjekt erlaubt es uns, auf den Objektspeicher zuzugreifen, damit wir etwas damit tun können, z. B. einen neuen Datensatz hinzufügen.
- Wir greifen mit der [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)-Methode auf den Objektspeicher zu und speichern das Ergebnis in der Variablen `objectStore`.
- Wir fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) zur Datenbank hinzu. Dies erstellt ein Anfrageobjekt, ähnlich wie wir es zuvor gesehen haben.
- Wir fügen eine Reihe von Ereignishandlern zu den Objekten `request` und `transaction` hinzu, die Code an kritischen Punkten im Lebenszyklus ausführen. Sobald die Anfrage erfolgreich war, löschen wir die Formulareingaben, um neue Notizen einzugeben. Sobald die Transaktion abgeschlossen ist, führen wir die `displayData()`-Funktion erneut aus, um die Anzeige der Notizen auf der Seite zu aktualisieren.

### Anzeigen der Daten

Wir haben `displayData()` schon zweimal in unserem Code referenziert, daher sollten wir es wahrscheinlich definieren. Fügen Sie dies zu Ihrem Code hinzu, unter der vorhergehenden Funktionsdefinition:

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

Lassen Sie uns dies wieder aufschlüsseln:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}}-Elements, bevor wir es dann mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht täten, würden Sie mit einer riesigen Liste von duplizierten Inhalts gefüllt sein, die mit jeder Aktualisierung hinzugefügt wird.
- Als Nächstes erhalten wir eine Referenz zum `notes_os`-Objektspeicher, indem wir [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) wie in `addData()` verwenden, außer dass wir sie hier in einer Zeile verketten.
- Der nächste Schritt ist, die Methode [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) zu verwenden, um eine Anfrage für einen Cursor zu öffnen — dies ist ein Konstrukt, das zum Iterieren über die Datensätze in einem Objektspeicher verwendet werden kann. Wir ketten einen `success`-Ereignishandler an das Ende dieser Zeile, um den Code kürzer zu machen — wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir erhalten eine Referenz zum Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Objekt), indem wir `const cursor = e.target.result` verwenden.
- Als nächstes überprüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) — wenn ja, erstellen wir ein DOM-Fragment, füllen es mit den Daten aus dem Datensatz und fügen es auf der Seite ein (im `<ul>`-Element). Wir fügen auch einen Löschen-Button hinzu, der, wenn er angeklickt wird, diese Notiz löscht, indem er die Funktion `deleteItem()` ausführt, die wir im nächsten Abschnitt ansehen werden.
- Am Ende des `if`-Blocks verwenden wir die Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue), um den Cursor auf den nächsten Datensatz im Datenspeicher fortzusetzen, und führen den Inhalt des `if`-Blocks erneut aus. Wenn es einen weiteren Datensatz zum Iterieren gibt, wird dieser dadurch auf der Seite eingefügt und dann `continue()` erneut ausgeführt und so weiter.
- Wenn es keine weiteren Datensätze zum Überlaufen gibt, gibt `cursor` `undefined` zurück, und daher wird stattdessen der `else`-Block anstelle des `if`-Blocks ausgeführt. Dieser Block überprüft, ob irgendeine Notiz in das `<ul>` eingefügt wurde — wenn nicht, fügt er eine Nachricht ein, um anzuzeigen, dass keine Notiz gespeichert wurde.

### Löschen einer Notiz

Wie oben erwähnt, wird, wenn der Löschen-Button einer Notiz gedrückt wird, die Notiz gelöscht. Dies wird durch die Funktion `deleteItem()` erreicht, die folgendermaßen aussieht:

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

- Der erste Teil davon könnte eine Erläuterung benötigen — wir holen die ID des Datensatzes, der gelöscht werden soll, mit `Number(e.target.parentNode.getAttribute('data-note-id'))` — erinnern Sie sich daran, dass die ID des Datensatzes in einem `data-note-id`-Attribut auf dem `<li>` gespeichert wurde, als es zuerst angezeigt wurde. Wir müssen dieses Attribut jedoch durch das globale eingebaute [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt durchlaufen lassen, da es vom Datentyp string ist und daher nicht von der Datenbank erkannt würde, die eine Zahl erwartet.
- Wir bekommen dann eine Referenz auf den Objektspeicher, indem wir dasselbe Muster verwenden, das wir zuvor gesehen haben, und verwenden die Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), um den Datensatz aus der Datenbank zu löschen, indem wir ihm die ID übergeben.
- Wenn die Datenbanktransaktion abgeschlossen ist, löschen wir das `<li>` der Notiz aus dem DOM, und wieder machen wir den Check, ob das `<ul>` jetzt leer ist und fügen eine Notiz hinzu, wie es angemessen ist.

Das war's! Ihr Beispiel sollte nun funktionieren.

Wenn Sie Schwierigkeiten damit haben, können Sie es gerne mit unserem [live Beispiel vergleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js) an).

### Speicherung komplexer Daten über IndexedDB

Wie bereits oben erwähnt, kann IndexedDB mehr speichern, als nur Textzeichenfolgen. Sie können fast alles speichern, was Sie möchten, einschließlich komplexer Objekte wie Video- oder Bildblobs. Und es ist nicht viel schwieriger zu erreichen als jeder andere Datentyp.

Um zu demonstrieren, wie man das macht, haben wir ein weiteres Beispiel geschrieben, genannt [IndexedDB Video Store](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) (siehe es auch [live hier laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Wenn Sie das Beispiel zum ersten Mal ausführen, lädt es alle Videos aus dem Netzwerk herunter, speichert sie in einer IndexedDB-Datenbank, und zeigt dann die Videos in der Benutzeroberfläche in {{htmlelement("video")}}-Elementen an. Beim zweiten Mal, wenn Sie es ausführen, findet es die Videos in der Datenbank und holt sie von dort, bevor es sie anzeigt — dies macht nachfolgende Ladezeiten viel schneller und weniger bandbreitenintensiv.

Lassen Sie uns die interessantesten Teile des Beispiels durchgehen. Wir werden nicht alles betrachten — vieles davon ähnelt dem vorherigen Beispiel, und der Code ist gut kommentiert.

1. Für dieses Beispiel haben wir die Namen der Videos, die abgerufen werden sollen, in einem Array von Objekten gespeichert:

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

2. Zunächst, sobald die Datenbank erfolgreich geöffnet wurde, führen wir eine `init()`-Funktion aus. Diese durchläuft die verschiedenen Videonamen und versucht, einen Datensatz zu laden, der durch jeden Namen aus der `videos`-Datenbank identifiziert wird.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft wird, ob `request.result` zu `true` evaluiert — wenn der Datensatz nicht vorhanden ist, wird er `undefined` sein), werden seine Videodateien (als Blobs gespeichert) und der Videoname direkt zur `displayVideo()`-Funktion übergeben, um sie in der Benutzeroberfläche zu platzieren. Wenn nicht, wird der Videoname an die Funktion `fetchVideoFromNetwork()` übergeben, um das Video aus dem Netzwerk abzurufen.

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

3. Der folgende Ausschnitt stammt aus dem Inneren von `fetchVideoFromNetwork()` — hier holen wir MP4- und WebM-Versionen des Videos über zwei separate [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen. Wir verwenden dann die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um den Body jeder Antwort als Blob zu extrahieren, was uns eine objektmäßige Darstellung der Videos gibt, die später gespeichert und angezeigt werden können.

   Wir haben hier allerdings ein Problem — diese beiden Anfragen sind beide asynchron, aber wir möchten das Video nur versuchen anzuzeigen oder zu speichern, wenn beide Versprechen erfüllt wurden. Glücklicherweise gibt es eine eingebaute Methode, die solch ein Problem löst — {{jsxref("Promise.all()")}}. Diese nimmt ein Argument — Verweise auf alle einzelnen Versprechen, die Sie auf Erfüllung prüfen möchten, die in ein Array gesetzt werden — und gibt ein Versprechen zurück, das erfüllt wird, wenn alle Einzelversprechen erfüllt sind.

   Innerhalb des `then()`-Handlers dieses Versprechens rufen wir die `displayVideo()`-Funktion wie zuvor auf, um die Videos in der Benutzeroberfläche anzuzeigen, dann rufen wir auch die `storeVideo()`-Funktion auf, um diese Videos in der Datenbank zu speichern.

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

4. Schauen wir uns `storeVideo()` zuerst an. Dies ist dem Muster, das Sie im vorherigen Beispiel gesehen haben, um Daten zu der Datenbank hinzuzufügen, sehr ähnlich — wir öffnen eine `readwrite`-Transaktion und erhalten eine Referenz zu unserem `videos_os`-Objektspeicher, erstellen ein Objekt, das den Datensatz darstellt, der zur Datenbank hinzugefügt wird, und fügen ihn dann mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

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

5. Schließlich haben wir `displayVideo()`, das die DOM-Elemente erstellt, die benötigt werden, um das Video in der Benutzeroberfläche einzufügen und dann an die Seite anhängt. Die interessantesten Teile davon sind die unten gezeigten — um unsere Videoblobs tatsächlich in einem `<video>`-Element anzuzeigen, müssen wir Objekt-URLs erstellen (interne URLs, die auf die in Memory gespeicherten Videoblobs zeigen) mithilfe der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static). Sobald das erledigt ist, können wir die Objekt-URLs als Werte der `src`-Attribute unserer {{htmlelement("source")}}-Elemente setzen, und es funktioniert problemlos.

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

## Offline-Speicherung von Ressourcen

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Ressourcen in einer IndexedDB-Datenbank speichert und so vermeidet, dass sie mehr als einmal heruntergeladen werden müssen. Dies ist bereits eine große Verbesserung der Benutzererfahrung, aber es fehlt noch eine Sache — die Haupt-HTML-, CSS- und JavaScript-Dateien müssen immer noch jedes Mal heruntergeladen werden, wenn auf die Seite zugegriffen wird, was bedeutet, dass sie nicht funktioniert, wenn keine Netzwerkverbindung besteht.

![Firefox-Offline-Bildschirm mit einer Illustration eines Cartoon-Charakters auf der linken Seite, der in seiner rechten Hand einen Zweipol-Stecker und in seiner linken Hand eine Zweipol-Steckdose hält. Auf der rechten Seite gibt es eine Offline-Modus-Nachricht und einen Button mit der Beschriftung 'Erneut versuchen'.](ff-offline.png)

Hier kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die bei einem bestimmten Ursprung (Website oder Teil einer Website unter einer bestimmten Domain) registriert wird, wenn sie von einem Browser aufgerufen werden. Wenn er registriert ist, kann er Seiten, die an diesem Ursprung verfügbar sind, kontrollieren. Er macht dies, indem er zwischen einer geladenen Seite und dem Netzwerk sitzt und Netzwerkaufrufe abfängt, die auf diesen Ursprung abzielen.

Wenn er eine Anfrage abfängt, kann er alles tun, was Sie möchten (siehe [Anwendungsfall-Ideen](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel besteht darin, die Antwortnetzwerke offline zu speichern und sie dann bei einer Anfrage anstelle der Antworten aus dem Netzwerk bereitzustellen. Tatsächlich ermöglicht er es Ihnen, eine Website vollständig offline arbeitsfähig zu machen.

Die Cache API ist ein weiteres client-seitiges Speichermechanismus, mit einem kleinen Unterschied — sie ist darauf ausgelegt, HTTP-Antworten zu speichern, und funktioniert daher sehr gut mit Service Workern.

### Ein Service Worker Beispiel

Schauen wir uns ein Beispiel an, um Ihnen eine Vorstellung davon zu geben, wie dies aussehen könnte. Wir haben eine weitere Version des Video Store Beispiels erstellt, das wir im vorherigen Abschnitt gesehen haben — dies funktioniert identisch, außer dass es auch die HTML-, CSS- und JavaScript-Dateien über einen Service Worker im Cache API speichert und so das Beispiel offline ausführbar macht!

Sehen Sie [IndexedDB Video Store mit Service Worker live](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) laufen und [sehen Sie auch den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrierung des Service Workers

Das erste, was zu beachten ist, dass es im Haupt-JavaScript eine weitere Codestelle gibt (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Zuerst führen wir einen Funktionsprüfungstest durch, um zu sehen, ob das `serviceWorker`-Mitglied im [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Wenn dies `true` zurückgibt, dann wissen wir, dass zumindest die Grundlagen der Service Worker unterstützt werden. Hier drin verwenden wir die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um einen Service Worker in der Datei `sw.js` gegen den Ursprung zu registrieren, an dem er sich befindet, sodass er Seiten im selben Verzeichnis wie er oder Unterverzeichnissen kontrollieren kann. Wenn sein Versprechen erfüllt wird, wird der Service Worker als registriert angesehen.

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
> Der angegebene Pfad zur `sw.js`-Datei ist relativ zum Site-Ursprung, nicht zur JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich unter `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Der Ursprung ist `https://mdn.github.io`, und daher muss der angegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten möchten, müssten Sie dies entsprechend ändern. Das ist ziemlich verwirrend, aber es muss aus Sicherheitsgründen so funktionieren.

#### Installation des Service Workers

Beim nächsten Mal, wenn eine Seite, die unter der Kontrolle des Service Workers steht, aufgerufen wird (z. B. wenn das Beispiel neu geladen wird), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er beginnen wird, es zu kontrollieren. Wenn dies geschieht, wird ein `install`-Ereignis gegen den Service Worker ausgelöst; Sie können Code in den Service Worker selbst schreiben, der auf die Installation reagiert.

Lassen Sie uns ein Beispiel dafür in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js)-Datei (des Service Workers) betrachten. Sie werden sehen, dass der Installationslistener gegen `self` registriert ist. Dieses `self`-Schlüsselwort ist eine Möglichkeit, aus der Service Worker-Datei auf den globalen Gültigkeitsbereich des Service Workers zu verweisen.

Innerhalb des Installationshandhabers verwenden wir die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil), die auf dem Ereignisobjekt verfügbar ist, um anzuzeigen, dass der Browser die Installation des Service Workers erst abschließen sollte, nachdem das Versprechen darin erfolgreich erfüllt wurde.

Hier sehen wir die Cache API in Aktion. Wir verwenden die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich zu einem IndexedDB-Objektspeicher). Dieses Versprechen wird mit einem [`Cache`](/de/docs/Web/API/Cache)-Objekt erfüllt, das das `video-store`-Cache repräsentiert. Wir verwenden dann die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll), um eine Reihe von Ressourcen zu holen und deren Antworten im Cache hinzuzufügen.

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

Das war's erstmal, Installation fertig.

#### Reagieren auf weitere Anfragen

Mit dem Service Worker, der registriert und gegen unsere HTML-Seite installiert ist, und den relevanten Ressourcen, die alle zu unserem Cache hinzugefügt wurden, sind wir fast fertig. Es bleibt nur noch eines zu tun: etwas Code zu schreiben, um auf weitere Netzwerkabfragen zu antworten.

Das ist, was das zweite Codestück in `sw.js` tut. Wir fügen einen weiteren Listener gegen den globalen Gültigkeitsbereich des Service Workers hinzu, der die Handler-Funktion ausführt, wenn das `fetch`-Ereignis ausgelöst wird. Dies geschieht immer dann, wenn der Browser eine Anfrage für eine Ressource im Verzeichnis, gegen das der Service Worker registriert ist, macht.

Innerhalb des Handlers protokollieren wir zuerst die URL der angeforderten Ressource. Dann bieten wir eine benutzerdefinierte Antwort auf die Anfrage, indem wir die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

Innerhalb dieses Blocks verwenden wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu überprüfen, ob eine passende Anfrage (d.h. die URL übereinstimmt) in irgendeinem Cache gefunden werden kann. Dieses Versprechen wird mit der passenden Antwort erfüllt, wenn ein passender gefunden wird, oder `undefined`, wenn nicht.

Wenn eine Übereinstimmung gefunden wird, geben wir sie als benutzerdefinierte Antwort zurück. Wenn nicht, holen wir die Antwort aus dem Netzwerk und geben stattdessen diese zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das ist es für unseren Service Worker. Es gibt noch viel mehr, was Sie damit tun können — für viel mehr Details, siehe das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook). Vielen Dank an Paul Kinlan für seinen Artikel [Hinzufügen eines Service Workers und offline zu Ihrer Web-App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Testen des Beispiels offline

Um unser [Service Worker-Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Sobald dies erledigt ist, können Sie:

- Versuchen Sie, Ihre Netzwerkverbindung zu trennen/Ihr WLAN auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_, wenn Sie Firefox verwenden.
- Gehen Sie zu den Entwicklertools, dann wählen Sie _Anwendung > Service Workers_ und aktivieren Sie das Kontrollkästchen _Offline_, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispielsseite erneut laden, sollten Sie sehen, dass sie immer noch einwandfrei geladen wird. Alles wird offline gespeichert — die Seitenressourcen in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's für jetzt. Wir hoffen, dass Sie unseren Überblick über Technologien zur Client-seitigen Speicherung nützlich fanden.

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

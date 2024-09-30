---
title: Client-side storage
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Moderne Webbrowser unterstützen verschiedene Methoden, um Daten auf dem Computer des Benutzers zu speichern – mit Zustimmung des Benutzers – und diese bei Bedarf wieder abzurufen. Dies ermöglicht es Ihnen, Daten für die langfristige Speicherung zu behalten, Websites oder Dokumente für die Offline-Nutzung zu speichern, benutzerspezifische Einstellungen für Ihre Website beizubehalten und vieles mehr. Dieser Artikel erklärt die grundlegenden Funktionsweisen dieser Methoden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen der Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man client-seitige Speicher-APIs verwendet, um Anwendungsdaten zu speichern.
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

Andernorts im MDN-Lernbereich haben wir über den Unterschied zwischen [statischen Websites](/de/docs/Learn/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Websites](/de/docs/Learn/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten großen modernen Websites sind dynamisch – sie speichern Daten auf dem Server mit Hilfe einer Art Datenbank (serverseitige Speicherung) und führen [serverseitigen](/de/docs/Learn/Server-side) Code aus, um benötigte Daten abzurufen, in statische Seitentemplates einzufügen und das resultierende HTML an den Client zu senden, um es im Browser des Benutzers anzuzeigen.

Die client-seitige Speicherung funktioniert nach ähnlichen Prinzipien, hat aber andere Anwendungsgebiete. Sie besteht aus JavaScript-APIs, die es ermöglichen, Daten auf dem Client (d. h. auf dem Rechner des Benutzers) zu speichern und bei Bedarf abzurufen. Dies hat viele verschiedene Anwendungen, wie z.B.:

- Personalisierung von Seiteneinstellungen (z. B. Anzeige von benutzerdefinierten Widgets, Farbschema oder Schriftgröße).
- Speichern von vorherigen Aktivitäten auf der Seite (z.B. Speichern des Inhalts eines Warenkorbs aus einer vorherigen Sitzung, Erinnern, ob ein Benutzer zuvor eingeloggt war).
- Speicherung von Daten und Ressourcen lokal, um eine schnellere (und möglicherweise kostengünstigere) Herunterladung zu ermöglichen oder eine Nutzung ohne Netzwerkverbindung zu erlauben.
- Speicherung von von Webanwendungen generierten Dokumenten zur Offline-Nutzung

Oft werden client-seitige und serverseitige Speicher gemeinsam verwendet. Beispielsweise könnte man eine Reihe von Musikdateien herunterladen (vielleicht verwendet in einem Webspiel oder einer Musikplayer-Anwendung), diese in einer client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Benutzer müsste die Musikdateien nur einmal herunterladen – bei späteren Besuchen würden sie stattdessen aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Grenzen für die Menge an Daten, die Sie mit client-seitigen Speicher-APIs speichern können (möglicherweise sowohl pro einzelner API als auch kumulativ); das genaue Limit variiert je nach Browser und möglicherweise basierend auf Benutzereinstellungen. Weitere Informationen finden Sie unter [Browser Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Alte Schule: Cookies

Das Konzept der client-seitigen Speicherung gibt es schon lange. Seit den frühen Tagen des Webs haben Websites [Cookies](/de/docs/Web/HTTP/Cookies) verwendet, um Informationen zu speichern, um die Benutzererfahrung auf Websites zu personalisieren. Sie sind die früheste Form von client-seitiger Speicherung, die im Web häufig genutzt wird.

Heutzutage gibt es einfachere Mechanismen, um client-seitige Daten zu speichern, daher werden wir Ihnen in diesem Artikel nicht beibringen, wie man Cookies verwendet. Dies bedeutet jedoch nicht, dass Cookies im modernen Web völlig nutzlos sind – sie werden immer noch häufig verwendet, um Daten zu speichern, die mit der Personalisierung und dem Zustand des Benutzers zusammenhängen, z. B. Sitzungs-IDs und Zugriffstoken. Weitere Informationen zu Cookies finden Sie in unserem Artikel [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

### Neue Schule: Web Storage und IndexedDB

Die oben erwähnten „einfacheren“ Funktionen sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenobjekte, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einige einfache Daten speichern müssen, wie den Namen des Benutzers, ob er eingeloggt ist, welche Hintergrundfarbe verwendet werden soll usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet dem Browser ein vollständiges Datenbanksystem zum Speichern komplexer Daten. Dies kann für alles verwendet werden, von vollständigen Sätzen von Kundenunterlagen bis hin zu komplexen Datentypen wie Audio- oder Videodateien.

Sie erfahren weiter unten mehr über diese APIs.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API ist zum Speichern von HTTP-Antworten auf bestimmte Anfragen konzipiert und sehr nützlich für Dinge wie das Speichern von Website-Ressourcen offline, sodass die Website anschließend ohne Netzwerkverbindung genutzt werden kann. Cache wird normalerweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl es nicht zwingend erforderlich ist.

Die Nutzung von Cache und Service Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht im Detail behandeln, obwohl wir ein Beispiel im Abschnitt [Offline-Speicherung von Ressourcen](#offline-speicherung_von_ressourcen) unten zeigen werden.

## Speicherung einfacher Daten — Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden — Sie speichern einfache Name/Wert-Paare von Daten (beschränkt auf Zeichenfolgen, Zahlen usw.) und rufen diese Werte bei Bedarf ab.

### Grundlegende Syntax

Lassen Sie uns Ihnen zeigen, wie:

1. Gehen Sie zuerst zu unserer [Web Storage Blankovorlage](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie dies in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwickler-Tools Ihres Browsers.
3. Alle Ihre Web Storage-Daten befinden sich in zwei objektartigen Strukturen innerhalb des Browsers: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Der erste speichert Daten, solange der Browser geöffnet ist (die Daten gehen verloren, wenn der Browser geschlossen wird) und der zweite speichert Daten, auch nachdem der Browser geschlossen und dann erneut geöffnet wurde. Wir werden den zweiten in diesem Artikel verwenden, da er im Allgemeinen nützlicher ist.

   Die [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem)-Methode ermöglicht es Ihnen, einen Dateneintrag im Speicher zu speichern — sie erfordert zwei Parameter: den Namen des Eintrags und dessen Wert. Versuchen Sie, dies in Ihre JavaScript-Konsole einzugeben (ändern Sie den Wert in Ihren eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem)-Methode erfordert einen Parameter — den Namen eines Dateneintrags, den Sie abrufen möchten — und gibt den Wert dieses Eintrags zurück. Geben Sie nun diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Beim Eingeben der zweiten Zeile sollten Sie sehen, dass die Variable `myName` jetzt den Wert des `name`-Dateneintrags enthält.

5. Die [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem)-Methode erfordert einen Parameter — den Namen eines Dateneintrags, den Sie entfernen möchten — und entfernt diesen Eintrag aus der Webspeicherung. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte jetzt `null` zurückgeben — der `name`-Eintrag existiert nicht mehr in der Webspeicherung.

### Die Daten bleiben erhalten!

Ein wichtiges Merkmal der Webspeicherung ist, dass die Daten zwischen Seitenaufrufen (und sogar beim Herunterfahren des Browsers, im Fall von `localStorage`) bestehen bleiben. Schauen wir uns das in Aktion an.

1. Öffnen Sie unsere Web Storage Blankovorlage erneut, diesmal aber in einem anderen Browser als dem, in dem Sie dieses Tutorial geöffnet haben! Dies erleichtert den Umgang damit.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten den zurückgegebenen Name-Eintrag sehen.

3. Schließen Sie nun den Browser und öffnen Sie ihn erneut.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert weiterhin verfügbar ist, auch nachdem der Browser geschlossen und dann erneut geöffnet wurde.

### Getrennter Speicher für jede Domain

Es gibt einen separaten Datenspeicher für jede Domain (jede separate Webadresse, die im Browser geladen wird). Sie werden sehen, dass, wenn Sie zwei Websites laden (zum Beispiel google.com und amazon.com) und versuchen, einen Eintrag auf einer Website zu speichern, dieser auf der anderen Website nicht verfügbar ist.

Dies ist sinnvoll – Sie können sich die Sicherheitsprobleme vorstellen, die auftreten würden, wenn Websites die Daten anderer Websites sehen könnten!

### Ein komplexeres Beispiel

Lassen Sie uns dieses neu erworbene Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, um Ihnen eine Vorstellung davon zu geben, wie Webspeicherung verwendet werden kann. Unser Beispiel ermöglicht es Ihnen, einen Namen einzugeben, woraufhin die Seite so aktualisiert wird, dass Sie eine personalisierte Begrüßung erhalten. Dieser Zustand bleibt auch über Seiten-/Browser-Reloads hinweg bestehen, da der Name in der Webspeicherung gespeichert ist.

Sie können das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) finden – dies enthält eine Website mit einem Header, Inhalt und Fußzeile sowie ein Formular zum Eingeben Ihres Namens.

![Ein Screenshot einer Website mit Header-, Inhalts- und Fußzeile. Der Header hat links einen Begrüßungstext und rechts eine Schaltfläche mit der Bezeichnung 'Vergessen'. Der Inhalt hat eine Überschrift gefolgt von zwei Absätzen Blindtext. Die Fußzeile lautet 'Copyright nobody. Use the code as you like'.](web-storage-demo.png)

Lassen Sie uns das Beispiel aufbauen, damit Sie verstehen, wie es funktioniert.

1. Erstellen Sie zunächst eine lokale Kopie unserer [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html)-Datei in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie als Nächstes, wie unser HTML auf eine JavaScript-Datei namens `index.js` verweist, mit einer Zeile wie `<script src="index.js" defer></script>`. Wir müssen diese erstellen und unseren JavaScript-Code hineinschreiben. Erstellen Sie eine `index.js`-Datei im selben Verzeichnis wie Ihre HTML-Datei.
3. Wir beginnen damit, Verweise auf alle HTML-Funktionen zu erstellen, die wir in diesem Beispiel manipulieren müssen – wir werden sie alle als Konstanten erstellen, da diese Verweise im Lebenszyklus der App nicht geändert werden müssen. Fügen Sie die folgenden Zeilen zu Ihrer JavaScript-Datei hinzu:

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

4. Als Nächstes müssen wir einen kleinen Ereignis-Listener einbinden, um zu verhindern, dass das Formular sich tatsächlich selbst abschickt, wenn die Absenden-Schaltfläche gedrückt wird, da dies nicht das gewünschte Verhalten ist. Fügen Sie das folgende Snippet unter Ihren vorherigen Code hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Jetzt müssen wir einen Ereignis-Listener hinzufügen, dessen Handlerfunktion ausgeführt wird, wenn die Schaltfläche „Sag Hallo“ geklickt wird. Die Kommentare erläutern im Detail, was jeder Teil tut, aber im Wesentlichen nehmen wir hier den Namen, den der Benutzer in das Texteingabefeld eingegeben hat, speichern ihn in der Webspeicherung mit `setItem()` und führen dann eine Funktion namens `nameDisplayCheck()` aus, die das Aktualisieren des tatsächlichen Website-Textes übernimmt. Fügen Sie dies am Ende Ihres Codes hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. An dieser Stelle benötigen wir auch einen Ereignis-Handler, der eine Funktion ausführt, wenn die Schaltfläche „Vergessen“ geklickt wird – diese wird nur angezeigt, nachdem die Schaltfläche „Sag Hallo“ geklickt wurde (die beiden Formularzustände wechseln hin und her). In dieser Funktion entfernen wir den `name`-Eintrag aus der Webspeicherung mit `removeItem()` und führen dann erneut `nameDisplayCheck()` aus, um das Display zu aktualisieren. Fügen Sie dies am Ende hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Es ist nun an der Zeit, die `nameDisplayCheck()`-Funktion selbst zu definieren. Hier überprüfen wir, ob der Namenseintrag in der Webspeicherung gespeichert wurde, indem wir `localStorage.getItem('name')` als bedingten Test verwenden. Wenn der Name gespeichert wurde, wird dieser Aufruf als `true` ausgewertet; wenn nicht, wird der Aufruf als `false` ausgewertet. Wenn der Aufruf als `true` ausgewertet wird, zeigen wir eine personalisierte Begrüßung an, zeigen den „Vergessen“-Teil des Formulars an und verbergen den „Sag Hallo“-Teil des Formulars. Wenn der Aufruf als `false` ausgewertet wird, zeigen wir eine generische Begrüßung an und verhalten uns umgekehrt. Fügen Sie den folgenden Code am Ende hinzu:

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

8. Zu guter Letzt müssen wir die `nameDisplayCheck()`-Funktion ausführen, wenn die Seite geladen wird. Wenn wir dies nicht tun, dann würde die personalisierte Begrüßung nicht über Seitenreloads hinweg bestehen bleiben. Fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig – gut gemacht! Alles, was noch bleibt, ist Ihr Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können unsere [abgeschlossene Version hier live sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel, das Sie in [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) erkunden können.

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer abgeschlossenen Version gibt das `defer`-Attribut an, dass der Inhalt des {{htmlelement("script")}}-Elements nicht ausgeführt wird, bis die Seite vollständig geladen ist.

## Speicherung komplexer Daten — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal als IDB abgekürzt) ist ein komplettes Datenbanksystem, das im Browser verfügbar ist, in dem Sie komplexe zusammenhängende Daten speichern können, deren Typen nicht auf einfache Werte wie Zeichenfolgen oder Zahlen beschränkt sind. Sie können Videos, Bilder und so ziemlich alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB API erlaubt es Ihnen, eine Datenbank zu erstellen und dann „object stores“ in dieser Datenbank zu erstellen.
„Object stores“ sind wie Tabellen in einer relationalen Datenbank, und jeder „object store“ kann eine Anzahl von Objekten enthalten.
Um mehr über die IndexedDB API zu erfahren, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

Allerdings ist dies mit Kosten verbunden: IndexedDB ist viel komplexer zu verwenden als die Web Storage API. In diesem Abschnitt werden wir nur an der Oberfläche dessen kratzen, wozu es fähig ist, aber wir werden Ihnen genug geben, um anzufangen.

### Durcharbeiten eines Notizen-Speicherbeispiels

Hier führen wir Sie Schritt für Schritt durch ein Beispiel, das es Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern und sie wann immer Sie möchten anzuzeigen und zu löschen, und erklären die grundlegendsten Teile von IDB, während wir es zusammen aufbauen.

Die App sieht in etwa so aus:

![Ein IndexDB Notizen-Demo-Screenshot mit 4 Abschnitten. Der erste Abschnitt ist der Header. Der zweite Abschnitt listet alle Notizen auf, die erstellt wurden. Es hat zwei Notizen, jede mit einem Löschen-Button. Ein dritter Abschnitt ist ein Formular mit 2 Eingabefeldern für 'Notiztitel' und 'Notiztext' und einem Knopf mit der Aufschrift 'Neue Notiz erstellen'. Der untere Abschnitt Fußzeile liest 'Copyright nobody. Use the code as you like'.](idb-demo.png)

Jede Notiz hat einen Titel und einen Textkörper, die individuell bearbeitet werden können. Der JavaScript-Code, den wir im Folgenden durchgehen werden, enthält detaillierte Kommentare, um Ihnen beim Verständnis zu helfen.

### Erste Schritte

1. Erstellen Sie zuerst lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Schauen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einem Header und einer Fußzeile sowie einem Hauptinhaltbereich definiert, der einen Platz zum Anzeigen von Notizen und ein Formular zum Eingeben neuer Notizen in die Datenbank enthält. Das CSS bietet einige Stile, um zu verdeutlichen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten, die Verweise auf das {{htmlelement("ul")}} Element enthalten, in dem die Notizen angezeigt werden, sowie auf das Titel- und Körper-{{htmlelement("input")}} Elemente, das {{htmlelement("form")}} selbst und den {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind nun bereit, Code darin hinzuzufügen.

### Initiale Datenbankeinrichtung

Schauen wir uns jetzt an, was wir tun müssen, um eigentlich eine Datenbank einzurichten.

1. Fügen Sie unter den Konstantendeklarationen die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier erklären wir eine Variable namens `db` – diese wird später verwendet, um ein Objekt darzustellen, das unsere Datenbank repräsentiert. Wir werden dies an einigen Stellen verwenden, daher haben wir es global hier deklariert, um die Dinge zu vereinfachen.

2. Als Nächstes fügen Sie Folgendes hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage, um Version `1` einer Datenbank namens `notes_db` zu öffnen. Wenn diese nicht bereits existiert, wird sie von anschließendem Code für Sie erstellt. Sie werden dieses Anforderungsmuster sehr oft in der IndexedDB sehen. Datenbankoperationen benötigen Zeit. Sie möchten den Browser nicht einfrieren, während Sie auf die Ergebnisse warten, daher sind Datenbankoperationen [asynchron](/de/docs/Glossary/asynchronous), d.h. sie geschehen nicht sofort, sondern irgendwann in der Zukunft, und Sie werden benachrichtigt, wenn sie fertig sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anforderungsobjekt (das Sie nach Belieben benennen können – wir haben es hier `openRequest` genannt, damit es obv

ious ist, wofür es ist). Sie verwenden dann Ereignis-Handler, um Code auszuführen, wenn die Anfrage abschließt, fehlschlägt usw., was Sie weiter unten in Aktion sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (zum Beispiel durch Ändern der Tabellenstruktur), müssen Sie Ihren Code erneut ausführen, jedoch mit einer erhöhten Versionsnummer und einem im `upgradeneeded`-Handler (siehe unten) spezifizierten abweichenden Schema usw. Wir werden das Upgrade von Datenbanken in diesem Tutorial nicht behandeln.

3. Fügen Sie nun die folgenden Ereignis-Handler direkt unter Ihrem vorherigen Hinzufügung ein:

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

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignis-Handler wird ausgeführt, wenn das System zurückkommt und sagt, dass die Anfrage fehlgeschlagen ist. Dies ermöglicht es Ihnen, auf dieses Problem zu reagieren. In unserem Beispiel drucken wir einfach eine Nachricht in die JavaScript-Konsole.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event)-Ereignis-Handler wird ausgeführt, wenn die Anfrage erfolgreich zurückkehrt, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. Wenn dies der Fall ist, wird ein Objekt, das die geöffnete Datenbank darstellt, in der [`openRequest.result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft verfügbar gemacht, wodurch wir die Datenbank manipulieren können. Wir speichern dies in der `db`-Variablen, die wir zuvor für die spätere Verwendung erstellt haben. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank innerhalb des {{htmlelement("ul")}} anzeigt. Wir führen es jetzt aus, damit die Notizen, die sich bereits in der Datenbank befinden, angezeigt werden, sobald die Seite geladen wird. Sie werden `displayData()` später definiert sehen.

4. Schließlich für diesen Abschnitt fügen wir wahrscheinlich den wichtigsten Ereignis-Handler für die Einrichtung der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer größeren Versionsnummer als die bestehende gespeicherte Datenbank geöffnet wird (bei Durchführung eines Upgrades). Fügen Sie den folgenden Code unter Ihrem vorherigen Handler hinzu:

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

   Hier definieren wir das Schema (Struktur) unserer Datenbank; das heißt die Menge an Spalten (oder Feldern), die sie enthält. Hier greifen wir zuerst auf eine Referenz zur bestehenden Datenbank aus der `result`-Eigenschaft des Ziels des Ereignisses (`e.target.result`) zu, welches das Anforderungsobjekt ist. Dies entspricht der Zeile `db = openRequest.result;` innerhalb des `success`-Ereignis-Handlers, aber wir müssen dies hier separat tun, da der `upgradeneeded`-Ereignis-Handler (falls benötigt) vor dem `success`-Ereignis-Handler ausgeführt wird, was bedeutet, dass der `db`-Wert nicht verfügbar wäre, wenn wir dies nicht tun würden.

   Dann verwenden wir [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore), um ein neues Objekt-Lager in unserer geöffneten Datenbank zu erstellen, das `notes_os` genannt wird. Dies entspricht einer einzelnen Tabelle in einem konventionellen Datenbanksystem. Wir haben ihm den Namen Notizen gegeben und auch ein `autoIncrement`-Schlüsselfeld namens `id` spezifiziert – in jedem neuen Datensatz wird diesem automatisch ein inkrementierter Wert gegeben – der Entwickler muss dies nicht explizit setzen. Als Schlüssel wird das `id`-Feld verwendet, um Datensätze eindeutig zu identifizieren, etwa beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen auch zwei andere Indizes (Felder) mit der Methode [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex): `title` (welcher einen Titel für jede Notiz enthält) und `body` (welcher den Textinhalt der Notiz enthält).

So mit diesem Datenbankschema, wenn wir anfangen, Datensätze in die Datenbank einzufügen, wird jeder als ein Objekt in folgender Struktur dargestellt:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Schauen wir uns nun an, wie wir Datensätze in die Datenbank hinzufügen können. Dies geschieht mit dem Formular auf unserer Seite.

Unter Ihrem vorherigen Ereignis-Handler fügen Sie die folgende Zeile hinzu, die einen `submit`-Ereignis-Handler einrichtet, der eine Funktion namens `addData()` ausführt, wenn das Formular übermittelt wird (wenn der Absende-{{htmlelement("button")}} gedrückt wird, was zu einer erfolgreichen Formularübermittlung führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Lassen Sie uns nun die `addData()`-Funktion definieren. Fügen Sie dies unter Ihrer vorherigen Zeile hinzu:

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

Dies ist ziemlich komplex; unterteilt gesagt, wir:

- Führen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignisobjekt aus, um zu verhindern, dass das Formular tatsächlich auf die konventionelle Art übermittelt wird (dies würde ein Seitenrefresh verursachen und das Erlebnis verderben).
- Erstellen ein Objekt, das einen Datensatz darstellt, der in die Datenbank eingegeben werden soll, und füllen es mit Werten aus den Formulareingaben. Beachten Sie, dass wir keinen `id`-Wert explizit einfügen müssen – wie bereits erläutert, wird dieser automatisch gefüllt.
- Öffnen eine `readwrite`-Transaktion gegen das `notes_os` Objekt-Store mit der [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction)-Methode. Dieses Transaktionsobjekt erlaubt uns den Zugriff auf das Objekt-Store, sodass wir etwas damit tun können, z. B. einen neuen Datensatz hinzufügen.
- Greifen auf das Objekt-Lager mit der [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)-Methode zu und speichern das Ergebnis in der Variablen `objectStore`.
- Fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) in die Datenbank ein. Dies erstellt ein Anforderungsobjekt, in der gleichen Art und Weise, wie wir es vorher gesehen haben.
- Fügen eine Reihe von Ereignis-Handler am `request`- und `transaction`-Objekt hinzu, um Code an kritischen Punkten im Lebenszyklus auszuführen. Sobald die Anfrage erfolgreich abgeschlossen ist, leeren wir die Formulareingaben, um die Eingabe der nächsten Notiz vorzubereiten. Sobald die Transaktion abgeschlossen ist, führen wir die `displayData()`-Funktion erneut aus, um die Anzeige der Notizen auf der Seite zu aktualisieren.

### Anzeigen der Daten

Wir haben `displayData()` bereits zweimal in unserem Code referenziert, also sollten wir es wahrscheinlich besser definieren. Fügen Sie dies zu Ihrem Code hinzu, unter der vorherigen Funktionsdefinition:

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

Erneut, brechen wir dies herunter:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}}-Elements, bevor wir es dann mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun, würden Sie am Ende eine riesige Liste von duplizierten Inhalten erhalten, die bei jeder Aktualisierung hinzugefügt wird.
- Als nächstes bekommen wir eine Referenz zum `notes_os`-Objekt-Store mittels [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) wie wir es in `addData()` gemacht haben, außer dass wir sie hier in einer Zeile verketten.
- Der nächste Schritt ist die Verwendung der [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)-Methode, um eine Anfrage für einen Cursor zu öffnen – das ist ein Konstrukt, das verwendet werden kann, um die Datensätze in einem Object-Store zu durchlaufen. Wir verketten einen `success`-Ereignis-Handler an das Ende dieser Zeile, um den Code prägnanter zu machen – wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir bekommen eine Referenz auf den Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Objekt) mit `const cursor = e.target.result`.
- Als nächstes überprüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) – falls ja, erstellen wir ein DOM-Fragment, füllen es mit den Daten des Datensatzes und fügen es in die Seite ein (innerhalb des `<ul>`-Elements). Wir fügen auch einen Löschen-Button hinzu, der, wenn geklickt, diese Notiz mit der Funktion `deleteItem()` löschen wird, die wir im nächsten Abschnitt betrachten werden.
- Am Ende des `if`-Blocks verwenden wir die Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue), um den Cursor zum nächsten Datensatz im Datenspeicher zu bewegen und den Inhalt des `if`-Blocks erneut auszuführen. Wenn es einen weiteren Datensatz gibt, zu dem iteriert wird, wird dies bewirken, dass er in die Seite eingefügt wird, und dann wird `continue()` erneut ausgeführt, und so weiter.
- Wenn es keine weiteren Datensätze mehr gibt, zu denen iteriert werden kann, wird `cursor` `undefined` zurückgeben, und somit wird der `else`-Block anstelle des `if`-Blocks ausgeführt. Dieser Block überprüft, ob keine Notizen in das `<ul>` eingefügt wurden – falls nicht, wird eine Nachricht eingefügt, die sagt, dass keine Notiz gespeichert wurde.

### Löschen einer Notiz

Wie oben erwähnt, wird eine Notiz gelöscht, wenn der Löschen-Button der Notiz gedrückt wird. Dies wird durch die `deleteItem()`-Funktion erreicht, die wie folgt aussieht:

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

- Der erste Teil hiervon könnte eine Erklärung benötigen – wir rufen die ID des zu löschenden Datensatzes über `Number(e.target.parentNode.getAttribute('data-note-id'))` ab – erinnern Sie sich, dass die ID des Datensatzes bei der ersten Anzeige in einem `data-note-id`-Attribut bei den `<li>` gespeichert wurde. Wir müssen das Attribut jedoch über das globale eingebaute [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt verarbeiten, da es vom Datentyp `string` ist und daher von der Datenbank, die eine Zahl erwartet, nicht erkannt werden würde.
- Anschließend erhalten wir über das uns bereits bekannte Muster eine Referenz zum Objekt-Store und verwenden die Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), um den Datensatz aus der Datenbank zu löschen, indem wir ihm die ID übergeben.
- Wenn die Datenbank-Transaktion abgeschlossen ist, löschen wir die Notiz-`<li>` aus dem DOM und führen erneut die Überprüfung durch, um zu sehen, ob das `<ul>` jetzt leer ist, und fügen bei Bedarf eine Notiz ein.

Das ist alles! Ihr Beispiel sollte nun funktionieren.

Wenn Sie Schwierigkeiten damit haben, [können Sie es gerne mit unserem Live-Beispiel vergleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Speicherung komplexer Daten über IndexedDB

Wie bereits erwähnt, kann IndexedDB verwendet werden, um mehr als nur Textstrings zu speichern. Sie können so ziemlich alles speichern, was Sie möchten, einschließlich komplexer Objekte wie Video- oder Bild-Blobs. Und es ist nicht viel schwieriger als andere Datentypen.

Um zu zeigen, wie es geht, haben wir ein weiteres Beispiel namens [IndexedDB Videoladen](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) geschrieben (siehe es auch [hier live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Beim ersten Ausführen des Beispiels lädt es alle Videos vom Netzwerk herunter, speichert sie in einer IndexedDB-Datenbank und zeigt die Videos dann in der UI innerhalb von {{htmlelement("video")}}-Elementen an. Beim zweiten Ausführen findet es die Videos in der Datenbank und ruft sie von dort ab, bevor es sie anzeigt – das macht die nachfolgenden Ladezeiten viel schneller und weniger bandbreitenlastig.

Schauen wir uns die interessantesten Teile des Beispiels an. Wir werden nicht alles durchgehen – vieles davon ist dem vorherigen Beispiel ähnlich, und der Code ist gut kommentiert.

1. Für dieses Beispiel haben wir die Namen der abzurufenden Videos in einem Array von Objekten gespeichert:

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

2. Zu Beginn, sobald die Datenbank erfolgreich geöffnet wurde, führen wir eine `init()`-Funktion aus. Diese durchläuft die verschiedenen Videonamen und versucht, einen durch jeden Namen identifizierten Datensatz aus der Datenbank `videos` zu laden.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft durch Prüfen, ob `request.result` als `true` auswertet – wenn der Datensatz nicht vorhanden ist, wird er `undefined` sein), werden die Videosdateien (als Blobs gespeichert) und der Videoname direkt an die `displayVideo()`-Funktion weitergegeben, um sie in der UI zu platzieren. Andernfalls wird der Videoname an die Funktion `fetchVideoFromNetwork()` übergeben, um, Sie haben es erraten, das Video aus dem Netzwerk abzurufen.

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

3. Der folgende Schnipsel stammt aus der Funktion `fetchVideoFromNetwork()` – hier holen wir MPEG-4- und WebM-Versionen des Videos über zwei separate [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen. Wir verwenden dann die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um den Körper jeder Antwort als Blob zu extrahieren und uns eine Objekt-Darstellung der Videos zu geben, die später gespeichert und angezeigt werden kann.

   Hier haben wir jedoch ein Problem – diese beiden Anfragen sind asynchron, aber wir möchten die Videos nur dann anzeigen oder speichern, wenn beide Zusagen erfüllt sind. Glücklicherweise gibt es eine eingebaute Methode, die ein solches Problem behandelt – {{jsxref("Promise.all()")}}. Diese nimmt ein Argument – Referenzen zu all den einzelnen Zusagen, die Sie auf Erfüllung prüfen möchten, in einem Array abgelegt – und gibt eine Zusage zurück, die erfüllt wird, wenn alle Einzelzusagen erfüllt sind.

   Im `then()`-Handler für diese Zusage rufen wir die Funktion `displayVideo()` auf, wie wir es zuvor getan haben, um die Videos in der UI anzuzeigen, und rufen dann auch die Funktion `storeVideo()` auf, um diese Videos in der Datenbank zu speichern.

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

4. Schauen wir uns zuerst `storeVideo()` an. Dies ist dem Muster, das Sie im vorherigen Beispiel zum Hinzufügen von Daten zur Datenbank gesehen haben, sehr ähnlich – wir öffnen eine `readwrite`-Transaktion und erhalten eine Referenz zu unserem `videos_os`-Objekt-Store, erstellen ein Objekt, das den Datensatz darstellt, der zur Datenbank hinzugefügt werden soll, und fügen es dann mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

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

5. Schließlich haben wir `displayVideo()`, das die benötigten DOM-Elemente erstellt, um das Video in der UI einzufügen, und sie dann zur Seite hinzufügt. Die interessantesten Teile davon sind die unten gezeigten – um unsere Videoblobs tatsächlich in einem `<video>`-Element anzuzeigen, müssen wir Objekt-URLs erstellen (interne URLs, die auf die in Erinnerung gespeicherten Videoblobs verweisen) mit der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static). Sobald dies geschehen ist, können wir die Objekt-URLs als Werte unserer `src`-Attribute des {{htmlelement("source")}}-Elements setzen, und es funktioniert einwandfrei.

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

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Ressourcen in einer IndexedDB-Datenbank speichert und so das Herunterladen mehr als einmal vermeidet. Dies ist bereits eine große Verbesserung der Benutzererfahrung, aber es fehlt noch eine Sache – die Haupt-HTML-, CSS- und JavaScript-Dateien müssen immer noch jedes Mal heruntergeladen werden, wenn die Seite aufgerufen wird, was bedeutet, dass sie nicht funktioniert, wenn keine Netzwerkverbindung besteht.

![Firefox-Offline-Bildschirm mit einer Abbildung einer Cartoon-Figur auf der linken Seite, die mit der rechten Hand einen zwei-poligen Stecker und mit der linken Hand eine zwei-polige Steckdose hält. Auf der rechten Seite gibt es eine Offline-Modus-Nachricht und einen Button mit der Aufschrift 'Erneut versuchen'.](ff-offline.png)

Hier kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die beim Zugriff durch einen Browser gegen eine bestimmte Herkunft (Website oder einen Teil einer Website auf einer bestimmten Domain) registriert wird. Wenn er registriert ist, kann er Seiten an dieser Herkunft kontrollieren. Er tut dies, indem er zwischen einer geladenen Seite und dem Netzwerk sitzt und Netzwerkanfragen abfängt, die an diese Herkunft gerichtet sind.

Wenn er eine Anfrage abfängt, kann er alles damit machen, was Sie wollen (siehe [Use-Case-Ideen](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist das Speichern der Netzwerkantworten offline und dann das Bereitstellen dieser als Antwort auf eine Anfrage anstelle der Antworten aus dem Netzwerk. Tatsächlich erlaubt es, eine Website komplett offline arbeiten zu lassen.

Die Cache-API ist ein weiteres client-seitiges Speichermechanismus, mit einem kleinen Unterschied – sie ist darauf ausgelegt, HTTP-Antworten zu speichern und funktioniert daher sehr gut mit Service Workern.

### Ein Service Worker Beispiel

Schauen wir uns ein Beispiel an, um Ihnen eine Vorstellung davon zu geben, wie dies aussehen könnte. Wir haben eine weitere Version des Video Store-Beispiels erstellt, das wir im vorherigen Abschnitt gesehen haben – dies funktioniert identisch, außer dass es auch die HTML-, CSS- und JavaScript-Dateien in der Cache-API über einen Service Worker speichert und das Beispiel offline laufen lässt!

Siehe [IndexedDB Videoladen mit Service Worker live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), und sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrierung des Service Workers

Das erste, was zu beachten ist, ist, dass es ein zusätzliches Stück Code in der Haupt-JavaScript-Datei gibt (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Wir führen zuerst einen Feature-Erkennungstest durch, um zu sehen, ob das `serviceWorker`-Mitglied im [`Navigator`](/de/docs/Web/API/Navigator) vorhanden ist. Wenn das `true` zurückgibt, dann wissen wir, dass zumindest die Grundlagen der Service Worker unterstützt werden. Innerhalb hier verwenden wir die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um einen Service Worker, der in der Datei `sw.js` enthalten ist, gegen die Herkunft, an der er sich befindet, zu registrieren, sodass er Seiten im selben Verzeichnis wie er oder Unterverzeichnissen kontrollieren kann. Wenn Ihr Versprechen erfüllt ist, wird der Service Worker als registriert angesehen.

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
> Der angegebene Pfad zur `sw.js`-Datei ist relativ zur Ursprungsseite, nicht zur JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich unter `https://mdn.github.io/learning-area/javascript/apis/player-cache-sw/video-store-offline/sw.js`. Die Ursprungsseite ist `https://mdn.github.io`, und daher muss der angegebene Pfad `/learning-area/javascript/apis/player-cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten möchten, müssen Sie dies entsprechend ändern. Dies ist etwas verwirrend, aber es muss aus Sicherheitsgründen so funktionieren.

#### Installation des Service Workers

Beim nächsten Mal, wenn eine Seite unter der Kontrolle des Service Workers aufgerufen wird (z.B. beim Hinweis des Beispiels), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er beginnt, sie zu kontrollieren. Wenn dies geschieht, wird ein `install`-Ereignis gegen den Service Worker ausgelöst; Sie können Code innerhalb des Service Workers selbst schreiben, der auf die Installation reagiert.

Schauen wir uns ein Beispiel an, in der Datei [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) (der Service Worker). Sie werden sehen, dass die Listener für die Installation an `self` registriert sind. Dieses `self`-Schlüsselwort ist eine Möglichkeit, aus der Datei des Service Workers selbst auf den globalen Bereich des Service Workers zu verweisen.

Innerhalb des `install`-Handlers verwenden wir die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil), die am Ereignisobjekt verfügbar ist, um zu signalisieren, dass der Browser die Installation des Service Workers nicht abschließen sollte, bis das darin enthaltene Versprechen erfolgreich erfüllt wurde.

Hier sehen wir die Cache API in Aktion. Wir verwenden die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich einem IndexedDB-Objekt-Store). Dieses Versprechen erfüllt sich mit einem [`Cache`](/de/docs/Web/API/Cache)-Objekt, das den `video-store`-Cache darstellt. Dann verwenden wir die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll), um eine Reihe von Ressourcen abzurufen und deren Antworten im Cache zu speichern.

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

Das war's vorerst, Installation erledigt.

#### Reaktion auf weitere Anfragen

Mit dem Service Worker registriert und gegen unsere HTML-Seite installiert sowie den relevanten Ressourcen, die alle in unserem Cache hinzugefügt wurden, sind wir fast startklar. Es gibt noch eine Sache zu tun: Code schreiben, um auf weitere Netzwerkanfragen zu reagieren.

Das ist es, was das zweite Stück Code in `sw.js` tut. Wir fügen einen weiteren Listener zum Service Worker globalen Bereich hinzu, der den Handler aufruft, wenn das `fetch`-Ereignis ausgelöst wird. Dies geschieht immer dann, wenn der Browser eine Anfrage für eine Ressource in dem Verzeichnis stellt, gegen das der Service Worker registriert ist.

Innerhalb des Handlers protokollieren wir zunächst die URL der angeforderten Ressource. Wir liefern dann eine benutzerdefinierte Antwort auf die Anfrage, indem wir die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

Innerhalb dieses Blocks verwenden wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu überprüfen, ob eine passende Anfrage (d. h. entspricht der URL) in einem beliebigen Cache gefunden werden kann. Dieses Versprechen erfüllt sich mit der passenden Antwort, wenn ein Match gefunden wird, oder `undefined`, wenn nicht.

Wenn ein Match gefunden wird, geben wir es als benutzerdefinierte Antwort zurück. Wenn nicht, holen wir die Antwort aus dem Netzwerk ab und geben diese stattdessen zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das war es für unseren Service Worker.
Es gibt eine ganze Menge mehr, was Sie damit tun können – für weit mehr Details schauen Sie sich das [Service Worker Kochbuch](https://github.com/mdn/serviceworker-cookbook) an.
Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Testen des Beispiels im Offline-Modus

Um unser [Service Worker Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Sobald dies der Fall ist, können Sie:

- Versuchen Sie, Ihr Netzwerk zu trennen / Ihr WLAN auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_ aus, wenn Sie Firefox verwenden.
- Gehen Sie zu den Entwickler-Tools, wählen Sie dann _Anwendung > Service Worker_, und aktivieren Sie das Kontrollkästchen _Offline_, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispiel-Seite erneut aktualisieren, sollten Sie sehen, dass sie einwandfrei geladen wird. Alles wird offline gespeichert – die Seitenressourcen in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's für jetzt. Wir hoffen, Sie fanden unseren Überblick über client-seitige Speichertechnologien nützlich.

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

---
title: API-Referenz-Sidebars
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: b1e1430dd3b1d2e01197231ab0fa6047ed8a221b
---

Sie können eine benutzerdefinierte Sidebar auf API-Referenzseiten einschließen, die Links zu verwandten Interfaces, Tutorials und anderen Ressourcen anzeigt, die nur für diese API relevant sind. Dieser Artikel erklärt, wie das funktioniert.

## Erstellen einer Sidebar

Sie müssen die folgenden drei Schritte durchführen, um Ihre API-Sidebar zu erstellen:

1. Erstellen Sie Ihre API-Referenzseiten.
2. Fügen Sie einen Eintrag für Ihre spezielle API in die Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ein.
3. Verwenden Sie das Makro [`APIRef`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs), um die Sidebar in jede Seite einzufügen, auf der Sie sie anzeigen möchten.

Lassen Sie uns jeden dieser Schritte der Reihe nach durchgehen. Das Beispiel, auf das wir uns in diesem Artikel beziehen, ist die [Fetch API](/de/docs/Web/API/Fetch_API).

### Einen Eintrag zu GroupData.json hinzufügen

Die Datei `GroupData.json` enthält alle Daten darüber, welche Links in den API-Referenz-Sidebars erscheinen sollen.
Wenn das `APIRef`-Makro aufgerufen wird, nimmt es einen API-Namen als Parameter, sucht diesen Namen in `GroupData.json`, baut eine passende Sidebar und fügt diese in die Seite ein.

Um einen Eintrag in `GroupData.json` hinzuzufügen, müssen Sie:

1. Sicherstellen, dass Sie ein [GitHub](https://github.com/) Konto haben.
2. Das MDN-Inhalts-Repository forken, einen neuen Branch erstellen, der Ihre Änderungen enthält, und das Repository lokal klonen.
3. Ihren neuen Branch auschecken, bevor Sie mit der Arbeit beginnen, und sicherstellen, dass Sie Änderungen an ihn pushen, nachdem Sie fertig sind.
4. Einen Pull-Request erstellen, damit das MDN-Team Ihre Arbeit überprüfen kann, und falls nötig um Änderungen bitten.

Die Datei `GroupData.json` befindet sich im Verzeichnis `files/jsondata/`.
Beim Durchsehen werden Sie eine große JSON-Struktur sehen, bei der jede API ihr eigenes Mitglied hat. Der Name ist der API-Name, und der Wert ist ein Objekt, das mehrere Untermengen enthält, die die zu erstellenden Sidebar-Links definieren.

Zum Beispiel sieht der entsprechende Eintrag in `GroupData.json` für die [Fetch API](/de/docs/Web/API/Fetch_API)-Seite auf MDN so aus:

```json
"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "fetch()" ],
    "properties": [],
    "events":     []
},
```

Wie Sie sehen können, haben wir "Fetch API" für den Namen verwendet, und innerhalb des Objektwerts haben wir eine Anzahl von Untermengen eingefügt.

#### Untermengen, die in einen GroupData-Eintrag einzuschließen sind

Dieser Abschnitt listet alle Untermengen auf, die Sie in einen `GroupData`-Eintrag einfügen könnten.

Beachten Sie, dass die meisten der innerhalb der aufgeführten Untermengen enthaltenen Werte sowohl dem Link-Text entsprechen, als auch Slugs, die an das Ende der Haupt-API-Indexseite angehängt werden — `https://developer.mozilla.org/\<language-code\>/docs/Web/API` — um die endgültige URL für den angezeigten Link zu erstellen.
Beispielsweise wird "Response" zu einem Link wie folgt führen:

```html
<li><a href="/en-US/docs/Web/API/Response">Response</a></li>
```

Es gibt ein paar Ausnahmen.
Beispielsweise enthält die Untermengen "guides" die URLs, die auf zugehörige Anleitungen/Tutorials verweisen.
In diesem Fall werden die URLs an das Ende der MDN-Dokumentations-Root-URL angehängt — `https://developer.mozilla.org/\<language-code\>` — sodass ein Artikel überall auf MDN einbezogen werden kann.

Hier sind die verfügbaren Mitglieder.
Diese sind alle technisch optional, aber es wird dringend empfohlen, dass Sie diese, anstatt sie wegzulassen, als leere Arrays einschließen.

1. `"overview"` — der Wert ist ein Array, in dem Sie den Slug der API-Übersichtsseite einfügen, falls es eine gibt.
   "Fetch API" führt zu einem Link, der zu [https://developer.mozilla.org/de/docs/Web/API/Fetch_API](/de/docs/Web/API/Fetch_API) führt.
2. `"interfaces"` — der Wert ist ein Array, in dem Sie alle Interfaces auflisten sollten, die Teil dieser API sind.
   "Response" führt zu einem Link, der zu [https://developer.mozilla.org/de/docs/Web/API/Response](/de/docs/Web/API/Response) führt.
3. `"methods"` — der Wert ist ein Array, das alle Methoden enthalten sollte, die die Spezifikation zu Interfaces hinzufügt, die mit anderen APIs verbunden sind, wie z. B. Instantiierungsmethoden auf [`Navigator`](/de/docs/Web/API/Navigator) oder [`Window`](/de/docs/Web/API/Window).
   Wenn es eine große Anzahl von Methoden gibt, sollten Sie in Betracht ziehen, nur die beliebtesten oder die wichtigsten zuerst aufzulisten.
   "fetch()" führt zu einem Link, der zu [https://developer.mozilla.org/de/docs/Web/API/fetch](/de/docs/Web/API/Window/fetch) führt.
   Listen Sie _nicht_ Methoden auf, die Mitglieder von Interfaces sind, die von derselben API verwaltet werden.
4. `"properties"` — der Wert ist ein Array, das alle mit der API verbundenen Eigenschaften enthalten sollte.
   Dies kann Eigenschaften einschließen, die Mitglieder von Interfaces sind, die in der API-Spezifikation definiert sind, und Eigenschaften, die die API auf anderen Interfaces definiert.
   Wenn es eine große Anzahl von Eigenschaften gibt, sollten Sie in Betracht ziehen, nur die beliebtesten aufzulisten, oder diese zuerst in die Liste zu setzen.
   "Headers.append" führt zu einem Link, der zu [https://developer.mozilla.org/de/docs/Web/API/Headers/append](/de/docs/Web/API/Headers/append) führt.
5. `"events"` — der Wert ist ein Array, das die _Titel_ von Events enthalten sollte, die Teil der API sind, aber in Interfaces definiert sind, die _nicht_ Teil der API sind (Events, die zu Interfaces in der API gehören (`interfaces`), werden standardmäßig dokumentiert).
   Wenn es eine große Anzahl von Events gibt, sollten Sie in Betracht ziehen, nur die beliebtesten aufzulisten, oder diese zuerst in die Liste zu setzen.
   Zum Beispiel ist `"Document: selectionchange"` Teil der [Selection API](/de/docs/Web/API/Selection_API), aber `Document` ist es nicht. Daher fügen wir das Event dem Array hinzu und es wird vom [Selection API](/de/docs/Web/API/Selection_API) Thema verlinkt.
6. `"guides"` — der Wert ist ein Array von Strings, die sich mit einem Leitfaden-Thema befassen, das erklärt, wie die API genutzt wird.
   Die Strings enthalten den Teil der URL-Adresse des Leitfadens nach dem Sprachpfad: d.h. den `/docs/...` Teil der URL des Leitfadens.
   Zum Beispiel, um auf das Thema "Using Fetch" unter `https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch` zu verlinken, würde das Guide-Array "/docs/Web/API/Fetch_API/Using_Fetch" enthalten.
7. `"dictionaries"` — ein Array von Strings, das alle Wörterbücher auflistet, die Teil der API sind.
   Im Allgemeinen sollten nur Wörterbücher aufgelistet werden, die von mehr als einer Eigenschaft oder Methode verwendet werden, es sei denn, sie sind von besonderer Bedeutung oder werden voraussichtlich von mehreren Seiten referenziert.
   "CryptoKeyPair" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/CryptoKeyPair](/de/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN bewegt sich weg von der separaten Dokumentation von Wörterbüchern.
   > Wo möglich, werden diese jetzt an den Stellen beschrieben, an denen sie verwendet werden.
8. `"types"` — ein Array von Typedefs und aufgezählten Typen, die von der API definiert sind.
   Sie können sich dafür entscheiden, nur diejenigen aufzulisten, die von besonderer Bedeutung sind oder von mehreren Seiten referenziert werden, um die Liste kurz zu halten.
   > [!NOTE]
   > MDN bewegt sich weg von der separaten Dokumentation von Typedefs.
   > Wo möglich, werden diese jetzt als Werte an den Stellen beschrieben, an denen sie verwendet werden.
9. `"callbacks"` — der Wert ist ein Array, das eine Liste aller definierten Callback-Typen für die API enthält.
   Sie könnten es für unnötig halten, diese Gruppe überhaupt zu verwenden, selbst bei APIs, die Callback-Typen enthalten, da sie oft nicht nützlich sind, um separat dokumentiert zu werden.

## Tags, die von Sidebars verwendet werden

Einige Untermengen werden basierend auf Seitentags automatisch von untergeordneten Seiten entdeckt. Seiten unter der obersten API-Ebene werden jedes Mal durchsucht, wenn die Sidebar gerendert wird, und Einträge werden automatisch für Methoden ("Method"-Tag), Eigenschaften ("Property"-Tag) und Konstruktoren ("Constructor"-Tag) erstellt.

Untermengen werden auch automatisch mit Warnsymbolen basierend auf Tags dekoriert. Dekorationen werden für experimentelle ("Experimental"-Tag), nicht standardmäßige ("Non Standard" oder "Non-standard"-Tag) oder veraltete ("Deprecated"-Tag) Untermengen hinzugefügt.

Weitere Informationen zur tagbasierten Verarbeitung finden Sie [im APIRef-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs).

## Einfügen der Sidebar

Nachdem Sie einen Eintrag für Ihre API in `GroupData.json` hinzugefügt, ihn als Pull-Request eingereicht und die Änderung in das Hauptrepository übernommen wurde, können Sie ihn in Ihre API-Referenzseiten mit dem [`APIRef`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs) Makro einfügen, das den Namen verwendet, den Sie für Ihre API in GroupData als Parameter verwendet haben.
Zum Beispiel wird die Sidebar der [WebVR API](/de/docs/Web/API/WebVR_API) in ihren Seiten mit dem folgenden Code eingefügt:

```plain
\{{APIRef("WebVR API")}}
```

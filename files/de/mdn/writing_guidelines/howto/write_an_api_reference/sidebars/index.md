---
title: API-Referenz-Seitenleisten
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

Sie können auf API-Referenzseiten eine benutzerdefinierte Seitenleiste einfügen, sodass Links zu verwandten Schnittstellen, Tutorials und anderen Ressourcen, die speziell für diese API relevant sind, angezeigt werden.
Dieser Artikel erklärt, wie dies funktioniert.

## Erstellen einer Seitenleiste

Um Ihre API-Seitenleiste zu erstellen, müssen Sie die folgenden drei Schritte durchführen:

1. Erstellen Sie Ihre API-Referenzseiten.
2. Fügen Sie einen Eintrag für Ihre spezielle API in die Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ein.
3. Verwenden Sie das Makro [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs), um die Seitenleiste in jede Seite einzufügen, auf der Sie sie anzeigen möchten.

Lassen Sie uns jeden dieser Schritte der Reihe nach durchgehen.
Das Beispiel, auf das wir in diesem Artikel verweisen, ist die [Fetch API](/de/docs/Web/API/Fetch_API).

### Einen Eintrag zu GroupData.json hinzufügen

Die Datei `GroupData.json` enthält alle Daten, die bestimmen, welche Links in den API-Referenz-Seitenleisten erscheinen sollen.
Wenn das Makro `APIRef` aufgerufen wird, nimmt es einen API-Namen, der ihm als Parameter übergeben wird, sucht diesen Namen in `GroupData.json` und baut eine passende Seitenleiste, die in die Seite eingefügt wird.

Um einen Eintrag zu `GroupData.json` hinzuzufügen, müssen Sie:

1. Sicherstellen, dass Sie ein [GitHub](https://github.com/)-Konto haben.
2. Das MDN-Content-Repository forken, einen neuen Branch erstellen, um Ihre Änderungen zu enthalten, und das Repository lokal klonen.
3. Ihren neuen Branch auschecken, bevor Sie mit der Arbeit beginnen, und sicherstellen, dass Sie die Änderungen nach Beendigung darauf pushen.
4. Einen Pull-Request erstellen, damit das MDN-Team Ihre Arbeit überprüfen kann und gegebenenfalls Änderungen anfordern kann.

Die Datei `GroupData.json` befindet sich im Verzeichnis `files/jsondata/`.
Wenn Sie sie betrachten, werden Sie eine große JSON-Struktur sehen, wobei jede API ihr eigenes Element hat.
Der Name ist der API-Name, und der Wert ist ein Objekt, das mehrere Untermember enthält, die die zu erstellenden Seitenleisten-Links definieren.

Sehen Sie sich zum Beispiel die Seite der [Fetch API](/de/docs/Web/API/Fetch_API) auf MDN an.
Der entsprechende Eintrag in `GroupData.json` sieht folgendermaßen aus:

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

Wie Sie sehen, haben wir "Fetch API" für den Namen verwendet und innerhalb des Objektwertes eine Reihe von Untermembern eingefügt.

#### Untermember, die in einen GroupData-Eintrag aufgenommen werden können

Dieser Abschnitt listet alle Untermember auf, die Sie in einen `GroupData`-Eintrag aufnehmen könnten.

Beachten Sie, dass die meisten der in den angegebenen Untermembern enthaltenen Werte sowohl dem Linktext entsprechen als auch Slugs sind, die an das Ende der Haupt-API-Indexseite angehängt werden — `https://developer.mozilla.org/<language-code>/docs/Web/API` — um die endgültige URL für den angezeigten Link zu erstellen.
Zum Beispiel wird "Response" dazu führen, dass ein Link so erstellt wird:

```html
<li><a href="/de/docs/Web/API/Response">Response</a></li>
```

Es gibt einige Ausnahmen.
Zum Beispiel enthält der "guides"-Untermember die URLs, die auf zugehörige Anleitungen/Tutorials verweisen.
In diesem Fall werden die URLs ans Ende des MDN-Dokumentenstamms angehängt — `https://developer.mozilla.org/<language-code>` — sodass ein Artikel überall auf MDN aufgenommen werden kann.

Hier sind die verfügbaren Members.
Diese sind alle technisch optional, aber es wird dringend empfohlen, dass Sie diese stattdessen mit leeren Arrays einschließen, anstatt sie wegzulassen.

1. `"overview"` — der Wert ist ein Array, in dem Sie den Slug der API-Übersichtsseite einschließen, falls vorhanden.
   "Fetch API" führt dazu, dass ein Link zu [https://developer.mozilla.org/de/docs/Web/API/Fetch_API](/de/docs/Web/API/Fetch_API) erstellt wird.
2. `"interfaces"` — der Wert ist ein Array, in dem Sie alle Schnittstellen auflisten sollten, die Teil dieser API sind.
   "Response" führt dazu, dass ein Link zu [https://developer.mozilla.org/de/docs/Web/API/Response](/de/docs/Web/API/Response) erstellt wird.
3. `"methods"` — der Wert ist ein Array, das alle Methoden enthalten sollte, die die Spezifikation zu Schnittstellen hinzufügt, die mit anderen APIs verbunden sind, wie z. B. Instantiierungsmethoden, die auf {{domxref("Navigator")}} oder {{domxref("Window")}} erstellt wurden.
   Wenn es eine große Anzahl von Methoden gibt, möchten Sie möglicherweise nur die beliebtesten auflisten oder diese zuerst in der Liste aufführen.
   "fetch()" führt dazu, dass ein Link zu [https://developer.mozilla.org/de/docs/Web/API/fetch](/de/docs/Web/API/Window/fetch) erstellt wird.
   Listen Sie _keine_ Methoden auf, die Member von Schnittstellen sind, die von derselben API verwaltet werden.
4. `"properties"` — der Wert ist ein Array, das alle Eigenschaften enthalten sollte, die mit der API verbunden sind.
   Dies kann Eigenschaften umfassen, die Mitglieder von Schnittstellen sind, die in der API-Spezifikation definiert sind, und Eigenschaften, die die API auf anderen Schnittstellen definiert.
   Wenn es eine große Anzahl von Eigenschaften gibt, möchten Sie möglicherweise nur die beliebtesten auflisten oder diese zuerst in der Liste aufführen.
   "Headers.append" führt dazu, dass ein Link zu [https://developer.mozilla.org/de/docs/Web/API/Headers/append](/de/docs/Web/API/Headers/append) erstellt wird.
5. `"events"` — der Wert ist ein Array, das den _Titel_ von Ereignissen enthalten sollte, die Teil der API sind, aber in Schnittstellen definiert sind, die _nicht_ Teil der API sind (Ereignisse, die zu Schnittstellen in der API gehören (`interfaces`), werden standardmäßig dokumentiert).
   Wenn es eine große Anzahl von Ereignissen gibt, möchten Sie möglicherweise nur die beliebtesten auflisten oder diese zuerst in der Liste aufführen.
   Zum Beispiel ist `"Document: selectionchange"` Teil der [Selection API](/de/docs/Web/API/Selection_API), aber `Document` nicht, daher fügen wir das Ereignis dem Array hinzu und es wird vom Thema [Selection API](/de/docs/Web/API/Selection_API) verlinkt.
6. `"guides"` — der Wert ist ein Array aus Strings, von denen jeder ein Leitfaden-Thema anspricht, das erklärt, wie man die API verwendet.
   Die Strings enthalten den Teil der URL-Adresse des Leitfadens nach dem Sprachpfad: also den `/docs/...`-Teil der Leitfaden-URL.
   Zum Beispiel, um auf das Thema "Using Fetch" unter `https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch` zu verlinken, würde das Array der Leitfäden "/docs/Web/API/Fetch_API/Using_Fetch" enthalten.
7. `"dictionaries"` — ein Array von Strings, die alle Wörterbücher auflisten, die Teil der API sind.
   Im Allgemeinen sollten nur Wörterbücher aufgelistet werden, die von mehr als einer Eigenschaft oder Methode verwendet werden, es sei denn, sie sind von besonderer Bedeutung oder müssen wahrscheinlich von mehreren Seiten aus referenziert werden.
   "CryptoKeyPair" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/CryptoKeyPair](/de/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN geht weg vom separaten Dokumentieren von Wörterbüchern.
   > Wo möglich, werden diese jetzt als Objekte in den Stellen beschrieben, an denen sie verwendet werden.
8. `"types"` — ein Array von Typdefinitionen und Enumerationstypen, die von der API definiert werden.
   Sie können sich dafür entscheiden, nur diejenigen aufzulisten, die von besonderer Bedeutung sind oder von mehreren Seiten referenziert werden, um die Liste kurz zu halten.
   > [!NOTE]
   > MDN geht weg vom separaten Dokumentieren von Typdefinitionen.
   > Wo möglich, werden diese jetzt als Werte in den Stellen beschrieben, an denen sie verwendet werden.
9. `"callbacks"` — der Wert ist ein Array, das eine Liste aller definierten Rückruftypen für die API enthält.
   Sie könnten feststellen, dass es nicht notwendig ist, diese Gruppe überhaupt zu verwenden, selbst bei APIs, die Rückruftypen enthalten, da oft keine getrennte Dokumentation sinnvoll ist.

## Von Seitenleisten verwendete Tags

Einige Untermember werden automatisch von Unterseiten entdeckt, basierend auf Seitentags.
Die Seiten unter der obersten Ebene der API werden jedes Mal durchsucht, wenn die Seitenleiste gerendert wird, und Einträge werden automatisch für Methoden ("Method"-Tag), Eigenschaften ("Property"-Tag) und Konstruktoren ("Constructor"-Tag) erstellt.

Untermember werden automatisch mit Warnsymbolen basierend auf Tags dekoriert.
Dekorationen werden für experimentelle ("Experimental"-Tag), nicht-standarisierte ("Non Standard" oder "Non-standard"-Tag) oder veraltete ("Deprecated"-Tag) Untermember hinzugefügt.

Weitere Informationen zur tagbasierten Verarbeitung sind [im APIRef-Quellcode](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) verfügbar.

## Einfügen der Seitenleiste

Sobald Sie einen Eintrag für Ihre API in `GroupData.json` hinzugefügt, diesen als Pull-Request eingereicht und die Änderung in das Haupt-Repository übernommen haben, können Sie ihn in Ihre API-Referenzseiten mit dem Makro [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) einfügen, das den Namen verwendet, den Sie für Ihre API in GroupData als Parameter verwendet haben.
Ein Beispiel: Die Seitenleiste der [WebVR API](/de/docs/Web/API/WebVR_API) wird in ihren Seiten mit folgendem Code eingefügt:

```plain
\{{APIRef("WebVR API")}}
```

---
title: API-Referenz-Sidebars
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Sie können eine benutzerdefinierte Sidebar auf API-Referenzseiten einfügen, sodass Links zu verwandten Interfaces, Tutorials und anderen Ressourcen angezeigt werden, die nur für diese API relevant sind. Dieser Artikel erklärt, wie.

## Erstellen einer Sidebar

Um Ihre API-Sidebar zu erstellen, müssen Sie die folgenden drei Schritte ausführen:

1. Erstellen Sie Ihre API-Referenzseiten.
2. Fügen Sie einen Eintrag für Ihre spezielle API in die Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ein.
3. Verwenden Sie das [`APIRef`](https://github.com/mdn/rari-doc/src/templ/templs/api_list_specs.rs) Makro, um die Sidebar auf jeder Seite einzufügen, auf der sie angezeigt werden soll.

Lassen Sie uns jeden dieser Schritte der Reihe nach durchgehen. Das Beispiel, auf das wir in diesem Artikel verweisen, ist die [Fetch API](/de/docs/Web/API/Fetch_API).

### Hinzufügen eines Eintrags zu GroupData.json

Die Datei `GroupData.json` enthält alle Daten darüber, welche Links in API-Referenz-Sidebars erscheinen sollen. Bei Aufruf nimmt das `APIRef` Makro einen als Parameter angegebenen API-Namen, sucht diesen Namen in `GroupData.json`, erstellt eine entsprechende Sidebar und fügt sie in die Seite ein.

Um einen Eintrag zu `GroupData.json` hinzuzufügen, müssen Sie:

1. Stellen Sie sicher, dass Sie ein [GitHub](https://github.com/) Konto haben.
2. Forken Sie das MDN-Content-Repo, erstellen Sie einen neuen Branch, um Ihre Änderungen zu enthalten, und klonen Sie das Repo lokal.
3. Wechseln Sie auf Ihren neuen Branch, bevor Sie mit der Arbeit beginnen, und stellen Sie sicher, dass Sie die Änderungen nach Fertigstellung dorthin pushen.
4. Erstellen Sie einen Pull-Request, damit das MDN-Team Ihre Arbeit überprüfen und bei Bedarf Änderungen anfordern kann.

Die Datei `GroupData.json` befindet sich im Verzeichnis `files/jsondata/`. Wenn Sie sich diese ansehen, werden Sie eine riesige JSON-Struktur sehen, wobei jede API ihr eigenes Mitglied hat. Der Name ist der API-Name, und der Wert ist ein Objekt, das mehrere Untermembers enthält, die die zu erstellenden Sidebar-Links definieren.

Zum Beispiel sieht der entsprechende Eintrag in `GroupData.json` für die Seite der [Fetch API](/de/docs/Web/API/Fetch_API) auf MDN folgendermaßen aus:

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

Wie Sie sehen, haben wir "Fetch API" als Namen verwendet, und innerhalb des Objektwerts haben wir eine Reihe von Untermembers eingefügt.

#### Untermembers, die in einen GroupData-Eintrag aufgenommen werden sollen

Dieser Abschnitt listet alle Untermember, die Sie in einen `GroupData`-Eintrag aufnehmen könnten.

Beachten Sie, dass die meisten der in den aufgeführten Untermembers enthaltenen Werte sowohl dem Linktext als auch den Slugs entsprechen, die an das Ende der Haupt-API-Indexseite angehängt werden — `https://developer.mozilla.org/\<language-code\>/docs/Web/API` — um die endgültige URL für den angezeigten Link zu erstellen. Zum Beispiel wird "Response" zu einem Link wie folgt:

```html
<li><a href="/en-US/docs/Web/API/Response">Response</a></li>
```

Es gibt ein paar Ausnahmen. Zum Beispiel enthält das "guides"-Untermember die URLs, die auf zugehörige Leitfäden/Tutorials verweisen. In diesem Fall werden die URLs an das Ende des MDN-Dokumentationsstamms — `https://developer.mozilla.org/\<language-code\>` — angehängt und ermöglichen es, einen Artikel irgendwo auf MDN einzuschließen.

Hier sind die verfügbaren Members. Diese sind technisch alle optional, aber es wird dringend empfohlen, dass Sie sie anstatt sie auszulassen, leere Arrays einfügen.

1. `"overview"` — der Wert ist ein Array, in dem Sie den Slug der API-Übersichtsseite einfügen, falls vorhanden. "Fetch API" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Fetch_API](/de/docs/Web/API/Fetch_API).
2. `"interfaces"` — der Wert ist ein Array, in dem Sie alle Interfaces auflisten sollten, die Teil dieser API sind. "Response" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Response](/de/docs/Web/API/Response).
3. `"methods"` — der Wert ist ein Array, das alle Methoden enthalten sollte, die die Spezifikation zu Interfaces in Verbindung mit anderen APIs hinzufügt, wie beispielsweise Initialisierungsmethoden, die auf [`Navigator`](/de/docs/Web/API/Navigator) oder [`Window`](/de/docs/Web/API/Window) erstellt wurden. Wenn es eine große Anzahl von Methoden gibt, sollten Sie möglicherweise nur die beliebtesten auflisten oder sie zuerst in der Liste platzieren. "fetch()" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/fetch](/de/docs/Web/API/Window/fetch). Listen Sie _nicht_ Methoden auf, die Mitglieder von Interfaces sind, die von derselben API verwaltet werden.
4. `"properties"` — der Wert ist ein Array, das alle mit der API verbundenen Eigenschaften enthalten sollte. Dies kann Eigenschaften umfassen, die Mitglieder von Interfaces sind, die in der API-Spezifikation definiert sind, und Eigenschaften, die die API auf anderen Interfaces definiert. Wenn es eine große Anzahl von Eigenschaften gibt, sollten Sie möglicherweise nur die beliebtesten auflisten oder sie zuerst in der Liste platzieren. "Headers.append" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Headers/append](/de/docs/Web/API/Headers/append).
5. `"events"` — der Wert ist ein Array, das die _Titel_ von Ereignissen enthalten sollte, die Teil der API sind, aber in Interfaces definiert sind, die _nicht_ Teil der API sind (Ereignisse, die zu Interfaces in der API (`interfaces`) gehören, werden standardmäßig dokumentiert). Wenn es eine große Anzahl von Ereignissen gibt, sollten Sie möglicherweise nur die beliebtesten auflisten oder sie zuerst in der Liste platzieren. Zum Beispiel gehört `"Document: selectionchange"` zur [Selection API](/de/docs/Web/API/Selection_API), aber `Document` nicht, also fügen wir das Ereignis dem Array hinzu und es wird vom Thema [Selection API](/de/docs/Web/API/Selection_API) aus verlinkt.
6. `"guides"` — der Wert ist ein Array von Zeichenfolgen, von denen jede ein Leitfaden-Thema anspricht, das erklärt, wie die API zu verwenden ist. Die Zeichenfolgen enthalten den Teil der Leitfaden-URL-Adresse nach dem Sprachpfad: also den `/docs/...` Teil der Leitfaden-URL. Zum Beispiel, um auf das Thema "Using Fetch" unter `https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch` zu verlinken, würde das Leitfaden-Array "/docs/Web/API/Fetch_API/Using_Fetch" enthalten.
7. `"dictionaries"` — ein Array von Zeichenfolgen, das alle Wörterbücher auflistet, die Teil der API sind. Im Allgemeinen sollten hier nur Wörterbücher aufgelistet werden, die von mehr als einer Eigenschaft oder Methode verwendet werden, es sei denn, sie sind von besonderer Bedeutung oder müssen wahrscheinlich von mehreren Seiten referenziert werden. "CryptoKeyPair" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/CryptoKeyPair](/de/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN bewegt sich weg von der getrennten Dokumentation von Wörterbüchern.
   > Wo möglich, werden diese nun als Objekte in den Kontexten beschrieben, in denen sie verwendet werden.
8. `"types"` — ein Array von `typedefs` und aufgezählten Typen, die von der API definiert werden. Sie können wählen, nur diejenigen aufzulisten, die von besonderer Bedeutung sind oder von mehreren Seiten referenziert werden, um die Liste kurz zu halten.
   > [!NOTE]
   > MDN bewegt sich weg von der getrennten Dokumentation von `typedefs`.
   > Wo möglich, werden diese nun als Werte in den Kontexten beschrieben, in denen sie verwendet werden.
9. `"callbacks"` — der Wert ist ein Array, das eine Liste aller definierten Rückruftypen für die API enthält. Sie könnten es für überflüssig halten, diese Gruppe überhaupt zu nutzen, selbst bei APIs, die Rückruftypen enthalten, da es oft nicht nützlich ist, diese getrennt zu dokumentieren.

## Tags, die von Sidebars verwendet werden

Einige Untermembers werden automatisch von untergeordneten Seiten basierend auf Seitentags entdeckt. Seiten unter der obersten API-Ebene werden jedes Mal durchsucht, wenn die Sidebar gerendert wird, und Einträge werden automatisch für Methoden ("Method"-Tag), Eigenschaften ("Property"-Tag) und Konstruktoren ("Constructor"-Tag) erstellt.

Untermembers werden auch basierend auf Tags automatisch mit Warnsymbolen versehen. Dekorationen werden für experimentell ("Experimental"-Tag), nicht standardisiert ("Non Standard" oder "Non-standard"-Tag) oder veraltet ("Deprecated"-Tag) Untermembers hinzugefügt.

Weitere Informationen zur tagbasierten Verarbeitung sind [in der APIRef-Quelle](https://github.com/mdn/rari-doc/src/templ/templs/api_list_specs.rs) verfügbar.

## Einfügen der Sidebar

Sobald Sie einen Eintrag für Ihre API in `GroupData.json` hinzugefügt, diesen als Pull-Request eingereicht und die Änderung im Haupt-Repo akzeptiert haben, können Sie ihn in Ihren API-Referenzseiten mit dem [`APIRef`](https://github.com/mdn/rari-doc/src/templ/templs/api_list_specs.rs) Makro einfügen, das den Namen, den Sie für Ihre API in GroupData verwendet haben, als Parameter verwendet. Als Beispiel wird die Sidebar der [WebVR API](/de/docs/Web/API/WebVR_API) in ihren Seiten mit dem folgenden eingefügt:

```plain
\{{APIRef("WebVR API")}}
```

---
title: API-Referenz-Seitenleisten
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Sie können eine benutzerdefinierte Seitenleiste auf API-Referenzseiten einfügen, damit Links zu verwandten Schnittstellen, Tutorials und anderen Ressourcen angezeigt werden, die nur für diese API relevant sind. Dieser Artikel erklärt, wie das geht.

## Erstellen einer Seitenleiste

Um Ihre API-Seitenleiste zu erstellen, müssen Sie die folgenden drei Schritte durchführen:

1. Erstellen Sie Ihre API-Referenzseiten.
2. Fügen Sie einen Eintrag für Ihre spezielle API in die Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ein.
3. Verwenden Sie das Makro [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs), um die Seitenleiste in jede Seite einzufügen, auf der Sie angezeigt werden soll.

Lassen Sie uns diese Schritte der Reihe nach durchgehen. Das Beispiel, auf das wir in diesem Artikel Bezug nehmen, ist die [Fetch API](/de/docs/Web/API/Fetch_API).

### Hinzufügen eines Eintrags zu GroupData.json

Die Datei `GroupData.json` enthält alle Daten, die angeben, welche Links in den API-Referenz-Seitenleisten erscheinen sollen. Wenn das `APIRef`-Makro aufgerufen wird, nimmt es einen als Parameter angegebenen API-Namen, sucht diesen Namen in `GroupData.json`, erstellt eine passende Seitenleiste und fügt sie in die Seite ein.

Um einen Eintrag zu `GroupData.json` hinzuzufügen, müssen Sie:

1. Sicherstellen, dass Sie über ein [GitHub](https://github.com/) Konto verfügen.
2. Das MDN-Inhalts-Repository forken, einen neuen Branch erstellen, um Ihre Änderungen zu speichern, und das Repository lokal klonen.
3. Ihren neuen Branch auschecken, bevor Sie mit der Arbeit beginnen, und sicherstellen, dass Sie nach Abschluss der Änderungen diese in den Branch pushen.
4. Einen Pull-Request erstellen, damit das MDN-Team Ihre Arbeit überprüfen und gegebenenfalls Änderungen anfordern kann.

Die Datei `GroupData.json` befindet sich im Verzeichnis `files/jsondata/`.
Wenn Sie sie ansehen, sehen Sie eine große JSON-Struktur, bei der jede API ihr eigenes Mitglied hat.
Der Name ist der API-Name, und der Wert ist ein Objekt, das mehrere Untermembers enthält, die die zu erstellenden Seitenleistenlinks definieren.

Schauen Sie sich zum Beispiel die [Fetch API](/de/docs/Web/API/Fetch_API)-Seite auf MDN an.
Der entsprechende Eintrag in `GroupData.json` sieht so aus:

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

Wie Sie sehen können, haben wir "Fetch API" für den Namen verwendet, und innerhalb des Objektwerts umfassen wir eine Reihe von Untermembers.

#### Untermembers, die in einen GroupData-Eintrag aufgenommen werden sollen

Dieser Abschnitt listet alle Untermembers auf, die Sie in einen `GroupData`-Eintrag aufnehmen könnten.

Beachten Sie, dass die meisten innerhalb der aufgeführten Untermembers enthaltenen Werte sowohl dem Linktext entsprechen als auch den Slugs, die an das Ende der Haupt-API-Indexseite angehängt werden — `https://developer.mozilla.org/<language-code>/docs/Web/API` —, um die endgültige URL für den angezeigten Link zu erstellen. Zum Beispiel wird "Response" zu einem Link wie folgt erstellt:

```html
<li><a href="/en-US/docs/Web/API/Response">Response</a></li>
```

Es gibt ein paar Ausnahmen. Beispielsweise enthält der "guides"-Untermember die URLs, die auf zugehörige Leitfäden/Tutorials verweisen.
In diesem Fall werden die URLs an das Ende des MDN Dokumenten-Roots angehängt — `https://developer.mozilla.org/<language-code>` —, sodass ein Artikel überall auf MDN enthalten sein kann.

Hier sind die verfügbaren Mitglieder. Diese sind alle technisch optional, aber es wird dringend empfohlen, sie anstelle eines Auslassens mit leeren Arrays zu versehen.

1. `"overview"` — der Wert ist ein Array, in dem der slug der API-Übersichtsseite, falls vorhanden, enthalten ist.
   "Fetch API" erstellt einen Link zu [https://developer.mozilla.org/de/docs/Web/API/Fetch_API](/de/docs/Web/API/Fetch_API).
2. `"interfaces"` — der Wert ist ein Array, in dem Sie alle Schnittstellen auflisten sollten, die Teil dieser API sind.
   "Response" erstellt einen Link zu [https://developer.mozilla.org/de/docs/Web/API/Response](/de/docs/Web/API/Response).
3. `"methods"` — der Wert ist ein Array, das alle Methoden enthalten sollte, die die Spezifikation Schnittstellen assoziierten anderen APIs hinzufügt, wie Instanziierungsmethoden, die auf [`Navigator`](/de/docs/Web/API/Navigator) oder [`Window`](/de/docs/Web/API/Window) erstellt wurden.
   Wenn es eine große Anzahl von Methoden gibt, sollten Sie in Betracht ziehen, nur die beliebtesten aufzulisten oder diese zuerst in der Liste aufzuführen.
   "fetch()" erstellt einen Link zu [https://developer.mozilla.org/de/docs/Web/API/fetch](/de/docs/Web/API/Window/fetch).
   Listen _Sie keine_ Methoden auf, die Mitglieder von Schnittstellen sind, die von derselben API verwaltet werden.
4. `"properties"` — der Wert ist ein Array, das alle Eigenschaften enthalten sollte, die mit der API assoziiert sind.
   Dies kann Eigenschaften umfassen, die Mitglieder von Schnittstellen sind, die in der API-Spezifikation definiert sind, und Eigenschaften, die die API auf anderen Schnittstellen definiert.
   Wenn es eine große Anzahl von Eigenschaften gibt, sollten Sie in Betracht ziehen, nur die beliebtesten aufzulisten oder diese zuerst in der Liste aufzuführen.
   "Headers.append" erstellt einen Link zu [https://developer.mozilla.org/de/docs/Web/API/Headers/append](/de/docs/Web/API/Headers/append).
5. `"events"` — der Wert ist ein Array, das den _Titel_ von Ereignissen enthalten sollte, die Teil der API sind, aber in Schnittstellen definiert sind, die _nicht_ Teil der API sind (Ereignisse von Schnittstellen in der API (`interfaces`) werden standardmäßig dokumentiert).
   Wenn es eine große Anzahl von Ereignissen gibt, sollten Sie in Betracht ziehen, nur die beliebtesten aufzulisten oder diese zuerst in der Liste aufzuführen.
   Zum Beispiel ist `"Document: selectionchange"` Teil der [Selection API](/de/docs/Web/API/Selection_API), aber `Document` ist es nicht. Daher fügen wir das Ereignis dem Array hinzu, und es wird vom Thema [Selection API](/de/docs/Web/API/Selection_API) aus verlinkt.
6. `"guides"` — der Wert ist ein Array von Zeichenfolgen, die jeweils ein Leitfaden-Thema ansprechen, das erklärt, wie die API verwendet wird.
   Die Zeichenfolgen enthalten den Teil der URL-Adresse des Leitfadens nach dem Sprachpfad: d.h. den `/docs/...` Teil der Leitfaden-URL.
   Zum Beispiel: Um auf das Thema "Using Fetch" unter `https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch` zu verlinken, würde das Leitfaden-Array "/docs/Web/API/Fetch_API/Using_Fetch" enthalten.
7. `"dictionaries"` — ein Array von Zeichenfolgen, die alle Wörterbücher auflisten, die Teil der API sind.
   Im Allgemeinen sollten nur Wörterbücher aufgelistet werden, die von mehr als einer Eigenschaft oder Methode verwendet werden, es sei denn, sie sind von besonderer Bedeutung oder müssen von mehreren Seiten aus referenziert werden.
   "CryptoKeyPair" erstellt einen Link zu [https://developer.mozilla.org/de/docs/Web/API/CryptoKeyPair](/de/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN entfernt sich von der separaten Dokumentation von Wörterbüchern.
   > Wo möglich, werden sie nun als Objekte in den Bereichen beschrieben, in denen sie verwendet werden.
8. `"types"` — ein Array von Typdeklarationen und Aufzählungstypen, die von der API definiert sind.
   Sie können entscheiden, nur diejenigen aufzulisten, die von besonderer Bedeutung sind oder von mehreren Seiten referenziert werden, um die Liste kurz zu halten.
   > [!NOTE]
   > MDN entfernt sich von der separaten Dokumentation von Typdeklarationen.
   > Wo möglich, werden sie nun als Werte in den Bereichen beschrieben, in denen sie verwendet werden.
9. `"callbacks"` — der Wert ist ein Array, das eine Liste aller definierten Rückruftypen für die API enthält.
   Sie finden es möglicherweise unnötig, diese Gruppe überhaupt zu verwenden, selbst bei APIs, die Rückruftypen enthalten, da sie oft nicht nützlich sind, separat dokumentiert zu werden.

## Tags, die von Seitenleisten verwendet werden

Einige Untermembers werden automatisch von untergeordneten Seiten entdeckt, basierend auf Seitentags. Seiten unter der obersten API-Ebene werden jedes Mal durchforstet, wenn die Seitenleiste gerendert wird, und Einträge werden automatisch für Methoden ("Methode"-Tag), Eigenschaften ("Eigenschaft"-Tag) und Konstruktoren ("Konstruktor"-Tag) erstellt.

Untermembers werden auch automatisch basierend auf Tags mit Warnsymbolen geschmückt. Dekorationen werden für experimentelle ("Experimentell"-Tag), nicht standardisierte ("Nicht Standard" oder "Nicht-standardisiert"-Tag) oder veraltete ("Veraltet"-Tag) Untermembers hinzugefügt.

Weitere Informationen zur tagbasierten Verarbeitung sind [im APIRef-Quellcode](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) verfügbar.

## Einfügen der Seitenleiste

Sobald Sie einen Eintrag für Ihre API in `GroupData.json` hinzugefügt, ihn als Pull-Request eingereicht und die Änderung im Haupt-Repo akzeptiert wurde, können Sie ihn in Ihre API-Referenzseiten mit dem [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) Makro einfügen, das den Namen nimmt, den Sie für Ihre API in GroupData verwendet haben, als Parameter. Zum Beispiel wird die Seitenleiste der [WebVR API](/de/docs/Web/API/WebVR_API) auf ihren Seiten mit folgendem eingeschlossen:

```plain
\{{APIRef("WebVR API")}}
```

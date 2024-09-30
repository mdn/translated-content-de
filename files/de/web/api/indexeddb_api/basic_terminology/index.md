---
title: IndexedDB Hauptmerkmale und grundlegende Terminologie
slug: Web/API/IndexedDB_API/Basic_Terminology
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("IndexedDB")}}

Dieser Artikel beschreibt die Hauptmerkmale von IndexedDB und führt einige wesentliche Begriffe ein, die für das Verständnis der IndexedDB API relevant sind.

Folgende Artikel könnten für Sie ebenfalls nützlich sein:

- Für ein detailliertes Tutorial zur Nutzung der API siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Für die Referenzdokumentation zur IndexedDB API kehren Sie zurück zum Hauptartikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und seinen Unterseiten, die die von IndexedDB verwendeten Objekttypen dokumentieren.
- Für weitere Informationen darüber, wie der Browser Ihre Daten im Hintergrund speichert, lesen Sie [Browser-Speicherquoten und Kündigungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Hauptmerkmale

IndexedDB ist ein Mittel für Sie, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfassenden Abfragefähigkeiten zu erstellen, unabhängig von der Netzwerkverfügbarkeit, können diese Anwendungen sowohl online als auch offline arbeiten. IndexedDB ist nützlich für Anwendungen, die eine große Menge an Daten speichern (zum Beispiel ein Katalog von DVDs in einer Leihbibliothek) und für Anwendungen, die keine dauerhafte Internetverbindung benötigen, um zu funktionieren (z.B. E-Mail-Clients, To-Do-Listen und Notizblöcke).

Mit IndexedDB können Sie Objekte speichern und abrufen, die mit einem "Schlüssel" indiziert sind. Alle Änderungen, die Sie an der Datenbank vornehmen, erfolgen innerhalb von Transaktionen. Wie die meisten Webspeicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Während Sie also auf gespeicherte Daten innerhalb einer Domäne zugreifen können, können Sie nicht auf Daten über verschiedene Domänen hinweg zugreifen.

Wenn Sie Annahmen aus der Arbeit mit anderen Arten von Datenbanken treffen, könnten Sie bei der Arbeit mit IndexedDB überrascht werden. Deshalb sind die folgenden Hauptmerkmale von IndexedDB wichtig zu beachten:

- **IndexedDB-Datenbanken speichern Schlüssel-Wert-Paare.** Die Werte können komplex strukturierte Objekte sein, und Schlüssel können Eigenschaften dieser Objekte sein. Sie können Indizes erstellen, die jede Eigenschaft der Objekte für schnelle Suchvorgänge sowie sortierte Aufzählungen verwenden. Schlüssel können binäre Objekte sein.
- **IndexedDB basiert auf einem transaktionalen Datenbankmodell.** Alles, was Sie in IndexedDB tun, erfolgt immer im Kontext einer [Transaktion](#transaktion). Die IndexedDB API bietet viele Objekte, die Indizes, Tabellen, Cursor usw. darstellen, aber jedes davon ist an eine bestimmte Transaktion gebunden. Sie können daher keine Befehle ausführen oder Cursor außerhalb einer Transaktion öffnen. Transaktionen haben eine klar definierte Lebensdauer, sodass der Versuch, eine Transaktion zu verwenden, nachdem sie abgeschlossen wurde, Ausnahmen auslöst. Außerdem werden Transaktionen automatisch abgeschlossen, wenn keine neuen Anfragen gestellt werden, solange die Transaktion aktiv ist.

  Dieses Transaktionsmodell ist äußerst nützlich, wenn Sie bedenken, was passieren könnte, wenn ein Benutzer zwei Instanzen Ihrer Web-App gleichzeitig in zwei verschiedenen Tabs öffnet. Ohne transaktionale Operationen könnten die beiden Instanzen sich gegenseitig bei ihren Änderungen stören. Wenn Sie mit Transaktionen in einer Datenbank nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Transaktionen](https://en.wikipedia.org/wiki/Database_transaction). Siehe auch [Transaktion](#transaktion) im Abschnitt Definitionen.

- **Die IndexedDB API ist größtenteils asynchron.** Die API gibt Ihnen keine Daten durch Rückgabe von Werten; stattdessen müssen Sie eine Callback-Funktion übergeben. Sie "speichern" einen Wert nicht in der Datenbank oder "rufen" einen Wert aus der Datenbank durch synchrone Mittel ab. Stattdessen "fordern" Sie an, dass eine Datenbankoperation durchgeführt wird. Sie werden durch ein DOM-Ereignis benachrichtigt, sobald die Operation abgeschlossen ist, und der Ereignistyp teilt Ihnen mit, ob die Operation erfolgreich war oder fehlgeschlagen ist.
- **IndexedDB verwendet viele Anfragen.** Anfragen sind Objekte, die die zuvor erwähnten Erfolg- oder Fehlereignisse empfangen. Sie haben `onsuccess`- und `onerror`-Eigenschaften, und Sie können `addEventListener()` und `removeEventListener()` auf ihnen aufrufen. Sie haben auch die Eigenschaften `readyState`, `result` und `errorCode`, die Ihnen den Status der Anfrage mitteilen. Die `result`-Eigenschaft ist besonders magisch, da sie viele verschiedene Dinge sein kann, abhängig davon, wie die Anfrage generiert wurde (z.B. eine `IDBCursor`-Instanz oder der Schlüssel für einen gerade in die Datenbank eingefügten Wert).
- **IndexedDB verwendet DOM-Ereignisse, um Sie zu benachrichtigen, wenn Ergebnisse verfügbar sind.** DOM-Ereignisse haben immer eine `type`-Eigenschaft (bei IndexedDB wird diese am häufigsten auf `"success"` oder `"error"` gesetzt). DOM-Ereignisse haben auch eine `target`-Eigenschaft, die angibt, wohin das Ereignis geleitet wird. In den meisten Fällen ist das `target` eines Ereignisses das `IDBRequest`-Objekt, das als Ergebnis einer Datenbankoperation generiert wurde. Erfolgsmeldungen blubbern nicht auf und können nicht abgebrochen werden. Fehlerereignisse blubbern hingegen auf und können abgebrochen werden. Das ist ziemlich wichtig, da Fehlerereignisse alle in derselben Transaktion ausgeführten Transaktionen abbrechen, es sei denn, sie werden abgebrochen.
- **IndexedDB ist objektorientiert.** IndexedDB ist keine relationale Datenbank mit Tabellen, die Sammlungen von Zeilen und Spalten darstellen. Dieser wichtige und grundlegende Unterschied beeinflusst, wie Sie Ihre Anwendungen entwerfen und bauen.

  In einem traditionellen relationalen Datenspeicher hätten Sie eine Tabelle, die eine Sammlung von Datenzeilen und Spalten von benannten Datentypen speichert. IndexedDB hingegen erfordert, dass Sie einen Objektspeicher für einen Datentyp erstellen und JavaScript-Objekte in diesem Speicher persistieren. Jeder Objektspeicher kann eine Sammlung von Indizes enthalten, die es effizient machen, Abfragen und Iterationen durchzuführen. Wenn Sie mit objektorientierten Datenbankverwaltungssystemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Objektdatenbanken](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB verwendet keine strukturierte Abfragesprache (SQL).** Es verwendet Abfragen zu einem Index, der einen Cursor erzeugt, mit dem Sie den Ergebnissatz durchlaufen können. Wenn Sie mit NoSQL-Systemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB hält sich an eine Same-Origin-Policy.** Ein Origin ist die Domäne, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jedes Origin hat seinen eigenen zugeordneten Satz von Datenbanken. Jede Datenbank hat einen Namen, der sie innerhalb eines Origins identifiziert.

  Die Sicherheitsbarriere, die auf IndexedDB auferlegt wird, verhindert, dass Anwendungen auf Daten mit einem anderen Origin zugreifen. Zum Beispiel kann eine App oder eine Seite unter `http://www.example.com/app/` Daten von `http://www.example.com/dir/` abrufen, da sie denselben Origin haben, sie kann jedoch keine Daten von `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll) abrufen, da sie unterschiedliche Origins haben.

  > [!NOTE]
  > Dritte Fensterinhalte (z.B. <iframe>-Inhalte) können auf den IndexedDB-Speicher für den Origin zugreifen, in den sie eingebettet sind, es sei denn, der Browser ist so eingestellt, dass [niemals Drittanbieter-Cookies akzeptiert werden](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

### Einschränkungen

IndexedDB ist so konzipiert, dass es die meisten Fälle abdeckt, die clientseitigen Speicher benötigen. Es ist jedoch nicht für einige Fälle wie die folgenden konzipiert:

- Internationalisierte Sortierung. Nicht alle Sprachen sortieren Zeichenfolgen auf dieselbe Weise, daher wird internationalisierte Sortierung nicht unterstützt. Während die Datenbank Daten nicht in einer spezifischen internationalisierten Reihenfolge speichern kann, können Sie die Daten, die Sie aus der Datenbank gelesen haben, selbst sortieren.
- Synchronisierung. Die API ist nicht darauf ausgelegt, die Synchronisierung mit einer serverseitigen Datenbank zu übernehmen. Sie müssen Code schreiben, der eine clientseitige indexedDB-Datenbank mit einer serverseitigen Datenbank synchronisiert.
- Volltextsuche. Die API hat kein Äquivalent des `LIKE`-Operators in SQL.

Darüber hinaus sollten Sie sich bewusst sein, dass Browser die Datenbank in den folgenden Bedingungen löschen können:

- Der Benutzer fordert eine Löschung an. Viele Browser haben Einstellungen, die es Benutzern erlauben, alle für eine bestimmte Website gespeicherten Daten zu löschen, einschließlich Cookies, Lesezeichen, gespeicherte Passwörter und IndexedDB-Daten.
- Der Browser ist im privaten Browsing-Modus. Einige Browser haben einen "Privaten Modus" (Firefox) oder "Inkognito-Modus" (Chrome). Am Ende der Sitzung löscht der Browser die Datenbank.
- Das Festplatten- oder Quotalimit wurde erreicht.
- Die Daten sind beschädigt.
- Eine inkompatible Änderung wird an der Funktion vorgenommen.

Die genauen Umstände und Browserfunktionen ändern sich im Laufe der Zeit, aber die allgemeine Philosophie der Browseranbieter ist es, das bestmögliche Bemühen zu unternehmen, um die Daten zu erhalten, wenn möglich.

## Wichtige Terminologie

Dieser Abschnitt definiert und erklärt die zentrale Terminologie, die für das Verständnis der IndexedDB API relevant ist.

### Datenbank

#### Datenbank

Ein Informationsspeicher, der typischerweise aus einem oder mehreren [Objektspeichern](#objektspeicher) besteht. Jede Datenbank muss Folgendes haben:

- Name. Dies identifiziert die Datenbank innerhalb einer bestimmten Herkunft und bleibt während ihrer gesamten Lebensdauer konstant. Der Name kann ein beliebiger Zeichenfolgewert sein (einschließlich einer leeren Zeichenfolge).
- Aktuelle [Version](#version). Wenn eine Datenbank zuerst erstellt wird, ist ihre Version die Ganzzahl 1, sofern nicht anders angegeben. Jede Datenbank kann zu einem beliebigen Zeitpunkt nur eine Version haben.

#### Datenbankverbindung

Eine Operation, die durch das Öffnen einer [Datenbank](#datenbank) erstellt wird. Eine gegebene Datenbank kann gleichzeitig mehrere Verbindungen haben.

#### langlebig

In Firefox war IndexedDB früher **langlebig**, was bedeutete, dass in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst wurde, wenn alle Daten garantiert auf die Festplatte geschrieben wurden.

Seit Firefox 40 haben IndexedDB-Transaktionen gelockerte Haltbarkeitsgarantien, um die Leistung zu steigern (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)), was dem Verhalten anderer Browser, die IndexedDB unterstützen, entspricht. In diesem Fall wird das [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis ausgelöst, nachdem das Betriebssystem angewiesen wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das Ereignis kann somit schneller als zuvor geliefert werden, jedoch besteht ein kleines Risiko, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es vor dem Schreiben der Daten zu einem Stromausfall kommt. Da solche katastrophalen Ereignisse selten sind, müssen sich die meisten Verbraucher nicht weiter damit befassen.

> [!NOTE]
> In Firefox können Sie, wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen möchten (z.B. weil Sie kritische Daten speichern, die später nicht mehr berechnet werden können), eine Transaktion erzwingen, auf die Festplatte zu schreiben, bevor das `complete`-Ereignis ausgeliefert wird, indem Sie eine Transaktion mit dem experimentellen (nicht standardisierten) Modus `readwriteflush` erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)). Dies ist derzeit experimentell und kann nur verwendet werden, wenn die `dom.indexedDB.experimental`-Präferenz in `about:config` auf `true` gesetzt ist.

#### Index

Ein Index ist ein spezialisierter Objektspeicher, um Datensätze in einem anderen Objektspeicher, dem _referenzierten Objektspeicher_, nachzuschlagen. Der Index ist ein beständiger Schlüssel-Wert-Speicher, in dem der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes in dem referenzierten Objektspeicher ist. Die Datensätze in einem Index werden automatisch gefüllt, wenn Datensätze im referenzierten Objektspeicher eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann nur auf einen Datensatz in seinem referenzierten Objektspeicher verweisen, aber mehrere Indizes können denselben Objektspeicher referenzieren. Wenn sich der Objektspeicher ändert, werden alle Indizes, die auf den Objektspeicher verweisen, automatisch aktualisiert.

Alternativ können Sie auch Datensätze in einem Objektspeicher mit dem [Schlüssel](#schlüssel) nachschlagen.

Um mehr über die Verwendung von Indizes zu erfahren, siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Für die Referenzdokumentation zu Indexen, siehe [IDBKeyRange](/de/docs/Web/API/IDBKeyRange).

#### Objektspeicher

Der Mechanismus, durch den Daten in der Datenbank gespeichert werden. Der Objektspeicher hält dauerhaft Datensätze, die Schlüssel-Wert-Paare sind. Datensätze innerhalb eines Objektspeichers werden gemäß der _[Schlüssel](#schlüssel)_ in aufsteigender Reihenfolge sortiert.

Jeder Objektspeicher muss einen Namen haben, der innerhalb seiner Datenbank eindeutig ist. Der Objektspeicher kann optional einen _[Schlüsselgenerator](#schlüsselgenerator)_ und einen _[Schlüsselpfad](#schlüsselpfad)_ haben. Wenn der Objektspeicher einen Schlüsselpfad hat, verwendet er _[inline-Schlüssel](#inline-schlüssel)_; andernfalls verwendet er _[out-of-line-Schlüssel](#out-of-line-schlüssel)_.

Für die Referenzdokumentation zu Objektspeichern, siehe [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

#### Anfrage

Der Vorgang, durch den Lese- und Schreibvorgänge auf einer Datenbank durchgeführt werden. Jede Anfrage repräsentiert eine Lese- oder Schreiboperation.

#### Transaktion

Ein atomarer Satz von Datenzugriffs- und Datenänderungsoperationen in einer bestimmten Datenbank. So interagieren Sie mit den Daten in einer Datenbank. Tatsächlich müssen alle Lese- oder Änderungsaktionen in der Datenbank innerhalb einer Transaktion stattfinden.

Eine Datenbankverbindung kann gleichzeitig mehrere aktive Transaktionen haben, solange die schreibenden Transaktionen keine sich überschneidenden [_Gültigkeitsbereiche_](#gültigkeitsbereich) haben. Der Gültigkeitsbereich von Transaktionen, der bei der Erstellung definiert wird, bestimmt, mit welchen Objektspeichern die Transaktion interagieren kann und bleibt während der Lebensdauer der Transaktion konstant. Wenn beispielsweise eine Datenbankverbindung bereits eine Schreibtransaktion mit einem Gültigkeitsbereich hat, der nur den `flyingMonkey`-Objektspeicher umfasst, können Sie eine zweite Transaktion mit einem Gültigkeitsbereich der Objektspeicher `unicornCentaur` und `unicornPegasus` starten. Bei Lesetransaktionen können Sie mehrere - sogar überschneidende - haben.

Transaktionen sollen kurzlebig sein, daher kann der Browser eine Transaktion beenden, die zu lange dauert, um Speicherressourcen freizugeben, die die langlaufende Transaktion gesperrt hat. Sie können die Transaktion abbrechen, wodurch die in der Transaktion an der Datenbank vorgenommenen Änderungen zurückgesetzt werden. Und Sie müssen nicht einmal warten, bis die Transaktion gestartet ist oder aktiv ist, um sie abzubrechen.

Die drei Modi von Transaktionen sind: `readwrite`, `readonly` und `versionchange`. Der einzige Weg, Objektspeicher und Indizes zu erstellen und zu löschen, ist die Verwendung einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion. Um mehr über Transaktionstypen zu erfahren, sehen Sie sich den Referenzartikel zu [IndexedDB](/de/docs/Web/API/IndexedDB_API) an.

Da alles innerhalb einer Transaktion stattfindet, ist es ein sehr wichtiges Konzept in IndexedDB. Um mehr über Transaktionen zu erfahren, insbesondere darüber, wie sie sich auf die Versionsverwaltung beziehen, siehe [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), das auch Referenzdokumentation enthält.

#### Version

Wenn eine Datenbank zuerst erstellt wird, ist ihre Version die Ganzzahl 1. Jede Datenbank hat zu einem Zeitpunkt nur eine Version; eine Datenbank kann nicht in mehreren Versionen gleichzeitig existieren. Die einzige Möglichkeit, die Version zu ändern, besteht darin, sie mit einer höheren Version als der aktuellen Version zu öffnen.

### Schlüssel und Wert

#### Inline-Schlüssel

Ein Schlüssel, der als Teil des gespeicherten Wertes gespeichert ist. Er wird unter Verwendung eines Schlüsselpfads gefunden. Ein inline-Schlüssel kann mit einem Generator erzeugt werden. Nachdem der Schlüssel generiert wurde, kann er dann im Wert mit dem Schlüsselpfad gespeichert werden oder er kann auch als Schlüssel verwendet werden.

#### Schlüssel

Ein Datenwert, nach dem gespeicherte Werte im Objektspeicher organisiert und abgerufen werden. Der Objektspeicher kann den Schlüssel aus einer von drei Quellen ableiten: einem _[Schlüsselgenerator](#schlüsselgenerator)_, einem _[Schlüsselpfad](#schlüsselpfad)_ oder einem explizit angegebenen Wert. Der Schlüssel muss von einem Datentyp sein, der eine Zahl hat, die größer ist als die vorherige Zahl. Jeder Datensatz in einem Objektspeicher muss einen Schlüssel haben, der innerhalb desselben Speichers eindeutig ist, sodass Sie in einem bestimmten Objektspeicher keine mehrfachen Datensätze mit demselben Schlüssel haben können.

Ein Schlüssel kann einer der folgenden Typen sein: [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), float, ein binärer Blob und [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Arrays kann der Schlüssel von einem leeren Wert bis unendlich reichen. Und Sie können ein Array in ein anderes Array einfügen.

Alternativ können Sie auch Datensätze in einem Objektspeicher mit dem _[Index](#index)_ nachschlagen.

#### Schlüsselgenerator

Ein Mechanismus, um neue Schlüssel in einer geordneten Sequenz zu erzeugen. Wenn ein Objektspeicher keinen Schlüsselgenerator hat, muss die Anwendung Schlüssel für Datensätze bereitstellen, die gespeichert werden. Generatoren werden nicht zwischen Speichern geteilt. Dies ist eher ein Browser-Implementierungsdetail, weil Sie in der Webentwicklung nicht wirklich Schlüsselgeneratoren erstellen oder darauf zugreifen.

#### Schlüsselpfad

Definiert, woher der Browser den Schlüssel im Objektspeicher oder Index extrahieren soll. Ein gültiger Schlüsselpfad kann eine der folgenden Möglichkeiten umfassen: eine leere Zeichenfolge, ein JavaScript-Identifier oder mehrere durch Punkte getrennte JavaScript-Identifier oder ein Array, das eine dieser Möglichkeiten enthält. Er kann keine Leerzeichen enthalten.

#### Out-of-Line-Schlüssel

Ein Schlüssel, der separat von dem gespeicherten Wert gespeichert wird.

#### Wert

Jeder Datensatz hat einen Wert, der alles enthalten kann, was in JavaScript ausgedrückt werden kann, einschließlich [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und null.

Wenn ein Objekt oder ein Array gespeichert wird, können die Eigenschaften und Werte in diesem Objekt oder Array auch alles sein, was ein gültiger Wert ist.

[Blobs](/de/docs/Web/API/Blob) und Dateien können gespeichert werden, siehe [Spezifikation](https://w3c.github.io/IndexedDB/).

### Bereich und Gültigkeitsbereich

#### Cursor

Ein Mechanismus zum Durchlaufen mehrerer Datensätze mit einem _Schlüsselbereich_. Der Cursor hat eine Quelle, die angibt, welche Index oder welcher Objektspeicher durchlaufen wird. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die in aufsteigender oder absteigender Reihenfolge der Datensatzschlüssel liegt. Für die Referenzdokumentation zu Cursorn siehe [`IDBCursor`](/de/docs/Web/API/IDBCursor).

#### Schlüsselbereich

Ein kontinuierliches Intervall über einen Datentyp, der für Schlüssel verwendet wird. Datensätze können aus Objektspeichern und Indizes mit Schlüsseln oder einem Schlüsselbereich abgerufen werden. Sie können den Bereich mithilfe von unteren und oberen Grenzen einschränken oder filtern. Zum Beispiel können Sie über alle Werte eines Schlüssels zwischen x und y iterieren.

Für die Referenzdokumentation zum Schlüsselbereich siehe [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

#### Gültigkeitsbereich

Die Menge der Objektspeicher und Indizes, auf die sich eine Transaktion bezieht. Die Gültigkeitsbereiche von Nur-Lese-Transaktionen können sich überlappen und gleichzeitig ausgeführt werden. Im Gegensatz dazu dürfen sich die Gültigkeitsbereiche von Schreibtransaktionen nicht überlappen. Sie können jedoch mehrere Transaktionen mit demselben Gültigkeitsbereich gleichzeitig starten, aber sie stehen einfach in einer Warteschlange und werden nacheinander ausgeführt.

## Nächste Schritte

Mit einem Verständnis der Hauptmerkmale von IndexedDB und der grundlegenden Terminologie können wir uns konkreteren Dingen zuwenden. Für ein Tutorial, wie Sie die API verwenden, siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Siehe auch

- [Indexed Database API Specification](https://www.w3.org/TR/IndexedDB/)
- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB – Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

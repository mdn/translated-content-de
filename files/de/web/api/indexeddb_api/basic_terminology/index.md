---
title: Schlüsselmerkmale und grundlegende Terminologie von IndexedDB
slug: Web/API/IndexedDB_API/Basic_Terminology
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("IndexedDB")}}

Dieser Artikel beschreibt die Schlüsselmerkmale von IndexedDB und führt einige grundlegende Begriffe ein, die für das Verständnis der IndexedDB-API relevant sind.

Die folgenden Artikel könnten für Sie ebenfalls nützlich sein:

- Für ein detailliertes Tutorial zur Nutzung der API, siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Für die Referenzdokumentation der IndexedDB-API verweisen Sie auf den Hauptartikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten, welche die von IndexedDB verwendeten Objekttypen dokumentieren.
- Für weitere Informationen darüber, wie der Browser die Speicherung Ihrer Daten im Hintergrund handhabt, lesen Sie [Quoten für Browserspeicher und Löschungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Schlüsselmerkmale

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Nutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können diese Anwendungen sowohl online als auch offline funktionieren. IndexedDB ist nützlich für Anwendungen, die eine große Menge an Daten speichern (zum Beispiel ein Katalog von DVDs in einer Leihbibliothek) und Anwendungen, die keine dauerhafte Internetverbindung benötigen, um zu funktionieren (wie E-Mail-Clients, To-Do-Listen und Notizblöcke).

IndexedDB erlaubt es Ihnen, Objekte zu speichern und abzurufen, die mit einem "Schlüssel" indexiert sind. Alle Änderungen, die Sie an der Datenbank vornehmen, erfolgen innerhalb von Transaktionen. Wie die meisten Web-Speicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Während Sie auf gespeicherte Daten innerhalb einer Domain zugreifen können, können Sie nicht auf Daten über verschiedene Domains hinweg zugreifen.

Wenn Sie Annahmen aus der Arbeit mit anderen Arten von Datenbanken haben, könnten Sie bei der Arbeit mit IndexedDB überrascht sein. Daher sind die folgenden Schlüsselmerkmale von IndexedDB wichtig, im Hinterkopf zu behalten:

- **IndexedDB-Datenbanken speichern Schlüssel-Wert-Paare.** Die Werte können komplex strukturierte Objekte sein, und Schlüssel können Eigenschaften dieser Objekte sein. Sie können Indizes erstellen, die jede Eigenschaft der Objekte für schnelles Suchen sowie sortierte Aufzählung verwenden. Schlüssel können binäre Objekte sein.
- **IndexedDB basiert auf einem transaktionalen Datenbankmodell.** Alles, was Sie in IndexedDB tun, geschieht immer im Kontext einer [Transaktion](#transaktion). Die IndexedDB-API bietet viele Objekte, die Indizes, Tabellen, Cursor usw. darstellen, aber jedes von ihnen ist an eine bestimmte Transaktion gebunden. Daher können Sie keine Befehle ausführen oder Cursor außerhalb einer Transaktion öffnen. Transaktionen haben eine klar definierte Lebensdauer, sodass der Versuch, eine Transaktion zu verwenden, nachdem sie abgeschlossen ist, Ausnahmen auslöst. Transaktionen werden auch automatisch abgeschlossen, wenn keine neuen Anfragen gestellt werden, wenn die Transaktion aktiv ist.

  Dieses Transaktionsmodell ist sehr nützlich, wenn Sie bedenken, was passieren könnte, wenn ein Nutzer zwei Instanzen Ihrer Webanwendung gleichzeitig in zwei verschiedenen Tabs öffnet. Ohne transaktionale Operationen könnten sich die beiden Instanzen gegenseitig in ihren Änderungen beeinträchtigen. Wenn Sie mit Transaktionen in einer Datenbank nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Transaktionen](https://en.wikipedia.org/wiki/Database_transaction). Siehe auch [Transaktion](#transaktion) im Abschnitt Definitionen.

- **Die IndexedDB-API ist größtenteils asynchron.** Die API gibt Ihnen keine Daten zurück, indem sie Werte zurückgibt; stattdessen müssen Sie eine Rückruffunktion übergeben. Sie "speichern" keinen Wert in der Datenbank oder "rufen" einen Wert synchron aus der Datenbank ab. Stattdessen "fordern" Sie an, dass eine Datenbankoperation durchgeführt wird. Sie werden durch ein DOM-Ereignis benachrichtigt, wenn die Operation abgeschlossen ist, und die Art des Ereignisses gibt Ihnen an, ob die Operation erfolgreich war oder fehlgeschlagen ist.
- **IndexedDB verwendet viele Anfragen.** Anfragen sind Objekte, die die zuvor erwähnten Erfolgs- oder Fehler-DOM-Ereignisse erhalten. Sie haben `onsuccess`- und `onerror`-Eigenschaften, und Sie können `addEventListener()` und `removeEventListener()` auf ihnen aufrufen. Sie haben auch `readyState`-, `result`- und `errorCode`-Eigenschaften, die Ihnen den Status der Anfrage mitteilen. Die `result`-Eigenschaft ist besonders vielseitig, da sie viele verschiedene Dinge sein kann, je nachdem, wie die Anfrage generiert wurde (zum Beispiel eine `IDBCursor`-Instanz oder der Schlüssel für einen gerade in die Datenbank eingefügten Wert).
- **IndexedDB verwendet DOM-Ereignisse, um Sie zu benachrichtigen, wenn Ergebnisse verfügbar sind.** DOM-Ereignisse haben immer eine `type`-Eigenschaft (in IndexedDB wird sie am häufigsten auf `"success"` oder `"error"` gesetzt). DOM-Ereignisse haben auch eine `target`-Eigenschaft, die angibt, wohin das Ereignis geht. In den meisten Fällen ist das `target` eines Ereignisses das `IDBRequest`-Objekt, das als Ergebnis einer Datenbankoperation generiert wurde. Erfolgsereignisse steigen nicht auf und können nicht abgebrochen werden. Fehlerereignisse hingegen steigen auf und können abgebrochen werden. Dies ist sehr wichtig, da Fehlerereignisse alle Transaktionen abbrechen, in denen sie laufen, es sei denn, sie werden abgebrochen.
- **IndexedDB ist objektorientiert.** IndexedDB ist keine relationale Datenbank mit Tabellen, die Sammlungen von Zeilen und Spalten darstellen. Dieser wichtige und grundlegende Unterschied beeinflusst die Gestaltung und den Aufbau Ihrer Anwendungen.

  In einem traditionellen relationalen Datenspeicher hätten Sie eine Tabelle, die eine Sammlung von Datenzeilen und Spalten von benannten Datentypen speichert. IndexedDB hingegen erfordert, dass Sie einen Objektspeicher für einen Datentyp erstellen und JavaScript-Objekte in diesem Speicher speichern. Jeder Objektspeicher kann eine Sammlung von Indizes haben, die es effizient machen, sie abzufragen und zu durchlaufen. Wenn Sie mit objektorientierten Datenbankmanagementsystemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Objektdatenbanken](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB verwendet keine strukturierte Abfragesprache (SQL).** Es verwendet Abfragen über einen Index, der einen Cursor erzeugt, den Sie verwenden, um durch die Ergebnismenge zu iterieren. Wenn Sie mit NoSQL-Systemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB hält sich an eine Same-Origin-Policy.** Ein Origin ist die Domain, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jedes Origin hat seine eigene zugeordnete Menge von Datenbanken. Jede Datenbank hat einen Namen, der sie innerhalb eines Origins identifiziert.

  Die durch IndexedDB auferlegte Sicherheitsgrenze verhindert, dass Anwendungen auf Daten mit einem anderen Origin zugreifen. Beispielsweise kann eine App oder eine Seite in `http://www.example.com/app/` Daten von `http://www.example.com/dir/` abrufen, da sie dasselbe Origin haben, jedoch keine Daten von `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll) abrufen, da sie verschiedene Origns haben.

  > [!NOTE]
  > Inhalte von Drittanbieterfenstern (z. B. {{htmlelement("iframe")}} Inhalte) können auf den IndexedDB-Speicher für das Origin zugreifen, in das sie eingebettet sind, es sei denn, der Browser ist so eingestellt, dass er [niemals Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

### Einschränkungen

IndexedDB ist so konzipiert, dass es die meisten Fälle abdeckt, die clientseitigen Speicher benötigen. Es ist jedoch nicht für einige Fälle wie die folgenden gedacht:

- Internationalisierte Sortierung. Nicht alle Sprachen sortieren Zeichenfolgen auf die gleiche Weise, daher wird internationalisierte Sortierung nicht unterstützt. Während die Datenbank keine Daten in einer bestimmten internationalisierten Reihenfolge speichern kann, können Sie die Daten, die Sie aus der Datenbank herausgelesen haben, selbst sortieren.
- Synchronisierung. Die API ist nicht darauf ausgelegt, sich mit einer serverseitigen Datenbank zu synchronisieren. Sie müssen selbst Code schreiben, der eine clientseitige IndexedDB-Datenbank mit einer serverseitigen Datenbank synchronisiert.
- Volltextsuche. Die API hat kein Äquivalent zum `LIKE`-Operator in SQL.

Zudem sollten Sie beachten, dass Browser die Datenbank unter bestimmten Bedingungen löschen können, wie zum Beispiel:

- Der Nutzer fordert eine Löschung an. Viele Browser haben Einstellungen, die es den Nutzern ermöglichen, alle für eine gegebene Website gespeicherten Daten zu löschen, einschließlich Cookies, Lesezeichen, gespeicherte Passwörter und IndexedDB-Daten.
- Der Browser befindet sich im Privatmodus. Einige Browser haben "Privates Surfen" (Firefox) oder "Inkognito" (Chrome) Modi. Am Ende der Sitzung löscht der Browser die Datenbank.
- Das Festplatten- oder Quotenlimit ist erreicht.
- Die Daten sind beschädigt.
- Es wird eine inkompatible Änderung am Feature vorgenommen.

Die genauen Umstände und Browser-Fähigkeiten ändern sich im Laufe der Zeit, aber die allgemeine Philosophie der Browser-Anbieter besteht darin, die Daten nach Möglichkeit bestmöglich zu bewahren.

## Grundlegende Terminologie

Dieser Abschnitt definiert und erklärt grundlegende Begriffe, die für das Verständnis der IndexedDB-API relevant sind.

### Datenbank

#### Datenbank

Ein Informationsspeicher, der typischerweise aus einem oder mehreren [_Objektspeichern_](#objektspeicher) besteht. Jede Datenbank muss Folgendes besitzen:

- Name. Dieser identifiziert die Datenbank innerhalb eines spezifischen Origins und bleibt während seiner Lebensdauer konstant. Der Name kann jeden Zeichenfolgenwert annehmen (einschließlich eines leeren Strings).
- Aktuelle [_Version_](#version). Wenn eine Datenbank erstmals erstellt wird, beträgt ihre Version die ganze Zahl 1, wenn nichts anderes angegeben ist. Jede Datenbank kann zu jedem gegebenen Zeitpunkt nur eine Version haben.

#### Datenbankverbindung

Ein Vorgang, der durch das Öffnen einer _[Datenbank](#datenbank)_ erstellt wird. Eine gegebene Datenbank kann gleichzeitig mehrere Verbindungen haben.

#### langlebig

In Firefox war IndexedDB früher **langlebig**, was bedeutet, dass in einer Lese-/Schreibtransaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst wurde, wenn alle Daten garantiert auf die Festplatte geschrieben wurden.

Seit Firefox 40 haben IndexedDB-Transaktionen weniger strenge Garantiebedingungen bzgl. der Langlebigkeit, um die Leistung zu erhöhen (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)), was das gleiche Verhalten wie bei anderen Browsern mit IndexedDB-Unterstützung ist. In diesem Fall wird das [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nach Benachrichtigung des Betriebssystems über das Schreiben der Daten, jedoch potenziell bevor die Daten tatsächlich auf die Festplatte geschrieben wurden, ausgelöst. Das Ereignis kann also schneller als zuvor ausgeliefert werden, jedoch besteht die geringe Möglichkeit, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Verlust der Systemstromversorgung kommt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter damit befassen müssen.

> [!NOTE]
> In Firefox, falls Sie aus irgendeinem Grund Langlebigkeit sicherstellen möchten (z. B. weil Sie kritische Daten speichern, die später nicht erneut berechnet werden können), können Sie eine Transaktion zwingen, auf die Festplatte zu schreiben, bevor das `complete`-Ereignis ausgegeben wird, indem Sie eine Transaktion mithilfe des experimentellen (nicht standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)). Dies befindet sich derzeit in der Experimentierphase und kann nur verwendet werden, wenn die Präferenz `dom.indexedDB.experimental` in `about:config` auf `true` gesetzt ist.

#### Index

Ein Index ist ein spezialisierter Objektspeicher zur Suche von Datensätzen in einem anderen Objektspeicher, dem _referenzierten Objektspeicher_. Der Index ist ein persistenter Schlüssel-Wert-Speicher, bei dem der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes im referenzierten Objektspeicher ist. Die Datensätze in einem Index werden automatisch gefüllt, wann immer Datensätze im referenzierten Objektspeicher eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann nur auf einen Datensatz in seinem referenzierten Objektspeicher verweisen, aber mehrere Indizes können denselben Objektspeicher referenzieren. Wenn sich der Objektspeicher ändert, werden alle Indizes, die den Objektspeicher referenzieren, automatisch aktualisiert.

Alternativ können Sie auch Datensätze in einem Objektspeicher mithilfe des [Schlüssels](#schlüssel) nachschlagen.

Um mehr über die Verwendung von Indizes zu erfahren, siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Für die Referenzdokumentation zum Thema Index siehe [IDBKeyRange](/de/docs/Web/API/IDBKeyRange).

#### Objektspeicher

Der Mechanismus, durch den Daten in der Datenbank gespeichert werden. Der Objektspeicher hält dauerhaft Datensätze, die aus Schlüssel-Wert-Paaren bestehen. Datensätze innerhalb eines Objektspeichers werden in aufsteigender Reihenfolge nach den _[Schlüsseln](#schlüssel)_ sortiert.

Jeder Objektspeicher muss einen Namen haben, der innerhalb seiner Datenbank eindeutig ist. Der Objektspeicher kann optional eine _[Schlüsselerzeugung](#schlüsselerzeuger)_ und einen _[Schlüsselpfad](#schlüsselpfad)_ haben. Wenn der Objektspeicher einen Schlüsselpfad hat, verwendet er _[inline-Schlüssel](#inline-schlüssel)_; andernfalls verwendet er _[out-of-line-Schlüssel](#out-of-line-schlüssel)_.

Für die Referenzdokumentation zum Thema Objektspeicher siehe [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

#### Anfrage

Der Vorgang, durch den Lese- und Schreiboperationen auf einer Datenbank ausgeführt werden. Jede Anfrage stellt eine Lese- oder Schreiboperation dar.

#### Transaktion

Eine atomare Menge von Datenzugriffs- und Datenänderungsoperationen auf einer bestimmten Datenbank. Es ist die Art und Weise, wie Sie mit den Daten in einer Datenbank interagieren. Tatsächlich müssen alle Lese- oder Änderungsoperationen von Daten in der Datenbank in einer Transaktion stattfinden.

Eine Datenbankverbindung kann mehrere aktive Transaktionen gleichzeitig haben, solange die Schreibtransaktionen keine sich überschneidenden [_Gültigkeitsbereiche_](#gültigkeitsbereich) haben. Der Gültigkeitsbereich von Transaktionen, der bei der Erstellung definiert wird, bestimmt, mit welchen Objektspeichern die Transaktion interagieren kann und bleibt während der gesamten Laufzeit der Transaktion konstant. So können Sie zum Beispiel, wenn eine Datenbankverbindung bereits eine Schreibtransaktion mit einem Gültigkeitsbereich hat, der nur den `flyingMonkey`-Objektspeicher abdeckt, eine zweite Transaktion mit dem Gültigkeitsbereich der `unicornCentaur`- und `unicornPegasus`-Objektspeichern starten. In Bezug auf Lesetransaktionen können Sie mehrere davon haben – auch sich überschneidende.

Transaktionen sollen von kurzer Dauer sein, daher kann der Browser eine Transaktion beenden, die zu lange dauert, um die Speicherressourcen freizugeben, die die langlaufende Transaktion gesperrt hat. Sie können die Transaktion abbrechen, wodurch die in der Transaktion vorgenommenen Änderungen an der Datenbank zurückgesetzt werden. Und Sie müssen nicht einmal warten, dass die Transaktion startet oder aktiv ist, um sie abzubrechen.

Die drei Transaktionsmodi sind: `readwrite`, `readonly`, und `versionchange`. Die einzige Möglichkeit, Objektspeicher und Indizes zu erstellen und zu löschen, besteht in der Verwendung einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion. Um mehr über die Transaktionstypen zu erfahren, lesen Sie den Referenzartikel für [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Da alles innerhalb einer Transaktion geschieht, ist es ein sehr wichtiges Konzept in IndexedDB. Um mehr über Transaktionen zu erfahren, insbesondere wie sie sich auf die Versionierung beziehen, siehe [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), das auch über Referenzdokumentation verfügt.

#### Version

Wenn eine Datenbank erstmals erstellt wird, beträgt ihre Version die ganze Zahl 1. Jede Datenbank hat nur eine Version zu einer Zeit; eine Datenbank kann nicht gleichzeitig in mehreren Versionen existieren. Die einzige Möglichkeit, die Version zu ändern, besteht darin, sie mit einer größeren Version als der aktuellen zu öffnen.

### Schlüssel und Wert

#### Inline-Schlüssel

Ein Schlüssel, der als Teil des gespeicherten Wertes gespeichert wird. Er wird mithilfe eines _Schlüsselpfads_ gefunden. Ein Inline-Schlüssel kann mithilfe eines Generators erzeugt werden. Nach der Erzeugung des Schlüssels kann dieser dann im Wert mithilfe des Schlüsselpfads gespeichert werden, oder er kann auch als Schlüssel verwendet werden.

#### Schlüssel

Ein Datenwert, nach dem gespeicherte Werte im Objektspeicher organisiert und abgerufen werden. Der Objektspeicher kann den Schlüssel von einer der drei folgenden Quellen ableiten: einem _[Schlüsselerzeuger](#schlüsselerzeuger)_, einem _[Schlüsselpfad](#schlüsselpfad)_ oder einem explizit angegebenen Wert. Der Schlüssel muss von einem Datentyp sein, der eine Zahl hat, die größer ist als die vorhergehende. Jeder Datensatz in einem Objektspeicher muss einen Schlüssel haben, der innerhalb desselben Speichers eindeutig ist, sodass Sie keine mehrfachen Datensätze mit demselben Schlüssel in einem bestimmten Objektspeicher haben können.

Ein Schlüssel kann einer der folgenden Typen sein: [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), float, ein binäres Blob und [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Bei Arrays kann der Schlüssel von einem leeren Wert bis zu unendlich reichen. Und Sie können ein Array innerhalb eines Arrays einfügen.

Alternativ können Sie auch Datensätze in einem Objektspeicher mithilfe des _[Index](#index)_ nachschlagen.

#### Schlüsselerzeuger

Ein Mechanismus zur Erzeugung neuer Schlüssel in einer geordneten Sequenz. Wenn ein Objektspeicher keinen Schlüsselerzeuger hat, muss die Anwendung Schlüssel für die zu speichernden Datensätze bereitstellen. Erzeuger werden nicht zwischen Speichern geteilt. Dies ist eher ein Implementierungsdetail des Browsers, da Sie in der Webentwicklung im Allgemeinen keine Schlüsselerzeuger erstellen oder darauf zugreifen.

#### Schlüsselpfad

Definiert, wo der Browser den Schlüssel im Objektspeicher oder Index extrahieren soll. Ein gültiger Schlüsselpfad kann eines der folgenden enthalten: ein leerer String, ein JavaScript-Bezeichner oder mehrere JavaScript-Bezeichner, die durch Punkte getrennt sind, oder ein Array, das eines dieser enthält. Es darf keine Leerzeichen enthalten.

#### Out-of-Line-Schlüssel

Ein Schlüssel, der getrennt von dem gespeicherten Wert gespeichert wird.

#### Wert

Jeder Datensatz hat einen Wert, der alles umfassen kann, was in JavaScript ausgedrückt werden kann, einschließlich [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und null.

Wenn ein Objekt oder Array gespeichert wird, können die Eigenschaften und Werte in diesem Objekt oder Array ebenfalls alles sein, was ein gültiger Wert ist.

[Blobs](/de/docs/Web/API/Blob) und Dateien können gespeichert werden, siehe [Spezifikation](https://w3c.github.io/IndexedDB/).

### Bereich und Gültigkeitsbereich

#### Cursor

Ein Mechanismus zum Durchlaufen mehrerer Datensätze mit einem _Schlüsselbereich_. Der Cursor hat eine Quelle, die angibt, welchen Index oder Objektspeicher er durchläuft. Er hat eine Position innerhalb des Bereichs und bewegt sich in eine Richtung, die sich in der Reihenfolge der Datensatzschlüssel erhöht oder verringert. Für die Referenzdokumentation zu Cursorn siehe [`IDBCursor`](/de/docs/Web/API/IDBCursor).

#### Schlüsselbereich

Ein kontinuierliches Intervall über einige Datentypen, die für Schlüssel verwendet werden. Datensätze können mit Schlüsseln oder einem Bereich von Schlüsseln aus Objektspeichern und Indizes abgerufen werden. Sie können den Bereich mithilfe von unteren und oberen Grenzen begrenzen oder filtern. Zum Beispiel können Sie über alle Werte eines Schlüssels zwischen x und y iterieren.

Für die Referenzdokumentation zum Schlüsselbereich siehe [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

#### Gültigkeitsbereich

Die Menge der Objektspeicher und Indizes, auf die sich eine Transaktion bezieht. Die Gültigkeitsbereiche von Lese-Transaktionen können sich überlappen und gleichzeitig ausgeführt werden. Andererseits dürfen sich die Gültigkeitsbereiche von Schreib-Transaktionen nicht überlappen. Sie können jedoch mehrere Transaktionen mit dem gleichen Gültigkeitsbereich gleichzeitig starten, aber sie werden einfach in der Warteschlange ausgeführt und nacheinander ausgeführt.

## Nächste Schritte

Mit einem Verständnis der Schlüsselmerkmale und grundlegenden Terminologie von IndexedDB können wir konkretere Dinge angehen. Für ein Tutorial zur Nutzung der API siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Siehe auch

- [Indexed Database API Specification](https://w3c.github.io/IndexedDB/)
- [IndexedDB API Reference](/de/docs/Web/API/IndexedDB_API)
- [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

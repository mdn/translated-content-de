---
title: IndexedDB Schlüsselmerkmale und grundlegende Terminologie
slug: Web/API/IndexedDB_API/Basic_Terminology
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("IndexedDB")}}

Dieser Artikel beschreibt die Schlüsselmerkmale von IndexedDB und führt einige essenzielle Begriffe ein, die für das Verständnis der IndexedDB API relevant sind.

Die folgenden Artikel könnten ebenfalls nützlich sein:

- Für ein detailliertes Tutorial zur Nutzung der API siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Für die Referenzdokumentation der IndexedDB API, schauen Sie im Hauptartikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten nach, die die von IndexedDB verwendeten Objekttypen dokumentieren.
- Für weitere Informationen darüber, wie der Browser Ihre Daten im Hintergrund speichert, lesen Sie [Browser storage quotas and eviction criteria](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Schlüsselmerkmale

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragemöglichkeiten zu erstellen, unabhängig von der Netzwerkverfügbarkeit, können diese Anwendungen sowohl online als auch offline arbeiten. IndexedDB ist nützlich für Anwendungen, die eine große Menge an Daten speichern (zum Beispiel einen DVD-Katalog in einer Leihbibliothek) und Anwendungen, die keine dauerhafte Internetverbindung benötigen, um zu funktionieren (zum Beispiel E-Mail-Clients, Aufgabenlisten und Notizblockanwendungen).

IndexedDB ermöglicht es Ihnen, Objekte zu speichern und abzurufen, die mit einem "Schlüssel" indiziert sind. Alle Änderungen, die Sie an der Datenbank vornehmen, erfolgen innerhalb von Transaktionen. Wie die meisten Webspeicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Sie können also auf gespeicherte Daten innerhalb einer Domäne zugreifen, aber nicht auf Daten über unterschiedliche Domänen hinweg.

Falls Sie Annahmen aus der Arbeit mit anderen Datenbanktypen haben, könnten Sie bei der Arbeit mit IndexedDB überrascht sein. Daher sind die folgenden Schlüsselmerkmale von IndexedDB wichtig:

- **IndexedDB-Datenbanken speichern Schlüssel-Wert-Paare.** Die Werte können komplex strukturierte Objekte sein, und Schlüssel können Eigenschaften dieser Objekte sein. Sie können Indizes erstellen, die jede Eigenschaft der Objekte für schnelle Suchabfragen sowie für sortierte Enumeration verwenden. Schlüssel können binäre Objekte sein.
- **IndexedDB basiert auf einem transaktionalen Datenbankmodell.** Alles, was Sie in IndexedDB tun, erfolgt immer im Kontext einer [Transaktion](#transaktion). Die IndexedDB API bietet viele Objekte, die Indizes, Tabellen, Cursorn usw. repräsentieren, aber jedes dieser Objekte ist an eine bestimmte Transaktion gebunden. Folglich können Sie keine Befehle außerhalb einer Transaktion ausführen oder Cursorn öffnen. Transaktionen haben eine gut definierte Lebensdauer, sodass der Versuch, eine Transaktion nach deren Abschluss zu verwenden, Ausnahmen wirft. Transaktionen committen automatisch, wenn keine neuen Anfragen gestellt werden, wenn die Transaktion aktiv ist.

  Dieses Transaktionsmodell ist wirklich nützlich, wenn man bedenkt, was passieren könnte, wenn ein Benutzer zwei Instanzen Ihrer Web-App gleichzeitig in zwei verschiedenen Tabs öffnet. Ohne transaktionale Operationen könnten die beiden Instanzen sich gegenseitig stören. Wenn Sie mit Transaktionen in einer Datenbank nicht vertraut sind, lesen Sie den [Wikipedia-Artikel zu Transaktionen](https://en.wikipedia.org/wiki/Database_transaction). Siehe auch [Transaktion](#transaktion) im Abschnitt Definitionen.

- **Die IndexedDB API ist größtenteils asynchron.** Die API liefert Ihnen keine Daten, indem sie Werte zurückgibt; stattdessen müssen Sie eine Callback-Funktion übergeben. Sie "speichern" keinen Wert in der Datenbank oder "rufen" einen Wert synchron aus der Datenbank ab. Stattdessen "fordern" Sie, dass eine Datenbankoperation stattfindet. Sie werden durch ein DOM-Ereignis informiert, wenn die Operation abgeschlossen ist, und die Art des Ereignisses informiert Sie darüber, ob die Operation erfolgreich war oder fehlgeschlagen ist.
- **IndexedDB verwendet viele Anfragen.** Anfragen sind Objekte, die die zuvor erwähnten Erfolgs- oder Fehler-DOM-Ereignisse empfangen. Sie haben `onsuccess`- und `onerror`-Eigenschaften, und Sie können `addEventListener()` und `removeEventListener()` auf ihnen aufrufen. Sie haben auch die Eigenschaften `readyState`, `result` und `errorCode`, die Ihnen den Status der Anfrage anzeigen. Die Eigenschaft `result` ist besonders magisch, da sie unterschiedliche Dinge sein kann, je nachdem, wie die Anfrage generiert wurde (zum Beispiel eine `IDBCursor`-Instanz oder der Schlüssel für einen Wert, den Sie gerade in die Datenbank eingefügt haben).
- **IndexedDB verwendet DOM-Ereignisse, um Ihnen mitzuteilen, wann Ergebnisse verfügbar sind.** DOM-Ereignisse haben immer eine `type`-Eigenschaft (in IndexedDB wird sie meistens auf `"success"` oder `"error"` gesetzt). DOM-Ereignisse haben auch eine `target`-Eigenschaft, die angibt, wohin das Ereignis geleitet wird. In den meisten Fällen ist das `target` eines Ereignisses das `IDBRequest`-Objekt, das als Ergebnis einer Datenbankoperation erzeugt wurde. Erfolgsmeldungen steigen nicht auf und können nicht abgebrochen werden. Fehlermeldungen hingegen steigen auf und können abgebrochen werden. Dies ist ziemlich wichtig, da Fehlermeldungen alle Transaktionen abbrechen, in denen sie ausgeführt werden, es sei denn, sie werden abgebrochen.
- **IndexedDB ist objektorientiert.** IndexedDB ist keine relationale Datenbank mit Tabellen, die Sammlungen von Zeilen und Spalten repräsentieren. Dieser wichtige und grundlegende Unterschied beeinflusst die Art und Weise, wie Sie Ihre Anwendungen entwerfen und entwickeln.

  In einem herkömmlichen relationalen Datenspeicher hätten Sie eine Tabelle, die eine Sammlung von Datenzeilen und Spalten mit benannten Datentypen speichert. IndexedDB hingegen erfordert, dass Sie einen Objektspeicher für einen Datentyp erstellen und JavaScript-Objekte in diesem Speicher dauerhaft ablegen. Jeder Objektspeicher kann eine Sammlung von Indizes haben, die effizient abfragbar und iterierbar sind. Wenn Sie mit objektorientierten Datenbankverwaltungssystemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel zur Objektdatenbank](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB verwendet keine Structured Query Language (SQL).** Es verwendet Abfragen zu einem Index, die einen Cursor erzeugen, mit dem Sie über das Ergebnisset iterieren können. Wenn Sie mit NoSQL-Systemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel zu NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB hält sich an eine Same-Origin-Policy.** Eine Origin ist die Domäne, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jedem Origin ist eine eigene Menge an Datenbanken zugeordnet. Jede Datenbank hat einen Namen, der sie innerhalb eines Origins identifiziert.

  Die Sicherheitsgrenze, die IndexedDB auferlegt, verhindert, dass Anwendungen auf Daten mit einer anderen Origin zugreifen. Zum Beispiel kann eine App oder Seite in `http://www.example.com/app/` Daten von `http://www.example.com/dir/` abrufen, weil sie dieselbe Origin haben, sie kann jedoch keine Daten von `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll) abrufen, weil sie unterschiedliche Origins haben.

  > [!NOTE]
  > Inhalte von Drittanbieterfenstern (z.B. {{htmlelement("iframe")}}-Inhalte) können auf den IndexedDB-Speicher für die Origin zugreifen, in die sie eingebettet sind, es sei denn, der Browser ist so eingestellt, dass [Drittanbieter-Cookies niemals angenommen](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) werden (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821).)

### Einschränkungen

IndexedDB ist dafür ausgelegt, die meisten Fälle abzudecken, die clientseitigen Speicher benötigen. Es ist jedoch nicht für einige Fälle ausgelegt, wie zum Beispiel:

- Internationalisiertes Sortieren. Nicht alle Sprachen sortieren Zeichenketten auf gleiche Weise, daher wird internationalisiertes Sortieren nicht unterstützt. Während die Datenbank keine Daten in einer bestimmten internationalen Reihenfolge speichern kann, können Sie die Daten, die Sie aus der Datenbank gelesen haben, selbst sortieren.
- Synchronisierung. Die API ist nicht so gestaltet, dass sie die Synchronisierung mit einer serverseitigen Datenbank übernimmt. Sie müssen Code schreiben, der eine clientseitige IndexedDB-Datenbank mit einer serverseitigen Datenbank synchronisiert.
- Volltextsuche. Die API hat kein Äquivalent zum `LIKE`-Operator in SQL.

Außerdem sollten Sie sich bewusst sein, dass Browser die Datenbank unter bestimmten Bedingungen löschen können:

- Der Benutzer fordert ein Löschen an. Viele Browser haben Einstellungen, die es Benutzern ermöglichen, alle für eine bestimmte Website gespeicherten Daten zu löschen, einschließlich Cookies, Lesezeichen, gespeicherten Passwörtern und IndexedDB-Daten.
- Der Browser ist im Privaten Modus. Einige Browser haben "Privaten Modus" (Firefox) oder "Inkognito" (Chrome). Am Ende der Sitzung löscht der Browser die Datenbank.
- Das Festplatten- oder Quotenkontingent ist erreicht.
- Die Daten sind beschädigt.
- Eine inkompatible Änderung wird an der Funktion vorgenommen.

Die genauen Umstände und Fähigkeiten der Browser ändern sich im Laufe der Zeit, aber die allgemeine Philosophie der Browserhersteller ist, sich nach Möglichkeit darum zu bemühen, die Daten zu behalten.

## Kernterminologie

Dieser Abschnitt definiert und erklärt grundlegende Begriffe, die für das Verständnis der IndexedDB API relevant sind.

### Datenbank

#### Datenbank

Ein Informationsspeicher, der typischerweise aus einem oder mehreren [_Objektspeichern_](#objektspeicher) besteht. Jede Datenbank muss Folgendes haben:

- Name. Dies identifiziert die Datenbank innerhalb eines bestimmten Ursprungs und bleibt während ihrer gesamten Lebensdauer konstant. Der Name kann jeden String-Wert annehmen (einschließlich eines leeren Strings).
- Aktuelle [_Version_](#version). Wenn eine Datenbank erstmals erstellt wird, ist ihre Version die Ganzzahl 1, es sei denn, es wird anders angegeben. Jede Datenbank kann zu einem bestimmten Zeitpunkt nur eine Version haben.

#### Datenbankverbindung

Eine Operation, die durch Öffnen einer _[Datenbank](#datenbank)_ erstellt wird. Eine gegebene Datenbank kann mehrere Verbindungen gleichzeitig haben.

#### dauerhaft

In Firefox war IndexedDB früher **dauerhaft**, was bedeutete, dass in einer Lese-Schreib-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis ausgelöst wurde, nur wenn alle Daten garantiert auf die Festplatte geschrieben worden waren.

Ab Firefox 40 haben IndexedDB-Transaktionen entspannte Haltbarkeitsgarantien, um die Leistung zu steigern (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)), was dasselbe Verhalten ist wie bei anderen Browsern, die IndexedDB unterstützen. In diesem Fall wird das [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, jedoch potenziell bevor diese Daten tatsächlich auf die Festplatte geschrieben worden sind. Das Ereignis kann dadurch schneller als bisher geliefert werden, jedoch besteht ein kleines Risiko, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder ein Systemausfall auftritt, bevor die Daten auf die Festplatte geschrieben werden. Da solch katastrophale Ereignisse selten sind, sollten sich die meisten Anwender nicht weiter damit beschäftigen müssen.

> [!NOTE]
> In Firefox können Sie, falls Sie aus irgendeinem Grund Haltbarkeit sicherstellen möchten (z.B. wenn Sie kritische Daten speichern, die später nicht neu berechnet werden können), eine Transaktion zwingen, vor der Bereitstellung des `complete`-Ereignisses auf die Festplatte zu schreiben, indem Sie eine Transaktion im experimentellen (nicht-standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction).) Dies ist derzeit experimentell und kann nur verwendet werden, wenn die `dom.indexedDB.experimental`-Einstellung in `about:config` auf `true` gesetzt ist.

#### Index

Ein Index ist ein spezialisierter Objektspeicher zum Nachschlagen von Datensätzen in einem anderen Objektspeicher, dem _referenzierten Objektspeicher_. Der Index ist ein dauerhafter Schlüssel-Wert-Speicher, bei dem der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes im referenzierten Objektspeicher ist. Die Datensätze in einem Index werden automatisch gefüllt, wenn Datensätze im referenzierten Objektspeicher eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann auf nur einen Datensatz in seinem referenzierten Objektspeicher verweisen, aber mehrere Indizes können denselben Objektspeicher referenzieren. Wenn sich der Objektspeicher ändert, werden alle Indizes, die sich auf den Objektspeicher beziehen, automatisch aktualisiert.

Alternativ können Sie auch Datensätze in einem Objektspeicher mit dem [Schlüssel](#schlüssel) nachschlagen.

Um mehr über die Verwendung von Indizes zu erfahren, siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Für die Referenzdokumentation zu Indizes siehe [IDBKeyRange](/de/docs/Web/API/IDBKeyRange).

#### Objektspeicher

Der Mechanismus, über den Daten in der Datenbank gespeichert werden. Der Objektspeicher speichert dauerhaft Datensätze, die Schlüssel-Wert-Paare sind. Datensätze innerhalb eines Objektspeichers werden gemäß den _[Schlüsseln](#schlüssel)_ in aufsteigender Reihenfolge sortiert.

Jeder Objektspeicher muss einen Namen haben, der innerhalb seiner Datenbank eindeutig ist. Der Objektspeicher kann optional einen _[Schlüsselgenerator](#schlüsselgenerator)_ und einen _[Schlüsselpfad](#schlüsselpfad)_ haben. Wenn der Objektspeicher einen Schlüsselpfad hat, verwendet er _[inline-Schlüssel](#inline-schlüssel)_; andernfalls verwendet er _[out-of-line-Schlüssel](#out-of-line-schlüssel)_.

Für die Referenzdokumentation zu Objektspeichern siehe [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

#### Anfrage

Die Operation, durch die Lese- und Schreibvorgänge auf einer Datenbank durchgeführt werden. Jede Anfrage stellt eine Lese- oder Schreiboperation dar.

#### Transaktion

Ein atomarer Satz von Datenzugriffs- und Datenänderungsoperationen auf einer bestimmten Datenbank. Es ist die Methode, wie Sie mit den Daten in einer Datenbank interagieren. Tatsächlich muss jedes Lesen oder Ändern von Daten in der Datenbank in einer Transaktion erfolgen.

Eine Datenbankverbindung kann mehrere aktive Transaktionen gleichzeitig haben, solange die schreibenden Transaktionen keine überlappenden [_Bereiche_](#umfang) haben. Der Bereich von Transaktionen, der bei der Erstellung definiert wird, bestimmt, mit welchen Objektspeichern die Transaktion interagieren kann, und bleibt während der gesamten Lebensdauer der Transaktion konstant. Wenn beispielsweise eine Datenbankverbindung bereits eine schreibende Transaktion mit einem Bereich hat, der nur den `flyingMonkey`-Objektspeicher abdeckt, können Sie eine zweite Transaktion mit einem Bereich der `unicornCentaur`- und `unicornPegasus`-Objektspeicher starten. Was Lese-Transaktionen betrifft, können Sie mehrere davon haben, sogar überlappende.

Transaktionen sollen kurzlebig sein, sodass der Browser eine Transaktion, die zu lange dauert, beenden kann, um die Speicherressourcen, die die lang laufende Transaktion gesperrt hat, freizugeben. Sie können die Transaktion abbrechen, was die in der Transaktion vorgenommenen Änderungen auf die Datenbank zurückrollt. Und Sie müssen nicht einmal warten, bis die Transaktion beginnt oder aktiv ist, um sie abzubrechen.

Die drei Modi von Transaktionen sind: `readwrite`, `readonly` und `versionchange`. Der einzige Weg, um Objektspeicher und Indizes zu erstellen und zu löschen, ist die Verwendung einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion. Um mehr über Transaktionstypen zu erfahren, sehen Sie den Referenzartikel zu [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Da alles innerhalb einer Transaktion geschieht, ist es ein sehr wichtiges Konzept in IndexedDB. Um mehr über Transaktionen zu erfahren, insbesondere darüber, wie sie sich auf die Versionierung beziehen, siehe [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), die auch Referenzdokumentationen enthält.

#### Version

Wenn eine Datenbank erstmals erstellt wird, ist ihre Version die Ganzzahl 1. Jede Datenbank hat zu einem Zeitpunkt nur eine Version; eine Datenbank kann nicht gleichzeitig in mehreren Versionen existieren. Der einzige Weg, die Version zu ändern, besteht darin, sie mit einer größeren Version als der aktuellen zu öffnen.

### Schlüssel und Wert

#### Inline-Schlüssel

Ein Schlüssel, der als Teil des gespeicherten Wertes gespeichert ist. Er wird mit einem _Schlüsselpfad_ gefunden. Ein Inline-Schlüssel kann mithilfe eines Generators generiert werden. Nachdem der Schlüssel generiert wurde, kann er im Wert mithilfe des Schlüsselpfads gespeichert oder auch als Schlüssel verwendet werden.

#### Schlüssel

Ein Datenwert, mit dem gespeicherte Werte im Objektspeicher organisiert und abgerufen werden. Der Objektspeicher kann den Schlüssel von einer der drei Quellen ableiten: einem _[Schlüsselgenerator](#schlüsselgenerator)_, einem _[Schlüsselpfad](#schlüsselpfad)_ oder einem explizit angegebenen Wert. Der Schlüssel muss einen Datentyp haben, der eine Zahl hat, die größer als die vorherige ist. Jeder Datensatz in einem Objektspeicher muss einen Schlüssel haben, der im selben Speicher eindeutig ist, sodass Sie keine mehrfachen Datensätze mit demselben Schlüssel in einem gegebenen Objektspeicher haben können.

Ein Schlüssel kann einer der folgenden Typen sein: [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), float, ein binärer Blob und [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Bei Arrays kann der Schlüssel von einem leeren Wert bis unendlich reichen. Und Sie können ein Array innerhalb eines Arrays einschließen.

Alternativ können Sie auch Datensätze in einem Objektspeicher mit dem _[Index](#index)_ nachschlagen.

#### Schlüsselgenerator

Ein Mechanismus zur Erzeugung neuer Schlüssel in einer geordneten Reihenfolge. Hat ein Objektspeicher keinen Schlüsselgenerator, muss die Anwendung Schlüssel für gespeicherte Datensätze bereitstellen. Generatoren werden nicht zwischen Speichern geteilt. Dies ist mehr ein Browser-Implementierungsdetail, denn im Web-Entwicklungsalltag erstellt oder greift man nicht direkt auf Schlüsselgeneratoren zu.

#### Schlüsselpfad

Definiert, wo der Browser den Schlüssel aus dem Objektspeicher oder Index extrahieren soll. Ein gültiger Schlüsselpfad kann eines der folgenden Elemente enthalten: ein leerer String, ein JavaScript-Bezeichner oder mehrere JavaScript-Bezeichner, die durch Punkte oder ein Array, das eine dieser Optionen enthält, getrennt sind. Es kann keine Leerzeichen enthalten.

#### Out-of-Line-Schlüssel

Ein Schlüssel, der getrennt von dem gespeicherten Wert gespeichert wird.

#### Wert

Jeder Datensatz hat einen Wert, der fast alles enthalten kann, was in JavaScript ausgedrückt werden kann, einschließlich [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und null.

Wenn ein Objekt oder Array gespeichert wird, können die Eigenschaften und Werte in diesem Objekt oder Array ebenfalls alles sein, was einen gültigen Wert darstellt.

[Blobs](/de/docs/Web/API/Blob) und Dateien können gespeichert werden, siehe [Spezifikation](https://w3c.github.io/IndexedDB/).

### Bereich und Umfang

#### Cursor

Ein Mechanismus zur Iteration über mehrere Datensätze mit einem _Schlüsselbereich_. Der Cursor hat eine Quelle, die angibt, welchen Index oder Objektspeicher er durchläuft. Er hat eine Position innerhalb des Bereichs und bewegt sich in eine Richtung, die in der Reihenfolge der Datensatzschlüssel steigt oder fällt. Für die Referenzdokumentation zu Cursor siehe [`IDBCursor`](/de/docs/Web/API/IDBCursor).

#### Schlüsselbereich

Ein kontinuierliches Intervall über einen Datentyp, der für Schlüssel verwendet wird. Aufzeichnungen können mit Schlüsseln oder einem Bereich von Schlüsseln aus Objektspeichern und Indizes abgerufen werden. Sie können den Bereich mit unteren und oberen Grenzen einschränken oder filtern. Sie können beispielsweise über alle Werte eines Schlüssels zwischen x und y iterieren.

Für die Referenzdokumentation zu Schlüsselbereichen siehe [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

#### Umfang

Die Menge an Objektspeichern und Indizes, auf die sich eine Transaktion bezieht. Die Umfänge von nur eingelesenen Transaktionen können sich überlappen und gleichzeitig ausgeführt werden. Die Umfänge von schreibenden Transaktionen hingegen dürfen sich nicht überschneiden. Sie können dennoch mehrere Transaktionen mit demselben Umfang gleichzeitig starten, aber sie reihen sich einfach ein und werden nacheinander ausgeführt.

## Nächste Schritte

Mit einem Verständnis der Schlüsselmerkmale und der grundlegenden Terminologie von IndexedDB können wir uns konkreteren Inhalten zuwenden. Für ein Tutorial zur Nutzung der API siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Siehe auch

- [Indexed Database API Specification](https://www.w3.org/TR/IndexedDB/)
- [IndexedDB API Reference](/de/docs/Web/API/IndexedDB_API)
- [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — The Store in Your Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

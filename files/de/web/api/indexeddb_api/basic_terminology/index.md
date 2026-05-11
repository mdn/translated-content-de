---
title: IndexedDB Schlüsselmerkmale und grundlegende Terminologie
slug: Web/API/IndexedDB_API/Basic_Terminology
l10n:
  sourceCommit: 98dd40c398afc0c8498a9fb1c57e0e27c6134bf3
---

{{DefaultAPISidebar("IndexedDB")}}

Dieser Artikel beschreibt die Schlüsselmerkmale von IndexedDB und führt einige wesentliche Begriffe ein, die relevant sind, um die IndexedDB API zu verstehen.

Folgende Artikel könnten für Sie ebenfalls nützlich sein:

- Für ein detailliertes Tutorial zur Verwendung der API siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Für die Referenzdokumentation zur IndexedDB API beziehen Sie sich auf den Hauptartikel zur [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten, die die von IndexedDB verwendeten Objekttypen dokumentieren.
- Für weitere Informationen darüber, wie der Browser Ihre Daten im Hintergrund speichert, lesen Sie [Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Schlüsselmerkmale

IndexedDB ist eine Methode, mit der Sie Daten dauerhaft im Browser eines Benutzers speichern können. Da Sie es ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten zu erstellen, unabhängig von der Netzwerkverfügbarkeit, können diese Anwendungen sowohl online als auch offline funktionieren. IndexedDB ist nützlich für Anwendungen, die eine große Menge an Daten speichern (z. B. einen Katalog von DVDs in einer Leihbibliothek) und Anwendungen, die keine ständige Internetverbindung benötigen, um zu funktionieren (z. B. E-Mail-Clients, Aufgabenlisten und Notizblöcke).

IndexedDB ermöglicht es Ihnen, Objekte zu speichern und abzurufen, die mit einem "Schlüssel" indexiert sind. Alle Änderungen, die Sie an der Datenbank vornehmen, erfolgen innerhalb von Transaktionen. Wie die meisten Webspeicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Das bedeutet, dass Sie gespeicherte Daten innerhalb einer Domain zugreifen können, jedoch nicht über verschiedene Domains hinweg.

Wenn Sie Annahmen aus der Arbeit mit anderen Arten von Datenbanken haben, könnten Sie bei der Arbeit mit IndexedDB verwirrt werden. Daher sind die folgenden Schlüsselmerkmale von IndexedDB wichtig zu beachten:

- **IndexedDB-Datenbanken speichern Schlüssel-Wert-Paare.** Die Werte können komplex strukturierte Objekte sein, und Schlüssel können Eigenschaften dieser Objekte sein. Sie können Indizes erstellen, die jede Eigenschaft der Objekte für schnelles Suchen sowie sortierte Aufzählung verwenden. Schlüssel können binäre Objekte sein.
- **IndexedDB basiert auf einem transaktionalen Datenbankmodell**. Alles, was Sie in IndexedDB tun, geschieht immer im Kontext einer [Transaktion](#transaktion). Die IndexedDB API stellt viele Objekte zur Verfügung, die Indizes, Tabellen, Cursor usw. repräsentieren, aber jedes von ihnen ist an eine bestimmte Transaktion gebunden. Daher können Sie keine Befehle ausführen oder Cursor außerhalb einer Transaktion öffnen. Transaktionen haben eine klar definierte Lebensdauer, sodass der Versuch, eine Transaktion nach ihrem Abschluss zu nutzen, Ausnahmen auslöst. Außerdem führen Transaktionen automatisch ein "Commit" durch, wenn keine neuen Anfragen gestellt werden, während die Transaktion aktiv ist.

  Dieses Transaktionsmodell ist wirklich nützlich, wenn Sie überlegen, was passieren könnte, wenn ein Benutzer zwei Instanzen Ihrer Web-App gleichzeitig in zwei verschiedenen Tabs öffnet. Ohne transaktionale Operationen könnten die beiden Instanzen sich gegenseitig bei ihren Modifikationen stören. Wenn Sie mit Transaktionen in einer Datenbank nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Transaktionen](https://en.wikipedia.org/wiki/Database_transaction). Siehe auch [Transaktion](#transaktion) im Abschnitt Definitionen.

- **Die IndexedDB API ist größtenteils asynchron.** Die API gibt Ihnen Daten nicht durch Rückgabe von Werten; stattdessen müssen Sie eine Callback-Funktion übergeben. Sie "speichern" keinen Wert in der Datenbank oder "rufen" einen Wert durch synchrone Mittel aus der Datenbank ab. Stattdessen "fordern" Sie an, dass ein Datenbankvorgang durchgeführt wird. Sie werden durch ein DOM-Ereignis benachrichtigt, wenn der Vorgang abgeschlossen ist, und die Art des Ereignisses, das Sie erhalten, lässt Sie wissen, ob der Vorgang erfolgreich war oder fehlgeschlagen ist.
- **IndexedDB verwendet viele Anfragen.** Anfragen sind Objekte, die die zuvor erwähnten Erfolgs- oder Fehler-DOM-Ereignisse empfangen. Sie haben Eigenschaften `onsuccess` und `onerror`, und Sie können `addEventListener()` und `removeEventListener()` an ihnen aufrufen. Sie haben auch Eigenschaften wie `readyState`, `result` und `errorCode`, die Ihnen den Status der Anfrage mitteilen. Die Eigenschaft `result` ist besonders bemerkenswert, da sie viele verschiedene Dinge sein kann, je nachdem, wie die Anfrage generiert wurde (z. B. eine `IDBCursor`-Instanz oder der Schlüssel für einen Wert, den Sie gerade in die Datenbank eingefügt haben).
- **IndexedDB verwendet DOM-Ereignisse, um Sie zu benachrichtigen, wenn Ergebnisse verfügbar sind.** DOM-Ereignisse haben immer eine `type`-Eigenschaft (bei IndexedDB ist sie meist auf `"success"` oder `"error"` gesetzt). DOM-Ereignisse haben auch eine `target`-Eigenschaft, die anzeigt, wohin das Ereignis gerichtet ist. In den meisten Fällen ist das `target` eines Ereignisses das `IDBRequest`-Objekt, das als Ergebnis von Datenbankoperationen generiert wurde. Erfolgsereignisse "blasen" nicht auf und können nicht abgebrochen werden. Fehlerereignisse "blasen" auf und können abgebrochen werden. Dies ist sehr wichtig, da Fehlerereignisse jede Transaktion, in der sie laufen, abbrechen, es sei denn sie werden abgebrochen.
- **IndexedDB ist objektorientiert.** IndexedDB ist keine relationale Datenbank mit Tabellen, die Sammlungen von Zeilen und Spalten darstellen. Dieser wichtige und fundamentale Unterschied beeinflusst, wie Sie Ihre Anwendungen entwerfen und erstellen.

  In einem traditionellen relationalen Datenspeicher hätten Sie eine Tabelle, die eine Sammlung von Datenzeilen und benannten Datentypen in Spalten speichert. IndexedDB hingegen erfordert, dass Sie einen Objektspeicher für einen Datentyp erstellen und JavaScript-Objekte in diesem Speicher persistieren. Jeder Objektspeicher kann eine Sammlung von Indizes haben, die es effizient machen, Abfragen zu bearbeiten und zu iterieren. Wenn Sie nicht mit objektorientierten Datenbanksystemen vertraut sind, lesen Sie den [Wikipedia-Artikel über Objektdatenbanken](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB verwendet keine strukturierten Abfragesprachen (SQL).** Stattdessen verwendet es Abfragen auf einem Index, die einen Cursor erzeugen, mit dem Sie über das Ergebnisset iterieren können. Wenn Sie nicht mit NoSQL-Systemen vertraut sind, lesen Sie den [Wikipedia-Artikel über NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB hält sich an eine Same-Origin-Policy**. Ein Ursprung ist die Domain, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jeder Ursprung hat sein eigenes zugehöriges Set von Datenbanken. Jede Datenbank hat einen Namen, der sie innerhalb eines Ursprungs identifiziert.

  Die von IndexedDB auferlegte Sicherheitsgrenze verhindert, dass Anwendungen auf Daten eines anderen Ursprungs zugreifen. Zum Beispiel, während eine App oder eine Seite in `http://www.example.com/app/` Daten von `http://www.example.com/dir/` abrufen kann, da sie denselben Ursprung haben, kann sie keine Daten von `http://www.example.com:8080/dir/` (unterschiedlicher Port) oder `https://www.example.com/dir/` (unterschiedliches Protokoll) abrufen, da sie unterschiedliche Ursprünge haben.

  > [!NOTE]
  > Inhalte von Drittanbieter-Fenstern (z. B. {{htmlelement("iframe")}}-Inhalte) können auf den IndexedDB-Speicher für den Ursprung zugreifen, in den sie eingebettet sind, es sei denn, der Browser ist so eingestellt, dass er [niemals Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821)).

### Einschränkungen

IndexedDB ist so konzipiert, dass es die meisten Anwendungsfälle für clientseitige Speicherung abdeckt. Es ist jedoch nicht für einige Fälle gedacht, wie die folgenden:

- Internationalisierte Sortierung. Nicht alle Sprachen sortieren Zeichenfolgen auf die gleiche Weise, daher wird internationale Sortierung nicht unterstützt. Während die Datenbank keine Daten in einer bestimmten internationalen Reihenfolge speichern kann, können Sie die aus der Datenbank gelesenen Daten selbst sortieren.
- Synchronisieren. Die API ist nicht dafür ausgelegt, mit einer serverseitigen Datenbank zu synchronisieren. Sie müssen Code schreiben, der eine clientseitige IndexedDB-Datenbank mit einer serverseitigen Datenbank synchronisiert.
- Volltextsuche. Die API hat kein Äquivalent zum `LIKE`-Operator in SQL.

Darüber hinaus sollten Sie sich bewusst sein, dass Browser die Datenbank löschen können, in folgenden Bedingungen:

- Der Benutzer fordert eine Löschung an. Viele Browser haben Einstellungen, die es Benutzern ermöglichen, alle für eine bestimmte Website gespeicherten Daten zu löschen, einschließlich Cookies, Lesezeichen, gespeicherter Passwörter und IndexedDB-Daten.
- Der Browser ist im privaten Modus. Einige Browser haben "privates Surfen" (Firefox) oder "Inkognito" (Chrome) Modi. Am Ende der Sitzung löscht der Browser die Datenbank.
- Das Limit der Festplatte oder das Quotenlimit wurde erreicht.
- Die Daten sind beschädigt.
- Eine inkompatible Änderung wird an der Funktion vorgenommen.

Die genauen Umstände und Fähigkeiten von Browsern ändern sich im Laufe der Zeit, aber die allgemeine Philosophie der Browseranbieter besteht darin, sich nach besten Kräften zu bemühen, die Daten nach Möglichkeit zu behalten.

## Kernterminologie

Dieser Abschnitt definiert und erklärt Kernbegriffe, die für das Verständnis der IndexedDB API relevant sind.

### Datenbank

#### Datenbank

Ein Informationsspeicher, der typischerweise ein oder mehrere [_Objektspeicher_](#objektspeicher) umfasst. Jede Datenbank muss Folgendes haben:

- Name. Dieser identifiziert die Datenbank innerhalb eines bestimmten Ursprungs und bleibt während ihrer gesamten Lebensdauer konstant. Der Name kann jeder beliebige Zeichenfolgenwert sein (einschließlich eines leeren Strings).
- Gegenwärtige [_Version_](#version). Wenn eine Datenbank erstmals erstellt wird, ist ihre Version die Ganzzahl 1, wenn nicht anders angegeben. Jede Datenbank kann zu einem gegebenen Zeitpunkt nur eine Version haben.

#### Datenbankverbindung

Ein Vorgang, der durch das Öffnen einer _[Datenbank](#datenbank)_ erstellt wird. Eine gegebene Datenbank kann gleichzeitig mehrere Verbindungen haben.

#### dauerhaft

In Firefox war IndexedDB früher **dauerhaft**, was bedeutet, dass bei einer Lese-/Schreibtransaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst wurde, wenn alle Daten garantiert auf die Festplatte geschrieben wurden.

Seit Firefox 40 haben IndexedDB-Transaktionen gelockerte Haltbarkeitsgarantien, um die Leistung zu erhöhen (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)), welches das gleiche Verhalten ist wie bei anderen IndexedDB-unterstützenden Browsern. In diesem Fall wird das [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, jedoch möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das Ereignis kann somit schneller als zuvor geliefert werden, jedoch besteht eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall des Systems kommt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, müssen sich die meisten Benutzer keine weiteren Gedanken machen.

> [!NOTE]
> In Firefox können Sie, wenn Sie aus irgendeinem Grund eine dauerhafte Speicherung sicherstellen möchten (z. B. wenn Sie kritische Daten speichern, die später nicht mehr berechnet werden können), die Transaktion zwingen, auf die Festplatte zu schreiben, bevor das `complete`-Ereignis ausgeliefert wird, indem Sie eine Transaktion im experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)). Dies ist derzeit experimentell und kann nur verwendet werden, wenn die `dom.indexedDB.experimental`-Einstellung auf `true` in `about:config` gesetzt ist.

#### Index

Ein Index ist ein spezialisierter Objektspeicher zum Nachschlagen von Datensätzen in einem anderen Objektspeicher, dem _referenzierten Objektspeicher_. Der Index ist ein persistenter Schlüssel-Wert-Speicher, wobei der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes im referenzierten Objektspeicher ist. Die Datensätze in einem Index werden automatisch gefüllt, wenn Datensätze im referenzierten Objektspeicher eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann nur auf einen Datensatz in seinem referenzierten Objektspeicher verweisen, aber mehrere Indizes können denselben Objektspeicher referenzieren. Wenn sich der Objektspeicher ändert, werden alle Indizes, die auf den Objektspeicher verweisen, automatisch aktualisiert.

Alternativ können Sie auch Datensätze in einem Objektspeicher mithilfe des [Schlüssels](#schlüssel) nachschlagen.

Für weitere Informationen zur Verwendung von Indizes siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Für die Referenzdokumentation zum Index siehe [IDBKeyRange](/de/docs/Web/API/IDBKeyRange).

#### Objektspeicher

Der Mechanismus, durch den Daten in der Datenbank gespeichert werden. Der Objektspeicher hält dauerhaft Daten, die aus Schlüssel-Wert-Paaren bestehen. Datensätze innerhalb eines Objektspeichers sind gemäß den _[Schlüsseln](#schlüssel)_ in aufsteigender Reihenfolge sortiert.

Jeder Objektspeicher muss einen Namen haben, der innerhalb seiner Datenbank eindeutig ist. Der Objektspeicher kann optional einen _[Schlüsselgenerator](#schlüsselgenerator)_ und einen _[Schlüsselpfad](#schlüsselpfad)_ haben. Wenn der Objektspeicher einen Schlüsselpfad hat, verwendet er _[inline-Schlüssel](#inline-schlüssel)_; andernfalls verwendet er _[out-of-line-Schlüssel](#out-of-line-schlüssel)_.

Für die Referenzdokumentation zum Objektspeicher siehe [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

#### Anfrage

Der Vorgang, durch den das Lesen und Schreiben in einer Datenbank durchgeführt wird. Jede Anfrage repräsentiert eine Lese- oder Schreiboperation.

#### Transaktion

Ein atomarer Satz von Datenzugriffs- und Datenänderungsoperationen in einer bestimmten Datenbank. Sie ist die Methode, um mit den Daten in einer Datenbank zu interagieren. Tatsächlich muss jede Lese- oder Änderungsoperation in der Datenbank in einer Transaktion erfolgen.

Eine Datenbankverbindung kann mehrere aktive Transaktionen gleichzeitig haben, solange die Schreibtransaktionen keine sich überschneidenden [_Bereiche_](<#bereich_(scope)>) haben. Der Bereich der Transaktionen, der bei der Erstellung festgelegt wird, bestimmt, mit welchen Objektspeichern die Transaktion interagieren kann und bleibt während der gesamten Lebensdauer der Transaktion konstant. Wenn eine Datenbankverbindung bereits eine Schreibtransaktion mit einem Bereich hat, der nur den `flyingMonkey`-Objektspeicher umfasst, können Sie eine zweite Transaktion mit einem Bereich der `unicornCentaur`- und `unicornPegasus`-Objektspeicher starten. Bei Lesetransaktionen können Sie mehrere haben – sogar sich überschneidende.

Transaktionen sind darauf ausgelegt, kurzlebig zu sein, damit der Browser eine Transaktion beenden kann, die zu lange dauert, um Speicherressourcen freizugeben, die die langlaufende Transaktion gesperrt hat. Sie können die Transaktion abbrechen, wodurch alle in der Transaktion vorgenommenen Änderungen an der Datenbank zurückgesetzt werden. Und Sie müssen nicht einmal warten, bis die Transaktion startet oder aktiv ist, um sie abzubrechen.

Die drei Modi von Transaktionen sind: `readwrite`, `readonly` und `versionchange`. Die einzige Möglichkeit, Objektspeicher und Indizes zu erstellen und zu löschen, ist die Verwendung einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion. Um mehr über Transaktionstypen zu erfahren, sehen Sie sich den Referenzartikel für [IndexedDB](/de/docs/Web/API/IndexedDB_API) an.

Weil alles innerhalb einer Transaktion geschieht, ist es ein sehr wichtiges Konzept in IndexedDB. Um mehr über Transaktionen zu erfahren, insbesondere wie sie sich auf die Versionsverwaltung beziehen, siehe [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), das auch Referenzdokumentation enthält.

#### Version

Wenn eine Datenbank erstmals erstellt wird, ist ihre Version die Ganzzahl 1. Jede Datenbank hat gleichzeitig nur eine Version; Eine Datenbank kann nicht in mehreren Versionen gleichzeitig existieren. Der einzige Weg, die Version zu ändern, ist durch Öffnen mit einer höheren Version als der aktuellen.

### Schlüssel und Wert

#### Inline-Schlüssel

Ein Schlüssel, der als Teil des gespeicherten Wertes gespeichert wird. Er wird mithilfe eines _Schlüsselpfads_ gefunden. Ein Inline-Schlüssel kann mit einem Generator erzeugt werden. Nachdem der Schlüssel generiert wurde, kann er dann im Wert mithilfe des Schlüsselpfads gespeichert oder als Schlüssel verwendet werden.

#### Schlüssel

Ein Datenwert, nach dem gespeicherte Werte im Objektspeicher organisiert und abgerufen werden. Der Objektspeicher kann den Schlüssel aus einer von drei Quellen ableiten: einem _[Schlüsselgenerator](#schlüsselgenerator)_, einem _[Schlüsselpfad](#schlüsselpfad)_ oder einem explizit angegebenen Wert. Der Schlüssel muss einem Datentyp angehören, dessen Zahl größer ist als die vorherige. Jeder Datensatz in einem Objektspeicher muss einen Schlüssel haben, der innerhalb desselben Speichers eindeutig ist, sodass Sie keine mehrfachen Datensätze mit demselben Schlüssel in einem bestimmten Objektspeicher haben können.

Ein Schlüssel kann einer der folgenden Typen sein: [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), float, binäre Daten (dargestellt durch einen [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)-Ansicht wie ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)), und [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Die Länge eines Schlüssels, der ein Array ist, kann von `0` (ein leeres Array) bis unendlich reichen, und Sie können ein Array innerhalb eines Arrays enthalten.

Alternativ können Sie auch Datensätze in einem Objektspeicher mithilfe des _[Index](#index)_ nachschlagen.

#### Schlüsselgenerator

Ein Mechanismus zur Erzeugung neuer Schlüssel in einer geregelten Reihenfolge. Wenn ein Objektspeicher keinen Schlüsselgenerator hat, muss die Anwendung Schlüssel für die gespeicherten Datensätze bereitstellen. Generatoren sind nicht zwischen Speichern geteilt. Dies ist eher ein technisches Detail der Browser-Implementierung, da sie im Web-Entwicklungsprozess nicht wirklich erstellt oder auf Schlüsselgeneratoren zugegriffen wird.

#### Schlüsselpfad

Definiert, woher der Browser den Schlüssel aus dem Objektspeicher oder Index extrahieren soll. Ein gültiger Schlüsselpfad kann eines der folgenden sein: ein leerer String, ein JavaScript-Identifier oder mehrere durch Punkte getrennte JavaScript-Identifier oder ein Array, das irgendeines davon enthält. Es darf keine Leerzeichen enthalten.

#### Out-of-line-Schlüssel

Ein Schlüssel, der separat vom gespeicherten Wert gespeichert wird.

#### Wert

Jeder Datensatz hat einen Wert, der alles enthalten kann, was in JavaScript ausgedrückt werden kann, einschließlich [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), und null.

Wenn ein Objekt oder Array gespeichert wird, können die Eigenschaften und Werte in diesem Objekt oder Array ebenfalls alles sein, was ein gültiger Wert ist.

[Blobs](/de/docs/Web/API/Blob) und Dateien können gespeichert werden, vgl. [Spezifikation](https://w3c.github.io/IndexedDB/).

### Bereich und Umfang

#### Cursor

Ein Mechanismus, um über mehrere Datensätze mit einem _Schlüsselbereich_ zu iterieren. Der Cursor hat eine Quelle, die angibt, welcher Index oder Objektspeicher gerade durchlaufen wird. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die in der Reihenfolge der Datensatzschlüssel aufsteigend oder absteigend ist. Für die Referenzdokumentation über Cursor siehe [`IDBCursor`](/de/docs/Web/API/IDBCursor).

#### Schlüsselbereich

Ein zusammenhängendes Intervall über einen Datentyp, der für Schlüssel verwendet wird. Datensätze können mit Schlüsseln oder einem Bereich von Schlüsseln aus Objektspeichern und Indizes abgerufen werden. Sie können den Bereich mit oberen und unteren Grenzen beschränken oder filtern. Zum Beispiel können Sie über alle Werte eines Schlüssels zwischen x und y iterieren.

Für die Referenzdokumentation über Schlüsselbereich, siehe [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

#### Bereich (Scope)

Die Menge der Objektspeicher und Indizes, auf die eine Transaktion angewendet wird. Die Bereiche nur-lesender Transaktionen können sich überschneiden und gleichzeitig ausgeführt werden. Andererseits können sich die Bereiche schreibender Transaktionen nicht überschneiden. Sie können immer noch mehrere Transaktionen mit demselben Bereich gleichzeitig starten, aber sie stauen sich einfach und werden nacheinander ausgeführt.

## Nächste Schritte

Mit einem Verständnis der Schlüsselmerkmale und Kernterminologie von IndexedDB können wir uns konkreteren Themen zuwenden. Für ein Tutorial zur Verwendung der API siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Siehe auch

- [Indexed Database API Spezifikation](https://w3c.github.io/IndexedDB/)
- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)

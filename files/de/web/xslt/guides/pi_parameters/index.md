---
title: PI-Parameter
slug: Web/XSLT/Guides/PI_Parameters
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

XSLT unterstützt das Konzept, Parameter an ein Stylesheet während der Ausführung zu übergeben. Dies ist schon seit einiger Zeit möglich, wenn der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) in JavaScript verwendet wird. Wenn jedoch eine `<?xml-stylesheet?>`-Verarbeitungsanweisung (PI) verwendet wird, gab es früher keinen Weg, Parameter zu übergeben.

Zur Lösung dieses Problems wurden in [Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) zwei neue PIs implementiert (siehe [unterstützte Versionen](#mögliche_zukünftige_entwicklungen) unten für Details), `<?xslt-param?>` und `<?xslt-param-namespace?>`. Beide PIs können "Pseudo-Attribute" enthalten, so wie dies die `xml-stylesheet` PI macht.

Das folgende Dokument übergibt die beiden Parameter "color" und "size" an das Stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Beachten Sie, dass diese PIs keine Wirkung haben, wenn die Transformation mit dem `XSLTProcessor`-Objekt in JavaScript durchgeführt wird.

### Verarbeitungsanweisungen

Die Attribute in den `xslt-param` und `xslt-param-namespace` PIs werden nach den in [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) definierten Regeln geparst. Alle nicht erkannten Attribute müssen ignoriert werden. Das Parsen eines Attributs darf nicht aufgrund eines nicht erkannten Attributs fehlschlagen, solange dieses Attribut der Syntax von `xml-stylesheet` entspricht.

Sowohl die `xslt-param` als auch die `xslt-param-namespace` PIs müssen im Prolog des Dokuments erscheinen, d.h. vor dem ersten Element-Tag. Alle PIs im Prolog müssen beachtet werden, sowohl die vor als auch nach irgendeiner `xml-stylesheet` PI auftretenden.

Wenn es mehrere `xml-stylesheet` PIs gibt, gelten die Parameter für alle Stylesheets, da gemäß der XSLT-Spezifikation alle Stylesheets in ein einzelnes Stylesheet importiert werden. Beachten Sie, dass mehrere `xml-stylesheet` XSLT PIs derzeit in Firefox nicht unterstützt werden.

#### xslt-param

Die `xslt-param` PI unterstützt 4 Attribute:

- `name`
  - : Der local-name-Teil des Parameternamens. Es wird keine Syntaxüberprüfung für das Attribut durchgeführt, jedoch wird es niemals mit einem Parameter im Stylesheet übereinstimmen, wenn es kein gültiger [NCName](https://www.w3.org/TR/REC-xml-names/#NT-NCName) ist.
- `namespace`
  - : Der Namensraum des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt.
- `value`
  - : Enthält den Zeichenkettenwert für den Parameter. Der Wert des Attributs wird als Wert für den Parameter verwendet. Der Datentyp wird immer _string_ sein.
- `select`
  - : Ein [XPath](/de/docs/Web/XPath)-Ausdruck für den Parameter. Der Wert des Attributs wird als XPath-Ausdruck geparst. Das Ergebnis der Auswertung des Ausdrucks wird als Wert für den Parameter verwendet.

Wenn das Attribut `name` fehlt oder leer ist, wird die PI ignoriert.

Wenn das Attribut `namespace` fehlt oder leer ist, wird der Null-Namensraum verwendet.

Es ist kein Fehler, einen Parameternamen anzugeben, der im Stylesheet nicht existiert (oder der eine Variable im Stylesheet ist). Die PI wird ignoriert.

Wenn sowohl `value` als auch `select` vorhanden sind oder wenn weder `value` noch `select` vorhanden sind, wird die PI ignoriert.

Beachten Sie, dass `value="..."` nicht streng gleich `select="'...'"` ist, da der Wert sowohl Apostroph- als auch Anführungszeichen-Zeichen enthalten kann.

##### Beispiele

Setzen Sie den Parameter 'color' auf die Zeichenkette 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Setzen Sie den Parameter 'columns' auf die Zahl 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Setzen Sie den Parameter 'books' auf eine Knotenmenge, die alle `<book>` Elemente im Null-Namensraum enthält:

```xml
<?xslt-param name="books" select="//book"?>
```

Setzen Sie den Parameter 'show-toc' auf den booleschen Wert `true`:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### Der Kontext des select-Attributes

Der folgende Kontext wird verwendet, um den Ausdruck im **select**-Attribut zu parsen und zu bewerten.

- Der Kontextknoten ist der Knoten, der als initialer aktueller Knoten verwendet wird, wenn das Stylesheet ausgeführt wird.
- Die Kontextposition ist die Position des Kontextknotens in der anfänglichen aktuellen Knotenliste, die bei der Ausführung des Stylesheets verwendet wird.
- Die Kontextgröße ist die Größe der anfänglichen aktuellen Knotenliste, die bei der Ausführung des Stylesheets verwendet wird.
- Es sind keine Variablen verfügbar.
- Die Funktionsbibliothek ist die standardmäßige XPath-Funktionsbibliothek.
- Die Namensraumdeklarationen werden durch die `xslt-param-namespace` PIs bestimmt, siehe unten.

Wenn das **select**-Attribut fehlschlägt zu parsen oder auszuführen, wird die PI ignoriert (insbesondere wird nicht auf das **value**-Attribut zurückgegriffen).

#### xslt-param-namespace

Der `xslt-param-namespace` verwendet zwei Attribute:

- prefix
  - : Das Präfix, das zugeordnet wird.
- namespace
  - : Der Namensraum, auf den das Präfix verweist.

Ein `xslt-param-namespace` PI beeinflusst den Ausdruck im **select**-Attribut für alle `xslt-param`s, die dem PI folgen. Dies gilt auch, wenn es andere Knoten wie Kommentare oder andere PIs zwischen den `xslt-param-namespace` und `xslt-param` PIs gibt.

Es ist kein Fehler, dass mehrere PIs dasselbe Präfix verwenden, jedes neue PI ändert einfach, welchem Namensraum das Präfix zugeordnet wird.

Wenn das **prefix** fehlt, leer ist oder einem ungültigen NCName entspricht, wird die PI ignoriert.

Wenn das **namespace** fehlt, wird die PI ignoriert. Wenn das **namespace** leer ist, wird die Präfixzuordnung entfernt.

##### Beispiele

Setzen Sie den Parameter 'books' auf eine Knotenmenge, die alle `<book>` Elemente im Namensraum `http://www.example.org/myNamespace` enthält:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Unterstützte Versionen

Unterstützt seit Firefox 2.0.0.1. Das Attribut **value** wird in Firefox 2 unterstützt, aber das Attribut **select** verursacht Abstürze bei einigen Ausdrücken im 2.0-Release.

### Mögliche zukünftige Entwicklungen

Sollten wir beliebige XSLT-Funktionen im Ausdruck erlauben? `document()` scheint nützlich, aber es scheint schwierig zu sein, die Invariante beizubehalten, dass `generate-id()` für dasselbe Dokument denselben String erzeugt.

Wie sieht es mit der Abfrage von URL-Parametern im XSLT-Stylesheet aus? Zum Beispiel das Übergeben von ihnen zu angegebenen \<xsl:param>'s.

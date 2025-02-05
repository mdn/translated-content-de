---
title: PI-Parameter
slug: Web/XML/XSLT/Guides/PI_Parameters
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

XSLT unterstützt das Konzept, Parameter an ein Stylesheet beim Ausführen zu übergeben. Dies war schon seit einiger Zeit möglich, wenn der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) in JavaScript verwendet wird. Allerdings gab es früher keine Möglichkeit, Parameter zu übergeben, wenn die `<?xml-stylesheet?>`-Verarbeitungsanweisung (Processing Instruction, PI) benutzt wurde.

Zur Lösung dieses Problems wurden in [Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) (siehe [Unterstützte Versionen](#mögliche_zukünftige_entwicklungen) unten für Details) zwei neue PIs implementiert: `<?xslt-param?>` und `<?xslt-param-namespace?>`. Beide PIs können sogenannte “Pseudo-Attribute” enthalten, ähnlich wie die `xml-stylesheet`-PI.

Das folgende Dokument übergibt die zwei Parameter "color" und "size" an das Stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Beachten Sie, dass diese PIs keine Wirkung haben, wenn die Transformation mit dem Objekt `XSLTProcessor` in JavaScript durchgeführt wird.

### Verarbeitungsanweisungen

Die Attribute in den `xslt-param`- und `xslt-param-namespace`-PIs werden nach den Regeln von [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) geparst. Jegliche nicht erkannte Attribute müssen ignoriert werden. Das Parsen eines Attributs darf nicht aufgrund eines nicht erkannten Attributs fehlschlagen, solange dieses Attribut der Syntax von `xml-stylesheet` folgt.

Die `xslt-param` und `xslt-param-namespace` PIs müssen im Prolog des Dokuments erscheinen, das heißt vor dem ersten Element-Tag. Alle PIs im Prolog müssen berücksichtigt werden, sowohl die, die vor als auch die, die nach den `xml-stylesheet`-PIs erscheinen.

Wenn es mehrere `xml-stylesheet`-PIs gibt, gelten die Parameter für alle Stylesheets, da gemäß der XSLT-Spezifikation alle Stylesheets zu einem einzelnen Stylesheet importiert werden. Beachten Sie, dass mehrere `xml-stylesheet`-PIs derzeit in Firefox nicht unterstützt werden.

#### xslt-param

Die `xslt-param`-PI unterstützt 4 Attribute:

- `name`
  - : Der lokale Namensanteil des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt. Falls es jedoch kein gültiger [NCName](https://www.w3.org/TR/REC-xml-names/#NT-NCName) ist, wird es niemals mit einem Parameter im Stylesheet übereinstimmen.
- `namespace`
  - : Der Namespace des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt.
- `value`
  - : Enthält den String-Wert für den Parameter. Der Wert des Attributs wird als Wert des Parameters verwendet. Der Datentyp ist immer _string_.
- `select`
  - : Ein [XPath](/de/docs/Web/XML/XPath)-Ausdruck für den Parameter. Der Wert des Attributs wird als XPath-Ausdruck geparst. Das Ergebnis der Auswertung des Ausdrucks wird als Wert für den Parameter verwendet.

Wenn das Attribut `name` fehlt oder leer ist, wird die PI ignoriert.

Wenn das Attribut `namespace` fehlt oder leer ist, wird der Null-Namespace verwendet.

Es ist kein Fehler, einen Parameternamen anzugeben, der im Stylesheet nicht existiert (oder der eine Variable im Stylesheet ist). In diesem Fall wird die PI ignoriert.

Wenn sowohl `value` als auch `select` vorhanden sind oder wenn weder `value` noch `select` vorhanden sind, wird die PI ignoriert.

Beachten Sie, dass `value="..."` nicht strikt gleichzusetzen ist mit `select="'...'"`, da der Wert sowohl Apostroph- als auch Anführungszeichen enthalten kann.

##### Beispiele

Setzen Sie den Parameter 'color' auf den String 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Setzen Sie den Parameter 'columns' auf die Zahl 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Setzen Sie den Parameter 'books' auf eine Knotenmenge, die alle `<book>`-Elemente im Null-Namespace enthält:

```xml
<?xslt-param name="books" select="//book"?>
```

Setzen Sie den Parameter 'show-toc' auf boolean `true`:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### Kontext des Select-Attributs

Der folgende Kontext wird verwendet, um den Ausdruck im **select**-Attribut zu parsen und auszuwerten.

- Der Kontextknoten ist der Knoten, der als initialer aktueller Knoten beim Ausführen des Stylesheets verwendet wird.
- Die Kontextposition ist die Position des Kontextknotens in der initialen aktuellen Knotenliste, die beim Ausführen des Stylesheets verwendet wird.
- Die Kontextgröße ist die Größe der initialen aktuellen Knotenliste, die beim Ausführen des Stylesheets verwendet wird.
- Keine Variablen sind verfügbar.
- Die Funktionsbibliothek ist die Standard-XPath-Funktionsbibliothek.
- Die Namespace-Deklarationen werden durch die `xslt-param-namespace`-PIs festgelegt, siehe unten.

Falls das **select**-Attribut nicht geparst oder ausgeführt werden kann, wird die PI ignoriert (insbesondere fällt sie nicht auf das **value**-Attribut zurück).

#### xslt-param-namespace

Die `xslt-param-namespace`-PI verwendet zwei Attribute:

- prefix
  - : Das Präfix, das gemappt wird.
- namespace
  - : Der Namespace, auf den das Präfix verweist.

Eine `xslt-param-namespace`-PI beeinflusst den Ausdruck im **select**-Attribut für alle nachfolgenden `xslt-param`-PIs. Dies gilt auch dann, wenn sich andere Knoten wie Kommentare oder andere PIs zwischen der `xslt-param-namespace`- und den `xslt-param`-PIs befinden.

Es ist kein Fehler, dass mehrere PIs dasselbe Präfix verwenden. Jede neue PI ändert einfach, auf welchen Namespace das Präfix verweist.

Wenn **prefix** fehlt, leer ist oder einem ungültigen NCName entspricht, wird die PI ignoriert.

Wenn **namespace** fehlt, wird die PI ignoriert. Wenn **namespace** leer ist, wird die Präfix-Mapping entfernt.

##### Beispiele

Setzen Sie den Parameter 'books' auf eine Knotenmenge, die alle `<book>`-Elemente im Namespace `http://www.example.org/myNamespace` enthält:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Unterstützte Versionen

Unterstützt ab Firefox 2.0.0.1. Das **value**-Attribut wird in Firefox 2 unterstützt, aber das **select**-Attribut stürzt für einige Ausdrücke in der Version 2.0 ab.

### Mögliche zukünftige Entwicklungen

Sollten wir alle XSLT-Funktionen im Ausdruck erlauben? `document()` scheint nützlich, aber es scheint schwierig zu sein, die Invariante beizubehalten, dass `generate-id()` denselben String für dasselbe Dokument erzeugt.

Was ist mit der Abfrage von URL-Parametern im XSLT-Stylesheet? Z. B. deren Übergabe an spezifische \<xsl:param>.

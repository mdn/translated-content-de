---
title: PI-Parameter
slug: Web/XSLT/PI_Parameters
l10n:
  sourceCommit: 9f325923caffac2d0239773d4562303fd02ea30a
---

{{XsltSidebar}}

### Übersicht

XSLT unterstützt das Konzept der Übergabe von Parametern an ein Stylesheet bei dessen Ausführung. Dies war bereits möglich, wenn der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) in JavaScript verwendet wird. Wenn jedoch eine `<?xml-stylesheet?>` Processing Instruction (PI) verwendet wird, gab es bisher keine Möglichkeit, Parameter bereitzustellen.

Um dieses Problem zu lösen, wurden in [Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) zwei neue PIs implementiert (siehe unten [Unterstützte Versionen](#unterstützte_versionen) für Details), `<?xslt-param?>` und `<?xslt-param-namespace?>`. Beide PIs können "Pseudo-Attribute" enthalten, ähnlich wie die `xml-stylesheet` PI.

Das folgende Dokument übergibt die zwei Parameter "color" und "size" an das Stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Beachten Sie, dass diese PIs keine Wirkung haben, wenn die Transformation mithilfe des `XSLTProcessor`-Objekts in JavaScript durchgeführt wird.

### Processing Instructions

Die Attribute in den `xslt-param` und `xslt-param-namespace` PIs werden anhand der in [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) definierten Regeln analysiert. Alle nicht erkannten Attribute müssen ignoriert werden. Die Analyse eines Attributs darf aufgrund eines nicht erkannten Attributs nicht scheitern, solange dieses Attribut der Syntax in `xml-stylesheet` folgt.

Sowohl die `xslt-param` als auch die `xslt-param-namespace` PIs müssen im Prolog des Dokuments erscheinen, d.h. vor dem ersten Element-Tag. Alle PIs im Prolog müssen berücksichtigt werden, sowohl diejenigen, die vor als auch nach irgendwelchen `xml-stylesheet` PIs auftreten.

Wenn es mehrere `xml-stylesheet` PIs gibt, gelten die Parameter für alle Stylesheets, da alle Stylesheets gemäß der XSLT-Spezifikation in ein einziges Stylesheet importiert werden. Beachten Sie, dass mehrere `xml-stylesheet` XSLT PIs derzeit in Firefox nicht unterstützt werden.

#### xslt-param

Das `xslt-param` PI unterstützt 4 Attribute:

- `name`
  - : Der lokale Namensbestandteil des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt, jedoch gilt: Wenn es kein gültiger [NCName](https://www.w3.org/TR/REC-xml-names/#NT-NCName) ist, wird es nie mit einem Parameter im Stylesheet übereinstimmen.
- `namespace`
  - : Der Namensraum des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt.
- `value`
  - : Enthält den Zeichenfolgenwert für den Parameter. Der Wert des Attributs wird als Wert für den Parameter verwendet. Der Datentyp wird immer _string_ sein.
- `select`
  - : Ein [XPath](/de/docs/Web/XPath)-Ausdruck für den Parameter. Der Wert des Attributs wird als XPath-Ausdruck analysiert. Das Ergebnis der Auswertung des Ausdrucks wird als Wert für den Parameter verwendet.

Wenn das `name`-Attribut fehlt oder leer ist, wird die PI ignoriert.

Wenn das `namespace`-Attribut fehlt oder leer ist, wird der Null-Namensraum verwendet.

Es ist kein Fehler, einen Parameternamen anzugeben, der im Stylesheet nicht existiert (oder der eine Variable im Stylesheet ist). Die PI wird ignoriert.

Wenn sowohl `value` als auch `select` vorhanden sind oder wenn weder `value` noch `select` vorhanden sind, wird die PI ignoriert.

Beachten Sie, dass `value="..."` nicht streng gleich dem `select="'...'"` ist, da der Wert sowohl Apostroph- als auch Anführungszeichenzeichen enthalten kann.

##### Beispiele

Setzen Sie den Parameter 'color' auf den String 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Setzen Sie den Parameter 'columns' auf die Zahl 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Setzen Sie den Parameter 'books' auf einen Node-Set, der alle `<book>`-Elemente im Null-Namensraum enthält:

```xml
<?xslt-param name="books" select="//book"?>
```

Setzen Sie den Parameter 'show-toc' auf den booleschen Wert `true`:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### Der Kontext des Select-Attributs

Der folgende Kontext wird verwendet, um den Ausdruck im **select**-Attribut zu analysieren und auszuwerten.

- Der Kontextknoten ist der Knoten, der als anfänglicher aktueller Knoten verwendet wird, wenn das Stylesheet ausgeführt wird.
- Die Kontextposition ist die Position des Kontextknotens in der anfänglichen aktuellen Knotenliste, die beim Ausführen des Stylesheets verwendet wird.
- Die Kontextgröße ist die Größe der anfänglichen aktuellen Knotenliste, die beim Ausführen des Stylesheets verwendet wird.
- Es sind keine Variablen verfügbar.
- Die Funktionsbibliothek ist die Standard-XPath-Funktionsbibliothek.
- Die Namensraumdeklarationen werden durch die `xslt-param-namespace` PIs bestimmt, siehe unten.

Wenn das **select**-Attribut nicht analysiert oder ausgeführt werden kann, wird die PI ignoriert (insbesondere fällt sie nicht auf das **value**-Attribut zurück).

#### xslt-param-namespace

Das `xslt-param-namespace` verwendet zwei Attribute:

- prefix
  - : Das Präfix, das zugeordnet wird.
- namespace
  - : Der Namensraum, dem das Präfix zugeordnet wird.

Eine `xslt-param-namespace` PI beeinflusst den Ausdruck im **select**-Attribut für alle `xslt-param`, die der PI folgen. Dies gilt selbst dann, wenn andere Knoten wie Kommentare oder andere PIs zwischen den `xslt-param-namespace` und `xslt-param` PIs vorhanden sind.

Es ist kein Fehler, wenn mehrere PIs dasselbe Präfix verwenden, jede neue PI ändert einfach, welchem Namensraum das Präfix zugeordnet wird.

Wenn **prefix** fehlt, leer ist oder einem ungültigen NCName entspricht, wird die PI ignoriert.

Wenn **namespace** fehlt, wird die PI ignoriert. Wenn **namespace** leer ist, wird die Präfixzuordnung entfernt.

##### Beispiele

Setzen Sie den Parameter 'books' auf einen Node-Set, der alle `<book>`-Elemente im Namensraum `http://www.example.org/myNamespace` enthält:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Unterstützte Versionen

Unterstützt ab Firefox 2.0.0.1. Das **value**-Attribut wird in Firefox 2 unterstützt, aber das **select**-Attribut kann in der 2.0-Version für einige Ausdrücke abstürzen.

### Mögliche zukünftige Entwicklungen

Sollten wir in Betracht ziehen, alle XSLT-Funktionen im Ausdruck zuzulassen? `document()` scheint nützlich zu sein, aber es scheint schwierig, die Invariante aufrechtzuerhalten, dass `generate-id()` für dasselbe Dokument denselben String erzeugen sollte.

Was ist mit der Abfrage von URL-Parametern im XSLT-Stylesheet? Z.B. Übergabe an bestimmte \<xsl:param>'s.

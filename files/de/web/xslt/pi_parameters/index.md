---
title: PI-Parameter
slug: Web/XSLT/PI_Parameters
l10n:
  sourceCommit: 9f325923caffac2d0239773d4562303fd02ea30a
---

{{XsltSidebar}}

### Überblick

XSLT unterstützt das Konzept, Parameter an ein Stylesheet beim Ausführen zu übergeben. Dies war bereits seit einiger Zeit möglich, wenn man den {{domxref("XSLTProcessor")}} in JavaScript verwendet. Allerdings gab es früher keine Möglichkeit, Parameter zu übergeben, wenn eine `<?xml-stylesheet?>` Verarbeitungseinweisung (PI) verwendet wurde.

Um dieses Problem zu lösen, wurden zwei neue PIs in [Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) implementiert (siehe [Unterstützte Versionen](#unterstützte_versionen) unten für Details), `<?xslt-param?>` und `<?xslt-param-namespace?>`. Beide PIs können "Pseudoattribute" enthalten, genau wie das `xml-stylesheet` PI.

Das folgende Dokument übergibt die beiden Parameter "color" und "size" an das Stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Beachten Sie, dass diese PIs keine Wirkung haben, wenn die Transformation mit dem `XSLTProcessor` Objekt in JavaScript durchgeführt wird.

### Verarbeitungseinweisungen

Die Attribute in den `xslt-param` und `xslt-param-namespace` PIs werden unter Verwendung der in [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) definierten Regeln analysiert. Jegliche nicht erkannten Attribute müssen ignoriert werden. Das Parsen eines Attributs darf nicht fehlschlagen aufgrund der Anwesenheit eines nicht erkannten Attributs, solange dieses Attribut der Syntax in `xml-stylesheet` folgt.

Sowohl die `xslt-param` als auch die `xslt-param-namespace` PIs müssen im Prolog des Dokuments erscheinen, d.h. vor dem ersten Element-Tag. Alle PIs im Prolog müssen berücksichtigt werden, sowohl diejenigen, die vor als auch diejenigen, die nach einem `xml-stylesheet` PI auftreten.

Wenn es mehrere `xml-stylesheet` PIs gibt, gelten die Parameter für alle Stylesheets, da alle Stylesheets gemäß XSLT-Spezifikation in ein einziges Stylesheet importiert werden. Beachten Sie, dass mehrere `xml-stylesheet` XSLT PIs derzeit in Firefox nicht unterstützt werden.

#### xslt-param

Das `xslt-param` PI unterstützt 4 Attribute:

- `name`
  - : Der lokale Namensanteil des Parameternamens. Es erfolgt keine syntaktische Überprüfung des Attributs. Wenn es jedoch kein gültiger [NCName](https://www.w3.org/TR/REC-xml-names/#NT-NCName) ist, wird er niemals mit einem Parameter im Stylesheet übereinstimmen.
- `namespace`
  - : Der Namensraum des Parameternamens. Es erfolgt keine syntaktische Überprüfung des Attributs.
- `value`
  - : Enthält den string-Wert für den Parameter. Der Wert des Attributs wird als Wert für den Parameter verwendet. Der Datentyp bleibt immer _string_.
- `select`
  - : Ein [XPath](/de/docs/Web/XPath)-Ausdruck für den Parameter. Der Wert des Attributs wird als XPath-Ausdruck geparst. Das Ergebnis der Auswertung des Ausdrucks wird als Wert für den Parameter verwendet.

Wenn das `name` Attribut fehlt oder leer ist, wird das PI ignoriert.

Wenn das `namespace` Attribut fehlt oder leer ist, wird der Null-Namensraum verwendet.

Es ist kein Fehler, einen Parameternamen anzugeben, der im Stylesheet nicht existiert (oder der eine Variable im Stylesheet ist). Das PI wird ignoriert.

Wenn sowohl `value` als auch `select` vorhanden sind oder wenn weder `value` noch `select` vorhanden sind, wird das PI ignoriert.

Beachten Sie, dass `value="..."` nicht strikt gleich `select="'...'"` ist, da der Wert sowohl Apostroph- als auch Anführungszeichenzeichen enthalten kann.

##### Beispiele

Setzen Sie den Parameter 'color' auf den String 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Setzen Sie den Parameter 'columns' auf die Nummer 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Setzen Sie den Parameter 'books' auf ein Knotenset, das alle `<book>`-Elemente im Null-Namensraum enthält:

```xml
<?xslt-param name="books" select="//book"?>
```

Setzen Sie den Parameter 'show-toc' auf den booleschen Wert `true`:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### Der Kontext des select-Attributs

Der folgende Kontext wird verwendet, um den Ausdruck im **select**-Attribut zu parsen und auszuwerten.

- Der Kontextknoten ist der Knoten, der als initialer aktueller Knoten verwendet wird, wenn das Stylesheet ausgeführt wird.
- Die Kontextposition ist die Position des Kontextknotens in der initialen aktuellen Knotenliste, die beim Ausführen des Stylesheets verwendet wird.
- Die Kontextgröße ist die Größe der initialen aktuellen Knotenliste, die beim Ausführen des Stylesheets verwendet wird.
- Es sind keine Variablen verfügbar.
- Die Funktionsbibliothek ist die Standard-XPath-Funktionsbibliothek.
- Die Namensraumdeklarationen werden von den `xslt-param-namespace` PIs bestimmt, siehe unten.

Wenn das **select**-Attribut nicht geparst oder ausgeführt werden kann, wird das PI ignoriert (insbesondere fällt es nicht auf das **value**-Attribut zurück).

#### xslt-param-namespace

Das `xslt-param-namespace` verwendet zwei Attribute:

- prefix
  - : Der Präfix, der abgebildet wird.
- namespace
  - : Der Namensraum, auf den der Präfix abzielt.

Ein `xslt-param-namespace` PI beeinflusst den Ausdruck im **select**-Attribut für alle `xslt-param`s, die dem PI folgen. Dies gilt auch, wenn sich andere Knoten wie Kommentare oder andere PIs zwischen den `xslt-param-namespace` und `xslt-param` PIs befinden.

Es ist kein Fehler, wenn mehrere PIs denselben Präfix verwenden, jedes neue PI ändert einfach den Namensraum, auf den der Präfix zeigt.

Wenn **prefix** fehlt, leer ist oder einem ungültigen NCName entspricht, wird das PI ignoriert.

Wenn **namespace** fehlt, wird das PI ignoriert. Wenn **namespace** leer ist, wird die Präfixzuordnung entfernt.

##### Beispiele

Setzen Sie den Parameter 'books' auf ein Knotenset, das alle `<book>`-Elemente im `http://www.example.org/myNamespace` Namensraum enthält:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Unterstützte Versionen

Wird ab Firefox 2.0.0.1 unterstützt. Das **value**-Attribut wird in Firefox 2 unterstützt, aber das **select**-Attribut verursacht Abstürze bei einigen Ausdrücken in der Version 2.0.

### Mögliche zukünftige Entwicklungen

Sollten wir in Erwägung ziehen, alle XSLT-Funktionen im Ausdruck zuzulassen? `document()` scheint nützlich zu sein, aber es erscheint schwierig, das Invariante zu wahren, dass `generate-id()` denselben String für dasselbe Dokument erzeugen sollte.

Was ist mit dem Abfragen von URL-Parametern im XSLT Stylesheet? Zum Beispiel, diese an angegebene `<xsl:param>` weiterzugeben.

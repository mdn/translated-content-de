---
title: PI-Parameter
slug: Web/XSLT/PI_Parameters
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{XsltSidebar}}

### Übersicht

XSLT unterstützt das Konzept der Übergabe von Parametern an ein Stylesheet während der Ausführung. Dies war schon länger möglich, wenn der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) in JavaScript verwendet wurde. Wenn jedoch eine `<?xml-stylesheet?>`-Verarbeitungsanweisung (PI) genutzt wurde, gab es bisher keine Möglichkeit, Parameter bereitzustellen.

Um dieses Problem zu lösen, wurden in [Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) zwei neue PIs implementiert (siehe [Unterstützte Versionen](#unterstützte_versionen) unten für Details), `<?xslt-param?>` und `<?xslt-param-namespace?>`. Beide PIs können "Pseudo-Attribute" enthalten, genau wie die `xml-stylesheet`-PI.

Das folgende Dokument übergibt die beiden Parameter "color" und "size" an das Stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Beachten Sie, dass diese PIs keine Wirkung haben, wenn die Transformation unter Verwendung des `XSLTProcessor`-Objekts in JavaScript erfolgt.

### Verarbeitungsanweisungen

Die Attribute in den `xslt-param`- und `xslt-param-namespace`-PIs werden nach den Regeln in [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) analysiert. Alle nicht erkannten Attribute müssen ignoriert werden. Das Parsen eines Attributs darf aufgrund eines nicht erkannten Attributs nicht fehlschlagen, solange dieses Attribut der Syntax in `xml-stylesheet` folgt.

Sowohl die `xslt-param`- als auch die `xslt-param-namespace`-PIs müssen im Prolog des Dokuments erscheinen, d. h. vor dem ersten Elemente-Tag. Alle PIs im Prolog müssen berücksichtigt werden, sowohl diejenigen, die vor als auch nach den `xml-stylesheet`-PIs auftreten.

Wenn es mehrere `xml-stylesheet`-PIs gibt, gelten die Parameter für alle Stylesheets, da alle Stylesheets gemäß der XSLT-Spezifikation in ein einziges Stylesheet importiert werden. Beachten Sie, dass mehrere `xml-stylesheet`-PIs derzeit in Firefox nicht unterstützt werden.

#### xslt-param

Der `xslt-param`-PI unterstützt vier Attribute:

- `name`
  - : Der lokale Namensanteil des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt, aber wenn es kein gültiger [NCName](https://www.w3.org/TR/REC-xml-names/#NT-NCName) ist, wird es niemals einem Parameter im Stylesheet entsprechen.
- `namespace`
  - : Der Namensraum des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt.
- `value`
  - : Enthält den Zeichenfolgewert für den Parameter. Der Wert des Attributs wird als Wert für den Parameter verwendet. Der Datentyp ist immer _string_.
- `select`
  - : Ein [XPath](/de/docs/Web/XPath)-Ausdruck für den Parameter. Der Wert des Attributs wird als ein XPath-Ausdruck geparst. Das Ergebnis der Auswertung des Ausdrucks wird als Wert für den Parameter verwendet.

Wenn das `name`-Attribut fehlt oder leer ist, wird die PI ignoriert.

Wenn das `namespace`-Attribut fehlt oder leer ist, wird der Null-Namensraum verwendet.

Es ist kein Fehler, einen Parameternamen anzugeben, der im Stylesheet nicht existiert (oder der im Stylesheet eine Variable ist). Die PI wird ignoriert.

Wenn sowohl `value` als auch `select` vorhanden sind oder wenn weder `value` noch `select` vorhanden sind, wird die PI ignoriert.

Beachten Sie, dass `value="..."` nicht strikt gleich `select="'...'"` ist, da der Wert sowohl Apostroph- als auch Anführungszeichen-Zeichen enthalten kann.

##### Beispiele

Setzen Sie den Parameter 'color' auf die Zeichenkette 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Setzen Sie den Parameter 'columns' auf die Zahl 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Setzen Sie den Parameter 'books' auf eine Knotenmenge, die alle `<book>`-Elemente im Null-Namensraum enthält:

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
- Die Namensraumdeklarationen werden durch die `xslt-param-namespace`-PIs bestimmt, siehe unten.

Wenn das **select**-Attribut beim Parsen oder Ausführen fehlschlägt, wird die PI ignoriert (insbesondere erfolgt kein Rückgriff auf das **value**-Attribut).

#### xslt-param-namespace

Der `xslt-param-namespace` verwendet zwei Attribute:

- prefix
  - : Das Präfix, das abgebildet wird.
- namespace
  - : Der Namensraum, dem das Präfix zugeordnet wird.

Ein `xslt-param-namespace`-PI wirkt sich auf den Ausdruck im **select**-Attribut für alle `xslt-param`s aus, die auf die PI folgen. Dies gilt auch dann, wenn sich andere Knoten wie Kommentare oder andere PIs zwischen den `xslt-param-namespace`- und `xslt-param`-PIs befinden.

Es ist kein Fehler, dass mehrere PIs dasselbe Präfix verwenden; jede neue PI ändert einfach den Namensraum, dem das Präfix zugeordnet ist.

Wenn **prefix** fehlt, leer ist oder einem ungültigen NCName entspricht, wird die PI ignoriert.

Wenn **namespace** fehlt, wird die PI ignoriert. Wenn **namespace** leer ist, wird die Präfix-Abbildung entfernt.

##### Beispiele

Setzen Sie den Parameter 'books' auf eine Knotenmenge, die alle `<book>`-Elemente im Namensraum `http://www.example.org/myNamespace` enthält:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Unterstützte Versionen

Unterstützt ab Firefox 2.0.0.1. Das **value**-Attribut wird in Firefox 2 unterstützt, aber das **select**-Attribut führt bei einigen Ausdrücken zum Absturz in der Version 2.0.

### Mögliche zukünftige Entwicklungen

Sollten wir erlauben, dass beliebige XSLT-Funktionen im Ausdruck verwendet werden? `document()` scheint nützlich zu sein, aber es scheint schwierig zu sein, die Invariante beizubehalten, dass `generate-id()` denselben String für dasselbe Dokument erzeugen sollte.

Was ist mit der Abfrage von URL-Parametern im XSLT-Stylesheet? Z. B. diese an angegebene `<xsl:param>` übergeben.

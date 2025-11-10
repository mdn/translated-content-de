---
title: PI-Parameter
slug: Web/XML/XSLT/Guides/PI_Parameters
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

XSLT unterstützt das Konzept, Parameter an ein Stylesheet zu übergeben, wenn es ausgeführt wird. Dies war schon eine Weile möglich, wenn der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) in JavaScript verwendet wurde. Bei der Verwendung einer `<?xml-stylesheet?>`-Verarbeitungsanweisung (PI) gab es jedoch bisher keine Möglichkeit, Parameter bereitzustellen.

Um dieses Problem zu lösen, wurden in [Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) zwei neue PIs implementiert (siehe [Unterstützte Versionen](#mögliche_zukünftige_entwicklungen) unten für Details), `<?xslt-param?>` und `<?xslt-param-namespace?>`. Beide PIs können "Pseudo-Attribute" enthalten, genauso wie es der `xml-stylesheet` PI tut.

Das folgende Dokument übergibt die beiden Parameter "color" und "size" an das Stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Beachten Sie, dass diese PIs keine Wirkung haben, wenn die Transformation mit dem `XSLTProcessor`-Objekt in JavaScript durchgeführt wird.

### Verarbeitungsanweisungen

Die Attribute in den `xslt-param`- und `xslt-param-namespace`-PIs werden nach den Regeln des [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) geparst. Unbekannte Attribute müssen ignoriert werden. Das Parsen eines Attributs darf nicht fehlschlagen aufgrund eines unbekannten Attributs, solange dieses Attribut der Syntax in `xml-stylesheet` folgt.

Sowohl die `xslt-param`- als auch die `xslt-param-namespace`-PIs müssen im Prolog des Dokuments erscheinen, d.h. vor dem ersten Element-Tag. Alle PIs im Prolog müssen berücksichtigt werden, sowohl diejenigen, die vor als auch nach den `xml-stylesheet`-PIs auftreten.

Wenn es mehrere `xml-stylesheet`-PIs gibt, gelten die Parameter für alle Stylesheets, da alle Stylesheets gemäß der XSLT-Spezifikation zu einem einzigen Stylesheet importiert werden. Beachten Sie, dass mehrere `xml-stylesheet`-XSLT-PIs derzeit in Firefox nicht unterstützt werden.

#### xslt-param

Der `xslt-param` PI unterstützt 4 Attribute:

- `name`
  - : Der lokale Namensanteil des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt, jedoch wird er, wenn es sich nicht um einen gültigen [NCName](https://www.w3.org/TR/xml-names/#NT-NCName) handelt, niemals mit einem Parameter im Stylesheet übereinstimmen.
- `namespace`
  - : Der Namensraum des Parameternamens. Es wird keine Syntaxprüfung für das Attribut durchgeführt.
- `value`
  - : Enthält den String-Wert für den Parameter. Der Wert des Attributs wird als Wert für den Parameter verwendet. Der Datentyp ist immer _string_.
- `select`
  - : Ein [XPath](/de/docs/Web/XML/XPath)-Ausdruck für den Parameter. Der Wert des Attributs wird als XPath-Ausdruck geparst. Das Ergebnis der Auswertung des Ausdrucks wird als Wert für den Parameter verwendet.

Wenn das `name`-Attribut fehlt oder leer ist, wird der PI ignoriert.

Wenn das `namespace`-Attribut fehlt oder leer ist, wird der null Namensraum verwendet.

Es ist kein Fehler, einen Parameternamen anzugeben, der im Stylesheet nicht existiert (oder der eine Variable im Stylesheet ist). Der PI wird ignoriert.

Wenn sowohl `value` als auch `select` vorhanden sind oder wenn weder `value` noch `select` vorhanden sind, wird der PI ignoriert.

Beachten Sie, dass `value="..."` nicht strikt gleich `select="'...'"` ist, da der Wert sowohl Apostroph- als auch Anführungszeichen-Zeichen enthalten kann.

##### Beispiele

Setzen Sie den Parameter 'color' auf den String 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Setzen Sie den Parameter 'columns' auf die Nummer 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Setzen Sie den Parameter 'books' auf eine Knotenmenge, die alle `<book>`-Elemente im null Namensraum enthält:

```xml
<?xslt-param name="books" select="//book"?>
```

Setzen Sie den Parameter 'show-toc' auf den booleschen Wert `true`:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### Der Kontext des select-Attributs

Der folgende Kontext wird verwendet, um den Ausdruck im **select**-Attribut zu parsen und auszuwerten.

- Der Kontextknoten ist der Knoten, der als initialer aktueller Knoten beim Ausführen des Stylesheets verwendet wird.
- Die Kontextposition ist die Position des Kontextknotens in der initialen aktuellen Knotenliste, die beim Ausführen des Stylesheets verwendet wird.
- Die Kontextgröße ist die Größe der initialen aktuellen Knotenliste, die beim Ausführen des Stylesheets verwendet wird.
- Es sind keine Variablen verfügbar.
- Die Funktionsbibliothek ist die standardmäßige XPath-Funktionsbibliothek.
- Die Namensraumdeklarationen werden von den `xslt-param-namespace`-PIs bestimmt, siehe unten.

Wenn das **select**-Attribut fehlschlägt oder nicht ausgeführt wird, wird der PI ignoriert (insbesondere wird nicht auf das **value**-Attribut zurückgegriffen).

#### xslt-param-namespace

Der `xslt-param-namespace` verwendet zwei Attribute:

- prefix
  - : Das Präfix, das zugeordnet wird.
- namespace
  - : Der Namensraum, dem das Präfix zugeordnet ist.

Ein `xslt-param-namespace` PI beeinflusst den Ausdruck im **select**-Attribut für alle `xslt-param`s, die dem PI folgen. Dies gilt auch, wenn es andere Knoten wie Kommentare oder andere PIs zwischen den `xslt-param-namespace`- und `xslt-param`-PIs gibt.

Es ist kein Fehler, wenn mehrere PIs dasselbe Präfix verwenden; jedes neue PI ändert einfach die Zuordnung des Präfixes zu einem anderen Namensraum.

Wenn **prefix** fehlt, leer ist oder einem ungültigen NCName entspricht, wird der PI ignoriert.

Wenn **namespace** fehlt, wird der PI ignoriert. Wenn **namespace** leer ist, wird die Präfixzuordnung entfernt.

##### Beispiele

Setzen Sie den Parameter 'books' auf eine Knotenmenge, die alle `<book>`-Elemente im Namensraum `http://www.example.org/myNamespace` enthält:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Unterstützte Versionen

Unterstützt seit Firefox 2.0.0.1. Das **value**-Attribut wird in Firefox 2 unterstützt, aber das **select**-Attribut verursacht Abstürze bei einigen Ausdrücken in der Version 2.0.

### Mögliche zukünftige Entwicklungen

Sollten wir die Verwendung beliebiger XSLT-Funktionen im Ausdruck erlauben? `document()` scheint nützlich, aber es scheint schwierig, das Invariant aufrechtzuerhalten, dass `generate-id()` denselben String für dasselbe Dokument erzeugen sollte.

Wie wäre es mit der Abfrage von URL-Parametern im XSLT-Stylesheet? Z.B. das Übergeben an spezifizierte \<xsl:param>'s.

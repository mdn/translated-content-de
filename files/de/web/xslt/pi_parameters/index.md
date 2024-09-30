---
title: PI-Parameter
slug: Web/XSLT/PI_Parameters
l10n:
  sourceCommit: 9f325923caffac2d0239773d4562303fd02ea30a
---

{{XsltSidebar}}

### Überblick

XSLT unterstützt das Konzept des Übergebens von Parametern an ein Stylesheet bei dessen Ausführung. Dies war schon seit einiger Zeit möglich, wenn man den [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) in JavaScript nutzt. Wenn jedoch eine `<?xml-stylesheet?>` Verarbeitungsanweisung (PI) verwendet wird, gab es bisher keine Möglichkeit, Parameter bereitzustellen.

Um dieses Problem zu lösen, wurden in [Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) (Details siehe [Unterstützte Versionen](#unterstützte_versionen) unten) zwei neue PIs implementiert, `<?xslt-param?>` und `<?xslt-param-namespace?>`. Beide PIs können "Pseudoattribute" enthalten, genauso wie die `xml-stylesheet` PI.

Das folgende Dokument übergibt die beiden Parameter "color" und "size" an das Stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Beachten Sie, dass diese PIs keine Wirkung haben, wenn die Transformation mittels des `XSLTProcessor` Objekts in JavaScript erfolgt.

### Verarbeitungsanweisungen

Die Attribute in den `xslt-param` und `xslt-param-namespace` PIs werden gemäß den in [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) definierten Regeln geparst. Jegliche nicht erkannten Attribute müssen ignoriert werden. Das Parsen eines Attributs darf wegen der Anwesenheit eines nicht erkannten Attributs nicht scheitern, solange dieses Attribut der Syntax in `xml-stylesheet` folgt.

Sowohl die `xslt-param` als auch die `xslt-param-namespace` PIs müssen im Prolog des Dokuments erscheinen, d.h. vor dem ersten Element-Tag. Alle PIs im Prolog müssen berücksichtigt werden, sowohl diejenigen, die vor als auch nach den `xml-stylesheet` PIs auftreten.

Wenn es mehrere `xml-stylesheet` PIs gibt, gelten die Parameter für alle Stylesheets, da alle Stylesheets gemäß der XSLT-Spezifikation in ein einziges Stylesheet importiert werden. Bitte beachten Sie, dass mehrere `xml-stylesheet` XSLT PIs derzeit in Firefox nicht unterstützt werden.

#### xslt-param

Das `xslt-param` PI unterstützt 4 Attribute:

- `name`
  - : Der lokale Name des Parameternamens. Es erfolgt keine Syntaxprüfung für das Attribut, allerdings wird es, wenn es kein gültiger [NCName](https://www.w3.org/TR/REC-xml-names/#NT-NCName) ist, keinen Parameter im Stylesheet treffen.
- `namespace`
  - : Der Namensraum des Parameternamens. Es erfolgt keine Syntaxprüfung für das Attribut.
- `value`
  - : Enthält den Zeichenfolgewert für den Parameter. Der Wert des Attributs wird als Wert für den Parameter verwendet. Der Datentyp ist immer _string_.
- `select`
  - : Ein [XPath](/de/docs/Web/XPath) Ausdruck für den Parameter. Der Wert des Attributs wird als XPath-Ausdruck geparst. Das Ergebnis der Auswertungs des Ausdrucks wird als Wert für den Parameter verwendet.

Wenn das `name` Attribut fehlt oder leer ist, wird das PI ignoriert.

Wenn das `namespace` Attribut fehlt oder leer ist, wird der Null-Namensraum verwendet.

Es ist kein Fehler, einen Parameternamen anzugeben, der nicht im Stylesheet existiert (oder der eine Variable im Stylesheet ist). Das PI wird ignoriert.

Wenn sowohl `value` als auch `select` vorhanden sind oder wenn weder `value` noch `select` vorhanden sind, wird das PI ignoriert.

Beachten Sie, dass `value="..."` nicht strikt gleich `select="'...'"` ist, da der Wert sowohl Apostrophe als auch Anführungszeichen enthalten kann.

##### Beispiele

Setzen Sie den Parameter 'color' auf die Zeichenfolge 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Setzen Sie den Parameter 'columns' auf die Zahl 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Setzen Sie den Parameter 'books' auf ein Knoten-Set, das alle `<book>` Elemente im Null-Namensraum enthält:

```xml
<?xslt-param name="books" select="//book"?>
```

Setzen Sie den Parameter 'show-toc' auf den booleschen Wert `true`:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### Der Kontext des select Attributs

Der folgende Kontext wird verwendet, um den Ausdruck im **select** Attribut zu parsen und zu bewerten.

- Der Kontextknoten ist der Knoten, der als anfänglicher aktueller Knoten genutzt wird, wenn das Stylesheet ausgeführt wird.
- Die Kontextposition ist die Position des Kontextknotens in der anfänglichen aktuellen Knotenliste, die genutzt wird, wenn das Stylesheet ausgeführt wird.
- Die Kontextgröße ist die Größe der anfänglichen aktuellen Knotenliste, die genutzt wird, wenn das Stylesheet ausgeführt wird.
- Es sind keine Variablen verfügbar.
- Die Funktionsbibliothek ist die standardmäßige XPath-Funktionsbibliothek.
- Die Namensraumdeklarationen werden durch die `xslt-param-namespace` PIs bestimmt, siehe unten.

Wenn das **select** Attribut nicht geparst oder ausgeführt werden kann, wird das PI ignoriert (insbesondere wird nicht auf das **value** Attribut zurückgegriffen).

#### xslt-param-namespace

Der `xslt-param-namespace` nutzt zwei Attribute:

- prefix
  - : Das Präfix, das zugeordnet wird.
- namespace
  - : Der Namensraum, dem das Präfix zugeordnet wird.

Ein `xslt-param-namespace` PI beeinflusst den Ausdruck im **select** Attribut für alle `xslt-param`s, die nach dem PI folgen. Dies gilt selbst dann, wenn es andere Knoten wie Kommentare oder andere PIs zwischen den `xslt-param-namespace` und `xslt-param` PIs gibt.

Es ist kein Fehler, wenn mehrere PIs das gleiche Präfix verwenden, jedes neue PI ändert lediglich den Namensraum, dem das Präfix zugeordnet wird.

Wenn **prefix** fehlt, leer ist oder einem ungültigen NCName entspricht, wird das PI ignoriert.

Wenn **namespace** fehlt, wird das PI ignoriert. Wenn **namespace** leer ist, wird die Präfixzuordnung entfernt.

##### Beispiele

Setzen Sie den Parameter 'books' auf ein Knoten-Set, das alle `<book>` Elemente im Namensraum `http://www.example.org/myNamespace` enthält:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Unterstützte Versionen

Unterstützt seit Firefox 2.0.0.1. Das **value** Attribut wird in Firefox 2 unterstützt, aber das **select** Attribut führt bei einigen Ausdrücken zum Absturz in der Version 2.0.

### Mögliche zukünftige Entwicklungen

Sollten wir jegliche XSLT-Funktionen im Ausdruck erlauben? `document()` erscheint nützlich, es scheint jedoch schwierig zu sein, die Invariante beizubehalten, dass `generate-id()` denselben String für dasselbe Dokument produzieren sollte.

Was ist mit der Abfrage von URL-Parametern im XSLT-Stylesheet? Zum Beispiel das Übergeben dieser an angegebene \<xsl:param>'s?

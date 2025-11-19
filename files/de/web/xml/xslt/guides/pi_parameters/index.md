---
title: PI-Parameter
slug: Web/XML/XSLT/Guides/PI_Parameters
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

XSLT unterstützt das Konzept, Parameter an ein Stylesheet zu übergeben, wenn es ausgeführt wird. Dies ist schon seit einiger Zeit möglich, wenn man den [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) in JavaScript verwendet. Bei der Verwendung einer `<?xml-stylesheet?>`-Verarbeitungsanweisung (Processing Instruction, PI) gab es jedoch bislang keine Möglichkeit, Parameter bereitzustellen.

Um dieses Problem zu lösen, wurden in [Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) (siehe unten [Unterstützte Versionen](#unterstützte_versionen) für Details) zwei neue PIs implementiert, `<?xslt-param?>` und `<?xslt-param-namespace?>`. Beide PIs können wie die `xml-stylesheet`-PI "Pseudo-Attribute" enthalten.

Das folgende Dokument übergibt die beiden Parameter "color" und "size" an das Stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Bitte beachten Sie, dass diese PIs keine Wirkung haben, wenn die Transformation unter Verwendung des `XSLTProcessor`-Objekts in JavaScript erfolgt.

## Verarbeitungsanweisungen

Die Attribute in den `xslt-param`- und `xslt-param-namespace`-PIs werden gemäß den in [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/) definierten Regeln geparst. Alle nicht erkannten Attribute müssen ignoriert werden. Das Parsen eines Attributs darf nicht aufgrund eines nicht erkannten Attributs fehlschlagen, solange das Attribut der Syntax in `xml-stylesheet` folgt.

Sowohl die `xslt-param`- als auch die `xslt-param-namespace`-PIs müssen im Prolog des Dokuments erscheinen, d.h. vor dem ersten Element-Tag. Alle PIs im Prolog müssen berücksichtigt werden, sowohl die vor als auch die nach irgendwelchen `xml-stylesheet`-PIs auftretenden.

Wenn es mehrere `xml-stylesheet`-PIs gibt, gelten die Parameter für alle Stylesheets, als Konsequenz daraus, dass alle Stylesheets gemäß der XSLT-Spezifikation in ein einziges Stylesheet importiert werden. Beachten Sie, dass mehrere `xml-stylesheet`-XSLT-PIs derzeit in Firefox nicht unterstützt werden.

### xslt-param

Die `xslt-param`-PI unterstützt 4 Attribute:

- `name`
  - : Der lokale Namensanteil des Parameternamens. Es wird keine Syntaxüberprüfung des Attributs durchgeführt, jedoch wird es nie mit einem Parameter im Stylesheet übereinstimmen, wenn es kein gültiger [NCName](https://www.w3.org/TR/xml-names/#NT-NCName) ist.
- `namespace`
  - : Der Namensraum des Parameternamens. Es wird keine Syntaxüberprüfung des Attributs durchgeführt.
- `value`
  - : Enthält den Zeichenfolgenwert für den Parameter. Der Wert des Attributs wird als Wert für den Parameter verwendet. Der Datentyp ist immer _string_.
- `select`
  - : Ein [XPath](/de/docs/Web/XML/XPath)-Ausdruck für den Parameter. Der Wert des Attributs wird als XPath-Ausdruck geparst. Das Ergebnis der Auswertung des Ausdrucks wird als Wert für den Parameter verwendet.

Wenn das `name`-Attribut fehlt oder leer ist, wird die PI ignoriert.

Wenn das `namespace`-Attribut fehlt oder leer ist, wird der Null-Namensraum verwendet.

Es ist kein Fehler, einen Parameternamen anzugeben, der im Stylesheet nicht existiert (oder der im Stylesheet eine Variable ist). Die PI wird ignoriert.

Wenn sowohl `value` als auch `select` vorhanden sind oder wenn weder `value` noch `select` vorhanden sind, wird die PI ignoriert.

Beachten Sie, dass `value="..."` nicht strikt gleich `select="'...'"` ist, da der Wert sowohl Apostroph- als auch Anführungszeichenzeichen enthalten kann.

#### Beispiele

Den Parameter 'color' auf die Zeichenfolge 'red' setzen:

```xml
<?xslt-param name="color" value="red"?>
```

Den Parameter 'columns' auf die Zahl 2 setzen:

```xml
<?xslt-param name="columns" select="2"?>
```

Den Parameter 'books' auf eine Knotenmenge setzen, die alle `<book>`-Elemente im Null-Namensraum enthält:

```xml
<?xslt-param name="books" select="//book"?>
```

Den Parameter 'show-toc' auf den booleschen Wert `true` setzen:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

#### Der Kontext des select-Attributs

Der folgende Kontext wird verwendet, um den Ausdruck im **select**-Attribut zu parsen und auszuwerten.

- Der Kontextknoten ist der Knoten, der als initialer aktueller Knoten verwendet wird, wenn das Stylesheet ausgeführt wird.
- Die Kontextposition ist die Position des Kontextknotens in der initialen aktuellen Knotenliste, die verwendet wird, wenn das Stylesheet ausgeführt wird.
- Die Kontextgröße ist die Größe der initialen aktuellen Knotenliste, die verwendet wird, wenn das Stylesheet ausgeführt wird.
- Es sind keine Variablen verfügbar.
- Die Funktionsbibliothek ist die Standard-XPath-Funktionsbibliothek.
- Die Namensraumdeklarationen werden durch die `xslt-param-namespace`-PIs bestimmt, siehe unten.

Wenn das **select**-Attribut beim Parsen oder Ausführen fehlschlägt, wird die PI ignoriert (insbesondere erfolgt kein Rückgriff auf das **value**-Attribut).

### xslt-param-namespace

Die `xslt-param-namespace` verwendet zwei Attribute:

- prefix
  - : Der zugeordnete Präfix.
- namespace
  - : Der Namensraum, dem der Präfix zugeordnet wird.

Ein `xslt-param-namespace`-PI beeinflusst den Ausdruck im **select**-Attribut für alle `xslt-param`s, die der PI folgen. Dies gilt auch, wenn es andere Knoten gibt, wie Kommentare oder andere PIs zwischen den `xslt-param-namespace`- und `xslt-param`-PIs.

Es ist kein Fehler, wenn mehrere PIs denselben Präfix verwenden; jedes neue PI ändert lediglich den Namensraum, dem der Präfix zugeordnet wird.

Wenn **prefix** fehlt, leer ist oder ein ungültiger NCName ist, wird die PI ignoriert.

Wenn **namespace** fehlt, wird die PI ignoriert. Wenn **namespace** leer ist, wird die Präfixzuordnung entfernt.

#### Beispiele

Den Parameter 'books' auf eine Knotenmenge setzen, die alle `<book>`-Elemente im `http://www.example.org/myNamespace`-Namensraum enthält:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

## Unterstützte Versionen

Unterstützt ab Firefox 2.0.0.1. Das **value**-Attribut wird in Firefox 2 unterstützt, aber das **select**-Attribut führt in der 2.0-Version bei einigen Ausdrücken zu Abstürzen.

## Mögliche zukünftige Entwicklungen

Sollten wir in dem Ausdruck alle XSLT-Funktionen zulassen? `document()` scheint nützlich, aber es scheint schwierig, die Invariante aufrechtzuerhalten, dass `generate-id()` für dasselbe Dokument denselben String erzeugen sollte.

Und wie wäre es mit der Abfrage von URL-Parametern im XSLT-Stylesheet? Zum Beispiel das Übergeben an spezifizierte \<xsl:param>'s.

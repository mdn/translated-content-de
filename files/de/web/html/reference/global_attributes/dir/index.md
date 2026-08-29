---
title: "`dir` HTML Globalattribut"
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: da275ce3eae1d8d250f1079b4643213a7a2bbb90
---

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die _Basistextausrichtung_ des Elements festlegt und dessen Inhalt von umgebendem Text inhaltlich isoliert.

{{InteractiveExample("HTML Demo: dir", "tabbed-standard")}}

```html interactive-example
<p dir="rtl">
  This paragraph is in English but incorrectly goes right to left.
</p>
<p dir="ltr">This paragraph is in English and correctly goes left to right.</p>

<hr />

<p lang="ar">هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p lang="ar" dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

## Werte

Es kann die folgenden Werte haben:

- `ltr`, das eine _links-nach-rechts_-Basisrichtung festlegt;
- `rtl`, das eine _rechts-nach-links_-Basisrichtung festlegt;
- `auto`, das dem Benutzeragenten ermöglicht, die Basisrichtung aus dem Text zu bestimmen, indem in der Regel das erste Zeichen mit einer starken Richtung (ohne `<bdi>`, `<script>`, `<style>`, `<textarea>` und Elemente mit gültigen `dir`-Attributen) verwendet wird. Für {{HTMLElement("textarea")}} und {{HTMLElement("pre")}} wird die Darstellungsausrichtung separat für jeden Absatz von Text bestimmt.

> [!NOTE]
> Der `auto`-Wert sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten aus Benutzereingaben oder externen Daten.
>
> Wenn das [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname)-Attribut verwendet wird, wenn Benutzer Eingaben übermitteln, kann es möglich sein, die Daten mit einer spezifizierten Richtung darzustellen, anstatt sich auf die automatische Erkennung zu verlassen.

Wenn nicht angegeben oder ungültig, wird die Richtung im Allgemeinen vom übergeordneten Element [geerbt](#inh%C3%A9ritance). Das Weglassen von `dir` aktiviert keine automatische Richtungsbestimmung.

### Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es im Allgemeinen die Richtung des [übergeordneten Elements](/de/docs/Web/API/Node/parentElement). Wenn kein Vorfahre eine Richtung festlegt, ist die Standardeinstellung links-nach-rechts.

Es gibt Ausnahmen:

- Ein {{HTMLElement("bdi")}}-Element bestimmt seine Richtung aus seinem Inhalt, so als wäre `dir="auto"` gesetzt.
- Ein [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)-Element verwendet die links-nach-rechts-Richtung.

## Anwendungshinweise

Die Basisrichtung wird vom Unicode Bidirectional Algorithmus ({{Glossary("BiDi", "BiDi")}}) verwendet. Während Zeichen, die als LTR oder RTL stark typisiert sind (wie lateinische, hebräische oder arabische Buchstaben), die Richtung für sich selbst und alle dazwischen liegenden neutralen Zeichen bestimmen (was "Textabschnitte" erstellt), ist die Basisrichtung in zwei Szenarien notwendig:

- Sie wird von neutralen Zeichen (wie Leerzeichen oder Satzzeichen) an den Grenzen von Textabschnitten mit unterschiedlichen Richtungen angenommen, oft auch an den äußeren Enden.
- Sie wird verwendet, um Textabschnitte anzuordnen.

Betrachten Sie zum Beispiel den ersten englischen Absatz in der [Probier's aus](#try_it)-Demo. Es gibt zwei Textabschnitte: den englischen Text (LTR aufgrund der lateinischen Zeichen) und den abschließenden Punkt (der sich am Ende des `p`-Elements befindet und daher die RTL-Basisrichtung annimmt). Diese Textabschnitte werden von rechts-nach-links angeordnet, sodass der Text zuerst am rechten Rand erscheint, gefolgt von links vom Punkt. In gleicher Weise erbt der erste arabische Absatz die LTR-Basisrichtung vom HTML-Dokument, sodass der RTL-arabische Text am linken Rand erscheint, gefolgt von rechts vom Punkt (mit LTR-Richtung). Beide Absätze sind typographisch inkorrekt.

Selbst für Dokumente in einem einzigen Skript wird empfohlen, `dir` explizit auf dem Wurzelelement festzulegen, was insbesondere für RTL-Skripte wichtig ist, da die standardmäßige LTR-Basisrichtung falsch ist. Das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) gibt die Sprache an, impliziert jedoch nicht die Basisrichtung.

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Textausrichtung semantisch mit dem Inhalt und nicht mit der Darstellung verbunden ist, wird Webentwicklern empfohlen, dieses Attribut anstelle der verwandten CSS-Eigenschaften zu verwenden, wann immer möglich. Auf diese Weise wird der Text auch in einem Browser korrekt angezeigt, der CSS nicht unterstützt oder in dem CSS deaktiviert ist.

Ein Bild kann sein `dir`-Attribut auf `"rtl"` gesetzt haben, in diesem Fall werden die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert.

Wenn eine Tabelle ihr `dir` auf `"rtl"` gesetzt hat, wird die Spaltenreihenfolge von rechts-nach-links arrangiert.

Das {{HTMLElement("bdo")}}-Element erfordert `dir="ltr"` oder `dir="rtl"`. Bei diesem Element überschreibt das Attribut die inhärente Richtung der Zeichen, anstatt nur eine Basisrichtung festzulegen.

Browser könnten es Benutzern ermöglichen, die Richtung von {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elementen zu ändern, um die Erstellung von Inhalten zu unterstützen.
Chrome und Safari bieten eine Richtungsoption im Kontextmenü von Eingabefeldern.
Firefox verwendet <kbd>Strg</kbd> (Windows) / <kbd>Befehl</kbd> (macOS) + <kbd>Umschalttaste</kbd> + <kbd>X</kbd> in einem `<textarea>`, um die Textrichtung umzuschalten.
Diese Funktionen wechseln den Wert des `dir`-Attributes zwischen `ltr` und `rtl`.

## Beispiele

### Dokumentenweite Richtung festlegen

Setzen Sie `dir="rtl"` auf dem {{HTMLElement("html")}}-Element, wenn die Seite hauptsächlich in einem rechts-nach-links-Skript wie Arabisch oder Hebräisch geschrieben ist. Verwenden Sie `dir` auf einem Block innerhalb der Seite, wenn dieser Block eine andere Basisrichtung benötigt.

In diesem arabischen Dokument benötigt der englische Absatz sowohl `dir="ltr"` als auch `lang="en"`.

```html
<!doctype html>
<html dir="rtl" lang="ar">
  <head>
    <meta charset="utf-8" />
    <title>صفحة عربية</title>
  </head>
  <body>
    <p>محتوى الصفحة باللغة العربية.</p>
    <p dir="ltr" lang="en">This paragraph is in English.</p>
  </body>
</html>
```

### Textrichtung explizit festlegen

Dieses Beispiel legt explizit die Basisrichtung von zwei Absätzen fest. Die Basisrichtung beeinflusst die Standardausrichtung und die Platzierung der Satzzeichen.

```html
<p dir="ltr" lang="en">This sentence is in English and reads left to right.</p>
<p dir="rtl" lang="ar">
  هذه الجملة باللغة العربية وتُقرأ من اليمين إلى اليسار.
</p>
```

### Inline bidirektionaler Text

Wenn ein Inline-Ausdruck eine andere Basisrichtung hat als der umgebende Text, umschließen Sie den gesamten Ausdruck eng mit einem Element mit dem entsprechenden `dir`-Wert. Dadurch wird auch die Richtung des Ausdrucks von der Umgebung isoliert, sodass Satzzeichen und Zahlen außerhalb davon nicht als Teil des Ausdrucks behandelt werden. Verwenden Sie ein vorhandenes semantisches Element, wie z.B. {{HTMLElement("cite")}} für einen Buchtitel, oder ein {{HTMLElement("bdi")}}, wenn kein anderes Element geeignet ist.

```html
<p dir="rtl" lang="ar">
  اقرأ <cite dir="ltr" lang="en">How the Grinch Stole Christmas!</cite> اليوم.
</p>
```

Beachten Sie, dass das Ausrufezeichen, das Teil des Titels ist, sich innerhalb des `<cite>`-Elements befindet. Wenn es außerhalb platziert wäre, würde es die Basisrichtung übernehmen und daher am linken Rand des Titels erscheinen.

### Verwendung von dir="auto" für nutzergenerierte Inhalte

Wenn die Richtung von Text im Voraus nicht bekannt ist, wie z.B. bei Nutzerkommentaren, verwenden Sie `dir="auto"`. Der Browser verwendet das erste stark richtungsweisende Zeichen, um die Basisrichtung des Elements zu bestimmen. Dies ist eine Heuristik, keine Spracherkennung: Ein Kommentar, der mit einem englischen Namen beginnt und in Arabisch fortgeführt wird, erhält eine links-nach-rechts-Basisrichtung. Verwenden Sie eine explizite Richtung, wenn diese bekannt ist.

Hier stellen die Absätze zwei mögliche Kommentare dar. Die Kommentare werden von Benutzern geschrieben, daher ist die Seite sich ihrer Sprachen während der Darstellung nicht bewusst.

```html
<p dir="auto">This comment is in English.</p>
<p dir="auto">هذا التعليق باللغة العربية.</p>
```

Das {{HTMLElement("bdi")}}-Element bietet den gleichen Effekt und ist kürzer für Inline-Isolation, insbesondere wenn kein semantisches Element angemessen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit unterschiedlichen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Erstellen von HTML-Seiten in Arabisch, Hebräisch und anderen rechts-nach-links-Skripten](https://www.w3.org/International/tutorials/bidi-xhtml/index.en.html) auf w3.org

---
title: Fehlerbehandlung in CSS
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Wenn ein Fehler in CSS auftritt, wie z. B. ein ungültiger Wert oder ein fehlendes Semikolon, wird der Fehler im Gegensatz zu [JavaScript](/de/docs/Web/JavaScript/Reference/Errors) nicht "ausgelöst". Stattdessen erholt sich der Browser (oder ein anderer Benutzeragent) elegant. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen anderweitig an, dass Fehler in den Styles aufgetreten sind. Sie ignorieren einfach ungültigen Inhalt und analysieren die nachfolgenden gültigen Styles. Dies ist eine Funktion von CSS und kein Fehler.

In diesem Leitfaden wird erläutert, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## Parserfehler in CSS

Wenn ein CSS-Fehler erkannt wird, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft so wenig CSS-Code wie möglich, bevor er die {{Glossary("parse", "Analyse")}} des CSS wie gewohnt fortsetzt. Die „Fehlerbehebung“ besteht lediglich im Ignorieren oder Überspringen ungültiger Inhalte.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne sich Sorgen machen zu müssen, dass etwas in älteren Browsern kaputtgeht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne Auslösen eines Fehlers ermöglicht es, dass alte und neue Syntaxen im selben Regelset koexistieren, wobei jedoch zu beachten ist, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die ältere einwertige Syntax als auch die [mehrfach-schlüsselwortbasierte Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern zunächst die alte Syntax, bis sie die neue Syntax als gültig erkennen. Anschließend überschreibt die neue Syntax die alte. Wenn ein Benutzer einen alten Browser verwendet, wird das gültige Fallback nicht von dem neuen CSS überschrieben, da der Browser es als ungültig wahrnimmt.

Die Art und Menge des CSS, das ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehler werden unten aufgeführt:

- Bei [Fehlern in At-Regeln](#fehler_in_at-regeln) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird.
- Wenn es sich um [einen ungültigen Selektor handelt](#fehler_in_selektorlisten), wird der gesamte Block mit den Deklarationen ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, sodass mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler im Eigenschaftsnamen oder Wert liegt](#fehler_innerhalb_von_css-deklarationsblöcken), wie z. B. ein unbekannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert.
- Wenn der [Fehler durch ein fehlendes schließendes Klammerzeichen verursacht wird](#fehler_mit_automatisch_geschlossenen_enden), hängt die Größe des ignorierten Bereichs von der Fähigkeit des Browsers ab, den Fehler als geschachteltes CSS zu interpretieren.

Nach der Analyse jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den analysierten Inhalt hinsichtlich der erwarteten [Grammatik](#grammatikprüfung). Wenn der Inhalt nicht der erwarteten Grammatik für diese Struktur entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### Fehler in At-Regeln

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bezeichnet wird, kennzeichnet den Beginn einer CSS-{{cssxref("at-rule")}}. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts mehr vom Standpunkt des Parsers als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zur Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für die jeweilige At-Regel interpretiert.

Anweisungs-At-Regeln wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen enthalten nur eine Präambel. Das Semikolon beendet die At-Regel sofort bei [Anweisungs-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt der Präambel gemäß der At-Regel-Grammatik ungültig ist, wird die At-Regel ignoriert und der Browser setzt die CSS-Analyse nach dem nächsten Semikolon fort. Zum Beispiel wird eine `@import`-At-Regel ignoriert, wenn sie nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder einer anderen `@import`-Anweisung auftritt.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser auf eine geschweifte Klammer (`{`) stößt, bevor ein Semikolon gefunden ist, wird die At-Regel als Block-At-Regel analysiert. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umgeben ist. Die öffnende geschweifte Klammer zeigt dem Browser an, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht nach passenden Blöcken (Inhalt umgeben von `()`, `{}` oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern umschlossen ist: Diese schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, verschiedene (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was, wenn überhaupt, die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und die Behandlung von Fehlern sind auf der entsprechenden Seite zur At-Regel dokumentiert. Die Handhabung ungültiger Inhalte hängt vom Fehler ab.

Beispielsweise benötigt die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family)- als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer dieser fehlt oder ungültig ist, wird die gesamte `@font-face`-Regel ungültig. Wenn ein nicht zugehöriger Deskriptor, ein anderer gültiger Schriftart-Deskriptor mit ungültigem Wert oder eine Stileigenschaftsdeklaration innerhalb des verschachtelten Blocks von `@font-face` enthalten ist, wird die Schriftartdeklaration nicht ungültig. Solange der Schriftartname und die Schriftartquelle enthalten und gültig sind, wird jeder ungültige CSS-Inhalt innerhalb der At-Regel ignoriert, der `@font-face`-Block wird jedoch weiterhin analysiert.

Obwohl die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich zur Grammatik der `@font-face`-Regel ist, wirkt sich die Art des Fehlers dennoch darauf aus, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet durch das {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, beeinflussen jedoch nicht andere Stile, die im selben Keyframe-Selektorblock deklariert sind. Ein ungültiger Keyframe-Selektor (wie ein Prozentwert kleiner als `0%` oder größer als `100%` oder eine {{cssxref("number")}} ohne `%`) macht die Liste der Keyframe-Selektoren ungültig, sodass der Stilblock ignoriert wird. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die ganze `@keyframe`-Deklaration ungültig. Wenn hingegen Stile zwischen zwei Keyframe-Selektorblöcken enthalten sind, macht dies die ganze `@keyframe`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es in regulärer und verschachtelter Form. Die Syntax der `@layer`-Anweisung enthält nur die Präambel und endet mit einem Semikolon. Alternativ sind in der verschachtelten Syntax Layer-Stile zwischen geschweiften Klammern enthalten, die nach der Präambel kommen. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Im Fall einer fehlenden schließenden geschweiften Klammer bei `@layer` werden alle Stile, die nach der fehlenden schließenden Klammer kommen, als Teil der Kaskadenschicht interpretiert, die in der Präambel der At-Regel definiert ist. Das CSS ist gültig, da keine Syntaxfehler vorliegen; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Ebene leer ist, aber die Ebene wird trotzdem erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, beim Schreiben eines Selektors Fehler zu machen, aber nur ungültige Selektoren machen eine Selektorliste ungültig (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}}- oder {{cssxref("type_selectors", "Typen")}}-Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einschließen, das nicht existiert, kann dies ein logischer Fehler sein, aber es ist kein Syntaxfehler. Wenn jedoch ein Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element vorliegt, könnte dies einen ungültigen Selektor erzeugen, was ein Fehler ist, den der Parser behandeln muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}}- oder {{cssxref(":where")}}-Pseudo-Klasse (die [verzeihliche Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) liegt oder wenn der unbekannte Selektor ein [`-webkit-`-präfixierter Pseudo-Selektor](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts übereinstimmendes darstellt. Die Selektorliste wird nicht ungültig gemacht.

Abgesehen von diesen Ausnahmen macht ein einziger ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig, und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt die Analyse von dort fort.

#### `-webkit-`-Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browser-spezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#vendor-präfixe) vermeiden Browser übermäßiges Ungültigmachen von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudo-Element möglicherweise nicht erkannt oder unterstützt, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Andererseits macht ein unbekannter, präfixierter Selektor mit einer Funktionsnotation wie `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks geht, wird ein ungültiges Eigenschaften-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein Benutzeragent eine Liste von Deklarationen analysiert oder interpretiert, führt Syntax, die an irgendeinem Punkt unbekannt ist, dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Anschließend wird die Analyse nach dem nächsten Semikolon oder der nächsten schließenden geschweiften Klammer fortgesetzt, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er ein Semikolon findet, und beginnt dann mit der Analyse erneut:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft ohne Semikolon wird ignoriert, ebenso das darauffolgende Eigenschaft-Wert-Paar, da der Browser erst nach einem Semikolon oder einer schließenden Klammer mit der Analyse fortfährt. Genau genommen wird der Wert `border-color` als `red background-color: green;` analysiert, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber es ist kein Fehler im Sinne von CSS. Da er syntaktisch gültig ist, wird er analysiert und auf die Elemente angewendet, die mit dem Selektor übereinstimmen.

#### Vendor-Präfixe

Eigenschaftsnamen und Eigenschaftswerte mit Vendor-Präfix, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der nächsten schließenden geschweiften Klammer und setzt die Analyse dann von dort aus fort.

Ihnen könnte älteres CSS begegnen, das wie folgt aussieht:

```css example-bad
/* Prefixed values */
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: block flex;
}
/* Prefixed properties */
.rounded {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
```

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Reihenfolge der Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) der [Erscheinungsreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) setzen Browser alle Präfix-Deklarationen um, die sie verstehen, und überschreiben diese Werte dann mit der standardmäßigen ungeprägten Version.

> [!NOTE]
> Vermeiden Sie es, nach Möglichkeit Eigenschaftsnamen oder Werte mit Präfixen einzuschließen. Sollten Sie sie nutzen müssen, deklarieren Sie die Versionen mit Präfixen vor der ungeprägten Version, wie im obigen Beispiel dargestellt.

### Fehler mit automatisch geschlossenen Enden

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder ein Kommentar noch geöffnet ist, schließt der Parser alles automatisch, was nicht geschlossen wurde.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig, aber unvollständig ist, wird das CSS normal analysiert. Wenn Sie beispielsweise eine `@keyframe`-Deklaration vor dem Schließen Ihres {{htmlelement("style")}}-Elements nicht abschließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Deklarationen korrekt abzuschließen, macht die Deklarationen nicht notwendigerweise ungültig. Das heißt jedoch, dass Sie nicht die verzeihende Natur von CSS ausnutzen sollten. Schließen Sie immer alle Ihre Deklarationen und Stilblöcke ab. Das macht Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS wie von Ihnen beabsichtigt liest.

#### Unvollständige Kommentare

Unvollständige Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, jedoch nicht geschlossen wird, gehört aller CSS-Code bis zu einem schließenden Trennzeichen (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, zum Kommentar. Während ein unvollständiger Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass der CSS-Code nach dem öffnenden Trennzeichen (`/*`) ignoriert wird.

```html example-bad
<style>
  /* this comment is not closed
  @keyframes move {
    0% {transform: translateX(0);}
    100% {transform: translateX(100vw);}
  }
</style>
<p style="/* another unclosed comment">Parsed as HTML.</p>
```

In diesem Beispiel werden die beiden CSS-Kommentare nicht geschlossen, allerdings schließt das abschließende `</style>`-Tag den ersten Kommentar und das abschließende Anführungszeichen des `style`-Attributs den zweiten Kommentar.

## Grammatikprüfung

Nach der Analyse jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Wenn beispielsweise ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor für die beschriebene At-Regel ungültig ist, werden Inhalte, die nicht der erwarteten Grammatik entsprechen, als ungültig betrachtet und ignoriert.

Jede CSS-Eigenschaft akzeptiert bestimmte Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}}-Wert oder ein globales CSS-Schlüsselwort. Wenn der einer Eigenschaft zugewiesene Wert vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen bei der Deklaration als gültig betrachtet, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, z. B. als Wert (via der {{cssxref("var")}}-Funktion) für eine Eigenschaft, die diesen Werttyp nicht akzeptiert. Der Browser analysiert jede benutzerdefinierte Eigenschaft, wenn sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird eine Deklaration ignoriert, wenn ein Eigenschaftswert ungültig ist, und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftenwerte funktionieren jedoch etwas anders.

Wenn ein `var()`-Ersatz ungültig ist, wird die Deklaration nicht ignoriert, und der [initiale](/de/docs/Web/CSS/CSS_cascade/initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, der möglicherweise nicht dem erwarteten entspricht.

Betrachten wir ein Beispiel, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color`-Deklaration ist zum Berechnungszeitpunkt ebenfalls gültig. Wenn der Browser jedoch versucht, die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft zu ersetzen, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr wird, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, der Wert, falls vererbbar, von ihrem Elternteil geerbt. Ist die Eigenschaft nicht vererbbar, wird der Standard-Initialwert verwendet. Im Fall von `background-color` ist der Wert nicht vererbbar, daher wird der Initialwert `transparent` verwendet.

Um besser zu kontrollieren, wie benutzerdefinierte Eigenschaften zurückfallen, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Initialwert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Leitfaden
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)

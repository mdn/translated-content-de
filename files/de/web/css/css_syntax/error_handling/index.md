---
title: CSS-Fehlerbehandlung
short-title: Error handling
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Wenn ein Fehler in CSS vorhanden ist, wie z.B. ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderes Benutzeragent) anstatt [einen Fehler wie in JavaScript auszuwerfen](/de/docs/Web/JavaScript/Reference/Errors), sich elegant erholen. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen anderweitig an, dass Fehler in den Styles aufgetreten sind. Sie verwerfen einfach ungültigen Inhalt und parsen die nachfolgenden gültigen Styles. Dies ist ein Merkmal von CSS und kein Fehler.

Dieser Leitfaden erklärt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der Parser des Browsers die Zeile, die den Fehler enthält, und verwirft die minimale Menge an CSS-Code, bevor er mit dem {{Glossary("parse", "Parsen")}} des CSS wie gewohnt fortfährt. Die "Fehlerbehebung" besteht lediglich im Ignorieren oder Überspringen des ungültigen Inhalts.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne sich Sorgen machen zu müssen, dass in älteren Browsern etwas kaputt geht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen von ungültigem Inhalt ohne einen Fehler auszuwerfen ermöglicht es, dass alte und neue Syntax innerhalb derselben Regelmenge koexistieren, wobei zu beachten ist, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl eine alte Einzelwert-Syntax als auch eine [Multi-Keyword-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht von dem neuen CSS überschrieben, da der Browser es als ungültig ansieht.

Die Art und Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlsituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird (fehlschlägt).
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, in welchem Fall mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder -wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie z.B. ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert. Während der [Filterphase](/de/docs/Web/CSS/CSS_cascade/Value_processing#filtering) werden solche syntaktisch ungültigen Deklarationen eliminiert.
- Wenn der [Fehler auf ein fehlendes Endklammernzeichen zurückzuführen ist](#fehler_mit_automatisch_geschlossenen_endungen), hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, jeder Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt anhand der erwarteten [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, in den CSS-Spezifikationen als `<at-keyword-token>` bekannt, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts als ungültig aus Sicht des Parsers betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zur Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

At-Regeln, wie z.B. {{cssxref("@import")}} und {{cssxref("@namespace")}} Deklarationen, enthalten nur eine Präambel. Das Semikolon beendet die At-Regel sofort für [Statement-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt der Präambel gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser das Parsen des CSS nach dem nächsten Semikolon fortsetzt. Zum Beispiel, wenn eine `@import`-At-Regel nach einer beliebigen anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url("http://www.w3.org/2000/svg");
```

Wenn der Parser auf eine geschweifte Klammer (`{`) trifft, bevor ein Semikolon auftritt, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, umgeben von geschweiften Klammern (`{}`). Die öffnende geschweifte Klammer informiert den Browser, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser schaut voraus, sucht nach passenden Blöcken (Inhalt, der von `()`, `{}` oder `[]` umgeben ist), bis er eine schließende geschweifte Klammer (`}`) findet, die von keiner anderen geschweiften Klammer geschlossen wird: dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was, wenn überhaupt, die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regelseite dokumentiert. Die Behandlung von ungültigem Inhalt hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src) Deskriptor. Wenn einer von beiden weggelassen oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptors, eines anderen gültigen Schriftzeichendeskriptors mit einem ungültigen Wert oder einer Eigenschaftsdeklaration innerhalb des verschachtelten `@font-face`-Blocks macht die Schrifterklärung nicht ungültig. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird jegliches ungültige CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird weiterhin geparst.

Obwohl die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich zur `@font-face`-Regel-Grammatik ist, wirkt sich die Art des Fehlers dennoch darauf aus, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, beeinflussen jedoch nicht andere in demselben Keyframe-Auswahlblock deklarierte Styles. Das Hinzufügen eines ungültigen Keyframe-Selektors (wie z.B. eines Prozentwertes kleiner als `0%` oder größer als `100%`, oder einer {{cssxref("number")}}, die das `%` weglässt) macht die Keyframe-Auswahlliste ungültig und daher wird der Style-Block ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Style-Block des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Einfügen von Styles zwischen zwei Keyframe-Selektorblöcken wird hingegen die gesamte `@keyframes`-At-Regel ungültig machen.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es in regulären und verschachtelten Formen. Die `@layer`-Ausdrucks-Syntax enthält nur die Präambel, die mit einem Semikolon endet. Alternativ sind bei der verschachtelten Syntax die Layer-Styles zwischen geschweiften Klammern eingeschlossen, die nach der Präambel folgen. Das Weglassen einer schließenden geschweiften Klammer könnte ein Logikfehler sein, ist aber kein Syntaxfehler. Im Falle einer fehlenden schließenden Klammer in `@layer` werden alle Styles, die nach dem Punkt kommen, an dem die schließende Klammer hätte sein sollen, als zum Kaskadenlayer der in der Präambel der At-Regel definierten Schicht gehörend analysiert. Das CSS ist gültig, da keine Syntaxfehler vorhanden sind; nichts wird verworfen. Ein Syntaxfehler kann die benannte oder anonyme Schicht leer lassen, aber die Schicht wird trotzdem erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen könnten, aber nur ungültige Selektoren verursachen, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}} oder {{cssxref("type_selectors", "Typen")}} Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einschließen, das nicht existiert, könnte dies ein Logikfehler sein, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudoklasse oder einem Pseudoelement haben, könnte dies einen ungültigen Selektor erzeugen, der ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Style-Block ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudoklasse (die [nachsichtige Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudoelement](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts anspricht. Die Selektorliste wird nicht ungültig gemacht.

Abgesehen von diesen Ausnahmen macht ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und fährt von diesem Punkt aus mit dem Parsen fort.

#### `-webkit-`-Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#anbieterpräfixe) vermeiden Browser die übermäßige Ungültigmachung von Selektorlisten, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen kann das Pseudoelement vom Browser möglicherweise nicht erkannt oder unterstützt werden, aber es wird die gesamte Selektorliste und den zugehörigen Style-Block nicht ignorieren. Andererseits wird ein unbekannter, mit Präfix versehener Selektor mit einer Funktionsnotation wie `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und Werte innerhalb eines Deklarationsblocks geht, wird das Eigenschaft-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, verursacht unbekannte Syntax zu jedem Zeitpunkt, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Danach fährt er fort, das CSS nach dem nächsten Semikolon oder schließender geschweifter Klammer zu parsen, je nachdem, was zuerst auftaucht.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht weiter, bis er auf ein Semikolon stößt, und beginnt dann erneut mit dem Parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, die das Semikolon fehlt, wird ignoriert, ebenso wie das nachfolgende Eigenschaft-Wert-Paar, da der Browser nur dann fortfährt, zu parsen, wenn ein Semikolon oder eine schließende Klammer entdeckt wird. Insbesondere wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber er ist kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die mit dem Selektor übereinstimmenden Elemente angewendet.

#### Anbieterpräfixe

Anbieterpräfixierte Eigenschaftsnamen und Eigenschaftswerte, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder schließender geschweifter Klammer und setzt das Parsen von dort aus fort.

Man kann auf Legacy-CSS stoßen, das wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [Ordnungsregel](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) wenden Browser alle präfixierten Deklarationen an, die sie verstehen, und überschreiben diese Werte dann mit der standardisierten, nicht präfixierten Version.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung von Präfixen bei Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, deklarieren Sie die Versionen mit Präfix vor der Version ohne Präfix wie oben gezeigt.

### Fehler mit automatisch geschlossenen Endungen

Wenn eine Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder Kommentar noch offen ist, schließt der Parser automatisch alles, was nicht geschlossen wurde.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und inline Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn er unvollständig ist, wird das CSS normal geparst. Beispielsweise ist, wenn Sie es versäumen, eine `@keyframes`-Deklaration vor dem Schließen Ihrer {{htmlelement("style")}} abzuschließen, die Animation trotzdem gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen ordnungsgemäß zu schließen, macht die Anweisungen nicht unbedingt ungültig. Trotzdem sollten Sie nicht von der nachsichtigen Natur von CSS profitieren. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS einfacher zu lesen und zu pflegen und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Unvollständige Kommentare

Unvollständige Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, ist jeder CSS-Code bis zu einem Schlusstrennzeichen (`*/`) in einem nachfolgenen Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, Teil des Kommentars. Während ein unvollständiger Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass das CSS nach dem Öffnungsbegrenzer (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributs schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Zum Beispiel, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor nicht für die beschriebene At-Regel gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert bestimmte Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder eine gültige {{cssxref("&lt;color&gt;")}} oder ein CSS-Globalsprachschlüsselwort. Wenn der einem Eigenschaft zugeordnete Wert vom falschen Typ ist, wie z.B. `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie abgerufen werden, d.h. sie können als Wert (über die {{cssxref("var")}} Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parselt jede benutzerdefinierte Eigenschaft, wenn sie angetroffen wird, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen gilt, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, aber möglicherweise nicht auf den erwarteten.

Schauen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird, falls die Eigenschaft vererbbar ist, der Wert von seinem übergeordneten Element geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Startwert verwendet. Im Fall von `background-color` ist der Eigenschaftswert kein geerbter Wert, daher wird der Anfangswert von `transparent` verwendet.

Um die Art und Weise, wie benutzerdefinierte Eigenschaften zurückfallen, besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Anfangswert der Eigenschaft zu definieren:

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
- [Wertdefinition Syntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)

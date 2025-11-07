---
title: Fehlerbehandlung in CSS
short-title: Error handling
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Wenn ein Fehler in CSS auftritt, wie ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer User-Agent) anstatt einen Fehler zu werfen, wie in [JavaScript](/de/docs/Web/JavaScript/Reference/Errors), den Fehler elegant handhaben. Browser liefern keine CSS-bezogenen Warnungen oder anderswie einen Hinweis darauf, dass Fehler in Styles aufgetreten sind. Sie verwerfen lediglich ungültige Inhalte und analysieren anschließend gültige Styles. Dies ist eine Eigenschaft von CSS und kein Fehler.

Dieser Leitfaden behandelt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern, verwirft den minimalen Betrag an CSS-Code und kehrt dann zur normalen {{Glossary("parse", "Analyse")}} des CSS zurück. Die "Fehlerbehebung" besteht darin, ungültigen Inhalt zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne sich Sorgen zu machen, dass etwas in älteren Browsern nicht funktioniert. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne einen Fehler zu werfen, ermöglicht das Nebeneinander von alten und neuen Syntaxen im selben Regelsatz, wobei man allerdings beachten sollte, dass sie in dieser Reihenfolge angegeben werden. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte einzelne Wert- als auch die [Multi-Keyword-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, zu welchem Zeitpunkt die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht von der neuen CSS überschrieben, da der Browser diese als ungültig ansieht.

Der Typ und die Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlerkonstellationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel_fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert (fehlschlägt) wird.
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorenlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, wobei mehrere Eigenschafts-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder -wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert. Während der [Filterstufe](/de/docs/Web/CSS/CSS_cascade/Value_processing#filtering) werden solche syntaktisch ungültigen Deklarationen beseitigt.
- Wenn der [Fehler aufgrund eines fehlenden Endzeichens](#fehler_mit_automatisch_geschlossenen_enden) ist, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu analysieren.

Nach jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den analysierten Inhalt anhand der erwarteten [Grammatik](#grammatiküberprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel Fehler

Das `@`-Symbol, in CSS-Spezifikationen als `<at-keyword-token>` bekannt, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts vom Standpunkt des Parsers als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zur Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatiken für diese bestimmte At-Regel interpretiert.

Statement-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklaredquenzen, enthalten nur eine Präambel. Das Semikolon beendet die At-Regel sofort für [Statement-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rules#statement_at-rules). Wenn der Inhalt der Präambel gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, und der Browser setzt die Analyse des CSS nach dem nächsten Semikolon fort. Beispielsweise wird eine `@import`-At-Regel ignoriert, wenn sie nach einer beliebigen CSS-Deklaration außer `@charset`, `@layer` oder anderen `@import`-Anweisungen erfolgt.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url("http://www.w3.org/2000/svg");
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon antrifft, wird die At-Regel als Block-At-Regel analysiert. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rules#block_at-rules), wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umschlossen ist. Die öffnende geschweifte Klammer zeigt dem Browser an, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser geht weiter und sucht nach passenden Blöcken (Inhalt, der von `()`, `{}`, oder `[]` eingeschlossen ist), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern abgeglichen wird: Diese schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatiken, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was, wenn überhaupt, die gesamte At-Regel ungültig machen wird. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) und wie Fehler gehandhabt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung ungültigen Inhalts hängt vom Fehler ab.

Beispielsweise erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family)- als auch einen [`src`](/de/docs/Web/CSS/Reference/At-rules/@font-face/src)-Deskriptor. Wenn einer dieser fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Einschließen eines nicht zusammenhängenden Deskriptors, eines anderen gültigen Schriftdeskriptors mit einem ungültigen Wert oder einer Eigenschaftsstildeklaration innerhalb des `@font-face`-verschachtelten Blocks macht die Schrifterklärung nicht ungültig. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird jede ungültige CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird trotzdem analysiert.

Während die Grammatik der `@keyframes`-At-Regel sich stark von der Grammatik der `@font-face`-Regel unterscheidet, beeinflusst die Art des Fehlers dennoch, was ignoriert wird. Wichtige Deklarationen (mit dem {{cssxref("important")}}-Flag gekennzeichnet) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinträchtigen nicht andere Stile, die im selben Keyframe-Selektorblock deklariert sind. Ein ungültiger Keyframe-Selektor, wie ein Prozentsatzwert kleiner als `0%` oder größer als `100%`, oder eine {{cssxref("number")}} ohne `%` führt dazu, dass die Keyframe-Selektorliste und somit der Stilblock ignoriert wird. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht die gesamte `@keyframes`-Deklaration nicht ungültig. Das Einfügen von Stilen zwischen zwei Keyframe-Seletorblöcken hingegen führt zur Ungültigkeit der gesamten `@keyframes`-At-Regel.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regelmäßiger als auch verschachtelter Form. Die `@layer`-Anweisungssyntax enthält nur die Präambel und endet mit einem Semikolon. Alternativ sind bei der verschachtelten Syntax die Layer-Stile zwischen geschweiften Klammern nach der Präambel verschachtelt. Das Auslassen einer schließenden geschweiften Klammer kann ein Logikfehler sein, ist jedoch kein Syntaxfehler. Im Falle einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach dem Punkt kommen, an dem die Klammer hätte sein sollen, als Teil der Kaskadenschicht interpretiert, die in der Präambel der At-Regel definiert ist. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler kann verursachen, dass der benannte oder anonyme Layer leer ist, aber der Layer wird trotzdem erstellt.

### Fehler in Selektorenlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen könnten, aber nur ungültige Selektoren führen dazu, dass eine Selektorenliste ungültig wird (siehe [ungültige Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}-, {{cssxref("id_selectors", "ID")}}- oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder ein benutzerdefiniertes Element) einfügen, das nicht existiert, kann es sich um einen Logikfehler handeln, jedoch nicht um einen Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, kann dies einen ungültigen Selektor erzeugen, was ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorenliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn sich der ungültige Selektor innerhalb eines {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudo-Klasse befindet (die [nachgiebige Selektorenlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor als nicht übereinstimmend ignoriert. Die Selektorenliste wird nicht ungültig.

Abgesehen von diesen Ausnahmen wird durch einen einzigen ungültigen oder nicht unterstützten Selektor in der Selektorenliste die gesamte Regel ungültig und der gesamte Selektorenblock wird ignoriert. Der Browser sucht dann die schließende geschweifte Klammer und fährt von diesem Punkt an mit der Analyse fort.

#### `-webkit-`-Ausnahme

Aufgrund von Altlasten der übermäßigen Nutzung browser-spezifischer Präfixe in Selektoren und [Eigenschaftsnamen (und Werten)](#vendor-prefixe) vermeiden Browser eine übermäßige Ungültigkeitserklärung von Selektorenlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), die mit einem nicht groß-/klein-schreibungssensitivem `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorenliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen kann das Pseudo-Element vom Browser möglicherweise nicht erkannt oder unterstützt werden, aber es führt nicht dazu, dass die gesamte Selektorenliste und der zugehörige Stilblock ignoriert werden. Andererseits wird durch einen unbekannten präfixierten Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` die gesamte Selektorenliste ungültig, und der Browser ignoriert den gesamten Selektorenblock.

### Fehler innerhalb von CSS-Deklarationsblöcken

Bei CSS-Eigenschaften und -Werten innerhalb eines Deklarationsblocks wird, wenn entweder die Eigenschaft oder der Wert ungültig ist, dieses Eigenschafts-Wert-Paar ignoriert und verworfen. Wenn ein User-Agent eine Liste von Deklarationen durchsucht oder interpretiert, führt unbekannte Syntax an einer beliebigen Stelle dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Er fährt dann mit der Analyse des CSS nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fort, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon stößt, und startet dann die Analyse neu:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und es sich nicht um die letzte Deklaration in diesem Selektorblock handelt. Die Eigenschaft, bei der das Semikolon fehlt, wird ignoriert, ebenso wie das darauf folgende Eigenschafts-Wert-Paar, da der Browser erst nach einem Semikolon oder einer schließenden Klammer mit der Analyse fortfährt. Genauer gesagt wird der `border-color`-Wert als `red background-color: green;` ausgewertet, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Fehler im Sinne der Syntax. Da er syntaktisch gültig ist, wird er auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Prefixe

Vendor-Prefixe in Eigenschaftsnamen und -werten, die von einem Browser nicht verstanden werden, werden als ungültig betrachtet und ignoriert. Nur die einzelnen Regeln mit einem ungültigen Eigenschafts- oder Wertnamen werden ignoriert. Der Parser sucht das nächste Semikolon oder die schließende geschweifte Klammer und fährt dann von dort mit der Analyse fort.

Sie können auf Legacy-CSS stoßen, das wie das folgende aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskaden]- und der [Erscheinungsreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) Regel, wendet der Browser alle von ihm verstandenen prefixed Deklarationen an und überschreibt diese Werte dann mit der standardmäßigen ungeprefixten Version.

> [!NOTE]
> Vermeiden Sie, wenn möglich, das Einschließen von prefixed Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, deklarieren Sie die prefixed Versionen vor der nicht-prefixed Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Enden

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder ein Kommentar noch geöffnet ist, schließt der Parser automatisch alles nicht abgeschlossene.

> [!NOTE]
> Dies gilt sowohl für externe Stylesheets, Selektorenblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements als auch für Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn er unvollständig ist, wird das CSS normal geparst. Wenn Sie beispielsweise versäumen, eine `@keyframes`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen ordnungsgemäß zu schließen, macht die Anweisungen nicht unbedingt ungültig. Dennoch sollten Sie die nachsichtige Natur von CSS nicht ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke ab. Dies macht Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS wie beabsichtigt analysiert.

#### Unbeendete Kommentare

Unbeendete Kommentare sind Logikfehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, ist der gesamte CSS-Code bis zu einem Schließen-Delimiter (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst eintritt, Teil des Kommentars. Während ein unbeendeter Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass der CSS-Code nach dem öffnenden Delimiter (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das abschließende `</style>`-Tag schließt den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributs schließt den zweiten Kommentar.

## Grammatiküberprüfung

Nach jeder Deklaration, Stilregel, At-Regel usw. prüft der User-Agent, ob die Grammatik den Regeln für diese Deklaration entspricht. Beispielsweise, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und wird ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein globales CSS-Schlüsselwort. Wenn der Wert, der einer Eigenschaft zugeordnet wird, vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie als Wert (über die {{cssxref("var")}}-Funktion) einer Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser analysiert jede benutzerdefinierte Eigenschaft, wenn sie angetroffen wird, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird, wenn ein Eigenschaftswert ungültig ist, die Deklaration ignoriert und die Eigenschaft fällt auf den zuletzt gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Werte arbeiten jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, möglicherweise jedoch nicht auf den erwarteten.

Betrachten wir ein Beispiel, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Auch die `background-color`-Deklaration ist zur Berechnungszeit gültig. Wenn jedoch der Browser die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr wird, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, falls die Eigenschaft vererbbar ist, der Wert von ihrem Elternteil geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Initialwert verwendet. Im Fall von `background-color` wird der Wert nicht vererbt, daher wird der Initialwert `transparent` verwendet.

Um die Art und Weise, wie benutzerdefinierte Eigenschaften zurückfallen, besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Anfangswert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Wertdefinition Syntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)

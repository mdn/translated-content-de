---
title: Fehlerbehandlung in CSS
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Wenn in CSS ein Fehler vorliegt, wie zum Beispiel ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) nicht [einen Fehler auslösen wie in JavaScript](/de/docs/Web/JavaScript/Reference/Errors), sondern er wird sich sanft erholen. Browser geben keine CSS-bezogenen Warnungen aus und zeigen nicht an, dass in Styles Fehler aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und parsen nachfolgende gültige Styles. Dies ist ein Merkmal von CSS und kein Fehler.

Dieses Leitfaden behandelt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der Browser-{{Glossary("parser", "Parser")}} die Zeile, die die Fehler enthält, und verwirft die minimale Menge an CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsen")}} von CSS zurückkehrt. Die "Fehlerbehebung" besteht lediglich darin, ungültige Inhalte zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne sich darüber Gedanken zu machen, dass etwas in älteren Browsern kaputt geht. Ein Browser erkennt möglicherweise ein neues Feature nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne einen Fehler auszulösen, erlaubt es, dass sowohl alte als auch neue Syntax im selben Regelsatz koexistieren, wobei jedoch beachtet werden muss, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte einwertige als auch die [Multi-Keyword-Syntax](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser verwendet, wird der gültige Fallback nicht durch das neue CSS überschrieben, da der Browser ihn als ungültig ansieht.

Die Art und Menge von CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt vom Fehlertyp ab. Einige häufige Fehlerkonstellationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und dem Fehlertyp ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird (scheitert).
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorenlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_in_css-deklarationsblöcken) zwischen Eigenschaften-Deklarationen führt zu einem ungültigen Wert, in diesem Fall werden mehrere Eigenschaft-Wert-Deklarationen ignoriert.
- Wenn der [Fehler ein Eigenschaftsname oder Wert ist](#fehler_in_css-deklarationsblöcken), wie z.B. ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert.
- Wenn der [Fehler auf ein fehlendes Endklammernzeichen zurückzuführen ist](#fehler_mit_automatisch_geschlossenen_endungen), hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu interpretieren.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt auf Übereinstimmung mit der erwarteten [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird vom Parser-Standpunkt aus nichts als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zur Präambel der At-Regel. Der Inhalt jeder At-Regel wird entsprechend der Grammatikregeln für diese bestimmte At-Regel interpretiert.

Deklarative At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, enthalten nur eine Präambel. Das Semikolon beendet die At-Regel sofort für [deklarative At-Regeln](/de/docs/Web/CSS/At-rule#statement_at-rules). Wenn der Inhalt der Präambel nach der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, und der Browser setzt das Parsen von CSS fort, nachdem das nächste Semikolon gefunden wurde. Wenn beispielsweise eine `@import`-At-Regel nach einer CSS-Deklaration außer `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon findet, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umgeben ist. Die öffnende geschweifte Klammer zeigt dem Browser an, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht nach passenden Blöcken (Inhalte, die von `()`, `{}` oder `[]` umgeben sind), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern ausgeglichen wird: Diese schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was die gesamte At-Regel ungültig machen könnte. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/At-rule) und wie Fehler gehandhabt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Der Umgang mit ungültigem Inhalt hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family)- als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer von beiden weggelassen oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht miteinander in Zusammenhang stehenden Deskriptors, eines anderen gültigen Font-Deskriptors mit ungültigem Wert oder einer Stildeklaration innerhalb des verschachtelten Blocks von `@font-face` wird die Font-Deklaration nicht ungültig machen. Solange der Fontname und die Fontquelle enthalten und gültig sind, wird jeder ungültige CSS-Inhalt innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Obwohl die Grammatik der `@keyframe`-At-Regel sehr unterschiedlich von der `@font-face`-Regel-Grammatik ist, beeinflusst der Fehlertyp ebenfalls, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit der {{cssxref("important")}}-Flagge) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinträchtigen keine anderen Styles, die im gleichen Keyframe-Selektorblock deklariert sind. Das Hinzufügen eines ungültigen Keyframe-Selektors (wie eines Prozentwertes kleiner als `0%` oder größer als `100%`, oder einer {{cssxref("Nummer")}} ohne `%`) macht die Keyframe-Selektorliste ungültig und damit wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er ungültig macht die gesamte `@keyframe`-Deklaration nicht. Der Einschluss von Styles zwischen zwei Keyframe-Selektorblöcken hingegen macht die gesamte `@keyframe`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regulärer als auch in verschachtelter Form. Die `@layer`-Statement-Syntax enthält nur die Präambel, endend mit einem Semikolon. Alternativ werden in der verschachtelten Syntax Schichtstile zwischen geschweiften Klammern nach der Präambel verschachtelt. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Im Fall einer fehlenden schließenden Klammer in `@layer`, werden alle Styles, die nach dem Punkt kommen, an dem die schließende Klammer hätte sein sollen, so geparst, als wären sie in der Kaskadenschicht im Präambel der At-Regel definiert. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler könnte dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorenlisten

Es gibt viele Möglichkeiten, wie Sie einen Fehler beim Schreiben eines Selektors machen könnten, aber nur ungültige Selektoren machen eine Selektorenliste ungültig (siehe [ungültige Selektorenliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}} oder {{cssxref("type_selectors", "Typ")}} Selektor für eine Klasse, ID oder ein Element (oder ein benutzerdefiniertes Element) einschließen, das nicht existiert, kann das ein logischer Fehler sein, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudoklasse oder einem Pseudoelement haben, könnte dies einen ungültigen Selektor erzeugen, was ein Fehler ist, mit dem sich der Parser befassen muss.

Wenn eine Selektorenliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudoklasse (die [forgiving selector lists](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) enthalten ist oder wenn der unbekannte Selektor ein [`-webkit-` Präfix-Pseudoelement](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts trifft. Die Selektorenliste wird nicht ungültig gemacht.

Außerhalb dieser Ausnahmen wird eine einzelne ungültige oder nicht unterstützte Selektor in der Selektorenliste die gesamte Regel ungültig machen und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen ab diesem Punkt fort.

#### `-webkit-` Ausnahme

Aufgrund von Altlasten durch die Überan Verwendung von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-präfixe), vermeiden Browser die übermäßige Ungültigmachung von Selektorenlisten, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem Case-insensitive `-webkit-` Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorenliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudoelement möglicherweise nicht erkannt oder vom Browser unterstützt, aber es wird nicht verursachen, dass die gesamte Selektorenliste und der zugehörige Stilblock ignoriert werden. Andererseits wird ein unbekannter Präfix-Selektor mit einer Funktionsnotation wie `::-webkit-imaginary-function()` die gesamte Selektorenliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler in CSS-Deklarationsblöcken

Was CSS-Eigenschaften und Werte innerhalb eines Deklarationsblocks betrifft, so wird ein Eigenschaft-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an jedem Punkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Dann setzt er das Parsen des CSS fort, nachdem das nächste Semikolon oder die schließende geschweifte Klammer gefunden wurde, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis ein Semikolon gefunden wird, und beginnt dann das Parsen neu:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorenblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorenblock ist. Die Eigenschaft, bei der das Semikolon fehlt, wird genauso ignoriert wie das darauf folgende Eigenschaft-Wert-Paar, da der Browser das Parsen erst nach einem Semikolon oder einer schließenden Klammer fortsetzt. Konkret wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber es ist kein Fehler. Da es syntaktisch gültig ist, wird es geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Wenn browserpräspezifische Eigenschaftsnamen und Eigenschaftswerte von einem Browser nicht verstanden werden, werden sie als ungültig behandelt und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und fährt dann dort mit dem Parsen fort.

Sie könnten auf alten CSS-Code stoßen, der wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [Reihenfolge des Auftretens](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) Regel werden Browser alle verstandenen Präfix-Deklarationen anwenden und dann diese Werte mit der Standardversion ohne Präfix überschreiben.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung von Präfix-Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, deklarieren Sie die Präfix-Versionen vor der Version ohne Präfix wie oben gezeigt.

### Fehler mit automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenfolge oder ein Kommentar noch offen ist, schließt der Parser automatisch alles, was nicht geschlossen wurde.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorenblöcke innerhalb eines HTML {{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn er unvollständig ist, wird das CSS normal geparst. Zum Beispiel, wenn Sie es versäumen, eine `@keyframe`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}}-Element schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Wenn man CSS-Anweisungen nicht richtig schließt, macht das die Anweisungen nicht unbedingt ungültig. Dennoch sollten Sie nicht von dem verzeihenden Wesen von CSS Gebrauch machen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihren CSS-Code leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Ungeöffnete Kommentare

Ungeöffnete Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen ist, wird bis zu einem schließenden Trennzeichen (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, der gesamte CSS-Code als Kommentar behandelt. Obwohl ein nicht beendeter Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass der CSS-Code nach dem öffnenden Trennzeichen (`/*`) ignoriert wird.

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

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Wenn zum Beispiel ein Eigenschaftswert den falschen Datentyp hat oder ein Deskriptor für die At-Regel, die beschrieben wird, ungültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein globales CSS-Schlüsselwort. Wenn der einem Eigenschaft zugewiesene Wert vom falschen Typ ist, wie zum Beispiel `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d. h. sie können als Wert (mittels der {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Wertetyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn ein `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [Initial]-(/de/docs/Web/CSS/initial_value) oder [vererbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, jedoch möglicherweise nicht den erwarteten.

Schauen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn jedoch der Browser die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft substituiert, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger Wert für `background-color`. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr wird, wenn eine benutzerdefinierte Eigenschaft den falschen Typ hat, falls die Eigenschaft vererbbar ist, der Wert von ihrem Elternteil geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Ausgangswert verwendet. Im Fall von `background-color` ist der Eigenschaftswert nicht ein vererbter Wert, daher wird der Anfangswert `transparent` verwendet.

Um das Verhalten benutzerdefinierter Eigenschaften besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Anfangswert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)

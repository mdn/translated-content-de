---
title: Fehlerbehandlung in CSS
short-title: Error handling
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 07cb37116a4e4602207bccc3dc53375f02411a46
---

Wenn ein Fehler in CSS vorliegt, wie z.B. ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) anstatt [einen Fehler zu werfen, wie in JavaScript](/de/docs/Web/JavaScript/Reference/Errors), dies elegant abfangen. Browser bieten keine CSS-bezogenen Warnungen oder Hinweise darauf, dass Fehler in Stilen aufgetreten sind. Sie verwerfen einfach ungültigen Inhalt und parsen die nachfolgenden gültigen Stile. Dies ist ein Merkmal von CSS, kein Fehler.

Dieser Leitfaden diskutiert, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern, verwirft den minimalen CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsen")}} des CSS zurückkehrt. Die "Fehlerbehebung" besteht lediglich im Ignorieren oder Überspringen ungültigen Inhalts.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne dass man sich Sorgen machen muss, dass etwas in älteren Browsern kaputt geht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültigen Inhalts ohne Fehlermeldung ermöglicht es, dass sowohl alte als auch neue Syntaxversionen im gleichen Regelwerk koexistieren, obwohl sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl alte Ein-Wert- als auch [mehrschichtige Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht von dem neuen CSS überschrieben, da der Browser es als ungültig ansieht.

Die Art und Menge des CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlerfälle sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird.
- Ist der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, wobei mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Ist der [Fehler ein Eigenschaftsname oder -wert](#fehler_innerhalb_von_css-deklarationsblöcken), wie z.B. ein nicht erkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert. Während der [Filterstufe](/de/docs/Web/CSS/CSS_cascade/Value_processing#filtering) werden solche syntaktisch ungültigen Deklarationen entfernt.
- Ist der [Fehler aufgrund einer fehlenden Endklammer](#fehler_mit_automatischem_abschluss), hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als geschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt anhand der erwarteten [Grammatik](#grammatikprüfung) für diese Struktur. Wenn der Inhalt nicht mit der erwarteten Grammatik für diese Struktur übereinstimmt, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, zeigt den Beginn einer CSS {{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts mehr als ungültig vom Standpunkt des Parsers angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zum Vorspann der At-Regel. Der Inhalt jeder At-Regel wird gemäß den grammatischen Regeln für diese bestimmte At-Regel interpretiert.

Aussage-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, enthalten nur einen Vorspann. Das Semikolon beendet die At-Regel sofort für [Aussage-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt des Vorspanns gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, und der Browser parst CSS weiter, nachdem er auf das nächste Semikolon trifft. Zum Beispiel, wenn eine `@import`-At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url("http://www.w3.org/2000/svg");
```

Trifft der Parser auf eine geschweifte Klammer (`{`) bevor ein Semikolon auftritt, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, umgeben von geschweiften Klammern (`{}`). Die öffnende geschweifte Klammer zeigt dem Browser, wo der Vorspann der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht vorwärts nach übereinstimmenden Blöcken (Inhalt, umgeben von `()`, `{}` oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die von keiner anderen geschweiften Klammer übereinstimmt: Dies schließt den Körper der At-Regel ab.

Verschiedene At-Regeln haben unterschiedliche grammatische Regeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was, wenn überhaupt, die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Der Umgang mit ungültigem Inhalt hängt von dem Fehler ab.

Beispielsweise erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family)- als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer dieser Deskriptoren fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptors, eines anderen gültigen Font-Deskriptors mit einem ungültigen Wert oder einer Eigenschaftsdeklaration innerhalb des `@font-face`-geschachtelten Blocks macht die Font-Deklaration nicht ungültig. Solange der Fontname und die Fontquelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird weiterhin geparst.

Während die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich zur `@font-face`-Regel-Grammatik ist, beeinflusst die Art des Fehlers immer noch, was ignoriert wird. Wichtige Deklarationen (markiert mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere in demselben Keyframe-Selektorblock deklarierte Stile. Das Hinzufügen eines ungültigen Keyframe-Selektors (wie ein Prozentwert kleiner als `0%` oder größer als `100%`, oder eine {{cssxref("number")}}, die das `%` weglässt) macht die Keyframe-Selektorliste ungültig und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Hinzufügen von Stilen zwischen zwei Keyframe-Selektorblöcken hingegen macht die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regulären als auch in verschachtelten Formen. Die `@layer`-Anweisungssyntax enthält nur den Vorspann, der durch ein Semikolon endet. Alternativ hat die verschachtelte Syntax Schichtstile, die zwischen geschweiften Klammern nach dem Vorspann verschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer mag ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Im Falle einer fehlenden schließenden Klammer in `@layer`, werden alle Stile, die nach derstelle kommen, wo die abschließende Klammer hätte sein sollen, als Teil der Kaskadenschicht behandelt, die im Vorspann der At-Regel definiert ist. Der CSS-Code ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie man bei der Erstellung eines Selektors Fehler machen kann, aber nur ungültige Selektoren führen dazu, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}}- oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einfügen, das nicht existiert, kann das ein logischer Fehler sein, ist aber kein Syntaxfehler. Ein Tippfehler in einer Pseudoklasse oder einem Pseudoelement hingegen kann zu einem ungültigen Selektor führen, der einen Fehler darstellt, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt jedoch Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}}- oder {{cssxref(":where")}}-Pseudoklasse ist (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudoelement](#-webkit-_exception) ist, wird nur der unbekannte Selektor als nicht zutreffend ignoriert. Die Selektorliste wird nicht ungültig gemacht.

Außerhalb dieser Ausnahmen macht ein einziger ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig und der gesamte Selektorblock wird ignoriert. Der Browser wird dann nach der schließenden geschweiften Klammer suchen und von diesem Punkt an mit dem Parsen fortfahren.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch die übermäßige Verwendung von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-präfixe) vermeiden Browser übermäßige Ungültigmachungen von Selektorlisten, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem nicht case-sensitiven `-webkit-` Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudoelement möglicherweise nicht erkannt oder vom Browser unterstützt, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Ein unbekannter, mit einem Funktionsnotation versehenen Präfix-Selektionierer von `::-webkit-imaginary-function()` hingegen wird die gesamte Selektorliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Was CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks betrifft, wird ein ungültiges Eigenschaft-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an einer beliebigen Stelle dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Danach setzt er das Parsen des CSS fort, nachdem das nächste Semikolon oder die schließende geschweifte Klammer gefunden wurde, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon stößt, und beginnt dann erneut zu parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, bei der das Semikolon fehlt, wird ignoriert, ebenso wie das darauf folgende Eigenschaft-Wert-Paar, weil der Browser nur nach einem Semikolon oder einer schließenden Klammer weiter parst. Insbesondere wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber er ist kein Syntaxfehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Vendor-präfixierte Eigenschaftsnamen und -werte werden, wenn sie von einem Browser nicht verstanden werden, als ungültig behandelt und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt dann das Parsen fort.

Manchmal stößt man auf ältere CSS, die wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskaden](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [Erscheinungsreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) Regel, wenden Browser alle von ihnen verstandenen vorkonsolen Deklarationen an und überschreiben dann diese Werte mit der standardmäßigen unpräfixierten Version.

> [!NOTE]
> Vermeiden Sie es, soweit möglich, präfixierte Eigenschaften oder Eigenschaftswerte einzuschließen. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der nicht präfixierten Version, wie oben gezeigt.

### Fehler mit automatischem Abschluss

Wenn ein Stylesheet endet, während eine Regel, eine Deklaration, eine Funktion, eine Zeichenkette oder ein Kommentar noch offen ist, schließt der Parser alles, was nicht geschlossen wurde, automatisch ab.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML {{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig, selbst wenn unvollständig, ist, wird das CSS normal geparst. Wenn Sie beispielsweise eine `@keyframes`-Deklaration vor dem Schließen Ihres {{htmlelement("style")}} nicht abschließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen ordnungsgemäß zu schließen, macht diese Anweisungen nicht unbedingt ungültig. Dennoch sollten Sie nicht von der nachsichtigen Natur von CSS Gebrauch machen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Nicht geschlossene Kommentare

Nicht geschlossene Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, gehört aller CSS-Code bis zu einem Schließungs-Trennzeichen (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, zum Kommentar. Obwohl ein nicht geschlossener Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass das CSS nach dem öffnenden Trennzeichen (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber der schließende `</style>`-Tag schließt den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributs schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration folgt. Wenn z.B. ein Eigenschaftswert den falschen Datentyp hat oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, wird der Inhalt, der nicht mit der erwarteten Grammatik übereinstimmt, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Beispielsweise akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Keyword. Wenn der zugewiesene Wert einer Eigenschaft den falschen Typ hat, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. wenn sie als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie gefunden wird, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete Werte von benutzerdefinierten Eigenschaften jedoch funktionieren ein wenig anders.

Wenn ein `var()`-Ersatz ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft erhält einen neuen Wert, jedoch möglicherweise nicht den erwarteten.

Schauen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color`-Deklaration ist zur Rechenzeit ebenfalls gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Wenn eine benutzerdefinierte Eigenschaft den falschen Typ hat, wird, wenn die Eigenschaft vererbbar ist, der Wert von ihrem Elternteil geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Anfangswert verwendet. Im Fall von `background-color` ist der Eigenschaftswert kein vererbter Wert, sodass der Anfangswert von `transparent` verwendet wird.

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
- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

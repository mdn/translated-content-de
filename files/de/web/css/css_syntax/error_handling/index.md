---
title: Fehlerbehandlung in CSS
short-title: Error handling
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Wenn ein Fehler in CSS auftritt, wie etwa ein ungültiger Wert oder ein fehlendes Semikolon, erholt sich der Browser (oder ein anderer Benutzeragent) anmutig, anstatt [einen Fehler wie in JavaScript auszulösen](/de/docs/Web/JavaScript/Reference/Errors). Browser zeigen keine CSS-bezogenen Benachrichtigungen oder Hinweise an, dass Fehler in Styles aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und parsen nachfolgende gültige Styles. Dies ist ein Merkmal von CSS, kein Fehler.

Dieser Leitfaden erörtert, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft die minimale Menge an CSS-Code, bevor er zur normalen {{Glossary("parse", "Parsing")}} des CSS zurückkehrt. Die "Fehlerbehebung" besteht lediglich im Ignorieren oder Überspringen ungültigen Inhalts.

Dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne sich um Kompatibilitätsprobleme in älteren Browsern sorgen zu müssen. Ein Browser erkennt möglicherweise ein neues Feature nicht, was jedoch in Ordnung ist. Das Verwerfen ungültiger Inhalte ohne Fehlerauslösung ermöglicht es, dass alte und neue Syntax gleichzeitig in demselben Regelsatz existieren können, obwohl sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die ältere einzelne Wert-Syntax als auch die [Multi-Keyword-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird der gültige Fallback nicht durch das neue CSS überschrieben, da der Browser es als ungültig ansieht.

Art und Umfang des CSS, das ein Browser aufgrund eines Fehlers ignoriert, hängen von der Art des Fehlers ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es davon ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird, welche At-Regel betroffen ist und welcher Fehlertyp vorliegt.
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, wobei mehrere Paarungen aus Eigenschaft und Wert ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder Wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert.
- Wenn der [Fehler auf ein fehlendes schließendes Klammerzeichen](#fehler_mit_automatisch_geschlossenen_endungen) zurückzuführen ist, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt gegen die erwartete [Grammatik](#grammatiküberprüfung) für diesen Konstrukt. Wenn der Inhalt nicht der erwarteten Grammatik für diesen Konstrukt entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, in CSS-Spezifikationen als `<at-keyword-token>` bekannt, zeigt den Beginn einer CSS-{{cssxref("at-rule")}}. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird aus Sicht des Parsers nichts als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder zur öffnenden geschweiften Klammer (`{`) ist Teil des At-Regel-Präludiums. Der Inhalt jeder At-Regel wird gemäß den Grammatikanforderungen für diese spezifische At-Regel interpretiert.

Anweisungs-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, enthalten nur ein Präludium. Das Semikolon beendet die At-Regel sofort für [Anweisungs-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt des Präludiums gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, und der Browser setzt das Parsen von CSS nach dem nächsten Semikolon fort. Zum Beispiel, wenn eine `@import`-At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Erklärung ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser auf eine geschweifte Klammer (`{`) stößt, bevor ein Semikolon auftritt, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, die von geschweiften Klammern (`{}`) umgeben sind. Die öffnende geschweifte Klammer teilt dem Browser mit, wo das At-Regel-Präludium endet und der Körper der At-Regel beginnt. Der Parser sucht voraus und sucht nach passenden Blöcken (Inhalt, der von `()`, `{}`, oder `[]` umgeben ist), bis er eine schließende geschweifte Klammer (`}`) findet, die von keiner anderen geschweiften Klammer geschlossen wird: Das schließt den Körper der At-Regel ab.

Unterschiedliche At-Regeln haben unterschiedliche Grammatikanforderungen, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was, falls überhaupt etwas, die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung ungültiger Inhalte hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src) Deskriptor. Wenn einer von beiden fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Einfügen eines nicht in Zusammenhang stehenden Deskriptors, eines anderen gültigen Schriftdeskriptors mit einem ungültigen Wert oder einer Stil-Deklaration innerhalb des `@font-face`-verschachtelten Blocks macht die Schrifterklärung nicht ungültig. Solange der Schriftartname und die Schriftquelle enthalten und gültig sind, wird jegliches ungültige CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframes`-At-Regel sich stark von der `@font-face`-Regelgrammatik unterscheidet, wirkt sich die Fehlerart dennoch darauf aus, was ignoriert wird. Wichtige Deklarationen (mit dem {{cssxref("important")}}-Flag versehen) und nicht animierbare Eigenschaften werden in Keyframe-Regeln ignoriert, sie wirken sich jedoch nicht auf andere Stile aus, die im selben Keyframe-Selektorblock deklariert sind. Das Einfügen eines ungültigen Keyframe-Selektors (wie eines Prozentwerts kleiner als `0%` oder größer als `100%`, oder einer {{cssxref("number")}}, die das `%` weglässt) macht die Keyframe-Selektorliste ungültig, daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den ungültigen Selektor-Stilblock ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Einfügen von Stilen zwischen zwei Keyframe-Selektorblöcken hingegen macht die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel kommt sowohl in regulären als auch in verschachtelten Formen vor. Die `@layer`-Anweisungssyntax enthält nur das Präludium, das mit einem Semikolon endet. Alternativ enthält die verschachtelte Syntax Ebenenstile, die zwischen geschweiften Klammern nach dem Präludium verschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Im Fall einer fehlenden schließenden Klammer bei `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer hätte sein sollen, als in der Kaskadeebene interpretiert, die im Präludium der At-Regel definiert ist. Das CSS ist gültig, da keine Syntaxfehler vorhanden sind; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Ebene leer ist, aber die Ebene wird weiterhin erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, beim Schreiben eines Selektors Fehler zu machen, aber nur ungültige Selektoren machen eine Selektorliste ungültig (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "class")}}, {{cssxref("id_selectors", "id")}} oder {{cssxref("type_selectors", "type")}}-Selektor für eine Klasse, ID oder ein Element (oder ein benutzerdefiniertes Element) verwenden, das nicht existiert, kann dies ein logischer Fehler sein, aber es ist kein Syntaxfehler. Wenn jedoch ein Schreibfehler in einer Pseudo-Klasse oder einem Pseudo-Element vorliegt, könnte dies einen ungültigen Selektor erzeugen, was ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}}- oder {{cssxref(":where")}}-Pseudo-Klasse (die [nachsichtige Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder ein unbekannter Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts matcht. Die Selektorliste wird nicht ungültig.

Außerhalb dieser Ausnahmen wird durch einen einzelnen ungültigen oder nicht unterstützten Selektor in der Selektorliste die gesamte Regel ungültig, und der gesamte Selektorblock wird ignoriert. Der Browser wird dann nach der schließenden geschweiften Klammer suchen und das Parsing ab diesem Punkt fortsetzen.

#### `-webkit-`-Ausnahme

Aufgrund von Legacy-Problemen im Zusammenhang mit der übermäßigen Verwendung von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#anbieterpräfixe) vermeiden Browser die übermäßige Ungültigmachung von Selektorlisten, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) als gültig behandeln, die mit einem Groß-/Kleinschreibungs-unabhängigen `-webkit-`-Präfix beginnen und nicht mit `()` enden.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudoelement möglicherweise vom Browser nicht erkannt oder unterstützt, es wird jedoch nicht dazu führen, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Ein unbekannter, mit einem Präfix versehener Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` macht hingegen die gesamte Selektorliste ungültig, und der Browser ignoriert den gesamten Selektorblock.

### Fehler innerhalb von CSS-Deklarationsblöcken

Im Hinblick auf CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks gilt: Wenn entweder die Eigenschaft oder der Wert ungültig ist, wird dieses Eigenschafts-Wert-Paar ignoriert und verworfen. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an irgendeinem Punkt dazu, dass der Browser-Parser nur die aktuelle Deklaration verwirft. Er fährt dann mit dem Parsen von CSS fort, nachdem das nächste Semikolon oder die schließende geschweifte Klammer gefunden wurde, je nachdem, was zuerst eintritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht weiter, bis er ein Semikolon findet, und beginnt dann erneut mit dem Parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft ohne Semikolon wird ignoriert, ebenso wie die darauf folgende Eigenschaft-Wert-Kombination, da der Browser erst nach einem Semikolon oder einer schließenden Klammer weiter parst. Insbesondere wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}} Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Anbieterpräfixe

Anbieterpräfixierte Eigenschaftsnamen und -werte werden, wenn sie von einem Browser nicht verstanden werden, als ungültig betrachtet und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt dann das Parsen von dort aus fort.

Man kann auf ältere CSS-Formulierungen stoßen, die wie folgt aussehen:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [der Erscheinungsfolge](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)-Regel werden Browser alle verstanden Präfixdeklarationen anwenden und diese Werte dann mit der Standardversion ohne Präfix überschreiben.

> [!NOTE]
> Vermeiden Sie es nach Möglichkeit, mit Präfixen versehene Eigenschaften oder Eigenschaftswerte einzubeziehen. Wenn Sie sie verwenden müssen, deklarieren Sie die Versionen mit Präfixen vor der Version ohne Präfix, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, eine Deklaration, eine Funktion, eine Zeichenkette oder ein Kommentar noch offen ist, schließt der Parser alles automatisch, was ungeschlossen geblieben ist.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributes.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn er unvollständig ist, wird das CSS normal geparst. Wenn Sie zum Beispiel versäumen, eine `@keyframes`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, bleibt die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen korrekt zu schließen, macht die Anweisungen nicht zwingend ungültig. Das heißt jedoch nicht, dass Sie die nachsichtige Natur von CSS ausnutzen sollten. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es erleichtert das Lesen und Pflegen Ihres CSS und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Unabgeschlossene Kommentare

Unabgeschlossene Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, werden alle CSS-Codes bis zu einem abschließenden Trenner (`*/`) in einem nachfolgenden Kommentar oder bis zum Ende des Stylesheets, je nachdem, was zuerst eintritt, Teil des Kommentars. Während ein unabgeschlossener Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass das CSS nach dem öffnenden Trenner (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributes schließt den zweiten Kommentar.

## Grammatiküberprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. prüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Wenn ein Eigenschaftswert beispielsweise den falschen Datentyp hat oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}}- oder einen CSS-Global-Schlüsselwortwert. Wenn der Wert, der einer Eigenschaft zugewiesen wird, vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. sie können als ein Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Wertetyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird, wenn ein Eigenschaftswert ungültig ist, die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft erhält einen neuen Wert, möglicherweise aber nicht den erwarteten.

Betrachten wir ein Beispiel, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Wenn eine benutzerdefinierte Eigenschaft den falschen Typ hat, wird, falls die Eigenschaft erbbar ist, der Wert vom übergeordneten Element geerbt. Wenn die Eigenschaft nicht erbbar ist, wird der standardmäßige Initialwert verwendet. Im Fall von `background-color` ist der Eigenschaftswert kein ererbter Wert, daher wird der Initialwert `transparent` verwendet.

Um den Rückfall benutzerdefinierter Eigenschaften besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Initialwert der Eigenschaft zu definieren:

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
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

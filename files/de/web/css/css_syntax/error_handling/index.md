---
title: CSS Fehlerbehandlung
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Wenn ein Fehler in CSS vorliegt, wie z.B. ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) anstatt [einen Fehler wie in JavaScript auszulösen](/de/docs/Web/JavaScript/Reference/Errors), sanft wiederherstellen. Browser geben keine CSS-bezogenen Warnungen aus noch zeigen sie sonst irgendwie an, dass in Styles Fehler aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und analysieren die nachfolgenden gültigen Styles. Dies ist ein Merkmal von CSS, kein Fehler.

Dieser Leitfaden behandelt, wie CSS-[Parser](/de/docs/Glossary/parser) ungültiges CSS verwerfen.

## CSS Parser-Fehler

Wenn ein CSS-Fehler festgestellt wird, ignoriert der [Parser](/de/docs/Glossary/parser) des Browsers die Zeile mit den Fehlern, verwirft die minimal nötige Menge an CSS-Code, bevor er zur normalen [Analyse](/de/docs/Glossary/parse) des CSS zurückkehrt. Die "Fehlerbehandlung" besteht lediglich im Ignorieren oder Überspringen ungültiger Inhalte.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Nutzung neuer CSS-Funktionen, ohne sich Sorgen machen zu müssen, dass in älteren Browsern etwas kaputt geht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne Fehlerauslösung erlaubt das gleichzeitige Vorhandensein alter und neuer Syntax im selben Regelwerk, obwohl man bedenken sollte, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die ältere Ein-Wert-Syntax als auch die [Multi-Schlüsselwort-Syntax](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht durch das neue CSS überschrieben, da der Browser es als ungültig wahrnimmt.

Die Art und Menge des CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlerarten sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird.
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen verursacht einen ungültigen Wert, in welchem Fall mehrere Eigenschafts-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder -wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert.
- Wenn der [Fehler aufgrund einer fehlenden Endklammer](#fehler_mit_automatisch_geschlossenen_endungen) ist, hängt das Ausmaß des Ignorierten davon ab, was der Browser verarbeiten kann, um den Fehler als verschachteltes CSS zu erfassen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den analysierten Inhalt gegen die erwartete [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik entspricht, wird er vom Browser als ungültig betrachtet und ignoriert.

### At-Regel-Fehler

Das `@`-Symbol, in den CSS-Spezifikationen bekannt als `<at-keyword-token>`, zeigt den Beginn einer CSS {{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird aus Sicht des Parsers nichts als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil des Vorspanns der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

Statement-At-Regeln, wie {{cssxref("@import")}}- und {{cssxref("@namespace")}}-Deklarationen, enthalten nur einen Vorspann. Das Semikolon endet sofort die At-Regel für [Statement-At-Regeln](/de/docs/Web/CSS/At-rule#statement_at-rules). Wenn der Inhalt des Vorspanns gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser nach dem nächsten Semikolon mit dem Parsen des CSS fortfährt. Wenn beispielsweise eine `@import` At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon entdeckt, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/At-rule#block_at-rules), wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umgeben ist. Die öffnende geschweifte Klammer informiert den Browser, wo der Vorspann der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht weiter, bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von einer anderen geschweiften Klammer umschlossen wird: Dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln, was ggf. die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung ungültiger Inhalte hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src) Deskriptor. Wird einer dieser Deskriptoren weggelassen oder ist ungültig, ist die gesamte `@font-face`-Regel ungültig. Ein nicht zugehöriger Deskriptor, ein anderer gültiger Schriftart-Deskriptor mit einem ungültigen Wert, oder eine Stil-Deklarationseigenschaft innerhalb des verschachtelten `@font-face`-Blocks machen die Schriftartendeklaration nicht ungültig. Solange der Schriftartenname und die Schriftquelle enthalten und gültig sind, wird jegliches ungültige CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframe`-At-Regel sehr unterschiedlich ist zur Grammatik der `@font-face`-Regel, beeinflusst die Fehlerart dennoch, was ignoriert wird. Wichtige Deklarationen (mit dem {{cssxref("important")}}-Flag markiert) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinflussen andere in demselben Keyframe-Selektorblock deklarierte Stile nicht. Ein ungültiger Keyframe-Selektor (wie ein Prozentwert kleiner als `0%` oder größer als `100%`, oder eine {{cssxref("number")}}, die nicht mit `%` endet) macht die Keyframe-Selektor-Liste ungültig und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den ungültigen Selektor-Stilblock ungültig; er macht nicht die gesamte `@keyframe`-Deklaration ungültig. Das Einfügen von Stilen zwischen zwei Keyframe-Selektorblöcken hingegen macht die gesamte `@keyframe`-Regel ungültig.

Einige At-Regeln sind nahezu immer gültig. Die {{cssxref("@layer")}}-At-Regel kommt sowohl in normaler als auch in verschachtelter Form vor. Die `@layer`-Anweisungssyntax enthält nur den Vorspann, endend mit einem Semikolon. Alternativ hat die verschachtelte Syntax die Schichtstile zwischen geschweiften Klammern nach dem Vorspann. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Im Falle einer fehlenden schließenden Klammer im `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer hätte sein sollen, als zur Kaskadenschicht im Vorspann der At-Regel definiert geparst. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Wege, wie Sie beim Schreiben eines Selektors einen Fehler machen könnten, aber nur ungültige Selektoren verursachen, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klasse")}}, {{cssxref("id_selectors", "ID")}} oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einfügen, das nicht existiert, könnte es sich um einen logischen Fehler handeln, aber es ist kein Syntaxfehler. Jedoch, wenn Sie einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte es einen ungültigen Selektor erzeugen, was ein Fehler ist, den der Parser bearbeiten muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}}- oder {{cssxref(":where")}}-Pseudo-Klasse ist (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixierter Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts übereinstimmtes ist. Die Selektorliste wird nicht ungültig gemacht.

Abseits dieser Ausnahmen macht ein einziger ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig, und der gesamte Selektorblock wird ignoriert. Der Browser wird dann nach der schließenden geschweiften Klammer suchen und das Parsen von dort aus fortsetzen.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browser-spezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#anbieterpräfixe) vermeiden Browser eine exzessive Ungültigmachung von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem case-insensitiven `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudo-Element möglicherweise nicht vom Browser erkannt oder unterstützt, aber es wird nicht dazu führen, dass die gesamte Selektorliste und ihr zugehöriger Stilblock ignoriert wird. Auf der anderen Seite wird ein unbekannter präfixierter Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und Werte innerhalb eines Deklarationsblocks geht, wird das Eigenschafts-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, verursacht eine unbekannte Syntax an irgendeinem Punkt, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Er setzt das Parsen von CSS nach dem nächsten Semikolon oder der schließenden geschweiften Klammer entweder fort.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht weiter, bis er ein Semikolon findet, und beginnt dann erneut mit dem Parsen:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, bei der das Semikolon fehlt, wird ignoriert, ebenso wie das darauf folgende Eigenschafts-Wert-Paar, da der Browser erst nach einem Semikolon oder einer schließenden Klammer weiter parst. Insbesondere wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber es ist kein Fehler im Sinne der Syntax. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Anbieterpräfixe

Anbieterpräfixierte Eigenschaftsnamen und Eigenschaftswerte, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die individuellen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt dann das Parsen von dort aus fort.

Sie stoßen möglicherweise auf veraltetes CSS wie das folgende:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenreihenfolge des Auftretens](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#source_order), setzen Browser alle von ihnen verstandenen präfixierten Deklarationen um und überschreiben diese Werte dann mit der standardmäßigen, nicht präfixierten Version.

> [!NOTE]
> Vermeiden Sie es nach Möglichkeit, präfixierte Eigenschaften oder Eigenschaftswerte einzuschließen. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der nicht präfixierten Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenfolge oder ein Kommentar noch offen ist, wird der Parser alles automatisch schließen, was nicht geschlossen war.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn er unvollständig ist, wird das CSS normal geparst. Zum Beispiel, wenn Sie eine `@keyframe`-Deklaration nicht abschließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation immer noch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translatex(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Nichterschließen von CSS-Anweisungen macht die Anweisungen nicht unbedingt ungültig. Das gesagt, sollten Sie die verzeihende Natur von CSS nicht ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS leichter lesbar und wartbar und sichert, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Ungekürzte Kommentare

Ungekürzte Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, ist aller CSS-Code bis zu einem Schließungszeichen (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets Teil des Kommentars. Während ein ungekürzter Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass das CSS nach dem Öffnungszeichen (`/*`) ignoriert wird.

```html example-bad
<style>
  /* this comment is not closed
  @keyframes move {
    0% {transform: translatex(0);}
    100% {transform: translatex(100vw);}
  }
</style>
<p style="/* another unclosed comment">Parsed as HTML.</p>
```

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributs schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Wenn zum Beispiel ein Eigenschaftswert den falschen Datentyp hat oder ein Deskriptor nicht gültig für die beschriebene At-Regel ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Schlüsselwort. Wenn der einer Eigenschaft zugewiesene Wert des falschen Typs ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn darauf zugegriffen wird, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Wertetyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie erkannt wird, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte verhalten sich jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/initial_value) oder [vererbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, jedoch möglicherweise nicht auf den erwarteten.

Sehen wir uns ein Beispiel an, um dieses Verhalten zu verdeutlichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftendeklaration gültig. Die `background-color`-Deklaration ist ebenfalls zur Berechnungszeit gültig. Wenn jedoch der Browser die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft den falschen Typ hat, wird, wenn die Eigenschaft vererbbar ist, der Wert vom Elternteil geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Initialwert verwendet. Im Fall von `background-color` wird der Eigenschaftswert nicht vererbt, sodass der initiale Wert von `transparent` verwendet wird.

Um den Rückfall von benutzerdefinierten Eigenschaften besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Initialwert der Eigenschaft zu definieren:

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
- [Wertdefinition Syntax](/de/docs/Web/CSS/Value_definition_syntax)

---
title: CSS-Fehlerbehandlung
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Wenn ein Fehler in CSS existiert, wie z.B. ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) anstatt eines Fehlers, wie in [JavaScript](/de/docs/Web/JavaScript/Reference/Errors), den Fehler elegant beheben. Browser bieten keine CSS-bezogenen Warnungen oder sonstige Hinweise darauf, dass Fehler in den Styles aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und parsen die nachfolgenden gültigen Styles. Dies ist eine Funktion von CSS und kein Bug.

Dieser Leitfaden erläutert, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn auf einen CSS-Fehler gestoßen wird, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit dem Fehler und verwirft den minimalen Anteil an CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsen")}} von CSS zurückkehrt. Die "Fehlerbehandlung" besteht im Wesentlichen darin, ungültige Inhalte zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht den Einsatz neuer CSS-Features, ohne sich Gedanken darüber zu machen, dass etwas in älteren Browsern kaputtgeht. Ein Browser erkennt möglicherweise ein neues Feature nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne Fehlermeldung ermöglicht es, sowohl alte als auch neue Syntaxen im selben Regelwerk nebeneinander bestehen zu lassen, obwohl darauf geachtet werden sollte, dass sie in dieser Reihenfolge angegeben werden. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte Einwert-Syntax als auch die [Multi-Keyword-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, an welchem Punkt die neue Syntax die alte überschreibt. Wenn ein Nutzer einen alten Browser verwendet, wird das gültige Fallback nicht durch das neue CSS überschrieben, weil der Browser es als ungültig wahrnimmt.

Die Art und Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlerfolgen sind unten aufgeführt:

- Bei [Fehlern in at-rules](#at-rule-fehler) hängt es von der at-rule und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte at-rule ignoriert wird (scheitert).
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen verursacht einen ungültigen Wert, wodurch mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder -wert ist](#fehler_innerhalb_von_css-deklarationsblöcken), wie ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert.
- Wenn der [Fehler auf ein fehlendes Endeklammer](#fehler_bei_automatisch_geschlossenen_endungen) zurückzuführen ist, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, at-rule usw. überprüft der Browser den geparsten Inhalt gegen die erwartete [Grammatik](#grammatik-check) für das jeweilige Konstrukt. Wenn der Inhalt nicht der erwarteten Grammatik für das Konstrukt entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-rule-Fehler

Das `@`-Symbol, das in den CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, zeigt den Anfang einer CSS-{{cssxref("at-rule")}} an. Sobald eine at-rule mit dem `@`-Symbol beginnt, wird vom Standpunkt des Parsers nichts als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil des Präludiums der at-rule. Der Inhalt jeder at-rule wird gemäß der Grammatikregeln für diese bestimmte at-rule interpretiert.

Aussage-at-rules wie {{cssxref("@import")}}- und {{cssxref("@namespace")}}-Deklarationen enthalten nur ein Präludium. Das Semikolon beendet für [Aussage-at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules) sofort die at-rule. Wenn der Inhalt des Präludiums gemäß der Grammatik für diese at-rule ungültig ist, wird die at-rule ignoriert, wobei der Browser mit dem Parsen des CSS nach dem nächsten Semikolon fortfährt. Zum Beispiel, wenn eine `@import`-at-rule nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen vorkommt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser auf eine geschweifte Klammer (`{`) stößt, bevor ein Semikolon gefunden wird, wird die at-rule als Block-at-rule geparst. [Block-at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`), umrahmt wird. Die öffnende geschweifte Klammer informiert den Browser, wo das Präludium der at-rule endet und der Körper der at-rule beginnt. Der Parser schaut nach vorne, sucht nach passenden Blöcken (Inhalte umrahmt von `()`, `{}` oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die durch keine andere geschweifte Klammer ergänzt wird: Dies schließt den Körper der at-rule.

Verschiedene at-rules haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was, wenn überhaupt, die gesamte at-rule ungültig macht. Die erwartete Grammatik für [jede at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen at-rule-Seite dokumentiert. Die Behandlung ungültiger Inhalte hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src) Deskriptor. Wenn einer dieser fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Ein nicht verwandter Deskriptor oder jede andere gültige Schriftartbeschreibung mit einem ungültigen Wert oder eine Stildeklaration innerhalb des verschachtelten Blocks von `@font-face` wird die Schrifterklärung nicht ungültig machen. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird jedes ungültige CSS innerhalb der at-rule ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframe`-at-rule sich stark von der Grammatik der `@font-face`-Regel unterscheidet, wirkt sich die Art des Fehlers dennoch darauf aus, was ignoriert wird. Wichtige Deklarationen (markiert mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, wirken sich jedoch nicht auf andere Styles aus, die im selben Keyframe-Selektorblock erklärt wurden. Ein ungültiger Keyframe-Selektor (wie ein Prozentwert kleiner als `0%` oder größer als `100%`, oder eine {{cssxref("number")}}, die das `%` weglässt) macht die Keyframe-Selektorliste ungültig, und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframe`-Deklaration ungültig. Einfügen von Styles zwischen zwei Keyframe-Selektorblöcken hingegen macht die gesamte `@keyframe`-at-rule ungültig.

Einige at-rules sind fast immer gültig. Die {{cssxref("@layer")}}-at-rule kommt in sowohl regulären als auch verschachtelten Formen vor. Die `@layer`-Anweisungssyntax enthält nur das Präludium, das mit einem Semikolon endet. Alternativ enthält die verschachtelte Syntax Layer-Styles, die zwischen geschweiften Klammern nach dem Präludium liegen. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, aber es ist kein Syntaxfehler. Im Falle einer fehlenden schließenden Klammer in `@layer` werden alle Styles, die nach dem Punkt kommen, an dem die schließende Klammer hätte stehen sollen, als im im Präludium definierten Kaskadenlayer betrachtet. Das CSS ist gültig, da keine Syntaxfehler auftreten; nichts wird verworfen. Ein Syntaxfehler kann den benannten oder anonymen Layer leer machen, aber der Layer wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Fehler beim Schreiben eines Selektors passieren können, aber nur ungültige Selektoren machen eine Selektorliste ungültig (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}} oder {{cssxref("type_selectors", "Typ")}} Selektor für eine Klasse, ID oder ein Element (oder ein benutzerdefiniertes Element), das nicht existiert, einfügen, kann dies ein logischer Fehler sein, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, kann dies einen ungültigen Selektor erzeugen, was ein Fehler ist, mit dem sich der Parser befassen muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn sich der ungültige Selector innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudo-Klasse befindet (die [nachgiebige Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts zuordnen kann. Die Selektorliste wird nicht ungültig gemacht.

Abgesehen von diesen Ausnahmen macht ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig, und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann die schließende geschweifte Klammer und setzt das Parsen von diesem Punkt an fort.

#### `-webkit-`-Ausnahme

Aufgrund von Legacy-Problemen mit dem übermäßigen Gebrauch von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-präfixe) vermeiden Browser eine übermäßige Ungültigmachung von Selektorlisten, indem alle [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem fallunabhängigen `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig behandelt werden.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` die Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code läuft. In solchen Fällen wird das Pseudo-Element möglicherweise von dem Browser nicht erkannt oder unterstützt, aber es wird nicht dazu führen, dass die gesamte Selektorliste und ihr zugehöriger Stilblock ignoriert werden. Ein unbekannter, mit Präfix versehener Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` macht dagegen die gesamte Selektorliste ungültig, und der Browser ignoriert den gesamten Selektorblock.

### Fehler innerhalb von CSS-Deklarationsblöcken

Bei CSS-Eigenschaften und -Werten innerhalb eines Deklarationsblocks, wenn entweder die Eigenschaft oder der Wert ungültig ist, wird dieses Eigenschaft-Wert-Paar ignoriert und verworfen. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an irgendeinem Punkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Er setzt das Parsen des CSS dann nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fort, je nachdem, was zuerst eintritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er ein Semikolon findet, und beginnt dann erneut mit dem Parsen:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Block ist. Die Eigenschaft ohne Semikolon wird ignoriert, ebenso wie das darauf folgende Eigenschaft-Wert-Paar, da der Browser nur nach einem Semikolon oder schließenden Klammer die CSS-Deklarationen fortsetzt. Genauer gesagt, wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Vendor-Präfix-Eigenschaftsnamen und Eigenschaftswerte, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die individuellen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt das Parsen dann von dort fort.

Sie könnten auf legacy CSS stoßen, das wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenregel von](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [Reihenfolge des Erscheinens](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) wendet der Browser alle Präfix-Deklarationen, die er versteht, an, und überschreibt diese Werte dann mit der standardmäßigen, nicht präfixierten Version.

> [!NOTE]
> Vermeiden Sie die Aufnahme von präfixierten Eigenschaften oder Eigenschaftswerten, wo immer möglich. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der Version ohne Präfix, wie oben gezeigt.

### Fehler bei automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenfolge oder Kommentar noch offen ist, schließt der Parser automatisch alles, was nicht geschlossen wurde.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn er unvollständig ist, wird das CSS normal geparst. Wenn Sie zum Beispiel vergessen, eine `@keyframe`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Nicht-Schließen von CSS-Anweisungen führt nicht zwangsläufig dazu, dass die Anweisungen ungültig werden. Dennoch sollten Sie nicht von der nachsichtigen Natur von CSS profitieren. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Dies macht Ihr CSS leichter lesbar und pflegbar und stellt sicher, dass der Browser das CSS wie beabsichtigt parst.

#### Ungeschlossene Kommentare

Ungeschlossene Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, ist der gesamte CSS-Code bis zu einem schließenden Trennzeichen (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, Teil des Kommentars. Während ein ungeschlossener Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass der CSS-Code nach dem öffnenden Trennzeichen (`/*`) ignoriert wird.

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

In diesem Beispiel sind die zwei CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das `style`-Attributs schließendes Zitat schließt den zweiten Kommentar.

## Grammatik-Check

Nach dem Parsen jeder Deklaration, Stilregel, At-rule usw., überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration folgt. Zum Beispiel, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor für die beschriebene at-rule nicht gültig ist, wird der Inhalt, der nicht mit der erwarteten Grammatik übereinstimmt, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder ein gültiges {{cssxref("&lt;color&gt;")}} oder ein CSS globales Schlüsselwort. Wenn der zugewiesene Wert einer Eigenschaft vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können aber ungültiges CSS erzeugen, wenn sie genutzt werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Wertetyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird eine Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück, wenn ein Eigenschaftswert ungültig ist. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert, und der [initial](/de/docs/Web/CSS/CSS_cascade/initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, der möglicherweise nicht der erwartete ist.

Schauen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Stattdessen, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, und die Eigenschaft erbbar ist, wird der Wert vom übergeordneten Element geerbt. Wenn die Eigenschaft nicht erbbar ist, wird der Standard-Initialwert verwendet. Im Fall von `background-color` ist der Eigenschaftswert nicht ein erbbarer Wert, sodass der Initialwert von `transparent` verwendet wird.

Um besser zu kontrollieren, wie benutzerdefinierte Eigenschaften zurückfallen, verwenden Sie die {{cssxref("@property")}}-at-rule, um den Initialwert der Eigenschaft zu definieren:

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
- [Wertdefinition Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

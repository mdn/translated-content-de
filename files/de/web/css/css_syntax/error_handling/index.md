---
title: CSS-Fehlerbehandlung
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 7c0cd9f9b667fe9be0887e8902d09f0013290930
---

{{CSSRef}}

Wenn ein Fehler in CSS vorliegt, wie zum Beispiel ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) diesen Fehler nicht [wie in JavaScript mit einer Fehlermeldung](/de/docs/Web/JavaScript/Reference/Errors) anzeigen. Stattdessen wird er sich elegant davon erholen. Browser geben keine CSS-bezogenen Warnungen aus oder weisen darauf hin, dass Fehler in den Styles aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und parsen die nachfolgenden gültigen Styles. Dies ist ein Merkmal von CSS, kein Fehler.

Dieser Leitfaden beschreibt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft die Mindestanzahl von CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsen")}} des CSS zurückkehrt. Die "Fehlerbehebung" besteht lediglich darin, ungültige Inhalte zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne sich Gedanken darüber machen zu müssen, dass in älteren Browsern etwas kaputt geht. Ein Browser erkennt möglicherweise ein neues Feature nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne eine Fehlermeldung ermöglicht es, dass sowohl alte als auch neue Syntax im selben Regelsatz koexistieren können, obwohl sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl den herkömmlichen Einzelwert als auch die [Mehrfach-Schlüsselwort-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, ab diesem Zeitpunkt überschreibt die neue Syntax die alte. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht durch das neue CSS überschrieben, da der Browser es als ungültig betrachtet.

Der Typ und die Menge des CSS, das ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird (ausfällt).
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, in diesem Fall werden mehrere Eigenschaft-Wert-Deklarationen ignoriert.
- Wenn der [Fehler ein Eigenschaftsname oder -wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie z. B. ein nicht erkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert.
- Wenn der [Fehler aufgrund einer fehlenden Endklammer](#fehler_mit_automatisch_geschlossenen_endungen) auftritt, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als geschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt gegen die erwartete [Grammatik](#grammatiküberprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, bekannt in CSS-Spezifikationen als `<at-keyword-token>`, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird von Seiten des Parsers nichts als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zur Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese bestimmte At-Regel interpretiert.

Anweisungsat-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, enthalten nur eine Präambel. Das Semikolon beendet die At-Regel sofort für [Anweisungsat-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt der Präambel nach der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser das Parsen von CSS fortsetzt, nachdem er das nächste Semikolon erreicht. Zum Beispiel wird eine `@import`-At-Regel ignoriert, wenn sie nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen erscheint.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon erreicht, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules), wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, die von geschweiften Klammern (`{}`) umgeben sind. Die öffnende geschweifte Klammer zeigt dem Browser, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht nach passenden Blöcken (Inhalten, die von `()`, `{}` oder `[]` umgeben sind), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern umgeben ist: Dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was die gesamte At-Regel ungültig machen könnte (oder nicht). Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie mit Fehlern umgegangen wird, ist auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung ungültiger Inhalte hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family)- als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer dieser Deskriptoren fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptors, eines anderen gültigen Fontdeskriptors mit einem ungültigen Wert oder einer Stildeklaration innerhalb des geschachtelten Blocks der `@font-face`-Regel macht die Fontdeklaration nicht ungültig. Solange der Fontname und die Fontquelle enthalten und gültig sind, wird jegliches ungültige CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframes`-At-Regel sich deutlich von der `@font-face`-Grammatik unterscheidet, beeinflusst die Art des Fehlers, was ignoriert wird. Wichtige Deklarationen (mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinträchtigen andere in demselben Keyframe-Selektorblock deklarierte Stile nicht. Ein ungültiger Keyframe-Selektor (wie ein Prozentwert kleiner als `0%` oder größer als `100%`, oder eine {{cssxref("number")}} ohne das `%`-Zeichen) macht die Keyframe-Selektorliste ungültig und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; die gesamte `@keyframes`-Deklaration wird nicht ungültig. Das Einfügen von Stilen zwischen zwei Keyframe-Selektorblöcken wiederum macht die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel kommt sowohl in regulären als auch in geschachtelten Formen vor. Die `@layer`-Anweisungssyntax enthält nur die Präambel, die mit einem Semikolon endet. Alternativ hat die verschachtelte Syntax Schichtstile, die zwischen geschweiften Klammern nach der Präambel geschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Bei einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach der fehlenden Klammer folgen sollten, als Teil der Kaskadenschicht geparst, die in der Präambel der At-Regel definiert ist. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erzeugt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, beim Schreiben eines Selektors Fehler zu machen, aber nur ungültige Selektoren führen dazu, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}} oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einschließen, das nicht existiert, kann dies ein logischer Fehler sein, aber kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte dies einen ungültigen Selektor erstellen, welcher ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudo-Klasse (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor als nicht zugehörig ignoriert. Die Selektorliste wird nicht ungültig gemacht.

Außerhalb dieser Ausnahmen wird ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig machen und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen ab diesem Punkt fort.

#### `-webkit-`-Ausnahme

Aufgrund von Kompatibilitätsproblemen durch den übermäßigen Gebrauch von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#anbieterpräfixe), vermeiden Browser die übermäßige Ungültigmachung von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem nicht beachtlichen `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig betrachten.

Dies bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudo-Element möglicherweise nicht vom Browser erkannt oder unterstützt, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Ein unbekannter präfixierter Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` hingegen wird die gesamte Selektorliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Bezüglich der CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks, wenn entweder die Eigenschaft oder der Wert ungültig ist, wird dieses Eigenschaft-Wert-Paar ignoriert und verworfen. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, wird unbekannte Syntax an irgendeinem Punkt den Parser des Browsers nur die aktuelle Deklaration verwerfen lassen. Anschließend wird das Parsen von CSS fortgesetzt, wenn das nächste Semikolon oder die nächste schließende geschweifte Klammer erreicht wird, je nachdem, was zuerst eintritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon trifft, und beginnt dann erneut mit dem Parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, der das Semikolon fehlt, wird ignoriert, ebenso wie das nachfolgende Eigenschaft-Wert-Paar, weil der Browser nur nach einem Semikolon oder einer schließenden Klammer weiter parst. Insbesondere wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Syntaxfehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Anbieterpräfixe

Anbieterpräfixe in Eigenschaftsnamen und -werten, die von einem Browser nicht verstanden werden, werden als ungültig betrachtet und ignoriert. Nur die individuellen Regeln mit einer ungültigen Eigenschaft oder einem ungültigen Wert werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt das Parsen dann von diesem Punkt aus fort.

Sie könnten auf veraltetes CSS stoßen, das wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenregel](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [der Erscheinungsreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) werden Browser alle verstehen Präfix-Deklarationen anwenden und diese Werte dann mit der standardmäßig nicht präfixierten Version überschreiben.

> [!NOTE]
> Vermeiden Sie es, sofern möglich, präfixierte Eigenschaften oder Eigenschaftswerte einzusehen. Falls Sie sie verwenden müssen, geben Sie die präfixierten Versionen vor der nicht präfixierten Version ein, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder ein Kommentar noch offen ist, schließt der Parser automatisch alles, was nicht geschlossen wurde.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn unvollständig, wird das CSS normal geparst. Zum Beispiel, wenn Sie es versäumen, eine `@keyframes`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}}-Element schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen richtig zu schließen, macht die Anweisungen nicht unbedingt ungültig. Das gesagt, sollten Sie die nachsichtige Natur von CSS nicht ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Dies macht Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Nicht geschlossene Kommentare

Nicht geschlossene Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, sind alle CSS-Codes bis zu einem schließenden Begrenzer (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst eintritt, Teil des Kommentars. Obwohl ein nicht geschlossener Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass das CSS nach dem öffnenden Begrenzer (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, jedoch schließt die schließende `</style>`-Marke den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributs den zweiten Kommentar.

## Grammatiküberprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. prüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration folgt. Zum Beispiel, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Keyword. Wenn der Wert, der einer Eigenschaft zugewiesen wird, vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie aufgerufen werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, der möglicherweise nicht der erwartete ist.

Werfen wir einen Blick auf ein Beispiel, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird, falls die Eigenschaft vererbbar ist, der Wert vom Elterntrenner geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Initialwert verwendet. Im Fall von `background-color` ist der Eigenschaftswert kein vererbter Wert, daher wird der Initialwert `transparent` verwendet.

Um die Art und Weise, wie benutzerdefinierte Eigenschaften zurückfallen, besser zu steuern, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Initialwert der Eigenschaft zu definieren:

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
- [Wertdefinition Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

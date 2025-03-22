---
title: CSS-Fehlerbehandlung
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Wenn ein Fehler in CSS vorliegt, wie zum Beispiel ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Nutzeragent) im Gegensatz zu [JavaScript, das einen Fehler auslöst](/de/docs/Web/JavaScript/Reference/Errors), den Fehler elegant abfangen. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen anderweitig an, dass Fehler in Stilen aufgetreten sind. Stattdessen verwerfen sie ungültige Inhalte und parsen die darauffolgenden gültigen Stile. Das ist ein Merkmal von CSS, kein Fehler.

Dieser Leitfaden behandelt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der Browser-Parser die Zeile mit den Fehlern und verwirft die minimal erforderliche Menge an CSS-Code, bevor das CSS normal weitergeparst wird. Die „Fehlerbehebung“ besteht lediglich darin, ungültigen Inhalt zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne sich Sorgen machen zu müssen, dass ältere Browser etwas brechen. Ein Browser erkennt eine neue Funktion möglicherweise nicht, aber das ist in Ordnung. Das Verwerfen von ungültigem Inhalt, ohne einen Fehler auszulösen, ermöglicht es, dass alte und neue Syntax in einem Regelset koexistieren, allerdings sollte darauf geachtet werden, sie in dieser Reihenfolge anzugeben. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die Eigenschaft {{cssxref("display")}} akzeptiert sowohl die veraltete Einzelwert-Syntax als auch [mehrfach-Schlüsselwort-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser werden die alte Syntax rendern, bis sie die neue Syntax als gültig erkennen, zu diesem Zeitpunkt überschreibt die neue die alte. Wenn ein Nutzer einen alten Browser hat, wird der gültige Fallback nicht von dem neuen CSS überschrieben, weil der Browser ihn als ungültig wahrnimmt.

Der Typ und die Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt vom Fehlertyp ab. Unten sind einige häufige Fehlerfälle aufgeführt:

- Bei [Fehlern in At-Regeln](#fehler_in_at-regeln) wird entweder eine einzelne Zeile oder die gesamte At-Regel ignoriert (fehlt), dies hängt von der At-Regel und der Art des Fehlers ab.
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaften-Deklarationen verursacht einen ungültigen Wert, in diesem Fall werden mehrere Eigenschaften-Wert-Deklarationen ignoriert.
- Wenn der [Fehler ein Eigenschaftsname oder ein Wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert.
- Wenn der [Fehler auf ein fehlendes End-Klammer] (#fehler_mit_automatisch_geschlossenen_enden) zurückzuführen ist, hängt es von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen, was ignoriert wird.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt gegen seine erwartete [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### Fehler in At-Regeln

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, weist auf den Beginn einer CSS-{{cssxref("at-rule")}} hin. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts mehr aus der Sicht des Parsers als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zur Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

Statement-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, enthalten nur eine Präambel. Das Semikolon beendet die At-Regel sofort für [Statement-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt der Präambel gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, und der Browser fährt mit dem Parsen von CSS fort, nachdem er das nächste Semikolon erreicht hat. Tritt beispielsweise eine `@import`-At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auf, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon findet, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, umschlossen von geschweiften Klammern (`{}`). Die öffnende geschweifte Klammer informiert den Browser, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht nach passenden Blöcken (Inhalt umschlossen von `()`, `{}`, oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht durch eine andere geschlossene geschweifte Klammer ausgeglichen ist: Dies schließt den Körper der At-Regel ab.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was (falls überhaupt) die gesamte At-Regel ungültig machen wird. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Das Handling von ungültigem Inhalt hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family)- als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer dieser Deskriptoren fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht zugehörigen Deskriptors, eines anderen gültigen Schriftarten-Deskriptors mit ungültigem Wert oder einer Eigenschaftsdeklaration im verschachtelten Block der `@font-face`-Regel macht die Schriftartendeklaration nicht ungültig. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird ein ungültiges CSS in der At-Regel ignoriert, aber der `@font-face`-Block wird trotzdem geparst.

Obwohl die Grammatik der `@keyframe`-At-Regel sich stark von der `@font-face`-Regel-Grammatik unterscheidet, beeinflusst der Fehlertyp immer noch, was ignoriert wird. Wichtige Deklarationen (z.B. mit dem {{cssxref("important")}}-Flag) und nicht animierbare Eigenschaften werden in keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere Stile, die im gleichen Keyframe-Selektorblock deklariert sind. Ein ungültiger Keyframe-Selektor (wie ein Prozentwert kleiner als `0%` oder größer als `100%`, oder eine {{cssxref("nummer")}} ohne `%`) macht die Liste der Keyframe-Selektoren ungültig, und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframe`-Deklaration ungültig. Das Hinzufügen von Stilen zwischen zwei Keyframe-Selektorblöcken hingegen macht die gesamte `@keyframe`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in der regulären als auch in der verschachtelten Form. Die `@layer`-Anweisungssyntax enthält nur die Präambel, die mit einem Semikolon endet. Alternativ sind bei der verschachtelten Syntax die Layer-Stile in geschweifte Klammern eingeschlossen, die nach der Präambel kommen. Das Weglassen einer schließenden geschweiften Klammer mag ein logischer Fehler sein, ist aber kein Syntaxfehler. Im Falle einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer hätte sein sollen, als Bestandteil der Kaskadenschicht geparst, die in der Präambel der At-Regel definiert ist. Das CSS ist gültig, da keine Syntaxfehler vorhanden sind; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass der benannte oder anonyme Layer leer ist, aber der Layer wird trotzdem erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie einen Fehler beim Schreiben eines Selektors machen können, aber nur ungültige Selektoren verursachen, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}} oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, eine ID oder ein Element (oder ein benutzerdefiniertes Element) hinzufügen, das nicht existiert, kann dies ein Logikfehler sein, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudoklasse oder einem Pseudoelement haben, könnte dies einen ungültigen Selektor erzeugen, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor in einer {{cssxref(":is")}} oder {{cssxref(":where")}}-Pseudoklasse enthalten ist (die [nachsichtige Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixierter Pseudoelement](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts trifft. Die Selektorliste wird nicht ungültig.

Abgesehen von diesen Ausnahmen macht ein einziger ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsing von dort aus fort.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch browser-spezifischer Präfixe in Selektoren und [Eigenschaftsnamen (und -werten)](#vendorspezifische_präfixe) vermeiden Browser die übermäßige Ungültigkeitserklärung von Selektorlisten, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem nicht beachtlich geschriebenen `-webkit-` Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig machen wird, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudoelement möglicherweise nicht erkannt oder vom Browser unterstützt, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der damit verbundene Stilblock ignoriert werden. Ein unbekannter Präfix-Selektor mit einer Funktionsnotation wie `::-webkit-imaginary-function()` wird hingegen die gesamte Selektorliste ungültig machen, und der Browser ignoriert den gesamten Selektorblock.

### Fehler innerhalb von CSS-Deklarationsblöcken

Bei CSS-Eigenschaften und -Werten innerhalb eines Deklarationsblocks, wenn entweder die Eigenschaft oder der Wert ungültig ist, wird dieses Eigenschafts-Wert-Paar ignoriert und verworfen. Wenn ein Nutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax zu jedem Zeitpunkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Der Browser wird dann fortfahren, CSS nach dem nächsten Semikolon oder einer schließenden geschweiften Klammer zu parsen, je nachdem, was zuerst auftritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon stößt, und startet dann das Parsing neu:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft ohne Semikolon wird ignoriert, ebenso wie das darauf folgende Eigenschafts-Wert-Paar, weil der Browser nur nach einem Semikolon oder einer schließenden Klammer weiter parst. Genauer gesagt, wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die mit dem Selektor übereinstimmen.

#### Vendorspezifische Präfixe

Vendorspezifische Eigenschaftsnamen und Eigenschaftswerte, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die individuellen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder einer schließenden geschweiften Klammer und setzt dann das Parsing von dort aus fort.

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der Regeln zur [Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) und der [Erscheinungsreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) werden Browser alle Präfix-Deklarationen anwenden, die sie verstehen, und diese Werte dann mit der standardmäßigen, unpräfixierten Version überschreiben.

> [!NOTE]
> Vermeiden Sie, wo möglich, die Verwendung prefixierter Eigenschaften oder Eigenschaftswerte. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der nicht-präfixierten Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Enden

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder Kommentar noch offen ist, wird der Parser alles schließen, was noch nicht geschlossen wurde.

> [!NOTE]
> Dies trifft auf externe Stylesheets, Selektorblöcke innerhalb eines HTML {{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs zu.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn er unvollständig ist, wird das CSS normal geparst. Zum Beispiel, wenn Sie eine `@keyframe`-Deklaration nicht vollständig schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen ordnungsgemäß zu schließen, macht die Anweisungen nicht unbedingt ungültig. Trotzdem sollten Sie sich nicht die Nachsicht von CSS zunutze machen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Dies macht Ihr CSS lesbarer und wartbarer und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Unvollendete Kommentare

Unvollendete Kommentare sind Logikfehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, gehört der gesamte CSS-Code bis zu einem schließenden Begrenzer (`*/`) in einem nachfolgenden Kommentar oder bis zum Ende des Stylesheets zum Kommentar. Auch wenn ein unvollendeter Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass das CSS, das dem öffnenden Begrenzer (`/*`) folgt, ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das `style`-Attributs-Schlusszeichen schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Nutzeragent, ob die Grammatik den Regeln für diese Deklaration folgt. Zum Beispiel, wenn ein Eigenschaftswert den falschen Datentyp hat oder ein Deskriptor nicht für die beschriebene At-Regel gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig betrachtet und ignoriert.

Jede CSS-Eigenschaft akzeptiert bestimmte Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}} Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Schlüsselwort. Wenn der Wert einer Eigenschaft den falschen Typ hat, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie genutzt werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, jedoch möglicherweise nicht auf den erwarteten.

Werfen wir einen Blick auf ein Beispiel zur Veranschaulichung dieses Verhaltens:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Wenn eine benutzerdefinierte Eigenschaft den falschen Typ hat und die Eigenschaft vererbbar ist, wird der Wert vom übergeordneten Element ererbt. Ist die Eigenschaft nicht vererbbar, wird der Standard-Initialwert verwendet. Im Falle von `background-color` ist der Eigenschaftswert nicht vererbbar, daher wird der Initialwert von `transparent` verwendet.

Um das Fallback-Verhalten von benutzerdefinierten Eigenschaften besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Initialwert der Eigenschaft zu definieren:

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
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

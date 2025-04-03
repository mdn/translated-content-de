---
title: CSS-Fehlerbehandlung
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Wenn ein Fehler im CSS vorliegt, wie z. B. ein ungültiger Wert oder ein fehlendes Semikolon, tritt im Gegensatz zu [JavaScript, das einen Fehler wirft](/de/docs/Web/JavaScript/Reference/Errors), kein Fehler auf. Stattdessen erholt sich der Browser (oder ein anderer User-Agent) auf elegante Weise. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen anderweitig an, dass Fehler in den Stilen aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und parsen anschließend gültige Stile. Dies ist ein Merkmal von CSS und kein Fehler.

Dieser Leitfaden erklärt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern, verwirft die minimale Menge an CSS-Code und kehrt zum normalen {{Glossary("parse", "Parsen")}} des CSS zurück. Die "Fehlerbehebung" besteht nur im Ignorieren oder Überspringen ungültiger Inhalte.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne sich Sorgen zu machen, dass etwas in älteren Browsern kaputtgeht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne einen Fehler zu werfen, erlaubt es sowohl alten als auch neuen Syntaxen, im selben Regelset zu koexistieren, wobei darauf geachtet werden sollte, sie in dieser Reihenfolge anzugeben. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl veraltete Einzelwerte als auch die [mehrstufige Schlüsselsynthese](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser werden die alte Syntax rendert, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht durch das neue CSS überschrieben, da der Browser es als ungültig ansieht.

Der Typ und die Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängen vom Typ des Fehlers ab. Einige häufige Fehlersituationen sind:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und dem Fehlertyp ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert (schlägt fehl) wird.
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, wobei mehrere Eigenschafts-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder -wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert.
- Wenn der [Fehler aufgrund einer fehlenden schließenden Klammer](#fehler_mit_automatisch_geschlossenen_enden) auftritt, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. prüft der Browser die geparsten Inhalte gegen seine erwartete [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn die Inhalte nicht mit der erwarteten Grammatik für dieses Konstrukt übereinstimmen, erachtet der Browser sie als ungültig und ignoriert sie.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, kennzeichnet den Beginn einer CSS-{{cssxref("at-rule")}}. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird aus Sicht des Parsers nichts als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zum Vorspiel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

Deklarations-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, enthalten nur ein Vorspiel. Das Semikolon beendet die At-Regel sofort für [Deklarations-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt des Vorspiels gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser mit dem Parsen des CSS fortfährt, nachdem er das nächste Semikolon erreicht hat. Wenn zum Beispiel eine `@import`-At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser eine geschweifte Klammer (`{`) findet, bevor ein Semikolon auftritt, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umgeben ist. Die öffnende geschweifte Klammer zeigt dem Browser an, wo das Vorspiel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht voraus, um passende Blöcke (Inhalte, die von `()`, `{}` oder `[]` umgeben sind) zu finden, bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern ausgeglichen wird: dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, verschiedene (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was ggf. die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung ungültiger Inhalte hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src) Deskriptor. Wenn einer dieser Deskriptoren fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Einfügen eines nicht zusammenhängenden Deskriptors, eines anderen gültigen Font-Deskriptors mit einem ungültigen Wert oder einer Eigenschaftsdeklaration innerhalb des verschachtelten `@font-face`-Blocks macht die Font-Deklaration nicht ungültig. Solange der Font-Name und die Font-Quelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich zur `@font-face`-Regelgrammatik ist, wirkt sich die Art des Fehlers dennoch darauf aus, was ignoriert wird. Wichtige Deklarationen (markiert mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere Stile, die im selben Keyframe-Selektorblock deklariert sind. Das Einfügen eines ungültigen Keyframe-Selektors (wie z. B. eines Prozentwertes, der kleiner als `0%` oder größer als `100%` ist, oder einer {{cssxref("number")}}, die das `%` auslässt) macht die Keyframe-Selektorliste ungültig, und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Einfügen von Stilen zwischen zwei Keyframe-Selektorblöcken macht hingegen die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regulärer als auch in verschachtelter Form. Die `@layer`-Anweisungssyntax enthält nur das Vorspiel und endet mit einem Semikolon. Alternativ hat die verschachtelte Syntax Schichtstile, die nach dem Vorspiel zwischen geschweiften Klammern verschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Bei einer fehlenden schließenden geschweiften Klammer in `@layer` werden alle Stile, die nach dem Ort, an dem die schließende Klammer hätte sein sollen, kommen, als Teil der Kaskadenschicht im Vorspiel der At-Regel geparst. Das CSS ist gültig, da keine Syntaxfehler vorliegen; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen können, aber nur ungültige Selektoren führen dazu, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}}, oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder ein benutzerdefiniertes Element) einfügen, das nicht existiert, kann dies ein logischer Fehler sein, aber kein Syntaxfehler. Wenn jedoch ein Tippfehler in einer Pseudoklasse oder einem Pseudoelement vorliegt, kann dies einen ungültigen Selektor erzeugen, den der Parser adressieren muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudoklasse ist (die [nachsichtige Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudoelement](#-webkit-_exception) ist, wird nur der unbekannte Selektor als nicht übereinstimmend ignoriert. Die Selektorliste wird nicht ungültig.

Außerhalb dieser Ausnahmen macht ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig, und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen ab diesem Punkt fort.

#### `-webkit-`-Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browser-spezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-präfixe) vermeiden es Browser, Selektorlisten übermäßig ungültig zu machen, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) als gültig behandeln, die mit einem `-webkit-`-Präfix unabhängig von der Groß- und Kleinschreibung beginnen und nicht mit `()` enden.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudoelement möglicherweise nicht erkannt oder unterstützt vom Browser, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Auf der anderen Seite wird ein unbekannter präfixierter Selektor mit einer funktionalen Notation von `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und -werte innerhalb eines Deklarationsblocks geht, wird das Eigenschafts-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein User-Agent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an irgendeinem Punkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Dann setzt er das Parsen von CSS fort, nachdem das nächste Semikolon oder die schließende geschweifte Klammer auftritt, je nachdem, was zuerst eintritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht weiter, bis er ein Semikolon findet, und beginnt dann, das Parsen erneut:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, der das Semikolon fehlt, wird ignoriert, ebenso wie das darauf folgende Eigenschafts-Wert-Paar, da der Browser erst nach einem Semikolon oder einer schließenden Klammer weiterparst. Speziell wird der `border-color`-Wert als `rot background-color: grün;` geparst, was kein gültiger {{cssxref("Farbe")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Syntaxfehler. Da es syntaktisch gültig ist, wird es geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Vendor-präfixierte Eigenschaftsnamen und -werte, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt dann das Parsen ab dort fort.

Sie könnten auf Legacy-CSS stoßen, das so aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenregel [Reihenfolge der Erscheinung]](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) wird jeder Browser alle prefixed Deklarationen anwenden, die sie verstehen, und dann diese Werte mit der standardmäßigen unverprägten Version überschreiben.

> [!NOTE]
> Vermeiden Sie es, prefixed Eigenschaften oder Eigenschaftswerte zu verwenden, wo möglich. Wenn Sie sie verwenden müssen, deklarieren Sie die prefixed Versionen vor der nicht-prefixed Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Enden

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder Kommentar noch offen ist, schließt der Parser automatisch alles, was ungeschlossen geblieben ist.

> [!NOTE]
> Dies gilt sowohl für externe Stylesheets, Selektorblöcke innerhalb eines HTML {{HTMLElement("style")}}-Elements, als auch für Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn er unvollständig ist, wird das CSS normal geparst. Wenn Sie zum Beispiel eine `@keyframes`-Deklaration nicht schließen, bevor Sie Ihr {{htmlelement("style")}} beenden, ist die Animation immer noch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen korrekt zu schließen, macht die Anweisungen nicht unbedingt ungültig. Dennoch sollten Sie die vergebliche Natur von CSS nicht ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS leichter zu lesen und zu pflegen und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Unvollständige Kommentare

Unvollständige Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, gehört der gesamte CSS-Code bis zu einem schließenden Trennzeichen (`*/`) in einem nachfolgenden Kommentar oder bis zum Ende des Stylesheets, je nachdem, was zuerst eintritt, zum Kommentar. Während ein unvollständiger Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass das CSS nach dem öffnenden Trennzeichen (`/*`) ignoriert wird.

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

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. prüft der User-Agent, ob die Grammatik den Regeln für diese Deklaration folgt. Bei einem falschen Datentyp eines Eigenschaftswerts oder einem nicht gültigen Deskriptor für die beschriebene At-Regel wird der Inhalt, der nicht mit der erwarteten Grammatik übereinstimmt, als ungültig betrachtet und ignoriert.

Jede CSS-Eigenschaft akzeptiert bestimmte Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("Farbe")}} oder ein globales CSS-Schlüsselwort. Wenn der zugewiesene Wert zu einer Eigenschaft den falschen Typ hat, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften gelten im Allgemeinen als gültig, wenn sie deklariert werden, können aber ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. wenn sie als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Wertetyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

In der Regel wird bei einem ungültigen Eigenschaftswert die Deklaration ignoriert und die Eigenschaft auf den letzten gültigen Wert zurückgesetzt. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn ein `var()`-Ersatz ungültig ist, wird die Deklaration nicht ignoriert, und der [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder erbte [Wert](/de/docs/Web/CSS/CSS_cascade/Inheritance) der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, jedoch möglicherweise nicht auf den erwarteten.

Betrachten wir ein Beispiel, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Die `background-color`-Deklaration ist auch zum Berechnungszeitpunkt gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Wenn eine benutzerdefinierte Eigenschaft den falschen Typ hat, wird, wenn die Eigenschaft vererbbar ist, der Wert von ihrem Elternteil geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der standardmäßige Anfangswert verwendet. Im Fall der `background-color`-Eigenschaft ist der Wert der Eigenschaft kein vererbbarer Wert, daher wird der Anfangswert von `transparent` verwendet.

Um besser zu kontrollieren, wie benutzerdefinierte Eigenschaften zurückfallen, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Anfangswert der Eigenschaft zu definieren:

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

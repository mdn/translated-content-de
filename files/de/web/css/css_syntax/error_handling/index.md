---
title: Fehlerbehandlung in CSS
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Wenn ein Fehler in CSS vorliegt, wie zum Beispiel ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) diesen Fehler nicht anzeigen wie JavaScript, sondern sich elegant erholen. Browser geben keine CSS-bezogenen Warnmeldungen oder andere Hinweise auf Fehler in Styles aus. Sie verwerfen einfach ungültigen Inhalt und parsen die folgenden gültigen Styles. Dies ist eine Funktion von CSS, kein Fehler.

Dieser Leitfaden erklärt, wie CSS {{glossary("parser", "Parser")}} ungültiges CSS verwirft.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft so wenig CSS-Code wie möglich, bevor er wieder normal mit der {{glossary("parse", "Interpretation")}} des CSS fortfährt. Die "Fehlerkorrektur" ist einfach das Ignorieren oder Überspringen ungültiger Inhalte.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne sich Sorgen machen zu müssen, dass etwas in älteren Browsern kaputtgeht. Ein Browser erkennt möglicherweise ein neues Feature nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne einen Fehler zu werfen, ermöglicht es, sowohl alte als auch neue Syntaxen im selben Regelset nebeneinander bestehen zu lassen. Dabei sollte jedoch beachtet werden, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die ältere einwertige Syntax als auch die [mehrere Keywords umfassende Syntax](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, und überschreiben dann die alte. Wenn ein Nutzer einen alten Browser hat, wird der gültige Rückfallwert nicht von der neuen CSS überschrieben, da der Browser ihn als ungültig wahrnimmt.

Die Art und Menge der CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird (fehlschlägt).
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorenlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, in welchem Fall mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder -wert ist](#fehler_innerhalb_von_css-deklarationsblöcken), wie z. B. ein nicht erkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert.
- Wenn der [Fehler durch eine fehlende schließende Klammer verursacht wird](#fehler_mit_automatisch_geschlossenen_endungen), hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt anhand der erwarteten [Grammatik](#grammatiküberprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, zeigt den Anfang einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird aus Sicht des Parsers nichts als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zur Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für die jeweilige At-Regel interpretiert.

Deklarative At-Regeln wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen enthalten nur eine Präambel. Das Semikolon endet sofort die At-Regel für [deklarative At-Regeln](/de/docs/Web/CSS/At-rule#statement_at-rules). Wenn der Inhalt der Präambel gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser nach dem nächsten Semikolon weiterhin CSS parst. Zum Beispiel, wenn eine `@import` At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon erkennt, wird die At-Regel als Block-At-Regel interpretiert. [Block-At-Regeln](/de/docs/Web/CSS/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umgeben ist. Die öffnende geschweifte Klammer informiert den Browser, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser schaut nach vorne und sucht nach passenden Blöcken (Inhalt umgeben von `()`, `{}`, oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht durch andere geschweifte Klammern gepaart ist: Dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln, was die gesamte At-Regel ungültig machen wird, wenn überhaupt. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regelseite dokumentiert. Die Handhabung von ungültigem Inhalt hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face` Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer von beiden weggelassen oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptor, eines anderen gültigen Font-Deskriptors mit einem ungültigen Wert oder einer Eigenschaftsstilerklärung innerhalb des verschachtelten Blocks `@font-face` wird die Font-Deklaration nicht ungültig machen. Solange der Font-Name und die Font-Quelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird weiterhin geparst.

Obwohl die Grammatik der `@keyframe`-At-Regel sich stark von der `@font-face`-Regelgrammatik unterscheidet, beeinflusst die Art des Fehlers weiterhin, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, beeinträchtigen jedoch nicht andere Stile, die im selben Keyframe-Selektorblock deklariert sind. Das Einfügen eines ungültigen Keyframe-Selektors (wie eines Prozentwerts unter `0%` oder über `100%`, oder einer {{cssxref("number")}} ohne das `%`) macht die Keyframe-Selektorliste ungültig, und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframe`-Deklaration ungültig. Das Einfügen von Stilen zwischen zwei Keyframe-Selektor-Blöcken hingegen wird die gesamte `@keyframe`-At-Regel ungültig machen.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel kommt sowohl in regulärer als auch in verschachtelter Form vor. Die `@layer`-Anweisungssyntax enthält nur die Präambel und endet mit einem Semikolon. Alternativ befinden sich bei der verschachtelten Syntax zwischen geschweiften Klammern Styles, die nach der Präambel kommen. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist aber kein Syntaxfehler. Bei einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer sein sollte, als Teil der im Präambel der At-Regel definierten Kaskadenschicht geparst. Das CSS ist gültig, da keine Syntaxfehler vorliegen; nichts wird verworfen. Ein Syntaxfehler kann verursachen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird trotzdem erstellt.

### Fehler in Selektorenlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen können, aber nur ungültige Selektoren verursachen, dass eine Selektorenliste ungültig ist (siehe [ungültige Selektorenliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "id")}}, oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, id, oder ein Element (oder ein benutzerdefiniertes Element) einschließen, das nicht existiert, kann dies ein logischer Fehler, aber kein Syntaxfehler sein. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte dies einen ungültigen Selektor erzeugen, was ein Fehler ist, mit dem sich der Parser auseinandersetzen muss.

Wenn eine Selektorenliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}}-Pseudoklasse ist (die [fehlertolerante Selektorenlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts trifft. Die Selektorenliste wird nicht ungültig.

Außerhalb dieser Ausnahmen macht ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorenliste die gesamte Regel ungültig und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen ab diesem Punkt fort.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Einsatz von browser-spezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#herstellerpräfixe) vermeiden Browser übermäßige Ungültigkeitserklärungen von Selektorenlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem groß- und kleinschreibungsunabhängigen `-webkit-` Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorenliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen kann das Pseudo-Element von dem Browser nicht erkannt oder unterstützt werden, aber es wird nicht dazu führen, dass die gesamte Selektorenliste und ihr zugehöriger Stilblock ignoriert werden. Andererseits wird ein unbekannter, mit einer Funktion notierter, Präfix-Selektor wie `::-webkit-imaginary-function()` die gesamte Selektorenliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Bei CSS-Eigenschaften und -Werten innerhalb eines Deklarationsblocks wird das Eigenschaft-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an irgendeinem Punkt dazu, dass der Browser-Parser nur die aktuelle Deklaration verwirft. Dann fährt er mit dem Parsen der CSS fort, nachdem das nächste Semikolon oder die schließende geschweifte Klammer gefunden wurde, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht nach vorne, bis ein Semikolon gefunden wird, und beginnt dann mit dem Parsen neu:

```css-nolint bad
p {
/* Ungültige Syntax aufgrund fehlendes Semikolons */
  border-color: red
  background-color: green;

/* Gültige Syntax, aber wahrscheinlich ein logischer Fehler */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektor-Block ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektor-Block ist. Die Eigenschaft ohne das Semikolon wird ignoriert, ebenso das folgende Eigenschaft-Wert-Paar, da der Browser erst nach einem Semikolon oder einer schließenden Klammer mit dem Parsen fortfährt. Genauer gesagt wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber er ist kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Herstellerpräfixe

Hersteller-präfixierte Eigenschaftsnamen und Eigenschaftswerte werden, wenn sie von einem Browser nicht verstanden werden, als ungültig betrachtet und ignoriert. Nur die einzelnen Regeln mit einer ungültigen Eigenschaft oder einem ungültigen Wert werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und fährt dann mit dem Parsen von dort fort.

Sie könnten auf alte CSS stoßen, die wie folgt aussieht:

```css example-bad
/* Präfixierte Werte */
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: block flex;
}
/* Präfixierte Eigenschaften */
.rounded {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
```

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig - `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#source_order) [Reihenfolge des Erscheinens](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)-Regel wird der Browser jede Präfix-Deklaration anwenden, die er versteht, und diese dann mit der standardmäßigen ungepräfixerten Version überschreiben.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Einbeziehung von Präfix-Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, geben Sie die präfixierten Versionen wie oben gezeigt vor der ungepräfixten Version an.

### Fehler mit automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, eine Deklaration, eine Funktion, eine Zeichenfolge oder ein Kommentar noch offen ist, wird der Parser alles, was offen geblieben ist, automatisch schließen.

> [!NOTE]
> Dies gilt für externe Stylesheets, für Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und für Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn er unvollständig ist, wird das CSS normal geparst. Wenn Sie zum Beispiel eine `@keyframe`-Deklaration schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation immer noch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translatex(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen richtig zu schließen, macht die Anweisungen nicht unbedingt ungültig. Das gesagt, nutzen Sie nicht die tolerant Natur von CSS aus. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS einfacher zu lesen und zu pflegen und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Nicht geschlossene Kommentare

Nicht geschlossene Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen ist, betrachtet der Parser allen CSS-Code bis zu einem schließenden `*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, als Teil des Kommentars. Während ein nicht geschlossener Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass das CSS nach dem öffnenden Delimitersign (`/*`) ignoriert wird.

```html example-bad
<style>
  /* dieser Kommentar ist nicht geschlossen
  @keyframes move {
    0% {transform: translatex(0);}
    100% {transform: translatex(100vw);}
  }
</style>
<p style="/* ein weiterer nicht geschlossener Kommentar">Als HTML geparst.</p>
```

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributs schließt den zweiten Kommentar.

## Grammatiküberprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Wenn ein Eigenschaftswert beispielsweise vom falschen Datentyp ist oder ein Deskriptor nicht für die beschriebene At-Regel gültig ist, wird der Inhalt, der nicht den erwarteten Grammatikregeln entspricht, als ungültig betrachtet und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Beispielsweise akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder ein gültiges {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Keyword. Wenn der einer Eigenschaft zugewiesene Wert vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn auf sie zugegriffen wird, d. h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Wertetyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie ohne Rücksicht darauf, wo die Eigenschaft verwendet wird, gefunden wird.

Im Allgemeinen wird, wenn ein Eigenschaftswert ungültig ist, die Deklaration ignoriert und die Eigenschaft fällt auf den zuletzt gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht als ungültig ignoriert und der [initiale](/de/docs/Web/CSS/initial_value) oder [geerbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft erhält einen neuen Wert, jedoch möglicherweise nicht den erwarteten.

Schauen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Stattdessen, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird, falls die Eigenschaft vererbbar ist, der Wert von ihrem Elternteil geerbt. Ist die Eigenschaft nicht vererbbar, wird der Standard-Initialwert verwendet. Im Falle von `background-color` ist der Eigenschaftswert kein vererbter Wert, daher wird der Initialwert von `transparent` verwendet.

Um besser zu kontrollieren, wie benutzerdefinierte Eigenschaften zurückfallen, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Initialwert der Eigenschaft zu definieren:

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
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/Value_definition_syntax)

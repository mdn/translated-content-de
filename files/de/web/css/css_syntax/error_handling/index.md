---
title: Fehlerbehandlung in CSS
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Wenn ein Fehler in CSS auftritt, wie ein ungültiger Wert oder ein fehlendes Semikolon, erholt sich der Browser (oder ein anderer Benutzeragent) elegant, anstatt [einen Fehler wie in JavaScript auszulösen](/de/docs/Web/JavaScript/Reference/Errors). Browser liefern keine CSS-bezogenen Warnungen oder zeigen anderweitig an, dass Fehler in den Styles aufgetreten sind. Sie verwerfen einfach ungültigen Inhalt und parsen anschließend gültige Styles. Dies ist ein Feature von CSS, kein Fehler.

Dieser Leitfaden erklärt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft die Mindestmenge an CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsenvorgang")}} zurückkehrt. Die "Fehlerkorrektur" besteht lediglich im Ignorieren oder Überspringen ungültigen Inhalts.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne sich Sorgen machen zu müssen, dass etwas in älteren Browsern kaputtgeht. Ein Browser kann ein neues Feature möglicherweise nicht erkennen, aber das ist kein Problem. Das Verwerfen ungültigen Inhalts ohne Auslösen eines Fehlers ermöglicht das Nebeneinander von alten und neuen Syntaxen im gleichen Regelwerk, obwohl man beachten sollte, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte Einzelwertsyntax als auch die [mehrschichtige Schlüsselwortsyntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, zu welchem ​​Zeitpunkt die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht durch das neue CSS überschrieben, weil der Browser es als ungültig ansieht.

Der Typ und die Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängen vom Typ des Fehlers ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und vom Fehlertyp ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird.
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler durch ein fehlendes Semikolon](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, in welchem Fall mehrere Eigenschafts-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder Wert ist](#fehler_innerhalb_von_css-deklarationsblöcken), wie ein nicht erkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert.
- Wenn der [Fehler durch eine fehlende End-Klammer](#fehler_mit_automatisch_geschlossenen_endungen) verursacht wird, hängt das Ausmaß des Ignorierten davon ab, wie der Browser den Fehler als verschachteltes CSS parsen kann.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt im Hinblick auf die erwartete [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, im CSS-Spezifikationsbereich bekannt als `<at-keyword-token>`, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird aus Parsersicht nichts als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil der Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

Deklarative At-Regeln wie {{cssxref("@import")}} und {{cssxref("@namespace")}} bestehen nur aus einer Präambel. Das Semikolon beendet die At-Regel sofort für [deklarative At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt der Präambel ungültig ist gemäß der Grammatik für diese At-Regel, wird die At-Regel ignoriert, und der Browser fährt mit dem Parsen von CSS nach dem nächsten Semikolon fort. Wenn beispielsweise eine `@import` At-Regel nach irgendeiner CSS-Deklaration außer `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Trifft der Parser auf eine geschweifte Klammer (`{`) bevor ein Semikolon erreicht wird, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umgeben ist. Die öffnende geschweifte Klammer informiert den Browser, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht nach passenden Blöcken (Inhalt umgeben von `()`, `{}`, oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht durch andere geschweifte Klammern geschlossen ist: Dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was die gesamte At-Regel ungültig machen könnte. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Handhabung ungültigen Inhalts hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer dieser Parameter fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Einfügen eines irrelevanten Deskriptors, eines anderen gültigen Font-Deskriptors mit einem ungültigen Wert oder einer Eigenschaftsdeklaration im verschachtelten Block der `@font-face` Regel wird die Font-Deklaration nicht ungültig machen. Solange der Font-Name und die Font-Quelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframe`-At-Regel sehr unterschiedlich zur Grammatik der `@font-face`-Regel ist, beeinflusst der Fehler dennoch, was ignoriert wird. Wichtige Deklarationen (mit dem {{cssxref("important")}}-Flag gekennzeichnet) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere Stile, die im gleichen Keyframe-Selektorblock deklariert wurden. Die Aufnahme eines ungültigen Keyframe-Selektors (wie eines Prozentwerts, der kleiner als `0%` oder größer als `100%` ist, oder einer {{cssxref("number")}} ohne `%`) macht die Keyframe-Selektorliste ungültig und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den ungültigen Selektor-Stilblock ungültig; er macht nicht die gesamte `@keyframe`-Deklaration ungültig. Das Platzieren von Stilen zwischen zwei Keyframe-Selektorblöcken wird im Gegensatz dazu die gesamte `@keyframe`-At-Regel ungültig machen.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regulären als auch in verschachtelten Formen. Die `@layer`-Anweisungssyntax enthält nur die Präambel, die mit einem Semikolon endet. Alternativ dazu haben die verschachtelten Syntaxen Schichtstile, die zwischen geschweiften Klammern nach der Präambel eingeschlossen sind. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler, aber kein Syntaxfehler sein. Im Fall einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer hätte sein sollen, als zur Kaskadenschicht gehörend angesehen, die in der Präambel der At-Regel definiert ist. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Ihnen beim Schreiben eines Selektors ein Fehler unterlaufen kann, aber nur ungültige Selektoren verursachen, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}}, oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einfügen, das nicht existiert, kann es ein Logikfehler, aber kein Syntaxfehler sein. Wenn Sie allerdings einen Tippfehler in einer Pseudoklasse oder einem Pseudoelement haben, könnte dies einen ungültigen Selektor erzeugen, was ein Fehler ist, den der Parser ansprechen muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}}- oder {{cssxref(":where")}}-Pseudoklasse ist (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts trifft. Die Selektorliste wird nicht ungültig.

Außerhalb dieser Ausnahmen wird eine einzelne ungültige oder nicht unterstützte Auswahl in der Selektorliste den gesamten Regelblock und die gesamte Selektorblockaufhebung ungültig machen. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen von dort an fort.

#### `-webkit-`-Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von spezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-präfixe) vermeiden Browser eine übermäßige Ungültigmachung von Selektorlisten, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem Groß-/Kleinschreibung ignorierenden `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig ansehen.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem ​​Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudoelement möglicherweise nicht erkannt oder vom Browser unterstützt, aber es wird nicht dazu führen, dass die gesamte Selektorliste und ihr zugehöriger Stilblock ignoriert werden. Ein unbekannter präfixierter Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` hingegen wird die gesamte Selektorliste ungültig machen und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks geht, wird ein Eigenschaft-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig sind. Wenn ein Benutzeragent eine Liste von Deklarationen parsisiert oder interpretiert, führt eine unbekannte Syntax an irgendeinem Punkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Dann setzt er das Parsen von CSS nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fort, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon trifft, und setzt dann das Parsen fort:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, der das Semikolon fehlt, wird ignoriert, ebenso wie das nachfolgende Eigenschaft-Wert-Paar, da der Browser erst nach einem Semikolon oder einer schließenden Klammer weiter parst. Konkret wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, ist aber kein Fehler. Da er syntaktisch korrekt ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Eigenschaftsnamen und Eigenschaftswerte mit Anbieterspezifischen Präfixen werden, wenn sie von einem Browser nicht verstanden werden, als ungültig behandelt und ignoriert. Nur die individuellen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt dann das Parsen fort.

Sie können auf Legacy-CSS stoßen, das wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig – `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskaden][(Reihenfolge des Auftretens](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order)) Regeln wenden Browser alle von ihnen unterstützten präfixierten Deklarationen an und überschreiben diese Werte dann mit der standardmäßigen, nicht präfixierten Version.

> [!NOTE]
> Vermeiden Sie, wo möglich, das Einfügen von präfixierten Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der nicht präfixierten Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder ein Kommentar noch offen ist, wird der Parser alles automatisch schließen, was ungeschlossen geblieben ist.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)- Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn unvollständig, wird das CSS normal geparst. Beispielsweise ist die Animation immer noch gültig, wenn Sie vergessen, eine `@keyframe`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}} schließen.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Ein fehlendes Schließen von CSS-Anweisungen macht die Anweisungen nicht unbedingt ungültig. Das gesagt, sollte man die nachsichtige Natur von CSS nicht ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke ab. Es macht Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Nicht geschlossene Kommentare

Unclosed comments sind Logikfehler, nicht Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, ist der gesamte CSS-Code bis zu einem Schließungsbegrenzer (`*/`) in einem folgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, Teil des Kommentars. Während ein nicht geschlossener Kommentar Ihr CSS nicht ungültig macht, verursacht er, dass das CSS nach dem öffnenden Begrenzer (`/*`) ignoriert wird.

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

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für die jeweilige Deklaration folgt. Wenn zum Beispiel ein Eigenschaftswert den falschen Datentyp aufweist oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein globales CSS-Schlüsselwort. Wenn der Wert, der einer Eigenschaft zugewiesen wird, den falschen Typ aufweist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. sie können als Wert (über die {{cssxref("var")}} Funktion) für eine Eigenschaft, die diesen Werttyp nicht akzeptiert, verwendet werden. Der Browser parsiert jede benutzerdefinierte Eigenschaft, sobald sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird, wenn ein Eigenschaftswert ungültig ist, die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete Werte benutzerdefinierter Eigenschaften verhalten sich jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [anfängliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, der möglicherweise nicht der erwartete ist.

Untersuchen wir ein Beispiel, um dieses Verhalten zu verdeutlichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Auch die `background-color`-Deklaration ist zur Zeit der Berechnung gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr wird, wenn eine benutzerdefinierte Eigenschaft den falschen Typ aufweist, falls die Eigenschaft vererbbar ist, der Wert vom übergeordneten Element geerbt. Ist die Eigenschaft nicht vererbbar, wird der Standard-Initialwert verwendet. Im Fall von `background-color` ist der Eigenschaftswert nicht ein geerbter Wert, daher wird der Initialwert `transparent` verwendet.

Um den Rückfall von benutzerdefinierten Eigenschaften besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Anfangswert der Eigenschaft zu definieren:

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

---
title: Fehlerbehandlung in CSS
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: dfd18cb9ee7c6195d07cd937d206b53246f7507e
---

{{CSSRef}}

Wenn in CSS ein Fehler auftritt, wie zum Beispiel ein ungültiger Wert oder ein fehlendes Semikolon, dann wird der Browser (oder ein anderer Benutzeragent) diesen Fehler anstatt eines [Fehlers wie in JavaScript auszulösen](/de/docs/Web/JavaScript/Reference/Errors) sanft abfangen. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen anders an, dass Fehler in den Stilen aufgetreten sind. Sie verwerfen einfach ungültigen Inhalt und parsen die darauf folgenden gültigen Stile. Dies ist eine Eigenschaft von CSS und kein Fehler.

In diesem Leitfaden wird erläutert, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft die minimal erforderliche Menge an CSS-Code, bevor er fortfährt, das CSS wie gewohnt zu {{Glossary("parse", "parsen")}}. Die "Fehlerbehebung" besteht nur darin, ungültigen Inhalt zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne sich Gedanken über Inkompatibilitäten in älteren Browsern machen zu müssen. Ein Browser kann ein neues Feature möglicherweise nicht erkennen, aber das ist in Ordnung. Durch das Verwerfen ungültigen Inhalts ohne einen Fehler auszulösen, können alte und neue Syntaxen im gleichen Regelsatz koexistieren, obwohl sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl ältere Einzelwert-Syntax als auch die [mehrfache Schlüsselwortsyntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht durch das neue CSS überschrieben, da der Browser es als ungültig ansieht.

Die Art und Menge von CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt vom Typ des Fehlers ab. Einige häufige Fehlersituationen werden unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und dem Typ des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird.
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, in welchem Fall mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler eine Eigenschaftsname oder ein Wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert.
- Wenn der [Fehler auf ein fehlendes End-Klammer zurückzuführen ist](#fehler_mit_automatisch_geschlossenen_endungen), hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als geschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt anhand der erwarteten [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht mit der erwarteten Grammatik für diese Konstruktion übereinstimmt, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts vom Standpunkt des Parsers aus als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil des Vorlaufs der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

Deklarations-At-Regeln wie {{cssxref("@import")}} und {{cssxref("@namespace")}} enthalten nur einen Vorlauf. Das Semikolon beendet für [Deklarations-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules) sofort die At-Regel. Wenn die Inhalte des Vorlaufs gemäß der Grammatik für diese At-Regel ungültig sind, wird die At-Regel ignoriert, wobei der Browser das CSS nach Erreichen des nächsten Semikolons weiterhin parst. Zum Beispiel, wenn eine `@import`-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder einer anderen `@import`-Regel auftritt, wird die `@import`- Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser eine geschweifte Klammer (`{`) vor dem Semikolon findet, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, die von geschweiften Klammern (`{}`) umgeben sind. Die öffnende geschweifte Klammer teilt dem Browser mit, wo der Vorlauf der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht nach passenden Blöcken (Inhalt umgeben von `()`, `{}`, oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von einer anderen geschweiften Klammer geschlossen wird: das schließt den Körper der At-Regel ab.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln darüber, was, wenn überhaupt, die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung von ungültigem Inhalt hängt vom Fehler ab.

Beispielsweise erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer von beiden weggelassen oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Ein nicht verwandter Deskriptor, jeder andere gültige Schriftart-Deskriptor mit einem ungültigen Wert oder eine Stildeklaration innerhalb des geschachtelten `@font-face`-Blocks machen die Schriftdeklaration nicht ungültig. Solange der Schriftartname und die Schriftartquelle enthalten und gültig sind, wird jedes ungültige CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframes`-At-Regel von der Grammatik der `@font-face`-Regel sehr verschieden ist, beeinflusst der Fehler typischerweise, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, beeinträchtigen jedoch nicht andere in demselben Keyframe-Selektorblock deklarierte Stile. Ein ungültiger Keyframe-Selektor (wie ein Prozentsatzswert kleiner als `0%` oder größer als `100%` oder eine {{cssxref("number")}}, die das `%` weglässt) führt dazu, dass die Keyframe-Selektorliste und damit der Stilblock ignoriert wird. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframes` Deklaration ungültig. Stile, die zwischen zwei Keyframe-Selektorblöcken liegen, machen jedoch die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel existiert in sowohl regulären als auch verschachtelten Formen. Die `@layer`-Deklarationssyntax enthält nur den Vorlauf, der mit einem Semikolon endet. Alternativ hat die verschachtelte Syntax Layereigenschaften zwischen geschweiften Klammern nach dem Vorlauf verschachtelt. Das Auslassen einer schließenden geschweiften Klammer kann ein Logikfehler, aber kein Syntaxfehler sein. Im Fall einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer hätte sein sollen, als Teil der Kaskadenschicht, die im Vorlauf der At-Regel definiert ist, geparst. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Ebene leer ist, aber die Ebene wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, einen Fehler beim Schreiben eines Selektors zu machen, aber nur ungültige Selektoren verursachen, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassenselektor")}}, {{cssxref("id_selectors", "ID-Selektor")}} oder {{cssxref("type_selectors", "Typselektor")}} für eine Klasse, eine ID oder ein Element (oder benutzerdefiniertes Element) einfügen, das nicht existiert, kann es ein Logikfehler sein, ist aber kein Syntaxfehler. Wenn jedoch ein Schreibfehler in einer Pseudoklasse oder einem Pseudoelement vorhanden ist, könnte dies zu einem ungültigen Selektor führen, was ein Fehler ist, mit dem sich der Parser auseinandersetzen muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}}- oder {{cssxref(":where")}}-Pseudoklasse ist (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn ein unbekannter Selektor ein [`-webkit-`-präfixiertes Pseudoelement](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts trifft. Die Selektorliste wird nicht ungültig.

Abgesehen von diesen Ausnahmen wird ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig machen und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen ab diesem Punkt fort.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen, die durch den übermäßigen Gebrauch von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-prefixe) verursacht wurden, vermeiden es Browser, Selektorlisten übermäßig zu invalidieren, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem fallunabhängigen `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig von welchem Browser der Code ausgeführt wird. In solchen Fällen könnte das Pseudoelement vom Browser nicht erkannt oder unterstützt werden, aber es führt nicht dazu, dass die gesamte Selektorliste und ihr zugehöriger Stilblock ignoriert wird. Auf der anderen Seite wird ein unbekannter Suffix-Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks geht, wird, wenn entweder die Eigenschaft oder der Wert ungültig ist, dieses Eigenschaft-Wert-Paar ignoriert und verworfen. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an irgendeiner Stelle dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Er setzt dann das Parsen von CSS nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fort, je nachdem was zuerst passiert.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht nach vorne, bis er ein Semikolon findet, und startet dann das Parsen erneut:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, der das Semikolon fehlt, wird ignoriert, ebenso wie das darauf folgende Eigenschaft-Wert-Paar, da der Browser das Parsen erst nach einem Semikolon oder einer schließenden Klammer fortsetzt. Konkret wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber es ist kein Syntaxfehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Prefixe

Eigenschaftsnamen und -werte mit Vendor-Präfixen, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt dann das Parsen dort fort.

Möglicherweise stoßen Sie auf älteres CSS, das in etwa folgendermaßen aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [des Ordnungsprinzips](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), wenden Browser alle Präfix-Deklarationen an, die sie verstehen, und überschreiben dann diese Werte mit der standardmäßigen, nicht präfixierten Version.

> [!NOTE]
> Vermeiden Sie es, präfixierte Eigenschaften oder Eigenschaftswerte zu verwenden, wenn möglich. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der nicht präfixierten Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, eine Deklaration, eine Funktion, ein String oder ein Kommentar noch offen ist, schließt der Parser alles, was ungeschlossen geblieben ist, automatisch.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML {{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn er unvollständig ist, wird das CSS normal geparst. Zum Beispiel, wenn Sie versäumen, eine `@keyframes`-Deklaration zu schließen, bevor Sie Ihre {{htmlelement("style")}} schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Erklärungen richtig zu schließen, macht die Erklärungen nicht notwendigerweise ungültig. Dennoch sollten Sie die nachsichtige Natur von CSS nicht ausnutzen. Schließen Sie immer alle Ihre Erklärungen und Stilblöcke. Es macht Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Ungeschlossene Kommentare

Ungeschlossene Kommentare sind Logikfehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, gehören alle CSS-Codes bis zu einem schließenden Trennzeichen (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst auftritt, zum Kommentar. Während ein nicht geschlossener Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass das CSS nach dem Öffnungs-Trennzeichen (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das Zitatende des `style`-Attributs schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Zum Beispiel, wenn ein Eigenschaftswert vom falschen Datentyp oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, wird der Inhalt, der nicht mit der erwarteten Grammatik übereinstimmt, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein globales CSS-Schlüsselwort. Wenn der einem Eigentum zugewiesene Wert vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie zugegriffen werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn er auf sie stößt, unabhängig davon, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird, wenn ein Eigenschaftswert ungültig ist, die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Ersetzung ungültig ist, wird die Deklaration nicht ignoriert und der [anfängliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, jedoch möglicherweise nicht auf den erwarteten.

Lassen Sie uns ein Beispiel ansehen, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn jedoch der Browser die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird, wenn die Eigenschaft vererbbar ist, der Wert vom übergeordneten Element übernommen. Wenn die Eigenschaft nicht vererbbar ist, wird der standardmäßige anfängliche Wert verwendet. Im Falle von `background-color` ist der Eigenschaftswert kein ererbter Wert, daher wird der anfängliche Wert von `transparent` verwendet.

Um besser zu kontrollieren, wie benutzerdefinierte Eigenschaften zurückfallen, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den anfänglichen Wert der Eigenschaft zu definieren:

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

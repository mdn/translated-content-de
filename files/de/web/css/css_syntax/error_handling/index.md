---
title: CSS Fehlerbehandlung
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Wenn ein Fehler in CSS auftritt, wie z.B. ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) anstatt [einen Fehler wie in JavaScript zu werfen](/de/docs/Web/JavaScript/Reference/Errors), diesen elegant beheben. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen anderweitig an, dass Fehler im Stil aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und parsen nachfolgende gültige Stile. Dies ist ein Merkmal von CSS, kein Fehler.

Dieser Leitfaden behandelt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern, verwirft die minimale Menge an CSS-Code, bevor er zur normalen {{Glossary("parse", "Analyse")}} des CSS zurückkehrt. Die "Fehlerbehebung" besteht lediglich im Ignorieren oder Überspringen ungültiger Inhalte.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne befürchten zu müssen, dass etwas in älteren Browsern kaputt geht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte, ohne einen Fehler zu werfen, erlaubt es, sowohl alte als auch neue Syntaxen innerhalb desselben Regelsatzes koexistieren zu lassen, wobei jedoch zu beachten ist, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte, einzelne Wert-Syntax als auch die [Multi-Keywort-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird der gültige Fallback nicht durch das neue CSS überschrieben, da der Browser es als ungültig betrachtet.

Der Typ und die Menge des CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängen von der Art des Fehlers ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es davon ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird (fehlschlägt), von der At-Regel und der Art des Fehlers ab.
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_in_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen verursacht einen ungültigen Wert, in diesem Fall werden mehrere Eigenschafts-Wert-Deklarationen ignoriert.
- Wenn der [Fehler ein Eigenschaftsname oder -wert](#fehler_in_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert.
- Wenn der [Fehler durch eine fehlende End-Klammer](#fehler_mit_automatisch_geschlossenen_endungen) verursacht wird, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw., überprüft der Browser den geparsten Inhalt anhand seiner erwarteten [Grammatik](#grammatiküberprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, bekannt in den CSS-Spezifikationen als ein `<at-keyword-token>`, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird aus Sicht des Parsers nichts als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil der Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

Anweisungs-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}} Deklarationen, enthalten nur eine Präambel. Das Semikolon beendet die At-Regel unmittelbar für [Anweisungs-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt der Präambel gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser das CSS nach dem nächsten Semikolon weiter parst. Beispielsweise, wenn eine `@import`-At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon findet, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umgeben ist. Die öffnende geschweifte Klammer informiert den Browser, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser durchsucht vorwärts und sucht nach passenden Blöcken (Inhalt, der von `()`, `{}`, oder `[]` umgeben ist), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern in Anspruch genommen wird: Dies schließt den Körper der At-Regel ab.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was (wenn überhaupt) die gesamte At-Regel ungültig machen würde. Die erwartete Grammatik für [jeder At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, ist auf der entsprechenden At-Regel-Seite dokumentiert. Die Behandlung von ungültigen Inhalten hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face` Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src) Deskriptor. Wenn einer von beiden fehlt oder ungültig ist, ist die gesamte `@font-face` Regel ungültig. Das Hinzufügen eines nicht zusammenhängenden Deskriptors, eines anderen gültigen Font-Deskriptors mit einem ungültigen Wert oder einer Stileigenschaftsdeklaration innerhalb des `@font-face` verschachtelten Blocks macht die Schriftdeklaration nicht ungültig. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block bleibt geparst.

Während die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich zur `@font-face`-Regel Grammatik ist, beeinflusst die Art des Fehlers trotzdem was ignoriert wird. Wichtige Deklarationen (markiert mit dem {{cssxref("important")}} Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere Stile, die im selben Keyframe-Selektorblock erklärt sind. Sobald ein ungültiger Keyframe-Selektor (wie ein Prozentwert kleiner als `0%` oder größer als `100%`, oder eine {{cssxref("number")}}, die das `%` auslässt) hinzugefügt wird, übernimmt dieser ungültige Selektor die Liste der Keyframe-Selektoren ungültig und als Konsequenz wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Hinzufügen von Stilen zwischen zwei Keyframe-Selektorblöcken hingegen macht die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regulären als auch in verschachtelten Formen. Das `@layer`-Anweisungssyntax enthält nur die Präambel, die mit einem Semikolon endet. Alternativ hat die verschachtelte Syntax Schichtstile, die zwischen den geschweiften Klammern eingebettet sind, welche nach der Präambel kommen. Das Auslassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist aber kein Syntaxfehler. Im Fall einer fehlenden Schlussklammer in `@layer` werden alle Stile, die nach der fehlenden Schlussklammer folgen sollten, als Teil der Kaskadenschicht im Präambel dieser At-Regel geparst. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, die Schicht wird jedoch trotzdem erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, einen Fehler beim Schreiben eines Selektors zu machen, jedoch verursachen nur ungültige Selektoren, dass eine Selektorliste ungültig ist (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}}, oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einfügen, das nicht existiert, kann dies ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler bei einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte dies einen ungültigen Selektor erzeugen, der ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}}-Pseudo-Klasse (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts matched. Die Selektorliste wird nicht ungültig gemacht.

Außerhalb dieser Ausnahmen wird ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig machen und der gesamte selektierte Block wird ignoriert. Der Browser wird dann nach der schließenden geschweiften Klammer suchen und danach mit dem Parsen fortfahren.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werte)](#anbieterpräfixe) vermeiden Browser die übermäßige Invalidierung von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) als gültig betrachten, die mit einem case-insensitive `-webkit-` Präfix beginnen und nicht mit `()` enden.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen kann das Pseudo-Element möglicherweise nicht vom Browser erkannt oder unterstützt werden, aber es verursacht nicht, dass die gesamte Selektorliste und deren zugehöriger Stilblock ignoriert wird. Auf der anderen Seite macht ein unbekannter präfixierter Selektor mit einer Funktionsnotation wie `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig und der Browser ignoriert den gesamten Selektorblock.

### Fehler in CSS-Deklarationsblöcken

Wenn es zu CSS-Eigenschaften und -Werten innerhalb eines Deklarationsblocks kommt, wird, wenn entweder die Eigenschaft oder der Wert ungültig ist, dieses Eigenschaft-Wert Paar ignoriert und verworfen. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an jedem Punkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Danach fährt er mit dem Parsen von CSS fort, nachdem das nächste Semikolon oder die schließende geschweifte Klammer gefunden wurde, je nachdem, was zuerst auftritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon trifft, und beginnt dann erneut zu parsen:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft ohne Semikolon wird ignoriert, ebenso das nachfolgende Eigenschaft-Wert-Paar, da der Browser nur weiter parst, nachdem ein Semikolon oder eine schließende Klammer gefunden wurde. Konkret wird der `border-color` Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}} Wert ist.

Der {{cssxref("border-width")}} Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Anbieterpräfixe

Von einem Browser nicht verstandene eigenschaftsnamen und eigenschaftswerte mit Anbieterpräfix, werden als ungültig behandelt und ignoriert. Es werden nur die individuellen Regeln ignoriert, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und fährt dann mit dem Parsen von dort fort.

Sie könnten auf legacy CSS stoßen, das ähnlich aussieht wie das folgende:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Wegen der [Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [Reihenfolge des Erscheinens](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) Regel, werden Browser jede prefixed Deklaration anwenden, die sie verstehen, und dann diese Werte mit der standardmäßigen ungeprefixten Version überschreiben.

> [!NOTE]
> Vermeiden Sie es, wo möglich, Eigenschaften oder Eigenschaftswerte mit Präfix einzufügen. Wenn Sie sie verwenden müssen, deklarieren Sie die prefixed Versionen vor der nicht-prefixed Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder Kommentar noch offen ist, schließt der Parser automatisch alles, was noch ungeschlossen war.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}} Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn er unvollständig ist, wird das CSS normal geparst. Beispielsweise: Wenn Sie es versäumen, eine `@keyframes`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, bleibt die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move` Animation gültig. Das fehlerhafte Schließen von CSS-Anweisungen macht die Anweisungen nicht unbedingt ungültig. Nichtsdestotrotz sollten Sie nicht die tolerante Natur von CSS ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihre CSS leichter zu lesen und zu pflegen und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Unclosed comments

Unvollständige Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, wird der gesamte CSS-Code bis zu einem abschließenden Trennzeichen (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, Teil des Kommentars. Während ein unvollständiger Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass der CSS nach dem öffnenden Trennzeichen (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das `style`-Attributs Schließzitat schließt den zweiten Kommentar.

## Grammatiküberprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw., überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration folgt. Zum Beispiel, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor nicht für die beschriebene At-Regel gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel nimmt die {{cssxref("background-color")}} Eigenschaft entweder ein gültiges {{cssxref("&lt;color&gt;")}} oder ein CSS globales Schlüsselwort an. Wenn der zu einer Eigenschaft zugewiesene Wert vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. sie können als Wert (über die {{cssxref("var")}} Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird, wenn ein Eigenschaftswert ungültig ist, die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn ein `var()`-Ersatz ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, jedoch möglicherweise nicht auf den erwarteten.

Werfen wir einen Blick auf ein Beispiel, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Die `background-color` Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color` Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color` Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird, wenn die Eigenschaft vererbbar ist, der Wert vom Elternteil geerbt. Ist die Eigenschaft nicht vererbbar, wird der standardmäßige Anfangswert verwendet. Im Fall von `background-color` ist der Eigenschaftswert kein vererbter Wert, daher wird der anfängliche Wert von `transparent` verwendet.

Um die Art und Weise, wie benutzerdefinierte Eigenschaften zurückfallen, besser zu steuern, verwenden Sie die {{cssxref("@property")}} At-Regel, um den Anfangswert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

---
title: Fehlerbehandlung in CSS
short-title: Error handling
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Wenn ein Fehler im CSS auftritt, wie zum Beispiel ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Nutzeragent) sich ohne Fehlermeldung wieder erholen, anstatt [wie in JavaScript einen Fehler auszulösen](/de/docs/Web/JavaScript/Reference/Errors). Browser geben keine CSS-bezogenen Warnungen aus und zeigen auch sonst nicht an, dass Fehler in den Styles aufgetreten sind. Ungültiger Inhalt wird einfach verworfen und die nachfolgenden gültigen Styles werden geparst. Dies ist ein Merkmal von CSS, kein Fehler.

Dieser Leitfaden erläutert, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft den minimalen erforderlichen CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsen")}} des CSS zurückkehrt. Die "Fehlerbehebung" besteht einfach darin, ungültigen Inhalt zu ignorieren oder zu überspringen.

Da Browser ungültigen Code ignorieren, ermöglicht dies die Nutzung neuer CSS-Funktionen, ohne sich um Kompatibilitätsprobleme mit älteren Browsern sorgen zu müssen. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen von ungültigem Inhalt ohne Fehlermeldung erlaubt es, dass alte und neue Syntax im selben Regelwerk koexistieren, auch wenn sie in der richtigen Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte Einwert- als auch die [Mehrwort-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreibt. Wenn ein Nutzer einen alten Browser hat, wird der gültige Rückgriff nicht durch das neue CSS überschrieben, weil der Browser es als ungültig ansieht.

Die Art und Menge des CSS, das ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es davon ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird (fehlschlägt), je nach At-Regel und Art des Fehlers.
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaften-Deklarationen führt zu einem ungültigen Wert, wobei in diesem Fall mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder -wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert. Während der [Filterphase](/de/docs/Web/CSS/CSS_cascade/Value_processing#filtering) werden solche syntaktisch ungültigen Deklarationen eliminiert.
- Wenn der [Fehler auf ein fehlendes Endeklammerzeichen](#fehler_mit_automatisch_geschlossenen_abschlüssen) zurückzuführen ist, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt anhand der erwarteten [Grammatik](#grammatikprüfung) für diese Struktur. Wenn der Inhalt nicht der erwarteten Grammatik entspricht, gilt er als ungültig und wird ignoriert.

### At-Regel-Fehler

Das `@`-Symbol, im CSS-Standard bekannt als `<at-keyword-token>`, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts aus der Sicht des Parsers als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil des Vorspanns der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

Anweisungs-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, bestehen nur aus einem Vorspann. Das Semikolon beendet die At-Regel sofort für [Anweisungs-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt des Vorspanns gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, und der Browser parst CSS weiter, nachdem es auf das nächste Semikolon trifft. Beispielsweise wird eine `@import`-At-Regel ignoriert, wenn sie nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen vorkommt.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url("http://www.w3.org/2000/svg");
```

Trifft der Parser auf eine geschweifte Klammer (`{`) vor einem Semikolon, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, die von geschweiften Klammern (`{}`) umgeben sind. Die öffnende geschweifte Klammer zeigt dem Browser, wo der Vorspann der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht nach passenden Blöcken (Inhalt, der von `()`, `{}`, oder `[]` umgeben ist), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern geschlossen wird: diese schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, verschiedene (oder keine) Deskriptoren und unterschiedliche Regeln, was die gesamte At-Regel ungültig macht, falls dies zutrifft. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, ist auf der jeweiligen At-Regel-Seite dokumentiert. Der Umgang mit ungültigem Inhalt hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer von beiden fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Wenn ein nicht verwandter Deskriptor, ein anderer gültiger Schriftarten-Deskriptor mit ungültigem Wert oder eine Stil-Deklaration innerhalb des verschachtelten Blocks der `@font-face`-Regel enthalten ist, wird die Schriftart-Deklaration dadurch nicht ungültig. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird weiterhin geparst.

Während die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich von der `@font-face`-Regel-Grammatik ist, beeinflusst der Fehler dennoch, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere Stile, die im gleichen Keyframe-Selektor-Block deklariert sind. Wenn ein ungültiger Keyframe-Selektor (wie ein Prozentwert unter `0%` oder über `100%`, oder ein {{cssxref("number")}}, der das `%` weglässt) enthalten ist, invalidiert dies die Keyframe-Selektorliste und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den ungültigen Selektor-Stilblock ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Werden Stile zwischen zwei Keyframe-Selektor-Blöcken eingefügt, wird hingegen die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel ist sowohl in regulärer als auch in verschachtelter Form vorhanden. Die `@layer`-Anweisungssyntax enthält nur den Vorspann, der mit einem Semikolon endet. Alternativ hat die verschachtelte Syntax Stilebenen, die zwischen geschweiften Klammern nach dem Vorspann verschachtelt sind. Das Auslassen einer schließenden geschweiften Klammer kann ein logischer Fehler, aber kein Syntaxfehler sein. Im Fall einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die dort erscheinen sollten, als Teil der Kaskadenschicht geparst, die im Vorspann der At-Regel definiert ist. Das CSS ist gültig, da keine Syntaxfehler vorliegen; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie einen Fehler beim Schreiben eines Selektors machen könnten, aber nur ungültige Selektoren machen eine Selektorliste ungültig (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klasse")}}, {{cssxref("id_selectors", "ID")}}, oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einschließen, das nicht existiert, mag es ein logischer Fehler sein, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte es einen ungültigen Selektor erzeugen, was ein Fehler ist, den der Parser adressieren muss.

Wenn eine Selektorliste irgendeinen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudo-Klasse (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) akzeptieren) enthalten ist oder der unbekannte Selektor ein [`-webkit-`-präfixierter Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts matcht. Die Selektorliste wird nicht invalidiert.

Abgesehen von diesen Ausnahmen macht ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen ab diesem Punkt fort.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browser-spezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-präfixe) vermeiden es Browser, Selektorlisten übermäßig zu invalidieren, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), die mit einem gleichgültig geschriebenen `-webkit-` Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht invalidiert, unabhängig davon, in welchem Browser der Code läuft. In solchen Fällen wird das Pseudo-Element möglicherweise nicht vom Browser erkannt oder unterstützt, aber es wird nicht den gesamten Selektorblock und seinen zugehörigen Stilblock ignoriert. Ein unbekannter Präfix-Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` hingegen wird die gesamte Selektorliste invalidieren, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks geht, wird, wenn entweder die Eigenschaft oder der Wert ungültig ist, dieses Eigenschaft-Wert-Paar ignoriert und verworfen. Wenn ein Nutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an irgendeiner Stelle dazu, dass der Browser-Parser nur die aktuelle Deklaration verwirft. Anschließend setzt er das CSS-Parsing fort, nachdem das nächste Semikolon oder die nächste schließende Klammer erkannt wird, je nachdem, was zuerst eintritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon stößt, und beginnt dann wieder mit dem Parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, der das Semikolon fehlt, wird ignoriert, ebenso wie das folgende Eigenschaft-Wert-Paar, da der Browser das Parsen erst nach einem Semikolon oder einer schließenden Klammer fortsetzt. Insbesondere wird der `border-color` Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}} Wert ist.

Der {{cssxref("border-width")}} Wert von `100vh` ist wahrscheinlich ein Fehler, aber er ist kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Vendor-präfixierte Eigenschaftsnamen und -werte, die von einem Browser nicht verstanden werden, werden als ungültig betrachtet und ignoriert. Nur die individuellen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden Klammer und setzt das Parsen von dort fort.

Sie könnten auf Legacy-CSS stoßen, das wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [Reihenfolge des Erscheinens](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)-Regel werden Browser alle prefixed Deklarationen anwenden, die sie verstehen, und diese Werte dann mit der Standard-unpräfixed Version überschreiben.

> [!NOTE]
> Vermeiden Sie es, wo möglich, prefixed Eigenschaften oder Eigenschaftswerte einzuschließen. Wenn Sie sie verwenden müssen, deklarieren Sie die prefixed Versionen vor der unpräfixed Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Abschlüssen

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenfolge oder Kommentar noch offen ist, wird der Parser alles automatisch schließen, was offen geblieben ist.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML {{HTMLElement("style")}}-Elementes und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn er unvollständig ist, wird das CSS normalerweise geparst. Zum Beispiel, wenn Sie eine `@keyframes`-Deklaration nicht schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation immer noch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move` Animation gültig. Das Nichtschließen von CSS-Anweisungen macht die Anweisungen nicht unbedingt ungültig. Das gesagt, nutzen Sie nicht die verzeihende Natur von CSS aus. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Dadurch wird Ihr CSS leichter lesbar und besser wartbar und stellt sicher, dass der Browser das CSS wie beabsichtigt parst.

#### Nicht geschlossene Kommentare

Nicht geschlossene Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, gehört alles im CSS-Code bis zu einem schließenden Begrenzer (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst eintritt, zum Kommentar. Während ein nicht geschlossener Kommentar Ihr CSS nicht ungültig macht, verursacht er, dass das CSS nach dem öffnenden Begrenzer (`/*`) ignoriert wird.

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

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. prüft der Nutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Zum Beispiel, wenn ein Eigenschaftswert den falschen Datentyp hat oder ein Deskriptor nicht für die beschriebene At-Regel gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert bestimmte Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein CSS-Globales Schlüsselwort. Wenn der Wert einer Eigenschaft einen falschen Typ hat, wie `background-color: 45deg`, ist die Deklaration ungültig und daher wird sie ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. sie können als Wert für eine Eigenschaft verwendet werden (über die {{cssxref("var")}}-Funktion), die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft bei ihrem Auftreten, ungeachtet dessen, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird, wenn ein Eigenschaftswert ungültig ist, die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Ersatzung ungültig ist, wird die Deklaration nicht ignoriert und der [Initial]-(/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, aber möglicherweise nicht den erwarteten.

Sehen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert für die `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Stattdessen wird, wenn eine benutzerdefinierte Eigenschaft den falschen Typ hat, bei ererbbaren Eigenschaften der Wert vom Elternteil geerbt. Wenn die Eigenschaft nicht erblich ist, wird der Standardanfangswert verwendet. Im Fall von `background-color` ist der Eigenschaftswert nicht erblich, sodass der Anfangswert von `transparent` verwendet wird.

Um besser zu kontrollieren, wie benutzerdefinierte Eigenschaften zurückfallen, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Anfangswert der Eigenschaft zu definieren:

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
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)

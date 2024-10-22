---
title: CSS Fehlerbehandlung
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Wenn ein Fehler in CSS vorliegt, wie zum Beispiel ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer User-Agent) anstatt eines Fehlers wie in [JavaScript einen Fehler auszulösen](/de/docs/Web/JavaScript/Reference/Errors), diesen elegant ignorieren. Browser zeigen keine CSS-bezogenen Warnungen an oder deuten darauf hin, dass ein Fehler in den Stilen aufgetreten ist. Sie verwerfen einfach ungültigen Inhalt und analysieren die nachfolgenden gültigen Stile. Dies ist ein Feature von CSS und kein Fehler.

Dieser Leitfaden behandelt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## Fehler im CSS-Parser

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft die minimale Menge an CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsen")}} des CSS zurückkehrt. Die "Fehlererholung" besteht lediglich darin, ungültigen Inhalt zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Nutzung neuer CSS-Funktionen, ohne sich Gedanken über die Funktionsfähigkeit in älteren Browsern machen zu müssen. Ein Browser erkennt möglicherweise ein neues Feature nicht an, aber das ist in Ordnung. Die Verwerfung ungültigen Inhalts ohne einen Fehler auszulösen, erlaubt es, sowohl alte als auch neue Syntax in derselben Regelgruppe zu verwenden, wobei darauf geachtet werden sollte, dass diese in der richtigen Reihenfolge angegeben werden. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die Eigenschaft {{cssxref("display")}} akzeptiert sowohl die ältere Einzelwert-Syntax als auch die [Multi-Schlüsselwort-Syntax](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, wobei die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird das gültige Fallback nicht durch die neue CSS überschrieben, da der Browser es als ungültig ansieht.

Die Art und Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#fehler_in_at-regeln) wird je nach At-Regel und Art des Fehlers entweder eine einzelne Zeile oder die gesamte At-Regel ignoriert (fehlt).
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, wodurch mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder -wert ist](#fehler_innerhalb_von_css-deklarationsblöcken), wie z. B. ein nicht erkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert.
- Wenn der [Fehler durch eine fehlende schließende Klammer verursacht wird](#fehler_mit_automatisch_geschlossenen_enden), hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu analysieren.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt auf Übereinstimmung mit der erwarteten [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht mit der erwarteten Grammatik für diese Konstruktion übereinstimmt, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### Fehler in At-Regeln

Das `@`-Symbol, bekannt in CSS-Spezifikationen als `<at-keyword-token>`, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts als ungültig vom Parser angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zum Prelude der At-Regel. Der Inhalt jeder At-Regel wird entsprechend den Grammatikregeln für diese spezifische At-Regel interpretiert.

Anweisungs-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, enthalten nur ein Prelude. Das Semikolon beendet die At-Regel sofort für [Anweisungs-At-Regeln](/de/docs/Web/CSS/At-rule#statement_at-rules). Wenn der Inhalt des Prelude entsprechend der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser weiter CSS analysiert, nachdem er das nächste Semikolon trifft. Wenn zum Beispiel eine `@import`-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen steht, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser auf eine geschweifte Klammer (`{`) stößt, bevor ein Semikolon gefunden wird, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, der von geschweiften Klammern (`{}`) umgeben ist. Die öffnende geschweifte Klammer zeigt dem Browser, wo das Prelude der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht vorwärts nach passenden Blöcken (Inhalt, der von `()`, `{}` oder `[]` umgeben ist), bis er eine schließende geschweifte Klammer (`}`) ohne zugeordnete weitere geschweifte Klammern findet: Dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, verschiedene (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was gegebenenfalls die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung von ungültigem Inhalt hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer davon fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht zugehörigen Deskriptors, eines anderen gültigen Font-Deskriptors mit ungültigem Wert oder einer Eigenschaftsdeclation innerhalb des verschachtelten Blocks der `@font-face`-Regel wird die Schrifterklärung nicht ungültig machen. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird immer noch geparst.

Während die Grammatik der `@keyframe`-Regel sehr unterschiedlich von der Grammatik der `@font-face`-Regel ist, wirkt sich die Art des Fehlers immer noch darauf aus, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere in demselben Keyframe-Selektorblock deklarierte Stile. Ein ungültiger Keyframe-Selektor (wie ein Prozentwert kleiner als `0 %` oder größer als `100 %` oder eine {{cssxref("number")}}, der das `%`-Symbol weglässt) macht die Keyframe-Selektorliste ungültig und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframe`-Deklaration ungültig. Wenn jedoch Stile zwischen zwei Keyframe-Selektorblöcken eingefügt werden, wird die gesamte `@keyframe`-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-Regel gibt es in regulären und verschachtelten Formen. Die `@layer`-Anweisungssyntax enthält nur das Prelude, das mit einem Semikolon endet. Alternativ hat die verschachtelte Syntax Layer-Stile zwischen geschweiften Klammern, die nach dem Prelude kommen. Das Weglassen einer schließenden geschweiften Klammer mag ein Logikfehler sein, ist aber kein Syntaxfehler. Im Fall einer fehlenden geschweiften Klammer in `@layer` werden alle Stile, die nach der Stelle der fehlenden geschweiften Klammer kommen, als Teil der Definitionskaskadenschicht im Prelude der Regel geparst. Das CSS ist gültig, da keine Syntaxfehler vorliegen; nichts wird verworfen. Ein Syntaxfehler könnte dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen können, aber nur ungültige Selektoren führen dazu, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen-")}}, {{cssxref("id_selectors", "ID-")}} oder {{cssxref("type_selectors", "Typ-")}}-Selektor für eine Klasse, ID oder ein Element (oder ein benutzerdefiniertes Element) einfügen, das nicht existiert, ist das möglicherweise ein Logikfehler, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudoklasse oder einem Pseudoelement haben, könnte dies einen ungültigen Selektor erzeugen, der einen Fehler darstellt, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}}-Pseudoklasse steht (die [nachsichtige Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-Präfix-Pseudoelement](#-webkit-_exception) ist, wird nur der unbekannte Selektor als nicht zutreffend ignoriert. Die Selektorliste wird nicht ungültig.

Abgesehen von diesen Ausnahmen macht ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann die schließende geschweifte Klammer und setzt das Parsen von dort aus fort.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-präfixe) vermeiden Browser die übermäßige Ungültigkeitserklärung von Selektorlisten, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem fallunabhängigen `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen kann das Pseudoelement vom Browser nicht erkannt oder unterstützt werden, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Ein unbekannter prefixed Selektor mit einer Funktionsnotierung `::-webkit-imaginary-function()` hingegen wird die gesamte Selektorliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Bei CSS-Eigenschaften und -Werten innerhalb eines Deklarationsblocks, wenn entweder die Eigenschaft oder der Wert ungültig ist, wird dieses Eigenschaft-Wert-Paar ignoriert und verworfen. Wenn ein User-Agent eine Liste von Deklarationen parst oder interpretiert, wird unbekannte Syntax an jedem Punkt nur die aktuelle Deklaration vom Browser-Parser verworfen. Danach wird das Parsen von CSS nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fortgesetzt, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht weiter, bis er auf ein Semikolon stößt, und beginnt dann das Parsen erneut:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, der das Semikolon fehlt, wird ignoriert, ebenso wie das nachfolgende Eigenschaft-Wert-Paar, da der Browser das Parsen erst nach einem Semikolon oder einer schließenden geschweiften Klammer fortsetzt. Insbesondere wird der `border-color` Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}} Wert von `100vh` ist wahrscheinlich ein Fehler, aber es ist kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die zum Selektor passen.

#### Vendor-Präfixe

Mit Vendor-Präfixen versehene Eigenschaftsnamen und -werte, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die individuellen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt das Parsen von dort aus fort.

Es kann vorkommen, dass Sie auf Legacy-CSS stoßen, das wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskaden-](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#source_order) [Erscheinungsreihenfolge-](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) Regel werden Browser alle Präfix-Deklarationen anwenden, die sie verstehen, und dann diese Werte durch die standardmäßige, nicht präfixierte Version überschreiben.

> [!NOTE]
> Vermeiden Sie es, falls möglich, präfixierte Eigenschaften oder Eigenschaftswerte zu verwenden. Wenn Sie sie verwenden müssen, deklarieren Sie die Präfix-Versionen vor der nichtpräfixierten Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Enden

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenfolge oder Kommentar noch offen ist, wird der Parser alles, was nicht geschlossen wurde, automatisch schließen.

> [!NOTE]
> Dies gilt sowohl für externe Stylesheets als auch für Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn er unvollständig ist, wird das CSS normal geparst. Zum Beispiel, wenn Sie vergessen, eine `@keyframe`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation trotzdem gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen ordnungsgemäß zu schließen, macht die Anweisungen nicht unbedingt ungültig. Dennoch sollten Sie nicht die nachsichtige Natur von CSS ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS einfacher zu lesen und zu warten und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Unvollständige Kommentare

Unvollständige Kommentare sind Logikfehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, ist der gesamte CSS-Code bis zu einem schließenden Delimiter (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, Teil des Kommentars. Während ein unvollständiger Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass das CSS nach dem öffnenden Delimiter (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber der schließende `</style>`-Tag schließt den ersten Kommentar und das `style`-Attribut schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw., überprüft der User-Agent, ob die Grammatik den Regeln für diese Deklaration entspricht. Zum Beispiel, wenn ein Eigenschaftswert den falschen Datentyp aufweist oder ein Deskriptor für die beschriebene At-Regel ungültig ist, wird der Inhalt, der nicht mit der erwarteten Grammatik übereinstimmt, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert bestimmte Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Keyword. Wenn der Wert, der einer Eigenschaft zugewiesen wird, vom falschen Typ ist, wie `background-color: 45deg`, dann ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert sind, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn diese ohne Berücksichtigung des Ortes, an dem sie konsumiert wird, auftritt.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/initial_value) oder [vererbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, möglicherweise jedoch nicht auf den erwarteten.

Lassen Sie uns ein Beispiel betrachten, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color`-Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, und die Eigenschaft vererbbar ist, wird der Wert vom Elternteil geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Initialwert verwendet. Im Fall von `background-color` ist der Eigenschaftswert nicht vererbbar, daher wird der Initialwert `transparent` verwendet.

Um das Verhalten benutzerdefinierter Eigenschaften besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den initialen Wert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Syntax](/de/docs/Web/CSS/Syntax)-Leitfaden
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)

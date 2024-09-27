---
title: CSS Fehlerbehandlung
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Wenn in CSS ein Fehler auftritt, wie beispielsweise ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer User-Agent) diesen Fehler elegant abfangen, anstatt [einen Fehler auszulösen wie in JavaScript](/de/docs/Web/JavaScript/Reference/Errors). Browser zeigen keine CSS-bezogenen Warnungen an oder geben anderweitig Hinweise darauf, dass ein Fehler in den Stilen aufgetreten ist. Sie ignorieren einfach ungültige Inhalte und parsen die nachfolgenden gültigen Stile. Dies ist eine Funktion von CSS und kein Fehler.

Dieser Leitfaden behandelt, wie CSS-[Parser](/de/docs/Glossary/parser) ungültiges CSS verwerfen.

## CSS Parser-Fehler

Wenn ein CSS-Fehler erkannt wird, ignoriert der [Parser](/de/docs/Glossary/parser) des Browsers die Zeile mit den Fehlern und verwirft den minimalen Betrag an CSS-Code, bevor er zum [Parsieren](/de/docs/Glossary/parse) des CSS wie gewohnt zurückkehrt. Die "Fehlerbehandlung" besteht einfach darin, ungültige Inhalte zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne befürchten zu müssen, dass in älteren Browsern etwas kaputtgeht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne Fehlerauslösung ermöglicht es, dass sowohl alte als auch neue Syntaxen im selben Regelset koexistieren, obwohl sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl Legacy-Einzelwert- als auch [multi-keyword syntax](/de/docs/Web/CSS/display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, zu welchem Zeitpunkt die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird die gültige Fallback-Option nicht von dem neuen CSS überschrieben, da der Browser sie als ungültig wahrnimmt.

Die Art und Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Rules](#at-rule-fehler) hängt es von der At-Rule und der Fehlerart ab, ob eine einzelne Zeile oder die gesamte At-Rule ignoriert wird.
- Wenn der [Fehler ein ungültiger Selector](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Property-Deklarationen führt zu einem ungültigen Wert, in diesem Fall werden mehrere Property-Wert-Deklarationen ignoriert.
- Wenn der [Fehler ein Property-Name oder -Wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie ein nicht erkannter Property-Name oder ungültiger Datentyp, wird die Property-Wert-Deklaration ignoriert.
- Wenn der [Fehler auf einem fehlenden Endklammer](#fehler_bei_automatischen_schließungen) basiert, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Rule usw., überprüft der Browser den geparsten Inhalt im Hinblick auf seine erwartete [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Rule-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, kennzeichnet den Beginn einer CSS-{{cssxref("at-rule")}}. Sobald eine At-Rule mit dem `@`-Symbol beginnt, wird alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) als Teil der Präambel der At-Rule betrachtet. Der Inhalt jeder At-Rule wird gemäß der Grammatikregeln für diese spezielle At-Rule interpretiert.

Deklarations-At-Rules, wie {{cssxref("@import")}} und {{cssxref("@namespace")}} Deklarationen, enthalten nur eine Präambel. Das Semikolon beendet die At-Rule sofort für [Deklarations-At-Rules](/de/docs/Web/CSS/At-rule#statement_at-rules). Wenn der Inhalt der Präambel gemäß der Grammatik für diese At-Rule ungültig ist, wird die At-Rule ignoriert, wobei der Browser die CSS-Analyse nach dem nächsten Semikolon fortsetzt. Zum Beispiel, wenn eine `@import` At-Rule nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import` Anweisungen auftritt, wird die `@import` Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser auf eine geschweifte Klammer (`{`) stößt, bevor ein Semikolon gefunden wird, wird die At-Rule als Block-At-Rule geparst. [Block-At-Rules](/de/docs/Web/CSS/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, umgeben von geschweiften Klammern (`{}`). Die öffnende geschweifte Klammer zeigt dem Browser an, wo die Präambel der At-Rule endet und der Körper der At-Rule beginnt. Der Parser schaut nach vorne, sucht nach passenden Blöcken (Inhalte, die von `()`, `{}`, oder `[]` umgeben sind), bis er eine schließende geschweifte Klammer (`}`) findet, die von keiner anderen geschweiften Klammer umschlossen wird: Dies schließt den Körper der At-Rule ab.

Verschiedene At-Rules haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was möglicherweise die gesamte At-Rule ungültig macht. Die erwartete Grammatik für [jede At-Rule](/de/docs/Web/CSS/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Rule-Seite dokumentiert. Die Behandlung von ungültigen Inhalten hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face` Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src) Deskriptor. Wenn einer von beiden fehlt oder ungültig ist, ist die gesamte `@font-face` Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptors, eines anderen gültigen Font-Deskriptors mit einem ungültigen Wert oder einer Property-Stildeklaration innerhalb des `@font-face` verschachtelten Blocks macht die Font-Deklaration nicht ungültig. Solange der Font-Name und die Font-Quelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Rule ignoriert, aber der `@font-face` Block wird dennoch geparst.

Obwohl die Grammatik der `@keyframe` At-Rule sehr unterschiedlich zur `@font-face` Regelgrammatik ist, wirkt sich die Art des Fehlers dennoch darauf aus, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit dem {{cssxref("important")}} Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, beeinträchtigen jedoch nicht andere Stile, die im gleichen Keyframe-Selector-Block deklariert sind. Wenn ein ungültiger Keyframe-Selector (wie ein Prozentsatzwert kleiner als `0%` oder größer als `100%` oder eine {{cssxref("number")}} ohne `%`) hinzugefügt wird, wird die Keyframe-Selector-Liste ungültig und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selector macht nur den ungültigen Selector-Stilblock ungültig; er macht nicht die gesamte `@keyframe` Deklaration ungültig. Das Hinzufügen von Stilen zwischen zwei Keyframe-Selector-Blöcken hingegen macht die gesamte `@keyframe` At-Rule ungültig.

Einige At-Rules sind nahezu immer gültig. Die {{cssxref("@layer")}} At-Rule gibt es in sowohl regulären als auch verschachtelten Formen. Die `@layer` Anweisungssyntax enthält nur die Präambel und endet mit einem Semikolon. Alternativ hat die verschachtelte Syntax Layer-Stile, die zwischen geschweiften Klammern nach der Präambel verschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer kann ein Logikfehler, aber kein Syntaxfehler sein. Im Fall einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer hätte sein sollen, als Teil der im Präambel definierten Kaskadenschicht geparst. Das CSS ist gültig, da keine Syntaxfehler vorhanden sind; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie man einen Fehler beim Schreiben eines Selectors machen kann, aber nur ungültige Selektoren verursachen eine ungültige Selektorliste (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen-")}}, {{cssxref("id_selectors", "ID-")}}, oder {{cssxref("type_selectors", "Typ-")}}-Selector für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einschließen, das nicht existiert, kann es sich um einen Logikfehler handeln, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte dies einen ungültigen Selector erzeugen, was ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selector innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudo-Klasse ist (die [fehlertolerante Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selector ein [`-webkit-`-Präfix-Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selector ignoriert, indem er nichts trifft. Die Selektorliste wird nicht ungültig.

Außerhalb dieser Ausnahmen wird eine einzelne ungültige oder nicht unterstützte Selector in der Selektorliste die gesamte Regel ungültig machen und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen von diesem Punkt an fort.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#vendor-präfixe) vermeiden Browser die übermäßige Ungültigmachung von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem case-insensitive `-webkit-` Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen kann das Pseudo-Element vom Browser nicht erkannt oder unterstützt werden, aber es wird nicht dazu führen, dass die gesamte Selektorliste und ihr zugehöriger Stilblock ignoriert werden. Ein unbekannter, präfixierter Selektor mit einer Funktionsnotation von `::-webkit-imaginary-function()` wird hingegen die gesamte Selektorliste ungültig machen und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks geht, wird jedes Eigenschaft-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein User Agent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax zu jedem Punkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Er setzt das Parsen von CSS erst nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fort, je nachdem, was zuerst auftritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht nach vorne, bis er auf ein Semikolon trifft, und beginnt dann erneut zu parsen:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selectorblock ungültig ist, ist das fehlende Semikolon und die Tatsache, dass die Deklaration nicht die letzte im Selectorblock ist. Die Eigenschaft ohne Semikolon wird ignoriert, ebenso wie das darauf folgende Eigenschaft-Wert-Paar, weil der Browser das Parsen erst nach einem Semikolon oder einer schließenden Klammer fortsetzt. Konkret wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}} Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Fehler im Sinne der Syntax. Da er syntaktisch gültig ist, wird er parsbar sein und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Eigenschaftsnamen und Eigenschaftswerte mit Vendor-Präfixen werden als ungültig behandelt und ignoriert, wenn sie von einem Browser nicht verstanden werden. Nur die einzelnen Regeln mit einer ungültigen Eigenschaft oder einem ungültigen Wert werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt das Parsen ab diesem Punkt fort.

Man kann auf altes CSS stoßen, das wie folgt aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#source_order) [Reihenfolge des Auftretens](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) Regel, werden Browser alle Präfix-Deklarationen anwenden, die sie verstehen, und dann diese Werte mit der standardmäßigen unpräfixierten Version überschreiben.

> [!NOTE]
> Vermeiden Sie, wo möglich, die Verwendung von präfixierten Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der unpräfixierten Version, wie oben gezeigt.

### Fehler bei automatischen Schließungen

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder ein Kommentar noch geöffnet ist, schließt der Parser automatisch alles, was offen geblieben ist.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML {{HTMLElement("style")}} Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style) Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn er unvollständig ist, wird das CSS normal geparst. Beispielsweise, wenn Sie eine `@keyframe` Deklaration nicht schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation immer noch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translatex(100vw)
</style>
```

Hier ist die `move` Animation gültig. Das ordnungsgemäße Schließen von CSS-Deklarationen führt nicht unbedingt dazu, dass die Deklarationen ungültig werden. Dennoch: Nutzen Sie nicht die nachsichtige Natur von CSS aus. Schließen Sie immer alle Ihre Deklarationen und Stilblöcke. Es macht Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Nicht geschlossene Kommentare

Nicht geschlossene Kommentare sind Logikfehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, wird der gesamte CSS-Code bis zu einem schließenden Trennzeichen (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst auftritt, als Teil des Kommentars betrachtet. Obwohl ein nicht geschlossener Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass das CSS nach dem öffnenden Trennzeichen (`/*`) ignoriert wird.

```html example-bad
<style>
  /* this comment is not closed
  @keyframes move {
    0% {transform: translatex(0);}
    100% {transform: translatex(100vw);}
  }
</style>
<p style="/* another unclosed comment">Parsed as HTML.</p>
```

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributs schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Rule usw., überprüft der User Agent, ob die Grammatik den Regeln für diese Deklaration entspricht. Wenn beispielsweise ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor für die beschriebene At-Rule nicht gültig ist, wird der Inhalt, der nicht mit der erwarteten Grammatik übereinstimmt, als ungültig betrachtet und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}} Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein globales CSS-Schlüsselwort. Wenn der einer Eigenschaft zugewiesene Wert vom falschen Typ ist, wie beispielsweise `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. sie können als Wert (über die {{cssxref("var")}} Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, sobald er sie antrifft, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete Werte benutzerdefinierter Eigenschaften funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert, und der [initiale](/de/docs/Web/CSS/initial_value) oder [vererbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, jedoch möglicherweise nicht den erwarteten.

Werfen wir einen Blick auf ein Beispiel, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color` Deklaration ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color` Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color` Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird der Wert, falls die Eigenschaft vererbbar ist, von ihrem Elternteil geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standardanfangswert verwendet. Im Fall von `background-color` ist der Eigenschaftswert nicht vererbbar, daher wird der Anfangswert `transparent` verwendet.

Um besser zu kontrollieren, wie benutzerdefinierte Eigenschaften zurückfallen, verwenden Sie die {{cssxref("@property")}} At-Rule, um den Anfangswert der Eigenschaft zu definieren:

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

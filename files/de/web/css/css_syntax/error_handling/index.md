---
title: CSS-Fehlerbehandlung
short-title: Error handling
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Wenn in CSS ein Fehler vorliegt, wie z.B. ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) sich anstelle des [Werfens eines Fehlers wie in JavaScript](/de/docs/Web/JavaScript/Reference/Errors) angemessen erholen. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen auf andere Weise an, dass Fehler in den Styles aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und parsen die nachfolgenden gültigen Styles. Dies ist ein Feature von CSS, kein Fehler.

Dieser Leitfaden behandelt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parserfehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft die minimale Menge an CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsieren")}} des CSS zurückkehrt. Die "Fehlerbehandlung" besteht nur darin, ungültige Inhalte zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne befürchten zu müssen, dass etwas in älteren Browsern kaputt geht. Ein Browser erkennt möglicherweise ein neues Feature nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne das Werfen eines Fehlers ermöglicht es, dass alte und neue Syntaxformen im selben Regelset koexistieren, wobei zu beachten ist, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl eine einzelne Legacy-Wert-Syntax als auch die [Multi-Keyword-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, an welchem Punkt die neue Syntax die alte überschreiben wird. Wenn ein Benutzer einen alten Browser hat, wird die gültige Rückfallebene nicht durch das neue CSS überschrieben, da der Browser es als ungültig wahrnimmt.

Der Typ und die Menge des CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlerarten sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird (fehlschlägt).
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen verursacht einen ungültigen Wert, wobei in diesem Fall mehrere Eigenschafts-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder Wert ist](#fehler_innerhalb_von_css-deklarationsblöcken), wie z.B. ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert.
- Wenn der [Fehler aufgrund einer fehlenden schließenden Klammer](#fehler_mit_automatisch_geschlossenen_enden) auftritt, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt gegen die erwartete [Grammatik](#grammatikprüfung) für diese Struktur. Wenn der Inhalt nicht der erwarteten Grammatik für diese Struktur entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, weist auf den Beginn einer CSS-{{cssxref("At-Regel")}} hin. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts aus der Sicht des Parsers als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil des Vorspiels der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese bestimmte At-Regel interpretiert.

Statement-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen, enthalten nur ein Vorspiel. Das Semikolon beendet die At-Regel sofort für [Statement-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Wenn der Inhalt des Vorspiels gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser mit dem Parsen des CSS fortfährt, nachdem das nächste Semikolon auftritt. Beispielsweise wird eine `@import`-At-Regel ignoriert, wenn sie nach einer CSS-Deklaration außer `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url("http://www.w3.org/2000/svg");
```

Wenn der Parser auf eine geschweifte Klammer (`{`) stößt, bevor ein Semikolon auftritt, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, die von geschweiften Klammern (`{}`) umgeben sind. Die öffnende geschweifte Klammer informiert den Browser, wo das Vorspiel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht nach dem nächsten passenden Block (Inhalt, der von `()`, `{}` oder `[]` umgeben ist), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern geschlossen wird: Dies schließt den Körper der At-Regel.

Unterschiedliche At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was die gesamte At-Regel ungültig machen kann. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und die Handhabung von Fehlern sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Handhabung ungültiger Inhalte hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer dieser Deskriptoren fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptors, eines anderen gültigen Schriftdeskriptors mit ungültigem Wert oder einer Style-Deklaration innerhalb des `@font-face`-verschachtelten Blocks macht die Schriftdeklaration nicht ungültig. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframes`-At-Regel sich stark von der Grammatik der `@font-face`-Regel unterscheidet, beeinflusst der Fehlertyp immer noch, was ignoriert wird. Wichtige Deklarationen (markiert mit dem {{cssxref("important")}}-Flag) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere Stile, die im selben Keyframe-Selektorblock deklariert sind. Das Einbeziehen eines ungültigen Keyframe-Selektors (wie eines Prozentwertes kleiner als `0%` oder größer als `100%` oder einer {{cssxref("number")}}, die das `%` weglässt) macht die Keyframe-Selektorliste ungültig, und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den ungültigen Selektor-Stilblock ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Einfügen von Styles zwischen zwei Keyframe-Selektorblöcken hingegen macht die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regulärer als auch in verschachtelter Form. Die `@layer`-Anweisungssyntax enthält nur das Vorspiel und endet mit einem Semikolon. Alternativ hat die verschachtelte Syntax Ebenenstile, die nach dem Vorspiel zwischen geschweiften Klammern verschachtelt sind. Das Auslassen einer schließenden geschweiften Klammer kann ein Logikfehler sein, ist aber kein Syntaxfehler. Bei einer fehlenden schließenden Klammer in `@layer` werden alle folgenden Stile so geparst, als ob sie in der Kaskadenebene des At-Regel-Vorspiels definiert sind. Das CSS ist gültig, da keine Syntaxfehler vorliegen; es wird nichts verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Ebene leer ist, aber die Ebene wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie man beim Schreiben eines Selektors Fehler machen kann, aber nur ungültige Selektoren machen eine Selektorliste ungültig (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen-")}}, {{cssxref("id_selectors", "ID-")}} oder {{cssxref("type_selectors", "Typ-")}}-Selektor für eine Klasse, ID oder ein Element (oder ein benutzerdefiniertes Element) einschließen, das nicht existiert, könnte es ein Logikfehler, aber kein Syntaxfehler sein. Wenn Sie jedoch einen Tippfehler in einer Pseudoklasse oder einem Pseudoelement haben, könnte dies einen ungültigen Selektor erzeugen, der ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudoklasse ist (die [nachsichtige Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudoelement](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts trifft. Die Selektorliste wird nicht ungültig gemacht.

Außerhalb dieser Ausnahmen macht ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen von dort aus fort.

#### `-webkit-`-Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#vendor-präfixe), verhindern Browser eine übermäßige Ungültigmachung von Selektorlisten, indem sie alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit einem groß-/kleinschreibungsunabhängigen `-webkit-` Präfix beginnen und nicht mit `()` enden, als gültig behandeln.

Dies bedeutet, dass ein Pseudoelement wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudoelement möglicherweise vom Browser nicht anerkannt oder unterstützt, aber es führt nicht dazu, dass die gesamte Selektorliste und ihr zugeordneter Stilblock ignoriert werden. Andererseits macht ein unbekannter präfigierter Selektor mit einer Funktionsnotation wie `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig, und der Browser ignoriert den gesamten Selektorblock.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und Werte innerhalb eines Deklarationsblocks geht, wird jedes Eigenschafts-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax zu jedem Zeitpunkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Dann setzt er das Parsen von CSS nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fort, je nachdem, was zuerst auftritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis ein Semikolon gefunden wird, und startet dann das Parsen neu:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte in dem Selektorblock ist. Die Eigenschaft mit dem fehlenden Semikolon wird ignoriert, ebenso wie das folgende Eigenschafts-Wert-Paar, weil der Browser erst dann weiter parst, wenn ein Semikolon oder eine schließende Klammer gefunden wird. Insbesondere wird der Wert `border-color` als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der Wert {{cssxref("border-width")}} von `100vh` ist vermutlich ein Fehler, aber kein Fehler im Sinne von CSS. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Vendorspezifische Eigenschaftsnamen und eigenschaftswerte, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt dann das Parsen von dort aus fort.

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskaden]-[Reihenfolge des Erscheinens](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) Regel anwenden, Browser werden alle präfigierten Deklarationen anwenden, die sie verstehen, und dann diese Werte mit der standardmäßigen ungefürtelten Version übersteuern.

> [!NOTE]
> Vermeiden Sie es möglichst, präfixierte Eigenschaften oder Eigenschaftswerte einzuschließen. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der ungefürtelten Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenen Enden

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder ein Kommentar noch offen ist, wird der Parser automatisch alles schließen, was nicht geschlossen wurde.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn er unvollständig ist, wird das CSS normal geparst. Zum Beispiel, wenn Sie es versäumen, eine `@keyframes`-Deklaration zu schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen korrekt zu schließen, macht die Anweisungen nicht unbedingt ungültig. Trotzdem sollten Sie nicht die nachsichtige Natur von CSS ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Style-Blöcke. Dadurch wird Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS so parst wie beabsichtigt.

#### Unabgeschlossene Kommentare

Unabgeschlossene Kommentare sind Logikfehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht abgeschlossen wird, gehört der gesamte CSS-Code bis zu einem Abschluss-Delimiter (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem was zuerst eintritt, zum Kommentar. Während ein unabgeschlossener Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass das CSS nach dem öffnenden Delimiter (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das Schlusszeichen des `style`-Attributs schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration folgt. Zum Beispiel, wenn ein Eigenschaftswert von falschem Datentyp ist oder ein Deskriptor nicht für die beschriebene At-Regel gültig ist, wird der Inhalt, der nicht mit der erwarteten Grammatik übereinstimmt, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Beispielsweise akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder eine gültige {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Schlüsselwort. Wenn der zugewiesene Wert einer Eigenschaft vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie angetroffen wird, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn ein `var()`-Ersatz ungültig ist, wird die Deklaration nicht ignoriert und der [initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, möglicherweise jedoch nicht den erwarteten.

Schauen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

In dem obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Die `background-color`-Deklaration ist auch bei der Berechnung gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft der falsche Typ ist, wenn die Eigenschaft vererbbar ist, wird der Wert von ihrem Elternelement übernommen. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Initialwert verwendet. Im Fall von `background-color` ist der Eigenschaftswert nicht vererbbar, daher wird der Initialwert `transparent` verwendet.

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
- [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

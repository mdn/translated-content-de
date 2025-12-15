---
title: Fehlerbehandlung in CSS
short-title: Error handling
slug: Web/CSS/Guides/Syntax/Error_handling
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Wenn ein Fehler im CSS vorliegt, wie ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder eine andere Benutzeragentur) nicht wie bei [JavaScript Fehler werfen](/de/docs/Web/JavaScript/Reference/Errors), sondern sich anmutig erholen. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen an, dass in Stilvorlagen Fehler aufgetreten sind. Sie verwerfen einfach ungültige Inhalte und parsen nachfolgende gültige Stile. Dies ist ein Merkmal von CSS, kein Fehler.

Dieser Leitfaden erläutert, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile, die die Fehler enthält, und verwirft die minimale Menge an CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsing")}} von CSS zurückkehrt. Die "Fehlerbehebung" besteht lediglich darin, ungültigen Inhalt zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne sich Sorgen machen zu müssen, dass etwas in älteren Browsern kaputtgeht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültiger Inhalte ohne Fehler zu werfen, ermöglicht es, dass sowohl alte als auch neue Syntax in derselben Regelmenge koexistieren können, obwohl zu beachten ist, dass sie in dieser Reihenfolge angegeben werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte einwertige Syntax als auch die [Multi-Keywort-Syntax](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, an welchem Punkt die neue Syntax die alte überschreibt. Wenn ein Benutzer einen alten Browser hat, wird die gültige Fallback-Option nicht durch das neue CSS überschrieben, da der Browser es als ungültig ansieht.

Der Typ und die Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt vom Fehlertyp ab. Einige häufige Fehlersituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) wird je nach At-Regel und Art des Fehlers entweder eine einzelne Zeile oder die gesamte At-Regel ignoriert (fehlschlägt).
- Wenn der [Fehler ein ungültiger Selektor ist](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_in_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, in diesem Fall werden mehrere Eigenschaft-Wert-Deklarationen ignoriert.
- Wenn der [Fehler ein Eigenschaftsname oder -wert](#fehler_in_css-deklarationsblöcken) ist, wie ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert. Während der [Filterstufe](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#filtering) werden solche syntaktisch ungültigen Deklarationen eliminiert.
- Wenn der [Fehler auf ein fehlendes End-Klammer zurückzuführen ist](#fehler_bei_automatisch_geschlossenen_endungen), hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu analysieren.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt gegen seine erwartete [Grammatik](#grammatik-check) für diese Struktur. Wenn der Inhalt nicht mit der erwarteten Grammatik für diese Struktur übereinstimmt, wird dieser vom Browser als ungültig betrachtet und ignoriert.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, deutet den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird nichts vom Standpunkt des Parsers als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) gehört zum Vorspiel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese bestimmte At-Regel interpretiert.

Anweisungs-At-Regeln, wie {{cssxref("@import")}} und {{cssxref("@namespace")}} Deklarationen, enthalten nur ein Vorspiel. Das Semikolon beendet die At-Regel sofort für [Anweisungs-At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules#statement_at-rules). Wenn der Inhalt des Vorspiels gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, wobei der Browser das CSS nach dem nächsten Semikolon weiter parst. Wenn zum Beispiel eine `@import`-At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url("http://www.w3.org/2000/svg");
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon antrifft, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen umgeben von geschweiften Klammern (`{}`). Die öffnende geschweifte Klammer informiert den Browser, wo das Vorspiel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser schaut vorwärts und sucht nach passenden Blöcken (Inhalt umgeben von `()`, `{}`, oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die nicht von anderen geschweiften Klammern umschlossen ist: Dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und verschiedene Regeln dafür, was, wenn überhaupt, die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung ungültiger Inhalte hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family)- als auch einen [`src`](/de/docs/Web/CSS/Reference/At-rules/@font-face/src)-Deskriptor. Wenn einer von diesen fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Einfügen eines nicht zusammenhängenden Deskriptors, eines anderen gültigen Schriften-Deskriptors mit einem ungültigen Wert oder einer Eigenschaftsdeklaration innerhalb des verschachtelten `@font-face`-Blocks macht die Schriftdeklaration nicht ungültig. Solange der Schriftname und die Schriftquelle enthalten und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframes`-At-Regel sich sehr von der Grammatikregel der `@font-face`-Regel unterscheidet, beeinflusst der Fehlertyp weiterhin, was ignoriert wird. Wichtige Deklarationen (mit dem {{cssxref("important")}}-Flag markiert) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, beeinflussen aber nicht andere in demselben Keyframe-Selektorblock deklarierte Stile. Das Einfügen eines ungültigen Keyframe-Selektors (wie eines Prozentwerts kleiner als `0%` oder größer als `100%`, oder einer {{cssxref("number")}} ohne `%`) macht die Keyframe-Selektorliste ungültig, wodurch der Stilblock ignoriert wird. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Einfügen von Stilen zwischen zwei Keyframe-Selektorblöcken jedoch macht die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regulären als auch in verschachtelten Formen. Die `@layer`-Anweisungssyntax enthält nur das Vorspiel, das mit einem Semikolon endet. Alternativ hat die verschachtelte Syntax Schichtstile, die zwischen geschweiften Klammern nach dem Vorspiel verschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer kann ein Logikfehler sein, ist aber kein Syntaxfehler. Im Fall einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach dem Punkt, wo die schließende Klammer hätte sein sollen, stehen, als im Kaskadenschicht definiert im Vorspiel der At-Regel geparst. Das CSS ist gültig, da keine Syntaxfehler vorhanden sind; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen können, aber nur ungültige Selektoren machen eine Selektorliste ungültig (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen-")}}, {{cssxref("id_selectors", "ID-")}}, oder {{cssxref("type_selectors", "Typ-")}} Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) aufnehmen, das nicht existiert, kann dies ein Logikfehler sein, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte dies einen ungültigen Selektor erstellen, der ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudo-Klasse ist (die [vergebende Selektorlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) akzeptieren) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor als nicht übereinstimmend ignoriert. Die Selektorliste wird dadurch nicht ungültig.

Außerhalb dieser Ausnahmen führt ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste dazu, dass die gesamte Regel ungültig wird und der gesamte Selektorblock ignoriert wird. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsing ab diesem Punkt fort.

#### `-webkit-` Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Gebrauch von browser-spezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und -werten)](#vendor-präfixe) vermeiden Browser übermäßige Ungültigkeitserklärungen von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) mit einem case-insensitiven `-webkit-` Präfix, die nicht mit `()` enden, als gültig behandeln.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen kann das Pseudo-Element möglicherweise nicht von dem Browser erkannt oder unterstützt werden, aber es führt nicht dazu, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Ein unbekannter präfixierter Selektor mit einer Funktionsnotation wie `::-webkit-imaginary-function()` dagegen macht die gesamte Selektorliste ungültig, und der Browser ignoriert den gesamten Selektorblock.

### Fehler in CSS-Deklarationsblöcken

Bei CSS-Eigenschaften und -Werten innerhalb eines Deklarationsblocks wird, wenn entweder die Eigenschaft oder der Wert ungültig ist, dieses Eigenschaft-Wert-Paar ignoriert und verworfen. Wenn eine Benutzeragentur eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an einem beliebigen Punkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Er setzt das Parsing von CSS erst nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fort, je nachdem, was zuerst eintritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht nach vorne, bis er ein Semikolon findet, und beginnt dann erneut mit dem Parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft, der das Semikolon fehlt, wird ignoriert, ebenso wie das folgende Eigenschaft-Wert-Paar, weil der Browser erst nach einem Semikolon oder einer schließenden Klammer mit dem Parsen fortfährt. Insbesondere wird der `border-color` Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber kein Fehler im Sinne der Syntax. Da er syntaktisch gültig ist, wird er geparst und auf die mit dem Selektor übereinstimmenden Elemente angewendet.

#### Vendor-Präfixe

Vendor-präfixierte Eigenschaftsnamen und -werte, wenn sie von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die individuellen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt dann das Parsing von dort fort.

Sie könnten auf ältere CSS stoßen, die folgendermaßen aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadierregel](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [der Erscheinungsreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) wenden Browser alle von ihnen verstandenen, präfixierten Deklarationen an und überschreiben diese Werte dann mit der Standardversion ohne Präfix.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Aufnahme präfixierter Eigenschaften oder Eigenschaftswerte. Wenn Sie sie verwenden müssen, deklarieren Sie die Versionen mit Präfix vor der Version ohne Präfix, wie oben gezeigt.

### Fehler bei automatisch geschlossenen Endungen

Wenn ein Stylesheet endet, während eine Regel, eine Deklaration, eine Funktion, ein String oder ein Kommentar noch offen ist, schließt der Parser automatisch alles, was offen geblieben ist.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn unvollständig, wird das CSS normal geparst. Wenn Sie zum Beispiel eine `@keyframes`-Deklaration nicht schließen, bevor Sie Ihre {{htmlelement("style")}} schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das ordnungsgemäße Schließen von CSS-Anweisungen nicht zwingend erforderlich, um die Anweisungen gültig zu machen. Das gesagt, nutzen Sie nicht die nachsichtige Natur von CSS aus. Schließen Sie immer all Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS lesbarer und wartbarer und stellt sicher, dass der Browser das CSS wie beabsichtigt parst.

#### Nicht geschlossene Kommentare

Nicht geschlossene Kommentare sind Logikfehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, ist der gesamte CSS-Code bis zu einem schließenden Begrenzer (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst eintritt, Teil des Kommentars. Während ein nicht geschlossener Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass das CSS nach dem öffnenden Begrenzer (`/*`) ignoriert wird.

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

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber der schließende `</style>`-Tag schließt den ersten Kommentar und das Schlusszeichen des `style`-Attribut schließt den zweiten Kommentar.

## Grammatik-Check

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft die Benutzeragentur, ob die Grammatik den Regeln für diese Deklaration folgt. Zum Beispiel, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, werden die Inhalte, die nicht mit der erwarteten Grammatik übereinstimmen, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein CSS-Globalschlüsselwort. Wenn der zu einer Eigenschaft zugewiesene Wert vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erstellen, wenn sie verwendet werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, sobald sie angetroffen wird, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird, wenn ein Eigenschaftswert ungültig ist, die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültig berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Ersetzung ungültig ist, wird die Deklaration nicht ignoriert und der [anfängliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, möglicherweise jedoch nicht auf den erwarteten.

Schauen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Auch die `background-color`-Deklaration ist zur Berechnungszeit gültig. Wenn der Browser die benutzerdefinierte Eigenschaft in `var(--theme-color)` jedoch mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft den falschen Typ hat, wird, falls die Eigenschaft vererbbar ist, der Wert vom übergeordneten Element geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Anfangswert verwendet. Im Fall von `background-color` ist der Eigenschaftswert kein vererbter Wert, daher wird der Standard-Anfangswert von `transparent` verwendet.

Um die Art und Weise besser zu kontrollieren, wie benutzerdefinierte Eigenschaften zurückfallen, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Anfangswert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)-Modul
- [Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)-Leitfaden
- [Wertdefinition-Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

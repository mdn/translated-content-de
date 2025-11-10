---
title: CSS-Fehlerbehandlung
short-title: Error handling
slug: Web/CSS/Guides/Syntax/Error_handling
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Wenn ein Fehler in CSS auftritt, wie zum Beispiel ein ungültiger Wert oder ein fehlendes Semikolon, wird der Browser (oder ein anderer Benutzeragent) nicht wie bei [einem Fehler in JavaScript](/de/docs/Web/JavaScript/Reference/Errors) einen Fehler auslösen, sondern sich anmutig erholen. Browser geben keine CSS-bezogenen Warnungen aus und zeigen auch anderweitig keine Fehler in den Styles an. Sie verwerfen einfach ungültigen Inhalt und parsen nachfolgende gültige Styles. Dies ist eine Funktion von CSS, kein Fehler.

Dieser Leitfaden beschreibt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft den minimalen Anteil an CSS-Code, bevor er das CSS wie gewohnt weiter {{Glossary("parse", "parst")}}. Die "Fehlerbehebung" besteht einfach darin, dass ungültiger Inhalt ignoriert oder übersprungen wird.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne befürchten zu müssen, dass etwas in älteren Browsern kaputt geht. Ein Browser erkennt möglicherweise ein neues Feature nicht, aber das ist in Ordnung. Das Verwerfen von ungültigem Inhalt ohne Fehlerauslösung ermöglicht das Nebeneinander von alten und neuen Syntaxen im selben Regelset, obwohl sie in dieser Reihenfolge spezifiziert werden sollten. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte Einwerte-Syntax als auch die [Multi-Keyword-Syntax](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax). Browser werden die alte Syntax rendern, bis sie die neue Syntax als gültig erkennen; zu diesem Zeitpunkt wird die neue Syntax die alte überschreiben. Wenn ein Nutzer einen alten Browser hat, wird der gültige Fallback nicht durch das neue CSS überschrieben, da der Browser es als ungültig betrachtet.

Die Art und Menge des CSS, das ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehlsituationen sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert (verworfen) wird.
- Wenn ein [Fehler ein ungültiger Selektor ist](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen verursacht einen ungültigen Wert, in welchem Fall mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler ein Eigenschaftsname oder Wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie z. B. ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschaft-Wert-Deklaration ignoriert. Während der [Filterung](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#filtering) werden solche syntaktisch ungültigen Deklarationen eliminiert.
- Wenn der [Fehler aufgrund einer fehlenden Endklammer](#fehler_bei_automatisch_geschlossenen_enden) auftritt, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt auf Übereinstimmung mit dem erwarteten [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für dieses Konstrukt entspricht, betrachtet ihn der Browser als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als ein `<at-keyword-token>` bekannt ist, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird aus Sicht des Parsers nichts als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil der Präambel der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese bestimmte At-Regel interpretiert.

Anweisungs-At-Regeln, wie {{cssxref("@import")}}- und {{cssxref("@namespace")}}-Deklarationen, enthalten nur eine Präambel. Das Semikolon beendet die At-Regel sofort für [Anweisungs-At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules#statement_at-rules). Wenn der Inhalt der Präambel gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert und der Browser parst das CSS danach weiter, sobald das nächste Semikolon angetroffen wird. Zum Beispiel, wenn eine `@import`-At-Regel nach einer beliebigen CSS-Deklaration außer `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url("http://www.w3.org/2000/svg");
```

Wenn der Parser eine geschweifte Klammer (`{`) vor einem Semikolon antrifft, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, die von geschweiften Klammern (`{}`) umgeben sind. Die öffnende geschweifte Klammer informiert den Browser darüber, wo die Präambel der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht vorwärts und sucht nach passenden Blöcken (Inhalte umgeben von `()`, `{}`, oder `[]`) bis er eine schließende geschweifte Klammer (`}`) findet, die nicht durch andere geschweifte Klammern ergänzt wird: dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, verschiedene (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung ungültigen Inhalts hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/Reference/At-rules/@font-face/src)-Deskriptor. Wenn einer von beiden fehlt oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptors, eines anderen gültigen Schriftart-Deskriptors mit einem ungültigen Wert oder einer Eigenschafts-Deklaration innerhalb des `@font-face`-verschachtelten Blocks macht die Schriftart-Deklaration nicht ungültig. Solange der Schriftname und die Schriftquelle eingeschlossen und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich zur `@font-face`-Regel ist, beeinflusst die Art des Fehlers dennoch, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit der {{cssxref("important")}}-Flagge) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, sie beeinflussen jedoch nicht andere in demselben Keyframe-Selektorblock erklärte Stile. Das Einfügen eines ungültigen Keyframe-Selektors (z.B. eines Prozentwertes kleiner als `0%` oder größer als `100%`, oder einer {{cssxref("number")}} ohne `%`) macht die Keyframe-Selektorliste ungültig und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Hinzufügen von Stilen zwischen zwei Keyframe-Selektorblöcken macht hingegen die gesamte `@keyframes`-At-Regel ungültig.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel kommt sowohl in üblichen als auch in verschachtelten Formen vor. Die `@layer`-Anweisungssyntax enthält nur die Präambel und endet mit einem Semikolon. Alternativ hat die verschachtelte Syntax Schichtstile, die nach der Präambel zwischen geschweiften Klammern verschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler sein, ist jedoch kein Syntaxfehler. Im Fall einer fehlenden abschließenden Klammer bei `@layer` werden alle danach kommenden Stile durch das in der At-Regel-Präambel definierte Kaskadenschicht geparst. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer bleibt, aber die Schicht wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen können, aber nur ungültige Selektoren verursachen eine ungültige Selektorliste (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "Klassen")}}, {{cssxref("id_selectors", "ID")}} oder {{cssxref("type_selectors", "Typ")}}-Selektor für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element) einfügen, das nicht existiert, könnte es sich um einen logischen Fehler handeln, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte dies einen ungültigen Selektor erzeugen, der ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, dann wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor sich innerhalb einer {{cssxref(":is")}} oder {{cssxref(":where")}} Pseudo-Klasse befindet (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) akzeptiert) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts entspricht. Die Selektorliste wird nicht ungültig gemacht.

Abgesehen von diesen Ausnahmen wird ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig machen und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und fährt ab diesem Punkt fort.

#### `-webkit-` Ausnahme

Aufgrund von Kompatibilitätsproblemen durch die übermäßige Nutzung von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#vendor-präfixe) vermeiden Browser übermäßige Ungültigkeitserklärungen von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), die mit einem case-insensitiven `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig betrachten.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig machen wird, unabhängig davon, in welchem Browser der Code läuft. In solchen Fällen könnte das Pseudo-Element nicht vom Browser erkannt oder unterstützt werden, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Andererseits wird ein unbekannter präfixierter Selektor mit einer Funktionsnotation wie `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig machen und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks geht, werden entweder die Eigenschaft oder der Wert ungültig, wird dieses Eigenschafts-Wert-Paar ignoriert und verworfen. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an irgendeinem Punkt dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Er fährt dann mit dem Parsen des CSS nach dem nächsten Semikolon oder der schließenden geschweiften Klammer fort, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er ein Semikolon findet, und beginnt dann erneut mit dem Parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Selektorblock ist. Die Eigenschaft ohne das Semikolon wird ignoriert, ebenso wie das darauf folgende Eigenschaft-Wert-Paar, weil der Browser erst nach einem Semikolon oder einer schließenden Klammer mit dem Parsen fortfährt. Insbesondere wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber er ist kein Fehler. Da er syntaktisch gültig ist, wird er geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Von einem Browser nicht verstandene vendor-präfixierte Eigenschaftsnamen und Eigenschaftswerte werden als ungültig behandelt und ignoriert. Nur die einzelnen Regeln mit einer ungültigen Eigenschaft oder einem ungültigen Wert werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und fährt dann mit dem Parsen von dort fort.

Sie könnten auf alte CSS stoßen, die folgendermaßen aussieht:

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

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskaden-](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [Reihenfolge des Erscheinens](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) Regel, werden Browser alle prefixed Deklarationen anwenden, die sie verstehen, und dann diese Werte mit der Standard-ungepräfixten Version überschreiben.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Aufnahme von prefixed Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der nicht präfixierten Version, wie oben gezeigt.

### Fehler bei automatisch geschlossenen Enden

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder Kommentar noch geöffnet ist, schließt der Parser automatisch alles, was offen geblieben ist.

> [!NOTE]
> Dies gilt sowohl für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements als auch für Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig, auch wenn unvollständig ist, wird das CSS normal geparst. Zum Beispiel, wenn Sie eine `@keyframes` Deklaration nicht richtig schließen, bevor Sie Ihr {{htmlelement("style")}} schließen, ist die Animation trotzdem gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Nicht-Schließen von CSS-Anweisungen macht die Anweisungen nicht unbedingt ungültig. Das gesagt, nutzen Sie nicht die verzeihende Natur von CSS aus. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS einfacher zu lesen und zu pflegen und stellt sicher, dass der Browser das CSS wie beabsichtigt parst.

#### Ungeschlossene Kommentare

Ungeschlossene Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen ist, wird aller CSS-Code bis zu einem schließenden Delimiter (`*/`) in einem folgenden Kommentar oder dem Ende des Stylesheets, was auch immer zuerst kommt, Teil des Kommentars. Während ein ungeschlossener Kommentar Ihr CSS nicht ungültig macht, führt er dazu, dass das CSS nach dem öffnenden Delimiter (`/*`) ignoriert wird.

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

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw., überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration entspricht. Zum Beispiel, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig betrachtet und ignoriert.

Jede CSS-Eigenschaft akzeptiert bestimmte Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder einen gültigen {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Keyword. Wenn der Wert, der einer Eigenschaft zugewiesen wird, vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig betrachtet, wenn sie deklariert werden, aber sie können ungültiges CSS erzeugen, wenn sie aufgerufen werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Wertetyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie angetroffen wird, ohne Rücksicht darauf, wo die Eigenschaft verbraucht wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch leicht anders.

Wenn ein `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, aber möglicherweise nicht den erwarteten.

Betrachten wir ein Beispiel zur Veranschaulichung dieses Verhaltens:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die Deklaration der benutzerdefinierten Eigenschaft gültig. Die `background-color`-Deklaration ist auch zum Berechnungszeitpunkt gültig. Wenn jedoch der Browser die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird, falls die Eigenschaft vererbt werden kann, der Wert vom übergeordneten Element vererbt. Wenn die Eigenschaft nicht vererbt wird, wird der standardmäßige Initialwert verwendet. Im Fall von `background-color` ist der Eigenschaftswert nicht ein geerbter Wert, sodass der Anfangswert von `transparent` verwendet wird.

Um den Rückgriff von benutzerdefinierten Eigenschaften besser zu steuern, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Initialwert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Leitfaden
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
